import { Component, Fragment, renderToString, useState } from "@wordpress/element";
import { Modal, Popover, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  applyFormat,
  create,
  insert,
  insertObject,
  registerFormatType,
  useAnchor,
} from "@wordpress/rich-text";
import {
  BlockControls,
  RichTextToolbarButton,
  useBlockProps,
} from "@wordpress/block-editor";
import get from "lodash/get";
import kebabCase from "lodash/kebabCase";
import { faBrandIcon } from "./icons";
import { GLOBAL_KEY } from "../../admin/src/constants";
import { iconDefinitionFromIconChooserSelectionEvent, normalizeIconDefinition } from './iconDefinitions'
import createCustomEvent from './createCustomEvent'
import { renderIcon } from './rendering'
import { default as IconModifier, ANIMATIONS } from './iconModifier'
import { toIconDefinition } from './iconDefinitions'
export const ZERO_WIDTH_SPACE = '\u200b';
const FONT_AWESOME_RICH_TEXT_ICON_CLASS = 'wp-font-awesome-rich-text-icon';
export const FONT_AWESOME_RICH_TEXT_ICON_TAG_NAME = 'span';

const { IconChooserModal } = get(window, [GLOBAL_KEY, "iconChooser"], {});

const name = "font-awesome/rich-text-icon";
const title = __("Font Awesome Icon");

const settings = {
  name,
  title,
  keywords: [__("icon"), __("awesome")],
  tagName: FONT_AWESOME_RICH_TEXT_ICON_TAG_NAME,
  className: FONT_AWESOME_RICH_TEXT_ICON_CLASS,
  contentEditable: false,
  edit: Edit
};

registerFormatType(name, settings);

const modalOpenEvent = createCustomEvent()

function isFocused(value) {
  if (!Array.isArray(value.replacements) || !Number.isInteger(value.start)) {
    return false;
  }
  const replacement = value.replacements[value.start];
  return replacement?.type === name;
}

// This does not quite yet handle layers. It returns attributes with
// an `iconLayers` property, but it doesn't yet read icon layers out of the HTML,
// so that iconLayers array will always have a length of 1.
function deriveAttributes(value) {
  if(!Number.isFinite(value?.start)) return
  const replacement = value?.replacements[value.start]
  const el = document.createElement('span')
  el.innerHTML = replacement.innerHTML
  const svg = el.querySelector('svg')
  if(!svg) return

  const viewBox = svg.getAttribute('viewBox')
  const prefix = svg.getAttribute('data-prefix')
  const iconName = svg.getAttribute('data-icon')
  const paths = svg.querySelectorAll('path')

  let primaryPath, secondaryPath

  if(paths.length < 1) return

  if (paths[0].classList.contains('fa-secondary')) {
    secondaryPath = paths[0].getAttribute('d')
  } else {
    primaryPath = paths[0].getAttribute('d')
  }

  if(paths.length > 1) {
    if (paths[1].classList.contains('fa-secondary')) {
      secondaryPath = paths[1].getAttribute('d')
    } else {
      primaryPath = paths[1].getAttribute('d')
    }
  }

  let width, height;

  if('string' === typeof viewBox) {
    const viewBoxProps = viewBox.split(/\W/)
    width = Number.parseFloat(viewBoxProps[2])
    height = Number.parseFloat(viewBoxProps[3])
  }

  if(!Number.isFinite(width) || !Number.isFinite(height)) {
    return
  }

  const pathData = []

  if(secondaryPath) {
    pathData.push(secondaryPath)
  }

  if(primaryPath) {
    pathData.push(primaryPath)
  }

  const iconDefinition = toIconDefinition({iconName, prefix, width, height, pathData})

  if(!iconDefinition) return

  const iconLayer = {iconDefinition}

  const color = svg.getAttribute('color')

  if(color) {
    iconLayer.color = color
  }

  for(const animation of ANIMATIONS) {
    const animationClass = `fa-${kebabCase(animation)}`
    if(svg.classList.contains(animationClass)){
      iconLayer[animation] = true
    }
  }

  return {iconLayers: [iconLayer]}
}

function InlineUI( { value, onChange, contentRef, handleSelect, attributes, setAttributesAndChangeValue } ) {
	const popoverAnchor = useAnchor( {
		editableContentElement: contentRef.current,
		settings
	} );

	const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  return (
    <Popover
      placement="bottom"
      focusOnMount={false}
      anchor={popoverAnchor}
      className="block-editor-format-toolbar__font-awesome-rich-text-icon-popover"
    >
      <div>
        <button onClick={() => document.dispatchEvent(modalOpenEvent)}>
          Change Icon
        </button>
        <button onClick={() => setIsEditModalOpen(true)}>
          Add Styling
        </button>

        {attributes && isEditModalOpen && (
          <Modal
            title="Add Icon Styling"
            onRequestClose={() => setIsEditModalOpen(false)}
            className={`fawp-icon-styling-modal`}
          >
            <IconModifier
              attributes={attributes}
              setAttributes={setAttributesAndChangeValue}
              IconChooserModal={IconChooserModal}
              prepareHandleSelect={() => handleSelect}
            />
          </Modal>
        )}
      </div>
    </Popover>
  );
}

