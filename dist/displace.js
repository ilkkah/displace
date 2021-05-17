!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(self,(function(){return(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function o(t,e){return function(o){return Math.min(Math.max(o,t),e)}}function n(t){return"relative"===window.getComputedStyle(t).position}function s(t,e,o){t.style.left=e+"px",t.style.top=o+"px"}function i(t){const e=this.opts;if(e.highlightInputs){const e=t.target.tagName.toLowerCase();if("input"===e||"textarea"===e)return}if(!e.ignoreFn||!e.ignoreFn(t)){if(0===t.button){const o=this.el,n=this.events;"function"==typeof e.onMouseDown&&e.onMouseDown(o,t);let s=t.clientX-o.offsetLeft,i=t.clientY-o.offsetTop;n.mousemove=u.bind(this,s,i),document.addEventListener("mousemove",n.mousemove,!1),document.addEventListener("mouseup",n.mouseup,!1)}t.preventDefault()}}function u(t,e,o){const n=this.el,s=this.opts,i=this.data;"function"==typeof s.onMouseMove&&s.onMouseMove(n,o);let u=o.clientX-t,c=o.clientY-e;return s.constrain&&(u=i.xClamp(u),c=i.yClamp(c)),this.handleMove(n,u,c,o),o.preventDefault(),!1}function c(t){const e=this.el,o=this.opts,n=this.events;"function"==typeof o.onMouseUp&&o.onMouseUp(e,t),document.removeEventListener("mouseup",n.mouseup,!1),document.removeEventListener("mousemove",n.mousemove,!1)}function r(t){const e=this.opts;if(e.highlightInputs){const e=t.target.tagName.toLowerCase();if("input"===e||"textarea"===e)return}if(e.ignoreFn&&e.ignoreFn(t))return;const o=this.el,n=this.events;"function"==typeof e.onTouchStart&&e.onTouchStart(o,t);const s=t.targetTouches[0];let i=s.clientX-o.offsetLeft,u=s.clientY-o.offsetTop;n.touchmove=h.bind(this,i,u),this.isDragging=!0,document.addEventListener("touchmove",n.touchmove,!1),document.addEventListener("touchend",n.touchstop,!1),document.addEventListener("touchcancel",n.touchstop,!1)}function h(t,e,o){const n=this.el,s=this.opts,i=this.data;"function"==typeof s.onTouchMove&&s.onTouchMove(n,o);const u=o.targetTouches[0];let c=u.clientX-t,r=u.clientY-e;return s.constrain&&(c=i.xClamp(c),r=i.yClamp(r)),this.handleMove(n,c,r,o),o.preventDefault(),!1}function l(t){this.isDragging=!1;const e=this.el,o=this.opts,n=this.events;"function"==typeof o.onTouchStop&&o.onTouchStop(e,t),document.removeEventListener("touchmove",n.touchmove,!1),document.removeEventListener("touchend",n.touchstop,!1),document.removeEventListener("touchcancel",n.touchstop,!1)}t.d(e,{default:()=>d});const a=window.requestAnimationFrame?function(t){const e=t||s;return function(t,o,n,s){window.requestAnimationFrame((function(){e(t,o,n,s)}))}}:function(t){return function(e,o,n,i){(t||s)(e,o,n,i)}},f={constrain:!1,relativeTo:null,handle:null,ignoreFn:null,highlightInputs:!1,onMouseDown:null,onMouseMove:null,onMouseUp:null,onTouchStart:null,onTouchMove:null,onTouchStop:null,customMove:null};class m{constructor(t,e){if(!t)throw Error("Must include moveable element");this.el=t,this.opts=e,v.call(this)}reinit(){this.destroy(),v.call(this)}destroy(){const t=this.events;this.handle.removeEventListener("mousedown",t.mousedown,!1),document.removeEventListener("mousemove",t.mousemove,!1),document.removeEventListener("mouseup",t.mouseup,!1),this.handle.removeEventListener("touchstart",t.touchstart,!1),document.removeEventListener("touchmove",t.touchmove,!1),document.removeEventListener("touchstop",t.touchstop,!1),document.removeEventListener("touchmove",this.events.scrollFix,{passive:!1})}}function v(){const t=this.el,e=this.opts||f,s={};if(t.style.position="absolute",this.handle=e.handle||t,e.constrain){const i=e.relativeTo||t.parentNode;let u=t,c=0,r=0;for(;u!==i;)u=u.parentNode,n(u)&&(c-=u.offsetLeft,r-=u.offsetTop),u===i&&(c+=u.offsetLeft,r+=u.offsetTop);const h=c+i.offsetWidth-t.offsetWidth,l=r+i.offsetHeight-t.offsetHeight;s.xClamp=o(c,h),s.yClamp=o(r,l)}this.opts=e,this.data=s,this.events={mousedown:i.bind(this),mouseup:c.bind(this),touchstart:r.bind(this),touchstop:l.bind(this),scrollFix:t=>{this.isDragging&&t.preventDefault()}},this.handleMove=a(this.opts.customMove),this.handle.addEventListener("mousedown",this.events.mousedown,!1),this.handle.addEventListener("touchstart",this.events.touchstart,!1),document.addEventListener("touchmove",this.events.scrollFix,{passive:!1})}const d=(t,e)=>new m(t,e);return e.default})()}));