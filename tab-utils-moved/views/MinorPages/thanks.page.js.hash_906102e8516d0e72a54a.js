!function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={18:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([473,1,0]),n()}({11:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(1),o=n.n(r);function i(e,t){var n=c(t).filter((function(t){return o()(e),o()(t.slot_name),t.slot_name===e}));o()(n.length<=1);var r=n[0];if(!r)return null;var i=r.slot_id;return o()(i),r}function a(e,t){var n=l(t).filter((function(t){return o()(e),o()(t.slot_name),t.slot_name===e}));o()(n.length<=1);var r=n[0];return r||null}function u(e,t){var n=s(t).filter((function(t){return o()(e),o()(t.slot_name),t.slot_name===e}));o()(n.length<=1);var r=n[0];if(!r)return null;var i=r.slot_id;return o()(i),i}function c(e){return e.filter(m)}function s(e){return e.filter(v)}function l(e){return e.filter(g)}function f(e){var t=l(e).length;return o()(0===t||t===e.length),t>0}function d(e){var t=c(e).length;return o()(0===t||t===e.length),t>0}function p(e){var t=s(e).length;return o()(0===t||t===e.length),t>0}function m(e){return"is_ezoic"in e}function v(e){return"is_adsense"in e}function g(e){return"is_gpt"in e}},31:function(e,t,n){"use strict";n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return E})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return j}));n(134);var r=n(1),o=n.n(r);function i(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){i(a,r,o,u,c,"next",e)}function c(e){i(a,r,o,u,c,"throw",e)}u(void 0)}))}}t.b=f;var u,c={is_on_hide_scroll_element:null,enable_scroll_auto_hide:null,scrollbar_width_computed:null};function s(){var e=c.is_on_hide_scroll_element&&c.enable_scroll_auto_hide&&c.scrollbar_width_computed;u.classList[e?"add":"remove"]("hide_scroll")}var l=!1;function f(){if(!l){l=!0;var e=document.querySelectorAll(".pretty_scroll_area"),t=document.querySelectorAll(".pretty_scroll_area__parent"),n=document.querySelectorAll(".pretty_scroll_area__hide_scroll_element");o.a.usage(1===e.length&&1===t.length&&1===n.length),u=e[0];var r,i=n[0];r=function(){var e,t=document.createElement("div");(e=t).style.position="absolute",e.style.visibility="hidden",e.style.zIndex="-9999",t.style.overflow="scroll";var n=document.body;n.appendChild(t);var r=document.createElement("div");t.appendChild(r);var o=t.offsetWidth-r.offsetWidth;return n.removeChild(t),o}(),document.documentElement.style.setProperty("--scroll-bar-width",r+"px"),c.scrollbar_width_computed=!0,s(),m((function(e){var t=j(i).positionTop,n=Math.abs(e-t);c.is_on_hide_scroll_element=n<=1,s()}),{fireInitialScroll:!0}),setTimeout((function(){c.enable_scroll_auto_hide=!0,s()}),2e3)}}var d,p=[];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.onlyUserScroll,r=void 0!==n&&n,o=t.fireInitialScroll,i=void 0!==o&&o;if(e.onlyUserScroll=r,p.push(e),g(),i){var a=y();e(a)}}var v=!1;function g(){v||(f(),v=!0,(u===document.documentElement?window:u).addEventListener("scroll",(function(){var e=y();p.forEach((function(t){t.onlyUserScroll&&d||t(e,{is_user_scroll:!d})}))}),{passive:!0}),window.addEventListener("resize",h,{passive:!0}))}function h(){E({smooth:!1})}function y(){return u.scrollTop}function b(e){return w.apply(this,arguments)}function w(){return(w=a(regeneratorRuntime.mark((function e(t){var n,r,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:{},r=n.smooth,void 0!==r&&r){e.next=5;break}return e.abrupt("return",_(t));case 5:return e.abrupt("return",O(t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){u.scrollTop=e}function O(e){return x.apply(this,arguments)}function x(){return(x=a(regeneratorRuntime.mark((function e(t){var n,r,o,i,a,u,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(e){return e*e*(3-2*e)},30,20,r=new Promise((function(e){return n=e})),o=y(),i=t-o,d=!0,a=0,u=setInterval((function(){_(o+i*c(a++/30)),a>30&&(clearInterval(u),window.requestAnimationFrame((function(){d=!1})),n())}),20),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.smooth,r=void 0===n||n,o=j(e),i=o.positionTop;return b(i,{smooth:r})}function j(e){var t=(e.constructor===String?document.querySelector(e):e).getBoundingClientRect(),n=t.top+y();o()(n.constructor===Number);var r=u.scrollLeft;o()(r.constructor===Number);var i=t.left+r;return o()(i.constructor===Number),{positionTop:n,positionLeft:i}}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.smooth,n=void 0===t||t,r=document.querySelectorAll(".pretty_scroll_area__hide_scroll_element");o.a.usage(1===r.length,"Number of `.pretty_scroll_area__hide_scroll_element` elements: "+r.length);var i=r[0];S(i,{smooth:n})}},40:function(e,t,n){var r,o;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=a,u}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var c in i)i[c]&&(u+="; "+c,!0!==i[c]&&(u+="="+i[c].split(";")[0]));return document.cookie=t+"="+n+u}}function a(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var u=i[a].split("="),c=u.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var s=t(u[0]);if(c=(r.read||r)(c,s)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(o[s]=c,e===s)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},473:function(e,t,n){n(23),e.exports=n(474)},474:function(e,t,n){"use strict";var r,o=n(18);o.initFunctions={},o.initFunctions=o.initFunctions||{},o.initFunctions.hydratePage=!0===((r=n(26))||{}).__esModule?r.default:r,o.pageConfig=function(){var e=n(475);return!0===(e||{}).__esModule?e.default:e}(),o.router=function(){var e=n(27);return!0===(e||{}).__esModule?e.default:e}(),o.renderPageToDom=function(){var e=n(28);return!0===(e||{}).__esModule?e.default:e}(),o.domRender=function(){var e=n(29);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=n(30);!0===(e||{}).__esModule&&e.default}()},475:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(6),a=n(4),u=n(83);t.default=Object(i.a)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Your donation means a lot to me."),o.a.createElement("p",null,"All advertisments are removed."),o.a.createElement("p",null,"Warm regards,",o.a.createElement("br",null),"Romuald"),o.a.createElement("p",null,"You will be redirected to ",a.h," in ",o.a.createElement("span",{id:"counter"},"x"),"."))}),"Thank you.",{route:"/thanks",onPageLoad:function(){Object(u.a)();var e=document.getElementById("counter"),t=10;return void function n(){--t,e.textContent=(t<10?"0":"")+t.toString(),0===t&&(window.location.href="/");setTimeout(n,1e3)}()}})},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n(11);var r=n(0),o=n.n(r),i=n(8),a=n(9),u=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null),o.a.createElement("div",{id:"page-wrapper"},t),o.a.createElement(a.a,null))};var c=n(10),s=function(e){e&&e();Object(c.a)()};var l=n(4);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.route,i=void 0===r?null:r,a=n.onPageLoad,c=n.noHeader,f=void 0!==c&&c,p=m(n,["route","onPageLoad","noHeader"]);i=i||"/"+t.toLowerCase().split(" ").join("-");var v=t+" - "+l.h,g=function(){return o.a.createElement(u,null,!f&&o.a.createElement("h1",null,t),o.a.createElement(e,null))};return d({view:g,route:i,title:v,on_page_load:function(){return s(a)},favicon:l.f,renderToDom:!0,renderToHtml:!0},p)}},83:function(e,t,n){"use strict";n.d(t,"b",(function(){return k})),n.d(t,"a",(function(){return R}));var r=n(1),o=n.n(r),i=n(5),a=n(7),u=n(38),c=n(40),s=n.n(c);function l(){s.a.set("disable_ezoic_ads","yes",{expires:3650})}var f=n(31);function d(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){d(i,r,o,a,u,"next",e)}function u(e){d(i,r,o,a,u,"throw",e)}a(void 0)}))}}function m(e,t){return v.apply(this,arguments)}function v(){return(v=p(regeneratorRuntime.mark((function e(t,n){var r,i,a,u,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o()(t.startsWith("https://")),r=!1,i=!1,u=new Promise((function(e){return a=e})),(c=document.createElement("script")).src=t,c.async=!0,c.onload=function(){a(!0),g(!0,!0,i,t,n),r=!0},c.onerror=function(){a(!1),g(!1,!0,i,t,n),r=!0},document.getElementsByTagName("head")[0].appendChild(c),setTimeout((function(){r||(a(!1),g(!1,!1,i=!0,t,n))}),5e3),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t,n,r,i){var u;t?(u=e?"loaded":"failed",n&&(u+=" [after-timeout]")):(o()(!e),o()(n),u="timeout");var c="[".concat(i,"] ").concat(r," ").concat(u);Object(a.e)({name:c})}var h=n(21);n(135);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){var e=window.location.hostname,t=document.createElement("script"),n=document.getElementsByTagName("script")[0],r="https://quantcast.mgr.consensu.org".concat("/choice/","tFtPSgSMcAKKV","/",e,"/choice.js"),o=0;t.async=!0,t.type="text/javascript",t.src=r,n.parentNode.insertBefore(t,n),function(){for(var e,t=[],n=window;n;){try{if(n.frames.__tcfapiLocator){e=n;break}}catch(e){}if(n===window.top)break;n=n.parent}e||(!function e(){var t=n.document,r=!!n.frames.__tcfapiLocator;if(!r)if(t.body){var o=t.createElement("iframe");o.style.cssText="display:none",o.name="__tcfapiLocator",t.body.appendChild(o)}else setTimeout(e,5);return!r}(),n.__tcfapi=function(){var e,n=arguments;if(!n.length)return t;if("setGdprApplies"===n[0])n.length>3&&2===n[2]&&"boolean"==typeof n[3]&&(e=n[3],"function"==typeof n[2]&&n[2]("set",!0));else if("ping"===n[0]){var r={gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"};"function"==typeof n[2]&&n[2](r)}else t.push(n)},n.addEventListener("message",(function(e){var t="string"==typeof e.data,n={};try{n=t?JSON.parse(e.data):e.data}catch(e){}var r=n.__tcfapiCall;r&&window.__tcfapi(r.command,r.version,(function(n,o){var i={__tcfapiReturn:{returnValue:n,success:o,callId:r.callId}};t&&(i=JSON.stringify(i)),e.source.postMessage(i,"*")}),r.parameter)}),!1))}();var i=function e(){var t=arguments;y(window.__uspapi)!==e&&setTimeout((function(){void 0!==window.__uspapi&&window.__uspapi.apply(window.__uspapi,t)}),500)};if(void 0===window.__uspapi){window.__uspapi=i;var a=setInterval((function(){o++,window.__uspapi===i&&o<3?console.warn("USP is not accessible"):clearInterval(a)}),6e3)}}function w(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){w(i,r,o,a,u,"next",e)}function u(e){w(i,r,o,a,u,"throw",e)}a(void 0)}))}}function O(){return x.apply(this,arguments)}function x(){return(x=_(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://get.s-onetag.com/06e34b93-922e-48bb-92b3-23af73f987b6/tag.min.js","onetag");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){S(i,r,o,a,u,"next",e)}function u(e){S(i,r,o,a,u,"throw",e)}a(void 0)}))}}var E,P;function k(e){return C.apply(this,arguments)}function C(){return(C=j(regeneratorRuntime.mark((function e(t){var n,r,o,i=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:{},D(t)&&(r=!0),r){e.next=20;break}if(!Object(h.g)(t)){e.next=9;break}return e.next=6,M();case 6:o=e.sent,e.next=19;break;case 9:if(!Object(h.f)(t)){e.next=15;break}return e.next=12,I(t);case 12:o=e.sent,e.next=19;break;case 15:if(!Object(h.h)(t)){e.next=19;break}return e.next=18,T(t);case 18:o=e.sent;case 19:o||(r=!0);case 20:r?document.documentElement.classList.add("no-ads"):setTimeout((function(){document.documentElement.classList.add("show-ads"),q(),n.loadQuantcastConsent&&b(),n.loadOneTag&&O()}),1300);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){i.c.set_val("ad_removal",!0),l()}function T(e){return L.apply(this,arguments)}function L(){return(L=j(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(h.e)(t),o()(n.length>0),e.next=4,m("https://securepubads.g.doubleclick.net/tag/js/gpt.js","gpt");case 4:return(r=e.sent)&&(window.googletag=window.googletag||{cmd:[]},window.googletag.cmd.push((function(){n.forEach((function(e){var t=e.slot_id,n=e.adName,r=e.slotSize,i=e.sizeMapping;o()(t.constructor===String),o()(n.constructor===String),o()(2===r.length&&r[0].constructor===Number&&r[1].constructor===Number);var a=window.googletag.defineSlot(n,r,t);if(i){var u=window.googletag.sizeMapping();i.forEach((function(e){u=u.addSize(e.viewport,e.adSize)})),u=u.build(),a=a.defineSizeMapping(u)}a.addService(window.googletag.pubads())})),window.googletag.pubads().enableSingleRequest(),window.googletag.enableServices(),n.forEach((function(e){var t=e.slot_id;window.googletag.cmd.push((function(){window.googletag.display(t)}))}))}))),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return N.apply(this,arguments)}function N(){return(N=j(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(h.b)(t),o()(n.length>0),e.next=4,M();case 4:return(r=e.sent)&&(window.adsbygoogle=window.adsbygoogle||[],n.forEach((function(){window.adsbygoogle.push({})}))),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return A.apply(this,arguments)}function A(){return(A=j(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js","adsense");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return o()(!F()),void 0!==E?(o()([!0,!1].includes(E)),E):(E=i.c.has_val("ad_removal"),o()([!0,!1].includes(E)),E)}function D(e){var t,n=(z()?"user_has_donated":U().width<=700&&"screen_too_small")||function(){if(o()(!F()),void 0!==P)return P;var e=document.createElement("div");return e.style.position="absolute",e.style.visibility="hidden",e.style.pointerEvents="none",e.innerHTML="some_text",e.className="adsbygoogle",document.body.appendChild(e),P=0===e.offsetHeight,document.body.removeChild(e),P}()&&"ad_blocker_detected";return n||Object(h.g)(e)||(t=Object(u.b)(),n=["chrome","chromium","safari","firefox","internet explorer","opera","edge","microsoft edge"].includes(t.toLowerCase())?function(){if(Object(a.a)()>=8)return!0;return!1}()&&"too_many_visits":"fringe_browser"),n&&function(e){var t;"fringe_browser"===e&&(t=Object(u.b)());"screen_too_small"===e&&(t=JSON.stringify(U()));Object(a.e)({name:"[adsense] disabled: "+e,value:t})}(n),!!n}function U(){var e=window.screen,t=e.width,n=e.height;return o()(Number.isInteger(t)&&t>0&&Number.isInteger(n)&&n>0,{width:t,height:n}),{width:t,height:n}}function F(){return"undefined"==typeof window}function q(){Array.from(document.querySelectorAll(".is_floating")).forEach((function(e){var t,n=e.style.position,r=e.style.top,i=e.style.left,a=n,u=!1;Object(f.a)((function(c){o()(c>=0);var s=Object(f.c)(e),l=s.positionLeft,d=s.positionTop;u?(o()(t>=0),u=c>t):(u=c>d,t=d);var p=u?"fixed":n;p!==a&&("fixed"===p?(e.style.position=p,e.style.top="0px",e.style.left=l+"px"):(e.style.position=n,e.style.top=r,e.style.left=i),a=p)}),{fireInitialScroll:!0,onlyUserScroll:!1})}))}!function(){if(F())return;"#thanks-for-your-donation"===window.location.hash&&(window.location.href=window.location.origin+"/thanks");var e=z();e&&document.documentElement.classList.add("user-donated");e?l():s.a.remove("disable_ezoic_ads")}()}});
//# sourceMappingURL=thanks.page.js.hash_906102e8516d0e72a54a.js.map