function Edit(props) {
  const { value, onChange, contentRef } = props;

  const isFormatIconFocused = isFocused(value);
  const [attributes, setAttributes] = useState(isFormatIconFocused ? deriveAttributes(value) : {})

  /*
   * Deriving attributes:
   *
   * - color: color attr on svg
   * - size: will it be fa-4x? or the power transforms? probably power transforms.
   * - rotation: will it be fa-rotate? or power transforms?
   * - flip: will it be fa-flip-vertical or power transforms?
   * - animations: each class corresonds to a boolean.
   */

  const handleFormatButtonClick = () => {
    document.dispatchEvent(modalOpenEvent);
  };

  const setAttributesAndChangeValue = (attributes) => {
    setAttributes(attributes)

    const element = renderIcon(attributes, {
      wrapperElement: 'span',
      extraProps: {
        wrapperProps: {
          className: FONT_AWESOME_RICH_TEXT_ICON_CLASS
        }
      }
    })
    const html = renderToString(element)

    let iconValue = create({ html });

    // Use `insertObject()` on an empty value merely for the side effect of
    // producing the text value corresponding to an object.
    //
    // This is sort of bending over backwards to avoid hardcoding an implementation
    // detail of the block editor.
    //
    // We can see in the Gutenberg source code (as of WordPress 6.5) that the text
    // inserted by `insertObject()` is just a single character: U+FFFC, the object
    // replacement character.
    //
    // However, that implementation is not documented as part of the public API.
    // So it might change at any time. So let's not hardcode it here.
    // (In fact, if memory serves, it used to be a different special character.)
    //
    // This technique produces whatever text is used for object replacement,
    // which might be more than one character, using `insertObject()`.
    // Since `insertObject()` *is* part of the RichText API, this ought to continue
    // working even if the implementation details change underneath.
    const emptyValue = create({ text: "" });
    const objectValue = insertObject(emptyValue, {});

    // The object replacement text indicates where the icon should be rendered,
    // replacing that object replacement text. Without it, no SVG would be rendered.
    //
    // The zero-width space allows the insert caret to move around the icon
    // in a normal intuitive way, such as when moving across it with arrow keys.
    // It also allows for placing the caret at the end of the rich text value
    // when an icon SVG is at the end, and then backspacing to delete the icon.
    const zeroWidthSpaceIndex = iconValue.text.length;
    iconValue = insert(
      iconValue,
      ZERO_WIDTH_SPACE,
      zeroWidthSpaceIndex,
      zeroWidthSpaceIndex,
    );

    // Now that we've extended the value's text by a single character, we need to
    // fix up the replacements so that our object replacement format
    // is present at every index in the value that corresponds to the text that should
    // be replaced by our icon object.
    //
    // If we don't do this fixup, then we end up with misalignment of the object
    // replacement text and its corresponding replacement format in the resulting value.
    // This works fine when there's only one rich text icon in the value. But once
    // you add a second, or more, you get off-by-one errors, or worse.
    //
    // For example, suppose the `iconValue.text` ends up being two characters long, total,
    // with the first character being the object replacement character, and the second
    // being the zero width space. That works fine for the first icon insertion.
    // Suppose that first icon is inserted so that the replacement format and
    // the object replacement character are both at index 2. Then the zero width space
    // we add will be at index 3. No problem.
    //
    // Now suppose you add a second icon value later in the value, at index 7.
    // The object replacement character will end up at index 8, but the replacement
    // format object would be placed at index 7--off by one.
    //
    // The result is that the second icon will not render, because the block editor doesn't
    // find that the object replacement character's index corresponds to the index of
    // our replacmeent format.
    //
    // The solution is to make sure that our replacement format covers exactly the same
    // indices of content that correspond to the text being inserted.
    const replacement = iconValue.replacements[0];
    iconValue.replacements[iconValue.replacements.length - 1] = replacement;

    const newValue = insert(value, iconValue);
    onChange(newValue);
  }

  const handleSelect = (event) => {
    if (!event?.detail) return;
    event.preventDefault();

    const iconDefinition = iconDefinitionFromIconChooserSelectionEvent(event);

    if (!iconDefinition) return;

    const attributes = {
      iconLayers: [{ iconDefinition }],
    };

    setAttributesAndChangeValue(attributes)
  };

  return (
    <Fragment>
      <RichTextToolbarButton
        icon={faBrandIcon}
        title={title}
        onClick={handleFormatButtonClick}
      />
      <IconChooserModal onSubmit={handleSelect} openEvent={modalOpenEvent} />
      {isFormatIconFocused && (
        <InlineUI
          value={value}
          onChange={onChange}
          contentRef={contentRef}
          handleSelect={handleSelect}
          attributes={attributes}
          setAttributesAndChangeValue={setAttributesAndChangeValue}
        />
      )}
    </Fragment>
  );
}
