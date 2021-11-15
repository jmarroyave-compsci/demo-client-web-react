(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1811],{60111:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});r(67294);var n=r(11163),a=r(4942),o=r(55619),i={automata:{name:"page_movie_festival"},page:{url:function(e){var t=e.id;return"/movies/festivals/".concat(t)}}},c=r(28388),s=r(59067),u=r(12868),l=r(14308),f=r(50367),p=r(58862),d=r(82356),O=r(85893);function j(e){var t=e.data;return console.log(t),(0,O.jsx)(f.RQ,{children:(0,O.jsxs)(l.Z,{children:[(0,O.jsx)(u.Z,{src:t.image?t.image.poster:null}),(0,O.jsx)(s.Z,{text:t.name}),(0,O.jsxs)(f.RQ,{children:[(0,O.jsx)(p.DK,{children:"general information"}),(0,O.jsx)(d.Z,{title:"started",data:t.startYear}),(0,O.jsx)(d.Z,{title:"country",data:t.country}),(0,O.jsx)(d.Z,{title:"continent",data:t.continent})]}),(0,O.jsx)(c.Z,{data:t})]})})}var b=r(28973);function v(e){return(0,O.jsx)(f.X,{children:(0,O.jsxs)(l.Z,{spacing:1,sx:{display:"flex",flexGrow:1},children:[(0,O.jsx)(b.Z,{variant:"rectangular",height:300}),(0,O.jsx)(b.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,O.jsx)(b.Z,{variant:"text",style:{width:"40%"}}),(0,O.jsx)(b.Z,{variant:"text",style:{width:"25%"}}),(0,O.jsx)(b.Z,{variant:"text",style:{width:"25%"}}),(0,O.jsx)(b.Z,{variant:"text",style:{width:"25%"}})]})})}var y,g=r(15861),m=r(87757),h=r.n(m),w=r(24268),P=r(16161),x=r(30168),Z=r(54397),D=r(74273);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k,S=(0,Z.Ps)(y||(y=(0,x.Z)(["\n  query GetData($id: String!)\n  {\n    movieFestival(id: $id) {\n      id\n      name\n      wiki\n      startYear\n      country\n      continent\n      image{\n        poster\n      }\n    }\n  }\n"])));function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=i.automata.name,q=(0,w.hg)("".concat(X,"/fetchData"),function(){var e=(0,g.Z)(h().mark((function e(t,r){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(F(t)),e.next=3,n=t.id,(0,D.h)(S,{id:n},(function(e){return E(E({},e),{},{data:e.data.movieFestival})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(t,r){return e.apply(this,arguments)}}()),C=(0,w.oM)({name:X,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=R(R({},e.params),t.payload),"banner"!=e.params.renderer&&1!=e.params.page&&n.default.push("".concat(i.page.url(e.params)),null,{shallow:!0})}},extraReducers:(k={},(0,a.Z)(k,q.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(k,q.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,o=r.data;e.data=o,e.loading=n,e.error=a})),(0,a.Z)(k,q.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),k)});P.h.reducerManager.add(X,C.reducer);C.reducer;var F=C.actions.setParams;function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e){return(0,O.jsx)(o.Z,{params:M(M({},e),{},{breadcrumbs:function(t){var r,n;return"".concat(e.breadcrumbs,"/").concat(null!==(r=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.name)&&void 0!==r?r:"loading")}}),config:i,fetch:function(e){return q(M({},e))},detail:function(e){return(0,O.jsx)(j,{data:e.data})},skeleton:(0,O.jsx)(v,{})})}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function(e){return(0,O.jsx)(Q,Y(Y({},e),{},{render:"detail"}))},B=function(e){var t,r,a=(0,n.useRouter)(),o=e.id?e.id:null!==(t=null===(r=a.query)||void 0===r?void 0:r.festival)&&void 0!==t?t:"";return(0,O.jsx)($,{breadcrumbs:"/movies/festivals",id:o})}},47712:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/festivals/[festival]",function(){return r(60111)}])}},function(e){e.O(0,[6499,5685,5218,1216,4197,1544,5863,9774,2888,179],(function(){return t=47712,e(e.s=t);var t}));var t=e.O();_N_E=t}]);