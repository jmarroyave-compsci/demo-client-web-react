/*! For license information please see 7724.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7724],{79895:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(45987),n=r(87462),o=r(67294),i=(r(45697),r(86010)),l=r(14670),c=o.forwardRef((function(e,t){var r=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,d=e.square,m=void 0!==d&&d,p=e.elevation,u=void 0===p?1:p,h=e.variant,y=void 0===h?"elevation":h,f=(0,a.Z)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(s,(0,n.Z)({className:(0,i.Z)(r.root,l,"outlined"===y?r.outlined:r["elevation".concat(u)],!m&&r.rounded),ref:t},f))}));const s=(0,l.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,n.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(c)},22318:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(45987),o=r(67294),i=(r(45697),r(86010)),l=r(14670),c=r(93871),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=o.forwardRef((function(e,t){var r=e.align,l=void 0===r?"inherit":r,d=e.classes,m=e.className,p=e.color,u=void 0===p?"initial":p,h=e.component,y=e.display,f=void 0===y?"initial":y,g=e.gutterBottom,v=void 0!==g&&g,b=e.noWrap,Z=void 0!==b&&b,E=e.paragraph,x=void 0!==E&&E,w=e.variant,$=void 0===w?"body1":w,S=e.variantMapping,k=void 0===S?s:S,R=(0,n.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),P=h||(x?"p":k[$]||s[$])||"span";return o.createElement(P,(0,a.Z)({className:(0,i.Z)(d.root,m,"inherit"!==$&&d[$],"initial"!==u&&d["color".concat((0,c.Z)(u))],Z&&d.noWrap,v&&d.gutterBottom,x&&d.paragraph,"inherit"!==l&&d["align".concat((0,c.Z)(l))],"initial"!==f&&d["display".concat((0,c.Z)(f))]),ref:t},R))}));const m=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},20735:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(63366),n=r(87462),o=r(67294),i=(r(45697),r(94863));const l=["sx"];var c=r(46663),s=r(11930),d=r(86521),m=r(91380),p=r(5609),u=r(85893);const h=["component","direction","spacing","divider","children"];function y(e,t){const r=o.Children.toArray(e).filter(Boolean);return r.reduce(((e,a,n)=>(e.push(a),n<r.length-1&&e.push(o.cloneElement(t,{key:`separator-${n}`})),e)),[])}const f=(0,m.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let r=(0,n.Z)({display:"flex"},(0,c.k9)({theme:t},e.direction,(e=>({flexDirection:e}))));if(e.spacing){const a=(0,s.hB)(t),n=Object.keys(t.breakpoints.values).reduce(((t,r)=>(null==e.spacing[r]&&null==e.direction[r]||(t[r]=!0),t)),{}),o=(0,c.P$)({values:e.direction,base:n}),i=(0,c.P$)({values:e.spacing,base:n}),l=(t,r)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${n=r?o[r]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]}`]:(0,s.NA)(a,t)}};var n};r=(0,d.Z)(r,(0,c.k9)({theme:t},i,l))}return r})),g=o.forwardRef((function(e,t){const r=function(e){const{sx:t}=e,r=(0,a.Z)(e,l),{systemProps:o,otherProps:c}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((r=>{i.G[r]?t.systemProps[r]=e[r]:t.otherProps[r]=e[r]})),t})(r);return(0,n.Z)({},c,{sx:(0,n.Z)({},o,t)})}((0,p.Z)({props:e,name:"MuiStack"})),{component:o="div",direction:c="column",spacing:s=0,divider:d,children:m}=r,g=(0,a.Z)(r,h),v={direction:c,spacing:s};return(0,u.jsx)(f,(0,n.Z)({as:o,ownerState:v,ref:t},g,{children:d?y(m,d):m}))})),v=g},91534:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(83347),o=r(86688),i=r(72797);class l extends a.Component{render(){var{className:e,cover:t,padding:r,children:o,hero:i,rounded:l}=this.props,c=!0===t?"100vh":"inherit";return l=!0===l,a.createElement(n.Z,{xs:this.renderSection(o,e,c,"1.5rem 1.5rem 3rem 1.5rem",l),sm:this.renderSection(o,e,c,"2rem 3rem 4rem 3rem",l),md:this.renderSection(o,e,c,"3rem 2.5rem 3.5rem 2.5rem",l)})}renderSection(e,t,r,n,o){return a.createElement(i.Z,{from:"/core/ui/section"},a.createElement("div",{className:"com-layout-section"},a.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:n,borderRadius:o?"0.5rem 0.5rem 0 0":0}},e)))}}const c=(0,o.Z)(l)},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(83037).default},61598:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a=r(67294),n=r(91380),o=r(80383),i=r(81648),l=r(87125),c=r(93775),s=r(20735),d=r(36501),m=r(97236);const p=(0,n.ZP)("div")({padding:"0.85rem"}),u=(0,n.ZP)("div")({fontSize:"1.5rem"}),h=(0,n.ZP)("div")({fontSize:"0.9rem"});class y extends a.Component{render(){const{data:e,loading:t}=this.props,{total:r,awards:n,classification:y,country:f,genre:g,type:v,rating:b,yearReleased:Z,streamBy:E}=e||{},x=(e,r,n)=>a.createElement(i.Z,{xs:12,sm:6,md:6,lg:4,style:{paddingRight:"1rem"}},a.createElement(l.default,{loading:t,title:e,data:r?r.toString():r,icon:n})),w=(e,r,n)=>a.createElement(i.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},a.createElement(c.default,{loading:t,title:e,data:r||{},ranges:n}));return a.createElement(o.Z,{justifyContent:"center",fill:!0},a.createElement(i.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},a.createElement(s.Z,{spacing:2},a.createElement("h1",null,"general"),a.createElement(o.Z,{justifyContent:"center",fill:!0},x("movies",r,"local_movies")),a.createElement("h1",null,"segments"),a.createElement(o.Z,{justifyContent:"center",fill:!0},w("by type",v,[25e3,5e4]),w("by genre",g,[1e3,25e3,5e4,75e3,1e4,25e4]),w("from",f,[1,5,10,50,100]),w("released",Z,[1e4,25e3,5e4,1e5])),a.createElement("h1",null,"awards"),a.createElement(o.Z,{justifyContent:"center",fill:!0},w("nominees",n,[])),a.createElement("h1",null,"ratings"),a.createElement(o.Z,{justifyContent:"center",fill:!0},x("imdb",b?b.imdb:null,"local_movies")),a.createElement("h1",null,"stream"),a.createElement(o.Z,{justifyContent:"center",fill:!0},x("netflix",E?E.netflix:null,"local_movies")))),a.createElement(i.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},a.createElement(s.Z,{spacing:2},a.createElement(d.Z,null,a.createElement(p,null,a.createElement(u,null,"Stories"),a.createElement(h,null,a.createElement(m.Z,{href:"/movies/stories/awards"},"Movie awards")))))))}}const f=y},41421:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(21985).default},87701:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(67294),n=r(91534),o=r(80383),i=r(81648),l=r(61598);const c=function(e){return a.createElement(o.Z,{className:"page-module",fill:!0},a.createElement(i.Z,{fill:!0},a.createElement(n.Z,{className:"section-0"},a.createElement(l.default,e))))}},21985:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(67294),n=r(83347),o=r(87701);function i(e){return a.createElement(n.Z,{xs:a.createElement(o.default,e)})}},72692:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>c,default:()=>s});var a=r(67294),n=r(18319),o=r(41421),i=r(54397),l=r(70846);const c=i.Ps`
  query getDashboard 
{
  dashboardMovies {
    awards
    classification
    country
    genre
    rating
    streamBy
    total
    type
    yearReleased
  }
}
`;function s(e){var{loading:t,error:r,data:i}=(0,l.a)(c);const s={loading:t,error:r,data:i=i?i.dashboardMovies:{},breadcrumbs:[{name:"movies"}]};return a.createElement(n.default,s,a.createElement(o.default,s))}},69921:(e,t)=>{var r=60103,a=60106,n=60107,o=60108,i=60114,l=60109,c=60110,s=60112,d=60113,m=60120,p=60115,u=60116,h=60121,y=60122,f=60117,g=60129,v=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;r=b("react.element"),a=b("react.portal"),n=b("react.fragment"),o=b("react.strict_mode"),i=b("react.profiler"),l=b("react.provider"),c=b("react.context"),s=b("react.forward_ref"),d=b("react.suspense"),m=b("react.suspense_list"),p=b("react.memo"),u=b("react.lazy"),h=b("react.block"),y=b("react.server.block"),f=b("react.fundamental"),g=b("react.debug_trace_mode"),v=b("react.legacy_hidden")}t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===i||e===g||e===o||e===d||e===m||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===u||e.$$typeof===p||e.$$typeof===l||e.$$typeof===c||e.$$typeof===s||e.$$typeof===f||e.$$typeof===h||e[0]===y)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case i:case o:case d:case m:return e;default:switch(e=e&&e.$$typeof){case c:case s:case u:case p:case l:return e;default:return t}}case a:return t}}}},59864:(e,t,r)=>{e.exports=r(69921)}}]);