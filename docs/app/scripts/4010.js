/*! For license information please see 4010.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[4010],{24561:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(67294),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},l=function(e){var t=e.animate,n=e.backgroundColor,l=e.backgroundOpacity,o=e.baseUrl,a=e.children,s=e.foregroundColor,c=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,f=e.interval,p=e.rtl,h=e.speed,m=e.style,y=e.title,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=d||Math.random().toString(36).substring(6),b=g+"-diff",O=g+"-animated-diff",w=g+"-aria",C=p?{transform:"scaleX(-1)"}:null,k="0; "+f+"; 1",E=h+"s";return(0,r.createElement)("svg",i({"aria-labelledby":w,role:"img",style:i(i({},m),C)},v),y?(0,r.createElement)("title",{id:w},y):null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+b+")",style:{fill:"url("+o+"#"+O+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:b},a),(0,r.createElement)("linearGradient",{id:O},(0,r.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:l},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:k,dur:E,repeatCount:"indefinite"})),(0,r.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:c},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:k,dur:E,repeatCount:"indefinite"})),(0,r.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:l},t&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:k,dur:E,repeatCount:"indefinite"})))))};l.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var o=function(e){return e.children?(0,r.createElement)(l,i({},e)):(0,r.createElement)(a,i({},e))},a=function(e){return(0,r.createElement)(o,i({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const s=o},38940:(e,t,n)=>{t.Z=void 0;var r=o(n(67294)),i=o(n(45697)),l=o(n(94184));function o(e){return e&&e.__esModule?e:{default:e}}const a=({animate:e,className:t,layout:n,children:i})=>r.default.createElement("div",{className:(0,l.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":"2-columns"===n,"vertical-timeline--one-column-left":"1-column"===n||"1-column-left"===n,"vertical-timeline--one-column-right":"1-column-right"===n})},i);a.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]).isRequired,className:i.default.string,animate:i.default.bool,layout:i.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"])},a.defaultProps={animate:!0,className:"",layout:"2-columns"};var s=a;t.Z=s},47509:(e,t,n)=>{t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),l=a(n(94184)),o=n(30890);function a(e){return e&&e.__esModule?e:{default:e}}const s=({children:e,className:t,contentArrowStyle:n,contentStyle:i,date:a,dateClassName:s,icon:c,iconClassName:u,iconOnClick:d,onTimelineElementClick:f,iconStyle:p,id:h,position:m,style:y,textClassName:v,intersectionObserverProps:g,visible:b})=>r.default.createElement(o.InView,g,(({inView:o,ref:g})=>r.default.createElement("div",{ref:g,id:h,className:(0,l.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===m,"vertical-timeline-element--right":"right"===m,"vertical-timeline-element--no-children":""===e}),style:y},r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:p,onClick:d,className:(0,l.default)(u,"vertical-timeline-element-icon",{"bounce-in":o||b,"is-hidden":!(o||b)})},c),r.default.createElement("div",{style:i,onClick:f,className:(0,l.default)(v,"vertical-timeline-element-content",{"bounce-in":o||b,"is-hidden":!(o||b)})},r.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,r.default.createElement("span",{className:(0,l.default)(s,"vertical-timeline-element-date")},a))))));s.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),className:i.default.string,contentArrowStyle:i.default.shape({}),contentStyle:i.default.shape({}),date:i.default.node,dateClassName:i.default.string,icon:i.default.element,iconClassName:i.default.string,iconStyle:i.default.shape({}),iconOnClick:i.default.func,onTimelineElementClick:i.default.func,id:i.default.string,position:i.default.string,style:i.default.shape({}),textClassName:i.default.string,visible:i.default.bool,intersectionObserverProps:i.default.shape({root:i.default.object,rootMargin:i.default.string,threshold:i.default.number,triggerOnce:i.default.bool})},s.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px"}};var c=s;t.Z=c},14313:(e,t,n)=>{e.exports={VerticalTimeline:n(38940).Z,VerticalTimelineElement:n(47509).Z}},30890:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f,InView:()=>u,observe:()=>s,useInView:()=>d});var r=n(67294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var l=new Map,o=new WeakMap,a=0;function s(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=function(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(o.has(n)||(a+=1,o.set(n,a.toString())),o.get(n)):"0":e[t]);var n})).toString()}(e),n=l.get(t);if(!n){var r,i=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var n,l=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=l),null==(n=i.get(t.target))||n.forEach((function(e){e(l,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},l.set(t,n)}return n}(n),i=r.id,s=r.observer,c=r.elements,u=c.get(e)||[];return c.has(e)||c.set(e,u),u.push(t),s.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(c.delete(e),s.unobserve(e)),0===c.size&&(s.disconnect(),l.delete(i))}}function c(e){return"function"!=typeof e.children}var u=function(e){var t,n;function l(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),c(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=l.prototype;return o.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},o.componentWillUnmount=function(){this.unobserve(),this.node=null},o.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,l=e.delay;this._unobserveCb=s(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:l})}},o.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},o.render=function(){if(!c(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var l=this.props,o=l.children,a=l.as,s=l.tag,u=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(l,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,r.createElement)(a||s||"div",i({ref:this.handleNode},u),o)},l}(r.Component);function d(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,l=t.trackVisibility,o=t.rootMargin,a=t.root,c=t.triggerOnce,u=t.skip,d=t.initialInView,f=(0,r.useRef)(),p=(0,r.useState)({inView:!!d}),h=p[0],m=p[1],y=(0,r.useCallback)((function(e){void 0!==f.current&&(f.current(),f.current=void 0),u||e&&(f.current=s(e,(function(e,t){m({inView:e,entry:t}),t.isIntersecting&&c&&f.current&&(f.current(),f.current=void 0)}),{root:a,rootMargin:o,threshold:n,trackVisibility:l,delay:i}))}),[Array.isArray(n)?n.toString():n,a,o,c,u,l,i]);(0,r.useEffect)((function(){f.current||!h.entry||c||u||m({inView:!!d})}));var v=[y,h.inView,h.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}u.displayName="InView",u.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};const f=u}}]);