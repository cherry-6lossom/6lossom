import{r as w,a as My,R as ec,b as we,c as Py}from"./react-ed0a12b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var d={},Uy={get exports(){return d},set exports(t){d=t}},vo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy=w,$y=Symbol.for("react.element"),By=Symbol.for("react.fragment"),Fy=Object.prototype.hasOwnProperty,jy=Vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qy={key:!0,ref:!0,__self:!0,__source:!0};function Bd(t,e,n){var s,r={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)Fy.call(e,s)&&!qy.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:$y,type:t,key:i,ref:o,props:r,_owner:jy.current}}vo.Fragment=By;vo.jsx=Bd;vo.jsxs=Bd;(function(t){t.exports=vo})(Uy);var tc={},Vu=My;tc.createRoot=Vu.createRoot,tc.hydrateRoot=Vu.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr(){return Sr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Sr.apply(this,arguments)}var pn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pn||(pn={}));const $u="popstate";function zy(t){t===void 0&&(t={});function e(s,r){let{pathname:i,search:o,hash:a}=s.location;return nc("",{pathname:i,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(s,r){return typeof r=="string"?r:Fd(r)}return Ky(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Wy(){return Math.random().toString(36).substr(2,8)}function Bu(t,e){return{usr:t.state,key:t.key,idx:e}}function nc(t,e,n,s){return n===void 0&&(n=null),Sr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||s||Wy()})}function Fd(t){let{pathname:e="/",search:n="",hash:s=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substr(s),t=t.substr(0,s)),t&&(e.pathname=t)}return e}function Ky(t,e,n,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,o=r.history,a=pn.Pop,c=null,l=u();l==null&&(l=0,o.replaceState(Sr({},o.state,{idx:l}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=pn.Pop;let T=u(),M=T==null?null:T-l;l=T,c&&c({action:a,location:_.location,delta:M})}function f(T,M){a=pn.Push;let S=nc(_.location,T,M);n&&n(S,T),l=u()+1;let A=Bu(S,l),W=_.createHref(S);try{o.pushState(A,"",W)}catch{r.location.assign(W)}i&&c&&c({action:a,location:_.location,delta:1})}function p(T,M){a=pn.Replace;let S=nc(_.location,T,M);n&&n(S,T),l=u();let A=Bu(S,l),W=_.createHref(S);o.replaceState(A,"",W),i&&c&&c({action:a,location:_.location,delta:0})}function m(T){let M=r.location.origin!=="null"?r.location.origin:r.location.href,S=typeof T=="string"?T:Fd(T);return Fe(M,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,M)}let _={get action(){return a},get location(){return t(r,o)},listen(T){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener($u,h),c=T,()=>{r.removeEventListener($u,h),c=null}},createHref(T){return e(r,T)},createURL:m,encodeLocation(T){let M=m(T);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:f,replace:p,go(T){return o.go(T)}};return _}var Fu;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fu||(Fu={}));function Hy(t,e,n){n===void 0&&(n="/");let s=typeof e=="string"?Os(e):e,r=zd(s.pathname||"/",n);if(r==null)return null;let i=jd(t);Gy(i);let o=null;for(let a=0;o==null&&a<i.length;++a)o=sv(i[a],ov(r));return o}function jd(t,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let r=(i,o,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Fe(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let l=Fn([s,c.relativePath]),u=n.concat(c);i.children&&i.children.length>0&&(Fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),jd(i.children,e,u,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:tv(l,i.index),routesMeta:u})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))r(i,o);else for(let c of qd(i.path))r(i,o,c)}),e}function qd(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let o=qd(s.join("/")),a=[];return a.push(...o.map(c=>c===""?i:[i,c].join("/"))),r&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Gy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nv(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const Qy=/^:\w+$/,Yy=3,Xy=2,Jy=1,Zy=10,ev=-2,ju=t=>t==="*";function tv(t,e){let n=t.split("/"),s=n.length;return n.some(ju)&&(s+=ev),e&&(s+=Xy),n.filter(r=>!ju(r)).reduce((r,i)=>r+(Qy.test(i)?Yy:i===""?Jy:Zy),s)}function nv(t,e){return t.length===e.length&&t.slice(0,-1).every((s,r)=>s===e[r])?t[t.length-1]-e[e.length-1]:0}function sv(t,e){let{routesMeta:n}=t,s={},r="/",i=[];for(let o=0;o<n.length;++o){let a=n[o],c=o===n.length-1,l=r==="/"?e:e.slice(r.length)||"/",u=rv({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},l);if(!u)return null;Object.assign(s,u.params);let h=a.route;i.push({params:s,pathname:Fn([r,u.pathname]),pathnameBase:dv(Fn([r,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(r=Fn([r,u.pathnameBase]))}return i}function rv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=iv(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:s.reduce((l,u,h)=>{if(u==="*"){let f=a[h]||"";o=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}return l[u]=av(a[h]||"",u),l},{}),pathname:i,pathnameBase:o,pattern:t}}function iv(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let s=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(s.push(a),"/([^\\/]+)"));return t.endsWith("*")?(s.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),s]}function ov(t){try{return decodeURI(t)}catch(e){return Gc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function av(t,e){try{return decodeURIComponent(t)}catch(n){return Gc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function zd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}function cv(t,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:r=""}=typeof t=="string"?Os(t):t;return{pathname:n?n.startsWith("/")?n:lv(n,e):e,search:fv(s),hash:pv(r)}}function lv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Ia(t,e,n,s){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uv(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hv(t,e,n,s){s===void 0&&(s=!1);let r;typeof t=="string"?r=Os(t):(r=Sr({},t),Fe(!r.pathname||!r.pathname.includes("?"),Ia("?","pathname","search",r)),Fe(!r.pathname||!r.pathname.includes("#"),Ia("#","pathname","hash",r)),Fe(!r.search||!r.search.includes("#"),Ia("#","search","hash",r)));let i=t===""||r.pathname==="",o=i?"/":r.pathname,a;if(s||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}a=h>=0?e[h]:"/"}let c=cv(r,a),l=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const Fn=t=>t.join("/").replace(/\/\/+/g,"/"),dv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pv=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gv=["post","put","patch","delete"];[...gv];/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const vv=typeof Object.is=="function"?Object.is:yv,{useState:_v,useEffect:wv,useLayoutEffect:Sv,useDebugValue:bv}=ec;function Tv(t,e,n){const s=e(),[{inst:r},i]=_v({inst:{value:s,getSnapshot:e}});return Sv(()=>{r.value=s,r.getSnapshot=e,Ra(r)&&i({inst:r})},[t,s,e]),wv(()=>(Ra(r)&&i({inst:r}),t(()=>{Ra(r)&&i({inst:r})})),[t]),bv(s),s}function Ra(t){const e=t.getSnapshot,n=t.value;try{const s=e();return!vv(n,s)}catch{return!0}}function Ev(t,e,n){return e()}const Iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rv=!Iv,Cv=Rv?Ev:Tv;"useSyncExternalStore"in ec&&(t=>t.useSyncExternalStore)(ec);const Wd=w.createContext(null),Kd=w.createContext(null),Qc=w.createContext(null),_o=w.createContext(null),Ms=w.createContext({outlet:null,matches:[]}),Hd=w.createContext(null);function sc(){return sc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},sc.apply(this,arguments)}function wo(){return w.useContext(_o)!=null}function Gd(){return wo()||Fe(!1),w.useContext(_o).location}function ts(){wo()||Fe(!1);let{basename:t,navigator:e}=w.useContext(Qc),{matches:n}=w.useContext(Ms),{pathname:s}=Gd(),r=JSON.stringify(uv(n).map(a=>a.pathnameBase)),i=w.useRef(!1);return w.useEffect(()=>{i.current=!0}),w.useCallback(function(a,c){if(c===void 0&&(c={}),!i.current)return;if(typeof a=="number"){e.go(a);return}let l=hv(a,JSON.parse(r),s,c.relative==="path");t!=="/"&&(l.pathname=l.pathname==="/"?t:Fn([t,l.pathname])),(c.replace?e.replace:e.push)(l,c.state,c)},[t,e,r,s])}function So(){let{matches:t}=w.useContext(Ms),e=t[t.length-1];return e?e.params:{}}function Av(t,e){wo()||Fe(!1);let{navigator:n}=w.useContext(Qc),s=w.useContext(Kd),{matches:r}=w.useContext(Ms),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let c=Gd(),l;if(e){var u;let _=typeof e=="string"?Os(e):e;a==="/"||(u=_.pathname)!=null&&u.startsWith(a)||Fe(!1),l=_}else l=c;let h=l.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",p=Hy(t,{pathname:f}),m=Lv(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Fn([a,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Fn([a,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),r,s||void 0);return e&&m?w.createElement(_o.Provider,{value:{location:sc({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:pn.Pop}},m):m}function Nv(){let t=Pv(),e=mv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:r},n):null,i)}class kv extends w.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(Ms.Provider,{value:this.props.routeContext},w.createElement(Hd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xv(t){let{routeContext:e,match:n,children:s}=t,r=w.useContext(Wd);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Ms.Provider,{value:e},s)}function Lv(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let s=t,r=n==null?void 0:n.errors;if(r!=null){let i=s.findIndex(o=>o.route.id&&(r==null?void 0:r[o.route.id]));i>=0||Fe(!1),s=s.slice(0,Math.min(s.length,i+1))}return s.reduceRight((i,o,a)=>{let c=o.route.id?r==null?void 0:r[o.route.id]:null,l=null;n&&(o.route.ErrorBoundary?l=w.createElement(o.route.ErrorBoundary,null):o.route.errorElement?l=o.route.errorElement:l=w.createElement(Nv,null));let u=e.concat(s.slice(0,a+1)),h=()=>{let f=i;return c?f=l:o.route.Component?f=w.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),w.createElement(xv,{match:o,routeContext:{outlet:i,matches:u},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?w.createElement(kv,{location:n.location,component:l,error:c,children:h(),routeContext:{outlet:null,matches:u}}):h()},null)}var qu;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(qu||(qu={}));var ji;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ji||(ji={}));function Dv(t){let e=w.useContext(Kd);return e||Fe(!1),e}function Ov(t){let e=w.useContext(Ms);return e||Fe(!1),e}function Mv(t){let e=Ov(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function Pv(){var t;let e=w.useContext(Hd),n=Dv(ji.UseRouteError),s=Mv(ji.UseRouteError);return e||((t=n.errors)==null?void 0:t[s])}function cn(t){Fe(!1)}function Uv(t){let{basename:e="/",children:n=null,location:s,navigationType:r=pn.Pop,navigator:i,static:o=!1}=t;wo()&&Fe(!1);let a=e.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:a,navigator:i,static:o}),[a,i,o]);typeof s=="string"&&(s=Os(s));let{pathname:l="/",search:u="",hash:h="",state:f=null,key:p="default"}=s,m=w.useMemo(()=>{let _=zd(l,a);return _==null?null:{location:{pathname:_,search:u,hash:h,state:f,key:p},navigationType:r}},[a,l,u,h,f,p,r]);return m==null?null:w.createElement(Qc.Provider,{value:c},w.createElement(_o.Provider,{children:n,value:m}))}function Vv(t){let{children:e,location:n}=t,s=w.useContext(Wd),r=s&&!e?s.router.routes:rc(e);return Av(r,n)}var zu;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(zu||(zu={}));new Promise(()=>{});function rc(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(s,r)=>{if(!w.isValidElement(s))return;let i=[...e,r];if(s.type===w.Fragment){n.push.apply(n,rc(s.props.children,i));return}s.type!==cn&&Fe(!1),!s.props.index||!s.props.children||Fe(!1);let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=rc(s.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $v(t){let{basename:e,children:n,window:s}=t,r=w.useRef();r.current==null&&(r.current=zy({window:s,v5Compat:!0}));let i=r.current,[o,a]=w.useState({action:i.action,location:i.location});return w.useLayoutEffect(()=>i.listen(a),[i]),w.createElement(Uv,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:i})}var Wu;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Wu||(Wu={}));var Ku;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ku||(Ku={}));const Bv="_homeContainer_1eed5_7",Fv="_homeLogo_1eed5_29",jv="_homeMainTitle_1eed5_39",qv="_moonLogo_1eed5_44",zv="_homeTitleInfo_1eed5_49",Wv="_homeTitle_1eed5_49",Kv="_homeTitleBorder_1eed5_77",Hv="_homeTitleShadow_1eed5_89",Gv="_homeSubTitle_1eed5_101",Qv="_tree_1eed5_120",Yv="_blossomTree_1eed5_125",Xv="_loginButtonList_1eed5_131",Jv="_generalButton_1eed5_139",Zv="_googleButton_1eed5_153",e_="_toSignUpPageWithDescription_1eed5_173",t_="_toSignUpPageLink_1eed5_176",Ke={homeContainer:Bv,homeLogo:Fv,homeMainTitle:jv,moonLogo:qv,homeTitleInfo:zv,homeTitle:Wv,homeTitleBorder:Kv,homeTitleShadow:Hv,homeSubTitle:Gv,tree:Qv,blossomTree:Yv,loginButtonList:Xv,generalButton:Jv,googleButton:Zv,toSignUpPageWithDescription:e_,toSignUpPageLink:t_};/**
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
 */const Qd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},n_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):n_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new s_;const f=i<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r_=function(t){const e=Qd(t);return Yd.encodeByteArray(e,!0)},qi=function(t){return r_(t).replace(/\./g,"")},Xd=function(t){try{return Yd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function i_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const o_=()=>i_().__FIREBASE_DEFAULTS__,a_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xd(t[1]);return e&&JSON.parse(e)},Yc=()=>{try{return o_()||a_()||c_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jd=t=>{var e,n;return(n=(e=Yc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},l_=t=>{const e=Jd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},u_=()=>{var t;return(t=Yc())===null||t===void 0?void 0:t.config},Zd=t=>{var e;return(e=Yc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class h_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function d_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[qi(JSON.stringify(n)),qi(JSON.stringify(o)),a].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function p_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g_(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y_(){try{return typeof indexedDB=="object"}catch{return!1}}function v_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const __="FirebaseError";class nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=__,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?w_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new nn(r,a,s)}}function w_(t,e){return t.replace(S_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const S_=/\{\$([^}]+)}/g;function b_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Hu(i)&&Hu(o)){if(!zi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Hu(t){return t!==null&&typeof t=="object"}/**
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
 */function Vr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function nr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function sr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function T_(t,e){const n=new E_(t,e);return n.subscribe.bind(n)}class E_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");I_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ca),r.error===void 0&&(r.error=Ca),r.complete===void 0&&(r.complete=Ca);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ca(){}/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class R_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new h_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(A_(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:C_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function C_(t){return t===On?void 0:t}function A_(t){return t.instantiationMode==="EAGER"}/**
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
 */class N_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new R_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const k_={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},x_=de.INFO,L_={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},D_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=L_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xc{constructor(e){this.name=e,this._logLevel=x_,this._logHandler=D_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?k_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const O_=(t,e)=>e.some(n=>t instanceof n);let Gu,Qu;function M_(){return Gu||(Gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P_(){return Qu||(Qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ef=new WeakMap,ic=new WeakMap,tf=new WeakMap,Aa=new WeakMap,Jc=new WeakMap;function U_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ef.set(n,t)}).catch(()=>{}),Jc.set(e,t),e}function V_(t){if(ic.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ic.set(t,e)}let oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $_(t){oc=t(oc)}function B_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Na(this),e,...n);return tf.set(s,e.sort?e.sort():[e]),mn(s)}:P_().includes(t)?function(...e){return t.apply(Na(this),e),mn(ef.get(this))}:function(...e){return mn(t.apply(Na(this),e))}}function F_(t){return typeof t=="function"?B_(t):(t instanceof IDBTransaction&&V_(t),O_(t,M_())?new Proxy(t,oc):t)}function mn(t){if(t instanceof IDBRequest)return U_(t);if(Aa.has(t))return Aa.get(t);const e=F_(t);return e!==t&&(Aa.set(t,e),Jc.set(e,t)),e}const Na=t=>Jc.get(t);function j_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=mn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(mn(o.result),c.oldVersion,c.newVersion,mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const q_=["get","getKey","getAll","getAllKeys","count"],z_=["put","add","delete","clear"],ka=new Map;function Yu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=z_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||q_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ka.set(e,i),i}$_(t=>({...t,get:(e,n,s)=>Yu(e,n)||t.get(e,n,s),has:(e,n)=>!!Yu(e,n)||t.has(e,n)}));/**
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
 */class W_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(K_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function K_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",Xu="0.9.4";/**
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
 */const Hn=new Xc("@firebase/app"),H_="@firebase/app-compat",G_="@firebase/analytics-compat",Q_="@firebase/analytics",Y_="@firebase/app-check-compat",X_="@firebase/app-check",J_="@firebase/auth",Z_="@firebase/auth-compat",ew="@firebase/database",tw="@firebase/database-compat",nw="@firebase/functions",sw="@firebase/functions-compat",rw="@firebase/installations",iw="@firebase/installations-compat",ow="@firebase/messaging",aw="@firebase/messaging-compat",cw="@firebase/performance",lw="@firebase/performance-compat",uw="@firebase/remote-config",hw="@firebase/remote-config-compat",dw="@firebase/storage",fw="@firebase/storage-compat",pw="@firebase/firestore",mw="@firebase/firestore-compat",gw="firebase",yw="9.17.2";/**
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
 */const cc="[DEFAULT]",vw={[ac]:"fire-core",[H_]:"fire-core-compat",[Q_]:"fire-analytics",[G_]:"fire-analytics-compat",[X_]:"fire-app-check",[Y_]:"fire-app-check-compat",[J_]:"fire-auth",[Z_]:"fire-auth-compat",[ew]:"fire-rtdb",[tw]:"fire-rtdb-compat",[nw]:"fire-fn",[sw]:"fire-fn-compat",[rw]:"fire-iid",[iw]:"fire-iid-compat",[ow]:"fire-fcm",[aw]:"fire-fcm-compat",[cw]:"fire-perf",[lw]:"fire-perf-compat",[uw]:"fire-rc",[hw]:"fire-rc-compat",[dw]:"fire-gcs",[fw]:"fire-gcs-compat",[pw]:"fire-fst",[mw]:"fire-fst-compat","fire-js":"fire-js",[gw]:"fire-js-all"};/**
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
 */const Wi=new Map,lc=new Map;function _w(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(lc.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,t);for(const n of Wi.values())_w(n,t);return!0}function Zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ww={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gn=new Ur("app","Firebase",ww);/**
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
 */class Sw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=yw;function nf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:cc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw gn.create("bad-app-name",{appName:String(r)});if(n||(n=u_()),!n)throw gn.create("no-options");const i=Wi.get(r);if(i){if(zi(n,i.options)&&zi(s,i.config))return i;throw gn.create("duplicate-app",{appName:r})}const o=new N_(r);for(const c of lc.values())o.addComponent(c);const a=new Sw(n,s,o);return Wi.set(r,a),a}function sf(t=cc){const e=Wi.get(t);if(!e&&t===cc)return nf();if(!e)throw gn.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let r=(s=vw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(a.join(" "));return}ys(new Kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bw="firebase-heartbeat-database",Tw=1,br="firebase-heartbeat-store";let xa=null;function rf(){return xa||(xa=j_(bw,Tw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(br)}}}).catch(t=>{throw gn.create("idb-open",{originalErrorMessage:t.message})})),xa}async function Ew(t){try{return(await rf()).transaction(br).objectStore(br).get(of(t))}catch(e){if(e instanceof nn)Hn.warn(e.message);else{const n=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function Ju(t,e){try{const s=(await rf()).transaction(br,"readwrite");return await s.objectStore(br).put(e,of(t)),s.done}catch(n){if(n instanceof nn)Hn.warn(n.message);else{const s=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(s.message)}}}function of(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Iw=1024,Rw=30*24*60*60*1e3;class Cw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Rw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zu(),{heartbeatsToSend:n,unsentEntries:s}=Aw(this._heartbeatsCache.heartbeats),r=qi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Zu(){return new Date().toISOString().substring(0,10)}function Aw(t,e=Iw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),eh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),eh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return y_()?v_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ew(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function eh(t){return qi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kw(t){ys(new Kn("platform-logger",e=>new W_(e),"PRIVATE")),ys(new Kn("heartbeat",e=>new Cw(e),"PRIVATE")),yn(ac,Xu,t),yn(ac,Xu,"esm2017"),yn("fire-js","")}kw("");function el(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function af(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xw=af,cf=new Ur("auth","Firebase",af());/**
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
 */const th=new Xc("@firebase/auth");function Di(t,...e){th.logLevel<=de.ERROR&&th.error(`Auth (${$r}): ${t}`,...e)}/**
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
 */function gt(t,...e){throw tl(t,...e)}function Dt(t,...e){return tl(t,...e)}function lf(t,e,n){const s=Object.assign(Object.assign({},xw()),{[e]:n});return new Ur("auth","Firebase",s).create(e,{appName:t.name})}function Lw(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&gt(t,"argument-error"),lf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return cf.create(t,...e)}function z(t,e,...n){if(!t)throw tl(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Di(e),new Error(e)}function Jt(t,e){t||Gt(e)}/**
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
 */const nh=new Map;function Qt(t){Jt(t instanceof Function,"Expected a class definition");let e=nh.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nh.set(t,e),e)}/**
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
 */function Dw(t,e){const n=Zc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(zi(i,e??{}))return r;gt(r,"already-initialized")}return n.initialize({options:e})}function Ow(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mw(){return sh()==="http:"||sh()==="https:"}function sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Pw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mw()||p_()||"connection"in navigator)?navigator.onLine:!0}function Uw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Br{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=f_()||m_()}get(){return Pw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nl(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const $w=new Br(3e4,6e4);function Ps(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ns(t,e,n,s,r={}){return hf(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Vr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),uf.fetch()(df(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function hf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Vw),e);try{const r=new Bw(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw lf(t,u,l);gt(t,u)}}catch(r){if(r instanceof nn)throw r;gt(t,"internal-error",{message:String(r)})}}async function Fr(t,e,n,s,r={}){const i=await ns(t,e,n,s,r);return"mfaPendingCredential"in i&&gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function df(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?nl(t.config,r):`${t.config.apiScheme}://${r}`}class Bw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),$w.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Dt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Fw(t,e){return ns(t,"POST","/v1/accounts:delete",e)}async function jw(t,e){return ns(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function lr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qw(t,e=!1){const n=Ne(t),s=await n.getIdToken(e),r=sl(s);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:lr(La(r.auth_time)),issuedAtTime:lr(La(r.iat)),expirationTime:lr(La(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function La(t){return Number(t)*1e3}function sl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Di("JWT malformed, contained fewer than 3 sections"),null;try{const r=Xd(n);return r?JSON.parse(r):(Di("Failed to decode base64 JWT payload"),null)}catch(r){return Di("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function zw(t){const e=sl(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nn&&Ww(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ww({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Kw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ff{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ki(t){var e;const n=t.auth,s=await t.getIdToken(),r=await vs(t,jw(n,{idToken:s}));z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qw(i.providerUserInfo):[],a=Gw(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ff(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Hw(t){const e=Ne(t);await Ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gw(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Qw(t){return t.map(e=>{var{providerId:n}=e,s=el(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Yw(t,e){const n=await hf(t,{},async()=>{const s=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=df(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Yw(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Tr;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
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
 */function an(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=el(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ff(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qw(this,e)}reload(){return Hw(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ki(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vs(this,Fw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:W,isAnonymous:F,providerData:q,stsTokenManager:j}=n;z(A&&j,e,"internal-error");const ie=Tr.fromJSON(this.name,j);z(typeof A=="string",e,"internal-error"),an(h,e.name),an(f,e.name),z(typeof W=="boolean",e,"internal-error"),z(typeof F=="boolean",e,"internal-error"),an(p,e.name),an(m,e.name),an(_,e.name),an(T,e.name),an(M,e.name),an(S,e.name);const U=new jn({uid:A,auth:e,email:f,emailVerified:W,displayName:h,isAnonymous:F,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:ie,createdAt:M,lastLoginAt:S});return q&&Array.isArray(q)&&(U.providerData=q.map(L=>Object.assign({},L))),T&&(U._redirectEventId=T),U}static async _fromIdTokenResponse(e,n,s=!1){const r=new Tr;r.updateFromServerResponse(n);const i=new jn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ki(i),i}}/**
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
 */class pf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pf.type="NONE";const rh=pf;/**
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
 */function Oi(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Oi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Oi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ds(Qt(rh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Qt(rh);const o=Oi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=jn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ds(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ds(i,e,s))}}/**
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
 */function ih(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_f(e))return"Blackberry";if(wf(e))return"Webos";if(rl(e))return"Safari";if((e.includes("chrome/")||gf(e))&&!e.includes("edge/"))return"Chrome";if(vf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function mf(t=et()){return/firefox\//i.test(t)}function rl(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gf(t=et()){return/crios\//i.test(t)}function yf(t=et()){return/iemobile/i.test(t)}function vf(t=et()){return/android/i.test(t)}function _f(t=et()){return/blackberry/i.test(t)}function wf(t=et()){return/webos/i.test(t)}function bo(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xw(t=et()){var e;return bo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jw(){return g_()&&document.documentMode===10}function Sf(t=et()){return bo(t)||vf(t)||wf(t)||_f(t)||/windows phone/i.test(t)||yf(t)}function Zw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function bf(t,e=[]){let n;switch(t){case"Browser":n=ih(et());break;case"Worker":n=`${ih(et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${s}`}/**
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
 */class eS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class tS{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oh(this),this.idTokenSubscription=new oh(this),this.beforeStateQueue=new eS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ki(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Us(t){return Ne(t)}class oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=T_(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function nS(t,e,n){const s=Us(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Tf(e),{host:o,port:a}=sS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||rS()}function Tf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sS(t){const e=Tf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ah(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ah(o)}}}function ah(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class il{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}async function iS(t,e){return ns(t,"POST","/v1/accounts:update",e)}/**
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
 */async function oS(t,e){return Fr(t,"POST","/v1/accounts:signInWithPassword",Ps(t,e))}async function aS(t,e){return ns(t,"POST","/v1/accounts:sendOobCode",Ps(t,e))}async function cS(t,e){return aS(t,e)}/**
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
 */async function lS(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}async function uS(t,e){return Fr(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}/**
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
 */class Er extends il{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Er(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Er(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return oS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lS(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return iS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uS(e,{idToken:n,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fs(t,e){return Fr(t,"POST","/v1/accounts:signInWithIdp",Ps(t,e))}/**
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
 */const hS="http://localhost";class Gn extends il{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=el(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Gn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:hS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vr(n)}return e}}/**
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
 */function dS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fS(t){const e=nr(sr(t)).link,n=e?nr(sr(e)).deep_link_id:null,s=nr(sr(t)).deep_link_id;return(s?nr(sr(s)).link:null)||s||n||e||t}class ol{constructor(e){var n,s,r,i,o,a;const c=nr(sr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=dS((r=c.mode)!==null&&r!==void 0?r:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fS(e);try{return new ol(n)}catch{return null}}}/**
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
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return Er._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ol.parseLink(n);return z(s,"argument-error"),Er._fromEmailAndCode(e,s.code,s.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class al{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends al{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends jr{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class Ht extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ht.credential(n,s)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
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
 */class hn extends jr{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class dn extends jr{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
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
 */async function pS(t,e){return Fr(t,"POST","/v1/accounts:signUp",Ps(t,e))}/**
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
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await jn._fromIdTokenResponse(e,s,r),o=ch(s);return new Qn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ch(s);return new Qn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ch(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Hi extends nn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Hi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Hi(e,n,s,r)}}function Ef(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hi._fromErrorAndOperation(t,i,e,s):i})}async function mS(t,e,n=!1){const s=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",s)}/**
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
 */async function gS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await vs(t,Ef(s,r,e,t),n);z(i.idToken,s,"internal-error");const o=sl(i.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),Qn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gt(s,"user-mismatch"),i}}/**
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
 */async function If(t,e,n=!1){const s="signIn",r=await Ef(t,s,e),i=await Qn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function yS(t,e){return If(Us(t),e)}/**
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
 */function vS(t,e,n){var s;z(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function _S(t,e,n){const s=Us(t),r=await pS(s,{returnSecureToken:!0,email:e,password:n}),i=await Qn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function wS(t,e,n){return yS(Ne(t),Vs.credential(e,n))}async function SS(t,e){const n=Ne(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&vS(n.auth,r,e);const{email:i}=await cS(n.auth,r);i!==t.email&&await t.reload()}/**
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
 */async function bS(t,e){return ns(t,"POST","/v1/accounts:update",e)}/**
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
 */async function TS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ne(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vs(s,bS(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function ES(t,e,n,s){return Ne(t).onIdTokenChanged(e,n,s)}function IS(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function RS(t,e,n,s){return Ne(t).onAuthStateChanged(e,n,s)}function CS(t){return Ne(t).signOut()}const Gi="__sak";/**
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
 */class Rf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gi,"1"),this.storage.removeItem(Gi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function AS(){const t=et();return rl(t)||bo(t)}const NS=1e3,kS=10;class Cf extends Rf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=AS()&&Zw(),this.fallbackToPolling=Sf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Jw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},NS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cf.type="LOCAL";const xS=Cf;/**
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
 */class Af extends Rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Af.type="SESSION";const Nf=Af;/**
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
 */function LS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class To{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new To(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await LS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}To.receivers=[];/**
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
 */function cl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=cl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ot(){return window}function OS(t){Ot().location.href=t}/**
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
 */function kf(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function MS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function US(){return kf()?self:null}/**
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
 */const xf="firebaseLocalStorageDb",VS=1,Qi="firebaseLocalStorage",Lf="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eo(t,e){return t.transaction([Qi],e?"readwrite":"readonly").objectStore(Qi)}function $S(){const t=indexedDB.deleteDatabase(xf);return new qr(t).toPromise()}function hc(){const t=indexedDB.open(xf,VS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Qi,{keyPath:Lf})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Qi)?e(s):(s.close(),await $S(),e(await hc()))})})}async function lh(t,e,n){const s=Eo(t,!0).put({[Lf]:e,value:n});return new qr(s).toPromise()}async function BS(t,e){const n=Eo(t,!1).get(e),s=await new qr(n).toPromise();return s===void 0?null:s.value}function uh(t,e){const n=Eo(t,!0).delete(e);return new qr(n).toPromise()}const FS=800,jS=3;class Df{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=To._getInstance(US()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MS(),!this.activeServiceWorker)return;this.sender=new DS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await lh(e,Gi,"1"),await uh(e,Gi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>lh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>BS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Eo(r,!1).getAll();return new qr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Df.type="LOCAL";const qS=Df;/**
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
 */function zS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function WS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Dt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",zS().appendChild(s)})}function KS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Br(3e4,6e4);/**
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
 */function Of(t,e){return e?Qt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ll extends il{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HS(t){return If(t.auth,new ll(t),t.bypassAuthState)}function GS(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),gS(n,new ll(t),t.bypassAuthState)}async function QS(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),mS(n,new ll(t),t.bypassAuthState)}/**
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
 */class Mf{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HS;case"linkViaPopup":case"linkViaRedirect":return QS;case"reauthViaPopup":case"reauthViaRedirect":return GS;default:gt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YS=new Br(2e3,1e4);async function XS(t,e,n){const s=Us(t);Lw(t,e,al);const r=Of(s,n);return new Pn(s,"signInViaPopup",e,r).executeNotNull()}class Pn extends Mf{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,YS.get())};e()}}Pn.currentPopupAction=null;/**
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
 */const JS="pendingRedirect",Mi=new Map;class ZS extends Mf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const s=await eb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eb(t,e){const n=sb(e),s=nb(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function tb(t,e){Mi.set(t._key(),e)}function nb(t){return Qt(t._redirectPersistence)}function sb(t){return Oi(JS,t.config.apiKey,t.name)}async function rb(t,e,n=!1){const s=Us(t),r=Of(s,e),o=await new ZS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const ib=10*60*1e3;class ob{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ab(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Pf(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(hh(e))}saveEventToCache(e){this.cachedEventUids.add(hh(e)),this.lastProcessedEventTime=Date.now()}}function hh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ab(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pf(t);default:return!1}}/**
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
 */async function cb(t,e={}){return ns(t,"GET","/v1/projects",e)}/**
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
 */const lb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ub=/^https?/;async function hb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cb(t);for(const n of e)try{if(db(n))return}catch{}gt(t,"unauthorized-domain")}function db(t){const e=uc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ub.test(n))return!1;if(lb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const fb=new Br(3e4,6e4);function dh(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pb(t){return new Promise((e,n)=>{var s,r,i;function o(){dh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dh(),n(Dt(t,"network-request-failed"))},timeout:fb.get()})}if(!((r=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const a=KS("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},WS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Pi=null,e})}let Pi=null;function mb(t){return Pi=Pi||pb(t),Pi}/**
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
 */const gb=new Br(5e3,15e3),yb="__/auth/iframe",vb="emulator/auth/iframe",_b={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sb(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nl(e,vb):`https://${t.config.authDomain}/${yb}`,s={apiKey:e.apiKey,appName:t.name,v:$r},r=wb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Vr(s).slice(1)}`}async function bb(t){const e=await mb(t),n=Ot().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:Sb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_b,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},gb.get());function c(){Ot().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Tb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Eb=500,Ib=600,Rb="_blank",Cb="http://localhost";class fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ab(t,e,n,s=Eb,r=Ib){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Tb),{width:s.toString(),height:r.toString(),top:i,left:o}),l=et().toLowerCase();n&&(a=gf(l)?Rb:n),mf(l)&&(e=e||Cb,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(Xw(l)&&a!=="_self")return Nb(e||"",a),new fh(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new fh(h)}function Nb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const kb="__/auth/handler",xb="emulator/auth/handler";function ph(t,e,n,s,r,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:$r,eventId:r};if(e instanceof al){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",b_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof jr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Lb(t)}?${Vr(a).slice(1)}`}function Lb({config:t}){return t.emulator?nl(t,xb):`https://${t.authDomain}/${kb}`}/**
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
 */const Da="webStorageSupport";class Db{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nf,this._completeRedirectFn=rb,this._overrideRedirectResult=tb}async _openPopup(e,n,s,r){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ph(e,n,s,uc(),r);return Ab(e,o,cl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),OS(ph(e,n,s,uc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await bb(e),s=new ob(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Da,{type:Da},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Da];o!==void 0&&n(!!o),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sf()||rl()||bo()}}const Ob=Db;var mh="@firebase/auth",gh="0.21.4";/**
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
 */class Mb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ub(t){ys(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bf(t)},u=new tS(a,c,l);return Ow(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ys(new Kn("auth-internal",e=>{const n=Us(e.getProvider("auth").getImmediate());return(s=>new Mb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(mh,gh,Pb(t)),yn(mh,gh,"esm2017")}/**
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
 */const Vb=5*60,$b=Zd("authIdTokenMaxAge")||Vb;let yh=null;const Bb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$b)return;const r=n==null?void 0:n.token;yh!==r&&(yh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Fb(t=sf()){const e=Zc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Dw(t,{popupRedirectResolver:Ob,persistence:[qS,xS,Nf]}),s=Zd("authTokenSyncURL");if(s){const i=Bb(s);IS(n,i,()=>i(n.currentUser)),ES(n,o=>i(o))}const r=Jd("auth");return r&&nS(n,`http://${r}`),n}Ub("Browser");var jb="firebase",qb="9.17.2";/**
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
 */yn(jb,qb,"app");var zb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,ul=ul||{},J=zb||self;function Yi(){}function Io(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Wb(t){return Object.prototype.hasOwnProperty.call(t,Oa)&&t[Oa]||(t[Oa]=++Kb)}var Oa="closure_uid_"+(1e9*Math.random()>>>0),Kb=0;function Hb(t,e,n){return t.call.apply(t.bind,arguments)}function Gb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=Hb:Xe=Gb,Xe.apply(null,arguments)}function Si(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function We(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Tn(){this.s=this.s,this.o=this.o}var Qb=0;Tn.prototype.s=!1;Tn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Qb!=0)&&Wb(this)};Tn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Uf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function vh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Io(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var Yb=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",Yi,e),J.removeEventListener("test",Yi,e)}catch{}return t}();function Xi(t){return/^[\s\xa0]*$/.test(t)}var _h=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ma(t,e){return t<e?-1:t>e?1:0}function Ro(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return Ro().indexOf(t)!=-1}function dl(t){return dl[" "](t),t}dl[" "]=Yi;function Xb(t){var e=eT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Jb=Lt("Opera"),_s=Lt("Trident")||Lt("MSIE"),Vf=Lt("Edge"),dc=Vf||_s,$f=Lt("Gecko")&&!(Ro().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),Zb=Ro().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function Bf(){var t=J.document;return t?t.documentMode:void 0}var Ji;e:{var Pa="",Ua=function(){var t=Ro();if($f)return/rv:([^\);]+)(\)|;)/.exec(t);if(Vf)return/Edge\/([\d\.]+)/.exec(t);if(_s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Zb)return/WebKit\/(\S+)/.exec(t);if(Jb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ua&&(Pa=Ua?Ua[1]:""),_s){var Va=Bf();if(Va!=null&&Va>parseFloat(Pa)){Ji=String(Va);break e}}Ji=Pa}var eT={};function tT(){return Xb(function(){let t=0;const e=_h(String(Ji)).split("."),n=_h("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ma(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ma(r[2].length==0,i[2].length==0)||Ma(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var fc;if(J.document&&_s){var wh=Bf();fc=wh||parseInt(Ji,10)||void 0}else fc=void 0;var nT=fc;function Ir(t,e){if(Je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($f){e:{try{dl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ir.X.h.call(this)}}We(Ir,Je);var sT={2:"touch",3:"pen",4:"mouse"};Ir.prototype.h=function(){Ir.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wr="closure_listenable_"+(1e6*Math.random()|0),rT=0;function iT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++rT,this.ba=this.ea=!1}function Co(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function fl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ff(t){const e={};for(const n in t)e[n]=t[n];return e}const Sh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Sh.length;i++)n=Sh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ao(t){this.src=t,this.g={},this.h=0}Ao.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=mc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new iT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function pc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Uf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Co(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var pl="closure_lm_"+(1e6*Math.random()|0),$a={};function qf(t,e,n,s,r){if(s&&s.once)return Wf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)qf(t,e[i],n,s,r);return null}return n=yl(n),t&&t[Wr]?t.N(e,n,zr(s)?!!s.capture:!!s,r):zf(t,e,n,!1,s,r)}function zf(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=zr(r)?!!r.capture:!!r,a=gl(t);if(a||(t[pl]=a=new Ao(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=oT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Yb||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Hf(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function oT(){function t(n){return e.call(t.src,t.listener,n)}const e=aT;return t}function Wf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wf(t,e[i],n,s,r);return null}return n=yl(n),t&&t[Wr]?t.O(e,n,zr(s)?!!s.capture:!!s,r):zf(t,e,n,!0,s,r)}function Kf(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Kf(t,e[i],n,s,r);else s=zr(s)?!!s.capture:!!s,n=yl(n),t&&t[Wr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=mc(i,n,s,r),-1<n&&(Co(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=gl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mc(e,n,s,r)),(n=-1<t?e[t]:null)&&ml(n))}function ml(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Wr])pc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Hf(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=gl(e))?(pc(n,t),n.h==0&&(n.src=null,e[pl]=null)):Co(t)}}}function Hf(t){return t in $a?$a[t]:$a[t]="on"+t}function aT(t,e){if(t.ba)t=!0;else{e=new Ir(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ml(t),t=n.call(s,e)}return t}function gl(t){return t=t[pl],t instanceof Ao?t:null}var Ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function yl(t){return typeof t=="function"?t:(t[Ba]||(t[Ba]=function(e){return t.handleEvent(e)}),t[Ba])}function je(){Tn.call(this),this.i=new Ao(this),this.P=this,this.I=null}We(je,Tn);je.prototype[Wr]=!0;je.prototype.removeEventListener=function(t,e,n,s){Kf(this,t,e,n,s)};function ze(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Je(e,t);else if(e instanceof Je)e.target=e.target||t;else{var r=e;e=new Je(s,t),jf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=bi(o,s,!0,e)&&r}if(o=e.g=t,r=bi(o,s,!0,e)&&r,r=bi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=bi(o,s,!1,e)&&r}je.prototype.M=function(){if(je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Co(n[s]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function bi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&pc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var vl=J.JSON.stringify;function cT(){var t=Yf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lT{constructor(){this.h=this.g=null}add(e,n){const s=Gf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Gf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new uT,t=>t.reset());class uT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hT(t){J.setTimeout(()=>{throw t},0)}function Qf(t,e){gc||dT(),yc||(gc(),yc=!0),Yf.add(t,e)}var gc;function dT(){var t=J.Promise.resolve(void 0);gc=function(){t.then(fT)}}var yc=!1,Yf=new lT;function fT(){for(var t;t=cT();){try{t.h.call(t.g)}catch(n){hT(n)}var e=Gf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yc=!1}function No(t,e){je.call(this),this.h=t||1,this.g=e||J,this.j=Xe(this.lb,this),this.l=Date.now()}We(No,je);P=No.prototype;P.ca=!1;P.R=null;P.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ze(this,"tick"),this.ca&&(_l(this),this.start()))}};P.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _l(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}P.M=function(){No.X.M.call(this),_l(this),delete this.g};function wl(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Xf(t){t.g=wl(()=>{t.g=null,t.i&&(t.i=!1,Xf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class pT extends Tn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xf(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(t){Tn.call(this),this.h=t,this.g={}}We(Rr,Tn);var bh=[];function Jf(t,e,n,s){Array.isArray(n)||(n&&(bh[0]=n.toString()),n=bh);for(var r=0;r<n.length;r++){var i=qf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zf(t){fl(t.g,function(e,n){this.g.hasOwnProperty(n)&&ml(e)},t),t.g={}}Rr.prototype.M=function(){Rr.X.M.call(this),Zf(this)};Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ko(){this.g=!0}ko.prototype.Aa=function(){this.g=!1};function mT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function gT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function hs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vT(t,n)+(s?" "+s:"")})}function yT(t,e){t.info(function(){return"TIMEOUT: "+e})}ko.prototype.info=function(){};function vT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return vl(n)}catch{return e}}var ss={},Th=null;function xo(){return Th=Th||new je}ss.Pa="serverreachability";function ep(t){Je.call(this,ss.Pa,t)}We(ep,Je);function Cr(t){const e=xo();ze(e,new ep(e))}ss.STAT_EVENT="statevent";function tp(t,e){Je.call(this,ss.STAT_EVENT,t),this.stat=e}We(tp,Je);function rt(t){const e=xo();ze(e,new tp(e,t))}ss.Qa="timingevent";function np(t,e){Je.call(this,ss.Qa,t),this.size=e}We(np,Je);function Kr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Lo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},sp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sl(){}Sl.prototype.h=null;function Eh(t){return t.h||(t.h=t.i())}function rp(){}var Hr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function bl(){Je.call(this,"d")}We(bl,Je);function Tl(){Je.call(this,"c")}We(Tl,Je);var vc;function Do(){}We(Do,Sl);Do.prototype.g=function(){return new XMLHttpRequest};Do.prototype.i=function(){return{}};vc=new Do;function Gr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Rr(this),this.O=_T,t=dc?125:void 0,this.T=new No(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ip}function ip(){this.i=null,this.g="",this.h=!1}var _T=45e3,_c={},Zi={};P=Gr.prototype;P.setTimeout=function(t){this.O=t};function wc(t,e,n){t.K=1,t.v=Mo(Zt(e)),t.s=n,t.P=!0,op(t,null)}function op(t,e){t.F=Date.now(),Qr(t),t.A=Zt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),pp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new ip,t.g=Mp(t.l,n?e:null,!t.s),0<t.N&&(t.L=new pT(Xe(t.La,t,t.g),t.N)),Jf(t.S,t.g,"readystatechange",t.ib),e=t.H?Ff(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Cr(),mT(t.j,t.u,t.A,t.m,t.U,t.s)}P.ib=function(t){t=t.target;const e=this.L;e&&Yt(t)==3?e.l():this.La(t)};P.La=function(t){try{if(t==this.g)e:{const u=Yt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||dc||this.g&&(this.h.h||this.g.fa()||Ah(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Cr(3):Cr(2)),Oo(this);var n=this.g.aa();this.Y=n;t:if(ap(this)){var s=Ah(this.g);t="";var r=s.length,i=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),ur(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,gT(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xi(a)){var l=a;break t}}l=null}if(n=l)hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Sc(this,n);else{this.i=!1,this.o=3,rt(12),Un(this),ur(this);break e}}this.P?(cp(this,u,o),dc&&this.i&&u==3&&(Jf(this.S,this.T,"tick",this.hb),this.T.start())):(hs(this.j,this.m,o,null),Sc(this,o)),u==4&&Un(this),this.i&&!this.I&&(u==4?xp(this.l,this):(this.i=!1,Qr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Un(this),ur(this)}}}catch{}finally{}};function ap(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function cp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=wT(t,n),r==Zi){e==4&&(t.o=4,rt(14),s=!1),hs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==_c){t.o=4,rt(15),hs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else hs(t.j,t.m,r,null),Sc(t,r);ap(t)&&r!=Zi&&r!=_c&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),kl(e),e.K=!0,rt(11))):(hs(t.j,t.m,n,"[Invalid Chunked Response]"),Un(t),ur(t))}P.hb=function(){if(this.g){var t=Yt(this.g),e=this.g.fa();this.C<e.length&&(Oo(this),cp(this,t,e),this.i&&t!=4&&Qr(this))}};function wT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Zi:(n=Number(e.substring(n,s)),isNaN(n)?_c:(s+=1,s+n>e.length?Zi:(e=e.substr(s,n),t.C=s+n,e)))}P.cancel=function(){this.I=!0,Un(this)};function Qr(t){t.V=Date.now()+t.O,lp(t,t.O)}function lp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Kr(Xe(t.gb,t),e)}function Oo(t){t.B&&(J.clearTimeout(t.B),t.B=null)}P.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(yT(this.j,this.A),this.K!=2&&(Cr(),rt(17)),Un(this),this.o=2,ur(this)):lp(this,this.V-t)};function ur(t){t.l.G==0||t.I||xp(t.l,t)}function Un(t){Oo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_l(t.T),Zf(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Sc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bc(n.h,t))){if(!t.J&&bc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)no(n),Vo(n);else break e;Nl(n),rt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Kr(Xe(n.cb,n),6e3));if(1>=yp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Vn(n,11)}else if((t.J||n.g==t)&&no(n),!Xi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(El(i,i.h),i.h=null))}if(s.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Ee(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Op(s,s.H?s.ka:null,s.V),o.J){vp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Oo(a),Qr(a)),s.g=o}else Np(s);0<n.i.length&&$o(n)}else l[0]!="stop"&&l[0]!="close"||Vn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vn(n,7):Al(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Cr(4)}catch{}}function ST(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Io(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function bT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Io(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function up(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Io(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bT(t),s=ST(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var hp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function qn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qn){this.h=e!==void 0?e:t.h,eo(this,t.j),this.s=t.s,this.g=t.g,to(this,t.m),this.l=t.l,e=t.i;var n=new Ar;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ih(this,n),this.o=t.o}else t&&(n=String(t).match(hp))?(this.h=!!e,eo(this,n[1]||"",!0),this.s=rr(n[2]||""),this.g=rr(n[3]||"",!0),to(this,n[4]),this.l=rr(n[5]||"",!0),Ih(this,n[6]||"",!0),this.o=rr(n[7]||"")):(this.h=!!e,this.i=new Ar(null,this.h))}qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ir(e,Rh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ir(e,Rh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ir(n,n.charAt(0)=="/"?RT:IT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ir(n,AT)),t.join("")};function Zt(t){return new qn(t)}function eo(t,e,n){t.j=n?rr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function to(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ih(t,e,n){e instanceof Ar?(t.i=e,NT(t.i,t.h)):(n||(e=ir(e,CT)),t.i=new Ar(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Mo(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function rr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ir(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ET),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ET(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rh=/[#\/\?@]/g,IT=/[#\?:]/g,RT=/[#\?]/g,CT=/[#\?@]/g,AT=/#/g;function Ar(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function En(t){t.g||(t.g=new Map,t.h=0,t.i&&TT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Ar.prototype;P.add=function(t,e){En(this),this.i=null,t=$s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dp(t,e){En(t),e=$s(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fp(t,e){return En(t),e=$s(t,e),t.g.has(e)}P.forEach=function(t,e){En(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};P.oa=function(){En(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};P.W=function(t){En(this);let e=[];if(typeof t=="string")fp(this,t)&&(e=e.concat(this.g.get($s(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return En(this),this.i=null,t=$s(this,t),fp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function pp(t,e,n){dp(t,e),0<n.length&&(t.i=null,t.g.set($s(t,e),hl(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function $s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function NT(t,e){e&&!t.j&&(En(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(dp(this,s),pp(this,r,n))},t)),t.j=e}var kT=class{constructor(e,n){this.h=e,this.g=n}};function mp(t){this.l=t||xT,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ga&&J.g.Ga()&&J.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xT=10;function gp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yp(t){return t.h?1:t.g?t.g.size:0}function bc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function El(t,e){t.g?t.g.add(e):t.h=e}function vp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mp.prototype.cancel=function(){if(this.i=_p(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _p(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hl(t.i)}function Il(){}Il.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};Il.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function LT(){this.g=new Il}function DT(t,e,n){const s=n||"";try{up(t,function(r,i){let o=r;zr(r)&&(o=vl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function OT(t,e){const n=new ko;if(J.Image){const s=new Image;s.onload=Si(Ti,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Si(Ti,n,s,"TestLoadImage: error",!1,e),s.onabort=Si(Ti,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Si(Ti,n,s,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ti(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Yr(t){this.l=t.ac||null,this.j=t.jb||!1}We(Yr,Sl);Yr.prototype.g=function(){return new Po(this.l,this.j)};Yr.prototype.i=function(t){return function(){return t}}({});function Po(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Po,je);var Rl=0;P=Po.prototype;P.open=function(t,e){if(this.readyState!=Rl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nr(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=Rl};P.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function wp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}P.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xr(this):Nr(this),this.readyState==3&&wp(this)}};P.Va=function(t){this.g&&(this.response=this.responseText=t,Xr(this))};P.Ua=function(t){this.g&&(this.response=t,Xr(this))};P.ga=function(){this.g&&Xr(this)};function Xr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nr(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Nr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MT=J.JSON.parse;function ke(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Sp,this.K=this.L=!1}We(ke,je);var Sp="",PT=/^https?$/i,UT=["POST","PUT"];P=ke.prototype;P.Ka=function(t){this.L=t};P.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vc.g(),this.C=this.u?Eh(this.u):Eh(vc),this.g.onreadystatechange=Xe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ch(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=J.FormData&&t instanceof J.FormData,!(0<=Uf(UT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ep(this),0<this.B&&((this.K=VT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.qa,this)):this.A=wl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ch(this,i)}};function VT(t){return _s&&tT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.qa=function(){typeof ul<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function Ch(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bp(t),Uo(t)}function bp(t){t.D||(t.D=!0,ze(t,"complete"),ze(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),Uo(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Uo(this,!0)),ke.X.M.call(this)};P.Ha=function(){this.s||(this.F||this.v||this.l?Tp(this):this.fb())};P.fb=function(){Tp(this)};function Tp(t){if(t.h&&typeof ul<"u"&&(!t.C[1]||Yt(t)!=4||t.aa()!=2)){if(t.v&&Yt(t)==4)wl(t.Ha,0,t);else if(ze(t,"readystatechange"),Yt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(hp)[1]||null;if(!r&&J.self&&J.self.location){var i=J.self.location.protocol;r=i.substr(0,i.length-1)}s=!PT.test(r?r.toLowerCase():"")}n=s}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var o=2<Yt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",bp(t)}}finally{Uo(t)}}}}function Uo(t,e){if(t.g){Ep(t);const n=t.g,s=t.C[0]?Yi:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ep(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function Yt(t){return t.g?t.g.readyState:0}P.aa=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}};P.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MT(e)}};function Ah(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Sp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ea=function(){return this.m};P.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ip(t){let e="";return fl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Cl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ip(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Gs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rp(t){this.Ca=0,this.i=[],this.j=new ko,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gs("baseRetryDelayMs",5e3,t),this.bb=Gs("retryDelaySeedMs",1e4,t),this.$a=Gs("forwardChannelMaxRetries",2,t),this.ta=Gs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new mp(t&&t.concurrentRequestLimit),this.Fa=new LT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}P=Rp.prototype;P.ma=8;P.G=1;function Al(t){if(Cp(t),t.G==3){var e=t.U++,n=Zt(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Jr(t,n),e=new Gr(t,t.j,e,void 0),e.K=2,e.v=Mo(Zt(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Mp(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qr(e)}Dp(t)}function Vo(t){t.g&&(kl(t),t.g.cancel(),t.g=null)}function Cp(t){Vo(t),t.u&&(J.clearTimeout(t.u),t.u=null),no(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function $o(t){gp(t.h)||t.m||(t.m=!0,Qf(t.Ja,t),t.C=0)}function $T(t,e){return yp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Kr(Xe(t.Ja,t,e),Lp(t,t.C)),t.C++,!0)}P.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Gr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Ff(i),jf(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ap(this,r,e),n=Zt(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),Jr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Ip(i)))+"&"+e:this.o&&Cl(n,this.o,i)),El(this.h,r),this.Ya&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),r.Z=!0,wc(r,n,null)):wc(r,n,e),this.G=2}}else this.G==3&&(t?Nh(this,t):this.i.length==0||gp(this.h)||Nh(this))};function Nh(t,e){var n;e?n=e.m:n=t.U++;const s=Zt(t.F);Ee(s,"SID",t.I),Ee(s,"RID",n),Ee(s,"AID",t.T),Jr(t,s),t.o&&t.s&&Cl(s,t.o,t.s),n=new Gr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ap(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),El(t.h,n),wc(n,s,e)}function Jr(t,e){t.ia&&fl(t.ia,function(n,s){Ee(e,s,n)}),t.l&&up({},function(n,s){Ee(e,s,n)})}function Ap(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Xe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{DT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Np(t){t.g||t.u||(t.Z=1,Qf(t.Ia,t),t.A=0)}function Nl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Kr(Xe(t.Ia,t),Lp(t,t.A)),t.A++,!0)}P.Ia=function(){if(this.u=null,kp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Kr(Xe(this.eb,this),t)}};P.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,rt(10),Vo(this),kp(this))};function kl(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function kp(t){t.g=new Gr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Zt(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),Jr(t,e),t.o&&t.s&&Cl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Mo(Zt(e)),n.s=null,n.P=!0,op(n,t)}P.cb=function(){this.v!=null&&(this.v=null,Vo(this),Nl(this),rt(19))};function no(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function xp(t,e){var n=null;if(t.g==e){no(t),kl(t),t.g=null;var s=2}else if(bc(t.h,e))n=e.D,vp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=xo(),ze(s,new np(s,n)),$o(t)}else Np(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&$T(t,e)||s==2&&Nl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}}function Lp(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Vn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Xe(t.kb,t);n||(n=new qn("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||eo(n,"https"),Mo(n)),OT(n.toString(),s)}else rt(2);t.G=0,t.l&&t.l.va(e),Dp(t),Cp(t)}P.kb=function(t){t?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Dp(t){if(t.G=0,t.la=[],t.l){const e=_p(t.h);(e.length!=0||t.i.length!=0)&&(vh(t.la,e),vh(t.la,t.i),t.h.i.length=0,hl(t.i),t.i.length=0),t.l.ua()}}function Op(t,e,n){var s=n instanceof qn?Zt(n):new qn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),to(s,s.m);else{var r=J.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new qn(null,void 0);s&&eo(i,s),e&&(i.g=e),r&&to(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ma),Jr(t,s),s}function Mp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ke(new Yr({jb:!0})):new ke(t.ra),e.Ka(t.H),e}function Pp(){}P=Pp.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Ra=function(){};function so(){if(_s&&!(10<=Number(nT)))throw Error("Environmental error: no available transport.")}so.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){je.call(this),this.g=new Rp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Xi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bs(this)}We(pt,je);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Op(t,null,t.V),$o(t)};pt.prototype.close=function(){Al(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vl(t),t=n);e.i.push(new kT(e.ab++,t)),e.G==3&&$o(e)};pt.prototype.M=function(){this.g.l=null,delete this.j,Al(this.g),delete this.g,pt.X.M.call(this)};function Up(t){bl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(Up,bl);function Vp(){Tl.call(this),this.status=1}We(Vp,Tl);function Bs(t){this.g=t}We(Bs,Pp);Bs.prototype.xa=function(){ze(this.g,"a")};Bs.prototype.wa=function(t){ze(this.g,new Up(t))};Bs.prototype.va=function(t){ze(this.g,new Vp)};Bs.prototype.ua=function(){ze(this.g,"b")};so.prototype.createWebChannel=so.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Lo.NO_ERROR=0;Lo.TIMEOUT=8;Lo.HTTP_ERROR=6;sp.COMPLETE="complete";rp.EventType=Hr;Hr.OPEN="a";Hr.CLOSE="b";Hr.ERROR="c";Hr.MESSAGE="d";je.prototype.listen=je.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.Oa;ke.prototype.getLastErrorCode=ke.prototype.Ea;ke.prototype.getStatus=ke.prototype.aa;ke.prototype.getResponseJson=ke.prototype.Sa;ke.prototype.getResponseText=ke.prototype.fa;ke.prototype.send=ke.prototype.da;ke.prototype.setWithCredentials=ke.prototype.Ka;var BT=function(){return new so},FT=function(){return xo()},Fa=Lo,jT=sp,qT=ss,kh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},zT=Yr,Ei=rp,WT=ke;const xh="@firebase/firestore";/**
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
 */let Fs="9.17.2";/**
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
 */const Yn=new Xc("@firebase/firestore");function Lh(){return Yn.logLevel}function V(t,...e){if(Yn.logLevel<=de.DEBUG){const n=e.map(xl);Yn.debug(`Firestore (${Fs}): ${t}`,...n)}}function en(t,...e){if(Yn.logLevel<=de.ERROR){const n=e.map(xl);Yn.error(`Firestore (${Fs}): ${t}`,...n)}}function Tc(t,...e){if(Yn.logLevel<=de.WARN){const n=e.map(xl);Yn.warn(`Firestore (${Fs}): ${t}`,...n)}}function xl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: `+t;throw en(e),new Error(e)}function ve(t,e){t||Q()}function ee(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $p{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class HT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GT{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new $p(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Ge(e)}}class QT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ve(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class YT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new QT(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JT{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.A=n.token,new XT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ZT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Bp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ZT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Pe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Pe(0,0))}static max(){return new Z(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends kr{construct(e,n,s){return new _e(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const eE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends kr{construct(e,n,s){return new Ye(e,n,s)}static isValidIdentifier(e){return eE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(_e.fromString(e))}static fromName(e){return new $(_e.fromString(e).popFirst(5))}static empty(){return new $(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new _e(e.slice()))}}function tE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(s===1e9?new Pe(n+1,0):new Pe(n,s));return new _n(r,$.empty(),e)}function nE(t){return new _n(t.readTime,t.key,-1)}class _n{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new _n(Z.min(),$.empty(),-1)}static max(){return new _n(Z.max(),$.empty(),-1)}}function sE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const rE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zr(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==rE)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(r=>r?I.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new I((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new I((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ei(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ll{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ll.at=-1;/**
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
 */const oE=/^[_a-zA-Z][_a-zA-Z0-9]*(?:\.[_a-zA-Z][_a-zA-Z0-9]*)*$/;class Dl{constructor(e){this.alias=e}static ht(e){return oE.test(e)}canonicalString(){let e=this.alias.replace(/\\/g,"\\\\").replace(/`/g,"\\`");return Dl.ht(e)||(e="`"+e+"`"),e}}/**
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
 */class aE{constructor(e,n,s){this.alias=e,this.lt=n,this.fieldPath=s}}/**
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
 */class cE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class xr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Dh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Bo(t){return t==null}function ro(t){return t===0&&1/t==-1/0}function lE(t){return typeof t=="number"&&Number.isInteger(t)&&!ro(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class uE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new uE("Invalid base64 string: "+r):r}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const hE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=hE.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ss(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function Ol(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jp(t){const e=t.mapValue.fields.__previous_value__;return Ol(e)?jp(e):e}function Lr(t){const e=wn(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
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
 */const Ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ol(t)?4:dE(t)?9007199254740991:10:Q()}function Vt(t,e){if(t===e)return!0;const n=Xn(t);if(n!==Xn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lr(t).isEqual(Lr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=wn(s.timestampValue),o=wn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ss(s.bytesValue).isEqual(Ss(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Oe(s.geoPointValue.latitude)===Oe(r.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Oe(s.integerValue)===Oe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Oe(s.doubleValue),o=Oe(r.doubleValue);return i===o?ro(i)===ro(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Dh(i)!==Dh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Vt(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Dr(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=Xn(t),s=Xn(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Oe(r.integerValue||r.doubleValue),a=Oe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Oh(t.timestampValue,e.timestampValue);case 4:return Oh(Lr(t),Lr(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ss(r),a=Ss(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=pe(o[c],a[c]);if(l!==0)return l}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=pe(Oe(r.latitude),Oe(i.latitude));return o!==0?o:pe(Oe(r.longitude),Oe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=bs(o[c],a[c]);if(l)return l}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ii.mapValue&&i===Ii.mapValue)return 0;if(r===Ii.mapValue)return 1;if(i===Ii.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=pe(a[u],l[u]);if(h!==0)return h;const f=bs(o[a[u]],c[l[u]]);if(f!==0)return f}return pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Oh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=wn(t),s=wn(e),r=pe(n.seconds,s.seconds);return r!==0?r:pe(n.nanos,s.nanos)}function Ts(t){return Ec(t)}function Ec(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=wn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ss(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ec(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ec(s.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function io(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ic(t){return!!t&&"integerValue"in t}function Ml(t){return!!t&&"arrayValue"in t}function Mh(t){return!!t&&"nullValue"in t}function Ph(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ui(t){return!!t&&"mapValue"in t}function hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Es{constructor(e,n){this.position=e,this.inclusive=n}}function Uh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=bs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qp{}class Me extends qp{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new pE(e,n,s):n==="array-contains"?new yE(e,s):n==="in"?new vE(e,s):n==="not-in"?new _E(e,s):n==="array-contains-any"?new wE(e,s):new Me(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new mE(e,s):new gE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bs(n,this.value)):n!==null&&Xn(this.value)===Xn(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rt extends qp{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Rt(e,n)}matches(e){return zp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zp(t){return t.op==="and"}function Wp(t){return fE(t)&&zp(t)}function fE(t){for(const e of t.filters)if(e instanceof Rt)return!1;return!0}function Rc(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Ts(t.value);if(Wp(t))return t.filters.map(e=>Rc(e)).join(",");{const e=t.filters.map(n=>Rc(n)).join(",");return`${t.op}(${e})`}}function Kp(t,e){return t instanceof Me?function(n,s){return s instanceof Me&&n.op===s.op&&n.field.isEqual(s.field)&&Vt(n.value,s.value)}(t,e):t instanceof Rt?function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Kp(i,s.filters[o]),!0):!1}(t,e):void Q()}function Hp(t){return t instanceof Me?function(e){return`${e.field.canonicalString()} ${e.op} ${Ts(e.value)}`}(t):t instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Hp).join(" ,")+"}"}(t):"Filter"}class pE extends Me{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class mE extends Me{constructor(e,n){super(e,"in",n),this.keys=Gp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gE extends Me{constructor(e,n){super(e,"not-in",n),this.keys=Gp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class yE extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ml(n)&&Dr(n.arrayValue,this.value)}}class vE extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Dr(this.value.arrayValue,n)}}class _E extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Dr(this.value.arrayValue,n)}}class wE extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Dr(this.value.arrayValue,s))}}/**
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
 */class ps{constructor(e,n="asc"){this.field=e,this.dir=n}}function SE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ri(this.root,e,this.comparator,!0)}}class Ri{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??qe.RED,this.left=r??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,s,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $h(this.data.getIterator())}getIteratorFrom(e){return new $h(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class $h{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new dt([])}unionWith(e){let n=new Ue(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ui(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hr(n)}setAll(e){let n=Ye.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=hr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ui(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ui(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){rs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new st(hr(this.value))}}function Qp(t){const e=[];return rs(t.fields,(n,s)=>{const r=new Ye([n]);if(Ui(s)){const i=Qp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new dt(e)}/**
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
 */class Qe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,Z.min(),Z.min(),Z.min(),st.empty(),0)}static newFoundDocument(e,n,s,r){return new Qe(e,1,n,Z.min(),s,r,0)}static newNoDocument(e,n){return new Qe(e,2,n,Z.min(),Z.min(),st.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,Z.min(),Z.min(),st.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bE{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function Bh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new bE(t,e,n,s,r,i,o)}function Pl(t){const e=ee(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Rc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Bo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ts(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ts(s)).join(",")),e._t=n}return e._t}function Ul(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vh(t.startAt,e.startAt)&&Vh(t.endAt,e.endAt)}function Cc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class In{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function TE(t,e,n,s,r,i,o,a){return new In(t,e,n,s,r,i,o,a)}function Fo(t){return new In(t)}function Fh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $l(t){return t.collectionGroup!==null}function zn(t){const e=ee(t);if(e.wt===null){e.wt=[];const n=jo(e),s=Vl(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new ps(n)),e.wt.push(new ps(Ye.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ps(Ye.keyField(),i))}}}return e.wt}function $t(t){const e=ee(t);if(!e.gt)if(e.limitType==="F")e.gt=Bh(e.path,e.collectionGroup,zn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of zn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ps(i.field,o))}const s=e.endAt?new Es(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Es(e.startAt.position,e.startAt.inclusive):null;e.gt=Bh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Ac(t,e){e.getFirstInequalityField(),jo(t);const n=t.filters.concat([e]);return new In(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function oo(t,e,n){return new In(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qo(t,e){return Ul($t(t),$t(e))&&t.limitType===e.limitType}function Yp(t){return`${Pl($t(t))}|lt:${t.limitType}`}function Nc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Hp(s)).join(", ")}]`),Bo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ts(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ts(s)).join(",")),`Target(${n})`}($t(t))}; limitType=${t.limitType})`}function zo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of zn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Uh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,zn(n),s)||n.endAt&&!function(r,i,o){const a=Uh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,zn(n),s))}(t,e)}function EE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xp(t){return(e,n)=>{let s=!1;for(const r of zn(t)){const i=IE(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function IE(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?bs(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
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
 */function Jp(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ro(e)?"-0":e}}function Zp(t){return{integerValue:""+t}}function RE(t,e){return lE(e)?Zp(e):Jp(t,e)}/**
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
 */class Wo{constructor(){this._=void 0}}function CE(t,e,n){return t instanceof Or?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Mr?tm(t,e):t instanceof Pr?nm(t,e):function(s,r){const i=em(s,r),o=jh(i)+jh(s.It);return Ic(i)&&Ic(s.It)?Zp(o):Jp(s.Tt,o)}(t,e)}function AE(t,e,n){return t instanceof Mr?tm(t,e):t instanceof Pr?nm(t,e):n}function em(t,e){return t instanceof ao?Ic(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Or extends Wo{}class Mr extends Wo{constructor(e){super(),this.elements=e}}function tm(t,e){const n=sm(e);for(const s of t.elements)n.some(r=>Vt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Pr extends Wo{constructor(e){super(),this.elements=e}}function nm(t,e){let n=sm(e);for(const s of t.elements)n=n.filter(r=>!Vt(r,s));return{arrayValue:{values:n}}}class ao extends Wo{constructor(e,n){super(),this.Tt=e,this.It=n}}function jh(t){return Oe(t.integerValue||t.doubleValue)}function sm(t){return Ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class NE{constructor(e,n){this.field=e,this.transform=n}}function kE(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Mr&&s instanceof Mr||n instanceof Pr&&s instanceof Pr?ws(n.elements,s.elements,Vt):n instanceof ao&&s instanceof ao?Vt(n.It,s.It):n instanceof Or&&s instanceof Or}(t.transform,e.transform)}class xE{constructor(e,n){this.version=e,this.transformResults=n}}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ko{}function rm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new om(t.key,Pt.none()):new ti(t.key,t.data,Pt.none());{const n=t.data,s=st.empty();let r=new Ue(Ye.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Rn(t.key,s,new dt(r.toArray()),Pt.none())}}function LE(t,e,n){t instanceof ti?function(s,r,i){const o=s.value.clone(),a=zh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Rn?function(s,r,i){if(!Vi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=zh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(im(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function dr(t,e,n,s){return t instanceof ti?function(r,i,o,a){if(!Vi(r.precondition,i))return o;const c=r.value.clone(),l=Wh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Rn?function(r,i,o,a){if(!Vi(r.precondition,i))return o;const c=Wh(r.fieldTransforms,a,i),l=i.data;return l.setAll(im(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Vi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function DE(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=em(s.transform,r||null);i!=null&&(n===null&&(n=st.empty()),n.set(s.field,i))}return n||null}function qh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ws(n,s,(r,i)=>kE(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ti extends Ko{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Rn extends Ko{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function im(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zh(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,AE(o,a,n[r]))}return s}function Wh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,CE(i,o,e))}return s}class om extends Ko{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OE extends Ko{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ME{constructor(e){this.count=e}}/**
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
 */var De,le;function PE(t){switch(t){default:return Q();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function am(t){if(t===void 0)return en("GRPC error has no .code"),b.UNKNOWN;switch(t){case De.OK:return b.OK;case De.CANCELLED:return b.CANCELLED;case De.UNKNOWN:return b.UNKNOWN;case De.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case De.INTERNAL:return b.INTERNAL;case De.UNAVAILABLE:return b.UNAVAILABLE;case De.UNAUTHENTICATED:return b.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case De.NOT_FOUND:return b.NOT_FOUND;case De.ALREADY_EXISTS:return b.ALREADY_EXISTS;case De.PERMISSION_DENIED:return b.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case De.ABORTED:return b.ABORTED;case De.OUT_OF_RANGE:return b.OUT_OF_RANGE;case De.UNIMPLEMENTED:return b.UNIMPLEMENTED;case De.DATA_LOSS:return b.DATA_LOSS;default:return Q()}}(le=De||(De={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Fp(this.inner)}size(){return this.innerSize}}/**
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
 */const UE=new Ve($.comparator);function tn(){return UE}const cm=new Ve($.comparator);function or(...t){let e=cm;for(const n of t)e=e.insert(n.key,n);return e}function lm(t){let e=cm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function $n(){return fr()}function um(){return fr()}function fr(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const VE=new Ve($.comparator),$E=new Ue($.comparator);function oe(...t){let e=$E;for(const n of t)e=e.add(n);return e}const BE=new Ue(pe);function hm(){return BE}/**
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
 */class Ho{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ho(Z.min(),r,hm(),tn(),oe())}}class ni{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ni(s,n,oe(),oe(),oe())}}/**
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
 */class $i{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class dm{constructor(e,n){this.targetId=e,this.Rt=n}}class fm{constructor(e,n,s=tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Kh{constructor(){this.bt=0,this.vt=Gh(),this.Pt=tt.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=oe(),n=oe(),s=oe();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Q()}}),new ni(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Gh()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class FE{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=tn(),this.Kt=Hh(),this.Gt=new Ue(pe)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Cc(i))if(s===0){const o=new $(i.path);this.zt(n,o,Qe.newNoDocument(o,Z.min()))}else ve(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Cc(a.target)){const c=new $(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Qe.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=oe();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ho(e,n,this.Gt,this.Ut,s);return this.Ut=tn(),this.Kt=Hh(),this.Gt=new Ue(pe),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Kh,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ue(pe),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Kh),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Hh(){return new Ve($.comparator)}function Gh(){return new Ve($.comparator)}/**
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
 */const jE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zE=(()=>({and:"AND",or:"OR"}))();class WE{constructor(e,n){this.databaseId=e,this.yt=n}}function co(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pm(t,e){return t.yt?e.toBase64():e.toUint8Array()}function KE(t,e){return co(t,e.toTimestamp())}function Ut(t){return ve(!!t),Z.fromTimestamp(function(e){const n=wn(e);return new Pe(n.seconds,n.nanos)}(t))}function Bl(t,e){return function(n){return new _e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function mm(t){const e=_e.fromString(t);return ve(wm(e)),e}function kc(t,e){return Bl(t.databaseId,e.path)}function ja(t,e){const n=mm(e);if(n.get(1)!==t.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(gm(n))}function xc(t,e){return Bl(t.databaseId,e)}function HE(t){const e=mm(t);return e.length===4?_e.emptyPath():gm(e)}function Lc(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gm(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qh(t,e,n){return{name:kc(t,e),fields:n.value.mapValue.fields}}function GE(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(ve(l===void 0||typeof l=="string"),tt.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),tt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:am(c.code);return new N(l,c.message||"")}(o);n=new fm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ja(t,s.document.name),i=Ut(s.document.updateTime),o=s.document.createTime?Ut(s.document.createTime):Z.min(),a=new st({mapValue:{fields:s.document.fields}}),c=Qe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new $i(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ja(t,s.document),i=s.readTime?Ut(s.readTime):Z.min(),o=Qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new $i([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ja(t,s.document),i=s.removedTargetIds||[];n=new $i([],i,r,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new ME(r),o=s.targetId;n=new dm(o,i)}}return n}function QE(t,e){let n;if(e instanceof ti)n={update:Qh(t,e.key,e.value)};else if(e instanceof om)n={delete:kc(t,e.key)};else if(e instanceof Rn)n={update:Qh(t,e.key,e.data),updateMask:sI(e.fieldMask)};else{if(!(e instanceof OE))return Q();n={verify:kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Or)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Mr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Pr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ao)return{fieldPath:i.field.canonicalString(),increment:o.It};throw Q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:KE(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q()}(t,e.precondition)),n}function YE(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ut(s.updateTime):Ut(r);return i.isEqual(Z.min())&&(i=Ut(r)),new xE(i,s.transformResults||[])}(n,e))):[]}function XE(t,e){return{documents:[xc(t,e.path)]}}function ym(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=xc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return _m(Rt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:fn(u.field),direction:eI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||Bo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function JE(t){let e=HE(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=vm(u);return h instanceof Rt&&Wp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ps(us(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Bo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Es(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Es(f,h)}(n.endAt)),TE(e,r,o,i,a,"F",c,l)}function ZE(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function vm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=us(e.unaryFilter.field);return Me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=us(e.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=us(e.unaryFilter.field);return Me.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=us(e.unaryFilter.field);return Me.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return Me.create(us(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(n=>vm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function eI(t){return jE[t]}function tI(t){return qE[t]}function nI(t){return zE[t]}function fn(t){return{fieldPath:t.canonicalString()}}function us(t){return Ye.fromServerFormat(t.fieldPath)}function _m(t){return t instanceof Me?function(e){if(e.op==="=="){if(Ph(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NAN"}};if(Mh(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ph(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NAN"}};if(Mh(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(e.field),op:tI(e.op),value:e.value}}}(t):t instanceof Rt?function(e){const n=e.getFilters().map(s=>_m(s));return n.length===1?n[0]:{compositeFilter:{op:nI(e.op),filters:n}}}(t):Q()}function sI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class rI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&LE(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=dr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=dr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=um();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=rm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,s)=>qh(n,s))&&ws(this.baseMutations,e.baseMutations,(n,s)=>qh(n,s))}}class Fl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=VE;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fl(e,n,s,r)}}/**
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
 */class iI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wn{constructor(e,n,s,r,i=Z.min(),o=Z.min(),a=tt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class oI{constructor(e){this.oe=e}}function aI(t){const e=JE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oo(e,e.limit,"L"):e}/**
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
 */class cI{constructor(){this.Ze=new lI}addToCollectionParentIndex(e,n){return this.Ze.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(_n.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(_n.min())}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class lI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ue(_e.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ue(_e.comparator)).toArray()}}/**
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
 */class uI{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dI{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&dr(s.mutation,r,dt.empty(),Pe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,oe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=oe()){const r=$n();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=or();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=$n();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,oe()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=tn();const o=fr(),a=fr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Rn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),dr(u.mutation,l,u.mutation.getFieldMask(),Pe.now())):o.set(l.key,dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new hI(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fr();let r=new Ve((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||dt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||oe()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=um();u.forEach(f=>{if(!i.has(f)){const p=rm(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$l(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):I.resolve($n());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:lm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=or();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=or();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const c=function(l,u){return new In(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Qe.newInvalidDocument(l)))});let o=or();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&dr(l.mutation,c,dt.empty(),Pe.now()),zo(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class fI{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return I.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Ut(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:aI(s.bundledQuery),readTime:Ut(s.readTime)}}(n)),I.resolve()}}/**
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
 */class pI{constructor(){this.overlays=new Ve($.comparator),this.ss=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const s=$n();return I.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const r=$n(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=$n(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=$n(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return I.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new iI(n,s));let i=this.ss.get(n);i===void 0&&(i=oe(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
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
 */class jl{constructor(){this.rs=new Ue(Be.os),this.us=new Ue(Be.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Be(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Be(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new $(new _e([])),s=new Be(n,e),r=new Be(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new $(new _e([])),s=new Be(n,e),r=new Be(n,e+1);let i=oe();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Be{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return $.comparator(e.key,n.key)||pe(e.gs,n.gs)}static cs(e,n){return pe(e.gs,n.gs)||$.comparator(e.key,n.key)}}/**
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
 */class mI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ue(Be.os)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Be(n,0),r=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ue(pe);return n.forEach(r=>{const i=new Be(r,0),o=new Be(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),I.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Be(new $(i),0);let a=new Ue(pe);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),I.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return I.forEach(n.mutations,r=>{const i=new Be(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Be(n,0),r=this.ps.firstAfterOrEqual(s);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gI{constructor(e){this.Rs=e,this.docs=new Ve($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=tn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qe.newInvalidDocument(r))}),I.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=tn();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||sE(nE(u),s)<=0||(r.has(u.key)||zo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Q()}bs(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new yI(this)}getSize(e){return I.resolve(this.size)}}class yI extends uI{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class vI{constructor(e){this.persistence=e,this.vs=new js(n=>Pl(n),Ul),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new jl,this.targetCount=0,this.Ss=Is.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),I.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Is(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.xn(n),I.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(i).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.Vs.containsKey(n))}}/**
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
 */class _I{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Ll(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new vI(this),this.indexManager=new cI,this.remoteDocumentCache=function(s){return new gI(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new oI(n),this.Os=new fI(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new mI(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new wI(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return I.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class wI extends iE{constructor(e){super(),this.currentSequenceNumber=e}}class ql{constructor(e){this.persistence=e,this.Bs=new jl,this.Ls=null}static qs(e){return new ql(e)}get Us(){if(this.Ls)return this.Ls;throw Q()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),I.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Us,s=>{const r=$.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,Z.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return I.or([()=>I.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
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
 */class zl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=oe(),r=oe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zl(e,n.fromCache,s,r)}}/**
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
 */class SI{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(Fh(n))return I.resolve(null);let s=$t(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=oo(n,null,"F"),s=$t(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=oe(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,oo(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,r){return Fh(n)||r.isEqual(Z.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(Lh()<=de.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Nc(n)),this.qi(e,o,n,tE(r,-1)))})}Bi(e,n){let s=new Ue(Xp(e));return n.forEach((r,i)=>{zo(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return Lh()<=de.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Nc(n)),this.Oi.getDocumentsMatchingQuery(e,n,_n.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class bI{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Ve(pe),this.Gi=new js(i=>Pl(i),Ul),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dI(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function TI(t,e,n,s){return new bI(t,e,n,s)}async function Sm(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=oe();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function EI(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=I.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const _=c.docVersions.get(p);ve(_!==null),m.version.compareTo(_)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=oe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function bm(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function II(t,e){const n=ee(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(tt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,_,T){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,p,u)&&a.push(n.Ns.updateTargetData(i,p))});let c=tn(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(RI(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(Z.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function RI(t,e,n){let s=oe(),r=oe();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function CI(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function AI(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,I.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Wn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Dc(t,e,n){const s=ee(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ei(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Yh(t,e,n){const s=ee(t);let r=Z.min(),i=oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.Gi.get(l);return h!==void 0?I.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,$t(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?i:oe())).next(a=>(NI(s,EE(e),a),{documents:a,Yi:i})))}function NI(t,e,n){let s=t.Qi.get(e)||Z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Xh{constructor(){this.activeTargetIds=hm()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kI{constructor(){this.Ur=new Xh,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Xh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xI{Gr(e){}shutdown(){}}/**
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
 */class Jh{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const LI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class DI{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */class OI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);V("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw Tc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Fs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=LI[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new WT;a.setWithCredentials(!0),a.listenOnce(jT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fa.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Fa.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const p=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(_)>=0?_:b.UNKNOWN}(f.status);o(new N(p,f.message))}else o(new N(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(b.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=BT(),o=FT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new zT({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");V("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new DI({Yr:m=>{h?V("Connection","Not sending because WebChannel is closed:",m):(u||(V("Connection","Opening WebChannel transport."),l.open(),u=!0),V("Connection","WebChannel sending:",m),l.send(m))},Zr:()=>l.close()}),p=(m,_,T)=>{m.listen(_,M=>{try{T(M)}catch(S){setTimeout(()=>{throw S},0)}})};return p(l,Ei.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(l,Ei.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),f.oo())}),p(l,Ei.EventType.ERROR,m=>{h||(h=!0,Tc("Connection","WebChannel transport errored:",m),f.oo(new N(b.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ei.EventType.MESSAGE,m=>{var _;if(!h){const T=m.data[0];ve(!!T);const M=T,S=M.error||((_=M[0])===null||_===void 0?void 0:_.error);if(S){V("Connection","WebChannel received error:",S);const A=S.status;let W=function(q){const j=De[q];if(j!==void 0)return am(j)}(A),F=S.message;W===void 0&&(W=b.INTERNAL,F="Unknown error status: "+A+" with message "+S.message),h=!0,f.oo(new N(W,F)),l.close()}else V("Connection","WebChannel received:",T),f.uo(T)}}),p(o,qT.STAT_EVENT,m=>{m.stat===kh.PROXY?V("Connection","Detected buffering proxy"):m.stat===kh.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ro()},0),f}}function qa(){return typeof document<"u"?document:null}/**
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
 */function Go(t){return new WE(t,!0)}/**
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
 */class Tm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
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
 */class Em{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Tm(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(en(n.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new N(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MI extends Em{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=GE(this.Tt,e),s=function(r){if(!("targetChange"in r))return Z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Ut(i.readTime):Z.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Lc(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Cc(a)?{documents:XE(r,a)}:{query:ym(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=pm(r,i.resumeToken):i.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=co(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=ZE(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Lc(this.Tt),n.removeTarget=e,this.qo(n)}}class PI extends Em{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=YE(e.writeResults,e.commitTime),s=Ut(e.commitTime);return this.listener.eu(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Lc(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>QE(this.Tt,s))};this.qo(n)}}/**
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
 */class UI extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new N(b.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(b.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}async function VI(t,e,n){const s=ee(t),r=function(l,u,h){const f=ym(l,u),p=[];return h.forEach(m=>{m.lt==="count"?p.push({alias:m.alias.canonicalString(),count:{}}):m.lt==="avg"?p.push({alias:m.alias.canonicalString(),avg:{field:fn(m.fieldPath)}}):m.lt==="sum"&&p.push({alias:m.alias.canonicalString(),sum:{field:fn(m.fieldPath)}})}),{structuredAggregationQuery:{aggregations:p,structuredQuery:f.structuredQuery},parent:f.parent}}(s.Tt,$t(e),n),i=r.parent;s.connection.ho||delete r.parent;const o=(await s.mo("RunAggregationQuery",i,r,1)).filter(l=>!!l.result);return ve(o.length===1),(a=o[0]).result,a.result.aggregateFields,new st({mapValue:{fields:(c=a.result)===null||c===void 0?void 0:c.aggregateFields}});var a,c}class $I{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(en(n),this.cu=!1):V("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class BI{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Cn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.mu.add(4),await si(c),c.pu.set("Unknown"),c.mu.delete(4),await Qo(c)}(this))})}),this.pu=new $I(s,r)}}async function Qo(t){if(Cn(t))for(const e of t.gu)await e(!0)}async function si(t){for(const e of t.gu)await e(!1)}function Im(t,e){const n=ee(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Hl(n)?Kl(n):qs(n).Mo()&&Wl(n,e))}function Rm(t,e){const n=ee(t),s=qs(n);n.wu.delete(e),s.Mo()&&Cm(n,e),n.wu.size===0&&(s.Mo()?s.Bo():Cn(n)&&n.pu.set("Unknown"))}function Wl(t,e){t.Iu.Ft(e.targetId),qs(t).Jo(e)}function Cm(t,e){t.Iu.Ft(e),qs(t).Yo(e)}function Kl(t){t.Iu=new FE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),qs(t).start(),t.pu.au()}function Hl(t){return Cn(t)&&!qs(t).Oo()&&t.wu.size>0}function Cn(t){return ee(t).mu.size===0}function Am(t){t.Iu=void 0}async function FI(t){t.wu.forEach((e,n)=>{Wl(t,e)})}async function jI(t,e){Am(t),Hl(t)?(t.pu.fu(e),Kl(t)):t.pu.set("Unknown")}async function qI(t,e,n){if(t.pu.set("Online"),e instanceof fm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await lo(t,s)}else if(e instanceof $i?t.Iu.Qt(e):e instanceof dm?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(Z.min()))try{const s=await bm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(tt.EMPTY_BYTE_STRING,c.snapshotVersion)),Cm(r,a);const l=new Wn(c.target,a,1,c.sequenceNumber);Wl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await lo(t,s)}}async function lo(t,e,n){if(!ei(e))throw e;t.mu.add(1),await si(t),t.pu.set("Offline"),n||(n=()=>bm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Qo(t)})}function Nm(t,e){return e().catch(n=>lo(t,n,e))}async function Yo(t){const e=ee(t),n=Sn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;zI(e);)try{const r=await CI(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,WI(e,r)}catch(r){await lo(e,r)}km(e)&&xm(e)}function zI(t){return Cn(t)&&t._u.length<10}function WI(t,e){t._u.push(e);const n=Sn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function km(t){return Cn(t)&&!Sn(t).Oo()&&t._u.length>0}function xm(t){Sn(t).start()}async function KI(t){Sn(t).su()}async function HI(t){const e=Sn(t);for(const n of t._u)e.tu(n.mutations)}async function GI(t,e,n){const s=t._u.shift(),r=Fl.from(s,e,n);await Nm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Yo(t)}async function QI(t,e){e&&Sn(t).Xo&&await async function(n,s){if(r=s.code,PE(r)&&r!==b.ABORTED){const i=n._u.shift();Sn(n).$o(),await Nm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yo(n)}var r}(t,e),km(t)&&xm(t)}async function Zh(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=Cn(n);n.mu.add(3),await si(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Qo(n)}async function YI(t,e){const n=ee(t);e?(n.mu.delete(2),await Qo(n)):e||(n.mu.add(2),await si(n),n.pu.set("Unknown"))}function qs(t){return t.Tu||(t.Tu=function(e,n,s){const r=ee(e);return r.ru(),new MI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:FI.bind(null,t),no:jI.bind(null,t),Ho:qI.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Hl(t)?Kl(t):t.pu.set("Unknown")):(await t.Tu.stop(),Am(t))})),t.Tu}function Sn(t){return t.Eu||(t.Eu=function(e,n,s){const r=ee(e);return r.ru(),new PI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:KI.bind(null,t),no:QI.bind(null,t),nu:HI.bind(null,t),eu:GI.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Yo(t)):(await t.Eu.stop(),t._u.length>0&&(V("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class Gl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Gl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ql(t,e){if(en("AsyncQueue",`${e}: ${t}`),ei(t))return new N(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ms{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=or(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ed{constructor(){this.Au=new Ve($.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):Q():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Rs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rs(e,n,ms.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class XI{constructor(){this.bu=void 0,this.listeners=[]}}class JI{constructor(){this.queries=new js(e=>Yp(e),qo),this.onlineState="Unknown",this.vu=new Set}}async function Yl(t,e){const n=ee(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new XI),r)try{i.bu=await n.onListen(s)}catch(o){const a=Ql(o,`Initialization of query '${Nc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&Jl(n)}async function Xl(t,e){const n=ee(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ZI(t,e){const n=ee(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&Jl(n)}function e0(t,e,n){const s=ee(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Jl(t){t.vu.forEach(e=>{e.next()})}class Zl{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Rs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class Lm{constructor(e){this.key=e}}class Dm{constructor(e){this.key=e}}class t0{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=oe(),this.mutatedKeys=oe(),this.ju=Xp(e),this.zu=new ms(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new ed,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=zo(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;f&&p?f.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),T=!0):this.Yu(f,p)||(s.track({type:2,doc:p}),T=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),T=!0):f&&!p&&(s.track({type:1,doc:f}),T=!0,(c||l)&&(a=!0)),T&&(p?(o=o.add(p),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return p(h)-p(f)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Rs(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new ed,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=oe(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Dm(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Lm(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=oe();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Rs.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class n0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class s0{constructor(e){this.key=e,this.ic=!1}}class r0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new js(a=>Yp(a),qo),this.uc=new Map,this.cc=new Set,this.ac=new Ve($.comparator),this.hc=new Map,this.lc=new jl,this.fc={},this.dc=new Map,this._c=Is.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function i0(t,e){const n=m0(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await AI(n.localStore,$t(e));n.isPrimaryClient&&Im(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await o0(n,e,s,a==="current",o.resumeToken)}return r}async function o0(t,e,n,s,r){t.mc=(h,f,p)=>async function(m,_,T,M){let S=_.view.Hu(T);S.Li&&(S=await Yh(m.localStore,_.query,!1).then(({documents:F})=>_.view.Hu(F,S)));const A=M&&M.targetChanges.get(_.targetId),W=_.view.applyChanges(S,m.isPrimaryClient,A);return nd(m,_.targetId,W.tc),W.snapshot}(t,h,f,p);const i=await Yh(t.localStore,e,!0),o=new t0(e,i.Yi),a=o.Hu(i.documents),c=ni.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);nd(t,n,l.tc);const u=new n0(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function a0(t,e){const n=ee(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!qo(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Dc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Rm(n.remoteStore,s.targetId),Oc(n,s.targetId)}).catch(Zr)):(Oc(n,s.targetId),await Dc(n.localStore,s.targetId,!0))}async function c0(t,e,n){const s=g0(t);try{const r=await function(i,o){const a=ee(i),c=Pe.now(),l=o.reduce((f,p)=>f.add(p.key),oe());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=tn(),m=oe();return a.ji.getEntries(f,l).next(_=>{p=_,p.forEach((T,M)=>{M.isValidDocument()||(m=m.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(_=>{u=_;const T=[];for(const M of o){const S=DE(M,u.get(M.key).overlayedDocument);S!=null&&T.push(new Rn(M.key,S,Qp(S.value.mapValue),Pt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,T,o)}).next(_=>{h=_;const T=_.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,_.batchId,T)})}).then(()=>({batchId:h.batchId,changes:lm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Ve(pe)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ri(s,r.changes),await Yo(s.remoteStore)}catch(r){const i=Ql(r,"Failed to persist write");n.reject(i)}}async function Om(t,e){const n=ee(t);try{const s=await II(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?ve(o.ic):r.removedDocuments.size>0&&(ve(o.ic),o.ic=!1))}),await ri(n,s,e)}catch(s){await Zr(s)}}function td(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ee(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Jl(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function l0(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Ve($.comparator);o=o.insert(i,Qe.newNoDocument(i,Z.min()));const a=oe().add(i),c=new Ho(Z.min(),new Map,new Ue(pe),o,a);await Om(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),eu(s)}else await Dc(s.localStore,e,!1).then(()=>Oc(s,e,n)).catch(Zr)}async function u0(t,e){const n=ee(t),s=e.batch.batchId;try{const r=await EI(n.localStore,e);Pm(n,s,null),Mm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ri(n,r)}catch(r){await Zr(r)}}async function h0(t,e,n){const s=ee(t);try{const r=await function(i,o){const a=ee(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ve(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Pm(s,e,n),Mm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ri(s,r)}catch(r){await Zr(r)}}function Mm(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Pm(t,e,n){const s=ee(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Oc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Um(t,s)})}function Um(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Rm(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),eu(t))}function nd(t,e,n){for(const s of n)s instanceof Lm?(t.lc.addReference(s.key,e),d0(t,s)):s instanceof Dm?(V("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Um(t,s.key)):Q()}function d0(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.cc.add(s),eu(t))}function eu(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new $(_e.fromString(e)),s=t._c.next();t.hc.set(s,new s0(n)),t.ac=t.ac.insert(n,s),Im(t.remoteStore,new Wn($t(Fo(n.path)),s,2,Ll.at))}}async function ri(t,e,n){const s=ee(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=zl.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Ci,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>I.forEach(h.xi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!ei(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ki.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,i))}async function f0(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Sm(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new N(b.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ri(n,s.Wi)}}function p0(t,e){const n=ee(t),s=n.hc.get(e);if(s&&s.ic)return oe().add(s.key);{let r=oe();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function m0(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Om.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=p0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=l0.bind(null,e),e.rc.Ho=ZI.bind(null,e.eventManager),e.rc.gc=e0.bind(null,e.eventManager),e}function g0(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=u0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h0.bind(null,e),e}class y0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Go(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return TI(this.persistence,new SI,e.initialUser,this.Tt)}Tc(e){return new _I(ql.qs,this.Tt)}Ic(e){return new kI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class v0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>td(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=f0.bind(null,this.syncEngine),await YI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new JI}createDatastore(e){const n=Go(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new OI(r));var r;return function(i,o,a,c){return new UI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>td(this.syncEngine,a,0),o=Jh.C()?new Jh:new xI,new BI(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new r0(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);V("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await si(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class tu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):en("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _0{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ge.UNAUTHENTICATED,this.clientId=Bp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ql(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function w0(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Sm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function S0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await b0(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Zh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zh(e.remoteStore,i)),t.onlineComponents=e}async function b0(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await w0(t,new y0)),t.offlineComponents}async function Xo(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await S0(t,new v0)),t.onlineComponents}function T0(t){return Xo(t).then(e=>e.remoteStore)}function E0(t){return Xo(t).then(e=>e.syncEngine)}function I0(t){return Xo(t).then(e=>e.datastore)}async function uo(t){const e=await Xo(t),n=e.eventManager;return n.onListen=i0.bind(null,e.syncEngine),n.onUnlisten=a0.bind(null,e.syncEngine),n}function R0(t,e,n={}){const s=new Mt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new tu({next:h=>{i.enqueueAndForget(()=>Xl(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new N(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new N(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Zl(Fo(o.path),l,{includeMetadataChanges:!0,Ou:!0});return Yl(r,u)}(await uo(t),t.asyncQueue,e,n,s)),s.promise}function C0(t,e,n={}){const s=new Mt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new tu({next:h=>{i.enqueueAndForget(()=>Xl(r,u)),h.fromCache&&a.source==="server"?c.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Zl(o,l,{includeMetadataChanges:!0,Ou:!0});return Yl(r,u)}(await uo(t),t.asyncQueue,e,n,s)),s.promise}const sd=new Map;/**
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
 */function Vm(t,e,n){if(!n)throw new N(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function A0(t,e,n,s){if(e===!0&&s===!0)throw new N(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rd(t){if(!$.isDocumentKey(t))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function id(t){if($.isDocumentKey(t))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jo(t);throw new N(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function N0(t,e){if(e<=0)throw new N(b.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class od{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,A0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Zo{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new od({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new od(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new KT;switch(n.type){case"gapi":const s=n.client;return new YT(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sd.get(e);n&&(V("ComponentProvider","Removing Datastore"),sd.delete(e),n.terminate())}(this),Promise.resolve()}}function k0(t,e,n,s={}){var r;const i=(t=ft(t,Zo))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Tc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ge.MOCK_USER;else{o=d_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ge(c)}t._authCredentials=new HT(new $p(o,a))}}/**
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
 */class Ze{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class Ct{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ct(this.firestore,e,this._query)}}class vn extends Ct{constructor(e,n,s){super(e,n,Fo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new $(e))}withConverter(e){return new vn(this.firestore,e,this._path)}}function Cs(t,e,...n){if(t=Ne(t),Vm("collection","path",e),t instanceof Zo){const s=_e.fromString(e,...n);return id(s),new vn(t,null,s)}{if(!(t instanceof Ze||t instanceof vn))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(_e.fromString(e,...n));return id(s),new vn(t.firestore,null,s)}}function Jn(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=Bp.R()),Vm("doc","path",e),t instanceof Zo){const s=_e.fromString(e,...n);return rd(s),new Ze(t,null,new $(s))}{if(!(t instanceof Ze||t instanceof vn))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(_e.fromString(e,...n));return rd(s),new Ze(t.firestore,t instanceof vn?t.converter:null,new $(s))}}/**
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
 */class x0{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Tm(this,"async_queue_retry"),this.Hc=()=>{const n=qa();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=qa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=qa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Mt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!ei(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw en("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Gl.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&Q()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function ad(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class bn extends Zo{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new x0,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$m(this),this._firestoreClient.terminate()}}function L0(t,e){const n=typeof t=="object"?t:sf(),s=typeof t=="string"?t:e||"(default)",r=Zc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=l_("firestore");i&&k0(r,...i)}return r}function ii(t){return t._firestoreClient||$m(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $m(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new cE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _0(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class D0{constructor(e="count",n){this._aggregateType=e,this._internalFieldPath=n,this.type="AggregateField"}}class O0{constructor(e,n,s){this._userDataWriter=n,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertValue(this._data.value)}}/**
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
 */class As{constructor(e){this._byteString=e}static fromBase64String(e){try{return new As(tt.fromBase64String(e))}catch(n){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new As(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ea{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ta{constructor(e){this._methodName=e}}/**
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
 */class nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */const M0=/^__.*__$/;class P0{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Rn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ti(e,this.data,n,this.fieldTransforms)}}class Bm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Rn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class su{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return ho(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Fm(this.ra)&&M0.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class U0{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Go(e)}wa(e,n,s,r=!1){return new su({ra:e,methodName:n,_a:s,path:Ye.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function na(t){const e=t._freezeSettings(),n=Go(t._databaseId);return new U0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function V0(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);iu("Data must be an object, but it was:",o,s);const a=qm(s,o);let c,l;if(i.merge)c=new dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Mc(e,h,n);if(!o.contains(f))throw new N(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Wm(u,f)||u.push(f)}c=new dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new P0(new st(a),c,l)}class sa extends ta{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sa}}class ru extends ta{_toFieldTransform(e){return new NE(e.path,new Or)}isEqual(e){return e instanceof ru}}function $0(t,e,n,s){const r=t.wa(1,e,n);iu("Data must be an object, but it was:",r,s);const i=[],o=st.empty();rs(s,(c,l)=>{const u=ou(e,c,n);l=Ne(l);const h=r.ha(u);if(l instanceof sa)i.push(u);else{const f=oi(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new dt(i);return new Bm(o,a,r.fieldTransforms)}function B0(t,e,n,s,r,i){const o=t.wa(1,e,n),a=[Mc(e,s,n)],c=[r];if(i.length%2!=0)throw new N(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Mc(e,i[f])),c.push(i[f+1]);const l=[],u=st.empty();for(let f=a.length-1;f>=0;--f)if(!Wm(l,a[f])){const p=a[f];let m=c[f];m=Ne(m);const _=o.ha(p);if(m instanceof sa)l.push(p);else{const T=oi(m,_);T!=null&&(l.push(p),u.set(p,T))}}const h=new dt(l);return new Bm(u,h,o.fieldTransforms)}function jm(t,e,n,s=!1){return oi(n,t.wa(s?4:3,e))}function oi(t,e){if(zm(t=Ne(t)))return iu("Unsupported field value:",e,t),qm(t,e);if(t instanceof ta)return function(n,s){if(!Fm(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=oi(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return RE(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Pe.fromDate(n);return{timestampValue:co(s.Tt,r)}}if(n instanceof Pe){const r=new Pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:co(s.Tt,r)}}if(n instanceof nu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof As)return{bytesValue:pm(s.Tt,n._byteString)};if(n instanceof Ze){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Bl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Jo(n)}`)}(t,e)}function qm(t,e){const n={};return Fp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(s,r)=>{const i=oi(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function zm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof nu||t instanceof As||t instanceof Ze||t instanceof ta)}function iu(t,e,n){if(!zm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Jo(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Mc(t,e,n){if((e=Ne(e))instanceof ea)return e._internalPath;if(typeof e=="string")return ou(t,e);throw ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const F0=new RegExp("[~\\*/\\[\\]]");function ou(t,e,n){if(e.search(F0)>=0)throw ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ea(...e.split("."))._internalPath}catch{throw ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ho(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new N(b.INVALID_ARGUMENT,a+t+c)}function Wm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class au{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new j0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class j0 extends au{data(){return super.data()}}function cu(t,e){return typeof e=="string"?ou(t,e):e instanceof ea?e._internalPath:e._delegate._internalPath}/**
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
 */function Km(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lu{}class ai extends lu{}function pr(t,e,...n){let s=[];e instanceof lu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof hu).length,o=r.filter(a=>a instanceof uu).length;if(i>1||i>0&&o>0)throw new N(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class uu extends ai{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new uu(e,n,s)}_apply(e){const n=this._parse(e);return Gm(e._query,n),new Ct(e.firestore,e.converter,Ac(e._query,n))}_parse(e){const n=na(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new N(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){ud(u,l);const f=[];for(const p of u)f.push(ld(a,r,p));h={arrayValue:{values:f}}}else h=ld(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||ud(u,l),h=jm(o,i,u,l==="in"||l==="not-in");return Me.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hu extends lu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Rt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Gm(i,a),i=Ac(i,a)}(e._query,n),new Ct(e.firestore,e.converter,Ac(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class du extends ai{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new du(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ps(r,i);return function(a,c){if(Vl(a)===null){const l=jo(a);l!==null&&Qm(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Ct(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new In(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function mr(t,e="asc"){const n=e,s=cu("orderBy",t);return du._create(s,n)}class fu extends ai{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new fu(e,n,s)}_apply(e){return new Ct(e.firestore,e.converter,oo(e._query,this._limit,this._limitType))}}function cd(t){return N0("limit",t),fu._create("limit",t,"F")}class pu extends ai{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new pu(e,n,s)}_apply(e){const n=Hm(e,this.type,this._docOrFields,this._inclusive);return new Ct(e.firestore,e.converter,function(s,r){return new In(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function q0(...t){return pu._create("startAfter",t,!1)}class mu extends ai{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new mu(e,n,s)}_apply(e){const n=Hm(e,this.type,this._docOrFields,this._inclusive);return new Ct(e.firestore,e.converter,function(s,r){return new In(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function z0(...t){return mu._create("endBefore",t,!1)}function Hm(t,e,n,s){if(n[0]=Ne(n[0]),n[0]instanceof au)return function(r,i,o,a,c){if(!a)throw new N(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of zn(r))if(u.field.isKeyField())l.push(io(i,a.key));else{const h=a.data.field(u.field);if(Ol(h))throw new N(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new N(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(h)}return new Es(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=na(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new N(b.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<l.length;p++){const m=l[p];if(h[p].field.isKeyField()){if(typeof m!="string")throw new N(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!$l(i)&&m.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const _=i.path.child(_e.fromString(m));if(!$.isDocumentKey(_))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const T=new $(_);f.push(io(o,T))}else{const _=jm(a,c,m);f.push(_)}}return new Es(f,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function ld(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$l(e)&&n.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(_e.fromString(n));if(!$.isDocumentKey(s))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return io(t,new $(s))}if(n instanceof Ze)return io(t,n._key);throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jo(n)}.`)}function ud(t,e){if(!Array.isArray(t)||t.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gm(t,e){if(e.isInequality()){const s=jo(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new N(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Vl(t);i!==null&&Qm(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Qm(t,e,n){if(!n.isEqual(e))throw new N(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class W0{convertValue(e,n="none"){switch(Xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const s={};return rs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new nu(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=jp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const n=wn(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=_e.fromString(e);ve(wm(s));const r=new xr(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||en(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function K0(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function H0(){return new D0("count")}/**
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
 */class ar{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ym extends au{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Bi extends Ym{data(e={}){return super.data(e)}}class Xm{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ar(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Bi(this._firestore,this._userDataWriter,s.key,s,new ar(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Bi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ar(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Bi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ar(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:G0(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function G0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function gu(t){t=ft(t,Ze);const e=ft(t.firestore,bn);return R0(ii(e),t._key).then(n=>eg(e,t,n))}class ra extends W0{constructor(e){super(),this.firestore=e}convertBytes(e){return new As(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function Jm(t){t=ft(t,Ct);const e=ft(t.firestore,bn),n=ii(e),s=new ra(e);return Km(t._query),C0(n,t._query).then(r=>new Xm(e,s,t,r))}function Pc(t,e,n){t=ft(t,Ze);const s=ft(t.firestore,bn),r=K0(t.converter,e,n);return Zm(s,[V0(na(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Pt.none())])}function Q0(t,e,n,...s){t=ft(t,Ze);const r=ft(t.firestore,bn),i=na(r);let o;return o=typeof(e=Ne(e))=="string"||e instanceof ea?B0(i,"updateDoc",t._key,e,n,s):$0(i,"updateDoc",t._key,e),Zm(r,[o.toMutation(t._key,Pt.exists(!0))])}function Y0(t,...e){var n,s,r;t=Ne(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ad(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ad(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Ze)l=ft(t.firestore,bn),u=Fo(t._key.path),c={next:h=>{e[o]&&e[o](eg(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ft(t,Ct);l=ft(h.firestore,bn),u=h._query;const f=new ra(l);c={next:p=>{e[o]&&e[o](new Xm(l,f,h,p))},error:e[o+1],complete:e[o+2]},Km(t._query)}return function(h,f,p,m){const _=new tu(m),T=new Zl(f,_,p);return h.asyncQueue.enqueueAndForget(async()=>Yl(await uo(h),T)),()=>{_.Pc(),h.asyncQueue.enqueueAndForget(async()=>Xl(await uo(h),T))}}(ii(l),u,a,c)}function Zm(t,e){return function(n,s){const r=new Mt;return n.asyncQueue.enqueueAndForget(async()=>c0(await E0(n),s,r)),r.promise}(ii(t),e)}function eg(t,e,n){const s=n.docs.get(e._key),r=new ra(t);return new Ym(t,r,e._key,s,new ar(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function yu(t){return X0(t,{count:H0()})}function X0(t,e){const n=ft(t.firestore,bn),s=ii(n),r=function(i,o){const a=[];for(const c in i)Object.prototype.hasOwnProperty.call(i,c)&&a.push(o(i[c],c,i));return a}(e,(i,o)=>new aE(new Dl(o),i._aggregateType,i._internalFieldPath));return function(i,o,a){const c=new Mt;return i.asyncQueue.enqueueAndForget(async()=>{try{if(Cn(await T0(i))){const l=await I0(i);c.resolve(VI(l,o,a))}else c.reject(new N(b.UNAVAILABLE,"Failed to get aggregate result because the client is offline."))}catch(l){c.reject(l)}}),c.promise}(s,t._query,r).then(i=>function(o,a,c){const l=new ra(o);return new O0(a,l,c)}(n,t,i))}function tg(){return new ru("serverTimestamp")}(function(t,e=!0){(function(n){Fs=n})($r),ys(new Kn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new bn(new GT(n.getProvider("auth-internal")),new JT(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),yn(xh,"3.8.4",t),yn(xh,"3.8.4","esm2017")})();const{VITE_API_KEY:J0,VITE_AUTH_DOMAIN:Z0,VITE_PROJECT_ID:eR,VITE_MESSAGE_SENDER_ID:tR,VITE_STORAGE_BUCKET:nR,VITE_APP_ID:sR}={VITE_API_KEY:"AIzaSyD9xKYChzMoHnq4ba4WYo_qx25dMrAL90Q",VITE_AUTH_DOMAIN:"lossom-214c3.firebaseapp.com",VITE_PROJECT_ID:"lossom-214c3",VITE_STORAGE_BUCKET:"lossom-214c3.appspot.com",VITE_MESSAGE_SENDER_ID:"483685773935",VITE_APP_ID:"1:483685773935:web:02aab7999f1df1b4bc139a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},rR={apiKey:J0,authDomain:Z0,projectId:eR,storageBucket:nR,messagingSenderId:tR,appId:sR},ng=nf(rR),ci=Fb(ng),It=L0(ng),iR=new Ht,vu=async t=>{let e=[];return(await Jm(Cs(It,t))).forEach(s=>{e.push(s.data())}),e};function _u(){const[t,e]=w.useState(!1),[n,s]=w.useState(null),r=w.useCallback(async()=>{e(!0);try{return await CS(ci)}catch(i){s(i)}finally{e(!1)}},[]);return w.useMemo(()=>({isLoading:t,error:n,signOut:r}),[t,n,r])}function sg(t="users"){const[e,n]=w.useState(!1),[s,r]=w.useState(null),i=w.useCallback(async(o,a={})=>{const c=Jn(It,t,o.uid),l=Jn(Cs(It,t,o.uid,"flowerList"));n(!0);try{if((await gu(c)).exists())throw new ReferenceError("이미 Firestore에 가입 등록된 사용자입니다.");{const h=tg(),{email:f,displayName:p,uid:m}=o;await Pc(c,{createAt:h,uid:m,displayName:p,email:f,userNickname:"",url:"",isMade:!1,bgSrc:"",...a}),await Pc(l,{nickname:"6lossom",contents:"환영합니다.",flowerSrc:"cherry-blossom1",createAt:h})}}catch(u){r(u)}finally{n(!1)}},[t]);return w.useMemo(()=>({isLoading:e,error:s,createAuthUser:i}),[i,s,e])}const oR="_loginButton_mv69o_7",aR={loginButton:oR};var Uc={},cR={get exports(){return Uc},set exports(t){Uc=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if(o==="string"||o==="number")s.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&s.push(a)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){s.push(i.toString());continue}for(var c in i)e.call(i,c)&&i[c]&&s.push(c)}}}return s.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(cR);const ht=Uc,hd=({text:t,className:e,onClick:n})=>d.jsx("button",{type:"button",className:ht(aR.loginButton,e),onClick:n,children:t}),lR="_ProjectInfoBackground_1c3wq_7",uR="_ProjectInfoContainer_1c3wq_29",hR="_projectInfoClose_1c3wq_40",za={ProjectInfoBackground:lR,ProjectInfoContainer:uR,projectInfoClose:hR},dR="_A11yHidden_1urfp_1",fR="_focusable_1urfp_18",dd={A11yHidden:dR,focusable:fR},Bt=w.forwardRef(function({as:e="span",focusable:n=!1,className:s="",...r},i){const o=`${dd.A11yHidden} ${n?dd.focusable:""} ${s}`.trim();return we.createElement(e,{...r,className:o,ref:i})}),rg=({handleModal:t})=>d.jsx(d.Fragment,{children:d.jsx("div",{role:"alertdialog","aria-modal":"true",className:za.ProjectInfoBackground,children:d.jsxs("figure",{className:za.ProjectInfoContainer,children:[d.jsx(Bt,{as:"figcaption",children:"벚꽃이 지면은 어떤 서비스 인가요? 벚꽃이 지면은 벚꽃 개화시기에 맞춰 메세지를 볼 수 있는 롤링페이퍼 서비스입니다. 자세한 오픈일정은 사이드바를 통해 확인하실수 있어요! 벚꽃이 지면을 통해 전하지 못한 마음을 전해보세요! 롤링페이퍼란 무엇인가요? 특정 사람에 대해 어떤 주제를 중심으로 주변 사람들이 의견을 적어 놓은 것을 말해요! 이용 방법은 어떻게 되나요? 첫 번째로, 내 벚꽃나무를 만들고 SNS에 링크를 공유해요. 두 번째로, 친구들이 내 벚꽃나무에 벚꽃을 달아줄 수 있어요. 세 번째로, 벚꽃 안에는 친구가 보내준 메세지가 들어있어요. 마지막으로, 모든 편지들은 벚꽃이 질 때 오픈 가능해요! 벚꽃이 지면은 누가 만들었나요? 벚꽃이 지면은 멋쟁이 사자처럼 프론트 엔드 스쿨 4기 수강생 네 명이 함께 만든 서비스입니다!"}),d.jsx("button",{className:za.projectInfoClose,type:"button","aria-label":"닫기",onClick:t,children:"close"})]})})}),pR="_clickMe_9l6uf_7",mR="_clickMeText_9l6uf_37",fd={clickMe:pR,clickMeText:mR},gR=({handleModal:t})=>d.jsx(d.Fragment,{children:d.jsx("button",{onClick:t,className:fd.clickMe,type:"button","aria-label":"프로젝트 이용 방법",children:d.jsx("span",{className:fd.clickMeText,children:"click me!"})})}),yR=()=>{const[t,e]=w.useState(!1),n=ts(),{signOut:s}=_u(),{createAuthUser:r}=sg("users"),i=()=>{e(!t)};window.onload=()=>{s(),localStorage.clear()};const o=async()=>{const{user:a}=await XS(ci,iR),{uid:c}=a;localStorage.setItem("uid",JSON.stringify(c)),await r(a),n("/make-tree")};return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:Ke.homeContainer,children:[d.jsxs("div",{className:Ke.homeLogo,children:[d.jsxs("div",{className:Ke.homeMainTitle,children:[d.jsx("div",{className:Ke.moonLogo}),d.jsxs("h1",{className:Ke.homeTitleInfo,children:[d.jsx("span",{"aria-hidden":!0,className:Ke.homeTitleShadow,children:"벚꽃이 지면"}),d.jsx("span",{"aria-hidden":!0,className:Ke.homeTitleBorder,children:"벚꽃이 지면"}),d.jsx("span",{className:Ke.homeTitle,children:"벚꽃이 지면"})]})]}),d.jsx("p",{className:Ke.homeSubTitle,children:"벚꽃이 지면 당신의 메세지가 전달됩니다."})]}),d.jsxs("div",{className:Ke.tree,children:[d.jsx("div",{className:Ke.blossomTree}),d.jsx(gR,{handleModal:i})]}),d.jsxs("div",{className:Ke.loginButtonList,children:[d.jsx(hd,{className:Ke.generalButton,onClick:()=>n("/signin"),text:"로그인"}),d.jsx(hd,{className:Ke.googleButton,onClick:o,text:"구글 계정으로 계속하기"}),d.jsxs("p",{className:Ke.toSignUpPageWithDescription,children:["가입한 계정이 없다면"," ",d.jsx("button",{type:"button",className:Ke.toSignUpPageLink,onClick:()=>n("/signup"),children:"회원가입"}),"을 해주세요 !"]})]})]}),t?d.jsx(rg,{handleModal:i}):null]})},vR="_makeTreeContainer_q2cfo_7",_R="_header_q2cfo_25",wR="_headerTitle_q2cfo_41",SR="_userNickname_q2cfo_54",bR="_headerSubTitle_q2cfo_82",TR="_originTreeContainer_q2cfo_93",ER="_makeTreeCustomContainer_q2cfo_98",IR="_makeTreeCustom_q2cfo_98",Wt={makeTreeContainer:vR,header:_R,headerTitle:wR,userNickname:SR,headerSubTitle:bR,originTreeContainer:TR,makeTreeCustomContainer:ER,makeTreeCustom:IR};function RR(t){const[e,n]=w.useState(!1),[s,r]=w.useState(null),i=w.useCallback(async(o,a)=>{const c=Jn(It,t,o);n(!0);try{await Q0(c,a)}catch(l){r(l)}finally{n(!1)}},[t]);return w.useMemo(()=>({isLoading:e,error:s,updateData:i}),[s,e,i])}const CR="_subTitle_1gymj_7",AR={subTitle:CR},NR="/assets/message.png",fo=({className:t="",subText:e})=>d.jsxs("div",{className:ht(AR.subTitle,t),children:[e.includes("벚꽃나무")?null:d.jsx("img",{src:NR,alt:""}),d.jsx("h3",{children:e})]}),kR="_backgroundCustomList_1tyn3_7",xR={backgroundCustomList:kR},LR="_backgroundCustomItem_1ogdc_7",DR="_backgroundCustomButton_1ogdc_13",OR="_backgroundCustomSelectText_1ogdc_34",Wa={backgroundCustomItem:LR,backgroundCustomButton:DR,backgroundCustomSelectText:OR},MR=({keyId:t,item:e,handleSelect:n})=>{const{id:s,smallSrc:r,alt:i}=e;return d.jsx("li",{className:Wa.backgroundCustomItem,children:d.jsxs("button",{onClick:n,className:Wa.backgroundCustomButton,type:"button",id:String(s),children:[d.jsx("img",{src:r,alt:i}),d.jsx("span",{className:Wa.backgroundCustomSelectText,children:"SELECT"})]})},t)},PR=()=>{const{backgroundImageList:t,handleSelect:e}=w.useContext(ag);return d.jsx("ul",{className:xR.backgroundCustomList,children:t.map(n=>d.jsx(MR,{item:n,handleSelect:e},n.id))})},UR="_ShortButtonList_vepa0_7",VR={ShortButtonList:UR},$R="_shortButton_1ut7v_7",BR="_buttonImage_1ut7v_33",pd={shortButton:$R,buttonImage:BR},FR="/assets/github-logo.png";function gr({type:t="button",onClick:e,text:n,className:s=""}){return d.jsxs("button",{type:t,onClick:e,className:ht(s,pd.shortButton),children:[n==="Github"?d.jsx("img",{className:pd.buttonImage,src:FR}):null,n]})}const ig=({firstText:t,firstClick:e,secondText:n,secondClick:s,type:r})=>d.jsxs("div",{className:VR.ShortButtonList,children:[d.jsx(gr,{onClick:e,text:t}),d.jsx(gr,{onClick:s,text:n,type:r})]}),jR="_blossomTree_dr75f_7",qR={blossomTree:jR},og=()=>d.jsx("div",{className:qR.blossomTree}),zR="/assets/select-bg-pink.png",WR="/assets/select-bg-night.png",KR="/assets/select-bg-sky.png",HR="/assets/bg-pink.png",GR="/assets/bg-night.png",QR="/assets/bg-sky.png",md=[{id:1,bigSrc:"bg-sky",smallSrc:KR,img:QR,alt:"구름 많고 화창한 하늘 배경 선택하기"},{id:2,bigSrc:"bg-night",smallSrc:WR,img:GR,alt:"별 가득한 노을밤 배경 선택하기"},{id:3,bigSrc:"bg-pink",smallSrc:zR,img:HR,alt:"구름 많고 핑크로 물든 배경 선택하기"}],ag=w.createContext({}),YR=()=>{const[t,e]=w.useState(""),[n,s]=w.useState("bg-pink"),r=ts(),{updateData:i}=RR("users"),o=JSON.parse(localStorage.getItem("uid")||"null");w.useLayoutEffect(()=>{vu("users").then(h=>{h.map(f=>{f.uid===o&&f.isMade&&r(`/share-tree/${o}`)})})},[]);const a=h=>{const f=document.querySelector(".MakeTreePage"),p=h.target.closest("button");p!==null&&f!==null&&md.map(m=>{if(parseInt(p.id)===m.id){f.style.background=`center / cover no-repeat url(/assets/${m.bigSrc}.png)`,s(m.bigSrc);return}})},c=()=>{i(o,{bgSrc:n,isMade:!0,userNickname:t}),r(`/share-tree/${o}`,{replace:!0}),history.pushState(null,"null",location.href),window.onpopstate=function(h){history.go(1)}},l=h=>{e(h.target.value)},u={backgroundImageList:md,setSelectBg:s,handleSelect:a};return d.jsxs(ag.Provider,{value:u,children:[d.jsx(Bt,{as:"h1",children:"벚꽃이지면"}),d.jsxs("form",{onSubmit:c,className:ht("MakeTreePage",Wt.makeTreeContainer),children:[d.jsxs("header",{className:Wt.header,children:[d.jsxs("h2",{className:Wt.headerTitle,children:[d.jsx(Bt,{as:"label",focusable:!0,htmlFor:"userNickname",children:"닉네임"}),d.jsx("input",{type:"text",id:"userNickname",name:"userNickname",value:t,maxLength:6,placeholder:"닉네임",onChange:l,className:Wt.userNickname,required:!0}),d.jsx("span",{children:"님의 벚꽃나무"})]}),d.jsx(fo,{className:Wt.headerSubTitle,subText:"벚꽃나무에 이름을 적어주세요"})]}),d.jsx("div",{className:Wt.originTreeContainer,children:d.jsx(og,{})}),d.jsx("div",{className:Wt.makeTreeCustomContainer,children:d.jsxs("div",{className:Wt.makeTreeCustom,children:[d.jsx(fo,{className:Wt.makeTreeCustomText,subText:"벚꽃나무의 하늘을 선택해주세요."}),d.jsx(PR,{}),d.jsx(ig,{firstText:"취소",firstClick:()=>{window.location.replace("/")},secondText:"완료",type:"submit"})]})})]})]})},XR="_signUpPageWrapper_1hyxb_7",JR="_toSignInPage_1hyxb_25",ZR="_signUpPageContainer_1hyxb_44",eC="_signUpPageTitle_1hyxb_50",tC="_toSignInPageWithDescription_1hyxb_71",nC="_toSignInPageLink_1hyxb_75",sC="_form_1hyxb_78",rC="_signUpButton_1hyxb_86",iC="_resetButton_1hyxb_116",oC="_validatePassed_1hyxb_146",aC="_notificationStyling_1hyxb_150",cC="_animateNotification_1hyxb_160",lC="_fadeInAndOut_1hyxb_1",ge={signUpPageWrapper:XR,toSignInPage:JR,signUpPageContainer:ZR,signUpPageTitle:eC,toSignInPageWithDescription:tC,toSignInPageLink:nC,form:sC,signUpButton:rC,resetButton:iC,validatePassed:oC,notificationStyling:aC,animateNotification:cC,fadeInAndOut:lC};function uC(t=!1){const[e,n]=w.useState(!1),[s,r]=w.useState(null),[i,o]=w.useState(null),a=w.useCallback(async(c,l,u)=>{n(!0);try{const h=await _S(ci,c,l),{user:f}=h;return u&&f&&await TS(f,{displayName:u}),t&&f&&await SS(f),o(f),f}catch(h){r(h)}finally{n(!1)}},[t]);return w.useMemo(()=>({isLoading:e,error:s,user:i,signUp:a}),[e,s,i,a])}function cg(){const[t,e]=w.useState(!1),[n,s]=w.useState(null),[r,i]=w.useState(null);return w.useEffect(()=>(e(!0),RS(ci,o=>{i(o),e(!1)},o=>{s(o),e(!1)})),[]),w.useMemo(()=>({isLoading:t,error:n,user:r}),[t,n,r])}const hC="_FormInput_7upog_7",dC="_FormInputInline_7upog_14",fC="_FormInputVertical_7upog_17",pC="_label_7upog_20",mC="_inputed_7upog_20",gC="_input_7upog_20",yC="_validate_7upog_67",vC="_passwordVisible_7upog_77",_C="_passwordInvisible_7upog_89",Et={FormInput:hC,FormInputInline:dC,FormInputVertical:fC,label:pC,inputed:mC,input:gC,validate:yC,passwordVisible:vC,passwordInvisible:_C};function Bn({name:t,label:e,type:n,invisibleLabel:s,vertical:r,...i}){const[o,a]=w.useState(!1),[c,l]=w.useState(n),u=w.useRef(null),h=w.useId();w.useEffect(()=>{const m=u.current,_=m==null?void 0:m.parentElement;m==null||m.addEventListener("blur",T=>{T.target.value.length>0?_==null||_.classList.add(Et.inputed):_==null||_.classList.remove(Et.inputed)})},[]);const f=`${Et.FormInput} ${r?Et.FormInputVertical:""}`.trim(),p=()=>{const m=u.current;c==="text"?l("password"):c==="password"&&l("text"),a(_=>!_),m==null||m.focus()};return d.jsxs("div",{className:f,children:[wC(h,e,s),(t==="password"||t==="passwordConfirm")&&o||(t==="password"||t==="passwordConfirm")&&!o?d.jsx("input",{name:t,ref:u,id:h,type:c,className:Et.input,...i}):"",t==="password"||t==="passwordConfirm"?"":d.jsx("input",{name:t,ref:u,id:h,type:n,className:Et.input,...i}),t==="name"||t==="email"||t==="password"||t==="passwordConfirm"?d.jsx("div",{className:Et.validate}):"",t==="password"&&o||t==="passwordConfirm"&&o?d.jsx("button",{type:"button",className:Et.passwordVisible,onClick:p,"aria-label":"비밀번호 숨기기"}):"",t==="password"&&!o||t==="passwordConfirm"&&!o?d.jsx("button",{type:"button",className:Et.passwordInvisible,onClick:p,"aria-label":"비밀번호 보기"}):""]})}Bn.defualtProps={type:"text",invisibleLabel:!1,vertical:!1,inputed:!1};function wC(t,e,n=!1){return n?d.jsx(Bt,{as:"label",htmlFor:t,className:Et.label,children:e}):d.jsx("label",{htmlFor:t,className:Et.label,children:e})}const Xt=({className:t,text:e,notificationRef:n,notificationRole:s,notificationAriaLive:r})=>d.jsx("span",{role:s,ref:n,className:t,"aria-live":r,children:e}),SC={name:"",email:"",password:"",passwordConfirm:""};function bC(){const[t,e]=w.useState(!1),[n,s]=w.useState(!1),[r,i]=w.useState(!1),[o,a]=w.useState(!1),[c,l]=w.useState("off"),[u,h]=w.useState(""),f=w.useRef(SC),p=w.useRef([]),m=ts(),{isLoading:_,signUp:T}=uC(),{createAuthUser:M}=sg(),{isLoading:S,error:A,user:W}=cg();if(S)return d.jsx("div",{role:"alert",children:"페이지를 준비 중입니다."});if(A)return d.jsxs("div",{role:"alert",children:["오류! ",A.message]});W&&(localStorage.setItem("uid",JSON.stringify(W.uid)),m("/make-tree"));const F=async j=>{j.preventDefault(),await e(!0);const ie=p.current[0],{name:U,email:L,password:Re,passwordConfirm:yt}=f.current;if(!U||U.trim().length<2||U.trim().length>8){ie.classList.add(ge.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{ie.classList.remove(ge.animateNotification),h(""),l("off"),e(!1)},2e3);return}e(!1),await s(!0);const Ce=p.current[1];if(!L||!L.includes("@")||L.substring(0,L.indexOf("@"))===""||L.substring(L.indexOf("@")+1)===""||!L.substring(L.indexOf("@")+1).includes(".")||L.substring(0,L.indexOf("."))===""||L.substring(L.indexOf(".")+1)===""||L.substring(L.indexOf(".")-1,L.indexOf("."))==="@"){Ce.classList.add(ge.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{Ce.classList.remove(ge.animateNotification),h(""),l("off"),s(!1)},2e3);return}s(!1),await i(!0);const Ae=p.current[2];if(!Re||Re.trim().length<6){Ae.classList.add(ge.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{Ae.classList.remove(ge.animateNotification),h(""),l("off"),i(!1)},2e3);return}if(!Object.is(Re,yt)){Ae.classList.add(ge.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{Ae.classList.remove(ge.animateNotification),h(""),l("off"),i(!1)},2e3);return}i(!1),await a(!0);const vt=p.current[3],_t=await T(L,Re,U);_t||(vt.classList.add(ge.animateNotification),h("alert"),l("assertive"),setTimeout(()=>{vt.classList.remove(ge.animateNotification),h(""),l("off"),a(!1)},2e3)),await M(_t)},q=j=>{const{name:ie,value:U}=j.target;f.current[ie]=U;const L=j.target.nextElementSibling;ie==="name"&&U.trim().length>1&&U.trim().length<9?L==null||L.classList.add(ge.validatePassed):ie==="name"&&(!U||U.trim().length<2||U.trim().length>8)&&(L==null||L.classList.remove(ge.validatePassed)),ie==="email"&&U.includes("@")&&U.substring(0,U.indexOf("@"))!==""&&U.substring(U.indexOf("@")+1)!==""&&U.substring(U.indexOf("@")+1).includes(".")&&U.substring(0,U.indexOf("."))!==""&&U.substring(U.indexOf(".")+1)!==""&&U.substring(U.indexOf(".")-1,U.indexOf("."))!=="@"?L==null||L.classList.add(ge.validatePassed):ie==="email"&&(!U.includes("@")||U.substring(0,U.indexOf("@"))===""||U.substring(U.indexOf("@")+1)===""||!U.substring(U.indexOf("@")+1).includes(".")||U.substring(0,U.indexOf("."))===""||U.substring(U.indexOf(".")+1)===""||U.substring(U.indexOf(".")-1,U.indexOf("."))==="@")&&(L==null||L.classList.remove(ge.validatePassed)),(ie==="password"||ie==="passwordConfirm")&&U.trim().length>5?L==null||L.classList.add(ge.validatePassed):(ie==="password"||ie==="passwordConfirm")&&(!U||U.trim().length<6)&&(L==null||L.classList.remove(ge.validatePassed))};return d.jsxs(d.Fragment,{children:[d.jsx(Bt,{as:"h1",children:"벚꽃이지면"}),d.jsx("div",{className:ge.signUpPageWrapper,children:d.jsxs("div",{className:ge.signUpPageContainer,children:[d.jsx("h2",{className:ge.signUpPageTitle,children:"회원가입"}),d.jsxs("form",{className:ge.form,onSubmit:F,children:[t?d.jsx(Xt,{className:ge.notificationStyling,text:"이름을 확인해주세요 !",notificationRef:j=>p.current[0]=j,notificationRole:u,notificationAriaLive:c}):"",n?d.jsx(Xt,{className:ge.notificationStyling,text:"이메일 확인해주세요 !",notificationRef:j=>p.current[1]=j,notificationRole:u,notificationAriaLive:c}):"",r?d.jsx(Xt,{className:ge.notificationStyling,text:"비밀번호를 확인해주세요 !",notificationRef:j=>p.current[2]=j,notificationRole:u,notificationAriaLive:c}):"",o?d.jsx(Xt,{className:ge.notificationStyling,text:"이미 가입된 회원정보입니다 !",notificationRef:j=>p.current[3]=j,notificationRole:u,notificationAriaLive:c}):"",d.jsx(Bn,{name:"name",label:"이름",onChange:q}),d.jsx(Bn,{name:"email",type:"email",label:"이메일",onChange:q}),d.jsx(Bn,{name:"password",type:"password",label:"비밀번호",onChange:q}),d.jsx(Bn,{name:"passwordConfirm",type:"password",label:"비밀번호 확인",onChange:q}),d.jsx("button",{type:"submit",disabled:_,className:ge.signUpButton,children:_?"회원가입 중...":"회원가입"}),d.jsx("button",{type:"reset",className:ge.resetButton,children:"초기화"})]}),d.jsx("button",{type:"button",onClick:()=>m("/signin"),className:ge.toSignInPage,"aria-label":"이전 페이지로 이동",children:"<"})]})})]})}const TC="_signInPageWrapper_1lewi_7",EC="_toHomePage_1lewi_25",IC="_signInPageContainer_1lewi_44",RC="_signInPageTitle_1lewi_50",CC="_toSignUpPage_1lewi_66",AC="_form_1lewi_96",NC="_signInButton_1lewi_104",kC="_validatePassed_1lewi_135",xC="_notificationStyling_1lewi_139",LC="_animateNotification_1lewi_149",DC="_fadeInAndOut_1lewi_1",at={signInPageWrapper:TC,toHomePage:EC,signInPageContainer:IC,signInPageTitle:RC,toSignUpPage:CC,form:AC,signInButton:NC,validatePassed:kC,notificationStyling:xC,animateNotification:LC,fadeInAndOut:DC};function OC(){const[t,e]=w.useState(!1),[n,s]=w.useState(null),[r,i]=w.useState(null),o=w.useCallback(async(a,c)=>{e(!0);try{const l=await wS(ci,a,c);i(l)}catch(l){s(l)}finally{e(!1)}},[]);return w.useMemo(()=>({isLoading:t,error:n,user:r,signIn:o}),[t,n,r,o])}const MC={email:"",password:""};function PC(){const[t,e]=w.useState(!1),[n,s]=w.useState("off"),[r,i]=w.useState(""),o=w.useRef(MC),a=w.useRef(null),c=ts(),{isLoading:l,signIn:u}=OC(),{isLoading:h,error:f,user:p}=cg(),m=async T=>{T.preventDefault(),await e(!0);const{email:M,password:S}=o.current,A=a.current;await u(M,S),p||(A==null||A.classList.add(at.animateNotification),i("alert"),s("assertive"),setTimeout(()=>{A==null||A.classList.remove(at.animateNotification),i(""),s("off"),e(!1)},2e3))},_=T=>{const{name:M,value:S}=T.target;o.current[M]=S;const A=T.target.nextElementSibling;M==="email"&&S.includes("@")&&S.substring(0,S.indexOf("@"))!==""&&S.substring(S.indexOf("@")+1)!==""&&S.substring(S.indexOf("@")+1).includes(".")&&S.substring(0,S.indexOf("."))!==""&&S.substring(S.indexOf(".")+1)!==""&&S.substring(S.indexOf(".")-1,S.indexOf("."))!=="@"?A==null||A.classList.add(at.validatePassed):M==="email"&&(!S.includes("@")||S.substring(0,S.indexOf("@"))===""||S.substring(S.indexOf("@")+1)===""||!S.substring(S.indexOf("@")+1).includes(".")||S.substring(0,S.indexOf("."))===""||S.substring(S.indexOf(".")+1)===""||S.substring(S.indexOf(".")-1,S.indexOf("."))==="@")&&(A==null||A.classList.remove(at.validatePassed)),M==="password"&&S.trim().length>5?A==null||A.classList.add(at.validatePassed):M==="password"&&(!S||S.trim().length<6)&&(A==null||A.classList.remove(at.validatePassed))};return h?d.jsx("div",{role:"alert",children:"페이지를 준비 중입니다."}):f?d.jsxs("div",{role:"alert",children:["오류! ",f.message]}):(p&&(localStorage.setItem("uid",JSON.stringify(p.uid)),c("/make-tree")),d.jsxs(d.Fragment,{children:[d.jsx(Bt,{as:"h1",children:"벚꽃이지면"}),d.jsx("div",{className:at.signInPageWrapper,children:d.jsxs("div",{className:at.signInPageContainer,children:[d.jsx("h2",{className:at.signInPageTitle,children:"로그인"}),d.jsxs("form",{className:at.form,onSubmit:m,children:[t?d.jsx(Xt,{className:at.notificationStyling,text:"이메일 또는 비밀번호를 확인해주세요 !",notificationRef:a,notificationRole:r,notificationAriaLive:n}):"",d.jsx(Bn,{name:"email",type:"email",label:"이메일",onChange:_}),d.jsx(Bn,{name:"password",type:"password",label:"비밀번호",onChange:_}),d.jsx("button",{type:"submit",disabled:l,className:at.signInButton,children:l?"로그인 중...":"로그인"})]}),d.jsx("button",{type:"button",onClick:()=>c("/signup"),className:at.toSignUpPage,children:"회원가입"}),d.jsx("button",{type:"button",onClick:()=>c("/"),className:at.toHomePage,"aria-label":"이전 페이지로 이동",children:"<"})]})})]}))}const UC="_shareTreeContainer_3c03c_7",VC="_blossomTreeContainer_3c03c_35",$C="_flowerList_3c03c_43",BC="_pagination_3c03c_49",FC="_originTreeContainer_3c03c_62",jC="_swiperButton_3c03c_66",qC="_arrowButton_3c03c_71",zC="_leftButton_3c03c_80",WC="_rightButton_3c03c_85",KC="_moveIn_3c03c_91",HC="_notificationContainer_3c03c_95",GC="_notificationStyling_3c03c_99",QC="_animateNotification_3c03c_113",YC="_fadeInAndOut_3c03c_1",Le={shareTreeContainer:UC,blossomTreeContainer:VC,flowerList:$C,pagination:BC,originTreeContainer:FC,swiperButton:jC,arrowButton:qC,leftButton:zC,rightButton:WC,moveIn:KC,notificationContainer:HC,notificationStyling:GC,animateNotification:QC,fadeInAndOut:YC},wu=w.createContext(),XC=w.createContext(),JC="_header_13kte_7",ZC={header:JC},eA="_headerTitle_2vnzc_7",tA={headerTitle:eA},lg=({userName:t})=>d.jsxs("h2",{className:tA.headerTitle,children:[t,d.jsx("span",{children:"님의 벚꽃나무"})]}),ug=({userName:t,className:e,subText:n})=>d.jsxs("header",{className:ZC.header,children:[d.jsx(lg,{userName:t}),d.jsx(fo,{className:e,subText:n})]}),nA="_LongButtonContainer_91bfh_7",sA={LongButtonContainer:nA},rA="_longButton_ydp3u_7",iA={longButton:rA},gd=({text:t,disabled:e=!1,onClick:n})=>d.jsx(d.Fragment,{children:d.jsx("button",{type:"button",disabled:e,onClick:n,className:iA.longButton,children:t})}),Vc=({firstText:t,firstClick:e,disabled:n,secondText:s,secondClick:r})=>d.jsxs("div",{className:sA.LongButtonContainer,children:[d.jsx(gd,{text:t,disabled:n,onClick:e}),d.jsx(gd,{text:s,onClick:r})]}),oA="_hamburgerButton_m5uyz_1",aA="_hamburger_m5uyz_1",cA="_burger1_m5uyz_19",lA="_burger2_m5uyz_20",uA="_burger3_m5uyz_21",Qs={hamburgerButton:oA,hamburger:aA,burger1:cA,burger2:lA,burger3:uA};function hA({isMenuOpen:t}){return d.jsx("button",{"aria-controls":"hamburder","aria-expanded":t,className:ht("hamburger",Qs.hamburgerButton),"aria-label":"메뉴바",children:d.jsxs("div",{className:Qs.hamburger,children:[d.jsx("div",{className:Qs.burger1}),d.jsx("div",{className:Qs.burger2}),d.jsx("div",{className:Qs.burger3})]})})}const dA="_sideMenuContainer_1d1co_8",fA="_sideMenuBackground_1d1co_17",pA="_sideMenuBar_1d1co_29",mA="_sideMenuTitle_1d1co_39",gA="_sideMenuNav_1d1co_57",yA="_shortButton_1d1co_64",vA="_contents_1d1co_67",_A="_importantText_1d1co_79",wA="_focusHamburger_1d1co_83",He={sideMenuContainer:dA,sideMenuBackground:fA,sideMenuBar:pA,sideMenuTitle:mA,sideMenuNav:gA,shortButton:yA,contents:vA,importantText:_A,focusHamburger:wA};function SA({loginName:t,handleModal:e}){const{signOut:n}=_u(),s=()=>{document.querySelector(".hamburger").focus()};return d.jsxs("div",{id:"hamburger",className:He.sideMenuContainer,children:[d.jsx("div",{className:He.sideMenuBackground}),d.jsxs("div",{className:He.sideMenuBar,children:[d.jsxs("div",{children:[d.jsx("div",{className:He.sideMenuTitle,children:t?`${t}님`:"로그인"}),d.jsxs("div",{className:He.sideMenuNav,children:[d.jsx(gr,{onClick:()=>{n(),window.location.replace("/")},text:"Log Out",className:He.shortButton}),d.jsx(gr,{text:"About",onClick:e,className:He.shortButton})]})]}),d.jsxs("div",{children:[d.jsx("div",{className:He.sideMenuTitle,children:"공지사항"}),d.jsxs("div",{className:He.contents,children:[d.jsxs("span",{children:["🌸벚꽃메세지는"," ",d.jsx("span",{className:He.importantText,children:"4월 15일 00시에 공개"}),"됩니다."]}),d.jsxs("span",{children:["🌸메세지 작성기한은"," ",d.jsx("span",{className:He.importantText,children:"4월 14일 23:59 까지 "}),"입니다. 벚꽃메세지로 마음을 전달해보세요 !"]}),d.jsxs("span",{children:["🌸벚꽃메세지는"," ",d.jsxs("span",{className:He.importantText,children:["4월 15일~4월 29일까지"," "]})," ","2주간 열람 가능합니다. 소중한 메세지를 놓치지 않게 기억해주세요 !"]}),d.jsx("span",{children:"🌸오류가 발견되면 Contact me에 있는 연락처로 문의 부탁드립니다 !"})]})]}),d.jsxs("div",{children:[d.jsx("div",{className:He.sideMenuTitle,children:"Contact Us"}),d.jsx("div",{className:He.sideMenuNav,children:d.jsx(gr,{onClick:()=>location.href="https://github.com/cherry-6lossom/6lossom",text:"Github",className:He.shortButton})})]})]}),d.jsx("button",{onFocus:s,className:He.focusHamburger})]})}const bA="_messageListBackground_1tab1_7",TA="_messageListWrapper_1tab1_15",EA="_messageListContainer_1tab1_27",IA="_messageList_1tab1_7",RA="_MessageItemWrapper_1tab1_55",CA="_closeButton_1tab1_63",AA="_moveOut_1tab1_75",xt={messageListBackground:bA,messageListWrapper:TA,messageListContainer:EA,messageList:IA,MessageItemWrapper:RA,closeButton:CA,moveOut:AA},NA="_messageItemContainer_1pyp1_7",kA="_messageItem_1pyp1_7",xA="_messageIcon_1pyp1_33",LA="_messageSender_1pyp1_41",DA="_messageContentsContainer_1pyp1_59",OA="_messageContents_1pyp1_59",cs={messageItemContainer:NA,messageItem:kA,messageIcon:xA,messageSender:LA,messageContentsContainer:DA,messageContents:OA},MA=({flower:t,id:e,handleOpenMessageDetail:n})=>{const{nickname:s,contents:r}=t;return d.jsx("li",{className:cs.messageItemContainer,onClick:()=>n(t),children:d.jsxs("div",{className:cs.messageItem,children:[d.jsxs("div",{className:cs.messageSender,children:[d.jsx("div",{className:cs.messageIcon}),s]}),d.jsx("div",{className:cs.messageContentsContainer,children:d.jsx("p",{className:cs.messageContents,children:r})})]})},e)},PA=({listBackgroundRef:t,messageListRef:e,handleOpenMessageDetail:n})=>{const[s,r]=w.useState([]),{uid:i}=So(),o=w.useContext(wu),a=t==null?void 0:t.current,c=e==null?void 0:e.current,{messageListVisible:l,setMessageListVisible:u}=o;w.useLayoutEffect(()=>{vu(`users/${i}/flowerList`).then(p=>{r(p.sort((m,_)=>m.createdAt-_.createdAt))})},[]);const h=p=>{const m=p.target;a===m&&l&&(c==null||c.classList.add(xt.moveOut),setTimeout(()=>{a.style.backgroundColor="",a.style.zIndex="",a.style.display="",u(!l),c==null||c.classList.remove(xt.moveOut)},400))},f=()=>{l&&(c==null||c.classList.add(xt.moveOut),setTimeout(()=>{a.style.backgroundColor="",a.style.zIndex="",a.style.display="",u(!l),c==null||c.classList.remove(xt.moveOut)},400))};return d.jsx("div",{ref:t,onClick:p=>h(p),className:xt.messageListBackground,children:d.jsx("div",{ref:e,className:xt.messageListWrapper,children:d.jsxs("div",{className:xt.messageListContainer,children:[d.jsx("div",{className:xt.messageList,children:d.jsx("ul",{className:xt.MessageItemWrapper,children:s.map(p=>d.jsx(MA,{id:s.indexOf(p),flower:p,handleOpenMessageDetail:n},s.indexOf(p)))})}),d.jsx("button",{type:"button",onClick:()=>f(),className:xt.closeButton})]})})})},UA="_messageDetailBackground_awz4o_7",VA="_messageDetailWrapper_awz4o_27",$A="_messageDetailContainer_awz4o_41",BA="_moonIcon_awz4o_51",FA="_messageSender_awz4o_57",jA="_messageContents_awz4o_71",qA="_closeButton_awz4o_100",zA="_downloadButtonContainer_awz4o_120",WA="_downloadButton_awz4o_120",xn={messageDetailBackground:UA,messageDetailWrapper:VA,messageDetailContainer:$A,moonIcon:BA,messageSender:FA,messageContents:jA,closeButton:qA,downloadButtonContainer:zA,downloadButton:WA},KA=({flowerInfo:t,messageDetailRef:e})=>{const n=w.useContext(wu),{nickname:s,contents:r}=t,i=e.current,{messageDetailVisible:o,setMessageDetailVisible:a}=n,c=u=>{const h=u.target;i===h&&o&&(i.style.backgroundColor="",i.style.zIndex="",i.style.display="",a(!o))},l=u=>{o&&(i.style.backgroundColor="",i.style.zIndex="",i.style.display="",a(!o))};return d.jsx("div",{ref:e,onClick:u=>c(u),className:xn.messageDetailBackground,children:d.jsx("div",{className:xn.messageDetailWrapper,children:d.jsxs("ul",{className:xn.messageDetailContainer,children:[d.jsx("li",{children:d.jsx("div",{className:xn.moonIcon})}),d.jsx("li",{className:xn.messageSender,children:s}),d.jsx("li",{className:xn.messageContents,children:r}),d.jsx("button",{type:"button",onClick:u=>l(),className:xn.closeButton,children:"OK!"})]})})})},HA="_flower_te9a3_7",GA="_flowerButton_te9a3_28",QA="_flower0_te9a3_46",YA="_flower1_te9a3_51",XA="_flower2_te9a3_56",JA="_flower3_te9a3_61",ZA="_flower4_te9a3_66",eN="_flower5_te9a3_71",tN="_flower6_te9a3_76",Kt={flower:HA,flowerButton:GA,flower0:QA,flower1:YA,flower2:XA,flower3:JA,flower4:ZA,flower5:eN,flower6:tN},nN="/assets/cherry-blossom1.png",sN="/assets/cherry-blossom2.png",rN="/assets/cherry-blossom3.png",iN="/assets/cherry-blossom4.png",yr=[{id:0,src:"cherry-blossom1",img:nN,alt:"하트 모양 벚꽃잎의 수술이 있는 벚꽃"},{id:1,src:"cherry-blossom2",img:sN,alt:"둥근 벚꽃잎의 수술이 없는 벚꽃"},{id:2,src:"cherry-blossom3",img:rN,alt:"하트 모양 벚꽃잎의 수술이 동그란 벚꽃"},{id:3,src:"cherry-blossom4",img:iN,alt:"하트 모양 벚꽃잎의 수술이 별 모양인 벚꽃"}],oN=({id:t,keyId:e,item:n,handleOpenMessageDetail:s})=>{var a;const{flowerSrc:r,nickname:i}=n,o=()=>{s(n)};return d.jsxs("li",{className:ht(Kt.flower,t%7===0?Kt.flower0:t%7===1?Kt.flower1:t%7===2?Kt.flower2:t%7===3?Kt.flower3:t%7===4?Kt.flower4:t%7===5?Kt.flower5:Kt.flower6),children:[d.jsx("span",{children:i}),d.jsx("button",{className:Kt.flowerButton,onClick:o,"aria-label":`${i}님의 벚꽃메세지`,children:d.jsx("img",{src:`/assets/${r}.png`,alt:((a=yr.find(c=>c.src===r))==null?void 0:a.alt)??""})})]},e)},aN="/assets/Spinner.svg",cN=()=>{const[t,e]=w.useState(!1),[n,s]=w.useState(!1),[r,i]=w.useState({}),[o,a]=w.useState(!1),[c,l]=w.useState(!1),[u,h]=w.useState(!0),[f,p]=w.useState(""),[m,_]=w.useState(""),[T,M]=w.useState(""),[S,A]=w.useState([]),[W,F]=w.useState([]),[q,j]=w.useState(null),[ie,U]=w.useState(0),[L,Re]=w.useState(!1),[yt,Ce]=w.useState(!0),[Ae,vt]=w.useState(!1),[_t,wt]=w.useState(!1),rn=w.useMemo(()=>({messageListVisible:t,setMessageListVisible:e,messageDetailVisible:n,setMessageDetailVisible:s}),[t,e,n,s]),qt=w.useRef(null),ae=w.useRef(null),ue=w.useRef(null),{uid:v}=So(),R=ts(),C=Cs(It,`users/${v}/flowerList`),{signOut:Y}=_u(),D=JSON.parse(localStorage.getItem("uid")||"null"),X=new Date;w.useLayoutEffect(()=>{B(),me("next")},[]),w.useLayoutEffect(()=>{Ce(S.length!==ie),Re(!(S.length<=7))},[S.length,ie]),w.useEffect(()=>{const fe=new Date(X.getFullYear(),3,15),he=new Date(X.getFullYear(),3,30),Nt=X>=fe&&X<=he,kt=new Date(X.getFullYear(),3,15),zt=new Date(X.getFullYear(),4,15),St=X>=kt&&X<=zt;return vt(Nt),wt(St),Y0(Jn(It,`users/${v}`),on=>{var kn,vi;_((kn=on.data())==null?void 0:kn.userNickname),M((vi=on.data())==null?void 0:vi.bgSrc)}),vu("users").then(on=>{on.map(kn=>{kn.uid===D&&p(kn.userNickname)})}),history.pushState(null,"",window.location.href),window.addEventListener("popstate",ne),()=>{window.removeEventListener("popstate",ne)}},[]);const ne=()=>{history.pushState(null,"",window.location.href)},B=async()=>{const fe=await yu(pr(C,mr("createAt","asc")));U(fe.data().count)},me=async(fe,he=7)=>{let Nt;if(!q)Nt=pr(C,mr("createAt","asc"),cd(he));else{let St=S.length%he===0?S.length-he:S.length-S.length%he;Nt=pr(C,mr("createAt","asc"),fe==="next"?q0(q):z0(q),cd(fe==="next"||St<=he?he:St))}const kt=await Jm(Nt);u&&h(!1);const zt=kt.docs;xe(zt,fe,he)},xe=(fe,he,Nt)=>{const kt=[];fe.forEach(on=>{kt.push({...on.data()})});const zt=he==="next"?[...S,...kt]:kt;A(zt),F(kt.slice(-Nt,void 0));let St=fe[fe.length-1];St&&j(St)},ce=fe=>{const he=document.querySelector(`.${fe}`);he==null||he.classList.add(Le.animateNotification),setTimeout(()=>{he==null||he.classList.remove(Le.animateNotification)},4e3)},Se=()=>{a(!o)},ut=()=>{let fe=window.location.href;navigator.clipboard.writeText(fe),ce("targetCheckLinkCopyNotification")},At=fe=>{const he=ue.current;if(i(fe),v!==D){ce("targetCheckOwnerNotification");return}else if(!Ae){ce("targetCheckPeriodNotification");return}n||(he.style.backgroundColor="rgba(0, 0, 0, 0.2)",he.style.display="block",he.style.zIndex="102",s(!n))},it=()=>{const fe=qt.current,he=ae.current;if(!Ae){ce("targetCheckPeriodNotification");return}t||(he==null||he.classList.add(Le.moveIn),fe.style.backgroundColor="rgba(0, 0, 0, 0.2)",fe.style.display="block",fe.style.zIndex="101",e(!t),setTimeout(()=>{he==null||he.classList.remove(Le.moveIn)},900))},nt=()=>{_t?R(`/message-custom/${v}`):ce("targetCheckCreatableNotification")},gi=()=>{D?window.location.replace(`/share-tree/${D}`):(alert("로그인이 필요합니다."),Y(),localStorage.clear(),R("/"))},yi=()=>{l(!c)};return d.jsxs(d.Fragment,{children:[d.jsx(wu.Provider,{value:rn,children:d.jsxs(XC.Provider,{value:{flowerInfo:r,setFlowerInfo:i},children:[d.jsxs("div",{style:{background:`url(/assets/${T}.png) center / cover no-repeat `},className:Le.shareTreeContainer,children:[d.jsx(Bt,{as:"h1",children:"벚꽃이지면"}),d.jsx(ug,{userName:m,subText:`${ie}송이의 벚꽃이 피었어요 ! `}),d.jsx("div",{className:Le.blossomTreeContainer,children:u?d.jsx("div",{role:"alert",children:d.jsx("img",{src:aN,alt:"로딩 중"})}):d.jsxs("div",{className:Le.flowerList,"aria-live":"polite",children:[d.jsxs("div",{className:Le.originTreeContainer,children:[d.jsx(og,{}),d.jsx("ul",{children:W.map(fe=>d.jsx(oN,{item:fe,keyId:W.indexOf(fe),id:W.indexOf(fe),handleOpenMessageDetail:At},W.indexOf(fe)))})]}),d.jsxs("span",{className:Le.pagination,children:[S.length,"/",ie]}),d.jsxs("div",{className:Le.swiperButton,children:[d.jsx("button",{type:"button","aria-label":"이전 버튼",className:ht(Le.arrowButton,Le.leftButton),disabled:!L,onClick:()=>me("prev")}),d.jsx("button",{type:"button","aria-label":"다음 버튼",className:ht(Le.arrowButton,Le.rightButton),disabled:!yt,onClick:()=>me("next")})]})]})}),d.jsxs("div",{className:Le.notificationContainer,children:[d.jsx(Xt,{className:ht("targetCheckOwnerNotification",Le.notificationStyling),text:"나의 벚꽃나무만 확인이 가능합니다 !"}),d.jsx(Xt,{className:ht("targetCheckPeriodNotification",Le.notificationStyling),text:"아직 벚꽃 열람 시기가 아니에요 !"}),d.jsx(Xt,{className:ht("targetCheckLinkCopyNotification",Le.notificationStyling),text:"링크가 복사되었습니다 !"}),d.jsx(Xt,{className:ht("targetCheckCreatableNotification",Le.notificationStyling),text:"작성기한이 마감되었습니다 !"})]}),v===D?d.jsx(Vc,{firstText:"링크 공유하기",firstClick:ut,secondText:"전체 메세지 보기",secondClick:()=>it()}):d.jsx(Vc,{firstText:"벚꽃 달아주기",firstClick:nt,secondText:"내 벚꽃나무 보러가기",secondClick:gi}),d.jsx("div",{className:Le.hamburgerContainer,onClick:Se,children:d.jsx(hA,{isMenuOpen:o})}),o&&d.jsx(SA,{handleModal:yi,loginName:f})]}),v===D&&Ae?d.jsxs(d.Fragment,{children:[d.jsx(PA,{listBackgroundRef:qt,messageListRef:ae,handleOpenMessageDetail:At}),d.jsx(KA,{flowerInfo:r,messageDetailRef:ue})]}):null]})}),c?d.jsx(rg,{handleModal:yi}):null]})},lN="_pageSetting_1bh7v_7",uN="_header_1bh7v_29",hN="_customContainer_1bh7v_32",dN="_blossomMain_1bh7v_38",fN="_blossomImage_1bh7v_47",Ys={pageSetting:lN,header:uN,customContainer:hN,blossomMain:dN,blossomImage:fN},hg=w.createContext(),pN="_blossomSelect_3wcgt_7",mN={blossomSelect:pN},gN="_blossomButton_9lbt8_7",yN="_blossomImage_9lbt8_15",yd={blossomButton:gN,blossomImage:yN},vN=({item:t,keyId:e,handleSelect:n})=>{const{id:s,src:r,alt:i}=t;return d.jsx("button",{type:"button",id:String(s),onClick:n,className:yd.blossomButton,"aria-label":i,children:d.jsx("img",{className:yd.blossomImage,src:`/assets/${r}.png`,alt:i})},e)};function _N(){const{blossomInfoList:t,handleSelect:e}=w.useContext(hg);return d.jsx("div",{className:mN.blossomSelect,children:t.map(n=>d.jsx(vN,{keyId:n.id,item:n,handleSelect:e},n.id))})}const wN=()=>{var h;const[t,e]=w.useState(""),[n,s]=w.useState("cherry-blossom1"),[r,i]=w.useState(0),o=ts(),{uid:a}=So();w.useEffect(()=>{(async()=>{var m;const f=Jn(It,`users/${a}`),p=await gu(f);e((m=p.data())==null?void 0:m.userNickname),c()})()},[]);const c=async()=>{const f=Cs(It,`users/${a}/flowerList`),p=await yu(pr(f,mr("createAt","asc")));i(p.data().count)},l=f=>{const p=document.querySelector(".blossomImage"),m=f.target.closest("button");yr.forEach(_=>{if(parseInt((m==null?void 0:m.id)??"")===_.id){p==null||p.setAttribute("src",`/assets/${_.src}.png`),s(_.src);return}})},u=async()=>{o(`/write-message/${a}/${n}`)};return d.jsxs(hg.Provider,{value:{blossomInfoList:yr,setBlossomSrc:s,handleSelect:l},children:[d.jsx(Bt,{as:"h1",children:"벚꽃이지면"}),d.jsxs("div",{className:Ys.pageSetting,children:[d.jsxs("div",{className:Ys.customContainer,children:[d.jsx("div",{className:Ys.header,children:d.jsx(ug,{userName:t,subText:"벚꽃을 골라주세요!"})}),d.jsx("div",{className:Ys.blossomMain,children:d.jsx("img",{className:ht("blossomImage",Ys.blossomImage),src:`/assets/${n}.png`,alt:((h=yr.find(f=>f.src===n))==null?void 0:h.alt)??""})}),d.jsx(_N,{})]}),d.jsx("div",{children:d.jsx(ig,{firstText:"이전",firstClick:()=>o(-1),secondText:"다음",secondClick:u})})]})]})},SN="_writeMessageWrap_11v2y_7",bN="_header_11v2y_29",TN="_flower_11v2y_36",EN="_writeMessageHeader_11v2y_41",IN="_notice_11v2y_47",RN="_modalButtonContainer_11v2y_52",Ci={writeMessageWrap:SN,header:bN,flower:TN,writeMessageHeader:EN,notice:IN,modalButtonContainer:RN},CN="_modalBackground_1oeg3_7",AN="_enrollWrap_1oeg3_26",NN="_noticeDetail_1oeg3_43",kN="_buttonList_1oeg3_58",xN="_cancel_1oeg3_77",LN="_done_1oeg3_86",Ln={modalBackground:CN,enrollWrap:AN,noticeDetail:NN,buttonList:kN,cancel:xN,done:LN},DN=({handleCloseModal:t,handleComplete:e})=>d.jsx("div",{role:"alertdialog","aria-modal":"true","aria-labelledby":"TITLE","aria-describedby":"CONTENTS",className:Ln.modalBackground,children:d.jsxs("div",{className:Ln.enrollWrap,children:[d.jsx("div",{className:Ln.notice,children:d.jsx("span",{id:"TITLE",children:"편지를 남길까요?"})}),d.jsx("div",{className:Ln.noticeDetail,children:d.jsxs("p",{id:"CONTENTS",children:["한 번 남긴 편지는 삭제 할 수 없어요!",d.jsx("br",{}),"신중한 결정 부탁드립니다!"]})}),d.jsxs("div",{className:Ln.buttonList,children:[d.jsx("button",{type:"button",className:Ln.cancel,onClick:t,children:"취소"}),d.jsx("button",{type:"button",className:Ln.done,onClick:e,children:"완료"})]})]})}),ON="_messageWrap_uui1f_7",MN="_textLength_uui1f_16",PN="_authorContainer_uui1f_23",UN="_author_uui1f_23",VN="_contentContainer_uui1f_44",$N="_content_uui1f_44",Dn={messageWrap:ON,textLength:MN,authorContainer:PN,author:UN,contentContainer:VN,content:$N},BN=({authorInput:t,contentInput:e,state:n,text:s,handleChangeState:r})=>d.jsx("div",{className:Dn.messageInputContainer,children:d.jsxs("div",{className:Dn.messageWrap,children:[d.jsxs("div",{className:Dn.authorContainer,children:[d.jsx(Bt,{as:"label",htmlFor:"nickname",children:"닉네임"}),d.jsx("input",{id:"nickname",className:Dn.author,name:"author",placeholder:"작성자 이름을 적어주세요",type:"text",value:n.author,onChange:r,ref:t,maxLength:6})]}),d.jsx("div",{className:Dn.contentContainer,children:d.jsx("textarea",{"aria-label":"메세지 작성하기",className:Dn.content,name:"content",placeholder:"메세지를 작성해주세요",value:n.content,onChange:r,ref:e,maxLength:500})}),d.jsxs("p",{className:Dn.textLength,children:[s.length," / 500"]})]})}),FN=()=>{var W;const[t,e]=w.useState(""),[n,s]=w.useState(0),[r,i]=w.useState(""),[o,a]=w.useState({author:"",content:""}),[c,l]=w.useState(!1),u=w.useRef(null),h=w.useRef(null),{uid:f,flowerName:p}=So(),m=ts();w.useLayoutEffect(()=>{(async()=>{var j;const F=Jn(It,`users/${f}`),q=await gu(F);e((j=q.data())==null?void 0:j.userNickname),_()})()},[]);const _=async()=>{const F=Cs(It,`users/${f}/flowerList`),q=await yu(pr(F,mr("createAt","asc")));s(q.data().count)},T=F=>{const{name:q,value:j}=F.target;q==="content"&&j.length<=500&&i(j),a({...o,[q]:j})},M=()=>{var F,q;if(o.author.length<1){(F=u.current)==null||F.focus();return}if(o.content.length<2){(q=h.current)==null||q.focus();return}l(!0)},S=()=>{l(!1)},A=async()=>{const F=tg(),{author:q,content:j}=o,ie=Jn(Cs(It,`users/${f}/flowerList`));await Pc(ie,{nickname:q,contents:j,createAt:F,flowerSrc:`${p}`}),window.location.replace(`/share-tree/${f}`)};return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:Ci.writeMessageWrap,children:[d.jsx(Bt,{as:"h1",children:"벚꽃이지면"}),d.jsxs("div",{className:Ci.header,children:[d.jsx(lg,{userName:t}),d.jsx("img",{className:Ci.flower,src:`/assets/${p}.png`,alt:((W=yr.find(F=>F.src===p))==null?void 0:W.alt)??""}),d.jsx(fo,{className:Ci.notice,subText:`${t}님에게 메세지를 남겨주세요`})]}),d.jsx(BN,{authorInput:u,contentInput:h,state:o,text:r,handleChangeState:T}),d.jsx(Vc,{firstText:"이전",firstClick:()=>m(-1),secondText:"완료",secondClick:M})]}),c&&d.jsx(DN,{handleCloseModal:S,handleComplete:A})]})};function jN(t){const e=new Error(t);if(e.stack===void 0)try{throw e}catch{}return e}var qN=jN,se=qN;function zN(t){return!!t&&typeof t.then=="function"}var be=zN;function WN(t,e){if(t!=null)return t;throw se(e??"Got unexpected null or undefined")}var Ie=WN;function te(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class ia{getValue(){throw se("BaseLoadable")}toPromise(){throw se("BaseLoadable")}valueMaybe(){throw se("BaseLoadable")}valueOrThrow(){throw se(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw se("BaseLoadable")}promiseOrThrow(){throw se(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw se("BaseLoadable")}errorOrThrow(){throw se(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw se("BaseLoadable")}}class KN extends ia{constructor(e){super(),te(this,"state","hasValue"),te(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const n=e(this.contents);return be(n)?Zn(n):Ns(n)?n:li(n)}catch(n){return be(n)?Zn(n.next(()=>this.map(e))):oa(n)}}}class HN extends ia{constructor(e){super(),te(this,"state","hasError"),te(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class dg extends ia{constructor(e){super(),te(this,"state","loading"),te(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return Zn(this.contents.then(n=>{const s=e(n);if(Ns(s)){const r=s;switch(r.state){case"hasValue":return r.contents;case"hasError":throw r.contents;case"loading":return r.contents}}return s}).catch(n=>{if(be(n))return n.then(()=>this.map(e).contents);throw n}))}}function li(t){return Object.freeze(new KN(t))}function oa(t){return Object.freeze(new HN(t))}function Zn(t){return Object.freeze(new dg(t))}function fg(){return Object.freeze(new dg(new Promise(()=>{})))}function GN(t){return t.every(e=>e.state==="hasValue")?li(t.map(e=>e.contents)):t.some(e=>e.state==="hasError")?oa(Ie(t.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):Zn(Promise.all(t.map(e=>e.contents)))}function pg(t){const n=(Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(r=>t[r])).map(r=>Ns(r)?r:be(r)?Zn(r):li(r)),s=GN(n);return Array.isArray(t)?s:s.map(r=>Object.getOwnPropertyNames(t).reduce((i,o,a)=>({...i,[o]:r[a]}),{}))}function Ns(t){return t instanceof ia}const QN={of:t=>be(t)?Zn(t):Ns(t)?t:li(t),error:t=>oa(t),loading:()=>fg(),all:pg,isLoadable:Ns};var is={loadableWithValue:li,loadableWithError:oa,loadableWithPromise:Zn,loadableLoading:fg,loadableAll:pg,isLoadable:Ns,RecoilLoadable:QN},YN=is.loadableWithValue,XN=is.loadableWithError,JN=is.loadableWithPromise,ZN=is.loadableLoading,ek=is.loadableAll,tk=is.isLoadable,nk=is.RecoilLoadable,ui=Object.freeze({__proto__:null,loadableWithValue:YN,loadableWithError:XN,loadableWithPromise:JN,loadableLoading:ZN,loadableAll:ek,isLoadable:tk,RecoilLoadable:nk});const $c={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function sk(t,e){var n,s;const r=(n=process.env[t])===null||n===void 0||(s=n.toLowerCase())===null||s===void 0?void 0:s.trim();if(r==null||r==="")return;if(!["true","false"].includes(r))throw se(`({}).${t} value must be 'true', 'false', or empty: ${r}`);e(r==="true")}function rk(t,e){var n;const s=(n=process.env[t])===null||n===void 0?void 0:n.trim();s==null||s===""||e(s.split(/\s*,\s*|\s+/))}function ik(){var t;typeof process>"u"||((t=process)===null||t===void 0?void 0:t.env)!=null&&(sk("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{$c.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),rk("RECOIL_GKS_ENABLED",e=>{e.forEach(n=>{$c.RECOIL_GKS_ENABLED.add(n)})}))}ik();var zs=$c;function aa(t){return zs.RECOIL_GKS_ENABLED.has(t)}aa.setPass=t=>{zs.RECOIL_GKS_ENABLED.add(t)};aa.setFail=t=>{zs.RECOIL_GKS_ENABLED.delete(t)};aa.clear=()=>{zs.RECOIL_GKS_ENABLED.clear()};var ye=aa;function ok(t,e,{error:n}={}){return null}var ak=ok,Su=ak,Ka,Ha,Ga;const ck=(Ka=we.createMutableSource)!==null&&Ka!==void 0?Ka:we.unstable_createMutableSource,mg=(Ha=we.useMutableSource)!==null&&Ha!==void 0?Ha:we.unstable_useMutableSource,gg=(Ga=we.useSyncExternalStore)!==null&&Ga!==void 0?Ga:we.unstable_useSyncExternalStore;function lk(){var t;const{ReactCurrentDispatcher:e,ReactCurrentOwner:n}=we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((t=e==null?void 0:e.current)!==null&&t!==void 0?t:n.currentDispatcher).useSyncExternalStore!=null}function uk(){return ye("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:ye("recoil_sync_external_store")&&gg!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:ye("recoil_mutable_source")&&mg!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?ye("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:ye("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function hk(){return!1}var hi={createMutableSource:ck,useMutableSource:mg,useSyncExternalStore:gg,currentRendererSupportsUseSyncExternalStore:lk,reactMode:uk,isFastRefreshEnabled:hk};class bu{constructor(e){te(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class yg extends bu{}class vg extends bu{}function dk(t){return t instanceof yg||t instanceof vg}var ca={AbstractRecoilValue:bu,RecoilState:yg,RecoilValueReadOnly:vg,isRecoilValue:dk},fk=ca.AbstractRecoilValue,pk=ca.RecoilState,mk=ca.RecoilValueReadOnly,gk=ca.isRecoilValue,ks=Object.freeze({__proto__:null,AbstractRecoilValue:fk,RecoilState:pk,RecoilValueReadOnly:mk,isRecoilValue:gk});function yk(t,e){return function*(){let n=0;for(const s of t)yield e(s,n++)}()}var la=yk;class _g{}const vk=new _g,es=new Map,Tu=new Map;function _k(t){return la(t,e=>Ie(Tu.get(e)))}function wk(t){if(es.has(t)){const e=`Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function Sk(t){zs.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&wk(t.key),es.set(t.key,t);const e=t.set==null?new ks.RecoilValueReadOnly(t.key):new ks.RecoilState(t.key);return Tu.set(t.key,e),e}class wg extends Error{}function bk(t){const e=es.get(t);if(e==null)throw new wg(`Missing definition for RecoilValue: "${t}""`);return e}function Tk(t){return es.get(t)}const po=new Map;function Ek(t){var e;if(!ye("recoil_memory_managament_2020"))return;const n=es.get(t);if(n!=null&&(e=n.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(n)){var s;es.delete(t),(s=Sg(t))===null||s===void 0||s(),po.delete(t)}}function Ik(t,e){ye("recoil_memory_managament_2020")&&(e===void 0?po.delete(t):po.set(t,e))}function Sg(t){return po.get(t)}var lt={nodes:es,recoilValues:Tu,registerNode:Sk,getNode:bk,getNodeMaybe:Tk,deleteNodeConfigIfPossible:Ek,setConfigDeletionHandler:Ik,getConfigDeletionHandler:Sg,recoilValuesForKeys:_k,NodeMissingError:wg,DefaultValue:_g,DEFAULT_VALUE:vk};function Rk(t,e){e()}var Ck={enqueueExecution:Rk};function Ak(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Nk=Ak(function(t){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},n={},s=5,r=Math.pow(2,s),i=r-1,o=r/2,a=r/4,c={},l=function(g){return function(){return g}},u=n.hash=function(y){var g=typeof y>"u"?"undefined":e(y);if(g==="number")return y;g!=="string"&&(y+="");for(var E=0,k=0,x=y.length;k<x;++k){var O=y.charCodeAt(k);E=(E<<5)-E+O|0}return E},h=function(g){return g-=g>>1&1431655765,g=(g&858993459)+(g>>2&858993459),g=g+(g>>4)&252645135,g+=g>>8,g+=g>>16,g&127},f=function(g,E){return E>>>g&i},p=function(g){return 1<<g},m=function(g,E){return h(g&E-1)},_=function(g,E,k,x){var O=x;if(!g){var G=x.length;O=new Array(G);for(var K=0;K<G;++K)O[K]=x[K]}return O[E]=k,O},T=function(g,E,k){var x=k.length-1,O=0,G=0,K=k;if(g)O=G=E;else for(K=new Array(x);O<E;)K[G++]=k[O++];for(++O;O<=x;)K[G++]=k[O++];return g&&(K.length=x),K},M=function(g,E,k,x){var O=x.length;if(g){for(var G=O;G>=E;)x[G--]=x[G];return x[E]=k,x}for(var K=0,H=0,re=new Array(O+1);K<E;)re[H++]=x[K++];for(re[E]=k;K<O;)re[++H]=x[K++];return re},S=1,A=2,W=3,F=4,q={__hamt_isEmpty:!0},j=function(g){return g===q||g&&g.__hamt_isEmpty},ie=function(g,E,k,x){return{type:S,edit:g,hash:E,key:k,value:x,_modify:rn}},U=function(g,E,k){return{type:A,edit:g,hash:E,children:k,_modify:qt}},L=function(g,E,k){return{type:W,edit:g,mask:E,children:k,_modify:ae}},Re=function(g,E,k){return{type:F,edit:g,size:E,children:k,_modify:ue}},yt=function(g){return g===q||g.type===S||g.type===A},Ce=function(g,E,k,x,O){for(var G=[],K=x,H=0,re=0;K;++re)K&1&&(G[re]=O[H++]),K>>>=1;return G[E]=k,Re(g,H+1,G)},Ae=function(g,E,k,x){for(var O=new Array(E-1),G=0,K=0,H=0,re=x.length;H<re;++H)if(H!==k){var Te=x[H];Te&&!j(Te)&&(O[G++]=Te,K|=1<<H)}return L(g,K,O)},vt=function y(g,E,k,x,O,G){if(k===O)return U(g,k,[G,x]);var K=f(E,k),H=f(E,O);return L(g,p(K)|p(H),K===H?[y(g,E+s,k,x,O,G)]:K<H?[x,G]:[G,x])},_t=function(g,E,k,x,O,G,K,H){for(var re=O.length,Te=0;Te<re;++Te){var ot=O[Te];if(k(K,ot.key)){var $e=ot.value,mt=G($e);return mt===$e?O:mt===c?(--H.value,T(g,Te,O)):_(g,Te,ie(E,x,K,mt),O)}}var bt=G();return bt===c?O:(++H.value,_(g,re,ie(E,x,K,bt),O))},wt=function(g,E){return g===E.edit},rn=function(g,E,k,x,O,G,K){if(E(G,this.key)){var H=x(this.value);return H===this.value?this:H===c?(--K.value,q):wt(g,this)?(this.value=H,this):ie(g,O,G,H)}var re=x();return re===c?this:(++K.value,vt(g,k,this.hash,this,O,ie(g,O,G,re)))},qt=function(g,E,k,x,O,G,K){if(O===this.hash){var H=wt(g,this),re=_t(H,g,E,this.hash,this.children,x,G,K);return re===this.children?this:re.length>1?U(g,this.hash,re):re[0]}var Te=x();return Te===c?this:(++K.value,vt(g,k,this.hash,this,O,ie(g,O,G,Te)))},ae=function(g,E,k,x,O,G,K){var H=this.mask,re=this.children,Te=f(k,O),ot=p(Te),$e=m(H,ot),mt=H&ot,bt=mt?re[$e]:q,as=bt._modify(g,E,k+s,x,O,G,K);if(bt===as)return this;var _i=wt(g,this),Ks=H,Hs=void 0;if(mt&&j(as)){if(Ks&=~ot,!Ks)return q;if(re.length<=2&&yt(re[$e^1]))return re[$e^1];Hs=T(_i,$e,re)}else if(!mt&&!j(as)){if(re.length>=o)return Ce(g,Te,as,H,re);Ks|=ot,Hs=M(_i,$e,as,re)}else Hs=_(_i,$e,as,re);return _i?(this.mask=Ks,this.children=Hs,this):L(g,Ks,Hs)},ue=function(g,E,k,x,O,G,K){var H=this.size,re=this.children,Te=f(k,O),ot=re[Te],$e=(ot||q)._modify(g,E,k+s,x,O,G,K);if(ot===$e)return this;var mt=wt(g,this),bt=void 0;if(j(ot)&&!j($e))++H,bt=_(mt,Te,$e,re);else if(!j(ot)&&j($e)){if(--H,H<=a)return Ae(g,H,Te,re);bt=_(mt,Te,q,re)}else bt=_(mt,Te,$e,re);return mt?(this.size=H,this.children=bt,this):Re(g,H,bt)};q._modify=function(y,g,E,k,x,O,G){var K=k();return K===c?q:(++G.value,ie(y,x,O,K))};function v(y,g,E,k,x){this._editable=y,this._edit=g,this._config=E,this._root=k,this._size=x}v.prototype.setTree=function(y,g){return this._editable?(this._root=y,this._size=g,this):y===this._root?this:new v(this._editable,this._edit,this._config,y,g)};var R=n.tryGetHash=function(y,g,E,k){for(var x=k._root,O=0,G=k._config.keyEq;;)switch(x.type){case S:return G(E,x.key)?x.value:y;case A:{if(g===x.hash)for(var K=x.children,H=0,re=K.length;H<re;++H){var Te=K[H];if(G(E,Te.key))return Te.value}return y}case W:{var ot=f(O,g),$e=p(ot);if(x.mask&$e){x=x.children[m(x.mask,$e)],O+=s;break}return y}case F:{if(x=x.children[f(O,g)],x){O+=s;break}return y}default:return y}};v.prototype.tryGetHash=function(y,g,E){return R(y,g,E,this)};var C=n.tryGet=function(y,g,E){return R(y,E._config.hash(g),g,E)};v.prototype.tryGet=function(y,g){return C(y,g,this)};var Y=n.getHash=function(y,g,E){return R(void 0,y,g,E)};v.prototype.getHash=function(y,g){return Y(y,g,this)},n.get=function(y,g){return R(void 0,g._config.hash(y),y,g)},v.prototype.get=function(y,g){return C(g,y,this)};var D=n.has=function(y,g,E){return R(c,y,g,E)!==c};v.prototype.hasHash=function(y,g){return D(y,g,this)};var X=n.has=function(y,g){return D(g._config.hash(y),y,g)};v.prototype.has=function(y){return X(y,this)};var ne=function(g,E){return g===E};n.make=function(y){return new v(0,0,{keyEq:y&&y.keyEq||ne,hash:y&&y.hash||u},q,0)},n.empty=n.make();var B=n.isEmpty=function(y){return y&&!!j(y._root)};v.prototype.isEmpty=function(){return B(this)};var me=n.modifyHash=function(y,g,E,k){var x={value:k._size},O=k._root._modify(k._editable?k._edit:NaN,k._config.keyEq,0,y,g,E,x);return k.setTree(O,x.value)};v.prototype.modifyHash=function(y,g,E){return me(E,y,g,this)};var xe=n.modify=function(y,g,E){return me(y,E._config.hash(g),g,E)};v.prototype.modify=function(y,g){return xe(g,y,this)};var ce=n.setHash=function(y,g,E,k){return me(l(E),y,g,k)};v.prototype.setHash=function(y,g,E){return ce(y,g,E,this)};var Se=n.set=function(y,g,E){return ce(E._config.hash(y),y,g,E)};v.prototype.set=function(y,g){return Se(y,g,this)};var ut=l(c),At=n.removeHash=function(y,g,E){return me(ut,y,g,E)};v.prototype.removeHash=v.prototype.deleteHash=function(y,g){return At(y,g,this)};var it=n.remove=function(y,g){return At(g._config.hash(y),y,g)};v.prototype.remove=v.prototype.delete=function(y){return it(y,this)};var nt=n.beginMutation=function(y){return new v(y._editable+1,y._edit+1,y._config,y._root,y._size)};v.prototype.beginMutation=function(){return nt(this)};var gi=n.endMutation=function(y){return y._editable=y._editable&&y._editable-1,y};v.prototype.endMutation=function(){return gi(this)};var yi=n.mutate=function(y,g){var E=nt(g);return y(E),gi(E)};v.prototype.mutate=function(y){return yi(y,this)};var fe=function(g){return g&&he(g[0],g[1],g[2],g[3],g[4])},he=function(g,E,k,x,O){for(;k<g;){var G=E[k++];if(G&&!j(G))return Nt(G,x,[g,E,k,x,O])}return fe(O)},Nt=function(g,E,k){switch(g.type){case S:return{value:E(g),rest:k};case A:case F:case W:var x=g.children;return he(x.length,x,0,E,k);default:return fe(k)}},kt={done:!0};function zt(y){this.v=y}zt.prototype.next=function(){if(!this.v)return kt;var y=this.v;return this.v=fe(y.rest),y},zt.prototype[Symbol.iterator]=function(){return this};var St=function(g,E){return new zt(Nt(g._root,E))},on=function(g){return[g.key,g.value]},kn=n.entries=function(y){return St(y,on)};v.prototype.entries=v.prototype[Symbol.iterator]=function(){return kn(this)};var vi=function(g){return g.key},ky=n.keys=function(y){return St(y,vi)};v.prototype.keys=function(){return ky(this)};var xy=function(g){return g.value},Ly=n.values=v.prototype.values=function(y){return St(y,xy)};v.prototype.values=function(){return Ly(this)};var Uu=n.fold=function(y,g,E){var k=E._root;if(k.type===S)return y(g,k.value,k.key);for(var x=[k.children],O=void 0;O=x.pop();)for(var G=0,K=O.length;G<K;){var H=O[G++];H&&H.type&&(H.type===S?g=y(g,H.value,H.key):x.push(H.children))}return g};v.prototype.fold=function(y,g){return Uu(y,g,this)};var Dy=n.forEach=function(y,g){return Uu(function(E,k,x){return y(k,x,g)},null,g)};v.prototype.forEach=function(y){return Dy(y,this)};var Oy=n.count=function(y){return y._size};v.prototype.count=function(){return Oy(this)},Object.defineProperty(v.prototype,"size",{get:v.prototype.count}),t.exports?t.exports=n:(void 0).hamt=n});class kk{constructor(e){te(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,n){return this._map.set(e,n),this}delete(e){return this._map.delete(e),this}clone(){return Iu(this)}toMap(){return new Map(this._map)}}class Eu{constructor(e){if(te(this,"_hamt",Nk.empty.beginMutation()),e instanceof Eu){const n=e._hamt.endMutation();e._hamt=n.beginMutation(),this._hamt=n.beginMutation()}else if(e)for(const[n,s]of e.entries())this._hamt.set(n,s)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,n){return this._hamt.set(e,n),this}delete(e){return this._hamt.delete(e),this}clone(){return Iu(this)}toMap(){return new Map(this._hamt)}}function Iu(t){return ye("recoil_hamt_2020")?new Eu(t):new kk(t)}var xk={persistentMap:Iu},Lk=xk.persistentMap,Dk=Object.freeze({__proto__:null,persistentMap:Lk});function Ok(t,...e){const n=new Set;e:for(const s of t){for(const r of e)if(r.has(s))continue e;n.add(s)}return n}var vr=Ok;function Mk(t,e){const n=new Map;return t.forEach((s,r)=>{n.set(r,e(s,r))}),n}var mo=Mk;function Pk(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function Uk(t){return{nodeDeps:mo(t.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:mo(t.nodeToNodeSubscriptions,e=>new Set(e))}}function Qa(t,e,n,s){const{nodeDeps:r,nodeToNodeSubscriptions:i}=n,o=r.get(t);if(o&&s&&o!==s.nodeDeps.get(t))return;r.set(t,e);const a=o==null?e:vr(e,o);for(const c of a)i.has(c)||i.set(c,new Set),Ie(i.get(c)).add(t);if(o){const c=vr(o,e);for(const l of c){if(!i.has(l))return;const u=Ie(i.get(l));u.delete(t),u.size===0&&i.delete(l)}}}function Vk(t,e,n,s){var r,i,o,a;const c=n.getState();s===c.currentTree.version||s===((r=c.nextTree)===null||r===void 0?void 0:r.version)||((i=c.previousTree)===null||i===void 0||i.version);const l=n.getGraph(s);if(Qa(t,e,l),s===((o=c.previousTree)===null||o===void 0?void 0:o.version)){const h=n.getGraph(c.currentTree.version);Qa(t,e,h,l)}if(s===((a=c.previousTree)===null||a===void 0?void 0:a.version)||s===c.currentTree.version){var u;const h=(u=c.nextTree)===null||u===void 0?void 0:u.version;if(h!==void 0){const f=n.getGraph(h);Qa(t,e,f,l)}}}var di={cloneGraph:Uk,graph:Pk,saveDepsToStore:Vk};let $k=0;const Bk=()=>$k++;let Fk=0;const jk=()=>Fk++;let qk=0;const zk=()=>qk++;var ua={getNextTreeStateVersion:Bk,getNextStoreID:jk,getNextComponentID:zk};const{persistentMap:vd}=Dk,{graph:Wk}=di,{getNextTreeStateVersion:bg}=ua;function Tg(){const t=bg();return{version:t,stateID:t,transactionMetadata:{},dirtyAtoms:new Set,atomValues:vd(),nonvalidatedAtoms:vd()}}function Kk(){const t=Tg();return{currentTree:t,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(t.version,Wk()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var Eg={makeEmptyTreeState:Tg,makeEmptyStoreState:Kk,getNextTreeStateVersion:bg};class Ig{}function Hk(){return new Ig}var ha={RetentionZone:Ig,retentionZone:Hk};function Gk(t,e){const n=new Set(t);return n.add(e),n}function Qk(t,e){const n=new Set(t);return n.delete(e),n}function Yk(t,e,n){const s=new Map(t);return s.set(e,n),s}function Xk(t,e,n){const s=new Map(t);return s.set(e,n(s.get(e))),s}function Jk(t,e){const n=new Map(t);return n.delete(e),n}function Zk(t,e){const n=new Map(t);return e.forEach(s=>n.delete(s)),n}var Rg={setByAddingToSet:Gk,setByDeletingFromSet:Qk,mapBySettingInMap:Yk,mapByUpdatingInMap:Xk,mapByDeletingFromMap:Jk,mapByDeletingMultipleFromMap:Zk};function*ex(t,e){let n=0;for(const s of t)e(s,n++)&&(yield s)}var Ru=ex;function tx(t,e){return new Proxy(t,{get:(s,r)=>(!(r in s)&&r in e&&(s[r]=e[r]()),s[r]),ownKeys:s=>Object.keys(s)})}var Cg=tx;const{getNode:fi,getNodeMaybe:nx,recoilValuesForKeys:_d}=lt,{RetentionZone:wd}=ha,{setByAddingToSet:sx}=Rg,rx=Object.freeze(new Set);class ix extends Error{}function ox(t,e,n){if(!ye("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:s}=t.getState().retention;function r(i){let o=s.get(i);o||s.set(i,o=new Set),o.add(e)}if(n instanceof wd)r(n);else if(Array.isArray(n))for(const i of n)r(i);return()=>{if(!ye("recoil_memory_managament_2020"))return;const{retention:i}=t.getState();function o(a){const c=i.nodesRetainedByZone.get(a);c==null||c.delete(e),c&&c.size===0&&i.nodesRetainedByZone.delete(a)}if(n instanceof wd)o(n);else if(Array.isArray(n))for(const a of n)o(a)}}function Cu(t,e,n,s){const r=t.getState();if(r.nodeCleanupFunctions.has(n))return;const i=fi(n),o=ox(t,n,i.retainedBy),a=i.init(t,e,s);r.nodeCleanupFunctions.set(n,()=>{a(),o()})}function ax(t,e,n){Cu(t,t.getState().currentTree,e,n)}function cx(t,e){var n;const s=t.getState();(n=s.nodeCleanupFunctions.get(e))===null||n===void 0||n(),s.nodeCleanupFunctions.delete(e)}function lx(t,e,n){return Cu(t,e,n,"get"),fi(n).get(t,e)}function Ag(t,e,n){return fi(n).peek(t,e)}function ux(t,e,n){var s;const r=nx(e);return r==null||(s=r.invalidate)===null||s===void 0||s.call(r,t),{...t,atomValues:t.atomValues.clone().delete(e),nonvalidatedAtoms:t.nonvalidatedAtoms.clone().set(e,n),dirtyAtoms:sx(t.dirtyAtoms,e)}}function hx(t,e,n,s){const r=fi(n);if(r.set==null)throw new ix(`Attempt to set read-only RecoilValue: ${n}`);const i=r.set;return Cu(t,e,n,"set"),i(t,e,s)}function dx(t,e,n){const s=t.getState(),r=t.getGraph(e.version),i=fi(n).nodeType;return Cg({type:i},{loadable:()=>Ag(t,e,n),isActive:()=>s.knownAtoms.has(n)||s.knownSelectors.has(n),isSet:()=>i==="selector"?!1:e.atomValues.has(n),isModified:()=>e.dirtyAtoms.has(n),deps:()=>{var o;return _d((o=r.nodeDeps.get(n))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:_d(Ru(Ng(t,e,new Set([n])),c=>c!==n)),components:la((o=(a=s.nodeToComponentSubscriptions.get(n))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([c])=>({name:c}))}}})}function Ng(t,e,n){const s=new Set,r=Array.from(n),i=t.getGraph(e.version);for(let a=r.pop();a;a=r.pop()){var o;s.add(a);const c=(o=i.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:rx;for(const l of c)s.has(l)||r.push(l)}return s}var An={getNodeLoadable:lx,peekNodeLoadable:Ag,setNodeValue:hx,initializeNode:ax,cleanUpNode:cx,setUnvalidatedAtomValue_DEPRECATED:ux,peekNodeInfo:dx,getDownstreamNodes:Ng};let kg=null;function fx(t){kg=t}function px(){var t;(t=kg)===null||t===void 0||t()}var xg={setInvalidateMemoizedSnapshot:fx,invalidateMemoizedSnapshot:px};const{getDownstreamNodes:mx,getNodeLoadable:Lg,setNodeValue:gx}=An,{getNextComponentID:yx}=ua,{getNode:vx,getNodeMaybe:Dg}=lt,{DefaultValue:Au}=lt,{reactMode:_x}=hi,{AbstractRecoilValue:wx,RecoilState:Sx,RecoilValueReadOnly:bx,isRecoilValue:Tx}=ks,{invalidateMemoizedSnapshot:Ex}=xg;function Ix(t,{key:e},n=t.getState().currentTree){var s,r;const i=t.getState();n.version===i.currentTree.version||n.version===((s=i.nextTree)===null||s===void 0?void 0:s.version)||(n.version,(r=i.previousTree)===null||r===void 0||r.version);const o=Lg(t,n,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function Rx(t,e){const n=t.clone();return e.forEach((s,r)=>{s.state==="hasValue"&&s.contents instanceof Au?n.delete(r):n.set(r,s)}),n}function Cx(t,e,{key:n},s){if(typeof s=="function"){const r=Lg(t,e,n);if(r.state==="loading"){const i=`Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;throw se(i)}else if(r.state==="hasError")throw r.contents;return s(r.contents)}else return s}function Ax(t,e,n){if(n.type==="set"){const{recoilValue:r,valueOrUpdater:i}=n,o=Cx(t,e,r,i),a=gx(t,e,r.key,o);for(const[c,l]of a.entries())Bc(e,c,l)}else if(n.type==="setLoadable"){const{recoilValue:{key:r},loadable:i}=n;Bc(e,r,i)}else if(n.type==="markModified"){const{recoilValue:{key:r}}=n;e.dirtyAtoms.add(r)}else if(n.type==="setUnvalidated"){var s;const{recoilValue:{key:r},unvalidatedValue:i}=n,o=Dg(r);o==null||(s=o.invalidate)===null||s===void 0||s.call(o,e),e.atomValues.delete(r),e.nonvalidatedAtoms.set(r,i),e.dirtyAtoms.add(r)}else Su(`Unknown action ${n.type}`)}function Bc(t,e,n){n.state==="hasValue"&&n.contents instanceof Au?t.atomValues.delete(e):t.atomValues.set(e,n),t.dirtyAtoms.add(e),t.nonvalidatedAtoms.delete(e)}function Og(t,e){t.replaceState(n=>{const s=Mg(n);for(const r of e)Ax(t,s,r);return Pg(t,s),Ex(),s})}function da(t,e){if(_r.length){const n=_r[_r.length-1];let s=n.get(t);s||n.set(t,s=[]),s.push(e)}else Og(t,[e])}const _r=[];function Nx(){const t=new Map;return _r.push(t),()=>{for(const[e,n]of t)Og(e,n);_r.pop()}}function Mg(t){return{...t,atomValues:t.atomValues.clone(),nonvalidatedAtoms:t.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(t.dirtyAtoms)}}function Pg(t,e){const n=mx(t,e,e.dirtyAtoms);for(const i of n){var s,r;(s=Dg(i))===null||s===void 0||(r=s.invalidate)===null||r===void 0||r.call(s,e)}}function Ug(t,e,n){da(t,{type:"set",recoilValue:e,valueOrUpdater:n})}function kx(t,e,n){if(n instanceof Au)return Ug(t,e,n);da(t,{type:"setLoadable",recoilValue:e,loadable:n})}function xx(t,e){da(t,{type:"markModified",recoilValue:e})}function Lx(t,e,n){da(t,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:n})}function Dx(t,{key:e},n,s=null){const r=yx(),i=t.getState();i.nodeToComponentSubscriptions.has(e)||i.nodeToComponentSubscriptions.set(e,new Map),Ie(i.nodeToComponentSubscriptions.get(e)).set(r,[s??"<not captured>",n]);const o=_x();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=t.getState().nextTree;a&&a.dirtyAtoms.has(e)&&n(a)}return{release:()=>{const a=t.getState(),c=a.nodeToComponentSubscriptions.get(e);c===void 0||!c.has(r)||(c.delete(r),c.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function Ox(t,e){var n;const{currentTree:s}=t.getState(),r=vx(e.key);(n=r.clearCache)===null||n===void 0||n.call(r,t,s)}var Ft={RecoilValueReadOnly:bx,AbstractRecoilValue:wx,RecoilState:Sx,getRecoilValueAsLoadable:Ix,setRecoilValue:Ug,setRecoilValueLoadable:kx,markRecoilValueModified:xx,setUnvalidatedRecoilValue:Lx,subscribeToRecoilValue:Dx,isRecoilValue:Tx,applyAtomValueWrites:Rx,batchStart:Nx,writeLoadableToTreeState:Bc,invalidateDownstreams:Pg,copyTreeState:Mg,refreshRecoilValue:Ox};function Mx(t,e,n){const s=t.entries();let r=s.next();for(;!r.done;){const i=r.value;if(e.call(n,i[1],i[0],t))return!0;r=s.next()}return!1}var Px=Mx;const{cleanUpNode:Ux}=An,{deleteNodeConfigIfPossible:Vx,getNode:Vg}=lt,{RetentionZone:$g}=ha,$x=12e4,Bg=new Set;function Fg(t,e){const n=t.getState(),s=n.currentTree;if(n.nextTree)return;const r=new Set;for(const o of e)if(o instanceof $g)for(const a of qx(n,o))r.add(a);else r.add(o);const i=Bx(t,r);for(const o of i)jx(t,s,o)}function Bx(t,e){const n=t.getState(),s=n.currentTree,r=t.getGraph(s.version),i=new Set,o=new Set;return a(e),i;function a(c){const l=new Set,u=Fx(t,s,c,i,o);for(const m of u){var h;if(Vg(m).retainedBy==="recoilRoot"){o.add(m);continue}if(((h=n.retention.referenceCounts.get(m))!==null&&h!==void 0?h:0)>0){o.add(m);continue}if(jg(m).some(T=>n.retention.referenceCounts.get(T))){o.add(m);continue}const _=r.nodeToNodeSubscriptions.get(m);if(_&&Px(_,T=>o.has(T))){o.add(m);continue}i.add(m),l.add(m)}const f=new Set;for(const m of l)for(const _ of(p=r.nodeDeps.get(m))!==null&&p!==void 0?p:Bg){var p;i.has(_)||f.add(_)}f.size&&a(f)}}function Fx(t,e,n,s,r){const i=t.getGraph(e.version),o=[],a=new Set;for(;n.size>0;)c(Ie(n.values().next().value));return o;function c(l){if(s.has(l)||r.has(l)){n.delete(l);return}if(a.has(l))return;const u=i.nodeToNodeSubscriptions.get(l);if(u)for(const h of u)c(h);a.add(l),n.delete(l),o.push(l)}}function jx(t,e,n){if(!ye("recoil_memory_managament_2020"))return;Ux(t,n);const s=t.getState();s.knownAtoms.delete(n),s.knownSelectors.delete(n),s.nodeTransactionSubscriptions.delete(n),s.retention.referenceCounts.delete(n);const r=jg(n);for(const c of r){var i;(i=s.retention.nodesRetainedByZone.get(c))===null||i===void 0||i.delete(n)}e.atomValues.delete(n),e.dirtyAtoms.delete(n),e.nonvalidatedAtoms.delete(n);const o=s.graphsByVersion.get(e.version);if(o){const c=o.nodeDeps.get(n);if(c!==void 0){o.nodeDeps.delete(n);for(const l of c){var a;(a=o.nodeToNodeSubscriptions.get(l))===null||a===void 0||a.delete(n)}}o.nodeToNodeSubscriptions.delete(n)}Vx(n)}function qx(t,e){var n;return(n=t.retention.nodesRetainedByZone.get(e))!==null&&n!==void 0?n:Bg}function jg(t){const e=Vg(t).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof $g?[e]:e}function zx(t,e){const n=t.getState();n.nextTree?n.retention.retainablesToCheckForRelease.add(e):Fg(t,new Set([e]))}function Wx(t,e,n){var s;if(!ye("recoil_memory_managament_2020"))return;const r=t.getState().retention.referenceCounts,i=((s=r.get(e))!==null&&s!==void 0?s:0)+n;i===0?qg(t,e):r.set(e,i)}function qg(t,e){if(!ye("recoil_memory_managament_2020"))return;t.getState().retention.referenceCounts.delete(e),zx(t,e)}function Kx(t){if(!ye("recoil_memory_managament_2020"))return;const e=t.getState();Fg(t,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function Hx(t){return t===void 0?"recoilRoot":t}var os={SUSPENSE_TIMEOUT_MS:$x,updateRetainCount:Wx,updateRetainCountToZero:qg,releaseScheduledRetainablesNow:Kx,retainedByOptionWithDefault:Hx};const{unstable_batchedUpdates:Gx}=Py;var Qx={unstable_batchedUpdates:Gx};const{unstable_batchedUpdates:Yx}=Qx;var Xx={unstable_batchedUpdates:Yx};const{batchStart:Jx}=Ft,{unstable_batchedUpdates:Zx}=Xx;let Nu=Zx||(t=>t());const eL=t=>{Nu=t},tL=()=>Nu,nL=t=>{Nu(()=>{let e=()=>{};try{e=Jx(),t()}finally{e()}})};var fa={getBatcher:tL,setBatcher:eL,batchUpdates:nL};function*sL(t){for(const e of t)for(const n of e)yield n}var zg=sL;const Wg=typeof Window>"u"||typeof window>"u",rL=t=>!Wg&&(t===window||t instanceof Window),iL=typeof navigator<"u"&&navigator.product==="ReactNative";var pa={isSSR:Wg,isReactNative:iL,isWindow:rL};function oL(t,e){let n;return(...s)=>{n||(n={});const r=e(...s);return Object.hasOwnProperty.call(n,r)||(n[r]=t(...s)),n[r]}}function aL(t,e){let n,s;return(...r)=>{const i=e(...r);return n===i||(n=i,s=t(...r)),s}}function cL(t,e){let n,s;return[(...o)=>{const a=e(...o);return n===a||(n=a,s=t(...o)),s},()=>{n=null}]}var lL={memoizeWithArgsHash:oL,memoizeOneWithArgsHash:aL,memoizeOneWithArgsHashAndInvalidation:cL};const{batchUpdates:Fc}=fa,{initializeNode:uL,peekNodeInfo:hL}=An,{graph:dL}=di,{getNextStoreID:fL}=ua,{DEFAULT_VALUE:pL,recoilValues:Sd,recoilValuesForKeys:bd}=lt,{AbstractRecoilValue:mL,getRecoilValueAsLoadable:gL,setRecoilValue:Td,setUnvalidatedRecoilValue:yL}=Ft,{updateRetainCount:Fi}=os,{setInvalidateMemoizedSnapshot:vL}=xg,{getNextTreeStateVersion:_L,makeEmptyStoreState:wL}=Eg,{isSSR:SL}=pa,{memoizeOneWithArgsHashAndInvalidation:bL}=lL;class ma{constructor(e,n){te(this,"_store",void 0),te(this,"_refCount",1),te(this,"getLoadable",s=>(this.checkRefCount_INTERNAL(),gL(this._store,s))),te(this,"getPromise",s=>(this.checkRefCount_INTERNAL(),this.getLoadable(s).toPromise())),te(this,"getNodes_UNSTABLE",s=>{if(this.checkRefCount_INTERNAL(),(s==null?void 0:s.isModified)===!0){if((s==null?void 0:s.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return bd(o.dirtyAtoms)}const r=this._store.getState().knownAtoms,i=this._store.getState().knownSelectors;return(s==null?void 0:s.isInitialized)==null?Sd.values():s.isInitialized===!0?bd(zg([r,i])):Ru(Sd.values(),({key:o})=>!r.has(o)&&!i.has(o))}),te(this,"getInfo_UNSTABLE",({key:s})=>(this.checkRefCount_INTERNAL(),hL(this._store,this._store.getState().currentTree,s))),te(this,"map",s=>{this.checkRefCount_INTERNAL();const r=new jc(this,Fc);return s(r),r}),te(this,"asyncMap",async s=>{this.checkRefCount_INTERNAL();const r=new jc(this,Fc);return r.retain(),await s(r),r.autoRelease_INTERNAL(),r}),this._store={storeID:fL(),parentStoreID:n,getState:()=>e,replaceState:s=>{e.currentTree=s(e.currentTree)},getGraph:s=>{const r=e.graphsByVersion;if(r.has(s))return Ie(r.get(s));const i=dL();return r.set(s,i),i},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw se("Cannot subscribe to Snapshots")}};for(const s of this._store.getState().knownAtoms)uL(this._store,s,"get"),Fi(this._store,s,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){SL||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!ye("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){ye("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function Kg(t,e,n=!1){const s=t.getState(),r=n?_L():e.version;return{currentTree:{version:n?r:e.version,stateID:n?r:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(s.knownAtoms),knownSelectors:new Set(s.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(r,t.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map(la(s.nodeCleanupFunctions.entries(),([i])=>[i,()=>{}]))}}function TL(t){const e=new ma(wL());return t!=null?e.map(t):e}const[Ed,Hg]=bL((t,e)=>{var n;const s=t.getState(),r=e==="latest"?(n=s.nextTree)!==null&&n!==void 0?n:s.currentTree:Ie(s.previousTree);return new ma(Kg(t,r),t.storeID)},(t,e)=>{var n,s;return String(e)+String(t.storeID)+String((n=t.getState().nextTree)===null||n===void 0?void 0:n.version)+String(t.getState().currentTree.version)+String((s=t.getState().previousTree)===null||s===void 0?void 0:s.version)});vL(Hg);function EL(t,e="latest"){const n=Ed(t,e);return n.isRetained()?n:(Hg(),Ed(t,e))}class jc extends ma{constructor(e,n){super(Kg(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),te(this,"_batch",void 0),te(this,"set",(s,r)=>{this.checkRefCount_INTERNAL();const i=this.getStore_INTERNAL();this._batch(()=>{Fi(i,s.key,1),Td(this.getStore_INTERNAL(),s,r)})}),te(this,"reset",s=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();this._batch(()=>{Fi(r,s.key,1),Td(this.getStore_INTERNAL(),s,pL)})}),te(this,"setUnvalidatedAtomValues_DEPRECATED",s=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();Fc(()=>{for(const[i,o]of s.entries())Fi(r,i,1),yL(r,new mL(i),o)})}),this._batch=n}}var ga={Snapshot:ma,MutableSnapshot:jc,freshSnapshot:TL,cloneSnapshot:EL},IL=ga.Snapshot,RL=ga.MutableSnapshot,CL=ga.freshSnapshot,AL=ga.cloneSnapshot,ya=Object.freeze({__proto__:null,Snapshot:IL,MutableSnapshot:RL,freshSnapshot:CL,cloneSnapshot:AL});function NL(...t){const e=new Set;for(const n of t)for(const s of n)e.add(s);return e}var kL=NL;const{useRef:xL}=we;function LL(t){const e=xL(t);return e.current===t&&typeof t=="function"&&(e.current=t()),e}var Id=LL;const{getNextTreeStateVersion:DL,makeEmptyStoreState:Gg}=Eg,{cleanUpNode:OL,getDownstreamNodes:ML,initializeNode:PL,setNodeValue:UL,setUnvalidatedAtomValue_DEPRECATED:VL}=An,{graph:$L}=di,{cloneGraph:BL}=di,{getNextStoreID:Qg}=ua,{createMutableSource:Ya,reactMode:Yg}=hi,{applyAtomValueWrites:FL}=Ft,{releaseScheduledRetainablesNow:Xg}=os,{freshSnapshot:jL}=ya,{useCallback:qL,useContext:Jg,useEffect:qc,useMemo:zL,useRef:WL,useState:KL}=we;function Xs(){throw se("This component must be used inside a <RecoilRoot> component.")}const Zg=Object.freeze({storeID:Qg(),getState:Xs,replaceState:Xs,getGraph:Xs,subscribeToTransactions:Xs,addTransactionMetadata:Xs});let zc=!1;function Rd(t){if(zc)throw se("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=t.getState();if(e.nextTree===null){ye("recoil_memory_managament_2020")&&ye("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&Xg(t);const n=e.currentTree.version,s=DL();e.nextTree={...e.currentTree,version:s,stateID:s,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(s,BL(Ie(e.graphsByVersion.get(n))))}}const ey=we.createContext({current:Zg}),va=()=>Jg(ey),ty=we.createContext(null);function HL(){return Jg(ty)}function ku(t,e,n){const s=ML(t,n,n.dirtyAtoms);for(const r of s){const i=e.nodeToComponentSubscriptions.get(r);if(i)for(const[o,[a,c]]of i)c(n)}}function ny(t){const e=t.getState(),n=e.currentTree,s=n.dirtyAtoms;if(s.size){for(const[r,i]of e.nodeTransactionSubscriptions)if(s.has(r))for(const[o,a]of i)a(t);for(const[r,i]of e.transactionSubscriptions)i(t);(!Yg().early||e.suspendedComponentResolvers.size>0)&&(ku(t,e,n),e.suspendedComponentResolvers.forEach(r=>r()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(r=>r(n)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function GL(t){const e=t.getState();e.commitDepth++;try{const{nextTree:n}=e;if(n==null)return;e.previousTree=e.currentTree,e.currentTree=n,e.nextTree=null,ny(t),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):Su("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,ye("recoil_memory_managament_2020")&&n==null&&Xg(t)}finally{e.commitDepth--}}function QL({setNotifyBatcherOfChange:t}){const e=va(),[,n]=KL([]);return t(()=>n({})),qc(()=>(t(()=>n({})),()=>{t(()=>{})}),[t]),qc(()=>{Ck.enqueueExecution("Batcher",()=>{GL(e.current)})}),null}function YL(t,e){const n=Gg();return e({set:(s,r)=>{const i=n.currentTree,o=UL(t,i,s.key,r),a=new Set(o.keys()),c=i.nonvalidatedAtoms.clone();for(const l of a)c.delete(l);n.currentTree={...i,dirtyAtoms:kL(i.dirtyAtoms,a),atomValues:FL(i.atomValues,o),nonvalidatedAtoms:c}},setUnvalidatedAtomValues:s=>{s.forEach((r,i)=>{n.currentTree=VL(n.currentTree,i,r)})}}),n}function XL(t){const e=jL(t),n=e.getStore_INTERNAL().getState();return e.retain(),n.nodeCleanupFunctions.forEach(s=>s()),n.nodeCleanupFunctions.clear(),n}let Cd=0;function JL({initializeState_DEPRECATED:t,initializeState:e,store_INTERNAL:n,children:s}){let r;const i=p=>{const m=r.current.graphsByVersion;if(m.has(p))return Ie(m.get(p));const _=$L();return m.set(p,_),_},o=(p,m)=>{if(m==null){const{transactionSubscriptions:_}=h.current.getState(),T=Cd++;return _.set(T,p),{release:()=>{_.delete(T)}}}else{const{nodeTransactionSubscriptions:_}=h.current.getState();_.has(m)||_.set(m,new Map);const T=Cd++;return Ie(_.get(m)).set(T,p),{release:()=>{const M=_.get(m);M&&(M.delete(T),M.size===0&&_.delete(m))}}}},a=p=>{Rd(h.current);for(const m of Object.keys(p))Ie(h.current.getState().nextTree).transactionMetadata[m]=p[m]},c=p=>{Rd(h.current);const m=Ie(r.current.nextTree);let _;try{zc=!0,_=p(m)}finally{zc=!1}_!==m&&(r.current.nextTree=_,Yg().early&&ku(h.current,r.current,_),Ie(l.current)())},l=WL(null),u=qL(p=>{l.current=p},[l]),h=Id(()=>n??{storeID:Qg(),getState:()=>r.current,replaceState:c,getGraph:i,subscribeToTransactions:o,addTransactionMetadata:a});n!=null&&(h.current=n),r=Id(()=>t!=null?YL(h.current,t):e!=null?XL(e):Gg());const f=zL(()=>Ya==null?void 0:Ya(r,()=>r.current.currentTree.version),[r]);return qc(()=>{const p=h.current;for(const m of new Set(p.getState().knownAtoms))PL(p,m,"get");return()=>{for(const m of p.getState().knownAtoms)OL(p,m)}},[h]),we.createElement(ey.Provider,{value:h},we.createElement(ty.Provider,{value:f},we.createElement(QL,{setNotifyBatcherOfChange:u}),s))}function ZL(t){const{override:e,...n}=t,s=va();return e===!1&&s.current!==Zg?t.children:we.createElement(JL,n)}function e1(){return va().current.storeID}var sn={RecoilRoot:ZL,useStoreRef:va,useRecoilMutableSource:HL,useRecoilStoreID:e1,notifyComponents_FOR_TESTING:ku,sendEndOfBatchNotifications_FOR_TESTING:ny};function t1(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0,s=t.length;n<s;n++)if(t[n]!==e[n])return!1;return!0}var n1=t1;const{useEffect:s1,useRef:r1}=we;function i1(t){const e=r1();return s1(()=>{e.current=t}),e.current}var sy=i1;const{useStoreRef:o1}=sn,{SUSPENSE_TIMEOUT_MS:a1}=os,{updateRetainCount:Js}=os,{RetentionZone:c1}=ha,{useEffect:l1,useRef:u1}=we,{isSSR:Ad}=pa;function h1(t){if(ye("recoil_memory_managament_2020"))return d1(t)}function d1(t){const n=(Array.isArray(t)?t:[t]).map(o=>o instanceof c1?o:o.key),s=o1();l1(()=>{if(!ye("recoil_memory_managament_2020"))return;const o=s.current;if(r.current&&!Ad)window.clearTimeout(r.current),r.current=null;else for(const a of n)Js(o,a,1);return()=>{for(const a of n)Js(o,a,-1)}},[s,...n]);const r=u1(),i=sy(n);if(!Ad&&(i===void 0||!n1(i,n))){const o=s.current;for(const a of n)Js(o,a,1);if(i)for(const a of i)Js(o,a,-1);r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{r.current=null;for(const a of n)Js(o,a,-1)},a1)}}var xu=h1;function f1(){return"<component name not available>"}var pi=f1;const{batchUpdates:p1}=fa,{DEFAULT_VALUE:ry}=lt,{currentRendererSupportsUseSyncExternalStore:m1,reactMode:Ws,useMutableSource:g1,useSyncExternalStore:y1}=hi,{useRecoilMutableSource:v1,useStoreRef:jt}=sn,{AbstractRecoilValue:Wc,getRecoilValueAsLoadable:mi,setRecoilValue:go,setUnvalidatedRecoilValue:_1,subscribeToRecoilValue:xs}=Ft,{useCallback:ct,useEffect:Ls,useMemo:iy,useRef:wr,useState:Lu}=we,{setByAddingToSet:w1}=Rg,{isSSR:S1}=pa;function Du(t,e,n){if(t.state==="hasValue")return t.contents;throw t.state==="loading"?new Promise(r=>{const i=n.current.getState().suspendedComponentResolvers;i.add(r),S1&&be(t.contents)&&t.contents.finally(()=>{i.delete(r)})}):t.state==="hasError"?t.contents:se(`Invalid value of loadable atom "${e.key}"`)}function b1(){const t=pi(),e=jt(),[,n]=Lu([]),s=wr(new Set);s.current=new Set;const r=wr(new Set),i=wr(new Map),o=ct(c=>{const l=i.current.get(c);l&&(l.release(),i.current.delete(c))},[i]),a=ct((c,l)=>{i.current.has(l)&&n([])},[]);return Ls(()=>{const c=e.current;vr(s.current,r.current).forEach(l=>{if(i.current.has(l))return;const u=xs(c,new Wc(l),f=>a(f,l),t);i.current.set(l,u),c.getState().nextTree?c.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(c.getState(),l)}):a(c.getState(),l)}),vr(r.current,s.current).forEach(l=>{o(l)}),r.current=s.current}),Ls(()=>{const c=i.current;return vr(s.current,new Set(c.keys())).forEach(l=>{const u=xs(e.current,new Wc(l),h=>a(h,l),t);c.set(l,u)}),()=>c.forEach((l,u)=>o(u))},[t,e,o,a]),iy(()=>{function c(m){return _=>{go(e.current,m,_)}}function l(m){return()=>go(e.current,m,ry)}function u(m){var _;s.current.has(m.key)||(s.current=w1(s.current,m.key));const T=e.current.getState();return mi(e.current,m,Ws().early&&(_=T.nextTree)!==null&&_!==void 0?_:T.currentTree)}function h(m){const _=u(m);return Du(_,m,e)}function f(m){return[h(m),c(m)]}function p(m){return[u(m),c(m)]}return{getRecoilValue:h,getRecoilValueLoadable:u,getRecoilState:f,getRecoilStateLoadable:p,getSetRecoilState:c,getResetRecoilState:l}},[s,e])}const T1={current:0};function E1(t){const e=jt(),n=pi(),s=ct(()=>{var a;const c=e.current,l=c.getState(),u=Ws().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return{loadable:mi(c,t,u),key:t.key}},[e,t]),r=ct(a=>{let c;return()=>{var l,u;const h=a();return(l=c)!==null&&l!==void 0&&l.loadable.is(h.loadable)&&((u=c)===null||u===void 0?void 0:u.key)===h.key?c:(c=h,h)}},[]),i=iy(()=>r(s),[s,r]),o=ct(a=>{const c=e.current;return xs(c,t,a,n).release},[e,t,n]);return y1(o,i,i).loadable}function I1(t){const e=jt(),n=ct(()=>{var l;const u=e.current,h=u.getState(),f=Ws().early&&(l=h.nextTree)!==null&&l!==void 0?l:h.currentTree;return mi(u,t,f)},[e,t]),s=ct(()=>n(),[n]),r=pi(),i=ct((l,u)=>{const h=e.current;return xs(h,t,()=>{if(!ye("recoil_suppress_rerender_in_callback"))return u();const p=n();c.current.is(p)||u(),c.current=p},r).release},[e,t,r,n]),o=v1();if(o==null)throw se("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=g1(o,s,i),c=wr(a);return Ls(()=>{c.current=a}),a}function Kc(t){const e=jt(),n=pi(),s=ct(()=>{var c;const l=e.current,u=l.getState(),h=Ws().early&&(c=u.nextTree)!==null&&c!==void 0?c:u.currentTree;return mi(l,t,h)},[e,t]),r=ct(()=>({loadable:s(),key:t.key}),[s,t.key]),i=ct(c=>{const l=r();return c.loadable.is(l.loadable)&&c.key===l.key?c:l},[r]);Ls(()=>{const c=xs(e.current,t,l=>{a(i)},n);return a(i),c.release},[n,t,e,i]);const[o,a]=Lu(r);return o.key!==t.key?r().loadable:o.loadable}function R1(t){const e=jt(),[,n]=Lu([]),s=pi(),r=ct(()=>{var a;const c=e.current,l=c.getState(),u=Ws().early&&(a=l.nextTree)!==null&&a!==void 0?a:l.currentTree;return mi(c,t,u)},[e,t]),i=r(),o=wr(i);return Ls(()=>{o.current=i}),Ls(()=>{const a=e.current,c=a.getState(),l=xs(a,t,h=>{var f;if(!ye("recoil_suppress_rerender_in_callback"))return n([]);const p=r();(f=o.current)!==null&&f!==void 0&&f.is(p)||n(p),o.current=p},s);if(c.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,n([])});else{var u;if(!ye("recoil_suppress_rerender_in_callback"))return n([]);const h=r();(u=o.current)!==null&&u!==void 0&&u.is(h)||n(h),o.current=h}return l.release},[s,r,t,e]),i}function Ou(t){return ye("recoil_memory_managament_2020")&&xu(t),{TRANSITION_SUPPORT:Kc,SYNC_EXTERNAL_STORE:m1()?E1:Kc,MUTABLE_SOURCE:I1,LEGACY:R1}[Ws().mode](t)}function oy(t){const e=jt(),n=Ou(t);return Du(n,t,e)}function _a(t){const e=jt();return ct(n=>{go(e.current,t,n)},[e,t])}function C1(t){const e=jt();return ct(()=>{go(e.current,t,ry)},[e,t])}function A1(t){return[oy(t),_a(t)]}function N1(t){return[Ou(t),_a(t)]}function k1(){const t=jt();return(e,n={})=>{p1(()=>{t.current.addTransactionMetadata(n),e.forEach((s,r)=>_1(t.current,new Wc(r),s))})}}function ay(t){return ye("recoil_memory_managament_2020")&&xu(t),Kc(t)}function cy(t){const e=jt(),n=ay(t);return Du(n,t,e)}function x1(t){return[cy(t),_a(t)]}var L1={recoilComponentGetRecoilValueCount_FOR_TESTING:T1,useRecoilInterface:b1,useRecoilState:A1,useRecoilStateLoadable:N1,useRecoilValue:oy,useRecoilValueLoadable:Ou,useResetRecoilState:C1,useSetRecoilState:_a,useSetUnvalidatedAtomValues:k1,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:ay,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:cy,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:x1};function D1(t,e){const n=new Map;for(const[s,r]of t)e(r,s)&&n.set(s,r);return n}var O1=D1;function M1(t,e){const n=new Set;for(const s of t)e(s)&&n.add(s);return n}var P1=M1;function U1(...t){const e=new Map;for(let n=0;n<t.length;n++){const s=t[n].keys();let r;for(;!(r=s.next()).done;)e.set(r.value,t[n].get(r.value))}return e}var V1=U1;const{batchUpdates:$1}=fa,{DEFAULT_VALUE:B1,getNode:ly,nodes:F1}=lt,{useStoreRef:Mu}=sn,{AbstractRecoilValue:j1,setRecoilValueLoadable:q1}=Ft,{SUSPENSE_TIMEOUT_MS:z1}=os,{cloneSnapshot:yo}=ya,{useCallback:wa,useEffect:uy,useRef:Nd,useState:W1}=we,{isSSR:kd}=pa;function Sa(t){const e=Mu();uy(()=>e.current.subscribeToTransactions(t).release,[t,e])}function xd(t){const e=t.atomValues.toMap(),n=mo(O1(e,(s,r)=>{const o=ly(r).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&s.state==="hasValue"}),s=>s.contents);return V1(t.nonvalidatedAtoms.toMap(),n)}function K1(t){Sa(wa(e=>{let n=e.getState().previousTree;const s=e.getState().currentTree;n||(n=e.getState().currentTree);const r=xd(s),i=xd(n),o=mo(F1,c=>{var l,u,h,f;return{persistence_UNSTABLE:{type:(l=(u=c.persistence_UNSTABLE)===null||u===void 0?void 0:u.type)!==null&&l!==void 0?l:"none",backButton:(h=(f=c.persistence_UNSTABLE)===null||f===void 0?void 0:f.backButton)!==null&&h!==void 0?h:!1}}}),a=P1(s.dirtyAtoms,c=>r.has(c)||i.has(c));t({atomValues:r,previousAtomValues:i,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...s.transactionMetadata}})},[t]))}function H1(t){Sa(wa(e=>{const n=yo(e,"latest"),s=yo(e,"previous");t({snapshot:n,previousSnapshot:s})},[t]))}function G1(){const t=Mu(),[e,n]=W1(()=>yo(t.current)),s=sy(e),r=Nd(),i=Nd();if(Sa(wa(a=>n(yo(a)),[])),uy(()=>{const a=e.retain();if(r.current&&!kd){var c;window.clearTimeout(r.current),r.current=null,(c=i.current)===null||c===void 0||c.call(i),i.current=null}return()=>{window.setTimeout(a,10)}},[e]),s!==e&&!kd){if(r.current){var o;window.clearTimeout(r.current),r.current=null,(o=i.current)===null||o===void 0||o.call(i),i.current=null}i.current=e.retain(),r.current=window.setTimeout(()=>{var a;r.current=null,(a=i.current)===null||a===void 0||a.call(i),i.current=null},z1)}return e}function hy(t,e){var n;const s=t.getState(),r=(n=s.nextTree)!==null&&n!==void 0?n:s.currentTree,i=e.getStore_INTERNAL().getState().currentTree;$1(()=>{const o=new Set;for(const l of[r.atomValues.keys(),i.atomValues.keys()])for(const u of l){var a,c;((a=r.atomValues.get(u))===null||a===void 0?void 0:a.contents)!==((c=i.atomValues.get(u))===null||c===void 0?void 0:c.contents)&&ly(u).shouldRestoreFromSnapshots&&o.add(u)}o.forEach(l=>{q1(t,new j1(l),i.atomValues.has(l)?Ie(i.atomValues.get(l)):B1)}),t.replaceState(l=>({...l,stateID:e.getID()}))})}function Q1(){const t=Mu();return wa(e=>hy(t.current,e),[t])}var dy={useRecoilSnapshot:G1,gotoSnapshot:hy,useGotoRecoilSnapshot:Q1,useRecoilTransactionObserver:H1,useTransactionObservation_DEPRECATED:K1,useTransactionSubscription_DEPRECATED:Sa};const{peekNodeInfo:Y1}=An,{useStoreRef:X1}=sn;function J1(){const t=X1();return({key:e})=>Y1(t.current,t.current.getState().currentTree,e)}var Z1=J1;const{reactMode:eD}=hi,{RecoilRoot:tD,useStoreRef:nD}=sn,{useMemo:sD}=we;function rD(){eD().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const t=nD().current;return sD(()=>{function e({children:n}){return we.createElement(tD,{store_INTERNAL:t},n)}return e},[t])}var iD=rD;const{loadableWithValue:oD}=ui,{initializeNode:aD}=An,{DEFAULT_VALUE:cD,getNode:lD}=lt,{copyTreeState:uD,getRecoilValueAsLoadable:hD,invalidateDownstreams:dD,writeLoadableToTreeState:fD}=Ft;function Ld(t){return lD(t.key).nodeType==="atom"}class pD{constructor(e,n){te(this,"_store",void 0),te(this,"_treeState",void 0),te(this,"_changes",void 0),te(this,"get",s=>{if(this._changes.has(s.key))return this._changes.get(s.key);if(!Ld(s))throw se("Reading selectors within atomicUpdate is not supported");const r=hD(this._store,s,this._treeState);if(r.state==="hasValue")return r.contents;throw r.state==="hasError"?r.contents:se(`Expected Recoil atom ${s.key} to have a value, but it is in a loading state.`)}),te(this,"set",(s,r)=>{if(!Ld(s))throw se("Setting selectors within atomicUpdate is not supported");if(typeof r=="function"){const i=this.get(s);this._changes.set(s.key,r(i))}else aD(this._store,s.key,"set"),this._changes.set(s.key,r)}),te(this,"reset",s=>{this.set(s,cD)}),this._store=e,this._treeState=n,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=uD(this._treeState);for(const[n,s]of this._changes)fD(e,n,oD(s));return dD(this._store,e),e}}function mD(t){return e=>{t.replaceState(n=>{const s=new pD(t,n);return e(s),s.newTreeState_INTERNAL()})}}var gD={atomicUpdater:mD},yD=gD.atomicUpdater,fy=Object.freeze({__proto__:null,atomicUpdater:yD});function vD(t,e){if(!t)throw new Error(e)}var _D=vD,cr=_D;const{atomicUpdater:wD}=fy,{batchUpdates:SD}=fa,{DEFAULT_VALUE:bD}=lt,{useStoreRef:TD}=sn,{refreshRecoilValue:ED,setRecoilValue:Dd}=Ft,{cloneSnapshot:ID}=ya,{gotoSnapshot:RD}=dy,{useCallback:CD}=we;class py{}const AD=new py;function my(t,e,n,s){let r=AD,i;if(SD(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw se(a);const c=Cg({...s??{},set:(u,h)=>Dd(t,u,h),reset:u=>Dd(t,u,bD),refresh:u=>ED(t,u),gotoSnapshot:u=>RD(t,u),transact_UNSTABLE:u=>wD(t)(u)},{snapshot:()=>{const u=ID(t);return i=u.retain(),u}}),l=e(c);if(typeof l!="function")throw se(a);r=l(...n)}),r instanceof py&&cr(!1),be(r))r=r.finally(()=>{var a;(a=i)===null||a===void 0||a()});else{var o;(o=i)===null||o===void 0||o()}return r}function ND(t,e){const n=TD();return CD((...s)=>my(n.current,t,s),e!=null?[...e,n]:void 0)}var gy={recoilCallback:my,useRecoilCallback:ND};const{useStoreRef:kD}=sn,{refreshRecoilValue:xD}=Ft,{useCallback:LD}=we;function DD(t){const e=kD();return LD(()=>{const n=e.current;xD(n,t)},[t,e])}var OD=DD;const{atomicUpdater:MD}=fy,{useStoreRef:PD}=sn,{useMemo:UD}=we;function VD(t,e){const n=PD();return UD(()=>(...s)=>{MD(n.current)(i=>{t(i)(...s)})},e!=null?[...e,n]:void 0)}var $D=VD;class BD{constructor(e){te(this,"value",void 0),this.value=e}}var FD={WrappedValue:BD},jD=FD.WrappedValue,yy=Object.freeze({__proto__:null,WrappedValue:jD});const{isFastRefreshEnabled:qD}=hi;class Od extends Error{}class zD{constructor(e){var n,s,r;te(this,"_name",void 0),te(this,"_numLeafs",void 0),te(this,"_root",void 0),te(this,"_onHit",void 0),te(this,"_onSet",void 0),te(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(n=e==null?void 0:e.onHit)!==null&&n!==void 0?n:()=>{},this._onSet=(s=e==null?void 0:e.onSet)!==null&&s!==void 0?s:()=>{},this._mapNodeValue=(r=e==null?void 0:e.mapNodeValue)!==null&&r!==void 0?r:i=>i}size(){return this._numLeafs}root(){return this._root}get(e,n){var s;return(s=this.getLeafNode(e,n))===null||s===void 0?void 0:s.value}getLeafNode(e,n){if(this._root==null)return;let s=this._root;for(;s;){if(n==null||n.onNodeVisit(s),s.type==="leaf")return this._onHit(s),s;const r=this._mapNodeValue(e(s.nodeKey));s=s.branches.get(r)}}set(e,n,s){const r=()=>{var i,o,a,c;let l,u;for(const[T,M]of e){var h,f,p;const S=this._root;if((S==null?void 0:S.type)==="leaf")throw this.invalidCacheError();const A=l;if(l=A?A.branches.get(u):S,l=(h=l)!==null&&h!==void 0?h:{type:"branch",nodeKey:T,parent:A,branches:new Map,branchKey:u},l.type!=="branch"||l.nodeKey!==T)throw this.invalidCacheError();A==null||A.branches.set(u,l),s==null||(f=s.onNodeVisit)===null||f===void 0||f.call(s,l),u=this._mapNodeValue(M),this._root=(p=this._root)!==null&&p!==void 0?p:l}const m=l?(i=l)===null||i===void 0?void 0:i.branches.get(u):this._root;if(m!=null&&(m.type!=="leaf"||m.branchKey!==u))throw this.invalidCacheError();const _={type:"leaf",value:n,parent:l,branchKey:u};(o=l)===null||o===void 0||o.branches.set(u,_),this._root=(a=this._root)!==null&&a!==void 0?a:_,this._numLeafs++,this._onSet(_),s==null||(c=s.onNodeVisit)===null||c===void 0||c.call(s,_)};try{r()}catch(i){if(i instanceof Od)this.clear(),r();else throw i}}delete(e){const n=this.root();if(!n)return!1;if(e===n)return this._root=null,this._numLeafs=0,!0;let s=e.parent,r=e.branchKey;for(;s;){var i;if(s.branches.delete(r),s===n)return s.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(s.branches.size>0)break;r=(i=s)===null||i===void 0?void 0:i.branchKey,s=s.parent}for(;s!==n;s=s.parent)if(s==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=qD()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw Su(e+(this._name!=null?` - ${this._name}`:"")),new Od}}var WD={TreeCache:zD},KD=WD.TreeCache,vy=Object.freeze({__proto__:null,TreeCache:KD});class HD{constructor(e){var n;te(this,"_maxSize",void 0),te(this,"_size",void 0),te(this,"_head",void 0),te(this,"_tail",void 0),te(this,"_map",void 0),te(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(n=e.mapKey)!==null&&n!==void 0?n:s=>s}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const n=this._keyMapper(e),s=this._map.get(n);if(s)return this.set(e,s.value),s.value}set(e,n){const s=this._keyMapper(e);this._map.get(s)&&this.delete(e);const i=this.head(),o={key:e,right:i,left:null,value:n};i?i.left=o:this._tail=o,this._map.set(s,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const n=this._keyMapper(e);if(!this._size||!this._map.has(n))return;const s=Ie(this._map.get(n)),r=s.right,i=s.left;r&&(r.left=s.left),i&&(i.right=s.right),s===this.head()&&(this._head=r),s===this.tail()&&(this._tail=i),this._map.delete(n),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var GD={LRUCache:HD},QD=GD.LRUCache,_y=Object.freeze({__proto__:null,LRUCache:QD});const{LRUCache:YD}=_y,{TreeCache:XD}=vy;function JD({name:t,maxSize:e,mapNodeValue:n=s=>s}){const s=new YD({maxSize:e}),r=new XD({name:t,mapNodeValue:n,onHit:i=>{s.set(i,!0)},onSet:i=>{const o=s.tail();s.set(i,!0),o&&r.size()>e&&r.delete(o.key)}});return r}var Md=JD;function Tt(t,e,n){if(typeof t=="string"&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw se("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}if(t===null)return"null";if(typeof t!="object"){var s;return(s=JSON.stringify(t))!==null&&s!==void 0?s:""}if(be(t))return"__PROMISE__";if(Array.isArray(t))return`[${t.map((r,i)=>Tt(r,e,i.toString()))}]`;if(typeof t.toJSON=="function")return Tt(t.toJSON(n),e,n);if(t instanceof Map){const r={};for(const[i,o]of t)r[typeof i=="string"?i:Tt(i,e)]=o;return Tt(r,e,n)}return t instanceof Set?Tt(Array.from(t).sort((r,i)=>Tt(r,e).localeCompare(Tt(i,e))),e,n):Symbol!==void 0&&t[Symbol.iterator]!=null&&typeof t[Symbol.iterator]=="function"?Tt(Array.from(t),e,n):`{${Object.keys(t).filter(r=>t[r]!==void 0).sort().map(r=>`${Tt(r,e)}:${Tt(t[r],e,r)}`).join(",")}}`}function ZD(t,e={allowFunctions:!1}){return Tt(t,e)}var ba=ZD;const{TreeCache:eO}=vy,Ai={equality:"reference",eviction:"keep-all",maxSize:1/0};function tO({equality:t=Ai.equality,eviction:e=Ai.eviction,maxSize:n=Ai.maxSize}=Ai,s){const r=nO(t);return sO(e,n,r,s)}function nO(t){switch(t){case"reference":return e=>e;case"value":return e=>ba(e)}throw se(`Unrecognized equality policy ${t}`)}function sO(t,e,n,s){switch(t){case"keep-all":return new eO({name:s,mapNodeValue:n});case"lru":return Md({name:s,maxSize:Ie(e),mapNodeValue:n});case"most-recent":return Md({name:s,maxSize:1,mapNodeValue:n})}throw se(`Unrecognized eviction policy ${t}`)}var rO=tO;function iO(t){return()=>null}var oO={startPerfBlock:iO};const{isLoadable:aO,loadableWithError:Ni,loadableWithPromise:cO,loadableWithValue:Xa}=ui,{WrappedValue:wy}=yy,{getNodeLoadable:ki,peekNodeLoadable:lO,setNodeValue:uO}=An,{saveDepsToStore:hO}=di,{DEFAULT_VALUE:dO,getConfigDeletionHandler:fO,getNode:pO,registerNode:Pd}=lt,{isRecoilValue:mO}=ks,{markRecoilValueModified:Ud}=Ft,{retainedByOptionWithDefault:gO}=os,{recoilCallback:yO}=gy,{startPerfBlock:vO}=oO;class Sy{}const Zs=new Sy,er=[],xi=new Map,_O=(()=>{let t=0;return()=>t++})();function by(t){let e=null;const{key:n,get:s,cachePolicy_UNSTABLE:r}=t,i=t.set!=null?t.set:void 0,o=new Set,a=rO(r??{equality:"reference",eviction:"keep-all"},n),c=gO(t.retainedBy_UNSTABLE),l=new Map;let u=0;function h(){return!ye("recoil_memory_managament_2020")||u>0}function f(v){return v.getState().knownSelectors.add(n),u++,()=>{u--}}function p(){return fO(n)!==void 0&&!h()}function m(v,R,C,Y,D){_t(R,Y,D),_(v,C)}function _(v,R){Ae(v,R)&&Ce(v),M(R,!0)}function T(v,R){Ae(v,R)&&(Ie(L(v)).stateVersions.clear(),M(R,!1))}function M(v,R){const C=xi.get(v);if(C!=null){for(const Y of C)Ud(Y,Ie(e));R&&xi.delete(v)}}function S(v,R){let C=xi.get(R);C==null&&xi.set(R,C=new Set),C.add(v)}function A(v,R,C,Y,D,X){return R.then(ne=>{if(!h())throw Ce(v),Zs;const B=Xa(ne);return m(v,C,D,B,Y),ne}).catch(ne=>{if(!h())throw Ce(v),Zs;if(be(ne))return W(v,ne,C,Y,D,X);const B=Ni(ne);throw m(v,C,D,B,Y),ne})}function W(v,R,C,Y,D,X){return R.then(ne=>{if(!h())throw Ce(v),Zs;X.loadingDepKey!=null&&X.loadingDepPromise===R?C.atomValues.set(X.loadingDepKey,Xa(ne)):v.getState().knownSelectors.forEach(ce=>{C.atomValues.delete(ce)});const B=j(v,C);if(B&&B.state!=="loading"){if((Ae(v,D)||L(v)==null)&&_(v,D),B.state==="hasValue")return B.contents;throw B.contents}if(!Ae(v,D)){const ce=U(v,C);if(ce!=null)return ce.loadingLoadable.contents}const[me,xe]=q(v,C,D);if(me.state!=="loading"&&m(v,C,D,me,xe),me.state==="hasError")throw me.contents;return me.contents}).catch(ne=>{if(ne instanceof Sy)throw Zs;if(!h())throw Ce(v),Zs;const B=Ni(ne);throw m(v,C,D,B,Y),ne})}function F(v,R,C,Y){var D,X,ne,B;if(Ae(v,Y)||R.version===((D=v.getState())===null||D===void 0||(X=D.currentTree)===null||X===void 0?void 0:X.version)||R.version===((ne=v.getState())===null||ne===void 0||(B=ne.nextTree)===null||B===void 0?void 0:B.version)){var me,xe,ce;hO(n,C,v,(me=(xe=v.getState())===null||xe===void 0||(ce=xe.nextTree)===null||ce===void 0?void 0:ce.version)!==null&&me!==void 0?me:v.getState().currentTree.version)}for(const Se of C)o.add(Se)}function q(v,R,C){const Y=vO(n);let D=!0,X=!0;const ne=()=>{Y(),X=!1};let B,me=!1,xe;const ce={loadingDepKey:null,loadingDepPromise:null},Se=new Map;function ut({key:it}){const nt=ki(v,R,it);switch(Se.set(it,nt),D||(F(v,R,new Set(Se.keys()),C),T(v,C)),nt.state){case"hasValue":return nt.contents;case"hasError":throw nt.contents;case"loading":throw ce.loadingDepKey=it,ce.loadingDepPromise=nt.contents,nt.contents}throw se("Invalid Loadable state")}const At=it=>(...nt)=>{if(X)throw se("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&cr(!1),yO(v,it,nt,{node:e})};try{B=s({get:ut,getCallback:At}),B=mO(B)?ut(B):B,aO(B)&&(B.state==="hasError"&&(me=!0),B=B.contents),be(B)?B=A(v,B,R,Se,C,ce).finally(ne):ne(),B=B instanceof wy?B.value:B}catch(it){B=it,be(B)?B=W(v,B,R,Se,C,ce).finally(ne):(me=!0,ne())}return me?xe=Ni(B):be(B)?xe=cO(B):xe=Xa(B),D=!1,yt(v,C,Se),F(v,R,new Set(Se.keys()),C),[xe,Se]}function j(v,R){let C=R.atomValues.get(n);if(C!=null)return C;const Y=new Set;try{C=a.get(X=>(typeof X!="string"&&cr(!1),ki(v,R,X).contents),{onNodeVisit:X=>{X.type==="branch"&&X.nodeKey!==n&&Y.add(X.nodeKey)}})}catch(X){throw se(`Problem with cache lookup for selector "${n}": ${X.message}`)}if(C){var D;R.atomValues.set(n,C),F(v,R,Y,(D=L(v))===null||D===void 0?void 0:D.executionID)}return C}function ie(v,R){const C=j(v,R);if(C!=null)return Ce(v),C;const Y=U(v,R);if(Y!=null){var D;return((D=Y.loadingLoadable)===null||D===void 0?void 0:D.state)==="loading"&&S(v,Y.executionID),Y.loadingLoadable}const X=_O(),[ne,B]=q(v,R,X);return ne.state==="loading"?(Re(v,X,ne,B,R),S(v,X)):(Ce(v),_t(R,ne,B)),ne}function U(v,R){const C=zg([l.has(v)?[Ie(l.get(v))]:[],la(Ru(l,([D])=>D!==v),([,D])=>D)]);function Y(D){for(const[X,ne]of D)if(!ki(v,R,X).is(ne))return!0;return!1}for(const D of C){if(D.stateVersions.get(R.version)||!Y(D.depValuesDiscoveredSoFarDuringAsyncWork))return D.stateVersions.set(R.version,!0),D;D.stateVersions.set(R.version,!1)}}function L(v){return l.get(v)}function Re(v,R,C,Y,D){l.set(v,{depValuesDiscoveredSoFarDuringAsyncWork:Y,executionID:R,loadingLoadable:C,stateVersions:new Map([[D.version,!0]])})}function yt(v,R,C){if(Ae(v,R)){const Y=L(v);Y!=null&&(Y.depValuesDiscoveredSoFarDuringAsyncWork=C)}}function Ce(v){l.delete(v)}function Ae(v,R){var C;return R===((C=L(v))===null||C===void 0?void 0:C.executionID)}function vt(v){return Array.from(v.entries()).map(([R,C])=>[R,C.contents])}function _t(v,R,C){v.atomValues.set(n,R);try{a.set(vt(C),R)}catch(Y){throw se(`Problem with setting cache for selector "${n}": ${Y.message}`)}}function wt(v){if(er.includes(n)){const R=`Recoil selector has circular dependencies: ${er.slice(er.indexOf(n)).join(" → ")}`;return Ni(se(R))}er.push(n);try{return v()}finally{er.pop()}}function rn(v,R){const C=R.atomValues.get(n);return C??a.get(Y=>{var D;return typeof Y!="string"&&cr(!1),(D=lO(v,R,Y))===null||D===void 0?void 0:D.contents})}function qt(v,R){return wt(()=>ie(v,R))}function ae(v){v.atomValues.delete(n)}function ue(v,R){e==null&&cr(!1);for(const Y of o){var C;const D=pO(Y);(C=D.clearCache)===null||C===void 0||C.call(D,v,R)}o.clear(),ae(R),a.clear(),Ud(v,e)}return i!=null?e=Pd({key:n,nodeType:"selector",peek:rn,get:qt,set:(R,C,Y)=>{let D=!1;const X=new Map;function ne({key:ce}){if(D)throw se("Recoil: Async selector sets are not currently supported.");const Se=ki(R,C,ce);if(Se.state==="hasValue")return Se.contents;if(Se.state==="loading"){const ut=`Getting value of asynchronous atom or selector "${ce}" in a pending state while setting selector "${n}" is not yet supported.`;throw se(ut)}else throw Se.contents}function B(ce,Se){if(D)throw se("Recoil: Async selector sets are not currently supported.");const ut=typeof Se=="function"?Se(ne(ce)):Se;uO(R,C,ce.key,ut).forEach((it,nt)=>X.set(nt,it))}function me(ce){B(ce,dO)}const xe=i({set:B,get:ne,reset:me},Y);if(xe!==void 0)throw be(xe)?se("Recoil: Async selector sets are not currently supported."):se("Recoil: selector set should be a void function.");return D=!0,X},init:f,invalidate:ae,clearCache:ue,shouldDeleteConfigOnRelease:p,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c}):e=Pd({key:n,nodeType:"selector",peek:rn,get:qt,init:f,invalidate:ae,clearCache:ue,shouldDeleteConfigOnRelease:p,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:c})}by.value=t=>new wy(t);var Ds=by;const{isLoadable:wO,loadableWithError:Ja,loadableWithPromise:Za,loadableWithValue:ls}=ui,{WrappedValue:Ty}=yy,{peekNodeInfo:SO}=An,{DEFAULT_VALUE:Mn,DefaultValue:ln,getConfigDeletionHandler:Ey,registerNode:bO,setConfigDeletionHandler:TO}=lt,{isRecoilValue:EO}=ks,{getRecoilValueAsLoadable:IO,markRecoilValueModified:RO,setRecoilValue:Vd,setRecoilValueLoadable:CO}=Ft,{retainedByOptionWithDefault:AO}=os,tr=t=>t instanceof Ty?t.value:t;function NO(t){const{key:e,persistence_UNSTABLE:n}=t,s=AO(t.retainedBy_UNSTABLE);let r=0;function i(S){return Za(S.then(A=>(o=ls(A),A)).catch(A=>{throw o=Ja(A),A}))}let o=be(t.default)?i(t.default):wO(t.default)?t.default.state==="loading"?i(t.default.contents):t.default:ls(tr(t.default));o.contents;let a;const c=new Map;function l(S){return S}function u(S,A){const W=A.then(F=>{var q,j;return((j=((q=S.getState().nextTree)!==null&&q!==void 0?q:S.getState().currentTree).atomValues.get(e))===null||j===void 0?void 0:j.contents)===W&&Vd(S,M,F),F}).catch(F=>{var q,j;throw((j=((q=S.getState().nextTree)!==null&&q!==void 0?q:S.getState().currentTree).atomValues.get(e))===null||j===void 0?void 0:j.contents)===W&&CO(S,M,Ja(F)),F});return W}function h(S,A,W){var F;r++;const q=()=>{var L;r--,(L=c.get(S))===null||L===void 0||L.forEach(Re=>Re()),c.delete(S)};if(S.getState().knownAtoms.add(e),o.state==="loading"){const L=()=>{var Re;((Re=S.getState().nextTree)!==null&&Re!==void 0?Re:S.getState().currentTree).atomValues.has(e)||RO(S,M)};o.contents.finally(L)}const j=(F=t.effects)!==null&&F!==void 0?F:t.effects_UNSTABLE;if(j!=null){let Ae=function(ae){if(Re&&ae.key===e){const ue=L;return ue instanceof ln?f(S,A):be(ue)?Za(ue.then(v=>v instanceof ln?o.toPromise():v)):ls(ue)}return IO(S,ae)},vt=function(ae){return Ae(ae).toPromise()},_t=function(ae){var ue;const v=SO(S,(ue=S.getState().nextTree)!==null&&ue!==void 0?ue:S.getState().currentTree,ae.key);return Re&&ae.key===e&&!(L instanceof ln)?{...v,isSet:!0,loadable:Ae(ae)}:v},L=Mn,Re=!0,yt=!1,Ce=null;const wt=ae=>ue=>{if(Re){const v=Ae(M),R=v.state==="hasValue"?v.contents:Mn;L=typeof ue=="function"?ue(R):ue,be(L)&&(L=L.then(C=>(Ce={effect:ae,value:C},C)))}else{if(be(ue))throw se("Setting atoms to async values is not implemented.");typeof ue!="function"&&(Ce={effect:ae,value:tr(ue)}),Vd(S,M,typeof ue=="function"?v=>{const R=tr(ue(v));return Ce={effect:ae,value:R},R}:tr(ue))}},rn=ae=>()=>wt(ae)(Mn),qt=ae=>ue=>{var v;const{release:R}=S.subscribeToTransactions(C=>{var Y;let{currentTree:D,previousTree:X}=C.getState();X||(X=D);const ne=(Y=D.atomValues.get(e))!==null&&Y!==void 0?Y:o;if(ne.state==="hasValue"){var B,me,xe,ce;const Se=ne.contents,ut=(B=X.atomValues.get(e))!==null&&B!==void 0?B:o,At=ut.state==="hasValue"?ut.contents:Mn;((me=Ce)===null||me===void 0?void 0:me.effect)!==ae||((xe=Ce)===null||xe===void 0?void 0:xe.value)!==Se?ue(Se,At,!D.atomValues.has(e)):((ce=Ce)===null||ce===void 0?void 0:ce.effect)===ae&&(Ce=null)}},e);c.set(S,[...(v=c.get(S))!==null&&v!==void 0?v:[],R])};for(const ae of j)try{const ue=ae({node:M,storeID:S.storeID,parentStoreID_UNSTABLE:S.parentStoreID,trigger:W,setSelf:wt(ae),resetSelf:rn(ae),onSet:qt(ae),getPromise:vt,getLoadable:Ae,getInfo_UNSTABLE:_t});if(ue!=null){var ie;c.set(S,[...(ie=c.get(S))!==null&&ie!==void 0?ie:[],ue])}}catch(ue){L=ue,yt=!0}if(Re=!1,!(L instanceof ln)){var U;const ae=yt?Ja(L):be(L)?Za(u(S,L)):ls(tr(L));ae.contents,A.atomValues.set(e,ae),(U=S.getState().nextTree)===null||U===void 0||U.atomValues.set(e,ae)}}return q}function f(S,A){var W,F;return(W=(F=A.atomValues.get(e))!==null&&F!==void 0?F:a)!==null&&W!==void 0?W:o}function p(S,A){if(A.atomValues.has(e))return Ie(A.atomValues.get(e));if(A.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(n==null)return o;const W=A.nonvalidatedAtoms.get(e),F=n.validator(W,Mn);return a=F instanceof ln?o:ls(F),a}else return o}function m(){a=void 0}function _(S,A,W){if(A.atomValues.has(e)){const F=Ie(A.atomValues.get(e));if(F.state==="hasValue"&&W===F.contents)return new Map}else if(!A.nonvalidatedAtoms.has(e)&&W instanceof ln)return new Map;return a=void 0,new Map().set(e,ls(W))}function T(){return Ey(e)!==void 0&&r<=0}const M=bO({key:e,nodeType:"atom",peek:f,get:p,set:_,init:h,invalidate:m,shouldDeleteConfigOnRelease:T,dangerouslyAllowMutability:t.dangerouslyAllowMutability,persistence_UNSTABLE:t.persistence_UNSTABLE?{type:t.persistence_UNSTABLE.type,backButton:t.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:s});return M}function Pu(t){const{...e}=t,n="default"in t?t.default:new Promise(()=>{});return EO(n)?kO({...e,default:n}):NO({...e,default:n})}function kO(t){const e=Pu({...t,default:Mn,persistence_UNSTABLE:t.persistence_UNSTABLE===void 0?void 0:{...t.persistence_UNSTABLE,validator:s=>s instanceof ln?s:Ie(t.persistence_UNSTABLE).validator(s,Mn)},effects:t.effects,effects_UNSTABLE:t.effects_UNSTABLE}),n=Ds({key:`${t.key}__withFallback`,get:({get:s})=>{const r=s(e);return r instanceof ln?t.default:r},set:({set:s},r)=>s(e,r),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:t.dangerouslyAllowMutability});return TO(n.key,Ey(t.key)),n}Pu.value=t=>new Ty(t);var Iy=Pu;class xO{constructor(e){var n;te(this,"_map",void 0),te(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(n=e==null?void 0:e.mapKey)!==null&&n!==void 0?n:s=>s}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,n){this._map.set(this._keyMapper(e),n)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var LO={MapCache:xO},DO=LO.MapCache,OO=Object.freeze({__proto__:null,MapCache:DO});const{LRUCache:$d}=_y,{MapCache:MO}=OO,Li={equality:"reference",eviction:"none",maxSize:1/0};function PO({equality:t=Li.equality,eviction:e=Li.eviction,maxSize:n=Li.maxSize}=Li){const s=UO(t);return VO(e,n,s)}function UO(t){switch(t){case"reference":return e=>e;case"value":return e=>ba(e)}throw se(`Unrecognized equality policy ${t}`)}function VO(t,e,n){switch(t){case"keep-all":return new MO({mapKey:n});case"lru":return new $d({mapKey:n,maxSize:Ie(e)});case"most-recent":return new $d({mapKey:n,maxSize:1})}throw se(`Unrecognized eviction policy ${t}`)}var Ry=PO;const{setConfigDeletionHandler:$O}=lt;function BO(t){var e,n;const s=Ry({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var i,o;const a=s.get(r);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:c,...l}=t,u="default"in t?t.default:new Promise(()=>{}),h=Iy({...l,key:`${t.key}__${(i=ba(r))!==null&&i!==void 0?i:"void"}`,default:typeof u=="function"?u(r):u,retainedBy_UNSTABLE:typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE,effects:typeof t.effects=="function"?t.effects(r):typeof t.effects_UNSTABLE=="function"?t.effects_UNSTABLE(r):(o=t.effects)!==null&&o!==void 0?o:t.effects_UNSTABLE});return s.set(r,h),$O(h.key,()=>{s.delete(r)}),h}}var FO=BO;const{setConfigDeletionHandler:jO}=lt;let qO=0;function zO(t){var e,n;const s=Ry({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var i;let o;try{o=s.get(r)}catch(f){throw se(`Problem with cache lookup for selector ${t.key}: ${f.message}`)}if(o!=null)return o;const a=`${t.key}__selectorFamily/${(i=ba(r,{allowFunctions:!0}))!==null&&i!==void 0?i:"void"}/${qO++}`,c=f=>t.get(r)(f),l=t.cachePolicy_UNSTABLE,u=typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE;let h;if(t.set!=null){const f=t.set;h=Ds({key:a,get:c,set:(m,_)=>f(r)(m,_),cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u})}else h=Ds({key:a,get:c,cachePolicy_UNSTABLE:l,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u});return s.set(r,h),jO(h.key,()=>{s.delete(r)}),h}}var Nn=zO;const WO=Nn({key:"__constant",get:t=>()=>t,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function KO(t){return WO(t)}var HO=KO;const GO=Nn({key:"__error",get:t=>()=>{throw se(t)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function QO(t){return GO(t)}var YO=QO;function XO(t){return t}var JO=XO;const{loadableWithError:Cy,loadableWithPromise:Ay,loadableWithValue:Ny}=ui;function Ta(t,e){const n=Array(e.length).fill(void 0),s=Array(e.length).fill(void 0);for(const[r,i]of e.entries())try{n[r]=t(i)}catch(o){s[r]=o}return[n,s]}function ZO(t){return t!=null&&!be(t)}function Ea(t){return Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(e=>t[e])}function Hc(t,e){return Array.isArray(t)?e:Object.getOwnPropertyNames(t).reduce((n,s,r)=>({...n,[s]:e[r]}),{})}function gs(t,e,n){const s=n.map((r,i)=>r==null?Ny(e[i]):be(r)?Ay(r):Cy(r));return Hc(t,s)}function eM(t,e){return e.map((n,s)=>n===void 0?t[s]:n)}const tM=Nn({key:"__waitForNone",get:t=>({get:e})=>{const n=Ea(t),[s,r]=Ta(e,n);return gs(t,s,r)},dangerouslyAllowMutability:!0}),nM=Nn({key:"__waitForAny",get:t=>({get:e})=>{const n=Ea(t),[s,r]=Ta(e,n);return r.some(i=>!be(i))?gs(t,s,r):new Promise(i=>{for(const[o,a]of r.entries())be(a)&&a.then(c=>{s[o]=c,r[o]=void 0,i(gs(t,s,r))}).catch(c=>{r[o]=c,i(gs(t,s,r))})})},dangerouslyAllowMutability:!0}),sM=Nn({key:"__waitForAll",get:t=>({get:e})=>{const n=Ea(t),[s,r]=Ta(e,n);if(r.every(o=>o==null))return Hc(t,s);const i=r.find(ZO);if(i!=null)throw i;return Promise.all(r).then(o=>Hc(t,eM(s,o)))},dangerouslyAllowMutability:!0}),rM=Nn({key:"__waitForAllSettled",get:t=>({get:e})=>{const n=Ea(t),[s,r]=Ta(e,n);return r.every(i=>!be(i))?gs(t,s,r):Promise.all(r.map((i,o)=>be(i)?i.then(a=>{s[o]=a,r[o]=void 0}).catch(a=>{s[o]=void 0,r[o]=a}):null)).then(()=>gs(t,s,r))},dangerouslyAllowMutability:!0}),iM=Nn({key:"__noWait",get:t=>({get:e})=>{try{return Ds.value(Ny(e(t)))}catch(n){return Ds.value(be(n)?Ay(n):Cy(n))}},dangerouslyAllowMutability:!0});var oM={waitForNone:tM,waitForAny:nM,waitForAll:sM,waitForAllSettled:rM,noWait:iM};const{RecoilLoadable:aM}=ui,{DefaultValue:cM}=lt,{RecoilRoot:lM,useRecoilStoreID:uM}=sn,{isRecoilValue:hM}=ks,{retentionZone:dM}=ha,{freshSnapshot:fM}=ya,{useRecoilState:pM,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:mM,useRecoilStateLoadable:gM,useRecoilValue:yM,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:vM,useRecoilValueLoadable:_M,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:wM,useResetRecoilState:SM,useSetRecoilState:bM}=L1,{useGotoRecoilSnapshot:TM,useRecoilSnapshot:EM,useRecoilTransactionObserver:IM}=dy,{useRecoilCallback:RM}=gy,{noWait:CM,waitForAll:AM,waitForAllSettled:NM,waitForAny:kM,waitForNone:xM}=oM;var LM={DefaultValue:cM,isRecoilValue:hM,RecoilLoadable:aM,RecoilEnv:zs,RecoilRoot:lM,useRecoilStoreID:uM,useRecoilBridgeAcrossReactRoots_UNSTABLE:iD,atom:Iy,selector:Ds,atomFamily:FO,selectorFamily:Nn,constSelector:HO,errorSelector:YO,readOnlySelector:JO,noWait:CM,waitForNone:xM,waitForAny:kM,waitForAll:AM,waitForAllSettled:NM,useRecoilValue:yM,useRecoilValueLoadable:_M,useRecoilState:pM,useRecoilStateLoadable:gM,useSetRecoilState:bM,useResetRecoilState:SM,useGetRecoilValueInfo_UNSTABLE:Z1,useRecoilRefresher_UNSTABLE:OD,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:wM,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:vM,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:mM,useRecoilCallback:RM,useRecoilTransaction_UNSTABLE:$D,useGotoRecoilSnapshot:TM,useRecoilSnapshot:EM,useRecoilTransactionObserver_UNSTABLE:IM,snapshot_UNSTABLE:fM,useRetain:xu,retentionZone:dM},DM=LM.RecoilRoot;function OM(){return d.jsx(DM,{children:d.jsx("div",{className:"App",children:d.jsx($v,{children:d.jsxs(Vv,{children:[d.jsx(cn,{path:"/",element:d.jsx(yR,{})}),d.jsx(cn,{path:"/signin",element:d.jsx(PC,{})}),d.jsx(cn,{path:"/signup",element:d.jsx(bC,{})}),d.jsx(cn,{path:"/make-tree",element:d.jsx(YR,{})}),d.jsx(cn,{path:"/share-tree/:uid",element:d.jsx(cN,{})}),d.jsx(cn,{path:"/message-custom/:uid",element:d.jsx(wN,{})}),d.jsx(cn,{path:"/write-message/:uid/:flowerName",element:d.jsx(FN,{})})]})})})})}tc.createRoot(document.getElementById("root")).render(d.jsx(we.StrictMode,{children:d.jsx(OM,{})}));
