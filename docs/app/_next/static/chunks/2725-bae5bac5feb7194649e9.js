"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2725],{59231:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(67294),i=t(29602),o=t(50367),a=t(58862),c=t(82356),d=(t(52651),t(23275),t(74288),t(89260)),l=t(57435),s=t(87550),u=t(39660),f=t(21314),p=t(56775),h=t(72162),v=t(65148),g=t(54123),x=t(85893),m=(0,i.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),y=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),j=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),b=(0,i.ZP)("div")({fontSize:"1.30rem",lineHeight:"1.4rem"}),Z=(0,i.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),O=(0,i.ZP)("div")({paddingLeft:"1rem"}),w=function(e){var n=e.year,t=e.children;return(0,x.jsx)(d.Z,{href:"/movies/stories/awards?year=".concat(n),children:t})};function P(e){var n=e.data,t=[],i={};return n&&0!=n.length?((0,r.useMemo)((function(){(t=(t=n.slice(0)).sort((function(e,n){var t,r,i,o;return e.year!=n.year?e.year<n.year?1:-1:(null===e||void 0===e||null===(t=e.festival)||void 0===t?void 0:t.name)!=(null===n||void 0===n||null===(r=n.festival)||void 0===r?void 0:r.name)?(null===e||void 0===e||null===(i=e.festival)||void 0===i?void 0:i.name)<(null===n||void 0===n||null===(o=n.festival)||void 0===o?void 0:o.name)?-1:1:e.category<n.category?-1:1}))).forEach((function(e){var n,t,r=null!==(n=null===(t=e.festival)||void 0===t?void 0:t.name)&&void 0!==n?n:"festival name";i[e.year]||(i[e.year]={}),i[e.year][r]||(i[e.year][r]={id:e.festival.id}),i[e.year][r][e.category]||(i[e.year][r][e.category]={won:e.won})}))}),[n]),!0===e.mini?function(e,n){var t=e.year,r=e.all,i=r?n.length:2;t=parseInt(t);var o=function(e){return!t||e.year==t};return(0,x.jsxs)(m,{children:[n&&n.length>0&&n.slice(0,i).map((function(e,n){var t,r;return o(e)&&(0,x.jsx)("div",{children:(0,x.jsx)(w,{year:e.year,children:(0,x.jsxs)(y,{children:[e.year," - ",(null!==(t=null===(r=e.festival)||void 0===r?void 0:r.name)&&void 0!==t?t:"festival name").toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},n)})),!r&&n&&n.length>i&&(0,x.jsx)(y,{children:(0,x.jsx)(y,{children:(0,x.jsxs)(j,{children:["and ",n.length-i," more"]})})})]})}(e,t):function(e,n){return(0,x.jsxs)(o.RQ,{children:[(0,x.jsx)(a.DK,{children:"awards"}),(0,x.jsx)(s.Z,{children:n&&Object.keys(n).reverse().map((function(e,t){return(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(g.Z,{style:{flex:0},color:"text.secondary",children:(0,x.jsx)(w,{year:e,children:(0,x.jsx)(b,{children:e})})}),(0,x.jsxs)(f.Z,{children:[(0,x.jsx)(v.Z,{}),t+1<Object.keys(n).length&&(0,x.jsx)(p.Z,{})]}),(0,x.jsx)(h.Z,{children:Object.keys(n[e]).map((function(t){return(0,x.jsxs)("div",{children:[(0,x.jsx)(l.Z,{entity:"movies",year:e,id:n[e][t].id,children:(0,x.jsx)(Z,{children:t})}),Object.keys(n[e][t]).filter((function(e){return"id"!==e})).map((function(r){return(0,x.jsx)(O,{children:(0,x.jsx)(c.Z,{title:!1===n[e][t][r].won?"nominee":"winner",value:r})},r)}))]},n[e][t].id)}))})]},e)}))})]})}(0,i)):(0,x.jsx)("div",{})}},57435:function(e,n,t){t(67294);var r=t(89260),i=t(85893);n.Z=function(e){var n=e.box,t=e.id,o=e.year,a=e.entity,c=e.children;return(0,i.jsx)(r.Z,{box:n,to:"/".concat(a,"/stories/awards/").concat(t,"/").concat(o),children:c})}},42341:function(e,n,t){t(67294);var r=t(89260),i=t(85893);n.Z=function(e){var n=e.id,t=e.children,o=e.box;return(0,i.jsx)(r.Z,{box:o,to:"/movies/festivals/".concat(n),children:t})}},20780:function(e,n,t){t.d(n,{Z:function(){return l}});t(67294);var r=t(43332),i=t(49896),o=t(59231),a=t(39698),c=t(82356),d=t(85893);function l(e){var n=e.tiny,t=e.format;switch(t=n?"tiny":t){case"list":return function(e){var n=e.id,t=e.title,r=e.releaseYear,o=e.as;return(0,d.jsx)(a.xs,{width:"220px",height:"125px",children:(0,d.jsxs)(i.Z,{id:n,children:[(0,d.jsx)("div",{children:(0,d.jsx)(a.x4,{children:null!==r&&void 0!==r?r:"?"})}),(0,d.jsx)("div",{children:(0,d.jsx)(a.Dx,{children:null!==t&&void 0!==t?t:"?"})}),o&&(0,d.jsx)("div",{children:(0,d.jsxs)(a.x4,{children:["as ",o.replace(/[\[\]\'\"]/g,"")]})})]})},n)}(e);case"tiny":return function(e){var n,t;return(0,d.jsx)(i.Z,{id:e.id,children:(0,d.jsx)(c.Z,{title:null!==(n=null===e||void 0===e?void 0:e.releaseYear)&&void 0!==n?n:"?",value:null!==(t=null===e||void 0===e?void 0:e.title)&&void 0!==t?t:"?"})})}(e);case"card":default:return function(e){var n=e.full,t=e.year,a=e.all,c=e.id,l=e.title,s=e.awards,u=e.image;e.box;return(0,d.jsx)(i.Z,{box:!0,id:c,children:(0,d.jsx)(r.Z,{image:u?u.poster:u,text:(0,d.jsx)(o.Z,{mini:!n,data:s,year:t,all:a}),title:l})})}(e)}}},49896:function(e,n,t){t(67294);var r=t(89260),i=t(85893);n.Z=function(e){var n=e.id,t=(e.entity,e.children),o=e.box;return n?(0,i.jsx)(r.Z,{box:o,border:!1,to:"/movies/".concat(n),children:t}):t}},25662:function(e,n,t){t.d(n,{Z:function(){return d}});t(67294);var r=t(43332),i=t(55476),o=(t(59231),t(39698)),a=t(82356),c=t(85893);function d(e){var n=e.tiny,t=e.format;switch(t=n?"tiny":t){case"list":return function(e){var n=e.id,t=e.name,r=e.as;return(0,c.jsx)(o.xs,{width:"220px",height:"125px",children:(0,c.jsxs)(i.Z,{id:n,children:[(0,c.jsx)("div",{children:(0,c.jsx)(o.Dx,{children:null!==t&&void 0!==t?t:"?"})}),r&&(0,c.jsx)("div",{children:(0,c.jsxs)(o.x4,{children:["as ",r.replace(/[\[\]\'\"]/g,"")]})})]})},n)}(e);case"tiny":return function(e){var n=e.id,t=e.name,r=e.releaseYear;return(0,c.jsx)(i.Z,{id:n,children:(0,c.jsx)(a.Z,{value:t,title:r})})}(e);case"card":default:return function(e){var n=e.id,t=e.name,o=e.text;e.box;return(0,c.jsx)(i.Z,{box:!0,id:n,entity:t,children:(0,c.jsx)(r.Z,{title:t,text:o})},n)}(e)}}},55476:function(e,n,t){t(67294);var r=t(89260),i=t(85893);n.Z=function(e){var n=e.id,t=(e.entity,e.children),o=e.box;return n?(0,i.jsx)(r.Z,{box:o,border:!1,to:"/people/".concat(n),children:t}):t}},88704:function(e,n,t){t.d(n,{Z:function(){return a}});t(67294);var r=t(43332),i=t(44898),o=(t(59231),t(85893));function a(e){var n=e.id,t=e.title,a=(e.awards,e.full,e.image),c=e.description;e.box;return(0,o.jsx)(i.Z,{box:!0,id:n,entity:name,style:{width:"100%"},children:(0,o.jsx)(r.Z,{image:null===a||void 0===a?void 0:a.poster,text:c,title:t})})}},44898:function(e,n,t){t(67294);var r=t(89260),i=t(85893);n.Z=function(e){var n=e.id,t=(e.entity,e.children),o=e.box;return(0,i.jsx)(r.Z,{box:o,border:!0,to:"/podcasts/".concat(n),children:t})}},59745:function(e,n,t){t.d(n,{Z:function(){return q}});var r=t(67294),i=t(4942),o=t(20780),a=t(25662),c=t(88704),d=t(43332),l=t(42341),s=t(85893);function u(e){var n=e.id,t=e.name;e.box;return(0,s.jsx)(l.Z,{box:!0,id:n,entity:t,children:(0,s.jsx)(d.Z,{title:t})})}function f(e){var n=e.id,t=e.name;e.box;return(0,s.jsx)(l.Z,{box:!0,id:n,entity:t,children:(0,s.jsx)(d.Z,{title:t})})}var p=t(25810);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e){e.id;var n=e.type;switch(e.children,e.box,n){case"movie":return(0,s.jsx)(o.Z,v({},e));case"person":return(0,s.jsx)(a.Z,v({},e));case"podcast":return(0,s.jsx)(c.Z,v({},e));case"tv-show":return(0,s.jsx)(u,v({},e));case"video-game":return(0,s.jsx)(f,v({},e))}return(0,s.jsx)(p.C,{from:"Entity Item",data:"ENTITY ".concat(n," NOT FOUND")})},x=t(50789);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j,b,Z=function(e){var n=e.type;return(0,s.jsx)(x.Z,y(y({},e),{},{item:function(e){return(0,s.jsx)(g,y(y({},e),{},{type:n}))}}))},O=t(15861),w=t(87757),P=t.n(w),S=t(24268),D=t(16161),E=(t(11163),t(30168)),k=t(54397),T=t(74273);t(61878);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R,C=function(e){var n=e.page,t=e.op;return(0,T.h)(M,{page:n,field:JSON.stringify(t)},(function(e){return I(I({},e),{},{data:e.data.people})}))},M=(0,k.Ps)(j||(j=(0,E.Z)(["\n  query GetPeople($page: Int, $field: String)\n  {\n    people(page: $page, field: $field){\n      id\n      name\n    }\n  }\n"]))),A=function(e){var n=e.page,t=e.op;return(0,T.h)(z,{page:n,field:JSON.stringify(t)},(function(e){return I(I({},e),{},{data:e.data.movies})}))},z=(0,k.Ps)(b||(b=(0,E.Z)(["\n  query GetMovies($page: Int, $field: String)\n  {\n    movies(page: $page, field: $field){\n      id\n      title\n    }\n  }\n"]))),$="dashboard",N=(0,S.hg)("".concat($,"/fetchData"),function(){var e=(0,O.Z)(P().mark((function e(n,t){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch(B(n)),e.t0=n.type,e.next="person"===e.t0?4:"movie"===e.t0?7:10;break;case 4:return e.next=6,C(n);case 6:return e.abrupt("return",e.sent);case 7:return e.next=9,A(n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),_=(0,S.oM)({name:$,initialState:{params:{page:null},data:null,loading:!1,error:null},reducers:{setParams:function(e,n){e.params.page=n.payload.page}},extraReducers:(R={},(0,i.Z)(R,N.pending,(function(e,n){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(R,N.fulfilled,(function(e,n){var t=n.payload,r=t.loading,i=t.error,o=t.data;e.data=o,e.loading=r,e.error=i})),(0,i.Z)(R,N.rejected,(function(e,n){var t=n.error;e.data=[],e.loading=!1,e.error=t})),R)});D.h.reducerManager.add($,_.reducer);_.reducer;var B=_.actions.setParams,L=t(93942),Y=t(19016);function G(e){var n=(0,L.I0)(),t=(0,L.v9)((function(e){return e.dashboard})),i=e.query,o=function(e){return{op:i.op,type:i.type,page:e}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n(N(o(e)))};return(0,r.useEffect)((function(){null!=i&&a()}),[i]),(0,r.useEffect)((function(){null!=i&&null!=t&&n((0,Y.wg)({title:i.title,children:(0,s.jsx)(Z,{page:t.params.page,loading:t.loading,data:t.data,type:i.type,onPageChange:function(e){return a(e)},pageSize:4})}))}),[t]),(0,r.useEffect)((function(){t&&n((0,Y.K4)({status:t.loading,sender:"dashboard"}))}),[null===t||void 0===t?void 0:t.loading]),null}G.propTypes={};var q=G},61878:function(e,n,t){t.d(n,{Ne:function(){return p},rQ:function(){return h}});var r,i,o,a=t(4942),c=t(30168),d=t(54397),l=t(74273);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=(0,d.Ps)(r||(r=(0,c.Z)(["\nfragment PersonInfoTiny on Person {\n  id\n  name\n}\n"]))),p=(0,d.Ps)(i||(i=(0,c.Z)(["\n","\nfragment MovieInfoTiny on Movie {\n  id\n  title\n  releaseYear\n  directed{\n    id{\n      ...PersonInfoTiny\n    } \n  }\n}\n"])),f),h=function(e){return(0,l.h)(v,{id:e},(function(e){return u(u({},e),{},{data:e.data.person})}))},v=(0,d.Ps)(o||(o=(0,c.Z)(["\n","\nquery getPerson($id:String!) {\n  person(id: $id){\n    id\n    name\n    birthYear\n    deathYear\n    profession\n    awards {\n      category\n      festival{\n        id\n        name\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    produced{\n      id{\n        ...MovieInfoTiny\n      } \n    }\n    directed{\n      id{\n        ...MovieInfoTiny\n      } \n    }\n    acted {\n      id{\n        ...MovieInfoTiny\n      } \n      as\n    }\n    wrote{\n      id{\n        ...MovieInfoTiny\n      } \n    }\n    crew{\n      id{\n        ...MovieInfoTiny\n      } \n      as\n      cat\n      job\n    }    \n  }\n}\n"])),p)},89441:function(e,n,t){t.d(n,{K:function(){return c},q:function(){return d}});t(67294);var r=t(23275),i=t(92401),o=t(96474),a=t(85893),c=function(e,n,t,o){return(0,a.jsx)(r.Z,{xs:12,sm:6,md:6,lg:3,style:{paddingRight:"1rem"},children:(0,a.jsx)(i.Z,{loading:e,title:n,data:t?t.toString():t,icon:o})})},d=function(e,n,t,i){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"-";return(0,a.jsx)(r.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"},children:(0,a.jsx)(o.Z,{interactive:+("-"!=d),onClick:function(e){return c(e,n,d)},loading:e,title:n,data:t||{},ranges:i})})}},43332:function(e,n,t){t(67294);var r=t(65295),i=t(18515),o=t(42643),a=t(54962),c=t(49161),d=t(2658),l=t(360),s=t(9092),u=t(6447),f=t(27054),p=t(85893),h=(0,f.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),v="".concat(s.Z.APP.BASE_PATH).concat(s.Z.DEFAULTS.IMAGE_PLACEHOLDER),g=function(e){return e.target.src=v};n.Z=function(e){var n,t=h(),f=e.title,v=e.subtitle,x=e.text,m=e.image,y=e.imageHeight,j=void 0===y?180:y,b=e.noImage,Z=e.actions,O=0;v=v||"";return b=!!b,m=m||s.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,p.jsxs)(r.Z,{style:{flexGrow:1,width:"100%"},children:[(0,p.jsx)(i.Z,{sx:{width:"100%"},classes:{content:t.headerContent,root:t.headerRoot},title:(0,p.jsx)(u.ZP,{title:f||"",placement:"bottom-start",children:(0,p.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,p.jsx)(d.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:f})})}),subheader:v}),!b&&(0,p.jsx)(a.Z,{height:j||null,image:null!==(n=m)&&void 0!==n&&n.startsWith("/")?"".concat(s.Z.APP.BASE_PATH).concat(m):m,component:"img",onError:g}),x&&(0,p.jsx)(o.Z,{children:(0,l.HD)(x)?(0,p.jsx)(d.Z,{variant:"body2",color:"text.secondary",component:"div",children:x}):x}),Z&&Z.length>0&&(0,p.jsx)(c.Z,{children:Z.map((function(e){return(0,p.jsx)("div",{children:e},O++)}))})]})}},74288:function(e,n,t){t(67294),t(85893)},39698:function(e,n,t){t.d(n,{xs:function(){return v},x4:function(){return x},Dx:function(){return g}});var r=t(67294),i=t(29602),o=t(15671),a=t(43144),c=t(60136),d=t(82963),l=t(61120),s=t(79895),u=t(85893);function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,d.Z)(this,t)}}r.Component;var p=(0,i.ZP)("div")((function(e){var n=e.theme,t=e.width,r=e.height;return{backgroundColor:n.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:n.palette.text.primary,alignItems:"center",minWidth:t,maxWidth:t,minHeight:r,maxHeight:r,borderRadius:"5px"}})),h=(0,i.ZP)("div")((function(e){var n=e.theme;e.width;return{backgroundColor:"transparent",color:n.palette.text.primary,padding:"1rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),v=function(e){var n=e.width,t=void 0===n?"300px":n,r=e.height,i=void 0===r?"300px":r;return(0,u.jsx)(p,{width:t,height:i,children:(0,u.jsx)(h,{children:e.children})})},g=(0,i.ZP)("h2")({fontSize:"1.5rem",lineHeight:"1.8rem",padding:0,margin:0}),x=((0,i.ZP)("h3")({fontSize:"1.2rem",lineHeight:"1.5rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})}}]);