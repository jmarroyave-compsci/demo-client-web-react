(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3970],{25662:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});r(67294);var t=r(43332),o=r(55476),i=(r(59231),r(39698)),c=r(82356),a=r(85893);function s(e){var n=e.tiny,r=e.format;switch(r=n?"tiny":r){case"list":return function(e){var n=e.id,r=e.name,t=e.as;return(0,a.jsx)(i.xs,{width:"220px",height:"125px",children:(0,a.jsxs)(o.Z,{id:n,children:[(0,a.jsx)("div",{children:(0,a.jsx)(i.Dx,{children:null!==r&&void 0!==r?r:"?"})}),t&&(0,a.jsx)("div",{children:(0,a.jsxs)(i.x4,{children:["as ",t.replace(/[\[\]\'\"]/g,"")]})})]})},n)}(e);case"tiny":return function(e){e.id,e.name,e.as;return(0,a.jsx)(o.Z,{id:item.id,children:(0,a.jsx)(c.Z,{value:item.title,title:item.releaseYear})})}(e);case"card":default:return function(e){var n=e.id,r=e.name,i=e.text;e.box;return(0,a.jsx)(o.Z,{box:!0,id:n,entity:r,children:(0,a.jsx)(t.Z,{title:r,text:i})},n)}(e)}}},55476:function(e,n,r){"use strict";r(67294);var t=r(89260),o=r(85893);n.Z=function(e){var n=e.id,r=(e.entity,e.children),i=e.box;return n?(0,o.jsx)(t.Z,{box:i,border:!1,to:"/people/".concat(n),children:r}):r}},8424:function(e,n,r){"use strict";r.d(n,{Z:function(){return $}});var t,o=r(4942),i=(r(67294),r(55619)),c={automata:{name:"stories_actors"},page:{title:"Actors",description:"",url:function(e){var n=e.entity;return"/".concat(n,"/stories/actors")}},banner:{showData:!1}},a=r(15861),s=r(87757),u=r.n(s),p=r(24268),f=r(16161),d=r(11163),l=r(30168),O=r(54397),b=r(74273),y=r(61878);function j(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?j(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var v,m=(0,O.Ps)(t||(t=(0,l.Z)(["\n  ","\n  query GetData($page: Int)\n  {\n    storiesPeopleActors(page: $page){\n      id\n      name\n      acted {\n        id{\n          ...MovieInfoTiny\n        } \n      }      \n    }\n  }\n"])),y.Ne);function P(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?P(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var w=c.automata.name,x=(0,p.hg)("".concat(w,"/fetchData"),function(){var e=(0,a.Z)(u().mark((function e(n,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(D(n)),e.next=3,t=n.page,(0,b.h)(m,{page:t},(function(e){return g(g({},e),{},{data:e.data.storiesPeopleActors})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var t}),e)})));return function(n,r){return e.apply(this,arguments)}}()),Z=(0,p.oM)({name:w,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,n){e.params=h(h({},e.params),n.payload),"banner"!=e.params.renderer&&1!=e.params.page&&d.default.push("".concat(c.page.url(e.params),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(v={},(0,o.Z)(v,x.pending,(function(e,n){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(v,x.fulfilled,(function(e,n){var r=n.payload,t=r.loading,o=r.error,i=r.data;e.data=i,e.loading=t,e.error=o})),(0,o.Z)(v,x.rejected,(function(e,n){var r=n.error;e.data=[],e.loading=!1,e.error=r})),v)});f.h.reducerManager.add(w,Z.reducer);Z.reducer;var D=Z.actions.setParams,E=r(25662),_=r(70138),S=r(85893);function I(e){var n=e.id,r=e.name,t=e.acted;return(0,S.jsx)(E.Z,{id:n,name:r,text:(0,S.jsx)(_.Z,{tiny:!0,data:t})})}var T=r(45688);function k(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function M(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?k(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function N(e){return(0,S.jsx)(i.Z,{params:e,config:c,fetch:function(e){return x(M({},e))},item:function(e){return(0,S.jsx)(I,M({full:!0},e))},customDescription:(0,S.jsx)(T.C,{tag:"actor"}),customUrl:function(e){return c.page.url(e.entity)}})}function q(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function Y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?q(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var $=function(e){return(0,S.jsx)(N,Y(Y({},e),{},{render:"list"}))}},61878:function(e,n,r){"use strict";r.d(n,{Ne:function(){return l},rQ:function(){return O}});var t,o,i,c=r(4942),a=r(30168),s=r(54397),u=r(74273);function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){(0,c.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=(0,s.Ps)(t||(t=(0,a.Z)(["\nfragment PersonInfoTiny on Person {\n  id\n  name\n}\n"]))),l=(0,s.Ps)(o||(o=(0,a.Z)(["\n","\nfragment MovieInfoTiny on Movie {\n  id\n  title\n  releaseYear\n  directed{\n    id{\n      ...PersonInfoTiny\n    } \n  }\n}\n"])),d),O=function(e){return(0,u.h)(b,{id:e},(function(e){return f(f({},e),{},{data:e.data.person})}))},b=(0,s.Ps)(i||(i=(0,a.Z)(["\n","\nquery getPerson($id:String!) {\n  person(id: $id){\n    id\n    name\n    birthYear\n    deathYear\n    profession\n    awards {\n      category\n      festival{\n        id\n        name\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    produced{\n      id{\n        ...MovieInfoTiny\n      } \n    }\n    directed{\n      id{\n        ...MovieInfoTiny\n      } \n    }\n    acted {\n      id{\n        ...MovieInfoTiny\n      } \n      as\n    }\n    wrote{\n      id{\n        ...MovieInfoTiny\n      } \n    }\n    crew{\n      id{\n        ...MovieInfoTiny\n      } \n      as\n      cat\n      job\n    }    \n  }\n}\n"])),l)},91904:function(e,n,r){"use strict";r.r(n);r(67294);var t=r(11163),o=r(8424),i=r(85893);n.default=function(e){var n=(0,t.useRouter)(),r=(n&&n.query?n.query:[]).page;return r=r?parseInt(r):1,(0,i.jsx)(o.Z,{page:r,entity:"movies",breadcrumbs:"/movies/stories/actors"})}},15584:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/actors",function(){return r(91904)}])}},function(e){e.O(0,[6499,5685,5218,3128,4471,4197,1544,138,5688,9774,2888,179],(function(){return n=15584,e(e.s=n);var n}));var n=e.O();_N_E=n}]);