"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1679],{59231:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(67294),i=r(29602),a=r(50367),o=r(58862),c=r(82356),s=(r(52651),r(23275),r(74288),r(89260)),d=r(57435),l=r(87550),u=r(39660),f=r(21314),h=r(56775),p=r(72162),j=r(65148),v=r(54123),x=r(85893),m=(0,i.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),g=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),y=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),Z=(0,i.ZP)("div")({fontSize:"1.30rem",lineHeight:"1.4rem"}),b=(0,i.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),O=(0,i.ZP)("div")({paddingLeft:"1rem"}),w=function(e){var t=e.year,r=e.children;return(0,x.jsx)(s.Z,{href:"/movies/stories/awards?year=".concat(t),children:r})};function P(e){var t=e.data,r=[],i={};return t&&0!=t.length?((0,n.useMemo)((function(){(r=(r=t.slice(0)).sort((function(e,t){var r,n,i,a;return e.year!=t.year?e.year<t.year?1:-1:(null===e||void 0===e||null===(r=e.festival)||void 0===r?void 0:r.name)!=(null===t||void 0===t||null===(n=t.festival)||void 0===n?void 0:n.name)?(null===e||void 0===e||null===(i=e.festival)||void 0===i?void 0:i.name)<(null===t||void 0===t||null===(a=t.festival)||void 0===a?void 0:a.name)?-1:1:e.category<t.category?-1:1}))).forEach((function(e){var t,r,n=null!==(t=null===(r=e.festival)||void 0===r?void 0:r.name)&&void 0!==t?t:"festival name";i[e.year]||(i[e.year]={}),i[e.year][n]||(i[e.year][n]={id:e.festival.id}),i[e.year][n][e.category]||(i[e.year][n][e.category]={won:e.won})}))}),[t]),!0===e.mini?function(e,t){var r=e.year,n=e.all,i=n?t.length:2;r=parseInt(r);var a=function(e){return!r||e.year==r};return(0,x.jsxs)(m,{children:[t&&t.length>0&&t.slice(0,i).map((function(e,t){var r,n;return a(e)&&(0,x.jsx)("div",{children:(0,x.jsx)(w,{year:e.year,children:(0,x.jsxs)(g,{children:[e.year," - ",(null!==(r=null===(n=e.festival)||void 0===n?void 0:n.name)&&void 0!==r?r:"festival name").toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},t)})),!n&&t&&t.length>i&&(0,x.jsx)(g,{children:(0,x.jsx)(g,{children:(0,x.jsxs)(y,{children:["and ",t.length-i," more"]})})})]})}(e,r):function(e,t){return(0,x.jsxs)(a.RQ,{children:[(0,x.jsx)(o.DK,{children:"awards"}),(0,x.jsx)(l.Z,{children:t&&Object.keys(t).reverse().map((function(e,r){return(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(v.Z,{style:{flex:0},color:"text.secondary",children:(0,x.jsx)(w,{year:e,children:(0,x.jsx)(Z,{children:e})})}),(0,x.jsxs)(f.Z,{children:[(0,x.jsx)(j.Z,{}),r+1<Object.keys(t).length&&(0,x.jsx)(h.Z,{})]}),(0,x.jsx)(p.Z,{children:Object.keys(t[e]).map((function(r){return(0,x.jsxs)("div",{children:[(0,x.jsx)(d.Z,{entity:"movies",year:e,id:t[e][r].id,children:(0,x.jsx)(b,{children:r})}),Object.keys(t[e][r]).filter((function(e){return"id"!==e})).map((function(n){return(0,x.jsx)(O,{children:(0,x.jsx)(c.Z,{title:!1===t[e][r][n].won?"nominee":"winner",value:n})},n)}))]},t[e][r].id)}))})]},e)}))})]})}(0,i)):(0,x.jsx)("div",{})}},57435:function(e,t,r){r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.box,r=e.id,a=e.year,o=e.entity,c=e.children;return(0,i.jsx)(n.Z,{box:t,to:"/".concat(o,"/stories/awards/").concat(r,"/").concat(a),children:c})}},25662:function(e,t,r){r.d(t,{Z:function(){return s}});r(67294);var n=r(43332),i=r(55476),a=(r(59231),r(39698)),o=r(82356),c=r(85893);function s(e){var t=e.tiny,r=e.format;switch(r=t?"tiny":r){case"list":return function(e){var t=e.id,r=e.name,n=e.as;return(0,c.jsx)(a.xs,{width:"220px",height:"125px",children:(0,c.jsxs)(i.Z,{id:t,children:[(0,c.jsx)("div",{children:(0,c.jsx)(a.Dx,{children:null!==r&&void 0!==r?r:"?"})}),n&&(0,c.jsx)("div",{children:(0,c.jsxs)(a.x4,{children:["as ",n.replace(/[\[\]\'\"]/g,"")]})})]})},t)}(e);case"tiny":return function(e){e.id,e.name,e.as;return(0,c.jsx)(i.Z,{id:item.id,children:(0,c.jsx)(o.Z,{value:item.title,title:item.releaseYear})})}(e);case"card":default:return function(e){var t=e.id,r=e.name,a=e.text;e.box;return(0,c.jsx)(i.Z,{box:!0,id:t,entity:r,children:(0,c.jsx)(n.Z,{title:r,text:a})},t)}(e)}}},55476:function(e,t,r){r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),a=e.box;return t?(0,i.jsx)(n.Z,{box:a,border:!1,to:"/people/".concat(t),children:r}):r}},97820:function(e,t,r){r.d(t,{Z:function(){return c}});r(67294);var n=r(29602),i=r(48724),a=r(14308),o=r(85893);(0,n.ZP)("h1")({margin:0});function c(e){var t=e.data;return t?(0,o.jsx)(a.Z,{direction:"row",children:t.map((function(e,t){return(0,o.jsx)(i.Z,{variant:"outlined",text:e},t)}))}):(0,o.jsx)("div",{})}},97060:function(e,t,r){var n=r(4942),i=(r(67294),r(50367)),a=r(58862),o=r(25662),c=r(89260),s=r(34769),d=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.data,r=(e.loading,e.type),n=e.story;if(!t||0==t.length)return(0,d.jsx)("div",{});var l=(0,d.jsxs)(a.DK,{children:[r,(0,d.jsxs)(a.x4,{children:[" [",t.length,"]"]})]});return l=n?(0,d.jsx)(c.Z,{href:n,children:l}):l,(0,d.jsxs)(i.RQ,{children:[t&&t.length>0&&l,(0,d.jsx)(s.Z,{data:t,item:function(e){return(0,d.jsx)(o.Z,u(u({tiny:!0},e),e.id))}})]})}},64129:function(e,t,r){r(67294);var n=r(50367),i=r(58862),a=r(82356),o=r(52651),c=r(23275),s=r(85893);t.Z=function(e){var t=e.data;return e.loading,e.route,!t||"name"in t||0==t.length?(0,s.jsx)("div",{}):(0,s.jsxs)(n.RQ,{children:[(0,s.jsx)(i.DK,{children:"Ratings"}),(0,s.jsx)(o.Z,{children:t&&t.length>0&&t.map((function(e,t){return(0,s.jsx)(c.Z,{xs:6,sm:4,md:3,lg:2,children:(0,s.jsx)(a.Z,{title:e.name,data:e.averageRating})},t)}))})]})}},84307:function(e,t,r){r(67294);var n=r(50367),i=r(85893);t.Z=function(e){var t=e.data;return e.loading,e.route,t&&null!==t&&0!=t.length?"name"in t?(0,i.jsx)("div",{}):(0,i.jsx)(n.RQ,{children:t.map((function(e,t){return(0,i.jsxs)("div",{children:[e.name&&(0,i.jsxs)("div",{children:["Name: ",e.name]}),e.yearAdded&&(0,i.jsxs)("div",{children:["Year added: ",e.yearAdded]})]},t)}))}):(0,i.jsx)("div",{})}},29110:function(e,t,r){r.d(t,{Z:function(){return o}});r(67294);var n=r(50367),i=r(58862),a=r(85893);function o(e){var t=e.title,r=e.text;return r?(0,a.jsxs)(n.RQ,{children:[t&&(0,a.jsx)(i.DK,{children:t}),(0,a.jsx)(i.nv,{children:r})]}):(0,a.jsx)("div",{})}},34769:function(e,t,r){r.d(t,{Z:function(){return c}});r(67294);var n=r(29602),i=r(26447),a=r(85893),o=(0,n.ZP)("div")((function(){return{padding:"1rem",marginBottom:"2rem",backgroundColor:"transparent"}}));function c(e){var t=e.data,r=e.item;return(0,a.jsx)(o,{children:(0,a.jsx)(i.Z,{direction:"row",style:{overflowX:"auto"},children:t.map((function(e,t){return(0,a.jsx)("div",{children:r(e)},t)}))})})}},43332:function(e,t,r){r(67294);var n=r(65295),i=r(18515),a=r(42643),o=r(54962),c=r(49161),s=r(2658),d=r(360),l=r(9092),u=r(6447),f=r(27054),h=r(85893),p=(0,f.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),j="".concat(l.Z.APP.BASE_PATH).concat(l.Z.DEFAULTS.IMAGE_PLACEHOLDER),v=function(e){return e.target.src=j};t.Z=function(e){var t,r=p(),f=e.title,j=e.subtitle,x=e.text,m=e.image,g=e.imageHeight,y=void 0===g?180:g,Z=e.noImage,b=e.actions,O=0;j=j||"";return Z=!!Z,m=m||l.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,h.jsxs)(n.Z,{style:{flexGrow:1,width:"100%"},children:[(0,h.jsx)(i.Z,{sx:{width:"100%"},classes:{content:r.headerContent,root:r.headerRoot},title:(0,h.jsx)(u.ZP,{title:f,placement:"bottom-start",children:(0,h.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,h.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:f})})}),subheader:j}),!Z&&(0,h.jsx)(o.Z,{height:y||null,image:null!==(t=m)&&void 0!==t&&t.startsWith("/")?"".concat(l.Z.APP.BASE_PATH).concat(m):m,component:"img",onError:v}),x&&(0,h.jsx)(a.Z,{children:(0,d.HD)(x)?(0,h.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:x}):x}),b&&b.length>0&&(0,h.jsx)(c.Z,{children:b.map((function(e){return(0,h.jsx)("div",{children:e},O++)}))})]})}},74288:function(e,t,r){r(67294),r(85893)},39698:function(e,t,r){r.d(t,{xs:function(){return j},x4:function(){return x},Dx:function(){return v}});var n=r(67294),i=r(29602),a=r(15671),o=r(43144),c=r(60136),s=r(82963),d=r(61120),l=r(79895),u=r(85893);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,d.Z)(e);if(t){var i=(0,d.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}n.Component;var h=(0,i.ZP)("div")((function(e){var t=e.theme,r=e.width,n=e.height;return{backgroundColor:t.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:t.palette.text.primary,alignItems:"center",minWidth:r,maxWidth:r,minHeight:n,maxHeight:n,borderRadius:"5px"}})),p=(0,i.ZP)("div")((function(e){var t=e.theme;e.width;return{backgroundColor:"transparent",color:t.palette.text.primary,padding:"1rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),j=function(e){var t=e.width,r=void 0===t?"300px":t,n=e.height,i=void 0===n?"300px":n;return(0,u.jsx)(h,{width:r,height:i,children:(0,u.jsx)(p,{children:e.children})})},v=(0,i.ZP)("h2")({fontSize:"1.5rem",lineHeight:"1.8rem",padding:0,margin:0}),x=((0,i.ZP)("h3")({fontSize:"1.2rem",lineHeight:"1.5rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},31679:function(e,t,r){r.r(t),r.d(t,{default:function(){return X}});r(67294);var n=r(11163),i=r(4942),a=r(55619),o={automata:{name:"page_tv_show"},page:{url:function(e){var t=e.id;return"/tv-shows/".concat(t)}}},c=(r(70357),r(52651),r(23275),r(28388)),s=r(84307),d=r(64129),l=r(97060),u=r(59231),f=r(59067),h=r(97820),p=(r(27159),r(48724)),j=r(12868),v=(r(74288),r(14308)),x=r(29110),m=r(50367),g=r(58862),y=r(82356),Z=r(85893);function b(e){var t=e.data;e.loading;return t=t||{},(0,Z.jsxs)(v.Z,{children:[(0,Z.jsx)(j.Z,{src:t.image?t.image.poster:null}),(0,Z.jsxs)(v.Z,{direction:"row",children:[(0,Z.jsx)(p.Z,{color:"primary",text:t.type}),(0,Z.jsx)(h.Z,{data:t.genre})]}),(0,Z.jsx)(f.Z,{text:t.title}),(0,Z.jsxs)(m.RQ,{children:[(0,Z.jsx)(g.DK,{children:"general information"}),(0,Z.jsx)(y.Z,{title:"Released",data:t.releasedDate,format:"year"}),(0,Z.jsx)(y.Z,{title:"Duration",data:t.duration,sufix:"mins"}),(0,Z.jsx)(y.Z,{title:"Classification",data:t.classification}),(0,Z.jsx)(y.Z,{title:"Language",data:t.language}),(0,Z.jsx)(y.Z,{title:"Country",data:t.country}),(0,Z.jsx)(y.Z,{title:"Production",data:t.production})]}),(0,Z.jsx)(c.Z,{data:t}),(0,Z.jsx)(d.Z,{data:t.rating}),(0,Z.jsx)(l.Z,{type:"cast",data:t.cast,story:"/movies/stories/actors"}),(0,Z.jsx)(u.Z,{data:t.awards}),(0,Z.jsx)(x.Z,{title:"plot",text:t.plot?t.plot:t.description}),(0,Z.jsx)(l.Z,{type:"directors",data:t.directors,story:"/movies/stories/directors"}),(0,Z.jsx)(l.Z,{type:"writers",data:t.writers,story:"/movies/stories/writers"}),(0,Z.jsx)(l.Z,{type:"crew",data:t.cast}),(0,Z.jsx)(s.Z,{data:t.streamBy})]})}var O=r(28973);function w(e){return(0,Z.jsx)(m.X,{children:(0,Z.jsxs)(v.Z,{spacing:1,children:[(0,Z.jsx)(O.Z,{variant:"rectangular",height:300}),(0,Z.jsx)(O.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,Z.jsx)(O.Z,{variant:"text",style:{width:"40%"}}),(0,Z.jsx)(O.Z,{variant:"text",style:{width:"25%"}}),(0,Z.jsx)(O.Z,{variant:"text",style:{width:"25%"}}),(0,Z.jsx)(O.Z,{variant:"text",style:{width:"25%"}})]})})}var P,D=r(15861),S=r(87757),E=r.n(S),R=r(24268),k=r(16161),H=r(30168),A=r(54397),C=r(74273);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z,L=(0,A.Ps)(P||(P=(0,H.Z)(["\n  query GetData($id: String!)\n  {\n    tVShow(id: $id) {\n    id\n    title\n    country\n    type\n    genre\n    duration\n    rating {\n      averageRating\n      name\n      votes\n    }\n    releasedDate\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    awards {\n      category\n      festival{\n        id\n        name\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    }\n  }\n"])));function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G=o.automata.name,I=(0,R.hg)("".concat(G,"/fetchData"),function(){var e=(0,D.Z)(E().mark((function e(t,r){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(M(t)),e.next=3,n=t.id,(0,C.h)(L,{id:n},(function(e){return _(_({},e),{},{data:e.data.tVShow})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(t,r){return e.apply(this,arguments)}}()),K=(0,R.oM)({name:G,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=Q(Q({},e.params),t.payload),"banner"!=e.params.renderer&&1!=e.params.page&&n.default.push("".concat(o.page.url(e.params)),null,{shallow:!0})}},extraReducers:(z={},(0,i.Z)(z,I.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(z,I.fulfilled,(function(e,t){var r=t.payload,n=r.loading,i=r.error,a=r.data;e.data=a,e.loading=n,e.error=i})),(0,i.Z)(z,I.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),z)});k.h.reducerManager.add(G,K.reducer);K.reducer;var M=K.actions.setParams;function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e){return(0,Z.jsx)(a.Z,{params:N(N({},e),{},{breadcrumbs:function(t){var r,n;return"".concat(e.breadcrumbs,"/").concat(null!==(r=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.title)&&void 0!==r?r:"loading")}}),config:o,fetch:function(e){return I(N({},e))},detail:function(e){return(0,Z.jsx)(b,{data:e.data})},skeleton:(0,Z.jsx)(w,{})})}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=function(e){return(0,Z.jsx)(U,F(F({},e),{},{render:"detail"}))},X=function(e){var t,r,i=(0,n.useRouter)(),a=e.id?e.id:null!==(t=null===(r=i.query)||void 0===r?void 0:r["tv-show"])&&void 0!==t?t:"";return(0,Z.jsx)(V,{breadcrumbs:"/tv-shows",id:a})}}}]);