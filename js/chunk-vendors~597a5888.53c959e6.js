"use strict";(self["webpackChunkchat_example"]=self["webpackChunkchat_example"]||[]).push([[332],{7819:function(e,t,n){n.d(t,{f:function(){return me}});var r=n(1328),o=n(3118),u=n(4277);function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function y(e){var t=v();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){l(n,e);var t=y(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),h(b(e),"priority",130),h(b(e),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),e}return f(n,[{key:"parse",value:function(e,t,n){var r=function(e){return{year:e,isTwoDigitYear:"yy"===t}};switch(t){case"y":return(0,u.jg)((0,u.ZL)(4,e),r);case"yo":return(0,u.jg)(n.ordinalNumber(e,{unit:"year"}),r);default:return(0,u.jg)((0,u.ZL)(t.length,e),r)}}},{key:"validate",value:function(e,t){return t.isTwoDigitYear||t.year>0}},{key:"set",value:function(e,t,n){var r=e.getUTCFullYear();if(n.isTwoDigitYear){var o=(0,u.WG)(n.year,r);return e.setUTCFullYear(o,0,1),e.setUTCHours(0,0,0,0),e}var i="era"in t&&1!==t.era?1-n.year:n.year;return e.setUTCFullYear(i,0,1),e.setUTCHours(0,0,0,0),e}}]),n}(o._),g=n(3242),d=n(1743),Z=n(2773),O=n(745),S=n(4279),j=n(9741),_=n(1504),R=n(9461),D=n(6751),T=n(9144),P=n(8646),k=n(6413),x=n(1701),E=n(8155),C=n(4604),Y=n(7958),z=n(3425),N=n(9165),I=n(6942),M=n(9981),F=n(1274),B=n(9323),A=n(5518),H=n(2866),U=n(9139),G=n(394),L=n(7040);function q(e){return q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),e}function K(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}function X(e,t){return X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},X(e,t)}function V(e){var t=te();return function(){var n,r=ne(e);if(t){var o=ne(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $(this,n)}}function $(e,t){return!t||"object"!==q(t)&&"function"!==typeof t?ee(e):t}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ne(e){return ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ne(e)}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oe=function(e){K(n,e);var t=V(n);function n(){var e;Q(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),re(ee(e),"priority",40),re(ee(e),"incompatibleTokens","*"),e}return J(n,[{key:"parse",value:function(e){return(0,u.n8)(e)}},{key:"set",value:function(e,t,n){return[new Date(1e3*n),{timestampIsSet:!0}]}}]),n}(o._);function ue(e){return ue="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(e)}function ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t,n){return t&&ce(e.prototype,t),n&&ce(e,n),e}function fe(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}function le(e,t){return le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},le(e,t)}function se(e){var t=be();return function(){var n,r=ve(e);if(t){var o=ve(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ye(this,n)}}function ye(e,t){return!t||"object"!==ue(t)&&"function"!==typeof t?pe(e):t}function pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ve(e){return ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ve(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var he=function(e){fe(n,e);var t=se(n);function n(){var e;ie(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),we(pe(e),"priority",20),we(pe(e),"incompatibleTokens","*"),e}return ae(n,[{key:"parse",value:function(e){return(0,u.n8)(e)}},{key:"set",value:function(e,t,n){return[new Date(n),{timestampIsSet:!0}]}}]),n}(o._),me={G:new r.z,y:new m,Y:new g.x,R:new d.v,u:new Z.x,Q:new O.U,q:new S.x,M:new j.C,L:new _.t,w:new R.d,I:new D.d,d:new T.G,D:new P.N,E:new k.d,e:new x.m,c:new E.C,i:new C.i,a:new Y.A,b:new z.i,B:new N.I,h:new I.y,H:new M.r,K:new F.z,k:new B.M,m:new A.A,s:new H.d,S:new U.n,X:new G.F,x:new L.g,t:new oe,T:new he}},4277:function(e,t,n){n.d(t,{DA:function(){return c},Db:function(){return l},RQ:function(){return s},WG:function(){return y},ZL:function(){return f},ie:function(){return i},jg:function(){return u},kT:function(){return p},n8:function(){return a}});var r=n(129),o=n(6750);function u(e,t){return e?{value:t(e.value),rest:e.rest}:e}function i(e,t){var n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function c(e,t){var n=t.match(e);if(!n)return null;if("Z"===n[0])return{value:0,rest:t.slice(1)};var o="+"===n[1]?1:-1,u=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,c=n[5]?parseInt(n[5],10):0;return{value:o*(u*r.vh+i*r.yJ+c*r.qk),rest:t.slice(n[0].length)}}function a(e){return i(o.z.anyDigitsSigned,e)}function f(e,t){switch(e){case 1:return i(o.z.singleDigit,t);case 2:return i(o.z.twoDigits,t);case 3:return i(o.z.threeDigits,t);case 4:return i(o.z.fourDigits,t);default:return i(new RegExp("^\\d{1,"+e+"}"),t)}}function l(e,t){switch(e){case 1:return i(o.z.singleDigitSigned,t);case 2:return i(o.z.twoDigitsSigned,t);case 3:return i(o.z.threeDigitsSigned,t);case 4:return i(o.z.fourDigitsSigned,t);default:return i(new RegExp("^-?\\d{1,"+e+"}"),t)}}function s(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function y(e,t){var n,r=t>0,o=r?t:1-t;if(o<=50)n=e||100;else{var u=o+50,i=100*Math.floor(u/100),c=e>=u%100;n=e+i-(c?100:0)}return r?n:1-n}function p(e){return e%400===0||e%4===0&&e%100!==0}},9458:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9907),o=n(2825),u=n(5902);function i(e,t){(0,u.Z)(2,arguments);var n=(0,o.Z)(e),i=(0,r.Z)(t);return n.setHours(i),n}},4855:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9907),o=n(2825),u=n(5902);function i(e,t){(0,u.Z)(2,arguments);var n=(0,o.Z)(e),i=(0,r.Z)(t);return n.setMilliseconds(i),n}},6384:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9907),o=n(2825),u=n(5902);function i(e,t){(0,u.Z)(2,arguments);var n=(0,o.Z)(e),i=(0,r.Z)(t);return n.setMinutes(i),n}},3261:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(9907),o=n(2825),u=n(5511),i=n(5902);function c(e,t){(0,i.Z)(2,arguments);var n=(0,o.Z)(e),c=(0,r.Z)(t),a=n.getFullYear(),f=n.getDate(),l=new Date(0);l.setFullYear(a,c,15),l.setHours(0,0,0,0);var s=(0,u.Z)(l);return n.setMonth(c,Math.min(f,s)),n}},2790:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9907),o=n(2825),u=n(5902);function i(e,t){(0,u.Z)(2,arguments);var n=(0,o.Z)(e),i=(0,r.Z)(t);return n.setSeconds(i),n}},9229:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9907),o=n(2825),u=n(5902);function i(e,t){(0,u.Z)(2,arguments);var n=(0,o.Z)(e),i=(0,r.Z)(t);return isNaN(n.getTime())?new Date(NaN):(n.setFullYear(i),n)}},5262:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2825),o=n(3261),u=n(9907),i=n(5902);function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){if((0,i.Z)(2,arguments),"object"!==c(t)||null===t)throw new RangeError("values parameter must be an object");var n=(0,r.Z)(e);return isNaN(n.getTime())?new Date(NaN):(null!=t.year&&n.setFullYear(t.year),null!=t.month&&(n=(0,o.Z)(n,t.month)),null!=t.date&&n.setDate((0,u.Z)(t.date)),null!=t.hours&&n.setHours((0,u.Z)(t.hours)),null!=t.minutes&&n.setMinutes((0,u.Z)(t.minutes)),null!=t.seconds&&n.setSeconds((0,u.Z)(t.seconds)),null!=t.milliseconds&&n.setMilliseconds((0,u.Z)(t.milliseconds)),n)}}}]);