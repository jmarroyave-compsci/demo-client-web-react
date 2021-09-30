"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[9223,3654,8445,9601],{86688:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),l=n(72797);r.Component;const a=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(l.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},80383:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),l=n(86688),a=n(41749);class s extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:l,alignItems:s,style:i,flex:c}=this.props,t=t||0;return i=i||{},c&&(i.display="flex"),r.createElement(a.Z,{container:!0,direction:e,justifyContent:l,alignItems:s,className:n,spacing:t,style:i},this.props.children)}}const i=(0,l.Z)(s)},81648:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),l=n(86688),a=n(41749);class s extends r.Component{render(){var{visible:e,className:t,xs:n,sm:l,md:s,style:i,fill:c,flex:o,center:d}=this.props;e=e||!0;var m={...i};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,c&&(m.width="100%"),o&&(m.flex=1),e&&r.createElement(a.Z,{className:t,item:!0,xs:n,sm:l,md:s,style:m},this.props.children)}}const i=(0,l.Z)(s)},83347:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),l=n(12613),a=n(86688);class s extends r.Component{render(){var{xs:e,sm:t,md:n,lg:a,xl:s}=this.props;return e=e||null,t=t||e,n=n||t,a=a||n,s=s||a,r.createElement("div",{style:{width:"100%"}},r.createElement(l.Z,{only:["sm","md","lg","xl"]},e),r.createElement(l.Z,{only:["xs","md","lg","xl"]},t),r.createElement(l.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(l.Z,{only:["xs","sm","md","xl"]},a),r.createElement(l.Z,{only:["xs","sm","md","lg"]},s))}}const i=(0,a.Z)(s)},91534:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),l=n(83347),a=n(86688),s=n(72797);class i extends r.Component{render(){var{className:e,cover:t,padding:n,children:a,hero:s,rounded:i}=this.props,c=!0===t?"100vh":"inherit";return i=!0===i,r.createElement(l.Z,{xs:this.renderSection(a,e,c,"1.5rem 1.5rem 3rem 1.5rem",i),sm:this.renderSection(a,e,c,"2rem 3rem 4rem 3rem",i),md:this.renderSection(a,e,c,"3rem 2.5rem 3.5rem 2.5rem",i)})}renderSection(e,t,n,l,a){return r.createElement(s.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:l,borderRadius:a?"0.5rem 0.5rem 0 0":0}},e)))}}const c=(0,a.Z)(i)},87558:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),l=n(73727),a=n(36776);class s extends r.Component{render(){var{children:e,className:t,to:n,href:s,style:i,external:c}=this.props;if(e=(n=(n=n||s)||"http://localhost")?e:"NO LINK DEFINED",i=i||{},n&&"string"!=typeof n)return"INVALID URL";const o=!((c=!0===c)||n&&0===n.indexOf("http")),d=o?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==o&&0==a.Z.links_disabled?r.createElement(l.OL,{className:t,to:n,style:i},e):r.createElement("a",{className:t,href:n,style:i,target:d},e)}}const i=s},43178:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),l=n(91288),a=n(71267);function s({text:e,onClick:t}){return r.createElement(i,null,r.createElement(a.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}s.defaultProps={onClick:null,text:""};const i=l.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},76249:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(67294),l=n(87558);const a=function(e){const{id:t,entity:n,children:a}=e;return r.createElement(l.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(n)}`},a)}},20766:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(67294),l=n(87558);const a=function(e){const{id:t,entity:n,children:a}=e;return r.createElement(l.Z,{border:!1,to:`/person/${t}/${encodeURIComponent(n)}`},a)}},74931:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(67294),l=n(87558);const a=function(e){const{id:t,entity:n,children:a}=e;return r.createElement(l.Z,{border:!1,to:`/podcast/${t}/${encodeURIComponent(n)}`},a)}},9223:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n(13654).default},8445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),l=(n(91534),n(80383)),a=n(81648),s=n(79601);const i=function(e){return r.createElement(l.Z,{className:"page-module",fill:!0,style:{padding:"0 2rem"}},r.createElement(a.Z,{fill:!0},r.createElement(s.default,e)))}},13654:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),l=n(83347),a=n(8445);function s(e){return r.createElement(l.Z,{xs:r.createElement(a.default,e)})}},79601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(67294),l=n(91380),a=n(5977),s=n(20735),i=n(32116),c=n(20766),o=n(76249),d=n(74931),m=(n(43178),n(72642));const u=(0,l.ZP)("div")({marginBottom:"4rem"}),p=(0,l.ZP)("div")({paddingBottom:"3rem"}),h=(0,l.ZP)("span")({fontWeight:"bold"}),E=(0,l.ZP)("div")({}),f=(0,l.ZP)("div")({}),y=(0,l.ZP)("h3")({marginTop:0}),Z=(0,l.ZP)("div")({fontSize:"0.65rem",lineHeight:"1rem",textTransform:"uppercase"});function g(e){const{r:t}=e;switch(t.type){case"movie":return r.createElement(f,null,r.createElement(Z,null,"Movie"),r.createElement(y,null,r.createElement(o.default,{id:t.entityId,entity:t.entity},t.entity)));case"people":case"person":return r.createElement(f,null,r.createElement(Z,null,"Person"),r.createElement(y,null,r.createElement(c.default,{id:t.entityId,entity:t.entity},t.entity)));case"podcast":return r.createElement(f,null,r.createElement(Z,null,"Podcast"),r.createElement(y,null,r.createElement(d.default,{id:t.entityId,entity:t.entity},t.entity)))}return`ERROR: type ${t.type}`}const v=function(e){const t=(0,a.k6)(),{data:n,loading:l,qry:c,route:o}=e,d=o.page?parseInt(o.page):1,f=e=>{t.push(`/search/${encodeURIComponent(c)}/${e}`),window.scrollTo(0,0)},Z=n&&n.length<10,v=1==d;return r.createElement(u,null,r.createElement(p,null,r.createElement("div",null,"search results for: ",r.createElement(h,null,c))),r.createElement(E,null,n&&n.length>0?r.createElement(s.Z,{divider:r.createElement(i.Z,{flexItem:!0}),spacing:2},n&&n.map(((e,t)=>r.createElement(g,{key:t,r:e}))),r.createElement(s.Z,{direction:"row",spacing:2,justifyContent:"center"},r.createElement(m.Z,{variant:"outlined",disabled:v,onClick:()=>f(d-1)},"Back"),r.createElement(m.Z,{variant:"outlined",disabled:Z,onClick:()=>f(d+1)},"Next"))):r.createElement(y,null,"No results")))}}}]);