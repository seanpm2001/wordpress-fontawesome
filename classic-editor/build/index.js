(()=>{var t={1549:(t,r,e)=>{var o=e(2032),n=e(3862),i=e(6721),a=e(2749),s=e(5749);function c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var o=t[r];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},79:(t,r,e)=>{var o=e(3702),n=e(80),i=e(4739),a=e(8655),s=e(1175);function c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var o=t[r];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},8223:(t,r,e)=>{var o=e(6110)(e(9325),"Map");t.exports=o},3661:(t,r,e)=>{var o=e(3040),n=e(7670),i=e(289),a=e(4509),s=e(2949);function c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var o=t[r];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},1873:(t,r,e)=>{var o=e(9325).Symbol;t.exports=o},4932:t=>{t.exports=function(t,r){for(var e=-1,o=null==t?0:t.length,n=Array(o);++e<o;)n[e]=r(t[e],e,t);return n}},6025:(t,r,e)=>{var o=e(5288);t.exports=function(t,r){for(var e=t.length;e--;)if(o(t[e][0],r))return e;return-1}},7422:(t,r,e)=>{var o=e(1769),n=e(7797);t.exports=function(t,r){for(var e=0,i=(r=o(r,t)).length;null!=t&&e<i;)t=t[n(r[e++])];return e&&e==i?t:void 0}},2552:(t,r,e)=>{var o=e(1873),n=e(659),i=e(9350),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?n(t):i(t)}},5083:(t,r,e)=>{var o=e(1882),n=e(7296),i=e(3805),a=e(7473),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,l=u.hasOwnProperty,f=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||n(t))&&(o(t)?f:s).test(a(t))}},7556:(t,r,e)=>{var o=e(1873),n=e(4932),i=e(6449),a=e(4394),s=o?o.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(r){if("string"==typeof r)return r;if(i(r))return n(r,t)+"";if(a(r))return c?c.call(r):"";var e=r+"";return"0"==e&&1/r==-1/0?"-0":e}},1769:(t,r,e)=>{var o=e(6449),n=e(8586),i=e(1802),a=e(3222);t.exports=function(t,r){return o(t)?t:n(t,r)?[t]:i(a(t))}},5481:(t,r,e)=>{var o=e(9325)["__core-js_shared__"];t.exports=o},4840:(t,r,e)=>{var o="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=o},2651:(t,r,e)=>{var o=e(4218);t.exports=function(t,r){var e=t.__data__;return o(r)?e["string"==typeof r?"string":"hash"]:e.map}},6110:(t,r,e)=>{var o=e(5083),n=e(392);t.exports=function(t,r){var e=n(t,r);return o(e)?e:void 0}},659:(t,r,e)=>{var o=e(1873),n=Object.prototype,i=n.hasOwnProperty,a=n.toString,s=o?o.toStringTag:void 0;t.exports=function(t){var r=i.call(t,s),e=t[s];try{t[s]=void 0;var o=!0}catch(t){}var n=a.call(t);return o&&(r?t[s]=e:delete t[s]),n}},392:t=>{t.exports=function(t,r){return null==t?void 0:t[r]}},2032:(t,r,e)=>{var o=e(1042);t.exports=function(){this.__data__=o?o(null):{},this.size=0}},3862:t=>{t.exports=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}},6721:(t,r,e)=>{var o=e(1042),n=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;if(o){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return n.call(r,t)?r[t]:void 0}},2749:(t,r,e)=>{var o=e(1042),n=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;return o?void 0!==r[t]:n.call(r,t)}},5749:(t,r,e)=>{var o=e(1042);t.exports=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=o&&void 0===r?"__lodash_hash_undefined__":r,this}},8586:(t,r,e)=>{var o=e(6449),n=e(4394),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,r){if(o(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!n(t))||a.test(t)||!i.test(t)||null!=r&&t in Object(r)}},4218:t=>{t.exports=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}},7296:(t,r,e)=>{var o,n=e(5481),i=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!i&&i in t}},3702:t=>{t.exports=function(){this.__data__=[],this.size=0}},80:(t,r,e)=>{var o=e(6025),n=Array.prototype.splice;t.exports=function(t){var r=this.__data__,e=o(r,t);return!(e<0||(e==r.length-1?r.pop():n.call(r,e,1),--this.size,0))}},4739:(t,r,e)=>{var o=e(6025);t.exports=function(t){var r=this.__data__,e=o(r,t);return e<0?void 0:r[e][1]}},8655:(t,r,e)=>{var o=e(6025);t.exports=function(t){return o(this.__data__,t)>-1}},1175:(t,r,e)=>{var o=e(6025);t.exports=function(t,r){var e=this.__data__,n=o(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this}},3040:(t,r,e)=>{var o=e(1549),n=e(79),i=e(8223);t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(i||n),string:new o}}},7670:(t,r,e)=>{var o=e(2651);t.exports=function(t){var r=o(this,t).delete(t);return this.size-=r?1:0,r}},289:(t,r,e)=>{var o=e(2651);t.exports=function(t){return o(this,t).get(t)}},4509:(t,r,e)=>{var o=e(2651);t.exports=function(t){return o(this,t).has(t)}},2949:(t,r,e)=>{var o=e(2651);t.exports=function(t,r){var e=o(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this}},2224:(t,r,e)=>{var o=e(104);t.exports=function(t){var r=o(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}},1042:(t,r,e)=>{var o=e(6110)(Object,"create");t.exports=o},9350:t=>{var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},9325:(t,r,e)=>{var o=e(4840),n="object"==typeof self&&self&&self.Object===Object&&self,i=o||n||Function("return this")();t.exports=i},1802:(t,r,e)=>{var o=e(2224),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=o((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(n,(function(t,e,o,n){r.push(o?n.replace(i,"$1"):e||t)})),r}));t.exports=a},7797:(t,r,e)=>{var o=e(4394);t.exports=function(t){if("string"==typeof t||o(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},7473:t=>{var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},5288:t=>{t.exports=function(t,r){return t===r||t!=t&&r!=r}},8156:(t,r,e)=>{var o=e(7422);t.exports=function(t,r,e){var n=null==t?void 0:o(t,r);return void 0===n?e:n}},6449:t=>{var r=Array.isArray;t.exports=r},1882:(t,r,e)=>{var o=e(2552),n=e(3805);t.exports=function(t){if(!n(t))return!1;var r=o(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},3805:t=>{t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},346:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},4394:(t,r,e)=>{var o=e(2552),n=e(346);t.exports=function(t){return"symbol"==typeof t||n(t)&&"[object Symbol]"==o(t)}},104:(t,r,e)=>{var o=e(3661);function n(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var o=arguments,n=r?r.apply(this,o):o[0],i=e.cache;if(i.has(n))return i.get(n);var a=t.apply(this,o);return e.cache=i.set(n,a)||i,a};return e.cache=new(n.Cache||o),e}n.Cache=o,t.exports=n},3222:(t,r,e)=>{var o=e(7556);t.exports=function(t){return null==t?"":o(t)}},5338:(t,r,e)=>{"use strict";var o=e(5795);r.H=o.createRoot,o.hydrateRoot},5795:t=>{"use strict";t.exports=window.ReactDOM}},r={};function e(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";const t=window.React;var r=e(5338),o=e(8156),n=e.n(o);const{IconChooserModal:i}=n()(window,["__FontAwesomeOfficialPlugin__","iconChooser"],{}),a=new Event("classicEditorFontAwesomeIconChooserOpen",{bubbles:!0,cancelable:!1}),s=()=>{document.dispatchEvent(a)};function c(t){const r=n()(window,"wp.media.editor.insert");r&&r(function(t){const r=[];if(!t.iconName)return void console.error("Font Awesome Icon Chooser: missing required iconName attribute for shortcode");r.push(`name="${t.iconName}"`);const e=["prefix","style","class","aria-hidden","aria-label","aria-labelledby","title","role"];for(const o of e){const e=n()(t,o);e&&r.push(`${o}="${e}"`)}return`[icon ${r.join(" ")}]`}(t.detail))}window.tinymce&&tinymce.PluginManager.add("font-awesome-official",class{constructor(e,o,n){e.on("init",(()=>{const t=document.querySelector("button.font-awesome-icon-chooser-media-button");t&&t.addEventListener("click",s)})),function(){const e=document.querySelector("#font-awesome-icon-chooser-container"),o=(0,r.H)(e);e&&o.render((0,t.createElement)(i,{onSubmit:c,openEvent:a}))}()}})})()})();