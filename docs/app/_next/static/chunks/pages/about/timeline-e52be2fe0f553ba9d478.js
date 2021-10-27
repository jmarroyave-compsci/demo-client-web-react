(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1792],{24746:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(4942),o=n(67294),i=n(55619),a={automata:{name:"about-timeline"},page:{title:"How the project has evolved?",description:"a timeline since the project creation",url:"/about/timeline"},banner:{showData:!1}},c=n(14308),l=n(50561),s=(n(2348),n(34532)),u=(n(19888),n(15671)),f=n(43144),d=n(60136),p=n(82963),m=n(61120),h=(n(73935),n(58969)),b=n(85893);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,m.Z)(e);if(t){var o=(0,m.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,p.Z)(this,n)}}var v=function(e){(0,d.Z)(n,e);var t=y(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,f.Z)(n,[{key:"componentDidMount",value:function(){this.renderMultiChart()}},{key:"render",value:function(){return(0,b.jsx)("div",{id:"chart"})}},{key:"renderMultiChart",value:function(){var e=this.props.data;console.log(e);var t=50,n="0.25",r="0.85",o=h.Xf().domain(h.Wem(e.reduce((function(e,t){return e.concat(t.values.map((function(e){return e.date})))}),[]))).range([0,450]),i=h.BYU().domain([0,h.Fp7(e.reduce((function(e,t){return e.concat(t.values.map((function(e){return e.price})))}),[]))]).range([250,0]),a=h.PKp(h.Cn1),c=h.Ys("#chart").append("svg").attr("width","550px").attr("height","350px").append("g").attr("transform","translate(".concat(t,", ").concat(t,")")),l=h.jvg().x((function(e){return o(e.date)})).y((function(e){return i(e.price)})),s=c.append("g").attr("style","fill: none");s.selectAll(".line-group").data(e).enter().append("g").attr("class","line-group").on("mouseover",(function(e,t){c.append("text").attr("class","title-text").style("fill",a(t)).text(t.name).attr("text-anchor","middle").attr("x",225).attr("y",5)})).on("mouseout",(function(e){c.select(".title-text").remove()})).append("path").attr("class","line").attr("d",(function(e){return l(e.values)})).style("stroke",(function(e,t){return a(t)})).style("stroke-width","5px").style("opacity",n).on("mouseover",(function(e){h.td_(".line").style("opacity","0.1"),h.td_(".circle").style("opacity","0.25"),h.Ys(this).style("opacity","0.85").style("stroke-width","7px").style("cursor","pointer")})).on("mouseout",(function(e){h.td_(".line").style("opacity",n),h.td_(".circle").style("opacity",r),h.Ys(this).style("stroke-width","5px").style("cursor","none")})),s.selectAll("circle-group").data(e).enter().append("g").style("fill",(function(e,t){return a(t)})).selectAll("circle").data((function(e){return e.values})).enter().append("g").attr("class","circle").on("mouseover",(function(e,t){h.Ys(this).style("cursor","pointer").append("text").attr("class","text").text("".concat(t.price)).attr("x",(function(e){return o(t.date)+5})).attr("y",(function(e){return i(t.price)-10}))})).on("mouseout",(function(e){h.Ys(this).style("cursor","none").transition().duration(250).selectAll(".text").remove()})).append("circle").attr("cx",(function(e){return o(e.date)})).attr("cy",(function(e){return i(e.price)})).attr("r",8).style("opacity",r).on("mouseover",(function(e){h.Ys(this).transition().duration(250).attr("r",10)})).on("mouseout",(function(e){h.Ys(this).transition().duration(250).attr("r",8)}));var u=h.LLu(o).ticks(5),f=h.y4O(i).ticks(5);c.append("g").attr("class","x axis").attr("transform","translate(0, ".concat(250,")")).call(u),c.append("g").attr("class","y axis").call(f).append("text").attr("y",15).attr("transform","rotate(-90)").attr("fill","#000").text("Total values")}}]),n}(o.Component);function g(e){var t=(0,l.Y)();return t=function(e){var t=[],n=["area","files","loc","node_modules","loc","project","loc"];return Object.keys(e).forEach((function(n){var r={name:n,values:[]};t.push(r);var o=e[n];Object.keys(o).forEach((function(e){var t=o[e];r.values.push({date:new Date(e),price:t.own.lines})}))})),{rows:t,header:n}}(t),(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(s.Dx,{children:"Lines of Code"}),(0,b.jsx)(v,{title:"test",data:t.rows,ranges:[],small:!0,height:100})]})}function w(e){return(0,b.jsx)(c.Z,{children:(0,b.jsx)(s.Dx,{children:"Screenshots"})})}function j(e){return(0,b.jsx)(c.Z,{children:(0,b.jsx)(s.Dx,{children:"Sitemap"})})}var x=function(e){return(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(g,{}),(0,b.jsx)(w,{}),(0,b.jsx)(j,{})]})};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){return(0,b.jsx)(i.Z,{config:a,type:e.render,mainCol:function(e){return(0,b.jsx)(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))},breadcrumbs:e.breadcrumbs})}},19888:function(e,t,n){"use strict";n.d(t,{Rx:function(){return a},hT:function(){return c},T5:function(){return l}});var r=n(92077),o=n.n(r),i=n(24417),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return o()(Number(e)).format(t)},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(n){return null}},r=function(e,t){switch(t){case"ago":return formatDistance(e,new Date);case"DD/MM/YYYY":return formatter(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return formatter(e,t)}};return r(e=n(e),t)},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return i.default.toSentenceCase(e)}},2348:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(4942),o=(n(67294),n(29602)),i=n(41120),a=n(9573),c=n(38732),l=n(98102),s=n(89755),u=n(56011),f=n(3694),d=n(13874);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){return{warningTableHeader:{color:d.MA[0]},primaryTableHeader:{color:d.lr[0]},dangerTableHeader:{color:d.E7[0]},successTableHeader:{color:d.nq[0]},infoTableHeader:{color:d.bE[0]},roseTableHeader:{color:d.An[0]},grayTableHeader:{color:d.X_[0]},table:{marginBottom:"0",width:"100%",maxWidth:"100%",backgroundColor:"transparent",borderSpacing:"0",borderCollapse:"collapse"},tableHeadCell:m(m({color:"inherit"},d.Df),{},{"&, &$tableCell":{fontSize:"1em"}}),tableCell:m(m({},d.Df),{},{lineHeight:"1.42857143",padding:"12px 8px",verticalAlign:"middle",fontSize:"0.8125rem"}),tableResponsive:{width:"100%",marginBottom:e.spacing(2),overflowX:"auto"},tableHeadRow:{height:"56px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"},tableBodyRow:{height:"48px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"}}},b=n(360),y=n(85893),v=(0,i.Z)(h),g=(0,o.ZP)(l.Z)((function(e){var t,n=e.theme;return t={},(0,r.Z)(t,"&.".concat(s.Z.head),{backgroundColor:n.palette.common.black,color:n.palette.common.white}),(0,r.Z)(t,"&.".concat(s.Z.body),{fontSize:"0.75rem"}),t})),w=(0,o.ZP)(f.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),j=function(e){var t=v(),n=e.tableHead,r=e.tableHeader,o=e.tableData,i=e.tableHeaderColor,l=e.showHeader,s=e.tableDataExclude;return n=n||r,!0===l&&!n||!o?"No Data":(0,y.jsx)("div",{className:t.tableResponsive,children:(0,y.jsxs)(a.Z,{className:t.table,children:[void 0!==n&&l?(0,y.jsx)(u.Z,{className:t[i+"TableHeader"],children:(0,y.jsx)(w,{className:t.tableHeadRow,children:n.map((function(e,n){return(0,y.jsx)(g,{className:t.tableCell+" "+t.tableHeadCell,children:e},n)}))})}):null,(0,y.jsx)(c.Z,{children:(0,b.Yu)(o,(function(e,n){return(0,y.jsx)(w,{className:t.tableBodyRow,children:(0,b.Yu)(e,(function(e,n){if(!s||!s.includes(n))return(0,y.jsx)(g,{className:t.tableCell,children:e},n)}))},n)}))})]})})};j.defaultProps={tableHeaderColor:"gray",showHeader:!0};var x=j},34532:function(e,t,n){"use strict";n.d(t,{Dx:function(){return o}});n(67294);var r=n(29602),o=(n(85893),(0,r.ZP)("h2")({padding:"0",margin:"1rem 0 0.5rem 0",textTransform:"lowercase",fontSize:"2.5rem"}));(0,r.ZP)("h3")({marginTop:"1rem",marginBottom:"0rem"}),(0,r.ZP)("div")({fontSize:"0.9rem",lineHeight:"1rem",marginBottom:"0.5rem"})},50561:function(e,t,n){"use strict";n.d(t,{Y:function(){return o}});var r=JSON.parse('{"scripts":{"2021-10-16":{"nm":{"files":8765,"lines":4161088},"own":{"files":91,"lines":4461}},"2021-10-17":{"nm":{"files":9006,"lines":4189911},"own":{"files":94,"lines":4627}},"2021-10-26.csv":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5383}}},"client":{"2021-10-11":{"nm":{"files":41379,"lines":2060460},"own":{"files":530,"lines":33181}},"2021-10-16":{"nm":{"files":41835,"lines":2145232},"own":{"files":567,"lines":37693}},"2021-10-17":{"nm":{"files":41835,"lines":2145232},"own":{"files":575,"lines":37943}},"2021-10-23.csv":{"nm":{"files":149375,"lines":5622641},"own":{"files":671,"lines":52468}},"2021-10-24.csv":{"nm":{"files":154470,"lines":5793328},"own":{"files":677,"lines":52455}},"2021-10-26.csv":{"nm":{"files":154555,"lines":5799136},"own":{"files":710,"lines":55935}}},"server":{"2021-10-16":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3919}},"2021-10-17":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3920}},"2021-10-26.csv":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11026}}}}'),o=function(){return r}},37392:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});n(67294);var r=n(4942),o=n(24746),i=n(85893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return(0,i.jsx)(o.Z,c(c({},e),{},{render:"page"}))},s=function(e){return(0,i.jsx)(l,{breadcrumbs:"/about/timeline"})}},68942:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/timeline",function(){return n(37392)}])}},function(e){e.O(0,[6499,5685,2328,4467,8969,5619,9774,2888,179],(function(){return t=68942,e(e.s=t);var t}));var t=e.O();_N_E=t}]);