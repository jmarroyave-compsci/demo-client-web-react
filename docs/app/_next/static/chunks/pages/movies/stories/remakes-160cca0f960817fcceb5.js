(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8326],{41821:function(e,r,t){"use strict";t.d(r,{Z:function(){return Y}});var n,a=t(4942),o=(t(67294),t(55619)),c={automata:{name:"stories-remakes"},page:{title:"Remakes",description:"",url:function(e){var r=e.entity;return"/".concat(r,"/stories/remakes")}},banner:{showData:!0}},i=t(15861),u=t(87757),s=t.n(u),p=t(24268),f=t(16161),l=t(11163),d=t(30168),O=t(54397),b=t(74273),g=t(75679);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v,m=function(e){var r=e.page,t=e.entity;return(0,b.h)(h({ENTITY:t}),{page:r},(function(e){return j(j({},e),{},{data:e.data.storyRemakes})}))},h=function(e){var r=e.ENTITY;return(0,O.Ps)(n||(n=(0,d.Z)(["\n","\n  query ","_remakes($page: Int){\n  storyRemakes(page: $page){\n    name\n    count\n    recs{\n      id: _id\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n  }\n}\n"])),g.T4,r)};function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var D=c.automata.name,k=(0,p.hg)("".concat(D,"/fetchData"),function(){var e=(0,i.Z)(s().mark((function e(r,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(x(r)),e.next=3,m(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),Z=(0,p.oM)({name:D,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=w(w({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&l.default.push("".concat(c.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(v={},(0,a.Z)(v,k.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(v,k.fulfilled,(function(e,r){var t=r.payload,n=t.loading,a=t.error,o=t.data;e.data=o,e.loading=n,e.error=a})),(0,a.Z)(v,k.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),v)});f.h.reducerManager.add(D,Z.reducer);Z.reducer;var x=Z.actions.setParams,E=t(43332),_=t(49896),S=(t(59231),t(19888),t(82356)),T=t(85893);function N(e){var r=e.image,t=e.name,n=(e.count,e.recs);return(0,T.jsx)(E.Z,{image:r?r.poster:r,text:(0,T.jsx)("div",{children:n.slice(0,3).map((function(e,r){var t,n,a;return(0,T.jsx)(S.Z,{title:e.releaseYear,value:(0,T.jsx)(R,{id:e.id,children:null!==(t=null===(n=e.directed[0])||void 0===n||null===(a=n.id)||void 0===a?void 0:a.name)&&void 0!==t?t:"?"},r)},r)}))}),title:t})}function R(e){var r=e.id,t=e.children;return r?(0,T.jsx)(_.Z,{id:r,children:(0,T.jsx)("div",{children:t})}):t}t(45688);function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Y(e){return(0,T.jsx)(o.Z,{params:e,config:c,fetch:function(e){return k(I({},e))},item:function(e){return(0,T.jsx)(N,I({full:!0},e))}})}},47123:function(e,r,t){"use strict";var n=t(4942),a=(t(67294),t(41821)),o=t(85893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){return(0,o.jsx)(a.Z,i(i({},e),{},{render:"list"}))}},19888:function(e,r,t){"use strict";t.d(r,{Rx:function(){return c},T5:function(){return i},et:function(){return u}});var n=t(92077),a=t.n(n),o=t(24417),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return a()(Number(e)).format(r)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.default.toSentenceCase(e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.default.toHeaderCase(e)}},40191:function(e,r,t){"use strict";t.r(r);t(67294);var n=t(11163),a=t(47123),o=t(85893);r.default=function(e){var r=(0,n.useRouter)(),t=(r&&r.query?r.query:[]).page;return t=t?parseInt(t):1,(0,o.jsx)(a.Z,{breadcrumbs:"/movies/stories/remakes",entity:"movies",page:t})}},88529:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/remakes",function(){return t(40191)}])}},function(e){e.O(0,[6499,5685,3128,5218,4471,2328,4197,4999,2282,5683,9774,2888,179],(function(){return r=88529,e(e.s=r);var r}));var r=e.O();_N_E=r}]);