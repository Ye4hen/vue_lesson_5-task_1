(function(){"use strict";var t={856:function(t,n,r){var a=r(963),o=r(252);const c={class:"main-container"};function i(t,n,r,a,i,e){const s=(0,o.up)("ad-panel");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(s,{productsListData:i.raspberryList},null,8,["productsListData"])])}const e={class:"secondary-container"};function s(t,n,r,a,c,i){const s=(0,o.up)("ad-product");return(0,o.wg)(),(0,o.iD)("div",e,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.productsListData,(t=>((0,o.wg)(),(0,o.j4)(s,{key:t.id,productData:t},null,8,["productData"])))),128))])}var p=r(577);const u=["href"],d={class:"img-container"},l=["src"],f={class:"middle-container"},m=["href"],g=["src"],v={class:"company-title"},h={key:0,class:"in-stock"},y={class:"text"};function b(t,n,r,a,c,i){return(0,o.wg)(),(0,o.iD)("a",{href:r.productData.productLink,class:"container"},[(0,o._)("div",d,[(0,o._)("img",{src:r.productData.imgSrc,class:"img"},null,8,l)]),(0,o._)("div",f,[(0,o._)("a",{href:r.productData.companyLink,class:"company-info"},[(0,o._)("div",null,[(0,o._)("img",{src:r.productData.logo,class:"company-logo"},null,8,g)]),(0,o._)("h6",v,(0,p.zw)(r.productData.companyTitle),1)],8,m),r.productData.inStock?((0,o.wg)(),(0,o.iD)("div",h,"В наявності")):(0,o.kq)("",!0)]),(0,o._)("div",y,[(0,o._)("p",null,(0,p.zw)(r.productData.description),1)])],8,u)}var A={name:"AdProduct",props:{productData:{type:Object,default:()=>({})}}},k=r(744);const w=(0,k.Z)(A,[["render",b],["__scopeId","data-v-4bf5f27d"]]);var _=w,D={name:"AdPanel",components:{AdProduct:_},props:{productsListData:{type:Array,default:()=>[]}}};const L=(0,k.Z)(D,[["render",s],["__scopeId","data-v-63d50e66"]]);var O=L;const F=[{id:1,imgSrc:"https://florium.ua/media/catalog/product/cache/2/file/9df78eab33525d08d6e5fb8d27136e95/r/a/raspberry-erika.jpg",logo:"https://encrypted-tbn2.gstatic.com/faviconV2?url=https://florium.ua&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",companyTitle:"Флориум",description:"Малина Эріка🌷",inStock:!0,productLink:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fgradinamax.com.ua%2Fru%2Fproduct%2Fmalina-gerakl&psig=AOvVaw1ygEd5MHZKsmLIs52RZt2G&ust=1697948659584000&source=images&cd=vfe&ved=0CBIQjhxqFwoTCNDA8eqlhoIDFQAAAAAdAAAAABAE",companyLink:"https://florium.ua/"},{id:2,imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqrvQX4YIdG58h3GOd7oGb88POKPrL9sT0A&usqp=CAU",logo:"https://encrypted-tbn2.gstatic.com/faviconV2?url=https://fozzyshop.ua&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",companyTitle:"FOZZY",description:"Малина свіжа",inStock:!1,productLink:"https://varus.ua/malina-vesov",companyLink:"https://fozzyshop.ua/"},{id:3,imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhiCYNxMvNPjAKiKmk4m9gcpv6CFvKe9dhw&usqp=CAU",logo:"https://encrypted-tbn2.gstatic.com/faviconV2?url=https://aif.ru&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",companyTitle:"GradinaMax",description:"Малина звичайна",inStock:!0,productLink:"https://gradinamax.com.ua/ua/product/malina-gigant-rubinovyy",companyLink:"https://gradinamax.com.ua/"}];var E={name:"App",components:{AdPanel:O},data(){return{raspberryList:F}}};const I=(0,k.Z)(E,[["render",i]]);var P=I;(0,a.ri)(P).mount("#app")}},n={};function r(a){var o=n[a];if(void 0!==o)return o.exports;var c=n[a]={exports:{}};return t[a](c,c.exports,r),c.exports}r.m=t,function(){var t=[];r.O=function(n,a,o,c){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],c=t[u][2];for(var e=!0,s=0;s<a.length;s++)(!1&c||i>=c)&&Object.keys(r.O).every((function(t){return r.O[t](a[s])}))?a.splice(s--,1):(e=!1,c<i&&(i=c));if(e){t.splice(u--,1);var p=o();void 0!==p&&(n=p)}}return n}c=c||0;for(var u=t.length;u>0&&t[u-1][2]>c;u--)t[u]=t[u-1];t[u]=[a,o,c]}}(),function(){r.d=function(t,n){for(var a in n)r.o(n,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,a){var o,c,i=a[0],e=a[1],s=a[2],p=0;if(i.some((function(n){return 0!==t[n]}))){for(o in e)r.o(e,o)&&(r.m[o]=e[o]);if(s)var u=s(r)}for(n&&n(a);p<i.length;p++)c=i[p],r.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return r.O(u)},a=self["webpackChunk_1_google_favorite"]=self["webpackChunk_1_google_favorite"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(856)}));a=r.O(a)})();
//# sourceMappingURL=app.2944343a.js.map