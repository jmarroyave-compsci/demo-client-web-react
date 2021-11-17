(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8431],{31679:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return I}});r(67294);var n=r(11163),a=r(4942),o=r(55619),i={automata:{name:"page_tv_show"},page:{url:function(t){var e=t.id;return"/tv-shows/".concat(e)}}},s=(r(70357),r(52651),r(23275),r(28388)),c=r(84307),u=r(64129),l=r(97060),d=r(59231),p=r(59067),f=r(97820),j=(r(27159),r(48724)),y=r(12868),O=(r(74288),r(14308)),b=r(29110),g=r(50367),v=r(58862),w=r(82356),h=r(85893);function m(t){var e=t.data;t.loading;return e=e||{},(0,h.jsxs)(O.Z,{children:[(0,h.jsx)(y.Z,{src:e.image?e.image.poster:null}),(0,h.jsxs)(O.Z,{direction:"row",children:[(0,h.jsx)(j.Z,{color:"primary",text:e.type}),(0,h.jsx)(f.Z,{data:e.genre})]}),(0,h.jsx)(p.Z,{text:e.title}),(0,h.jsxs)(g.RQ,{children:[(0,h.jsx)(v.DK,{children:"general information"}),(0,h.jsx)(w.Z,{title:"Released",data:e.releasedDate,format:"year"}),(0,h.jsx)(w.Z,{title:"Duration",data:e.duration,sufix:"mins"}),(0,h.jsx)(w.Z,{title:"Classification",data:e.classification}),(0,h.jsx)(w.Z,{title:"Language",data:e.language}),(0,h.jsx)(w.Z,{title:"Country",data:e.country}),(0,h.jsx)(w.Z,{title:"Production",data:e.production})]}),(0,h.jsx)(s.Z,{data:e}),(0,h.jsx)(u.Z,{data:e.rating}),(0,h.jsx)(l.Z,{type:"cast",data:e.cast,story:"/movies/stories/actors"}),(0,h.jsx)(d.Z,{data:e.awards}),(0,h.jsx)(b.Z,{title:"plot",text:e.plot?e.plot:e.description}),(0,h.jsx)(l.Z,{type:"directors",data:e.directors,story:"/movies/stories/directors"}),(0,h.jsx)(l.Z,{type:"writers",data:e.writers,story:"/movies/stories/writers"}),(0,h.jsx)(l.Z,{type:"crew",data:e.cast}),(0,h.jsx)(c.Z,{data:e.streamBy})]})}var x=r(28973);function P(t){return(0,h.jsx)(g.X,{children:(0,h.jsxs)(O.Z,{spacing:1,children:[(0,h.jsx)(x.Z,{variant:"rectangular",height:300}),(0,h.jsx)(x.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,h.jsx)(x.Z,{variant:"text",style:{width:"40%"}}),(0,h.jsx)(x.Z,{variant:"text",style:{width:"25%"}}),(0,h.jsx)(x.Z,{variant:"text",style:{width:"25%"}}),(0,h.jsx)(x.Z,{variant:"text",style:{width:"25%"}})]})})}var Z,D=r(15861),_=r(87757),E=r.n(_),S=r(24268),k=r(16161),N=r(30168),R=r(54397),C=r(74273);function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var q,M=(0,R.Ps)(Z||(Z=(0,N.Z)(["\n  query GetData($id: String!)\n  {\n    tVShow(id: $id) {\n    id\n    title\n    country\n    type\n    genres\n    duration\n    ratings {\n      averageRating\n      name\n    }\n    releaseYear\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    awards {\n      category\n      festival{\n        id\n        name\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    }\n  }\n"])));function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $=i.automata.name,A=(0,S.hg)("".concat($,"/fetchData"),function(){var t=(0,D.Z)(E().mark((function t(e,r){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(K(e)),t.next=3,n=e.id,(0,C.h)(M,{id:n},(function(t){return X(X({},t),{},{data:t.data.tVShow})}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}var n}),t)})));return function(e,r){return t.apply(this,arguments)}}()),G=(0,S.oM)({name:$,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,e){t.params=V(V({},t.params),e.payload),"banner"!=t.params.renderer&&1!=t.params.page&&n.default.push("".concat(i.page.url(t.params)),null,{shallow:!0})}},extraReducers:(q={},(0,a.Z)(q,A.pending,(function(t,e){t.data=null,t.loading=!0,t.error=""})),(0,a.Z)(q,A.fulfilled,(function(t,e){var r=e.payload,n=r.loading,a=r.error,o=r.data;t.data=o,t.loading=n,t.error=a})),(0,a.Z)(q,A.rejected,(function(t,e){var r=e.error;t.data=[],t.loading=!1,t.error=r})),q)});k.h.reducerManager.add($,G.reducer);G.reducer;var K=G.actions.setParams;function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Y(t){return(0,h.jsx)(o.Z,{params:Q(Q({},t),{},{breadcrumbs:function(e){var r,n;return"".concat(t.breadcrumbs,"/").concat(null!==(r=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.title)&&void 0!==r?r:"loading")}}),config:i,fetch:function(t){return A(Q({},t))},detail:function(t){return(0,h.jsx)(m,{data:t.data})},skeleton:(0,h.jsx)(P,{})})}function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var H=function(t){return(0,h.jsx)(Y,F(F({},t),{},{render:"detail"}))},I=function(t){var e,r,a=(0,n.useRouter)(),o=t.id?t.id:null!==(e=null===(r=a.query)||void 0===r?void 0:r["tv-show"])&&void 0!==e?e:"";return(0,h.jsx)(H,{breadcrumbs:"/tv-shows",id:o})}},86229:function(t,e,r){"use strict";r.r(e);var n=r(31679),a=r(85893);e.default=function(t){return(0,a.jsx)(n.default,{id:"tt0454876"})}},13391:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tv-shows/tt0454876",function(){return r(86229)}])}},function(t){t.O(0,[6499,5685,5218,3128,4471,1216,4197,4999,5863,9125,9774,2888,179],(function(){return e=13391,t(t.s=e);var e}));var e=t.O();_N_E=e}]);