import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

export function computeIconLayerCount(attributes) {
  return Array.isArray(attributes.iconLayers)
    ? attributes.iconLayers.length
    : 0;
}

export function prepareParamsForUseBlock(attributes) {
  const iconLayerCount = computeIconLayerCount(attributes);

  return {
    className: classnames({
      "fa-layers": iconLayerCount > 1,
    }),
  };
}

export function renderIcon(attributes, extraProps = {}) {
  const {wrapperProps, classNamesByLayer} = extraProps

  return (
    <span {...(wrapperProps || {})}>
      {attributes.iconLayers.map((layer, index) => {
        const { iconDefinition, rotation: initialRotation, ...rest } = layer;
        let className = (classNamesByLayer || [])[index]
        let rotation
        const style = {}

        if([0,90,180,270].includes(initialRotation)) {
          rotation = initialRotation
        } else if (!Number.isNaN(parseInt(initialRotation))) {
          className = classnames(className ? className.toString() : '', 'fa-rotate-by')
          style['--fa-rotate-angle'] = `${initialRotation}deg`
        }

        return (
          <FontAwesomeIcon
            key={index}
            className={className}
            style={style}
            icon={iconDefinition}
            rotation={rotation}
            {...rest}
          />
        );
      })}
    </span>
  );
}
