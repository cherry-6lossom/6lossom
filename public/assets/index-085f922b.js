import{r as b,a as ay,u as wn,L as vd,b as uo,c as cy,R as _e,d as ly,B as uy,e as hy,f as Cn}from"./react-ee5f4fb1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var f={},dy={get exports(){return f},set exports(t){f=t}},ho={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=b,py=Symbol.for("react.element"),my=Symbol.for("react.fragment"),gy=Object.prototype.hasOwnProperty,yy=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vy={key:!0,ref:!0,__self:!0,__source:!0};function _d(t,e,n){var s,r={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)gy.call(e,s)&&!vy.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:py,type:t,key:i,ref:o,props:r,_owner:yy.current}}ho.Fragment=my;ho.jsx=_d;ho.jsxs=_d;(function(t){t.exports=ho})(dy);var Ka={},Tu=ay;Ka.createRoot=Tu.createRoot,Ka.hydrateRoot=Tu.hydrateRoot;const _y="_homeContainer_1yweo_7",wy="_homeLogo_1yweo_29",Sy="_homeMainTitle_1yweo_39",by="_moonLogo_1yweo_44",Ty="_homeTitleInfo_1yweo_49",Ey="_homeTitle_1yweo_49",Iy="_homeTitleBorder_1yweo_77",Ry="_homeTitleShadow_1yweo_89",Ay="_homeSubTitle_1yweo_101",Cy="_tree_1yweo_120",Ny="_blossomTree_1yweo_125",ky="_loginButtonList_1yweo_131",Ly="_generalButton_1yweo_139",xy="_googleButton_1yweo_153",at={homeContainer:_y,homeLogo:wy,homeMainTitle:Sy,moonLogo:by,homeTitleInfo:Ty,homeTitle:Ey,homeTitleBorder:Iy,homeTitleShadow:Ry,homeSubTitle:Ay,tree:Cy,blossomTree:Ny,loginButtonList:ky,generalButton:Ly,googleButton:xy};var Ha={},Dy={get exports(){return Ha},set exports(t){Ha=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if(o==="string"||o==="number")s.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&s.push(a)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){s.push(i.toString());continue}for(var c in i)e.call(i,c)&&i[c]&&s.push(c)}}}return s.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Dy);const yt=Ha;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Oy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Oy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new My;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class My extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Py=function(t){const e=wd(t);return Sd.encodeByteArray(e,!0)},Pi=function(t){return Py(t).replace(/\./g,"")},bd=function(t){try{return Sd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=()=>Uy().__FIREBASE_DEFAULTS__,$y=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},By=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bd(t[1]);return e&&JSON.parse(e)},Pc=()=>{try{return Vy()||$y()||By()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Td=t=>{var e,n;return(n=(e=Pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fy=t=>{const e=Td(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},jy=()=>{var t;return(t=Pc())===null||t===void 0?void 0:t.config},Ed=t=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Pi(JSON.stringify(n)),Pi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Ky(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gy(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qy(){try{return typeof indexedDB=="object"}catch{return!1}}function Yy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="FirebaseError";class Jt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Xy,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Jy(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Jt(r,a,s)}}function Jy(t,e){return t.replace(Zy,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Zy=/\{\$([^}]+)}/g;function ev(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ui(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Eu(i)&&Eu(o)){if(!Ui(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Eu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tv(t,e){const n=new nv(t,e);return n.subscribe.bind(n)}class nv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sv(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=va),r.error===void 0&&(r.error=va),r.complete===void 0&&(r.complete=va);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function va(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new qy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ov(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iv(t){return t===xn?void 0:t}function ov(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const cv={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},lv=ce.INFO,uv={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},hv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=uv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uc{constructor(e){this.name=e,this._logLevel=lv,this._logHandler=hv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const dv=(t,e)=>e.some(n=>t instanceof n);let Iu,Ru;function fv(){return Iu||(Iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pv(){return Ru||(Ru=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Id=new WeakMap,Ga=new WeakMap,Rd=new WeakMap,_a=new WeakMap,Vc=new WeakMap;function mv(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Id.set(n,t)}).catch(()=>{}),Vc.set(e,t),e}function gv(t){if(Ga.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ga.set(t,e)}let Qa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yv(t){Qa=t(Qa)}function vv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wa(this),e,...n);return Rd.set(s,e.sort?e.sort():[e]),hn(s)}:pv().includes(t)?function(...e){return t.apply(wa(this),e),hn(Id.get(this))}:function(...e){return hn(t.apply(wa(this),e))}}function _v(t){return typeof t=="function"?vv(t):(t instanceof IDBTransaction&&gv(t),dv(t,fv())?new Proxy(t,Qa):t)}function hn(t){if(t instanceof IDBRequest)return mv(t);if(_a.has(t))return _a.get(t);const e=_v(t);return e!==t&&(_a.set(t,e),Vc.set(e,t)),e}const wa=t=>Vc.get(t);function wv(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=hn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(hn(o.result),c.oldVersion,c.newVersion,hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Sv=["get","getKey","getAll","getAllKeys","count"],bv=["put","add","delete","clear"],Sa=new Map;function Au(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sa.get(e))return Sa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=bv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Sv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Sa.set(e,i),i}yv(t=>({...t,get:(e,n,s)=>Au(e,n)||t.get(e,n,s),has:(e,n)=>!!Au(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ev(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ev(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ya="@firebase/app",Cu="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Uc("@firebase/app"),Iv="@firebase/app-compat",Rv="@firebase/analytics-compat",Av="@firebase/analytics",Cv="@firebase/app-check-compat",Nv="@firebase/app-check",kv="@firebase/auth",Lv="@firebase/auth-compat",xv="@firebase/database",Dv="@firebase/database-compat",Ov="@firebase/functions",Mv="@firebase/functions-compat",Pv="@firebase/installations",Uv="@firebase/installations-compat",Vv="@firebase/messaging",$v="@firebase/messaging-compat",Bv="@firebase/performance",Fv="@firebase/performance-compat",jv="@firebase/remote-config",qv="@firebase/remote-config-compat",zv="@firebase/storage",Wv="@firebase/storage-compat",Kv="@firebase/firestore",Hv="@firebase/firestore-compat",Gv="firebase",Qv="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="[DEFAULT]",Yv={[Ya]:"fire-core",[Iv]:"fire-core-compat",[Av]:"fire-analytics",[Rv]:"fire-analytics-compat",[Nv]:"fire-app-check",[Cv]:"fire-app-check-compat",[kv]:"fire-auth",[Lv]:"fire-auth-compat",[xv]:"fire-rtdb",[Dv]:"fire-rtdb-compat",[Ov]:"fire-fn",[Mv]:"fire-fn-compat",[Pv]:"fire-iid",[Uv]:"fire-iid-compat",[Vv]:"fire-fcm",[$v]:"fire-fcm-compat",[Bv]:"fire-perf",[Fv]:"fire-perf-compat",[jv]:"fire-rc",[qv]:"fire-rc-compat",[zv]:"fire-gcs",[Wv]:"fire-gcs-compat",[Kv]:"fire-fst",[Hv]:"fire-fst-compat","fire-js":"fire-js",[Gv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Map,Ja=new Map;function Xv(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(Ja.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;Ja.set(e,t);for(const n of Vi.values())Xv(n,t);return!0}function $c(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dn=new Lr("app","Firebase",Jv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=Qv;function Ad(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xa,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw dn.create("bad-app-name",{appName:String(r)});if(n||(n=jy()),!n)throw dn.create("no-options");const i=Vi.get(r);if(i){if(Ui(n,i.options)&&Ui(s,i.config))return i;throw dn.create("duplicate-app",{appName:r})}const o=new av(r);for(const c of Ja.values())o.addComponent(c);const a=new Zv(n,s,o);return Vi.set(r,a),a}function Cd(t=Xa){const e=Vi.get(t);if(!e&&t===Xa)return Ad();if(!e)throw dn.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let r=(s=Yv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(a.join(" "));return}ys(new qn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="firebase-heartbeat-database",t_=1,gr="firebase-heartbeat-store";let ba=null;function Nd(){return ba||(ba=wv(e_,t_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gr)}}}).catch(t=>{throw dn.create("idb-open",{originalErrorMessage:t.message})})),ba}async function n_(t){try{return(await Nd()).transaction(gr).objectStore(gr).get(kd(t))}catch(e){if(e instanceof Jt)zn.warn(e.message);else{const n=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Nu(t,e){try{const s=(await Nd()).transaction(gr,"readwrite");return await s.objectStore(gr).put(e,kd(t)),s.done}catch(n){if(n instanceof Jt)zn.warn(n.message);else{const s=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(s.message)}}}function kd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=1024,r_=30*24*60*60*1e3;class i_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ku();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=r_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ku(),{heartbeatsToSend:n,unsentEntries:s}=o_(this._heartbeatsCache.heartbeats),r=Pi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ku(){return new Date().toISOString().substring(0,10)}function o_(t,e=s_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Lu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class a_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qy()?Yy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lu(t){return Pi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){ys(new qn("platform-logger",e=>new Tv(e),"PRIVATE")),ys(new qn("heartbeat",e=>new i_(e),"PRIVATE")),fn(Ya,Cu,t),fn(Ya,Cu,"esm2017"),fn("fire-js","")}c_("");function Bc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ld(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l_=Ld,xd=new Lr("auth","Firebase",Ld());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Uc("@firebase/auth");function Ai(t,...e){xu.logLevel<=ce.ERROR&&xu.error(`Auth (${Dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,...e){throw Fc(t,...e)}function Nt(t,...e){return Fc(t,...e)}function Dd(t,e,n){const s=Object.assign(Object.assign({},l_()),{[e]:n});return new Lr("auth","Firebase",s).create(e,{appName:t.name})}function u_(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&vt(t,"argument-error"),Dd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return xd.create(t,...e)}function U(t,e,...n){if(!t)throw Fc(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ai(e),new Error(e)}function Gt(t,e){t||zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Map;function Wt(t){Gt(t instanceof Function,"Expected a class definition");let e=Du.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Du.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e){const n=$c(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ui(i,e??{}))return r;vt(r,"already-initialized")}return n.initialize({options:e})}function d_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function f_(){return Ou()==="http:"||Ou()==="https:"}function Ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f_()||Ky()||"connection"in navigator)?navigator.onLine:!0}function m_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=Wy()||Hy()}get(){return p_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new Or(3e4,6e4);function Ds(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,s,r={}){return Md(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=xr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Od.fetch()(Pd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Md(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},g_),e);try{const r=new v_(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw pi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Dd(t,u,l);vt(t,u)}}catch(r){if(r instanceof Jt)throw r;vt(t,"internal-error",{message:String(r)})}}async function Mr(t,e,n,s,r={}){const i=await Zn(t,e,n,s,r);return"mfaPendingCredential"in i&&vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?jc(t.config,r):`${t.config.apiScheme}://${r}`}class v_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),y_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function w_(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S_(t,e=!1){const n=Ee(t),s=await n.getIdToken(e),r=qc(s);U(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ir(Ta(r.auth_time)),issuedAtTime:ir(Ta(r.iat)),expirationTime:ir(Ta(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ta(t){return Number(t)*1e3}function qc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const r=bd(n);return r?JSON.parse(r):(Ai("Failed to decode base64 JWT payload"),null)}catch(r){return Ai("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function b_(t){const e=qc(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Jt&&T_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function T_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t){var e;const n=t.auth,s=await t.getIdToken(),r=await vs(t,w_(n,{idToken:s}));U(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?A_(i.providerUserInfo):[],a=R_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ud(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function I_(t){const e=Ee(t);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R_(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function A_(t){return t.map(e=>{var{providerId:n}=e,s=Bc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(t,e){const n=await Md(t,{},async()=>{const s=xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Pd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Od.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):b_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await C_(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new yr;return s&&(U(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(U(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Bc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new E_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ud(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return S_(this,e)}reload(){return I_(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $i(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vs(this,__(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,J=(l=n.createdAt)!==null&&l!==void 0?l:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:H,isAnonymous:K,providerData:ee,stsTokenManager:ne}=n;U(V&&ne,e,"internal-error");const Re=yr.fromJSON(this.name,ne);U(typeof V=="string",e,"internal-error"),sn(h,e.name),sn(d,e.name),U(typeof H=="boolean",e,"internal-error"),U(typeof K=="boolean",e,"internal-error"),sn(g,e.name),sn(m,e.name),sn(w,e.name),sn(k,e.name),sn(J,e.name),sn(E,e.name);const et=new $n({uid:V,auth:e,email:d,emailVerified:H,displayName:h,isAnonymous:K,photoURL:m,phoneNumber:g,tenantId:w,stsTokenManager:Re,createdAt:J,lastLoginAt:E});return ee&&Array.isArray(ee)&&(et.providerData=ee.map(ae=>Object.assign({},ae))),k&&(et._redirectEventId=k),et}static async _fromIdTokenResponse(e,n,s=!1){const r=new yr;r.updateFromServerResponse(n);const i=new $n({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $i(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vd.type="NONE";const Mu=Vd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ci(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ci("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ds(Wt(Mu),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Wt(Mu);const o=Ci(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=$n._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ds(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ds(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qd(e))return"Blackberry";if(zd(e))return"Webos";if(zc(e))return"Safari";if((e.includes("chrome/")||Bd(e))&&!e.includes("edge/"))return"Chrome";if(jd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $d(t=Je()){return/firefox\//i.test(t)}function zc(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bd(t=Je()){return/crios\//i.test(t)}function Fd(t=Je()){return/iemobile/i.test(t)}function jd(t=Je()){return/android/i.test(t)}function qd(t=Je()){return/blackberry/i.test(t)}function zd(t=Je()){return/webos/i.test(t)}function fo(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function N_(t=Je()){var e;return fo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k_(){return Gy()&&document.documentMode===10}function Wd(t=Je()){return fo(t)||jd(t)||zd(t)||qd(t)||/windows phone/i.test(t)||Fd(t)}function L_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t,e=[]){let n;switch(t){case"Browser":n=Pu(Je());break;case"Worker":n=`${Pu(Je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uu(this),this.idTokenSubscription=new Uu(this),this.beforeStateQueue=new x_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ee(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Os(t){return Ee(t)}class Uu{constructor(e){this.auth=e,this.observer=null,this.addObserver=tv(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function O_(t,e,n){const s=Os(t);U(s._canInitEmulator,s,"emulator-config-failed"),U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Hd(e),{host:o,port:a}=M_(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||P_()}function Hd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function M_(t){const e=Hd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Vu(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Vu(o)}}}function Vu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function P_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function U_(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(t,e){return Mr(t,"POST","/v1/accounts:signInWithPassword",Ds(t,e))}async function $_(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Ds(t,e))}async function B_(t,e){return $_(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(t,e){return Mr(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}async function j_(t,e){return Mr(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Wc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new vr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new vr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return V_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return F_(e,{email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return U_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return j_(e,{idToken:n,email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return Mr(t,"POST","/v1/accounts:signInWithIdp",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="http://localhost";class Wn extends Wc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Bc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Wn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:q_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function W_(t){const e=Js(Zs(t)).link,n=e?Js(Zs(e)).deep_link_id:null,s=Js(Zs(t)).deep_link_id;return(s?Js(Zs(s)).link:null)||s||n||e||t}class Kc{constructor(e){var n,s,r,i,o,a;const c=Js(Zs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=z_((r=c.mode)!==null&&r!==void 0?r:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=W_(e);try{return new Kc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return vr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Kc.parseLink(n);return U(s,"argument-error"),vr._fromEmailAndCode(e,s.code,s.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Hc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Pr{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qt.credential(n,s)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Pr{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Pr{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return cn.credential(n,s)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(t,e){return Mr(t,"POST","/v1/accounts:signUp",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await $n._fromIdTokenResponse(e,s,r),o=$u(s);return new Kn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=$u(s);return new Kn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function $u(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Jt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Bi(e,n,s,r)}}function Gd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(t,i,e,s):i})}async function H_(t,e,n=!1){const s=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await vs(t,Gd(s,r,e,t),n);U(i.idToken,s,"internal-error");const o=qc(i.idToken);U(o,s,"internal-error");const{sub:a}=o;return U(t.uid===a,s,"user-mismatch"),Kn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e,n=!1){const s="signIn",r=await Gd(t,s,e),i=await Kn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Q_(t,e){return Qd(Os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e,n){var s;U(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),U(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(U(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(U(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function X_(t,e,n){const s=Os(t),r=await K_(s,{returnSecureToken:!0,email:e,password:n}),i=await Kn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function J_(t,e,n){return Q_(Ee(t),Ms.credential(e,n))}async function Z_(t,e){const n=Ee(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Y_(n.auth,r,e);const{email:i}=await B_(n.auth,r);i!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ee(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vs(s,ew(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function nw(t,e,n,s){return Ee(t).onIdTokenChanged(e,n,s)}function sw(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function rw(t,e,n,s){return Ee(t).onAuthStateChanged(e,n,s)}function iw(t){return Ee(t).signOut()}const Fi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fi,"1"),this.storage.removeItem(Fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){const t=Je();return zc(t)||fo(t)}const aw=1e3,cw=10;class Xd extends Yd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ow()&&L_(),this.fallbackToPolling=Wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);k_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,cw):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xd.type="LOCAL";const lw=Xd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Yd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jd.type="SESSION";const Zd=Jd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new po(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await uw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}po.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Gc("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function dw(t){kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function fw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mw(){return ef()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="firebaseLocalStorageDb",gw=1,ji="firebaseLocalStorage",nf="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mo(t,e){return t.transaction([ji],e?"readwrite":"readonly").objectStore(ji)}function yw(){const t=indexedDB.deleteDatabase(tf);return new Ur(t).toPromise()}function ec(){const t=indexedDB.open(tf,gw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ji,{keyPath:nf})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ji)?e(s):(s.close(),await yw(),e(await ec()))})})}async function Bu(t,e,n){const s=mo(t,!0).put({[nf]:e,value:n});return new Ur(s).toPromise()}async function vw(t,e){const n=mo(t,!1).get(e),s=await new Ur(n).toPromise();return s===void 0?null:s.value}function Fu(t,e){const n=mo(t,!0).delete(e);return new Ur(n).toPromise()}const _w=800,ww=3;class sf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ec(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ww)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ef()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=po._getInstance(mw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fw(),!this.activeServiceWorker)return;this.sender=new hw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ec();return await Bu(e,Fi,"1"),await Fu(e,Fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=mo(r,!1).getAll();return new Ur(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sf.type="LOCAL";const Sw=sf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Tw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",bw().appendChild(s)})}function Ew(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Or(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t,e){return e?Wt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends Wc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Iw(t){return Qd(t.auth,new Qc(t),t.bypassAuthState)}function Rw(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),G_(n,new Qc(t),t.bypassAuthState)}async function Aw(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),H_(n,new Qc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Iw;case"linkViaPopup":case"linkViaRedirect":return Aw;case"reauthViaPopup":case"reauthViaRedirect":return Rw;default:vt(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=new Or(2e3,1e4);async function Nw(t,e,n){const s=Os(t);u_(t,e,Hc);const r=rf(s,n);return new Mn(s,"signInViaPopup",e,r).executeNotNull()}class Mn extends of{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Cw.get())};e()}}Mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="pendingRedirect",Ni=new Map;class Lw extends of{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{const s=await xw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xw(t,e){const n=Mw(e),s=Ow(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Dw(t,e){Ni.set(t._key(),e)}function Ow(t){return Wt(t._redirectPersistence)}function Mw(t){return Ci(kw,t.config.apiKey,t.name)}async function Pw(t,e,n=!1){const s=Os(t),r=rf(s,e),o=await new Lw(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=10*60*1e3;class Vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$w(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!af(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ju(e))}saveEventToCache(e){this.cachedEventUids.add(ju(e)),this.lastProcessedEventTime=Date.now()}}function ju(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function af({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $w(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return af(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jw=/^https?/;async function qw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bw(t);for(const n of e)try{if(zw(n))return}catch{}vt(t,"unauthorized-domain")}function zw(t){const e=Za(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!jw.test(n))return!1;if(Fw.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new Or(3e4,6e4);function qu(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Kw(t){return new Promise((e,n)=>{var s,r,i;function o(){qu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qu(),n(Nt(t,"network-request-failed"))},timeout:Ww.get()})}if(!((r=(s=kt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=kt().gapi)===null||i===void 0)&&i.load)o();else{const a=Ew("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},Tw(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ki=null,e})}let ki=null;function Hw(t){return ki=ki||Kw(t),ki}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=new Or(5e3,15e3),Qw="__/auth/iframe",Yw="emulator/auth/iframe",Xw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zw(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jc(e,Yw):`https://${t.config.authDomain}/${Qw}`,s={apiKey:e.apiKey,appName:t.name,v:Dr},r=Jw.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${xr(s).slice(1)}`}async function eS(t){const e=await Hw(t),n=kt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Zw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xw,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=kt().setTimeout(()=>{i(o)},Gw.get());function c(){kt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nS=500,sS=600,rS="_blank",iS="http://localhost";class zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oS(t,e,n,s=nS,r=sS){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tS),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Je().toLowerCase();n&&(a=Bd(l)?rS:n),$d(l)&&(e=e||iS,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(N_(l)&&a!=="_self")return aS(e||"",a),new zu(null);const h=window.open(e||"",a,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new zu(h)}function aS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="__/auth/handler",lS="emulator/auth/handler";function Wu(t,e,n,s,r,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Dr,eventId:r};if(e instanceof Hc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ev(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Pr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${uS(t)}?${xr(a).slice(1)}`}function uS({config:t}){return t.emulator?jc(t,lS):`https://${t.authDomain}/${cS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="webStorageSupport";class hS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zd,this._completeRedirectFn=Pw,this._overrideRedirectResult=Dw}async _openPopup(e,n,s,r){var i;Gt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Wu(e,n,s,Za(),r);return oS(e,o,Gc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),dw(Wu(e,n,s,Za(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Gt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await eS(e),s=new Vw(e);return n.register("authEvent",r=>(U(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ea,{type:Ea},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ea];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wd()||zc()||fo()}}const dS=hS;var Ku="@firebase/auth",Hu="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mS(t){ys(new qn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{U(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kd(t)},u=new D_(a,c,l);return d_(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ys(new qn("auth-internal",e=>{const n=Os(e.getProvider("auth").getImmediate());return(s=>new fS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Ku,Hu,pS(t)),fn(Ku,Hu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=5*60,yS=Ed("authIdTokenMaxAge")||gS;let Gu=null;const vS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>yS)return;const r=n==null?void 0:n.token;Gu!==r&&(Gu=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _S(t=Cd()){const e=$c(t,"auth");if(e.isInitialized())return e.getImmediate();const n=h_(t,{popupRedirectResolver:dS,persistence:[Sw,lw,Zd]}),s=Ed("authTokenSyncURL");if(s){const i=vS(s);sw(n,i,()=>i(n.currentUser)),nw(n,o=>i(o))}const r=Td("auth");return r&&O_(n,`http://${r}`),n}mS("Browser");var wS="firebase",SS="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(wS,SS,"app");var bS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Yc=Yc||{},W=bS||self;function qi(){}function go(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TS(t){return Object.prototype.hasOwnProperty.call(t,Ia)&&t[Ia]||(t[Ia]=++ES)}var Ia="closure_uid_"+(1e9*Math.random()>>>0),ES=0;function IS(t,e,n){return t.call.apply(t.bind,arguments)}function RS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=IS:Qe=RS,Qe.apply(null,arguments)}function mi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Sn(){this.s=this.s,this.o=this.o}var AS=0;Sn.prototype.s=!1;Sn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),AS!=0)&&TS(this)};Sn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Xc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Qu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(go(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var CS=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",qi,e),W.removeEventListener("test",qi,e)}catch{}return t}();function zi(t){return/^[\s\xa0]*$/.test(t)}var Yu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ra(t,e){return t<e?-1:t>e?1:0}function yo(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Ct(t){return yo().indexOf(t)!=-1}function Jc(t){return Jc[" "](t),t}Jc[" "]=qi;function NS(t){var e=xS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kS=Ct("Opera"),_s=Ct("Trident")||Ct("MSIE"),lf=Ct("Edge"),tc=lf||_s,uf=Ct("Gecko")&&!(yo().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge"))&&!(Ct("Trident")||Ct("MSIE"))&&!Ct("Edge"),LS=yo().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge");function hf(){var t=W.document;return t?t.documentMode:void 0}var Wi;e:{var Aa="",Ca=function(){var t=yo();if(uf)return/rv:([^\);]+)(\)|;)/.exec(t);if(lf)return/Edge\/([\d\.]+)/.exec(t);if(_s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(LS)return/WebKit\/(\S+)/.exec(t);if(kS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ca&&(Aa=Ca?Ca[1]:""),_s){var Na=hf();if(Na!=null&&Na>parseFloat(Aa)){Wi=String(Na);break e}}Wi=Aa}var xS={};function DS(){return NS(function(){let t=0;const e=Yu(String(Wi)).split("."),n=Yu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ra(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ra(r[2].length==0,i[2].length==0)||Ra(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var nc;if(W.document&&_s){var Xu=hf();nc=Xu||parseInt(Wi,10)||void 0}else nc=void 0;var OS=nc;function _r(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uf){e:{try{Jc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_r.X.h.call(this)}}qe(_r,Ye);var MS={2:"touch",3:"pen",4:"mouse"};_r.prototype.h=function(){_r.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $r="closure_listenable_"+(1e6*Math.random()|0),PS=0;function US(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++PS,this.ba=this.ea=!1}function vo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Zc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function df(t){const e={};for(const n in t)e[n]=t[n];return e}const Ju="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ff(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ju.length;i++)n=Ju[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function _o(t){this.src=t,this.g={},this.h=0}_o.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=rc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new US(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function sc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=cf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(vo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var el="closure_lm_"+(1e6*Math.random()|0),ka={};function pf(t,e,n,s,r){if(s&&s.once)return gf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)pf(t,e[i],n,s,r);return null}return n=sl(n),t&&t[$r]?t.N(e,n,Vr(s)?!!s.capture:!!s,r):mf(t,e,n,!1,s,r)}function mf(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Vr(r)?!!r.capture:!!r,a=nl(t);if(a||(t[el]=a=new _o(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=VS(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)CS||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(vf(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VS(){function t(n){return e.call(t.src,t.listener,n)}const e=$S;return t}function gf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)gf(t,e[i],n,s,r);return null}return n=sl(n),t&&t[$r]?t.O(e,n,Vr(s)?!!s.capture:!!s,r):mf(t,e,n,!0,s,r)}function yf(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)yf(t,e[i],n,s,r);else s=Vr(s)?!!s.capture:!!s,n=sl(n),t&&t[$r]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=rc(i,n,s,r),-1<n&&(vo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=nl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rc(e,n,s,r)),(n=-1<t?e[t]:null)&&tl(n))}function tl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[$r])sc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(vf(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=nl(e))?(sc(n,t),n.h==0&&(n.src=null,e[el]=null)):vo(t)}}}function vf(t){return t in ka?ka[t]:ka[t]="on"+t}function $S(t,e){if(t.ba)t=!0;else{e=new _r(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&tl(t),t=n.call(s,e)}return t}function nl(t){return t=t[el],t instanceof _o?t:null}var La="__closure_events_fn_"+(1e9*Math.random()>>>0);function sl(t){return typeof t=="function"?t:(t[La]||(t[La]=function(e){return t.handleEvent(e)}),t[La])}function Ve(){Sn.call(this),this.i=new _o(this),this.P=this,this.I=null}qe(Ve,Sn);Ve.prototype[$r]=!0;Ve.prototype.removeEventListener=function(t,e,n,s){yf(this,t,e,n,s)};function je(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var r=e;e=new Ye(s,t),ff(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=gi(o,s,!0,e)&&r}if(o=e.g=t,r=gi(o,s,!0,e)&&r,r=gi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=gi(o,s,!1,e)&&r}Ve.prototype.M=function(){if(Ve.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)vo(n[s]);delete t.g[e],t.h--}}this.I=null};Ve.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ve.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function gi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&sc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var rl=W.JSON.stringify;function BS(){var t=Sf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FS{constructor(){this.h=this.g=null}add(e,n){const s=_f.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var _f=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jS,t=>t.reset());class jS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qS(t){W.setTimeout(()=>{throw t},0)}function wf(t,e){ic||zS(),oc||(ic(),oc=!0),Sf.add(t,e)}var ic;function zS(){var t=W.Promise.resolve(void 0);ic=function(){t.then(WS)}}var oc=!1,Sf=new FS;function WS(){for(var t;t=BS();){try{t.h.call(t.g)}catch(n){qS(n)}var e=_f;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oc=!1}function wo(t,e){Ve.call(this),this.h=t||1,this.g=e||W,this.j=Qe(this.lb,this),this.l=Date.now()}qe(wo,Ve);D=wo.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),je(this,"tick"),this.ca&&(il(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function il(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){wo.X.M.call(this),il(this),delete this.g};function ol(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function bf(t){t.g=ol(()=>{t.g=null,t.i&&(t.i=!1,bf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KS extends Sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bf(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wr(t){Sn.call(this),this.h=t,this.g={}}qe(wr,Sn);var Zu=[];function Tf(t,e,n,s){Array.isArray(n)||(n&&(Zu[0]=n.toString()),n=Zu);for(var r=0;r<n.length;r++){var i=pf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ef(t){Zc(t.g,function(e,n){this.g.hasOwnProperty(n)&&tl(e)},t),t.g={}}wr.prototype.M=function(){wr.X.M.call(this),Ef(this)};wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function So(){this.g=!0}So.prototype.Aa=function(){this.g=!1};function HS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function GS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function hs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+YS(t,n)+(s?" "+s:"")})}function QS(t,e){t.info(function(){return"TIMEOUT: "+e})}So.prototype.info=function(){};function YS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return rl(n)}catch{return e}}var es={},eh=null;function bo(){return eh=eh||new Ve}es.Pa="serverreachability";function If(t){Ye.call(this,es.Pa,t)}qe(If,Ye);function Sr(t){const e=bo();je(e,new If(e))}es.STAT_EVENT="statevent";function Rf(t,e){Ye.call(this,es.STAT_EVENT,t),this.stat=e}qe(Rf,Ye);function it(t){const e=bo();je(e,new Rf(e,t))}es.Qa="timingevent";function Af(t,e){Ye.call(this,es.Qa,t),this.size=e}qe(Af,Ye);function Br(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var To={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Cf={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function al(){}al.prototype.h=null;function th(t){return t.h||(t.h=t.i())}function Nf(){}var Fr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function cl(){Ye.call(this,"d")}qe(cl,Ye);function ll(){Ye.call(this,"c")}qe(ll,Ye);var ac;function Eo(){}qe(Eo,al);Eo.prototype.g=function(){return new XMLHttpRequest};Eo.prototype.i=function(){return{}};ac=new Eo;function jr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new wr(this),this.O=XS,t=tc?125:void 0,this.T=new wo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new kf}function kf(){this.i=null,this.g="",this.h=!1}var XS=45e3,cc={},Ki={};D=jr.prototype;D.setTimeout=function(t){this.O=t};function lc(t,e,n){t.K=1,t.v=Ro(Qt(e)),t.s=n,t.P=!0,Lf(t,null)}function Lf(t,e){t.F=Date.now(),qr(t),t.A=Qt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),$f(n.i,"t",s),t.C=0,n=t.l.H,t.h=new kf,t.g=op(t.l,n?e:null,!t.s),0<t.N&&(t.L=new KS(Qe(t.La,t,t.g),t.N)),Tf(t.S,t.g,"readystatechange",t.ib),e=t.H?df(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Sr(),HS(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Kt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const u=Kt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||tc||this.g&&(this.h.h||this.g.fa()||ih(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Sr(3):Sr(2)),Io(this);var n=this.g.aa();this.Y=n;t:if(xf(this)){var s=ih(this.g);t="";var r=s.length,i=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),or(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,GS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zi(a)){var l=a;break t}}l=null}if(n=l)hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,uc(this,n);else{this.i=!1,this.o=3,it(12),Pn(this),or(this);break e}}this.P?(Df(this,u,o),tc&&this.i&&u==3&&(Tf(this.S,this.T,"tick",this.hb),this.T.start())):(hs(this.j,this.m,o,null),uc(this,o)),u==4&&Pn(this),this.i&&!this.I&&(u==4?np(this.l,this):(this.i=!1,qr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Pn(this),or(this)}}}catch{}finally{}};function xf(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Df(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=JS(t,n),r==Ki){e==4&&(t.o=4,it(14),s=!1),hs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==cc){t.o=4,it(15),hs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else hs(t.j,t.m,r,null),uc(t,r);xf(t)&&r!=Ki&&r!=cc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),gl(e),e.K=!0,it(11))):(hs(t.j,t.m,n,"[Invalid Chunked Response]"),Pn(t),or(t))}D.hb=function(){if(this.g){var t=Kt(this.g),e=this.g.fa();this.C<e.length&&(Io(this),Df(this,t,e),this.i&&t!=4&&qr(this))}};function JS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ki:(n=Number(e.substring(n,s)),isNaN(n)?cc:(s+=1,s+n>e.length?Ki:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,Pn(this)};function qr(t){t.V=Date.now()+t.O,Of(t,t.O)}function Of(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Br(Qe(t.gb,t),e)}function Io(t){t.B&&(W.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(QS(this.j,this.A),this.K!=2&&(Sr(),it(17)),Pn(this),this.o=2,or(this)):Of(this,this.V-t)};function or(t){t.l.G==0||t.I||np(t.l,t)}function Pn(t){Io(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,il(t.T),Ef(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function uc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||hc(n.h,t))){if(!t.J&&hc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Qi(n),No(n);else break e;ml(n),it(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Br(Qe(n.cb,n),6e3));if(1>=jf(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Un(n,11)}else if((t.J||n.g==t)&&Qi(n),!zi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ul(i,i.h),i.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Se(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ip(s,s.H?s.ka:null,s.V),o.J){qf(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Io(a),qr(a)),s.g=o}else ep(s);0<n.i.length&&ko(n)}else l[0]!="stop"&&l[0]!="close"||Un(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Un(n,7):pl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Sr(4)}catch{}}function ZS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(go(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function eb(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(go(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Mf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(go(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=eb(t),s=ZS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Pf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Bn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bn){this.h=e!==void 0?e:t.h,Hi(this,t.j),this.s=t.s,this.g=t.g,Gi(this,t.m),this.l=t.l,e=t.i;var n=new br;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nh(this,n),this.o=t.o}else t&&(n=String(t).match(Pf))?(this.h=!!e,Hi(this,n[1]||"",!0),this.s=er(n[2]||""),this.g=er(n[3]||"",!0),Gi(this,n[4]),this.l=er(n[5]||"",!0),nh(this,n[6]||"",!0),this.o=er(n[7]||"")):(this.h=!!e,this.i=new br(null,this.h))}Bn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tr(e,sh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(tr(e,sh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(tr(n,n.charAt(0)=="/"?rb:sb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tr(n,ob)),t.join("")};function Qt(t){return new Bn(t)}function Hi(t,e,n){t.j=n?er(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Gi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nh(t,e,n){e instanceof br?(t.i=e,ab(t.i,t.h)):(n||(e=tr(e,ib)),t.i=new br(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Ro(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function er(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,nb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sh=/[#\/\?@]/g,sb=/[#\?:]/g,rb=/[#\?]/g,ib=/[#\?@]/g,ob=/#/g;function br(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function bn(t){t.g||(t.g=new Map,t.h=0,t.i&&tb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=br.prototype;D.add=function(t,e){bn(this),this.i=null,t=Ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Uf(t,e){bn(t),e=Ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Vf(t,e){return bn(t),e=Ps(t,e),t.g.has(e)}D.forEach=function(t,e){bn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};D.oa=function(){bn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};D.W=function(t){bn(this);let e=[];if(typeof t=="string")Vf(this,t)&&(e=e.concat(this.g.get(Ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return bn(this),this.i=null,t=Ps(this,t),Vf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function $f(t,e,n){Uf(t,e),0<n.length&&(t.i=null,t.g.set(Ps(t,e),Xc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ab(t,e){e&&!t.j&&(bn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Uf(this,s),$f(this,r,n))},t)),t.j=e}var cb=class{constructor(e,n){this.h=e,this.g=n}};function Bf(t){this.l=t||lb,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lb=10;function Ff(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jf(t){return t.h?1:t.g?t.g.size:0}function hc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ul(t,e){t.g?t.g.add(e):t.h=e}function qf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Bf.prototype.cancel=function(){if(this.i=zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zf(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Xc(t.i)}function hl(){}hl.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};hl.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function ub(){this.g=new hl}function hb(t,e,n){const s=n||"";try{Mf(t,function(r,i){let o=r;Vr(r)&&(o=rl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function db(t,e){const n=new So;if(W.Image){const s=new Image;s.onload=mi(yi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=mi(yi,n,s,"TestLoadImage: error",!1,e),s.onabort=mi(yi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=mi(yi,n,s,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function yi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function zr(t){this.l=t.ac||null,this.j=t.jb||!1}qe(zr,al);zr.prototype.g=function(){return new Ao(this.l,this.j)};zr.prototype.i=function(t){return function(){return t}}({});function Ao(t,e){Ve.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=dl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Ao,Ve);var dl=0;D=Ao.prototype;D.open=function(t,e){if(this.readyState!=dl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Tr(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wr(this)),this.readyState=dl};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wf(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Wf(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wr(this):Tr(this),this.readyState==3&&Wf(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,Wr(this))};D.Ua=function(t){this.g&&(this.response=t,Wr(this))};D.ga=function(){this.g&&Wr(this)};function Wr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Tr(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Tr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fb=W.JSON.parse;function Ie(t){Ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kf,this.K=this.L=!1}qe(Ie,Ve);var Kf="",pb=/^https?$/i,mb=["POST","PUT"];D=Ie.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ac.g(),this.C=this.u?th(this.u):th(ac),this.g.onreadystatechange=Qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){rh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=W.FormData&&t instanceof W.FormData,!(0<=cf(mb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qf(this),0<this.B&&((this.K=gb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.qa,this)):this.A=ol(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rh(this,i)}};function gb(t){return _s&&DS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Yc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function rh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hf(t),Co(t)}function Hf(t){t.D||(t.D=!0,je(t,"complete"),je(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Co(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Co(this,!0)),Ie.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Gf(this):this.fb())};D.fb=function(){Gf(this)};function Gf(t){if(t.h&&typeof Yc<"u"&&(!t.C[1]||Kt(t)!=4||t.aa()!=2)){if(t.v&&Kt(t)==4)ol(t.Ha,0,t);else if(je(t,"readystatechange"),Kt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Pf)[1]||null;if(!r&&W.self&&W.self.location){var i=W.self.location.protocol;r=i.substr(0,i.length-1)}s=!pb.test(r?r.toLowerCase():"")}n=s}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var o=2<Kt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Hf(t)}}finally{Co(t)}}}}function Co(t,e){if(t.g){Qf(t);const n=t.g,s=t.C[0]?qi:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=s}catch{}}}function Qf(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function Kt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fb(e)}};function ih(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Kf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yf(t){let e="";return Zc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function fl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Yf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xf(t){this.Ca=0,this.i=[],this.j=new So,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ws("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ws("baseRetryDelayMs",5e3,t),this.bb=Ws("retryDelaySeedMs",1e4,t),this.$a=Ws("forwardChannelMaxRetries",2,t),this.ta=Ws("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Bf(t&&t.concurrentRequestLimit),this.Fa=new ub,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=Xf.prototype;D.ma=8;D.G=1;function pl(t){if(Jf(t),t.G==3){var e=t.U++,n=Qt(t.F);Se(n,"SID",t.I),Se(n,"RID",e),Se(n,"TYPE","terminate"),Kr(t,n),e=new jr(t,t.j,e,void 0),e.K=2,e.v=Ro(Qt(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=op(e.l,null),e.g.da(e.v)),e.F=Date.now(),qr(e)}rp(t)}function No(t){t.g&&(gl(t),t.g.cancel(),t.g=null)}function Jf(t){No(t),t.u&&(W.clearTimeout(t.u),t.u=null),Qi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function ko(t){Ff(t.h)||t.m||(t.m=!0,wf(t.Ja,t),t.C=0)}function yb(t,e){return jf(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Br(Qe(t.Ja,t,e),sp(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new jr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=df(i),ff(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zf(this,r,e),n=Qt(this.F),Se(n,"RID",t),Se(n,"CVER",22),this.D&&Se(n,"X-HTTP-Session-Id",this.D),Kr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Yf(i)))+"&"+e:this.o&&fl(n,this.o,i)),ul(this.h,r),this.Ya&&Se(n,"TYPE","init"),this.O?(Se(n,"$req",e),Se(n,"SID","null"),r.Z=!0,lc(r,n,null)):lc(r,n,e),this.G=2}}else this.G==3&&(t?oh(this,t):this.i.length==0||Ff(this.h)||oh(this))};function oh(t,e){var n;e?n=e.m:n=t.U++;const s=Qt(t.F);Se(s,"SID",t.I),Se(s,"RID",n),Se(s,"AID",t.T),Kr(t,s),t.o&&t.s&&fl(s,t.o,t.s),n=new jr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Zf(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ul(t.h,n),lc(n,s,e)}function Kr(t,e){t.ia&&Zc(t.ia,function(n,s){Se(e,s,n)}),t.l&&Mf({},function(n,s){Se(e,s,n)})}function Zf(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Qe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{hb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function ep(t){t.g||t.u||(t.Z=1,wf(t.Ia,t),t.A=0)}function ml(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Br(Qe(t.Ia,t),sp(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,tp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Br(Qe(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,it(10),No(this),tp(this))};function gl(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function tp(t){t.g=new jr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Qt(t.sa);Se(e,"RID","rpc"),Se(e,"SID",t.I),Se(e,"CI",t.L?"0":"1"),Se(e,"AID",t.T),Se(e,"TYPE","xmlhttp"),Kr(t,e),t.o&&t.s&&fl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ro(Qt(e)),n.s=null,n.P=!0,Lf(n,t)}D.cb=function(){this.v!=null&&(this.v=null,No(this),ml(this),it(19))};function Qi(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function np(t,e){var n=null;if(t.g==e){Qi(t),gl(t),t.g=null;var s=2}else if(hc(t.h,e))n=e.D,qf(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=bo(),je(s,new Af(s,n)),ko(t)}else ep(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&yb(t,e)||s==2&&ml(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Un(t,5);break;case 4:Un(t,10);break;case 3:Un(t,6);break;default:Un(t,2)}}}function sp(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Un(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Qe(t.kb,t);n||(n=new Bn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Hi(n,"https"),Ro(n)),db(n.toString(),s)}else it(2);t.G=0,t.l&&t.l.va(e),rp(t),Jf(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function rp(t){if(t.G=0,t.la=[],t.l){const e=zf(t.h);(e.length!=0||t.i.length!=0)&&(Qu(t.la,e),Qu(t.la,t.i),t.h.i.length=0,Xc(t.i),t.i.length=0),t.l.ua()}}function ip(t,e,n){var s=n instanceof Bn?Qt(n):new Bn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Gi(s,s.m);else{var r=W.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Bn(null,void 0);s&&Hi(i,s),e&&(i.g=e),r&&Gi(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Se(s,n,e),Se(s,"VER",t.ma),Kr(t,s),s}function op(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ie(new zr({jb:!0})):new Ie(t.ra),e.Ka(t.H),e}function ap(){}D=ap.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Yi(){if(_s&&!(10<=Number(OS)))throw Error("Environmental error: no available transport.")}Yi.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Ve.call(this),this.g=new Xf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!zi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Us(this)}qe(pt,Ve);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ip(t,null,t.V),ko(t)};pt.prototype.close=function(){pl(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rl(t),t=n);e.i.push(new cb(e.ab++,t)),e.G==3&&ko(e)};pt.prototype.M=function(){this.g.l=null,delete this.j,pl(this.g),delete this.g,pt.X.M.call(this)};function cp(t){cl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(cp,cl);function lp(){ll.call(this),this.status=1}qe(lp,ll);function Us(t){this.g=t}qe(Us,ap);Us.prototype.xa=function(){je(this.g,"a")};Us.prototype.wa=function(t){je(this.g,new cp(t))};Us.prototype.va=function(t){je(this.g,new lp)};Us.prototype.ua=function(){je(this.g,"b")};Yi.prototype.createWebChannel=Yi.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;To.NO_ERROR=0;To.TIMEOUT=8;To.HTTP_ERROR=6;Cf.COMPLETE="complete";Nf.EventType=Fr;Fr.OPEN="a";Fr.CLOSE="b";Fr.ERROR="c";Fr.MESSAGE="d";Ve.prototype.listen=Ve.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.Oa;Ie.prototype.getLastErrorCode=Ie.prototype.Ea;Ie.prototype.getStatus=Ie.prototype.aa;Ie.prototype.getResponseJson=Ie.prototype.Sa;Ie.prototype.getResponseText=Ie.prototype.fa;Ie.prototype.send=Ie.prototype.da;Ie.prototype.setWithCredentials=Ie.prototype.Ka;var vb=function(){return new Yi},_b=function(){return bo()},xa=To,wb=Cf,Sb=es,ah={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},bb=zr,vi=Nf,Tb=Ie;const ch="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Uc("@firebase/firestore");function lh(){return Hn.logLevel}function O(t,...e){if(Hn.logLevel<=ce.DEBUG){const n=e.map(yl);Hn.debug(`Firestore (${Vs}): ${t}`,...n)}}function Yt(t,...e){if(Hn.logLevel<=ce.ERROR){const n=e.map(yl);Hn.error(`Firestore (${Vs}): ${t}`,...n)}}function dc(t,...e){if(Hn.logLevel<=ce.WARN){const n=e.map(yl);Hn.warn(`Firestore (${Vs}): ${t}`,...n)}}function yl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+t;throw Yt(e),new Error(e)}function pe(t,e){t||z()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Eb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class Ib{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rb{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string"),new up(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new Ke(e)}}class Ab{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(pe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Cb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Ab(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.A=n.token,new Nb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Lb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new De(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new De(0,0))}static max(){return new Q(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Er.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Er?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends Er{construct(e,n,s){return new ye(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const xb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Er{construct(e,n,s){return new Ge(e,n,s)}static isValidIdentifier(e){return xb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new A(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new A(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new A(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ye.fromString(e))}static fromName(e){return new M(ye.fromString(e).popFirst(5))}static empty(){return new M(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ye(e.slice()))}}function Db(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new De(n+1,0):new De(n,s));return new mn(r,M.empty(),e)}function Ob(t){return new mn(t.readTime,t.key,-1)}class mn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new mn(Q.min(),M.empty(),-1)}static max(){return new mn(Q.max(),M.empty(),-1)}}function Mb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ub{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==Pb)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Gr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}vl.at=-1;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=/^[_a-zA-Z][_a-zA-Z0-9]*(?:\.[_a-zA-Z][_a-zA-Z0-9]*)*$/;class _l{constructor(e){this.alias=e}static ht(e){return Vb.test(e)}canonicalString(){let e=this.alias.replace(/\\/g,"\\\\").replace(/`/g,"\\`");return _l.ht(e)||(e="`"+e+"`"),e}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,s){this.alias=e,this.lt=n,this.fieldPath=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ir{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ir("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ir&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){return t==null}function Xi(t){return t===0&&1/t==-1/0}function Fb(t){return typeof t=="number"&&Number.isInteger(t)&&!Xi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new jb("Invalid base64 string: "+r):r}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const qb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(t){if(pe(!!t),typeof t=="string"){let e=0;const n=qb.exec(t);if(pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ss(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fp(t){const e=t.mapValue.fields.__previous_value__;return wl(e)?fp(e):e}function Rr(t){const e=gn(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wl(t)?4:zb(t)?9007199254740991:10:z()}function Ot(t,e){if(t===e)return!0;const n=Gn(t);if(n!==Gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rr(t).isEqual(Rr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=gn(s.timestampValue),o=gn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ss(s.bytesValue).isEqual(Ss(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ne(s.geoPointValue.latitude)===Ne(r.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ne(s.integerValue)===Ne(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ne(s.doubleValue),o=Ne(r.doubleValue);return i===o?Xi(i)===Xi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(uh(i)!==uh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ot(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Ar(t,e){return(t.values||[]).find(n=>Ot(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=Gn(t),s=Gn(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ne(r.integerValue||r.doubleValue),a=Ne(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hh(t.timestampValue,e.timestampValue);case 4:return hh(Rr(t),Rr(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ss(r),a=Ss(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Ne(r.latitude),Ne(i.latitude));return o!==0?o:ue(Ne(r.longitude),Ne(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=bs(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===_i.mapValue&&i===_i.mapValue)return 0;if(r===_i.mapValue)return 1;if(i===_i.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=bs(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function hh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=gn(t),s=gn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Ts(t){return fc(t)}function fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=gn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ss(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=fc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${fc(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function Ji(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pc(t){return!!t&&"integerValue"in t}function Sl(t){return!!t&&"arrayValue"in t}function dh(t){return!!t&&"nullValue"in t}function fh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Li(t){return!!t&&"mapValue"in t}function ar(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ar(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ar(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.position=e,this.inclusive=n}}function ph(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=bs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function mh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ot(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{}class ke extends pp{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Kb(e,n,s):n==="array-contains"?new Qb(e,s):n==="in"?new Yb(e,s):n==="not-in"?new Xb(e,s):n==="array-contains-any"?new Jb(e,s):new ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Hb(e,s):new Gb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bs(n,this.value)):n!==null&&Gn(this.value)===Gn(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Tt extends pp{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Tt(e,n)}matches(e){return mp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function mp(t){return t.op==="and"}function gp(t){return Wb(t)&&mp(t)}function Wb(t){for(const e of t.filters)if(e instanceof Tt)return!1;return!0}function mc(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Ts(t.value);if(gp(t))return t.filters.map(e=>mc(e)).join(",");{const e=t.filters.map(n=>mc(n)).join(",");return`${t.op}(${e})`}}function yp(t,e){return t instanceof ke?function(n,s){return s instanceof ke&&n.op===s.op&&n.field.isEqual(s.field)&&Ot(n.value,s.value)}(t,e):t instanceof Tt?function(n,s){return s instanceof Tt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&yp(i,s.filters[o]),!0):!1}(t,e):void z()}function vp(t){return t instanceof ke?function(e){return`${e.field.canonicalString()} ${e.op} ${Ts(e.value)}`}(t):t instanceof Tt?function(e){return e.op.toString()+" {"+e.getFilters().map(vp).join(" ,")+"}"}(t):"Filter"}class Kb extends ke{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class Hb extends ke{constructor(e,n){super(e,"in",n),this.keys=_p("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Gb extends ke{constructor(e,n){super(e,"not-in",n),this.keys=_p("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _p(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class Qb extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sl(n)&&Ar(n.arrayValue,this.value)}}class Yb extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ar(this.value.arrayValue,n)}}class Xb extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ar(this.value.arrayValue,n)}}class Jb extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ar(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n="asc"){this.field=e,this.dir=n}}function Zb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wi(this.root,e,this.comparator,!0)}}class wi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=r??Fe.EMPTY,this.right=i??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Fe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gh(this.data.getIterator())}getIteratorFrom(e){return new gh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class gh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new ht([])}unionWith(e){let n=new Oe(Ge.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Li(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ar(n)}setAll(e){let n=Ge.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ar(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Li(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Li(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ts(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new rt(ar(this.value))}}function wp(t){const e=[];return ts(t.fields,(n,s)=>{const r=new Ge([n]);if(Li(s)){const i=wp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new He(e,0,Q.min(),Q.min(),Q.min(),rt.empty(),0)}static newFoundDocument(e,n,s,r){return new He(e,1,n,Q.min(),s,r,0)}static newNoDocument(e,n){return new He(e,2,n,Q.min(),Q.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new He(e,3,n,Q.min(),Q.min(),rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function yh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new eT(t,e,n,s,r,i,o)}function bl(t){const e=Y(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>mc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Lo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ts(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ts(s)).join(",")),e._t=n}return e._t}function Tl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mh(t.startAt,e.startAt)&&mh(t.endAt,e.endAt)}function gc(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function tT(t,e,n,s,r,i,o,a){return new Tn(t,e,n,s,r,i,o,a)}function xo(t){return new Tn(t)}function vh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function El(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Do(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Il(t){return t.collectionGroup!==null}function Fn(t){const e=Y(t);if(e.wt===null){e.wt=[];const n=Do(e),s=El(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new ps(n)),e.wt.push(new ps(Ge.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ps(Ge.keyField(),i))}}}return e.wt}function Mt(t){const e=Y(t);if(!e.gt)if(e.limitType==="F")e.gt=yh(e.path,e.collectionGroup,Fn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Fn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ps(i.field,o))}const s=e.endAt?new Es(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Es(e.startAt.position,e.startAt.inclusive):null;e.gt=yh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function yc(t,e){e.getFirstInequalityField(),Do(t);const n=t.filters.concat([e]);return new Tn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zi(t,e,n){return new Tn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oo(t,e){return Tl(Mt(t),Mt(e))&&t.limitType===e.limitType}function Sp(t){return`${bl(Mt(t))}|lt:${t.limitType}`}function vc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>vp(s)).join(", ")}]`),Lo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ts(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ts(s)).join(",")),`Target(${n})`}(Mt(t))}; limitType=${t.limitType})`}function Mo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Fn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ph(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Fn(n),s)||n.endAt&&!function(r,i,o){const a=ph(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Fn(n),s))}(t,e)}function nT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bp(t){return(e,n)=>{let s=!1;for(const r of Fn(t)){const i=sT(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function sT(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?bs(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(e)?"-0":e}}function Ep(t){return{integerValue:""+t}}function rT(t,e){return Fb(e)?Ep(e):Tp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this._=void 0}}function iT(t,e,n){return t instanceof Cr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Nr?Rp(t,e):t instanceof kr?Ap(t,e):function(s,r){const i=Ip(s,r),o=_h(i)+_h(s.It);return pc(i)&&pc(s.It)?Ep(o):Tp(s.Tt,o)}(t,e)}function oT(t,e,n){return t instanceof Nr?Rp(t,e):t instanceof kr?Ap(t,e):n}function Ip(t,e){return t instanceof eo?pc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Cr extends Po{}class Nr extends Po{constructor(e){super(),this.elements=e}}function Rp(t,e){const n=Cp(e);for(const s of t.elements)n.some(r=>Ot(r,s))||n.push(s);return{arrayValue:{values:n}}}class kr extends Po{constructor(e){super(),this.elements=e}}function Ap(t,e){let n=Cp(e);for(const s of t.elements)n=n.filter(r=>!Ot(r,s));return{arrayValue:{values:n}}}class eo extends Po{constructor(e,n){super(),this.Tt=e,this.It=n}}function _h(t){return Ne(t.integerValue||t.doubleValue)}function Cp(t){return Sl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n){this.field=e,this.transform=n}}function cT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Nr&&s instanceof Nr||n instanceof kr&&s instanceof kr?ws(n.elements,s.elements,Ot):n instanceof eo&&s instanceof eo?Ot(n.It,s.It):n instanceof Cr&&s instanceof Cr}(t.transform,e.transform)}class lT{constructor(e,n){this.version=e,this.transformResults=n}}class xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uo{}function Np(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lp(t.key,xt.none()):new Qr(t.key,t.data,xt.none());{const n=t.data,s=rt.empty();let r=new Oe(Ge.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new En(t.key,s,new ht(r.toArray()),xt.none())}}function uT(t,e,n){t instanceof Qr?function(s,r,i){const o=s.value.clone(),a=Sh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof En?function(s,r,i){if(!xi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Sh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(kp(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function cr(t,e,n,s){return t instanceof Qr?function(r,i,o,a){if(!xi(r.precondition,i))return o;const c=r.value.clone(),l=bh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof En?function(r,i,o,a){if(!xi(r.precondition,i))return o;const c=bh(r.fieldTransforms,a,i),l=i.data;return l.setAll(kp(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return xi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function hT(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ip(s.transform,r||null);i!=null&&(n===null&&(n=rt.empty()),n.set(s.field,i))}return n||null}function wh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ws(n,s,(r,i)=>cT(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qr extends Uo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class En extends Uo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Sh(t,e,n){const s=new Map;pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,oT(o,a,n[r]))}return s}function bh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,iT(i,o,e))}return s}class Lp extends Uo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dT extends Uo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ie;function pT(t){switch(t){default:return z();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function xp(t){if(t===void 0)return Yt("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ce.OK:return _.OK;case Ce.CANCELLED:return _.CANCELLED;case Ce.UNKNOWN:return _.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return _.INTERNAL;case Ce.UNAVAILABLE:return _.UNAVAILABLE;case Ce.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ce.NOT_FOUND:return _.NOT_FOUND;case Ce.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ce.ABORTED:return _.ABORTED;case Ce.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ce.DATA_LOSS:return _.DATA_LOSS;default:return z()}}(ie=Ce||(Ce={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return dp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new Me(M.comparator);function Xt(){return mT}const Dp=new Me(M.comparator);function nr(...t){let e=Dp;for(const n of t)e=e.insert(n.key,n);return e}function Op(t){let e=Dp;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Vn(){return lr()}function Mp(){return lr()}function lr(){return new $s(t=>t.toString(),(t,e)=>t.isEqual(e))}const gT=new Me(M.comparator),yT=new Oe(M.comparator);function se(...t){let e=yT;for(const n of t)e=e.add(n);return e}const vT=new Oe(ue);function Pp(){return vT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Yr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Vo(Q.min(),r,Pp(),Xt(),se())}}class Yr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Yr(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class Up{constructor(e,n){this.targetId=e,this.Rt=n}}class Vp{constructor(e,n,s=Ze.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Th{constructor(){this.bt=0,this.vt=Ih(),this.Pt=Ze.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=se(),n=se(),s=se();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new Yr(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Ih()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class _T{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Xt(),this.Kt=Eh(),this.Gt=new Oe(ue)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(gc(i))if(s===0){const o=new M(i.path);this.zt(n,o,He.newNoDocument(o,Q.min()))}else pe(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&gc(a.target)){const c=new M(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,He.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=se();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Vo(e,n,this.Gt,this.Ut,s);return this.Ut=Xt(),this.Kt=Eh(),this.Gt=new Oe(ue),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Th,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Oe(ue),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Th),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Eh(){return new Me(M.comparator)}function Ih(){return new Me(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ST=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),bT=(()=>({and:"AND",or:"OR"}))();class TT{constructor(e,n){this.databaseId=e,this.yt=n}}function to(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $p(t,e){return t.yt?e.toBase64():e.toUint8Array()}function ET(t,e){return to(t,e.toTimestamp())}function Dt(t){return pe(!!t),Q.fromTimestamp(function(e){const n=gn(e);return new De(n.seconds,n.nanos)}(t))}function Rl(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Bp(t){const e=ye.fromString(t);return pe(Wp(e)),e}function _c(t,e){return Rl(t.databaseId,e.path)}function Da(t,e){const n=Bp(e);if(n.get(1)!==t.databaseId.projectId)throw new A(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Fp(n))}function wc(t,e){return Rl(t.databaseId,e)}function IT(t){const e=Bp(t);return e.length===4?ye.emptyPath():Fp(e)}function Sc(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fp(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rh(t,e,n){return{name:_c(t,e),fields:n.value.mapValue.fields}}function RT(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(pe(l===void 0||typeof l=="string"),Ze.fromBase64String(l||"")):(pe(l===void 0||l instanceof Uint8Array),Ze.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:xp(c.code);return new A(l,c.message||"")}(o);n=new Vp(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Da(t,s.document.name),i=Dt(s.document.updateTime),o=s.document.createTime?Dt(s.document.createTime):Q.min(),a=new rt({mapValue:{fields:s.document.fields}}),c=He.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Di(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Da(t,s.document),i=s.readTime?Dt(s.readTime):Q.min(),o=He.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Di([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Da(t,s.document),i=s.removedTargetIds||[];n=new Di([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new fT(r),o=s.targetId;n=new Up(o,i)}}return n}function AT(t,e){let n;if(e instanceof Qr)n={update:Rh(t,e.key,e.value)};else if(e instanceof Lp)n={delete:_c(t,e.key)};else if(e instanceof En)n={update:Rh(t,e.key,e.data),updateMask:MT(e.fieldMask)};else{if(!(e instanceof dT))return z();n={verify:_c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Cr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Nr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof kr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof eo)return{fieldPath:i.field.canonicalString(),increment:o.It};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:ET(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function CT(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Dt(s.updateTime):Dt(r);return i.isEqual(Q.min())&&(i=Dt(r)),new lT(i,s.transformResults||[])}(n,e))):[]}function NT(t,e){return{documents:[wc(t,e.path)]}}function jp(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=wc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return zp(Tt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ln(u.field),direction:xT(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||Lo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function kT(t){let e=IT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=qp(u);return h instanceof Tt&&gp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ps(us(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Lo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Es(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Es(d,h)}(n.endAt)),tT(e,r,o,i,a,"F",c,l)}function LT(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function qp(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=us(e.unaryFilter.field);return ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=us(e.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=us(e.unaryFilter.field);return ke.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=us(e.unaryFilter.field);return ke.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return ke.create(us(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Tt.create(e.compositeFilter.filters.map(n=>qp(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function xT(t){return wT[t]}function DT(t){return ST[t]}function OT(t){return bT[t]}function ln(t){return{fieldPath:t.canonicalString()}}function us(t){return Ge.fromServerFormat(t.fieldPath)}function zp(t){return t instanceof ke?function(e){if(e.op==="=="){if(fh(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NAN"}};if(dh(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fh(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NAN"}};if(dh(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(e.field),op:DT(e.op),value:e.value}}}(t):t instanceof Tt?function(e){const n=e.getFilters().map(s=>zp(s));return n.length===1?n[0]:{compositeFilter:{op:OT(e.op),filters:n}}}(t):z()}function MT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Wp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&uT(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=cr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=cr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Mp();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Np(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,s)=>wh(n,s))&&ws(this.baseMutations,e.baseMutations,(n,s)=>wh(n,s))}}class Al{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){pe(e.mutations.length===s.length);let r=gT;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Al(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=Ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.oe=e}}function $T(t){const e=kT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(){this.Ze=new FT}addToCollectionParentIndex(e,n){return this.Ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(mn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class FT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Oe(ye.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Oe(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Is(0)}static Sn(){return new Is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.changes=new $s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&cr(s.mutation,r,ht.empty(),De.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=Vn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=nr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Vn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Xt();const o=lr(),a=lr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof En)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),cr(u.mutation,l,u.mutation.getFieldMask(),De.now())):o.set(l.key,ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new qT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=lr();let r=new Me((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ht.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Mp();u.forEach(d=>{if(!i.has(d)){const g=Np(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Il(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Vn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:Op(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=nr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=nr();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Tn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,He.newInvalidDocument(l)))});let o=nr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&cr(l.mutation,c,ht.empty(),De.now()),Mo(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return T.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Dt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:$T(s.bundledQuery),readTime:Dt(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.overlays=new Me(M.comparator),this.ss=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Vn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Vn(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Vn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Vn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new UT(n,s));let i=this.ss.get(n);i===void 0&&(i=se(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.rs=new Oe(Ue.os),this.us=new Oe(Ue.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Ue(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Ue(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new M(new ye([])),s=new Ue(n,e),r=new Ue(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new M(new ye([])),s=new Ue(n,e),r=new Ue(n,e+1);let i=se();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ue{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return M.comparator(e.key,n.key)||ue(e.gs,n.gs)}static cs(e,n){return ue(e.gs,n.gs)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Oe(Ue.os)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PT(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Ue(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ue(n,0),r=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Oe(ue);return n.forEach(r=>{const i=new Ue(r,0),o=new Ue(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),T.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new M(i),0);let a=new Oe(ue);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),T.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){pe(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return T.forEach(n.mutations,r=>{const i=new Ue(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Ue(n,0),r=this.ps.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.Rs=e,this.docs=new Me(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():He.newInvalidDocument(n))}getEntries(e,n){let s=Xt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():He.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Xt();const o=n.path,a=new M(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Mb(Ob(u),s)<=0||(r.has(u.key)||Mo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){z()}bs(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new QT(this)}getSize(e){return T.resolve(this.size)}}class QT extends jT{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.persistence=e,this.vs=new $s(n=>bl(n),Tl),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Cl,this.targetCount=0,this.Ss=Is.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),T.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Is(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.xn(n),T.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new vl(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new YT(this),this.indexManager=new BT,this.remoteDocumentCache=function(s){return new GT(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new VT(n),this.Os=new WT(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new HT(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const r=new JT(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return T.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class JT extends Ub{constructor(e){super(),this.currentSequenceNumber=e}}class Nl{constructor(e){this.persistence=e,this.Bs=new Cl,this.Ls=null}static qs(e){return new Nl(e)}get Us(){if(this.Ls)return this.Ls;throw z()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),T.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Us,s=>{const r=M.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return T.or([()=>T.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new kl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(vh(n))return T.resolve(null);let s=Mt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Zi(n,null,"F"),s=Mt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,Zi(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,r){return vh(n)||r.isEqual(Q.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(lh()<=ce.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vc(n)),this.qi(e,o,n,Db(r,-1)))})}Bi(e,n){let s=new Oe(bp(e));return n.forEach((r,i)=>{Mo(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return lh()<=ce.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",vc(n)),this.Oi.getDocumentsMatchingQuery(e,n,mn.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Me(ue),this.Gi=new $s(i=>bl(i),Tl),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zT(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function tE(t,e,n,s){return new eE(t,e,n,s)}async function Kp(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function nE(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(m=>{const w=c.docVersions.get(g);pe(w!==null),m.version.compareTo(w)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Hp(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function sE(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ze.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(m,w,k){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,u)&&a.push(n.Ns.updateTargetData(i,g))});let c=Xt(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(rE(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(Q.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function rE(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Xt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function iE(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function oE(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new jn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function bc(t,e,n){const s=Y(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Gr(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Ah(t,e,n){const s=Y(t);let r=Q.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Y(a),h=u.Gi.get(l);return h!==void 0?T.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,Mt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?i:se())).next(a=>(aE(s,nT(e),a),{documents:a,Yi:i})))}function aE(t,e,n){let s=t.Qi.get(e)||Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Ch{constructor(){this.activeTargetIds=Pp()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cE{constructor(){this.Ur=new Ch,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Ch,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);O("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(O("RestConnection","Received: ",c),c),c=>{throw dc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=uE[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new Tb;a.setWithCredentials(!0),a.listenOnce(wb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xa.NO_ERROR:const l=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(l)),i(l);break;case xa.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new A(_.DEADLINE_EXCEEDED,"Request time out"));break;case xa.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(w)>=0?w:_.UNKNOWN}(d.status);o(new A(g,d.message))}else o(new A(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(_.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=vb(),o=_b(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new bb({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");O("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new hE({Yr:m=>{h?O("Connection","Not sending because WebChannel is closed:",m):(u||(O("Connection","Opening WebChannel transport."),l.open(),u=!0),O("Connection","WebChannel sending:",m),l.send(m))},Zr:()=>l.close()}),g=(m,w,k)=>{m.listen(w,J=>{try{k(J)}catch(E){setTimeout(()=>{throw E},0)}})};return g(l,vi.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),g(l,vi.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.oo())}),g(l,vi.EventType.ERROR,m=>{h||(h=!0,dc("Connection","WebChannel transport errored:",m),d.oo(new A(_.UNAVAILABLE,"The operation could not be completed")))}),g(l,vi.EventType.MESSAGE,m=>{var w;if(!h){const k=m.data[0];pe(!!k);const J=k,E=J.error||((w=J[0])===null||w===void 0?void 0:w.error);if(E){O("Connection","WebChannel received error:",E);const V=E.status;let H=function(ee){const ne=Ce[ee];if(ne!==void 0)return xp(ne)}(V),K=E.message;H===void 0&&(H=_.INTERNAL,K="Unknown error status: "+V+" with message "+E.message),h=!0,d.oo(new A(H,K)),l.close()}else O("Connection","WebChannel received:",k),d.uo(k)}}),g(o,Sb.STAT_EVENT,m=>{m.stat===ah.PROXY?O("Connection","Detected buffering proxy"):m.stat===ah.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Oa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){return new TT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Gp(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Yt(n.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new A(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fE extends Qp{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=RT(this.Tt,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?Dt(i.readTime):Q.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Sc(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=gc(a)?{documents:NT(r,a)}:{query:jp(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=$p(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=to(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=LT(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Sc(this.Tt),n.removeTarget=e,this.qo(n)}}class pE extends Qp{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=CT(e.writeResults,e.commitTime),s=Dt(e.commitTime);return this.listener.eu(s,n)}return pe(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Sc(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>AT(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new A(_.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(_.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(_.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}async function gE(t,e,n){const s=Y(t),r=function(l,u,h){const d=jp(l,u),g=[];return h.forEach(m=>{m.lt==="count"?g.push({alias:m.alias.canonicalString(),count:{}}):m.lt==="avg"?g.push({alias:m.alias.canonicalString(),avg:{field:ln(m.fieldPath)}}):m.lt==="sum"&&g.push({alias:m.alias.canonicalString(),sum:{field:ln(m.fieldPath)}})}),{structuredAggregationQuery:{aggregations:g,structuredQuery:d.structuredQuery},parent:d.parent}}(s.Tt,Mt(e),n),i=r.parent;s.connection.ho||delete r.parent;const o=(await s.mo("RunAggregationQuery",i,r,1)).filter(l=>!!l.result);return pe(o.length===1),(a=o[0]).result,a.result.aggregateFields,new rt({mapValue:{fields:(c=a.result)===null||c===void 0?void 0:c.aggregateFields}});var a,c}class yE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Yt(n),this.cu=!1):O("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{In(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.mu.add(4),await Xr(c),c.pu.set("Unknown"),c.mu.delete(4),await Bo(c)}(this))})}),this.pu=new yE(s,r)}}async function Bo(t){if(In(t))for(const e of t.gu)await e(!0)}async function Xr(t){for(const e of t.gu)await e(!1)}function Yp(t,e){const n=Y(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Dl(n)?xl(n):Bs(n).Mo()&&Ll(n,e))}function Xp(t,e){const n=Y(t),s=Bs(n);n.wu.delete(e),s.Mo()&&Jp(n,e),n.wu.size===0&&(s.Mo()?s.Bo():In(n)&&n.pu.set("Unknown"))}function Ll(t,e){t.Iu.Ft(e.targetId),Bs(t).Jo(e)}function Jp(t,e){t.Iu.Ft(e),Bs(t).Yo(e)}function xl(t){t.Iu=new _T({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Bs(t).start(),t.pu.au()}function Dl(t){return In(t)&&!Bs(t).Oo()&&t.wu.size>0}function In(t){return Y(t).mu.size===0}function Zp(t){t.Iu=void 0}async function _E(t){t.wu.forEach((e,n)=>{Ll(t,e)})}async function wE(t,e){Zp(t),Dl(t)?(t.pu.fu(e),xl(t)):t.pu.set("Unknown")}async function SE(t,e,n){if(t.pu.set("Online"),e instanceof Vp&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await no(t,s)}else if(e instanceof Di?t.Iu.Qt(e):e instanceof Up?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(Q.min()))try{const s=await Hp(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(Ze.EMPTY_BYTE_STRING,c.snapshotVersion)),Jp(r,a);const l=new jn(c.target,a,1,c.sequenceNumber);Ll(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await no(t,s)}}async function no(t,e,n){if(!Gr(e))throw e;t.mu.add(1),await Xr(t),t.pu.set("Offline"),n||(n=()=>Hp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Bo(t)})}function em(t,e){return e().catch(n=>no(t,n,e))}async function Fo(t){const e=Y(t),n=yn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;bE(e);)try{const r=await iE(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,TE(e,r)}catch(r){await no(e,r)}tm(e)&&nm(e)}function bE(t){return In(t)&&t._u.length<10}function TE(t,e){t._u.push(e);const n=yn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function tm(t){return In(t)&&!yn(t).Oo()&&t._u.length>0}function nm(t){yn(t).start()}async function EE(t){yn(t).su()}async function IE(t){const e=yn(t);for(const n of t._u)e.tu(n.mutations)}async function RE(t,e,n){const s=t._u.shift(),r=Al.from(s,e,n);await em(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Fo(t)}async function AE(t,e){e&&yn(t).Xo&&await async function(n,s){if(r=s.code,pT(r)&&r!==_.ABORTED){const i=n._u.shift();yn(n).$o(),await em(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fo(n)}var r}(t,e),tm(t)&&nm(t)}async function kh(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=In(n);n.mu.add(3),await Xr(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Bo(n)}async function CE(t,e){const n=Y(t);e?(n.mu.delete(2),await Bo(n)):e||(n.mu.add(2),await Xr(n),n.pu.set("Unknown"))}function Bs(t){return t.Tu||(t.Tu=function(e,n,s){const r=Y(e);return r.ru(),new fE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:_E.bind(null,t),no:wE.bind(null,t),Ho:SE.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Dl(t)?xl(t):t.pu.set("Unknown")):(await t.Tu.stop(),Zp(t))})),t.Tu}function yn(t){return t.Eu||(t.Eu=function(e,n,s){const r=Y(e);return r.ru(),new pE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:EE.bind(null,t),no:AE.bind(null,t),nu:IE.bind(null,t),eu:RE.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Fo(t)):(await t.Eu.stop(),t._u.length>0&&(O("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ol(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ml(t,e){if(Yt("AsyncQueue",`${e}: ${t}`),Gr(t))return new A(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=nr(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ms;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.Au=new Me(M.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):z():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Rs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rs(e,n,ms.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.bu=void 0,this.listeners=[]}}class kE{constructor(){this.queries=new $s(e=>Sp(e),Oo),this.onlineState="Unknown",this.vu=new Set}}async function Pl(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new NE),r)try{i.bu=await n.onListen(s)}catch(o){const a=Ml(o,`Initialization of query '${vc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&Vl(n)}async function Ul(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function LE(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&Vl(n)}function xE(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Vl(t){t.vu.forEach(e=>{e.next()})}class $l{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Rs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.key=e}}class rm{constructor(e){this.key=e}}class DE{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=se(),this.mutatedKeys=se(),this.ju=bp(e),this.zu=new ms(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Lh,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Mo(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?m!==w&&(s.track({type:3,doc:g}),k=!0):this.Yu(d,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.ju(g,c)>0||l&&this.ju(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(c||l)&&(a=!0)),k&&(g?(o=o.add(g),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return g(h)-g(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Rs(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Lh,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=se(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new rm(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new sm(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=se();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Rs.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class OE{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ME{constructor(e){this.key=e,this.ic=!1}}class PE{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new $s(a=>Sp(a),Oo),this.uc=new Map,this.cc=new Set,this.ac=new Me(M.comparator),this.hc=new Map,this.lc=new Cl,this.fc={},this.dc=new Map,this._c=Is.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function UE(t,e){const n=HE(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await oE(n.localStore,Mt(e));n.isPrimaryClient&&Yp(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await VE(n,e,s,a==="current",o.resumeToken)}return r}async function VE(t,e,n,s,r){t.mc=(h,d,g)=>async function(m,w,k,J){let E=w.view.Hu(k);E.Li&&(E=await Ah(m.localStore,w.query,!1).then(({documents:K})=>w.view.Hu(K,E)));const V=J&&J.targetChanges.get(w.targetId),H=w.view.applyChanges(E,m.isPrimaryClient,V);return Dh(m,w.targetId,H.tc),H.snapshot}(t,h,d,g);const i=await Ah(t.localStore,e,!0),o=new DE(e,i.Yi),a=o.Hu(i.documents),c=Yr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Dh(t,n,l.tc);const u=new OE(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function $E(t,e){const n=Y(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!Oo(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await bc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xp(n.remoteStore,s.targetId),Tc(n,s.targetId)}).catch(Hr)):(Tc(n,s.targetId),await bc(n.localStore,s.targetId,!0))}async function BE(t,e,n){const s=GE(t);try{const r=await function(i,o){const a=Y(i),c=De.now(),l=o.reduce((d,g)=>d.add(g.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Xt(),m=se();return a.ji.getEntries(d,l).next(w=>{g=w,g.forEach((k,J)=>{J.isValidDocument()||(m=m.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(w=>{u=w;const k=[];for(const J of o){const E=hT(J,u.get(J.key).overlayedDocument);E!=null&&k.push(new En(J.key,E,wp(E.value.mapValue),xt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(w=>{h=w;const k=w.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,w.batchId,k)})}).then(()=>({batchId:h.batchId,changes:Op(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Me(ue)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Jr(s,r.changes),await Fo(s.remoteStore)}catch(r){const i=Ml(r,"Failed to persist write");n.reject(i)}}async function im(t,e){const n=Y(t);try{const s=await sE(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?pe(o.ic):r.removedDocuments.size>0&&(pe(o.ic),o.ic=!1))}),await Jr(n,s,e)}catch(s){await Hr(s)}}function xh(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Vl(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function FE(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Me(M.comparator);o=o.insert(i,He.newNoDocument(i,Q.min()));const a=se().add(i),c=new Vo(Q.min(),new Map,new Oe(ue),o,a);await im(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Bl(s)}else await bc(s.localStore,e,!1).then(()=>Tc(s,e,n)).catch(Hr)}async function jE(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await nE(n.localStore,e);am(n,s,null),om(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Jr(n,r)}catch(r){await Hr(r)}}async function qE(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(pe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);am(s,e,n),om(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Jr(s,r)}catch(r){await Hr(r)}}function om(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function am(t,e,n){const s=Y(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Tc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||cm(t,s)})}function cm(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Xp(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Bl(t))}function Dh(t,e,n){for(const s of n)s instanceof sm?(t.lc.addReference(s.key,e),zE(t,s)):s instanceof rm?(O("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||cm(t,s.key)):z()}function zE(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.cc.add(s),Bl(t))}function Bl(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new M(ye.fromString(e)),s=t._c.next();t.hc.set(s,new ME(n)),t.ac=t.ac.insert(n,s),Yp(t.remoteStore,new jn(Mt(xo(n.path)),s,2,vl.at))}}async function Jr(t,e,n){const s=Y(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=kl.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=Y(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Gr(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,i))}async function WE(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await Kp(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new A(_.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Jr(n,s.Wi)}}function KE(t,e){const n=Y(t),s=n.hc.get(e);if(s&&s.ic)return se().add(s.key);{let r=se();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function HE(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=im.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FE.bind(null,e),e.rc.Ho=LE.bind(null,e.eventManager),e.rc.gc=xE.bind(null,e.eventManager),e}function GE(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qE.bind(null,e),e}class QE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=$o(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return tE(this.persistence,new ZT,e.initialUser,this.Tt)}Tc(e){return new XT(Nl.qs,this.Tt)}Ic(e){return new cE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=WE.bind(null,this.syncEngine),await CE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kE}createDatastore(e){const n=$o(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new dE(r));var r;return function(i,o,a,c){return new mE(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>xh(this.syncEngine,a,0),o=Nh.C()?new Nh:new lE,new vE(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new PE(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);O("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Xr(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Yt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ke.UNAUTHENTICATED,this.clientId=hp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ml(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function JE(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Kp(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ZE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eI(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>kh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>kh(e.remoteStore,i)),t.onlineComponents=e}async function eI(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await JE(t,new QE)),t.offlineComponents}async function jo(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await ZE(t,new YE)),t.onlineComponents}function tI(t){return jo(t).then(e=>e.remoteStore)}function nI(t){return jo(t).then(e=>e.syncEngine)}function sI(t){return jo(t).then(e=>e.datastore)}async function so(t){const e=await jo(t),n=e.eventManager;return n.onListen=UE.bind(null,e.syncEngine),n.onUnlisten=$E.bind(null,e.syncEngine),n}function rI(t,e,n={}){const s=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Fl({next:h=>{i.enqueueAndForget(()=>Ul(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new A(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new A(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $l(xo(o.path),l,{includeMetadataChanges:!0,Ou:!0});return Pl(r,u)}(await so(t),t.asyncQueue,e,n,s)),s.promise}function iI(t,e,n={}){const s=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Fl({next:h=>{i.enqueueAndForget(()=>Ul(r,u)),h.fromCache&&a.source==="server"?c.reject(new A(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new $l(o,l,{includeMetadataChanges:!0,Ou:!0});return Pl(r,u)}(await so(t),t.asyncQueue,e,n,s)),s.promise}const Oh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e,n){if(!n)throw new A(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oI(t,e,n,s){if(e===!0&&s===!0)throw new A(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mh(t){if(!M.isDocumentKey(t))throw new A(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ph(t){if(M.isDocumentKey(t))throw new A(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qo(t);throw new A(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function aI(t,e){if(e<=0)throw new A(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,oI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Eb;switch(n.type){case"gapi":const s=n.client;return new Cb(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Oh.get(e);n&&(O("ComponentProvider","Removing Datastore"),Oh.delete(e),n.terminate())}(this),Promise.resolve()}}function cI(t,e,n,s={}){var r;const i=(t=dt(t,zo))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&dc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ke.MOCK_USER;else{o=zy(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new A(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ke(c)}t._authCredentials=new Ib(new up(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}}class Et{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Et(this.firestore,e,this._query)}}class pn extends Et{constructor(e,n,s){super(e,n,xo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new M(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function Qn(t,e,...n){if(t=Ee(t),lm("collection","path",e),t instanceof zo){const s=ye.fromString(e,...n);return Ph(s),new pn(t,null,s)}{if(!(t instanceof Xe||t instanceof pn))throw new A(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return Ph(s),new pn(t.firestore,null,s)}}function vn(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=hp.R()),lm("doc","path",e),t instanceof zo){const s=ye.fromString(e,...n);return Mh(s),new Xe(t,null,new M(s))}{if(!(t instanceof Xe||t instanceof pn))throw new A(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return Mh(s),new Xe(t.firestore,t instanceof pn?t.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Gp(this,"async_queue_retry"),this.Hc=()=>{const n=Oa();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Oa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Lt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Gr(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Yt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Ol.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&z()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Vh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class _n extends zo{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new lI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||um(this),this._firestoreClient.terminate()}}function uI(t,e){const n=typeof t=="object"?t:Cd(),s=typeof t=="string"?t:e||"(default)",r=$c(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Fy("firestore");i&&cI(r,...i)}return r}function Zr(t){return t._firestoreClient||um(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function um(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Bb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new XE(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e="count",n){this._aggregateType=e,this._internalFieldPath=n,this.type="AggregateField"}}class dI{constructor(e,n,s){this._userDataWriter=n,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertValue(this._data.value)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this._byteString=e}static fromBase64String(e){try{return new As(Ze.fromBase64String(e))}catch(n){throw new A(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new As(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=/^__.*__$/;class pI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new En(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qr(e,this.data,n,this.fieldTransforms)}}class hm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new En(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class ql{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new ql(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return ro(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(dm(this.ra)&&fI.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class mI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||$o(e)}wa(e,n,s,r=!1){return new ql({ra:e,methodName:n,_a:s,path:Ge.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Ho(t){const e=t._freezeSettings(),n=$o(t._databaseId);return new mI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gI(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);Wl("Data must be an object, but it was:",o,s);const a=pm(s,o);let c,l;if(i.merge)c=new ht(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Ec(e,h,n);if(!o.contains(d))throw new A(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);gm(u,d)||u.push(d)}c=new ht(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new pI(new rt(a),c,l)}class Go extends Ko{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Go}}class zl extends Ko{_toFieldTransform(e){return new aT(e.path,new Cr)}isEqual(e){return e instanceof zl}}function yI(t,e,n,s){const r=t.wa(1,e,n);Wl("Data must be an object, but it was:",r,s);const i=[],o=rt.empty();ts(s,(c,l)=>{const u=Kl(e,c,n);l=Ee(l);const h=r.ha(u);if(l instanceof Go)i.push(u);else{const d=ei(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new ht(i);return new hm(o,a,r.fieldTransforms)}function vI(t,e,n,s,r,i){const o=t.wa(1,e,n),a=[Ec(e,s,n)],c=[r];if(i.length%2!=0)throw new A(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ec(e,i[d])),c.push(i[d+1]);const l=[],u=rt.empty();for(let d=a.length-1;d>=0;--d)if(!gm(l,a[d])){const g=a[d];let m=c[d];m=Ee(m);const w=o.ha(g);if(m instanceof Go)l.push(g);else{const k=ei(m,w);k!=null&&(l.push(g),u.set(g,k))}}const h=new ht(l);return new hm(u,h,o.fieldTransforms)}function fm(t,e,n,s=!1){return ei(n,t.wa(s?4:3,e))}function ei(t,e){if(mm(t=Ee(t)))return Wl("Unsupported field value:",e,t),pm(t,e);if(t instanceof Ko)return function(n,s){if(!dm(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ei(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rT(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=De.fromDate(n);return{timestampValue:to(s.Tt,r)}}if(n instanceof De){const r=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:to(s.Tt,r)}}if(n instanceof jl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof As)return{bytesValue:$p(s.Tt,n._byteString)};if(n instanceof Xe){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Rl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${qo(n)}`)}(t,e)}function pm(t,e){const n={};return dp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(s,r)=>{const i=ei(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function mm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof jl||t instanceof As||t instanceof Xe||t instanceof Ko)}function Wl(t,e,n){if(!mm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=qo(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Ec(t,e,n){if((e=Ee(e))instanceof Wo)return e._internalPath;if(typeof e=="string")return Kl(t,e);throw ro("Field path arguments must be of type string or ",t,!1,void 0,n)}const _I=new RegExp("[~\\*/\\[\\]]");function Kl(t,e,n){if(e.search(_I)>=0)throw ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wo(...e.split("."))._internalPath}catch{throw ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ro(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new A(_.INVALID_ARGUMENT,a+t+c)}function gm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wI extends Hl{data(){return super.data()}}function Gl(t,e){return typeof e=="string"?Kl(t,e):e instanceof Wo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ql{}class ti extends Ql{}function ur(t,e,...n){let s=[];e instanceof Ql&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Xl).length,o=r.filter(a=>a instanceof Yl).length;if(i>1||i>0&&o>0)throw new A(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Yl extends ti{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Yl(e,n,s)}_apply(e){const n=this._parse(e);return _m(e._query,n),new Et(e.firestore,e.converter,yc(e._query,n))}_parse(e){const n=Ho(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new A(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Fh(u,l);const d=[];for(const g of u)d.push(Bh(a,r,g));h={arrayValue:{values:d}}}else h=Bh(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Fh(u,l),h=fm(o,i,u,l==="in"||l==="not-in");return ke.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Xl extends Ql{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Xl(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Tt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)_m(i,a),i=yc(i,a)}(e._query,n),new Et(e.firestore,e.converter,yc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Jl extends ti{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Jl(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new A(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ps(r,i);return function(a,c){if(El(a)===null){const l=Do(a);l!==null&&wm(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Et(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Tn(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function hr(t,e="asc"){const n=e,s=Gl("orderBy",t);return Jl._create(s,n)}class Zl extends ti{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Zl(e,n,s)}_apply(e){return new Et(e.firestore,e.converter,Zi(e._query,this._limit,this._limitType))}}function $h(t){return aI("limit",t),Zl._create("limit",t,"F")}class eu extends ti{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new eu(e,n,s)}_apply(e){const n=vm(e,this.type,this._docOrFields,this._inclusive);return new Et(e.firestore,e.converter,function(s,r){return new Tn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function SI(...t){return eu._create("startAfter",t,!1)}class tu extends ti{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new tu(e,n,s)}_apply(e){const n=vm(e,this.type,this._docOrFields,this._inclusive);return new Et(e.firestore,e.converter,function(s,r){return new Tn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function bI(...t){return tu._create("endBefore",t,!1)}function vm(t,e,n,s){if(n[0]=Ee(n[0]),n[0]instanceof Hl)return function(r,i,o,a,c){if(!a)throw new A(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Fn(r))if(u.field.isKeyField())l.push(Ji(i,a.key));else{const h=a.data.field(u.field);if(wl(h))throw new A(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new A(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Es(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=Ho(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new A(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<l.length;g++){const m=l[g];if(h[g].field.isKeyField()){if(typeof m!="string")throw new A(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Il(i)&&m.indexOf("/")!==-1)throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const w=i.path.child(ye.fromString(m));if(!M.isDocumentKey(w))throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const k=new M(w);d.push(Ji(o,k))}else{const w=fm(a,c,m);d.push(w)}}return new Es(d,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function Bh(t,e,n){if(typeof(n=Ee(n))=="string"){if(n==="")throw new A(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Il(e)&&n.indexOf("/")!==-1)throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ye.fromString(n));if(!M.isDocumentKey(s))throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ji(t,new M(s))}if(n instanceof Xe)return Ji(t,n._key);throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qo(n)}.`)}function Fh(t,e){if(!Array.isArray(t)||t.length===0)throw new A(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _m(t,e){if(e.isInequality()){const s=Do(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new A(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=El(t);i!==null&&wm(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function wm(t,e,n){if(!n.isEqual(e))throw new A(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class TI{convertValue(e,n="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const s={};return ts(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new jl(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=fp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Rr(e));default:return null}}convertTimestamp(e){const n=gn(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ye.fromString(e);pe(Wp(s));const r=new Ir(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||Yt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function II(){return new hI("count")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sm extends Hl{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Gl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Oi extends Sm{data(e={}){return super.data(e)}}class bm{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new sr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Oi(this._firestore,this._userDataWriter,s.key,s,new sr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Oi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new sr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Oi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new sr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:RI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){t=dt(t,Xe);const e=dt(t.firestore,_n);return rI(Zr(e),t._key).then(n=>Em(e,t,n))}class Yo extends TI{constructor(e){super(),this.firestore=e}convertBytes(e){return new As(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}function nu(t){t=dt(t,Et);const e=dt(t.firestore,_n),n=Zr(e),s=new Yo(e);return ym(t._query),iI(n,t._query).then(r=>new bm(e,s,t,r))}function Ic(t,e,n){t=dt(t,Xe);const s=dt(t.firestore,_n),r=EI(t.converter,e,n);return Tm(s,[gI(Ho(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,xt.none())])}function AI(t,e,n,...s){t=dt(t,Xe);const r=dt(t.firestore,_n),i=Ho(r);let o;return o=typeof(e=Ee(e))=="string"||e instanceof Wo?vI(i,"updateDoc",t._key,e,n,s):yI(i,"updateDoc",t._key,e),Tm(r,[o.toMutation(t._key,xt.exists(!0))])}function CI(t,...e){var n,s,r;t=Ee(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Vh(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Xe)l=dt(t.firestore,_n),u=xo(t._key.path),c={next:h=>{e[o]&&e[o](Em(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=dt(t,Et);l=dt(h.firestore,_n),u=h._query;const d=new Yo(l);c={next:g=>{e[o]&&e[o](new bm(l,d,h,g))},error:e[o+1],complete:e[o+2]},ym(t._query)}return function(h,d,g,m){const w=new Fl(m),k=new $l(d,w,g);return h.asyncQueue.enqueueAndForget(async()=>Pl(await so(h),k)),()=>{w.Pc(),h.asyncQueue.enqueueAndForget(async()=>Ul(await so(h),k))}}(Zr(l),u,a,c)}function Tm(t,e){return function(n,s){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>BE(await nI(n),s,r)),r.promise}(Zr(t),e)}function Em(t,e,n){const s=n.docs.get(e._key),r=new Yo(t);return new Sm(t,r,e._key,s,new sr(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){return NI(t,{count:II()})}function NI(t,e){const n=dt(t.firestore,_n),s=Zr(n),r=function(i,o){const a=[];for(const c in i)Object.prototype.hasOwnProperty.call(i,c)&&a.push(o(i[c],c,i));return a}(e,(i,o)=>new $b(new _l(o),i._aggregateType,i._internalFieldPath));return function(i,o,a){const c=new Lt;return i.asyncQueue.enqueueAndForget(async()=>{try{if(In(await tI(i))){const l=await sI(i);c.resolve(gE(l,o,a))}else c.reject(new A(_.UNAVAILABLE,"Failed to get aggregate result because the client is offline."))}catch(l){c.reject(l)}}),c.promise}(s,t._query,r).then(i=>function(o,a,c){const l=new Yo(o);return new dI(a,l,c)}(n,t,i))}function Im(){return new zl("serverTimestamp")}(function(t,e=!0){(function(n){Vs=n})(Dr),ys(new qn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new _n(new Rb(n.getProvider("auth-internal")),new kb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ir(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),fn(ch,"3.8.4",t),fn(ch,"3.8.4","esm2017")})();const{VITE_API_KEY:kI,VITE_AUTH_DOMAIN:LI,VITE_PROJECT_ID:xI,VITE_MESSAGE_SENDER_ID:DI,VITE_STORAGE_BUCKET:OI,VITE_APP_ID:MI}={VITE_API_KEY:"AIzaSyD9xKYChzMoHnq4ba4WYo_qx25dMrAL90Q",VITE_AUTH_DOMAIN:"lossom-214c3.firebaseapp.com",VITE_PROJECT_ID:"lossom-214c3",VITE_STORAGE_BUCKET:"lossom-214c3.appspot.com",VITE_MESSAGE_SENDER_ID:"483685773935",VITE_APP_ID:"1:483685773935:web:02aab7999f1df1b4bc139a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},PI={apiKey:kI,authDomain:LI,projectId:xI,storageBucket:OI,messagingSenderId:DI,appId:MI},Rm=Ad(PI),ni=_S(Rm),ft=uI(Rm),jh=new qt,ru=async t=>{let e=[];return(await nu(Qn(ft,t))).forEach(s=>{e.push(s.data())}),e};function iu(){const[t,e]=b.useState(!1),[n,s]=b.useState(null),r=b.useCallback(async()=>{e(!0);try{return await iw(ni)}catch(i){s(i)}finally{e(!1)}},[]);return b.useMemo(()=>({isLoading:t,error:n,signOut:r}),[t,n,r])}function UI(t){const[e,n]=b.useState(!1),[s,r]=b.useState(null),[i,o]=b.useState(null),a=b.useCallback(async c=>{n(!0);try{if(c){const l=vn(ft,t,c),u=await Qo(l);if(u.exists()){let h={id:u.id,...u.data()};o(h)}}else{const l=Qn(ft,t),{docs:u}=await nu(l),h=u.map(d=>({id:d.id,...d.data()}));o(h)}}catch(l){r(l)}finally{n(!1)}},[t]);return b.useMemo(()=>({isLoading:e,error:s,data:i,readData:a}),[a,s,e,i])}function Am(t="users"){const[e,n]=b.useState(!1),[s,r]=b.useState(null),i=b.useCallback(async(o,a={})=>{const c=vn(ft,t,o.uid),l=vn(Qn(ft,t,o.uid,"flowerList"));n(!0);try{if((await Qo(c)).exists())throw new ReferenceError("이미 Firestore에 가입 등록된 사용자입니다.");{const h=Im(),{email:d,displayName:g,uid:m}=o;await Ic(c,{createAt:h,uid:m,displayName:g,email:d,userNickname:"",url:"",isMade:!1,bgSrc:"",...a}),await Ic(l,{nickname:"6lossom",contents:"환영합니다.",flowerSrc:"cherry-blossom1",createAt:h})}}catch(u){r(u)}finally{n(!1)}},[t]);return b.useMemo(()=>({isLoading:e,error:s,createAuthUser:i}),[i,s,e])}const VI="_loginButton_mv69o_7",$I={loginButton:VI},qh=({text:t,className:e,onClick:n})=>f.jsx("button",{className:yt($I.loginButton,e),onClick:n,children:t}),BI="_ProjectInfoBackground_1c3wq_7",FI="_ProjectInfoContainer_1c3wq_29",jI="_projectInfoClose_1c3wq_40",Ma={ProjectInfoBackground:BI,ProjectInfoContainer:FI,projectInfoClose:jI},qI="_A11yHidden_1urfp_1",zI="_focusable_1urfp_18",zh={A11yHidden:qI,focusable:zI},Yn=b.forwardRef(function({as:e="span",focusable:n=!1,className:s="",...r},i){const o=`${zh.A11yHidden} ${n?zh.focusable:""} ${s}`.trim();return f.jsx(e,{ref:i,className:o,...r})}),Cm=({handleModal:t})=>f.jsx(f.Fragment,{children:f.jsx("div",{className:Ma.ProjectInfoBackground,children:f.jsxs("figure",{className:Ma.ProjectInfoContainer,children:[f.jsx(Yn,{as:"figcaption",children:"벚꽃이 지면은 어떤 서비스 인가요? 벚꽃이 지면은 벚꽃 개화시기에 맞춰 메세지를 볼 수 있는 롤링페이퍼 서비스입니다. 벚꽃이 지면을 통해 전하지 못한 마음을 전해보세요! 롤링페이퍼란 무엇인가요? 특정 사람에 대해 어떤 주제를 중심으로 주변 사람들이 의견을 적어 놓은 것을 말해요! 이용 방법은 어떻게 되나요? 첫 번째로, 내 벚꽃나무를 만들고 SNS에 링크를 공유해요. 두 번째로, 친구들이 내 벚꽃나무에 벚꽃을 달아줄 수 있어요. 세 번째로, 벚꽃 안에는 친구가 보내준 메세지가 들어있어요. 마지막으로, 모든 편지들은 벚꽃이 질 때 오픈 가능해요! 벚꽃이 지면은 누가 만들었나요? 벚꽃이 지면은 멋쟁이 사자처럼 프론트 엔드 스쿨 4기 수강생 네 명이 함께 만든 서비스입니다!"}),f.jsx("button",{className:Ma.projectInfoClose,type:"button",alt:"닫기",onClick:t,children:"close"})]})})}),WI="_clickMe_9l6uf_7",KI="_clickMeText_9l6uf_37",Wh={clickMe:WI,clickMeText:KI},HI=({handleModal:t})=>f.jsx(f.Fragment,{children:f.jsx("button",{onClick:t,className:Wh.clickMe,type:"button",children:f.jsx("span",{className:Wh.clickMeText,children:"click me!"})})}),GI=()=>{const[t,e]=b.useState(!1),n=wn(),{signOut:s}=iu(),{createAuthUser:r,isLoading:i,error:o}=Am("users"),{readData:a,data:c}=UI("users"),l=()=>{e(!t)};window.onload=()=>{s(),localStorage.clear()};const u=async()=>{const{user:h}=await Nw(ni,jh),{uid:d}=h;localStorage.setItem("uid",JSON.stringify(d)),await r(h),await a(d),n("/make-tree")};return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:at.homeContainer,children:[f.jsxs("div",{className:at.homeLogo,children:[f.jsxs("div",{className:at.homeMainTitle,children:[f.jsx("figure",{className:at.moonLogo,children:f.jsx(Yn,{as:"figcaption",children:"초승달과 벚꽃이 함께있는 모양의 아이콘입니다."})}),f.jsxs("h1",{className:at.homeTitleInfo,"aria-label":"벚꽃이 지면",children:[f.jsx("span",{className:at.homeTitleShadow,children:"벚꽃이 지면"}),f.jsx("span",{className:at.homeTitleBorder,children:"벚꽃이 지면"}),f.jsx("span",{className:at.homeTitle,children:"벚꽃이 지면"})]})]}),f.jsx("h2",{className:at.homeSubTitle,children:"벚꽃이 지면 당신의 메세지가 전달됩니다."})]}),f.jsxs("div",{className:at.tree,children:[f.jsx("figure",{className:at.blossomTree,children:f.jsx(Yn,{as:"figcaption",children:"벚꽃이지면 프로젝트의 메인 벚꽃나무 이미지입니다."})}),f.jsx(HI,{handleModal:l})]}),f.jsxs("div",{className:at.loginButtonList,children:[f.jsx(qh,{className:at.generalButton,onClick:()=>n("/signin"),text:"로그인"}),f.jsx(qh,{className:at.googleButton,provider:jh,onClick:u,text:"구글 계정으로 계속하기"})]})]}),t?f.jsx(Cm,{handleModal:l}):null]})},QI="_makeTreeContainer_1gocs_7",YI="_header_1gocs_20",XI="_headerTitle_1gocs_35",JI="_userNickname_1gocs_48",ZI="_originTreeContainer_1gocs_77",e0="_makeTreeCustomContainer_1gocs_82",t0="_makeTreeCustom_1gocs_82",Ft={makeTreeContainer:QI,header:YI,headerTitle:XI,userNickname:JI,originTreeContainer:ZI,makeTreeCustomContainer:e0,makeTreeCustom:t0};function n0(t){const[e,n]=b.useState(!1),[s,r]=b.useState(null),i=b.useCallback(async(o,a)=>{const c=vn(ft,t,o);n(!0);try{await AI(c,a)}catch(l){r(l)}finally{n(!1)}},[t]);return b.useMemo(()=>({isLoading:e,error:s,updateData:i}),[s,e,i])}const s0="_subTitle_1gymj_7",r0={subTitle:s0},i0="/assets/message.png",io=({className:t="",subText:e})=>f.jsxs("div",{className:yt(r0.subTitle,t),children:[e.includes("벚꽃나무")?null:f.jsx("img",{src:i0}),f.jsx("h3",{children:e})]}),o0="_backgroundCustomList_1tyn3_7",a0={backgroundCustomList:o0},c0="_backgroundCustomItem_1ogdc_7",l0="_backgroundCustomButton_1ogdc_13",u0="_backgroundCustomSelectText_1ogdc_34",Pa={backgroundCustomItem:c0,backgroundCustomButton:l0,backgroundCustomSelectText:u0},h0=({keyId:t,id:e,smallSrc:n,handleSelect:s})=>f.jsx("li",{className:Pa.backgroundCustomItem,children:f.jsxs("button",{onClick:s,className:Pa.backgroundCustomButton,type:"button",id:e,children:[f.jsx("img",{src:n,alt:`배경${e}`}),f.jsx("span",{className:Pa.backgroundCustomSelectText,children:"SELECT"})]})},t),d0=()=>{const{backgroundImageList:t,handleSelect:e}=b.useContext(Lm);return f.jsx("ul",{className:a0.backgroundCustomList,children:t.map(n=>f.jsx(h0,{id:n.id,smallSrc:n.smallSrc,handleSelect:e},n.id))})},f0="_ShortButtonList_vepa0_7",p0={ShortButtonList:f0},m0="_shortButton_1ut7v_7",g0="_buttonImage_1ut7v_33",Ua={shortButton:m0,buttonImage:g0},y0="/assets/github-logo.png";function dr({type:t,onClick:e,text:n,className:s}){return f.jsxs("button",{type:t||null,onClick:e||null,className:s?yt(s,Ua.shortButton):Ua.shortButton,children:[n==="Github"?f.jsx("img",{className:Ua.buttonImage,src:y0}):null,n]})}const Nm=({firstText:t,firstClick:e,secondText:n,secondClick:s,type:r})=>f.jsxs("div",{className:p0.ShortButtonList,children:[f.jsx(dr,{onClick:e,text:t}),f.jsx(dr,{onClick:s||null,text:n,type:r})]}),v0="_blossomTree_dr75f_7",_0={blossomTree:v0},km=()=>f.jsx("div",{className:_0.blossomTree}),w0="/assets/select-bg-pink.png",S0="/assets/select-bg-night.png",b0="/assets/select-bg-sky.png",Kh=[{id:1,bigSrc:"bg-sky",smallSrc:b0},{id:2,bigSrc:"bg-night",smallSrc:S0},{id:3,bigSrc:"bg-pink",smallSrc:w0}],Lm=b.createContext(),T0=()=>{const[t,e]=b.useState(""),[n,s]=b.useState("bg-pink"),r=wn(),{updateData:i}=n0("users"),o=JSON.parse(localStorage.getItem("uid"));b.useLayoutEffect(()=>{ru("users").then(h=>{h.map(d=>{d.uid===o&&d.isMade&&r(`/share-tree/${o}`)})})},[]);const a=h=>{const d=document.querySelector(".MakeTreePage"),g=h.target.closest("button");Kh.map(m=>{if(parseInt(g.id)===m.id){d.style=`background: center / cover no-repeat url(/assets/${m.bigSrc}.png)`,s(m.bigSrc);return}})},c=()=>{i(o,{bgSrc:n,isMade:!0,userNickname:t}),r(`/share-tree/${o}`,{replace:!0}),history.pushState(null,null,location.href),window.onpopstate=function(h){history.go(1)}},l=h=>{e(h.target.value)},u={backgroundImageList:Kh,setSelectBg:s,handleSelect:a};return f.jsx(Lm.Provider,{value:u,children:f.jsxs("form",{onSubmit:c,className:yt("MakeTreePage",Ft.makeTreeContainer),children:[f.jsxs("header",{className:Ft.header,children:[f.jsx(io,{subText:"벚꽃나무에 이름을 적어주세요"}),f.jsxs("div",{className:Ft.headerTitle,children:[f.jsx(Yn,{as:"label",focusable:!0,htmlFor:"userNickname",children:"닉네임"}),f.jsx("input",{type:"text",id:"userNickname",name:"userNickname",value:t,maxLength:6,placeholder:"닉네임",onChange:l,className:Ft.userNickname,required:!0}),f.jsx("span",{children:"님의 벚꽃나무"})]})]}),f.jsx("div",{className:Ft.originTreeContainer,children:f.jsx(km,{className:Ft.originTree})}),f.jsx("div",{className:Ft.makeTreeCustomContainer,children:f.jsxs("div",{className:Ft.makeTreeCustom,children:[f.jsx(io,{className:Ft.makeTreeCustomText,subText:"벚꽃나무의 하늘을 선택해주세요."}),f.jsx(d0,{}),f.jsx(Nm,{firstText:"취소",firstClick:()=>{window.location.replace("/")},secondText:"완료",type:"submit"})]})})]})})},E0="_signUpPageWrapper_1hyxb_7",I0="_toSignInPage_1hyxb_25",R0="_signUpPageContainer_1hyxb_44",A0="_signUpPageTitle_1hyxb_50",C0="_toSignInPageWithDescription_1hyxb_71",N0="_toSignInPageLink_1hyxb_75",k0="_form_1hyxb_78",L0="_signUpButton_1hyxb_86",x0="_resetButton_1hyxb_116",D0="_validatePassed_1hyxb_146",O0="_notificationStyling_1hyxb_150",M0="_animateNotification_1hyxb_160",P0="_fadeInAndOut_1hyxb_1",de={signUpPageWrapper:E0,toSignInPage:I0,signUpPageContainer:R0,signUpPageTitle:A0,toSignInPageWithDescription:C0,toSignInPageLink:N0,form:k0,signUpButton:L0,resetButton:x0,validatePassed:D0,notificationStyling:O0,animateNotification:M0,fadeInAndOut:P0};function U0(t=!1){const[e,n]=b.useState(!1),[s,r]=b.useState(null),[i,o]=b.useState(null),a=b.useCallback(async(c,l,u)=>{n(!0);try{const h=await X_(ni,c,l),{user:d}=h;return u&&d&&await tw(d,{displayName:u}),t&&d&&await Z_(d),o(d),d}catch(h){r(h)}finally{n(!1)}},[t]);return b.useMemo(()=>({isLoading:e,error:s,user:i,signUp:a}),[e,s,i,a])}function xm(){const[t,e]=b.useState(!1),[n,s]=b.useState(null),[r,i]=b.useState(null);return b.useEffect(()=>(e(!0),rw(ni,o=>{i(o),e(!1)},o=>{s(o),e(!1)})),[]),b.useMemo(()=>({isLoading:t,error:n,user:r}),[t,n,r])}const V0="_FormInput_7upog_7",$0="_FormInputInline_7upog_14",B0="_FormInputVertical_7upog_17",F0="_label_7upog_20",j0="_inputed_7upog_20",q0="_input_7upog_20",z0="_validate_7upog_67",W0="_passwordVisible_7upog_77",K0="_passwordInvisible_7upog_89",bt={FormInput:V0,FormInputInline:$0,FormInputVertical:B0,label:F0,inputed:j0,input:q0,validate:z0,passwordVisible:W0,passwordInvisible:K0};var Dn={},H0={get exports(){return Dn},set exports(t){Dn=t}},G0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Q0=G0,Y0=Q0;function Dm(){}function Om(){}Om.resetWarningCache=Dm;var X0=function(){function t(s,r,i,o,a,c){if(c!==Y0){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Om,resetWarningCache:Dm};return n.PropTypes=n,n};H0.exports=X0();function un({name:t,label:e,type:n,invisibleLabel:s,vertical:r,...i}){const[o,a]=b.useState(!1),[c,l]=b.useState(n),u=b.useRef(null),h=b.useId();b.useEffect(()=>{const m=u.current,w=m.parentElement;m.addEventListener("blur",k=>{k.target.value.length>0?w.classList.add(bt.inputed):w.classList.remove(bt.inputed)})},[]);const d=`${bt.FormInput} ${r?bt.FormInputVertical:""}`.trim(),g=()=>{c==="text"?l("password"):c==="password"&&l("text"),a(m=>!m)};return f.jsxs("div",{className:d,children:[J0(h,e,s),(t==="password"||t==="passwordConfirm")&&o||(t==="password"||t==="passwordConfirm")&&!o?f.jsx("input",{name:t,ref:u,id:h,type:c,className:bt.input,...i}):"",t==="password"||t==="passwordConfirm"?"":f.jsx("input",{name:t,ref:u,id:h,type:n,className:bt.input,...i}),t==="name"||t==="email"||t==="password"||t==="passwordConfirm"?f.jsx("span",{className:bt.validate}):"",t==="password"&&o||t==="passwordConfirm"&&o?f.jsx("button",{type:"button",className:bt.passwordVisible,onClick:g}):"",t==="password"&&!o||t==="passwordConfirm"&&!o?f.jsx("button",{type:"button",className:bt.passwordInvisible,onClick:g}):""]})}un.defualtProps={type:"text",invisibleLabel:!1,vertical:!1,inputed:!1};un.propTypes={type:Dn.string,label:Dn.string.isRequired,invisibleLabel:Dn.bool,vertical:Dn.bool,inputed:Dn.bool};function J0(t,e,n){return n?f.jsx(Yn,{as:"label",htmlFor:t,className:bt.label,children:e}):f.jsx("label",{htmlFor:t,className:bt.label,children:e})}const Ht=({className:t,text:e})=>f.jsx("span",{className:t,children:e}),Z0={name:"",email:"",password:"",passwordConfirm:""};function eR(){const t=b.useRef(Z0),e=wn(),{isLoading:n,signUp:s}=U0(),{createAuthUser:r}=Am(),{isLoading:i,error:o,user:a}=xm();if(i)return f.jsx("div",{role:"alert",children:"페이지를 준비 중입니다."});if(o)return f.jsxs("div",{role:"alert",children:["오류! ",o.message]});a&&(localStorage.setItem("uid",JSON.stringify(a.uid)),e("/make-tree"));const c=async u=>{u.preventDefault();const{name:h,email:d,password:g,passwordConfirm:m}=t.current;if(!h||h.trim().length<2||h.trim().length>8){u.target.childNodes[0].classList.add(de.animateNotification),setTimeout(()=>{u.target.childNodes[0].classList.remove(de.animateNotification)},2e3);return}if(!d||!d.includes("@")||d.substring(0,d.indexOf("@"))===""||d.substring(d.indexOf("@")+1)===""||!d.substring(d.indexOf("@")+1).includes(".")||d.substring(0,d.indexOf("."))===""||d.substring(d.indexOf(".")+1)===""||d.substring(d.indexOf(".")-1,d.indexOf("."))==="@"){u.target.childNodes[1].classList.add(de.animateNotification),setTimeout(()=>{u.target.childNodes[1].classList.remove(de.animateNotification)},2e3);return}if(!g||g.trim().length<6){u.target.childNodes[2].classList.add(de.animateNotification),setTimeout(()=>{u.target.childNodes[2].classList.remove(de.animateNotification)},2e3);return}if(!Object.is(g,m)){u.target.childNodes[2].classList.add(de.animateNotification),setTimeout(()=>{u.target.childNodes[2].classList.remove(de.animateNotification)},2e3);return}const w=await s(d,g,h);w||(u.target.childNodes[3].classList.add(de.animateNotification),setTimeout(()=>{u.target.childNodes[3].classList.remove(de.animateNotification)},2e3)),await r(w)},l=u=>{const{name:h,value:d}=u.target;t.current[h]=d,h==="name"&&d.trim().length>1&&d.trim().length<9?u.target.nextSibling.classList.add(de.validatePassed):h==="name"&&(!d||d.trim().length<2||d.trim().length>8)&&u.target.nextSibling.classList.remove(de.validatePassed),h==="email"&&d.includes("@")&&d.substring(0,d.indexOf("@"))!==""&&d.substring(d.indexOf("@")+1)!==""&&d.substring(d.indexOf("@")+1).includes(".")&&d.substring(0,d.indexOf("."))!==""&&d.substring(d.indexOf(".")+1)!==""&&d.substring(d.indexOf(".")-1,d.indexOf("."))!=="@"?u.target.nextSibling.classList.add(de.validatePassed):h==="email"&&(!d.includes("@")||d.substring(0,d.indexOf("@"))===""||d.substring(d.indexOf("@")+1)===""||!d.substring(d.indexOf("@")+1).includes(".")||d.substring(0,d.indexOf("."))===""||d.substring(d.indexOf(".")+1)===""||d.substring(d.indexOf(".")-1,d.indexOf("."))==="@")&&u.target.nextSibling.classList.remove(de.validatePassed),(h==="password"||h==="passwordConfirm")&&d.trim().length>5?u.target.nextSibling.classList.add(de.validatePassed):(h==="password"||h==="passwordConfirm")&&(!d||d.trim().length<6)&&u.target.nextSibling.classList.remove(de.validatePassed)};return f.jsx("div",{className:de.signUpPageWrapper,children:f.jsxs("div",{className:de.signUpPageContainer,children:[f.jsx("h2",{className:de.signUpPageTitle,children:"회원가입"}),f.jsxs("form",{className:de.form,onSubmit:c,children:[f.jsx(Ht,{className:de.notificationStyling,text:"이름을 확인해주세요 !"}),f.jsx(Ht,{className:de.notificationStyling,text:"이메일 확인해주세요 !"}),f.jsx(Ht,{className:de.notificationStyling,text:"비밀번호를 확인해주세요 !"}),f.jsx(Ht,{className:de.notificationStyling,text:"이미 가입된 회원정보입니다 !"}),f.jsx(un,{name:"name",label:"이름",onChange:l}),f.jsx(un,{name:"email",type:"email",label:"이메일",onChange:l}),f.jsx(un,{name:"password",type:"password",label:"비밀번호",onChange:l}),f.jsx(un,{name:"passwordConfirm",type:"password",label:"비밀번호 확인",onChange:l}),f.jsx("button",{type:"submit",disabled:n,className:de.signUpButton,children:n?"회원가입 중...":"회원가입"}),f.jsx("button",{type:"reset",className:de.resetButton,children:"초기화"})]}),f.jsxs("p",{className:de.toSignInPageWithDescription,children:["이미 가입한 사용자라면"," ",f.jsx(vd,{to:"/signin",className:de.toSignInPageLink,children:"로그인"}),"을 해주세요 !"]}),f.jsx("button",{onClick:()=>e("/signin"),className:de.toSignInPage,children:"<"})]})})}const tR="_signInPageWrapper_64g07_7",nR="_toHomePage_64g07_25",sR="_signInPageContainer_64g07_44",rR="_signInPageTitle_64g07_50",iR="_toSignUpPage_64g07_66",oR="_toSignUpPageWithDescription_64g07_96",aR="_toSignUpPageLink_64g07_100",cR="_form_64g07_103",lR="_signInButton_64g07_111",uR="_validatePassed_64g07_142",hR="_notificationStyling_64g07_146",dR="_animateNotification_64g07_156",fR="_fadeInAndOut_64g07_1",We={signInPageWrapper:tR,toHomePage:nR,signInPageContainer:sR,signInPageTitle:rR,toSignUpPage:iR,toSignUpPageWithDescription:oR,toSignUpPageLink:aR,form:cR,signInButton:lR,validatePassed:uR,notificationStyling:hR,animateNotification:dR,fadeInAndOut:fR};function pR(){const[t,e]=b.useState(!1),[n,s]=b.useState(null),[r,i]=b.useState(null),o=b.useCallback(async(a,c)=>{e(!0);try{const l=await J_(ni,a,c);i(l)}catch(l){s(l)}finally{e(!1)}},[]);return b.useMemo(()=>({isLoading:t,error:n,user:r,signIn:o}),[t,n,r,o])}const mR={email:"",password:""};function gR(){const t=b.useRef(mR),e=wn(),{isLoading:n,signIn:s}=pR(),{isLoading:r,error:i,user:o}=xm(),a=async l=>{l.preventDefault();const{email:u,password:h}=t.current;await s(u,h),o||(l.target.childNodes[0].classList.add(We.animateNotification),setTimeout(()=>{l.target.childNodes[0].classList.remove(We.animateNotification)},2e3))},c=l=>{const{name:u,value:h}=l.target;t.current[u]=h,u==="email"&&h.includes("@")&&h.substring(0,h.indexOf("@"))!==""&&h.substring(h.indexOf("@")+1)!==""&&h.substring(h.indexOf("@")+1).includes(".")&&h.substring(0,h.indexOf("."))!==""&&h.substring(h.indexOf(".")+1)!==""&&h.substring(h.indexOf(".")-1,h.indexOf("."))!=="@"?l.target.nextSibling.classList.add(We.validatePassed):u==="email"&&(!h.includes("@")||h.substring(0,h.indexOf("@"))===""||h.substring(h.indexOf("@")+1)===""||!h.substring(h.indexOf("@")+1).includes(".")||h.substring(0,h.indexOf("."))===""||h.substring(h.indexOf(".")+1)===""||h.substring(h.indexOf(".")-1,h.indexOf("."))==="@")&&l.target.nextSibling.classList.remove(We.validatePassed),u==="password"&&h.trim().length>5?l.target.nextSibling.classList.add(We.validatePassed):u==="password"&&(!h||h.trim().length<6)&&l.target.nextSibling.classList.remove(We.validatePassed)};return r?f.jsx("div",{role:"alert",children:"페이지를 준비 중입니다."}):i?f.jsxs("div",{role:"alert",children:["오류! ",i.message]}):(o&&(localStorage.setItem("uid",JSON.stringify(o.uid)),e("/make-tree")),f.jsx("div",{className:We.signInPageWrapper,children:f.jsxs("div",{className:We.signInPageContainer,children:[f.jsx("h2",{className:We.signInPageTitle,children:"로그인"}),f.jsxs("form",{className:We.form,onSubmit:a,children:[f.jsx(Ht,{className:We.notificationStyling,text:"이메일 또는 비밀번호를 확인해주세요 !"}),f.jsx(un,{name:"email",type:"email",label:"이메일",onChange:c}),f.jsx(un,{name:"password",type:"password",label:"비밀번호",onChange:c}),f.jsx("button",{type:"submit",disabled:n,className:We.signInButton,children:n?"로그인 중...":"로그인"})]}),f.jsx("button",{onClick:()=>e("/signup"),className:We.toSignUpPage,children:"회원가입"}),f.jsxs("p",{className:We.toSignUpPageWithDescription,children:["가입한 계정이 없다면"," ",f.jsx(vd,{to:"/signup",className:We.toSignUpPageLink,children:"회원가입"}),"을 해주세요 !"]}),f.jsx("button",{onClick:()=>e("/"),className:We.toHomePage,children:"<"})]})}))}const yR="_shareTreeContainer_3c03c_7",vR="_blossomTreeContainer_3c03c_35",_R="_flowerList_3c03c_43",wR="_pagination_3c03c_49",SR="_originTreeContainer_3c03c_62",bR="_swiperButton_3c03c_66",TR="_arrowButton_3c03c_71",ER="_leftButton_3c03c_80",IR="_rightButton_3c03c_85",RR="_moveIn_3c03c_91",AR="_notificationContainer_3c03c_95",CR="_notificationStyling_3c03c_99",NR="_animateNotification_3c03c_113",kR="_fadeInAndOut_3c03c_1",xe={shareTreeContainer:yR,blossomTreeContainer:vR,flowerList:_R,pagination:wR,originTreeContainer:SR,swiperButton:bR,arrowButton:TR,leftButton:ER,rightButton:IR,moveIn:RR,notificationContainer:AR,notificationStyling:CR,animateNotification:NR,fadeInAndOut:kR},si=b.createContext(),LR=b.createContext(),xR="_header_13kte_7",DR={header:xR},OR="_headerTitle_2vnzc_7",MR={headerTitle:OR},Mm=({userName:t})=>f.jsxs("h2",{className:MR.headerTitle,children:[t,f.jsx("span",{children:"님의 벚꽃나무"})]}),Pm=({userName:t,className:e,subText:n})=>f.jsxs("header",{className:DR.header,children:[f.jsx(Mm,{userName:t}),f.jsx(io,{className:e,subText:n})]}),PR="_LongButtonContainer_91bfh_7",UR={LongButtonContainer:PR},VR="_longButton_ydp3u_7",$R={longButton:VR},Hh=({text:t,disabled:e=!1,onClick:n})=>f.jsx(f.Fragment,{children:f.jsx("button",{disabled:e,onClick:n,className:$R.longButton,children:t})}),Rc=({firstText:t,firstClick:e,disabled:n,secondText:s,secondClick:r})=>f.jsxs("div",{className:UR.LongButtonContainer,children:[f.jsx(Hh,{text:t,disabled:n,onClick:e}),f.jsx(Hh,{text:s,onClick:r})]}),BR="_hamburgerButton_m5uyz_1",FR="_hamburger_m5uyz_1",jR="_burger1_m5uyz_19",qR="_burger2_m5uyz_20",zR="_burger3_m5uyz_21",Ks={hamburgerButton:BR,hamburger:FR,burger1:jR,burger2:qR,burger3:zR};function WR(){return f.jsx("button",{className:Ks.hamburgerButton,children:f.jsxs("div",{className:Ks.hamburger,children:[f.jsx("div",{className:Ks.burger1}),f.jsx("div",{className:Ks.burger2}),f.jsx("div",{className:Ks.burger3})]})})}const KR="_sideMenuContainer_1fq7o_8",HR="_sideMenuBackground_1fq7o_17",GR="_sideMenuBar_1fq7o_29",QR="_sideMenuTitle_1fq7o_39",YR="_sideMenuNav_1fq7o_57",XR="_shortButton_1fq7o_64",JR="_contents_1fq7o_67",ZR="_importantText_1fq7o_79",st={sideMenuContainer:KR,sideMenuBackground:HR,sideMenuBar:GR,sideMenuTitle:QR,sideMenuNav:YR,shortButton:XR,contents:JR,importantText:ZR};function eA({loginName:t,handleModal:e}){wn();const{signOut:n}=iu();return f.jsxs("div",{className:st.sideMenuContainer,children:[f.jsx("div",{className:st.sideMenuBackground}),f.jsxs("div",{className:st.sideMenuBar,children:[f.jsxs("div",{children:[f.jsx("div",{className:st.sideMenuTitle,children:t?`${t}님`:"로그인"}),f.jsxs("div",{className:st.sideMenuNav,children:[f.jsx(dr,{onClick:()=>{n(),window.location.replace("/")},text:"Log Out",className:st.shortButton}),f.jsx(dr,{text:"About",onClick:e,className:st.shortButton})]})]}),f.jsxs("div",{children:[f.jsx("div",{className:st.sideMenuTitle,children:"공지사항"}),f.jsxs("div",{className:st.contents,children:[f.jsxs("span",{children:["🌸벚꽃메세지는"," ",f.jsx("span",{className:st.importantText,children:"4월 15일 00시에 공개"}),"됩니다."]}),f.jsxs("span",{children:["🌸메세지 작성기한은"," ",f.jsx("span",{className:st.importantText,children:"4월 14일 23:59 까지 "}),"입니다. 벚꽃메세지로 마음을 전달해보세요 !"]}),f.jsxs("span",{children:["🌸벚꽃메세지는"," ",f.jsxs("span",{className:st.importantText,children:["4월 15일~4월 29일까지"," "]})," ","2주간 열람 가능합니다. 소중한 메세지를 놓치지 않게 기억해주세요 !"]}),f.jsx("span",{children:"🌸오류가 발견되면 Contact me에 있는 연락처로 문의 부탁드립니다 !"})]})]}),f.jsxs("div",{children:[f.jsx("div",{className:st.sideMenuTitle,children:"Contact Us"}),f.jsx("div",{className:st.sideMenuNav,children:f.jsx(dr,{onClick:()=>location.href="https://github.com/cherry-6lossom/6lossom",text:"Github",className:st.shortButton})})]})]})]})}const tA="_messageListBackground_1tab1_7",nA="_messageListWrapper_1tab1_15",sA="_messageListContainer_1tab1_27",rA="_messageList_1tab1_7",iA="_MessageItemWrapper_1tab1_55",oA="_closeButton_1tab1_63",aA="_moveOut_1tab1_75",At={messageListBackground:tA,messageListWrapper:nA,messageListContainer:sA,messageList:rA,MessageItemWrapper:iA,closeButton:oA,moveOut:aA},cA="_messageItemContainer_1pyp1_7",lA="_messageItem_1pyp1_7",uA="_messageIcon_1pyp1_33",hA="_messageSender_1pyp1_41",dA="_messageContentsContainer_1pyp1_59",fA="_messageContents_1pyp1_59",as={messageItemContainer:cA,messageItem:lA,messageIcon:uA,messageSender:hA,messageContentsContainer:dA,messageContents:fA},pA=({flower:t,id:e,handleOpenMessageDetail:n})=>{const s=b.useContext(si),{nickname:r,contents:i}=t;return f.jsx("li",{className:as.messageItemContainer,onClick:()=>n(s,t),children:f.jsxs("div",{className:as.messageItem,children:[f.jsxs("div",{className:as.messageSender,children:[f.jsx("figure",{className:as.messageIcon,children:f.jsx(Yn,{as:"figcaption",children:"하트가 그려진 편지를 담은 우편지 모양의 아이콘입니다."})}),r]}),f.jsx("div",{className:as.messageContentsContainer,children:f.jsx("p",{className:as.messageContents,children:i})})]})},e)},mA=({listBackgroundRef:t,messageListRef:e,messageDetailRef:n,handleOpenMessageDetail:s})=>{const[r,i]=b.useState([]),{uid:o}=uo(),a=b.useContext(si),c=t.current,l=e.current;b.useLayoutEffect(()=>{ru(`users/${o}/flowerList`).then(d=>{i(d.sort((g,m)=>g.createdAt-m.createdAt))})},[]);const u=(d,g)=>{const{messageListVisible:m,setMessageListVisible:w}=g,k=d.target;c===k&&m&&(l.classList.add(At.moveOut),setTimeout(()=>{c.style.backgroundColor="",c.style.zIndex="",c.style.display="",w(!m),l.classList.remove(At.moveOut)},400))},h=(d,g)=>{const{messageListVisible:m,setMessageListVisible:w}=g;m&&(l.classList.add(At.moveOut),setTimeout(()=>{c.style.backgroundColor="",c.style.zIndex="",c.style.display="",w(!m),l.classList.remove(At.moveOut)},400))};return f.jsx("div",{ref:t,onClick:d=>u(d,a),className:At.messageListBackground,children:f.jsx("div",{ref:e,className:At.messageListWrapper,children:f.jsxs("div",{className:At.messageListContainer,children:[f.jsx("div",{className:At.messageList,children:f.jsx("ul",{className:At.MessageItemWrapper,children:r.map(d=>f.jsx(pA,{flower:d,handleOpenMessageDetail:s},r.indexOf(d)))})}),f.jsx("button",{type:"button",onClick:d=>h(d,a),className:At.closeButton})]})})})},gA="_messageDetailBackground_awz4o_7",yA="_messageDetailWrapper_awz4o_27",vA="_messageDetailContainer_awz4o_41",_A="_moonIcon_awz4o_51",wA="_messageSender_awz4o_57",SA="_messageContents_awz4o_71",bA="_closeButton_awz4o_100",TA="_downloadButtonContainer_awz4o_120",EA="_downloadButton_awz4o_120",Nn={messageDetailBackground:gA,messageDetailWrapper:yA,messageDetailContainer:vA,moonIcon:_A,messageSender:wA,messageContents:SA,closeButton:bA,downloadButtonContainer:TA,downloadButton:EA},IA=({flowerInfo:t,messageDetailRef:e})=>{const n=b.useContext(si),{nickname:s,contents:r}=t,i=e.current,o=(c,l)=>{const{messageDetailVisible:u,setMessageDetailVisible:h}=l,d=c.target;i===d&&u&&(i.style.backgroundColor="",i.style.zIndex="",i.style.display="",h(!u))},a=(c,l)=>{const{messageDetailVisible:u,setMessageDetailVisible:h}=l;u&&(i.style.backgroundColor="",i.style.zIndex="",i.style.display="",h(!u))};return f.jsx("div",{ref:e,onClick:c=>o(c,n),className:Nn.messageDetailBackground,children:f.jsx("div",{className:Nn.messageDetailWrapper,children:f.jsxs("ul",{className:Nn.messageDetailContainer,children:[f.jsx("li",{children:f.jsx("figure",{className:Nn.moonIcon,children:f.jsx(Yn,{as:"figcaption",children:"귀여운 보름달 캐릭터와 함께 흩날리는 벚꽃이 그려진 아이콘입니다."})})}),f.jsx("li",{className:Nn.messageSender,children:s}),f.jsx("li",{className:Nn.messageContents,children:r}),f.jsx("button",{type:"button",onClick:c=>a(c,n),className:Nn.closeButton,children:"OK!"})]})})})},RA="_flower_te9a3_7",AA="_flowerButton_te9a3_28",CA="_flower0_te9a3_46",NA="_flower1_te9a3_51",kA="_flower2_te9a3_56",LA="_flower3_te9a3_61",xA="_flower4_te9a3_66",DA="_flower5_te9a3_71",OA="_flower6_te9a3_76",jt={flower:RA,flowerButton:AA,flower0:CA,flower1:NA,flower2:kA,flower3:LA,flower4:xA,flower5:DA,flower6:OA},MA=({uid:t,id:e,keyId:n,item:s,handleOpenMessageDetail:r})=>{const i=b.useContext(si),{flowerSrc:o,nickname:a}=s;JSON.parse(localStorage.getItem("uid"));const c=()=>{r(i,s)};return f.jsxs("li",{className:yt(jt.flower,e%7===0?jt.flower0:e%7===1?jt.flower1:e%7===2?jt.flower2:e%7===3?jt.flower3:e%7===4?jt.flower4:e%7===5?jt.flower5:jt.flower6),children:[f.jsx("span",{children:a}),f.jsx("button",{className:jt.flowerButton,onClick:c,children:f.jsx("img",{src:`/assets/${o}.png`,alt:"벚꽃 메세지"})})]},n)},PA="/assets/Spinner.svg",UA=()=>{const[t,e]=b.useState(!1),[n,s]=b.useState(!1),[r,i]=b.useState({}),[o,a]=b.useState(!1),[c,l]=b.useState(!1),[u,h]=b.useState(!0),[d,g]=b.useState(""),[m,w]=b.useState(""),[k,J]=b.useState(""),[E,V]=b.useState([]),[H,K]=b.useState([]),[ee,ne]=b.useState(null),[Re,et]=b.useState(0),[ae,$e]=b.useState(!1),[Vt,Le]=b.useState(!0),[Be,en]=b.useState(!1),[tn,_t]=b.useState(!1),nn=b.useMemo(()=>({messageListVisible:t,setMessageListVisible:e,messageDetailVisible:n,setMessageDetailVisible:s}),[t,e,n,s]),$t=b.useRef(),re=b.useRef(),oe=b.useRef(),{uid:v}=uo(),I=wn(),R=cy(),F=Qn(ft,`users/${v}/flowerList`),{signOut:x}=iu(),G=JSON.parse(localStorage.getItem("uid")),q=new Date;b.useLayoutEffect(()=>{me(),Te(7,"next")},[]),b.useLayoutEffect(()=>{Le(E.length!==Re),$e(!(E.length<=7))},[E.length,Re]),b.useEffect(()=>{const ge=new Date(q.getFullYear(),3,15),ze=new Date(q.getFullYear(),3,30),Ae=q>=ge&&q<=ze,mt=new Date(q.getFullYear(),2,15),It=new Date(q.getFullYear(),3,15),Rt=q>=mt&&q<=It;return en(Ae),_t(Rt),CI(vn(ft,"users",v),is=>{w(is.data().userNickname),J(is.data().bgSrc)}),ru("users").then(is=>{is.map(di=>{di.uid===G&&g(di.userNickname)})}),history.pushState(null,"",R.href),window.addEventListener("popstate",P),()=>{window.removeEventListener("popstate",P)}},[]);const P=()=>{history.pushState(null,"",R.href)},me=async()=>{const ge=await su(ur(F,hr("createAt","asc")));et(ge.data().count)},Te=async(ge=10,ze)=>{let Ae;if(!ee)Ae=ur(F,hr("createAt","asc"),$h(ge));else{let Rt=E.length%7===0?E.length-7:E.length-E.length%7;console.log(Rt),Ae=ur(F,hr("createAt","asc"),ze==="next"?SI(ee):bI(ee),$h(ze==="next"||Rt<=ge?ge:Rt))}const mt=await nu(Ae);u&&h(!1);const It=mt.docs;le(It,ze)},le=(ge,ze)=>{const Ae=[];ge.forEach(Rt=>{Ae.push({id:Rt.id,...Rt.data()})});const mt=ze==="next"?[...E,...Ae]:Ae;V(mt),K(Ae.slice(-7,void 0));let It=ge[ge.length-1];It&&ne(It)},he=ge=>{const ze=document.querySelector(`.${ge}`);ze.classList.add(xe.animateNotification),setTimeout(()=>{ze.classList.remove(xe.animateNotification)},4e3)},ut=()=>{a(!o)},Bt=()=>{let ge=window.location.href;navigator.clipboard.writeText(ge),he("targetCheckLinkCopyNotification")},tt=(ge,ze)=>{const Ae=oe.current;if(i(ze),v!==G){he("targetCheckOwnerNotification");return}else if(!Be){he("targetCheckPeriodNotification");return}n||(Ae.style.backgroundColor="rgba(0, 0, 0, 0.2)",Ae.style.display="block",Ae.style.zIndex=102,s(!n))},nt=(ge,ze)=>{const Ae=$t.current,mt=re.current;if(!Be){he("targetCheckPeriodNotification");return}t||(mt.classList.add(xe.moveIn),Ae.style.backgroundColor="rgba(0, 0, 0, 0.2)",Ae.style.display="block",Ae.style.zIndex=101,e(!t),setTimeout(()=>{mt.classList.remove(xe.moveIn)},900))},hi=()=>{tn?I(`/message-custom/${v}`):he("targetCheckCreatableNotification")},ya=()=>{G?window.location.replace(`/share-tree/${G}`):(alert("로그인이 필요합니다."),x(),localStorage.clear(),I("/"))},rs=()=>{l(!c)};return f.jsxs(f.Fragment,{children:[f.jsx(si.Provider,{value:nn,children:f.jsxs(LR.Provider,{value:{flowerInfo:r,setFlowerInfo:i},children:[f.jsxs("div",{style:{background:`url(/assets/${k}.png) center / cover no-repeat `},className:xe.shareTreeContainer,children:[f.jsx(Pm,{userName:m,subText:`${Re}송이의 벚꽃이 피었어요 ! `}),f.jsx("div",{className:xe.blossomTreeContainer,children:u?f.jsx("div",{children:f.jsx("img",{src:PA,alt:"로딩 중"})}):f.jsxs("div",{className:xe.flowerList,children:[f.jsxs("div",{className:xe.originTreeContainer,children:[f.jsx(km,{}),f.jsx("ul",{children:H.map(ge=>f.jsx(MA,{uid:v,item:ge,id:H.indexOf(ge),handleOpenMessageDetail:tt},ge.id))})]}),f.jsxs("span",{className:xe.pagination,children:[E.length,"/",Re]}),f.jsxs("div",{className:xe.swiperButton,children:[f.jsx("button",{type:"button",className:yt(xe.arrowButton,xe.leftButton),disabled:!ae,onClick:()=>Te(7,"prev")}),f.jsx("button",{type:"button",className:yt(xe.arrowButton,xe.rightButton),disabled:!Vt,onClick:()=>Te(7,"next")})]})]})}),f.jsxs("div",{className:xe.notificationContainer,children:[f.jsx(Ht,{className:yt("targetCheckOwnerNotification",xe.notificationStyling),text:"나의 벚꽃나무만 확인이 가능합니다 !"}),f.jsx(Ht,{className:yt("targetCheckPeriodNotification",xe.notificationStyling),text:"아직 벚꽃 열람 시기가 아니에요 !"}),f.jsx(Ht,{className:yt("targetCheckLinkCopyNotification",xe.notificationStyling),text:"링크가 복사되었습니다 !"}),f.jsx(Ht,{className:yt("targetCheckCreatableNotification",xe.notificationStyling),text:"작성기한이 마감되었습니다 !"})]}),v===G?f.jsx(Rc,{firstText:"링크 공유하기",firstClick:Bt,secondText:"전체 메세지 보기",secondClick:ge=>nt()}):f.jsx(Rc,{firstText:"벚꽃 달아주기",firstClick:hi,secondText:"내 벚꽃나무 보러가기",secondClick:ya}),f.jsx("div",{onClick:ut,children:f.jsx(WR,{})}),o&&f.jsx(eA,{handleModal:rs,loginName:d})]}),v===G&&Be?f.jsxs(f.Fragment,{children:[f.jsx(mA,{flowerLi:!0,st:E,listBackgroundRef:$t,messageListRef:re,handleOpenMessageDetail:tt}),f.jsx(IA,{flowerInfo:r,messageDetailRef:oe})]}):null]})}),c?f.jsx(Cm,{handleModal:rs}):null]})},VA="_pageSetting_1bh7v_7",$A="_header_1bh7v_29",BA="_customContainer_1bh7v_32",FA="_blossomMain_1bh7v_38",jA="_blossomImage_1bh7v_47",cs={pageSetting:VA,header:$A,customContainer:BA,blossomMain:FA,blossomImage:jA},Um=b.createContext(),qA="_blossomSelect_3wcgt_7",zA={blossomSelect:qA},WA="_blossomButton_9lbt8_7",KA="_blossomImage_9lbt8_15",Gh={blossomButton:WA,blossomImage:KA},HA=({src:t,id:e,handleSelect:n})=>f.jsx("button",{type:"button",id:e,onClick:n,className:Gh.blossomButton,children:f.jsx("img",{className:Gh.blossomImage,src:`/assets/${t}.png`,alt:`벚꽃모양${e}`})});function GA(){const{blossomInfoList:t,handleSelect:e}=b.useContext(Um);return f.jsx("div",{className:zA.blossomSelect,children:t.map(n=>f.jsx(HA,{src:n.src,id:n.id,handleSelect:e}))})}const Qh=[{id:0,src:"cherry-blossom1"},{id:1,src:"cherry-blossom2"},{id:2,src:"cherry-blossom3"},{id:3,src:"cherry-blossom4"}],QA=()=>{const[t,e]=b.useState(""),[n,s]=b.useState("cherry-blossom1"),[r,i]=b.useState(0),o=wn(),{uid:a}=uo();b.useEffect(()=>{(async()=>{const h=vn(ft,"users",a),d=await Qo(h);e(d.data().userNickname),c()})()},[]);const c=async()=>{const h=Qn(ft,`users/${a}/flowerList`),d=await su(ur(h,hr("createAt","asc")));i(d.data().count)},l=h=>{const d=document.querySelector(".blossomImage"),g=h.target.closest("button");Qh.map(m=>{if(parseInt(g.id)===m.id){d.src=`/assets/${m.src}.png`,s(m.src);return}})},u=async()=>{o(`/write-message/${a}/${n}`)};return f.jsx(Um.Provider,{value:{blossomInfoList:Qh,setBlossomSrc:s,handleSelect:l},children:f.jsxs("div",{className:cs.pageSetting,children:[f.jsxs("div",{className:cs.customContainer,children:[f.jsx("div",{className:cs.header,children:f.jsx(Pm,{userName:t,subText:"벚꽃을 골라주세요!"})}),f.jsx("div",{className:cs.blossomMain,children:f.jsx("img",{className:yt("blossomImage",cs.blossomImage),src:`/assets/${n}.png`,alt:"벚꽃이미지"})}),f.jsx(GA,{className:cs.customBlossom})]}),f.jsx("div",{children:f.jsx(Nm,{firstText:"이전",firstClick:()=>o(-1),secondText:"다음",secondClick:u})})]})})},YA="_writeMessageWrap_11v2y_7",XA="_header_11v2y_29",JA="_flower_11v2y_36",ZA="_writeMessageHeader_11v2y_41",eC="_notice_11v2y_47",tC="_modalButtonContainer_11v2y_52",Si={writeMessageWrap:YA,header:XA,flower:JA,writeMessageHeader:ZA,notice:eC,modalButtonContainer:tC},nC="_modalBackground_1oeg3_7",sC="_enrollWrap_1oeg3_26",rC="_noticeDetail_1oeg3_43",iC="_buttonList_1oeg3_58",oC="_cancel_1oeg3_77",aC="_done_1oeg3_86",kn={modalBackground:nC,enrollWrap:sC,noticeDetail:rC,buttonList:iC,cancel:oC,done:aC},cC=({handleCloseModal:t,handleComplete:e})=>f.jsx("div",{className:kn.modalBackground,children:f.jsxs("div",{className:kn.enrollWrap,children:[f.jsx("div",{className:kn.notice,children:f.jsx("h5",{children:"편지를 남길까요?"})}),f.jsxs("div",{className:kn.noticeDetail,children:[f.jsx("p",{children:"한 번 남긴 편지는 삭제 할 수 없어요!"}),f.jsx("p",{children:"신중한 결정 부탁드립니다!"})]}),f.jsxs("div",{className:kn.buttonList,children:[f.jsx("button",{className:kn.cancel,onClick:t,children:"취소"}),f.jsx("button",{className:kn.done,onClick:e,children:"완료"})]})]})}),lC="_messageWrap_uui1f_7",uC="_textLength_uui1f_16",hC="_authorContainer_uui1f_23",dC="_author_uui1f_23",fC="_contentContainer_uui1f_44",pC="_content_uui1f_44",Ln={messageWrap:lC,textLength:uC,authorContainer:hC,author:dC,contentContainer:fC,content:pC},mC=({authorInput:t,contentInput:e,state:n,text:s,handleChangeState:r})=>(b.useState(!1),f.jsx("div",{className:Ln.messageInputContainer,children:f.jsxs("div",{className:Ln.messageWrap,children:[f.jsx("div",{className:Ln.authorContainer,children:f.jsx("input",{className:Ln.author,name:"author",placeholder:"작성자이름을 적어주세요",type:"text",value:n.author,onChange:r,ref:t,maxLength:6})}),f.jsx("div",{className:Ln.contentContainer,children:f.jsx("textarea",{className:Ln.content,name:"content",placeholder:"메세지를 작성해주세요",type:"text",value:n.content,onChange:r,ref:e,maxLength:500})}),f.jsxs("p",{className:Ln.textLength,children:[s.length," / 500"]})]})})),gC=()=>{const[t,e]=b.useState(""),[n,s]=b.useState(0),[r,i]=b.useState(""),[o,a]=b.useState({author:"",content:""}),[c,l]=b.useState(!1),u=b.useRef(),h=b.useRef(),{uid:d,flowerName:g}=uo(),m=wn();b.useLayoutEffect(()=>{(async()=>{const H=vn(ft,"users",d),K=await Qo(H);e(K.data().userNickname),w()})()},[]);const w=async()=>{const H=Qn(ft,`users/${d}/flowerList`),K=await su(ur(H,hr("createAt","asc")));s(K.data().count)},k=(H,K)=>{const{name:ee,value:ne}=H.target;ee==="content"&&ne.length<=500&&i(ne),a({...o,[ee]:ne})},J=()=>{if(o.author.length<1){u.current.focus();return}if(o.content.length<2){h.current.focus();return}l(!0)},E=()=>{l(!1)},V=async()=>{const H=Im(),{author:K,content:ee}=o,ne=vn(Qn(ft,"users",d,"flowerList"));await Ic(ne,{nickname:K,contents:ee,createAt:H,flowerSrc:`${g}`}),window.location.replace(`/share-tree/${d}`)};return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:Si.writeMessageWrap,children:[f.jsxs("div",{className:Si.header,children:[f.jsx(Mm,{userName:t}),f.jsx("img",{className:Si.flower,src:`/assets/${g}.png`,alt:"벚꽃이미지"}),f.jsx(io,{className:Si.notice,subText:`${t}님에게 메세지를 남겨주세요`})]}),f.jsx(mC,{authorInput:u,contentInput:h,state:o,text:r,handleChangeState:k}),f.jsx(Rc,{firstText:"완료",firstClick:J,secondText:"이전",secondClick:()=>m(-1)})]}),c&&f.jsx(cC,{handleCloseModal:E,handleComplete:V})]})};function yC(t){const e=new Error(t);if(e.stack===void 0)try{throw e}catch{}return e}var vC=yC,Z=vC;function _C(t){return!!t&&typeof t.then=="function"}var ve=_C;function wC(t,e){if(t!=null)return t;throw Z(e??"Got unexpected null or undefined")}var be=wC;function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Xo{getValue(){throw Z("BaseLoadable")}toPromise(){throw Z("BaseLoadable")}valueMaybe(){throw Z("BaseLoadable")}valueOrThrow(){throw Z(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw Z("BaseLoadable")}promiseOrThrow(){throw Z(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw Z("BaseLoadable")}errorOrThrow(){throw Z(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw Z("BaseLoadable")}}class SC extends Xo{constructor(e){super(),X(this,"state","hasValue"),X(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const n=e(this.contents);return ve(n)?Xn(n):Cs(n)?n:ri(n)}catch(n){return ve(n)?Xn(n.next(()=>this.map(e))):Jo(n)}}}class bC extends Xo{constructor(e){super(),X(this,"state","hasError"),X(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class Vm extends Xo{constructor(e){super(),X(this,"state","loading"),X(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return Xn(this.contents.then(n=>{const s=e(n);if(Cs(s)){const r=s;switch(r.state){case"hasValue":return r.contents;case"hasError":throw r.contents;case"loading":return r.contents}}return s}).catch(n=>{if(ve(n))return n.then(()=>this.map(e).contents);throw n}))}}function ri(t){return Object.freeze(new SC(t))}function Jo(t){return Object.freeze(new bC(t))}function Xn(t){return Object.freeze(new Vm(t))}function $m(){return Object.freeze(new Vm(new Promise(()=>{})))}function TC(t){return t.every(e=>e.state==="hasValue")?ri(t.map(e=>e.contents)):t.some(e=>e.state==="hasError")?Jo(be(t.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):Xn(Promise.all(t.map(e=>e.contents)))}function Bm(t){const n=(Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(r=>t[r])).map(r=>Cs(r)?r:ve(r)?Xn(r):ri(r)),s=TC(n);return Array.isArray(t)?s:s.map(r=>Object.getOwnPropertyNames(t).reduce((i,o,a)=>({...i,[o]:r[a]}),{}))}function Cs(t){return t instanceof Xo}const EC={of:t=>ve(t)?Xn(t):Cs(t)?t:ri(t),error:t=>Jo(t),loading:()=>$m(),all:Bm,isLoadable:Cs};var ns={loadableWithValue:ri,loadableWithError:Jo,loadableWithPromise:Xn,loadableLoading:$m,loadableAll:Bm,isLoadable:Cs,RecoilLoadable:EC},IC=ns.loadableWithValue,RC=ns.loadableWithError,AC=ns.loadableWithPromise,CC=ns.loadableLoading,NC=ns.loadableAll,kC=ns.isLoadable,LC=ns.RecoilLoadable,ii=Object.freeze({__proto__:null,loadableWithValue:IC,loadableWithError:RC,loadableWithPromise:AC,loadableLoading:CC,loadableAll:NC,isLoadable:kC,RecoilLoadable:LC});const Ac={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function xC(t,e){var n,s;const r=(n=process.env[t])===null||n===void 0||(s=n.toLowerCase())===null||s===void 0?void 0:s.trim();if(r==null||r==="")return;if(!["true","false"].includes(r))throw Z(`({}).${t} value must be 'true', 'false', or empty: ${r}`);e(r==="true")}function DC(t,e){var n;const s=(n=process.env[t])===null||n===void 0?void 0:n.trim();s==null||s===""||e(s.split(/\s*,\s*|\s+/))}function OC(){var t;typeof process>"u"||((t=process)===null||t===void 0?void 0:t.env)!=null&&(xC("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{Ac.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),DC("RECOIL_GKS_ENABLED",e=>{e.forEach(n=>{Ac.RECOIL_GKS_ENABLED.add(n)})}))}OC();var Fs=Ac;function Zo(t){return Fs.RECOIL_GKS_ENABLED.has(t)}Zo.setPass=t=>{Fs.RECOIL_GKS_ENABLED.add(t)};Zo.setFail=t=>{Fs.RECOIL_GKS_ENABLED.delete(t)};Zo.clear=()=>{Fs.RECOIL_GKS_ENABLED.clear()};var fe=Zo;function MC(t,e,{error:n}={}){return null}var PC=MC,ou=PC,Va,$a,Ba;const UC=(Va=_e.createMutableSource)!==null&&Va!==void 0?Va:_e.unstable_createMutableSource,Fm=($a=_e.useMutableSource)!==null&&$a!==void 0?$a:_e.unstable_useMutableSource,jm=(Ba=_e.useSyncExternalStore)!==null&&Ba!==void 0?Ba:_e.unstable_useSyncExternalStore;function VC(){var t;const{ReactCurrentDispatcher:e,ReactCurrentOwner:n}=_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((t=e==null?void 0:e.current)!==null&&t!==void 0?t:n.currentDispatcher).useSyncExternalStore!=null}function $C(){return fe("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:fe("recoil_sync_external_store")&&jm!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:fe("recoil_mutable_source")&&Fm!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?fe("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:fe("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function BC(){return!1}var oi={createMutableSource:UC,useMutableSource:Fm,useSyncExternalStore:jm,currentRendererSupportsUseSyncExternalStore:VC,reactMode:$C,isFastRefreshEnabled:BC};class au{constructor(e){X(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class qm extends au{}class zm extends au{}function FC(t){return t instanceof qm||t instanceof zm}var ea={AbstractRecoilValue:au,RecoilState:qm,RecoilValueReadOnly:zm,isRecoilValue:FC},jC=ea.AbstractRecoilValue,qC=ea.RecoilState,zC=ea.RecoilValueReadOnly,WC=ea.isRecoilValue,Ns=Object.freeze({__proto__:null,AbstractRecoilValue:jC,RecoilState:qC,RecoilValueReadOnly:zC,isRecoilValue:WC});function KC(t,e){return function*(){let n=0;for(const s of t)yield e(s,n++)}()}var ta=KC;class Wm{}const HC=new Wm,Jn=new Map,cu=new Map;function GC(t){return ta(t,e=>be(cu.get(e)))}function QC(t){if(Jn.has(t)){const e=`Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function YC(t){Fs.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&QC(t.key),Jn.set(t.key,t);const e=t.set==null?new Ns.RecoilValueReadOnly(t.key):new Ns.RecoilState(t.key);return cu.set(t.key,e),e}class Km extends Error{}function XC(t){const e=Jn.get(t);if(e==null)throw new Km(`Missing definition for RecoilValue: "${t}""`);return e}function JC(t){return Jn.get(t)}const oo=new Map;function ZC(t){var e;if(!fe("recoil_memory_managament_2020"))return;const n=Jn.get(t);if(n!=null&&(e=n.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(n)){var s;Jn.delete(t),(s=Hm(t))===null||s===void 0||s(),oo.delete(t)}}function eN(t,e){fe("recoil_memory_managament_2020")&&(e===void 0?oo.delete(t):oo.set(t,e))}function Hm(t){return oo.get(t)}var lt={nodes:Jn,recoilValues:cu,registerNode:YC,getNode:XC,getNodeMaybe:JC,deleteNodeConfigIfPossible:ZC,setConfigDeletionHandler:eN,getConfigDeletionHandler:Hm,recoilValuesForKeys:GC,NodeMissingError:Km,DefaultValue:Wm,DEFAULT_VALUE:HC};function tN(t,e){e()}var nN={enqueueExecution:tN};function sN(t,e){return e={exports:{}},t(e,e.exports),e.exports}var rN=sN(function(t){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},n={},s=5,r=Math.pow(2,s),i=r-1,o=r/2,a=r/4,c={},l=function(p){return function(){return p}},u=n.hash=function(y){var p=typeof y>"u"?"undefined":e(y);if(p==="number")return y;p!=="string"&&(y+="");for(var S=0,C=0,N=y.length;C<N;++C){var L=y.charCodeAt(C);S=(S<<5)-S+L|0}return S},h=function(p){return p-=p>>1&1431655765,p=(p&858993459)+(p>>2&858993459),p=p+(p>>4)&252645135,p+=p>>8,p+=p>>16,p&127},d=function(p,S){return S>>>p&i},g=function(p){return 1<<p},m=function(p,S){return h(p&S-1)},w=function(p,S,C,N){var L=N;if(!p){var j=N.length;L=new Array(j);for(var $=0;$<j;++$)L[$]=N[$]}return L[S]=C,L},k=function(p,S,C){var N=C.length-1,L=0,j=0,$=C;if(p)L=j=S;else for($=new Array(N);L<S;)$[j++]=C[L++];for(++L;L<=N;)$[j++]=C[L++];return p&&($.length=N),$},J=function(p,S,C,N){var L=N.length;if(p){for(var j=L;j>=S;)N[j--]=N[j];return N[S]=C,N}for(var $=0,B=0,te=new Array(L+1);$<S;)te[B++]=N[$++];for(te[S]=C;$<L;)te[++B]=N[$++];return te},E=1,V=2,H=3,K=4,ee={__hamt_isEmpty:!0},ne=function(p){return p===ee||p&&p.__hamt_isEmpty},Re=function(p,S,C,N){return{type:E,edit:p,hash:S,key:C,value:N,_modify:nn}},et=function(p,S,C){return{type:V,edit:p,hash:S,children:C,_modify:$t}},ae=function(p,S,C){return{type:H,edit:p,mask:S,children:C,_modify:re}},$e=function(p,S,C){return{type:K,edit:p,size:S,children:C,_modify:oe}},Vt=function(p){return p===ee||p.type===E||p.type===V},Le=function(p,S,C,N,L){for(var j=[],$=N,B=0,te=0;$;++te)$&1&&(j[te]=L[B++]),$>>>=1;return j[S]=C,$e(p,B+1,j)},Be=function(p,S,C,N){for(var L=new Array(S-1),j=0,$=0,B=0,te=N.length;B<te;++B)if(B!==C){var we=N[B];we&&!ne(we)&&(L[j++]=we,$|=1<<B)}return ae(p,$,L)},en=function y(p,S,C,N,L,j){if(C===L)return et(p,C,[j,N]);var $=d(S,C),B=d(S,L);return ae(p,g($)|g(B),$===B?[y(p,S+s,C,N,L,j)]:$<B?[N,j]:[j,N])},tn=function(p,S,C,N,L,j,$,B){for(var te=L.length,we=0;we<te;++we){var ot=L[we];if(C($,ot.key)){var Pe=ot.value,gt=j(Pe);return gt===Pe?L:gt===c?(--B.value,k(p,we,L)):w(p,we,Re(S,N,$,gt),L)}}var wt=j();return wt===c?L:(++B.value,w(p,te,Re(S,N,$,wt),L))},_t=function(p,S){return p===S.edit},nn=function(p,S,C,N,L,j,$){if(S(j,this.key)){var B=N(this.value);return B===this.value?this:B===c?(--$.value,ee):_t(p,this)?(this.value=B,this):Re(p,L,j,B)}var te=N();return te===c?this:(++$.value,en(p,C,this.hash,this,L,Re(p,L,j,te)))},$t=function(p,S,C,N,L,j,$){if(L===this.hash){var B=_t(p,this),te=tn(B,p,S,this.hash,this.children,N,j,$);return te===this.children?this:te.length>1?et(p,this.hash,te):te[0]}var we=N();return we===c?this:(++$.value,en(p,C,this.hash,this,L,Re(p,L,j,we)))},re=function(p,S,C,N,L,j,$){var B=this.mask,te=this.children,we=d(C,L),ot=g(we),Pe=m(B,ot),gt=B&ot,wt=gt?te[Pe]:ee,os=wt._modify(p,S,C+s,N,L,j,$);if(wt===os)return this;var fi=_t(p,this),qs=B,zs=void 0;if(gt&&ne(os)){if(qs&=~ot,!qs)return ee;if(te.length<=2&&Vt(te[Pe^1]))return te[Pe^1];zs=k(fi,Pe,te)}else if(!gt&&!ne(os)){if(te.length>=o)return Le(p,we,os,B,te);qs|=ot,zs=J(fi,Pe,os,te)}else zs=w(fi,Pe,os,te);return fi?(this.mask=qs,this.children=zs,this):ae(p,qs,zs)},oe=function(p,S,C,N,L,j,$){var B=this.size,te=this.children,we=d(C,L),ot=te[we],Pe=(ot||ee)._modify(p,S,C+s,N,L,j,$);if(ot===Pe)return this;var gt=_t(p,this),wt=void 0;if(ne(ot)&&!ne(Pe))++B,wt=w(gt,we,Pe,te);else if(!ne(ot)&&ne(Pe)){if(--B,B<=a)return Be(p,B,we,te);wt=w(gt,we,ee,te)}else wt=w(gt,we,Pe,te);return gt?(this.size=B,this.children=wt,this):$e(p,B,wt)};ee._modify=function(y,p,S,C,N,L,j){var $=C();return $===c?ee:(++j.value,Re(y,N,L,$))};function v(y,p,S,C,N){this._editable=y,this._edit=p,this._config=S,this._root=C,this._size=N}v.prototype.setTree=function(y,p){return this._editable?(this._root=y,this._size=p,this):y===this._root?this:new v(this._editable,this._edit,this._config,y,p)};var I=n.tryGetHash=function(y,p,S,C){for(var N=C._root,L=0,j=C._config.keyEq;;)switch(N.type){case E:return j(S,N.key)?N.value:y;case V:{if(p===N.hash)for(var $=N.children,B=0,te=$.length;B<te;++B){var we=$[B];if(j(S,we.key))return we.value}return y}case H:{var ot=d(L,p),Pe=g(ot);if(N.mask&Pe){N=N.children[m(N.mask,Pe)],L+=s;break}return y}case K:{if(N=N.children[d(L,p)],N){L+=s;break}return y}default:return y}};v.prototype.tryGetHash=function(y,p,S){return I(y,p,S,this)};var R=n.tryGet=function(y,p,S){return I(y,S._config.hash(p),p,S)};v.prototype.tryGet=function(y,p){return R(y,p,this)};var F=n.getHash=function(y,p,S){return I(void 0,y,p,S)};v.prototype.getHash=function(y,p){return F(y,p,this)},n.get=function(y,p){return I(void 0,p._config.hash(y),y,p)},v.prototype.get=function(y,p){return R(p,y,this)};var x=n.has=function(y,p,S){return I(c,y,p,S)!==c};v.prototype.hasHash=function(y,p){return x(y,p,this)};var G=n.has=function(y,p){return x(p._config.hash(y),y,p)};v.prototype.has=function(y){return G(y,this)};var q=function(p,S){return p===S};n.make=function(y){return new v(0,0,{keyEq:y&&y.keyEq||q,hash:y&&y.hash||u},ee,0)},n.empty=n.make();var P=n.isEmpty=function(y){return y&&!!ne(y._root)};v.prototype.isEmpty=function(){return P(this)};var me=n.modifyHash=function(y,p,S,C){var N={value:C._size},L=C._root._modify(C._editable?C._edit:NaN,C._config.keyEq,0,y,p,S,N);return C.setTree(L,N.value)};v.prototype.modifyHash=function(y,p,S){return me(S,y,p,this)};var Te=n.modify=function(y,p,S){return me(y,S._config.hash(p),p,S)};v.prototype.modify=function(y,p){return Te(p,y,this)};var le=n.setHash=function(y,p,S,C){return me(l(S),y,p,C)};v.prototype.setHash=function(y,p,S){return le(y,p,S,this)};var he=n.set=function(y,p,S){return le(S._config.hash(y),y,p,S)};v.prototype.set=function(y,p){return he(y,p,this)};var ut=l(c),Bt=n.removeHash=function(y,p,S){return me(ut,y,p,S)};v.prototype.removeHash=v.prototype.deleteHash=function(y,p){return Bt(y,p,this)};var tt=n.remove=function(y,p){return Bt(p._config.hash(y),y,p)};v.prototype.remove=v.prototype.delete=function(y){return tt(y,this)};var nt=n.beginMutation=function(y){return new v(y._editable+1,y._edit+1,y._config,y._root,y._size)};v.prototype.beginMutation=function(){return nt(this)};var hi=n.endMutation=function(y){return y._editable=y._editable&&y._editable-1,y};v.prototype.endMutation=function(){return hi(this)};var ya=n.mutate=function(y,p){var S=nt(p);return y(S),hi(S)};v.prototype.mutate=function(y){return ya(y,this)};var rs=function(p){return p&&ge(p[0],p[1],p[2],p[3],p[4])},ge=function(p,S,C,N,L){for(;C<p;){var j=S[C++];if(j&&!ne(j))return ze(j,N,[p,S,C,N,L])}return rs(L)},ze=function(p,S,C){switch(p.type){case E:return{value:S(p),rest:C};case V:case K:case H:var N=p.children;return ge(N.length,N,0,S,C);default:return rs(C)}},Ae={done:!0};function mt(y){this.v=y}mt.prototype.next=function(){if(!this.v)return Ae;var y=this.v;return this.v=rs(y.rest),y},mt.prototype[Symbol.iterator]=function(){return this};var It=function(p,S){return new mt(ze(p._root,S))},Rt=function(p){return[p.key,p.value]},is=n.entries=function(y){return It(y,Rt)};v.prototype.entries=v.prototype[Symbol.iterator]=function(){return is(this)};var di=function(p){return p.key},ny=n.keys=function(y){return It(y,di)};v.prototype.keys=function(){return ny(this)};var sy=function(p){return p.value},ry=n.values=v.prototype.values=function(y){return It(y,sy)};v.prototype.values=function(){return ry(this)};var bu=n.fold=function(y,p,S){var C=S._root;if(C.type===E)return y(p,C.value,C.key);for(var N=[C.children],L=void 0;L=N.pop();)for(var j=0,$=L.length;j<$;){var B=L[j++];B&&B.type&&(B.type===E?p=y(p,B.value,B.key):N.push(B.children))}return p};v.prototype.fold=function(y,p){return bu(y,p,this)};var iy=n.forEach=function(y,p){return bu(function(S,C,N){return y(C,N,p)},null,p)};v.prototype.forEach=function(y){return iy(y,this)};var oy=n.count=function(y){return y._size};v.prototype.count=function(){return oy(this)},Object.defineProperty(v.prototype,"size",{get:v.prototype.count}),t.exports?t.exports=n:(void 0).hamt=n});class iN{constructor(e){X(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,n){return this._map.set(e,n),this}delete(e){return this._map.delete(e),this}clone(){return uu(this)}toMap(){return new Map(this._map)}}class lu{constructor(e){if(X(this,"_hamt",rN.empty.beginMutation()),e instanceof lu){const n=e._hamt.endMutation();e._hamt=n.beginMutation(),this._hamt=n.beginMutation()}else if(e)for(const[n,s]of e.entries())this._hamt.set(n,s)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,n){return this._hamt.set(e,n),this}delete(e){return this._hamt.delete(e),this}clone(){return uu(this)}toMap(){return new Map(this._hamt)}}function uu(t){return fe("recoil_hamt_2020")?new lu(t):new iN(t)}var oN={persistentMap:uu},aN=oN.persistentMap,cN=Object.freeze({__proto__:null,persistentMap:aN});function lN(t,...e){const n=new Set;e:for(const s of t){for(const r of e)if(r.has(s))continue e;n.add(s)}return n}var fr=lN;function uN(t,e){const n=new Map;return t.forEach((s,r)=>{n.set(r,e(s,r))}),n}var ao=uN;function hN(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function dN(t){return{nodeDeps:ao(t.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:ao(t.nodeToNodeSubscriptions,e=>new Set(e))}}function Fa(t,e,n,s){const{nodeDeps:r,nodeToNodeSubscriptions:i}=n,o=r.get(t);if(o&&s&&o!==s.nodeDeps.get(t))return;r.set(t,e);const a=o==null?e:fr(e,o);for(const c of a)i.has(c)||i.set(c,new Set),be(i.get(c)).add(t);if(o){const c=fr(o,e);for(const l of c){if(!i.has(l))return;const u=be(i.get(l));u.delete(t),u.size===0&&i.delete(l)}}}function fN(t,e,n,s){var r,i,o,a;const c=n.getState();s===c.currentTree.version||s===((r=c.nextTree)===null||r===void 0?void 0:r.version)||((i=c.previousTree)===null||i===void 0||i.version);const l=n.getGraph(s);if(Fa(t,e,l),s===((o=c.previousTree)===null||o===void 0?void 0:o.version)){const h=n.getGraph(c.currentTree.version);Fa(t,e,h,l)}if(s===((a=c.previousTree)===null||a===void 0?void 0:a.version)||s===c.currentTree.version){var u;const h=(u=c.nextTree)===null||u===void 0?void 0:u.version;if(h!==void 0){const d=n.getGraph(h);Fa(t,e,d,l)}}}var ai={cloneGraph:dN,graph:hN,saveDepsToStore:fN};let pN=0;const mN=()=>pN++;let gN=0;const yN=()=>gN++;let vN=0;const _N=()=>vN++;var na={getNextTreeStateVersion:mN,getNextStoreID:yN,getNextComponentID:_N};const{persistentMap:Yh}=cN,{graph:wN}=ai,{getNextTreeStateVersion:Gm}=na;function Qm(){const t=Gm();return{version:t,stateID:t,transactionMetadata:{},dirtyAtoms:new Set,atomValues:Yh(),nonvalidatedAtoms:Yh()}}function SN(){const t=Qm();return{currentTree:t,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(t.version,wN()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var Ym={makeEmptyTreeState:Qm,makeEmptyStoreState:SN,getNextTreeStateVersion:Gm};class Xm{}function bN(){return new Xm}var sa={RetentionZone:Xm,retentionZone:bN};function TN(t,e){const n=new Set(t);return n.add(e),n}function EN(t,e){const n=new Set(t);return n.delete(e),n}function IN(t,e,n){const s=new Map(t);return s.set(e,n),s}function RN(t,e,n){const s=new Map(t);return s.set(e,n(s.get(e))),s}function AN(t,e){const n=new Map(t);return n.delete(e),n}function CN(t,e){const n=new Map(t);return e.forEach(s=>n.delete(s)),n}var Jm={setByAddingToSet:TN,setByDeletingFromSet:EN,mapBySettingInMap:IN,mapByUpdatingInMap:RN,mapByDeletingFromMap:AN,mapByDeletingMultipleFromMap:CN};function*NN(t,e){let n=0;for(const s of t)e(s,n++)&&(yield s)}var hu=NN;function kN(t,e){return new Proxy(t,{get:(s,r)=>(!(r in s)&&r in e&&(s[r]=e[r]()),s[r]),ownKeys:s=>Object.keys(s)})}var Zm=kN;const{getNode:ci,getNodeMaybe:LN,recoilValuesForKeys:Xh}=lt,{RetentionZone:Jh}=sa,{setByAddingToSet:xN}=Jm,DN=Object.freeze(new Set);class ON extends Error{}function MN(t,e,n){if(!fe("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:s}=t.getState().retention;function r(i){let o=s.get(i);o||s.set(i,o=new Set),o.add(e)}if(n instanceof Jh)r(n);else if(Array.isArray(n))for(const i of n)r(i);return()=>{if(!fe("recoil_memory_managament_2020"))return;const{retention:i}=t.getState();function o(a){const c=i.nodesRetainedByZone.get(a);c==null||c.delete(e),c&&c.size===0&&i.nodesRetainedByZone.delete(a)}if(n instanceof Jh)o(n);else if(Array.isArray(n))for(const a of n)o(a)}}function du(t,e,n,s){const r=t.getState();if(r.nodeCleanupFunctions.has(n))return;const i=ci(n),o=MN(t,n,i.retainedBy),a=i.init(t,e,s);r.nodeCleanupFunctions.set(n,()=>{a(),o()})}function PN(t,e,n){du(t,t.getState().currentTree,e,n)}function UN(t,e){var n;const s=t.getState();(n=s.nodeCleanupFunctions.get(e))===null||n===void 0||n(),s.nodeCleanupFunctions.delete(e)}function VN(t,e,n){return du(t,e,n,"get"),ci(n).get(t,e)}function eg(t,e,n){return ci(n).peek(t,e)}function $N(t,e,n){var s;const r=LN(e);return r==null||(s=r.invalidate)===null||s===void 0||s.call(r,t),{...t,atomValues:t.atomValues.clone().delete(e),nonvalidatedAtoms:t.nonvalidatedAtoms.clone().set(e,n),dirtyAtoms:xN(t.dirtyAtoms,e)}}function BN(t,e,n,s){const r=ci(n);if(r.set==null)throw new ON(`Attempt to set read-only RecoilValue: ${n}`);const i=r.set;return du(t,e,n,"set"),i(t,e,s)}function FN(t,e,n){const s=t.getState(),r=t.getGraph(e.version),i=ci(n).nodeType;return Zm({type:i},{loadable:()=>eg(t,e,n),isActive:()=>s.knownAtoms.has(n)||s.knownSelectors.has(n),isSet:()=>i==="selector"?!1:e.atomValues.has(n),isModified:()=>e.dirtyAtoms.has(n),deps:()=>{var o;return Xh((o=r.nodeDeps.get(n))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:Xh(hu(tg(t,e,new Set([n])),c=>c!==n)),components:ta((o=(a=s.nodeToComponentSubscriptions.get(n))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([c])=>({name:c}))}}})}function tg(t,e,n){const s=new Set,r=Array.from(n),i=t.getGraph(e.version);for(let a=r.pop();a;a=r.pop()){var o;s.add(a);const c=(o=i.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:DN;for(const l of c)s.has(l)||r.push(l)}return s}var Rn={getNodeLoadable:VN,peekNodeLoadable:eg,setNodeValue:BN,initializeNode:PN,cleanUpNode:UN,setUnvalidatedAtomValue_DEPRECATED:$N,peekNodeInfo:FN,getDownstreamNodes:tg};let ng=null;function jN(t){ng=t}function qN(){var t;(t=ng)===null||t===void 0||t()}var sg={setInvalidateMemoizedSnapshot:jN,invalidateMemoizedSnapshot:qN};const{getDownstreamNodes:zN,getNodeLoadable:rg,setNodeValue:WN}=Rn,{getNextComponentID:KN}=na,{getNode:HN,getNodeMaybe:ig}=lt,{DefaultValue:fu}=lt,{reactMode:GN}=oi,{AbstractRecoilValue:QN,RecoilState:YN,RecoilValueReadOnly:XN,isRecoilValue:JN}=Ns,{invalidateMemoizedSnapshot:ZN}=sg;function ek(t,{key:e},n=t.getState().currentTree){var s,r;const i=t.getState();n.version===i.currentTree.version||n.version===((s=i.nextTree)===null||s===void 0?void 0:s.version)||(n.version,(r=i.previousTree)===null||r===void 0||r.version);const o=rg(t,n,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function tk(t,e){const n=t.clone();return e.forEach((s,r)=>{s.state==="hasValue"&&s.contents instanceof fu?n.delete(r):n.set(r,s)}),n}function nk(t,e,{key:n},s){if(typeof s=="function"){const r=rg(t,e,n);if(r.state==="loading"){const i=`Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;throw Z(i)}else if(r.state==="hasError")throw r.contents;return s(r.contents)}else return s}function sk(t,e,n){if(n.type==="set"){const{recoilValue:r,valueOrUpdater:i}=n,o=nk(t,e,r,i),a=WN(t,e,r.key,o);for(const[c,l]of a.entries())Cc(e,c,l)}else if(n.type==="setLoadable"){const{recoilValue:{key:r},loadable:i}=n;Cc(e,r,i)}else if(n.type==="markModified"){const{recoilValue:{key:r}}=n;e.dirtyAtoms.add(r)}else if(n.type==="setUnvalidated"){var s;const{recoilValue:{key:r},unvalidatedValue:i}=n,o=ig(r);o==null||(s=o.invalidate)===null||s===void 0||s.call(o,e),e.atomValues.delete(r),e.nonvalidatedAtoms.set(r,i),e.dirtyAtoms.add(r)}else ou(`Unknown action ${n.type}`)}function Cc(t,e,n){n.state==="hasValue"&&n.contents instanceof fu?t.atomValues.delete(e):t.atomValues.set(e,n),t.dirtyAtoms.add(e),t.nonvalidatedAtoms.delete(e)}function og(t,e){t.replaceState(n=>{const s=ag(n);for(const r of e)sk(t,s,r);return cg(t,s),ZN(),s})}function ra(t,e){if(pr.length){const n=pr[pr.length-1];let s=n.get(t);s||n.set(t,s=[]),s.push(e)}else og(t,[e])}const pr=[];function rk(){const t=new Map;return pr.push(t),()=>{for(const[e,n]of t)og(e,n);pr.pop()}}function ag(t){return{...t,atomValues:t.atomValues.clone(),nonvalidatedAtoms:t.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(t.dirtyAtoms)}}function cg(t,e){const n=zN(t,e,e.dirtyAtoms);for(const i of n){var s,r;(s=ig(i))===null||s===void 0||(r=s.invalidate)===null||r===void 0||r.call(s,e)}}function lg(t,e,n){ra(t,{type:"set",recoilValue:e,valueOrUpdater:n})}function ik(t,e,n){if(n instanceof fu)return lg(t,e,n);ra(t,{type:"setLoadable",recoilValue:e,loadable:n})}function ok(t,e){ra(t,{type:"markModified",recoilValue:e})}function ak(t,e,n){ra(t,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:n})}function ck(t,{key:e},n,s=null){const r=KN(),i=t.getState();i.nodeToComponentSubscriptions.has(e)||i.nodeToComponentSubscriptions.set(e,new Map),be(i.nodeToComponentSubscriptions.get(e)).set(r,[s??"<not captured>",n]);const o=GN();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=t.getState().nextTree;a&&a.dirtyAtoms.has(e)&&n(a)}return{release:()=>{const a=t.getState(),c=a.nodeToComponentSubscriptions.get(e);c===void 0||!c.has(r)||(c.delete(r),c.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function lk(t,e){var n;const{currentTree:s}=t.getState(),r=HN(e.key);(n=r.clearCache)===null||n===void 0||n.call(r,t,s)}var Pt={RecoilValueReadOnly:XN,AbstractRecoilValue:QN,RecoilState:YN,getRecoilValueAsLoadable:ek,setRecoilValue:lg,setRecoilValueLoadable:ik,markRecoilValueModified:ok,setUnvalidatedRecoilValue:ak,subscribeToRecoilValue:ck,isRecoilValue:JN,applyAtomValueWrites:tk,batchStart:rk,writeLoadableToTreeState:Cc,invalidateDownstreams:cg,copyTreeState:ag,refreshRecoilValue:lk};function uk(t,e,n){const s=t.entries();let r=s.next();for(;!r.done;){const i=r.value;if(e.call(n,i[1],i[0],t))return!0;r=s.next()}return!1}var hk=uk;const{cleanUpNode:dk}=Rn,{deleteNodeConfigIfPossible:fk,getNode:ug}=lt,{RetentionZone:hg}=sa,pk=12e4,dg=new Set;function fg(t,e){const n=t.getState(),s=n.currentTree;if(n.nextTree)return;const r=new Set;for(const o of e)if(o instanceof hg)for(const a of vk(n,o))r.add(a);else r.add(o);const i=mk(t,r);for(const o of i)yk(t,s,o)}function mk(t,e){const n=t.getState(),s=n.currentTree,r=t.getGraph(s.version),i=new Set,o=new Set;return a(e),i;function a(c){const l=new Set,u=gk(t,s,c,i,o);for(const m of u){var h;if(ug(m).retainedBy==="recoilRoot"){o.add(m);continue}if(((h=n.retention.referenceCounts.get(m))!==null&&h!==void 0?h:0)>0){o.add(m);continue}if(pg(m).some(k=>n.retention.referenceCounts.get(k))){o.add(m);continue}const w=r.nodeToNodeSubscriptions.get(m);if(w&&hk(w,k=>o.has(k))){o.add(m);continue}i.add(m),l.add(m)}const d=new Set;for(const m of l)for(const w of(g=r.nodeDeps.get(m))!==null&&g!==void 0?g:dg){var g;i.has(w)||d.add(w)}d.size&&a(d)}}function gk(t,e,n,s,r){const i=t.getGraph(e.version),o=[],a=new Set;for(;n.size>0;)c(be(n.values().next().value));return o;function c(l){if(s.has(l)||r.has(l)){n.delete(l);return}if(a.has(l))return;const u=i.nodeToNodeSubscriptions.get(l);if(u)for(const h of u)c(h);a.add(l),n.delete(l),o.push(l)}}function yk(t,e,n){if(!fe("recoil_memory_managament_2020"))return;dk(t,n);const s=t.getState();s.knownAtoms.delete(n),s.knownSelectors.delete(n),s.nodeTransactionSubscriptions.delete(n),s.retention.referenceCounts.delete(n);const r=pg(n);for(const c of r){var i;(i=s.retention.nodesRetainedByZone.get(c))===null||i===void 0||i.delete(n)}e.atomValues.delete(n),e.dirtyAtoms.delete(n),e.nonvalidatedAtoms.delete(n);const o=s.graphsByVersion.get(e.version);if(o){const c=o.nodeDeps.get(n);if(c!==void 0){o.nodeDeps.delete(n);for(const l of c){var a;(a=o.nodeToNodeSubscriptions.get(l))===null||a===void 0||a.delete(n)}}o.nodeToNodeSubscriptions.delete(n)}fk(n)}function vk(t,e){var n;return(n=t.retention.nodesRetainedByZone.get(e))!==null&&n!==void 0?n:dg}function pg(t){const e=ug(t).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof hg?[e]:e}function _k(t,e){const n=t.getState();n.nextTree?n.retention.retainablesToCheckForRelease.add(e):fg(t,new Set([e]))}function wk(t,e,n){var s;if(!fe("recoil_memory_managament_2020"))return;const r=t.getState().retention.referenceCounts,i=((s=r.get(e))!==null&&s!==void 0?s:0)+n;i===0?mg(t,e):r.set(e,i)}function mg(t,e){if(!fe("recoil_memory_managament_2020"))return;t.getState().retention.referenceCounts.delete(e),_k(t,e)}function Sk(t){if(!fe("recoil_memory_managament_2020"))return;const e=t.getState();fg(t,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function bk(t){return t===void 0?"recoilRoot":t}var ss={SUSPENSE_TIMEOUT_MS:pk,updateRetainCount:wk,updateRetainCountToZero:mg,releaseScheduledRetainablesNow:Sk,retainedByOptionWithDefault:bk};const{unstable_batchedUpdates:Tk}=ly;var Ek={unstable_batchedUpdates:Tk};const{unstable_batchedUpdates:Ik}=Ek;var Rk={unstable_batchedUpdates:Ik};const{batchStart:Ak}=Pt,{unstable_batchedUpdates:Ck}=Rk;let pu=Ck||(t=>t());const Nk=t=>{pu=t},kk=()=>pu,Lk=t=>{pu(()=>{let e=()=>{};try{e=Ak(),t()}finally{e()}})};var ia={getBatcher:kk,setBatcher:Nk,batchUpdates:Lk};function*xk(t){for(const e of t)for(const n of e)yield n}var gg=xk;const yg=typeof Window>"u"||typeof window>"u",Dk=t=>!yg&&(t===window||t instanceof Window),Ok=typeof navigator<"u"&&navigator.product==="ReactNative";var oa={isSSR:yg,isReactNative:Ok,isWindow:Dk};function Mk(t,e){let n;return(...s)=>{n||(n={});const r=e(...s);return Object.hasOwnProperty.call(n,r)||(n[r]=t(...s)),n[r]}}function Pk(t,e){let n,s;return(...r)=>{const i=e(...r);return n===i||(n=i,s=t(...r)),s}}function Uk(t,e){let n,s;return[(...o)=>{const a=e(...o);return n===a||(n=a,s=t(...o)),s},()=>{n=null}]}var Vk={memoizeWithArgsHash:Mk,memoizeOneWithArgsHash:Pk,memoizeOneWithArgsHashAndInvalidation:Uk};const{batchUpdates:Nc}=ia,{initializeNode:$k,peekNodeInfo:Bk}=Rn,{graph:Fk}=ai,{getNextStoreID:jk}=na,{DEFAULT_VALUE:qk,recoilValues:Zh,recoilValuesForKeys:ed}=lt,{AbstractRecoilValue:zk,getRecoilValueAsLoadable:Wk,setRecoilValue:td,setUnvalidatedRecoilValue:Kk}=Pt,{updateRetainCount:Mi}=ss,{setInvalidateMemoizedSnapshot:Hk}=sg,{getNextTreeStateVersion:Gk,makeEmptyStoreState:Qk}=Ym,{isSSR:Yk}=oa,{memoizeOneWithArgsHashAndInvalidation:Xk}=Vk;class aa{constructor(e,n){X(this,"_store",void 0),X(this,"_refCount",1),X(this,"getLoadable",s=>(this.checkRefCount_INTERNAL(),Wk(this._store,s))),X(this,"getPromise",s=>(this.checkRefCount_INTERNAL(),this.getLoadable(s).toPromise())),X(this,"getNodes_UNSTABLE",s=>{if(this.checkRefCount_INTERNAL(),(s==null?void 0:s.isModified)===!0){if((s==null?void 0:s.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return ed(o.dirtyAtoms)}const r=this._store.getState().knownAtoms,i=this._store.getState().knownSelectors;return(s==null?void 0:s.isInitialized)==null?Zh.values():s.isInitialized===!0?ed(gg([r,i])):hu(Zh.values(),({key:o})=>!r.has(o)&&!i.has(o))}),X(this,"getInfo_UNSTABLE",({key:s})=>(this.checkRefCount_INTERNAL(),Bk(this._store,this._store.getState().currentTree,s))),X(this,"map",s=>{this.checkRefCount_INTERNAL();const r=new kc(this,Nc);return s(r),r}),X(this,"asyncMap",async s=>{this.checkRefCount_INTERNAL();const r=new kc(this,Nc);return r.retain(),await s(r),r.autoRelease_INTERNAL(),r}),this._store={storeID:jk(),parentStoreID:n,getState:()=>e,replaceState:s=>{e.currentTree=s(e.currentTree)},getGraph:s=>{const r=e.graphsByVersion;if(r.has(s))return be(r.get(s));const i=Fk();return r.set(s,i),i},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw Z("Cannot subscribe to Snapshots")}};for(const s of this._store.getState().knownAtoms)$k(this._store,s,"get"),Mi(this._store,s,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){Yk||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!fe("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){fe("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function vg(t,e,n=!1){const s=t.getState(),r=n?Gk():e.version;return{currentTree:{version:n?r:e.version,stateID:n?r:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(s.knownAtoms),knownSelectors:new Set(s.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(r,t.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map(ta(s.nodeCleanupFunctions.entries(),([i])=>[i,()=>{}]))}}function Jk(t){const e=new aa(Qk());return t!=null?e.map(t):e}const[nd,_g]=Xk((t,e)=>{var n;const s=t.getState(),r=e==="latest"?(n=s.nextTree)!==null&&n!==void 0?n:s.currentTree:be(s.previousTree);return new aa(vg(t,r),t.storeID)},(t,e)=>{var n,s;return String(e)+String(t.storeID)+String((n=t.getState().nextTree)===null||n===void 0?void 0:n.version)+String(t.getState().currentTree.version)+String((s=t.getState().previousTree)===null||s===void 0?void 0:s.version)});Hk(_g);function Zk(t,e="latest"){const n=nd(t,e);return n.isRetained()?n:(_g(),nd(t,e))}class kc extends aa{constructor(e,n){super(vg(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),X(this,"_batch",void 0),X(this,"set",(s,r)=>{this.checkRefCount_INTERNAL();const i=this.getStore_INTERNAL();this._batch(()=>{Mi(i,s.key,1),td(this.getStore_INTERNAL(),s,r)})}),X(this,"reset",s=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();this._batch(()=>{Mi(r,s.key,1),td(this.getStore_INTERNAL(),s,qk)})}),X(this,"setUnvalidatedAtomValues_DEPRECATED",s=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();Nc(()=>{for(const[i,o]of s.entries())Mi(r,i,1),Kk(r,new zk(i),o)})}),this._batch=n}}var ca={Snapshot:aa,MutableSnapshot:kc,freshSnapshot:Jk,cloneSnapshot:Zk},eL=ca.Snapshot,tL=ca.MutableSnapshot,nL=ca.freshSnapshot,sL=ca.cloneSnapshot,la=Object.freeze({__proto__:null,Snapshot:eL,MutableSnapshot:tL,freshSnapshot:nL,cloneSnapshot:sL});function rL(...t){const e=new Set;for(const n of t)for(const s of n)e.add(s);return e}var iL=rL;const{useRef:oL}=_e;function aL(t){const e=oL(t);return e.current===t&&typeof t=="function"&&(e.current=t()),e}var sd=aL;const{getNextTreeStateVersion:cL,makeEmptyStoreState:wg}=Ym,{cleanUpNode:lL,getDownstreamNodes:uL,initializeNode:hL,setNodeValue:dL,setUnvalidatedAtomValue_DEPRECATED:fL}=Rn,{graph:pL}=ai,{cloneGraph:mL}=ai,{getNextStoreID:Sg}=na,{createMutableSource:ja,reactMode:bg}=oi,{applyAtomValueWrites:gL}=Pt,{releaseScheduledRetainablesNow:Tg}=ss,{freshSnapshot:yL}=la,{useCallback:vL,useContext:Eg,useEffect:Lc,useMemo:_L,useRef:wL,useState:SL}=_e;function Hs(){throw Z("This component must be used inside a <RecoilRoot> component.")}const Ig=Object.freeze({storeID:Sg(),getState:Hs,replaceState:Hs,getGraph:Hs,subscribeToTransactions:Hs,addTransactionMetadata:Hs});let xc=!1;function rd(t){if(xc)throw Z("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=t.getState();if(e.nextTree===null){fe("recoil_memory_managament_2020")&&fe("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&Tg(t);const n=e.currentTree.version,s=cL();e.nextTree={...e.currentTree,version:s,stateID:s,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(s,mL(be(e.graphsByVersion.get(n))))}}const Rg=_e.createContext({current:Ig}),ua=()=>Eg(Rg),Ag=_e.createContext(null);function bL(){return Eg(Ag)}function mu(t,e,n){const s=uL(t,n,n.dirtyAtoms);for(const r of s){const i=e.nodeToComponentSubscriptions.get(r);if(i)for(const[o,[a,c]]of i)c(n)}}function Cg(t){const e=t.getState(),n=e.currentTree,s=n.dirtyAtoms;if(s.size){for(const[r,i]of e.nodeTransactionSubscriptions)if(s.has(r))for(const[o,a]of i)a(t);for(const[r,i]of e.transactionSubscriptions)i(t);(!bg().early||e.suspendedComponentResolvers.size>0)&&(mu(t,e,n),e.suspendedComponentResolvers.forEach(r=>r()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(r=>r(n)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function TL(t){const e=t.getState();e.commitDepth++;try{const{nextTree:n}=e;if(n==null)return;e.previousTree=e.currentTree,e.currentTree=n,e.nextTree=null,Cg(t),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):ou("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,fe("recoil_memory_managament_2020")&&n==null&&Tg(t)}finally{e.commitDepth--}}function EL({setNotifyBatcherOfChange:t}){const e=ua(),[,n]=SL([]);return t(()=>n({})),Lc(()=>(t(()=>n({})),()=>{t(()=>{})}),[t]),Lc(()=>{nN.enqueueExecution("Batcher",()=>{TL(e.current)})}),null}function IL(t,e){const n=wg();return e({set:(s,r)=>{const i=n.currentTree,o=dL(t,i,s.key,r),a=new Set(o.keys()),c=i.nonvalidatedAtoms.clone();for(const l of a)c.delete(l);n.currentTree={...i,dirtyAtoms:iL(i.dirtyAtoms,a),atomValues:gL(i.atomValues,o),nonvalidatedAtoms:c}},setUnvalidatedAtomValues:s=>{s.forEach((r,i)=>{n.currentTree=fL(n.currentTree,i,r)})}}),n}function RL(t){const e=yL(t),n=e.getStore_INTERNAL().getState();return e.retain(),n.nodeCleanupFunctions.forEach(s=>s()),n.nodeCleanupFunctions.clear(),n}let id=0;function AL({initializeState_DEPRECATED:t,initializeState:e,store_INTERNAL:n,children:s}){let r;const i=g=>{const m=r.current.graphsByVersion;if(m.has(g))return be(m.get(g));const w=pL();return m.set(g,w),w},o=(g,m)=>{if(m==null){const{transactionSubscriptions:w}=h.current.getState(),k=id++;return w.set(k,g),{release:()=>{w.delete(k)}}}else{const{nodeTransactionSubscriptions:w}=h.current.getState();w.has(m)||w.set(m,new Map);const k=id++;return be(w.get(m)).set(k,g),{release:()=>{const J=w.get(m);J&&(J.delete(k),J.size===0&&w.delete(m))}}}},a=g=>{rd(h.current);for(const m of Object.keys(g))be(h.current.getState().nextTree).transactionMetadata[m]=g[m]},c=g=>{rd(h.current);const m=be(r.current.nextTree);let w;try{xc=!0,w=g(m)}finally{xc=!1}w!==m&&(r.current.nextTree=w,bg().early&&mu(h.current,r.current,w),be(l.current)())},l=wL(null),u=vL(g=>{l.current=g},[l]),h=sd(()=>n??{storeID:Sg(),getState:()=>r.current,replaceState:c,getGraph:i,subscribeToTransactions:o,addTransactionMetadata:a});n!=null&&(h.current=n),r=sd(()=>t!=null?IL(h.current,t):e!=null?RL(e):wg());const d=_L(()=>ja==null?void 0:ja(r,()=>r.current.currentTree.version),[r]);return Lc(()=>{const g=h.current;for(const m of new Set(g.getState().knownAtoms))hL(g,m,"get");return()=>{for(const m of g.getState().knownAtoms)lL(g,m)}},[h]),_e.createElement(Rg.Provider,{value:h},_e.createElement(Ag.Provider,{value:d},_e.createElement(EL,{setNotifyBatcherOfChange:u}),s))}function CL(t){const{override:e,...n}=t,s=ua();return e===!1&&s.current!==Ig?t.children:_e.createElement(AL,n)}function NL(){return ua().current.storeID}var Zt={RecoilRoot:CL,useStoreRef:ua,useRecoilMutableSource:bL,useRecoilStoreID:NL,notifyComponents_FOR_TESTING:mu,sendEndOfBatchNotifications_FOR_TESTING:Cg};function kL(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0,s=t.length;n<s;n++)if(t[n]!==e[n])return!1;return!0}var LL=kL;const{useEffect:xL,useRef:DL}=_e;function OL(t){const e=DL();return xL(()=>{e.current=t}),e.current}var Ng=OL;const{useStoreRef:ML}=Zt,{SUSPENSE_TIMEOUT_MS:PL}=ss,{updateRetainCount:Gs}=ss,{RetentionZone:UL}=sa,{useEffect:VL,useRef:$L}=_e,{isSSR:od}=oa;function BL(t){if(fe("recoil_memory_managament_2020"))return FL(t)}function FL(t){const n=(Array.isArray(t)?t:[t]).map(o=>o instanceof UL?o:o.key),s=ML();VL(()=>{if(!fe("recoil_memory_managament_2020"))return;const o=s.current;if(r.current&&!od)window.clearTimeout(r.current),r.current=null;else for(const a of n)Gs(o,a,1);return()=>{for(const a of n)Gs(o,a,-1)}},[s,...n]);const r=$L(),i=Ng(n);if(!od&&(i===void 0||!LL(i,n))){const o=s.current;for(const a of n)Gs(o,a,1);if(i)for(const a of i)Gs(o,a,-1);r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{r.current=null;for(const a of n)Gs(o,a,-1)},PL)}}var gu=BL;function jL(){return"<component name not available>"}var li=jL;const{batchUpdates:qL}=ia,{DEFAULT_VALUE:kg}=lt,{currentRendererSupportsUseSyncExternalStore:zL,reactMode:js,useMutableSource:WL,useSyncExternalStore:KL}=oi,{useRecoilMutableSource:HL,useStoreRef:Ut}=Zt,{AbstractRecoilValue:Dc,getRecoilValueAsLoadable:ui,setRecoilValue:co,setUnvalidatedRecoilValue:GL,subscribeToRecoilValue:ks}=Pt,{useCallback:ct,useEffect:Ls,useMemo:Lg,useRef:mr,useState:yu}=_e,{setByAddingToSet:QL}=Jm,{isSSR:YL}=oa;function vu(t,e,n){if(t.state==="hasValue")return t.contents;throw t.state==="loading"?new Promise(r=>{const i=n.current.getState().suspendedComponentResolvers;i.add(r),YL&&ve(t.contents)&&t.contents.finally(()=>{i.delete(r)})}):t.state==="hasError"?t.contents:Z(`Invalid value of loadable atom "${e.key}"`)}function XL(){const t=li(),e=Ut(),[,n]=yu([]),s=mr(new Set);s.current=new Set;const r=mr(new Set),i=mr(new Map),o=ct(c=>{const l=i.current.get(c);l&&(l.release(),i.current.delete(c))},[i]),a=ct((c,l)=>{i.current.has(l)&&n([])},[]);return Ls(()=>{const c=e.current;fr(s.current,r.current).forEach(l=>{if(i.current.has(l))return;const u=ks(c,new Dc(l),d=>a(d,l),t);i.current.set(l,u),c.getState().nextTree?c.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(c.getState(),l)}):a(c.getState(),l)}),fr(r.current,s.current).forEach(l=>{o(l)}),r.current=s.current}),Ls(()=>{const c=i.current;return fr(s.current,new Set(c.keys())).forEach(l=>{const u=ks(e.current,new Dc(l),h=>a(h,l),t);c.set(l,u)}),()=>c.forEach((l,u)=>o(u))},[t,e,o,a]),Lg(()=>{function c(m){return w=>{co(e.current,m,w)}}function l(m){return()=>co(e.current,m,kg)}function u(m){var w;s.current.has(m.key)||(s.current=QL(s.current,m.key));const k=e.current.getState();return ui(e.current,m,js().early&&(w=k.nextTree)!==null&&w!==void 0?w:k.currentTree)}function h(m){const w=u(m);return vu(w,m,e)}function d(m){return[h(m),c(m)]}function g(m){return[u(m),c(m)]}return{getRecoilValue:h,getRecoilValueLoadable:u,getRecoilState:d,getRecoilStateLoadable:g,getSetRecoilState:c,getResetRecoilState:l}},[s,e])}const JL={current:0};function ZL(t){const e=Ut(),n=li(),s=ct(()=>{var a;const c=e.current,l=c.getState(),u=js().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return{loadable:ui(c,t,u),key:t.key}},[e,t]),r=ct(a=>{let c;return()=>{var l,u;const h=a();return(l=c)!==null&&l!==void 0&&l.loadable.is(h.loadable)&&((u=c)===null||u===void 0?void 0:u.key)===h.key?c:(c=h,h)}},[]),i=Lg(()=>r(s),[s,r]),o=ct(a=>{const c=e.current;return ks(c,t,a,n).release},[e,t,n]);return KL(o,i,i).loadable}function ex(t){const e=Ut(),n=ct(()=>{var l;const u=e.current,h=u.getState(),d=js().early&&(l=h.nextTree)!==null&&l!==void 0?l:h.currentTree;return ui(u,t,d)},[e,t]),s=ct(()=>n(),[n]),r=li(),i=ct((l,u)=>{const h=e.current;return ks(h,t,()=>{if(!fe("recoil_suppress_rerender_in_callback"))return u();const g=n();c.current.is(g)||u(),c.current=g},r).release},[e,t,r,n]),o=HL();if(o==null)throw Z("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=WL(o,s,i),c=mr(a);return Ls(()=>{c.current=a}),a}function Oc(t){const e=Ut(),n=li(),s=ct(()=>{var c;const l=e.current,u=l.getState(),h=js().early&&(c=u.nextTree)!==null&&c!==void 0?c:u.currentTree;return ui(l,t,h)},[e,t]),r=ct(()=>({loadable:s(),key:t.key}),[s,t.key]),i=ct(c=>{const l=r();return c.loadable.is(l.loadable)&&c.key===l.key?c:l},[r]);Ls(()=>{const c=ks(e.current,t,l=>{a(i)},n);return a(i),c.release},[n,t,e,i]);const[o,a]=yu(r);return o.key!==t.key?r().loadable:o.loadable}function tx(t){const e=Ut(),[,n]=yu([]),s=li(),r=ct(()=>{var a;const c=e.current,l=c.getState(),u=js().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return ui(c,t,u)},[e,t]),i=r(),o=mr(i);return Ls(()=>{o.current=i}),Ls(()=>{const a=e.current,c=a.getState(),l=ks(a,t,h=>{var d;if(!fe("recoil_suppress_rerender_in_callback"))return n([]);const g=r();(d=o.current)!==null&&d!==void 0&&d.is(g)||n(g),o.current=g},s);if(c.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,n([])});else{var u;if(!fe("recoil_suppress_rerender_in_callback"))return n([]);const h=r();(u=o.current)!==null&&u!==void 0&&u.is(h)||n(h),o.current=h}return l.release},[s,r,t,e]),i}function _u(t){return fe("recoil_memory_managament_2020")&&gu(t),{TRANSITION_SUPPORT:Oc,SYNC_EXTERNAL_STORE:zL()?ZL:Oc,MUTABLE_SOURCE:ex,LEGACY:tx}[js().mode](t)}function xg(t){const e=Ut(),n=_u(t);return vu(n,t,e)}function ha(t){const e=Ut();return ct(n=>{co(e.current,t,n)},[e,t])}function nx(t){const e=Ut();return ct(()=>{co(e.current,t,kg)},[e,t])}function sx(t){return[xg(t),ha(t)]}function rx(t){return[_u(t),ha(t)]}function ix(){const t=Ut();return(e,n={})=>{qL(()=>{t.current.addTransactionMetadata(n),e.forEach((s,r)=>GL(t.current,new Dc(r),s))})}}function Dg(t){return fe("recoil_memory_managament_2020")&&gu(t),Oc(t)}function Og(t){const e=Ut(),n=Dg(t);return vu(n,t,e)}function ox(t){return[Og(t),ha(t)]}var ax={recoilComponentGetRecoilValueCount_FOR_TESTING:JL,useRecoilInterface:XL,useRecoilState:sx,useRecoilStateLoadable:rx,useRecoilValue:xg,useRecoilValueLoadable:_u,useResetRecoilState:nx,useSetRecoilState:ha,useSetUnvalidatedAtomValues:ix,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:Dg,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:Og,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:ox};function cx(t,e){const n=new Map;for(const[s,r]of t)e(r,s)&&n.set(s,r);return n}var lx=cx;function ux(t,e){const n=new Set;for(const s of t)e(s)&&n.add(s);return n}var hx=ux;function dx(...t){const e=new Map;for(let n=0;n<t.length;n++){const s=t[n].keys();let r;for(;!(r=s.next()).done;)e.set(r.value,t[n].get(r.value))}return e}var fx=dx;const{batchUpdates:px}=ia,{DEFAULT_VALUE:mx,getNode:Mg,nodes:gx}=lt,{useStoreRef:wu}=Zt,{AbstractRecoilValue:yx,setRecoilValueLoadable:vx}=Pt,{SUSPENSE_TIMEOUT_MS:_x}=ss,{cloneSnapshot:lo}=la,{useCallback:da,useEffect:Pg,useRef:ad,useState:wx}=_e,{isSSR:cd}=oa;function fa(t){const e=wu();Pg(()=>e.current.subscribeToTransactions(t).release,[t,e])}function ld(t){const e=t.atomValues.toMap(),n=ao(lx(e,(s,r)=>{const o=Mg(r).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&s.state==="hasValue"}),s=>s.contents);return fx(t.nonvalidatedAtoms.toMap(),n)}function Sx(t){fa(da(e=>{let n=e.getState().previousTree;const s=e.getState().currentTree;n||(n=e.getState().currentTree);const r=ld(s),i=ld(n),o=ao(gx,c=>{var l,u,h,d;return{persistence_UNSTABLE:{type:(l=(u=c.persistence_UNSTABLE)===null||u===void 0?void 0:u.type)!==null&&l!==void 0?l:"none",backButton:(h=(d=c.persistence_UNSTABLE)===null||d===void 0?void 0:d.backButton)!==null&&h!==void 0?h:!1}}}),a=hx(s.dirtyAtoms,c=>r.has(c)||i.has(c));t({atomValues:r,previousAtomValues:i,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...s.transactionMetadata}})},[t]))}function bx(t){fa(da(e=>{const n=lo(e,"latest"),s=lo(e,"previous");t({snapshot:n,previousSnapshot:s})},[t]))}function Tx(){const t=wu(),[e,n]=wx(()=>lo(t.current)),s=Ng(e),r=ad(),i=ad();if(fa(da(a=>n(lo(a)),[])),Pg(()=>{const a=e.retain();if(r.current&&!cd){var c;window.clearTimeout(r.current),r.current=null,(c=i.current)===null||c===void 0||c.call(i),i.current=null}return()=>{window.setTimeout(a,10)}},[e]),s!==e&&!cd){if(r.current){var o;window.clearTimeout(r.current),r.current=null,(o=i.current)===null||o===void 0||o.call(i),i.current=null}i.current=e.retain(),r.current=window.setTimeout(()=>{var a;r.current=null,(a=i.current)===null||a===void 0||a.call(i),i.current=null},_x)}return e}function Ug(t,e){var n;const s=t.getState(),r=(n=s.nextTree)!==null&&n!==void 0?n:s.currentTree,i=e.getStore_INTERNAL().getState().currentTree;px(()=>{const o=new Set;for(const l of[r.atomValues.keys(),i.atomValues.keys()])for(const u of l){var a,c;((a=r.atomValues.get(u))===null||a===void 0?void 0:a.contents)!==((c=i.atomValues.get(u))===null||c===void 0?void 0:c.contents)&&Mg(u).shouldRestoreFromSnapshots&&o.add(u)}o.forEach(l=>{vx(t,new yx(l),i.atomValues.has(l)?be(i.atomValues.get(l)):mx)}),t.replaceState(l=>({...l,stateID:e.getID()}))})}function Ex(){const t=wu();return da(e=>Ug(t.current,e),[t])}var Vg={useRecoilSnapshot:Tx,gotoSnapshot:Ug,useGotoRecoilSnapshot:Ex,useRecoilTransactionObserver:bx,useTransactionObservation_DEPRECATED:Sx,useTransactionSubscription_DEPRECATED:fa};const{peekNodeInfo:Ix}=Rn,{useStoreRef:Rx}=Zt;function Ax(){const t=Rx();return({key:e})=>Ix(t.current,t.current.getState().currentTree,e)}var Cx=Ax;const{reactMode:Nx}=oi,{RecoilRoot:kx,useStoreRef:Lx}=Zt,{useMemo:xx}=_e;function Dx(){Nx().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const t=Lx().current;return xx(()=>{function e({children:n}){return _e.createElement(kx,{store_INTERNAL:t},n)}return e},[t])}var Ox=Dx;const{loadableWithValue:Mx}=ii,{initializeNode:Px}=Rn,{DEFAULT_VALUE:Ux,getNode:Vx}=lt,{copyTreeState:$x,getRecoilValueAsLoadable:Bx,invalidateDownstreams:Fx,writeLoadableToTreeState:jx}=Pt;function ud(t){return Vx(t.key).nodeType==="atom"}class qx{constructor(e,n){X(this,"_store",void 0),X(this,"_treeState",void 0),X(this,"_changes",void 0),X(this,"get",s=>{if(this._changes.has(s.key))return this._changes.get(s.key);if(!ud(s))throw Z("Reading selectors within atomicUpdate is not supported");const r=Bx(this._store,s,this._treeState);if(r.state==="hasValue")return r.contents;throw r.state==="hasError"?r.contents:Z(`Expected Recoil atom ${s.key} to have a value, but it is in a loading state.`)}),X(this,"set",(s,r)=>{if(!ud(s))throw Z("Setting selectors within atomicUpdate is not supported");if(typeof r=="function"){const i=this.get(s);this._changes.set(s.key,r(i))}else Px(this._store,s.key,"set"),this._changes.set(s.key,r)}),X(this,"reset",s=>{this.set(s,Ux)}),this._store=e,this._treeState=n,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=$x(this._treeState);for(const[n,s]of this._changes)jx(e,n,Mx(s));return Fx(this._store,e),e}}function zx(t){return e=>{t.replaceState(n=>{const s=new qx(t,n);return e(s),s.newTreeState_INTERNAL()})}}var Wx={atomicUpdater:zx},Kx=Wx.atomicUpdater,$g=Object.freeze({__proto__:null,atomicUpdater:Kx});function Hx(t,e){if(!t)throw new Error(e)}var Gx=Hx,rr=Gx;const{atomicUpdater:Qx}=$g,{batchUpdates:Yx}=ia,{DEFAULT_VALUE:Xx}=lt,{useStoreRef:Jx}=Zt,{refreshRecoilValue:Zx,setRecoilValue:hd}=Pt,{cloneSnapshot:eD}=la,{gotoSnapshot:tD}=Vg,{useCallback:nD}=_e;class Bg{}const sD=new Bg;function Fg(t,e,n,s){let r=sD,i;if(Yx(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw Z(a);const c=Zm({...s??{},set:(u,h)=>hd(t,u,h),reset:u=>hd(t,u,Xx),refresh:u=>Zx(t,u),gotoSnapshot:u=>tD(t,u),transact_UNSTABLE:u=>Qx(t)(u)},{snapshot:()=>{const u=eD(t);return i=u.retain(),u}}),l=e(c);if(typeof l!="function")throw Z(a);r=l(...n)}),r instanceof Bg&&rr(!1),ve(r))r=r.finally(()=>{var a;(a=i)===null||a===void 0||a()});else{var o;(o=i)===null||o===void 0||o()}return r}function rD(t,e){const n=Jx();return nD((...s)=>Fg(n.current,t,s),e!=null?[...e,n]:void 0)}var jg={recoilCallback:Fg,useRecoilCallback:rD};const{useStoreRef:iD}=Zt,{refreshRecoilValue:oD}=Pt,{useCallback:aD}=_e;function cD(t){const e=iD();return aD(()=>{const n=e.current;oD(n,t)},[t,e])}var lD=cD;const{atomicUpdater:uD}=$g,{useStoreRef:hD}=Zt,{useMemo:dD}=_e;function fD(t,e){const n=hD();return dD(()=>(...s)=>{uD(n.current)(i=>{t(i)(...s)})},e!=null?[...e,n]:void 0)}var pD=fD;class mD{constructor(e){X(this,"value",void 0),this.value=e}}var gD={WrappedValue:mD},yD=gD.WrappedValue,qg=Object.freeze({__proto__:null,WrappedValue:yD});const{isFastRefreshEnabled:vD}=oi;class dd extends Error{}class _D{constructor(e){var n,s,r;X(this,"_name",void 0),X(this,"_numLeafs",void 0),X(this,"_root",void 0),X(this,"_onHit",void 0),X(this,"_onSet",void 0),X(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(n=e==null?void 0:e.onHit)!==null&&n!==void 0?n:()=>{},this._onSet=(s=e==null?void 0:e.onSet)!==null&&s!==void 0?s:()=>{},this._mapNodeValue=(r=e==null?void 0:e.mapNodeValue)!==null&&r!==void 0?r:i=>i}size(){return this._numLeafs}root(){return this._root}get(e,n){var s;return(s=this.getLeafNode(e,n))===null||s===void 0?void 0:s.value}getLeafNode(e,n){if(this._root==null)return;let s=this._root;for(;s;){if(n==null||n.onNodeVisit(s),s.type==="leaf")return this._onHit(s),s;const r=this._mapNodeValue(e(s.nodeKey));s=s.branches.get(r)}}set(e,n,s){const r=()=>{var i,o,a,c;let l,u;for(const[k,J]of e){var h,d,g;const E=this._root;if((E==null?void 0:E.type)==="leaf")throw this.invalidCacheError();const V=l;if(l=V?V.branches.get(u):E,l=(h=l)!==null&&h!==void 0?h:{type:"branch",nodeKey:k,parent:V,branches:new Map,branchKey:u},l.type!=="branch"||l.nodeKey!==k)throw this.invalidCacheError();V==null||V.branches.set(u,l),s==null||(d=s.onNodeVisit)===null||d===void 0||d.call(s,l),u=this._mapNodeValue(J),this._root=(g=this._root)!==null&&g!==void 0?g:l}const m=l?(i=l)===null||i===void 0?void 0:i.branches.get(u):this._root;if(m!=null&&(m.type!=="leaf"||m.branchKey!==u))throw this.invalidCacheError();const w={type:"leaf",value:n,parent:l,branchKey:u};(o=l)===null||o===void 0||o.branches.set(u,w),this._root=(a=this._root)!==null&&a!==void 0?a:w,this._numLeafs++,this._onSet(w),s==null||(c=s.onNodeVisit)===null||c===void 0||c.call(s,w)};try{r()}catch(i){if(i instanceof dd)this.clear(),r();else throw i}}delete(e){const n=this.root();if(!n)return!1;if(e===n)return this._root=null,this._numLeafs=0,!0;let s=e.parent,r=e.branchKey;for(;s;){var i;if(s.branches.delete(r),s===n)return s.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(s.branches.size>0)break;r=(i=s)===null||i===void 0?void 0:i.branchKey,s=s.parent}for(;s!==n;s=s.parent)if(s==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=vD()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw ou(e+(this._name!=null?` - ${this._name}`:"")),new dd}}var wD={TreeCache:_D},SD=wD.TreeCache,zg=Object.freeze({__proto__:null,TreeCache:SD});class bD{constructor(e){var n;X(this,"_maxSize",void 0),X(this,"_size",void 0),X(this,"_head",void 0),X(this,"_tail",void 0),X(this,"_map",void 0),X(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(n=e.mapKey)!==null&&n!==void 0?n:s=>s}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const n=this._keyMapper(e),s=this._map.get(n);if(s)return this.set(e,s.value),s.value}set(e,n){const s=this._keyMapper(e);this._map.get(s)&&this.delete(e);const i=this.head(),o={key:e,right:i,left:null,value:n};i?i.left=o:this._tail=o,this._map.set(s,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const n=this._keyMapper(e);if(!this._size||!this._map.has(n))return;const s=be(this._map.get(n)),r=s.right,i=s.left;r&&(r.left=s.left),i&&(i.right=s.right),s===this.head()&&(this._head=r),s===this.tail()&&(this._tail=i),this._map.delete(n),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var TD={LRUCache:bD},ED=TD.LRUCache,Wg=Object.freeze({__proto__:null,LRUCache:ED});const{LRUCache:ID}=Wg,{TreeCache:RD}=zg;function AD({name:t,maxSize:e,mapNodeValue:n=s=>s}){const s=new ID({maxSize:e}),r=new RD({name:t,mapNodeValue:n,onHit:i=>{s.set(i,!0)},onSet:i=>{const o=s.tail();s.set(i,!0),o&&r.size()>e&&r.delete(o.key)}});return r}var fd=AD;function St(t,e,n){if(typeof t=="string"&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw Z("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}if(t===null)return"null";if(typeof t!="object"){var s;return(s=JSON.stringify(t))!==null&&s!==void 0?s:""}if(ve(t))return"__PROMISE__";if(Array.isArray(t))return`[${t.map((r,i)=>St(r,e,i.toString()))}]`;if(typeof t.toJSON=="function")return St(t.toJSON(n),e,n);if(t instanceof Map){const r={};for(const[i,o]of t)r[typeof i=="string"?i:St(i,e)]=o;return St(r,e,n)}return t instanceof Set?St(Array.from(t).sort((r,i)=>St(r,e).localeCompare(St(i,e))),e,n):Symbol!==void 0&&t[Symbol.iterator]!=null&&typeof t[Symbol.iterator]=="function"?St(Array.from(t),e,n):`{${Object.keys(t).filter(r=>t[r]!==void 0).sort().map(r=>`${St(r,e)}:${St(t[r],e,r)}`).join(",")}}`}function CD(t,e={allowFunctions:!1}){return St(t,e)}var pa=CD;const{TreeCache:ND}=zg,bi={equality:"reference",eviction:"keep-all",maxSize:1/0};function kD({equality:t=bi.equality,eviction:e=bi.eviction,maxSize:n=bi.maxSize}=bi,s){const r=LD(t);return xD(e,n,r,s)}function LD(t){switch(t){case"reference":return e=>e;case"value":return e=>pa(e)}throw Z(`Unrecognized equality policy ${t}`)}function xD(t,e,n,s){switch(t){case"keep-all":return new ND({name:s,mapNodeValue:n});case"lru":return fd({name:s,maxSize:be(e),mapNodeValue:n});case"most-recent":return fd({name:s,maxSize:1,mapNodeValue:n})}throw Z(`Unrecognized eviction policy ${t}`)}var DD=kD;function OD(t){return()=>null}var MD={startPerfBlock:OD};const{isLoadable:PD,loadableWithError:Ti,loadableWithPromise:UD,loadableWithValue:qa}=ii,{WrappedValue:Kg}=qg,{getNodeLoadable:Ei,peekNodeLoadable:VD,setNodeValue:$D}=Rn,{saveDepsToStore:BD}=ai,{DEFAULT_VALUE:FD,getConfigDeletionHandler:jD,getNode:qD,registerNode:pd}=lt,{isRecoilValue:zD}=Ns,{markRecoilValueModified:md}=Pt,{retainedByOptionWithDefault:WD}=ss,{recoilCallback:KD}=jg,{startPerfBlock:HD}=MD;class Hg{}const Qs=new Hg,Ys=[],Ii=new Map,GD=(()=>{let t=0;return()=>t++})();function Gg(t){let e=null;const{key:n,get:s,cachePolicy_UNSTABLE:r}=t,i=t.set!=null?t.set:void 0,o=new Set,a=DD(r??{equality:"reference",eviction:"keep-all"},n),c=WD(t.retainedBy_UNSTABLE),l=new Map;let u=0;function h(){return!fe("recoil_memory_managament_2020")||u>0}function d(v){return v.getState().knownSelectors.add(n),u++,()=>{u--}}function g(){return jD(n)!==void 0&&!h()}function m(v,I,R,F,x){tn(I,F,x),w(v,R)}function w(v,I){Be(v,I)&&Le(v),J(I,!0)}function k(v,I){Be(v,I)&&(be(ae(v)).stateVersions.clear(),J(I,!1))}function J(v,I){const R=Ii.get(v);if(R!=null){for(const F of R)md(F,be(e));I&&Ii.delete(v)}}function E(v,I){let R=Ii.get(I);R==null&&Ii.set(I,R=new Set),R.add(v)}function V(v,I,R,F,x,G){return I.then(q=>{if(!h())throw Le(v),Qs;const P=qa(q);return m(v,R,x,P,F),q}).catch(q=>{if(!h())throw Le(v),Qs;if(ve(q))return H(v,q,R,F,x,G);const P=Ti(q);throw m(v,R,x,P,F),q})}function H(v,I,R,F,x,G){return I.then(q=>{if(!h())throw Le(v),Qs;G.loadingDepKey!=null&&G.loadingDepPromise===I?R.atomValues.set(G.loadingDepKey,qa(q)):v.getState().knownSelectors.forEach(le=>{R.atomValues.delete(le)});const P=ne(v,R);if(P&&P.state!=="loading"){if((Be(v,x)||ae(v)==null)&&w(v,x),P.state==="hasValue")return P.contents;throw P.contents}if(!Be(v,x)){const le=et(v,R);if(le!=null)return le.loadingLoadable.contents}const[me,Te]=ee(v,R,x);if(me.state!=="loading"&&m(v,R,x,me,Te),me.state==="hasError")throw me.contents;return me.contents}).catch(q=>{if(q instanceof Hg)throw Qs;if(!h())throw Le(v),Qs;const P=Ti(q);throw m(v,R,x,P,F),q})}function K(v,I,R,F){var x,G,q,P;if(Be(v,F)||I.version===((x=v.getState())===null||x===void 0||(G=x.currentTree)===null||G===void 0?void 0:G.version)||I.version===((q=v.getState())===null||q===void 0||(P=q.nextTree)===null||P===void 0?void 0:P.version)){var me,Te,le;BD(n,R,v,(me=(Te=v.getState())===null||Te===void 0||(le=Te.nextTree)===null||le===void 0?void 0:le.version)!==null&&me!==void 0?me:v.getState().currentTree.version)}for(const he of R)o.add(he)}function ee(v,I,R){const F=HD(n);let x=!0,G=!0;const q=()=>{F(),G=!1};let P,me=!1,Te;const le={loadingDepKey:null,loadingDepPromise:null},he=new Map;function ut({key:tt}){const nt=Ei(v,I,tt);switch(he.set(tt,nt),x||(K(v,I,new Set(he.keys()),R),k(v,R)),nt.state){case"hasValue":return nt.contents;case"hasError":throw nt.contents;case"loading":throw le.loadingDepKey=tt,le.loadingDepPromise=nt.contents,nt.contents}throw Z("Invalid Loadable state")}const Bt=tt=>(...nt)=>{if(G)throw Z("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&rr(!1),KD(v,tt,nt,{node:e})};try{P=s({get:ut,getCallback:Bt}),P=zD(P)?ut(P):P,PD(P)&&(P.state==="hasError"&&(me=!0),P=P.contents),ve(P)?P=V(v,P,I,he,R,le).finally(q):q(),P=P instanceof Kg?P.value:P}catch(tt){P=tt,ve(P)?P=H(v,P,I,he,R,le).finally(q):(me=!0,q())}return me?Te=Ti(P):ve(P)?Te=UD(P):Te=qa(P),x=!1,Vt(v,R,he),K(v,I,new Set(he.keys()),R),[Te,he]}function ne(v,I){let R=I.atomValues.get(n);if(R!=null)return R;const F=new Set;try{R=a.get(G=>(typeof G!="string"&&rr(!1),Ei(v,I,G).contents),{onNodeVisit:G=>{G.type==="branch"&&G.nodeKey!==n&&F.add(G.nodeKey)}})}catch(G){throw Z(`Problem with cache lookup for selector "${n}": ${G.message}`)}if(R){var x;I.atomValues.set(n,R),K(v,I,F,(x=ae(v))===null||x===void 0?void 0:x.executionID)}return R}function Re(v,I){const R=ne(v,I);if(R!=null)return Le(v),R;const F=et(v,I);if(F!=null){var x;return((x=F.loadingLoadable)===null||x===void 0?void 0:x.state)==="loading"&&E(v,F.executionID),F.loadingLoadable}const G=GD(),[q,P]=ee(v,I,G);return q.state==="loading"?($e(v,G,q,P,I),E(v,G)):(Le(v),tn(I,q,P)),q}function et(v,I){const R=gg([l.has(v)?[be(l.get(v))]:[],ta(hu(l,([x])=>x!==v),([,x])=>x)]);function F(x){for(const[G,q]of x)if(!Ei(v,I,G).is(q))return!0;return!1}for(const x of R){if(x.stateVersions.get(I.version)||!F(x.depValuesDiscoveredSoFarDuringAsyncWork))return x.stateVersions.set(I.version,!0),x;x.stateVersions.set(I.version,!1)}}function ae(v){return l.get(v)}function $e(v,I,R,F,x){l.set(v,{depValuesDiscoveredSoFarDuringAsyncWork:F,executionID:I,loadingLoadable:R,stateVersions:new Map([[x.version,!0]])})}function Vt(v,I,R){if(Be(v,I)){const F=ae(v);F!=null&&(F.depValuesDiscoveredSoFarDuringAsyncWork=R)}}function Le(v){l.delete(v)}function Be(v,I){var R;return I===((R=ae(v))===null||R===void 0?void 0:R.executionID)}function en(v){return Array.from(v.entries()).map(([I,R])=>[I,R.contents])}function tn(v,I,R){v.atomValues.set(n,I);try{a.set(en(R),I)}catch(F){throw Z(`Problem with setting cache for selector "${n}": ${F.message}`)}}function _t(v){if(Ys.includes(n)){const I=`Recoil selector has circular dependencies: ${Ys.slice(Ys.indexOf(n)).join(" → ")}`;return Ti(Z(I))}Ys.push(n);try{return v()}finally{Ys.pop()}}function nn(v,I){const R=I.atomValues.get(n);return R??a.get(F=>{var x;return typeof F!="string"&&rr(!1),(x=VD(v,I,F))===null||x===void 0?void 0:x.contents})}function $t(v,I){return _t(()=>Re(v,I))}function re(v){v.atomValues.delete(n)}function oe(v,I){e==null&&rr(!1);for(const F of o){var R;const x=qD(F);(R=x.clearCache)===null||R===void 0||R.call(x,v,I)}o.clear(),re(I),a.clear(),md(v,e)}return i!=null?e=pd({key:n,nodeType:"selector",peek:nn,get:$t,set:(I,R,F)=>{let x=!1;const G=new Map;function q({key:le}){if(x)throw Z("Recoil: Async selector sets are not currently supported.");const he=Ei(I,R,le);if(he.state==="hasValue")return he.contents;if(he.state==="loading"){const ut=`Getting value of asynchronous atom or selector "${le}" in a pending state while setting selector "${n}" is not yet supported.`;throw Z(ut)}else throw he.contents}function P(le,he){if(x)throw Z("Recoil: Async selector sets are not currently supported.");const ut=typeof he=="function"?he(q(le)):he;$D(I,R,le.key,ut).forEach((tt,nt)=>G.set(nt,tt))}function me(le){P(le,FD)}const Te=i({set:P,get:q,reset:me},F);if(Te!==void 0)throw ve(Te)?Z("Recoil: Async selector sets are not currently supported."):Z("Recoil: selector set should be a void function.");return x=!0,G},init:d,invalidate:re,clearCache:oe,shouldDeleteConfigOnRelease:g,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c}):e=pd({key:n,nodeType:"selector",peek:nn,get:$t,init:d,invalidate:re,clearCache:oe,shouldDeleteConfigOnRelease:g,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c})}Gg.value=t=>new Kg(t);var xs=Gg;const{isLoadable:QD,loadableWithError:za,loadableWithPromise:Wa,loadableWithValue:ls}=ii,{WrappedValue:Qg}=qg,{peekNodeInfo:YD}=Rn,{DEFAULT_VALUE:On,DefaultValue:rn,getConfigDeletionHandler:Yg,registerNode:XD,setConfigDeletionHandler:JD}=lt,{isRecoilValue:ZD}=Ns,{getRecoilValueAsLoadable:e1,markRecoilValueModified:t1,setRecoilValue:gd,setRecoilValueLoadable:n1}=Pt,{retainedByOptionWithDefault:s1}=ss,Xs=t=>t instanceof Qg?t.value:t;function r1(t){const{key:e,persistence_UNSTABLE:n}=t,s=s1(t.retainedBy_UNSTABLE);let r=0;function i(E){return Wa(E.then(V=>(o=ls(V),V)).catch(V=>{throw o=za(V),V}))}let o=ve(t.default)?i(t.default):QD(t.default)?t.default.state==="loading"?i(t.default.contents):t.default:ls(Xs(t.default));o.contents;let a;const c=new Map;function l(E){return E}function u(E,V){const H=V.then(K=>{var ee,ne;return((ne=((ee=E.getState().nextTree)!==null&&ee!==void 0?ee:E.getState().currentTree).atomValues.get(e))===null||ne===void 0?void 0:ne.contents)===H&&gd(E,J,K),K}).catch(K=>{var ee,ne;throw((ne=((ee=E.getState().nextTree)!==null&&ee!==void 0?ee:E.getState().currentTree).atomValues.get(e))===null||ne===void 0?void 0:ne.contents)===H&&n1(E,J,za(K)),K});return H}function h(E,V,H){var K;r++;const ee=()=>{var ae;r--,(ae=c.get(E))===null||ae===void 0||ae.forEach($e=>$e()),c.delete(E)};if(E.getState().knownAtoms.add(e),o.state==="loading"){const ae=()=>{var $e;(($e=E.getState().nextTree)!==null&&$e!==void 0?$e:E.getState().currentTree).atomValues.has(e)||t1(E,J)};o.contents.finally(ae)}const ne=(K=t.effects)!==null&&K!==void 0?K:t.effects_UNSTABLE;if(ne!=null){let Be=function(re){if($e&&re.key===e){const oe=ae;return oe instanceof rn?d(E,V):ve(oe)?Wa(oe.then(v=>v instanceof rn?o.toPromise():v)):ls(oe)}return e1(E,re)},en=function(re){return Be(re).toPromise()},tn=function(re){var oe;const v=YD(E,(oe=E.getState().nextTree)!==null&&oe!==void 0?oe:E.getState().currentTree,re.key);return $e&&re.key===e&&!(ae instanceof rn)?{...v,isSet:!0,loadable:Be(re)}:v},ae=On,$e=!0,Vt=!1,Le=null;const _t=re=>oe=>{if($e){const v=Be(J),I=v.state==="hasValue"?v.contents:On;ae=typeof oe=="function"?oe(I):oe,ve(ae)&&(ae=ae.then(R=>(Le={effect:re,value:R},R)))}else{if(ve(oe))throw Z("Setting atoms to async values is not implemented.");typeof oe!="function"&&(Le={effect:re,value:Xs(oe)}),gd(E,J,typeof oe=="function"?v=>{const I=Xs(oe(v));return Le={effect:re,value:I},I}:Xs(oe))}},nn=re=>()=>_t(re)(On),$t=re=>oe=>{var v;const{release:I}=E.subscribeToTransactions(R=>{var F;let{currentTree:x,previousTree:G}=R.getState();G||(G=x);const q=(F=x.atomValues.get(e))!==null&&F!==void 0?F:o;if(q.state==="hasValue"){var P,me,Te,le;const he=q.contents,ut=(P=G.atomValues.get(e))!==null&&P!==void 0?P:o,Bt=ut.state==="hasValue"?ut.contents:On;((me=Le)===null||me===void 0?void 0:me.effect)!==re||((Te=Le)===null||Te===void 0?void 0:Te.value)!==he?oe(he,Bt,!x.atomValues.has(e)):((le=Le)===null||le===void 0?void 0:le.effect)===re&&(Le=null)}},e);c.set(E,[...(v=c.get(E))!==null&&v!==void 0?v:[],I])};for(const re of ne)try{const oe=re({node:J,storeID:E.storeID,parentStoreID_UNSTABLE:E.parentStoreID,trigger:H,setSelf:_t(re),resetSelf:nn(re),onSet:$t(re),getPromise:en,getLoadable:Be,getInfo_UNSTABLE:tn});if(oe!=null){var Re;c.set(E,[...(Re=c.get(E))!==null&&Re!==void 0?Re:[],oe])}}catch(oe){ae=oe,Vt=!0}if($e=!1,!(ae instanceof rn)){var et;const re=Vt?za(ae):ve(ae)?Wa(u(E,ae)):ls(Xs(ae));re.contents,V.atomValues.set(e,re),(et=E.getState().nextTree)===null||et===void 0||et.atomValues.set(e,re)}}return ee}function d(E,V){var H,K;return(H=(K=V.atomValues.get(e))!==null&&K!==void 0?K:a)!==null&&H!==void 0?H:o}function g(E,V){if(V.atomValues.has(e))return be(V.atomValues.get(e));if(V.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(n==null)return o;const H=V.nonvalidatedAtoms.get(e),K=n.validator(H,On);return a=K instanceof rn?o:ls(K),a}else return o}function m(){a=void 0}function w(E,V,H){if(V.atomValues.has(e)){const K=be(V.atomValues.get(e));if(K.state==="hasValue"&&H===K.contents)return new Map}else if(!V.nonvalidatedAtoms.has(e)&&H instanceof rn)return new Map;return a=void 0,new Map().set(e,ls(H))}function k(){return Yg(e)!==void 0&&r<=0}const J=XD({key:e,nodeType:"atom",peek:d,get:g,set:w,init:h,invalidate:m,shouldDeleteConfigOnRelease:k,dangerouslyAllowMutability:t.dangerouslyAllowMutability,persistence_UNSTABLE:t.persistence_UNSTABLE?{type:t.persistence_UNSTABLE.type,backButton:t.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:s});return J}function Su(t){const{...e}=t,n="default"in t?t.default:new Promise(()=>{});return ZD(n)?i1({...e,default:n}):r1({...e,default:n})}function i1(t){const e=Su({...t,default:On,persistence_UNSTABLE:t.persistence_UNSTABLE===void 0?void 0:{...t.persistence_UNSTABLE,validator:s=>s instanceof rn?s:be(t.persistence_UNSTABLE).validator(s,On)},effects:t.effects,effects_UNSTABLE:t.effects_UNSTABLE}),n=xs({key:`${t.key}__withFallback`,get:({get:s})=>{const r=s(e);return r instanceof rn?t.default:r},set:({set:s},r)=>s(e,r),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:t.dangerouslyAllowMutability});return JD(n.key,Yg(t.key)),n}Su.value=t=>new Qg(t);var Xg=Su;class o1{constructor(e){var n;X(this,"_map",void 0),X(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(n=e==null?void 0:e.mapKey)!==null&&n!==void 0?n:s=>s}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,n){this._map.set(this._keyMapper(e),n)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var a1={MapCache:o1},c1=a1.MapCache,l1=Object.freeze({__proto__:null,MapCache:c1});const{LRUCache:yd}=Wg,{MapCache:u1}=l1,Ri={equality:"reference",eviction:"none",maxSize:1/0};function h1({equality:t=Ri.equality,eviction:e=Ri.eviction,maxSize:n=Ri.maxSize}=Ri){const s=d1(t);return f1(e,n,s)}function d1(t){switch(t){case"reference":return e=>e;case"value":return e=>pa(e)}throw Z(`Unrecognized equality policy ${t}`)}function f1(t,e,n){switch(t){case"keep-all":return new u1({mapKey:n});case"lru":return new yd({mapKey:n,maxSize:be(e)});case"most-recent":return new yd({mapKey:n,maxSize:1})}throw Z(`Unrecognized eviction policy ${t}`)}var Jg=h1;const{setConfigDeletionHandler:p1}=lt;function m1(t){var e,n;const s=Jg({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var i,o;const a=s.get(r);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:c,...l}=t,u="default"in t?t.default:new Promise(()=>{}),h=Xg({...l,key:`${t.key}__${(i=pa(r))!==null&&i!==void 0?i:"void"}`,default:typeof u=="function"?u(r):u,retainedBy_UNSTABLE:typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE,effects:typeof t.effects=="function"?t.effects(r):typeof t.effects_UNSTABLE=="function"?t.effects_UNSTABLE(r):(o=t.effects)!==null&&o!==void 0?o:t.effects_UNSTABLE});return s.set(r,h),p1(h.key,()=>{s.delete(r)}),h}}var g1=m1;const{setConfigDeletionHandler:y1}=lt;let v1=0;function _1(t){var e,n;const s=Jg({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var i;let o;try{o=s.get(r)}catch(d){throw Z(`Problem with cache lookup for selector ${t.key}: ${d.message}`)}if(o!=null)return o;const a=`${t.key}__selectorFamily/${(i=pa(r,{allowFunctions:!0}))!==null&&i!==void 0?i:"void"}/${v1++}`,c=d=>t.get(r)(d),l=t.cachePolicy_UNSTABLE,u=typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE;let h;if(t.set!=null){const d=t.set;h=xs({key:a,get:c,set:(m,w)=>d(r)(m,w),cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u})}else h=xs({key:a,get:c,cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u});return s.set(r,h),y1(h.key,()=>{s.delete(r)}),h}}var An=_1;const w1=An({key:"__constant",get:t=>()=>t,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function S1(t){return w1(t)}var b1=S1;const T1=An({key:"__error",get:t=>()=>{throw Z(t)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function E1(t){return T1(t)}var I1=E1;function R1(t){return t}var A1=R1;const{loadableWithError:Zg,loadableWithPromise:ey,loadableWithValue:ty}=ii;function ma(t,e){const n=Array(e.length).fill(void 0),s=Array(e.length).fill(void 0);for(const[r,i]of e.entries())try{n[r]=t(i)}catch(o){s[r]=o}return[n,s]}function C1(t){return t!=null&&!ve(t)}function ga(t){return Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(e=>t[e])}function Mc(t,e){return Array.isArray(t)?e:Object.getOwnPropertyNames(t).reduce((n,s,r)=>({...n,[s]:e[r]}),{})}function gs(t,e,n){const s=n.map((r,i)=>r==null?ty(e[i]):ve(r)?ey(r):Zg(r));return Mc(t,s)}function N1(t,e){return e.map((n,s)=>n===void 0?t[s]:n)}const k1=An({key:"__waitForNone",get:t=>({get:e})=>{const n=ga(t),[s,r]=ma(e,n);return gs(t,s,r)},dangerouslyAllowMutability:!0}),L1=An({key:"__waitForAny",get:t=>({get:e})=>{const n=ga(t),[s,r]=ma(e,n);return r.some(i=>!ve(i))?gs(t,s,r):new Promise(i=>{for(const[o,a]of r.entries())ve(a)&&a.then(c=>{s[o]=c,r[o]=void 0,i(gs(t,s,r))}).catch(c=>{r[o]=c,i(gs(t,s,r))})})},dangerouslyAllowMutability:!0}),x1=An({key:"__waitForAll",get:t=>({get:e})=>{const n=ga(t),[s,r]=ma(e,n);if(r.every(o=>o==null))return Mc(t,s);const i=r.find(C1);if(i!=null)throw i;return Promise.all(r).then(o=>Mc(t,N1(s,o)))},dangerouslyAllowMutability:!0}),D1=An({key:"__waitForAllSettled",get:t=>({get:e})=>{const n=ga(t),[s,r]=ma(e,n);return r.every(i=>!ve(i))?gs(t,s,r):Promise.all(r.map((i,o)=>ve(i)?i.then(a=>{s[o]=a,r[o]=void 0}).catch(a=>{s[o]=void 0,r[o]=a}):null)).then(()=>gs(t,s,r))},dangerouslyAllowMutability:!0}),O1=An({key:"__noWait",get:t=>({get:e})=>{try{return xs.value(ty(e(t)))}catch(n){return xs.value(ve(n)?ey(n):Zg(n))}},dangerouslyAllowMutability:!0});var M1={waitForNone:k1,waitForAny:L1,waitForAll:x1,waitForAllSettled:D1,noWait:O1};const{RecoilLoadable:P1}=ii,{DefaultValue:U1}=lt,{RecoilRoot:V1,useRecoilStoreID:$1}=Zt,{isRecoilValue:B1}=Ns,{retentionZone:F1}=sa,{freshSnapshot:j1}=la,{useRecoilState:q1,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:z1,useRecoilStateLoadable:W1,useRecoilValue:K1,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:H1,useRecoilValueLoadable:G1,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:Q1,useResetRecoilState:Y1,useSetRecoilState:X1}=ax,{useGotoRecoilSnapshot:J1,useRecoilSnapshot:Z1,useRecoilTransactionObserver:eO}=Vg,{useRecoilCallback:tO}=jg,{noWait:nO,waitForAll:sO,waitForAllSettled:rO,waitForAny:iO,waitForNone:oO}=M1;var aO={DefaultValue:U1,isRecoilValue:B1,RecoilLoadable:P1,RecoilEnv:Fs,RecoilRoot:V1,useRecoilStoreID:$1,useRecoilBridgeAcrossReactRoots_UNSTABLE:Ox,atom:Xg,selector:xs,atomFamily:g1,selectorFamily:An,constSelector:b1,errorSelector:I1,readOnlySelector:A1,noWait:nO,waitForNone:oO,waitForAny:iO,waitForAll:sO,waitForAllSettled:rO,useRecoilValue:K1,useRecoilValueLoadable:G1,useRecoilState:q1,useRecoilStateLoadable:W1,useSetRecoilState:X1,useResetRecoilState:Y1,useGetRecoilValueInfo_UNSTABLE:Cx,useRecoilRefresher_UNSTABLE:lD,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:Q1,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:H1,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:z1,useRecoilCallback:tO,useRecoilTransaction_UNSTABLE:pD,useGotoRecoilSnapshot:J1,useRecoilSnapshot:Z1,useRecoilTransactionObserver_UNSTABLE:eO,snapshot_UNSTABLE:j1,useRetain:gu,retentionZone:F1},cO=aO.RecoilRoot;function lO(){return f.jsx(cO,{children:f.jsx("div",{className:"App",children:f.jsx(uy,{children:f.jsxs(hy,{children:[f.jsx(Cn,{path:"/",element:f.jsx(GI,{})}),f.jsx(Cn,{path:"/signin",element:f.jsx(gR,{})}),f.jsx(Cn,{path:"/signup",element:f.jsx(eR,{})}),f.jsx(Cn,{path:"/make-tree",element:f.jsx(T0,{})}),f.jsx(Cn,{path:"/share-tree/:uid",element:f.jsx(UA,{})}),f.jsx(Cn,{path:"/message-custom/:uid",element:f.jsx(QA,{})}),f.jsx(Cn,{path:"/write-message/:uid/:flowerName",element:f.jsx(gC,{})})]})})})})}Ka.createRoot(document.getElementById("root")).render(f.jsx(_e.StrictMode,{children:f.jsx(lO,{})}));
