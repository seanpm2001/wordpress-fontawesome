(window.webpackJsonp_font_awesome_admin=window.webpackJsonp_font_awesome_admin||[]).push([[12],{177:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return ze})),n.d(t,"e",(function(){return de})),n.d(t,"f",(function(){return P})),n.d(t,"g",(function(){return $e})),n.d(t,"h",(function(){return M})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return Ue})),n.d(t,"k",(function(){return f}));const o={allRenderFn:!0,appendChildSlotFix:!1,asyncLoading:!0,asyncQueue:!1,attachStyles:!0,cloneNodeFix:!1,cmpDidLoad:!1,cmpDidRender:!1,cmpDidUnload:!1,cmpDidUpdate:!1,cmpShouldUpdate:!1,cmpWillLoad:!0,cmpWillRender:!1,cmpWillUpdate:!1,connectedCallback:!1,constructableCSS:!0,cssAnnotations:!0,cssVarShim:!1,devTools:!1,disconnectedCallback:!1,dynamicImportShim:!1,element:!1,event:!0,hasRenderFn:!0,hostListener:!1,hostListenerTarget:!1,hostListenerTargetBody:!1,hostListenerTargetDocument:!1,hostListenerTargetParent:!1,hostListenerTargetWindow:!1,hotModuleReplacement:!1,hydrateClientSide:!1,hydrateServerSide:!1,hydratedAttribute:!1,hydratedClass:!0,initializeNextTick:!1,isDebug:!1,isDev:!0,isTesting:!0,lazyLoad:!0,lifecycle:!0,lifecycleDOMEvents:!0,member:!0,method:!1,mode:!1,observeAttribute:!0,profile:!1,prop:!0,propBoolean:!0,propMutable:!1,propNumber:!1,propString:!0,reflect:!1,safari10:!1,scoped:!1,scriptDataOpts:!1,shadowDelegatesFocus:!1,shadowDom:!0,shadowDomShim:!1,slot:!0,slotChildNodesFix:!1,slotRelocation:!1,state:!0,style:!0,svg:!0,taskQueue:!0,transformTagName:!1,updatable:!0,vdomAttribute:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomPropOrAttr:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,vdomXlink:!0,watchCallback:!1};let s,a,l,r=0,i=!1,$=!1,d=!1,c=!1,m=null,h=0,p=!1;const f="undefined"!=typeof window?window:{},u=o.cssVarShim?f.CSS:null,g=f.document||{head:{}},y=(f.HTMLElement,{$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o),ce:(e,t)=>new CustomEvent(e,t)}),v=!o.shadowDomShim||!o.shadowDom||(()=>(g.head.attachShadow+"").indexOf("[native")>-1)(),b=(()=>{let e=!1;try{g.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),w=e=>Promise.resolve(e),S=!!o.constructableCSS&&(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),N=(e,t,n,s)=>{o.hostListener&&n&&(o.hostListenerTargetParent&&(n=s?n.filter(([e])=>32&e):n.filter(([e])=>!(32&e))),n.map(([n,s,a])=>{const l=o.hostListenerTarget?L(e,n):e,r=R(t,a),i=C(n);y.ael(l,s,r,i),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>y.rel(l,s,r,i))}))},R=(e,t)=>n=>{try{o.lazyLoad?256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n]):e.$hostElement$[t](n)}catch(e){Be(e)}},L=(e,t)=>o.hostListenerTargetDocument&&4&t?g:o.hostListenerTargetWindow&&8&t?f:o.hostListenerTargetBody&&16&t?g.body:o.hostListenerTargetParent&&32&t?e.parentElement:e,C=e=>b?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),x="http://www.w3.org/1999/xlink",k=(e,t="")=>{if(o.profile&&performance.mark){const n=`st:${e}:${t}:${r++}`;return performance.mark(n),()=>performance.measure(`[Stencil] ${e}() <${t}>`,n)}return()=>{}},T=new WeakMap,D=(e,t,n)=>{let o=Ke.get(e);S&&n?(o=o||new CSSStyleSheet,o.replace(t)):o=t,Ke.set(e,o)},E=(e,t,n,s)=>{let a=O(t,n),l=Ke.get(a);if(!o.attachStyles)return a;if(e=11===e.nodeType?e:g,l)if("string"==typeof l){e=e.head||e;let n,r=T.get(e);if(r||T.set(e,r=new Set),!r.has(a)){if(o.hydrateClientSide&&e.host&&(n=e.querySelector(`[sty-id="${a}"]`)))n.innerHTML=l;else{if(o.cssVarShim&&y.$cssShim$){n=y.$cssShim$.createHostStyle(s,a,l,!!(10&t.$flags$));const e=n["s-sc"];e&&(a=e,r=null)}else n=g.createElement("style"),n.innerHTML=l;(o.hydrateServerSide||o.hotModuleReplacement)&&n.setAttribute("sty-id",a),e.insertBefore(n,e.querySelector("link"))}r&&r.add(a)}}else o.constructableCSS&&!e.adoptedStyleSheets.includes(l)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return a},O=(e,t)=>"sc-"+(o.mode&&t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),A={},j=e=>"object"==(e=typeof e)||"function"===e,M=(e,t,...n)=>{let s=null,a=null,l=null,r=!1,i=!1,$=[];const d=t=>{for(let n=0;n<t.length;n++)s=t[n],Array.isArray(s)?d(s):null!=s&&"boolean"!=typeof s&&((r="function"!=typeof e&&!j(s))?s=String(s):o.isDev&&"function"!=typeof e&&void 0===s.$flags$&&We("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."),r&&i?$[$.length-1].$text$+=s:$.push(r?z(null,s):s),i=r)};if(d(n),t&&(o.isDev&&"input"===e&&B(t),o.vdomKey&&t.key&&(a=t.key),o.slotRelocation&&t.name&&(l=t.name),o.vdomClass)){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}if(o.isDev&&$.some(I)&&We("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),o.vdomFunctional&&"function"==typeof e)return e(null===t?{}:t,$,U);const c=z(e,null);return c.$attrs$=t,$.length>0&&(c.$children$=$),o.vdomKey&&(c.$key$=a),o.slotRelocation&&(c.$name$=l),c},z=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return o.vdomAttribute&&(n.$attrs$=null),o.vdomKey&&(n.$key$=null),o.slotRelocation&&(n.$name$=null),n},P={},I=e=>e&&e.$tag$===P,U={forEach:(e,t)=>e.map(_).forEach(t),map:(e,t)=>e.map(_).map(t).map(F)},_=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),F=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),M(e.vtag,t,...e.vchildren||[])}const t=z(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},B=e=>{const t=Object.keys(e),n=t.indexOf("type"),o=t.indexOf("min"),s=t.indexOf("max"),a=t.indexOf("min"),l=t.indexOf("value");-1!==l&&(l<n||l<o||l<s||l<a)&&Ve('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},H=(e,t,n,s,a,l)=>{if(n!==s){let r=Fe(e,t),i=t.toLowerCase();if(o.vdomClass&&"class"===t){const t=e.classList,o=V(n),a=V(s);t.remove(...o.filter(e=>e&&!a.includes(e))),t.add(...a.filter(e=>e&&!o.includes(e)))}else if(o.vdomStyle&&"style"===t){if(o.updatable)for(const t in n)s&&null!=s[t]||(!o.hydrateServerSide&&t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(!o.hydrateServerSide&&t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if(o.vdomKey&&"key"===t);else if(o.vdomRef&&"ref"===t)s&&s(e);else if(!o.vdomListener||(o.lazyLoad?r:e.__lookupSetter__(t))||"o"!==t[0]||"n"!==t[1]){if(o.vdomPropOrAttr){const $=j(s);if((r||$&&null!==s)&&!a)try{if(e.tagName.includes("-"))e[t]=s;else{let o=null==s?"":s;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let d=!1;o.vdomXlink&&i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,d=!0),null==s||!1===s?!1===s&&""!==e.getAttribute(t)||(o.vdomXlink&&d?e.removeAttributeNS(x,t):e.removeAttribute(t)):(!r||4&l||a)&&!$&&(s=!0===s?"":s,o.vdomXlink&&d?e.setAttributeNS(x,t,s):e.setAttribute(t,s))}}else t="-"===t[2]?t.slice(3):Fe(f,i)?i.slice(2):i[2]+t.slice(3),n&&y.rel(e,t,n,!1),s&&y.ael(e,t,s,!1)}},W=/\s/,V=e=>e?e.split(W):[],Q=(e,t,n,s)=>{const a=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||A,r=t.$attrs$||A;if(o.updatable)for(s in l)s in r||H(a,s,l[s],void 0,n,t.$flags$);for(s in r)H(a,s,l[s],r[s],n,t.$flags$)},q=(e,t,n,r)=>{let $,m,h,p=t.$children$[n],f=0;if(o.slotRelocation&&!i&&(d=!0,"slot"===p.$tag$&&(s&&r.classList.add(s+"-s"),p.$flags$|=p.$children$?2:1)),o.isDev&&p.$elm$&&We(`The JSX ${null!==p.$text$?`"${p.$text$}" text`:`"${p.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`),o.vdomText&&null!==p.$text$)$=p.$elm$=g.createTextNode(p.$text$);else if(o.slotRelocation&&1&p.$flags$)$=p.$elm$=o.isDebug||o.hydrateServerSide?re(p):g.createTextNode("");else{if(o.svg&&!c&&(c="svg"===p.$tag$),$=p.$elm$=o.svg?g.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",o.slotRelocation&&2&p.$flags$?"slot-fb":p.$tag$):g.createElement(o.slotRelocation&&2&p.$flags$?"slot-fb":p.$tag$),o.svg&&c&&"foreignObject"===p.$tag$&&(c=!1),o.vdomAttribute&&Q(null,p,c),(o.shadowDom||o.scoped)&&null!=s&&$["s-si"]!==s&&$.classList.add($["s-si"]=s),p.$children$)for(f=0;f<p.$children$.length;++f)m=q(e,p,f,$),m&&$.appendChild(m);o.svg&&("svg"===p.$tag$?c=!1:"foreignObject"===$.tagName&&(c=!0))}return o.slotRelocation&&($["s-hn"]=l,3&p.$flags$&&($["s-sr"]=!0,$["s-cr"]=a,$["s-sn"]=p.$name$||"",h=e&&e.$children$&&e.$children$[n],h&&h.$tag$===p.$tag$&&e.$elm$&&K(e.$elm$,!1))),$},K=(e,t)=>{y.$flags$|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const o=n[e];o["s-hn"]!==l&&o["s-ol"]&&(Z(o).insertBefore(o,Y(o)),o["s-ol"].remove(),o["s-ol"]=void 0,d=!0),t&&K(o,t)}y.$flags$&=-2},X=(e,t,n,s,a,r)=>{let i,$=o.slotRelocation&&e["s-cr"]&&e["s-cr"].parentNode||e;for(o.shadowDom&&$.shadowRoot&&$.tagName===l&&($=$.shadowRoot);a<=r;++a)s[a]&&(i=q(null,n,a,e),i&&(s[a].$elm$=i,$.insertBefore(i,o.slotRelocation?Y(t):t)))},J=(e,t,n,s,a)=>{for(;t<=n;++t)(s=e[t])&&(a=s.$elm$,ae(s),o.slotRelocation&&($=!0,a["s-ol"]?a["s-ol"].remove():K(a,!0)),a.remove())},G=(e,t)=>e.$tag$===t.$tag$&&(o.slotRelocation&&"slot"===e.$tag$?e.$name$===t.$name$:!o.vdomKey||e.$key$===t.$key$),Y=e=>e&&e["s-ol"]||e,Z=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,ee=(e,t)=>{const n=t.$elm$=e.$elm$,s=e.$children$,a=t.$children$,l=t.$tag$,r=t.$text$;let i;o.vdomText&&null!==r?o.vdomText&&o.slotRelocation&&(i=n["s-cr"])?i.parentNode.textContent=r:o.vdomText&&e.$text$!==r&&(n.data=r):(o.svg&&(c="svg"===l||"foreignObject"!==l&&c),(o.vdomAttribute||o.reflect)&&(o.slot&&"slot"===l||Q(e,t,c)),o.updatable&&null!==s&&null!==a?((e,t,n,s)=>{let a,l,r=0,i=0,$=0,d=0,c=t.length-1,m=t[0],h=t[c],p=s.length-1,f=s[0],u=s[p];for(;r<=c&&i<=p;)if(null==m)m=t[++r];else if(null==h)h=t[--c];else if(null==f)f=s[++i];else if(null==u)u=s[--p];else if(G(m,f))ee(m,f),m=t[++r],f=s[++i];else if(G(h,u))ee(h,u),h=t[--c],u=s[--p];else if(G(m,u))!o.slotRelocation||"slot"!==m.$tag$&&"slot"!==u.$tag$||K(m.$elm$.parentNode,!1),ee(m,u),e.insertBefore(m.$elm$,h.$elm$.nextSibling),m=t[++r],u=s[--p];else if(G(h,f))!o.slotRelocation||"slot"!==m.$tag$&&"slot"!==u.$tag$||K(h.$elm$.parentNode,!1),ee(h,f),e.insertBefore(h.$elm$,m.$elm$),h=t[--c],f=s[++i];else{if($=-1,o.vdomKey)for(d=r;d<=c;++d)if(t[d]&&null!==t[d].$key$&&t[d].$key$===f.$key$){$=d;break}o.vdomKey&&$>=0?(l=t[$],l.$tag$!==f.$tag$?a=q(t&&t[i],n,$,e):(ee(l,f),t[$]=void 0,a=l.$elm$),f=s[++i]):(a=q(t&&t[i],n,i,e),f=s[++i]),a&&(o.slotRelocation?Z(m.$elm$).insertBefore(a,Y(m.$elm$)):m.$elm$.parentNode.insertBefore(a,m.$elm$))}r>c?X(e,null==s[p+1]?null:s[p+1].$elm$,n,s,i,p):o.updatable&&i>p&&J(t,r,c)})(n,s,t,a):null!==a?(o.updatable&&o.vdomText&&null!==e.$text$&&(n.textContent=""),X(n,null,t,a,0,a.length-1)):o.updatable&&null!==s&&J(s,0,s.length-1),o.svg&&c&&"svg"===l&&(c=!1))},te=e=>{let t,n,o,s,a,l,r=e.childNodes;for(n=0,o=r.length;n<o;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(a=t["s-sn"],t.hidden=!1,s=0;s<o;s++)if(l=r[s].nodeType,r[s]["s-hn"]!==t["s-hn"]||""!==a){if(1===l&&a===r[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===l||3===l&&""!==r[s].textContent.trim()){t.hidden=!0;break}te(t)}},ne=[],oe=e=>{let t,n,o,s,a,l,r=0,i=e.childNodes,d=i.length;for(;r<d;r++){if(t=i[r],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(o=n.parentNode.childNodes,s=t["s-sn"],l=o.length-1;l>=0;l--)n=o[l],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(se(n,s)?(a=ne.find(e=>e.$nodeToRelocate$===n),$=!0,n["s-sn"]=n["s-sn"]||s,a?a.$slotRefNode$=t:ne.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&ne.map(e=>{se(e.$nodeToRelocate$,n["s-sn"])&&(a=ne.find(e=>e.$nodeToRelocate$===n),a&&!e.$slotRefNode$&&(e.$slotRefNode$=a.$slotRefNode$))})):ne.some(e=>e.$nodeToRelocate$===n)||ne.push({$nodeToRelocate$:n}));1===t.nodeType&&oe(t)}},se=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,ae=e=>{o.vdomRef&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(ae))},le=(e,t)=>{const n=e.$hostElement$,r=e.$cmpMeta$,c=e.$vnode$||z(null,null),m=I(t)?t:M(null,null,t);if(l=n.tagName,o.isDev&&Array.isArray(t)&&t.some(I))throw new Error(`The <Host> must be the single root component.\nLooks like the render() function of "${l.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `);if(o.reflect&&r.$attrsToReflect$&&(m.$attrs$=m.$attrs$||{},r.$attrsToReflect$.map(([e,t])=>m.$attrs$[t]=n[e])),m.$tag$=null,m.$flags$|=4,e.$vnode$=m,m.$elm$=c.$elm$=o.shadowDom&&n.shadowRoot||n,(o.scoped||o.shadowDom)&&(s=n["s-sc"]),o.slotRelocation&&(a=n["s-cr"],i=v&&0!=(1&r.$flags$),$=!1),ee(c,m),o.slotRelocation){if(y.$flags$|=1,d){let e,t,n,s,a,l;oe(m.$elm$);let r=0;for(;r<ne.length;r++)e=ne[r],t=e.$nodeToRelocate$,t["s-ol"]||(n=o.isDebug||o.hydrateServerSide?ie(t):g.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<ne.length;r++)if(e=ne[r],t=e.$nodeToRelocate$,e.$slotRefNode$){for(s=e.$slotRefNode$.parentNode,a=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(l=n["s-nr"],l&&l["s-sn"]===t["s-sn"]&&s===l.parentNode&&(l=l.nextSibling,!l||!l["s-nr"])){a=l;break}(!a&&s!==t.parentNode||t.nextSibling!==a)&&t!==a&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),s.insertBefore(t,a))}else 1===t.nodeType&&(t.hidden=!0)}$&&te(m.$elm$),y.$flags$&=-2,ne.length=0}},re=e=>g.createComment(`<slot${e.$name$?' name="'+e.$name$+'"':""}> (host=${l.toLowerCase()})`),ie=e=>g.createComment("org-location for "+(e.localName?`<${e.localName}> (host=${e["s-hn"]})`:`[${e.textContent}]`)),$e=e=>o.lazyLoad?Ie(e).$hostElement$:e,de=(e,t,n)=>{const s=$e(e);return{emit:e=>(o.isDev&&!s.isConnected&&Ve(`The "${t}" event was emitted, but the dispatcher node is no longer connected to the dom.`),ce(s,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},ce=(e,t,n)=>{const o=y.ce(t,n);return e.dispatchEvent(o),o},me=(e,t)=>{o.asyncLoading&&t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))},he=(e,t)=>{if(o.taskQueue&&o.updatable&&(e.$flags$|=16),o.asyncLoading&&4&e.$flags$)return void(e.$flags$|=512);me(e,e.$ancestorComponent$);const n=()=>pe(e,t);return o.taskQueue?st(n):n()},pe=(e,t)=>{const n=e.$hostElement$,s=k("scheduleUpdate",e.$cmpMeta$.$tagName$),a=o.lazyLoad?e.$lazyInstance$:n;let l;return t?(o.lazyLoad&&o.hostListener&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(([e,t])=>ve(a,e,t)),e.$queuedListeners$=null)),we(n,"componentWillLoad"),o.cmpWillLoad&&(l=ve(a,"componentWillLoad"))):(we(n,"componentWillUpdate"),o.cmpWillUpdate&&(l=ve(a,"componentWillUpdate"))),we(n,"componentWillRender"),o.cmpWillRender&&(l=be(l,()=>ve(a,"componentWillRender"))),s(),be(l,()=>fe(e,a,t))},fe=async(e,t,n)=>{const s=e.$hostElement$,a=k("update",e.$cmpMeta$.$tagName$),l=s["s-rc"];o.style&&n&&(e=>{const t=e.$cmpMeta$,n=e.$hostElement$,s=t.$flags$,a=k("attachStyles",t.$tagName$),l=E(o.shadowDom&&v&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);(o.shadowDom||o.scoped)&&o.cssAnnotations&&10&s&&(n["s-sc"]=l,n.classList.add(l+"-h"),o.scoped&&2&s&&n.classList.add(l+"-s")),a()})(e);const r=k("render",e.$cmpMeta$.$tagName$);if(o.isDev&&(e.$flags$|=1024),o.hydrateServerSide?await ue(e,t,s):ue(e,t,s),o.cssVarShim&&y.$cssShim$&&y.$cssShim$.updateHost(s),o.isDev&&(e.$renderCount$++,e.$flags$&=-1025),o.hydrateServerSide)try{Ne(s),n&&(1&e.$cmpMeta$.$flags$?s["s-en"]="":2&e.$cmpMeta$.$flags$&&(s["s-en"]="c"))}catch(e){Be(e,s)}if(o.asyncLoading&&l&&(l.map(e=>e()),s["s-rc"]=void 0),r(),a(),o.asyncLoading){const t=s["s-p"],n=()=>ge(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}else ge(e)},ue=(e,t,n)=>{const s=!!o.allRenderFn,a=!!o.lazyLoad,l=!!o.taskQueue,r=!!o.updatable;try{if(m=t,t=(s||t.render)&&t.render(),r&&l&&(e.$flags$&=-17),(r||a)&&(e.$flags$|=2),o.hasRenderFn||o.reflect)if(o.vdomRender||o.reflect){if(o.hydrateServerSide)return Promise.resolve(t).then(t=>le(e,t));le(e,t)}else n.textContent=t}catch(t){Be(t,e.$hostElement$)}return m=null,null},ge=e=>{const t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,s=k("postUpdate",t),a=o.lazyLoad?e.$lazyInstance$:n,l=e.$ancestorComponent$;o.cmpDidRender&&(o.isDev&&(e.$flags$|=1024),ve(a,"componentDidRender"),o.isDev&&(e.$flags$&=-1025)),we(n,"componentDidRender"),64&e.$flags$?(o.cmpDidUpdate&&(o.isDev&&(e.$flags$|=1024),ve(a,"componentDidUpdate"),o.isDev&&(e.$flags$&=-1025)),we(n,"componentDidUpdate"),s()):(e.$flags$|=64,o.asyncLoading&&o.cssAnnotations&&Se(n),o.cmpDidLoad&&(o.isDev&&(e.$flags$|=2048),ve(a,"componentDidLoad"),o.isDev&&(e.$flags$&=-2049)),we(n,"componentDidLoad"),s(),o.asyncLoading&&(e.$onReadyResolve$(n),l||ye(t))),o.hotModuleReplacement&&n["s-hmr-load"]&&n["s-hmr-load"](),o.method&&o.lazyLoad&&e.$onInstanceResolve$(n),o.asyncLoading&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&ot(()=>he(e,!1)),e.$flags$&=-517)},ye=e=>{o.cssAnnotations&&Se(g.documentElement),o.asyncQueue&&(y.$flags$|=2),ot(()=>ce(f,"appload",{detail:{namespace:"fa-icon-chooser"}})),o.profile&&performance.measure&&performance.measure(`[Stencil] fa-icon-chooser initial load (by ${e})`,"st:app:start")},ve=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){Be(e)}},be=(e,t)=>e&&e.then?e.then(t):t(),we=(e,t)=>{o.lifecycleDOMEvents&&ce(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:"fa-icon-chooser"}})},Se=e=>o.hydratedClass?e.classList.add("hydrated"):o.hydratedAttribute?e.setAttribute("hydrated",""):void 0,Ne=e=>{const t=e.children;if(null!=t)for(let e=0,n=t.length;e<n;e++){const n=t[e];"function"==typeof n.connectedCallback&&n.connectedCallback(),Ne(n)}},Re=(e,t,n,s,a,l,r)=>{let i,$,d,c;if(1===l.nodeType){for(i=l.getAttribute("c-id"),i&&($=i.split("."),$[0]!==r&&"0"!==$[0]||(d={$flags$:0,$hostId$:$[0],$nodeId$:$[1],$depth$:$[2],$index$:$[3],$tag$:l.tagName.toLowerCase(),$elm$:l,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push(d),l.removeAttribute("c-id"),e.$children$||(e.$children$=[]),e.$children$[d.$index$]=d,e=d,s&&"0"===d.$depth$&&(s[d.$index$]=d.$elm$))),c=l.childNodes.length-1;c>=0;c--)Re(e,t,n,s,a,l.childNodes[c],r);if(l.shadowRoot)for(c=l.shadowRoot.childNodes.length-1;c>=0;c--)Re(e,t,n,s,a,l.shadowRoot.childNodes[c],r)}else if(8===l.nodeType)$=l.nodeValue.split("."),$[1]!==r&&"0"!==$[1]||(i=$[0],d={$flags$:0,$hostId$:$[1],$nodeId$:$[2],$depth$:$[3],$index$:$[4],$elm$:l,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===i?(d.$elm$=l.nextSibling,d.$elm$&&3===d.$elm$.nodeType&&(d.$text$=d.$elm$.textContent,t.push(d),l.remove(),e.$children$||(e.$children$=[]),e.$children$[d.$index$]=d,s&&"0"===d.$depth$&&(s[d.$index$]=d.$elm$))):d.$hostId$===r&&("s"===i?(d.$tag$="slot",$[5]?l["s-sn"]=d.$name$=$[5]:l["s-sn"]="",l["s-sr"]=!0,o.shadowDom&&s&&(d.$elm$=g.createElement(d.$tag$),d.$name$&&d.$elm$.setAttribute("name",d.$name$),l.parentNode.insertBefore(d.$elm$,l),l.remove(),"0"===d.$depth$&&(s[d.$index$]=d.$elm$)),n.push(d),e.$children$||(e.$children$=[]),e.$children$[d.$index$]=d):"r"===i&&(o.shadowDom&&s?l.remove():o.slotRelocation&&(a["s-cr"]=l,l["s-cn"]=!0))));else if(e&&"style"===e.$tag$){const t=z(null,l.textContent);t.$elm$=l,t.$index$="0",e.$children$=[t]}},Le=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)Le(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)Le(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},Ce=(e,t,n)=>{if(o.member&&t.$members$){o.watchCallback&&e.watchers&&(t.$watchers$=e.watchers);const s=Object.entries(t.$members$),a=e.prototype;if(s.map(([e,[s]])=>{(o.prop||o.state)&&(31&s||(!o.lazyLoad||2&n)&&32&s)?Object.defineProperty(a,e,{get(){return t=e,Ie(this).$instanceValues$.get(t);var t},set(a){if(o.isDev){const o=Ie(this);0==(1&n)&&0==(8&o.$flags$)&&0!=(31&s)&&0==(1024&s)&&Ve(`@Prop() "${e}" on <${t.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`)}((e,t,n,s)=>{const a=Ie(e),l=o.lazyLoad?a.$hostElement$:e,r=a.$instanceValues$.get(t),i=a.$flags$,$=o.lazyLoad?a.$lazyInstance$:l;var d,c;if(d=n,c=s.$members$[t][0],n=null==d||j(d)?d:o.propBoolean&&4&c?"false"!==d&&(""===d||!!d):o.propNumber&&2&c?parseFloat(d):o.propString&&1&c?String(d):d,!(o.lazyLoad&&8&i&&void 0!==r||n===r)&&(a.$instanceValues$.set(t,n),o.isDev&&(1024&a.$flags$?Ve(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,"\nElement",l,"\nNew value",n,"\nOld value",r):2048&a.$flags$&&Ve(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,"\nElement",l,"\nNew value",n,"\nOld value",r)),!o.lazyLoad||$)){if(o.watchCallback&&s.$watchers$&&128&i){const e=s.$watchers$[t];e&&e.map(e=>{try{$[e](n,r,t)}catch(e){Be(e,l)}})}if(o.updatable&&2==(18&i)){if(o.cmpShouldUpdate&&$.componentShouldUpdate&&!1===$.componentShouldUpdate(n,r,t))return;he(a,!1)}}})(this,e,a,t)},configurable:!0,enumerable:!0}):o.lazyLoad&&o.method&&1&n&&64&s&&Object.defineProperty(a,e,{value(...t){const n=Ie(this);return n.$onInstancePromise$.then(()=>n.$lazyInstance$[e](...t))}})}),o.observeAttribute&&(!o.lazyLoad||1&n)){const n=new Map;a.attributeChangedCallback=function(e,t,o){y.jmp(()=>{const t=n.get(e);this[t]=(null!==o||"boolean"!=typeof this[t])&&o})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,s])=>{const a=s[1]||e;return n.set(a,e),o.reflect&&512&s[0]&&t.$attrsToReflect$.push([e,a]),a})}}return e},xe=async(e,t,s,a,l)=>{if((o.lazyLoad||o.hydrateServerSide||o.style)&&0==(32&t.$flags$)){if(o.lazyLoad||o.hydrateClientSide){if(t.$flags$|=32,(l=qe(s,t,a)).then){const e=(r=`st:load:${s.$tagName$}:${t.$modeName$}`,i=`[Stencil] Load module for <${s.$tagName$}>`,o.profile&&performance.mark?(0===performance.getEntriesByName(r).length&&performance.mark(r),()=>{0===performance.getEntriesByName(i).length&&performance.measure(i,r)}):()=>{});l=await l,e()}if((o.isDev||o.isDebug)&&!l)throw new Error(`Constructor for "${s.$tagName$}#${t.$modeName$}" was not found`);o.member&&!l.isProxied&&(o.watchCallback&&(s.$watchers$=l.watchers),Ce(l,s,2),l.isProxied=!0);const e=k("createInstance",s.$tagName$);o.member&&(t.$flags$|=8);try{new l(t)}catch(e){Be(e)}o.member&&(t.$flags$&=-9),o.watchCallback&&(t.$flags$|=128),e(),ke(t.$lazyInstance$)}else l=e.constructor,t.$flags$|=160;if(o.style&&l.style){let a=l.style;o.mode&&"string"!=typeof a&&(a=a[t.$modeName$=(e=>Xe.map(t=>t(e)).find(e=>!!e))(e)],o.hydrateServerSide&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));const r=O(s,t.$modeName$);if(!Ke.has(r)){const e=k("registerStyles",s.$tagName$);!o.hydrateServerSide&&o.shadowDom&&o.shadowDomShim&&8&s.$flags$&&(a=await n.e(17).then(n.bind(null,271)).then(e=>e.scopeCss(a,r,!1))),D(r,a,!!(1&s.$flags$)),e()}}}var r,i;const $=t.$ancestorComponent$,d=()=>he(t,!0);o.asyncLoading&&$&&$["s-rc"]?$["s-rc"].push(d):d()},ke=e=>{o.lazyLoad&&o.connectedCallback&&ve(e,"connectedCallback")},Te=e=>{const t=e["s-cr"]=g.createComment(o.isDebug?`content-ref (host=${e.localName})`:"");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},De=e=>{const t=e.cloneNode;e.cloneNode=function(e){const n=this,s=!!o.shadowDom&&n.shadowRoot&&v,a=t.call(n,!!s&&e);if(o.slot&&!s&&e){let e,t,s=0,l=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;s<n.childNodes.length;s++)e=n.childNodes[s]["s-nr"],t=l.every(e=>!n.childNodes[s][e]),e&&(o.appendChildSlotFix&&a.__appendChild?a.__appendChild(e.cloneNode(!0)):a.appendChild(e.cloneNode(!0))),t&&a.appendChild(n.childNodes[s].cloneNode(!0))}return a}},Ee=e=>{e.__appendChild=e.appendChild,e.appendChild=function(e){const t=e["s-sn"]=Ae(e),n=je(this.childNodes,t);if(n){const o=Me(n,t),s=o[o.length-1];return s.parentNode.insertBefore(e,s.nextSibling)}return this.__appendChild(e)}},Oe=(e,t)=>{class n extends Array{item(e){return this[e]}}if(8&t.$flags$){const t=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get(){return this.childNodes.map(e=>1===e.nodeType)}}),Object.defineProperty(e,"childElementCount",{get:()=>e.children.length}),Object.defineProperty(e,"childNodes",{get(){const e=t.call(this);if(0==(1&y.$flags$)&&2&Ie(this).$flags$){const t=new n;for(let n=0;n<e.length;n++){const o=e[n]["s-nr"];o&&t.push(o)}return t}return n.from(e)}})}},Ae=e=>e["s-sn"]||1===e.nodeType&&e.getAttribute("slot")||"",je=(e,t)=>{let n,o=0;for(;o<e.length;o++){if(n=e[o],n["s-sr"]&&n["s-sn"]===t)return n;if(n=je(n.childNodes,t),n)return n}return null},Me=(e,t)=>{const n=[e];for(;(e=e.nextSibling)&&e["s-sn"]===t;)n.push(e);return n},ze=(e,t={})=>{o.profile&&performance.mark&&performance.mark("st:app:start"),(()=>{if(o.devTools){const e=f.stencil=f.stencil||{},t=e.inspect;e.inspect=e=>{let n=(e=>{const t=Ie(e);if(!t)return;const n=t.$flags$,o=t.$hostElement$;return{renderCount:t.$renderCount$,flags:{hasRendered:!!(2&n),hasConnected:!!(1&n),isWaitingForChildren:!!(4&n),isConstructingInstance:!!(8&n),isQueuedForUpdate:!!(16&n),hasInitializedComponent:!!(32&n),hasLoadedComponent:!!(64&n),isWatchReady:!!(128&n),isListenReady:!!(256&n),needsRerender:!!(512&n)},instanceValues:t.$instanceValues$,ancestorComponent:t.$ancestorComponent$,hostElement:o,lazyInstance:t.$lazyInstance$,vnode:t.$vnode$,modeName:t.$modeName$,onReadyPromise:t.$onReadyPromise$,onReadyResolve:t.$onReadyResolve$,onInstancePromise:t.$onInstancePromise$,onInstanceResolve:t.$onInstanceResolve$,onRenderResolve:t.$onRenderResolve$,queuedListeners:t.$queuedListeners$,rmListeners:t.$rmListeners$,"s-id":o["s-id"],"s-cr":o["s-cr"],"s-lr":o["s-lr"],"s-p":o["s-p"],"s-rc":o["s-rc"],"s-sc":o["s-sc"]}})(e);return n||"function"!=typeof t||(n=t(e)),n}}})();const n=k("bootstrapLazy"),s=[],a=t.exclude||[],l=f.customElements,r=g.head,i=r.querySelector("meta[charset]"),$=g.createElement("style"),d=[],c=g.querySelectorAll("[sty-id]");let m,h=!0,p=0;if(Object.assign(y,t),y.$resourcesUrl$=new URL(t.resourcesUrl||"./",g.baseURI).href,o.asyncQueue&&t.syncQueue&&(y.$flags$|=4),o.hydrateClientSide&&(y.$flags$|=2),o.hydrateClientSide&&o.shadowDom)for(;p<c.length;p++)D(c[p].getAttribute("sty-id"),c[p].innerHTML.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),!0);e.map(e=>e[1].map(n=>{const r={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};o.member&&(r.$members$=n[2]),o.hostListener&&(r.$listeners$=n[3]),o.reflect&&(r.$attrsToReflect$=[]),o.watchCallback&&(r.$watchers$={}),o.shadowDom&&!v&&1&r.$flags$&&(r.$flags$|=8);const i=o.transformTagName&&t.transformTagName?t.transformTagName(r.$tagName$):r.$tagName$,$=class extends HTMLElement{constructor(e){super(e),_e(e=this,r),o.shadowDom&&1&r.$flags$&&(v?o.shadowDelegatesFocus?e.attachShadow({mode:"open",delegatesFocus:!!(16&r.$flags$)}):e.attachShadow({mode:"open"}):o.hydrateServerSide||"shadowRoot"in e||(e.shadowRoot=e)),o.slotChildNodesFix&&Oe(e,r)}connectedCallback(){m&&(clearTimeout(m),m=null),h?d.push(this):y.jmp(()=>(e=>{if(0==(1&y.$flags$)){const t=Ie(e),n=t.$cmpMeta$,s=k("connectedCallback",n.$tagName$);if(o.hostListenerTargetParent&&N(e,t,n.$listeners$,!0),1&t.$flags$)N(e,t,n.$listeners$,!1),ke(t.$lazyInstance$);else{let s;if(t.$flags$|=1,o.hydrateClientSide&&(s=e.getAttribute("s-id"),s)){if(o.shadowDom&&v&&1&n.$flags$){const t=o.mode?E(e.shadowRoot,n,e.getAttribute("s-mode")):E(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}((e,t,n,s)=>{const a=k("hydrateClient",t),l=e.shadowRoot,r=[],i=o.shadowDom&&l?[]:null,$=s.$vnode$=z(t,null);y.$orgLocNodes$||Le(g.body,y.$orgLocNodes$=new Map),e["s-id"]=n,e.removeAttribute("s-id"),Re($,r,[],i,e,e,n),r.map(e=>{const n=e.$hostId$+"."+e.$nodeId$,o=y.$orgLocNodes$.get(n),s=e.$elm$;o&&v&&""===o["s-en"]&&o.parentNode.insertBefore(s,o.nextSibling),l||(s["s-hn"]=t,o&&(s["s-ol"]=o,s["s-ol"]["s-nr"]=s)),y.$orgLocNodes$.delete(n)}),o.shadowDom&&l&&i.map(e=>{e&&l.appendChild(e)}),a()})(e,n.$tagName$,s,t)}if(o.slotRelocation&&!s&&(o.hydrateServerSide||(o.slot||o.shadowDom)&&12&n.$flags$)&&Te(e),o.asyncLoading){let n=e;for(;n=n.parentNode||n.host;)if(o.hydrateClientSide&&1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){me(t,t.$ancestorComponent$=n);break}}o.prop&&o.lazyLoad&&!o.hydrateServerSide&&n.$members$&&Object.entries(n.$members$).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),o.initializeNextTick?ot(()=>xe(e,t,n)):xe(e,t,n)}s()}})(this))}disconnectedCallback(){y.jmp(()=>(e=>{if(0==(1&y.$flags$)){const t=Ie(e),n=o.lazyLoad?t.$lazyInstance$:e;o.hostListener&&t.$rmListeners$&&(t.$rmListeners$.map(e=>e()),t.$rmListeners$=void 0),o.cssVarShim&&y.$cssShim$&&y.$cssShim$.removeHost(e),o.lazyLoad&&o.disconnectedCallback&&ve(n,"disconnectedCallback"),o.cmpDidUnload&&ve(n,"componentDidUnload")}})(this))}componentOnReady(){return Ie(this).$onReadyPromise$}};o.cloneNodeFix&&De($.prototype),o.appendChildSlotFix&&Ee($.prototype),o.hotModuleReplacement&&($.prototype["s-hmr"]=function(e){((e,t,n)=>{const o=Ie(e);o.$flags$=1,e["s-hmr-load"]=()=>{delete e["s-hmr-load"]},xe(e,o,t,n)})(this,r,e)}),r.$lazyBundleId$=e[0],a.includes(i)||l.get(i)||(s.push(i),l.define(i,Ce($,r,1)))})),(o.hydratedClass||o.hydratedAttribute)&&($.innerHTML=s+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),r.insertBefore($,i?i.nextSibling:r.firstChild)),h=!1,d.length?d.map(e=>e.connectedCallback()):o.profile?y.jmp(()=>m=setTimeout(ye,30,"timeout")):y.jmp(()=>m=setTimeout(ye,30)),n()},Pe=new WeakMap,Ie=e=>Pe.get(e),Ue=(e,t)=>Pe.set(t.$lazyInstance$=e,t),_e=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return o.isDev&&(n.$renderCount$=0),o.method&&o.lazyLoad&&(n.$onInstancePromise$=new Promise(e=>n.$onInstanceResolve$=e)),o.asyncLoading&&(n.$onReadyPromise$=new Promise(e=>n.$onReadyResolve$=e),e["s-p"]=[],e["s-rc"]=[]),N(e,n,t.$listeners$,!1),Pe.set(e,n)},Fe=(e,t)=>t in e,Be=(e,t)=>(0,console.error)(e,t),He=o.isTesting?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],We=(...e)=>console.error(...He,...e),Ve=(...e)=>console.warn(...He,...e),Qe=new Map,qe=(e,t,s)=>{const a=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$;if(o.isDev&&"string"!=typeof l)return void We(`Trying to lazily load component <${e.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);const r=!o.hotModuleReplacement&&Qe.get(l);return r?r[a]:n(270)(`./${l}.entry.js${o.hotModuleReplacement&&s?"?s-hmr="+s:""}`).then(e=>(o.hotModuleReplacement||Qe.set(l,e),e[a]),Be)},Ke=new Map,Xe=[],Je=[],Ge=[],Ye=[],Ze=(e,t)=>n=>{e.push(n),p||(p=!0,t&&4&y.$flags$?ot(nt):y.raf(nt))},et=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Be(e)}e.length=0},tt=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){Be(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},nt=()=>{if(o.asyncQueue&&h++,et(Je),o.asyncQueue){const e=2==(6&y.$flags$)?performance.now()+14*Math.ceil(.1*h):1/0;tt(Ge,e),tt(Ye,e),Ge.length>0&&(Ye.push(...Ge),Ge.length=0),(p=Je.length+Ge.length+Ye.length>0)?y.raf(nt):h=0}else et(Ge),(p=Je.length>0)&&y.raf(nt)},ot=e=>w().then(e),st=Ze(Ge,!0);o.isDev,o.isTesting},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(149),s=n.n(o);const a=(e,t)=>{const n="on"+e;let o=n in t;if(!o){const e=t.createElement("div");e.setAttribute(n,"return;"),o="function"==typeof e[n]}return o},l=(e,t,n)=>{const o=e.__events||(e.__events={}),s=o[t];s&&e.removeEventListener(t,s),e.addEventListener(t,o[t]=function(e){n&&n.call(this,e)})},r=e=>{const t=new Map;return e.forEach(e=>t.set(e,e)),t},i=(...e)=>t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)});const $=(e,t,n)=>{const o=e.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),$=class extends s.a.Component{constructor(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(e){((e,t,n={})=>{if(e instanceof Element){const o=((e,t,n)=>{const o=t.className||t.class,s=n.className||n.class,a=r(e),l=r(o?o.split(" "):[]),i=r(s?s.split(" "):[]),$=[];return a.forEach(e=>{l.has(e)?($.push(e),l.delete(e)):i.has(e)||$.push(e)}),l.forEach(e=>$.push(e)),$.join(" ")})(e.classList,t,n);""!==o&&(e.className=o),Object.keys(t).forEach(n=>{if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n)if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){const o=n.substring(2),s=o[0].toLowerCase()+o.substring(1);"undefined"==typeof document||a(s,document)||l(e,s,t[n])}else e[n]=t[n],"string"==typeof t[n]?e.setAttribute(n.replace(/([A-Z])/g,e=>"-"+e[0].toLowerCase()),t[n]):e[n]=t[n]})}})(this.componentEl,this.props,e)}render(){const t=this.props,{children:o,forwardedRef:l,style:r,className:$,ref:d}=t,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]])}return n}(t,["children","forwardedRef","style","className","ref"]);let m=Object.keys(c).reduce((e,t)=>{if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const n=t.substring(2).toLowerCase();"undefined"!=typeof document&&a(n,document)&&(e[t]=c[t])}else e[t]=c[t];return e},{});n&&(m=n(this.props,m));let h=Object.assign(Object.assign({},m),{ref:i(l,this.setComponentElRef),style:r});return s.a.createElement(e,h,o)}static get displayName(){return o}};return t&&($.contextType=t),((e,t)=>{const n=(t,n)=>s.a.createElement(e,Object.assign({},t,{forwardedRef:n}));return n.displayName=t,s.a.forwardRef(n)})($,o)};var d=n(177);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(!d.a.cssVarShim||d.b&&d.b.supports&&d.b.supports("color","var(--c)")?Object(d.c)():n.e(5).then(n.t.bind(null,280,7)).then(()=>(d.i.$cssShim$=d.k.__cssshim)?d.i.$cssShim$.i():0)).then(()=>Object(d.d)([["fa-icon",[[0,"fa-icon",{name:[1],stylePrefix:[1,"style-prefix"],svgApi:[8,"svg-api"],pro:[4],iconUpload:[16],class:[1],svgFetchBaseUrl:[1,"svg-fetch-base-url"],getUrlText:[16],kitToken:[1,"kit-token"],icon:[16],size:[1],loading:[32],iconDefinition:[32]}]]],["fa-icon-chooser",[[1,"fa-icon-chooser",{kitToken:[1,"kit-token"],version:[1],searchInputPlaceholder:[1,"search-input-placeholder"],handleQuery:[16],getUrlText:[16],query:[32],isQuerying:[32],isInitialLoading:[32],hasQueried:[32],icons:[32],styleFilterEnabled:[32],styleFilters:[32],kitMetadata:[32],fatalError:[32]}]]]],void 0));const c=$("fa-icon-chooser")}}]);