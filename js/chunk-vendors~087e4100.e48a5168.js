"use strict";(self["webpackChunkchat_example"]=self["webpackChunkchat_example"]||[]).push([[579],{5518:function(t,e,n){n.d(e,{A:function(){return w}});var r=n(3118),o=n(6750),u=n(4277);function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function y(t){var e=h();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){l(n,t);var e=y(n);function n(){var t;i(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o)),v(b(t),"priority",60),v(b(t),"incompatibleTokens",["t","T"]),t}return f(n,[{key:"parse",value:function(t,e,n){switch(e){case"m":return(0,u.ie)(o.z.minute,t);case"mo":return n.ordinalNumber(t,{unit:"minute"});default:return(0,u.ZL)(e.length,t)}}},{key:"validate",value:function(t,e){return e>=0&&e<=59}},{key:"set",value:function(t,e,n){return t.setUTCMinutes(n,0,0),t}}]),n}(r._)},9741:function(t,e,n){n.d(e,{C:function(){return w}});var r=n(4277),o=n(3118),u=n(6750);function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function y(t){var e=h();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){l(n,t);var e=y(n);function n(){var t;i(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o)),v(b(t),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),v(b(t),"priority",110),t}return f(n,[{key:"parse",value:function(t,e,n){var o=function(t){return t-1};switch(e){case"M":return(0,r.jg)((0,r.ie)(u.z.month,t),o);case"MM":return(0,r.jg)((0,r.ZL)(2,t),o);case"Mo":return(0,r.jg)(n.ordinalNumber(t,{unit:"month"}),o);case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})||n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(t,e){return e>=0&&e<=11}},{key:"set",value:function(t,e,n){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t}}]),n}(o._)},745:function(t,e,n){n.d(e,{U:function(){return v}});var r=n(3118),o=n(4277);function u(t){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function s(t){var e=b();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){f(n,t);var e=s(n);function n(){var t;c(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o)),d(p(t),"priority",120),d(p(t),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),t}return a(n,[{key:"parse",value:function(t,e,n){switch(e){case"Q":case"QQ":return(0,o.ZL)(e.length,t);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})||n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(t,e){return e>=1&&e<=4}},{key:"set",value:function(t,e,n){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t}}]),n}(r._)},2866:function(t,e,n){n.d(e,{d:function(){return w}});var r=n(3118),o=n(6750),u=n(4277);function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function y(t){var e=h();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){l(n,t);var e=y(n);function n(){var t;i(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o)),v(b(t),"priority",50),v(b(t),"incompatibleTokens",["t","T"]),t}return f(n,[{key:"parse",value:function(t,e,n){switch(e){case"s":return(0,u.ie)(o.z.second,t);case"so":return n.ordinalNumber(t,{unit:"second"});default:return(0,u.ZL)(e.length,t)}}},{key:"validate",value:function(t,e){return e>=0&&e<=59}},{key:"set",value:function(t,e,n){return t.setUTCSeconds(n,0),t}}]),n}(r._)},8155:function(t,e,n){n.d(e,{C:function(){return w}});var r=n(3118),o=n(4277),u=n(6877);function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function y(t){var e=h();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){l(n,t);var e=y(n);function n(){var t;i(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o)),v(b(t),"priority",90),v(b(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),t}return f(n,[{key:"parse",value:function(t,e,n,r){var u=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"c":case"cc":return(0,o.jg)((0,o.ZL)(e.length,t),u);case"co":return(0,o.jg)(n.ordinalNumber(t,{unit:"day"}),u);case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(t,{width:"wide",context:"standalone"})||n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(t,e){return e>=0&&e<=6}},{key:"set",value:function(t,e,n,r){return t=(0,u.Z)(t,n,r),t.setUTCHours(0,0,0,0),t}}]),n}(r._)},1504:function(t,e,n){n.d(e,{t:function(){return w}});var r=n(3118),o=n(6750),u=n(4277);function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function y(t){var e=h();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){l(n,t);var e=y(n);function n(){var t;i(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o)),v(b(t),"priority",110),v(b(t),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),t}return f(n,[{key:"parse",value:function(t,e,n){var r=function(t){return t-1};switch(e){case"L":return(0,u.jg)((0,u.ie)(o.z.month,t),r);case"LL":return(0,u.jg)((0,u.ZL)(2,t),r);case"Lo":return(0,u.jg)(n.ordinalNumber(t,{unit:"month"}),r);case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})||n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(t,e){return e>=0&&e<=11}},{key:"set",value:function(t,e,n){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t}}]),n}(r._)},4279:function(t,e,n){n.d(e,{x:function(){return v}});var r=n(3118),o=n(4277);function u(t){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function s(t){var e=b();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){f(n,t);var e=s(n);function n(){var t;c(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t=e.call.apply(e,[this].concat(o)),d(p(t),"priority",120),d(p(t),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),t}return a(n,[{key:"parse",value:function(t,e,n){switch(e){case"q":case"qq":return(0,o.ZL)(e.length,t);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})||n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(t,e){return e>=1&&e<=4}},{key:"set",value:function(t,e,n){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t}}]),n}(r._)}}]);