"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1821],{59231:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(67294),i=r(29602),a=r(50367),o=r(58862),c=r(82356),s=(r(52651),r(23275),r(74288),r(89260)),l=r(57435),u=r(87550),d=r(39660),f=r(21314),p=r(56775),v=r(72162),h=r(65148),m=r(54123),j=r(85893),y=(0,i.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),g=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),b=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),x=(0,i.ZP)("div")({fontSize:"1.30rem",lineHeight:"1.4rem"}),O=(0,i.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),Z=(0,i.ZP)("div")({paddingLeft:"1rem"}),P=function(e){var n=e.year,r=e.children;return(0,j.jsx)(s.Z,{href:"/movies/stories/awards?year=".concat(n),children:r})};function w(e){var n=e.data,r=[],i={};return n&&0!=n.length?((0,t.useMemo)((function(){(r=(r=n.slice(0)).sort((function(e,n){var r,t,i,a;return e.year!=n.year?e.year<n.year?1:-1:(null===e||void 0===e||null===(r=e.festival)||void 0===r?void 0:r.name)!=(null===n||void 0===n||null===(t=n.festival)||void 0===t?void 0:t.name)?(null===e||void 0===e||null===(i=e.festival)||void 0===i?void 0:i.name)<(null===n||void 0===n||null===(a=n.festival)||void 0===a?void 0:a.name)?-1:1:e.category<n.category?-1:1}))).forEach((function(e){var n,r,t=null!==(n=null===(r=e.festival)||void 0===r?void 0:r.name)&&void 0!==n?n:"festival name";i[e.year]||(i[e.year]={}),i[e.year][t]||(i[e.year][t]={id:e.festival.id}),i[e.year][t][e.category]||(i[e.year][t][e.category]={won:e.won})}))}),[n]),!0===e.mini?function(e,n){var r=e.year,t=e.all,i=t?n.length:2;r=parseInt(r);var a=function(e){return!r||e.year==r};return(0,j.jsxs)(y,{children:[n&&n.length>0&&n.slice(0,i).map((function(e,n){var r,t;return a(e)&&(0,j.jsx)("div",{children:(0,j.jsx)(P,{year:e.year,children:(0,j.jsxs)(g,{children:[e.year," - ",(null!==(r=null===(t=e.festival)||void 0===t?void 0:t.name)&&void 0!==r?r:"festival name").toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},n)})),!t&&n&&n.length>i&&(0,j.jsx)(g,{children:(0,j.jsx)(g,{children:(0,j.jsxs)(b,{children:["and ",n.length-i," more"]})})})]})}(e,r):function(e,n){return(0,j.jsxs)(a.RQ,{children:[(0,j.jsx)(o.DK,{children:"awards"}),(0,j.jsx)(u.Z,{children:n&&Object.keys(n).reverse().map((function(e,r){return(0,j.jsxs)(d.Z,{children:[(0,j.jsx)(m.Z,{style:{flex:0},color:"text.secondary",children:(0,j.jsx)(P,{year:e,children:(0,j.jsx)(x,{children:e})})}),(0,j.jsxs)(f.Z,{children:[(0,j.jsx)(h.Z,{}),r+1<Object.keys(n).length&&(0,j.jsx)(p.Z,{})]}),(0,j.jsx)(v.Z,{children:Object.keys(n[e]).map((function(r){return(0,j.jsxs)("div",{children:[(0,j.jsx)(l.Z,{entity:"movies",year:e,id:n[e][r].id,children:(0,j.jsx)(O,{children:r})}),Object.keys(n[e][r]).filter((function(e){return"id"!==e})).map((function(t){return(0,j.jsx)(Z,{children:(0,j.jsx)(c.Z,{title:!1===n[e][r][t].won?"nominee":"winner",value:t})},t)}))]},n[e][r].id)}))})]},e)}))})]})}(0,i)):(0,j.jsx)("div",{})}},57435:function(e,n,r){r(67294);var t=r(89260),i=r(85893);n.Z=function(e){var n=e.box,r=e.id,a=e.year,o=e.entity,c=e.children;return(0,i.jsx)(t.Z,{box:n,to:"/".concat(o,"/stories/awards/").concat(r,"/").concat(a),children:c})}},49896:function(e,n,r){r(67294);var t=r(89260),i=r(85893);n.Z=function(e){var n=e.id,r=(e.entity,e.children),a=e.box;return n?(0,i.jsx)(t.Z,{box:a,border:!1,to:"/movies/".concat(n),children:r}):r}},41821:function(e,n,r){r.d(n,{Z:function(){return I}});var t,i,a=r(4942),o=(r(67294),r(55619)),c={automata:{name:"stories_remakes"},page:{title:"Remakes",description:"",url:function(e){var n=e.entity;return"/".concat(n,"/stories/remakes")}},banner:{showData:!0}},s=r(15861),l=r(87757),u=r.n(l),d=r(24268),f=r(16161),p=r(11163),v=r(30168),h=r(54397),m=r(74273);function j(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?j(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var g,b=(0,h.Ps)(t||(t=(0,v.Z)(["\nfragment PersonInfoTiny on Person {\n  id\n  name\n}\n"]))),x=(0,h.Ps)(i||(i=(0,v.Z)(["\n","\n  query GetData($page: Int){\n  storiesMoviesRemakes(page: $page){\n    name\n    count\n    recs{\n      id\n      releaseYear\n      type\n      genre\n      directed{\n        id{\n          ...PersonInfoTiny\n        } \n      }\n    }\n  }\n}\n"])),b);function O(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function Z(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?O(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var P=c.automata.name,w=(0,d.hg)("".concat(P,"/fetchData"),function(){var e=(0,s.Z)(u().mark((function e(n,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(E(n)),e.next=3,t=n.page,(0,m.h)(x,{page:t},(function(e){return y(y({},e),{},{data:e.data.storiesMoviesRemakes})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var t}),e)})));return function(n,r){return e.apply(this,arguments)}}()),D=(0,d.oM)({name:P,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,n){e.params=Z(Z({},e.params),n.payload),"banner"!=e.params.renderer&&1!=e.params.page&&p.default.push("".concat(c.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(g={},(0,a.Z)(g,w.pending,(function(e,n){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(g,w.fulfilled,(function(e,n){var r=n.payload,t=r.loading,i=r.error,a=r.data;e.data=a,e.loading=t,e.error=i})),(0,a.Z)(g,w.rejected,(function(e,n){var r=n.error;e.data=[],e.loading=!1,e.error=r})),g)});f.h.reducerManager.add(P,D.reducer);D.reducer;var E=D.actions.setParams,k=r(43332),S=r(49896),A=(r(59231),r(19888),r(82356)),H=r(85893);function R(e){var n=e.image,r=e.name,t=(e.count,e.recs);return(0,H.jsx)(k.Z,{image:n?n.poster:n,text:(0,H.jsx)("div",{children:t.slice(0,3).map((function(e,n){var r,t,i;return(0,H.jsx)(A.Z,{title:e.releaseYear,value:(0,H.jsx)(T,{id:e.id,children:null!==(r=null===(t=e.directed[0])||void 0===t||null===(i=t.id)||void 0===i?void 0:i.name)&&void 0!==r?r:"?"},n)},n)}))}),title:r})}function T(e){var n=e.id,r=e.children;return n?(0,H.jsx)(S.Z,{id:n,children:(0,H.jsx)("div",{children:r})}):r}r(45688);function _(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function C(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?_(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function I(e){return(0,H.jsx)(o.Z,{params:e,config:c,fetch:function(e){return w(C({},e))},item:function(e){return(0,H.jsx)(R,C({full:!0},e))}})}},19888:function(e,n,r){r.d(n,{Rx:function(){return o},T5:function(){return c}});var t=r(92077),i=r.n(t),a=r(24417),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return i()(Number(e)).format(n)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.default.toSentenceCase(e)}},43332:function(e,n,r){r(67294);var t=r(65295),i=r(18515),a=r(42643),o=r(54962),c=r(49161),s=r(2658),l=r(360),u=r(9092),d=r(6447),f=r(27054),p=r(85893),v=(0,f.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),h="".concat(u.Z.APP.BASE_PATH).concat(u.Z.DEFAULTS.IMAGE_PLACEHOLDER),m=function(e){return e.target.src=h};n.Z=function(e){var n,r=v(),f=e.title,h=e.subtitle,j=e.text,y=e.image,g=e.imageHeight,b=void 0===g?180:g,x=e.noImage,O=e.actions,Z=0;h=h||"";return x=!!x,y=y||u.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,p.jsxs)(t.Z,{style:{flexGrow:1,width:"100%"},children:[(0,p.jsx)(i.Z,{sx:{width:"100%"},classes:{content:r.headerContent,root:r.headerRoot},title:(0,p.jsx)(d.ZP,{title:f,placement:"bottom-start",children:(0,p.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,p.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:f})})}),subheader:h}),!x&&(0,p.jsx)(o.Z,{height:b||null,image:null!==(n=y)&&void 0!==n&&n.startsWith("/")?"".concat(u.Z.APP.BASE_PATH).concat(y):y,component:"img",onError:m}),j&&(0,p.jsx)(a.Z,{children:(0,l.HD)(j)?(0,p.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:j}):j}),O&&O.length>0&&(0,p.jsx)(c.Z,{children:O.map((function(e){return(0,p.jsx)("div",{children:e},Z++)}))})]})}},74288:function(e,n,r){r(67294),r(85893)}}]);