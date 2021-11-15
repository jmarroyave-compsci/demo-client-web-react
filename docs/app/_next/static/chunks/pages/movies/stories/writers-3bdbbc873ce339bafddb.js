(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1441],{25662:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});n(67294);var t=n(43332),o=n(55476),i=(n(59231),n(39698)),a=n(82356),c=n(85893);function s(e){var r=e.tiny,n=e.format;switch(n=r?"tiny":n){case"list":return function(e){var r=e.id,n=e.name,t=e.as;return(0,c.jsx)(i.xs,{width:"220px",height:"125px",children:(0,c.jsxs)(o.Z,{id:r,children:[(0,c.jsx)("div",{children:(0,c.jsx)(i.Dx,{children:null!==n&&void 0!==n?n:"?"})}),t&&(0,c.jsx)("div",{children:(0,c.jsxs)(i.x4,{children:["as ",t.replace(/[\[\]\'\"]/g,"")]})})]})},r)}(e);case"tiny":return function(e){e.id,e.name,e.as;return(0,c.jsx)(o.Z,{id:item.id,children:(0,c.jsx)(a.Z,{value:item.title,title:item.releaseYear})})}(e);case"card":default:return function(e){var r=e.id,n=e.name,i=e.text;e.box;return(0,c.jsx)(o.Z,{box:!0,id:r,entity:n,children:(0,c.jsx)(t.Z,{title:n,text:i})},r)}(e)}}},55476:function(e,r,n){"use strict";n(67294);var t=n(89260),o=n(85893);r.Z=function(e){var r=e.id,n=(e.entity,e.children),i=e.box;return r?(0,o.jsx)(t.Z,{box:i,border:!1,to:"/people/".concat(r),children:n}):n}},61878:function(e,r,n){"use strict";n.d(r,{Ne:function(){return d},rQ:function(){return O}});var t,o,i,a=n(4942),c=n(30168),s=n(54397),u=n(74273);function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function f(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var l=(0,s.Ps)(t||(t=(0,c.Z)(["\nfragment PersonInfoTiny on Person {\n  id\n  name\n}\n"]))),d=(0,s.Ps)(o||(o=(0,c.Z)(["\n","\nfragment MovieInfoTiny on Movie {\n  id\n  title\n  releaseYear\n  directed{\n    id{\n      ...PersonInfoTiny\n    } \n  }\n}\n"])),l),O=function(e){return(0,u.h)(b,{id:e},(function(e){return f(f({},e),{},{data:e.data.person})}))},b=(0,s.Ps)(i||(i=(0,c.Z)(["\n","\nquery getPerson($id:String!) {\n  person(id: $id){\n    id\n    name\n    birthYear\n    deathYear\n    profession\n    awards {\n      category\n      festival{\n        id\n        name\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    produced{\n      id{\n        ...MovieInfoTiny\n      } \n    }\n    directed{\n      id{\n        ...MovieInfoTiny\n      } \n    }\n    acted {\n      id{\n        ...MovieInfoTiny\n      } \n      as\n    }\n    wrote{\n      id{\n        ...MovieInfoTiny\n      } \n    }\n    crew{\n      id{\n        ...MovieInfoTiny\n      } \n      as\n      cat\n      job\n    }    \n  }\n}\n"])),d)},21162:function(e,r,n){"use strict";n.d(r,{Z:function(){return $}});var t,o=n(4942),i=(n(67294),n(55619)),a={automata:{name:"stories_writers"},page:{title:"Writers",description:"",url:function(e){var r=e.entity;return"/".concat(r,"/stories/writers")}},banner:{showData:!1}},c=n(15861),s=n(87757),u=n.n(s),p=n(24268),f=n(16161),l=n(11163),d=n(30168),O=n(54397),b=n(74273),y=n(61878);function j(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?j(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var v,m=(0,O.Ps)(t||(t=(0,d.Z)(["\n  ","\n  query GetData($page: Int)\n  {\n    storiesPeopleWriters(page: $page){\n      id\n      name\n      wrote {\n        id{\n          ...MovieInfoTiny\n        } \n      }      \n    }\n  }\n"])),y.Ne);function P(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function w(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?P(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var h=a.automata.name,x=(0,p.hg)("".concat(h,"/fetchData"),function(){var e=(0,c.Z)(u().mark((function e(r,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(D(r)),e.next=3,t=r.page,(0,b.h)(m,{page:t},(function(e){return g(g({},e),{},{data:e.data.storiesPeopleWriters})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var t}),e)})));return function(r,n){return e.apply(this,arguments)}}()),Z=(0,p.oM)({name:h,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=w(w({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&l.default.push("".concat(a.page.url(e.params),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(v={},(0,o.Z)(v,x.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(v,x.fulfilled,(function(e,r){var n=r.payload,t=n.loading,o=n.error,i=n.data;e.data=i,e.loading=t,e.error=o})),(0,o.Z)(v,x.rejected,(function(e,r){var n=r.error;e.data=[],e.loading=!1,e.error=n})),v)});f.h.reducerManager.add(h,Z.reducer);Z.reducer;var D=Z.actions.setParams,E=n(25662),_=n(70138),S=n(85893);function I(e){var r=e.id,n=e.name,t=e.wrote;return console.log(e),(0,S.jsx)(E.Z,{id:r,name:n,text:(0,S.jsx)(_.Z,{tiny:!0,data:t})})}var T=n(45688);function k(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function M(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?k(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function N(e){return(0,S.jsx)(i.Z,{params:e,config:a,fetch:function(e){return x(M({},e))},item:function(e){return(0,S.jsx)(I,M({full:!0},e))},customDescription:(0,S.jsx)(T.C,{tag:"writer"}),customUrl:function(e){return a.page.url(e.entity)}})}function q(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function Y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?q(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var $=function(e){return(0,S.jsx)(N,Y(Y({},e),{},{render:"list"}))}},70077:function(e,r,n){"use strict";n.r(r);n(67294);var t=n(11163),o=n(21162),i=n(85893);r.default=function(e){var r=(0,t.useRouter)(),n=(r&&r.query?r.query:[]).page;return n=n?parseInt(n):1,(0,i.jsx)(o.Z,{page:n,entity:"movies",breadcrumbs:"/movies/stories/writers"})}},72852:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/writers",function(){return n(70077)}])}},function(e){e.O(0,[6499,5685,5218,3128,4471,4197,1544,138,5688,9774,2888,179],(function(){return r=72852,e(e.s=r);var r}));var r=e.O();_N_E=r}]);