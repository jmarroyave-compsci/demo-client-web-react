(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1587],{50789:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(4942),a=r(67294),o=r(52651),i=r(23275),c=r(79895),s=r(14308),u=r(28973),l=r(62448),d=r(50367),f=r(12666),p=r(85893);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},h={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function j(e){var t=e.animations,r=void 0===t||t,n=e.data,c=e.loading,s=e.url,u=e.skeleton,g=e.item,j=e.onPageChange,y=e.page,O=e.pageSize,x=e.xs,w=void 0===x?12:x,P=e.sm,Z=void 0===P?6:P,D=e.md,k=void 0===D?6:D,C=e.lg,E=void 0===C?4:C,S=e.noPaging,R=void 0!==S&&S,_=e.noPadding;n=n&&n.length>0?n:[1,2,3,4,5,6];var N=function(e){return _?e:(0,p.jsx)(d.ck,{children:e})},Y=function(e){return r?(0,p.jsx)(f.ZP,{in:!0,timeout:1300,children:function(t){return(0,p.jsx)("div",{style:m(m({},v),h[t]),children:e})}}):e},T=function(e){return(0,p.jsx)(i.Z,{xs:w,sm:Z,md:k,lg:E,children:N(c?u||(0,p.jsx)(b,{}):g?Y(g(e.data)):null)})},M=(0,p.jsx)(o.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:n.map((function(t,r){return(0,p.jsx)(a.Fragment,{children:(0,p.jsx)(T,{data:t,params:e})},r)}))});return R||(M=(0,p.jsx)(l.Z,{pageSize:O,data:n,url:s,onPageChange:j,page:y,loading:c,children:M})),(0,p.jsx)(d.RQ,{children:M})}function b(){return(0,p.jsx)(c.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,p.jsxs)(s.Z,{spacing:1,children:[(0,p.jsx)(u.Z,{variant:"text",width:"80%"}),(0,p.jsx)(u.Z,{variant:"rectangular",height:240}),(0,p.jsx)(u.Z,{variant:"text"})]})})}},62448:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});r(67294);var n=r(11163),a=r(14308),o=r(72642),i=r(50367),c=r(58862),s=r(85893);function u(e){var t=(0,n.useRouter)(),r=e||{},u=r.children,l=r.route,d=r.loading,f=r.data,p=r.url,g=r.skeleton,m=r.onPageChange,v=r.page,h=r.pageSize,j=void 0===h?10:h;v=(v=v||(l&&l.page?l.page:null))?parseInt(v):1;var b=function(e){if(m)m(e);else if(p){window.scrollTo(0,0);var r="".concat(p,"/").concat(e);t.push(r)}},y=f&&f.length<j,O=1==v;return(0,s.jsx)(i.RQ,{children:f&&f.length>0?(0,s.jsxs)(a.Z,{spacing:2,children:[u,(0,s.jsxs)(a.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,s.jsx)(o.Z,{variant:"outlined",disabled:O,onClick:function(){return b(v-1)},children:"Back"}),(0,s.jsx)(o.Z,{variant:"outlined",disabled:y,onClick:function(){return b(v+1)},children:"Next"})]})]}):(0,s.jsx)(c.Dx,{children:d?g||"loading":"No results"})})}},27159:function(e,t,r){"use strict";var n=r(15671),a=r(43144),o=r(60136),i=r(82963),c=r(61120),s=r(67294),u=r(53651),l=r(65710),d=r(85893);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var p=function(e){(0,o.Z)(r,e);var t=f(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"getDate",value:function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(r){return null}}},{key:"toString",value:function(e,t,r){switch(r){case"ago":return(0,u.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yyyy");case"YYYY":return t.getFullYear();default:return(0,l.Z)(t,r)}}},{key:"render",value:function(){var e=this.props,t=e.lang,r=e.value,n=e.className,a=e.format;t=t||"en",a=a||"ago";var o=this.getDate(r);if(null==o)return(0,d.jsx)("span",{});var i=this.toString(t,o,a);return(0,d.jsx)("span",{className:n,children:i})}}]),r}(s.Component);t.Z=p},55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(4942),a=r(67294),o=r(11163),i=r(93942),c=r(19016),s=r(25810),u=r(14763),l=r(50789),d=(r(14308),r(529)),f=(r(87863),r(85893));function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t,r,n,u,l=(0,i.I0)(),d=(0,o.useRouter)(),p=e.config,m=(0,a.useState)(""),h=m[0],j=m[1],b=(0,i.v9)((function(e){return e[p.automata.name]})),y=null!==(t=e.params.render)&&void 0!==t?t:null,O=g(g({},e.params),{},{renderer:null!==(r=e.params.renderer)&&void 0!==r?r:y});b=e.data?{data:e.data,params:{page:e.params.page}}:b;(0,a.useEffect)((function(){b&&l((0,c.K4)({status:b.loading,sender:p.automata.name}))}),[b]),(0,a.useEffect)((function(){O.breadcrumbs&&l((0,c.YA)({breadcrumbs:"function"===typeof O.breadcrumbs?O.breadcrumbs(b):O.breadcrumbs}))}),[O.breadcrumbs,b]);var x=function(t){e.fetch&&(e.data?e.fetch(g({},t)):l(e.fetch(g({},t))))};return(0,a.useEffect)((function(){null!==d&&void 0!==d&&d.isReady&&("banner"!==y||p.banner.showData)&&x(O)}),[null===d||void 0===d?void 0:d.isReady,O.id]),y&&"grid"!=y?((0,a.useEffect)((function(){""!=h&&l((0,c.PV)({message:h}))}),[h]),(0,f.jsx)(v,{config:e.config,render:y,state:b,loading:!(null!==d&&void 0!==d&&d.isReady)||!b||"detail"===y&&null==b.data||"list"==y&&0===(null===(n=b.data)||void 0===n?void 0:n.length)||b.loading||(null===(u=b)||void 0===u?void 0:u.error),setErrorMessage:j,fetch:x,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:O})):(0,f.jsx)(s.C,{from:p.page.title,data:"render property wasn't set"})}function v(e){(0,i.I0)();var t,r,n=e.config,a=e.item,o=e.mainCol,c=e.state,l=e.render,d=e.params,p=e.fetch,m=e.setErrorMessage,v=e.loading,b=n.page.title;if(!v&&c){var y;if("detail"===l&&null===c.data&&(m("this is a demo version, this record was filtered out to reduce the database size"),v=!0),"list"===l)0===(null===(y=c.data)||void 0===y?void 0:y.length)&&(m("data not found"),v=!0);c.error&&(m(c.error.message),v=!0)}var O=(0,f.jsx)(h,g({},e));return(0,f.jsxs)(f.Fragment,{children:[c&&c.error&&(0,f.jsx)(s.C,{from:b,data:c.error.message}),"banner"===l&&O,"list"===l&&(0,f.jsx)(u.Z,g(g({},e),{},{id:n.automata.name,banner:O,mainCol:v&&e.skeleton?e.skeleton:(0,f.jsx)(j,g({},e))})),"page"===l&&(0,f.jsx)(u.Z,g(g({},e),{},{id:n.automata.name,banner:O,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:v,params:d,fetch:p,item:a})}):(0,f.jsx)(s.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===l&&(0,f.jsx)(u.Z,g(g({},e),{},{id:n.automata.name,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(r=null===c||void 0===c?void 0:c.data)&&void 0!==r?r:null,loading:v})}):(0,f.jsx)(s.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})}))]})}function h(e){var t,r,n,a,o,i,c,s,u=e.config,l=e.state,p=null!==(t=null===(r=u.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,g=e.customTitle?e.customTitle:null!==(n=null===(a=u.page)||void 0===a?void 0:a.title)&&void 0!==n?n:"NO TITLE",m=e.customDescription?e.customDescription:null!==(o=null===(i=u.page)||void 0===i?void 0:i.description)&&void 0!==o?o:"NO DESCRIPTION",v=null===(c=u.page)||void 0===c?void 0:c.url;return(0,f.jsx)(d.Z,{showData:p,loading:e.loading,title:g,description:m,data:null===l||void 0===l?void 0:l.data,item:e.item,actions:[{url:v(null!==(s=null===l||void 0===l?void 0:l.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function j(e){var t,r,n=e.loading,a=e.state,o=e.fetch,i=e.item;return(0,f.jsx)(l.Z,{loading:n,page:null!==(t=null===a||void 0===a?void 0:a.params.page)&&void 0!==t?t:null,data:null!==(r=null===a||void 0===a?void 0:a.data)&&void 0!==r?r:null,onPageChange:function(e){o(g(g({},a.params),{},{page:e}))},item:i})}},45004:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return q}});var n=r(67294),a=r(4942),o=r(55619),i={automata:{name:"stories_video_games"},page:{title:"Video Games",description:"a dashboard with information from video games, how they are segmented, awards and ratings",url:function(e){return"/video-games"}},banner:{showData:!1}},c=r(15671),s=r(43144),u=r(60136),l=r(82963),d=r(61120),f=r(52651),p=r(23275),g=r(92401),m=r(96474),v=r(14308),h=r(34532),j=r(85893);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,d.Z)(e);if(t){var a=(0,d.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var y,O=function(e){(0,u.Z)(r,e);var t=b(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.data,r=e.loading,n=t||{},a=n.total,o=(n.awards,n.writers),i=(n.actors,n.producers),c=n.directors,s=(n.countries,n.duration),u=n.genres,l=(n.production,n.ratings,n.releaseYear),d=(n.type,function(e,t,n){return(0,j.jsx)(p.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"},children:(0,j.jsx)(m.Z,{loading:r,title:e,data:t||{},ranges:n})})});return console.log(t),(0,j.jsxs)(v.Z,{spacing:2,children:[(0,j.jsx)(h.Dx,{children:"general"}),(0,j.jsx)(f.Z,{justifyContent:"center",fill:!0,children:function(e,t,n){return(0,j.jsx)(p.Z,{xs:12,sm:6,md:6,lg:4,style:{paddingRight:"1rem"},children:(0,j.jsx)(g.Z,{loading:r,title:e,data:t?t.toString():t,icon:n})})}("movies",a,"sports_esports")}),(0,j.jsx)(h.Dx,{children:"segments"}),(0,j.jsxs)(f.Z,{justifyContent:"center",fill:!0,children:[d("genre",u,[]),d("released",l,[]),d("duration",s,[10])]}),(0,j.jsx)(h.Dx,{children:"crew per movie"}),(0,j.jsxs)(f.Z,{justifyContent:"center",fill:!0,children:[d("directors",c,[10,50,100,250,500]),d("producers",i,[10,50,100,250,500]),d("writers",o,[10,50,100,250,500])]})]})}}]),r}(n.Component),x=r(15861),w=r(87757),P=r.n(w),Z=r(24268),D=r(16161),k=(r(11163),r(30168)),C=r(54397),E=r(74273);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _,N=(0,C.Ps)(y||(y=(0,k.Z)(["\n  query GetData\n  {\n    dashboardGame {\n      total\n      type\n      releaseYear\n      duration\n      genres\n      awards\n      countries\n      ratings\n      production\n      boxOffice\n      cast\n      directors\n      producers\n      writers\n    }\n  }\n"])));function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=i.automata.name,I=(0,Z.hg)("".concat(M,"/fetchData"),function(){var e=(0,x.Z)(P().mark((function e(t,r){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.dispatch(F(t)),"banner"===t.renderer){e.next=7;break}return e.next=4,(0,E.h)(N,{},(function(e){return R(R({},e),{},{data:e.data.dashboardGame})}));case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={data:null,loading:!1,error:null};case 8:return e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),B=(0,Z.oM)({name:M,initialState:{params:{renderer:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=T(T({},e.params),t.payload)}},extraReducers:(_={},(0,a.Z)(_,I.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(_,I.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,o=r.data;e.data=o,e.loading=n,e.error=a})),(0,a.Z)(_,I.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),_)});D.h.reducerManager.add(M,B.reducer);B.reducer;var F=B.actions.setParams;function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){return(0,j.jsx)(o.Z,{params:e,config:i,fetch:function(e){return I(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))},dashboard:function(e){var t=e.data,r=e.loading;return(0,j.jsx)(O,{data:t,loading:r})}})}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){return(0,j.jsx)(z,V(V({},e),{},{render:"page"}))},q=function(e){return(0,j.jsx)(X,{breadcrumbs:"/video-games"})}},65333:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/video-games",function(){return r(45004)}])},87863:function(){}},function(e){e.O(0,[6499,5685,5218,1216,2328,4467,8969,3214,4197,9709,9598,9774,2888,179],(function(){return t=65333,e(e.s=t);var t}));var t=e.O();_N_E=t}]);