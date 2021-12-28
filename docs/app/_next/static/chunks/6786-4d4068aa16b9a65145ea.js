"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6786],{96786:function(e,r,t){t.d(r,{Z:function(){return je}});var n,o=t(4942),c=t(67294),a=t(55619),i={automata:{name:"story-topics"},page:{title:"Topics",description:"",url:function(e){var r=e.entity,t=e.decade,n=e.genre,o=e.page;return"/".concat(r,"/stories/topics?decade=").concat(t,"&genre=").concat(n,"&page=").concat(o)}},banner:{showData:!0,renderer:"marquee"}},u=t(15861),s=t(87757),p=t.n(s),l=t(24268),d=t(80105),f=t(11163),g=t(1015);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j=i.automata.name,O=(0,l.hg)("".concat(j,"/fetchTopic"),function(){var e=(0,u.Z)(p().mark((function e(r,t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.S)(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),h=(0,l.hg)("".concat(j,"/fetchData"),function(){var e=(0,u.Z)(p().mark((function e(r,t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(v(r)),e.next=3,(0,g.E)(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),m=(0,l.oM)({name:j,initialState:{params:{renderer:null,entity:null,page:null,genre:null,decade:null},data:null,loading:!0,error:null,topic:{data:null,loading:!0,error:null}},reducers:{setParams:function(e,r){e.params=y(y({},e.params),r.payload),"banner"!=e.params.renderer&&f.default.push("".concat(i.page.url(e.params)),null,{shallow:!0})}},extraReducers:(n={},(0,o.Z)(n,h.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(n,h.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(n,h.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),(0,o.Z)(n,O.pending,(function(e,r){e.topic.data=null,e.topic.loading=!0,e.topic.error=""})),(0,o.Z)(n,O.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.topic.data=c,e.topic.loading=n,e.topic.error=o})),(0,o.Z)(n,O.rejected,(function(e,r){var t=r.error;e.topic.data=[],e.topic.loading=!1,e.topic.error=t})),n)});d.h.reducerManager.add(j,m.reducer);m.reducer;var v=m.actions.setParams,w=t(39704),x=t(39698),P=t(74035),E=t(26447),D=t(90461),C=t(9573),Z=t(38732),k=t(98102),S=t(56011),T=t(3694),I=t(85893);function N(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var R=function(e){var r=e.data,t=e.onExit,n=e.topic,a=(0,c.useState)({}),i=a[0],u=a[1],s=function(e,r){return r?"rgba(0,0,0,0.4)":e%2==0?"rgba(0,0,0,0.1)":"inherit"};return(0,c.useEffect)((function(){if(r.topic.data){var e={},t={};r.topic.data.forEach((function(r){e[r.year]||(e[r.year]={}),t[r.genre]||(t[r.genre]={})}));var n={};Object.keys(t).forEach((function(r){return n[r]=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?N(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e)})),r.topic.data.forEach((function(e){n[e.genre][e.year]=1})),u(n)}}),[r.topic.data]),(0,I.jsxs)("div",{style:{padding:"1rem"},children:[(0,I.jsxs)(E.Z,{direction:"row",style:{marginBottom:"1rem"},children:[(0,I.jsx)(D.Z,{label:n.replace(/,/g," "),onDelete:t}),(0,I.jsx)("div",{style:{flex:1}})]}),(0,I.jsx)("div",{style:{fontSize:"0.6rem",width:"100%",maxHeight:"400px",overflow:"auto"},children:(0,I.jsxs)(C.Z,{size:"small",stickyHeader:!0,children:[(0,I.jsx)(S.Z,{children:(0,I.jsxs)(T.Z,{children:[(0,I.jsx)(k.Z,{children:"\xa0"}),Object.keys(i).slice(0,1).map((function(e){return Object.keys(i[e]).map((function(e){return(0,I.jsx)(k.Z,{align:"center",children:e},e)}))})),(0,I.jsx)(k.Z,{children:"\xa0"})]})}),(0,I.jsx)(Z.Z,{children:Object.keys(i).map((function(r,t){return(0,I.jsxs)(T.Z,{style:{backgroundColor:s(t,!1)},children:[(0,I.jsx)(k.Z,{style:{backgroundColor:s(0,r==e.genre)},children:r}),Object.keys(i[r]).map((function(t){return(0,I.jsx)(k.Z,{style:{backgroundColor:s(0,t==e.year||r==e.genre)},align:"center",children:1==i[r][t]?"\u2713":" "})})),(0,I.jsx)(k.Z,{style:{backgroundColor:s(0,r==e.genre)},children:r})]},t)}))})]})})]})},_=t(29602),M=t(2734),L=t(97005),G=t(74187);function H(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?H(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var z=(0,_.ZP)("span")((function(e){var r=e.fontSize,t=e.color,n=e.backgroundColor;e.theme;return{border:"1px solid rgba(0,0,0,0.2)",padding:"0.5rem",marginRight:"1rem",marginBottom:"0.25rem",fontSize:"".concat(r),color:"".concat(t),backgroundColor:"".concat(n),cursor:"pointer",borderRadius:"5px"}})),U=function(e){e.data;var r=e.direction,t=e.words,n=e.max,o=e.min,c=e.onClick;return(0,I.jsx)(L.Z,{gradient:!1,direction:r,pauseOnHover:!0,pauseOnClick:!0,children:t.map((function(e,r){return(0,I.jsx)(z,A(A({},Q(e.n,n,o)),{},{fontSize:F(e.n,n,o),onClick:function(){return c(e.p)},children:e.p.split(",").join(" ")}),r)}))})},F=function(e,r,t){e+=10;for(var n=[1,2,3,5,8,12,16,21,34,55],o=(r-t)/n[n.length-1],c=Math.floor(e/o),a=0;a<n.length;a++){if(c<n[a]){c=a;break}}return"1em"},Q=function(e,r,t){for(var n=(0,M.Z)(),o=[3,5,8,13,21,34,55],c=(r-t)/o[o.length-1],a=Math.floor(e/c),i=0;i<o.length;i++)if(a<=o[i]){a=i;break}return a=o.length-1-(a=a>o.length-1?o.length-1:a),(0,G.$)(n,a)},B=function(e){var r=e.data,t=e.max,n=e.min,o=e.onTopicClick,c="i-".repeat(3).split("-"),a=Math.floor(r.length/4);return(0,I.jsx)("div",{children:c.map((function(e,c){return(0,I.jsx)(U,{onClick:o,max:t,min:n,words:r.slice(a*c,a*(c+1)),direction:c%2==0?"left":"right"},c)}))})};function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function X(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Y={showLines:!0,showTimeline:!1,topic:""};function q(e,r){var t;switch(r.type){case"INIT":return X(X({},e),{},{showLines:!0,showTimeline:!1,topic:""});case"SELECT_WORD":return X(X({},e),{},{showLines:!1,showTimeline:!0,topic:r.payload.topic});case"EXIT_TIMELINE":return X(X({},e),{},{showLines:!0,showTimeline:!1,topic:""});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}var J=function(e){var r=e.props,t=r.max,n=r.min,o=r.words,a=r.genre,i=r.year,u=(0,c.useReducer)(q,Y),s=u[0],p=u[1];return(0,I.jsxs)("div",{children:[(0,I.jsx)(B,{max:t,min:n,data:o,onTopicClick:function(r){e.onTopicClick&&e.onTopicClick(r),p({type:"SELECT_WORD",payload:{topic:r}})}}),(0,I.jsx)("br",{}),s.topic&&(0,I.jsx)(R,{topic:s.topic,genre:a,year:i,data:e.topicData,onExit:function(e){p({type:"EXIT_TIMELINE"})}})]})},V=function(e){var r=(0,w.I0)(),t=(0,w.v9)((function(e){return e["story-topics"]})),n=(e.max,e.min,e.words,e.genre),o=e.year,c=e.header,a=void 0===c||c;return(0,I.jsxs)("div",{style:{padding:"1rem",width:"100%"},children:[a&&(0,I.jsx)(P.RQ,{children:(0,I.jsxs)(x.Dx,{children:[n.toUpperCase()," ",o]})}),(0,I.jsx)(J,{onTopicClick:function(t){e.onTopicClick&&e.onTopicClick(t),r(O({entity:"movie",topic:t}))},props:e,topicData:t})]})},$=t(45688),K=t(14308),ee=t(24463),re=t(86547),te=t(15121),ne=t(98326),oe=t(52871),ce=t(72642);function ae(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ie(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ae(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ue={decade:null,genre:null};function se(e,r){var t;switch(r.type){case"INIT":return ie(ie({},e),{},{decade:r.payload.decade?r.payload.decade:e.decade,genre:r.payload.genre?r.payload.genre:e.genre});case"DECADE_CHANGE":return ie(ie({},e),{},{decade:r.payload});case"GENRE_CHANGE":return ie(ie({},e),{},{genre:r.payload});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}function pe(e){var r=(0,c.useState)(!1),t=(r[0],r[1],(0,c.useReducer)(se,ue)),n=t[0],o=t[1],a=e.params,i=e.onChange,u=(0,c.useMemo)((function(){return(0,ne.a)().map((function(e){return{label:e,id:e}}))}),[]),s=(0,c.useMemo)((function(){return(0,oe.J)().map((function(e){return{label:e,id:e}}))}),[]);console.log(a),(0,c.useEffect)((function(){o({type:"INIT",payload:{decade:u.find((function(e){return e.id==a.decade})),genre:s.find((function(e){return e.id==a.genre}))}})}),[a]);return n.decade&&n.genre?(0,I.jsx)(P.RQ,{children:(0,I.jsxs)(K.Z,{spacing:2,children:[(0,I.jsx)(te.Z,{id:"decade",disableClearable:!0,options:u,value:n.decade,onChange:function(e,r){return o({type:"DECADE_CHANGE",payload:r})},sx:{width:300},renderInput:function(e){return(0,I.jsx)(re.Z,ie(ie({},e),{},{label:"Decade"}))}}),(0,I.jsx)(te.Z,{id:"genre",disableClearable:!0,options:s,value:n.genre,onChange:function(e,r){return o({type:"GENRE_CHANGE",payload:r})},sx:{width:300},renderInput:function(e){return(0,I.jsx)(re.Z,ie(ie({},e),{},{label:"Genre"}))}}),(0,I.jsx)(P.RQ,{children:(0,I.jsx)(ce.Z,{variant:"outlined",onClick:function(){!function(){var e={decade:n.decade.id,genre:n.genre.id};i&&i(e)}()},children:"Filter"})})]})}):null}var le=t(50789);function de(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function fe(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?de(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ge=function(e){var r=e.data,t=e.loading,n=e.fetch,o=e.params,c=e.item;return(0,I.jsxs)(K.Z,{children:[(0,I.jsx)(ee.Z,{onChange:function(e){n(fe(fe({},e),{},{page:1}))},filters:function(e){var r=e.onChange;return(0,I.jsx)(pe,{onChange:r,params:o})}}),(0,I.jsx)(le.Z,{data:r,loading:t,item:c,page:e.params.page,params:o,onPageChange:function(e){return n(fe(fe({},o),{},{page:e}))}})]})};function be(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ye(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?be(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function je(e){return(0,I.jsx)(a.Z,{params:e,config:i,fetch:function(e){return h(e)},item:function(r){return(0,I.jsx)(V,ye(ye({type:e.type},r),{},{header:"banner"!=e.render}))},mainCol:function(e){return(0,I.jsx)(ge,ye({},e))},customTitle:function(e){return"".concat(i.page.title,": ").concat(e.decade,"s ").concat(e.genre)},customDescription:function(e){return e.decade?(0,I.jsx)($.C,{tag:e.decade}):""},customUrl:function(e){return i.page.url(e)}})}},98326:function(e,r,t){t.d(r,{a:function(){return n},V:function(){return o}});var n=function(){for(var e=[],r=1880;r<(new Date).getFullYear();r+=10){var t=r.toString().slice(0,3).padEnd(4,"0");e.push(t)}return e.reverse()},o=function(){for(var e=[],r=1880;r<(new Date).getFullYear();r++){var t=r.toString();e.push(t)}return e.reverse()}}}]);