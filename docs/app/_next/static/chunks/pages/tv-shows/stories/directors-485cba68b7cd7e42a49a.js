(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7671],{25662:function(r,e,t){"use strict";t.d(e,{Z:function(){return s}});t(67294);var n=t(43332),i=t(55476),o=(t(59231),t(39698)),c=t(82356),a=t(85893);function s(r){var e=r.tiny,t=r.format;switch(t=e?"tiny":t){case"list":return function(r){var e=r.id,t=r.name,n=r.as;return(0,a.jsx)(o.xs,{width:"220px",height:"125px",children:(0,a.jsxs)(i.Z,{id:e,children:[(0,a.jsx)("div",{children:(0,a.jsx)(o.Dx,{children:null!==t&&void 0!==t?t:"?"})}),n&&(0,a.jsx)("div",{children:(0,a.jsxs)(o.x4,{children:["as ",n.replace(/[\[\]\'\"]/g,"")]})})]})},e)}(r);case"tiny":return function(r){var e=r.id,t=r.name,n=r.releaseYear;return(0,a.jsx)(i.Z,{id:e,children:(0,a.jsx)(c.Z,{value:t,title:n})})}(r);case"card":default:return function(r){var e=r.id,t=r.name,o=r.text;r.box;return(0,a.jsx)(i.Z,{box:!0,id:e,entity:t,children:(0,a.jsx)(n.Z,{title:t,text:o})},e)}(r)}}},55476:function(r,e,t){"use strict";t(67294);var n=t(89260),i=t(85893);e.Z=function(r){var e=r.id,t=(r.entity,r.children),o=r.box;return e?(0,i.jsx)(n.Z,{box:o,border:!1,to:"/people/".concat(e),children:t}):t}},2295:function(r,e,t){"use strict";var n=t(4942),i=(t(67294),t(50367)),o=t(58862),c=t(34769),a=t(20780),s=t(85893);function u(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function p(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,n.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}e.Z=function(r){var e=r.data,t=(r.loading,r.type),n=r.filter;if(!e||0==e.length)return(0,s.jsx)("div",{});var u=r.tiny?e.slice(0,3):e;u=n?u.filter(n):u;var l=(0,s.jsxs)(o.DK,{children:[t,(0,s.jsxs)(o.x4,{children:[" [",u.length,"]"]})]});return(0,s.jsxs)(i.RQ,{children:[!r.tiny&&l,r.tiny&&u.map((function(r,e){return(0,s.jsx)("div",{children:(0,s.jsx)(a.Z,p({format:"tiny"},r.id))},e)})),!r.tiny&&(0,s.jsx)(c.Z,{data:u,item:function(r){return(0,s.jsx)(a.Z,p(p({format:"list"},r),r.id))}}),r.tiny&&e.length>u.length&&(0,s.jsxs)(o.x4,{children:["and ",e.length-u.length," more"]})]})}},87351:function(r,e,t){"use strict";t.d(e,{Z:function(){return T}});var n,i=t(4942),o=(t(67294),t(55619)),c={automata:{name:"stories_directors"},page:{title:"Directors",description:"",url:function(r){var e=r.entity;return"/".concat(e,"/stories/directors")}},banner:{showData:!1}},a=t(15861),s=t(87757),u=t.n(s),p=t(24268),l=t(16161),f=t(11163),d=t(30168),O=t(54397),j=t(74273),b=t(61878);function y(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function g(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){(0,i.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var h,v=(0,O.Ps)(n||(n=(0,d.Z)(["\n  ","\n  query GetData($page: Int)\n  {\n    storiesPeopleDirectors(page: $page){\n      id\n      name\n      directed {\n        id{\n          ...MovieInfoTiny\n        } \n      }      \n    }\n  }\n"])),b.Ne);function m(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function P(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,i.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var w=c.automata.name,x=(0,p.hg)("".concat(w,"/fetchData"),function(){var r=(0,a.Z)(u().mark((function r(e,t){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.dispatch(D(e)),r.next=3,n=e.page,(0,j.h)(v,{page:n},(function(r){return g(g({},r),{},{data:r.data.storiesPeopleDirectors})}));case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}var n}),r)})));return function(e,t){return r.apply(this,arguments)}}()),Z=(0,p.oM)({name:w,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(r,e){r.params=P(P({},r.params),e.payload),"banner"!=r.params.renderer&&1!=r.params.page&&f.default.push("".concat(c.page.url(r.params),"/?page=").concat(r.params.page),null,{shallow:!0})}},extraReducers:(h={},(0,i.Z)(h,x.pending,(function(r,e){r.data=null,r.loading=!0,r.error=""})),(0,i.Z)(h,x.fulfilled,(function(r,e){var t=e.payload,n=t.loading,i=t.error,o=t.data;r.data=o,r.loading=n,r.error=i})),(0,i.Z)(h,x.rejected,(function(r,e){var t=e.error;r.data=[],r.loading=!1,r.error=t})),h)});l.h.reducerManager.add(w,Z.reducer);Z.reducer;var D=Z.actions.setParams,E=t(25662),_=t(2295),k=t(85893);function S(r){var e=r.id,t=r.name;r.directed;return(0,k.jsx)(E.Z,{id:e,name:t,text:(0,k.jsx)(_.Z,{tiny:!0,data:r.directed})})}var N=t(45688);function C(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function q(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?C(Object(t),!0).forEach((function(e){(0,i.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function I(r){return(0,k.jsx)(o.Z,{params:r,config:c,fetch:function(r){return x(q({},r))},item:function(r){return(0,k.jsx)(S,q({full:!0},r))},customDescription:(0,k.jsx)(N.C,{tag:"director"}),customUrl:function(r){return c.page.url(r.entity)}})}function M(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function R(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?M(Object(t),!0).forEach((function(e){(0,i.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var T=function(r){return(0,k.jsx)(I,R(R({},r),{},{render:"list"}))}},34769:function(r,e,t){"use strict";t.d(e,{Z:function(){return a}});t(67294);var n=t(29602),i=t(26447),o=t(85893),c=(0,n.ZP)("div")((function(){return{padding:"1rem",marginBottom:"2rem",backgroundColor:"transparent"}}));function a(r){var e=r.data,t=r.item;return(0,o.jsx)(c,{children:(0,o.jsx)(i.Z,{direction:"row",style:{overflowX:"auto"},children:e.map((function(r,e){return(0,o.jsx)("div",{children:t(r)},e)}))})})}},49834:function(r,e,t){"use strict";t.r(e);t(67294);var n=t(11163),i=t(87351),o=t(85893);e.default=function(r){var e=(0,n.useRouter)(),t=(e&&e.query?e.query:[]).page;return t=t?parseInt(t):1,(0,o.jsx)(i.Z,{page:t,entity:"tv-shows",breadcrumbs:"/tv-shows/stories/directors"})}},99358:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tv-shows/stories/directors",function(){return t(49834)}])}},function(r){r.O(0,[6499,5685,5218,3128,4471,4197,4999,6627,5688,9774,2888,179],(function(){return e=99358,r(r.s=e);var e}));var e=r.O();_N_E=e}]);