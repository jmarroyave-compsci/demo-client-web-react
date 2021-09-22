"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[8786],{47559:(t,e)=>{e.Z=void 0;e.Z={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"}},83165:(t,e)=>{e.Z=void 0;e.Z={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"}},59009:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(87462),a=n(45987),o=n(67294),i=(n(45697),n(86010)),s=n(14670),l=n(93871),c=o.forwardRef((function(t,e){var n=t.anchorOrigin,s=void 0===n?{vertical:"top",horizontal:"right"}:n,c=t.badgeContent,d=t.children,f=t.classes,m=t.className,g=t.color,v=void 0===g?"default":g,p=t.component,u=void 0===p?"span":p,h=t.invisible,b=t.max,x=void 0===b?99:b,y=t.overlap,Z=void 0===y?"rectangle":y,C=t.showZero,z=void 0!==C&&C,w=t.variant,O=void 0===w?"standard":w,S=(0,a.Z)(t,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),R=h;null==h&&(0===c&&!z||null==c&&"dot"!==O)&&(R=!0);var k="";return"dot"!==O&&(k=c>x?"".concat(x,"+"):c),o.createElement(u,(0,r.Z)({className:(0,i.Z)(f.root,m),ref:e},S),d,o.createElement("span",{className:(0,i.Z)(f.badge,f["".concat(s.horizontal).concat((0,l.Z)(s.vertical),"}")],f["anchorOrigin".concat((0,l.Z)(s.vertical)).concat((0,l.Z)(s.horizontal)).concat((0,l.Z)(Z))],"default"!==v&&f["color".concat((0,l.Z)(v))],R&&f.invisible,"dot"===O&&f.dot)},k))}));const d=(0,s.Z)((function(t){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorError:{backgroundColor:t.palette.error.main,color:t.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginTopRightRectangular:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginBottomRightRectangular:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginTopLeftRectangular:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginBottomLeftRectangular:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginTopRightCircular:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginBottomRightCircular:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginTopLeftCircular:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginBottomLeftCircular:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(c)},41749:(t,e,n)=>{n.d(e,{Z:()=>m});var r=n(45987),a=n(87462),o=n(67294),i=(n(45697),n(86010)),s=n(14670),l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var f=o.forwardRef((function(t,e){var n=t.alignContent,s=void 0===n?"stretch":n,l=t.alignItems,c=void 0===l?"stretch":l,d=t.classes,f=t.className,m=t.component,g=void 0===m?"div":m,v=t.container,p=void 0!==v&&v,u=t.direction,h=void 0===u?"row":u,b=t.item,x=void 0!==b&&b,y=t.justify,Z=t.justifyContent,C=void 0===Z?"flex-start":Z,z=t.lg,w=void 0!==z&&z,O=t.md,S=void 0!==O&&O,R=t.sm,k=void 0!==R&&R,M=t.spacing,$=void 0===M?0:M,E=t.wrap,T=void 0===E?"wrap":E,j=t.xl,B=void 0!==j&&j,H=t.xs,W=void 0!==H&&H,A=t.zeroMinWidth,N=void 0!==A&&A,L=(0,r.Z)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),V=(0,i.Z)(d.root,f,p&&[d.container,0!==$&&d["spacing-xs-".concat(String($))]],x&&d.item,N&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==T&&d["wrap-xs-".concat(String(T))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(y||C)&&d["justify-content-xs-".concat(String(y||C))],!1!==W&&d["grid-xs-".concat(String(W))],!1!==k&&d["grid-sm-".concat(String(k))],!1!==S&&d["grid-md-".concat(String(S))],!1!==w&&d["grid-lg-".concat(String(w))],!1!==B&&d["grid-xl-".concat(String(B))]);return o.createElement(g,(0,a.Z)({className:V,ref:e},L))}));const m=(0,s.Z)((function(t){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return l.forEach((function(e){var r=t.spacing(e);0!==r&&(n["spacing-".concat("xs","-").concat(e)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(t),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var r={};c.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var a="".concat(Math.round(t/12*1e8)/1e6,"%");r[e]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(t,r):t[e.breakpoints.up(n)]=r}(e,t,n),e}),{}))}),{name:"MuiGrid"})(f)},17812:(t,e,n)=>{n.d(e,{Z:()=>m});var r=n(87462),a=n(45987),o=n(67294),i=(n(45697),n(86010)),s=n(14670),l=n(59693),c=n(54720),d=n(93871),f=o.forwardRef((function(t,e){var n=t.edge,s=void 0!==n&&n,l=t.children,f=t.classes,m=t.className,g=t.color,v=void 0===g?"default":g,p=t.disabled,u=void 0!==p&&p,h=t.disableFocusRipple,b=void 0!==h&&h,x=t.size,y=void 0===x?"medium":x,Z=(0,a.Z)(t,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(c.Z,(0,r.Z)({className:(0,i.Z)(f.root,m,"default"!==v&&f["color".concat((0,d.Z)(v))],u&&f.disabled,"small"===y&&f["size".concat((0,d.Z)(y))],{start:f.edgeStart,end:f.edgeEnd}[s]),centerRipple:!0,focusRipple:!b,disabled:u,ref:e},Z),o.createElement("span",{className:f.label},l))}));const m=(0,s.Z)((function(t){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:t.palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,l.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:t.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main,"&:hover":{backgroundColor:(0,l.Fq)(t.palette.primary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:t.palette.secondary.main,"&:hover":{backgroundColor:(0,l.Fq)(t.palette.secondary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:t.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(f)},89659:(t,e,n)=>{n.d(e,{Z:()=>g});var r=n(87462),a=n(45987),o=n(67294),i=(n(45697),n(86010)),s=n(93871),l=n(14670),c=n(24896),d=n(17294),f=n(22318),m=o.forwardRef((function(t,e){var n=t.classes,l=t.className,m=t.color,g=void 0===m?"primary":m,v=t.component,p=void 0===v?"a":v,u=t.onBlur,h=t.onFocus,b=t.TypographyClasses,x=t.underline,y=void 0===x?"hover":x,Z=t.variant,C=void 0===Z?"inherit":Z,z=(0,a.Z)(t,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),w=(0,c.Z)(),O=w.isFocusVisible,S=w.onBlurVisible,R=w.ref,k=o.useState(!1),M=k[0],$=k[1],E=(0,d.Z)(e,R);return o.createElement(f.Z,(0,r.Z)({className:(0,i.Z)(n.root,n["underline".concat((0,s.Z)(y))],l,M&&n.focusVisible,"button"===p&&n.button),classes:b,color:g,component:p,onBlur:function(t){M&&(S(),$(!1)),u&&u(t)},onFocus:function(t){O(t)&&$(!0),h&&h(t)},ref:E,variant:C},z))}));const g=(0,l.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},8920:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(159),a=(n(67294),n(99700));function o(){return(0,r.Z)()||a.Z}},93871:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(60288);function a(t){if("string"!=typeof t)throw new Error((0,r.Z)(7));return t.charAt(0).toUpperCase()+t.slice(1)}},44152:(t,e,n)=>{var r=n(95318),a=n(20862);e.Z=void 0;var o=a(n(67294)),i=(0,r(n(2108)).default)(o.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");e.Z=i},79634:(t,e,n)=>{var r=n(95318),a=n(20862);e.Z=void 0;var o=a(n(67294)),i=(0,r(n(2108)).default)(o.createElement("path",{d:"M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"}),"BarChart");e.Z=i},50442:(t,e,n)=>{var r=n(95318),a=n(20862);e.Z=void 0;var o=a(n(67294)),i=(0,r(n(2108)).default)(o.createElement("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");e.Z=i},31195:(t,e,n)=>{var r=n(95318),a=n(20862);e.Z=void 0;var o=a(n(67294)),i=(0,r(n(2108)).default)(o.createElement("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"}),"Layers");e.Z=i},48884:(t,e,n)=>{var r=n(95318),a=n(20862);e.Z=void 0;var o=a(n(67294)),i=(0,r(n(2108)).default)(o.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");e.Z=i},48825:(t,e,n)=>{var r=n(95318),a=n(20862);e.Z=void 0;var o=a(n(67294)),i=(0,r(n(2108)).default)(o.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");e.Z=i},63219:(t,e,n)=>{var r=n(95318),a=n(20862);e.Z=void 0;var o=a(n(67294)),i=(0,r(n(2108)).default)(o.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"People");e.Z=i},28346:(t,e,n)=>{var r=n(95318),a=n(20862);e.Z=void 0;var o=a(n(67294)),i=(0,r(n(2108)).default)(o.createElement("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart");e.Z=i},86010:(t,e,n)=>{function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:()=>a})}}]);