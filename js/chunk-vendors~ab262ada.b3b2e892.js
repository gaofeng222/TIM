"use strict";(self["webpackChunkchat_example"]=self["webpackChunkchat_example"]||[]).push([[710],{306:function(n,t,e){e.d(t,{Z:function(){return v}});var r=e(4083),o=e(7926),i=e(2825),u=e(5902),a=e(9907);function l(n){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(n)}function v(n,t){if((0,u.Z)(2,arguments),!t||"object"!==l(t))return new Date(NaN);var e=t.years?(0,a.Z)(t.years):0,v=t.months?(0,a.Z)(t.months):0,c=t.weeks?(0,a.Z)(t.weeks):0,s=t.days?(0,a.Z)(t.days):0,f=t.hours?(0,a.Z)(t.hours):0,d=t.minutes?(0,a.Z)(t.minutes):0,Z=t.seconds?(0,a.Z)(t.seconds):0,g=(0,i.Z)(n),m=v||e?(0,o.Z)(g,v+12*e):g,w=s||c?(0,r.Z)(m,s+7*c):m,p=d+60*f,h=Z+60*p,k=1e3*h,y=new Date(w.getTime()+k);return y}},129:function(n,t,e){e.d(t,{qk:function(){return i},vh:function(){return o},yJ:function(){return r}});Math.pow(10,8);var r=6e4,o=36e5,i=1e3},6731:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(6415),o=e(3544),i=e(5902),u=864e5;function a(n,t){(0,i.Z)(2,arguments);var e=(0,o.Z)(n),a=(0,o.Z)(t),l=e.getTime()-(0,r.Z)(e),v=a.getTime()-(0,r.Z)(a);return Math.round((l-v)/u)}},5083:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n,t){var e;(0,o.Z)(1,arguments);var i=n||{},u=(0,r.Z)(i.start),a=(0,r.Z)(i.end),l=a.getTime();if(!(u.getTime()<=l))throw new RangeError("Invalid interval");var v=[],c=u;c.setHours(0,0,0,0);var s=Number(null!==(e=null===t||void 0===t?void 0:t.step)&&void 0!==e?e:1);if(s<1||isNaN(s))throw new RangeError("`options.step` must be a number greater than 1");while(c.getTime()<=l)v.push((0,r.Z)(c)),c.setDate(c.getDate()+s),c.setHours(0,0,0,0);return v}},5754:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(1155),o=e(2825),i=e(9907),u=e(5902);function a(n,t){var e,a,l,v,c,s,f,d;(0,u.Z)(1,arguments);var Z=(0,r.j)(),g=(0,i.Z)(null!==(e=null!==(a=null!==(l=null!==(v=null===t||void 0===t?void 0:t.weekStartsOn)&&void 0!==v?v:null===t||void 0===t||null===(c=t.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==l?l:Z.weekStartsOn)&&void 0!==a?a:null===(f=Z.locale)||void 0===f||null===(d=f.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==e?e:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=(0,o.Z)(n),w=m.getDay(),p=6+(w<g?-7:0)-(w-g);return m.setDate(m.getDate()+p),m.setHours(23,59,59,999),m}},5737:function(n,t,e){e.d(t,{Z:function(){return h}});var r=e(4720),o=e(2034),i=e(2825),u=e(1739),a=e(8778),l=e(6415),v=e(840),c=e(9907),s=e(5902),f=e(1155),d=e(631),Z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,g=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,m=/^'([^]*?)'?$/,w=/''/g,p=/[a-zA-Z]/;function h(n,t,e){var m,w,h,y,D,b,S,T,O,E,R,Y,C,H,F,M,W,j;(0,s.Z)(2,arguments);var N=String(t),q=(0,f.j)(),z=null!==(m=null!==(w=null===e||void 0===e?void 0:e.locale)&&void 0!==w?w:q.locale)&&void 0!==m?m:d.Z,I=(0,c.Z)(null!==(h=null!==(y=null!==(D=null!==(b=null===e||void 0===e?void 0:e.firstWeekContainsDate)&&void 0!==b?b:null===e||void 0===e||null===(S=e.locale)||void 0===S||null===(T=S.options)||void 0===T?void 0:T.firstWeekContainsDate)&&void 0!==D?D:q.firstWeekContainsDate)&&void 0!==y?y:null===(O=q.locale)||void 0===O||null===(E=O.options)||void 0===E?void 0:E.firstWeekContainsDate)&&void 0!==h?h:1);if(!(I>=1&&I<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var L=(0,c.Z)(null!==(R=null!==(Y=null!==(C=null!==(H=null===e||void 0===e?void 0:e.weekStartsOn)&&void 0!==H?H:null===e||void 0===e||null===(F=e.locale)||void 0===F||null===(M=F.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==C?C:q.weekStartsOn)&&void 0!==Y?Y:null===(W=q.locale)||void 0===W||null===(j=W.options)||void 0===j?void 0:j.weekStartsOn)&&void 0!==R?R:0);if(!(L>=0&&L<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!z.localize)throw new RangeError("locale must contain localize property");if(!z.formatLong)throw new RangeError("locale must contain formatLong property");var A=(0,i.Z)(n);if(!(0,r.Z)(A))throw new RangeError("Invalid time value");var P=(0,l.Z)(A),$=(0,o.Z)(A,P),_={firstWeekContainsDate:I,weekStartsOn:L,locale:z,_originalDate:A},x=N.match(g).map((function(n){var t=n[0];if("p"===t||"P"===t){var e=a.Z[t];return e(n,z.formatLong)}return n})).join("").match(Z).map((function(r){if("''"===r)return"'";var o=r[0];if("'"===o)return k(r);var i=u.Z[o];if(i)return null!==e&&void 0!==e&&e.useAdditionalWeekYearTokens||!(0,v.Do)(r)||(0,v.qp)(r,t,String(n)),null!==e&&void 0!==e&&e.useAdditionalDayOfYearTokens||!(0,v.Iu)(r)||(0,v.qp)(r,t,String(n)),i($,r,z.localize,_);if(o.match(p))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("");return x}function k(n){var t=n.match(m);return t?t[1].replace(w,"'"):n}},7752:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n){(0,o.Z)(1,arguments);var t=(0,r.Z)(n),e=t.getDay();return e}},5511:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n){(0,o.Z)(1,arguments);var t=(0,r.Z)(n),e=t.getFullYear(),i=t.getMonth(),u=new Date(0);return u.setFullYear(e,i+1,0),u.setHours(0,0,0,0),u.getDate()}},3855:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n){(0,o.Z)(1,arguments);var t=(0,r.Z)(n),e=t.getHours();return e}},6786:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(2825),o=e(107),i=e(5902);function u(n){(0,i.Z)(1,arguments);var t=(0,r.Z)(n),e=t.getFullYear(),u=new Date(0);u.setFullYear(e+1,0,4),u.setHours(0,0,0,0);var a=(0,o.Z)(u),l=new Date(0);l.setFullYear(e,0,4),l.setHours(0,0,0,0);var v=(0,o.Z)(l);return t.getTime()>=a.getTime()?e+1:t.getTime()>=v.getTime()?e:e-1}},5349:function(n,t,e){e.d(t,{Z:function(){return l}});var r=e(2825),o=e(107),i=e(382),u=e(5902),a=6048e5;function l(n){(0,u.Z)(1,arguments);var t=(0,r.Z)(n),e=(0,o.Z)(t).getTime()-(0,i.Z)(t).getTime();return Math.round(e/a)+1}},3411:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n){(0,o.Z)(1,arguments);var t=(0,r.Z)(n),e=t.getMinutes();return e}},7811:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n){(0,o.Z)(1,arguments);var t=(0,r.Z)(n),e=t.getMonth();return e}},9839:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n){(0,o.Z)(1,arguments);var t=(0,r.Z)(n),e=t.getSeconds();return e}},701:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n){return(0,o.Z)(1,arguments),(0,r.Z)(n).getFullYear()}},6992:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n,t){(0,o.Z)(2,arguments);var e=(0,r.Z)(n),i=(0,r.Z)(t);return e.getTime()>i.getTime()}},4762:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2825),o=e(5902);function i(n,t){(0,o.Z)(2,arguments);var e=(0,r.Z)(n),i=(0,r.Z)(t);return e.getTime()<i.getTime()}}}]);