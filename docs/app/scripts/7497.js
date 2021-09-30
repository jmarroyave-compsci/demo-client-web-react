"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7497],{40351:(e,t,n)=>{n.d(t,{Z:()=>r});const r={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},86688:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(72797);r.Component;const l=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},19976:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=(n(45697),n(19119)),l=n(34902);class s extends r.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,n){switch(n){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yy");default:return(0,l.Z)(t,n)}}render(){var{lang:e,value:t,className:n}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",l=this.getDate(t),s=this._format(e,l,a);return r.createElement("span",{className:n},s)}}const i=s},93013:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}class l extends r.Component{render(){var{src:e,width:t,height:n,style:l,notFound:s}=this.props,i={};return s&&(i.ref=e=>this.img=e,i.onError=()=>s&&this.img.src!=s?this.img.src=s:null),r.createElement("img",a({},i,{style:l,width:t,height:n,src:e}))}}const s=l},80383:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86688),l=n(41749);class s extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:s,style:i,flex:o}=this.props,t=t||0;return i=i||{},o&&(i.display="flex"),r.createElement(l.Z,{container:!0,direction:e,justifyContent:a,alignItems:s,className:n,spacing:t,style:i},this.props.children)}}const i=(0,a.Z)(s)},81648:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86688),l=n(41749);class s extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:s,style:i,fill:o,flex:m,center:c}=this.props;e=e||!0;var d={...i};return(d=d||{textAlign:"inherit"}).textAlign=c?"center":d.textAlign,o&&(d.width="100%"),m&&(d.flex=1),e&&r.createElement(l.Z,{className:t,item:!0,xs:n,sm:a,md:s,style:d},this.props.children)}}const i=(0,a.Z)(s)},83347:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(12613),l=n(86688);class s extends r.Component{render(){var{xs:e,sm:t,md:n,lg:l,xl:s}=this.props;return e=e||null,t=t||e,n=n||t,l=l||n,s=s||l,r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{only:["sm","md","lg","xl"]},e),r.createElement(a.Z,{only:["xs","md","lg","xl"]},t),r.createElement(a.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(a.Z,{only:["xs","sm","md","xl"]},l),r.createElement(a.Z,{only:["xs","sm","md","lg"]},s))}}const i=(0,l.Z)(s)},91534:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(83347),l=n(86688),s=n(72797);class i extends r.Component{render(){var{className:e,cover:t,padding:n,children:l,hero:s,rounded:i}=this.props,o=!0===t?"100vh":"inherit";return i=!0===i,r.createElement(a.Z,{xs:this.renderSection(l,e,o,"1.5rem 1.5rem 3rem 1.5rem",i),sm:this.renderSection(l,e,o,"2rem 3rem 4rem 3rem",i),md:this.renderSection(l,e,o,"3rem 2.5rem 3.5rem 2.5rem",i)})}renderSection(e,t,n,a,l){return r.createElement(s.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:a,borderRadius:l?"0.5rem 0.5rem 0 0":0}},e)))}}const o=(0,l.Z)(i)},43178:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(91288),l=n(71267);function s({text:e,onClick:t}){return r.createElement(i,null,r.createElement(l.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}s.defaultProps={onClick:null,text:""};const i=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},70227:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){const{label:t,value:n}=e;return r.createElement("div",null,t&&r.createElement("span",{style:{fontWeight:"bold"}},t,":"),r.createElement("span",null,n))}},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(80383),l=n(81648),s=n(70227);const i=function(e){const{data:t,loading:n,route:i}=e;return t?r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement("h4",null,"Awards"),t&&t.length>0&&t.map((e=>r.createElement(l.Z,{xs:12,sm:12,md:12},e.year&&r.createElement(s.Z,{label:"Year",value:e.year}),e.name&&r.createElement(s.Z,{label:"Name",value:e.name}),e.category&&r.createElement(s.Z,{label:"Category",value:e.category}),e.won&&r.createElement(s.Z,{label:"Won",value:e.won}))))):null}},91293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(80383),l=n(81648),s=n(93013),i=n(92863);function o({data:e}){return e&&e.image?r.createElement(s.Z,{src:e.image,width:"150",height:"150"}):r.createElement(m,null)}function m(){return r.createElement("div",{style:{width:"8rem",height:"8rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#efefef"}},r.createElement(i.Z,null,"broken_image"))}const c=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{fill:!0,style:{width:"100%",backgroundColor:"#333"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(o,{data:t})))}},71065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(80383),l=n(81648),s=n(43178);const i=function(e){const{data:t,loading:n,route:i}=e;return r.createElement(a.Z,null,r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"More information")),r.createElement(l.Z,{xs:12,sm:12,md:12},t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(s.Z,{text:"IMDB"}))))}},93374:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(80383),l=n(81648),s=n(77053);const i=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(s.default,{data:t})))}},77053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),a=n(80383),l=n(81648),s=n(71065),i=n(80607),o=n(19976),m=n(43178),c=n(91293);const d=function(e){var{data:t,loading:n}=e;return t=t||{},r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,t.name),t&&t.profession&&t.profession.length>0&&r.createElement("span",null,t.profession.map((e=>r.createElement(m.Z,{text:e}))))),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(c.default,{data:t})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(s.default,{data:t?t.references:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"General information"),t&&t.birthDate&&r.createElement("span",null,"Birth date: ",r.createElement(o.Z,{value:t.birthDate}))),r.createElement(l.Z,{xs:12,sm:12,md:12},t&&t.directed&&t.directed.length>0&&r.createElement("span",null,"Directed: ",t.directed.map((e=>`${e} `)))),r.createElement(l.Z,{xs:12,sm:12,md:12},t&&t.acted&&t.acted.length>0&&r.createElement("span",null,"Acted: ",t.acted.map((e=>`${e} `)))),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(i.default,{data:t?t.awards:null})))}},34990:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(91534),l=n(80383),s=n(81648),i=n(93374);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const m=function(e){const{data:t}=e;return r.createElement(l.Z,{className:"page-module",fill:!0},r.createElement(s.Z,{fill:!0},r.createElement(a.Z,{className:"section-0"},r.createElement(i.default,o({data:t?t.dashboard:null},e)))))}}}]);