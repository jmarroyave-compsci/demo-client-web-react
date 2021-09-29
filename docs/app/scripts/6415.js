"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[6415,7311,2237],{86688:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),s=r(72797);n.Component;const l=e=>class extends n.Component{render(){const t="title"in this.props?this.props.title:null,r="placeholder"in this.props?this.props.placeholder:{};return r.width&&r.width,r.height&&r.height,n.createElement(s.Z,{from:t,style:{width:"100%"}},n.createElement(e,this.props))}}},80383:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),s=r(86688),l=r(41749);class a extends n.Component{render(){var{direction:e,spacing:t,className:r,justify:s,alignItems:a,style:i,flex:m}=this.props,t=t||0;return i=i||{},m&&(i.display="flex"),n.createElement(l.Z,{container:!0,direction:e,justifyContent:s,alignItems:a,className:r,spacing:t,style:i},this.props.children)}}const i=(0,s.Z)(a)},81648:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),s=r(86688),l=r(41749);class a extends n.Component{render(){var{visible:e,className:t,xs:r,sm:s,md:a,style:i,fill:m,flex:c,center:d}=this.props;e=e||!0;var o={...i};return(o=o||{textAlign:"inherit"}).textAlign=d?"center":o.textAlign,m&&(o.width="100%"),c&&(o.flex=1),e&&n.createElement(l.Z,{className:t,item:!0,xs:r,sm:s,md:a,style:o},this.props.children)}}const i=(0,s.Z)(a)},83347:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),s=r(12613),l=r(86688);class a extends n.Component{render(){var{xs:e,sm:t,md:r,lg:l,xl:a}=this.props;return e=e||null,t=t||e,r=r||t,l=l||r,a=a||l,n.createElement("div",{style:{width:"100%"}},n.createElement(s.Z,{only:["sm","md","lg","xl"]},e),n.createElement(s.Z,{only:["xs","md","lg","xl"]},t),n.createElement(s.Z,{only:["xs","sm","lg","xl"]},r),n.createElement(s.Z,{only:["xs","sm","md","xl"]},l),n.createElement(s.Z,{only:["xs","sm","md","lg"]},a))}}const i=(0,l.Z)(a)},91534:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(67294),s=r(83347),l=r(86688),a=r(72797);class i extends n.Component{render(){var{className:e,cover:t,padding:r,children:l,hero:a,rounded:i}=this.props,m=!0===t?"100vh":"inherit";return i=!0===i,n.createElement(s.Z,{xs:this.renderSection(l,e,m,"1.5rem 0.25rem 2rem 0.25rem",i),sm:this.renderSection(l,e,m,"2rem 1rem 2.5rem 1rem",i),md:this.renderSection(l,e,m,"3rem 2.5rem 3.5rem 2.5rem",i)})}renderSection(e,t,r,s,l){return n.createElement(a.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:s,borderRadius:l?"0.5rem 0.5rem 0 0":0}},e)))}}const m=(0,l.Z)(i)},61598:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),s=r(80383),l=r(81648),a=r(87125),i=r(93775);class m extends n.Component{render(){const{data:e,loading:t}=this.props,{total:r,awards:m,classification:c,country:d,genre:o,type:p,rating:h,yearReleased:u,streamBy:g}=e||{},x=(e,r,s)=>n.createElement(l.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},n.createElement(i.default,{loading:t,title:e,data:r||{},ranges:s}));return n.createElement("div",{style:{width:"100%"}},n.createElement(s.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.Z,{justifyContent:"center",fill:!0},((e,r,s)=>n.createElement(l.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},n.createElement(a.default,{loading:t,title:"movies",data:r?r.toString():r,icon:"local_movies"})))(0,r))),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.Z,{justifyContent:"center",fill:!0},x("awards",m,[1,5,10,20,30,70,100,250]),x("classification",c,[]),x("countries",d,[1,5,10,20,30,70,100,250]),x("genres",o,[100,250]),x("stream by",g,[]),x("types",p,[]),x("rated by",h,[]),x("years released",u,[10,25,50])))))}}const c=m},41421:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r(21985).default},87701:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(67294),s=r(91534),l=r(80383),a=r(81648),i=r(61598);const m=function(e){return n.createElement(l.Z,{className:"page-module",fill:!0},n.createElement(a.Z,{fill:!0},n.createElement(s.Z,{className:"section-0"},n.createElement(i.default,e))))}},21985:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(67294),s=r(83347),l=r(87701);function a(e){return n.createElement(s.Z,{xs:n.createElement(l.default,e)})}}}]);