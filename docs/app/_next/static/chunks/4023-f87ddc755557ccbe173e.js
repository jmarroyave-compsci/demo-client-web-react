"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4023],{20780:function(e,t,r){r.d(t,{Z:function(){return s}});r(67294);var n=r(43332),i=r(49896),a=r(59231),o=r(39698),c=r(82356),l=r(85893);function s(e){var t=e.tiny,r=e.format;switch(r=t?"tiny":r){case"list":return function(e){var t=e.id,r=e.title,n=e.releaseYear,a=e.as;return(0,l.jsx)(o.xs,{width:"220px",height:"125px",children:(0,l.jsxs)(i.Z,{id:t,children:[(0,l.jsx)(o.x4,{children:null!==n&&void 0!==n?n:"?"}),(0,l.jsx)(o.Dx,{children:null!==r&&void 0!==r?r:"?"}),a&&(0,l.jsx)("div",{children:(0,l.jsxs)(o.x4,{children:["as ",a.replace(/[\[\]\'\"]/g,"")]})})]})},t)}(e);case"tiny":return function(e){var t,r;return(0,l.jsx)(i.Z,{id:e.id,children:(0,l.jsx)(c.Z,{title:null!==(t=null===e||void 0===e?void 0:e.releaseYear)&&void 0!==t?t:"?",value:null!==(r=null===e||void 0===e?void 0:e.title)&&void 0!==r?r:"?"})})}(e);case"card":default:return function(e){var t=e.full,r=e.year,o=e.all,c=e.id,s=e.title,u=e.awards,d=e.image;return(0,l.jsx)(i.Z,{box:!0,id:c,children:(0,l.jsx)(n.Z,{image:d?d.poster:d,text:(0,l.jsx)(a.Z,{mini:!t,data:u,year:r,all:o}),title:s})})}(e)}}},49896:function(e,t,r){r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),a=e.box;return t?(0,i.jsx)(n.Z,{box:a,border:!1,to:"/movies/".concat(t),children:r}):r}},2295:function(e,t,r){var n=r(4942),i=(r(67294),r(50367)),a=r(58862),o=r(34769),c=r(20780),l=r(85893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.data,r=(e.loading,e.type),n=e.filter;if(!t||0==t.length)return(0,l.jsx)("div",{});var s=e.tiny?t.slice(0,3):t;s=n?s.filter(n):s;var d=(0,l.jsxs)(a.DK,{children:[r,(0,l.jsxs)(a.x4,{children:[" [",s.length,"]"]})]});return(0,l.jsxs)(i.RQ,{children:[!e.tiny&&d,e.tiny&&s.map((function(e,t){return(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,u({format:"tiny"},e.id))},t)})),!e.tiny&&(0,l.jsx)(o.Z,{data:s,item:function(e){return(0,l.jsx)(c.Z,u(u({format:"list"},e),e.id))}}),e.tiny&&t.length>s.length&&(0,l.jsxs)(a.x4,{children:["and ",t.length-s.length," more"]})]})}},34769:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(67294),i=r(29602),a=r(26447),o=r(62448),c=r(79895),l=r(28973),s=r(85893),u=(0,i.ZP)("div")((function(){return{padding:"1rem",marginBottom:"0rem",backgroundColor:"transparent"}}));function d(e){var t=e.skeleton,r=e.data,i=e.item,c=e.noPaging,l=void 0===c||c,d=e.pageSize,p=e.loading,h=e.onPageChange,j=e.page,g=e.url,x=(0,n.useRef)(null);r=r||[1,2,3,4];var m=(0,s.jsx)(u,{children:(0,s.jsxs)(a.Z,{direction:"row",style:{overflowX:"auto"},children:[(0,s.jsx)("div",{ref:x}),r.map((function(e,r){return(0,s.jsx)("div",{style:{width:"100%"},children:p?t||(0,s.jsx)(f,{}):i?i(e):null},r)}))]})});return l||(m=(0,s.jsx)(o.Z,{pageSize:d,data:r,url:g,onPageChange:function(e){x.current.scrollIntoView(!1),h&&h(e)},page:j,loading:p,children:m})),m}function f(){return(0,s.jsx)(c.Z,{style:{width:"200px",backgroundColor:"transparent",flexGrow:1,padding:"1rem",margin:"0.5rem"},children:(0,s.jsxs)(a.Z,{spacing:1,children:[(0,s.jsx)(l.Z,{variant:"text",width:"20%"}),(0,s.jsx)(l.Z,{variant:"text"}),(0,s.jsx)(l.Z,{variant:"text",width:"60%"})]})})}},39698:function(e,t,r){r.d(t,{xs:function(){return j},x4:function(){return x},Dx:function(){return g}});var n=r(67294),i=r(29602),a=r(15671),o=r(43144),c=r(60136),l=r(82963),s=r(61120),u=r(79895),d=r(85893);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}n.Component;var p=(0,i.ZP)("div")((function(e){var t=e.theme,r=e.width,n=e.height;return{backgroundColor:t.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:t.palette.text.primary,alignItems:"center",minWidth:r,maxWidth:r,minHeight:n,maxHeight:n,borderRadius:"5px"}})),h=(0,i.ZP)("div")((function(e){var t=e.theme;e.width;return{backgroundColor:"transparent",color:t.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),j=function(e){var t=e.width,r=void 0===t?"300px":t,n=e.height,i=void 0===n?"300px":n;return(0,d.jsx)(p,{width:r,height:i,children:(0,d.jsx)(h,{children:e.children})})},g=(0,i.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),x=((0,i.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},14023:function(e,t,r){r.r(t),r.d(t,{default:function(){return Q}});r(67294);var n=r(11163),i=r(4942),a=r(55619),o={automata:{name:"page_person"},page:{url:function(e){var t=e.id;return"/people/".concat(t)}}},c=(r(70357),r(52651),r(23275),r(28388)),l=r(59231),s=(r(27159),r(48724)),u=r(12868),d=r(14308),f=r(29602),p=r(85893);(0,f.ZP)("h1")({margin:0});function h(e){var t=e.data;return t?(0,p.jsx)(d.Z,{direction:"row",children:t.map((function(e,t){return(0,p.jsx)(s.Z,{text:e},t)}))}):(0,p.jsx)("div",{})}var j=r(59067),g=r(2295),x=r(50367),m=r(58862),v=r(82356);var y=function(e){var t=e.data;return e.loading,t=t||{},(0,p.jsxs)(d.Z,{children:[(0,p.jsx)(u.Z,{src:t.image?t.image.poster:null}),(0,p.jsx)(h,{data:t.profession}),(0,p.jsx)(j.Z,{text:t.name}),(0,p.jsxs)(x.RQ,{children:[(0,p.jsx)(m.DK,{children:"General information"}),(0,p.jsx)(v.Z,{title:"Birth",data:t.birthYear}),(0,p.jsx)(v.Z,{title:"Death",data:t.deathYear})]}),(0,p.jsx)(c.Z,{data:t}),(0,p.jsx)(l.Z,{data:t?t.awards:null}),(0,p.jsx)(g.Z,{type:"acted",data:t.acted}),(0,p.jsx)(g.Z,{type:"directed",data:t.directed}),(0,p.jsx)(g.Z,{type:"produced",data:t.produced}),(0,p.jsx)(g.Z,{type:"wrote",data:t.wrote})]})},b=r(28973);function O(e){return(0,p.jsx)(x.X,{children:(0,p.jsxs)(d.Z,{spacing:1,children:[(0,p.jsx)(b.Z,{variant:"rectangular",height:300}),(0,p.jsx)(b.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,p.jsx)(b.Z,{variant:"text",style:{width:"40%"}}),(0,p.jsx)(b.Z,{variant:"text",style:{width:"25%"}}),(0,p.jsx)(b.Z,{variant:"text",style:{width:"25%"}}),(0,p.jsx)(b.Z,{variant:"text",style:{width:"25%"}})]})})}var Z,w=r(15861),P=r(87757),D=r.n(P),S=r(24268),k=r(16161),R=r(75679);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=o.automata.name,z=(0,S.hg)("".concat(B,"/fetchData"),function(){var e=(0,w.Z)(D().mark((function e(t,r){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(Y(t)),e.next=3,R.iY({id:t.id});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),H=(0,S.oM)({name:B,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=C(C({},e.params),t.payload),"banner"!=e.params.renderer&&1!=e.params.page&&n.default.push("".concat(o.page.url(e.params)),null,{shallow:!0})}},extraReducers:(Z={},(0,i.Z)(Z,z.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(Z,z.fulfilled,(function(e,t){var r=t.payload,n=r.loading,i=r.error,a=r.data;e.data=a,e.loading=n,e.error=i})),(0,i.Z)(Z,z.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),Z)});k.h.reducerManager.add(B,H.reducer);H.reducer;var Y=H.actions.setParams;function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e){return(0,p.jsx)(a.Z,{params:G(G({},e),{},{breadcrumbs:function(t){var r,n;return"".concat(e.breadcrumbs,"/").concat(null!==(r=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.name)&&void 0!==r?r:"loading")}}),config:o,fetch:function(e){return z(G({},e))},detail:function(e){return(0,p.jsx)(y,{data:e.data})},skeleton:(0,p.jsx)(O,{})})}function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){return(0,p.jsx)(I,M(M({},e),{},{render:"detail"}))},Q=function(e){var t,r,i=(0,n.useRouter)(),a=e.id?e.id:null!==(t=null===(r=i.query)||void 0===r?void 0:r.person)&&void 0!==t?t:"";return(0,p.jsx)(N,{breadcrumbs:"/people",id:a})}}}]);