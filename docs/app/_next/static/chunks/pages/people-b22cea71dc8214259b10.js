(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7563],{70889:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return T}});var n=t(67294),o=t(4942),a=t(55619),s={automata:{name:"people"},page:{title:"People",description:"a dashboard with information from people, their professions and other distributions",url:function(){return"/people"}},banner:{showData:!1}},c=t(52651),i=(t(23275),t(14308)),p=t(34532),l=t(59745),u=t(89441),f=t(85893);var d,b,O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,n.useState)(null),t=r[0],o=r[1],a=e.data,s=e.loading,d=a||{},b=d.total,O=d.awards,j=d.writers,y=d.actors,h=d.producers,g=d.directors,P=d.professionsPerPerson,w=d.professions,v=(d.birthYear,d.birthDecade),m=function(e,r,t){var n;switch(t){case"birthYear":n={op:"range",field:"birthYear",value:[parseInt(e.label),parseInt(e.label)+10]};break;case"profession":n={op:"eq",field:"profession",value:e.label.replace(/ /g,"_").toLowerCase()};break;case"professionPerPerson":n={op:"len",field:"profession",value:parseInt(e.label)};break;case"acted":n={op:"gt",field:"acted",value:parseInt(e.label)};break;case"awards":n={op:"len",field:"awards",value:parseInt(e.label)};break;default:value=e.label}o({op:n,title:"".concat(r,": ").concat(e.label),type:"person"})};return(0,f.jsxs)(i.Z,{spacing:2,children:[(0,f.jsx)(l.Z,{query:t}),(0,f.jsx)(p.Dx,{children:"general"}),(0,f.jsx)(c.Z,{justifyContent:"center",fill:!0,children:(0,u.K)(s,"people",b,"people")}),(0,f.jsx)(p.Dx,{children:"segments"}),(0,f.jsxs)(c.Z,{justifyContent:"center",fill:!0,children:[(0,u.q)(s,"birth decade",v,[30],m,"birthYear"),(0,u.q)(s,"professions",w,[500],m,"profession"),(0,u.q)(s,"professions per person",P,[500],"professionPerPerson")]}),(0,f.jsx)(p.Dx,{children:"movies done"}),(0,f.jsxs)(c.Z,{justifyContent:"center",fill:!0,children:[(0,u.q)(s,"actors",y,[10,50,250,500]),(0,u.q)(s,"directors",g,[10,50,100,250,500]),(0,u.q)(s,"producers",h,[10,50,100,250,500]),(0,u.q)(s,"writers",j,[10,50,100,250,500])]}),(0,f.jsx)(p.Dx,{children:"awards"}),(0,f.jsx)(c.Z,{justifyContent:"center",fill:!0,children:(0,u.q)(s,"awards and nominations",O,[],m,"awards")})]})},j=t(15861),y=t(87757),h=t.n(y),g=t(24268),P=t(16161),w=(t(11163),t(30168)),v=t(54397),m=t(74273);t(61878);function D(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?D(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Z,k=(0,v.Ps)(d||(d=(0,w.Z)(["\n  query GetData\n  {\n    dashboardPeople {\n      total\n      birthYear\n      birthDecade\n      professionsPerPerson\n      professions\n      professionsByDecade\n      awards\n      directors\n      producers\n      actors\n      writers\n    }\n  }\n"])));(0,v.Ps)(b||(b=(0,w.Z)(["\n  query GetPeople($page: Int, $field: String)\n  {\n    people(page: $page, field: $field){\n      id\n      name\n    }\n  }\n"])));function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var q=s.automata.name,S=(0,g.hg)("".concat(q,"/fetchData"),function(){var e=(0,j.Z)(h().mark((function e(r,t){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dispatch(I(r)),"banner"===r.renderer){e.next=7;break}return e.next=4,(0,m.h)(k,{},(function(e){return x(x({},e),{},{data:e.data.dashboardPeople})}));case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={data:null,loading:!1,error:null};case 8:return e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),C=(0,g.oM)({name:q,initialState:{params:{renderer:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=_(_({},e.params),r.payload)}},extraReducers:(Z={},(0,o.Z)(Z,S.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(Z,S.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,a=t.data;e.data=a,e.loading=n,e.error=o})),(0,o.Z)(Z,S.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),Z)});P.h.reducerManager.add(q,C.reducer);C.reducer;var I=C.actions.setParams;function N(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Y(e){return(0,f.jsx)(a.Z,{params:e,config:s,fetch:function(e){return S(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?N(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))},dashboard:function(e){var r=e.data,t=e.loading;return(0,f.jsx)(O,{data:r,loading:t})}})}function $(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function G(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?$(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var M=function(e){return(0,f.jsx)(Y,G(G({},e),{},{render:"page"}))},T=function(e){return(0,f.jsx)(M,{breadcrumbs:"/people"})}},51677:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people",function(){return t(70889)}])}},function(e){e.O(0,[6499,5685,5218,3128,4471,1216,2328,4467,8969,3214,4197,1544,9709,9598,2725,9774,2888,179],(function(){return r=51677,e(e.s=r);var r}));var r=e.O();_N_E=r}]);