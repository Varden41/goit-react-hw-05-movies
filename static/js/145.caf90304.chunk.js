/*! For license information please see 145.caf90304.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[145],{527:function(t,r,e){e.d(r,{$7:function(){return s},KA:function(){return p},aS:function(){return d},vw:function(){return c},yk:function(){return h}});var n=e(165),o=e(861),a="https://api.themoviedb.org/3",i=new URLSearchParams({api_key:"e87ebc5dcf897b76d99de597879fdbaf"});function c(){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,n.Z)().mark((function t(){var r,e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(a,"/trending/movie/day?").concat(i));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,o=e.results,t.abrupt("return",o);case 11:throw t.prev=11,t.t0=t.catch(0),new Error(console.log(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return f=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o,i,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:"e87ebc5dcf897b76d99de597879fdbaf",query:r}),t.prev=1,t.next=4,fetch("".concat(a,"/search/movie?").concat(e));case 4:return o=t.sent,t.next=7,o.json();case 7:return i=t.sent,c=i.results,t.abrupt("return",c);case 12:throw t.prev=12,t.t0=t.catch(1),new Error(console.log(t.t0));case 15:case"end":return t.stop()}}),t,null,[[1,12]])}))),f.apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(a,"/movie/").concat(r,"?").concat(i));case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),new Error(console.log(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return(v=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(a,"/movie/").concat(r,"/credits?").concat(i));case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),new Error(console.log(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function d(t){return y.apply(this,arguments)}function y(){return(y=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(a,"/movie/").concat(r,"/reviews?").concat(i));case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),new Error(console.log(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}},368:function(t,r,e){var n=e(689),o=e(87),a=e(184);r.Z=function(t){var r=t.movies,e=(0,n.TH)();return(0,a.jsx)("ul",{children:r.map((function(t){return(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{state:{from:e},to:"/movies/".concat(t.id),children:t.title})},t.id)}))})}},145:function(t,r,e){e.r(r),e.d(r,{default:function(){return l}});var n=e(165),o=e(861),a=e(439),i=e(791),c=e(87),u=e(527),s=e(368),f=e(184);var h=function(t){var r=t.queryUpdate,e=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.currentTarget.search.value.trim(),e.preventDefault(),""!==o&&r(o),t.abrupt("return");case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}();return(0,f.jsxs)("form",{onSubmit:e,children:[(0,f.jsx)("input",{required:!0,type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search"}),(0,f.jsx)("button",{children:"Search"})]})};var l=function(){var t=(0,i.useState)("idle"),r=(0,a.Z)(t,2),e=r[0],l=r[1],p=(0,c.lr)(),v=(0,a.Z)(p,2),d=v[0],y=v[1],m=(0,i.useState)([]),w=(0,a.Z)(m,2),g=w[0],x=w[1],b=d.get("name");return(0,i.useEffect)((function(){function t(){return(t=(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.$7)(b);case 2:if(0!==(r=t.sent).length){t.next=5;break}return t.abrupt("return",l("rejected"));case 5:x(r),l("loaded");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}b&&""!==b&&function(){t.apply(this,arguments)}()}),[b]),(0,f.jsxs)("div",{children:[(0,f.jsx)(h,{queryUpdate:function(t){y({name:t})}}),"idle"===e&&(0,f.jsx)("div",{children:"Fill search field!"}),"rejected"===e&&(0,f.jsx)("div",{children:"Nothing found, sorry"}),"loaded"===e&&(0,f.jsx)(s.Z,{movies:g})]})}},861:function(t,r,e){function n(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(2);function o(){o=function(){return r};var t,r={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:_(t,e,c)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var v="suspendedStart",d="executing",y="completed",m={};function w(){}function g(){}function x(){}var b={};h(b,u,(function(){return this}));var j=Object.getPrototypeOf,L=j&&j(j(G([])));L&&L!==e&&a.call(L,u)&&(b=L);var Z=x.prototype=w.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,c,u){var s=p(t[o],t,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==(0,n.Z)(h)&&a.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}})}function _(r,e,n){var o=v;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?y:"suspendedYield",s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(a.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return g.prototype=x,i(Z,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:g,configurable:!0}),g.displayName=h(x,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,f,"GeneratorFunction")),t.prototype=Object.create(Z),t},r.awrap=function(t){return{__await:t}},E(k.prototype),h(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(Z),h(Z,f,"Generator"),h(Z,u,(function(){return this})),h(Z,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}}}]);
//# sourceMappingURL=145.caf90304.chunk.js.map