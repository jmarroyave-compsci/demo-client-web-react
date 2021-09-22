"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[6983,5148,4527,7895],{86688:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(67294),r=n(72797);s.Component;const l=e=>class extends s.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,s.createElement(r.Z,{from:t,style:{width:"100%"}},s.createElement(e,this.props))}}},80383:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(67294),r=n(86688),l=n(41749);class a extends s.Component{render(){var{direction:e,spacing:t,className:n,justify:r,alignItems:a,style:i,flex:c}=this.props,t=t||0;return i=i||{},c&&(i.display="flex"),s.createElement(l.Z,{container:!0,direction:e,justifyContent:r,alignItems:a,className:n,spacing:t,style:i},this.props.children)}}const i=(0,r.Z)(a)},81648:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(67294),r=n(86688),l=n(41749);class a extends s.Component{render(){var{visible:e,className:t,xs:n,sm:r,md:a,style:i,fill:c,flex:o,center:d}=this.props;e=e||!0;var m={...i};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,c&&(m.width="100%"),o&&(m.flex=1),e&&s.createElement(l.Z,{className:t,item:!0,xs:n,sm:r,md:a,style:m},this.props.children)}}const i=(0,r.Z)(a)},83347:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(67294),r=n(12613),l=n(86688);class a extends s.Component{render(){var{xs:e,sm:t,md:n,lg:l,xl:a}=this.props;return e=e||null,t=t||e,n=n||t,l=l||n,a=a||l,s.createElement("div",{style:{width:"100%"}},s.createElement(r.Z,{only:["sm","md","lg","xl"]},e),s.createElement(r.Z,{only:["xs","md","lg","xl"]},t),s.createElement(r.Z,{only:["xs","sm","lg","xl"]},n),s.createElement(r.Z,{only:["xs","sm","md","xl"]},l),s.createElement(r.Z,{only:["xs","sm","md","lg"]},a))}}const i=(0,l.Z)(a)},91534:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(67294),r=n(83347),l=n(86688),a=n(72797);class i extends s.Component{render(){const{className:e,cover:t,padding:n,children:l,hero:a}=this.props,i=!0===t?"100vh":"inherit";return s.createElement(r.Z,{xs:this.renderSection(l,e,i,"2rem 0rem"),sm:this.renderSection(l,e,i,"3rem 0rem"),md:this.renderSection(l,e,i,"4rem 2.5rem")})}renderSection(e,t,n,r){return s.createElement(a.Z,{from:"/core/ui/section"},s.createElement("div",{className:"com-layout-section"},s.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:r}},e)))}}const c=(0,l.Z)(i)},79242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n(52257).default},99140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var s=n(67294),r=n(91534),l=n(80383),a=n(81648),i=n(67495);const c=function(e){const{data:t,loading:n}=e;return s.createElement(l.Z,{className:"page-module",fill:!0},s.createElement(a.Z,{fill:!0},s.createElement(r.Z,{className:"section-0"},s.createElement(i.default,{data:t?t.dashboard:null,loading:n}))))}},52257:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var s=n(67294),r=n(83347),l=n(99140);function a(e){return s.createElement(r.Z,{xs:s.createElement(l.default,e)})}}}]);