(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1608],{41821:function(e,r,t){"use strict";t.d(r,{Z:function(){return q}});var n,o,a=t(4942),c=(t(67294),t(55619)),i={automata:{name:"stories_remakes"},page:{title:"Remakes",description:"",url:function(e){var r=e.entity;return"/".concat(r,"/stories/remakes")}},banner:{showData:!0}},u=t(15861),s=t(87757),p=t.n(s),f=t(24268),l=t(16161),d=t(11163),O=t(30168),b=t(54397),g=t(74273);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v,m=(0,b.Ps)(n||(n=(0,O.Z)(["\nfragment PersonInfoTiny on Person {\n  id\n  name\n}\n"]))),h=(0,b.Ps)(o||(o=(0,O.Z)(["\n","\n  query GetData($page: Int){\n  storiesMoviesRemakes(page: $page){\n    name\n    count\n    recs{\n      id\n      releaseYear\n      type\n      genre\n      directed{\n        id{\n          ...PersonInfoTiny\n        } \n      }\n    }\n  }\n}\n"])),m);function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var D=i.automata.name,Z=(0,f.hg)("".concat(D,"/fetchData"),function(){var e=(0,u.Z)(p().mark((function e(r,t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(x(r)),e.next=3,n=r.page,(0,g.h)(h,{page:n},(function(e){return j(j({},e),{},{data:e.data.storiesMoviesRemakes})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(r,t){return e.apply(this,arguments)}}()),k=(0,f.oM)({name:D,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=w(w({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&d.default.push("".concat(i.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(v={},(0,a.Z)(v,Z.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(v,Z.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,a=t.data;e.data=a,e.loading=n,e.error=o})),(0,a.Z)(v,Z.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),v)});l.h.reducerManager.add(D,k.reducer);k.reducer;var x=k.actions.setParams,E=t(43332),_=t(49896),S=(t(59231),t(19888),t(82356)),N=t(85893);function R(e){var r=e.image,t=e.name,n=(e.count,e.recs);return(0,N.jsx)(E.Z,{image:r?r.poster:r,text:(0,N.jsx)("div",{children:n.slice(0,3).map((function(e,r){var t,n,o;return(0,N.jsx)(S.Z,{title:e.releaseYear,value:(0,N.jsx)(T,{id:e.id,children:null!==(t=null===(n=e.directed[0])||void 0===n||null===(o=n.id)||void 0===o?void 0:o.name)&&void 0!==t?t:"?"},r)},r)}))}),title:t})}function T(e){var r=e.id,t=e.children;return r?(0,N.jsx)(_.Z,{id:r,children:(0,N.jsx)("div",{children:t})}):t}t(45688);function I(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function M(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?I(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function q(e){return(0,N.jsx)(c.Z,{params:e,config:i,fetch:function(e){return Z(M({},e))},item:function(e){return(0,N.jsx)(R,M({full:!0},e))}})}},47123:function(e,r,t){"use strict";var n=t(4942),o=(t(67294),t(41821)),a=t(85893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){return(0,a.jsx)(o.Z,i(i({},e),{},{render:"list"}))}},19888:function(e,r,t){"use strict";t.d(r,{Rx:function(){return c},T5:function(){return i}});var n=t(92077),o=t.n(n),a=t(24417),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return o()(Number(e)).format(r)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.default.toSentenceCase(e)}},6432:function(e,r,t){"use strict";t.r(r);t(67294);var n=t(11163),o=t(47123),a=t(85893);r.default=function(e){var r=(0,n.useRouter)(),t=(r&&r.query?r.query:[]).page;return t=t?parseInt(t):1,(0,a.jsx)(o.Z,{breadcrumbs:"/tv-shows/stories/remakes",entity:"tv-shows",page:t})}},65153:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tv-shows/stories/remakes",function(){return t(6432)}])}},function(e){e.O(0,[6499,5685,5218,3128,4471,2328,4010,90,5683,9774,2888,179],(function(){return r=65153,e(e.s=r);var r}));var r=e.O();_N_E=r}]);