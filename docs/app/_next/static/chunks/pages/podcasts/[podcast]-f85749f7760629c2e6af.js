(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583],{29110:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});r(67294);var n=r(50367),a=r(58862),o=r(85893);function c(t){var e=t.title,r=t.text;return r?(0,o.jsxs)(n.RQ,{children:[e&&(0,o.jsx)(a.DK,{children:e}),(0,o.jsx)(a.nv,{children:r})]}):(0,o.jsx)("div",{})}},29899:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return G}});r(67294);var n=r(11163),a=r(4942),o=r(55619),c={automata:{name:"page_podcast"},page:{url:function(t){var e=t.id;return"/podcasts/".concat(e)}}},i=(r(70357),r(52651),r(23275),r(27159),r(48724)),s=r(12868),u=r(59067),l=r(14308),d=r(29602),p=r(85893);(0,d.ZP)("h1")({margin:0});function f(t){var e=t.data;return e?(0,p.jsx)(l.Z,{direction:"row",children:(0,p.jsx)(i.Z,{text:e})}):(0,p.jsx)("div",{})}var j=r(29110),b=r(50367),O=r(58862),g=r(82356),y=r(28388);function v(t){var e=t.data;t.loading;return e=e||{},(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(s.Z,{src:e.image}),(0,p.jsx)(f,{data:e.category}),(0,p.jsx)(u.Z,{text:e.title,subText1:e.subtitle,subText2:e.author,link:e.link}),(0,p.jsx)(j.Z,{text:e.summary}),(0,p.jsxs)(b.RQ,{children:[(0,p.jsx)(O.DK,{children:"general information"}),(0,p.jsx)(g.Z,{title:"Created",data:e.createdDate,format:"date"}),(0,p.jsx)(g.Z,{title:"Language",data:e.language}),(0,p.jsx)(g.Z,{title:"Country",data:e.country})]}),(0,p.jsx)(y.Z,{website:e.link,data:e})]})}var h=r(28973);function x(t){return(0,p.jsx)(b.X,{children:(0,p.jsxs)(l.Z,{spacing:1,children:[(0,p.jsx)(h.Z,{variant:"rectangular",height:300}),(0,p.jsx)(h.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,p.jsx)(h.Z,{variant:"text",style:{width:"40%"}}),(0,p.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,p.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,p.jsx)(h.Z,{variant:"text",style:{width:"25%"}})]})})}var m,w=r(15861),P=r(87757),Z=r.n(P),D=r(24268),k=r(16161),E=r(30168),_=r(54397),S=r(74273);function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var R,T=(0,_.Ps)(m||(m=(0,E.Z)(["\nquery getPodcast($id:String!) {\n  podcast(id: $id){\n    id\n    title\n    subtitle\n    feedUrl\n    description\n    summary\n    author\n    link\n    language\n    image{\n      poster\n    }\n    category\n    subcategory\n    createdDate\n  }\n}\n"])));function X(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?X(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var K=c.automata.name,M=(0,D.hg)("".concat(K,"/fetchData"),function(){var t=(0,w.Z)(Z().mark((function t(e,r){return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch($(e)),t.next=3,n=e.id,(0,S.h)(T,{id:n},(function(t){return C(C({},t),{},{data:t.data.podcast})}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}var n}),t)})));return function(e,r){return t.apply(this,arguments)}}()),Q=(0,D.oM)({name:K,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,e){t.params=q(q({},t.params),e.payload),"banner"!=t.params.renderer&&1!=t.params.page&&n.default.push("".concat(c.page.url(t.params)),null,{shallow:!0})}},extraReducers:(R={},(0,a.Z)(R,M.pending,(function(t,e){t.data=null,t.loading=!0,t.error=""})),(0,a.Z)(R,M.fulfilled,(function(t,e){var r=e.payload,n=r.loading,a=r.error,o=r.data;t.data=o,t.loading=n,t.error=a})),(0,a.Z)(R,M.rejected,(function(t,e){var r=e.error;t.data=[],t.loading=!1,t.error=r})),R)});k.h.reducerManager.add(K,Q.reducer);Q.reducer;var $=Q.actions.setParams;function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function U(t){return(0,p.jsx)(o.Z,{params:L(L({},t),{},{breadcrumbs:function(e){var r,n;return"".concat(t.breadcrumbs,"/").concat(null!==(r=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.title)&&void 0!==r?r:"loading")}}),config:c,fetch:function(t){return M(L({},t))},detail:function(t){return(0,p.jsx)(v,{data:t.data})},skeleton:(0,p.jsx)(x,{})})}function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var F=function(t){return(0,p.jsx)(U,A(A({},t),{},{render:"detail"}))},G=function(t){var e,r,a=(0,n.useRouter)(),o=t.id?t.id:null!==(e=null===(r=a.query)||void 0===r?void 0:r.podcast)&&void 0!==e?e:"";return(0,p.jsx)(F,{breadcrumbs:"/podcasts",id:o})}},46668:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcasts/[podcast]",function(){return r(29899)}])}},function(t){t.O(0,[6499,5685,5218,1216,4197,1544,5863,9774,2888,179],(function(){return e=46668,t(t.s=e);var e}));var e=t.O();_N_E=e}]);