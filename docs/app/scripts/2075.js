/*! For license information please see 2075.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[2075],{91534:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(83347),o=r(86688),i=r(72797);class l extends n.Component{render(){const{className:e,cover:t,padding:r,children:o,hero:i}=this.props,l=!0===t?"100vh":"inherit";return n.createElement(a.Z,{xs:this.renderSection(o,e,l,"2rem 0rem"),sm:this.renderSection(o,e,l,"3rem 0rem"),md:this.renderSection(o,e,l,"4rem 2.5rem")})}renderSection(e,t,r,a){return n.createElement(i.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:a}},e)))}}const s=(0,o.Z)(l)},25091:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(45697),o=r.n(a),i=r(24561);class l extends n.Component{render(){var{data:e,type:t,grow:r}=this.props;switch(t){case"title":case"=":case"+":e=[[["="]]];break;case"text-1-line":e=[[["=="]]];break;case"square":e=[[["-","100","100"]]];break;case"rect4:3":e=[[["-","100","75"]]]}e=this.renderPlaceholders(e);const a=r?{}:{width:e.width,height:e.height};return n.createElement(i.ZP,{style:a,height:e.height,width:e.width,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#bcbcbc"},e.phs.map((e=>e)))}renderPlaceholders(e){for(var t,r,a=0,o=[],i=0,l=0,s=0;s<e.length;s++){for(var c=e[s],d=0,m=0,p=0,h=0;h<c.length;h++){switch((t=c[h])[1]=parseInt(t[1]),t[2]=parseInt(t[2]),t[0]){case"o":r=n.createElement("rect",{key:l++,x:d,y:i,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(s+1<e.length&&s>0?4:0),m=t[2];break;case"=":case"==":r=n.createElement("rect",{key:l++,x:d,y:i,rx:"0",ry:"0",width:100*t[0].length,height:20}),d+=100*t[0].length+(s+1<e.length&&s>0?4:0),m=20;break;default:r=n.createElement("rect",{key:l++,x:d,y:i,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(s+1<e.length&&s>0?4:0),m=t[2]}a=d>a?d:a,p=m>p?m:p,o.push(r)}i+=p+(h+1<c.length&&h>0?4:0)}return{height:i,width:a,phs:o}}}l.propTypes={data:o().array,type:o().string,grow:o().bool},l.defaultProps={type:"custom",grow:!0};const s=l},90103:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(67294),a=r(45697),o=r.n(a),i=r(53703),l=r(92863),s=r(41120),c=r(79088);const d={successText:{color:c.nq[0]},upArrowCardCategory:{width:"16px",height:"16px"},stats:{color:c.X_[0],display:"inline-flex",fontSize:"12px",lineHeight:"22px","& svg":{top:"4px",width:"16px",height:"16px",position:"relative",marginRight:"3px",marginLeft:"3px"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{top:"4px",fontSize:"16px",position:"relative",marginRight:"3px",marginLeft:"3px"}},cardHeader:{paddingBottom:"0.75rem"},cardCategory:{color:c.X_[0],margin:"0",fontSize:"14px",marginTop:"0",paddingTop:"10px",marginBottom:"0"},cardCategoryWhite:{color:"rgba("+(0,c.oo)(c.zQ)+",.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},cardTitle:{color:c.X_[2],marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:c.X_[1],fontWeight:"400",lineHeight:"1"}},cardTitleWhite:{color:c.zQ,marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:c.X_[1],fontWeight:"400",lineHeight:"1"}}},m=(0,s.Z)(d);function p(e){const{icon:t,title:r,subtitle:a,footer:o,color:s}=e,c=m();return n.createElement(i.Zb,{className:c.cardHeader},n.createElement(i.Ol,{color:s,stats:!0,icon:!0},n.createElement(i._K,{color:s},n.createElement(l.Z,null,t)),n.createElement("p",{className:c.cardCategory},r),n.createElement("h3",{className:c.cardTitle},a)),o&&n.createElement(i.iR,{stats:!0},n.createElement("div",{className:c.stats},o)))}p.propTypes={title:o().string,subtitle:o().oneOfType([o().string,o().object]),icon:o().string,footer:o().object,color:o().string},p.defaultProps={title:"Title",icon:"content_copy",footer:null,color:"primary"};var h=r(19119),u=r(34902);class g extends n.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,r){switch(r){case"ago":return(0,h.Z)(t,new Date);case"DD/MM/YYYY":return(0,u.Z)(t,"dd/MM/yy");default:return(0,u.Z)(t,r)}}render(){var{lang:e,value:t,className:r}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",o=this.getDate(t),i=this._format(e,o,a);return n.createElement("span",{className:r},i)}}const f=g;var y=r(92077),b=r.n(y);function x({value:e,format:t}){const r=""===(e=e||0)?"":b()(Number(e)).format(t);return n.createElement("span",null,r.toUpperCase())}const E=x;x.propTypes={value:o().oneOfType([o().string,o().number]),format:o().oneOf(["0a","0,0"])},x.defaultProps={format:"0a"};class v extends n.Component{render(){var{title:e,data:t,smaller:r,type:a,icon:o}=this.props;return n.createElement(p,{icon:o,title:e,subtitle:this.renderType(a,t)})}renderType(e,t){switch(e){case"number":return n.createElement(E,{value:t,format:"0,0"});case"string":return t;case"date":return n.createElement(f,{value:t})}}}const w=v;v.propTypes={title:o().string,type:o().oneOf(["number","string","date"]),smaller:o().bool},v.defaultProps={title:"title",data:null,type:"number",smaller:!1}},59221:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),a=r(80383),o=r(81648),i=r(25091),l=r(90103);r(31504);class s extends n.Component{render(){const{data:e,loading:t}=this.props;return!e||t?this.renderPlaceholder():this.renderContent(e)}renderContent(e){return this.renderTemplate(e)}renderPlaceholder(){var e=n.createElement(i.Z,{data:[[["-","100","100"]]]});return this.renderTemplate(e,e)}renderTemplate({people:e,actors:t,directors:r}){const i=(e,t,r)=>n.createElement(o.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},n.createElement(l.default,{title:e,data:t?t.toString():t,icon:r}));return n.createElement("div",{style:{width:"100%"}},n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(o.Z,{xs:12,sm:12,md:12},n.createElement(a.Z,{justifyContent:"center",fill:!0},i("people",e,"people"),i("actors",t,"person_outline"),i("directors",r,"person")))))}}const c=s},2075:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(67294),a=r(91534),o=r(80383),i=r(81648),l=r(59221);const s=function(e){const{data:t,loading:r}=e;return n.createElement(o.Z,{className:"page-module",fill:!0},n.createElement(i.Z,{fill:!0},n.createElement(a.Z,{className:"section-0"},n.createElement(l.default,{data:t?t.dashboard:null,loading:r}))))}},24561:(e,t,r)=>{r.d(t,{ZP:()=>s});var n=r(67294),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},o=function(e){var t=e.animate,r=e.backgroundColor,o=e.backgroundOpacity,i=e.baseUrl,l=e.children,s=e.foregroundColor,c=e.foregroundOpacity,d=e.gradientRatio,m=e.uniqueKey,p=e.interval,h=e.rtl,u=e.speed,g=e.style,f=e.title,y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),b=m||Math.random().toString(36).substring(6),x=b+"-diff",E=b+"-animated-diff",v=b+"-aria",w=h?{transform:"scaleX(-1)"}:null,C="0; "+p+"; 1",O=u+"s";return(0,n.createElement)("svg",a({"aria-labelledby":v,role:"img",style:a(a({},g),w)},y),f?(0,n.createElement)("title",{id:v},f):null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+i+"#"+x+")",style:{fill:"url("+i+"#"+E+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:x},l),(0,n.createElement)("linearGradient",{id:E},(0,n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:o},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:C,dur:O,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:c},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:C,dur:O,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:o},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:C,dur:O,repeatCount:"indefinite"})))))};o.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var i=function(e){return e.children?(0,n.createElement)(o,a({},e)):(0,n.createElement)(l,a({},e))},l=function(e){return(0,n.createElement)(i,a({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const s=i}}]);