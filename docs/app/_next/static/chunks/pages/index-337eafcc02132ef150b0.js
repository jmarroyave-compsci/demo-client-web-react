(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{67247:function(e,r,t){"use strict";t.d(r,{C:function(){return u}});t(67294);var n=t(29602),o=t(50367),c=t(58862),i=t(43826),a=t(85893),s=(0,n.ZP)("div")({padding:0,margin:"0 0 0.5rem 0"});function u(e){var r=e.data,t=(e.loading,e.mini),n=function(e,r){for(var t="",n=[],o=[],u=0,p=0;p<e.length;p++){var l,f=e[p];t!==f.category&&(n.length>0&&o.push((0,a.jsx)(s,{children:r?n.slice(0,2):n},u++)),n=[],t=f.category,n.push((0,a.jsx)(c.x4,{children:t.toUpperCase()},u++)));var b=f.entityType?f.entityType:null!==(l=f.entityId)&&void 0!==l&&l.startsWith("nm")?"person":"movie";n.push((0,a.jsx)(c.VY,{children:f.entityId?(0,a.jsx)(i.Z,{type:b,id:f.entityId,children:f.entity}):f.entity},u++))}n.length>0&&o.push((0,a.jsx)(s,{children:n},u++));return r?o.slice(0,3):o}(r,t);return n=t?n:(0,a.jsx)(o.RQ,{children:n}),(0,a.jsx)(a.Fragment,{children:n})}},43826:function(e,r,t){"use strict";t(67294);var n=t(49896),o=t(55476),c=t(44898),i=t(62226),a=t(11106),s=t(85893);r.Z=function(e){var r=e.id,t=e.type,u=e.children,p=e.box;switch(t){case"movie":return(0,s.jsx)(n.Z,{box:p,id:r,children:u});case"person":return(0,s.jsx)(o.Z,{box:p,id:r,children:u});case"podcast":return(0,s.jsx)(c.Z,{box:p,id:r,children:u});case"tv-show":return(0,s.jsx)(i.Z,{box:p,id:r,children:u});case"video-game":return(0,s.jsx)(a.Z,{box:p,id:r,children:u})}return(0,s.jsxs)("div",{children:["ENTITY ",t," NOT FOUND"]})}},42341:function(e,r,t){"use strict";t(67294);var n=t(89260),o=t(85893);r.Z=function(e){var r=e.id,t=e.children,c=e.box;return(0,o.jsx)(n.Z,{box:c,to:"/movies/festivals/".concat(r),children:t})}},55476:function(e,r,t){"use strict";t(67294);var n=t(89260),o=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return r?(0,o.jsx)(n.Z,{box:c,border:!1,to:"/people/".concat(r),children:t}):t}},44898:function(e,r,t){"use strict";t(67294);var n=t(89260),o=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return(0,o.jsx)(n.Z,{box:c,border:!0,to:"/podcasts/".concat(r),children:t})}},62226:function(e,r,t){"use strict";t(67294);var n=t(89260),o=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return(0,o.jsx)(n.Z,{box:c,border:!1,to:"/tv-shows/".concat(r),children:t})}},11106:function(e,r,t){"use strict";t(67294);var n=t(89260),o=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return(0,o.jsx)(n.Z,{box:c,border:!1,to:"/video-games/".concat(r),children:t})}},98543:function(e,r,t){"use strict";var n=t(4942),o=(t(67294),t(2093)),c=t(85893);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){return(0,c.jsx)(o.Z,a(a({},e),{},{render:"banner"}))}},2093:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var n=t(4942),o=(t(67294),t(11163)),c=t(55619),i={automata:{name:"about-project-blog"},page:{title:"the Log",description:"some lessons learned while programming this project",url:function(){return"/about/project/log"}},banner:{showData:!0}},a=(t(43332),t(89260)),s=t(58862),u=t(85893);function p(e){e.id;var r=e.title,t=(e.thumbnail,e.description,e.slug),n=e.sprint,o=e.day;return(0,u.jsx)(a.Z,{box:!0,href:"".concat(i.page.url(),"/posts/").concat(t),children:(0,u.jsxs)(s.Zh,{children:[(0,u.jsx)(s.x4,{children:"sprint ".concat(n," - day ").concat(o).toUpperCase()}),(0,u.jsx)(s.nv,{children:r})]})})}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e){var r=(0,o.useRouter)();return(0,u.jsx)(c.Z,{config:i,data:e.data,item:function(e){return(0,u.jsx)(p,f({},e))},params:f(f({},e),{},{loading:!1}),fetch:function(t){"banner"!==e.render&&r.push("".concat(i.page.url(),"/").concat(t.page))}})}},96251:function(e,r,t){"use strict";t.d(r,{Z:function(){return q}});var n,o=t(4942),c=t(67294),i=t(55619),a={automata:{name:"stories_awards"},page:{title:"Awards",description:"search and visualize the award's information from the Oscars, Golden Globes, Emmys and many more festivals across the world",url:function(e){var r=e.entity,t=e.year,n=e.page;return"/".concat(r,"/stories/awards?year=").concat(t,"&page=").concat(n)}},banner:{showData:!0}},s=t(15861),u=t(87757),p=t.n(u),l=t(24268),f=t(16161),b=t(11163),O=t(30168),j=t(54397),y=t(74273);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m,h=(0,j.Ps)(n||(n=(0,O.Z)(["\nquery get($year: Int, $page: Int) {\n  storiesMoviesAwards(year: $year, page: $page) {\n    festival {\n      id\n      name\n      image{\n        poster\n      }\n    }\n    year\n    awarded{\n      category\n      entity\n      won\n      entityId\n    }\n  }\n}\n"])));function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w=a.automata.name,x=(0,l.hg)("".concat(w,"/fetchData"),function(){var e=(0,s.Z)(p().mark((function e(r,t){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(Z(r)),e.next=3,o=r.entity,c=r.year,i=r.page,(0,y.h)(h,{entity:o,year:parseInt(c),page:parseInt(i)},(function(e){return g(g({},e),{},{data:e.data.storiesMoviesAwards})}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}var o,c,i}),e)})));return function(r,t){return e.apply(this,arguments)}}()),D=(0,l.oM)({name:w,initialState:{params:{renderer:null,year:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){var t,n;e.params=P(P({},e.params),r.payload),e.params.page=null!==(t=null===(n=e.params)||void 0===n?void 0:n.page)&&void 0!==t?t:1,"banner"!==e.params.renderer&&b.default.push("".concat(a.page.url(e.params)),null,{shallow:!0})}},extraReducers:(m={},(0,o.Z)(m,x.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(m,x.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(m,x.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),m)});f.h.reducerManager.add(w,D.reducer);D.reducer;var Z=D.actions.setParams,S=t(43332),E=(t(43826),t(42341)),_=t(57435),k=(t(59231),t(82356),t(67247)),C=t(85893);function M(e){var r=e.entity,t=e.year,n=e.festival,o=e.image,c=e.awarded;return(0,C.jsx)(_.Z,{box:!0,id:n.id,year:t,entity:r,children:(0,C.jsx)(S.Z,{image:null===o||void 0===o?void 0:o.poster,text:(0,C.jsx)(k.C,{data:c,mini:!0}),title:(0,C.jsx)(E.Z,{id:n.id,children:n.name}),subtitle:t})})}var N=t(14308),I=t(23845),T=t(78051),A=t(50367);function $(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?$(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Y(e){var r=e.onChange,t=(0,c.useMemo)((function(){return[{label:"Movies",id:"movies"}]}),[]),n=(0,c.useMemo)((function(){return function(){for(var e=[],r=(new Date).getFullYear();r>1920;r--)e.push({label:r.toString(),id:r.toString()});return e}()}),[]),o=(0,c.useState)(t.find((function(r){return r.id==e.entity}))),i=o[0],a=(o[1],(0,c.useState)(n.find((function(r){return r.id==e.year})))),s=a[0],u=a[1],p=function(e,t){r&&r(e.id,t.id)};return(0,C.jsx)(A.RQ,{children:(0,C.jsx)(N.Z,{spacing:2,children:(0,C.jsx)(T.Z,{id:"year",disableClearable:!0,options:n,value:s,onChange:function(e,r){p(r,i),u(r)},sx:{width:300},renderInput:function(e){return(0,C.jsx)(I.Z,R(R({},e),{},{label:"Year"}))}})})})}var F=t(50789);var G=function(e){var r=e.data,t=e.loading,n=e.fetch,o=e.params,i=e.item,a=(0,c.useState)(o.year),s=a[0],u=a[1],p=(0,c.useState)(o.entity),l=p[0],f=p[1],b=o.page;return(0,c.useEffect)((function(){u(o.year),f(o.entity)}),[o]),(0,C.jsxs)(N.Z,{children:[!t&&(0,C.jsx)(Y,{year:s,entity:l,onChange:function(e,r){u(e),f(r),window.scrollTo(0,0),n({year:e,page:b})}}),(0,C.jsx)(F.Z,{data:r,loading:t,item:i,page:e.params.page,params:o,onPageChange:function(e){return n({year:s,page:e})}})]})};function U(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function V(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?U(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function q(e){return(0,C.jsx)(i.Z,{params:e,config:a,fetch:function(e){return x(V({},e))},item:function(r){return(0,C.jsx)(M,V(V({full:!0},r),{},{entity:e.entity}))},mainCol:function(e){return(0,C.jsx)(G,V({},e))}})}},92432:function(e,r,t){"use strict";t.d(r,{Z:function(){return M}});var n,o=t(4942),c=(t(67294),t(55619)),i={automata:{name:"stories_podcasts_music"},page:{title:"Music Podcasts",description:"",url:function(){return"/podcasts/stories/music"}},banner:{showData:!0}},a=t(15861),s=t(87757),u=t.n(s),p=t(24268),l=t(16161),f=t(11163),b=t(30168),O=t(54397),j=t(74273);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g,m=(0,O.Ps)(n||(n=(0,b.Z)(["\n  query getStory($page: Int)\n{\n  podcastsCategoryMusic(page: $page) {\n    id\n    title\n    link\n    image{\n      poster\n    }\n  }\n}\n"])));function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var P=i.automata.name,w=(0,p.hg)("".concat(P,"/fetchData"),function(){var e=(0,a.Z)(u().mark((function e(r,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(D(r)),e.next=3,n=r.page,(0,j.h)(m,{page:n},(function(e){return d(d({},e),{},{data:e.data.podcastsCategoryMusic})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(r,t){return e.apply(this,arguments)}}()),x=(0,p.oM)({name:P,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=v(v({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&f.default.push("".concat(i.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(g={},(0,o.Z)(g,w.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(g,w.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(g,w.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),g)});l.h.reducerManager.add(P,x.reducer);x.reducer;var D=x.actions.setParams,Z=t(43332),S=t(44898),E=(t(59231),t(85893));function _(e){var r=e.id,t=e.title,n=(e.awards,e.full,e.image),o=e.description;e.box;return(0,E.jsx)(S.Z,{box:!0,id:r,entity:name,style:{width:"100%"},children:(0,E.jsx)(Z.Z,{image:null===n||void 0===n?void 0:n.poster,text:o,title:t})})}function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function M(e){return(0,E.jsx)(c.Z,{params:e,config:i,fetch:function(e){return w(C({},e))},item:function(e){return(0,E.jsx)(_,C({full:!0},e))}})}},85670:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});t(67294);var n=t(29602),o=(t(43332),t(89260)),c=t(9092),i=t(85893),a=(0,n.ZP)("div")((function(e){var r=e.theme,t=e.img;return{width:"100%",height:"7rem",padding:"1rem",color:r.palette.primary.contrastText,backgroundColor:r.palette.background.paper,backgroundImage:"url('".concat(c.Z.APP.BASE_PATH).concat(t,"')"),margin:"0 2px 2px 0",display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center",flex:1,fontSize:"1.8rem",lineHeight:"2rem",textTransform:"lowercase"}}));function s(e){e.id;var r=e.name,t=e.url,n=e.img;return(0,i.jsx)(o.Z,{box:!0,href:t,children:(0,i.jsx)(a,{img:n,children:r})})}},75588:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return W},default:function(){return X}});var n=t(4942),o=t(67294),c=t(93942),i=t(19016),a=t(14308),s=t(40915),u=t(96251),p=t(85893);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b=function(e){return(0,p.jsx)(u.Z,f(f({},e),{},{render:"banner"}))},O=t(41821);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(e){return(0,p.jsx)(O.Z,y(y({},e),{},{render:"banner"}))},g=t(92432);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v=function(e){return(0,p.jsx)(g.Z,h(h({},e),{},{render:"banner"}))},P=t(98543),w={title:"Professions",description:"you can take a look to peopl"},x=t(529),D=t(85670);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){return(0,p.jsx)(D.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))}var E=t(45688);function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){return(0,p.jsx)(x.Z,{showData:!0,title:w.title,description:(0,p.jsx)(E.C,{tag:"director,actor,writer"}),data:[{name:"Actors",url:"/movies/stories/actors",img:"/img/ba_pro_act.jpg"},{name:"Directors",url:"/movies/stories/directors",img:"/img/ba_pro_dir.jpg"},{name:"Writers",url:"/movies/stories/writers",img:"/img/ba_pro_wri.jpg"},{name:"Producers",url:"/movies/stories/producers",img:"/img/ba_pro_wri.jpg"}],item:function(e){return(0,p.jsx)(S,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({full:!0},e))},renderer:"tiles",xs:12,sm:6,md:3,lg:3})}function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function M(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var N=function(e){return(0,p.jsx)(k,M(M({},e),{},{render:"banner"}))},I=(t(55619),{title:"Dashboards",description:""});function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function A(e){return(0,p.jsx)(D.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))}function $(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){return(0,p.jsx)(x.Z,{showData:!0,title:I.title,description:(0,p.jsx)(E.C,{tag:"data"}),data:[{name:"People",url:"/people",img:"/img/ba_pro_act.jpg"},{name:"Movies",url:"/movies",img:"/img/ba_pro_dir.jpg"},{name:"TV Shows",url:"/tv-shows",img:"/img/ba_pro_wri.jpg"},{name:"Video Games",url:"/video-games",img:"/img/ba_pro_wri.jpg"},{name:"Podcasts",url:"/podcasts",img:"/img/ba_pro_wri.jpg"},{name:"Festivals",url:"/movies/festivals",img:"/img/ba_pro_wri.jpg"}],item:function(e){return(0,p.jsx)(A,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?$(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({full:!0},e))},renderer:"tiles",xs:12,sm:6,md:4,lg:4})}function Y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Y(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var G=function(e){return(0,p.jsx)(R,F(F({},e),{},{render:"banner"}))};function U(e){var r=(0,c.I0)(),t=(e.data,e.blog),n=function(e){return Math.floor(Math.random()*e)+1};return(0,o.useEffect)((function(){r((0,i.YA)({breadcrumbs:e.breadcrumbs}))}),[]),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(s.Z,{className:"section-1",children:(0,p.jsx)(b,{entity:"movies",year:2018-n(50)})}),(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)(d,{entity:"movies",page:n(10)})}),(0,p.jsx)(s.Z,{className:"section-3",children:(0,p.jsx)(N,{})}),(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)(G,{})}),(0,p.jsx)(s.Z,{className:"section-0",children:(0,p.jsx)(v,{page:n(10)})}),(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)(P.Z,{data:t})})]})}function V(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?V(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var z=function(e){return(0,p.jsx)(U,q(q({},e),{},{render:"page"}))};function H(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?H(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var W=!0,X=function(e){var r=Q({},e);return(0,p.jsx)(z,Q(Q({},r),{},{breadcrumbs:"/"}))}},78581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(75588)}])}},function(e){e.O(0,[6499,5685,5218,3128,4471,2328,4197,1544,5688,1821,9774,2888,179],(function(){return r=78581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);