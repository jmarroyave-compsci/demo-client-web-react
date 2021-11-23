(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4537],{15313:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return N}});var n=t(67294),a=t(11163),o=t(4942),c=t(55619),i={automata:{name:"page_movies_festivals"},page:{title:"Movie Festivals",description:"",url:function(){return"/movies/festivals"}},banner:{showData:!0}},s=t(52651),u=(t(23275),t(14308)),l=t(34532),p=t(5760),f=t(45787),d=t(85893);var b,O=function(e){var r=(0,n.useState)(null),t=r[0],a=r[1],o=e.data,c=e.loading,i=o||{},b=(i.startYear,i.startDecade),O=i.countries,g=i.continent,v=i.total,j=function(e,r){var t=function(e,r){var t;switch(console.log("query",r),r){case"country":t={op:"eq",field:"country",value:e.label.toLowerCase()};break;case"continent":t={op:"eq",field:"continent",value:e.label};break;case"started":t={op:"range",field:"startYear",value:[parseInt(e.label),parseInt(e.label)+10]}}return t}(e,r);a({op:t,title:"".concat(r,": ").concat(e.label),type:"movieFestival"})};return(0,d.jsxs)(u.Z,{spacing:2,children:[(0,d.jsx)(p.Z,{query:t}),(0,d.jsx)(l.Dx,{children:"general"}),(0,d.jsx)(s.Z,{justifyContent:"center",fill:!0,children:(0,f.K)(c,"movie festivals",v,"festival")}),(0,d.jsx)(l.Dx,{children:"segments"}),(0,d.jsxs)(s.Z,{justifyContent:"center",fill:!0,children:[(0,f.q)(c,"started",b,[],j),(0,f.q)(c,"country",O,[5],j),(0,f.q)(c,"continent",g,[],j)]})]})},g=t(15861),v=t(87757),j=t.n(v),y=t(24268),h=t(16161),m=t(85639);function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var D=i.automata.name,x=(0,y.hg)("".concat(D,"/fetchData"),function(){var e=(0,g.Z)(j().mark((function e(r,t){var n;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(Z(r)),e.next=3,m.AK();case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),_=(0,y.oM)({name:D,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=P(P({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&a.default.push("".concat(i.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(b={},(0,o.Z)(b,x.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(b,x.fulfilled,(function(e,r){var t=r.payload,n=t.loading,a=t.error,o=t.data;e.data=o,e.loading=n,e.error=a})),(0,o.Z)(b,x.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),b)});h.h.reducerManager.add(D,_.reducer);_.reducer;var Z=_.actions.setParams;function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){return(0,d.jsx)(c.Z,{params:e,config:i,fetch:function(e){return x(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))},dashboard:function(e){var r=e.data,t=e.loading;return(0,d.jsx)(O,{data:r,loading:t})}})}function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var C=function(e){return(0,d.jsx)(k,S(S({},e),{},{render:"page"}))},N=function(e){var r=(0,a.useRouter)(),t=(r.query?r.query:{}).page;return t=t?parseInt(t):1,(0,d.jsx)(C,{breadcrumbs:"/movies/festivals",page:t})}},9849:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/festivals",function(){return t(15313)}])}},function(e){e.O(0,[6499,5685,3128,5218,4471,1216,2328,4467,8969,3214,4197,4999,2282,9709,9943,1108,9774,2888,179],(function(){return r=9849,e(e.s=r);var r}));var r=e.O();_N_E=r}]);