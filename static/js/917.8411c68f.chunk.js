/*! For license information please see 917.8411c68f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[917],{527:function(t,r,e){e.d(r,{$7:function(){return s},KA:function(){return p},aS:function(){return d},vw:function(){return c},yk:function(){return f}});var n=e(165),o=e(861),i="https://api.themoviedb.org/3",a=new URLSearchParams({api_key:"e87ebc5dcf897b76d99de597879fdbaf"});function c(){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,n.Z)().mark((function t(){var r,e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i,"/trending/movie/day?").concat(a));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,o=e.results,t.abrupt("return",o);case 11:throw t.prev=11,t.t0=t.catch(0),new Error(console.log(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function s(t){return h.apply(this,arguments)}function h(){return h=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o,a,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:"e87ebc5dcf897b76d99de597879fdbaf",query:r}),t.prev=1,t.next=4,fetch("".concat(i,"/search/movie?").concat(e));case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,c=a.results,t.abrupt("return",c);case 12:throw t.prev=12,t.t0=t.catch(1),new Error(console.log(t.t0));case 15:case"end":return t.stop()}}),t,null,[[1,12]])}))),h.apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i,"/movie/").concat(r,"?").concat(a));case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),new Error(console.log(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return(v=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i,"/movie/").concat(r,"/credits?").concat(a));case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),new Error(console.log(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function d(t){return A.apply(this,arguments)}function A(){return(A=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i,"/movie/").concat(r,"/reviews?").concat(a));case 3:return e=t.sent,t.next=6,e.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t.catch(0),new Error(console.log(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}},917:function(t,r,e){e.r(r),e.d(r,{default:function(){return p}});var n=e(165),o=e(861),i=e(439),a=e(689),c=e(87),u=e(791),s=e(527),h="MoviesDetailed_div__E41ET",f="MoviesDetailed_divInfo__qE6-b",l=e(184);var p=function(){var t,r,e,p,v=(0,u.useState)(null),d=(0,i.Z)(v,2),A=d[0],y=d[1],m=(0,a.TH)(),w=(0,a.UO)().movieId;return(0,u.useEffect)((function(){try{var t=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.yk)(w);case 2:r=t.sent,y(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}catch(r){console.log(r)}}),[w]),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.rU,{state:{from:m},to:null!==(t=null===(r=m.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/",children:"Go back"}),(0,l.jsxs)("div",{className:h,children:[A?(0,l.jsx)("img",{src:A.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(A.backdrop_path):"data:image/jpeg;base64,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",alt:A.title,height:"100%",width:"100%"}):(0,l.jsx)(l.Fragment,{}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{children:[A&&A.title,"(",A&&A.release_date.slice(0,4),")"]}),(0,l.jsxs)("p",{children:["Userscore:"," ",A&&Math.round(10*(A.vote_average+Number.EPSILON))+" %"]}),(0,l.jsx)("h2",{children:"Overviews"}),(0,l.jsx)("p",{children:A&&A.overview}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:A&&A.genres.map((function(t){return t.name})).join(", ")})]})]}),(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{state:{from:null===(e=m.state)||void 0===e?void 0:e.from},to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{state:{from:null===(p=m.state)||void 0===p?void 0:p.from},to:"reviews",children:"Reviews"})})]})]}),(0,l.jsx)(a.j3,{})]})}},861:function(t,r,e){function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(2);function o(){o=function(){return r};var t,r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,i=Object.create(o.prototype),c=new O(n||[]);return a(i,"_invoke",{value:Z(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var v="suspendedStart",d="executing",A="completed",y={};function m(){}function w(){}function g(){}var x={};f(x,u,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(R([])));j&&j!==e&&i.call(j,u)&&(x=j);var E=g.prototype=m.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var h=s.arg,f=h.value;return f&&"object"==(0,n.Z)(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(f).then((function(t){h.value=t,c(h)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function Z(r,e,n){var o=v;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===A){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=A,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?A:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=A,n.method="throw",n.arg=s.arg)}}}function P(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,P(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function J(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(J,this),this.reset(!0)}function R(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return w.prototype=g,a(E,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:w,configurable:!0}),w.displayName=f(g,h,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,h,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},k(L.prototype),f(L.prototype,s,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new L(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),f(E,h,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=R,O.prototype={constructor:O,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:R(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}}}]);
//# sourceMappingURL=917.8411c68f.chunk.js.map