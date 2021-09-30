"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[3461,3162,605,2399,8304],{86688:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(72797);n.Component;const i=e=>class extends n.Component{render(){const a="title"in this.props?this.props.title:null,t="placeholder"in this.props?this.props.placeholder:{};return t.width&&t.width,t.height&&t.height,n.createElement(r.Z,{from:a,style:{width:"100%"}},n.createElement(e,this.props))}}},36776:(e,a,t)=>{t.d(a,{Z:()=>n});const n={links_disabled:!1}},80383:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(86688),i=t(41749);class s extends n.Component{render(){var{direction:e,spacing:a,className:t,justify:r,alignItems:s,style:l,flex:o}=this.props,a=a||0;return l=l||{},o&&(l.display="flex"),n.createElement(i.Z,{container:!0,direction:e,justifyContent:r,alignItems:s,className:t,spacing:a,style:l},this.props.children)}}const l=(0,r.Z)(s)},81648:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(86688),i=t(41749);class s extends n.Component{render(){var{visible:e,className:a,xs:t,sm:r,md:s,style:l,fill:o,flex:c,center:d}=this.props;e=e||!0;var m={...l};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,o&&(m.width="100%"),c&&(m.flex=1),e&&n.createElement(i.Z,{className:a,item:!0,xs:t,sm:r,md:s,style:m},this.props.children)}}const l=(0,r.Z)(s)},83347:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(12613),i=t(86688);class s extends n.Component{render(){var{xs:e,sm:a,md:t,lg:i,xl:s}=this.props;return e=e||null,a=a||e,t=t||a,i=i||t,s=s||i,n.createElement("div",{style:{width:"100%"}},n.createElement(r.Z,{only:["sm","md","lg","xl"]},e),n.createElement(r.Z,{only:["xs","md","lg","xl"]},a),n.createElement(r.Z,{only:["xs","sm","lg","xl"]},t),n.createElement(r.Z,{only:["xs","sm","md","xl"]},i),n.createElement(r.Z,{only:["xs","sm","md","lg"]},s))}}const l=(0,i.Z)(s)},87558:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(73727),i=t(36776);class s extends n.Component{render(){var{children:e,className:a,to:t,href:s,style:l,external:o}=this.props;if(e=(t=(t=t||s)||"http://localhost")?e:"NO LINK DEFINED",l=l||{},t&&"string"!=typeof t)return"INVALID URL";const c=!((o=!0===o)||t&&0===t.indexOf("http")),d=c?"_self":"_blank";return 0==(0===t.indexOf("#"))&&1==c&&0==i.Z.links_disabled?n.createElement(r.OL,{className:a,to:t,style:l},e):n.createElement("a",{className:a,href:t,style:l,target:d},e)}}const l=s},97236:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(87558);t(36776);class i extends n.Component{render(){var{children:e,className:a,to:t,href:i,border:s,style:l,external:o}=this.props;return e=(t=(t=t||i)||"http://localhost")?e:"NO LINK DEFINED",s=!0===s||"true"===s?"text-link":"",(l=l||{}).padding=l.padding?l.padding:"0.5rem 0.75rem",a=`${s} ${a||""}`,o=!0===o,n.createElement(r.Z,{className:a,to:t,style:l,external:o},e)}}const s=i},85237:(e,a,t)=>{t.r(a),t.d(a,{default:()=>s});var n=t(67294),r=t(83347),i=t(23057);function s(e){return n.createElement(r.Z,{xs:n.createElement(i.default,e)})}},18702:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i,Controls:()=>l,Loading:()=>o});var n=t(85237),r=t(30664);const i={title:"Project/Stories/Podcast-Music/Page"},s=e=>React.createElement(n.default,e),l=s.bind({});l.args={data:r};const o=s.bind({});o.args={loading:!0}},73727:(e,a,t)=>{t.d(a,{OL:()=>g});var n=t(5977),r=(t(51721),t(67294)),i=t(37531),s=(t(45697),t(87462)),l=t(63366),o=t(2177);r.Component,r.Component;var c=function(e,a){return"function"==typeof e?e(a):e},d=function(e,a){return"string"==typeof e?(0,i.ob)(e,null,null,a):e},m=function(e){return e},u=r.forwardRef;void 0===u&&(u=m);var p=u((function(e,a){var t=e.innerRef,n=e.navigate,i=e.onClick,o=(0,l.Z)(e,["innerRef","navigate","onClick"]),c=o.target,d=(0,s.Z)({},o,{onClick:function(e){try{i&&i(e)}catch(a){throw e.preventDefault(),a}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return d.ref=m!==u&&a||t,r.createElement("a",d)})),_=u((function(e,a){var t=e.component,_=void 0===t?p:t,h=e.replace,f=e.to,g=e.innerRef,v=(0,l.Z)(e,["component","replace","to","innerRef"]);return r.createElement(n.s6.Consumer,null,(function(e){e||(0,o.Z)(!1);var t=e.history,n=d(c(f,e.location),e.location),l=n?t.createHref(n):"",p=(0,s.Z)({},v,{href:l,navigate:function(){var a=c(f,e.location),n=(0,i.Ep)(e.location)===(0,i.Ep)(d(a));(h||n?t.replace:t.push)(a)}});return m!==u?p.ref=a||g:p.innerRef=g,r.createElement(_,p)}))})),h=function(e){return e},f=r.forwardRef;void 0===f&&(f=h);var g=f((function(e,a){var t=e["aria-current"],i=void 0===t?"page":t,m=e.activeClassName,u=void 0===m?"active":m,p=e.activeStyle,g=e.className,v=e.exact,y=e.isActive,b=e.location,x=e.sensitive,Z=e.strict,E=e.style,k=e.to,w=e.innerRef,C=(0,l.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return r.createElement(n.s6.Consumer,null,(function(e){e||(0,o.Z)(!1);var t=b||e.location,l=d(c(k,t),t),m=l.pathname,N=m&&m.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=N?(0,n.LX)(t.pathname,{path:N,exact:v,sensitive:x,strict:Z}):null,A=!!(y?y(R,t):R),I="function"==typeof g?g(A):g,K="function"==typeof E?E(A):E;A&&(I=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return e})).join(" ")}(I,u),K=(0,s.Z)({},K,p));var L=(0,s.Z)({"aria-current":A&&i||null,className:I,style:K,to:l},C);return h!==f?L.ref=a||w:L.innerRef=w,r.createElement(_,L)}))}))},30664:e=>{e.exports=JSON.parse('{"dashboard":{"actors":32600,"countries":{"brazil":88,"mexico":154,"singapore":39,"unitedStates":3297,"turkey":108,"egypt":110,"india":990,"poland":36,"thailand":65,"nigeria":76,"norway":29,"iceland":9,"unitedKingdom":723,"japan":287,"southKorea":212,"italy":90,"canada":412,"indonesia":80,"romania":12,"spain":215,"southAfrica":54,"france":349,"portugal":4,"hongKong":102,"china":147,"germany":199,"argentina":82,"serbia":7,"denmark":44,"kenya":5,"newZealand":28,"pakistan":24,"australia":144,"taiwan":85,"netherlands":45,"philippines":78,"unitedArabEmirates":34,"iran":4,"belgium":85,"israel":26,"uruguay":14,"bulgaria":9,"chile":26,"russia":27,"mauritius":1,"lebanon":26,"colombia":45,"algeria":2,"sovietUnion":3,"sweden":39,"malaysia":26,"ireland":40,"luxembourg":11,"finland":11,"austria":11,"peru":10,"senegal":3,"switzerland":17,"ghana":4,"saudiArabia":10,"armenia":1,"jordan":8,"mongolia":1,"namibia":2,"qatar":7,"vietnam":5,"syria":1,"kuwait":7,"malta":3,"czechRepublic":20,"bahamas":1,"sriLanka":1,"caymanIslands":2,"bangladesh":3,"zimbabwe":3,"hungary":9,"latvia":1,"liechtenstein":1,"venezuela":3,"morocco":6,"cambodia":5,"albania":1,"cuba":1,"nicaragua":1,"greece":10,"croatia":4,"guatemala":2,"westGermany":5,"slovenia":3,"dominicanRepublic":1,"nepal":2,"samoa":1,"azerbaijan":1,"bermuda":1,"ecuador":1,"georgia":2,"botswana":1,"puertoRico":1,"iraq":2,"vaticanCity":1,"angola":1,"ukraine":3,"jamaica":1,"belarus":1,"cyprus":1,"kazakhstan":1,"malawi":1,"slovakia":1,"lithuania":1,"afghanistan":1,"paraguay":1,"somalia":1,"sudan":1,"panama":1,"uganda":1,"eastGermany":1,"montenegro":1},"directors":4324,"genres":{"international":3636,"dramas":2810,"sciFiFantasy":294,"horror":381,"actionAdventure":871,"independent":673,"mysteries":90,"thrillers":541,"crime":427,"documentaries":1139,"sports":196,"comedies":1996,"anime":205,"realityTv":222,"romantic":864,"scienceNature":85,"british":232,"korean":150,"musicals":321,"lgbtq":90,"faithSpirituality":57,"childrenFamily":946,"spanish":147,"classicCult":189,"standUpComedyTalkShows":381,"teen":60},"lastUpdate":"2021-09-15T15:01:49.939Z","movies":7787,"people":36924,"types":{"tvShow":2410,"movie":5377},"yearsAdded":{"_2003":2,"_2008":3,"_2009":2,"_2010":2,"_2011":13,"_2012":4,"_2013":12,"_2014":25,"_2015":90,"_2016":444,"_2017":1225,"_2018":1686,"_2019":2153,"_2020":2009,"_2021":117},"yearsReleased":{"_1925":1,"_1942":2,"_1943":3,"_1944":3,"_1945":3,"_1946":2,"_1947":1,"_1954":2,"_1955":3,"_1956":2,"_1958":3,"_1959":1,"_1960":4,"_1962":3,"_1963":2,"_1964":1,"_1965":2,"_1966":1,"_1967":5,"_1968":5,"_1969":2,"_1970":2,"_1971":5,"_1972":4,"_1973":10,"_1974":7,"_1975":6,"_1976":9,"_1977":7,"_1978":6,"_1979":11,"_1980":9,"_1981":9,"_1982":15,"_1983":9,"_1984":9,"_1985":9,"_1986":10,"_1987":7,"_1988":16,"_1989":13,"_1990":20,"_1991":17,"_1992":18,"_1993":22,"_1994":16,"_1995":19,"_1996":19,"_1997":30,"_1998":31,"_1999":33,"_2000":34,"_2001":36,"_2002":45,"_2003":49,"_2004":59,"_2005":73,"_2006":85,"_2007":85,"_2008":125,"_2009":137,"_2010":173,"_2011":166,"_2012":219,"_2013":267,"_2014":334,"_2015":541,"_2016":882,"_2017":1012,"_2018":1121,"_2019":996,"_2020":868,"_2021":31}}}')}}]);