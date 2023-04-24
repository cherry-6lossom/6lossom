import{r as y,a as zy,R as oc,b as Se,c as Wy}from"./react-ed0a12b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var d={},Ky={get exports(){return d},set exports(t){d=t}},bo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy=y,Gy=Symbol.for("react.element"),Qy=Symbol.for("react.fragment"),Yy=Object.prototype.hasOwnProperty,Xy=Hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jy={key:!0,ref:!0,__self:!0,__source:!0};function Hd(t,e,n){var s,r={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)Yy.call(e,s)&&!Jy.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:Gy,type:t,key:i,ref:o,props:r,_owner:Xy.current}}bo.Fragment=Qy;bo.jsx=Hd;bo.jsxs=Hd;(function(t){t.exports=bo})(Ky);var ac={},zu=zy;ac.createRoot=zu.createRoot,ac.hydrateRoot=zu.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr(){return Sr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Sr.apply(this,arguments)}var mn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mn||(mn={}));const Wu="popstate";function Zy(t){t===void 0&&(t={});function e(s,r){let{pathname:i,search:o,hash:a}=s.location;return cc("",{pathname:i,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(s,r){return typeof r=="string"?r:Wi(r)}return tv(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ev(){return Math.random().toString(36).substr(2,8)}function Ku(t,e){return{usr:t.state,key:t.key,idx:e}}function cc(t,e,n,s){return n===void 0&&(n=null),Sr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Us(e):e,{state:n,key:e&&e.key||s||ev()})}function Wi(t){let{pathname:e="/",search:n="",hash:s=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substr(s),t=t.substr(0,s)),t&&(e.pathname=t)}return e}function tv(t,e,n,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,o=r.history,a=mn.Pop,c=null,l=u();l==null&&(l=0,o.replaceState(Sr({},o.state,{idx:l}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=mn.Pop;let T=u(),x=T==null?null:T-l;l=T,c&&c({action:a,location:w.location,delta:x})}function f(T,x){a=mn.Push;let S=cc(w.location,T,x);n&&n(S,T),l=u()+1;let D=Ku(S,l),F=w.createHref(S);try{o.pushState(D,"",F)}catch{r.location.assign(F)}i&&c&&c({action:a,location:w.location,delta:1})}function m(T,x){a=mn.Replace;let S=cc(w.location,T,x);n&&n(S,T),l=u();let D=Ku(S,l),F=w.createHref(S);o.replaceState(D,"",F),i&&c&&c({action:a,location:w.location,delta:0})}function p(T){let x=r.location.origin!=="null"?r.location.origin:r.location.href,S=typeof T=="string"?T:Wi(T);return Pe(x,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,x)}let w={get action(){return a},get location(){return t(r,o)},listen(T){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Wu,h),c=T,()=>{r.removeEventListener(Wu,h),c=null}},createHref(T){return e(r,T)},createURL:p,encodeLocation(T){let x=p(T);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:m,go(T){return o.go(T)}};return w}var Hu;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hu||(Hu={}));function nv(t,e,n){n===void 0&&(n="/");let s=typeof e=="string"?Us(e):e,r=tl(s.pathname||"/",n);if(r==null)return null;let i=Gd(t);sv(i);let o=null;for(let a=0;o==null&&a<i.length;++a)o=dv(i[a],mv(r));return o}function Gd(t,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let r=(i,o,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Pe(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let l=yn([s,c.relativePath]),u=n.concat(c);i.children&&i.children.length>0&&(Pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Gd(i.children,e,u,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:uv(l,i.index),routesMeta:u})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))r(i,o);else for(let c of Qd(i.path))r(i,o,c)}),e}function Qd(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let o=Qd(s.join("/")),a=[];return a.push(...o.map(c=>c===""?i:[i,c].join("/"))),r&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function sv(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hv(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const rv=/^:\w+$/,iv=3,ov=2,av=1,cv=10,lv=-2,Gu=t=>t==="*";function uv(t,e){let n=t.split("/"),s=n.length;return n.some(Gu)&&(s+=lv),e&&(s+=ov),n.filter(r=>!Gu(r)).reduce((r,i)=>r+(rv.test(i)?iv:i===""?av:cv),s)}function hv(t,e){return t.length===e.length&&t.slice(0,-1).every((s,r)=>s===e[r])?t[t.length-1]-e[e.length-1]:0}function dv(t,e){let{routesMeta:n}=t,s={},r="/",i=[];for(let o=0;o<n.length;++o){let a=n[o],c=o===n.length-1,l=r==="/"?e:e.slice(r.length)||"/",u=fv({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},l);if(!u)return null;Object.assign(s,u.params);let h=a.route;i.push({params:s,pathname:yn([r,u.pathname]),pathnameBase:_v(yn([r,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(r=yn([r,u.pathnameBase]))}return i}function fv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=pv(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:s.reduce((l,u,h)=>{if(u==="*"){let f=a[h]||"";o=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}return l[u]=gv(a[h]||"",u),l},{}),pathname:i,pathnameBase:o,pattern:t}}function pv(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),nl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let s=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(s.push(a),"/([^\\/]+)"));return t.endsWith("*")?(s.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),s]}function mv(t){try{return decodeURI(t)}catch(e){return nl(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function gv(t,e){try{return decodeURIComponent(t)}catch(n){return nl(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function tl(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}function nl(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yv(t,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:r=""}=typeof t=="string"?Us(t):t;return{pathname:n?n.startsWith("/")?n:vv(n,e):e,search:wv(s),hash:Sv(r)}}function vv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ka(t,e,n,s){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yd(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Xd(t,e,n,s){s===void 0&&(s=!1);let r;typeof t=="string"?r=Us(t):(r=Sr({},t),Pe(!r.pathname||!r.pathname.includes("?"),ka("?","pathname","search",r)),Pe(!r.pathname||!r.pathname.includes("#"),ka("#","pathname","hash",r)),Pe(!r.search||!r.search.includes("#"),ka("#","search","hash",r)));let i=t===""||r.pathname==="",o=i?"/":r.pathname,a;if(s||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}a=h>=0?e[h]:"/"}let c=yv(r,a),l=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const yn=t=>t.join("/").replace(/\/\/+/g,"/"),_v=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Sv=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Tv=["post","put","patch","delete"];[...Tv];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},lc.apply(this,arguments)}function Ev(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Iv=typeof Object.is=="function"?Object.is:Ev,{useState:Rv,useEffect:Cv,useLayoutEffect:Av,useDebugValue:Nv}=oc;function kv(t,e,n){const s=e(),[{inst:r},i]=Rv({inst:{value:s,getSnapshot:e}});return Av(()=>{r.value=s,r.getSnapshot=e,xa(r)&&i({inst:r})},[t,s,e]),Cv(()=>(xa(r)&&i({inst:r}),t(()=>{xa(r)&&i({inst:r})})),[t]),Nv(s),s}function xa(t){const e=t.getSnapshot,n=t.value;try{const s=e();return!Iv(n,s)}catch{return!0}}function xv(t,e,n){return e()}const Lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dv=!Lv,Ov=Dv?xv:kv;"useSyncExternalStore"in oc&&(t=>t.useSyncExternalStore)(oc);const Jd=y.createContext(null),Zd=y.createContext(null),Ur=y.createContext(null),To=y.createContext(null),ss=y.createContext({outlet:null,matches:[]}),ef=y.createContext(null);function Mv(t,e){let{relative:n}=e===void 0?{}:e;Vr()||Pe(!1);let{basename:s,navigator:r}=y.useContext(Ur),{hash:i,pathname:o,search:a}=tf(t,{relative:n}),c=o;return s!=="/"&&(c=o==="/"?s:yn([s,o])),r.createHref({pathname:c,search:a,hash:i})}function Vr(){return y.useContext(To)!=null}function $r(){return Vr()||Pe(!1),y.useContext(To).location}function sn(){Vr()||Pe(!1);let{basename:t,navigator:e}=y.useContext(Ur),{matches:n}=y.useContext(ss),{pathname:s}=$r(),r=JSON.stringify(Yd(n).map(a=>a.pathnameBase)),i=y.useRef(!1);return y.useEffect(()=>{i.current=!0}),y.useCallback(function(a,c){if(c===void 0&&(c={}),!i.current)return;if(typeof a=="number"){e.go(a);return}let l=Xd(a,JSON.parse(r),s,c.relative==="path");t!=="/"&&(l.pathname=l.pathname==="/"?t:yn([t,l.pathname])),(c.replace?e.replace:e.push)(l,c.state,c)},[t,e,r,s])}function Eo(){let{matches:t}=y.useContext(ss),e=t[t.length-1];return e?e.params:{}}function tf(t,e){let{relative:n}=e===void 0?{}:e,{matches:s}=y.useContext(ss),{pathname:r}=$r(),i=JSON.stringify(Yd(s).map(o=>o.pathnameBase));return y.useMemo(()=>Xd(t,JSON.parse(i),r,n==="path"),[t,i,r,n])}function Pv(t,e){Vr()||Pe(!1);let{navigator:n}=y.useContext(Ur),s=y.useContext(Zd),{matches:r}=y.useContext(ss),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let c=$r(),l;if(e){var u;let w=typeof e=="string"?Us(e):e;a==="/"||(u=w.pathname)!=null&&u.startsWith(a)||Pe(!1),l=w}else l=c;let h=l.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",m=nv(t,{pathname:f}),p=Bv(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:yn([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:yn([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),r,s||void 0);return e&&p?y.createElement(To.Provider,{value:{location:lc({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:mn.Pop}},p):p}function Uv(){let t=zv(),e=bv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),n?y.createElement("pre",{style:r},n):null,i)}class Vv extends y.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?y.createElement(ss.Provider,{value:this.props.routeContext},y.createElement(ef.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $v(t){let{routeContext:e,match:n,children:s}=t,r=y.useContext(Jd);return r&&r.static&&r.staticContext&&n.route.errorElement&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(ss.Provider,{value:e},s)}function Bv(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let s=t,r=n==null?void 0:n.errors;if(r!=null){let i=s.findIndex(o=>o.route.id&&(r==null?void 0:r[o.route.id]));i>=0||Pe(!1),s=s.slice(0,Math.min(s.length,i+1))}return s.reduceRight((i,o,a)=>{let c=o.route.id?r==null?void 0:r[o.route.id]:null,l=n?o.route.errorElement||y.createElement(Uv,null):null,u=e.concat(s.slice(0,a+1)),h=()=>y.createElement($v,{match:o,routeContext:{outlet:i,matches:u}},c?l:o.route.element!==void 0?o.route.element:i);return n&&(o.route.errorElement||a===0)?y.createElement(Vv,{location:n.location,component:l,error:c,children:h(),routeContext:{outlet:null,matches:u}}):h()},null)}var Qu;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Qu||(Qu={}));var Ki;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ki||(Ki={}));function Fv(t){let e=y.useContext(Zd);return e||Pe(!1),e}function jv(t){let e=y.useContext(ss);return e||Pe(!1),e}function qv(t){let e=jv(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function zv(){var t;let e=y.useContext(ef),n=Fv(Ki.UseRouteError),s=qv(Ki.UseRouteError);return e||((t=n.errors)==null?void 0:t[s])}function ln(t){Pe(!1)}function Wv(t){let{basename:e="/",children:n=null,location:s,navigationType:r=mn.Pop,navigator:i,static:o=!1}=t;Vr()&&Pe(!1);let a=e.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:a,navigator:i,static:o}),[a,i,o]);typeof s=="string"&&(s=Us(s));let{pathname:l="/",search:u="",hash:h="",state:f=null,key:m="default"}=s,p=y.useMemo(()=>{let w=tl(l,a);return w==null?null:{pathname:w,search:u,hash:h,state:f,key:m}},[a,l,u,h,f,m]);return p==null?null:y.createElement(Ur.Provider,{value:c},y.createElement(To.Provider,{children:n,value:{location:p,navigationType:r}}))}function Kv(t){let{children:e,location:n}=t,s=y.useContext(Jd),r=s&&!e?s.router.routes:uc(e);return Pv(r,n)}var Yu;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Yu||(Yu={}));new Promise(()=>{});function uc(t,e){e===void 0&&(e=[]);let n=[];return y.Children.forEach(t,(s,r)=>{if(!y.isValidElement(s))return;if(s.type===y.Fragment){n.push.apply(n,uc(s.props.children,e));return}s.type!==ln&&Pe(!1),!s.props.index||!s.props.children||Pe(!1);let i=[...e,r],o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,hasErrorBoundary:s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle};s.props.children&&(o.children=uc(s.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hc(){return hc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},hc.apply(this,arguments)}function Hv(t,e){if(t==null)return{};var n={},s=Object.keys(t),r,i;for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Gv(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Qv(t,e){return t.button===0&&(!e||e==="_self")&&!Gv(t)}const Yv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Xv(t){let{basename:e,children:n,window:s}=t,r=y.useRef();r.current==null&&(r.current=Zy({window:s,v5Compat:!0}));let i=r.current,[o,a]=y.useState({action:i.action,location:i.location});return y.useLayoutEffect(()=>i.listen(a),[i]),y.createElement(Wv,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:i})}const Jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nf=y.forwardRef(function(e,n){let{onClick:s,relative:r,reloadDocument:i,replace:o,state:a,target:c,to:l,preventScrollReset:u}=e,h=Hv(e,Yv),{basename:f}=y.useContext(Ur),m,p=!1;if(typeof l=="string"&&Zv.test(l)&&(m=l,Jv)){let S=new URL(window.location.href),D=l.startsWith("//")?new URL(S.protocol+l):new URL(l),F=tl(D.pathname,f);D.origin===S.origin&&F!=null?l=F+D.search+D.hash:p=!0}let w=Mv(l,{relative:r}),T=e_(l,{replace:o,state:a,target:c,preventScrollReset:u,relative:r});function x(S){s&&s(S),S.defaultPrevented||T(S)}return y.createElement("a",hc({},h,{href:m||w,onClick:p||i?s:x,ref:n,target:c}))});var Xu;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Xu||(Xu={}));var Ju;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ju||(Ju={}));function e_(t,e){let{target:n,replace:s,state:r,preventScrollReset:i,relative:o}=e===void 0?{}:e,a=sn(),c=$r(),l=tf(t,{relative:o});return y.useCallback(u=>{if(Qv(u,n)){u.preventDefault();let h=s!==void 0?s:Wi(c)===Wi(l);a(t,{replace:h,state:r,preventScrollReset:i,relative:o})}},[c,a,l,s,r,n,t,i,o])}const t_="_homeContainer_1yweo_7",n_="_homeLogo_1yweo_29",s_="_homeMainTitle_1yweo_39",r_="_moonLogo_1yweo_44",i_="_homeTitleInfo_1yweo_49",o_="_homeTitle_1yweo_49",a_="_homeTitleBorder_1yweo_77",c_="_homeTitleShadow_1yweo_89",l_="_homeSubTitle_1yweo_101",u_="_tree_1yweo_120",h_="_blossomTree_1yweo_125",d_="_loginButtonList_1yweo_131",f_="_generalButton_1yweo_139",p_="_googleButton_1yweo_153",lt={homeContainer:t_,homeLogo:n_,homeMainTitle:s_,moonLogo:r_,homeTitleInfo:i_,homeTitle:o_,homeTitleBorder:a_,homeTitleShadow:c_,homeSubTitle:l_,tree:u_,blossomTree:h_,loginButtonList:d_,generalButton:f_,googleButton:p_};var dc={},m_={get exports(){return dc},set exports(t){dc=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if(o==="string"||o==="number")s.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&s.push(a)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){s.push(i.toString());continue}for(var c in i)e.call(i,c)&&i[c]&&s.push(c)}}}return s.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(m_);const _t=dc;/**
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
 */const sf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},g_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(n[u],n[h],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):g_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new y_;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const p=l<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class y_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const v_=function(t){const e=sf(t);return rf.encodeByteArray(e,!0)},Hi=function(t){return v_(t).replace(/\./g,"")},of=function(t){try{return rf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function __(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const w_=()=>__().__FIREBASE_DEFAULTS__,S_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},b_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&of(t[1]);return e&&JSON.parse(e)},sl=()=>{try{return w_()||S_()||b_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},af=t=>{var e,n;return(n=(e=sl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},T_=t=>{const e=af(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},E_=()=>{var t;return(t=sl())===null||t===void 0?void 0:t.config},cf=t=>{var e;return(e=sl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class I_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function R_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Hi(JSON.stringify(n)),Hi(JSON.stringify(o)),a].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function C_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function A_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function N_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function k_(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function x_(){try{return typeof indexedDB=="object"}catch{return!1}}function L_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const D_="FirebaseError";class rn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=D_,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?O_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new rn(r,a,s)}}function O_(t,e){return t.replace(M_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const M_=/\{\$([^}]+)}/g;function P_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Zu(i)&&Zu(o)){if(!Gi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Zu(t){return t!==null&&typeof t=="object"}/**
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
 */function Fr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function rr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function U_(t,e){const n=new V_(t,e);return n.subscribe.bind(n)}class V_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");$_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=La),r.error===void 0&&(r.error=La),r.complete===void 0&&(r.complete=La);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function La(){}/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class B_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new I_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(j_(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:F_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F_(t){return t===Un?void 0:t}function j_(t){return t.instantiationMode==="EAGER"}/**
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
 */class q_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new B_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const z_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},W_=ue.INFO,K_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},H_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=K_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rl{constructor(e){this.name=e,this._logLevel=W_,this._logHandler=H_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const G_=(t,e)=>e.some(n=>t instanceof n);let eh,th;function Q_(){return eh||(eh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y_(){return th||(th=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lf=new WeakMap,fc=new WeakMap,uf=new WeakMap,Da=new WeakMap,il=new WeakMap;function X_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lf.set(n,t)}).catch(()=>{}),il.set(e,t),e}function J_(t){if(fc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fc.set(t,e)}let pc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Z_(t){pc=t(pc)}function ew(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Oa(this),e,...n);return uf.set(s,e.sort?e.sort():[e]),vn(s)}:Y_().includes(t)?function(...e){return t.apply(Oa(this),e),vn(lf.get(this))}:function(...e){return vn(t.apply(Oa(this),e))}}function tw(t){return typeof t=="function"?ew(t):(t instanceof IDBTransaction&&J_(t),G_(t,Q_())?new Proxy(t,pc):t)}function vn(t){if(t instanceof IDBRequest)return X_(t);if(Da.has(t))return Da.get(t);const e=tw(t);return e!==t&&(Da.set(t,e),il.set(e,t)),e}const Oa=t=>il.get(t);function nw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=vn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vn(o.result),c.oldVersion,c.newVersion,vn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const sw=["get","getKey","getAll","getAllKeys","count"],rw=["put","add","delete","clear"],Ma=new Map;function nh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=rw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||sw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ma.set(e,i),i}Z_(t=>({...t,get:(e,n,s)=>nh(e,n)||t.get(e,n,s),has:(e,n)=>!!nh(e,n)||t.has(e,n)}));/**
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
 */class iw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ow(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ow(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mc="@firebase/app",sh="0.9.4";/**
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
 */const Qn=new rl("@firebase/app"),aw="@firebase/app-compat",cw="@firebase/analytics-compat",lw="@firebase/analytics",uw="@firebase/app-check-compat",hw="@firebase/app-check",dw="@firebase/auth",fw="@firebase/auth-compat",pw="@firebase/database",mw="@firebase/database-compat",gw="@firebase/functions",yw="@firebase/functions-compat",vw="@firebase/installations",_w="@firebase/installations-compat",ww="@firebase/messaging",Sw="@firebase/messaging-compat",bw="@firebase/performance",Tw="@firebase/performance-compat",Ew="@firebase/remote-config",Iw="@firebase/remote-config-compat",Rw="@firebase/storage",Cw="@firebase/storage-compat",Aw="@firebase/firestore",Nw="@firebase/firestore-compat",kw="firebase",xw="9.17.2";/**
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
 */const gc="[DEFAULT]",Lw={[mc]:"fire-core",[aw]:"fire-core-compat",[lw]:"fire-analytics",[cw]:"fire-analytics-compat",[hw]:"fire-app-check",[uw]:"fire-app-check-compat",[dw]:"fire-auth",[fw]:"fire-auth-compat",[pw]:"fire-rtdb",[mw]:"fire-rtdb-compat",[gw]:"fire-fn",[yw]:"fire-fn-compat",[vw]:"fire-iid",[_w]:"fire-iid-compat",[ww]:"fire-fcm",[Sw]:"fire-fcm-compat",[bw]:"fire-perf",[Tw]:"fire-perf-compat",[Ew]:"fire-rc",[Iw]:"fire-rc-compat",[Rw]:"fire-gcs",[Cw]:"fire-gcs-compat",[Aw]:"fire-fst",[Nw]:"fire-fst-compat","fire-js":"fire-js",[kw]:"fire-js-all"};/**
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
 */const Qi=new Map,yc=new Map;function Dw(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(yc.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;yc.set(e,t);for(const n of Qi.values())Dw(n,t);return!0}function ol(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ow={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_n=new Br("app","Firebase",Ow);/**
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
 */class Mw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const jr=xw;function hf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:gc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw _n.create("bad-app-name",{appName:String(r)});if(n||(n=E_()),!n)throw _n.create("no-options");const i=Qi.get(r);if(i){if(Gi(n,i.options)&&Gi(s,i.config))return i;throw _n.create("duplicate-app",{appName:r})}const o=new q_(r);for(const c of yc.values())o.addComponent(c);const a=new Mw(n,s,o);return Qi.set(r,a),a}function df(t=gc){const e=Qi.get(t);if(!e&&t===gc)return hf();if(!e)throw _n.create("no-app",{appName:t});return e}function wn(t,e,n){var s;let r=(s=Lw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(a.join(" "));return}Ss(new Gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Pw="firebase-heartbeat-database",Uw=1,br="firebase-heartbeat-store";let Pa=null;function ff(){return Pa||(Pa=nw(Pw,Uw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(br)}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),Pa}async function Vw(t){try{return(await ff()).transaction(br).objectStore(br).get(pf(t))}catch(e){if(e instanceof rn)Qn.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function rh(t,e){try{const s=(await ff()).transaction(br,"readwrite");return await s.objectStore(br).put(e,pf(t)),s.done}catch(n){if(n instanceof rn)Qn.warn(n.message);else{const s=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(s.message)}}}function pf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $w=1024,Bw=30*24*60*60*1e3;class Fw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ih();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Bw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ih(),{heartbeatsToSend:n,unsentEntries:s}=jw(this._heartbeatsCache.heartbeats),r=Hi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ih(){return new Date().toISOString().substring(0,10)}function jw(t,e=$w){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),oh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),oh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class qw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x_()?L_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return rh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return rh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function oh(t){return Hi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zw(t){Ss(new Gn("platform-logger",e=>new iw(e),"PRIVATE")),Ss(new Gn("heartbeat",e=>new Fw(e),"PRIVATE")),wn(mc,sh,t),wn(mc,sh,"esm2017"),wn("fire-js","")}zw("");function al(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function mf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ww=mf,gf=new Br("auth","Firebase",mf());/**
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
 */const ah=new rl("@firebase/auth");function Pi(t,...e){ah.logLevel<=ue.ERROR&&ah.error(`Auth (${jr}): ${t}`,...e)}/**
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
 */function wt(t,...e){throw cl(t,...e)}function Dt(t,...e){return cl(t,...e)}function yf(t,e,n){const s=Object.assign(Object.assign({},Ww()),{[e]:n});return new Br("auth","Firebase",s).create(e,{appName:t.name})}function Kw(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&wt(t,"argument-error"),yf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return gf.create(t,...e)}function j(t,e,...n){if(!t)throw cl(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pi(e),new Error(e)}function Zt(t,e){t||Qt(e)}/**
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
 */const ch=new Map;function Yt(t){Zt(t instanceof Function,"Expected a class definition");let e=ch.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ch.set(t,e),e)}/**
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
 */function Hw(t,e){const n=ol(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Gi(i,e??{}))return r;wt(r,"already-initialized")}return n.initialize({options:e})}function Gw(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qw(){return lh()==="http:"||lh()==="https:"}function lh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Yw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qw()||A_()||"connection"in navigator)?navigator.onLine:!0}function Xw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=C_()||N_()}get(){return Yw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ll(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Zw=new qr(3e4,6e4);function Vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rs(t,e,n,s,r={}){return _f(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Fr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),vf.fetch()(wf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function _f(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Jw),e);try{const r=new eS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ti(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ti(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ti(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw yf(t,u,l);wt(t,u)}}catch(r){if(r instanceof rn)throw r;wt(t,"internal-error",{message:String(r)})}}async function zr(t,e,n,s,r={}){const i=await rs(t,e,n,s,r);return"mfaPendingCredential"in i&&wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function wf(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ll(t.config,r):`${t.config.apiScheme}://${r}`}class eS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),Zw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ti(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Dt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function tS(t,e){return rs(t,"POST","/v1/accounts:delete",e)}async function nS(t,e){return rs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ur(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sS(t,e=!1){const n=Ne(t),s=await n.getIdToken(e),r=ul(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ur(Ua(r.auth_time)),issuedAtTime:ur(Ua(r.iat)),expirationTime:ur(Ua(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ua(t){return Number(t)*1e3}function ul(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{const r=of(n);return r?JSON.parse(r):(Pi("Failed to decode base64 JWT payload"),null)}catch(r){return Pi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function rS(t){const e=ul(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rn&&iS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function iS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ur(this.lastLoginAt),this.creationTime=ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await bs(t,nS(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lS(i.providerUserInfo):[],a=cS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Sf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function aS(t){const e=Ne(t);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function lS(t){return t.map(e=>{var{providerId:n}=e,s=al(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function uS(t,e){const n=await _f(t,{},async()=>{const s=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=wf(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await uS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Tr;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function cn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=al(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sS(this,e)}reload(){return aS(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bs(this,tS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:F,isAnonymous:K,providerData:J,stsTokenManager:$}=n;j(D&&$,e,"internal-error");const ae=Tr.fromJSON(this.name,$);j(typeof D=="string",e,"internal-error"),cn(h,e.name),cn(f,e.name),j(typeof F=="boolean",e,"internal-error"),j(typeof K=="boolean",e,"internal-error"),cn(m,e.name),cn(p,e.name),cn(w,e.name),cn(T,e.name),cn(x,e.name),cn(S,e.name);const P=new zn({uid:D,auth:e,email:f,emailVerified:F,displayName:h,isAnonymous:K,photoURL:p,phoneNumber:m,tenantId:w,stsTokenManager:ae,createdAt:x,lastLoginAt:S});return J&&Array.isArray(J)&&(P.providerData=J.map(q=>Object.assign({},q))),T&&(P._redirectEventId=T),P}static async _fromIdTokenResponse(e,n,s=!1){const r=new Tr;r.updateFromServerResponse(n);const i=new zn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Yi(i),i}}/**
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
 */class bf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bf.type="NONE";const uh=bf;/**
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
 */function Ui(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ui(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ui("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gs(Yt(uh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Yt(uh);const o=Ui(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=zn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new gs(i,e,s))}}/**
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
 */function hh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(If(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cf(e))return"Blackberry";if(Af(e))return"Webos";if(hl(e))return"Safari";if((e.includes("chrome/")||Ef(e))&&!e.includes("edge/"))return"Chrome";if(Rf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Tf(t=et()){return/firefox\//i.test(t)}function hl(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ef(t=et()){return/crios\//i.test(t)}function If(t=et()){return/iemobile/i.test(t)}function Rf(t=et()){return/android/i.test(t)}function Cf(t=et()){return/blackberry/i.test(t)}function Af(t=et()){return/webos/i.test(t)}function Io(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hS(t=et()){var e;return Io(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dS(){return k_()&&document.documentMode===10}function Nf(t=et()){return Io(t)||Rf(t)||Af(t)||Cf(t)||/windows phone/i.test(t)||If(t)}function fS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function kf(t,e=[]){let n;switch(t){case"Browser":n=hh(et());break;case"Worker":n=`${hh(et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${s}`}/**
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
 */class pS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class mS{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dh(this),this.idTokenSubscription=new dh(this),this.beforeStateQueue=new pS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function $s(t){return Ne(t)}class dh{constructor(e){this.auth=e,this.observer=null,this.addObserver=U_(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gS(t,e,n){const s=$s(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=xf(e),{host:o,port:a}=yS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||vS()}function xf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yS(t){const e=xf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:fh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:fh(o)}}}function fh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function _S(t,e){return rs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wS(t,e){return zr(t,"POST","/v1/accounts:signInWithPassword",Vs(t,e))}async function SS(t,e){return rs(t,"POST","/v1/accounts:sendOobCode",Vs(t,e))}async function bS(t,e){return SS(t,e)}/**
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
 */async function TS(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",Vs(t,e))}async function ES(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",Vs(t,e))}/**
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
 */class Er extends dl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Er(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Er(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TS(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return _S(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ES(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ys(t,e){return zr(t,"POST","/v1/accounts:signInWithIdp",Vs(t,e))}/**
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
 */const IS="http://localhost";class Yn extends dl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=al(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Yn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ys(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:IS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fr(n)}return e}}/**
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
 */function RS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CS(t){const e=sr(rr(t)).link,n=e?sr(rr(e)).deep_link_id:null,s=sr(rr(t)).deep_link_id;return(s?sr(rr(s)).link:null)||s||n||e||t}class fl{constructor(e){var n,s,r,i,o,a;const c=sr(rr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=RS((r=c.mode)!==null&&r!==void 0?r:null);j(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=CS(e);try{return new fl(n)}catch{return null}}}/**
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
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return Er._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=fl.parseLink(n);return j(s,"argument-error"),Er._fromEmailAndCode(e,s.code,s.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wr extends pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends Wr{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gt.credential(n,s)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class dn extends Wr{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class fn extends Wr{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */async function AS(t,e){return zr(t,"POST","/v1/accounts:signUp",Vs(t,e))}/**
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
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await zn._fromIdTokenResponse(e,s,r),o=ph(s);return new Xn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ph(s);return new Xn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ph(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xi extends rn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Xi(e,n,s,r)}}function Lf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xi._fromErrorAndOperation(t,i,e,s):i})}async function NS(t,e,n=!1){const s=await bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",s)}/**
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
 */async function kS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await bs(t,Lf(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=ul(i.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),Xn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(s,"user-mismatch"),i}}/**
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
 */async function Df(t,e,n=!1){const s="signIn",r=await Lf(t,s,e),i=await Xn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function xS(t,e){return Df($s(t),e)}/**
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
 */function LS(t,e,n){var s;j(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function DS(t,e,n){const s=$s(t),r=await AS(s,{returnSecureToken:!0,email:e,password:n}),i=await Xn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function OS(t,e,n){return xS(Ne(t),Bs.credential(e,n))}async function MS(t,e){const n=Ne(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&LS(n.auth,r,e);const{email:i}=await bS(n.auth,r);i!==t.email&&await t.reload()}/**
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
 */async function PS(t,e){return rs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function US(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ne(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await bs(s,PS(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function VS(t,e,n,s){return Ne(t).onIdTokenChanged(e,n,s)}function $S(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function BS(t,e,n,s){return Ne(t).onAuthStateChanged(e,n,s)}function FS(t){return Ne(t).signOut()}const Ji="__sak";/**
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
 */class Of{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ji,"1"),this.storage.removeItem(Ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jS(){const t=et();return hl(t)||Io(t)}const qS=1e3,zS=10;class Mf extends Of{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jS()&&fS(),this.fallbackToPolling=Nf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);dS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,zS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mf.type="LOCAL";const WS=Mf;/**
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
 */class Pf extends Of{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pf.type="SESSION";const Uf=Pf;/**
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
 */function KS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ro(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await KS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ro.receivers=[];/**
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
 */function ml(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ml("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ot(){return window}function GS(t){Ot().location.href=t}/**
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
 */function Vf(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function QS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XS(){return Vf()?self:null}/**
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
 */const $f="firebaseLocalStorageDb",JS=1,Zi="firebaseLocalStorage",Bf="fbase_key";class Kr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Co(t,e){return t.transaction([Zi],e?"readwrite":"readonly").objectStore(Zi)}function ZS(){const t=indexedDB.deleteDatabase($f);return new Kr(t).toPromise()}function _c(){const t=indexedDB.open($f,JS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Zi,{keyPath:Bf})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Zi)?e(s):(s.close(),await ZS(),e(await _c()))})})}async function mh(t,e,n){const s=Co(t,!0).put({[Bf]:e,value:n});return new Kr(s).toPromise()}async function eb(t,e){const n=Co(t,!1).get(e),s=await new Kr(n).toPromise();return s===void 0?null:s.value}function gh(t,e){const n=Co(t,!0).delete(e);return new Kr(n).toPromise()}const tb=800,nb=3;class Ff{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(XS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QS(),!this.activeServiceWorker)return;this.sender=new HS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _c();return await mh(e,Ji,"1"),await gh(e,Ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>mh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Co(r,!1).getAll();return new Kr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ff.type="LOCAL";const sb=Ff;/**
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
 */function rb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ib(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Dt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",rb().appendChild(s)})}function ob(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new qr(3e4,6e4);/**
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
 */function jf(t,e){return e?Yt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gl extends dl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ab(t){return Df(t.auth,new gl(t),t.bypassAuthState)}function cb(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),kS(n,new gl(t),t.bypassAuthState)}async function lb(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),NS(n,new gl(t),t.bypassAuthState)}/**
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
 */class qf{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ab;case"linkViaPopup":case"linkViaRedirect":return lb;case"reauthViaPopup":case"reauthViaRedirect":return cb;default:wt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ub=new qr(2e3,1e4);async function hb(t,e,n){const s=$s(t);Kw(t,e,pl);const r=jf(s,n);return new Bn(s,"signInViaPopup",e,r).executeNotNull()}class Bn extends qf{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ub.get())};e()}}Bn.currentPopupAction=null;/**
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
 */const db="pendingRedirect",Vi=new Map;class fb extends qf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Vi.get(this.auth._key());if(!e){try{const s=await pb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Vi.set(this.auth._key(),e)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pb(t,e){const n=yb(e),s=gb(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function mb(t,e){Vi.set(t._key(),e)}function gb(t){return Yt(t._redirectPersistence)}function yb(t){return Ui(db,t.config.apiKey,t.name)}async function vb(t,e,n=!1){const s=$s(t),r=jf(s,e),o=await new fb(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const _b=10*60*1e3;class wb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!zf(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_b&&this.cachedEventUids.clear(),this.cachedEventUids.has(yh(e))}saveEventToCache(e){this.cachedEventUids.add(yh(e)),this.lastProcessedEventTime=Date.now()}}function yh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zf(t);default:return!1}}/**
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
 */async function bb(t,e={}){return rs(t,"GET","/v1/projects",e)}/**
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
 */const Tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Eb=/^https?/;async function Ib(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bb(t);for(const n of e)try{if(Rb(n))return}catch{}wt(t,"unauthorized-domain")}function Rb(t){const e=vc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Eb.test(n))return!1;if(Tb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Cb=new qr(3e4,6e4);function vh(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ab(t){return new Promise((e,n)=>{var s,r,i;function o(){vh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vh(),n(Dt(t,"network-request-failed"))},timeout:Cb.get()})}if(!((r=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const a=ob("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},ib(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw $i=null,e})}let $i=null;function Nb(t){return $i=$i||Ab(t),$i}/**
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
 */const kb=new qr(5e3,15e3),xb="__/auth/iframe",Lb="emulator/auth/iframe",Db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mb(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ll(e,Lb):`https://${t.config.authDomain}/${xb}`,s={apiKey:e.apiKey,appName:t.name,v:jr},r=Ob.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Fr(s).slice(1)}`}async function Pb(t){const e=await Nb(t),n=Ot().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Mb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Db,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},kb.get());function c(){Ot().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Ub={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vb=500,$b=600,Bb="_blank",Fb="http://localhost";class _h{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jb(t,e,n,s=Vb,r=$b){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ub),{width:s.toString(),height:r.toString(),top:i,left:o}),l=et().toLowerCase();n&&(a=Ef(l)?Bb:n),Tf(l)&&(e=e||Fb,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,p])=>`${f}${m}=${p},`,"");if(hS(l)&&a!=="_self")return qb(e||"",a),new _h(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new _h(h)}function qb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const zb="__/auth/handler",Wb="emulator/auth/handler";function wh(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:jr,eventId:r};if(e instanceof pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",P_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Wr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Kb(t)}?${Fr(a).slice(1)}`}function Kb({config:t}){return t.emulator?ll(t,Wb):`https://${t.authDomain}/${zb}`}/**
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
 */const Va="webStorageSupport";class Hb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uf,this._completeRedirectFn=vb,this._overrideRedirectResult=mb}async _openPopup(e,n,s,r){var i;Zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=wh(e,n,s,vc(),r);return jb(e,o,ml())}async _openRedirect(e,n,s,r){return await this._originValidation(e),GS(wh(e,n,s,vc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Zt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Pb(e),s=new wb(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Va,{type:Va},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Va];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ib(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nf()||hl()||Io()}}const Gb=Hb;var Sh="@firebase/auth",bh="0.21.4";/**
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
 */class Qb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Yb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xb(t){Ss(new Gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kf(t)},u=new mS(a,c,l);return Gw(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ss(new Gn("auth-internal",e=>{const n=$s(e.getProvider("auth").getImmediate());return(s=>new Qb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Sh,bh,Yb(t)),wn(Sh,bh,"esm2017")}/**
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
 */const Jb=5*60,Zb=cf("authIdTokenMaxAge")||Jb;let Th=null;const eT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Zb)return;const r=n==null?void 0:n.token;Th!==r&&(Th=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function tT(t=df()){const e=ol(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hw(t,{popupRedirectResolver:Gb,persistence:[sb,WS,Uf]}),s=cf("authTokenSyncURL");if(s){const i=eT(s);$S(n,i,()=>i(n.currentUser)),VS(n,o=>i(o))}const r=af("auth");return r&&gS(n,`http://${r}`),n}Xb("Browser");var nT="firebase",sT="9.17.2";/**
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
 */wn(nT,sT,"app");var rT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,yl=yl||{},X=rT||self;function eo(){}function Ao(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iT(t){return Object.prototype.hasOwnProperty.call(t,$a)&&t[$a]||(t[$a]=++oT)}var $a="closure_uid_"+(1e9*Math.random()>>>0),oT=0;function aT(t,e,n){return t.call.apply(t.bind,arguments)}function cT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=aT:Xe=cT,Xe.apply(null,arguments)}function Ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Cn(){this.s=this.s,this.o=this.o}var lT=0;Cn.prototype.s=!1;Cn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lT!=0)&&iT(this)};Cn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Eh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ao(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var uT=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",eo,e),X.removeEventListener("test",eo,e)}catch{}return t}();function to(t){return/^[\s\xa0]*$/.test(t)}var Ih=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ba(t,e){return t<e?-1:t>e?1:0}function No(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return No().indexOf(t)!=-1}function _l(t){return _l[" "](t),t}_l[" "]=eo;function hT(t){var e=pT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var dT=Lt("Opera"),Ts=Lt("Trident")||Lt("MSIE"),Kf=Lt("Edge"),wc=Kf||Ts,Hf=Lt("Gecko")&&!(No().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),fT=No().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function Gf(){var t=X.document;return t?t.documentMode:void 0}var no;e:{var Fa="",ja=function(){var t=No();if(Hf)return/rv:([^\);]+)(\)|;)/.exec(t);if(Kf)return/Edge\/([\d\.]+)/.exec(t);if(Ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fT)return/WebKit\/(\S+)/.exec(t);if(dT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ja&&(Fa=ja?ja[1]:""),Ts){var qa=Gf();if(qa!=null&&qa>parseFloat(Fa)){no=String(qa);break e}}no=Fa}var pT={};function mT(){return hT(function(){let t=0;const e=Ih(String(no)).split("."),n=Ih("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ba(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ba(r[2].length==0,i[2].length==0)||Ba(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Sc;if(X.document&&Ts){var Rh=Gf();Sc=Rh||parseInt(no,10)||void 0}else Sc=void 0;var gT=Sc;function Ir(t,e){if(Je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hf){e:{try{_l(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ir.X.h.call(this)}}Ke(Ir,Je);var yT={2:"touch",3:"pen",4:"mouse"};Ir.prototype.h=function(){Ir.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),vT=0;function _T(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++vT,this.ba=this.ea=!1}function ko(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function wl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Qf(t){const e={};for(const n in t)e[n]=t[n];return e}const Ch="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ch.length;i++)n=Ch[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function xo(t){this.src=t,this.g={},this.h=0}xo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Tc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new _T(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function bc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Wf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ko(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Sl="closure_lm_"+(1e6*Math.random()|0),za={};function Xf(t,e,n,s,r){if(s&&s.once)return Zf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xf(t,e[i],n,s,r);return null}return n=El(n),t&&t[Gr]?t.N(e,n,Hr(s)?!!s.capture:!!s,r):Jf(t,e,n,!1,s,r)}function Jf(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Hr(r)?!!r.capture:!!r,a=Tl(t);if(a||(t[Sl]=a=new xo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=wT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)uT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(tp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wT(){function t(n){return e.call(t.src,t.listener,n)}const e=ST;return t}function Zf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Zf(t,e[i],n,s,r);return null}return n=El(n),t&&t[Gr]?t.O(e,n,Hr(s)?!!s.capture:!!s,r):Jf(t,e,n,!0,s,r)}function ep(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ep(t,e[i],n,s,r);else s=Hr(s)?!!s.capture:!!s,n=El(n),t&&t[Gr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Tc(i,n,s,r),-1<n&&(ko(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tc(e,n,s,r)),(n=-1<t?e[t]:null)&&bl(n))}function bl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Gr])bc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(tp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Tl(e))?(bc(n,t),n.h==0&&(n.src=null,e[Sl]=null)):ko(t)}}}function tp(t){return t in za?za[t]:za[t]="on"+t}function ST(t,e){if(t.ba)t=!0;else{e=new Ir(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&bl(t),t=n.call(s,e)}return t}function Tl(t){return t=t[Sl],t instanceof xo?t:null}var Wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function El(t){return typeof t=="function"?t:(t[Wa]||(t[Wa]=function(e){return t.handleEvent(e)}),t[Wa])}function je(){Cn.call(this),this.i=new xo(this),this.P=this,this.I=null}Ke(je,Cn);je.prototype[Gr]=!0;je.prototype.removeEventListener=function(t,e,n,s){ep(this,t,e,n,s)};function We(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Je(e,t);else if(e instanceof Je)e.target=e.target||t;else{var r=e;e=new Je(s,t),Yf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ii(o,s,!0,e)&&r}if(o=e.g=t,r=Ii(o,s,!0,e)&&r,r=Ii(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ii(o,s,!1,e)&&r}je.prototype.M=function(){if(je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ko(n[s]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ii(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&bc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Il=X.JSON.stringify;function bT(){var t=rp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TT{constructor(){this.h=this.g=null}add(e,n){const s=np.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var np=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ET,t=>t.reset());class ET{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function IT(t){X.setTimeout(()=>{throw t},0)}function sp(t,e){Ec||RT(),Ic||(Ec(),Ic=!0),rp.add(t,e)}var Ec;function RT(){var t=X.Promise.resolve(void 0);Ec=function(){t.then(CT)}}var Ic=!1,rp=new TT;function CT(){for(var t;t=bT();){try{t.h.call(t.g)}catch(n){IT(n)}var e=np;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ic=!1}function Lo(t,e){je.call(this),this.h=t||1,this.g=e||X,this.j=Xe(this.lb,this),this.l=Date.now()}Ke(Lo,je);M=Lo.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),We(this,"tick"),this.ca&&(Rl(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){Lo.X.M.call(this),Rl(this),delete this.g};function Cl(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function ip(t){t.g=Cl(()=>{t.g=null,t.i&&(t.i=!1,ip(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AT extends Cn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ip(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(t){Cn.call(this),this.h=t,this.g={}}Ke(Rr,Cn);var Ah=[];function op(t,e,n,s){Array.isArray(n)||(n&&(Ah[0]=n.toString()),n=Ah);for(var r=0;r<n.length;r++){var i=Xf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ap(t){wl(t.g,function(e,n){this.g.hasOwnProperty(n)&&bl(e)},t),t.g={}}Rr.prototype.M=function(){Rr.X.M.call(this),ap(this)};Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Do(){this.g=!0}Do.prototype.Aa=function(){this.g=!1};function NT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function kT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ms(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LT(t,n)+(s?" "+s:"")})}function xT(t,e){t.info(function(){return"TIMEOUT: "+e})}Do.prototype.info=function(){};function LT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Il(n)}catch{return e}}var is={},Nh=null;function Oo(){return Nh=Nh||new je}is.Pa="serverreachability";function cp(t){Je.call(this,is.Pa,t)}Ke(cp,Je);function Cr(t){const e=Oo();We(e,new cp(e))}is.STAT_EVENT="statevent";function lp(t,e){Je.call(this,is.STAT_EVENT,t),this.stat=e}Ke(lp,Je);function at(t){const e=Oo();We(e,new lp(e,t))}is.Qa="timingevent";function up(t,e){Je.call(this,is.Qa,t),this.size=e}Ke(up,Je);function Qr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Mo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},hp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Al(){}Al.prototype.h=null;function kh(t){return t.h||(t.h=t.i())}function dp(){}var Yr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Nl(){Je.call(this,"d")}Ke(Nl,Je);function kl(){Je.call(this,"c")}Ke(kl,Je);var Rc;function Po(){}Ke(Po,Al);Po.prototype.g=function(){return new XMLHttpRequest};Po.prototype.i=function(){return{}};Rc=new Po;function Xr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Rr(this),this.O=DT,t=wc?125:void 0,this.T=new Lo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new fp}function fp(){this.i=null,this.g="",this.h=!1}var DT=45e3,Cc={},so={};M=Xr.prototype;M.setTimeout=function(t){this.O=t};function Ac(t,e,n){t.K=1,t.v=Vo(en(e)),t.s=n,t.P=!0,pp(t,null)}function pp(t,e){t.F=Date.now(),Jr(t),t.A=en(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),bp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new fp,t.g=qp(t.l,n?e:null,!t.s),0<t.N&&(t.L=new AT(Xe(t.La,t,t.g),t.N)),op(t.S,t.g,"readystatechange",t.ib),e=t.H?Qf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Cr(),NT(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||wc||this.g&&(this.h.h||this.g.fa()||Oh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Cr(3):Cr(2)),Uo(this);var n=this.g.aa();this.Y=n;t:if(mp(this)){var s=Oh(this.g);t="";var r=s.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),hr(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kT(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!to(a)){var l=a;break t}}l=null}if(n=l)ms(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Nc(this,n);else{this.i=!1,this.o=3,at(12),Fn(this),hr(this);break e}}this.P?(gp(this,u,o),wc&&this.i&&u==3&&(op(this.S,this.T,"tick",this.hb),this.T.start())):(ms(this.j,this.m,o,null),Nc(this,o)),u==4&&Fn(this),this.i&&!this.I&&(u==4?$p(this.l,this):(this.i=!1,Jr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Fn(this),hr(this)}}}catch{}finally{}};function mp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function gp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=OT(t,n),r==so){e==4&&(t.o=4,at(14),s=!1),ms(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Cc){t.o=4,at(15),ms(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ms(t.j,t.m,r,null),Nc(t,r);mp(t)&&r!=so&&r!=Cc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ul(e),e.K=!0,at(11))):(ms(t.j,t.m,n,"[Invalid Chunked Response]"),Fn(t),hr(t))}M.hb=function(){if(this.g){var t=Xt(this.g),e=this.g.fa();this.C<e.length&&(Uo(this),gp(this,t,e),this.i&&t!=4&&Jr(this))}};function OT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?so:(n=Number(e.substring(n,s)),isNaN(n)?Cc:(s+=1,s+n>e.length?so:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.I=!0,Fn(this)};function Jr(t){t.V=Date.now()+t.O,yp(t,t.O)}function yp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qr(Xe(t.gb,t),e)}function Uo(t){t.B&&(X.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(xT(this.j,this.A),this.K!=2&&(Cr(),at(17)),Fn(this),this.o=2,hr(this)):yp(this,this.V-t)};function hr(t){t.l.G==0||t.I||$p(t.l,t)}function Fn(t){Uo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Rl(t.T),ap(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Nc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||kc(n.h,t))){if(!t.J&&kc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)oo(n),Fo(n);else break e;Pl(n),at(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Qr(Xe(n.cb,n),6e3));if(1>=Ip(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else jn(n,11)}else if((t.J||n.g==t)&&oo(n),!to(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const p=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(xl(i,i.h),i.h=null))}if(s.D){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Te(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=jp(s,s.H?s.ka:null,s.V),o.J){Rp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Uo(a),Jr(a)),s.g=o}else Up(s);0<n.i.length&&jo(n)}else l[0]!="stop"&&l[0]!="close"||jn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?jn(n,7):Ml(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Cr(4)}catch{}}function MT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ao(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function PT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ao(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function vp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ao(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PT(t),s=MT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var _p=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Wn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wn){this.h=e!==void 0?e:t.h,ro(this,t.j),this.s=t.s,this.g=t.g,io(this,t.m),this.l=t.l,e=t.i;var n=new Ar;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xh(this,n),this.o=t.o}else t&&(n=String(t).match(_p))?(this.h=!!e,ro(this,n[1]||"",!0),this.s=ir(n[2]||""),this.g=ir(n[3]||"",!0),io(this,n[4]),this.l=ir(n[5]||"",!0),xh(this,n[6]||"",!0),this.o=ir(n[7]||"")):(this.h=!!e,this.i=new Ar(null,this.h))}Wn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(or(e,Lh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(or(e,Lh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(or(n,n.charAt(0)=="/"?BT:$T,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",or(n,jT)),t.join("")};function en(t){return new Wn(t)}function ro(t,e,n){t.j=n?ir(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function io(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xh(t,e,n){e instanceof Ar?(t.i=e,qT(t.i,t.h)):(n||(e=or(e,FT)),t.i=new Ar(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function Vo(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ir(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function or(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Lh=/[#\/\?@]/g,$T=/[#\?:]/g,BT=/[#\?]/g,FT=/[#\?@]/g,jT=/#/g;function Ar(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function An(t){t.g||(t.g=new Map,t.h=0,t.i&&UT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ar.prototype;M.add=function(t,e){An(this),this.i=null,t=Fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wp(t,e){An(t),e=Fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sp(t,e){return An(t),e=Fs(t,e),t.g.has(e)}M.forEach=function(t,e){An(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.oa=function(){An(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.W=function(t){An(this);let e=[];if(typeof t=="string")Sp(this,t)&&(e=e.concat(this.g.get(Fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return An(this),this.i=null,t=Fs(this,t),Sp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function bp(t,e,n){wp(t,e),0<n.length&&(t.i=null,t.g.set(Fs(t,e),vl(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qT(t,e){e&&!t.j&&(An(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(wp(this,s),bp(this,r,n))},t)),t.j=e}var zT=class{constructor(e,n){this.h=e,this.g=n}};function Tp(t){this.l=t||WT,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WT=10;function Ep(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ip(t){return t.h?1:t.g?t.g.size:0}function kc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xl(t,e){t.g?t.g.add(e):t.h=e}function Rp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tp.prototype.cancel=function(){if(this.i=Cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return vl(t.i)}function Ll(){}Ll.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Ll.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function KT(){this.g=new Ll}function HT(t,e,n){const s=n||"";try{vp(t,function(r,i){let o=r;Hr(r)&&(o=Il(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function GT(t,e){const n=new Do;if(X.Image){const s=new Image;s.onload=Ei(Ri,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ei(Ri,n,s,"TestLoadImage: error",!1,e),s.onabort=Ei(Ri,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ei(Ri,n,s,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ri(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Zr(t){this.l=t.ac||null,this.j=t.jb||!1}Ke(Zr,Al);Zr.prototype.g=function(){return new $o(this.l,this.j)};Zr.prototype.i=function(t){return function(){return t}}({});function $o(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke($o,je);var Dl=0;M=$o.prototype;M.open=function(t,e){if(this.readyState!=Dl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nr(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=Dl};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ap(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ap(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ei(this):Nr(this),this.readyState==3&&Ap(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,ei(this))};M.Ua=function(t){this.g&&(this.response=t,ei(this))};M.ga=function(){this.g&&ei(this)};function ei(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nr(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Nr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QT=X.JSON.parse;function ke(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Np,this.K=this.L=!1}Ke(ke,je);var Np="",YT=/^https?$/i,XT=["POST","PUT"];M=ke.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Rc.g(),this.C=this.u?kh(this.u):kh(Rc),this.g.onreadystatechange=Xe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Dh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=X.FormData&&t instanceof X.FormData,!(0<=Wf(XT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Lp(this),0<this.B&&((this.K=JT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.qa,this)):this.A=Cl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Dh(this,i)}};function JT(t){return Ts&&mT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof yl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function Dh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kp(t),Bo(t)}function kp(t){t.D||(t.D=!0,We(t,"complete"),We(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),Bo(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bo(this,!0)),ke.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?xp(this):this.fb())};M.fb=function(){xp(this)};function xp(t){if(t.h&&typeof yl<"u"&&(!t.C[1]||Xt(t)!=4||t.aa()!=2)){if(t.v&&Xt(t)==4)Cl(t.Ha,0,t);else if(We(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(_p)[1]||null;if(!r&&X.self&&X.self.location){var i=X.self.location.protocol;r=i.substr(0,i.length-1)}s=!YT.test(r?r.toLowerCase():"")}n=s}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",kp(t)}}finally{Bo(t)}}}}function Bo(t,e){if(t.g){Lp(t);const n=t.g,s=t.C[0]?eo:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=s}catch{}}}function Lp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QT(e)}};function Oh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Np:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dp(t){let e="";return wl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ol(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Dp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Op(t){this.Ca=0,this.i=[],this.j=new Do,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ys("baseRetryDelayMs",5e3,t),this.bb=Ys("retryDelaySeedMs",1e4,t),this.$a=Ys("forwardChannelMaxRetries",2,t),this.ta=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Tp(t&&t.concurrentRequestLimit),this.Fa=new KT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=Op.prototype;M.ma=8;M.G=1;function Ml(t){if(Mp(t),t.G==3){var e=t.U++,n=en(t.F);Te(n,"SID",t.I),Te(n,"RID",e),Te(n,"TYPE","terminate"),ti(t,n),e=new Xr(t,t.j,e,void 0),e.K=2,e.v=Vo(en(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=qp(e.l,null),e.g.da(e.v)),e.F=Date.now(),Jr(e)}Fp(t)}function Fo(t){t.g&&(Ul(t),t.g.cancel(),t.g=null)}function Mp(t){Fo(t),t.u&&(X.clearTimeout(t.u),t.u=null),oo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function jo(t){Ep(t.h)||t.m||(t.m=!0,sp(t.Ja,t),t.C=0)}function ZT(t,e){return Ip(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Qr(Xe(t.Ja,t,e),Bp(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Xr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Qf(i),Yf(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Pp(this,r,e),n=en(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),ti(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Dp(i)))+"&"+e:this.o&&Ol(n,this.o,i)),xl(this.h,r),this.Ya&&Te(n,"TYPE","init"),this.O?(Te(n,"$req",e),Te(n,"SID","null"),r.Z=!0,Ac(r,n,null)):Ac(r,n,e),this.G=2}}else this.G==3&&(t?Mh(this,t):this.i.length==0||Ep(this.h)||Mh(this))};function Mh(t,e){var n;e?n=e.m:n=t.U++;const s=en(t.F);Te(s,"SID",t.I),Te(s,"RID",n),Te(s,"AID",t.T),ti(t,s),t.o&&t.s&&Ol(s,t.o,t.s),n=new Xr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Pp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),xl(t.h,n),Ac(n,s,e)}function ti(t,e){t.ia&&wl(t.ia,function(n,s){Te(e,s,n)}),t.l&&vp({},function(n,s){Te(e,s,n)})}function Pp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Xe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{HT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Up(t){t.g||t.u||(t.Z=1,sp(t.Ia,t),t.A=0)}function Pl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Qr(Xe(t.Ia,t),Bp(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,Vp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Qr(Xe(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Fo(this),Vp(this))};function Ul(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function Vp(t){t.g=new Xr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=en(t.sa);Te(e,"RID","rpc"),Te(e,"SID",t.I),Te(e,"CI",t.L?"0":"1"),Te(e,"AID",t.T),Te(e,"TYPE","xmlhttp"),ti(t,e),t.o&&t.s&&Ol(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Vo(en(e)),n.s=null,n.P=!0,pp(n,t)}M.cb=function(){this.v!=null&&(this.v=null,Fo(this),Pl(this),at(19))};function oo(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function $p(t,e){var n=null;if(t.g==e){oo(t),Ul(t),t.g=null;var s=2}else if(kc(t.h,e))n=e.D,Rp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Oo(),We(s,new up(s,n)),jo(t)}else Up(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&ZT(t,e)||s==2&&Pl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:jn(t,5);break;case 4:jn(t,10);break;case 3:jn(t,6);break;default:jn(t,2)}}}function Bp(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function jn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Xe(t.kb,t);n||(n=new Wn("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||ro(n,"https"),Vo(n)),GT(n.toString(),s)}else at(2);t.G=0,t.l&&t.l.va(e),Fp(t),Mp(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Fp(t){if(t.G=0,t.la=[],t.l){const e=Cp(t.h);(e.length!=0||t.i.length!=0)&&(Eh(t.la,e),Eh(t.la,t.i),t.h.i.length=0,vl(t.i),t.i.length=0),t.l.ua()}}function jp(t,e,n){var s=n instanceof Wn?en(n):new Wn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),io(s,s.m);else{var r=X.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Wn(null,void 0);s&&ro(i,s),e&&(i.g=e),r&&io(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Te(s,n,e),Te(s,"VER",t.ma),ti(t,s),s}function qp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ke(new Zr({jb:!0})):new ke(t.ra),e.Ka(t.H),e}function zp(){}M=zp.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function ao(){if(Ts&&!(10<=Number(gT)))throw Error("Environmental error: no available transport.")}ao.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){je.call(this),this.g=new Op(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!to(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!to(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new js(this)}Ke(gt,je);gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=jp(t,null,t.V),jo(t)};gt.prototype.close=function(){Ml(this.g)};gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Il(t),t=n);e.i.push(new zT(e.ab++,t)),e.G==3&&jo(e)};gt.prototype.M=function(){this.g.l=null,delete this.j,Ml(this.g),delete this.g,gt.X.M.call(this)};function Wp(t){Nl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(Wp,Nl);function Kp(){kl.call(this),this.status=1}Ke(Kp,kl);function js(t){this.g=t}Ke(js,zp);js.prototype.xa=function(){We(this.g,"a")};js.prototype.wa=function(t){We(this.g,new Wp(t))};js.prototype.va=function(t){We(this.g,new Kp)};js.prototype.ua=function(){We(this.g,"b")};ao.prototype.createWebChannel=ao.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;Mo.NO_ERROR=0;Mo.TIMEOUT=8;Mo.HTTP_ERROR=6;hp.COMPLETE="complete";dp.EventType=Yr;Yr.OPEN="a";Yr.CLOSE="b";Yr.ERROR="c";Yr.MESSAGE="d";je.prototype.listen=je.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.Oa;ke.prototype.getLastErrorCode=ke.prototype.Ea;ke.prototype.getStatus=ke.prototype.aa;ke.prototype.getResponseJson=ke.prototype.Sa;ke.prototype.getResponseText=ke.prototype.fa;ke.prototype.send=ke.prototype.da;ke.prototype.setWithCredentials=ke.prototype.Ka;var eE=function(){return new ao},tE=function(){return Oo()},Ka=Mo,nE=hp,sE=is,Ph={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rE=Zr,Ci=dp,iE=ke;const Uh="@firebase/firestore";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let qs="9.17.2";/**
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
 */const Jn=new rl("@firebase/firestore");function Vh(){return Jn.logLevel}function U(t,...e){if(Jn.logLevel<=ue.DEBUG){const n=e.map(Vl);Jn.debug(`Firestore (${qs}): ${t}`,...n)}}function tn(t,...e){if(Jn.logLevel<=ue.ERROR){const n=e.map(Vl);Jn.error(`Firestore (${qs}): ${t}`,...n)}}function xc(t,...e){if(Jn.logLevel<=ue.WARN){const n=e.map(Vl);Jn.warn(`Firestore (${qs}): ${t}`,...n)}}function Vl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw tn(e),new Error(e)}function ge(t,e){t||Y()}function te(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Hp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class aE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cE{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ge(typeof s.accessToken=="string"),new Hp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new Ge(e)}}class lE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ge(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class uE{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new lE(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dE{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.A=n.token,new hE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Gp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=fE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function de(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ue(0,0))}static max(){return new ee(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends kr{construct(e,n,s){return new ve(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const pE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends kr{construct(e,n,s){return new Ye(e,n,s)}static isValidIdentifier(e){return pE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new A(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new A(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ve.fromString(e))}static fromName(e){return new V(ve.fromString(e).popFirst(5))}static empty(){return new V(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ve(e.slice()))}}function mE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Ue(n+1,0):new Ue(n,s));return new bn(r,V.empty(),e)}function gE(t){return new bn(t.readTime,t.key,-1)}class bn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new bn(ee.min(),V.empty(),-1)}static max(){return new bn(ee.max(),V.empty(),-1)}}function yE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const vE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _E{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ni(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==vE)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(r=>r?I.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new I((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new I((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function si(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $l{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}$l.at=-1;/**
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
 */const wE=/^[_a-zA-Z][_a-zA-Z0-9]*(?:\.[_a-zA-Z][_a-zA-Z0-9]*)*$/;class Bl{constructor(e){this.alias=e}static ht(e){return wE.test(e)}canonicalString(){let e=this.alias.replace(/\\/g,"\\\\").replace(/`/g,"\\`");return Bl.ht(e)||(e="`"+e+"`"),e}}/**
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
 */class SE{constructor(e,n,s){this.alias=e,this.lt=n,this.fieldPath=s}}/**
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
 */class bE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class xr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function $h(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function qo(t){return t==null}function co(t){return t===0&&1/t==-1/0}function TE(t){return typeof t=="number"&&Number.isInteger(t)&&!co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class EE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new EE("Invalid base64 string: "+r):r}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const IE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(t){if(ge(!!t),typeof t=="string"){let e=0;const n=IE.exec(t);if(ge(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function Fl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yp(t){const e=t.mapValue.fields.__previous_value__;return Fl(e)?Yp(e):e}function Lr(t){const e=Tn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */const Ai={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fl(t)?4:RE(t)?9007199254740991:10:Y()}function Vt(t,e){if(t===e)return!0;const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lr(t).isEqual(Lr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Tn(s.timestampValue),o=Tn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Is(s.bytesValue).isEqual(Is(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return De(s.geoPointValue.latitude)===De(r.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return De(s.integerValue)===De(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=De(s.doubleValue),o=De(r.doubleValue);return i===o?co(i)===co(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if($h(i)!==$h(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Vt(i[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Dr(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Zn(t),s=Zn(e);if(n!==s)return de(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=De(r.integerValue||r.doubleValue),a=De(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bh(t.timestampValue,e.timestampValue);case 4:return Bh(Lr(t),Lr(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Is(r),a=Is(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=de(o[c],a[c]);if(l!==0)return l}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=de(De(r.latitude),De(i.latitude));return o!==0?o:de(De(r.longitude),De(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Rs(o[c],a[c]);if(l)return l}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ai.mapValue&&i===Ai.mapValue)return 0;if(r===Ai.mapValue)return 1;if(i===Ai.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=de(a[u],l[u]);if(h!==0)return h;const f=Rs(o[a[u]],c[l[u]]);if(f!==0)return f}return de(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Bh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Tn(t),s=Tn(e),r=de(n.seconds,s.seconds);return r!==0?r:de(n.nanos,s.nanos)}function Cs(t){return Lc(t)}function Lc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Tn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Is(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Lc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Lc(s.fields[a])}`;return i+"}"}(t.mapValue):Y();var e,n}function lo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dc(t){return!!t&&"integerValue"in t}function jl(t){return!!t&&"arrayValue"in t}function Fh(t){return!!t&&"nullValue"in t}function jh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bi(t){return!!t&&"mapValue"in t}function dr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=dr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class As{constructor(e,n){this.position=e,this.inclusive=n}}function qh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=V.comparator(V.fromName(o.referenceValue),n.key):s=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function zh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xp{}class Oe extends Xp{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new AE(e,n,s):n==="array-contains"?new xE(e,s):n==="in"?new LE(e,s):n==="not-in"?new DE(e,s):n==="array-contains-any"?new OE(e,s):new Oe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new NE(e,s):new kE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class At extends Xp{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new At(e,n)}matches(e){return Jp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Jp(t){return t.op==="and"}function Zp(t){return CE(t)&&Jp(t)}function CE(t){for(const e of t.filters)if(e instanceof At)return!1;return!0}function Oc(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(Zp(t))return t.filters.map(e=>Oc(e)).join(",");{const e=t.filters.map(n=>Oc(n)).join(",");return`${t.op}(${e})`}}function em(t,e){return t instanceof Oe?function(n,s){return s instanceof Oe&&n.op===s.op&&n.field.isEqual(s.field)&&Vt(n.value,s.value)}(t,e):t instanceof At?function(n,s){return s instanceof At&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&em(i,s.filters[o]),!0):!1}(t,e):void Y()}function tm(t){return t instanceof Oe?function(e){return`${e.field.canonicalString()} ${e.op} ${Cs(e.value)}`}(t):t instanceof At?function(e){return e.op.toString()+" {"+e.getFilters().map(tm).join(" ,")+"}"}(t):"Filter"}class AE extends Oe{constructor(e,n,s){super(e,n,s),this.key=V.fromName(s.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class NE extends Oe{constructor(e,n){super(e,"in",n),this.keys=nm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kE extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=nm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>V.fromName(s.referenceValue))}class xE extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jl(n)&&Dr(n.arrayValue,this.value)}}class LE extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Dr(this.value.arrayValue,n)}}class DE extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Dr(this.value.arrayValue,n)}}class OE extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Dr(this.value.arrayValue,s))}}/**
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
 */class vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function ME(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ni(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ni(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ni(this.root,e,this.comparator,!0)}}class Ni{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ze.RED,this.left=r??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ze(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wh(this.data.getIterator())}getIteratorFrom(e){return new Wh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Wh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ft{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new ft([])}unionWith(e){let n=new Ve(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Bi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dr(n)}setAll(e){let n=Ye.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=dr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Bi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Bi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){os(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ot(dr(this.value))}}function sm(t){const e=[];return os(t.fields,(n,s)=>{const r=new Ye([n]);if(Bi(s)){const i=sm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ft(e)}/**
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
 */class Qe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,ee.min(),ee.min(),ee.min(),ot.empty(),0)}static newFoundDocument(e,n,s,r){return new Qe(e,1,n,ee.min(),s,r,0)}static newNoDocument(e,n){return new Qe(e,2,n,ee.min(),ee.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,ee.min(),ee.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class PE{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function Kh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new PE(t,e,n,s,r,i,o)}function ql(t){const e=te(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Oc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),qo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cs(s)).join(",")),e._t=n}return e._t}function zl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ME(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!em(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zh(t.startAt,e.startAt)&&zh(t.endAt,e.endAt)}function Mc(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Nn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function UE(t,e,n,s,r,i,o,a){return new Nn(t,e,n,s,r,i,o,a)}function zo(t){return new Nn(t)}function Hh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Kl(t){return t.collectionGroup!==null}function Kn(t){const e=te(t);if(e.wt===null){e.wt=[];const n=Wo(e),s=Wl(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new vs(n)),e.wt.push(new vs(Ye.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new vs(Ye.keyField(),i))}}}return e.wt}function $t(t){const e=te(t);if(!e.gt)if(e.limitType==="F")e.gt=Kh(e.path,e.collectionGroup,Kn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Kn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new vs(i.field,o))}const s=e.endAt?new As(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new As(e.startAt.position,e.startAt.inclusive):null;e.gt=Kh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Pc(t,e){e.getFirstInequalityField(),Wo(t);const n=t.filters.concat([e]);return new Nn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uo(t,e,n){return new Nn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ko(t,e){return zl($t(t),$t(e))&&t.limitType===e.limitType}function rm(t){return`${ql($t(t))}|lt:${t.limitType}`}function Uc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>tm(s)).join(", ")}]`),qo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cs(s)).join(",")),`Target(${n})`}($t(t))}; limitType=${t.limitType})`}function Ho(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):V.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Kn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=qh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Kn(n),s)||n.endAt&&!function(r,i,o){const a=qh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Kn(n),s))}(t,e)}function VE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function im(t){return(e,n)=>{let s=!1;for(const r of Kn(t)){const i=$E(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function $E(t,e,n){const s=t.field.isKeyField()?V.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Rs(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
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
 */function om(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:co(e)?"-0":e}}function am(t){return{integerValue:""+t}}function BE(t,e){return TE(e)?am(e):om(t,e)}/**
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
 */class Go{constructor(){this._=void 0}}function FE(t,e,n){return t instanceof Or?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Mr?lm(t,e):t instanceof Pr?um(t,e):function(s,r){const i=cm(s,r),o=Gh(i)+Gh(s.It);return Dc(i)&&Dc(s.It)?am(o):om(s.Tt,o)}(t,e)}function jE(t,e,n){return t instanceof Mr?lm(t,e):t instanceof Pr?um(t,e):n}function cm(t,e){return t instanceof ho?Dc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Or extends Go{}class Mr extends Go{constructor(e){super(),this.elements=e}}function lm(t,e){const n=hm(e);for(const s of t.elements)n.some(r=>Vt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Pr extends Go{constructor(e){super(),this.elements=e}}function um(t,e){let n=hm(e);for(const s of t.elements)n=n.filter(r=>!Vt(r,s));return{arrayValue:{values:n}}}class ho extends Go{constructor(e,n){super(),this.Tt=e,this.It=n}}function Gh(t){return De(t.integerValue||t.doubleValue)}function hm(t){return jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class qE{constructor(e,n){this.field=e,this.transform=n}}function zE(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Mr&&s instanceof Mr||n instanceof Pr&&s instanceof Pr?Es(n.elements,s.elements,Vt):n instanceof ho&&s instanceof ho?Vt(n.It,s.It):n instanceof Or&&s instanceof Or}(t.transform,e.transform)}class WE{constructor(e,n){this.version=e,this.transformResults=n}}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qo{}function dm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pm(t.key,Pt.none()):new ri(t.key,t.data,Pt.none());{const n=t.data,s=ot.empty();let r=new Ve(Ye.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new kn(t.key,s,new ft(r.toArray()),Pt.none())}}function KE(t,e,n){t instanceof ri?function(s,r,i){const o=s.value.clone(),a=Yh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof kn?function(s,r,i){if(!Fi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Yh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function fr(t,e,n,s){return t instanceof ri?function(r,i,o,a){if(!Fi(r.precondition,i))return o;const c=r.value.clone(),l=Xh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof kn?function(r,i,o,a){if(!Fi(r.precondition,i))return o;const c=Xh(r.fieldTransforms,a,i),l=i.data;return l.setAll(fm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Fi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function HE(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=cm(s.transform,r||null);i!=null&&(n===null&&(n=ot.empty()),n.set(s.field,i))}return n||null}function Qh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Es(n,s,(r,i)=>zE(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ri extends Qo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class kn extends Qo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Yh(t,e,n){const s=new Map;ge(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,jE(o,a,n[r]))}return s}function Xh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,FE(i,o,e))}return s}class pm extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GE extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QE{constructor(e){this.count=e}}/**
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
 */var Le,ce;function YE(t){switch(t){default:return Y();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function mm(t){if(t===void 0)return tn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Le.OK:return b.OK;case Le.CANCELLED:return b.CANCELLED;case Le.UNKNOWN:return b.UNKNOWN;case Le.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Le.INTERNAL:return b.INTERNAL;case Le.UNAVAILABLE:return b.UNAVAILABLE;case Le.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Le.NOT_FOUND:return b.NOT_FOUND;case Le.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Le.ABORTED:return b.ABORTED;case Le.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Le.DATA_LOSS:return b.DATA_LOSS;default:return Y()}}(ce=Le||(Le={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Qp(this.inner)}size(){return this.innerSize}}/**
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
 */const XE=new $e(V.comparator);function nn(){return XE}const gm=new $e(V.comparator);function ar(...t){let e=gm;for(const n of t)e=e.insert(n.key,n);return e}function ym(t){let e=gm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function qn(){return pr()}function vm(){return pr()}function pr(){return new zs(t=>t.toString(),(t,e)=>t.isEqual(e))}const JE=new $e(V.comparator),ZE=new Ve(V.comparator);function ie(...t){let e=ZE;for(const n of t)e=e.add(n);return e}const eI=new Ve(de);function _m(){return eI}/**
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
 */class Yo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ii.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Yo(ee.min(),r,_m(),nn(),ie())}}class ii{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ii(s,n,ie(),ie(),ie())}}/**
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
 */class ji{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class wm{constructor(e,n){this.targetId=e,this.Rt=n}}class Sm{constructor(e,n,s=tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Jh{constructor(){this.bt=0,this.vt=ed(),this.Pt=tt.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=ie(),n=ie(),s=ie();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Y()}}),new ii(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=ed()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class tI{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=nn(),this.Kt=Zh(),this.Gt=new Ve(de)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Mc(i))if(s===0){const o=new V(i.path);this.zt(n,o,Qe.newNoDocument(o,ee.min()))}else ge(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Mc(a.target)){const c=new V(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Qe.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=ie();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Yo(e,n,this.Gt,this.Ut,s);return this.Ut=nn(),this.Kt=Zh(),this.Gt=new Ve(de),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Jh,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ve(de),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Jh),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Zh(){return new $e(V.comparator)}function ed(){return new $e(V.comparator)}/**
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
 */const nI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rI=(()=>({and:"AND",or:"OR"}))();class iI{constructor(e,n){this.databaseId=e,this.yt=n}}function fo(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bm(t,e){return t.yt?e.toBase64():e.toUint8Array()}function oI(t,e){return fo(t,e.toTimestamp())}function Ut(t){return ge(!!t),ee.fromTimestamp(function(e){const n=Tn(e);return new Ue(n.seconds,n.nanos)}(t))}function Hl(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Tm(t){const e=ve.fromString(t);return ge(Am(e)),e}function Vc(t,e){return Hl(t.databaseId,e.path)}function Ha(t,e){const n=Tm(e);if(n.get(1)!==t.databaseId.projectId)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(Em(n))}function $c(t,e){return Hl(t.databaseId,e)}function aI(t){const e=Tm(t);return e.length===4?ve.emptyPath():Em(e)}function Bc(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Em(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function td(t,e,n){return{name:Vc(t,e),fields:n.value.mapValue.fields}}function cI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(ge(l===void 0||typeof l=="string"),tt.fromBase64String(l||"")):(ge(l===void 0||l instanceof Uint8Array),tt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:mm(c.code);return new A(l,c.message||"")}(o);n=new Sm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ha(t,s.document.name),i=Ut(s.document.updateTime),o=s.document.createTime?Ut(s.document.createTime):ee.min(),a=new ot({mapValue:{fields:s.document.fields}}),c=Qe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new ji(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ha(t,s.document),i=s.readTime?Ut(s.readTime):ee.min(),o=Qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ji([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ha(t,s.document),i=s.removedTargetIds||[];n=new ji([],i,r,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new QE(r),o=s.targetId;n=new wm(o,i)}}return n}function lI(t,e){let n;if(e instanceof ri)n={update:td(t,e.key,e.value)};else if(e instanceof pm)n={delete:Vc(t,e.key)};else if(e instanceof kn)n={update:td(t,e.key,e.data),updateMask:yI(e.fieldMask)};else{if(!(e instanceof GE))return Y();n={verify:Vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Or)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Mr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Pr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ho)return{fieldPath:i.field.canonicalString(),increment:o.It};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:oI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function uI(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ut(s.updateTime):Ut(r);return i.isEqual(ee.min())&&(i=Ut(r)),new WE(i,s.transformResults||[])}(n,e))):[]}function hI(t,e){return{documents:[$c(t,e.path)]}}function Im(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=$c(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$c(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Cm(At.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:pn(u.field),direction:pI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||qo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function dI(t){let e=aI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ge(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Rm(u);return h instanceof At&&Zp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new vs(ps(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,qo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new As(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new As(f,h)}(n.endAt)),UE(e,r,o,i,a,"F",c,l)}function fI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ps(e.unaryFilter.field);return Oe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(e.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ps(e.unaryFilter.field);return Oe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ps(e.unaryFilter.field);return Oe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Oe.create(ps(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return At.create(e.compositeFilter.filters.map(n=>Rm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function pI(t){return nI[t]}function mI(t){return sI[t]}function gI(t){return rI[t]}function pn(t){return{fieldPath:t.canonicalString()}}function ps(t){return Ye.fromServerFormat(t.fieldPath)}function Cm(t){return t instanceof Oe?function(e){if(e.op==="=="){if(jh(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NAN"}};if(Fh(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jh(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NOT_NAN"}};if(Fh(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pn(e.field),op:mI(e.op),value:e.value}}}(t):t instanceof At?function(e){const n=e.getFilters().map(s=>Cm(s));return n.length===1?n[0]:{compositeFilter:{op:gI(e.op),filters:n}}}(t):Y()}function yI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Am(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class vI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&KE(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=vm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=dm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,s)=>Qh(n,s))&&Es(this.baseMutations,e.baseMutations,(n,s)=>Qh(n,s))}}class Gl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ge(e.mutations.length===s.length);let r=JE;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Gl(e,n,s,r)}}/**
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
 */class _I{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hn{constructor(e,n,s,r,i=ee.min(),o=ee.min(),a=tt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class wI{constructor(e){this.oe=e}}function SI(t){const e=dI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uo(e,e.limit,"L"):e}/**
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
 */class bI{constructor(){this.Ze=new TI}addToCollectionParentIndex(e,n){return this.Ze.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(bn.min())}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class TI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ve(ve.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(ve.comparator)).toArray()}}/**
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
 */class Ns{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Ns(0)}static Sn(){return new Ns(-1)}}/**
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
 */class EI{constructor(){this.changes=new zs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class II{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class RI{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&fr(s.mutation,r,ft.empty(),Ue.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const r=qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ar();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=qn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=nn();const o=pr(),a=pr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof kn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),fr(u.mutation,l,u.mutation.getFieldMask(),Ue.now())):o.set(l.key,ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new II(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=pr();let r=new $e((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ft.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ie()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=vm();u.forEach(f=>{if(!i.has(f)){const m=dm(n.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return V.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Kl(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):I.resolve(qn());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:ym(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(s=>{let r=ar();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ar();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const c=function(l,u){return new Nn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Qe.newInvalidDocument(l)))});let o=ar();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&fr(l.mutation,c,ft.empty(),Ue.now()),Ho(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class CI{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return I.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Ut(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:SI(s.bundledQuery),readTime:Ut(s.readTime)}}(n)),I.resolve()}}/**
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
 */class AI{constructor(){this.overlays=new $e(V.comparator),this.ss=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const s=qn();return I.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const r=qn(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new $e((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=qn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=qn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return I.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new _I(n,s));let i=this.ss.get(n);i===void 0&&(i=ie(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
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
 */class Ql{constructor(){this.rs=new Ve(Fe.os),this.us=new Ve(Fe.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Fe(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Fe(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new V(new ve([])),s=new Fe(n,e),r=new Fe(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new V(new ve([])),s=new Fe(n,e),r=new Fe(n,e+1);let i=ie();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Fe{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return V.comparator(e.key,n.key)||de(e.gs,n.gs)}static cs(e,n){return de(e.gs,n.gs)||V.comparator(e.key,n.key)}}/**
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
 */class NI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ve(Fe.os)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Fe(n,0),r=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ve(de);return n.forEach(r=>{const i=new Fe(r,0),o=new Fe(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),I.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;V.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new V(i),0);let a=new Ve(de);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),I.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ge(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return I.forEach(n.mutations,r=>{const i=new Fe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Fe(n,0),r=this.ps.firstAfterOrEqual(s);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class kI{constructor(e){this.Rs=e,this.docs=new $e(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=nn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qe.newInvalidDocument(r))}),I.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=nn();const o=n.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||yE(gE(u),s)<=0||(r.has(u.key)||Ho(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Y()}bs(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new xI(this)}getSize(e){return I.resolve(this.size)}}class xI extends EI{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class LI{constructor(e){this.persistence=e,this.vs=new zs(n=>ql(n),zl),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Ql,this.targetCount=0,this.Ss=Ns.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),I.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.xn(n),I.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(i).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.Vs.containsKey(n))}}/**
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
 */class DI{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new $l(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new LI(this),this.indexManager=new bI,this.remoteDocumentCache=function(s){return new kI(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new wI(n),this.Os=new CI(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new NI(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new OI(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return I.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class OI extends _E{constructor(e){super(),this.currentSequenceNumber=e}}class Yl{constructor(e){this.persistence=e,this.Bs=new Ql,this.Ls=null}static qs(e){return new Yl(e)}get Us(){if(this.Ls)return this.Ls;throw Y()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),I.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Us,s=>{const r=V.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,ee.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return I.or([()=>I.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
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
 */class Xl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=ie(),r=ie();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Xl(e,n.fromCache,s,r)}}/**
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
 */class MI{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(Hh(n))return I.resolve(null);let s=$t(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=uo(n,null,"F"),s=$t(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ie(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,uo(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,r){return Hh(n)||r.isEqual(ee.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(Vh()<=ue.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Uc(n)),this.qi(e,o,n,mE(r,-1)))})}Bi(e,n){let s=new Ve(im(e));return n.forEach((r,i)=>{Ho(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return Vh()<=ue.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Uc(n)),this.Oi.getDocumentsMatchingQuery(e,n,bn.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class PI{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new $e(de),this.Gi=new zs(i=>ql(i),zl),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RI(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function UI(t,e,n,s){return new PI(t,e,n,s)}async function Nm(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ie();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function VI(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=I.resolve();return h.forEach(m=>{f=f.next(()=>l.getEntry(a,m)).next(p=>{const w=c.docVersions.get(m);ge(w!==null),p.version.compareTo(w)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ie();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function km(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function $I(t,e){const n=te(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(tt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(p,w,T){return p.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,m,u)&&a.push(n.Ns.updateTargetData(i,m))});let c=nn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(BI(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(ee.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function BI(t,e,n){let s=ie(),r=ie();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=nn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function FI(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function jI(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,I.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Hn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Fc(t,e,n){const s=te(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!si(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function nd(t,e,n){const s=te(t);let r=ee.min(),i=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=te(a),h=u.Gi.get(l);return h!==void 0?I.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,$t(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:ee.min(),n?i:ie())).next(a=>(qI(s,VE(e),a),{documents:a,Yi:i})))}function qI(t,e,n){let s=t.Qi.get(e)||ee.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class sd{constructor(){this.activeTargetIds=_m()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zI{constructor(){this.Ur=new sd,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new sd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WI{Gr(e){}shutdown(){}}/**
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
 */class rd{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const KI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class HI{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */class GI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);U("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw xc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+qs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=KI[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new iE;a.setWithCredentials(!0),a.listenOnce(nE.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ka.NO_ERROR:const l=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ka.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new A(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ka.HTTP_ERROR:const u=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const m=function(p){const w=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(w)>=0?w:b.UNKNOWN}(f.status);o(new A(m,f.message))}else o(new A(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(b.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=eE(),o=tE(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new rE({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");U("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new HI({Yr:p=>{h?U("Connection","Not sending because WebChannel is closed:",p):(u||(U("Connection","Opening WebChannel transport."),l.open(),u=!0),U("Connection","WebChannel sending:",p),l.send(p))},Zr:()=>l.close()}),m=(p,w,T)=>{p.listen(w,x=>{try{T(x)}catch(S){setTimeout(()=>{throw S},0)}})};return m(l,Ci.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),m(l,Ci.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),f.oo())}),m(l,Ci.EventType.ERROR,p=>{h||(h=!0,xc("Connection","WebChannel transport errored:",p),f.oo(new A(b.UNAVAILABLE,"The operation could not be completed")))}),m(l,Ci.EventType.MESSAGE,p=>{var w;if(!h){const T=p.data[0];ge(!!T);const x=T,S=x.error||((w=x[0])===null||w===void 0?void 0:w.error);if(S){U("Connection","WebChannel received error:",S);const D=S.status;let F=function(J){const $=Le[J];if($!==void 0)return mm($)}(D),K=S.message;F===void 0&&(F=b.INTERNAL,K="Unknown error status: "+D+" with message "+S.message),h=!0,f.oo(new A(F,K)),l.close()}else U("Connection","WebChannel received:",T),f.uo(T)}}),m(o,sE.STAT_EVENT,p=>{p.stat===Ph.PROXY?U("Connection","Detected buffering proxy"):p.stat===Ph.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ro()},0),f}}function Ga(){return typeof document<"u"?document:null}/**
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
 */function Xo(t){return new iI(t,!0)}/**
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
 */class xm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
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
 */class Lm{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new xm(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(tn(n.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new A(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QI extends Lm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=cI(this.Tt,e),s=function(r){if(!("targetChange"in r))return ee.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?Ut(i.readTime):ee.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Bc(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Mc(a)?{documents:hI(r,a)}:{query:Im(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=bm(r,i.resumeToken):i.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=fo(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=fI(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Bc(this.Tt),n.removeTarget=e,this.qo(n)}}class YI extends Lm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=uI(e.writeResults,e.commitTime),s=Ut(e.commitTime);return this.listener.eu(s,n)}return ge(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Bc(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>lI(this.Tt,s))};this.qo(n)}}/**
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
 */class XI extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(b.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(b.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}async function JI(t,e,n){const s=te(t),r=function(l,u,h){const f=Im(l,u),m=[];return h.forEach(p=>{p.lt==="count"?m.push({alias:p.alias.canonicalString(),count:{}}):p.lt==="avg"?m.push({alias:p.alias.canonicalString(),avg:{field:pn(p.fieldPath)}}):p.lt==="sum"&&m.push({alias:p.alias.canonicalString(),sum:{field:pn(p.fieldPath)}})}),{structuredAggregationQuery:{aggregations:m,structuredQuery:f.structuredQuery},parent:f.parent}}(s.Tt,$t(e),n),i=r.parent;s.connection.ho||delete r.parent;const o=(await s.mo("RunAggregationQuery",i,r,1)).filter(l=>!!l.result);return ge(o.length===1),(a=o[0]).result,a.result.aggregateFields,new ot({mapValue:{fields:(c=a.result)===null||c===void 0?void 0:c.aggregateFields}});var a,c}class ZI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(tn(n),this.cu=!1):U("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class e0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{xn(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=te(a);c.mu.add(4),await oi(c),c.pu.set("Unknown"),c.mu.delete(4),await Jo(c)}(this))})}),this.pu=new ZI(s,r)}}async function Jo(t){if(xn(t))for(const e of t.gu)await e(!0)}async function oi(t){for(const e of t.gu)await e(!1)}function Dm(t,e){const n=te(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),eu(n)?Zl(n):Ws(n).Mo()&&Jl(n,e))}function Om(t,e){const n=te(t),s=Ws(n);n.wu.delete(e),s.Mo()&&Mm(n,e),n.wu.size===0&&(s.Mo()?s.Bo():xn(n)&&n.pu.set("Unknown"))}function Jl(t,e){t.Iu.Ft(e.targetId),Ws(t).Jo(e)}function Mm(t,e){t.Iu.Ft(e),Ws(t).Yo(e)}function Zl(t){t.Iu=new tI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Ws(t).start(),t.pu.au()}function eu(t){return xn(t)&&!Ws(t).Oo()&&t.wu.size>0}function xn(t){return te(t).mu.size===0}function Pm(t){t.Iu=void 0}async function t0(t){t.wu.forEach((e,n)=>{Jl(t,e)})}async function n0(t,e){Pm(t),eu(t)?(t.pu.fu(e),Zl(t)):t.pu.set("Unknown")}async function s0(t,e,n){if(t.pu.set("Online"),e instanceof Sm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await po(t,s)}else if(e instanceof ji?t.Iu.Qt(e):e instanceof wm?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(ee.min()))try{const s=await km(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(tt.EMPTY_BYTE_STRING,c.snapshotVersion)),Mm(r,a);const l=new Hn(c.target,a,1,c.sequenceNumber);Jl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await po(t,s)}}async function po(t,e,n){if(!si(e))throw e;t.mu.add(1),await oi(t),t.pu.set("Offline"),n||(n=()=>km(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Jo(t)})}function Um(t,e){return e().catch(n=>po(t,n,e))}async function Zo(t){const e=te(t),n=En(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;r0(e);)try{const r=await FI(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,i0(e,r)}catch(r){await po(e,r)}Vm(e)&&$m(e)}function r0(t){return xn(t)&&t._u.length<10}function i0(t,e){t._u.push(e);const n=En(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Vm(t){return xn(t)&&!En(t).Oo()&&t._u.length>0}function $m(t){En(t).start()}async function o0(t){En(t).su()}async function a0(t){const e=En(t);for(const n of t._u)e.tu(n.mutations)}async function c0(t,e,n){const s=t._u.shift(),r=Gl.from(s,e,n);await Um(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Zo(t)}async function l0(t,e){e&&En(t).Xo&&await async function(n,s){if(r=s.code,YE(r)&&r!==b.ABORTED){const i=n._u.shift();En(n).$o(),await Um(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zo(n)}var r}(t,e),Vm(t)&&$m(t)}async function id(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=xn(n);n.mu.add(3),await oi(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Jo(n)}async function u0(t,e){const n=te(t);e?(n.mu.delete(2),await Jo(n)):e||(n.mu.add(2),await oi(n),n.pu.set("Unknown"))}function Ws(t){return t.Tu||(t.Tu=function(e,n,s){const r=te(e);return r.ru(),new QI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:t0.bind(null,t),no:n0.bind(null,t),Ho:s0.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),eu(t)?Zl(t):t.pu.set("Unknown")):(await t.Tu.stop(),Pm(t))})),t.Tu}function En(t){return t.Eu||(t.Eu=function(e,n,s){const r=te(e);return r.ru(),new YI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:o0.bind(null,t),no:l0.bind(null,t),nu:a0.bind(null,t),eu:c0.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Zo(t)):(await t.Eu.stop(),t._u.length>0&&(U("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class tu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new tu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nu(t,e){if(tn("AsyncQueue",`${e}: ${t}`),si(t))return new A(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class _s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||V.comparator(n.key,s.key):(n,s)=>V.comparator(n.key,s.key),this.keyedMap=ar(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new _s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class od{constructor(){this.Au=new $e(V.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):Y():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class ks{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ks(e,n,_s.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ko(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class h0{constructor(){this.bu=void 0,this.listeners=[]}}class d0{constructor(){this.queries=new zs(e=>rm(e),Ko),this.onlineState="Unknown",this.vu=new Set}}async function su(t,e){const n=te(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new h0),r)try{i.bu=await n.onListen(s)}catch(o){const a=nu(o,`Initialization of query '${Uc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&iu(n)}async function ru(t,e){const n=te(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function f0(t,e){const n=te(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&iu(n)}function p0(t,e,n){const s=te(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function iu(t){t.vu.forEach(e=>{e.next()})}class ou{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ks(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class Bm{constructor(e){this.key=e}}class Fm{constructor(e){this.key=e}}class m0{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ie(),this.mutatedKeys=ie(),this.ju=im(e),this.zu=new _s(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new od,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),m=Ho(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;f&&m?f.data.isEqual(m.data)?p!==w&&(s.track({type:3,doc:m}),T=!0):this.Yu(f,m)||(s.track({type:2,doc:m}),T=!0,(c&&this.ju(m,c)>0||l&&this.ju(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),T=!0):f&&!m&&(s.track({type:1,doc:f}),T=!0,(c||l)&&(a=!0)),T&&(m?(o=o.add(m),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,f){const m=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return m(h)-m(f)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new ks(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new od,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ie(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Fm(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Bm(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=ie();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return ks.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class g0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class y0{constructor(e){this.key=e,this.ic=!1}}class v0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new zs(a=>rm(a),Ko),this.uc=new Map,this.cc=new Set,this.ac=new $e(V.comparator),this.hc=new Map,this.lc=new Ql,this.fc={},this.dc=new Map,this._c=Ns.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function _0(t,e){const n=N0(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await jI(n.localStore,$t(e));n.isPrimaryClient&&Dm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await w0(n,e,s,a==="current",o.resumeToken)}return r}async function w0(t,e,n,s,r){t.mc=(h,f,m)=>async function(p,w,T,x){let S=w.view.Hu(T);S.Li&&(S=await nd(p.localStore,w.query,!1).then(({documents:K})=>w.view.Hu(K,S)));const D=x&&x.targetChanges.get(w.targetId),F=w.view.applyChanges(S,p.isPrimaryClient,D);return cd(p,w.targetId,F.tc),F.snapshot}(t,h,f,m);const i=await nd(t.localStore,e,!0),o=new m0(e,i.Yi),a=o.Hu(i.documents),c=ii.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);cd(t,n,l.tc);const u=new g0(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function S0(t,e){const n=te(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!Ko(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Fc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Om(n.remoteStore,s.targetId),jc(n,s.targetId)}).catch(ni)):(jc(n,s.targetId),await Fc(n.localStore,s.targetId,!0))}async function b0(t,e,n){const s=k0(t);try{const r=await function(i,o){const a=te(i),c=Ue.now(),l=o.reduce((f,m)=>f.add(m.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=nn(),p=ie();return a.ji.getEntries(f,l).next(w=>{m=w,m.forEach((T,x)=>{x.isValidDocument()||(p=p.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(w=>{u=w;const T=[];for(const x of o){const S=HE(x,u.get(x.key).overlayedDocument);S!=null&&T.push(new kn(x.key,S,sm(S.value.mapValue),Pt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,T,o)}).next(w=>{h=w;const T=w.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,w.batchId,T)})}).then(()=>({batchId:h.batchId,changes:ym(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new $e(de)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ai(s,r.changes),await Zo(s.remoteStore)}catch(r){const i=nu(r,"Failed to persist write");n.reject(i)}}async function jm(t,e){const n=te(t);try{const s=await $I(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(ge(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?ge(o.ic):r.removedDocuments.size>0&&(ge(o.ic),o.ic=!1))}),await ai(n,s,e)}catch(s){await ni(s)}}function ad(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=te(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&iu(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function T0(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new $e(V.comparator);o=o.insert(i,Qe.newNoDocument(i,ee.min()));const a=ie().add(i),c=new Yo(ee.min(),new Map,new Ve(de),o,a);await jm(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),au(s)}else await Fc(s.localStore,e,!1).then(()=>jc(s,e,n)).catch(ni)}async function E0(t,e){const n=te(t),s=e.batch.batchId;try{const r=await VI(n.localStore,e);zm(n,s,null),qm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ai(n,r)}catch(r){await ni(r)}}async function I0(t,e,n){const s=te(t);try{const r=await function(i,o){const a=te(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ge(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);zm(s,e,n),qm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ai(s,r)}catch(r){await ni(r)}}function qm(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function zm(t,e,n){const s=te(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Wm(t,s)})}function Wm(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Om(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),au(t))}function cd(t,e,n){for(const s of n)s instanceof Bm?(t.lc.addReference(s.key,e),R0(t,s)):s instanceof Fm?(U("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Wm(t,s.key)):Y()}function R0(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.cc.add(s),au(t))}function au(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new V(ve.fromString(e)),s=t._c.next();t.hc.set(s,new y0(n)),t.ac=t.ac.insert(n,s),Dm(t.remoteStore,new Hn($t(zo(n.path)),s,2,$l.at))}}async function ai(t,e,n){const s=te(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Xl.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=te(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Ci,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>I.forEach(h.xi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!si(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ki.get(h),m=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(m);l.Ki=l.Ki.insert(h,p)}}}(s.localStore,i))}async function C0(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await Nm(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new A(b.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ai(n,s.Wi)}}function A0(t,e){const n=te(t),s=n.hc.get(e);if(s&&s.ic)return ie().add(s.key);{let r=ie();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function N0(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=A0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T0.bind(null,e),e.rc.Ho=f0.bind(null,e.eventManager),e.rc.gc=p0.bind(null,e.eventManager),e}function k0(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=E0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=I0.bind(null,e),e}class x0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return UI(this.persistence,new MI,e.initialUser,this.Tt)}Tc(e){return new DI(Yl.qs,this.Tt)}Ic(e){return new zI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class L0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ad(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=C0.bind(null,this.syncEngine),await u0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new d0}createDatastore(e){const n=Xo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new GI(r));var r;return function(i,o,a,c){return new XI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>ad(this.syncEngine,a,0),o=rd.C()?new rd:new WI,new e0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new v0(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);U("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await oi(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class cu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class D0{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ge.UNAUTHENTICATED,this.clientId=Gp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=nu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function O0(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Nm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function M0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await P0(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>id(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>id(e.remoteStore,i)),t.onlineComponents=e}async function P0(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await O0(t,new x0)),t.offlineComponents}async function ea(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await M0(t,new L0)),t.onlineComponents}function U0(t){return ea(t).then(e=>e.remoteStore)}function V0(t){return ea(t).then(e=>e.syncEngine)}function $0(t){return ea(t).then(e=>e.datastore)}async function mo(t){const e=await ea(t),n=e.eventManager;return n.onListen=_0.bind(null,e.syncEngine),n.onUnlisten=S0.bind(null,e.syncEngine),n}function B0(t,e,n={}){const s=new Mt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new cu({next:h=>{i.enqueueAndForget(()=>ru(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new A(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new A(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ou(zo(o.path),l,{includeMetadataChanges:!0,Ou:!0});return su(r,u)}(await mo(t),t.asyncQueue,e,n,s)),s.promise}function F0(t,e,n={}){const s=new Mt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new cu({next:h=>{i.enqueueAndForget(()=>ru(r,u)),h.fromCache&&a.source==="server"?c.reject(new A(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ou(o,l,{includeMetadataChanges:!0,Ou:!0});return su(r,u)}(await mo(t),t.asyncQueue,e,n,s)),s.promise}const ld=new Map;/**
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
 */function Km(t,e,n){if(!n)throw new A(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function j0(t,e,n,s){if(e===!0&&s===!0)throw new A(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ud(t){if(!V.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hd(t){if(V.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ta(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function pt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ta(t);throw new A(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function q0(t,e){if(e<=0)throw new A(b.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class dd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,j0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class na{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oE;switch(n.type){case"gapi":const s=n.client;return new uE(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ld.get(e);n&&(U("ComponentProvider","Removing Datastore"),ld.delete(e),n.terminate())}(this),Promise.resolve()}}function z0(t,e,n,s={}){var r;const i=(t=pt(t,na))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&xc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ge.MOCK_USER;else{o=R_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new A(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ge(c)}t._authCredentials=new aE(new Hp(o,a))}}/**
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
 */class Ze{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class Nt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class Sn extends Nt{constructor(e,n,s){super(e,n,zo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new V(e))}withConverter(e){return new Sn(this.firestore,e,this._path)}}function es(t,e,...n){if(t=Ne(t),Km("collection","path",e),t instanceof na){const s=ve.fromString(e,...n);return hd(s),new Sn(t,null,s)}{if(!(t instanceof Ze||t instanceof Sn))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return hd(s),new Sn(t.firestore,null,s)}}function In(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=Gp.R()),Km("doc","path",e),t instanceof na){const s=ve.fromString(e,...n);return ud(s),new Ze(t,null,new V(s))}{if(!(t instanceof Ze||t instanceof Sn))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return ud(s),new Ze(t.firestore,t instanceof Sn?t.converter:null,new V(s))}}/**
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
 */class W0{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new xm(this,"async_queue_retry"),this.Hc=()=>{const n=Ga();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Ga();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Ga();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Mt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!si(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw tn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=tu.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&Y()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function fd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Rn extends na{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new W0,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hm(this),this._firestoreClient.terminate()}}function K0(t,e){const n=typeof t=="object"?t:df(),s=typeof t=="string"?t:e||"(default)",r=ol(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=T_("firestore");i&&z0(r,...i)}return r}function ci(t){return t._firestoreClient||Hm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Hm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new bE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new D0(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class H0{constructor(e="count",n){this._aggregateType=e,this._internalFieldPath=n,this.type="AggregateField"}}class G0{constructor(e,n,s){this._userDataWriter=n,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertValue(this._data.value)}}/**
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
 */class xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xs(tt.fromBase64String(e))}catch(n){throw new A(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xs(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ra{constructor(e){this._methodName=e}}/**
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
 */class lu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const Q0=/^__.*__$/;class Y0{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new kn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ri(e,this.data,n,this.fieldTransforms)}}class Gm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new kn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Qm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class uu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new uu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return go(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Qm(this.ra)&&Q0.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class X0{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Xo(e)}wa(e,n,s,r=!1){return new uu({ra:e,methodName:n,_a:s,path:Ye.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function ia(t){const e=t._freezeSettings(),n=Xo(t._databaseId);return new X0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function J0(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);du("Data must be an object, but it was:",o,s);const a=Xm(s,o);let c,l;if(i.merge)c=new ft(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=qc(e,h,n);if(!o.contains(f))throw new A(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Zm(u,f)||u.push(f)}c=new ft(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Y0(new ot(a),c,l)}class oa extends ra{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oa}}class hu extends ra{_toFieldTransform(e){return new qE(e.path,new Or)}isEqual(e){return e instanceof hu}}function Z0(t,e,n,s){const r=t.wa(1,e,n);du("Data must be an object, but it was:",r,s);const i=[],o=ot.empty();os(s,(c,l)=>{const u=fu(e,c,n);l=Ne(l);const h=r.ha(u);if(l instanceof oa)i.push(u);else{const f=li(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new ft(i);return new Gm(o,a,r.fieldTransforms)}function eR(t,e,n,s,r,i){const o=t.wa(1,e,n),a=[qc(e,s,n)],c=[r];if(i.length%2!=0)throw new A(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(qc(e,i[f])),c.push(i[f+1]);const l=[],u=ot.empty();for(let f=a.length-1;f>=0;--f)if(!Zm(l,a[f])){const m=a[f];let p=c[f];p=Ne(p);const w=o.ha(m);if(p instanceof oa)l.push(m);else{const T=li(p,w);T!=null&&(l.push(m),u.set(m,T))}}const h=new ft(l);return new Gm(u,h,o.fieldTransforms)}function Ym(t,e,n,s=!1){return li(n,t.wa(s?4:3,e))}function li(t,e){if(Jm(t=Ne(t)))return du("Unsupported field value:",e,t),Xm(t,e);if(t instanceof ra)return function(n,s){if(!Qm(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=li(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return BE(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ue.fromDate(n);return{timestampValue:fo(s.Tt,r)}}if(n instanceof Ue){const r=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fo(s.Tt,r)}}if(n instanceof lu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xs)return{bytesValue:bm(s.Tt,n._byteString)};if(n instanceof Ze){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ta(n)}`)}(t,e)}function Xm(t,e){const n={};return Qp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(s,r)=>{const i=li(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Jm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof lu||t instanceof xs||t instanceof Ze||t instanceof ra)}function du(t,e,n){if(!Jm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ta(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function qc(t,e,n){if((e=Ne(e))instanceof sa)return e._internalPath;if(typeof e=="string")return fu(t,e);throw go("Field path arguments must be of type string or ",t,!1,void 0,n)}const tR=new RegExp("[~\\*/\\[\\]]");function fu(t,e,n){if(e.search(tR)>=0)throw go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sa(...e.split("."))._internalPath}catch{throw go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function go(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new A(b.INVALID_ARGUMENT,a+t+c)}function Zm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class pu{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nR extends pu{data(){return super.data()}}function mu(t,e){return typeof e=="string"?fu(t,e):e instanceof sa?e._internalPath:e._delegate._internalPath}/**
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
 */function eg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gu{}class ui extends gu{}function mr(t,e,...n){let s=[];e instanceof gu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof vu).length,o=r.filter(a=>a instanceof yu).length;if(i>1||i>0&&o>0)throw new A(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class yu extends ui{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new yu(e,n,s)}_apply(e){const n=this._parse(e);return ng(e._query,n),new Nt(e.firestore,e.converter,Pc(e._query,n))}_parse(e){const n=ia(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new A(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){gd(u,l);const f=[];for(const m of u)f.push(md(a,r,m));h={arrayValue:{values:f}}}else h=md(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||gd(u,l),h=Ym(o,i,u,l==="in"||l==="not-in");return Oe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class vu extends gu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:At.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)ng(i,a),i=Pc(i,a)}(e._query,n),new Nt(e.firestore,e.converter,Pc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _u extends ui{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _u(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new vs(r,i);return function(a,c){if(Wl(a)===null){const l=Wo(a);l!==null&&sg(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Nn(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function gr(t,e="asc"){const n=e,s=mu("orderBy",t);return _u._create(s,n)}class wu extends ui{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new wu(e,n,s)}_apply(e){return new Nt(e.firestore,e.converter,uo(e._query,this._limit,this._limitType))}}function pd(t){return q0("limit",t),wu._create("limit",t,"F")}class Su extends ui{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new Su(e,n,s)}_apply(e){const n=tg(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(s,r){return new Nn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function sR(...t){return Su._create("startAfter",t,!1)}class bu extends ui{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new bu(e,n,s)}_apply(e){const n=tg(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(s,r){return new Nn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function rR(...t){return bu._create("endBefore",t,!1)}function tg(t,e,n,s){if(n[0]=Ne(n[0]),n[0]instanceof pu)return function(r,i,o,a,c){if(!a)throw new A(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Kn(r))if(u.field.isKeyField())l.push(lo(i,a.key));else{const h=a.data.field(u.field);if(Fl(h))throw new A(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new A(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(h)}return new As(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=ia(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new A(b.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let m=0;m<l.length;m++){const p=l[m];if(h[m].field.isKeyField()){if(typeof p!="string")throw new A(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!Kl(i)&&p.indexOf("/")!==-1)throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const w=i.path.child(ve.fromString(p));if(!V.isDocumentKey(w))throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const T=new V(w);f.push(lo(o,T))}else{const w=Ym(a,c,p);f.push(w)}}return new As(f,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function md(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new A(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kl(e)&&n.indexOf("/")!==-1)throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ve.fromString(n));if(!V.isDocumentKey(s))throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return lo(t,new V(s))}if(n instanceof Ze)return lo(t,n._key);throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ta(n)}.`)}function gd(t,e){if(!Array.isArray(t)||t.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ng(t,e){if(e.isInequality()){const s=Wo(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new A(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Wl(t);i!==null&&sg(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function sg(t,e,n){if(!n.isEqual(e))throw new A(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class iR{convertValue(e,n="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return os(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new lu(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Yp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const n=Tn(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ve.fromString(e);ge(Am(s));const r=new xr(s.get(1),s.get(3)),i=new V(s.popFirst(5));return r.isEqual(n)||tn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function oR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function aR(){return new H0("count")}/**
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
 */class cr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rg extends pu{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(mu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class qi extends rg{data(e={}){return super.data(e)}}class ig{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new cr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new qi(this._firestore,this._userDataWriter,s.key,s,new cr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new qi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new qi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:cR(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function aa(t){t=pt(t,Ze);const e=pt(t.firestore,Rn);return B0(ci(e),t._key).then(n=>ag(e,t,n))}class ca extends iR{constructor(e){super(),this.firestore=e}convertBytes(e){return new xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function Tu(t){t=pt(t,Nt);const e=pt(t.firestore,Rn),n=ci(e),s=new ca(e);return eg(t._query),F0(n,t._query).then(r=>new ig(e,s,t,r))}function zc(t,e,n){t=pt(t,Ze);const s=pt(t.firestore,Rn),r=oR(t.converter,e,n);return og(s,[J0(ia(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Pt.none())])}function lR(t,e,n,...s){t=pt(t,Ze);const r=pt(t.firestore,Rn),i=ia(r);let o;return o=typeof(e=Ne(e))=="string"||e instanceof sa?eR(i,"updateDoc",t._key,e,n,s):Z0(i,"updateDoc",t._key,e),og(r,[o.toMutation(t._key,Pt.exists(!0))])}function uR(t,...e){var n,s,r;t=Ne(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||fd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(fd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Ze)l=pt(t.firestore,Rn),u=zo(t._key.path),c={next:h=>{e[o]&&e[o](ag(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=pt(t,Nt);l=pt(h.firestore,Rn),u=h._query;const f=new ca(l);c={next:m=>{e[o]&&e[o](new ig(l,f,h,m))},error:e[o+1],complete:e[o+2]},eg(t._query)}return function(h,f,m,p){const w=new cu(p),T=new ou(f,w,m);return h.asyncQueue.enqueueAndForget(async()=>su(await mo(h),T)),()=>{w.Pc(),h.asyncQueue.enqueueAndForget(async()=>ru(await mo(h),T))}}(ci(l),u,a,c)}function og(t,e){return function(n,s){const r=new Mt;return n.asyncQueue.enqueueAndForget(async()=>b0(await V0(n),s,r)),r.promise}(ci(t),e)}function ag(t,e,n){const s=n.docs.get(e._key),r=new ca(t);return new rg(t,r,e._key,s,new cr(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function Eu(t){return hR(t,{count:aR()})}function hR(t,e){const n=pt(t.firestore,Rn),s=ci(n),r=function(i,o){const a=[];for(const c in i)Object.prototype.hasOwnProperty.call(i,c)&&a.push(o(i[c],c,i));return a}(e,(i,o)=>new SE(new Bl(o),i._aggregateType,i._internalFieldPath));return function(i,o,a){const c=new Mt;return i.asyncQueue.enqueueAndForget(async()=>{try{if(xn(await U0(i))){const l=await $0(i);c.resolve(JI(l,o,a))}else c.reject(new A(b.UNAVAILABLE,"Failed to get aggregate result because the client is offline."))}catch(l){c.reject(l)}}),c.promise}(s,t._query,r).then(i=>function(o,a,c){const l=new ca(o);return new G0(a,l,c)}(n,t,i))}function cg(){return new hu("serverTimestamp")}(function(t,e=!0){(function(n){qs=n})(jr),Ss(new Gn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Rn(new cE(n.getProvider("auth-internal")),new dE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),wn(Uh,"3.8.4",t),wn(Uh,"3.8.4","esm2017")})();const{VITE_API_KEY:dR,VITE_AUTH_DOMAIN:fR,VITE_PROJECT_ID:pR,VITE_MESSAGE_SENDER_ID:mR,VITE_STORAGE_BUCKET:gR,VITE_APP_ID:yR}={VITE_API_KEY:"AIzaSyD9xKYChzMoHnq4ba4WYo_qx25dMrAL90Q",VITE_AUTH_DOMAIN:"lossom-214c3.firebaseapp.com",VITE_PROJECT_ID:"lossom-214c3",VITE_STORAGE_BUCKET:"lossom-214c3.appspot.com",VITE_MESSAGE_SENDER_ID:"483685773935",VITE_APP_ID:"1:483685773935:web:02aab7999f1df1b4bc139a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},vR={apiKey:dR,authDomain:fR,projectId:pR,storageBucket:gR,messagingSenderId:mR,appId:yR},lg=hf(vR),hi=tT(lg),mt=K0(lg),yd=new Gt,Iu=async t=>{let e=[];return(await Tu(es(mt,t))).forEach(s=>{e.push(s.data())}),e};function Ru(){const[t,e]=y.useState(!1),[n,s]=y.useState(null),r=y.useCallback(async()=>{e(!0);try{return await FS(hi)}catch(i){s(i)}finally{e(!1)}},[]);return y.useMemo(()=>({isLoading:t,error:n,signOut:r}),[t,n,r])}function _R(t){const[e,n]=y.useState(!1),[s,r]=y.useState(null),[i,o]=y.useState(null),a=y.useCallback(async c=>{n(!0);try{if(c){const l=In(mt,t,c),u=await aa(l);if(u.exists()){let h={id:u.id,...u.data()};o(h)}}else{const l=es(mt,t),{docs:u}=await Tu(l),h=u.map(f=>({id:f.id,...f.data()}));o(h)}}catch(l){r(l)}finally{n(!1)}},[t]);return y.useMemo(()=>({isLoading:e,error:s,data:i,readData:a}),[a,s,e,i])}function ug(t="users"){const[e,n]=y.useState(!1),[s,r]=y.useState(null),i=y.useCallback(async(o,a={})=>{const c=In(mt,t,o.uid),l=In(es(mt,t,o.uid,"flowerList"));n(!0);try{if((await aa(c)).exists())throw new ReferenceError("이미 Firestore에 가입 등록된 사용자입니다.");{const h=cg(),{email:f,displayName:m,uid:p}=o;await zc(c,{createAt:h,uid:p,displayName:m,email:f,userNickname:"",url:"",isMade:!1,bgSrc:"",...a}),await zc(l,{nickname:"6lossom",contents:"환영합니다.",flowerSrc:"cherry-blossom1",createAt:h})}}catch(u){r(u)}finally{n(!1)}},[t]);return y.useMemo(()=>({isLoading:e,error:s,createAuthUser:i}),[i,s,e])}const wR="_loginButton_mv69o_7",SR={loginButton:wR},vd=({text:t,className:e,onClick:n})=>d.jsx("button",{type:"button",className:_t(SR.loginButton,e),onClick:n,children:t}),bR="_ProjectInfoBackground_1c3wq_7",TR="_ProjectInfoContainer_1c3wq_29",ER="_projectInfoClose_1c3wq_40",Qa={ProjectInfoBackground:bR,ProjectInfoContainer:TR,projectInfoClose:ER},IR="_A11yHidden_1urfp_1",RR="_focusable_1urfp_18",_d={A11yHidden:IR,focusable:RR},yt=y.forwardRef(function({as:e="span",focusable:n=!1,className:s="",...r},i){const o=`${_d.A11yHidden} ${n?_d.focusable:""} ${s}`.trim();return d.jsx(e,{ref:i,className:o,...r})}),hg=({handleModal:t})=>d.jsx(d.Fragment,{children:d.jsx("div",{role:"alertdialog","aria-modal":"true",className:Qa.ProjectInfoBackground,children:d.jsxs("figure",{className:Qa.ProjectInfoContainer,children:[d.jsx(yt,{as:"figcaption",children:"벚꽃이 지면은 어떤 서비스 인가요? 벚꽃이 지면은 벚꽃 개화시기에 맞춰 메세지를 볼 수 있는 롤링페이퍼 서비스입니다. 벚꽃이 지면을 통해 전하지 못한 마음을 전해보세요! 롤링페이퍼란 무엇인가요? 특정 사람에 대해 어떤 주제를 중심으로 주변 사람들이 의견을 적어 놓은 것을 말해요! 이용 방법은 어떻게 되나요? 첫 번째로, 내 벚꽃나무를 만들고 SNS에 링크를 공유해요. 두 번째로, 친구들이 내 벚꽃나무에 벚꽃을 달아줄 수 있어요. 세 번째로, 벚꽃 안에는 친구가 보내준 메세지가 들어있어요. 마지막으로, 모든 편지들은 벚꽃이 질 때 오픈 가능해요! 벚꽃이 지면은 누가 만들었나요? 벚꽃이 지면은 멋쟁이 사자처럼 프론트 엔드 스쿨 4기 수강생 네 명이 함께 만든 서비스입니다!"}),d.jsx("button",{className:Qa.projectInfoClose,type:"button","aria-label":"닫기",onClick:t,children:"close"})]})})}),CR="_clickMe_9l6uf_7",AR="_clickMeText_9l6uf_37",wd={clickMe:CR,clickMeText:AR},NR=({handleModal:t})=>d.jsx(d.Fragment,{children:d.jsx("button",{onClick:t,className:wd.clickMe,type:"button","aria-label":"프로젝트 설명서",children:d.jsx("span",{className:wd.clickMeText,children:"click me!"})})}),kR=()=>{const[t,e]=y.useState(!1),n=sn(),{signOut:s}=Ru(),{createAuthUser:r,isLoading:i,error:o}=ug("users"),{readData:a,data:c}=_R("users"),l=()=>{e(!t)};window.onload=()=>{s(),localStorage.clear()};const u=async()=>{const{user:h}=await hb(hi,yd),{uid:f}=h;localStorage.setItem("uid",JSON.stringify(f)),await r(h),await a(f),n("/make-tree")};return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:lt.homeContainer,children:[d.jsxs("div",{className:lt.homeLogo,children:[d.jsxs("div",{className:lt.homeMainTitle,children:[d.jsx("figure",{className:lt.moonLogo,children:d.jsx(yt,{as:"figcaption",children:"초승달과 벚꽃이 함께있는 모양의 아이콘입니다."})}),d.jsxs("h1",{className:lt.homeTitleInfo,children:[d.jsx("span",{"aria-hidden":!0,className:lt.homeTitleShadow,children:"벚꽃이 지면"}),d.jsx("span",{"aria-hidden":!0,className:lt.homeTitleBorder,children:"벚꽃이 지면"}),d.jsx("span",{className:lt.homeTitle,children:"벚꽃이 지면"})]})]}),d.jsx("h2",{className:lt.homeSubTitle,children:"벚꽃이 지면 당신의 메세지가 전달됩니다."})]}),d.jsxs("div",{className:lt.tree,children:[d.jsx("figure",{className:lt.blossomTree,children:d.jsx(yt,{as:"figcaption",children:"벚꽃이지면 프로젝트의 메인 벚꽃나무 이미지입니다."})}),d.jsx(NR,{handleModal:l})]}),d.jsxs("div",{className:lt.loginButtonList,children:[d.jsx(vd,{className:lt.generalButton,onClick:()=>n("/signin"),text:"로그인"}),d.jsx(vd,{className:lt.googleButton,provider:yd,onClick:u,text:"구글 계정으로 계속하기"})]})]}),t?d.jsx(hg,{handleModal:l}):null]})},xR="_makeTreeContainer_q2cfo_7",LR="_header_q2cfo_25",DR="_headerTitle_q2cfo_41",OR="_userNickname_q2cfo_54",MR="_headerSubTitle_q2cfo_82",PR="_originTreeContainer_q2cfo_93",UR="_makeTreeCustomContainer_q2cfo_98",VR="_makeTreeCustom_q2cfo_98",kt={makeTreeContainer:xR,header:LR,headerTitle:DR,userNickname:OR,headerSubTitle:MR,originTreeContainer:PR,makeTreeCustomContainer:UR,makeTreeCustom:VR};function $R(t){const[e,n]=y.useState(!1),[s,r]=y.useState(null),i=y.useCallback(async(o,a)=>{const c=In(mt,t,o);n(!0);try{await lR(c,a)}catch(l){r(l)}finally{n(!1)}},[t]);return y.useMemo(()=>({isLoading:e,error:s,updateData:i}),[s,e,i])}const BR="_subTitle_1gymj_7",FR={subTitle:BR},jR="/assets/message.png",yo=({className:t="",subText:e})=>d.jsxs("div",{className:_t(FR.subTitle,t),children:[e.includes("벚꽃나무")?null:d.jsx("img",{src:jR,alt:""}),d.jsx("h3",{children:e})]}),qR="_backgroundCustomList_1tyn3_7",zR={backgroundCustomList:qR},WR="_backgroundCustomItem_1ogdc_7",KR="_backgroundCustomButton_1ogdc_13",HR="_backgroundCustomSelectText_1ogdc_34",Ya={backgroundCustomItem:WR,backgroundCustomButton:KR,backgroundCustomSelectText:HR},GR=({keyId:t,item:e,handleSelect:n})=>{const{id:s,smallSrc:r,alt:i}=e;return d.jsx("li",{className:Ya.backgroundCustomItem,children:d.jsxs("button",{onClick:n,className:Ya.backgroundCustomButton,type:"button",id:s,children:[d.jsx("img",{src:r,alt:i}),d.jsx("span",{className:Ya.backgroundCustomSelectText,children:"SELECT"})]})},t)},QR=()=>{const{backgroundImageList:t,handleSelect:e}=y.useContext(pg);return d.jsx("ul",{className:zR.backgroundCustomList,children:t.map(n=>d.jsx(GR,{item:n,handleSelect:e},n.id))})},YR="_ShortButtonList_vepa0_7",XR={ShortButtonList:YR},JR="_shortButton_1ut7v_7",ZR="_buttonImage_1ut7v_33",Xa={shortButton:JR,buttonImage:ZR},eC="/assets/github-logo.png";function yr({type:t,onClick:e,text:n,className:s}){return d.jsxs("button",{type:t||"button",onClick:e||null,className:s?_t(s,Xa.shortButton):Xa.shortButton,children:[n==="Github"?d.jsx("img",{className:Xa.buttonImage,src:eC}):null,n]})}const dg=({firstText:t,firstClick:e,secondText:n,secondClick:s,type:r})=>d.jsxs("div",{className:XR.ShortButtonList,children:[d.jsx(yr,{onClick:e,text:t}),d.jsx(yr,{onClick:s||null,text:n,type:r})]}),tC="_blossomTree_dr75f_7",nC={blossomTree:tC},fg=()=>d.jsx("div",{className:nC.blossomTree}),sC="/assets/select-bg-pink.png",rC="/assets/select-bg-night.png",iC="/assets/select-bg-sky.png",Sd=[{id:1,bigSrc:"bg-sky",smallSrc:iC,alt:"구름 많고 화창한 하늘 배경 선택하기"},{id:2,bigSrc:"bg-night",smallSrc:rC,alt:"별 가득한 노을밤 배경 선택하기"},{id:3,bigSrc:"bg-pink",smallSrc:sC,alt:"구름 많고 핑크로 물든 배경 선택하기"}],pg=y.createContext(),oC=()=>{const[t,e]=y.useState(""),[n,s]=y.useState("bg-pink"),r=sn(),{updateData:i}=$R("users"),o=JSON.parse(localStorage.getItem("uid"));y.useLayoutEffect(()=>{Iu("users").then(h=>{h.map(f=>{f.uid===o&&f.isMade&&r(`/share-tree/${o}`)})})},[]);const a=h=>{const f=document.querySelector(".MakeTreePage"),m=h.target.closest("button");Sd.map(p=>{if(parseInt(m.id)===p.id){f.style=`background: center / cover no-repeat url(/assets/${p.bigSrc}.png)`,s(p.bigSrc);return}})},c=()=>{i(o,{bgSrc:n,isMade:!0,userNickname:t}),r(`/share-tree/${o}`,{replace:!0}),history.pushState(null,null,location.href),window.onpopstate=function(h){history.go(1)}},l=h=>{e(h.target.value)},u={backgroundImageList:Sd,setSelectBg:s,handleSelect:a};return d.jsxs(pg.Provider,{value:u,children:[d.jsx(yt,{as:"h1",children:"벚꽃이지면"}),d.jsxs("form",{onSubmit:c,className:_t("MakeTreePage",kt.makeTreeContainer),children:[d.jsxs("header",{className:kt.header,children:[d.jsxs("h2",{className:kt.headerTitle,children:[d.jsx(yt,{as:"label",focusable:!0,htmlFor:"userNickname",children:"닉네임"}),d.jsx("input",{type:"text",id:"userNickname",name:"userNickname",value:t,maxLength:6,placeholder:"닉네임",onChange:l,className:kt.userNickname,required:!0}),d.jsx("span",{children:"님의 벚꽃나무"})]}),d.jsx(yo,{className:kt.headerSubTitle,subText:"벚꽃나무에 이름을 적어주세요"})]}),d.jsx("div",{className:kt.originTreeContainer,children:d.jsx(fg,{className:kt.originTree})}),d.jsx("div",{className:kt.makeTreeCustomContainer,children:d.jsxs("div",{className:kt.makeTreeCustom,children:[d.jsx(yo,{className:kt.makeTreeCustomText,subText:"벚꽃나무의 하늘을 선택해주세요."}),d.jsx(QR,{}),d.jsx(dg,{firstText:"취소",firstClick:()=>{window.location.replace("/")},secondText:"완료",type:"submit"})]})})]})]})},aC="_signUpPageWrapper_1hyxb_7",cC="_toSignInPage_1hyxb_25",lC="_signUpPageContainer_1hyxb_44",uC="_signUpPageTitle_1hyxb_50",hC="_toSignInPageWithDescription_1hyxb_71",dC="_toSignInPageLink_1hyxb_75",fC="_form_1hyxb_78",pC="_signUpButton_1hyxb_86",mC="_resetButton_1hyxb_116",gC="_validatePassed_1hyxb_146",yC="_notificationStyling_1hyxb_150",vC="_animateNotification_1hyxb_160",_C="_fadeInAndOut_1hyxb_1",pe={signUpPageWrapper:aC,toSignInPage:cC,signUpPageContainer:lC,signUpPageTitle:uC,toSignInPageWithDescription:hC,toSignInPageLink:dC,form:fC,signUpButton:pC,resetButton:mC,validatePassed:gC,notificationStyling:yC,animateNotification:vC,fadeInAndOut:_C};function wC(t=!1){const[e,n]=y.useState(!1),[s,r]=y.useState(null),[i,o]=y.useState(null),a=y.useCallback(async(c,l,u)=>{n(!0);try{const h=await DS(hi,c,l),{user:f}=h;return u&&f&&await US(f,{displayName:u}),t&&f&&await MS(f),o(f),f}catch(h){r(h)}finally{n(!1)}},[t]);return y.useMemo(()=>({isLoading:e,error:s,user:i,signUp:a}),[e,s,i,a])}function mg(){const[t,e]=y.useState(!1),[n,s]=y.useState(null),[r,i]=y.useState(null);return y.useEffect(()=>(e(!0),BS(hi,o=>{i(o),e(!1)},o=>{s(o),e(!1)})),[]),y.useMemo(()=>({isLoading:t,error:n,user:r}),[t,n,r])}const SC="_FormInput_7upog_7",bC="_FormInputInline_7upog_14",TC="_FormInputVertical_7upog_17",EC="_label_7upog_20",IC="_inputed_7upog_20",RC="_input_7upog_20",CC="_validate_7upog_67",AC="_passwordVisible_7upog_77",NC="_passwordInvisible_7upog_89",Ct={FormInput:SC,FormInputInline:bC,FormInputVertical:TC,label:EC,inputed:IC,input:RC,validate:CC,passwordVisible:AC,passwordInvisible:NC};var Vn={},kC={get exports(){return Vn},set exports(t){Vn=t}},xC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",LC=xC,DC=LC;function gg(){}function yg(){}yg.resetWarningCache=gg;var OC=function(){function t(s,r,i,o,a,c){if(c!==DC){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:yg,resetWarningCache:gg};return n.PropTypes=n,n};kC.exports=OC();function gn({name:t,label:e,type:n,invisibleLabel:s,vertical:r,...i}){const[o,a]=y.useState(!1),[c,l]=y.useState(n),u=y.useRef(null),h=y.useId();y.useEffect(()=>{const p=u.current,w=p.parentElement;p.addEventListener("blur",T=>{T.target.value.length>0?w.classList.add(Ct.inputed):w.classList.remove(Ct.inputed)})},[]);const f=`${Ct.FormInput} ${r?Ct.FormInputVertical:""}`.trim(),m=()=>{const p=u.current;c==="text"?l("password"):c==="password"&&l("text"),a(w=>!w),p.focus()};return d.jsxs("div",{className:f,children:[MC(h,e,s),(t==="password"||t==="passwordConfirm")&&o||(t==="password"||t==="passwordConfirm")&&!o?d.jsx("input",{name:t,ref:u,id:h,type:c,className:Ct.input,...i}):"",t==="password"||t==="passwordConfirm"?"":d.jsx("input",{name:t,ref:u,id:h,type:n,className:Ct.input,...i}),t==="name"||t==="email"||t==="password"||t==="passwordConfirm"?d.jsx("figure",{className:Ct.validate}):"",t==="password"&&o||t==="passwordConfirm"&&o?d.jsx("button",{type:"button",className:Ct.passwordVisible,onClick:m,"aria-label":"비밀번호 숨기기"}):"",t==="password"&&!o||t==="passwordConfirm"&&!o?d.jsx("button",{type:"button",className:Ct.passwordInvisible,onClick:m,"aria-label":"비밀번호 보기"}):""]})}gn.defualtProps={type:"text",invisibleLabel:!1,vertical:!1,inputed:!1};gn.propTypes={type:Vn.string,label:Vn.string.isRequired,invisibleLabel:Vn.bool,vertical:Vn.bool,inputed:Vn.bool};function MC(t,e,n){return n?d.jsx(yt,{as:"label",htmlFor:t,className:Ct.label,children:e}):d.jsx("label",{htmlFor:t,className:Ct.label,children:e})}const Jt=({className:t,text:e,notificationRef:n,notificationRole:s,notificationAriaLive:r})=>d.jsx("span",{role:s,ref:n,className:t,"aria-live":r,children:e}),PC={name:"",email:"",password:"",passwordConfirm:""};function UC(){const[t,e]=y.useState(!1),[n,s]=y.useState(!1),[r,i]=y.useState(!1),[o,a]=y.useState(!1),[c,l]=y.useState("off"),[u,h]=y.useState(),f=y.useRef(PC),m=y.useRef([]),p=sn(),{isLoading:w,signUp:T}=wC(),{createAuthUser:x}=ug(),{isLoading:S,error:D,user:F}=mg();if(S)return d.jsx("div",{role:"alert",children:"페이지를 준비 중입니다."});if(D)return d.jsxs("div",{role:"alert",children:["오류! ",D.message]});F&&(localStorage.setItem("uid",JSON.stringify(F.uid)),p("/make-tree"));const K=async $=>{$.preventDefault(),await e(!0);const ae=m.current[0],{name:P,email:q,password:Re,passwordConfirm:St}=f.current;if(!P||P.trim().length<2||P.trim().length>8){ae.classList.add(pe.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{ae.classList.remove(pe.animateNotification),h(),l("off"),e(!1)},2e3);return}e(!1),await s(!0);const Ce=m.current[1];if(!q||!q.includes("@")||q.substring(0,q.indexOf("@"))===""||q.substring(q.indexOf("@")+1)===""||!q.substring(q.indexOf("@")+1).includes(".")||q.substring(0,q.indexOf("."))===""||q.substring(q.indexOf(".")+1)===""||q.substring(q.indexOf(".")-1,q.indexOf("."))==="@"){Ce.classList.add(pe.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{Ce.classList.remove(pe.animateNotification),h(),l("off"),s(!1)},2e3);return}s(!1),await i(!0);const Ae=m.current[2];if(!Re||Re.trim().length<6){Ae.classList.add(pe.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{Ae.classList.remove(pe.animateNotification),h(),l("off"),i(!1)},2e3);return}if(!Object.is(Re,St)){Ae.classList.add(pe.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{Ae.classList.remove(pe.animateNotification),h(),l("off"),i(!1)},2e3);return}i(!1),await a(!0);const bt=m.current[3],Tt=await T(q,Re,P);Tt||(bt.classList.add(pe.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{bt.classList.remove(pe.animateNotification),h(),l("off"),a(!1)},2e3)),await x(Tt)},J=$=>{const{name:ae,value:P}=$.target;f.current[ae]=P,ae==="name"&&P.trim().length>1&&P.trim().length<9?$.target.nextSibling.classList.add(pe.validatePassed):ae==="name"&&(!P||P.trim().length<2||P.trim().length>8)&&$.target.nextSibling.classList.remove(pe.validatePassed),ae==="email"&&P.includes("@")&&P.substring(0,P.indexOf("@"))!==""&&P.substring(P.indexOf("@")+1)!==""&&P.substring(P.indexOf("@")+1).includes(".")&&P.substring(0,P.indexOf("."))!==""&&P.substring(P.indexOf(".")+1)!==""&&P.substring(P.indexOf(".")-1,P.indexOf("."))!=="@"?$.target.nextSibling.classList.add(pe.validatePassed):ae==="email"&&(!P.includes("@")||P.substring(0,P.indexOf("@"))===""||P.substring(P.indexOf("@")+1)===""||!P.substring(P.indexOf("@")+1).includes(".")||P.substring(0,P.indexOf("."))===""||P.substring(P.indexOf(".")+1)===""||P.substring(P.indexOf(".")-1,P.indexOf("."))==="@")&&$.target.nextSibling.classList.remove(pe.validatePassed),(ae==="password"||ae==="passwordConfirm")&&P.trim().length>5?$.target.nextSibling.classList.add(pe.validatePassed):(ae==="password"||ae==="passwordConfirm")&&(!P||P.trim().length<6)&&$.target.nextSibling.classList.remove(pe.validatePassed)};return d.jsxs(d.Fragment,{children:[d.jsx(yt,{as:"h1",children:"벚꽃이지면"}),d.jsx("div",{className:pe.signUpPageWrapper,children:d.jsxs("div",{className:pe.signUpPageContainer,children:[d.jsx("h2",{className:pe.signUpPageTitle,children:"회원가입"}),d.jsxs("form",{className:pe.form,onSubmit:K,children:[t?d.jsx(Jt,{className:pe.notificationStyling,text:"이름을 확인해주세요 !",notificationRef:$=>m.current[0]=$,notificationRole:u,notificationAriaLive:c}):"",n?d.jsx(Jt,{className:pe.notificationStyling,text:"이메일 확인해주세요 !",notificationRef:$=>m.current[1]=$,notificationRole:u,notificationAriaLive:c}):"",r?d.jsx(Jt,{className:pe.notificationStyling,text:"비밀번호를 확인해주세요 !",notificationRef:$=>m.current[2]=$,notificationRole:u,notificationAriaLive:c}):"",o?d.jsx(Jt,{className:pe.notificationStyling,text:"이미 가입된 회원정보입니다 !",notificationRef:$=>m.current[3]=$,notificationRole:u,notificationAriaLive:c}):"",d.jsx(gn,{name:"name",label:"이름",onChange:J}),d.jsx(gn,{name:"email",type:"email",label:"이메일",onChange:J}),d.jsx(gn,{name:"password",type:"password",label:"비밀번호",onChange:J}),d.jsx(gn,{name:"passwordConfirm",type:"password",label:"비밀번호 확인",onChange:J}),d.jsx("button",{type:"submit",disabled:w,className:pe.signUpButton,"aria-label":"회원가입하기",children:w?"회원가입 중...":"회원가입"}),d.jsx("button",{type:"reset",className:pe.resetButton,"aria-label":"작성 내용 초기화하기",children:"초기화"})]}),d.jsxs("p",{className:pe.toSignInPageWithDescription,"aria-hidden":"true",children:["이미 가입한 사용자라면"," ",d.jsx(nf,{to:"/signin",className:pe.toSignInPageLink,tabIndex:-1,children:"로그인"}),"을 해주세요 !"]}),d.jsx("button",{type:"button",onClick:()=>p("/signin"),className:pe.toSignInPage,"aria-label":"이전 페이지로 이동",children:"<"})]})})]})}const VC="_signInPageWrapper_64g07_7",$C="_toHomePage_64g07_25",BC="_signInPageContainer_64g07_44",FC="_signInPageTitle_64g07_50",jC="_toSignUpPage_64g07_66",qC="_toSignUpPageWithDescription_64g07_96",zC="_toSignUpPageLink_64g07_100",WC="_form_64g07_103",KC="_signInButton_64g07_111",HC="_validatePassed_64g07_142",GC="_notificationStyling_64g07_146",QC="_animateNotification_64g07_156",YC="_fadeInAndOut_64g07_1",He={signInPageWrapper:VC,toHomePage:$C,signInPageContainer:BC,signInPageTitle:FC,toSignUpPage:jC,toSignUpPageWithDescription:qC,toSignUpPageLink:zC,form:WC,signInButton:KC,validatePassed:HC,notificationStyling:GC,animateNotification:QC,fadeInAndOut:YC};function XC(){const[t,e]=y.useState(!1),[n,s]=y.useState(null),[r,i]=y.useState(null),o=y.useCallback(async(a,c)=>{e(!0);try{const l=await OS(hi,a,c);i(l)}catch(l){s(l)}finally{e(!1)}},[]);return y.useMemo(()=>({isLoading:t,error:n,user:r,signIn:o}),[t,n,r,o])}const JC={email:"",password:""};function ZC(){const[t,e]=y.useState(!1),[n,s]=y.useState("off"),[r,i]=y.useState(),o=y.useRef(JC),a=y.useRef(),c=sn(),{isLoading:l,signIn:u}=XC(),{isLoading:h,error:f,user:m}=mg(),p=async T=>{T.preventDefault(),await e(!0);const{email:x,password:S}=o.current,D=a.current;await u(x,S),m||(D.classList.add(He.animateNotification),i("alert"),s("assertive"),setTimeout(()=>{D.classList.remove(He.animateNotification),i(),s("off"),e(!1)},2e3))},w=T=>{const{name:x,value:S}=T.target;o.current[x]=S,x==="email"&&S.includes("@")&&S.substring(0,S.indexOf("@"))!==""&&S.substring(S.indexOf("@")+1)!==""&&S.substring(S.indexOf("@")+1).includes(".")&&S.substring(0,S.indexOf("."))!==""&&S.substring(S.indexOf(".")+1)!==""&&S.substring(S.indexOf(".")-1,S.indexOf("."))!=="@"?T.target.nextSibling.classList.add(He.validatePassed):x==="email"&&(!S.includes("@")||S.substring(0,S.indexOf("@"))===""||S.substring(S.indexOf("@")+1)===""||!S.substring(S.indexOf("@")+1).includes(".")||S.substring(0,S.indexOf("."))===""||S.substring(S.indexOf(".")+1)===""||S.substring(S.indexOf(".")-1,S.indexOf("."))==="@")&&T.target.nextSibling.classList.remove(He.validatePassed),x==="password"&&S.trim().length>5?T.target.nextSibling.classList.add(He.validatePassed):x==="password"&&(!S||S.trim().length<6)&&T.target.nextSibling.classList.remove(He.validatePassed)};return h?d.jsx("div",{role:"alert",children:"페이지를 준비 중입니다."}):f?d.jsxs("div",{role:"alert",children:["오류! ",f.message]}):(m&&(localStorage.setItem("uid",JSON.stringify(m.uid)),c("/make-tree")),d.jsxs(d.Fragment,{children:[d.jsx(yt,{as:"h1",children:"벚꽃이지면"}),d.jsx("div",{className:He.signInPageWrapper,children:d.jsxs("div",{className:He.signInPageContainer,children:[d.jsx("h2",{className:He.signInPageTitle,children:"로그인"}),d.jsxs("form",{className:He.form,onSubmit:p,children:[t?d.jsx(Jt,{className:He.notificationStyling,text:"이메일 또는 비밀번호를 확인해주세요 !",notificationRef:a,notificationRole:r,notificationAriaLive:n}):"",d.jsx(gn,{name:"email",type:"email",label:"이메일",onChange:w}),d.jsx(gn,{name:"password",type:"password",label:"비밀번호",onChange:w}),d.jsx("button",{type:"submit",disabled:l,className:He.signInButton,"aria-label":"로그인하기",children:l?"로그인 중...":"로그인"})]}),d.jsx("button",{type:"button",onClick:()=>c("/signup"),className:He.toSignUpPage,"aria-label":"회원가입 페이지로 이동",children:"회원가입"}),d.jsxs("p",{className:He.toSignUpPageWithDescription,"aria-hidden":"true",children:["가입한 계정이 없다면"," ",d.jsx(nf,{to:"/signup",className:He.toSignUpPageLink,tabIndex:-1,children:"회원가입"}),"을 해주세요 !"]}),d.jsx("button",{type:"button",onClick:()=>c("/"),className:He.toHomePage,"aria-label":"이전 페이지로 이동",children:"<"})]})})]}))}const eA="_shareTreeContainer_3c03c_7",tA="_blossomTreeContainer_3c03c_35",nA="_flowerList_3c03c_43",sA="_pagination_3c03c_49",rA="_originTreeContainer_3c03c_62",iA="_swiperButton_3c03c_66",oA="_arrowButton_3c03c_71",aA="_leftButton_3c03c_80",cA="_rightButton_3c03c_85",lA="_moveIn_3c03c_91",uA="_notificationContainer_3c03c_95",hA="_notificationStyling_3c03c_99",dA="_animateNotification_3c03c_113",fA="_fadeInAndOut_3c03c_1",Me={shareTreeContainer:eA,blossomTreeContainer:tA,flowerList:nA,pagination:sA,originTreeContainer:rA,swiperButton:iA,arrowButton:oA,leftButton:aA,rightButton:cA,moveIn:lA,notificationContainer:uA,notificationStyling:hA,animateNotification:dA,fadeInAndOut:fA},di=y.createContext(),pA=y.createContext(),mA="_header_13kte_7",gA={header:mA},yA="_headerTitle_2vnzc_7",vA={headerTitle:yA},vg=({userName:t})=>d.jsxs("h2",{className:vA.headerTitle,children:[t,d.jsx("span",{children:"님의 벚꽃나무"})]}),_g=({userName:t,className:e,subText:n})=>d.jsxs("header",{className:gA.header,children:[d.jsx(vg,{userName:t}),d.jsx(yo,{className:e,subText:n})]}),_A="_LongButtonContainer_91bfh_7",wA={LongButtonContainer:_A},SA="_longButton_ydp3u_7",bA={longButton:SA},bd=({text:t,disabled:e=!1,onClick:n})=>d.jsx(d.Fragment,{children:d.jsx("button",{type:"button",disabled:e,onClick:n,className:bA.longButton,children:t})}),Wc=({firstText:t,firstClick:e,disabled:n,secondText:s,secondClick:r})=>d.jsxs("div",{className:wA.LongButtonContainer,children:[d.jsx(bd,{text:t,disabled:n,onClick:e}),d.jsx(bd,{text:s,onClick:r})]}),TA="_hamburgerButton_m5uyz_1",EA="_hamburger_m5uyz_1",IA="_burger1_m5uyz_19",RA="_burger2_m5uyz_20",CA="_burger3_m5uyz_21",Xs={hamburgerButton:TA,hamburger:EA,burger1:IA,burger2:RA,burger3:CA};function AA({isMenuOpen:t}){return d.jsx("button",{"aria-controls":"hamburder","aria-expanded":t,className:Xs.hamburgerButton,"aria-label":"메뉴바",children:d.jsxs("div",{className:Xs.hamburger,children:[d.jsx("div",{className:Xs.burger1}),d.jsx("div",{className:Xs.burger2}),d.jsx("div",{className:Xs.burger3})]})})}const NA="_sideMenuContainer_1fq7o_8",kA="_sideMenuBackground_1fq7o_17",xA="_sideMenuBar_1fq7o_29",LA="_sideMenuTitle_1fq7o_39",DA="_sideMenuNav_1fq7o_57",OA="_shortButton_1fq7o_64",MA="_contents_1fq7o_67",PA="_importantText_1fq7o_79",it={sideMenuContainer:NA,sideMenuBackground:kA,sideMenuBar:xA,sideMenuTitle:LA,sideMenuNav:DA,shortButton:OA,contents:MA,importantText:PA};function UA({loginName:t,handleModal:e}){sn();const{signOut:n}=Ru();return d.jsxs("div",{id:"hamburger",className:it.sideMenuContainer,children:[d.jsx("div",{className:it.sideMenuBackground}),d.jsxs("div",{className:it.sideMenuBar,children:[d.jsxs("div",{children:[d.jsx("div",{className:it.sideMenuTitle,children:t?`${t}님`:"로그인"}),d.jsxs("div",{className:it.sideMenuNav,children:[d.jsx(yr,{onClick:()=>{n(),window.location.replace("/")},text:"Log Out",className:it.shortButton}),d.jsx(yr,{text:"About",onClick:e,className:it.shortButton})]})]}),d.jsxs("div",{children:[d.jsx("div",{className:it.sideMenuTitle,children:"공지사항"}),d.jsxs("div",{className:it.contents,children:[d.jsxs("span",{children:["🌸벚꽃메세지는"," ",d.jsx("span",{className:it.importantText,children:"4월 15일 00시에 공개"}),"됩니다."]}),d.jsxs("span",{children:["🌸메세지 작성기한은"," ",d.jsx("span",{className:it.importantText,children:"4월 14일 23:59 까지 "}),"입니다. 벚꽃메세지로 마음을 전달해보세요 !"]}),d.jsxs("span",{children:["🌸벚꽃메세지는"," ",d.jsxs("span",{className:it.importantText,children:["4월 15일~4월 29일까지"," "]})," ","2주간 열람 가능합니다. 소중한 메세지를 놓치지 않게 기억해주세요 !"]}),d.jsx("span",{children:"🌸오류가 발견되면 Contact me에 있는 연락처로 문의 부탁드립니다 !"})]})]}),d.jsxs("div",{children:[d.jsx("div",{className:it.sideMenuTitle,children:"Contact Us"}),d.jsx("div",{className:it.sideMenuNav,children:d.jsx(yr,{onClick:()=>location.href="https://github.com/cherry-6lossom/6lossom",text:"Github",className:it.shortButton})})]})]})]})}const VA="_messageListBackground_1tab1_7",$A="_messageListWrapper_1tab1_15",BA="_messageListContainer_1tab1_27",FA="_messageList_1tab1_7",jA="_MessageItemWrapper_1tab1_55",qA="_closeButton_1tab1_63",zA="_moveOut_1tab1_75",xt={messageListBackground:VA,messageListWrapper:$A,messageListContainer:BA,messageList:FA,MessageItemWrapper:jA,closeButton:qA,moveOut:zA},WA="_messageItemContainer_1pyp1_7",KA="_messageItem_1pyp1_7",HA="_messageIcon_1pyp1_33",GA="_messageSender_1pyp1_41",QA="_messageContentsContainer_1pyp1_59",YA="_messageContents_1pyp1_59",hs={messageItemContainer:WA,messageItem:KA,messageIcon:HA,messageSender:GA,messageContentsContainer:QA,messageContents:YA},XA=({flower:t,id:e,handleOpenMessageDetail:n})=>{const s=y.useContext(di),{nickname:r,contents:i}=t;return d.jsx("li",{className:hs.messageItemContainer,onClick:()=>n(s,t),children:d.jsxs("div",{className:hs.messageItem,children:[d.jsxs("div",{className:hs.messageSender,children:[d.jsx("figure",{className:hs.messageIcon,children:d.jsx(yt,{as:"figcaption",children:"하트가 그려진 편지를 담은 우편지 모양의 아이콘입니다."})}),r]}),d.jsx("div",{className:hs.messageContentsContainer,children:d.jsx("p",{className:hs.messageContents,children:i})})]})},e)},JA=({listBackgroundRef:t,messageListRef:e,messageDetailRef:n,handleOpenMessageDetail:s})=>{const[r,i]=y.useState([]),{uid:o}=Eo(),a=y.useContext(di),c=t.current,l=e.current;y.useLayoutEffect(()=>{Iu(`users/${o}/flowerList`).then(f=>{i(f.sort((m,p)=>m.createdAt-p.createdAt))})},[]);const u=(f,m)=>{const{messageListVisible:p,setMessageListVisible:w}=m,T=f.target;c===T&&p&&(l.classList.add(xt.moveOut),setTimeout(()=>{c.style.backgroundColor="",c.style.zIndex="",c.style.display="",w(!p),l.classList.remove(xt.moveOut)},400))},h=(f,m)=>{const{messageListVisible:p,setMessageListVisible:w}=m;p&&(l.classList.add(xt.moveOut),setTimeout(()=>{c.style.backgroundColor="",c.style.zIndex="",c.style.display="",w(!p),l.classList.remove(xt.moveOut)},400))};return d.jsx("div",{ref:t,onClick:f=>u(f,a),className:xt.messageListBackground,children:d.jsx("div",{ref:e,className:xt.messageListWrapper,children:d.jsxs("div",{className:xt.messageListContainer,children:[d.jsx("div",{className:xt.messageList,children:d.jsx("ul",{className:xt.MessageItemWrapper,children:r.map(f=>d.jsx(XA,{flower:f,handleOpenMessageDetail:s},r.indexOf(f)))})}),d.jsx("button",{type:"button",onClick:f=>h(f,a),className:xt.closeButton})]})})})},ZA="_messageDetailBackground_awz4o_7",eN="_messageDetailWrapper_awz4o_27",tN="_messageDetailContainer_awz4o_41",nN="_moonIcon_awz4o_51",sN="_messageSender_awz4o_57",rN="_messageContents_awz4o_71",iN="_closeButton_awz4o_100",oN="_downloadButtonContainer_awz4o_120",aN="_downloadButton_awz4o_120",On={messageDetailBackground:ZA,messageDetailWrapper:eN,messageDetailContainer:tN,moonIcon:nN,messageSender:sN,messageContents:rN,closeButton:iN,downloadButtonContainer:oN,downloadButton:aN},cN=({flowerInfo:t,messageDetailRef:e})=>{const n=y.useContext(di),{nickname:s,contents:r}=t,i=e.current,o=(c,l)=>{const{messageDetailVisible:u,setMessageDetailVisible:h}=l,f=c.target;i===f&&u&&(i.style.backgroundColor="",i.style.zIndex="",i.style.display="",h(!u))},a=(c,l)=>{const{messageDetailVisible:u,setMessageDetailVisible:h}=l;u&&(i.style.backgroundColor="",i.style.zIndex="",i.style.display="",h(!u))};return d.jsx("div",{ref:e,onClick:c=>o(c,n),className:On.messageDetailBackground,children:d.jsx("div",{className:On.messageDetailWrapper,children:d.jsxs("ul",{className:On.messageDetailContainer,children:[d.jsx("li",{children:d.jsx("figure",{className:On.moonIcon,children:d.jsx(yt,{as:"figcaption",children:"귀여운 보름달 캐릭터와 함께 흩날리는 벚꽃이 그려진 아이콘입니다."})})}),d.jsx("li",{className:On.messageSender,children:s}),d.jsx("li",{className:On.messageContents,children:r}),d.jsx("button",{type:"button",onClick:c=>a(c,n),className:On.closeButton,children:"OK!"})]})})})},lN="_flower_te9a3_7",uN="_flowerButton_te9a3_28",hN="_flower0_te9a3_46",dN="_flower1_te9a3_51",fN="_flower2_te9a3_56",pN="_flower3_te9a3_61",mN="_flower4_te9a3_66",gN="_flower5_te9a3_71",yN="_flower6_te9a3_76",Ht={flower:lN,flowerButton:uN,flower0:hN,flower1:dN,flower2:fN,flower3:pN,flower4:mN,flower5:gN,flower6:yN},vN=({uid:t,id:e,keyId:n,item:s,handleOpenMessageDetail:r})=>{const i=y.useContext(di),{flowerSrc:o,nickname:a}=s;JSON.parse(localStorage.getItem("uid"));const c=()=>{r(i,s)};return d.jsxs("li",{className:_t(Ht.flower,e%7===0?Ht.flower0:e%7===1?Ht.flower1:e%7===2?Ht.flower2:e%7===3?Ht.flower3:e%7===4?Ht.flower4:e%7===5?Ht.flower5:Ht.flower6),children:[d.jsx("span",{children:a}),d.jsx("button",{className:Ht.flowerButton,onClick:c,"aria-label":`${a}님의 벚꽃메세지`,children:d.jsx("img",{src:`/assets/${o}.png`,alt:"벚꽃 메세지"})})]},n)},_N="/assets/Spinner.svg",wN=()=>{const[t,e]=y.useState(!1),[n,s]=y.useState(!1),[r,i]=y.useState({}),[o,a]=y.useState(!1),[c,l]=y.useState(!1),[u,h]=y.useState(!0),[f,m]=y.useState(""),[p,w]=y.useState(""),[T,x]=y.useState(""),[S,D]=y.useState([]),[F,K]=y.useState([]),[J,$]=y.useState(null),[ae,P]=y.useState(0),[q,Re]=y.useState(!1),[St,Ce]=y.useState(!0),[Ae,bt]=y.useState(!1),[Tt,Et]=y.useState(!1),an=y.useMemo(()=>({messageListVisible:t,setMessageListVisible:e,messageDetailVisible:n,setMessageDetailVisible:s}),[t,e,n,s]),jt=y.useRef(),oe=y.useRef(),le=y.useRef(),{uid:_}=Eo(),R=sn(),C=$r(),H=es(mt,`users/${_}/flowerList`),{signOut:O}=Ru(),Z=JSON.parse(localStorage.getItem("uid")),Q=new Date;y.useLayoutEffect(()=>{ye(),Ie("next")},[]),y.useLayoutEffect(()=>{Ce(S.length!==ae),Re(!(S.length<=7))},[S.length,ae]),y.useEffect(()=>{const _e=new Date(Q.getFullYear(),3,15),xe=new Date(Q.getFullYear(),3,30),qe=Q>=_e&&Q<=xe,rt=new Date(Q.getFullYear(),2,15),zt=new Date(Q.getFullYear(),3,15),Wt=Q>=rt&&Q<=zt;return bt(qe),Et(Wt),uR(In(mt,"users",_),Kt=>{w(Kt.data().userNickname),x(Kt.data().bgSrc)}),Iu("users").then(Kt=>{Kt.map(Si=>{Si.uid===Z&&m(Si.userNickname)})}),history.pushState(null,"",C.href),window.addEventListener("popstate",B),()=>{window.removeEventListener("popstate",B)}},[]);const B=()=>{history.pushState(null,"",C.href)},ye=async()=>{const _e=await Eu(mr(H,gr("createAt","asc")));P(_e.data().count)},Ie=async(_e,xe=7)=>{let qe;if(!J)qe=mr(H,gr("createAt","asc"),pd(xe));else{let Wt=S.length%xe===0?S.length-xe:S.length-S.length%xe;qe=mr(H,gr("createAt","asc"),_e==="next"?sR(J):rR(J),pd(_e==="next"||Wt<=xe?xe:Wt))}const rt=await Tu(qe);u&&h(!1);const zt=rt.docs;he(zt,_e,xe)},he=(_e,xe,qe)=>{const rt=[];_e.forEach(Kt=>{rt.push({id:Kt.id,...Kt.data()})});const zt=xe==="next"?[...S,...rt]:rt;D(zt),K(rt.slice(-qe,void 0));let Wt=_e[_e.length-1];Wt&&$(Wt)},fe=_e=>{const xe=document.querySelector(`.${_e}`);xe.classList.add(Me.animateNotification),setTimeout(()=>{xe.classList.remove(Me.animateNotification)},4e3)},dt=()=>{a(!o)},qt=()=>{let _e=window.location.href;navigator.clipboard.writeText(_e),fe("targetCheckLinkCopyNotification")},nt=(_e,xe)=>{const qe=le.current;if(i(xe),_!==Z){fe("targetCheckOwnerNotification");return}else if(!Ae){fe("targetCheckPeriodNotification");return}n||(qe.style.backgroundColor="rgba(0, 0, 0, 0.2)",qe.style.display="block",qe.style.zIndex=102,s(!n))},st=(_e,xe)=>{const qe=jt.current,rt=oe.current;if(!Ae){fe("targetCheckPeriodNotification");return}t||(rt.classList.add(Me.moveIn),qe.style.backgroundColor="rgba(0, 0, 0, 0.2)",qe.style.display="block",qe.style.zIndex=101,e(!t),setTimeout(()=>{rt.classList.remove(Me.moveIn)},900))},wi=()=>{Tt?R(`/message-custom/${_}`):fe("targetCheckCreatableNotification")},Na=()=>{Z?window.location.replace(`/share-tree/${Z}`):(alert("로그인이 필요합니다."),O(),localStorage.clear(),R("/"))},ls=()=>{l(!c)};return d.jsxs(d.Fragment,{children:[d.jsx(di.Provider,{value:an,children:d.jsxs(pA.Provider,{value:{flowerInfo:r,setFlowerInfo:i},children:[d.jsxs("div",{style:{background:`url(/assets/${T}.png) center / cover no-repeat `},className:Me.shareTreeContainer,children:[d.jsx(yt,{as:"h1",children:"벚꽃이지면"}),d.jsx(_g,{userName:p,subText:`${ae}송이의 벚꽃이 피었어요 ! `}),d.jsx("div",{className:Me.blossomTreeContainer,children:u?d.jsx("div",{role:"alert",children:d.jsx("img",{src:_N,alt:"로딩 중"})}):d.jsxs("div",{className:Me.flowerList,"aria-live":"polite",children:[d.jsxs("div",{className:Me.originTreeContainer,children:[d.jsx(fg,{}),d.jsx("ul",{children:F.map(_e=>d.jsx(vN,{uid:_,item:_e,id:F.indexOf(_e),handleOpenMessageDetail:nt},_e.id))})]}),d.jsxs("span",{className:Me.pagination,children:[S.length,"/",ae]}),d.jsxs("div",{className:Me.swiperButton,children:[d.jsx("button",{type:"button","aria-label":"이전 버튼",className:_t(Me.arrowButton,Me.leftButton),disabled:!q,onClick:()=>Ie("prev")}),d.jsx("button",{type:"button","aria-label":"다음 버튼",className:_t(Me.arrowButton,Me.rightButton),disabled:!St,onClick:()=>Ie("next")})]})]})}),d.jsxs("div",{className:Me.notificationContainer,children:[d.jsx(Jt,{className:_t("targetCheckOwnerNotification",Me.notificationStyling),text:"나의 벚꽃나무만 확인이 가능합니다 !"}),d.jsx(Jt,{className:_t("targetCheckPeriodNotification",Me.notificationStyling),text:"아직 벚꽃 열람 시기가 아니에요 !"}),d.jsx(Jt,{className:_t("targetCheckLinkCopyNotification",Me.notificationStyling),text:"링크가 복사되었습니다 !"}),d.jsx(Jt,{className:_t("targetCheckCreatableNotification",Me.notificationStyling),text:"작성기한이 마감되었습니다 !"})]}),_===Z?d.jsx(Wc,{firstText:"링크 공유하기",firstClick:qt,secondText:"전체 메세지 보기",secondClick:_e=>st()}):d.jsx(Wc,{firstText:"벚꽃 달아주기",firstClick:wi,secondText:"내 벚꽃나무 보러가기",secondClick:Na}),d.jsx("div",{onClick:dt,children:d.jsx(AA,{isMenuOpen:o})}),o&&d.jsx(UA,{handleModal:ls,loginName:f})]}),_===Z&&Ae?d.jsxs(d.Fragment,{children:[d.jsx(JA,{flowerList:S,listBackgroundRef:jt,messageListRef:oe,handleOpenMessageDetail:nt}),d.jsx(cN,{flowerInfo:r,messageDetailRef:le})]}):null]})}),c?d.jsx(hg,{handleModal:ls}):null]})},SN="_pageSetting_1bh7v_7",bN="_header_1bh7v_29",TN="_customContainer_1bh7v_32",EN="_blossomMain_1bh7v_38",IN="_blossomImage_1bh7v_47",ds={pageSetting:SN,header:bN,customContainer:TN,blossomMain:EN,blossomImage:IN},wg=y.createContext(),RN="_blossomSelect_3wcgt_7",CN={blossomSelect:RN},AN="_blossomButton_9lbt8_7",NN="_blossomImage_9lbt8_15",Td={blossomButton:AN,blossomImage:NN},kN=({src:t,keyId:e,id:n,handleSelect:s})=>d.jsx("button",{type:"button",id:n,onClick:s,className:Td.blossomButton,"aria-label":`벚꽃모양${n+1} 선택`,children:d.jsx("img",{className:Td.blossomImage,src:`/assets/${t}.png`,alt:`벚꽃모양${n+1}`})},e);function xN(){const{blossomInfoList:t,handleSelect:e}=y.useContext(wg);return d.jsx("div",{className:CN.blossomSelect,children:t.map(n=>d.jsx(kN,{src:n.src,id:n.id,handleSelect:e},n.id))})}const Ed=[{id:0,src:"cherry-blossom1"},{id:1,src:"cherry-blossom2"},{id:2,src:"cherry-blossom3"},{id:3,src:"cherry-blossom4"}],LN=()=>{const[t,e]=y.useState(""),[n,s]=y.useState("cherry-blossom1"),[r,i]=y.useState(0),o=sn(),{uid:a}=Eo();y.useEffect(()=>{(async()=>{const h=In(mt,"users",a),f=await aa(h);e(f.data().userNickname),c()})()},[]);const c=async()=>{const h=es(mt,`users/${a}/flowerList`),f=await Eu(mr(h,gr("createAt","asc")));i(f.data().count)},l=h=>{const f=document.querySelector(".blossomImage"),m=h.target.closest("button");Ed.map(p=>{if(parseInt(m.id)===p.id){f.src=`/assets/${p.src}.png`,s(p.src);return}})},u=async()=>{o(`/write-message/${a}/${n}`)};return d.jsxs(wg.Provider,{value:{blossomInfoList:Ed,setBlossomSrc:s,handleSelect:l},children:[d.jsx(yt,{as:"h1",children:"벚꽃이지면"}),d.jsxs("div",{className:ds.pageSetting,children:[d.jsxs("div",{className:ds.customContainer,children:[d.jsx("div",{className:ds.header,children:d.jsx(_g,{userName:t,subText:"벚꽃을 골라주세요!"})}),d.jsx("div",{className:ds.blossomMain,children:d.jsx("img",{className:_t("blossomImage",ds.blossomImage),src:`/assets/${n}.png`,alt:"선택된 벚꽃 모양 이미지"})}),d.jsx(xN,{className:ds.customBlossom})]}),d.jsx("div",{children:d.jsx(dg,{firstText:"이전",firstClick:()=>o(-1),secondText:"다음",secondClick:u})})]})]})},DN="_writeMessageWrap_11v2y_7",ON="_header_11v2y_29",MN="_flower_11v2y_36",PN="_writeMessageHeader_11v2y_41",UN="_notice_11v2y_47",VN="_modalButtonContainer_11v2y_52",ki={writeMessageWrap:DN,header:ON,flower:MN,writeMessageHeader:PN,notice:UN,modalButtonContainer:VN},$N="_modalBackground_1oeg3_7",BN="_enrollWrap_1oeg3_26",FN="_noticeDetail_1oeg3_43",jN="_buttonList_1oeg3_58",qN="_cancel_1oeg3_77",zN="_done_1oeg3_86",Mn={modalBackground:$N,enrollWrap:BN,noticeDetail:FN,buttonList:jN,cancel:qN,done:zN},WN=({handleCloseModal:t,handleComplete:e})=>d.jsx("div",{role:"alertdialog","aria-modal":"true","aria-labelledby":"TITLE","aria-describedby":"CONTENTS",className:Mn.modalBackground,children:d.jsxs("div",{className:Mn.enrollWrap,children:[d.jsx("div",{className:Mn.notice,children:d.jsx("span",{id:"TITLE",children:"편지를 남길까요?"})}),d.jsx("div",{className:Mn.noticeDetail,children:d.jsxs("p",{id:"CONTENTS",children:["한 번 남긴 편지는 삭제 할 수 없어요!",d.jsx("br",{}),"신중한 결정 부탁드립니다!"]})}),d.jsxs("div",{className:Mn.buttonList,children:[d.jsx("button",{type:"button",className:Mn.cancel,onClick:t,children:"취소"}),d.jsx("button",{type:"button",className:Mn.done,onClick:e,children:"완료"})]})]})}),KN="_messageWrap_uui1f_7",HN="_textLength_uui1f_16",GN="_authorContainer_uui1f_23",QN="_author_uui1f_23",YN="_contentContainer_uui1f_44",XN="_content_uui1f_44",Pn={messageWrap:KN,textLength:HN,authorContainer:GN,author:QN,contentContainer:YN,content:XN},JN=({authorInput:t,contentInput:e,state:n,text:s,handleChangeState:r})=>(y.useState(!1),d.jsx("div",{className:Pn.messageInputContainer,children:d.jsxs("div",{className:Pn.messageWrap,children:[d.jsx("div",{className:Pn.authorContainer,children:d.jsx("input",{className:Pn.author,name:"author",placeholder:"작성자이름을 적어주세요",type:"text",value:n.author,onChange:r,ref:t,maxLength:6})}),d.jsx("div",{className:Pn.contentContainer,children:d.jsx("textarea",{"aria-label":"메세지를 작성해주세요",className:Pn.content,name:"content",placeholder:"메세지를 작성해주세요",type:"text",value:n.content,onChange:r,ref:e,maxLength:500})}),d.jsxs("p",{className:Pn.textLength,children:[s.length," / 500"]})]})})),ZN=()=>{const[t,e]=y.useState(""),[n,s]=y.useState(0),[r,i]=y.useState(""),[o,a]=y.useState({author:"",content:""}),[c,l]=y.useState(!1),u=y.useRef(),h=y.useRef(),{uid:f,flowerName:m}=Eo(),p=sn();y.useLayoutEffect(()=>{(async()=>{const F=In(mt,"users",f),K=await aa(F);e(K.data().userNickname),w()})()},[]);const w=async()=>{const F=es(mt,`users/${f}/flowerList`),K=await Eu(mr(F,gr("createAt","asc")));s(K.data().count)},T=(F,K)=>{const{name:J,value:$}=F.target;J==="content"&&$.length<=500&&i($),a({...o,[J]:$})},x=()=>{if(o.author.length<1){u.current.focus();return}if(o.content.length<2){h.current.focus();return}l(!0)},S=()=>{l(!1)},D=async()=>{const F=cg(),{author:K,content:J}=o,$=In(es(mt,"users",f,"flowerList"));await zc($,{nickname:K,contents:J,createAt:F,flowerSrc:`${m}`}),window.location.replace(`/share-tree/${f}`)};return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:ki.writeMessageWrap,children:[d.jsx(yt,{as:"h1",children:"벚꽃이지면"}),d.jsxs("div",{className:ki.header,children:[d.jsx(vg,{userName:t}),d.jsx("img",{className:ki.flower,src:`/assets/${m}.png`,alt:"선택한 벚꽃 모양 이미지"}),d.jsx(yo,{className:ki.notice,subText:`${t}님에게 메세지를 남겨주세요`})]}),d.jsx(JN,{authorInput:u,contentInput:h,state:o,text:r,handleChangeState:T}),d.jsx(Wc,{firstText:"이전",firstClick:()=>p(-1),secondText:"완료",secondClick:x})]}),c&&d.jsx(WN,{handleCloseModal:S,handleComplete:D})]})};function ek(t){const e=new Error(t);if(e.stack===void 0)try{throw e}catch{}return e}var tk=ek,se=tk;function nk(t){return!!t&&typeof t.then=="function"}var we=nk;function sk(t,e){if(t!=null)return t;throw se(e??"Got unexpected null or undefined")}var Ee=sk;function ne(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class la{getValue(){throw se("BaseLoadable")}toPromise(){throw se("BaseLoadable")}valueMaybe(){throw se("BaseLoadable")}valueOrThrow(){throw se(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw se("BaseLoadable")}promiseOrThrow(){throw se(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw se("BaseLoadable")}errorOrThrow(){throw se(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw se("BaseLoadable")}}class rk extends la{constructor(e){super(),ne(this,"state","hasValue"),ne(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const n=e(this.contents);return we(n)?ts(n):Ls(n)?n:fi(n)}catch(n){return we(n)?ts(n.next(()=>this.map(e))):ua(n)}}}class ik extends la{constructor(e){super(),ne(this,"state","hasError"),ne(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class Sg extends la{constructor(e){super(),ne(this,"state","loading"),ne(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return ts(this.contents.then(n=>{const s=e(n);if(Ls(s)){const r=s;switch(r.state){case"hasValue":return r.contents;case"hasError":throw r.contents;case"loading":return r.contents}}return s}).catch(n=>{if(we(n))return n.then(()=>this.map(e).contents);throw n}))}}function fi(t){return Object.freeze(new rk(t))}function ua(t){return Object.freeze(new ik(t))}function ts(t){return Object.freeze(new Sg(t))}function bg(){return Object.freeze(new Sg(new Promise(()=>{})))}function ok(t){return t.every(e=>e.state==="hasValue")?fi(t.map(e=>e.contents)):t.some(e=>e.state==="hasError")?ua(Ee(t.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):ts(Promise.all(t.map(e=>e.contents)))}function Tg(t){const n=(Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(r=>t[r])).map(r=>Ls(r)?r:we(r)?ts(r):fi(r)),s=ok(n);return Array.isArray(t)?s:s.map(r=>Object.getOwnPropertyNames(t).reduce((i,o,a)=>({...i,[o]:r[a]}),{}))}function Ls(t){return t instanceof la}const ak={of:t=>we(t)?ts(t):Ls(t)?t:fi(t),error:t=>ua(t),loading:()=>bg(),all:Tg,isLoadable:Ls};var as={loadableWithValue:fi,loadableWithError:ua,loadableWithPromise:ts,loadableLoading:bg,loadableAll:Tg,isLoadable:Ls,RecoilLoadable:ak},ck=as.loadableWithValue,lk=as.loadableWithError,uk=as.loadableWithPromise,hk=as.loadableLoading,dk=as.loadableAll,fk=as.isLoadable,pk=as.RecoilLoadable,pi=Object.freeze({__proto__:null,loadableWithValue:ck,loadableWithError:lk,loadableWithPromise:uk,loadableLoading:hk,loadableAll:dk,isLoadable:fk,RecoilLoadable:pk});const Kc={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function mk(t,e){var n,s;const r=(n=process.env[t])===null||n===void 0||(s=n.toLowerCase())===null||s===void 0?void 0:s.trim();if(r==null||r==="")return;if(!["true","false"].includes(r))throw se(`({}).${t} value must be 'true', 'false', or empty: ${r}`);e(r==="true")}function gk(t,e){var n;const s=(n=process.env[t])===null||n===void 0?void 0:n.trim();s==null||s===""||e(s.split(/\s*,\s*|\s+/))}function yk(){var t;typeof process>"u"||((t=process)===null||t===void 0?void 0:t.env)!=null&&(mk("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{Kc.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),gk("RECOIL_GKS_ENABLED",e=>{e.forEach(n=>{Kc.RECOIL_GKS_ENABLED.add(n)})}))}yk();var Ks=Kc;function ha(t){return Ks.RECOIL_GKS_ENABLED.has(t)}ha.setPass=t=>{Ks.RECOIL_GKS_ENABLED.add(t)};ha.setFail=t=>{Ks.RECOIL_GKS_ENABLED.delete(t)};ha.clear=()=>{Ks.RECOIL_GKS_ENABLED.clear()};var me=ha;function vk(t,e,{error:n}={}){return null}var _k=vk,Cu=_k,Ja,Za,ec;const wk=(Ja=Se.createMutableSource)!==null&&Ja!==void 0?Ja:Se.unstable_createMutableSource,Eg=(Za=Se.useMutableSource)!==null&&Za!==void 0?Za:Se.unstable_useMutableSource,Ig=(ec=Se.useSyncExternalStore)!==null&&ec!==void 0?ec:Se.unstable_useSyncExternalStore;function Sk(){var t;const{ReactCurrentDispatcher:e,ReactCurrentOwner:n}=Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((t=e==null?void 0:e.current)!==null&&t!==void 0?t:n.currentDispatcher).useSyncExternalStore!=null}function bk(){return me("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:me("recoil_sync_external_store")&&Ig!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:me("recoil_mutable_source")&&Eg!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?me("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:me("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function Tk(){return!1}var mi={createMutableSource:wk,useMutableSource:Eg,useSyncExternalStore:Ig,currentRendererSupportsUseSyncExternalStore:Sk,reactMode:bk,isFastRefreshEnabled:Tk};class Au{constructor(e){ne(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class Rg extends Au{}class Cg extends Au{}function Ek(t){return t instanceof Rg||t instanceof Cg}var da={AbstractRecoilValue:Au,RecoilState:Rg,RecoilValueReadOnly:Cg,isRecoilValue:Ek},Ik=da.AbstractRecoilValue,Rk=da.RecoilState,Ck=da.RecoilValueReadOnly,Ak=da.isRecoilValue,Ds=Object.freeze({__proto__:null,AbstractRecoilValue:Ik,RecoilState:Rk,RecoilValueReadOnly:Ck,isRecoilValue:Ak});function Nk(t,e){return function*(){let n=0;for(const s of t)yield e(s,n++)}()}var fa=Nk;class Ag{}const kk=new Ag,ns=new Map,Nu=new Map;function xk(t){return fa(t,e=>Ee(Nu.get(e)))}function Lk(t){if(ns.has(t)){const e=`Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function Dk(t){Ks.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&Lk(t.key),ns.set(t.key,t);const e=t.set==null?new Ds.RecoilValueReadOnly(t.key):new Ds.RecoilState(t.key);return Nu.set(t.key,e),e}class Ng extends Error{}function Ok(t){const e=ns.get(t);if(e==null)throw new Ng(`Missing definition for RecoilValue: "${t}""`);return e}function Mk(t){return ns.get(t)}const vo=new Map;function Pk(t){var e;if(!me("recoil_memory_managament_2020"))return;const n=ns.get(t);if(n!=null&&(e=n.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(n)){var s;ns.delete(t),(s=kg(t))===null||s===void 0||s(),vo.delete(t)}}function Uk(t,e){me("recoil_memory_managament_2020")&&(e===void 0?vo.delete(t):vo.set(t,e))}function kg(t){return vo.get(t)}var ht={nodes:ns,recoilValues:Nu,registerNode:Dk,getNode:Ok,getNodeMaybe:Mk,deleteNodeConfigIfPossible:Pk,setConfigDeletionHandler:Uk,getConfigDeletionHandler:kg,recoilValuesForKeys:xk,NodeMissingError:Ng,DefaultValue:Ag,DEFAULT_VALUE:kk};function Vk(t,e){e()}var $k={enqueueExecution:Vk};function Bk(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Fk=Bk(function(t){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},n={},s=5,r=Math.pow(2,s),i=r-1,o=r/2,a=r/4,c={},l=function(g){return function(){return g}},u=n.hash=function(v){var g=typeof v>"u"?"undefined":e(v);if(g==="number")return v;g!=="string"&&(v+="");for(var E=0,N=0,k=v.length;N<k;++N){var L=v.charCodeAt(N);E=(E<<5)-E+L|0}return E},h=function(g){return g-=g>>1&1431655765,g=(g&858993459)+(g>>2&858993459),g=g+(g>>4)&252645135,g+=g>>8,g+=g>>16,g&127},f=function(g,E){return E>>>g&i},m=function(g){return 1<<g},p=function(g,E){return h(g&E-1)},w=function(g,E,N,k){var L=k;if(!g){var G=k.length;L=new Array(G);for(var z=0;z<G;++z)L[z]=k[z]}return L[E]=N,L},T=function(g,E,N){var k=N.length-1,L=0,G=0,z=N;if(g)L=G=E;else for(z=new Array(k);L<E;)z[G++]=N[L++];for(++L;L<=k;)z[G++]=N[L++];return g&&(z.length=k),z},x=function(g,E,N,k){var L=k.length;if(g){for(var G=L;G>=E;)k[G--]=k[G];return k[E]=N,k}for(var z=0,W=0,re=new Array(L+1);z<E;)re[W++]=k[z++];for(re[E]=N;z<L;)re[++W]=k[z++];return re},S=1,D=2,F=3,K=4,J={__hamt_isEmpty:!0},$=function(g){return g===J||g&&g.__hamt_isEmpty},ae=function(g,E,N,k){return{type:S,edit:g,hash:E,key:N,value:k,_modify:an}},P=function(g,E,N){return{type:D,edit:g,hash:E,children:N,_modify:jt}},q=function(g,E,N){return{type:F,edit:g,mask:E,children:N,_modify:oe}},Re=function(g,E,N){return{type:K,edit:g,size:E,children:N,_modify:le}},St=function(g){return g===J||g.type===S||g.type===D},Ce=function(g,E,N,k,L){for(var G=[],z=k,W=0,re=0;z;++re)z&1&&(G[re]=L[W++]),z>>>=1;return G[E]=N,Re(g,W+1,G)},Ae=function(g,E,N,k){for(var L=new Array(E-1),G=0,z=0,W=0,re=k.length;W<re;++W)if(W!==N){var be=k[W];be&&!$(be)&&(L[G++]=be,z|=1<<W)}return q(g,z,L)},bt=function v(g,E,N,k,L,G){if(N===L)return P(g,N,[G,k]);var z=f(E,N),W=f(E,L);return q(g,m(z)|m(W),z===W?[v(g,E+s,N,k,L,G)]:z<W?[k,G]:[G,k])},Tt=function(g,E,N,k,L,G,z,W){for(var re=L.length,be=0;be<re;++be){var ct=L[be];if(N(z,ct.key)){var Be=ct.value,vt=G(Be);return vt===Be?L:vt===c?(--W.value,T(g,be,L)):w(g,be,ae(E,k,z,vt),L)}}var It=G();return It===c?L:(++W.value,w(g,re,ae(E,k,z,It),L))},Et=function(g,E){return g===E.edit},an=function(g,E,N,k,L,G,z){if(E(G,this.key)){var W=k(this.value);return W===this.value?this:W===c?(--z.value,J):Et(g,this)?(this.value=W,this):ae(g,L,G,W)}var re=k();return re===c?this:(++z.value,bt(g,N,this.hash,this,L,ae(g,L,G,re)))},jt=function(g,E,N,k,L,G,z){if(L===this.hash){var W=Et(g,this),re=Tt(W,g,E,this.hash,this.children,k,G,z);return re===this.children?this:re.length>1?P(g,this.hash,re):re[0]}var be=k();return be===c?this:(++z.value,bt(g,N,this.hash,this,L,ae(g,L,G,be)))},oe=function(g,E,N,k,L,G,z){var W=this.mask,re=this.children,be=f(N,L),ct=m(be),Be=p(W,ct),vt=W&ct,It=vt?re[Be]:J,us=It._modify(g,E,N+s,k,L,G,z);if(It===us)return this;var bi=Et(g,this),Gs=W,Qs=void 0;if(vt&&$(us)){if(Gs&=~ct,!Gs)return J;if(re.length<=2&&St(re[Be^1]))return re[Be^1];Qs=T(bi,Be,re)}else if(!vt&&!$(us)){if(re.length>=o)return Ce(g,be,us,W,re);Gs|=ct,Qs=x(bi,Be,us,re)}else Qs=w(bi,Be,us,re);return bi?(this.mask=Gs,this.children=Qs,this):q(g,Gs,Qs)},le=function(g,E,N,k,L,G,z){var W=this.size,re=this.children,be=f(N,L),ct=re[be],Be=(ct||J)._modify(g,E,N+s,k,L,G,z);if(ct===Be)return this;var vt=Et(g,this),It=void 0;if($(ct)&&!$(Be))++W,It=w(vt,be,Be,re);else if(!$(ct)&&$(Be)){if(--W,W<=a)return Ae(g,W,be,re);It=w(vt,be,J,re)}else It=w(vt,be,Be,re);return vt?(this.size=W,this.children=It,this):Re(g,W,It)};J._modify=function(v,g,E,N,k,L,G){var z=N();return z===c?J:(++G.value,ae(v,k,L,z))};function _(v,g,E,N,k){this._editable=v,this._edit=g,this._config=E,this._root=N,this._size=k}_.prototype.setTree=function(v,g){return this._editable?(this._root=v,this._size=g,this):v===this._root?this:new _(this._editable,this._edit,this._config,v,g)};var R=n.tryGetHash=function(v,g,E,N){for(var k=N._root,L=0,G=N._config.keyEq;;)switch(k.type){case S:return G(E,k.key)?k.value:v;case D:{if(g===k.hash)for(var z=k.children,W=0,re=z.length;W<re;++W){var be=z[W];if(G(E,be.key))return be.value}return v}case F:{var ct=f(L,g),Be=m(ct);if(k.mask&Be){k=k.children[p(k.mask,Be)],L+=s;break}return v}case K:{if(k=k.children[f(L,g)],k){L+=s;break}return v}default:return v}};_.prototype.tryGetHash=function(v,g,E){return R(v,g,E,this)};var C=n.tryGet=function(v,g,E){return R(v,E._config.hash(g),g,E)};_.prototype.tryGet=function(v,g){return C(v,g,this)};var H=n.getHash=function(v,g,E){return R(void 0,v,g,E)};_.prototype.getHash=function(v,g){return H(v,g,this)},n.get=function(v,g){return R(void 0,g._config.hash(v),v,g)},_.prototype.get=function(v,g){return C(g,v,this)};var O=n.has=function(v,g,E){return R(c,v,g,E)!==c};_.prototype.hasHash=function(v,g){return O(v,g,this)};var Z=n.has=function(v,g){return O(g._config.hash(v),v,g)};_.prototype.has=function(v){return Z(v,this)};var Q=function(g,E){return g===E};n.make=function(v){return new _(0,0,{keyEq:v&&v.keyEq||Q,hash:v&&v.hash||u},J,0)},n.empty=n.make();var B=n.isEmpty=function(v){return v&&!!$(v._root)};_.prototype.isEmpty=function(){return B(this)};var ye=n.modifyHash=function(v,g,E,N){var k={value:N._size},L=N._root._modify(N._editable?N._edit:NaN,N._config.keyEq,0,v,g,E,k);return N.setTree(L,k.value)};_.prototype.modifyHash=function(v,g,E){return ye(E,v,g,this)};var Ie=n.modify=function(v,g,E){return ye(v,E._config.hash(g),g,E)};_.prototype.modify=function(v,g){return Ie(g,v,this)};var he=n.setHash=function(v,g,E,N){return ye(l(E),v,g,N)};_.prototype.setHash=function(v,g,E){return he(v,g,E,this)};var fe=n.set=function(v,g,E){return he(E._config.hash(v),v,g,E)};_.prototype.set=function(v,g){return fe(v,g,this)};var dt=l(c),qt=n.removeHash=function(v,g,E){return ye(dt,v,g,E)};_.prototype.removeHash=_.prototype.deleteHash=function(v,g){return qt(v,g,this)};var nt=n.remove=function(v,g){return qt(g._config.hash(v),v,g)};_.prototype.remove=_.prototype.delete=function(v){return nt(v,this)};var st=n.beginMutation=function(v){return new _(v._editable+1,v._edit+1,v._config,v._root,v._size)};_.prototype.beginMutation=function(){return st(this)};var wi=n.endMutation=function(v){return v._editable=v._editable&&v._editable-1,v};_.prototype.endMutation=function(){return wi(this)};var Na=n.mutate=function(v,g){var E=st(g);return v(E),wi(E)};_.prototype.mutate=function(v){return Na(v,this)};var ls=function(g){return g&&_e(g[0],g[1],g[2],g[3],g[4])},_e=function(g,E,N,k,L){for(;N<g;){var G=E[N++];if(G&&!$(G))return xe(G,k,[g,E,N,k,L])}return ls(L)},xe=function(g,E,N){switch(g.type){case S:return{value:E(g),rest:N};case D:case K:case F:var k=g.children;return _e(k.length,k,0,E,N);default:return ls(N)}},qe={done:!0};function rt(v){this.v=v}rt.prototype.next=function(){if(!this.v)return qe;var v=this.v;return this.v=ls(v.rest),v},rt.prototype[Symbol.iterator]=function(){return this};var zt=function(g,E){return new rt(xe(g._root,E))},Wt=function(g){return[g.key,g.value]},Kt=n.entries=function(v){return zt(v,Wt)};_.prototype.entries=_.prototype[Symbol.iterator]=function(){return Kt(this)};var Si=function(g){return g.key},$y=n.keys=function(v){return zt(v,Si)};_.prototype.keys=function(){return $y(this)};var By=function(g){return g.value},Fy=n.values=_.prototype.values=function(v){return zt(v,By)};_.prototype.values=function(){return Fy(this)};var qu=n.fold=function(v,g,E){var N=E._root;if(N.type===S)return v(g,N.value,N.key);for(var k=[N.children],L=void 0;L=k.pop();)for(var G=0,z=L.length;G<z;){var W=L[G++];W&&W.type&&(W.type===S?g=v(g,W.value,W.key):k.push(W.children))}return g};_.prototype.fold=function(v,g){return qu(v,g,this)};var jy=n.forEach=function(v,g){return qu(function(E,N,k){return v(N,k,g)},null,g)};_.prototype.forEach=function(v){return jy(v,this)};var qy=n.count=function(v){return v._size};_.prototype.count=function(){return qy(this)},Object.defineProperty(_.prototype,"size",{get:_.prototype.count}),t.exports?t.exports=n:(void 0).hamt=n});class jk{constructor(e){ne(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,n){return this._map.set(e,n),this}delete(e){return this._map.delete(e),this}clone(){return xu(this)}toMap(){return new Map(this._map)}}class ku{constructor(e){if(ne(this,"_hamt",Fk.empty.beginMutation()),e instanceof ku){const n=e._hamt.endMutation();e._hamt=n.beginMutation(),this._hamt=n.beginMutation()}else if(e)for(const[n,s]of e.entries())this._hamt.set(n,s)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,n){return this._hamt.set(e,n),this}delete(e){return this._hamt.delete(e),this}clone(){return xu(this)}toMap(){return new Map(this._hamt)}}function xu(t){return me("recoil_hamt_2020")?new ku(t):new jk(t)}var qk={persistentMap:xu},zk=qk.persistentMap,Wk=Object.freeze({__proto__:null,persistentMap:zk});function Kk(t,...e){const n=new Set;e:for(const s of t){for(const r of e)if(r.has(s))continue e;n.add(s)}return n}var vr=Kk;function Hk(t,e){const n=new Map;return t.forEach((s,r)=>{n.set(r,e(s,r))}),n}var _o=Hk;function Gk(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function Qk(t){return{nodeDeps:_o(t.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:_o(t.nodeToNodeSubscriptions,e=>new Set(e))}}function tc(t,e,n,s){const{nodeDeps:r,nodeToNodeSubscriptions:i}=n,o=r.get(t);if(o&&s&&o!==s.nodeDeps.get(t))return;r.set(t,e);const a=o==null?e:vr(e,o);for(const c of a)i.has(c)||i.set(c,new Set),Ee(i.get(c)).add(t);if(o){const c=vr(o,e);for(const l of c){if(!i.has(l))return;const u=Ee(i.get(l));u.delete(t),u.size===0&&i.delete(l)}}}function Yk(t,e,n,s){var r,i,o,a;const c=n.getState();s===c.currentTree.version||s===((r=c.nextTree)===null||r===void 0?void 0:r.version)||((i=c.previousTree)===null||i===void 0||i.version);const l=n.getGraph(s);if(tc(t,e,l),s===((o=c.previousTree)===null||o===void 0?void 0:o.version)){const h=n.getGraph(c.currentTree.version);tc(t,e,h,l)}if(s===((a=c.previousTree)===null||a===void 0?void 0:a.version)||s===c.currentTree.version){var u;const h=(u=c.nextTree)===null||u===void 0?void 0:u.version;if(h!==void 0){const f=n.getGraph(h);tc(t,e,f,l)}}}var gi={cloneGraph:Qk,graph:Gk,saveDepsToStore:Yk};let Xk=0;const Jk=()=>Xk++;let Zk=0;const ex=()=>Zk++;let tx=0;const nx=()=>tx++;var pa={getNextTreeStateVersion:Jk,getNextStoreID:ex,getNextComponentID:nx};const{persistentMap:Id}=Wk,{graph:sx}=gi,{getNextTreeStateVersion:xg}=pa;function Lg(){const t=xg();return{version:t,stateID:t,transactionMetadata:{},dirtyAtoms:new Set,atomValues:Id(),nonvalidatedAtoms:Id()}}function rx(){const t=Lg();return{currentTree:t,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(t.version,sx()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var Dg={makeEmptyTreeState:Lg,makeEmptyStoreState:rx,getNextTreeStateVersion:xg};class Og{}function ix(){return new Og}var ma={RetentionZone:Og,retentionZone:ix};function ox(t,e){const n=new Set(t);return n.add(e),n}function ax(t,e){const n=new Set(t);return n.delete(e),n}function cx(t,e,n){const s=new Map(t);return s.set(e,n),s}function lx(t,e,n){const s=new Map(t);return s.set(e,n(s.get(e))),s}function ux(t,e){const n=new Map(t);return n.delete(e),n}function hx(t,e){const n=new Map(t);return e.forEach(s=>n.delete(s)),n}var Mg={setByAddingToSet:ox,setByDeletingFromSet:ax,mapBySettingInMap:cx,mapByUpdatingInMap:lx,mapByDeletingFromMap:ux,mapByDeletingMultipleFromMap:hx};function*dx(t,e){let n=0;for(const s of t)e(s,n++)&&(yield s)}var Lu=dx;function fx(t,e){return new Proxy(t,{get:(s,r)=>(!(r in s)&&r in e&&(s[r]=e[r]()),s[r]),ownKeys:s=>Object.keys(s)})}var Pg=fx;const{getNode:yi,getNodeMaybe:px,recoilValuesForKeys:Rd}=ht,{RetentionZone:Cd}=ma,{setByAddingToSet:mx}=Mg,gx=Object.freeze(new Set);class yx extends Error{}function vx(t,e,n){if(!me("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:s}=t.getState().retention;function r(i){let o=s.get(i);o||s.set(i,o=new Set),o.add(e)}if(n instanceof Cd)r(n);else if(Array.isArray(n))for(const i of n)r(i);return()=>{if(!me("recoil_memory_managament_2020"))return;const{retention:i}=t.getState();function o(a){const c=i.nodesRetainedByZone.get(a);c==null||c.delete(e),c&&c.size===0&&i.nodesRetainedByZone.delete(a)}if(n instanceof Cd)o(n);else if(Array.isArray(n))for(const a of n)o(a)}}function Du(t,e,n,s){const r=t.getState();if(r.nodeCleanupFunctions.has(n))return;const i=yi(n),o=vx(t,n,i.retainedBy),a=i.init(t,e,s);r.nodeCleanupFunctions.set(n,()=>{a(),o()})}function _x(t,e,n){Du(t,t.getState().currentTree,e,n)}function wx(t,e){var n;const s=t.getState();(n=s.nodeCleanupFunctions.get(e))===null||n===void 0||n(),s.nodeCleanupFunctions.delete(e)}function Sx(t,e,n){return Du(t,e,n,"get"),yi(n).get(t,e)}function Ug(t,e,n){return yi(n).peek(t,e)}function bx(t,e,n){var s;const r=px(e);return r==null||(s=r.invalidate)===null||s===void 0||s.call(r,t),{...t,atomValues:t.atomValues.clone().delete(e),nonvalidatedAtoms:t.nonvalidatedAtoms.clone().set(e,n),dirtyAtoms:mx(t.dirtyAtoms,e)}}function Tx(t,e,n,s){const r=yi(n);if(r.set==null)throw new yx(`Attempt to set read-only RecoilValue: ${n}`);const i=r.set;return Du(t,e,n,"set"),i(t,e,s)}function Ex(t,e,n){const s=t.getState(),r=t.getGraph(e.version),i=yi(n).nodeType;return Pg({type:i},{loadable:()=>Ug(t,e,n),isActive:()=>s.knownAtoms.has(n)||s.knownSelectors.has(n),isSet:()=>i==="selector"?!1:e.atomValues.has(n),isModified:()=>e.dirtyAtoms.has(n),deps:()=>{var o;return Rd((o=r.nodeDeps.get(n))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:Rd(Lu(Vg(t,e,new Set([n])),c=>c!==n)),components:fa((o=(a=s.nodeToComponentSubscriptions.get(n))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([c])=>({name:c}))}}})}function Vg(t,e,n){const s=new Set,r=Array.from(n),i=t.getGraph(e.version);for(let a=r.pop();a;a=r.pop()){var o;s.add(a);const c=(o=i.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:gx;for(const l of c)s.has(l)||r.push(l)}return s}var Ln={getNodeLoadable:Sx,peekNodeLoadable:Ug,setNodeValue:Tx,initializeNode:_x,cleanUpNode:wx,setUnvalidatedAtomValue_DEPRECATED:bx,peekNodeInfo:Ex,getDownstreamNodes:Vg};let $g=null;function Ix(t){$g=t}function Rx(){var t;(t=$g)===null||t===void 0||t()}var Bg={setInvalidateMemoizedSnapshot:Ix,invalidateMemoizedSnapshot:Rx};const{getDownstreamNodes:Cx,getNodeLoadable:Fg,setNodeValue:Ax}=Ln,{getNextComponentID:Nx}=pa,{getNode:kx,getNodeMaybe:jg}=ht,{DefaultValue:Ou}=ht,{reactMode:xx}=mi,{AbstractRecoilValue:Lx,RecoilState:Dx,RecoilValueReadOnly:Ox,isRecoilValue:Mx}=Ds,{invalidateMemoizedSnapshot:Px}=Bg;function Ux(t,{key:e},n=t.getState().currentTree){var s,r;const i=t.getState();n.version===i.currentTree.version||n.version===((s=i.nextTree)===null||s===void 0?void 0:s.version)||(n.version,(r=i.previousTree)===null||r===void 0||r.version);const o=Fg(t,n,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function Vx(t,e){const n=t.clone();return e.forEach((s,r)=>{s.state==="hasValue"&&s.contents instanceof Ou?n.delete(r):n.set(r,s)}),n}function $x(t,e,{key:n},s){if(typeof s=="function"){const r=Fg(t,e,n);if(r.state==="loading"){const i=`Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;throw se(i)}else if(r.state==="hasError")throw r.contents;return s(r.contents)}else return s}function Bx(t,e,n){if(n.type==="set"){const{recoilValue:r,valueOrUpdater:i}=n,o=$x(t,e,r,i),a=Ax(t,e,r.key,o);for(const[c,l]of a.entries())Hc(e,c,l)}else if(n.type==="setLoadable"){const{recoilValue:{key:r},loadable:i}=n;Hc(e,r,i)}else if(n.type==="markModified"){const{recoilValue:{key:r}}=n;e.dirtyAtoms.add(r)}else if(n.type==="setUnvalidated"){var s;const{recoilValue:{key:r},unvalidatedValue:i}=n,o=jg(r);o==null||(s=o.invalidate)===null||s===void 0||s.call(o,e),e.atomValues.delete(r),e.nonvalidatedAtoms.set(r,i),e.dirtyAtoms.add(r)}else Cu(`Unknown action ${n.type}`)}function Hc(t,e,n){n.state==="hasValue"&&n.contents instanceof Ou?t.atomValues.delete(e):t.atomValues.set(e,n),t.dirtyAtoms.add(e),t.nonvalidatedAtoms.delete(e)}function qg(t,e){t.replaceState(n=>{const s=zg(n);for(const r of e)Bx(t,s,r);return Wg(t,s),Px(),s})}function ga(t,e){if(_r.length){const n=_r[_r.length-1];let s=n.get(t);s||n.set(t,s=[]),s.push(e)}else qg(t,[e])}const _r=[];function Fx(){const t=new Map;return _r.push(t),()=>{for(const[e,n]of t)qg(e,n);_r.pop()}}function zg(t){return{...t,atomValues:t.atomValues.clone(),nonvalidatedAtoms:t.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(t.dirtyAtoms)}}function Wg(t,e){const n=Cx(t,e,e.dirtyAtoms);for(const i of n){var s,r;(s=jg(i))===null||s===void 0||(r=s.invalidate)===null||r===void 0||r.call(s,e)}}function Kg(t,e,n){ga(t,{type:"set",recoilValue:e,valueOrUpdater:n})}function jx(t,e,n){if(n instanceof Ou)return Kg(t,e,n);ga(t,{type:"setLoadable",recoilValue:e,loadable:n})}function qx(t,e){ga(t,{type:"markModified",recoilValue:e})}function zx(t,e,n){ga(t,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:n})}function Wx(t,{key:e},n,s=null){const r=Nx(),i=t.getState();i.nodeToComponentSubscriptions.has(e)||i.nodeToComponentSubscriptions.set(e,new Map),Ee(i.nodeToComponentSubscriptions.get(e)).set(r,[s??"<not captured>",n]);const o=xx();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=t.getState().nextTree;a&&a.dirtyAtoms.has(e)&&n(a)}return{release:()=>{const a=t.getState(),c=a.nodeToComponentSubscriptions.get(e);c===void 0||!c.has(r)||(c.delete(r),c.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function Kx(t,e){var n;const{currentTree:s}=t.getState(),r=kx(e.key);(n=r.clearCache)===null||n===void 0||n.call(r,t,s)}var Bt={RecoilValueReadOnly:Ox,AbstractRecoilValue:Lx,RecoilState:Dx,getRecoilValueAsLoadable:Ux,setRecoilValue:Kg,setRecoilValueLoadable:jx,markRecoilValueModified:qx,setUnvalidatedRecoilValue:zx,subscribeToRecoilValue:Wx,isRecoilValue:Mx,applyAtomValueWrites:Vx,batchStart:Fx,writeLoadableToTreeState:Hc,invalidateDownstreams:Wg,copyTreeState:zg,refreshRecoilValue:Kx};function Hx(t,e,n){const s=t.entries();let r=s.next();for(;!r.done;){const i=r.value;if(e.call(n,i[1],i[0],t))return!0;r=s.next()}return!1}var Gx=Hx;const{cleanUpNode:Qx}=Ln,{deleteNodeConfigIfPossible:Yx,getNode:Hg}=ht,{RetentionZone:Gg}=ma,Xx=12e4,Qg=new Set;function Yg(t,e){const n=t.getState(),s=n.currentTree;if(n.nextTree)return;const r=new Set;for(const o of e)if(o instanceof Gg)for(const a of tL(n,o))r.add(a);else r.add(o);const i=Jx(t,r);for(const o of i)eL(t,s,o)}function Jx(t,e){const n=t.getState(),s=n.currentTree,r=t.getGraph(s.version),i=new Set,o=new Set;return a(e),i;function a(c){const l=new Set,u=Zx(t,s,c,i,o);for(const p of u){var h;if(Hg(p).retainedBy==="recoilRoot"){o.add(p);continue}if(((h=n.retention.referenceCounts.get(p))!==null&&h!==void 0?h:0)>0){o.add(p);continue}if(Xg(p).some(T=>n.retention.referenceCounts.get(T))){o.add(p);continue}const w=r.nodeToNodeSubscriptions.get(p);if(w&&Gx(w,T=>o.has(T))){o.add(p);continue}i.add(p),l.add(p)}const f=new Set;for(const p of l)for(const w of(m=r.nodeDeps.get(p))!==null&&m!==void 0?m:Qg){var m;i.has(w)||f.add(w)}f.size&&a(f)}}function Zx(t,e,n,s,r){const i=t.getGraph(e.version),o=[],a=new Set;for(;n.size>0;)c(Ee(n.values().next().value));return o;function c(l){if(s.has(l)||r.has(l)){n.delete(l);return}if(a.has(l))return;const u=i.nodeToNodeSubscriptions.get(l);if(u)for(const h of u)c(h);a.add(l),n.delete(l),o.push(l)}}function eL(t,e,n){if(!me("recoil_memory_managament_2020"))return;Qx(t,n);const s=t.getState();s.knownAtoms.delete(n),s.knownSelectors.delete(n),s.nodeTransactionSubscriptions.delete(n),s.retention.referenceCounts.delete(n);const r=Xg(n);for(const c of r){var i;(i=s.retention.nodesRetainedByZone.get(c))===null||i===void 0||i.delete(n)}e.atomValues.delete(n),e.dirtyAtoms.delete(n),e.nonvalidatedAtoms.delete(n);const o=s.graphsByVersion.get(e.version);if(o){const c=o.nodeDeps.get(n);if(c!==void 0){o.nodeDeps.delete(n);for(const l of c){var a;(a=o.nodeToNodeSubscriptions.get(l))===null||a===void 0||a.delete(n)}}o.nodeToNodeSubscriptions.delete(n)}Yx(n)}function tL(t,e){var n;return(n=t.retention.nodesRetainedByZone.get(e))!==null&&n!==void 0?n:Qg}function Xg(t){const e=Hg(t).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof Gg?[e]:e}function nL(t,e){const n=t.getState();n.nextTree?n.retention.retainablesToCheckForRelease.add(e):Yg(t,new Set([e]))}function sL(t,e,n){var s;if(!me("recoil_memory_managament_2020"))return;const r=t.getState().retention.referenceCounts,i=((s=r.get(e))!==null&&s!==void 0?s:0)+n;i===0?Jg(t,e):r.set(e,i)}function Jg(t,e){if(!me("recoil_memory_managament_2020"))return;t.getState().retention.referenceCounts.delete(e),nL(t,e)}function rL(t){if(!me("recoil_memory_managament_2020"))return;const e=t.getState();Yg(t,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function iL(t){return t===void 0?"recoilRoot":t}var cs={SUSPENSE_TIMEOUT_MS:Xx,updateRetainCount:sL,updateRetainCountToZero:Jg,releaseScheduledRetainablesNow:rL,retainedByOptionWithDefault:iL};const{unstable_batchedUpdates:oL}=Wy;var aL={unstable_batchedUpdates:oL};const{unstable_batchedUpdates:cL}=aL;var lL={unstable_batchedUpdates:cL};const{batchStart:uL}=Bt,{unstable_batchedUpdates:hL}=lL;let Mu=hL||(t=>t());const dL=t=>{Mu=t},fL=()=>Mu,pL=t=>{Mu(()=>{let e=()=>{};try{e=uL(),t()}finally{e()}})};var ya={getBatcher:fL,setBatcher:dL,batchUpdates:pL};function*mL(t){for(const e of t)for(const n of e)yield n}var Zg=mL;const ey=typeof Window>"u"||typeof window>"u",gL=t=>!ey&&(t===window||t instanceof Window),yL=typeof navigator<"u"&&navigator.product==="ReactNative";var va={isSSR:ey,isReactNative:yL,isWindow:gL};function vL(t,e){let n;return(...s)=>{n||(n={});const r=e(...s);return Object.hasOwnProperty.call(n,r)||(n[r]=t(...s)),n[r]}}function _L(t,e){let n,s;return(...r)=>{const i=e(...r);return n===i||(n=i,s=t(...r)),s}}function wL(t,e){let n,s;return[(...o)=>{const a=e(...o);return n===a||(n=a,s=t(...o)),s},()=>{n=null}]}var SL={memoizeWithArgsHash:vL,memoizeOneWithArgsHash:_L,memoizeOneWithArgsHashAndInvalidation:wL};const{batchUpdates:Gc}=ya,{initializeNode:bL,peekNodeInfo:TL}=Ln,{graph:EL}=gi,{getNextStoreID:IL}=pa,{DEFAULT_VALUE:RL,recoilValues:Ad,recoilValuesForKeys:Nd}=ht,{AbstractRecoilValue:CL,getRecoilValueAsLoadable:AL,setRecoilValue:kd,setUnvalidatedRecoilValue:NL}=Bt,{updateRetainCount:zi}=cs,{setInvalidateMemoizedSnapshot:kL}=Bg,{getNextTreeStateVersion:xL,makeEmptyStoreState:LL}=Dg,{isSSR:DL}=va,{memoizeOneWithArgsHashAndInvalidation:OL}=SL;class _a{constructor(e,n){ne(this,"_store",void 0),ne(this,"_refCount",1),ne(this,"getLoadable",s=>(this.checkRefCount_INTERNAL(),AL(this._store,s))),ne(this,"getPromise",s=>(this.checkRefCount_INTERNAL(),this.getLoadable(s).toPromise())),ne(this,"getNodes_UNSTABLE",s=>{if(this.checkRefCount_INTERNAL(),(s==null?void 0:s.isModified)===!0){if((s==null?void 0:s.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return Nd(o.dirtyAtoms)}const r=this._store.getState().knownAtoms,i=this._store.getState().knownSelectors;return(s==null?void 0:s.isInitialized)==null?Ad.values():s.isInitialized===!0?Nd(Zg([r,i])):Lu(Ad.values(),({key:o})=>!r.has(o)&&!i.has(o))}),ne(this,"getInfo_UNSTABLE",({key:s})=>(this.checkRefCount_INTERNAL(),TL(this._store,this._store.getState().currentTree,s))),ne(this,"map",s=>{this.checkRefCount_INTERNAL();const r=new Qc(this,Gc);return s(r),r}),ne(this,"asyncMap",async s=>{this.checkRefCount_INTERNAL();const r=new Qc(this,Gc);return r.retain(),await s(r),r.autoRelease_INTERNAL(),r}),this._store={storeID:IL(),parentStoreID:n,getState:()=>e,replaceState:s=>{e.currentTree=s(e.currentTree)},getGraph:s=>{const r=e.graphsByVersion;if(r.has(s))return Ee(r.get(s));const i=EL();return r.set(s,i),i},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw se("Cannot subscribe to Snapshots")}};for(const s of this._store.getState().knownAtoms)bL(this._store,s,"get"),zi(this._store,s,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){DL||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!me("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){me("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function ty(t,e,n=!1){const s=t.getState(),r=n?xL():e.version;return{currentTree:{version:n?r:e.version,stateID:n?r:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(s.knownAtoms),knownSelectors:new Set(s.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(r,t.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map(fa(s.nodeCleanupFunctions.entries(),([i])=>[i,()=>{}]))}}function ML(t){const e=new _a(LL());return t!=null?e.map(t):e}const[xd,ny]=OL((t,e)=>{var n;const s=t.getState(),r=e==="latest"?(n=s.nextTree)!==null&&n!==void 0?n:s.currentTree:Ee(s.previousTree);return new _a(ty(t,r),t.storeID)},(t,e)=>{var n,s;return String(e)+String(t.storeID)+String((n=t.getState().nextTree)===null||n===void 0?void 0:n.version)+String(t.getState().currentTree.version)+String((s=t.getState().previousTree)===null||s===void 0?void 0:s.version)});kL(ny);function PL(t,e="latest"){const n=xd(t,e);return n.isRetained()?n:(ny(),xd(t,e))}class Qc extends _a{constructor(e,n){super(ty(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),ne(this,"_batch",void 0),ne(this,"set",(s,r)=>{this.checkRefCount_INTERNAL();const i=this.getStore_INTERNAL();this._batch(()=>{zi(i,s.key,1),kd(this.getStore_INTERNAL(),s,r)})}),ne(this,"reset",s=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();this._batch(()=>{zi(r,s.key,1),kd(this.getStore_INTERNAL(),s,RL)})}),ne(this,"setUnvalidatedAtomValues_DEPRECATED",s=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();Gc(()=>{for(const[i,o]of s.entries())zi(r,i,1),NL(r,new CL(i),o)})}),this._batch=n}}var wa={Snapshot:_a,MutableSnapshot:Qc,freshSnapshot:ML,cloneSnapshot:PL},UL=wa.Snapshot,VL=wa.MutableSnapshot,$L=wa.freshSnapshot,BL=wa.cloneSnapshot,Sa=Object.freeze({__proto__:null,Snapshot:UL,MutableSnapshot:VL,freshSnapshot:$L,cloneSnapshot:BL});function FL(...t){const e=new Set;for(const n of t)for(const s of n)e.add(s);return e}var jL=FL;const{useRef:qL}=Se;function zL(t){const e=qL(t);return e.current===t&&typeof t=="function"&&(e.current=t()),e}var Ld=zL;const{getNextTreeStateVersion:WL,makeEmptyStoreState:sy}=Dg,{cleanUpNode:KL,getDownstreamNodes:HL,initializeNode:GL,setNodeValue:QL,setUnvalidatedAtomValue_DEPRECATED:YL}=Ln,{graph:XL}=gi,{cloneGraph:JL}=gi,{getNextStoreID:ry}=pa,{createMutableSource:nc,reactMode:iy}=mi,{applyAtomValueWrites:ZL}=Bt,{releaseScheduledRetainablesNow:oy}=cs,{freshSnapshot:eD}=Sa,{useCallback:tD,useContext:ay,useEffect:Yc,useMemo:nD,useRef:sD,useState:rD}=Se;function Js(){throw se("This component must be used inside a <RecoilRoot> component.")}const cy=Object.freeze({storeID:ry(),getState:Js,replaceState:Js,getGraph:Js,subscribeToTransactions:Js,addTransactionMetadata:Js});let Xc=!1;function Dd(t){if(Xc)throw se("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=t.getState();if(e.nextTree===null){me("recoil_memory_managament_2020")&&me("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&oy(t);const n=e.currentTree.version,s=WL();e.nextTree={...e.currentTree,version:s,stateID:s,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(s,JL(Ee(e.graphsByVersion.get(n))))}}const ly=Se.createContext({current:cy}),ba=()=>ay(ly),uy=Se.createContext(null);function iD(){return ay(uy)}function Pu(t,e,n){const s=HL(t,n,n.dirtyAtoms);for(const r of s){const i=e.nodeToComponentSubscriptions.get(r);if(i)for(const[o,[a,c]]of i)c(n)}}function hy(t){const e=t.getState(),n=e.currentTree,s=n.dirtyAtoms;if(s.size){for(const[r,i]of e.nodeTransactionSubscriptions)if(s.has(r))for(const[o,a]of i)a(t);for(const[r,i]of e.transactionSubscriptions)i(t);(!iy().early||e.suspendedComponentResolvers.size>0)&&(Pu(t,e,n),e.suspendedComponentResolvers.forEach(r=>r()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(r=>r(n)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function oD(t){const e=t.getState();e.commitDepth++;try{const{nextTree:n}=e;if(n==null)return;e.previousTree=e.currentTree,e.currentTree=n,e.nextTree=null,hy(t),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):Cu("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,me("recoil_memory_managament_2020")&&n==null&&oy(t)}finally{e.commitDepth--}}function aD({setNotifyBatcherOfChange:t}){const e=ba(),[,n]=rD([]);return t(()=>n({})),Yc(()=>(t(()=>n({})),()=>{t(()=>{})}),[t]),Yc(()=>{$k.enqueueExecution("Batcher",()=>{oD(e.current)})}),null}function cD(t,e){const n=sy();return e({set:(s,r)=>{const i=n.currentTree,o=QL(t,i,s.key,r),a=new Set(o.keys()),c=i.nonvalidatedAtoms.clone();for(const l of a)c.delete(l);n.currentTree={...i,dirtyAtoms:jL(i.dirtyAtoms,a),atomValues:ZL(i.atomValues,o),nonvalidatedAtoms:c}},setUnvalidatedAtomValues:s=>{s.forEach((r,i)=>{n.currentTree=YL(n.currentTree,i,r)})}}),n}function lD(t){const e=eD(t),n=e.getStore_INTERNAL().getState();return e.retain(),n.nodeCleanupFunctions.forEach(s=>s()),n.nodeCleanupFunctions.clear(),n}let Od=0;function uD({initializeState_DEPRECATED:t,initializeState:e,store_INTERNAL:n,children:s}){let r;const i=m=>{const p=r.current.graphsByVersion;if(p.has(m))return Ee(p.get(m));const w=XL();return p.set(m,w),w},o=(m,p)=>{if(p==null){const{transactionSubscriptions:w}=h.current.getState(),T=Od++;return w.set(T,m),{release:()=>{w.delete(T)}}}else{const{nodeTransactionSubscriptions:w}=h.current.getState();w.has(p)||w.set(p,new Map);const T=Od++;return Ee(w.get(p)).set(T,m),{release:()=>{const x=w.get(p);x&&(x.delete(T),x.size===0&&w.delete(p))}}}},a=m=>{Dd(h.current);for(const p of Object.keys(m))Ee(h.current.getState().nextTree).transactionMetadata[p]=m[p]},c=m=>{Dd(h.current);const p=Ee(r.current.nextTree);let w;try{Xc=!0,w=m(p)}finally{Xc=!1}w!==p&&(r.current.nextTree=w,iy().early&&Pu(h.current,r.current,w),Ee(l.current)())},l=sD(null),u=tD(m=>{l.current=m},[l]),h=Ld(()=>n??{storeID:ry(),getState:()=>r.current,replaceState:c,getGraph:i,subscribeToTransactions:o,addTransactionMetadata:a});n!=null&&(h.current=n),r=Ld(()=>t!=null?cD(h.current,t):e!=null?lD(e):sy());const f=nD(()=>nc==null?void 0:nc(r,()=>r.current.currentTree.version),[r]);return Yc(()=>{const m=h.current;for(const p of new Set(m.getState().knownAtoms))GL(m,p,"get");return()=>{for(const p of m.getState().knownAtoms)KL(m,p)}},[h]),Se.createElement(ly.Provider,{value:h},Se.createElement(uy.Provider,{value:f},Se.createElement(aD,{setNotifyBatcherOfChange:u}),s))}function hD(t){const{override:e,...n}=t,s=ba();return e===!1&&s.current!==cy?t.children:Se.createElement(uD,n)}function dD(){return ba().current.storeID}var on={RecoilRoot:hD,useStoreRef:ba,useRecoilMutableSource:iD,useRecoilStoreID:dD,notifyComponents_FOR_TESTING:Pu,sendEndOfBatchNotifications_FOR_TESTING:hy};function fD(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0,s=t.length;n<s;n++)if(t[n]!==e[n])return!1;return!0}var pD=fD;const{useEffect:mD,useRef:gD}=Se;function yD(t){const e=gD();return mD(()=>{e.current=t}),e.current}var dy=yD;const{useStoreRef:vD}=on,{SUSPENSE_TIMEOUT_MS:_D}=cs,{updateRetainCount:Zs}=cs,{RetentionZone:wD}=ma,{useEffect:SD,useRef:bD}=Se,{isSSR:Md}=va;function TD(t){if(me("recoil_memory_managament_2020"))return ED(t)}function ED(t){const n=(Array.isArray(t)?t:[t]).map(o=>o instanceof wD?o:o.key),s=vD();SD(()=>{if(!me("recoil_memory_managament_2020"))return;const o=s.current;if(r.current&&!Md)window.clearTimeout(r.current),r.current=null;else for(const a of n)Zs(o,a,1);return()=>{for(const a of n)Zs(o,a,-1)}},[s,...n]);const r=bD(),i=dy(n);if(!Md&&(i===void 0||!pD(i,n))){const o=s.current;for(const a of n)Zs(o,a,1);if(i)for(const a of i)Zs(o,a,-1);r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{r.current=null;for(const a of n)Zs(o,a,-1)},_D)}}var Uu=TD;function ID(){return"<component name not available>"}var vi=ID;const{batchUpdates:RD}=ya,{DEFAULT_VALUE:fy}=ht,{currentRendererSupportsUseSyncExternalStore:CD,reactMode:Hs,useMutableSource:AD,useSyncExternalStore:ND}=mi,{useRecoilMutableSource:kD,useStoreRef:Ft}=on,{AbstractRecoilValue:Jc,getRecoilValueAsLoadable:_i,setRecoilValue:wo,setUnvalidatedRecoilValue:xD,subscribeToRecoilValue:Os}=Bt,{useCallback:ut,useEffect:Ms,useMemo:py,useRef:wr,useState:Vu}=Se,{setByAddingToSet:LD}=Mg,{isSSR:DD}=va;function $u(t,e,n){if(t.state==="hasValue")return t.contents;throw t.state==="loading"?new Promise(r=>{const i=n.current.getState().suspendedComponentResolvers;i.add(r),DD&&we(t.contents)&&t.contents.finally(()=>{i.delete(r)})}):t.state==="hasError"?t.contents:se(`Invalid value of loadable atom "${e.key}"`)}function OD(){const t=vi(),e=Ft(),[,n]=Vu([]),s=wr(new Set);s.current=new Set;const r=wr(new Set),i=wr(new Map),o=ut(c=>{const l=i.current.get(c);l&&(l.release(),i.current.delete(c))},[i]),a=ut((c,l)=>{i.current.has(l)&&n([])},[]);return Ms(()=>{const c=e.current;vr(s.current,r.current).forEach(l=>{if(i.current.has(l))return;const u=Os(c,new Jc(l),f=>a(f,l),t);i.current.set(l,u),c.getState().nextTree?c.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(c.getState(),l)}):a(c.getState(),l)}),vr(r.current,s.current).forEach(l=>{o(l)}),r.current=s.current}),Ms(()=>{const c=i.current;return vr(s.current,new Set(c.keys())).forEach(l=>{const u=Os(e.current,new Jc(l),h=>a(h,l),t);c.set(l,u)}),()=>c.forEach((l,u)=>o(u))},[t,e,o,a]),py(()=>{function c(p){return w=>{wo(e.current,p,w)}}function l(p){return()=>wo(e.current,p,fy)}function u(p){var w;s.current.has(p.key)||(s.current=LD(s.current,p.key));const T=e.current.getState();return _i(e.current,p,Hs().early&&(w=T.nextTree)!==null&&w!==void 0?w:T.currentTree)}function h(p){const w=u(p);return $u(w,p,e)}function f(p){return[h(p),c(p)]}function m(p){return[u(p),c(p)]}return{getRecoilValue:h,getRecoilValueLoadable:u,getRecoilState:f,getRecoilStateLoadable:m,getSetRecoilState:c,getResetRecoilState:l}},[s,e])}const MD={current:0};function PD(t){const e=Ft(),n=vi(),s=ut(()=>{var a;const c=e.current,l=c.getState(),u=Hs().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return{loadable:_i(c,t,u),key:t.key}},[e,t]),r=ut(a=>{let c;return()=>{var l,u;const h=a();return(l=c)!==null&&l!==void 0&&l.loadable.is(h.loadable)&&((u=c)===null||u===void 0?void 0:u.key)===h.key?c:(c=h,h)}},[]),i=py(()=>r(s),[s,r]),o=ut(a=>{const c=e.current;return Os(c,t,a,n).release},[e,t,n]);return ND(o,i,i).loadable}function UD(t){const e=Ft(),n=ut(()=>{var l;const u=e.current,h=u.getState(),f=Hs().early&&(l=h.nextTree)!==null&&l!==void 0?l:h.currentTree;return _i(u,t,f)},[e,t]),s=ut(()=>n(),[n]),r=vi(),i=ut((l,u)=>{const h=e.current;return Os(h,t,()=>{if(!me("recoil_suppress_rerender_in_callback"))return u();const m=n();c.current.is(m)||u(),c.current=m},r).release},[e,t,r,n]),o=kD();if(o==null)throw se("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=AD(o,s,i),c=wr(a);return Ms(()=>{c.current=a}),a}function Zc(t){const e=Ft(),n=vi(),s=ut(()=>{var c;const l=e.current,u=l.getState(),h=Hs().early&&(c=u.nextTree)!==null&&c!==void 0?c:u.currentTree;return _i(l,t,h)},[e,t]),r=ut(()=>({loadable:s(),key:t.key}),[s,t.key]),i=ut(c=>{const l=r();return c.loadable.is(l.loadable)&&c.key===l.key?c:l},[r]);Ms(()=>{const c=Os(e.current,t,l=>{a(i)},n);return a(i),c.release},[n,t,e,i]);const[o,a]=Vu(r);return o.key!==t.key?r().loadable:o.loadable}function VD(t){const e=Ft(),[,n]=Vu([]),s=vi(),r=ut(()=>{var a;const c=e.current,l=c.getState(),u=Hs().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return _i(c,t,u)},[e,t]),i=r(),o=wr(i);return Ms(()=>{o.current=i}),Ms(()=>{const a=e.current,c=a.getState(),l=Os(a,t,h=>{var f;if(!me("recoil_suppress_rerender_in_callback"))return n([]);const m=r();(f=o.current)!==null&&f!==void 0&&f.is(m)||n(m),o.current=m},s);if(c.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,n([])});else{var u;if(!me("recoil_suppress_rerender_in_callback"))return n([]);const h=r();(u=o.current)!==null&&u!==void 0&&u.is(h)||n(h),o.current=h}return l.release},[s,r,t,e]),i}function Bu(t){return me("recoil_memory_managament_2020")&&Uu(t),{TRANSITION_SUPPORT:Zc,SYNC_EXTERNAL_STORE:CD()?PD:Zc,MUTABLE_SOURCE:UD,LEGACY:VD}[Hs().mode](t)}function my(t){const e=Ft(),n=Bu(t);return $u(n,t,e)}function Ta(t){const e=Ft();return ut(n=>{wo(e.current,t,n)},[e,t])}function $D(t){const e=Ft();return ut(()=>{wo(e.current,t,fy)},[e,t])}function BD(t){return[my(t),Ta(t)]}function FD(t){return[Bu(t),Ta(t)]}function jD(){const t=Ft();return(e,n={})=>{RD(()=>{t.current.addTransactionMetadata(n),e.forEach((s,r)=>xD(t.current,new Jc(r),s))})}}function gy(t){return me("recoil_memory_managament_2020")&&Uu(t),Zc(t)}function yy(t){const e=Ft(),n=gy(t);return $u(n,t,e)}function qD(t){return[yy(t),Ta(t)]}var zD={recoilComponentGetRecoilValueCount_FOR_TESTING:MD,useRecoilInterface:OD,useRecoilState:BD,useRecoilStateLoadable:FD,useRecoilValue:my,useRecoilValueLoadable:Bu,useResetRecoilState:$D,useSetRecoilState:Ta,useSetUnvalidatedAtomValues:jD,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:gy,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:yy,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:qD};function WD(t,e){const n=new Map;for(const[s,r]of t)e(r,s)&&n.set(s,r);return n}var KD=WD;function HD(t,e){const n=new Set;for(const s of t)e(s)&&n.add(s);return n}var GD=HD;function QD(...t){const e=new Map;for(let n=0;n<t.length;n++){const s=t[n].keys();let r;for(;!(r=s.next()).done;)e.set(r.value,t[n].get(r.value))}return e}var YD=QD;const{batchUpdates:XD}=ya,{DEFAULT_VALUE:JD,getNode:vy,nodes:ZD}=ht,{useStoreRef:Fu}=on,{AbstractRecoilValue:e1,setRecoilValueLoadable:t1}=Bt,{SUSPENSE_TIMEOUT_MS:n1}=cs,{cloneSnapshot:So}=Sa,{useCallback:Ea,useEffect:_y,useRef:Pd,useState:s1}=Se,{isSSR:Ud}=va;function Ia(t){const e=Fu();_y(()=>e.current.subscribeToTransactions(t).release,[t,e])}function Vd(t){const e=t.atomValues.toMap(),n=_o(KD(e,(s,r)=>{const o=vy(r).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&s.state==="hasValue"}),s=>s.contents);return YD(t.nonvalidatedAtoms.toMap(),n)}function r1(t){Ia(Ea(e=>{let n=e.getState().previousTree;const s=e.getState().currentTree;n||(n=e.getState().currentTree);const r=Vd(s),i=Vd(n),o=_o(ZD,c=>{var l,u,h,f;return{persistence_UNSTABLE:{type:(l=(u=c.persistence_UNSTABLE)===null||u===void 0?void 0:u.type)!==null&&l!==void 0?l:"none",backButton:(h=(f=c.persistence_UNSTABLE)===null||f===void 0?void 0:f.backButton)!==null&&h!==void 0?h:!1}}}),a=GD(s.dirtyAtoms,c=>r.has(c)||i.has(c));t({atomValues:r,previousAtomValues:i,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...s.transactionMetadata}})},[t]))}function i1(t){Ia(Ea(e=>{const n=So(e,"latest"),s=So(e,"previous");t({snapshot:n,previousSnapshot:s})},[t]))}function o1(){const t=Fu(),[e,n]=s1(()=>So(t.current)),s=dy(e),r=Pd(),i=Pd();if(Ia(Ea(a=>n(So(a)),[])),_y(()=>{const a=e.retain();if(r.current&&!Ud){var c;window.clearTimeout(r.current),r.current=null,(c=i.current)===null||c===void 0||c.call(i),i.current=null}return()=>{window.setTimeout(a,10)}},[e]),s!==e&&!Ud){if(r.current){var o;window.clearTimeout(r.current),r.current=null,(o=i.current)===null||o===void 0||o.call(i),i.current=null}i.current=e.retain(),r.current=window.setTimeout(()=>{var a;r.current=null,(a=i.current)===null||a===void 0||a.call(i),i.current=null},n1)}return e}function wy(t,e){var n;const s=t.getState(),r=(n=s.nextTree)!==null&&n!==void 0?n:s.currentTree,i=e.getStore_INTERNAL().getState().currentTree;XD(()=>{const o=new Set;for(const l of[r.atomValues.keys(),i.atomValues.keys()])for(const u of l){var a,c;((a=r.atomValues.get(u))===null||a===void 0?void 0:a.contents)!==((c=i.atomValues.get(u))===null||c===void 0?void 0:c.contents)&&vy(u).shouldRestoreFromSnapshots&&o.add(u)}o.forEach(l=>{t1(t,new e1(l),i.atomValues.has(l)?Ee(i.atomValues.get(l)):JD)}),t.replaceState(l=>({...l,stateID:e.getID()}))})}function a1(){const t=Fu();return Ea(e=>wy(t.current,e),[t])}var Sy={useRecoilSnapshot:o1,gotoSnapshot:wy,useGotoRecoilSnapshot:a1,useRecoilTransactionObserver:i1,useTransactionObservation_DEPRECATED:r1,useTransactionSubscription_DEPRECATED:Ia};const{peekNodeInfo:c1}=Ln,{useStoreRef:l1}=on;function u1(){const t=l1();return({key:e})=>c1(t.current,t.current.getState().currentTree,e)}var h1=u1;const{reactMode:d1}=mi,{RecoilRoot:f1,useStoreRef:p1}=on,{useMemo:m1}=Se;function g1(){d1().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const t=p1().current;return m1(()=>{function e({children:n}){return Se.createElement(f1,{store_INTERNAL:t},n)}return e},[t])}var y1=g1;const{loadableWithValue:v1}=pi,{initializeNode:_1}=Ln,{DEFAULT_VALUE:w1,getNode:S1}=ht,{copyTreeState:b1,getRecoilValueAsLoadable:T1,invalidateDownstreams:E1,writeLoadableToTreeState:I1}=Bt;function $d(t){return S1(t.key).nodeType==="atom"}class R1{constructor(e,n){ne(this,"_store",void 0),ne(this,"_treeState",void 0),ne(this,"_changes",void 0),ne(this,"get",s=>{if(this._changes.has(s.key))return this._changes.get(s.key);if(!$d(s))throw se("Reading selectors within atomicUpdate is not supported");const r=T1(this._store,s,this._treeState);if(r.state==="hasValue")return r.contents;throw r.state==="hasError"?r.contents:se(`Expected Recoil atom ${s.key} to have a value, but it is in a loading state.`)}),ne(this,"set",(s,r)=>{if(!$d(s))throw se("Setting selectors within atomicUpdate is not supported");if(typeof r=="function"){const i=this.get(s);this._changes.set(s.key,r(i))}else _1(this._store,s.key,"set"),this._changes.set(s.key,r)}),ne(this,"reset",s=>{this.set(s,w1)}),this._store=e,this._treeState=n,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=b1(this._treeState);for(const[n,s]of this._changes)I1(e,n,v1(s));return E1(this._store,e),e}}function C1(t){return e=>{t.replaceState(n=>{const s=new R1(t,n);return e(s),s.newTreeState_INTERNAL()})}}var A1={atomicUpdater:C1},N1=A1.atomicUpdater,by=Object.freeze({__proto__:null,atomicUpdater:N1});function k1(t,e){if(!t)throw new Error(e)}var x1=k1,lr=x1;const{atomicUpdater:L1}=by,{batchUpdates:D1}=ya,{DEFAULT_VALUE:O1}=ht,{useStoreRef:M1}=on,{refreshRecoilValue:P1,setRecoilValue:Bd}=Bt,{cloneSnapshot:U1}=Sa,{gotoSnapshot:V1}=Sy,{useCallback:$1}=Se;class Ty{}const B1=new Ty;function Ey(t,e,n,s){let r=B1,i;if(D1(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw se(a);const c=Pg({...s??{},set:(u,h)=>Bd(t,u,h),reset:u=>Bd(t,u,O1),refresh:u=>P1(t,u),gotoSnapshot:u=>V1(t,u),transact_UNSTABLE:u=>L1(t)(u)},{snapshot:()=>{const u=U1(t);return i=u.retain(),u}}),l=e(c);if(typeof l!="function")throw se(a);r=l(...n)}),r instanceof Ty&&lr(!1),we(r))r=r.finally(()=>{var a;(a=i)===null||a===void 0||a()});else{var o;(o=i)===null||o===void 0||o()}return r}function F1(t,e){const n=M1();return $1((...s)=>Ey(n.current,t,s),e!=null?[...e,n]:void 0)}var Iy={recoilCallback:Ey,useRecoilCallback:F1};const{useStoreRef:j1}=on,{refreshRecoilValue:q1}=Bt,{useCallback:z1}=Se;function W1(t){const e=j1();return z1(()=>{const n=e.current;q1(n,t)},[t,e])}var K1=W1;const{atomicUpdater:H1}=by,{useStoreRef:G1}=on,{useMemo:Q1}=Se;function Y1(t,e){const n=G1();return Q1(()=>(...s)=>{H1(n.current)(i=>{t(i)(...s)})},e!=null?[...e,n]:void 0)}var X1=Y1;class J1{constructor(e){ne(this,"value",void 0),this.value=e}}var Z1={WrappedValue:J1},eO=Z1.WrappedValue,Ry=Object.freeze({__proto__:null,WrappedValue:eO});const{isFastRefreshEnabled:tO}=mi;class Fd extends Error{}class nO{constructor(e){var n,s,r;ne(this,"_name",void 0),ne(this,"_numLeafs",void 0),ne(this,"_root",void 0),ne(this,"_onHit",void 0),ne(this,"_onSet",void 0),ne(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(n=e==null?void 0:e.onHit)!==null&&n!==void 0?n:()=>{},this._onSet=(s=e==null?void 0:e.onSet)!==null&&s!==void 0?s:()=>{},this._mapNodeValue=(r=e==null?void 0:e.mapNodeValue)!==null&&r!==void 0?r:i=>i}size(){return this._numLeafs}root(){return this._root}get(e,n){var s;return(s=this.getLeafNode(e,n))===null||s===void 0?void 0:s.value}getLeafNode(e,n){if(this._root==null)return;let s=this._root;for(;s;){if(n==null||n.onNodeVisit(s),s.type==="leaf")return this._onHit(s),s;const r=this._mapNodeValue(e(s.nodeKey));s=s.branches.get(r)}}set(e,n,s){const r=()=>{var i,o,a,c;let l,u;for(const[T,x]of e){var h,f,m;const S=this._root;if((S==null?void 0:S.type)==="leaf")throw this.invalidCacheError();const D=l;if(l=D?D.branches.get(u):S,l=(h=l)!==null&&h!==void 0?h:{type:"branch",nodeKey:T,parent:D,branches:new Map,branchKey:u},l.type!=="branch"||l.nodeKey!==T)throw this.invalidCacheError();D==null||D.branches.set(u,l),s==null||(f=s.onNodeVisit)===null||f===void 0||f.call(s,l),u=this._mapNodeValue(x),this._root=(m=this._root)!==null&&m!==void 0?m:l}const p=l?(i=l)===null||i===void 0?void 0:i.branches.get(u):this._root;if(p!=null&&(p.type!=="leaf"||p.branchKey!==u))throw this.invalidCacheError();const w={type:"leaf",value:n,parent:l,branchKey:u};(o=l)===null||o===void 0||o.branches.set(u,w),this._root=(a=this._root)!==null&&a!==void 0?a:w,this._numLeafs++,this._onSet(w),s==null||(c=s.onNodeVisit)===null||c===void 0||c.call(s,w)};try{r()}catch(i){if(i instanceof Fd)this.clear(),r();else throw i}}delete(e){const n=this.root();if(!n)return!1;if(e===n)return this._root=null,this._numLeafs=0,!0;let s=e.parent,r=e.branchKey;for(;s;){var i;if(s.branches.delete(r),s===n)return s.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(s.branches.size>0)break;r=(i=s)===null||i===void 0?void 0:i.branchKey,s=s.parent}for(;s!==n;s=s.parent)if(s==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=tO()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw Cu(e+(this._name!=null?` - ${this._name}`:"")),new Fd}}var sO={TreeCache:nO},rO=sO.TreeCache,Cy=Object.freeze({__proto__:null,TreeCache:rO});class iO{constructor(e){var n;ne(this,"_maxSize",void 0),ne(this,"_size",void 0),ne(this,"_head",void 0),ne(this,"_tail",void 0),ne(this,"_map",void 0),ne(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(n=e.mapKey)!==null&&n!==void 0?n:s=>s}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const n=this._keyMapper(e),s=this._map.get(n);if(s)return this.set(e,s.value),s.value}set(e,n){const s=this._keyMapper(e);this._map.get(s)&&this.delete(e);const i=this.head(),o={key:e,right:i,left:null,value:n};i?i.left=o:this._tail=o,this._map.set(s,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const n=this._keyMapper(e);if(!this._size||!this._map.has(n))return;const s=Ee(this._map.get(n)),r=s.right,i=s.left;r&&(r.left=s.left),i&&(i.right=s.right),s===this.head()&&(this._head=r),s===this.tail()&&(this._tail=i),this._map.delete(n),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var oO={LRUCache:iO},aO=oO.LRUCache,Ay=Object.freeze({__proto__:null,LRUCache:aO});const{LRUCache:cO}=Ay,{TreeCache:lO}=Cy;function uO({name:t,maxSize:e,mapNodeValue:n=s=>s}){const s=new cO({maxSize:e}),r=new lO({name:t,mapNodeValue:n,onHit:i=>{s.set(i,!0)},onSet:i=>{const o=s.tail();s.set(i,!0),o&&r.size()>e&&r.delete(o.key)}});return r}var jd=uO;function Rt(t,e,n){if(typeof t=="string"&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw se("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}if(t===null)return"null";if(typeof t!="object"){var s;return(s=JSON.stringify(t))!==null&&s!==void 0?s:""}if(we(t))return"__PROMISE__";if(Array.isArray(t))return`[${t.map((r,i)=>Rt(r,e,i.toString()))}]`;if(typeof t.toJSON=="function")return Rt(t.toJSON(n),e,n);if(t instanceof Map){const r={};for(const[i,o]of t)r[typeof i=="string"?i:Rt(i,e)]=o;return Rt(r,e,n)}return t instanceof Set?Rt(Array.from(t).sort((r,i)=>Rt(r,e).localeCompare(Rt(i,e))),e,n):Symbol!==void 0&&t[Symbol.iterator]!=null&&typeof t[Symbol.iterator]=="function"?Rt(Array.from(t),e,n):`{${Object.keys(t).filter(r=>t[r]!==void 0).sort().map(r=>`${Rt(r,e)}:${Rt(t[r],e,r)}`).join(",")}}`}function hO(t,e={allowFunctions:!1}){return Rt(t,e)}var Ra=hO;const{TreeCache:dO}=Cy,xi={equality:"reference",eviction:"keep-all",maxSize:1/0};function fO({equality:t=xi.equality,eviction:e=xi.eviction,maxSize:n=xi.maxSize}=xi,s){const r=pO(t);return mO(e,n,r,s)}function pO(t){switch(t){case"reference":return e=>e;case"value":return e=>Ra(e)}throw se(`Unrecognized equality policy ${t}`)}function mO(t,e,n,s){switch(t){case"keep-all":return new dO({name:s,mapNodeValue:n});case"lru":return jd({name:s,maxSize:Ee(e),mapNodeValue:n});case"most-recent":return jd({name:s,maxSize:1,mapNodeValue:n})}throw se(`Unrecognized eviction policy ${t}`)}var gO=fO;function yO(t){return()=>null}var vO={startPerfBlock:yO};const{isLoadable:_O,loadableWithError:Li,loadableWithPromise:wO,loadableWithValue:sc}=pi,{WrappedValue:Ny}=Ry,{getNodeLoadable:Di,peekNodeLoadable:SO,setNodeValue:bO}=Ln,{saveDepsToStore:TO}=gi,{DEFAULT_VALUE:EO,getConfigDeletionHandler:IO,getNode:RO,registerNode:qd}=ht,{isRecoilValue:CO}=Ds,{markRecoilValueModified:zd}=Bt,{retainedByOptionWithDefault:AO}=cs,{recoilCallback:NO}=Iy,{startPerfBlock:kO}=vO;class ky{}const er=new ky,tr=[],Oi=new Map,xO=(()=>{let t=0;return()=>t++})();function xy(t){let e=null;const{key:n,get:s,cachePolicy_UNSTABLE:r}=t,i=t.set!=null?t.set:void 0,o=new Set,a=gO(r??{equality:"reference",eviction:"keep-all"},n),c=AO(t.retainedBy_UNSTABLE),l=new Map;let u=0;function h(){return!me("recoil_memory_managament_2020")||u>0}function f(_){return _.getState().knownSelectors.add(n),u++,()=>{u--}}function m(){return IO(n)!==void 0&&!h()}function p(_,R,C,H,O){Tt(R,H,O),w(_,C)}function w(_,R){Ae(_,R)&&Ce(_),x(R,!0)}function T(_,R){Ae(_,R)&&(Ee(q(_)).stateVersions.clear(),x(R,!1))}function x(_,R){const C=Oi.get(_);if(C!=null){for(const H of C)zd(H,Ee(e));R&&Oi.delete(_)}}function S(_,R){let C=Oi.get(R);C==null&&Oi.set(R,C=new Set),C.add(_)}function D(_,R,C,H,O,Z){return R.then(Q=>{if(!h())throw Ce(_),er;const B=sc(Q);return p(_,C,O,B,H),Q}).catch(Q=>{if(!h())throw Ce(_),er;if(we(Q))return F(_,Q,C,H,O,Z);const B=Li(Q);throw p(_,C,O,B,H),Q})}function F(_,R,C,H,O,Z){return R.then(Q=>{if(!h())throw Ce(_),er;Z.loadingDepKey!=null&&Z.loadingDepPromise===R?C.atomValues.set(Z.loadingDepKey,sc(Q)):_.getState().knownSelectors.forEach(he=>{C.atomValues.delete(he)});const B=$(_,C);if(B&&B.state!=="loading"){if((Ae(_,O)||q(_)==null)&&w(_,O),B.state==="hasValue")return B.contents;throw B.contents}if(!Ae(_,O)){const he=P(_,C);if(he!=null)return he.loadingLoadable.contents}const[ye,Ie]=J(_,C,O);if(ye.state!=="loading"&&p(_,C,O,ye,Ie),ye.state==="hasError")throw ye.contents;return ye.contents}).catch(Q=>{if(Q instanceof ky)throw er;if(!h())throw Ce(_),er;const B=Li(Q);throw p(_,C,O,B,H),Q})}function K(_,R,C,H){var O,Z,Q,B;if(Ae(_,H)||R.version===((O=_.getState())===null||O===void 0||(Z=O.currentTree)===null||Z===void 0?void 0:Z.version)||R.version===((Q=_.getState())===null||Q===void 0||(B=Q.nextTree)===null||B===void 0?void 0:B.version)){var ye,Ie,he;TO(n,C,_,(ye=(Ie=_.getState())===null||Ie===void 0||(he=Ie.nextTree)===null||he===void 0?void 0:he.version)!==null&&ye!==void 0?ye:_.getState().currentTree.version)}for(const fe of C)o.add(fe)}function J(_,R,C){const H=kO(n);let O=!0,Z=!0;const Q=()=>{H(),Z=!1};let B,ye=!1,Ie;const he={loadingDepKey:null,loadingDepPromise:null},fe=new Map;function dt({key:nt}){const st=Di(_,R,nt);switch(fe.set(nt,st),O||(K(_,R,new Set(fe.keys()),C),T(_,C)),st.state){case"hasValue":return st.contents;case"hasError":throw st.contents;case"loading":throw he.loadingDepKey=nt,he.loadingDepPromise=st.contents,st.contents}throw se("Invalid Loadable state")}const qt=nt=>(...st)=>{if(Z)throw se("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&lr(!1),NO(_,nt,st,{node:e})};try{B=s({get:dt,getCallback:qt}),B=CO(B)?dt(B):B,_O(B)&&(B.state==="hasError"&&(ye=!0),B=B.contents),we(B)?B=D(_,B,R,fe,C,he).finally(Q):Q(),B=B instanceof Ny?B.value:B}catch(nt){B=nt,we(B)?B=F(_,B,R,fe,C,he).finally(Q):(ye=!0,Q())}return ye?Ie=Li(B):we(B)?Ie=wO(B):Ie=sc(B),O=!1,St(_,C,fe),K(_,R,new Set(fe.keys()),C),[Ie,fe]}function $(_,R){let C=R.atomValues.get(n);if(C!=null)return C;const H=new Set;try{C=a.get(Z=>(typeof Z!="string"&&lr(!1),Di(_,R,Z).contents),{onNodeVisit:Z=>{Z.type==="branch"&&Z.nodeKey!==n&&H.add(Z.nodeKey)}})}catch(Z){throw se(`Problem with cache lookup for selector "${n}": ${Z.message}`)}if(C){var O;R.atomValues.set(n,C),K(_,R,H,(O=q(_))===null||O===void 0?void 0:O.executionID)}return C}function ae(_,R){const C=$(_,R);if(C!=null)return Ce(_),C;const H=P(_,R);if(H!=null){var O;return((O=H.loadingLoadable)===null||O===void 0?void 0:O.state)==="loading"&&S(_,H.executionID),H.loadingLoadable}const Z=xO(),[Q,B]=J(_,R,Z);return Q.state==="loading"?(Re(_,Z,Q,B,R),S(_,Z)):(Ce(_),Tt(R,Q,B)),Q}function P(_,R){const C=Zg([l.has(_)?[Ee(l.get(_))]:[],fa(Lu(l,([O])=>O!==_),([,O])=>O)]);function H(O){for(const[Z,Q]of O)if(!Di(_,R,Z).is(Q))return!0;return!1}for(const O of C){if(O.stateVersions.get(R.version)||!H(O.depValuesDiscoveredSoFarDuringAsyncWork))return O.stateVersions.set(R.version,!0),O;O.stateVersions.set(R.version,!1)}}function q(_){return l.get(_)}function Re(_,R,C,H,O){l.set(_,{depValuesDiscoveredSoFarDuringAsyncWork:H,executionID:R,loadingLoadable:C,stateVersions:new Map([[O.version,!0]])})}function St(_,R,C){if(Ae(_,R)){const H=q(_);H!=null&&(H.depValuesDiscoveredSoFarDuringAsyncWork=C)}}function Ce(_){l.delete(_)}function Ae(_,R){var C;return R===((C=q(_))===null||C===void 0?void 0:C.executionID)}function bt(_){return Array.from(_.entries()).map(([R,C])=>[R,C.contents])}function Tt(_,R,C){_.atomValues.set(n,R);try{a.set(bt(C),R)}catch(H){throw se(`Problem with setting cache for selector "${n}": ${H.message}`)}}function Et(_){if(tr.includes(n)){const R=`Recoil selector has circular dependencies: ${tr.slice(tr.indexOf(n)).join(" → ")}`;return Li(se(R))}tr.push(n);try{return _()}finally{tr.pop()}}function an(_,R){const C=R.atomValues.get(n);return C??a.get(H=>{var O;return typeof H!="string"&&lr(!1),(O=SO(_,R,H))===null||O===void 0?void 0:O.contents})}function jt(_,R){return Et(()=>ae(_,R))}function oe(_){_.atomValues.delete(n)}function le(_,R){e==null&&lr(!1);for(const H of o){var C;const O=RO(H);(C=O.clearCache)===null||C===void 0||C.call(O,_,R)}o.clear(),oe(R),a.clear(),zd(_,e)}return i!=null?e=qd({key:n,nodeType:"selector",peek:an,get:jt,set:(R,C,H)=>{let O=!1;const Z=new Map;function Q({key:he}){if(O)throw se("Recoil: Async selector sets are not currently supported.");const fe=Di(R,C,he);if(fe.state==="hasValue")return fe.contents;if(fe.state==="loading"){const dt=`Getting value of asynchronous atom or selector "${he}" in a pending state while setting selector "${n}" is not yet supported.`;throw se(dt)}else throw fe.contents}function B(he,fe){if(O)throw se("Recoil: Async selector sets are not currently supported.");const dt=typeof fe=="function"?fe(Q(he)):fe;bO(R,C,he.key,dt).forEach((nt,st)=>Z.set(st,nt))}function ye(he){B(he,EO)}const Ie=i({set:B,get:Q,reset:ye},H);if(Ie!==void 0)throw we(Ie)?se("Recoil: Async selector sets are not currently supported."):se("Recoil: selector set should be a void function.");return O=!0,Z},init:f,invalidate:oe,clearCache:le,shouldDeleteConfigOnRelease:m,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c}):e=qd({key:n,nodeType:"selector",peek:an,get:jt,init:f,invalidate:oe,clearCache:le,shouldDeleteConfigOnRelease:m,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c})}xy.value=t=>new Ny(t);var Ps=xy;const{isLoadable:LO,loadableWithError:rc,loadableWithPromise:ic,loadableWithValue:fs}=pi,{WrappedValue:Ly}=Ry,{peekNodeInfo:DO}=Ln,{DEFAULT_VALUE:$n,DefaultValue:un,getConfigDeletionHandler:Dy,registerNode:OO,setConfigDeletionHandler:MO}=ht,{isRecoilValue:PO}=Ds,{getRecoilValueAsLoadable:UO,markRecoilValueModified:VO,setRecoilValue:Wd,setRecoilValueLoadable:$O}=Bt,{retainedByOptionWithDefault:BO}=cs,nr=t=>t instanceof Ly?t.value:t;function FO(t){const{key:e,persistence_UNSTABLE:n}=t,s=BO(t.retainedBy_UNSTABLE);let r=0;function i(S){return ic(S.then(D=>(o=fs(D),D)).catch(D=>{throw o=rc(D),D}))}let o=we(t.default)?i(t.default):LO(t.default)?t.default.state==="loading"?i(t.default.contents):t.default:fs(nr(t.default));o.contents;let a;const c=new Map;function l(S){return S}function u(S,D){const F=D.then(K=>{var J,$;return(($=((J=S.getState().nextTree)!==null&&J!==void 0?J:S.getState().currentTree).atomValues.get(e))===null||$===void 0?void 0:$.contents)===F&&Wd(S,x,K),K}).catch(K=>{var J,$;throw(($=((J=S.getState().nextTree)!==null&&J!==void 0?J:S.getState().currentTree).atomValues.get(e))===null||$===void 0?void 0:$.contents)===F&&$O(S,x,rc(K)),K});return F}function h(S,D,F){var K;r++;const J=()=>{var q;r--,(q=c.get(S))===null||q===void 0||q.forEach(Re=>Re()),c.delete(S)};if(S.getState().knownAtoms.add(e),o.state==="loading"){const q=()=>{var Re;((Re=S.getState().nextTree)!==null&&Re!==void 0?Re:S.getState().currentTree).atomValues.has(e)||VO(S,x)};o.contents.finally(q)}const $=(K=t.effects)!==null&&K!==void 0?K:t.effects_UNSTABLE;if($!=null){let Ae=function(oe){if(Re&&oe.key===e){const le=q;return le instanceof un?f(S,D):we(le)?ic(le.then(_=>_ instanceof un?o.toPromise():_)):fs(le)}return UO(S,oe)},bt=function(oe){return Ae(oe).toPromise()},Tt=function(oe){var le;const _=DO(S,(le=S.getState().nextTree)!==null&&le!==void 0?le:S.getState().currentTree,oe.key);return Re&&oe.key===e&&!(q instanceof un)?{..._,isSet:!0,loadable:Ae(oe)}:_},q=$n,Re=!0,St=!1,Ce=null;const Et=oe=>le=>{if(Re){const _=Ae(x),R=_.state==="hasValue"?_.contents:$n;q=typeof le=="function"?le(R):le,we(q)&&(q=q.then(C=>(Ce={effect:oe,value:C},C)))}else{if(we(le))throw se("Setting atoms to async values is not implemented.");typeof le!="function"&&(Ce={effect:oe,value:nr(le)}),Wd(S,x,typeof le=="function"?_=>{const R=nr(le(_));return Ce={effect:oe,value:R},R}:nr(le))}},an=oe=>()=>Et(oe)($n),jt=oe=>le=>{var _;const{release:R}=S.subscribeToTransactions(C=>{var H;let{currentTree:O,previousTree:Z}=C.getState();Z||(Z=O);const Q=(H=O.atomValues.get(e))!==null&&H!==void 0?H:o;if(Q.state==="hasValue"){var B,ye,Ie,he;const fe=Q.contents,dt=(B=Z.atomValues.get(e))!==null&&B!==void 0?B:o,qt=dt.state==="hasValue"?dt.contents:$n;((ye=Ce)===null||ye===void 0?void 0:ye.effect)!==oe||((Ie=Ce)===null||Ie===void 0?void 0:Ie.value)!==fe?le(fe,qt,!O.atomValues.has(e)):((he=Ce)===null||he===void 0?void 0:he.effect)===oe&&(Ce=null)}},e);c.set(S,[...(_=c.get(S))!==null&&_!==void 0?_:[],R])};for(const oe of $)try{const le=oe({node:x,storeID:S.storeID,parentStoreID_UNSTABLE:S.parentStoreID,trigger:F,setSelf:Et(oe),resetSelf:an(oe),onSet:jt(oe),getPromise:bt,getLoadable:Ae,getInfo_UNSTABLE:Tt});if(le!=null){var ae;c.set(S,[...(ae=c.get(S))!==null&&ae!==void 0?ae:[],le])}}catch(le){q=le,St=!0}if(Re=!1,!(q instanceof un)){var P;const oe=St?rc(q):we(q)?ic(u(S,q)):fs(nr(q));oe.contents,D.atomValues.set(e,oe),(P=S.getState().nextTree)===null||P===void 0||P.atomValues.set(e,oe)}}return J}function f(S,D){var F,K;return(F=(K=D.atomValues.get(e))!==null&&K!==void 0?K:a)!==null&&F!==void 0?F:o}function m(S,D){if(D.atomValues.has(e))return Ee(D.atomValues.get(e));if(D.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(n==null)return o;const F=D.nonvalidatedAtoms.get(e),K=n.validator(F,$n);return a=K instanceof un?o:fs(K),a}else return o}function p(){a=void 0}function w(S,D,F){if(D.atomValues.has(e)){const K=Ee(D.atomValues.get(e));if(K.state==="hasValue"&&F===K.contents)return new Map}else if(!D.nonvalidatedAtoms.has(e)&&F instanceof un)return new Map;return a=void 0,new Map().set(e,fs(F))}function T(){return Dy(e)!==void 0&&r<=0}const x=OO({key:e,nodeType:"atom",peek:f,get:m,set:w,init:h,invalidate:p,shouldDeleteConfigOnRelease:T,dangerouslyAllowMutability:t.dangerouslyAllowMutability,persistence_UNSTABLE:t.persistence_UNSTABLE?{type:t.persistence_UNSTABLE.type,backButton:t.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:s});return x}function ju(t){const{...e}=t,n="default"in t?t.default:new Promise(()=>{});return PO(n)?jO({...e,default:n}):FO({...e,default:n})}function jO(t){const e=ju({...t,default:$n,persistence_UNSTABLE:t.persistence_UNSTABLE===void 0?void 0:{...t.persistence_UNSTABLE,validator:s=>s instanceof un?s:Ee(t.persistence_UNSTABLE).validator(s,$n)},effects:t.effects,effects_UNSTABLE:t.effects_UNSTABLE}),n=Ps({key:`${t.key}__withFallback`,get:({get:s})=>{const r=s(e);return r instanceof un?t.default:r},set:({set:s},r)=>s(e,r),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:t.dangerouslyAllowMutability});return MO(n.key,Dy(t.key)),n}ju.value=t=>new Ly(t);var Oy=ju;class qO{constructor(e){var n;ne(this,"_map",void 0),ne(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(n=e==null?void 0:e.mapKey)!==null&&n!==void 0?n:s=>s}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,n){this._map.set(this._keyMapper(e),n)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var zO={MapCache:qO},WO=zO.MapCache,KO=Object.freeze({__proto__:null,MapCache:WO});const{LRUCache:Kd}=Ay,{MapCache:HO}=KO,Mi={equality:"reference",eviction:"none",maxSize:1/0};function GO({equality:t=Mi.equality,eviction:e=Mi.eviction,maxSize:n=Mi.maxSize}=Mi){const s=QO(t);return YO(e,n,s)}function QO(t){switch(t){case"reference":return e=>e;case"value":return e=>Ra(e)}throw se(`Unrecognized equality policy ${t}`)}function YO(t,e,n){switch(t){case"keep-all":return new HO({mapKey:n});case"lru":return new Kd({mapKey:n,maxSize:Ee(e)});case"most-recent":return new Kd({mapKey:n,maxSize:1})}throw se(`Unrecognized eviction policy ${t}`)}var My=GO;const{setConfigDeletionHandler:XO}=ht;function JO(t){var e,n;const s=My({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var i,o;const a=s.get(r);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:c,...l}=t,u="default"in t?t.default:new Promise(()=>{}),h=Oy({...l,key:`${t.key}__${(i=Ra(r))!==null&&i!==void 0?i:"void"}`,default:typeof u=="function"?u(r):u,retainedBy_UNSTABLE:typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE,effects:typeof t.effects=="function"?t.effects(r):typeof t.effects_UNSTABLE=="function"?t.effects_UNSTABLE(r):(o=t.effects)!==null&&o!==void 0?o:t.effects_UNSTABLE});return s.set(r,h),XO(h.key,()=>{s.delete(r)}),h}}var ZO=JO;const{setConfigDeletionHandler:eM}=ht;let tM=0;function nM(t){var e,n;const s=My({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var i;let o;try{o=s.get(r)}catch(f){throw se(`Problem with cache lookup for selector ${t.key}: ${f.message}`)}if(o!=null)return o;const a=`${t.key}__selectorFamily/${(i=Ra(r,{allowFunctions:!0}))!==null&&i!==void 0?i:"void"}/${tM++}`,c=f=>t.get(r)(f),l=t.cachePolicy_UNSTABLE,u=typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE;let h;if(t.set!=null){const f=t.set;h=Ps({key:a,get:c,set:(p,w)=>f(r)(p,w),cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u})}else h=Ps({key:a,get:c,cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u});return s.set(r,h),eM(h.key,()=>{s.delete(r)}),h}}var Dn=nM;const sM=Dn({key:"__constant",get:t=>()=>t,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function rM(t){return sM(t)}var iM=rM;const oM=Dn({key:"__error",get:t=>()=>{throw se(t)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function aM(t){return oM(t)}var cM=aM;function lM(t){return t}var uM=lM;const{loadableWithError:Py,loadableWithPromise:Uy,loadableWithValue:Vy}=pi;function Ca(t,e){const n=Array(e.length).fill(void 0),s=Array(e.length).fill(void 0);for(const[r,i]of e.entries())try{n[r]=t(i)}catch(o){s[r]=o}return[n,s]}function hM(t){return t!=null&&!we(t)}function Aa(t){return Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(e=>t[e])}function el(t,e){return Array.isArray(t)?e:Object.getOwnPropertyNames(t).reduce((n,s,r)=>({...n,[s]:e[r]}),{})}function ws(t,e,n){const s=n.map((r,i)=>r==null?Vy(e[i]):we(r)?Uy(r):Py(r));return el(t,s)}function dM(t,e){return e.map((n,s)=>n===void 0?t[s]:n)}const fM=Dn({key:"__waitForNone",get:t=>({get:e})=>{const n=Aa(t),[s,r]=Ca(e,n);return ws(t,s,r)},dangerouslyAllowMutability:!0}),pM=Dn({key:"__waitForAny",get:t=>({get:e})=>{const n=Aa(t),[s,r]=Ca(e,n);return r.some(i=>!we(i))?ws(t,s,r):new Promise(i=>{for(const[o,a]of r.entries())we(a)&&a.then(c=>{s[o]=c,r[o]=void 0,i(ws(t,s,r))}).catch(c=>{r[o]=c,i(ws(t,s,r))})})},dangerouslyAllowMutability:!0}),mM=Dn({key:"__waitForAll",get:t=>({get:e})=>{const n=Aa(t),[s,r]=Ca(e,n);if(r.every(o=>o==null))return el(t,s);const i=r.find(hM);if(i!=null)throw i;return Promise.all(r).then(o=>el(t,dM(s,o)))},dangerouslyAllowMutability:!0}),gM=Dn({key:"__waitForAllSettled",get:t=>({get:e})=>{const n=Aa(t),[s,r]=Ca(e,n);return r.every(i=>!we(i))?ws(t,s,r):Promise.all(r.map((i,o)=>we(i)?i.then(a=>{s[o]=a,r[o]=void 0}).catch(a=>{s[o]=void 0,r[o]=a}):null)).then(()=>ws(t,s,r))},dangerouslyAllowMutability:!0}),yM=Dn({key:"__noWait",get:t=>({get:e})=>{try{return Ps.value(Vy(e(t)))}catch(n){return Ps.value(we(n)?Uy(n):Py(n))}},dangerouslyAllowMutability:!0});var vM={waitForNone:fM,waitForAny:pM,waitForAll:mM,waitForAllSettled:gM,noWait:yM};const{RecoilLoadable:_M}=pi,{DefaultValue:wM}=ht,{RecoilRoot:SM,useRecoilStoreID:bM}=on,{isRecoilValue:TM}=Ds,{retentionZone:EM}=ma,{freshSnapshot:IM}=Sa,{useRecoilState:RM,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:CM,useRecoilStateLoadable:AM,useRecoilValue:NM,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:kM,useRecoilValueLoadable:xM,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:LM,useResetRecoilState:DM,useSetRecoilState:OM}=zD,{useGotoRecoilSnapshot:MM,useRecoilSnapshot:PM,useRecoilTransactionObserver:UM}=Sy,{useRecoilCallback:VM}=Iy,{noWait:$M,waitForAll:BM,waitForAllSettled:FM,waitForAny:jM,waitForNone:qM}=vM;var zM={DefaultValue:wM,isRecoilValue:TM,RecoilLoadable:_M,RecoilEnv:Ks,RecoilRoot:SM,useRecoilStoreID:bM,useRecoilBridgeAcrossReactRoots_UNSTABLE:y1,atom:Oy,selector:Ps,atomFamily:ZO,selectorFamily:Dn,constSelector:iM,errorSelector:cM,readOnlySelector:uM,noWait:$M,waitForNone:qM,waitForAny:jM,waitForAll:BM,waitForAllSettled:FM,useRecoilValue:NM,useRecoilValueLoadable:xM,useRecoilState:RM,useRecoilStateLoadable:AM,useSetRecoilState:OM,useResetRecoilState:DM,useGetRecoilValueInfo_UNSTABLE:h1,useRecoilRefresher_UNSTABLE:K1,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:LM,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:kM,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:CM,useRecoilCallback:VM,useRecoilTransaction_UNSTABLE:X1,useGotoRecoilSnapshot:MM,useRecoilSnapshot:PM,useRecoilTransactionObserver_UNSTABLE:UM,snapshot_UNSTABLE:IM,useRetain:Uu,retentionZone:EM},WM=zM.RecoilRoot;function KM(){return d.jsx(WM,{children:d.jsx("div",{className:"App",children:d.jsx(Xv,{children:d.jsxs(Kv,{children:[d.jsx(ln,{path:"/",element:d.jsx(kR,{})}),d.jsx(ln,{path:"/signin",element:d.jsx(ZC,{})}),d.jsx(ln,{path:"/signup",element:d.jsx(UC,{})}),d.jsx(ln,{path:"/make-tree",element:d.jsx(oC,{})}),d.jsx(ln,{path:"/share-tree/:uid",element:d.jsx(wN,{})}),d.jsx(ln,{path:"/message-custom/:uid",element:d.jsx(LN,{})}),d.jsx(ln,{path:"/write-message/:uid/:flowerName",element:d.jsx(ZN,{})})]})})})})}ac.createRoot(document.getElementById("root")).render(d.jsx(Se.StrictMode,{children:d.jsx(KM,{})}));
