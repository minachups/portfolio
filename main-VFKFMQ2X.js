import{a as Z,b as G}from"./chunk-YB4BGUJM.js";import{A as R,B as T,C as H,D as _,E as k,F as z,G as E,a as g,b as f,c as u,e as s,f as F,g as c,h as C,i as S,j as m,k as e,l as o,m as a,o as i,p as d,q as y,r as h,s as A,t as D,u as L,v as I,w as N,y as j,z as B}from"./chunk-B4CS25VR.js";var q=()=>["/pages/about"],W=t=>({"active-about":t}),Y=()=>["/pages/projects"],K=t=>({"active-projects":t}),Q=()=>["/pages/contact"],$=t=>({"active-contact":t}),v=class t{constructor(r,n){this.route=r;this.router=n}content=[{title:"About",content:"Get to know me a bit more"},{title:"Projects",content:"A gallery of all my projects"},{title:"Contact me",content:"Get in touch"}];isActivePage(r){return this.router.url===r}ngOnInit(){this.router.url.startsWith("/pages")&&console.log("Nous sommes dans l'\xE9cran de gestion des utilisateurs.")}static \u0275fac=function(n){return new(n||t)(F(H),F(k))};static \u0275cmp=c({type:t,selectors:[["app-footer"]],standalone:!1,decls:26,vars:15,consts:[[1,"footer","flex","row"],[1,"card_container","flex","row"],[1,"card",3,"routerLink","ngClass"],["width","250","height","56","viewBox","0 0 289 56","fill","none","xmlns","http://www.w3.org/2000/svg"],["opacity","0.7","fill-rule","evenodd","clip-rule","evenodd","d","M228.989 0L227.796 2.75364L237.894 25.0264L257.191 25.5047L266.514 3.98449L264.707 0H228.989ZM228.013 0L226.772 2.86392L237.307 26.1009L257.69 26.606L267.538 3.87422L265.781 0H288.109V4.25387L269.77 4.25387L259.235 27.4908L269.77 50.7278H288.109V55.8845H266.288L268.054 51.9893L257.519 28.7523H236.449L225.914 51.9893L227.68 55.8845H0V0H228.013ZM265.303 55.8845H228.754L226.944 51.8911L236.942 29.8388L256.937 29.8388L267.024 52.0876L265.303 55.8845ZM288.109 5.34033V49.6414H270.352L260.265 27.3926L270.263 5.34033L288.109 5.34033Z","fill","#2B2627"],["x","60","y","50%","fill","white","font-size","16","text-anchor","middle","dominant-baseline","middle",1,"bigs","vl","uppcase","card_title"],["x","85","y","50%","fill","white","font-size","16","text-anchor","middle","dominant-baseline","middle",1,"bigs","vl","uppcase","card_title"],["x","100","y","50%","fill","white","font-size","16","text-anchor","middle","dominant-baseline","middle",1,"bigs","vl","uppcase","card_title"],[2,"margin-left","15em"],["src","assets/icons/blabla.svg",1,"footer_img"]],template:function(n,l){n&1&&(e(0,"footer")(1,"div",0)(2,"div",1)(3,"div",2),f(),e(4,"svg",3),a(5,"path",4),e(6,"text",5),i(7," About "),o()(),u(),e(8,"p"),i(9,"get to know me a bit more."),o()(),e(10,"div",2),f(),e(11,"svg",3),a(12,"path",4),e(13,"text",6),i(14," Projects "),o()(),u(),e(15,"p"),i(16,"A gallery of all my projects."),o()(),e(17,"div",2),f(),e(18,"svg",3),a(19,"path",4),e(20,"text",7),i(21," Contact me "),o()(),u(),e(22,"p"),i(23,"get in touch."),o()()(),e(24,"div",8),a(25,"img",9),o()()()),n&2&&(s(3),m("routerLink",y(6,q))("ngClass",h(7,W,l.isActivePage("/pages/about"))),s(7),m("routerLink",y(9,Y))("ngClass",h(10,K,l.isActivePage("/pages/projects"))),s(7),m("routerLink",y(12,Q))("ngClass",h(13,$,l.isActivePage("/pages/contact"))))},dependencies:[L,z],styles:["footer[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;z-index:1;margin-left:20%;margin-bottom:2em;display:inline-block}.card_title[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:743}.card_container[_ngcontent-%COMP%]{column-gap:1em;margin-left:3em}.card[_ngcontent-%COMP%]{border-left:5px solid #2B2627;cursor:pointer}.card[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--primary-color)}.footer_img[_ngcontent-%COMP%]{width:7em}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:2em;margin-left:1.5em;margin-bottom:1.8em;font-size:.8em;font-family:var(--font-family-ice);font-weight:400}.card.active-about[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--primary-color)}.card.active-projects[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--primary-color)}.card.active-contact[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--primary-color)}"]})};var M=class t{date=new Date;ngOnInit(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=c({type:t,selectors:[["app-topbar"]],standalone:!1,decls:18,vars:4,consts:[[1,"gradient"],[1,"flex","row","header_container"],[1,"flex","row"],[1,"neo-gray"]],template:function(n,l){n&1&&(e(0,"header"),a(1,"div",0),e(2,"div",1)(3,"ul",2)(4,"li")(5,"p"),i(6,"Security Test successed"),o()(),e(7,"li")(8,"p")(9,"span",3),i(10,"Attacks stoppped :"),o(),i(11," 61"),o()(),e(12,"li")(13,"p")(14,"span",3),i(15," Local time : "),o(),i(16),A(17,"date"),o()()()()()),n&2&&(s(16),d(D(17,1,l.date,"shortTime")))},dependencies:[N],styles:["header[_ngcontent-%COMP%]{margin-left:30%;position:fixed;top:0;right:0;left:0;z-index:1002;transition:all .1s ease-out}.gradient[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:150px;height:150px;background:linear-gradient(242.06deg,#e84a4a,#0000 33.64%);z-index:10}.header_container[_ngcontent-%COMP%]{justify-content:flex-end}ul[_ngcontent-%COMP%]{margin-top:1.5em;margin-right:2em;column-gap:3em}li[_ngcontent-%COMP%]{font-family:var(--font-family-ice)}"]})};function et(t,r){if(t&1&&(e(0,"div")(1,"p",20),i(2),o(),e(3,"p",21),i(4),o()()),t&2){let n=r.$implicit;s(2),d(n.title),s(2),d(n.content)}}var x=class t{content=[{title:"NAME",content:"aminata BENSA\xCFD"},{title:"Occupation",content:"ETHICAL CYBERSECURITY STUDENT"},{title:"school",content:"HETIC, MONTREUIL (FRANCE)"}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=c({type:t,selectors:[["app-right-sidebar"]],standalone:!1,decls:31,vars:1,consts:[[1,"sidebar"],[1,"title_container","flex","row"],["src","/assets/icons/add.svg"],[1,"bigs","ls",2,"margin-left","1em","margin-top","0.4em"],[1,"content_container"],["src","/assets/images/me.png","alt","Image de moi",1,"me_img"],[4,"ngFor","ngForOf"],[1,"readytowork_container"],[1,"ice","sm","mfw","text_overlay"],["src","/assets/images/rtw.png","alt","image de pret \xE0 travailler"],[1,"ice","sm","mfw"],[1,"flex","row"],["src","/assets/images/open_co.png",1,"connection_img",2,"height","2em"],["href","https://www.linkedin.com/in/aminata-bensa%C3%AFd-8a1925333/"],["src","/assets/images/linkedin.png",1,"connection_img",2,"height","2em","cursor","pointer"],["href","https://github.com/minachups/portfolio"],["src","/assets/images/github.png",1,"connection_img",2,"height","2em","cursor","pointer"],[1,"quote_container"],[1,"ice","sm","neo-red"],[1,"ice","sm","quote_text"],[1,"sm","ice","mfw"],[1,"neo-green","bigs","ls","bfw"]],template:function(n,l){n&1&&(e(0,"div",0)(1,"div",1),a(2,"img",2),e(3,"p",3),i(4,"Portfolio"),o()(),e(5,"div",4),a(6,"img",5),S(7,et,5,2,"div",6),e(8,"div",7)(9,"p",8),i(10,"Availability"),o(),a(11,"img",9),o(),e(12,"p",10),i(13,"Professional connection"),o(),e(14,"div",11),a(15,"img",12),e(16,"a",13),a(17,"img",14),o(),e(18,"a",15),a(19,"img",16),o()(),e(20,"div",17)(21,"p",18),i(22,"a quote i appreciate :"),o(),e(23,"p",19),i(24," \u201DWithout privacy,"),a(25,"br"),i(26," there was no point in"),a(27,"br"),i(28," being an individual.\u201D \u2013\xA0 "),a(29,"br"),i(30,"Jonathan Franzen."),o()()()()),n&2&&(s(7),m("ngForOf",l.content))},dependencies:[I],styles:[".sidebar[_ngcontent-%COMP%]{position:fixed;top:0%;left:0;bottom:0;width:30%;height:100%;padding:0 0 97px;z-index:1002;margin-left:20px}p[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.me_img[_ngcontent-%COMP%], .readytowork_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30%}.reseau_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}.quote_container[_ngcontent-%COMP%]{margin-top:200px}.title_container[_ngcontent-%COMP%]{margin-top:.4em;margin-bottom:2em}.content_container[_ngcontent-%COMP%]{margin-left:3em}"]})};var P=class t{layoutType;constructor(){}ngOnInit(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=c({type:t,selectors:[["app-layouts"]],standalone:!1,decls:8,vars:0,consts:[["id","layout-wrapper"],[1,"main_content"],[1,"page-content"],[1,"container-fluid"]],template:function(n,l){n&1&&(e(0,"div",0),a(1,"app-topbar")(2,"app-right-sidebar"),e(3,"div",1)(4,"div",2)(5,"div",3),a(6,"router-outlet"),o()(),a(7,"app-footer"),o()())},dependencies:[_,v,M,x],styles:["#layout-wrapper[_ngcontent-%COMP%], .main-content[_ngcontent-%COMP%]{min-height:100vh}.main-content[_ngcontent-%COMP%]{flex-grow:1;display:inline-block}@media (min-width: 1024.1px){.main-content[_ngcontent-%COMP%]{position:relative}#layout-wrapper[_ngcontent-%COMP%]{max-width:95%;margin:0 auto}[_ngcontent-%COMP%]:scope:is([data-sidebar=dark],[data-sidebar=gradient],[data-sidebar=gradient-2],[data-sidebar=gradient-3],[data-sidebar=gradient-4])   .logo-dark[_ngcontent-%COMP%]{display:inline-block}[_ngcontent-%COMP%]:scope:is([data-sidebar=dark],[data-sidebar=gradient],[data-sidebar=gradient-2],[data-sidebar=gradient-3],[data-sidebar=gradient-4])   .logo-light[_ngcontent-%COMP%]{display:none}}"]})};var ot=[{path:"",loadChildren:()=>import("./chunk-N7Q45FFV.js").then(t=>t.LandingModule)},{path:"pages",component:P,loadChildren:()=>import("./chunk-SJLZUNKM.js").then(t=>t.PagesModule)}],O=class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=g({imports:[E.forRoot(ot),E]})};var w=class t{title="Portfolio";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=c({type:t,selectors:[["app-root"]],standalone:!1,decls:1,vars:0,template:function(n,l){n&1&&a(0,"router-outlet")},dependencies:[_],styles:['@font-face{font-family:Big Shoulders Display;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1_PZJEZG-e9gHhdI4-NBbfd2ys3SjJCx1cw9DuHpM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Big Shoulders Display;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1_PZJEZG-e9gHhdI4-NBbfd2ys3SjJCx1cwtDuHpM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Big Shoulders Display;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/bigshouldersdisplay/v21/fC1_PZJEZG-e9gHhdI4-NBbfd2ys3SjJCx1czNDu.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Iceland;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/iceland/v20/rax9HiuFsdMNOnWPaKtMAQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{background-color:#000;margin:0;min-height:100vh;display:flex;flex-direction:column;grid-template-rows:auto 1fr auto}p[_ngcontent-%COMP%]{color:var(--tertiary-color)}[_ngcontent-%COMP%]:root{--primary-color: #4AE8A1;--second-color: #E84A4A;--tertiary-color: white;--font-size-large: 36px;--font-size-medium: 16px;--font-weight-regular: 400;--font-weight-bold: 700;--font-family-big: "Big Shoulders Display", sans-serif;--font-family-ice: "Iceland", sans-serif}.ms[_ngcontent-%COMP%]{font-size:1.25em}.ls[_ngcontent-%COMP%]{font-size:1.625em}.mfw[_ngcontent-%COMP%]{font-weight:400}.lfw[_ngcontent-%COMP%]{font-weight:700}.neo-green[_ngcontent-%COMP%]{color:var(--primary-color)}.bigs[_ngcontent-%COMP%]{font-family:var(--font-family-big)}.ice[_ngcontent-%COMP%]{font-family:var(--font-family-ice)}.flex[_ngcontent-%COMP%]{display:flex}.column[_ngcontent-%COMP%]{flex-direction:column}.row[_ngcontent-%COMP%]{flex-direction:row}.jc-fs[_ngcontent-%COMP%]{justify-content:flex-start}.jc-fe[_ngcontent-%COMP%]{justify-content:flex-end}.jc-c[_ngcontent-%COMP%]{justify-content:center}.jc-sb[_ngcontent-%COMP%]{justify-content:space-between}.jc-sa[_ngcontent-%COMP%]{justify-content:space-around}.ai-c[_ngcontent-%COMP%]{align-items:center}.uppcase[_ngcontent-%COMP%]{text-transform:uppercase}']})};var U=class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t,bootstrap:[w]});static \u0275inj=g({providers:[T(R())],imports:[B,O,Z,G]})};j().bootstrapModule(U,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
