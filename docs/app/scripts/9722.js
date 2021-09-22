"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[9722],{17812:(e,a,t)=>{t.d(a,{Z:()=>u});var r=t(87462),o=t(45987),n=t(67294),l=(t(45697),t(86010)),i=t(14670),d=t(59693),c=t(54720),s=t(93871),m=n.forwardRef((function(e,a){var t=e.edge,i=void 0!==t&&t,d=e.children,m=e.classes,u=e.className,p=e.color,h=void 0===p?"default":p,v=e.disabled,g=void 0!==v&&v,f=e.disableFocusRipple,b=void 0!==f&&f,Z=e.size,y=void 0===Z?"medium":Z,E=(0,o.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.createElement(c.Z,(0,r.Z)({className:(0,l.Z)(m.root,u,"default"!==h&&m["color".concat((0,s.Z)(h))],g&&m.disabled,"small"===y&&m["size".concat((0,s.Z)(y))],{start:m.edgeStart,end:m.edgeEnd}[i]),centerRipple:!0,focusRipple:!b,disabled:g,ref:a},E),n.createElement("span",{className:m.label},d))}));const u=(0,i.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,d.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(m)},48884:(e,a,t)=>{var r=t(95318),o=t(20862);a.Z=void 0;var n=o(t(67294)),l=(0,r(t(2108)).default)(n.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");a.Z=l},88995:(e,a,t)=>{var r=t(95318),o=t(20862);a.Z=void 0;var n=o(t(67294)),l=(0,r(t(2108)).default)(n.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");a.Z=l},91534:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(67294),o=t(83347),n=t(86688),l=t(72797);class i extends r.Component{render(){const{className:e,cover:a,padding:t,children:n,hero:l}=this.props,i=!0===a?"100vh":"inherit";return r.createElement(o.Z,{xs:this.renderSection(n,e,i,"2rem 0rem"),sm:this.renderSection(n,e,i,"3rem 0rem"),md:this.renderSection(n,e,i,"4rem 2.5rem")})}renderSection(e,a,t,o){return r.createElement(l.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${a}`,style:{boxSizing:"border-box",width:"100%",height:t,padding:o}},e)))}}const d=(0,n.Z)(i)},18319:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});const r=t(20483).default},95674:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});const r=t(78330).default},83069:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var r=t(67294),o=t(91534),n=t(80383),l=t(81648),i=t(95702);const d=function(e){const{data:a,loading:t}=e;return r.createElement(n.Z,{className:"page-module",fill:!0},r.createElement(l.Z,{fill:!0},r.createElement(o.Z,{className:"section-0"},r.createElement(i.default,{data:a?a.dashboard:null,loading:t}))))}},78330:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var r=t(67294),o=t(83347),n=t(83069);function l(e){return r.createElement(o.Z,{xs:r.createElement(n.default,e)})}},58050:(e,a,t)=>{t.r(a),t.d(a,{QRY_DASHBOARD:()=>d,default:()=>c});var r=t(67294),o=t(18319),n=t(95674),l=t(54397),i=t(70846);const d=l.Ps`
  query getDashboard{ 
    dashboard {
      lastUpdate
      movies
      people
    }
  }`;function c(e){const{loading:a,error:t,data:l}=(0,i.a)(d),c={loading:a,error:t,data:l};return r.createElement(o.default,null,r.createElement(n.default,c))}}}]);