"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9943],{83574:function(n,e,r){r.d(e,{Z:function(){return y}});var t=r(4942),i=(r(67294),r(20780)),a=r(25662),o=r(88704),c=r(43332),d=r(49896),s=(r(59231),r(39698)),l=r(82356),u=r(85893);function f(n){var e=n.tiny,r=n.format;switch(r=e?"tiny":r){case"list":return function(n){var e=n.id,r=n.title,t=n.releaseYear,i=n.as;return(0,u.jsx)(s.xs,{width:"220px",height:"125px",children:(0,u.jsxs)(d.Z,{id:e,children:[(0,u.jsx)("div",{children:(0,u.jsx)(s.x4,{children:null!==t&&void 0!==t?t:"?"})}),(0,u.jsx)("div",{children:(0,u.jsx)(s.Dx,{children:null!==r&&void 0!==r?r:"?"})}),i&&(0,u.jsx)("div",{children:(0,u.jsxs)(s.x4,{children:["as ",i.replace(/[\[\]\'\"]/g,"")]})})]})},e)}(n);case"tiny":return function(n){var e,r;return(0,u.jsx)(d.Z,{id:n.id,children:(0,u.jsx)(l.Z,{title:null!==(e=null===n||void 0===n?void 0:n.releaseYear)&&void 0!==e?e:"?",value:null!==(r=null===n||void 0===n?void 0:n.title)&&void 0!==r?r:"?"})})}(n);case"card":default:return function(n){var e=n.id,r=n.name;n.box;return(0,u.jsx)(d.Z,{box:!0,id:e,entity:r,children:(0,u.jsx)(c.Z,{title:r})})}(n)}}var v=r(42341);function x(n){var e=n.id,r=n.name;n.box;return(0,u.jsx)(v.Z,{box:!0,id:e,entity:r,children:(0,u.jsx)(c.Z,{title:r})})}function h(n){var e=n.tiny,r=n.format;switch(r=e?"tiny":r){case"list":return function(n){var e=n.id,r=n.name,t=n.startYear,i=n.as;return(0,u.jsx)(s.xs,{width:"220px",height:"125px",children:(0,u.jsxs)(v.Z,{id:e,children:[(0,u.jsx)(s.x4,{children:null!==t&&void 0!==t?t:"?"}),(0,u.jsx)(s.Dx,{children:null!==r&&void 0!==r?r:"?"}),i&&(0,u.jsx)("div",{children:(0,u.jsxs)(s.x4,{children:["as ",i.replace(/[\[\]\'\"]/g,"")]})})]})},e)}(n);case"tiny":return function(n){var e,r;return(0,u.jsx)(v.Z,{id:n.id,children:(0,u.jsx)(l.Z,{title:null!==(e=null===n||void 0===n?void 0:n.startYear)&&void 0!==e?e:"?",value:null!==(r=null===n||void 0===n?void 0:n.name)&&void 0!==r?r:"?"})})}(n);case"card":default:return function(n){var e=n.id,r=n.name,t=(n.box,n.image);return(0,u.jsx)(v.Z,{box:!0,id:e,entity:r,children:(0,u.jsx)(c.Z,{title:r,image:null===t||void 0===t?void 0:t.poster})})}(n)}}var m=r(25810);function p(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function j(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){(0,t.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var y=function(n){var e=n.type;switch(e){case"movie":return(0,u.jsx)(i.Z,j({},n));case"movieFestival":return(0,u.jsx)(h,j({},n));case"person":return(0,u.jsx)(a.Z,j({},n));case"podcast":return(0,u.jsx)(o.Z,j({},n));case"tvShow":return(0,u.jsx)(f,j({},n));case"videoGame":return(0,u.jsx)(x,j({},n))}return(0,u.jsx)(m.C,{from:"Entity Item",data:"ENTITY ".concat(e," NOT FOUND")})}},42341:function(n,e,r){r(67294);var t=r(89260),i=r(85893);e.Z=function(n){var e=n.id,r=n.children,a=n.box;return(0,i.jsx)(t.Z,{box:a,to:"/movies/festivals/".concat(e),children:r})}},23731:function(n,e,r){r.d(e,{Ez:function(){return h},AK:function(){return p},iY:function(){return y}});var t,i,a,o,c=r(4942),d=r(30168),s=r(54397),l=r(74273),u=r(75679),f=r(85639);function v(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function x(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){(0,c.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}(0,s.Ps)(t||(t=(0,d.Z)(["\nfragment MovieTinyFragment on Movie {\n  id: _id\n  title\n}\n"])));var h=function(n){var e=n.page,r=n.op,t=n.qryName,i=void 0===t?"":t;return(0,l.h)(m({qryName:i}),{page:e,field:JSON.stringify(r)},(function(n){return x(x({},n),{},{data:n.data.movies})}))},m=function(n){var e=n.qryName;return(0,s.Ps)(i||(i=(0,d.Z)(["\n  query movies_","($page: Int, $field: String)\n  {\n    movies(page: $page, field: $field){\n      id: _id\n      releaseYear\n      title\n    }\n  }\n"])),e)},p=function(n){var e=n.dataEntity,r=n.qryName;return(0,l.h)(j({ENTITY:e,qryName:r}),{},(function(n){return x(x({},n),{},{data:n.data.dashboardMovies})}))},j=function(n){n.ENTITY,n.qryName;return(0,s.Ps)(a||(a=(0,d.Z)(["\n  query dashboard_movies\n  {\n    dashboardMovies {\n      total\n      type\n      releaseDecade\n      duration\n      genres\n      awards\n      countries\n      ratings\n      production\n      boxOffice\n      cast\n      directors\n      producers\n      writers\n    }\n  }\n"])))},y=function(n){var e=n.id,r=n.qryName,t=void 0===r?"":r;return(0,l.h)(g({qryName:t}),{id:e},(function(n){return x(x({},n),{},{data:n.data.movie})}))},g=function(n){n.qryName;return(0,s.Ps)(o||(o=(0,d.Z)(["\n","\n","\nquery movie($id:String!) {\n  movie(id: $id){\n    id: _id\n    title\n    countries\n    type\n    genres\n    duration\n    ratings {\n      averageRating\n      name\n    }\n    releaseYear\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    produced{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    directed{\n      id{        \n        ...PersonTinyFragment\n      } \n    }\n    cast {\n      id{\n        ...PersonTinyFragment\n      } \n      as\n    }\n    written{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...PersonTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    remakes{\n      title\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n\n  }\n}\n"])),f.B9,u.T4)}},20780:function(n,e,r){r.d(e,{Z:function(){return s}});r(67294);var t=r(43332),i=r(49896),a=r(59231),o=r(39698),c=r(82356),d=r(85893);function s(n){var e=n.tiny,r=n.format;switch(r=e?"tiny":r){case"list":return function(n){var e=n.id,r=n.title,t=n.releaseYear,a=n.as;return(0,d.jsx)(o.xs,{width:"220px",height:"125px",children:(0,d.jsxs)(i.Z,{id:e,children:[(0,d.jsx)(o.x4,{children:null!==t&&void 0!==t?t:"?"}),(0,d.jsx)(o.Dx,{children:null!==r&&void 0!==r?r:"?"}),a&&(0,d.jsx)("div",{children:(0,d.jsxs)(o.x4,{children:["as ",a.replace(/[\[\]\'\"]/g,"")]})})]})},e)}(n);case"tiny":return function(n){var e,r;return(0,d.jsx)(i.Z,{id:n.id,children:(0,d.jsx)(c.Z,{title:null!==(e=null===n||void 0===n?void 0:n.releaseYear)&&void 0!==e?e:"?",value:null!==(r=null===n||void 0===n?void 0:n.title)&&void 0!==r?r:"?"})})}(n);case"card":default:return function(n){var e=n.full,r=n.year,o=n.all,c=n.id,s=n.title,l=n.awards,u=n.image;return(0,d.jsx)(i.Z,{box:!0,id:c,children:(0,d.jsx)(t.Z,{image:u?u.poster:u,text:(0,d.jsx)(a.Z,{mini:!e,data:l,year:r,all:o}),title:s})})}(n)}}},25662:function(n,e,r){r.d(e,{Z:function(){return d}});r(67294);var t=r(43332),i=r(55476),a=(r(59231),r(39698)),o=r(82356),c=r(85893);function d(n){var e=n.tiny,r=n.format;switch(r=e?"tiny":r){case"list":return function(n){var e=n.id,r=n.name,t=n.as;return(0,c.jsx)(a.xs,{width:"220px",height:"125px",children:(0,c.jsxs)(i.Z,{id:e,children:[(0,c.jsx)("div",{children:(0,c.jsx)(a.Dx,{children:null!==r&&void 0!==r?r:"?"})}),t&&(0,c.jsx)("div",{children:(0,c.jsxs)(a.x4,{children:["as ",t.replace(/[\[\]\'\"]/g,"")]})})]})},e)}(n);case"tiny":return function(n){var e=n.id,r=n.name,t=n.releaseYear;return(0,c.jsx)(i.Z,{id:e,children:(0,c.jsx)(o.Z,{value:r,title:t})})}(n);case"card":default:return function(n){var e=n.id,r=n.name,a=n.text;n.box;return(0,c.jsx)(i.Z,{box:!0,id:e,entity:r,children:(0,c.jsx)(t.Z,{title:r,text:a})},e)}(n)}}},55476:function(n,e,r){r(67294);var t=r(89260),i=r(85893);e.Z=function(n){var e=n.id,r=(n.entity,n.children),a=n.box;return e?(0,i.jsx)(t.Z,{box:a,border:!1,to:"/people/".concat(e),children:r}):r}},88704:function(n,e,r){r.d(e,{Z:function(){return d}});r(67294);var t=r(43332),i=r(44898),a=r(39698),o=r(82356),c=r(85893);function d(n){var e=n.tiny,r=n.format;switch(r=e?"tiny":r){case"list":return function(n){var e=n.id,r=n.title,t=n.as;return(0,c.jsx)(a.xs,{width:"220px",height:"125px",children:(0,c.jsxs)(i.Z,{id:e,children:[(0,c.jsx)(a.Dx,{children:null!==r&&void 0!==r?r:"?"}),t&&(0,c.jsx)("div",{children:(0,c.jsxs)(a.x4,{children:["as ",t.replace(/[\[\]\'\"]/g,"")]})})]})},e)}(n);case"tiny":return function(n){var e;return(0,c.jsx)(i.Z,{id:n.id,children:(0,c.jsx)(o.Z,{value:null!==(e=null===n||void 0===n?void 0:n.title)&&void 0!==e?e:"?"})})}(n);case"card":default:return function(n){var e=n.id,r=n.title,a=(n.awards,n.full,n.image),o=n.description;n.box;return(0,c.jsx)(i.Z,{box:!0,id:e,entity:name,style:{width:"100%"},children:(0,c.jsx)(t.Z,{image:null===a||void 0===a?void 0:a.poster,text:o,title:r})})}(n)}}},44898:function(n,e,r){r(67294);var t=r(89260),i=r(85893);e.Z=function(n){var e=n.id,r=(n.entity,n.children),a=n.box;return(0,i.jsx)(t.Z,{box:a,border:!0,to:"/podcasts/".concat(e),children:r})}},39698:function(n,e,r){r.d(e,{xs:function(){return h},x4:function(){return p},Dx:function(){return m}});var t=r(67294),i=r(29602),a=r(15671),o=r(43144),c=r(60136),d=r(82963),s=r(61120),l=r(79895),u=r(85893);function f(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,t=(0,s.Z)(n);if(e){var i=(0,s.Z)(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return(0,d.Z)(this,r)}}t.Component;var v=(0,i.ZP)("div")((function(n){var e=n.theme,r=n.width,t=n.height;return{backgroundColor:e.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:e.palette.text.primary,alignItems:"center",minWidth:r,maxWidth:r,minHeight:t,maxHeight:t,borderRadius:"5px"}})),x=(0,i.ZP)("div")((function(n){var e=n.theme;n.width;return{backgroundColor:"transparent",color:e.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),h=function(n){var e=n.width,r=void 0===e?"300px":e,t=n.height,i=void 0===t?"300px":t;return(0,u.jsx)(v,{width:r,height:i,children:(0,u.jsx)(x,{children:n.children})})},m=(0,i.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),p=((0,i.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})}}]);