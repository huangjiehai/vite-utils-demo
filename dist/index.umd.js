(function(i,o){typeof exports=="object"&&typeof module!="undefined"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(i=typeof globalThis!="undefined"?globalThis:i||self,o(i.cbutils={}))})(this,function(i){"use strict";function o(e){for(var t=document.cookie.split("; "),n=0;n<t.length;n++){var u=t[n].split("=");if(u[0]==e)return u[1]}return""}function l(e){const{key:t,value:n,time:u=365,options:r={domain:window.location.hostname,path:"/"}}=e;let s=new Date;s.setDate(s.getDate()+u),document.cookie=t+"="+n+";domain="+r.domain+";path="+r.path+";expires="+s}function A(e){l({key:e,value:"",time:-1})}function a(e,t){if(e==""&&typeof e!="string")return;const n=(document.location.search.match(new RegExp("(?:^\\?|&)"+e+"=(.*?)(?=&|$)"))||["",null])[1];return t&&n!==null?decodeURIComponent(n):n}function c(){const e=a("platform")||o("platform");return e==="app_ios"||e==="app_android"}function f(){return!!window.navigator.userAgent.match(/Android/i)}function d(){return!!window.navigator.userAgent.match(/iPhone|iPod|iPad/i)}function h(){return window.__wxjs_environment==="miniprogram"}const p=e=>Object.prototype.toString.call(e),w=e=>typeof e=="string",g=e=>p(e)==="[object Object]";function m(){const e=[],t="0123456789abcdef";for(let n=0;n<36;n++)e[n]=t.substr(Math.floor(Math.random()*16),1);return e[14]="4",e[19]=t.substr(e[19]&3|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function E(e,t){if(t=t||a("clientVersion")||o("clientVersion"),!t||!e||t==e)return!0;const n=e.split("."),u=t.split(".");for(var r=0;r<n.length;r++){if(parseInt(u[r])>parseInt(n[r]))return!0;if(parseInt(u[r])<parseInt(n[r]))return!1}return!1}function P(e){const{eventId:t,eventType:n,source:u,extra:r}=e;if(!t)throw new Error("eventId\u4E0D\u5141\u8BB8\u4E3A\u7A7A");let s;return c()?s=a("distinct_id")||o("distinct_id")||"":s=o("distinct_id")||m(),s&&l({key:"distinct_id",value:s,time:5}),{model:"unknown",ds:window.screen.width*window.devicePixelRatio+"*"+window.screen.height*window.devicePixelRatio,loc:"",event_type:n||1,etcos:d()?2:1,version:a("clientVersion")||o("clientVersion"),token:a("token")||o("token"),url:location.href,event_name:t,ua:navigator.userAgent,distinct_id:s,nfc_type:"",source:u||(c()?3:4),extra:JSON.stringify(r||"")}}function v(e){let t="";for(let n in e)e[n]!==null&&e[n]!==""&&(t+=`||${n}==${e[n]}`);return t.substring(2)||"-1"}function b(e,t){let n;if(g(t))n=v(t);else if(w(t))n=t;else{console.warn("\u53C2\u6570\u683C\u5F0F\u4E0D\u6B63\u786E");return}if(!c()){console.warn("\u975EAPP\u73AF\u5883");return}f()?window.JavaScriptHelper?(console.log("\u6267\u884C\u5B89\u5353\u6307\u4EE4:"+e,n),window.JavaScriptHelper.sendCommand(e,n)):console.warn("\u975EAPP\u73AF\u5883\u6267\u884C\u5B89\u5353\u6307\u4EE4"):d()?window.webkit?(console.log("\u6267\u884CIOS3.2\u6307\u4EE4:"+e,n),window.webkit.messageHandlers.sendCommand.postMessage(`${e}:${n}`)):(console.log("\u6267\u884CIOS\u6307\u4EE4:"+e,n),setTimeout(()=>{window.location=e+":"+n},500)):console.warn("\u975EAPP\u73AF\u5883\u6267\u884C\u6307\u4EE4")}i.compareVersion=E,i.createUUID=m,i.getCookie=o,i.getMonitorParams=P,i.getUrlParams=a,i.goToApp=b,i.isAndroid=f,i.isAppWebView=c,i.isIos=d,i.isObject=g,i.isString=w,i.isWechatMiniApp=h,i.jsonToAppParams=v,i.removeCookie=A,i.setCookie=l,i.toString=p,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
