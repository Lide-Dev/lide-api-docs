(function(e){function t(t){for(var o,r,i=t[0],l=t[1],d=t[2],s=0,p=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==c[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},a=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4d619bfa"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=c[e]=[t,o]}));t.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var d=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}c[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/lide-api-docs/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4b88":function(e,t,n){"use strict";n("a005")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("7a23"),c=Object(o["createTextVNode"])(" Content "),a={class:"layout-body"};function r(e,t,n,r,i,l){var d=Object(o["resolveComponent"])("navbar"),s=Object(o["resolveComponent"])("Sidebar"),u=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(d,{"onClick:sidebar":r.onClickSidebar},null,8,["onClick:sidebar"]),Object(o["createVNode"])(s,{visible:r.visibleLeft,"onUpdate:visible":t[1]||(t[1]=function(e){return r.visibleLeft=e})},{default:Object(o["withCtx"])((function(){return[c]})),_:1},8,["visible"]),Object(o["createVNode"])("div",a,[Object(o["createVNode"])(u)])],64)}n("99af"),n("96cf");var i=n("1da1"),l=Object(o["withScopeId"])("data-v-4536e77f");Object(o["pushScopeId"])("data-v-4536e77f");var d={class:"layout-navbar"},s={class:"p-grid"},u={class:"p-d-md-none p-ml-5 p-col-1 p-d-flex p-align-center"},p={class:"p-md-2 p-col-9 p-jc-center p-d-flex p-align-center"},b=Object(o["createVNode"])("h2",{class:"logo p-text-center"},"Laron",-1),f={class:"p-col-5 p-offset-2 p-d-md-flex p-d-none p-jc-center p-align-center"},v={class:"p-col-2 p-d-md-flex p-d-none p-jc-end p-align-center"};Object(o["popScopeId"])();var m=l((function(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Button"),m=Object(o["resolveComponent"])("router-link"),j=Object(o["resolveComponent"])("Dropdown");return Object(o["openBlock"])(),Object(o["createBlock"])("nav",d,[Object(o["createVNode"])("div",s,[Object(o["createVNode"])("div",u,[Object(o["createVNode"])(i,{icon:"pi pi-bars",class:"p-button-text p-button-lg",onClick:c.onClickSidebar},null,8,["onClick"])]),Object(o["createVNode"])("div",p,[Object(o["createVNode"])(m,{to:"/"},{default:l((function(){return[b]})),_:1})]),Object(o["createVNode"])("div",f,[Object(o["createVNode"])(m,{to:"/docs"},{default:l((function(){return[Object(o["createVNode"])(i,{label:"Documentation",class:"p-button-text"})]})),_:1}),Object(o["createVNode"])(m,{to:"/about"},{default:l((function(){return[Object(o["createVNode"])(i,{label:"About",class:"p-button-text"})]})),_:1})]),Object(o["createVNode"])("div",v,[Object(o["createVNode"])(j,{class:"p-mr-6",modelValue:c.selectedVersion,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.selectedVersion=e}),options:c.version,optionLabel:"name",optionValue:"code",placeholder:"Select a version"},null,8,["modelValue","options"])])])])})),j={emits:["click:sidebar"],setup:function(e,t){var n=t.emit,c=Object(o["ref"])([{name:"Beta-Release",code:"0.5"},{name:"1.0",code:"1.0"},{name:"1.1",code:"1.1"},{name:"2.0",code:"2.0"},{name:"2.1 New",code:"2.1"}]),a=Object(o["ref"])("0.5");function r(){n("click:sidebar")}return{version:c,selectedVersion:a,onClickSidebar:r}}};n("e2ac");j.render=m,j.__scopeId="data-v-4536e77f";var O=j,h=n("6c02"),g={components:{Navbar:O},setup:function(){var e=Object(o["ref"])(!1),t=Object(o["ref"])(""),n=Object(h["c"])("init");function c(){e.value=!e.value}return Object(o["watch"])((function(){return n.params}),function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("New parameter:",n),"category1"in n){e.next=4;break}return t.value="init",e.abrupt("return");case 4:o=n.category1,t.value="category2"in n?"".concat(o,".").concat(n.category2):"".concat(o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(o["provide"])("selectedDocs",t),{visibleLeft:e,onClickSidebar:c}}};n("8c57");g.render=r;var V=g,k=(n("d3b7"),n("cf05")),N=n.n(k),y=Object(o["withScopeId"])("data-v-36e44d28");Object(o["pushScopeId"])("data-v-36e44d28");var x={class:"p-grid p-d-flex p-align-center p-jc-center layout-introduction"},w=Object(o["createVNode"])("div",{class:"p-col-12 p-md-4 p-d-flex p-jc-center"},[Object(o["createVNode"])("img",{class:"logo",alt:"logo",src:N.a})],-1),S={class:"p-col-12 p-md-6 p-d-flex p-flex-column"},C={class:"p-d-md-none p-d-flex p-flex-column p-text-center"},P=Object(o["createVNode"])("h3",null,"Dokumentasi API Laron",-1),I=Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(" Laron melayani API secara "),Object(o["createVNode"])("i",null,"cross-platform"),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" dari mobile hingga ke website. ")],-1),_={class:"p-d-flex p-mt-5 p-jc-center"},A={class:"p-buttonset"},B={class:"p-d-none p-d-md-flex p-flex-column"},L=Object(o["createVNode"])("h3",null,"Dokumentasi API Laron",-1),D=Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(" Laron melayani API secara "),Object(o["createVNode"])("i",null,"cross-platform"),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" dari mobile hingga ke website. ")],-1),T={class:"p-d-flex p-mt-5"},M={class:"p-buttonset"};Object(o["popScopeId"])();var R=y((function(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Button");return Object(o["openBlock"])(),Object(o["createBlock"])("div",x,[w,Object(o["createVNode"])("div",S,[Object(o["createVNode"])("div",C,[P,I,Object(o["createVNode"])("div",_,[Object(o["createVNode"])("span",A,[Object(o["createVNode"])(i,{label:"Get Started"}),Object(o["createVNode"])(i,{label:"API Reference"})])])]),Object(o["createVNode"])("div",B,[L,D,Object(o["createVNode"])("div",T,[Object(o["createVNode"])("span",M,[Object(o["createVNode"])(i,{label:"Get Started"}),Object(o["createVNode"])(i,{label:"API Reference"})])])])])])})),U={name:"Home"};n("5abe");U.render=R,U.__scopeId="data-v-36e44d28";var E=U,G=Object(o["withScopeId"])("data-v-27b9b97c");Object(o["pushScopeId"])("data-v-27b9b97c");var J={class:"p-grid p-mt-5"},H={class:"p-col-2 "},W={class:"p-col-8 p-offset-1 layout-documentation-body"};Object(o["popScopeId"])();var $=G((function(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("sidebar-docs"),l=Object(o["resolveComponent"])("vue3-markdown-it");return Object(o["openBlock"])(),Object(o["createBlock"])("div",J,[Object(o["createVNode"])("div",H,[Object(o["createVNode"])(i,{models:c.documents.sidebar},null,8,["models"])]),Object(o["createVNode"])("div",W,[Object(o["createVNode"])(l,{source:c.source},null,8,["source"])])])})),q=(n("caad6"),n("ac1f"),n("2532"),n("1276"),"###Mobile"),F='\n## Authentication Website\n---\nUntuk mengakses API Laron diperlukan sebuah token autentikasi dari server. Anda bisa mengaksesnya dengan metode seperti dibawah ini:\n\n- **Method** : POST\n- **Query Plugin** :  -\n- **URL**: _https:/laron-server-side.test/api/v1/$user/login_\n\n**Contoh:**\n```javascript\naxios.post(\n\t"https:/laron-server-side.test/api/v1/$user/login"\n\t)\n```\n',Q="## Get Started\n---\nSemua perlu diawali dengan konfigurasi. Untuk konfigurasi package di bagian front-end website memerlukan:\n - Socket.io\n - Laravel Echo\n - Axios\n\nUntuk dibagian front-end mobile masih perlu di bicarakan dengan tim.\n",z={sidebar:[{label:"Get Started",command:function(){oe.push("/docs")}},{label:"Authentication",items:[{label:"Mobile",to:"/docs/auth/mobile"},{label:"Website",to:"/docs/auth/website"}]}],key:{auth:{mobile:{docs:q},website:{docs:F}},init:{docs:Q}}};function K(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("PanelMenu");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{model:n.models},null,8,["model"])}var X={props:{models:[Object]}};X.render=K;var Y=X,Z={components:{SidebarDocs:Y},setup:function(){console.log("JSON:",z);var e=Object(o["inject"])("selectedDocs"),t=Object(o["reactive"])(z),n=Object(o["computed"])((function(){if(e.value.includes(".")){var n=e.value.split(".",2);return t.key[n[0]][n[1]].docs}return console.log(t.key[e.value].docs),t.key[e.value].docs}));return{documents:t,source:n}}};n("4b88");Z.render=$,Z.__scopeId="data-v-27b9b97c";var ee=Z,te=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/docs",name:"Docs",component:ee,children:[{path:":category1",name:"Docs",component:ee,children:[{path:":category2",component:ee}]}]}],ne=Object(h["a"])({history:Object(h["b"])("/lide-api-docs/"),routes:te}),oe=ne,ce=n("9319"),ae=n("f03e"),re=n.n(ae),ie=n("a344"),le=(n("642c"),n("e1ae"),n("4121"),n("bddf"),n("b164"),n("bb57")),de=n("0100"),se=n("427b"),ue=Object(o["createApp"])(V);ue.component("Button",le["a"]),ue.component("Dropdown",de["a"]),ue.component("Sidebar",se["a"]),ue.component("PanelMenu",ie["a"]),ue.use(re.a),ue.use(oe),ue.use(ce["a"],{ripple:!0}),ue.mount("#app")},"5abe":function(e,t,n){"use strict";n("b7fc")},"84d3":function(e,t,n){},"8c57":function(e,t,n){"use strict";n("aeb4")},a005:function(e,t,n){},aeb4:function(e,t,n){},b7fc:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.32ed4183.png"},e2ac:function(e,t,n){"use strict";n("84d3")}});
//# sourceMappingURL=app.7de6c233.js.map