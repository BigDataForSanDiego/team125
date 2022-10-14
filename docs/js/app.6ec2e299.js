(function(){"use strict";var e={5137:function(e,n,i){var o=i(9242),a=i(3396);const t=(0,a._)("div",{class:"w-100 h-100 position-absolute",style:{"z-index":"-1"},id:"particles-js"},null,-1);function r(e,n,i,o,r,c){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a.Wm)(s)],64)}i(5076);var c={name:"App",mounted:function(){particlesJS("particles-js",{retina_detect:!0,particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:["#00ff00","ff0000"]},shape:{type:"circle",stroke:{width:0,color:"#00ff00"},polygon:{nb_sides:5}},opacity:{value:.2,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}}})}},s=i(89);const l=(0,s.Z)(c,[["render",r]]);var p=l,g=i(5431);(0,g.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var m=i(2483),h=i(7139);const d={class:"home h-100"},_={class:"h-100 p-5 d-flex flex-column"},u={class:"description mt-3 p-4 flex-fill text-center"},v={class:"m-3 nav nav-pills justify-content-center"},w={class:"px-1 nav-item"},y=(0,a._)("i",{class:"bi bi-capsule"},null,-1),f={class:"px-1 nav-item"},b=(0,a._)("i",{class:"bi bi-hospital"},null,-1),x={class:"flex-fill"},C={class:"search-input input-group mb-3"},S={key:0,class:"text-center"},D=(0,a._)("br",null,null,-1),k={class:"m-1"},A={key:1,class:"text-center"},z={class:"m-1"},V={class:"text-center"},P={class:"btn",href:"https://github.com/BigDataForSanDiego/team125#2022-big-data-hackathon-proposal-form",role:"button"},O=(0,a._)("a",{class:"btn",href:"https://github.com/BigDataForSanDiego/team125",role:"button"},[(0,a._)("i",{class:"bi bi-github"})],-1);function q(e,n,i,o,t,r){const c=(0,a.up)("Navbar"),s=(0,a.up)("SearchInput");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(c),(0,a._)("div",_,[(0,a._)("i",u,(0,h.zw)(r._i18n("description")),1),(0,a._)("ul",v,[(0,a._)("li",w,[(0,a._)("a",{class:(0,h.C_)(["nav-link",{active:"medicine"==e._category}]),onClick:n[0]||(n[0]=e=>r._setLookingFor("medicine"))},[y,(0,a.Uk)(" "+(0,h.zw)(r._i18n("medicine")),1)],2)]),(0,a._)("li",f,[(0,a._)("a",{class:(0,h.C_)(["nav-link",{active:"services"==e._category}]),onClick:n[1]||(n[1]=e=>r._setLookingFor("services"))},[b,(0,a.Uk)(" "+(0,h.zw)(r._i18n("services")),1)],2)])]),(0,a._)("div",x,[(0,a._)("div",C,[(0,a.Wm)(s,{ref:"searchinput"},null,512),(0,a._)("button",{class:"btn btn-outline-success bg-white",type:"button",onClick:n[2]||(n[2]=(...e)=>r._onCompareClick&&r._onCompareClick(...e))},(0,h.zw)(r._i18n("compare")),1)]),"medicine"==e._category?((0,a.wg)(),(0,a.iD)("div",S,[(0,a.Uk)((0,h.zw)(r._i18n("popular"))+" ",1),D,(0,a._)("div",k,[(0,a._)("button",{type:"button",class:"mx-1 btn btn-outline-primary bg-white btn-sm",onClick:n[3]||(n[3]=n=>r.search(e._category,"omega-3"))}," Omega-3 "),(0,a._)("button",{type:"button",class:"btn btn-outline-primary bg-white btn-sm",onClick:n[4]||(n[4]=n=>r.search(e._category,"riomet"))}," Riomet ")])])):(0,a.kq)("",!0),"services"==e._category?((0,a.wg)(),(0,a.iD)("div",A,[(0,a.Uk)((0,h.zw)(r._i18n("popular"))+" ",1),(0,a._)("div",z,[(0,a._)("button",{type:"button",class:"mx-1 btn btn-outline-primary bg-white btn-sm",onClick:n[5]||(n[5]=n=>r.search(e._category,"covid-19 test"))},(0,h.zw)(r._i18n("covid")),1),(0,a._)("button",{type:"button",class:"btn btn-outline-primary bg-white btn-sm",onClick:n[6]||(n[6]=n=>r.search(e._category,"skin care"))},(0,h.zw)(r._i18n("skin")),1)])])):(0,a.kq)("",!0)]),(0,a._)("p",V,[(0,a._)("a",P,(0,h.zw)(r._i18n("about")),1),O])])])}const R={class:"navbar navbar-light bg-light fixed-top"},W={key:0,class:"container-fluid"},H={class:"input-group"},N=(0,a._)("i",{class:"bi bi-x"},null,-1),$=[N],j={key:1,class:"container-fluid"},U=(0,a._)("a",{class:"navbar-brand",href:"#"},[(0,a._)("img",{src:"img/icons/favicon.svg",alt:"",width:"32",height:"32",class:"d-inline-block align-text-top"}),(0,a._)("span",{class:"text-success"},"Open"),(0,a._)("span",{class:"text-danger"},"Heart")],-1),I={class:"d-flex"},T=(0,a._)("i",{class:"bi bi-search"},null,-1),L=[T],E=["selected"],F=["selected"];function M(e,n,i,o,t,r){const c=(0,a.up)("SearchInput");return(0,a.wg)(),(0,a.iD)("nav",R,[e._searching?((0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",H,[(0,a.Wm)(c,{ref:"searchinput"},null,512),(0,a._)("button",{class:"btn btn-outline-success",type:"button",id:"Compare",onClick:n[0]||(n[0]=(...e)=>r._onCompareClick&&r._onCompareClick(...e))},(0,h.zw)(r._i18n("compare")),1),(0,a._)("button",{class:"btn btn-outline-danger",type:"button",id:"Cancel",onClick:n[1]||(n[1]=(...e)=>r.stopSearch&&r.stopSearch(...e))},$)])])):((0,a.wg)(),(0,a.iD)("div",j,[U,(0,a._)("form",I,[i.search?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"px-3 mx-1 btn rounded-circle",onClick:n[2]||(n[2]=(...e)=>r.startSearch&&r.startSearch(...e))},L)):(0,a.kq)("",!0),(0,a._)("select",{class:"form-select",id:"language",onChange:n[3]||(n[3]=e=>r._onLanguageChange(e.target.value))},[(0,a._)("option",{value:"english",selected:"english"==e._session.language}," English ",8,E),(0,a._)("option",{value:"spanish",selected:"spanish"==e._session.language}," Español ",8,F)],32)])]))])}const Z=["placeholder"];function B(e,n,i,o,t,r){return(0,a.wg)(),(0,a.iD)("input",{type:"text",class:"form-control",placeholder:r._i18n("search"),onInput:n[0]||(n[0]=e=>r._onSearchInput(e.target.value))},null,40,Z)}i(7658);var J=new Y;function Y(){this.name="OpenHeart",this.version="0.0.0",this.language="english",this.set_language=function(e){this.language=e,this.save_session()},this.get_session_name=function(){return`${this.name}Session`},this.save_session=function(){window.localStorage.setItem(this.get_session_name(),JSON.stringify(this))},this.load_session=function(){let e=window.localStorage.getItem(this.get_session_name());if(e){if(e=JSON.parse(e),e.version.localeCompare(this.version))return;this.set_language(e.language)}},this.load_session(),this.medicines={atorvastatin:{name_id:"atorvastatin",name:"atorvastatin (generic Lipitor)",description:"Atorvastatin (Lipitor) is an inexpensive drug that lowers levels of cholesterol and triglycerides in the blood. Atorvastatin may also reduce the risk of heart attack or stroke in patients with risk factors for heart disease. This drug is more popular than comparable drugs. As of 2011, it is available in generic and brand versions. Generic atorvastatin is covered by most Medicare and insurance plans, but some pharmacy coupons or cash prices may be lower.",product_image:"https://www.grxstatic.com/d4fuqqd5l3dbz/products/cwf_tms/DrugItem_15029.PNG?width=256&quality=75",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:4},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:6.6},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:30.26},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:14.99},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:7.95}]},amoxicillin:{name_id:"amoxicillin",name:"amoxicillin",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},alprazolam:{name_id:"alprazolam (generic Xanax)",name:"alprazolam",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},"amphetamine-salt":{name_id:"amphetamine-salt-combo",name:"amphetamine salt combo (generic Adderall)",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},amlodipine:{name_id:"amlodipine",name:"amlodipine (generic Norvasc)",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},avc:{name_id:"avc",name:"Avc",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},ayr:{name_id:"ayr",name:"Ayr",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},azo:{name_id:"azo",name:"Azo",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},omeprazole:{name_id:"omeprazole",name:"omeprazole (generic Prilosec)",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},"omega-3":{name_id:"omega-3-acid-ethyl-esters",name:"omega-3-acid ethyl esters (generic Lovaza)",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:56.25},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:65},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:62.8},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:28.99},{id:5,vendor_name:"Target",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/6.png",price:62.8}]},"omeprazole-otc":{name_id:"omeprazole-otc",name:"omeprazole OTC (generic Prilosec OTC)",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},"omeprazole-sodium":{name_id:"omeprazole-sodium-bicarbonate",name:"omeprazole / sodium bicarbonate (generic Zegerid)",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},"omeclamox-pak":{name_id:"omeclamox-pak",name:"Omeclamox-Pak",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},onmel:{name_id:"onmel",name:"Onmel",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]},riomet:{name_id:"riomet",name:"Riomet (metformin)",description:"",product_image:"",vendors:[{id:1,vendor_name:"Walmart",location:"San Diego, CA",shipping:!0,telephone:"+1 760 951-5005",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/1.png",price:272.19},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:122.65},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:254.02},{id:5,vendor_name:"Albertsons",location:"San Diego, CA",shipping:!1,telephone:"+1 760-242-3660",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/85327.png",price:199.63}]},zometa:{name_id:"zometa",name:"Zometa (zoledronic acid)",description:"",product_image:"",vendors:[{id:1,vendor_name:"DiRx",location:null,shipping:!0,telephone:"877-367-3479",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/113468.png",price:0},{id:2,vendor_name:"HealthWarehouse",location:null,shipping:!0,telephone:"1-800-748-7001",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31374.png",price:0},{id:3,vendor_name:"CVS Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-425-1910",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0},{id:4,vendor_name:"Costco",location:"San Diego, CA",shipping:!1,telephone:" +1 858-270-6920",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/31240.png",price:0},{id:5,vendor_name:"Vons Pharmacy",location:"San Diego, CA",shipping:!1,telephone:"+1 619-428-3311",vendor_image:"https://www.grxstatic.com/pharmacy_logos/circle_icon/2.png",price:0}]}}}var G={name:"SearchInput",data:()=>({value:"",_searching:!1,_session:J}),methods:{search:function(e,n){this.$router.push({path:"/listing",query:{category:e,search:n}})},_onSearchInput:function(e){this.value=e},_i18n:function(e){const n={english:{search:"Search"},spanish:{search:"Buscar"}};return n[this._session.language][e]}}};const X=(0,s.Z)(G,[["render",B]]);var K=X,Q={name:"Navbar",components:{SearchInput:K},props:{search:{default:!0}},data:()=>({_searching:!1,_session:J}),methods:{startSearch:function(){this._searching=!0},stopSearch:function(){this._searching=!1},_onCompareClick:function(){this.$refs.searchinput.search(this.$route.query.category,this.$refs.searchinput.value)},_onLanguageChange:function(e){J.set_language(e),location.reload()},_i18n:function(e){const n={english:{compare:"Compare"},spanish:{compare:"Comparar"}};return n[this._session.language][e]}}};const ee=(0,s.Z)(Q,[["render",M]]);var ne=ee,ie={name:"HomeView",components:{Navbar:ne,SearchInput:K},data:function(){return{_category:"medicine",_session:J}},methods:{search:function(e,n){this.$refs.searchinput.search(e,n)},_setLookingFor:function(e){this._category=e},_onCompareClick:function(){this.search(this._category,this.$refs.searchinput.value)},_i18n:function(e){const n={english:{description:"A Progressive Web Application enabling individuals to compare cost of medication and medical services;while analyzing trends to improve decision making for the consumer and provider.",medicine:"Medicine",services:"Services",compare:"Compare",about:"ABOUT US",popular:"Popular Searches:",covid:"COVID-19 Test",skin:"Skin Care"},spanish:{description:"Una aplicación web progresiva que permite a las personas comparar el costo de los medicamentos y los servicios médicos; mientras analiza tendencias para mejorar la toma de decisiones para el consumidor y el proveedor.",medicine:"Medicamento",services:"Servicios",compare:"Comparar",about:"SOBRE NOSOTROS",popular:"Búsquedas Populares:",covid:"Prueba COVID-19",skin:"Skin Care"}};return n[this._session.language][e]}}};const oe=(0,s.Z)(ie,[["render",q]]);var ae=oe;const te={class:"home h-100"},re={class:"h-100 p-5 d-flex flex-column"},ce={class:"pt-4 d-flex"},se={class:"flex-fill mt-4"},le={class:"text-capitalize"},pe={class:"m-auto"},ge={value:"price"},me={value:"shipping"},he=(0,a._)("hr",null,null,-1),de={class:"flex-fill"},_e={key:0,class:"m-3 text-center"},ue={class:"spinner-border",style:{width:"128px",height:"128px"}},ve={class:"visually-hidden"},we={key:1},ye={key:0,class:"text-center"},fe=(0,a._)("i",{class:"bi bi-emoji-frown",style:{"font-size":"128px"}},null,-1),be={key:1},xe={class:"card mb-3"},Ce={class:"d-flex mx-3"},Se={class:"my-auto"},De=["src"],ke={class:"flex-fill"},Ae={class:"card-body"},ze={class:"vendor-name"},Ve={key:0,class:"bi bi-envelope-check"},Pe={class:"card-text"},Oe={class:"card-text"},qe={class:"text-muted"},Re={key:0},We=(0,a._)("i",{class:"bi bi-geo-alt"},null,-1),He={class:"my-auto text-center"},Ne={class:"pb-2"},$e=(0,a._)("i",{class:"bi bi-currency-dollar"},null,-1),je=["onClick"];function Ue(e,n,i,o,t,r){const c=(0,a.up)("Navbar");return(0,a.wg)(),(0,a.iD)("div",te,[(0,a.Wm)(c),(0,a._)("div",re,[(0,a._)("div",ce,[(0,a._)("div",se,[(0,a._)("h3",le,(0,h.zw)(this.$route.query.search),1)]),(0,a._)("div",pe,[(0,a.Uk)((0,h.zw)(r._i18n("sort"))+": ",1),(0,a._)("select",{class:"form-select",style:{"max-width":"192px"},onChange:n[0]||(n[0]=e=>r._onSortChange(e.target.value))},[(0,a._)("option",ge,(0,h.zw)(r._i18n("lowest")),1),(0,a._)("option",me,(0,h.zw)(r._i18n("home")),1)],32)])]),he,(0,a._)("div",de,[e._loading?((0,a.wg)(),(0,a.iD)("div",_e,[(0,a._)("div",ue,[(0,a._)("span",ve,(0,h.zw)(r._i18n("loading")),1)])])):((0,a.wg)(),(0,a.iD)("div",we,[null===e.result?((0,a.wg)(),(0,a.iD)("div",ye,[fe,(0,a._)("h1",null,(0,h.zw)(r._i18n("sorry")),1),(0,a._)("h2",null,(0,h.zw)(r._i18n("try")),1)])):((0,a.wg)(),(0,a.iD)("div",be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.sortedVendors,(e=>((0,a.wg)(),(0,a.iD)("div",xe,[(0,a._)("div",Ce,[(0,a._)("div",Se,[""!=e.vendor_image?((0,a.wg)(),(0,a.iD)("img",{key:0,src:e.vendor_image,class:"img-fluid rounded-start",alt:"",width:"32",height:"32",style:{"min-width":"32px"}},null,8,De)):(0,a.kq)("",!0)]),(0,a._)("div",ke,[(0,a._)("div",Ae,[(0,a._)("b",ze,[(0,a.Uk)((0,h.zw)(e.vendor_name)+" ",1),e.shipping?((0,a.wg)(),(0,a.iD)("i",Ve)):(0,a.kq)("",!0)]),(0,a._)("p",Pe,(0,h.zw)(e.description),1),(0,a._)("p",Oe,[(0,a._)("small",qe,[""!=e.location?((0,a.wg)(),(0,a.iD)("span",Re,[We,(0,a.Uk)(" "+(0,h.zw)(e.location||"San Diego, CA"),1)])):(0,a.kq)("",!0)])])])]),(0,a._)("div",He,[(0,a._)("div",Ne,[$e,(0,a.Uk)((0,h.zw)(e.price),1)]),(0,a._)("button",{type:"button",class:"btn btn-primary",style:{"min-width":"95px"},onClick:n=>r._onResultClick(e.vendor_name)},(0,h.zw)(r._i18n("more")),9,je)])])])))),256))]))]))])])])}var Ie={name:"ListingView",components:{Navbar:ne},data:function(){return{result:null,_loading:!0,_sorting_by:"price",_session:J}},computed:{sortedVendors:function(){return this.result.vendors.sort(((e,n)=>"price"==this._sorting_by?e.price>n.price:"shipping"==this._sorting_by?n.shipping&&e.price>n.price:void 0)),this.result.vendors}},mounted:function(){if(this.$route.query.search in this._session.medicines){const e=this.$route.query.search;this.result=this._session.medicines[e]}setTimeout((()=>{this._loading=!1}),1e3)},methods:{_onSortChange:function(e){this._sorting_by=e},_onResultClick:function(e){this.$router.push({path:"/product",query:{category:this.$route.query.category,search:this.$route.query.search,vendor:e}})},_i18n:function(e){const n={english:{sort:"Sort by",lowest:"Lowest price",home:"Home delivery",sorry:"Sorry, nothing found...",try:"try searching for another name or variant",more:"See more",loading:"Loading..."},spanish:{sort:"Ordenar por",lowest:"Precio bajo",home:"Entrega a domicilio",sorry:"Lo siento, no se encontró nada...",try:"intente buscar otro nombre o variante",more:"Ver más",loading:"Cargando..."}};return n[this._session.language][e]}}};const Te=(0,s.Z)(Ie,[["render",Ue]]);var Le=Te;const Ee={class:"home h-100"},Fe={class:"h-100 p-5 d-flex flex-column"},Me={key:0,class:"text-center"},Ze=(0,a._)("i",{class:"bi bi-emoji-frown",style:{"font-size":"128px"}},null,-1),Be={key:1,class:""},Je={class:"h-25 my-5 m-auto p-2 d-flex border bg-white text-center info"},Ye={class:"p-2 bg-white flex-fill"},Ge={class:"text-muted"},Xe={class:"p-3 text-center"},Ke=["src"],Qe=(0,a._)("i",{class:"bi bi-currency-dollar"},null,-1),en={key:0},nn=(0,a._)("i",{class:"bi bi-geo-alt"},null,-1),on=(0,a._)("br",null,null,-1),an={key:1},tn=(0,a._)("i",{class:"bi bi-telephone"},null,-1),rn=(0,a._)("br",null,null,-1),cn=["href"],sn=(0,a._)("i",{class:"bi bi-geo"},null,-1);function ln(e,n,i,o,t,r){const c=(0,a.up)("Navbar");return(0,a.wg)(),(0,a.iD)("div",Ee,[(0,a.Wm)(c),(0,a._)("div",Fe,[null===e.result?((0,a.wg)(),(0,a.iD)("div",Me,[Ze,(0,a._)("h1",null,(0,h.zw)(r._i18n("sorry")),1),(0,a._)("h2",null,(0,h.zw)(r._i18n("try")),1)])):((0,a.wg)(),(0,a.iD)("div",Be,[(0,a._)("div",Je,[(0,a._)("div",Ye,[(0,a._)("h5",null,(0,h.zw)(this.$route.query.search),1),(0,a._)("p",null,[(0,a._)("small",Ge,(0,h.zw)(e.result.description||e.result.name),1)])])]),(0,a._)("div",Xe,[(0,a._)("img",{src:r.selectedVendor.vendor_image,class:"rounded mx-auto d-block rounded-circle",alt:"",width:"192",height:"192"},null,8,Ke),(0,a._)("h1",null,(0,h.zw)(r.selectedVendor.vendor_name),1),(0,a._)("h3",null,[Qe,(0,a.Uk)((0,h.zw)(r.selectedVendor.price),1)]),""!=r.selectedVendor.location?((0,a.wg)(),(0,a.iD)("div",en,[nn,(0,a.Uk)(" "+(0,h.zw)(r.selectedVendor.location||"San Diego, CA"),1)])):(0,a.kq)("",!0),on,""!=r.selectedVendor.telephone?((0,a.wg)(),(0,a.iD)("div",an,[tn,(0,a.Uk)(" "+(0,h.zw)(r.selectedVendor.telephone),1)])):(0,a.kq)("",!0),rn,null!=r.selectedVendor.location?((0,a.wg)(),(0,a.iD)("a",{key:2,href:"http://maps.google.com/?q="+r.selectedVendor.vendor_name,type:"button",class:"btn btn-primary"},[sn,(0,a.Uk)(" "+(0,h.zw)(r._i18n("find")),1)],8,cn)):(0,a.kq)("",!0)])]))])])}var pn={name:"ProductView",components:{Navbar:ne},data:function(){return{result:null,_loading:!0,_session:J}},computed:{selectedVendor:function(){if(0==this.result.vendors.length)return{};for(const e of this.result.vendors)if(e.vendor_name==this.$route.query.vendor)return e;return this.result.vendors[0]}},mounted:function(){if(this.$route.query.search in this._session.medicines){const e=this.$route.query.search;this.result=this._session.medicines[e]}setTimeout((()=>{this._loading=!1}),1e3)},methods:{_i18n:function(e){const n={english:{find:"FIND NEAR ME",sorry:"Sorry, nothing found...",try:"try searching for another name or variant"},spanish:{find:"ENCUENTRA CERCA DE MÍ",sorry:"Lo siento, no se encontró nada...",try:"intente buscar otro nombre o variante"}};return n[this._session.language][e]}}};const gn=(0,s.Z)(pn,[["render",ln]]);var mn=gn;const hn=[{path:"/",name:"home",component:ae},{path:"/listing",name:"listing",component:Le},{path:"/product",name:"product",component:mn}],dn=(0,m.p7)({history:(0,m.r5)(),routes:hn});var _n=dn;i(2166);window.Session=J,(0,o.ri)(p).use(_n).mount("#app")}},n={};function i(o){var a=n[o];if(void 0!==a)return a.exports;var t=n[o]={exports:{}};return e[o](t,t.exports,i),t.exports}i.m=e,function(){var e=[];i.O=function(n,o,a,t){if(!o){var r=1/0;for(p=0;p<e.length;p++){o=e[p][0],a=e[p][1],t=e[p][2];for(var c=!0,s=0;s<o.length;s++)(!1&t||r>=t)&&Object.keys(i.O).every((function(e){return i.O[e](o[s])}))?o.splice(s--,1):(c=!1,t<r&&(r=t));if(c){e.splice(p--,1);var l=a();void 0!==l&&(n=l)}}return n}t=t||0;for(var p=e.length;p>0&&e[p-1][2]>t;p--)e[p]=e[p-1];e[p]=[o,a,t]}}(),function(){i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,{a:n}),n}}(),function(){i.d=function(e,n){for(var o in n)i.o(n,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};i.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,t,r=o[0],c=o[1],s=o[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(a in c)i.o(c,a)&&(i.m[a]=c[a]);if(s)var p=s(i)}for(n&&n(o);l<r.length;l++)t=r[l],i.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return i.O(p)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(5137)}));o=i.O(o)})();
//# sourceMappingURL=app.6ec2e299.js.map