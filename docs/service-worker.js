if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const l=e=>n(e,i),c={module:{uri:i},exports:t,require:l};s[i]=Promise.all(o.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.37c058fa.css",revision:null},{url:"css/chunk-vendors.36ee55ff.css",revision:null},{url:"fonts/bootstrap-icons.6fdf98f9.woff2",revision:null},{url:"fonts/bootstrap-icons.dba5e3b7.woff",revision:null},{url:"index.html",revision:"6dc0cf799868c4363e3966994e3fa1d2"},{url:"js/app.f3540307.js",revision:null},{url:"js/chunk-vendors.81ab1b0a.js",revision:null},{url:"manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
