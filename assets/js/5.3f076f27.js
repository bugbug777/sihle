(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{284:function(t,e,r){},285:function(t,e,r){},307:function(t,e,r){var n=r(54)("jsonp");t.exports=function(t,e,r){"function"==typeof e&&(r=e,e={});e||(e={});var a,i,c=e.prefix||"__jp",l=e.name||c+o++,u=e.param||"callback",p=null!=e.timeout?e.timeout:6e4,m=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;p&&(i=setTimeout((function(){d(),r&&r(new Error("Timeout"))}),p));function d(){a.parentNode&&a.parentNode.removeChild(a),window[l]=s,i&&clearTimeout(i)}return window[l]=function(t){n("jsonp got",t),d(),r&&r(null,t)},t=(t+=(~t.indexOf("?")?"&":"?")+u+"="+m(l)).replace("?&","?"),n('jsonp req "%s"',t),(a=document.createElement("script")).src=t,f.parentNode.insertBefore(a,f),function(){window[l]&&d()}};var o=0;function s(){}},308:function(t,e,r){"use strict";const n=r(309),o=r(310),s=r(311),a=r(312);function i(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function l(t,e){return e.decode?o(t):t}function u(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function p(t){const e=(t=u(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function m(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function f(t,e){i((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const r=function(t){let e;switch(t.arrayFormat){case"index":return(t,r,n)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return(t,r,n)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return(e,r,n)=>{const o="string"==typeof r&&r.includes(t.arrayFormatSeparator),s="string"==typeof r&&!o&&l(r,t).includes(t.arrayFormatSeparator);r=s?l(r,t):r;const a=o||s?r.split(t.arrayFormatSeparator).map(e=>l(e,t)):null===r?r:l(r,t);n[e]=a};default:return(t,e,r)=>{void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;for(const o of t.split("&")){if(""===o)continue;let[t,a]=s(e.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator"].includes(e.arrayFormat)?a:l(a,e),r(l(t,e),a,n)}for(const t of Object.keys(n)){const r=n[t];if("object"==typeof r&&null!==r)for(const t of Object.keys(r))r[t]=m(r[t],e);else n[t]=m(r,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((t,e)=>{const r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((t,e)=>Number(t)-Number(e)).map(t=>e[t]):e}(r):t[e]=r,t},Object.create(null))}e.extract=p,e.parse=f,e.stringify=(t,e)=>{if(!t)return"";i((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const r=r=>e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r],n=function(t){switch(t.arrayFormat){case"index":return e=>(r,n)=>{const o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[c(e,t),"[",o,"]"].join("")]:[...r,[c(e,t),"[",c(o,t),"]=",c(n,t)].join("")]};case"bracket":return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[c(e,t),"[]"].join("")]:[...r,[c(e,t),"[]=",c(n,t)].join("")];case"comma":case"separator":return e=>(r,n)=>null==n||0===n.length?r:0===r.length?[[c(e,t),"=",c(n,t)].join("")]:[[r,c(n,t)].join(t.arrayFormatSeparator)];default:return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,c(e,t)]:[...r,[c(e,t),"=",c(n,t)].join("")]}}(e),o={};for(const e of Object.keys(t))r(e)||(o[e]=t[e]);const s=Object.keys(o);return!1!==e.sort&&s.sort(e.sort),s.map(r=>{const o=t[r];return void 0===o?"":null===o?c(r,e):Array.isArray(o)?o.reduce(n(r),[]).join("&"):c(r,e)+"="+c(o,e)}).filter(t=>t.length>0).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[r,n]=s(t,"#");return Object.assign({url:r.split("?")[0]||"",query:f(p(t),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:l(n,e)}:{})},e.stringifyUrl=(t,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=u(t.url).split("?")[0]||"",o=e.extract(t.url),s=e.parse(o,{sort:!1}),a=Object.assign(s,t.query);let i=e.stringify(a,r);i&&(i="?"+i);let l=function(t){let e="";const r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(l="#"+c(t.fragmentIdentifier,r)),`${n}${i}${l}`},e.pick=(t,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:o,query:s,fragmentIdentifier:i}=e.parseUrl(t,n);return e.stringifyUrl({url:o,query:a(s,r),fragmentIdentifier:i},n)},e.exclude=(t,r,n)=>{const o=Array.isArray(r)?t=>!r.includes(t):(t,e)=>!r(t,e);return e.pick(t,o,n)}},309:function(t,e,r){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())},310:function(t,e,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function s(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],s(r),s(n))}function a(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=s(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var n=a(r[0]);n!==r[0]&&(e[r[0]]=n)}r=o.exec(t)}e["%C2"]="�";for(var s=Object.keys(e),i=0;i<s.length;i++){var c=s[i];t=t.replace(new RegExp(c,"g"),e[c])}return t}(t)}}},311:function(t,e,r){"use strict";t.exports=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},312:function(t,e,r){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),s=0;s<n.length;s++){var a=n[s],i=t[a];(o?-1!==e.indexOf(a):e(a,i,t))&&(r[a]=i)}return r}},313:function(t,e,r){"use strict";r(284)},314:function(t,e,r){"use strict";r(285)},317:function(t,e,r){"use strict";r.r(e);var n=r(307),o=r.n(n),s=r(308),a=r.n(s),i=r(54),c=r.n(i);const l=c()("plugin-mailchimp");let u;try{const t=r(!function(){var t=new Error("Cannot find module '@dynamic/mailchimpOptions'");throw t.code="MODULE_NOT_FOUND",t}());u=t.endpoint}catch(t){l("Fail to get options",t.message)}var p=function(t,e){const r=encodeURIComponent(t);let n=u.replace(/\/post/g,"/post-json");const s=e?"&"+a.a.stringify(e):"";return n=`${n}${`&EMAIL=${r}${s}`}`,new Promise((t,e)=>o()(n,{param:"c",timeout:3500},(r,n)=>{r&&(l("Request failed",r),e(r)),n&&(l("Request success",n),t(n))}))},m=new(r(1).a);const f=c()("plugin-mailchimp");let d,y,g,b;try{const t=r(!function(){var t=new Error("Cannot find module '@dynamic/mailchimpOptions'");throw t.code="MODULE_NOT_FOUND",t}());d=t.submitText,y=t.content,g=t.title,b=t.popupEnabled}catch(t){f("Fail to get options",t.message)}var v={data:()=>({slotProps:{mail:"",title:g||"Newsletter",content:y||"Subscribe to get my latest content. No spam.",submitText:d||"Subscribe"}}),methods:{onSubmit(){p(this.slotProps.mail).catch(t=>{this.slotProps.mail="",b&&m.$emit("submited",{result:"error"})}).then(t=>{this.slotProps.mail="",b&&m.$emit("submited",t)})}}},w=(r(313),r(5)),_={components:{SimpleNewsletter:Object(w.a)(v,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"newsletter",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._t("default",(function(){return[e("div",{staticClass:"newsletter__wrap"},[e("div",{staticClass:"newsletter__title"},[t._v(t._s(t.slotProps.title))]),t._v(" "),e("div",{staticClass:"newsletter__content"},[t._v(t._s(t.slotProps.content))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.slotProps.mail,expression:"slotProps.mail"}],staticClass:"newsletter__input",attrs:{type:"email",name:"email","aria-label":"Email",placeholder:"Email",required:"",autocapitalize:"off",autocorrect:"off","data-cy":"email"},domProps:{value:t.slotProps.mail},on:{input:function(e){e.target.composing||t.$set(t.slotProps,"mail",e.target.value)}}}),t._v(" "),e("button",{staticClass:"newsletter__button",attrs:{type:"submit","data-cy":"submit"}},[t._v("\n          "+t._s(t.slotProps.submitText)+"\n        ")])])]}),{slotProps:t.slotProps})],2)}),[],!1,null,null,null).exports}},h=(r(314),Object(w.a)(_,(function(){var t=this,e=t._self._c;return e("SimpleNewsletter",{scopedSlots:t._u([{key:"default",fn:function({slotProps:r}){return[e("div",{staticClass:"newsletter__wrap"},[e("div",{staticClass:"newsletter__title"},[t._v(t._s(r.title))]),t._v(" "),e("div",{staticClass:"newsletter__content"},[t._v(t._s(r.content))]),t._v(" "),e("div",{staticClass:"newsletter__fields"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.mail,expression:"slotProps.mail"}],staticClass:"newsletter__input",attrs:{type:"email",name:"email","aria-label":"Email",placeholder:"Email",required:"",autocapitalize:"off",autocorrect:"off","data-cy":"email"},domProps:{value:r.mail},on:{input:function(e){e.target.composing||t.$set(r,"mail",e.target.value)}}}),t._v(" "),e("button",{staticClass:"newsletter__button",attrs:{type:"submit","data-cy":"submit"}},[t._v("\n          "+t._s(r.submitText)+"\n        ")])])])]}}])})}),[],!1,null,null,null));e.default=h.exports}}]);