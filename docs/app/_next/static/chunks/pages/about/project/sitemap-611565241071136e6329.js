(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8512],{6110:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(4942),a=r(67294),o=r(55619),i={automata:{name:"about-project-sitemap"},page:{title:"Sitemap",description:"are you lost or looking for something?",url:function(){return"/about/project/sitemap"}},banner:{showData:!1}},s=r(14308),c=r(9092),l=JSON.parse('{"home":{"stories":{},"movies":{"____tt0454876":{},"festivals":{"____mf00001":{}},"stories":{"actors":{},"awards":{"____award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____tt0454876":{},"stories":{"actors":{},"directors":{},"remakes":{},"writers":{}}},"video-games":{"stories":{},"____tt0022215":{}},"podcasts":{"stories":{},"____0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"stories":{},"____nm0000158":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),u=JSON.parse('{"home":{"stories":{},"movies":{"____[movie]?movie=tt0454876":{},"festivals":{"____[festival]?festival=mf00001":{}},"stories":{"actors":{},"awards":{"____[award]?award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____[tv-show]?tv-show=tt0454876":{}},"video-games":{"____[video-game]?video-game=tt0022215":{}},"podcasts":{"____[podcast]?podcast=0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"____[person]?person=nm0000199":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),d=r(89757),p=r(95899),f=r(23508),m=r(26215),g=r(89260),v=r(85893);function j(e){var t=(0,a.useRef)([]),r=c.Z.TEST?u:l;return(0,v.jsx)(s.Z,{children:(0,v.jsx)(d.Z,{id:"sitemap","aria-label":"file system navigator",defaultCollapseIcon:(0,v.jsx)(f.Z,{}),defaultExpandIcon:(0,v.jsx)(m.Z,{}),sx:{flexGrow:1},expanded:t.current,children:b(t.current,"home","/",r.home)})})}function b(e,t,r,n){var a=e.length.toString();return e.push(a),(0,v.jsx)(p.Z,{nodeId:a,label:(0,v.jsx)(g.Z,{href:r,children:t}),children:Object.keys(n).map((function(t){if(!t.startsWith("____"))return b(e,t,"".concat(r).concat(t,"/"),n[t])}))},a)}var h=function(e){return(0,v.jsx)(s.Z,{children:(0,v.jsx)(j,{})})};function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){return(0,v.jsx)(o.Z,{params:e,config:i,mainCol:function(e){return(0,v.jsx)(h,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}},50789:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(4942),a=r(67294),o=r(52651),i=r(23275),s=r(79895),c=r(14308),l=r(28973),u=r(62448),d=r(50367),p=r(12666),f=r(85893);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},j={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function b(e){var t=e.animations,r=void 0===t||t,n=e.data,s=e.loading,c=e.url,l=e.skeleton,m=e.item,b=e.onPageChange,_=e.page,O=e.pageSize,y=e.xs,x=void 0===y?12:y,w=e.sm,P=void 0===w?6:w,Z=e.md,k=void 0===Z?6:Z,D=e.lg,C=void 0===D?4:D,E=e.noPaging,S=void 0!==E&&E,N=e.noPadding;n=n&&n.length>0?n:[1,2,3,4,5,6];var T=function(e){return N?e:(0,f.jsx)(d.ck,{children:e})},I=function(e){return r?(0,f.jsx)(p.ZP,{in:!0,timeout:1300,children:function(t){return(0,f.jsx)("div",{style:g(g({},v),j[t]),children:e})}}):e},R=function(e){return(0,f.jsx)(i.Z,{xs:x,sm:P,md:k,lg:C,children:T(s?l||(0,f.jsx)(h,{}):m?I(m(e.data)):null)})},F=(0,f.jsx)(o.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:n.map((function(t,r){return(0,f.jsx)(a.Fragment,{children:(0,f.jsx)(R,{data:t,params:e})},r)}))});return S||(F=(0,f.jsx)(u.Z,{pageSize:O,data:n,url:c,onPageChange:b,page:_,loading:s,children:F})),(0,f.jsx)(d.RQ,{children:F})}function h(){return(0,f.jsx)(s.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,f.jsxs)(c.Z,{spacing:1,children:[(0,f.jsx)(l.Z,{variant:"text",width:"80%"}),(0,f.jsx)(l.Z,{variant:"rectangular",height:240}),(0,f.jsx)(l.Z,{variant:"text"})]})})}},62448:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(67294),a=r(11163),o=r(14308),i=r(72642),s=r(50367),c=r(58862),l=r(85893);function u(e){var t=(0,a.useRouter)(),r=(0,n.useRef)(null),u=e||{},d=u.children,p=u.route,f=u.loading,m=u.data,g=u.url,v=u.skeleton,j=u.onPageChange,b=u.page,h=u.pageSize,_=void 0===h?10:h;b=(b=b||(p&&p.page?p.page:null))?parseInt(b):1;var O=function(e){if(r.current.scrollIntoView(!1),j&&j(e),g){var n="".concat(g,"/").concat(e);t.push(n)}},y=m&&m.length<_,x=1==b;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{ref:r}),(0,l.jsx)(s.RQ,{children:m&&m.length>0?(0,l.jsxs)(o.Z,{spacing:2,children:[d,(0,l.jsxs)(o.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,l.jsx)(i.Z,{variant:"outlined",disabled:x,onClick:function(){return O(b-1)},children:"Back"}),(0,l.jsx)(i.Z,{variant:"outlined",disabled:y,onClick:function(){return O(b+1)},children:"Next"})]})]}):(0,l.jsx)(c.Dx,{children:f?v||"loading":"No results"})})]})}},55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(4942),a=r(67294),o=r(11163),i=r(93942),s=r(19016),c=r(25810),l=r(14763),u=r(50789),d=(r(14308),r(529)),p=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){var t,r,n,l,u=(0,i.I0)(),d=(0,o.useRouter)(),f=e.config,g=(0,a.useState)(""),j=g[0],b=g[1],h=(0,i.v9)((function(e){return e[f.automata.name]})),_=null!==(t=e.params.render)&&void 0!==t?t:null,O=m(m({},e.params),{},{renderer:null!==(r=e.params.renderer)&&void 0!==r?r:_});h=e.data?{data:e.data,params:{page:e.params.page}}:h;(0,a.useEffect)((function(){h&&(u((0,s.K4)({status:h.loading,sender:f.automata.name})),console.log(f.automata.name,h))}),[h]),(0,a.useEffect)((function(){O.breadcrumbs&&u((0,s.YA)({breadcrumbs:"function"===typeof O.breadcrumbs?O.breadcrumbs(h):O.breadcrumbs}))}),[O.breadcrumbs,h]);var y=function(t){e.fetch&&(e.data?e.fetch(m({},t)):u(e.fetch(m({},t))))};return(0,a.useEffect)((function(){null!==d&&void 0!==d&&d.isReady&&("banner"!==_||f.banner.showData)&&y(O)}),[null===d||void 0===d?void 0:d.isReady,O.id]),_&&"grid"!=_?((0,a.useEffect)((function(){""!=j&&u((0,s.PV)({message:j}))}),[j]),(0,p.jsx)(v,{config:e.config,render:_,state:h,loading:!(null!==d&&void 0!==d&&d.isReady)||!h||"detail"===_&&null==h.data||"list"==_&&0===(null===(n=h.data)||void 0===n?void 0:n.length)||h.loading||(null===(l=h)||void 0===l?void 0:l.error),setErrorMessage:b,fetch:y,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:O})):(0,p.jsx)(c.C,{from:f.page.title,data:"render property wasn't set"})}function v(e){(0,i.I0)();var t,r,n=e.config,a=e.item,o=e.mainCol,s=e.state,u=e.render,d=e.params,f=e.fetch,g=e.setErrorMessage,v=e.loading,h=n.page.title;if(!v&&s){var _;if("detail"===u&&null===s.data&&(g("this is a demo version, this record was filtered out to reduce the database size"),v=!0),"list"===u)0===(null===(_=s.data)||void 0===_?void 0:_.length)&&(g("data not found"),v=!0);s.error&&(g(s.error.message),v=!0)}var O=(0,p.jsx)(j,m({},e));return(0,p.jsxs)(p.Fragment,{children:[s&&s.error&&(0,p.jsx)(c.C,{from:h,data:s.error.message}),"banner"===u&&O,"list"===u&&(0,p.jsx)(l.Z,m(m({},e),{},{id:n.automata.name,banner:O,mainCol:v&&e.skeleton?e.skeleton:(0,p.jsx)(b,m({},e))})),"page"===u&&(0,p.jsx)(l.Z,m(m({},e),{},{id:n.automata.name,banner:O,mainCol:o?(0,p.jsx)(p.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(t=null===s||void 0===s?void 0:s.data)&&void 0!==t?t:null,loading:v,params:d,fetch:f,item:a})}):(0,p.jsx)(c.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===u&&(0,p.jsx)(l.Z,m(m({},e),{},{id:n.automata.name,mainCol:o?(0,p.jsx)(p.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(r=null===s||void 0===s?void 0:s.data)&&void 0!==r?r:null,loading:v})}):(0,p.jsx)(c.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})}))]})}function j(e){var t,r,n,a,o,i,s,c,l=e.config,u=e.state,f=null!==(t=null===(r=l.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,m=e.customTitle?e.customTitle:null!==(n=null===(a=l.page)||void 0===a?void 0:a.title)&&void 0!==n?n:"NO TITLE",g=e.customDescription?e.customDescription:null!==(o=null===(i=l.page)||void 0===i?void 0:i.description)&&void 0!==o?o:"NO DESCRIPTION",v=null===(s=l.page)||void 0===s?void 0:s.url;return(0,p.jsx)(d.Z,{showData:f,loading:e.loading,title:m,description:g,data:null===u||void 0===u?void 0:u.data,item:e.item,actions:[{url:v(null!==(c=null===u||void 0===u?void 0:u.params)&&void 0!==c?c:{}),title:"See all"}],hero:"banner"!==e.render})}function b(e){var t,r,n=e.loading,a=e.state,o=e.fetch,i=e.item;return(0,p.jsx)(u.Z,{loading:n,page:null!==(t=null===a||void 0===a?void 0:a.params.page)&&void 0!==t?t:null,data:null!==(r=null===a||void 0===a?void 0:a.data)&&void 0!==r?r:null,onPageChange:function(e){o(m(m({},a.params),{},{page:e}))},item:i})}},91119:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});r(67294);var n=r(4942),a=r(6110),o=r(85893);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e){return(0,o.jsx)(a.Z,s(s({},e),{},{render:"page"}))},l=function(e){return(0,o.jsx)(c,{breadcrumbs:"/about/project/sitemap"})}},39882:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/sitemap",function(){return r(91119)}])}},function(e){e.O(0,[6499,5685,922,4197,9774,2888,179],(function(){return t=39882,e(e.s=t);var t}));var t=e.O();_N_E=t}]);