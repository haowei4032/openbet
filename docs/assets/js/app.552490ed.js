(function(){"use strict";var n={8430:function(n,t,e){var r=e(8935),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[n._v(" "+n._s(n.accounts)+" ")])},u=[],i={data(){return{accounts:null}},components:{},async created(){let n;const t=window.Web3||void 0;window.ethereum&&t&&(await window.ethereum.request({method:"eth_requestAccounts"}).catch((()=>null)),n=new t(window.ethereum),n&&n.eth.getAccounts().then((n=>{this.accounts=n})))}},c=i,f=e(1001),a=(0,f.Z)(c,o,u,!1,null,null,null),s=a.exports;r.Z.config.productionTip=!1,r.Z.config.devtools=r.Z.config.productionTip,new r.Z({render:n=>n(s)}).$mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return n[r](u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,u){if(!r){var i=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],u=n[s][2];for(var c=!0,f=0;f<r.length;f++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](r[f])}))?r.splice(f--,1):(c=!1,u<i&&(i=u));if(c){n.splice(s--,1);var a=o();void 0!==a&&(t=a)}}return t}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[r,o,u]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,u,i=r[0],c=r[1],f=r[2],a=0;if(i.some((function(t){return 0!==n[t]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(f)var s=f(e)}for(t&&t(r);a<i.length;a++)u=i[a],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(s)},r=self["webpackChunkopenbet"]=self["webpackChunkopenbet"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(8430)}));r=e.O(r)})();