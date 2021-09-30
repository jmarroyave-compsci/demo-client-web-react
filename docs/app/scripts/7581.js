"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7581,9997,4945],{40351:(e,t,n)=>{n.d(t,{Z:()=>r});const r={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},41749:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(45987),a=n(87462),i=n(67294),l=(n(45697),n(86010)),s=n(14670),o=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=i.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,o=e.alignItems,c=void 0===o?"stretch":o,d=e.classes,m=e.className,u=e.component,f=void 0===u?"div":u,g=e.container,p=void 0!==g&&g,x=e.direction,h=void 0===x?"row":x,v=e.item,E=void 0!==v&&v,w=e.justify,y=e.justifyContent,Z=void 0===y?"flex-start":y,b=e.lg,C=void 0!==b&&b,S=e.md,j=void 0!==S&&S,D=e.sm,k=void 0!==D&&D,I=e.spacing,W=void 0===I?0:I,M=e.wrap,N=void 0===M?"wrap":M,G=e.xl,z=void 0!==G&&G,O=e.xs,B=void 0!==O&&O,R=e.zeroMinWidth,A=void 0!==R&&R,Y=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=(0,l.Z)(d.root,m,p&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],E&&d.item,A&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==N&&d["wrap-xs-".concat(String(N))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(w||Z)&&d["justify-content-xs-".concat(String(w||Z))],!1!==B&&d["grid-xs-".concat(String(B))],!1!==k&&d["grid-sm-".concat(String(k))],!1!==j&&d["grid-md-".concat(String(j))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==z&&d["grid-xl-".concat(String(z))]);return i.createElement(f,(0,a.Z)({className:F,ref:t},Y))}));const u=(0,s.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return o.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m)},86688:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(72797);r.Component;const i=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},19976:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=(n(45697),n(19119)),i=n(34902);class l extends r.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,n){switch(n){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,i.Z)(t,"dd/MM/yy");default:return(0,i.Z)(t,n)}}render(){var{lang:e,value:t,className:n}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",i=this.getDate(t),l=this._format(e,i,a);return r.createElement("span",{className:n},l)}}const s=l},93013:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}class i extends r.Component{render(){var{src:e,width:t,height:n,style:i,notFound:l}=this.props,s={};return l&&(s.ref=e=>this.img=e,s.onError=()=>l&&this.img.src!=l?this.img.src=l:null),r.createElement("img",a({},s,{style:i,width:t,height:n,src:e}))}}const l=i},80383:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:l,style:s,flex:o}=this.props,t=t||0;return s=s||{},o&&(s.display="flex"),r.createElement(i.Z,{container:!0,direction:e,justifyContent:a,alignItems:l,className:n,spacing:t,style:s},this.props.children)}}const s=(0,a.Z)(l)},81648:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:l,style:s,fill:o,flex:c,center:d}=this.props;e=e||!0;var m={...s};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,o&&(m.width="100%"),c&&(m.flex=1),e&&r.createElement(i.Z,{className:t,item:!0,xs:n,sm:a,md:l,style:m},this.props.children)}}const s=(0,a.Z)(l)},43178:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(91288),i=n(71267);function l({text:e,onClick:t}){return r.createElement(s,null,r.createElement(i.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}l.defaultProps={onClick:null,text:""};const s=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},70227:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){const{label:t,value:n}=e;return r.createElement("div",null,t&&r.createElement("span",{style:{fontWeight:"bold"}},t,":"),r.createElement("span",null,n))}},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),i=n(81648),l=n(70227);const s=function(e){const{data:t,loading:n,route:s}=e;return t?r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement("h4",null,"Awards"),t&&t.length>0&&t.map((e=>r.createElement(i.Z,{xs:12,sm:12,md:12},e.year&&r.createElement(l.Z,{label:"Year",value:e.year}),e.name&&r.createElement(l.Z,{label:"Name",value:e.name}),e.category&&r.createElement(l.Z,{label:"Category",value:e.category}),e.won&&r.createElement(l.Z,{label:"Won",value:e.won}))))):null}},91293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),a=n(80383),i=n(81648),l=n(93013),s=n(92863);function o({data:e}){return e&&e.image?r.createElement(l.Z,{src:e.image,width:"150",height:"150"}):r.createElement(c,null)}function c(){return r.createElement("div",{style:{width:"8rem",height:"8rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#efefef"}},r.createElement(s.Z,null,"broken_image"))}const d=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{fill:!0,style:{width:"100%",backgroundColor:"#333"}},r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(o,{data:t})))}},71065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),i=n(81648),l=n(43178);const s=function(e){const{data:t,loading:n,route:s}=e;return r.createElement(a.Z,null,r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"More information")),r.createElement(i.Z,{xs:12,sm:12,md:12},t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(l.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(l.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(l.Z,{text:"IMDB"}))))}},93374:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),i=n(81648),l=n(77053);const s=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(l.default,{data:t})))}},77053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(80383),i=n(81648),l=n(71065),s=n(80607),o=n(19976),c=n(43178),d=n(91293);const m=function(e){var{data:t,loading:n}=e;return t=t||{},r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,t.name),t&&t.profession&&t.profession.length>0&&r.createElement("span",null,t.profession.map((e=>r.createElement(c.Z,{text:e}))))),r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(d.default,{data:t})),r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(l.default,{data:t?t.references:null})),r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"General information"),t&&t.birthDate&&r.createElement("span",null,"Birth date: ",r.createElement(o.Z,{value:t.birthDate}))),r.createElement(i.Z,{xs:12,sm:12,md:12},t&&t.directed&&t.directed.length>0&&r.createElement("span",null,"Directed: ",t.directed.map((e=>`${e} `)))),r.createElement(i.Z,{xs:12,sm:12,md:12},t&&t.acted&&t.acted.length>0&&r.createElement("span",null,"Acted: ",t.acted.map((e=>`${e} `)))),r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(s.default,{data:t?t.awards:null})))}}}]);