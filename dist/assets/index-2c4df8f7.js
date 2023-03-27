import{r as g,a as Rf,R as $i,b as Lf}from"./react-9adfdfcb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var d={},Of={get exports(){return d},set exports(t){d=t}},Cr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf=g,Mf=Symbol.for("react.element"),Uf=Symbol.for("react.fragment"),jf=Object.prototype.hasOwnProperty,Ff=Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bf={key:!0,ref:!0,__self:!0,__source:!0};function Ul(t,e,n){var s,r={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)jf.call(e,s)&&!Bf.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:Mf,type:t,key:i,ref:o,props:r,_owner:Ff.current}}Cr.Fragment=Uf;Cr.jsx=Ul;Cr.jsxs=Ul;(function(t){t.exports=Cr})(Of);var qi={},rc=Rf;qi.createRoot=rc.createRoot,qi.hydrateRoot=rc.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $n(){return $n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},$n.apply(this,arguments)}var at;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(at||(at={}));const ic="popstate";function Vf(t){t===void 0&&(t={});function e(s,r){let{pathname:i,search:o,hash:a}=s.location;return Wi("",{pathname:i,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(s,r){return typeof r=="string"?r:er(r)}return qf(e,n,null,t)}function Q(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $f(){return Math.random().toString(36).substr(2,8)}function oc(t,e){return{usr:t.state,key:t.key,idx:e}}function Wi(t,e,n,s){return n===void 0&&(n=null),$n({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?pn(e):e,{state:n,key:e&&e.key||s||$f()})}function er(t){let{pathname:e="/",search:n="",hash:s=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function pn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substr(s),t=t.substr(0,s)),t&&(e.pathname=t)}return e}function qf(t,e,n,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,o=r.history,a=at.Pop,c=null,l=u();l==null&&(l=0,o.replaceState($n({},o.state,{idx:l}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=at.Pop;let I=u(),D=I==null?null:I-l;l=I,c&&c({action:a,location:v.location,delta:D})}function f(I,D){a=at.Push;let A=Wi(v.location,I,D);n&&n(A,I),l=u()+1;let W=oc(A,l),U=v.createHref(A);try{o.pushState(W,"",U)}catch{r.location.assign(U)}i&&c&&c({action:a,location:v.location,delta:1})}function m(I,D){a=at.Replace;let A=Wi(v.location,I,D);n&&n(A,I),l=u();let W=oc(A,l),U=v.createHref(A);o.replaceState(W,"",U),i&&c&&c({action:a,location:v.location,delta:0})}function y(I){let D=r.location.origin!=="null"?r.location.origin:r.location.href,A=typeof I=="string"?I:er(I);return Q(D,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,D)}let v={get action(){return a},get location(){return t(r,o)},listen(I){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(ic,h),c=I,()=>{r.removeEventListener(ic,h),c=null}},createHref(I){return e(r,I)},createURL:y,encodeLocation(I){let D=y(I);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:f,replace:m,go(I){return o.go(I)}};return v}var ac;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ac||(ac={}));function Wf(t,e,n){n===void 0&&(n="/");let s=typeof e=="string"?pn(e):e,r=xo(s.pathname||"/",n);if(r==null)return null;let i=jl(t);Kf(i);let o=null;for(let a=0;o==null&&a<i.length;++a)o=eg(i[a],sg(r));return o}function jl(t,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let r=(i,o,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Q(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let l=lt([s,c.relativePath]),u=n.concat(c);i.children&&i.children.length>0&&(Q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),jl(i.children,e,u,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:Jf(l,i.index),routesMeta:u})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))r(i,o);else for(let c of Fl(i.path))r(i,o,c)}),e}function Fl(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let o=Fl(s.join("/")),a=[];return a.push(...o.map(c=>c===""?i:[i,c].join("/"))),r&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Kf(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Zf(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const Hf=/^:\w+$/,zf=3,Gf=2,Qf=1,Yf=10,Xf=-2,cc=t=>t==="*";function Jf(t,e){let n=t.split("/"),s=n.length;return n.some(cc)&&(s+=Xf),e&&(s+=Gf),n.filter(r=>!cc(r)).reduce((r,i)=>r+(Hf.test(i)?zf:i===""?Qf:Yf),s)}function Zf(t,e){return t.length===e.length&&t.slice(0,-1).every((s,r)=>s===e[r])?t[t.length-1]-e[e.length-1]:0}function eg(t,e){let{routesMeta:n}=t,s={},r="/",i=[];for(let o=0;o<n.length;++o){let a=n[o],c=o===n.length-1,l=r==="/"?e:e.slice(r.length)||"/",u=tg({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},l);if(!u)return null;Object.assign(s,u.params);let h=a.route;i.push({params:s,pathname:lt([r,u.pathname]),pathnameBase:ag(lt([r,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(r=lt([r,u.pathnameBase]))}return i}function tg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=ng(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:s.reduce((l,u,h)=>{if(u==="*"){let f=a[h]||"";o=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}return l[u]=rg(a[h]||"",u),l},{}),pathname:i,pathnameBase:o,pattern:t}}function ng(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ao(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let s=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(s.push(a),"/([^\\/]+)"));return t.endsWith("*")?(s.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),s]}function sg(t){try{return decodeURI(t)}catch(e){return Ao(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rg(t,e){try{return decodeURIComponent(t)}catch(n){return Ao(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function xo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}function Ao(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ig(t,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:r=""}=typeof t=="string"?pn(t):t;return{pathname:n?n.startsWith("/")?n:og(n,e):e,search:cg(s),hash:lg(r)}}function og(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function _i(t,e,n,s){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bl(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vl(t,e,n,s){s===void 0&&(s=!1);let r;typeof t=="string"?r=pn(t):(r=$n({},t),Q(!r.pathname||!r.pathname.includes("?"),_i("?","pathname","search",r)),Q(!r.pathname||!r.pathname.includes("#"),_i("#","pathname","hash",r)),Q(!r.search||!r.search.includes("#"),_i("#","search","hash",r)));let i=t===""||r.pathname==="",o=i?"/":r.pathname,a;if(s||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}a=h>=0?e[h]:"/"}let c=ig(r,a),l=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const lt=t=>t.join("/").replace(/\/\/+/g,"/"),ag=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ug(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hg=["post","put","patch","delete"];[...hg];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ki.apply(this,arguments)}function dg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const fg=typeof Object.is=="function"?Object.is:dg,{useState:gg,useEffect:mg,useLayoutEffect:pg,useDebugValue:yg}=$i;function vg(t,e,n){const s=e(),[{inst:r},i]=gg({inst:{value:s,getSnapshot:e}});return pg(()=>{r.value=s,r.getSnapshot=e,Ii(r)&&i({inst:r})},[t,s,e]),mg(()=>(Ii(r)&&i({inst:r}),t(()=>{Ii(r)&&i({inst:r})})),[t]),yg(s),s}function Ii(t){const e=t.getSnapshot,n=t.value;try{const s=e();return!fg(n,s)}catch{return!0}}function wg(t,e,n){return e()}const _g=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ig=!_g,Tg=Ig?wg:vg;"useSyncExternalStore"in $i&&(t=>t.useSyncExternalStore)($i);const $l=g.createContext(null),ql=g.createContext(null),rs=g.createContext(null),kr=g.createContext(null),Wt=g.createContext({outlet:null,matches:[]}),Wl=g.createContext(null);function bg(t,e){let{relative:n}=e===void 0?{}:e;is()||Q(!1);let{basename:s,navigator:r}=g.useContext(rs),{hash:i,pathname:o,search:a}=Kl(t,{relative:n}),c=o;return s!=="/"&&(c=o==="/"?s:lt([s,o])),r.createHref({pathname:c,search:a,hash:i})}function is(){return g.useContext(kr)!=null}function os(){return is()||Q(!1),g.useContext(kr).location}function Be(){is()||Q(!1);let{basename:t,navigator:e}=g.useContext(rs),{matches:n}=g.useContext(Wt),{pathname:s}=os(),r=JSON.stringify(Bl(n).map(a=>a.pathnameBase)),i=g.useRef(!1);return g.useEffect(()=>{i.current=!0}),g.useCallback(function(a,c){if(c===void 0&&(c={}),!i.current)return;if(typeof a=="number"){e.go(a);return}let l=Vl(a,JSON.parse(r),s,c.relative==="path");t!=="/"&&(l.pathname=l.pathname==="/"?t:lt([t,l.pathname])),(c.replace?e.replace:e.push)(l,c.state,c)},[t,e,r,s])}function Nr(){let{matches:t}=g.useContext(Wt),e=t[t.length-1];return e?e.params:{}}function Kl(t,e){let{relative:n}=e===void 0?{}:e,{matches:s}=g.useContext(Wt),{pathname:r}=os(),i=JSON.stringify(Bl(s).map(o=>o.pathnameBase));return g.useMemo(()=>Vl(t,JSON.parse(i),r,n==="path"),[t,i,r,n])}function Eg(t,e){is()||Q(!1);let{navigator:n}=g.useContext(rs),s=g.useContext(ql),{matches:r}=g.useContext(Wt),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let c=os(),l;if(e){var u;let v=typeof e=="string"?pn(e):e;a==="/"||(u=v.pathname)!=null&&u.startsWith(a)||Q(!1),l=v}else l=c;let h=l.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",m=Wf(t,{pathname:f}),y=Ng(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:lt([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:lt([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),r,s||void 0);return e&&y?g.createElement(kr.Provider,{value:{location:Ki({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:at.Pop}},y):y}function Sg(){let t=Rg(),e=ug(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},e),n?g.createElement("pre",{style:r},n):null,i)}class Cg extends g.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?g.createElement(Wt.Provider,{value:this.props.routeContext},g.createElement(Wl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kg(t){let{routeContext:e,match:n,children:s}=t,r=g.useContext($l);return r&&r.static&&r.staticContext&&n.route.errorElement&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(Wt.Provider,{value:e},s)}function Ng(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let s=t,r=n==null?void 0:n.errors;if(r!=null){let i=s.findIndex(o=>o.route.id&&(r==null?void 0:r[o.route.id]));i>=0||Q(!1),s=s.slice(0,Math.min(s.length,i+1))}return s.reduceRight((i,o,a)=>{let c=o.route.id?r==null?void 0:r[o.route.id]:null,l=n?o.route.errorElement||g.createElement(Sg,null):null,u=e.concat(s.slice(0,a+1)),h=()=>g.createElement(kg,{match:o,routeContext:{outlet:i,matches:u}},c?l:o.route.element!==void 0?o.route.element:i);return n&&(o.route.errorElement||a===0)?g.createElement(Cg,{location:n.location,component:l,error:c,children:h(),routeContext:{outlet:null,matches:u}}):h()},null)}var lc;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(lc||(lc={}));var tr;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(tr||(tr={}));function xg(t){let e=g.useContext(ql);return e||Q(!1),e}function Ag(t){let e=g.useContext(Wt);return e||Q(!1),e}function Dg(t){let e=Ag(),n=e.matches[e.matches.length-1];return n.route.id||Q(!1),n.route.id}function Rg(){var t;let e=g.useContext(Wl),n=xg(tr.UseRouteError),s=Dg(tr.UseRouteError);return e||((t=n.errors)==null?void 0:t[s])}function nt(t){Q(!1)}function Lg(t){let{basename:e="/",children:n=null,location:s,navigationType:r=at.Pop,navigator:i,static:o=!1}=t;is()&&Q(!1);let a=e.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:a,navigator:i,static:o}),[a,i,o]);typeof s=="string"&&(s=pn(s));let{pathname:l="/",search:u="",hash:h="",state:f=null,key:m="default"}=s,y=g.useMemo(()=>{let v=xo(l,a);return v==null?null:{pathname:v,search:u,hash:h,state:f,key:m}},[a,l,u,h,f,m]);return y==null?null:g.createElement(rs.Provider,{value:c},g.createElement(kr.Provider,{children:n,value:{location:y,navigationType:r}}))}function Og(t){let{children:e,location:n}=t,s=g.useContext($l),r=s&&!e?s.router.routes:Hi(e);return Eg(r,n)}var uc;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(uc||(uc={}));new Promise(()=>{});function Hi(t,e){e===void 0&&(e=[]);let n=[];return g.Children.forEach(t,(s,r)=>{if(!g.isValidElement(s))return;if(s.type===g.Fragment){n.push.apply(n,Hi(s.props.children,e));return}s.type!==nt&&Q(!1),!s.props.index||!s.props.children||Q(!1);let i=[...e,r],o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,hasErrorBoundary:s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle};s.props.children&&(o.children=Hi(s.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},zi.apply(this,arguments)}function Pg(t,e){if(t==null)return{};var n={},s=Object.keys(t),r,i;for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Mg(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ug(t,e){return t.button===0&&(!e||e==="_self")&&!Mg(t)}const jg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Fg(t){let{basename:e,children:n,window:s}=t,r=g.useRef();r.current==null&&(r.current=Vf({window:s,v5Compat:!0}));let i=r.current,[o,a]=g.useState({action:i.action,location:i.location});return g.useLayoutEffect(()=>i.listen(a),[i]),g.createElement(Lg,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:i})}const Bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hl=g.forwardRef(function(e,n){let{onClick:s,relative:r,reloadDocument:i,replace:o,state:a,target:c,to:l,preventScrollReset:u}=e,h=Pg(e,jg),{basename:f}=g.useContext(rs),m,y=!1;if(typeof l=="string"&&Vg.test(l)&&(m=l,Bg)){let A=new URL(window.location.href),W=l.startsWith("//")?new URL(A.protocol+l):new URL(l),U=xo(W.pathname,f);W.origin===A.origin&&U!=null?l=U+W.search+W.hash:y=!0}let v=bg(l,{relative:r}),I=$g(l,{replace:o,state:a,target:c,preventScrollReset:u,relative:r});function D(A){s&&s(A),A.defaultPrevented||I(A)}return g.createElement("a",zi({},h,{href:m||v,onClick:y||i?s:D,ref:n,target:c}))});var hc;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(hc||(hc={}));var dc;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(dc||(dc={}));function $g(t,e){let{target:n,replace:s,state:r,preventScrollReset:i,relative:o}=e===void 0?{}:e,a=Be(),c=os(),l=Kl(t,{relative:o});return g.useCallback(u=>{if(Ug(u,n)){u.preventDefault();let h=s!==void 0?s:er(c)===er(l);a(t,{replace:h,state:r,preventScrollReset:i,relative:o})}},[c,a,l,s,r,n,t,i,o])}const qg="_homeContainer_10kyh_7",Wg="_homeLogo_10kyh_29",Kg="_homeMainTitle_10kyh_39",Hg="_moonLogo_10kyh_44",zg="_homeTitleInfo_10kyh_49",Gg="_homeTitle_10kyh_49",Qg="_homeTitleBorder_10kyh_77",Yg="_homeTitleShadow_10kyh_89",Xg="_homeSubTitle_10kyh_101",Jg="_tree_10kyh_120",Zg="_blossomTree_10kyh_125",em="_loginButtonList_10kyh_131",tm="_loginButton_10kyh_131",nm="_generalButton_10kyh_151",sm="_googleButton_10kyh_165",ae={homeContainer:qg,homeLogo:Wg,homeMainTitle:Kg,moonLogo:Hg,homeTitleInfo:zg,homeTitle:Gg,homeTitleBorder:Qg,homeTitleShadow:Yg,homeSubTitle:Xg,tree:Jg,blossomTree:Zg,loginButtonList:em,loginButton:tm,generalButton:nm,googleButton:sm};var Gi={},rm={get exports(){return Gi},set exports(t){Gi=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if(o==="string"||o==="number")s.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&s.push(a)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){s.push(i.toString());continue}for(var c in i)e.call(i,c)&&i[c]&&s.push(c)}}}return s.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(rm);const Ie=Gi,im="/assets/cherry-blossom3-f676abbb.png";/**
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
 */const zl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},om=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(n[u],n[h],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):om(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new am;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class am extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cm=function(t){const e=zl(t);return Gl.encodeByteArray(e,!0)},nr=function(t){return cm(t).replace(/\./g,"")},Ql=function(t){try{return Gl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const um=()=>lm().__FIREBASE_DEFAULTS__,hm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ql(t[1]);return e&&JSON.parse(e)},Do=()=>{try{return um()||hm()||dm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yl=t=>{var e,n;return(n=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fm=t=>{const e=Yl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},gm=()=>{var t;return(t=Do())===null||t===void 0?void 0:t.config},Xl=t=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function pm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[nr(JSON.stringify(n)),nr(JSON.stringify(o)),a].join(".")}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ym(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function vm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _m(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Im(){try{return typeof indexedDB=="object"}catch{return!1}}function Tm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const bm="FirebaseError";class Je extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=bm,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Em(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Je(r,a,s)}}function Em(t,e){return t.replace(Sm,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Sm=/\{\$([^}]+)}/g;function Cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(fc(i)&&fc(o)){if(!sr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function fc(t){return t!==null&&typeof t=="object"}/**
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
 */function cs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function An(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function km(t,e){const n=new Nm(t,e);return n.subscribe.bind(n)}class Nm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");xm(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ti),r.error===void 0&&(r.error=Ti),r.complete===void 0&&(r.complete=Ti);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ti(){}/**
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
 */function $(t){return t&&t._delegate?t._delegate:t}class jt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nt="[DEFAULT]";/**
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
 */class Am{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rm(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Dm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dm(t){return t===Nt?void 0:t}function Rm(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Am(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(O||(O={}));const Om={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Pm=O.INFO,Mm={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Um=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Mm[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ro{constructor(e){this.name=e,this._logLevel=Pm,this._logHandler=Um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Om[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const jm=(t,e)=>e.some(n=>t instanceof n);let gc,mc;function Fm(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bm(){return mc||(mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jl=new WeakMap,Qi=new WeakMap,Zl=new WeakMap,bi=new WeakMap,Lo=new WeakMap;function Vm(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ut(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jl.set(n,t)}).catch(()=>{}),Lo.set(e,t),e}function $m(t){if(Qi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Qi.set(t,e)}let Yi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qm(t){Yi=t(Yi)}function Wm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ei(this),e,...n);return Zl.set(s,e.sort?e.sort():[e]),ut(s)}:Bm().includes(t)?function(...e){return t.apply(Ei(this),e),ut(Jl.get(this))}:function(...e){return ut(t.apply(Ei(this),e))}}function Km(t){return typeof t=="function"?Wm(t):(t instanceof IDBTransaction&&$m(t),jm(t,Fm())?new Proxy(t,Yi):t)}function ut(t){if(t instanceof IDBRequest)return Vm(t);if(bi.has(t))return bi.get(t);const e=Km(t);return e!==t&&(bi.set(t,e),Lo.set(e,t)),e}const Ei=t=>Lo.get(t);function Hm(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ut(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ut(o.result),c.oldVersion,c.newVersion,ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const zm=["get","getKey","getAll","getAllKeys","count"],Gm=["put","add","delete","clear"],Si=new Map;function pc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Si.get(e))return Si.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Gm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||zm.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Si.set(e,i),i}qm(t=>({...t,get:(e,n,s)=>pc(e,n)||t.get(e,n,s),has:(e,n)=>!!pc(e,n)||t.has(e,n)}));/**
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
 */class Qm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ym(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ym(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xi="@firebase/app",yc="0.9.4";/**
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
 */const Ft=new Ro("@firebase/app"),Xm="@firebase/app-compat",Jm="@firebase/analytics-compat",Zm="@firebase/analytics",ep="@firebase/app-check-compat",tp="@firebase/app-check",np="@firebase/auth",sp="@firebase/auth-compat",rp="@firebase/database",ip="@firebase/database-compat",op="@firebase/functions",ap="@firebase/functions-compat",cp="@firebase/installations",lp="@firebase/installations-compat",up="@firebase/messaging",hp="@firebase/messaging-compat",dp="@firebase/performance",fp="@firebase/performance-compat",gp="@firebase/remote-config",mp="@firebase/remote-config-compat",pp="@firebase/storage",yp="@firebase/storage-compat",vp="@firebase/firestore",wp="@firebase/firestore-compat",_p="firebase",Ip="9.17.2";/**
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
 */const Ji="[DEFAULT]",Tp={[Xi]:"fire-core",[Xm]:"fire-core-compat",[Zm]:"fire-analytics",[Jm]:"fire-analytics-compat",[tp]:"fire-app-check",[ep]:"fire-app-check-compat",[np]:"fire-auth",[sp]:"fire-auth-compat",[rp]:"fire-rtdb",[ip]:"fire-rtdb-compat",[op]:"fire-fn",[ap]:"fire-fn-compat",[cp]:"fire-iid",[lp]:"fire-iid-compat",[up]:"fire-fcm",[hp]:"fire-fcm-compat",[dp]:"fire-perf",[fp]:"fire-perf-compat",[gp]:"fire-rc",[mp]:"fire-rc-compat",[pp]:"fire-gcs",[yp]:"fire-gcs-compat",[vp]:"fire-fst",[wp]:"fire-fst-compat","fire-js":"fire-js",[_p]:"fire-js-all"};/**
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
 */const rr=new Map,Zi=new Map;function bp(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(Zi.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,t);for(const n of rr.values())bp(n,t);return!0}function Oo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ep={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ht=new as("app","Firebase",Ep);/**
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
 */class Sp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=Ip;function eu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ji,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ht.create("bad-app-name",{appName:String(r)});if(n||(n=gm()),!n)throw ht.create("no-options");const i=rr.get(r);if(i){if(sr(n,i.options)&&sr(s,i.config))return i;throw ht.create("duplicate-app",{appName:r})}const o=new Lm(r);for(const c of Zi.values())o.addComponent(c);const a=new Sp(n,s,o);return rr.set(r,a),a}function tu(t=Ji){const e=rr.get(t);if(!e&&t===Ji)return eu();if(!e)throw ht.create("no-app",{appName:t});return e}function dt(t,e,n){var s;let r=(s=Tp[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}sn(new jt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Cp="firebase-heartbeat-database",kp=1,qn="firebase-heartbeat-store";let Ci=null;function nu(){return Ci||(Ci=Hm(Cp,kp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw ht.create("idb-open",{originalErrorMessage:t.message})})),Ci}async function Np(t){try{return(await nu()).transaction(qn).objectStore(qn).get(su(t))}catch(e){if(e instanceof Je)Ft.warn(e.message);else{const n=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function vc(t,e){try{const s=(await nu()).transaction(qn,"readwrite");return await s.objectStore(qn).put(e,su(t)),s.done}catch(n){if(n instanceof Je)Ft.warn(n.message);else{const s=ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(s.message)}}}function su(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xp=1024,Ap=30*24*60*60*1e3;class Dp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Ap}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wc(),{heartbeatsToSend:n,unsentEntries:s}=Rp(this._heartbeatsCache.heartbeats),r=nr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function wc(){return new Date().toISOString().substring(0,10)}function Rp(t,e=xp){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),_c(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_c(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Im()?Tm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Np(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _c(t){return nr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Op(t){sn(new jt("platform-logger",e=>new Qm(e),"PRIVATE")),sn(new jt("heartbeat",e=>new Dp(e),"PRIVATE")),dt(Xi,yc,t),dt(Xi,yc,"esm2017"),dt("fire-js","")}Op("");var Pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Po=Po||{},k=Pp||self;function ir(){}function xr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function us(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Mp(t){return Object.prototype.hasOwnProperty.call(t,ki)&&t[ki]||(t[ki]=++Up)}var ki="closure_uid_"+(1e9*Math.random()>>>0),Up=0;function jp(t,e,n){return t.call.apply(t.bind,arguments)}function Fp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function de(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?de=jp:de=Fp,de.apply(null,arguments)}function Ms(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ie(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function wt(){this.s=this.s,this.o=this.o}var Bp=0;wt.prototype.s=!1;wt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Bp!=0)&&Mp(this)};wt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ru=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Mo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ic(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(xr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Vp=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{k.addEventListener("test",ir,e),k.removeEventListener("test",ir,e)}catch{}return t}();function or(t){return/^[\s\xa0]*$/.test(t)}var Tc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ni(t,e){return t<e?-1:t>e?1:0}function Ar(){var t=k.navigator;return t&&(t=t.userAgent)?t:""}function Re(t){return Ar().indexOf(t)!=-1}function Uo(t){return Uo[" "](t),t}Uo[" "]=ir;function $p(t){var e=Kp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var qp=Re("Opera"),rn=Re("Trident")||Re("MSIE"),iu=Re("Edge"),eo=iu||rn,ou=Re("Gecko")&&!(Ar().toLowerCase().indexOf("webkit")!=-1&&!Re("Edge"))&&!(Re("Trident")||Re("MSIE"))&&!Re("Edge"),Wp=Ar().toLowerCase().indexOf("webkit")!=-1&&!Re("Edge");function au(){var t=k.document;return t?t.documentMode:void 0}var ar;e:{var xi="",Ai=function(){var t=Ar();if(ou)return/rv:([^\);]+)(\)|;)/.exec(t);if(iu)return/Edge\/([\d\.]+)/.exec(t);if(rn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Wp)return/WebKit\/(\S+)/.exec(t);if(qp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ai&&(xi=Ai?Ai[1]:""),rn){var Di=au();if(Di!=null&&Di>parseFloat(xi)){ar=String(Di);break e}}ar=xi}var Kp={};function Hp(){return $p(function(){let t=0;const e=Tc(String(ar)).split("."),n=Tc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ni(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ni(r[2].length==0,i[2].length==0)||Ni(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var to;if(k.document&&rn){var bc=au();to=bc||parseInt(ar,10)||void 0}else to=void 0;var zp=to;function Wn(t,e){if(fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ou){e:{try{Uo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Gp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wn.X.h.call(this)}}ie(Wn,fe);var Gp={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hs="closure_listenable_"+(1e6*Math.random()|0),Qp=0;function Yp(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Qp,this.ba=this.ea=!1}function Dr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function cu(t){const e={};for(const n in t)e[n]=t[n];return e}const Ec="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lu(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ec.length;i++)n=Ec[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Rr(t){this.src=t,this.g={},this.h=0}Rr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=so(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Yp(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function no(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ru(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Dr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function so(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Fo="closure_lm_"+(1e6*Math.random()|0),Ri={};function uu(t,e,n,s,r){if(s&&s.once)return du(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)uu(t,e[i],n,s,r);return null}return n=$o(n),t&&t[hs]?t.N(e,n,us(s)?!!s.capture:!!s,r):hu(t,e,n,!1,s,r)}function hu(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=us(r)?!!r.capture:!!r,a=Vo(t);if(a||(t[Fo]=a=new Rr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Xp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Vp||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(gu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Xp(){function t(n){return e.call(t.src,t.listener,n)}const e=Jp;return t}function du(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)du(t,e[i],n,s,r);return null}return n=$o(n),t&&t[hs]?t.O(e,n,us(s)?!!s.capture:!!s,r):hu(t,e,n,!0,s,r)}function fu(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)fu(t,e[i],n,s,r);else s=us(s)?!!s.capture:!!s,n=$o(n),t&&t[hs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=so(i,n,s,r),-1<n&&(Dr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=so(e,n,s,r)),(n=-1<t?e[t]:null)&&Bo(n))}function Bo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[hs])no(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(gu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Vo(e))?(no(n,t),n.h==0&&(n.src=null,e[Fo]=null)):Dr(t)}}}function gu(t){return t in Ri?Ri[t]:Ri[t]="on"+t}function Jp(t,e){if(t.ba)t=!0;else{e=new Wn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Bo(t),t=n.call(s,e)}return t}function Vo(t){return t=t[Fo],t instanceof Rr?t:null}var Li="__closure_events_fn_"+(1e9*Math.random()>>>0);function $o(t){return typeof t=="function"?t:(t[Li]||(t[Li]=function(e){return t.handleEvent(e)}),t[Li])}function te(){wt.call(this),this.i=new Rr(this),this.P=this,this.I=null}ie(te,wt);te.prototype[hs]=!0;te.prototype.removeEventListener=function(t,e,n,s){fu(this,t,e,n,s)};function re(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new fe(e,t);else if(e instanceof fe)e.target=e.target||t;else{var r=e;e=new fe(s,t),lu(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Us(o,s,!0,e)&&r}if(o=e.g=t,r=Us(o,s,!0,e)&&r,r=Us(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Us(o,s,!1,e)&&r}te.prototype.M=function(){if(te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Dr(n[s]);delete t.g[e],t.h--}}this.I=null};te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Us(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&no(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var qo=k.JSON.stringify;function Zp(){var t=yu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ey{constructor(){this.h=this.g=null}add(e,n){const s=mu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var mu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ty,t=>t.reset());class ty{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ny(t){k.setTimeout(()=>{throw t},0)}function pu(t,e){ro||sy(),io||(ro(),io=!0),yu.add(t,e)}var ro;function sy(){var t=k.Promise.resolve(void 0);ro=function(){t.then(ry)}}var io=!1,yu=new ey;function ry(){for(var t;t=Zp();){try{t.h.call(t.g)}catch(n){ny(n)}var e=mu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}io=!1}function Lr(t,e){te.call(this),this.h=t||1,this.g=e||k,this.j=de(this.lb,this),this.l=Date.now()}ie(Lr,te);T=Lr.prototype;T.ca=!1;T.R=null;T.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),re(this,"tick"),this.ca&&(Wo(this),this.start()))}};T.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}T.M=function(){Lr.X.M.call(this),Wo(this),delete this.g};function Ko(t,e,n){if(typeof t=="function")n&&(t=de(t,n));else if(t&&typeof t.handleEvent=="function")t=de(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(t,e||0)}function vu(t){t.g=Ko(()=>{t.g=null,t.i&&(t.i=!1,vu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class iy extends wt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vu(this)}M(){super.M(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(t){wt.call(this),this.h=t,this.g={}}ie(Kn,wt);var Sc=[];function wu(t,e,n,s){Array.isArray(n)||(n&&(Sc[0]=n.toString()),n=Sc);for(var r=0;r<n.length;r++){var i=uu(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function _u(t){jo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bo(e)},t),t.g={}}Kn.prototype.M=function(){Kn.X.M.call(this),_u(this)};Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Or(){this.g=!0}Or.prototype.Aa=function(){this.g=!1};function oy(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function ay(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Jt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ly(t,n)+(s?" "+s:"")})}function cy(t,e){t.info(function(){return"TIMEOUT: "+e})}Or.prototype.info=function(){};function ly(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return qo(n)}catch{return e}}var Kt={},Cc=null;function Pr(){return Cc=Cc||new te}Kt.Pa="serverreachability";function Iu(t){fe.call(this,Kt.Pa,t)}ie(Iu,fe);function Hn(t){const e=Pr();re(e,new Iu(e))}Kt.STAT_EVENT="statevent";function Tu(t,e){fe.call(this,Kt.STAT_EVENT,t),this.stat=e}ie(Tu,fe);function we(t){const e=Pr();re(e,new Tu(e,t))}Kt.Qa="timingevent";function bu(t,e){fe.call(this,Kt.Qa,t),this.size=e}ie(bu,fe);function ds(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){t()},e)}var Mr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Eu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ho(){}Ho.prototype.h=null;function kc(t){return t.h||(t.h=t.i())}function Su(){}var fs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function zo(){fe.call(this,"d")}ie(zo,fe);function Go(){fe.call(this,"c")}ie(Go,fe);var oo;function Ur(){}ie(Ur,Ho);Ur.prototype.g=function(){return new XMLHttpRequest};Ur.prototype.i=function(){return{}};oo=new Ur;function gs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Kn(this),this.O=uy,t=eo?125:void 0,this.T=new Lr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Cu}function Cu(){this.i=null,this.g="",this.h=!1}var uy=45e3,ao={},cr={};T=gs.prototype;T.setTimeout=function(t){this.O=t};function co(t,e,n){t.K=1,t.v=Fr(Ge(e)),t.s=n,t.P=!0,ku(t,null)}function ku(t,e){t.F=Date.now(),ms(t),t.A=Ge(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Pu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Cu,t.g=nh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new iy(de(t.La,t,t.g),t.N)),wu(t.S,t.g,"readystatechange",t.ib),e=t.H?cu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Hn(),oy(t.j,t.u,t.A,t.m,t.U,t.s)}T.ib=function(t){t=t.target;const e=this.L;e&&We(t)==3?e.l():this.La(t)};T.La=function(t){try{if(t==this.g)e:{const u=We(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||eo||this.g&&(this.h.h||this.g.fa()||Dc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Hn(3):Hn(2)),jr(this);var n=this.g.aa();this.Y=n;t:if(Nu(this)){var s=Dc(this.g);t="";var r=s.length,i=We(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){At(this),Mn(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ay(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!or(a)){var l=a;break t}}l=null}if(n=l)Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lo(this,n);else{this.i=!1,this.o=3,we(12),At(this),Mn(this);break e}}this.P?(xu(this,u,o),eo&&this.i&&u==3&&(wu(this.S,this.T,"tick",this.hb),this.T.start())):(Jt(this.j,this.m,o,null),lo(this,o)),u==4&&At(this),this.i&&!this.I&&(u==4?Ju(this.l,this):(this.i=!1,ms(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,we(12)):(this.o=0,we(13)),At(this),Mn(this)}}}catch{}finally{}};function Nu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function xu(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=hy(t,n),r==cr){e==4&&(t.o=4,we(14),s=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ao){t.o=4,we(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Jt(t.j,t.m,r,null),lo(t,r);Nu(t)&&r!=cr&&r!=ao&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,we(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ta(e),e.K=!0,we(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),At(t),Mn(t))}T.hb=function(){if(this.g){var t=We(this.g),e=this.g.fa();this.C<e.length&&(jr(this),xu(this,t,e),this.i&&t!=4&&ms(this))}};function hy(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?cr:(n=Number(e.substring(n,s)),isNaN(n)?ao:(s+=1,s+n>e.length?cr:(e=e.substr(s,n),t.C=s+n,e)))}T.cancel=function(){this.I=!0,At(this)};function ms(t){t.V=Date.now()+t.O,Au(t,t.O)}function Au(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ds(de(t.gb,t),e)}function jr(t){t.B&&(k.clearTimeout(t.B),t.B=null)}T.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(cy(this.j,this.A),this.K!=2&&(Hn(),we(17)),At(this),this.o=2,Mn(this)):Au(this,this.V-t)};function Mn(t){t.l.G==0||t.I||Ju(t.l,t)}function At(t){jr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wo(t.T),_u(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||uo(n.h,t))){if(!t.J&&uo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)hr(n),$r(n);else break e;ea(n),we(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ds(de(n.cb,n),6e3));if(1>=ju(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Dt(n,11)}else if((t.J||n.g==t)&&hr(n),!or(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Qo(i,i.h),i.h=null))}if(s.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,B(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=th(s,s.H?s.ka:null,s.V),o.J){Fu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(jr(a),ms(a)),s.g=o}else Yu(s);0<n.i.length&&qr(n)}else l[0]!="stop"&&l[0]!="close"||Dt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Dt(n,7):Zo(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Hn(4)}catch{}}function dy(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function fy(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Du(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=fy(t),s=dy(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ot(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ot){this.h=e!==void 0?e:t.h,lr(this,t.j),this.s=t.s,this.g=t.g,ur(this,t.m),this.l=t.l,e=t.i;var n=new zn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Nc(this,n),this.o=t.o}else t&&(n=String(t).match(Ru))?(this.h=!!e,lr(this,n[1]||"",!0),this.s=Rn(n[2]||""),this.g=Rn(n[3]||"",!0),ur(this,n[4]),this.l=Rn(n[5]||"",!0),Nc(this,n[6]||"",!0),this.o=Rn(n[7]||"")):(this.h=!!e,this.i=new zn(null,this.h))}Ot.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ln(e,xc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ln(e,xc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ln(n,n.charAt(0)=="/"?yy:py,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ln(n,wy)),t.join("")};function Ge(t){return new Ot(t)}function lr(t,e,n){t.j=n?Rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ur(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Nc(t,e,n){e instanceof zn?(t.i=e,_y(t.i,t.h)):(n||(e=Ln(e,vy)),t.i=new zn(e,t.h))}function B(t,e,n){t.i.set(e,n)}function Fr(t){return B(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ln(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,my),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function my(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xc=/[#\/\?@]/g,py=/[#\?:]/g,yy=/[#\?]/g,vy=/[#\?@]/g,wy=/#/g;function zn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _t(t){t.g||(t.g=new Map,t.h=0,t.i&&gy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}T=zn.prototype;T.add=function(t,e){_t(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lu(t,e){_t(t),e=yn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ou(t,e){return _t(t),e=yn(t,e),t.g.has(e)}T.forEach=function(t,e){_t(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};T.oa=function(){_t(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};T.W=function(t){_t(this);let e=[];if(typeof t=="string")Ou(this,t)&&(e=e.concat(this.g.get(yn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};T.set=function(t,e){return _t(this),this.i=null,t=yn(this,t),Ou(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};T.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Pu(t,e,n){Lu(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),Mo(n)),t.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _y(t,e){e&&!t.j&&(_t(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Lu(this,s),Pu(this,r,n))},t)),t.j=e}var Iy=class{constructor(e,n){this.h=e,this.g=n}};function Mu(t){this.l=t||Ty,k.PerformanceNavigationTiming?(t=k.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(k.g&&k.g.Ga&&k.g.Ga()&&k.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ty=10;function Uu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ju(t){return t.h?1:t.g?t.g.size:0}function uo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qo(t,e){t.g?t.g.add(e):t.h=e}function Fu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Mu.prototype.cancel=function(){if(this.i=Bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Mo(t.i)}function Yo(){}Yo.prototype.stringify=function(t){return k.JSON.stringify(t,void 0)};Yo.prototype.parse=function(t){return k.JSON.parse(t,void 0)};function by(){this.g=new Yo}function Ey(t,e,n){const s=n||"";try{Du(t,function(r,i){let o=r;us(r)&&(o=qo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Sy(t,e){const n=new Or;if(k.Image){const s=new Image;s.onload=Ms(js,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ms(js,n,s,"TestLoadImage: error",!1,e),s.onabort=Ms(js,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ms(js,n,s,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function js(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ps(t){this.l=t.ac||null,this.j=t.jb||!1}ie(ps,Ho);ps.prototype.g=function(){return new Br(this.l,this.j)};ps.prototype.i=function(t){return function(){return t}}({});function Br(t,e){te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ie(Br,te);var Xo=0;T=Br.prototype;T.open=function(t,e){if(this.readyState!=Xo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gn(this)};T.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||k).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=Xo};T.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gn(this)),this.g&&(this.readyState=3,Gn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Vu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}T.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ys(this):Gn(this),this.readyState==3&&Vu(this)}};T.Va=function(t){this.g&&(this.response=this.responseText=t,ys(this))};T.Ua=function(t){this.g&&(this.response=t,ys(this))};T.ga=function(){this.g&&ys(this)};function ys(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gn(t)}T.setRequestHeader=function(t,e){this.v.append(t,e)};T.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Gn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Cy=k.JSON.parse;function q(t){te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$u,this.K=this.L=!1}ie(q,te);var $u="",ky=/^https?$/i,Ny=["POST","PUT"];T=q.prototype;T.Ka=function(t){this.L=t};T.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():oo.g(),this.C=this.u?kc(this.u):kc(oo),this.g.onreadystatechange=de(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ac(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=k.FormData&&t instanceof k.FormData,!(0<=ru(Ny,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ku(this),0<this.B&&((this.K=xy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=de(this.qa,this)):this.A=Ko(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ac(this,i)}};function xy(t){return rn&&Hp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}T.qa=function(){typeof Po<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,re(this,"timeout"),this.abort(8))};function Ac(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qu(t),Vr(t)}function qu(t){t.D||(t.D=!0,re(t,"complete"),re(t,"error"))}T.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,re(this,"complete"),re(this,"abort"),Vr(this))};T.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vr(this,!0)),q.X.M.call(this)};T.Ha=function(){this.s||(this.F||this.v||this.l?Wu(this):this.fb())};T.fb=function(){Wu(this)};function Wu(t){if(t.h&&typeof Po<"u"&&(!t.C[1]||We(t)!=4||t.aa()!=2)){if(t.v&&We(t)==4)Ko(t.Ha,0,t);else if(re(t,"readystatechange"),We(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Ru)[1]||null;if(!r&&k.self&&k.self.location){var i=k.self.location.protocol;r=i.substr(0,i.length-1)}s=!ky.test(r?r.toLowerCase():"")}n=s}if(n)re(t,"complete"),re(t,"success");else{t.m=6;try{var o=2<We(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qu(t)}}finally{Vr(t)}}}}function Vr(t,e){if(t.g){Ku(t);const n=t.g,s=t.C[0]?ir:null;t.g=null,t.C=null,e||re(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ku(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(k.clearTimeout(t.A),t.A=null)}function We(t){return t.g?t.g.readyState:0}T.aa=function(){try{return 2<We(this)?this.g.status:-1}catch{return-1}};T.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Cy(e)}};function Dc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $u:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}T.Ea=function(){return this.m};T.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hu(t){let e="";return jo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Jo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Hu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):B(t,e,n))}function Nn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zu(t){this.Ca=0,this.i=[],this.j=new Or,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Nn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Nn("baseRetryDelayMs",5e3,t),this.bb=Nn("retryDelaySeedMs",1e4,t),this.$a=Nn("forwardChannelMaxRetries",2,t),this.ta=Nn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Mu(t&&t.concurrentRequestLimit),this.Fa=new by,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}T=zu.prototype;T.ma=8;T.G=1;function Zo(t){if(Gu(t),t.G==3){var e=t.U++,n=Ge(t.F);B(n,"SID",t.I),B(n,"RID",e),B(n,"TYPE","terminate"),vs(t,n),e=new gs(t,t.j,e,void 0),e.K=2,e.v=Fr(Ge(n)),n=!1,k.navigator&&k.navigator.sendBeacon&&(n=k.navigator.sendBeacon(e.v.toString(),"")),!n&&k.Image&&(new Image().src=e.v,n=!0),n||(e.g=nh(e.l,null),e.g.da(e.v)),e.F=Date.now(),ms(e)}eh(t)}function $r(t){t.g&&(ta(t),t.g.cancel(),t.g=null)}function Gu(t){$r(t),t.u&&(k.clearTimeout(t.u),t.u=null),hr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&k.clearTimeout(t.m),t.m=null)}function qr(t){Uu(t.h)||t.m||(t.m=!0,pu(t.Ja,t),t.C=0)}function Ay(t,e){return ju(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ds(de(t.Ja,t,e),Zu(t,t.C)),t.C++,!0)}T.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new gs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=cu(i),lu(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qu(this,r,e),n=Ge(this.F),B(n,"RID",t),B(n,"CVER",22),this.D&&B(n,"X-HTTP-Session-Id",this.D),vs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Hu(i)))+"&"+e:this.o&&Jo(n,this.o,i)),Qo(this.h,r),this.Ya&&B(n,"TYPE","init"),this.O?(B(n,"$req",e),B(n,"SID","null"),r.Z=!0,co(r,n,null)):co(r,n,e),this.G=2}}else this.G==3&&(t?Rc(this,t):this.i.length==0||Uu(this.h)||Rc(this))};function Rc(t,e){var n;e?n=e.m:n=t.U++;const s=Ge(t.F);B(s,"SID",t.I),B(s,"RID",n),B(s,"AID",t.T),vs(t,s),t.o&&t.s&&Jo(s,t.o,t.s),n=new gs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Qu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Qo(t.h,n),co(n,s,e)}function vs(t,e){t.ia&&jo(t.ia,function(n,s){B(e,s,n)}),t.l&&Du({},function(n,s){B(e,s,n)})}function Qu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?de(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Ey(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Yu(t){t.g||t.u||(t.Z=1,pu(t.Ia,t),t.A=0)}function ea(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ds(de(t.Ia,t),Zu(t,t.A)),t.A++,!0)}T.Ia=function(){if(this.u=null,Xu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ds(de(this.eb,this),t)}};T.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,we(10),$r(this),Xu(this))};function ta(t){t.B!=null&&(k.clearTimeout(t.B),t.B=null)}function Xu(t){t.g=new gs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ge(t.sa);B(e,"RID","rpc"),B(e,"SID",t.I),B(e,"CI",t.L?"0":"1"),B(e,"AID",t.T),B(e,"TYPE","xmlhttp"),vs(t,e),t.o&&t.s&&Jo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Fr(Ge(e)),n.s=null,n.P=!0,ku(n,t)}T.cb=function(){this.v!=null&&(this.v=null,$r(this),ea(this),we(19))};function hr(t){t.v!=null&&(k.clearTimeout(t.v),t.v=null)}function Ju(t,e){var n=null;if(t.g==e){hr(t),ta(t),t.g=null;var s=2}else if(uo(t.h,e))n=e.D,Fu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Pr(),re(s,new bu(s,n)),qr(t)}else Yu(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Ay(t,e)||s==2&&ea(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Dt(t,5);break;case 4:Dt(t,10);break;case 3:Dt(t,6);break;default:Dt(t,2)}}}function Zu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Dt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=de(t.kb,t);n||(n=new Ot("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||lr(n,"https"),Fr(n)),Sy(n.toString(),s)}else we(2);t.G=0,t.l&&t.l.va(e),eh(t),Gu(t)}T.kb=function(t){t?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function eh(t){if(t.G=0,t.la=[],t.l){const e=Bu(t.h);(e.length!=0||t.i.length!=0)&&(Ic(t.la,e),Ic(t.la,t.i),t.h.i.length=0,Mo(t.i),t.i.length=0),t.l.ua()}}function th(t,e,n){var s=n instanceof Ot?Ge(n):new Ot(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ur(s,s.m);else{var r=k.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ot(null,void 0);s&&lr(i,s),e&&(i.g=e),r&&ur(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&B(s,n,e),B(s,"VER",t.ma),vs(t,s),s}function nh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new q(new ps({jb:!0})):new q(t.ra),e.Ka(t.H),e}function sh(){}T=sh.prototype;T.xa=function(){};T.wa=function(){};T.va=function(){};T.ua=function(){};T.Ra=function(){};function dr(){if(rn&&!(10<=Number(zp)))throw Error("Environmental error: no available transport.")}dr.prototype.g=function(t,e){return new Ee(t,e)};function Ee(t,e){te.call(this),this.g=new zu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!or(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!or(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vn(this)}ie(Ee,te);Ee.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;we(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=th(t,null,t.V),qr(t)};Ee.prototype.close=function(){Zo(this.g)};Ee.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qo(t),t=n);e.i.push(new Iy(e.ab++,t)),e.G==3&&qr(e)};Ee.prototype.M=function(){this.g.l=null,delete this.j,Zo(this.g),delete this.g,Ee.X.M.call(this)};function rh(t){zo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ie(rh,zo);function ih(){Go.call(this),this.status=1}ie(ih,Go);function vn(t){this.g=t}ie(vn,sh);vn.prototype.xa=function(){re(this.g,"a")};vn.prototype.wa=function(t){re(this.g,new rh(t))};vn.prototype.va=function(t){re(this.g,new ih)};vn.prototype.ua=function(){re(this.g,"b")};dr.prototype.createWebChannel=dr.prototype.g;Ee.prototype.send=Ee.prototype.u;Ee.prototype.open=Ee.prototype.m;Ee.prototype.close=Ee.prototype.close;Mr.NO_ERROR=0;Mr.TIMEOUT=8;Mr.HTTP_ERROR=6;Eu.COMPLETE="complete";Su.EventType=fs;fs.OPEN="a";fs.CLOSE="b";fs.ERROR="c";fs.MESSAGE="d";te.prototype.listen=te.prototype.N;q.prototype.listenOnce=q.prototype.O;q.prototype.getLastError=q.prototype.Oa;q.prototype.getLastErrorCode=q.prototype.Ea;q.prototype.getStatus=q.prototype.aa;q.prototype.getResponseJson=q.prototype.Sa;q.prototype.getResponseText=q.prototype.fa;q.prototype.send=q.prototype.da;q.prototype.setWithCredentials=q.prototype.Ka;var Dy=function(){return new dr},Ry=function(){return Pr()},Oi=Mr,Ly=Eu,Oy=Kt,Lc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Py=ps,Fs=Su,My=q;const Oc="@firebase/firestore";/**
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
 */class le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}le.UNAUTHENTICATED=new le(null),le.GOOGLE_CREDENTIALS=new le("google-credentials-uid"),le.FIRST_PARTY=new le("first-party-uid"),le.MOCK_USER=new le("mock-user");/**
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
 */let wn="9.17.2";/**
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
 */const Bt=new Ro("@firebase/firestore");function Pc(){return Bt.logLevel}function b(t,...e){if(Bt.logLevel<=O.DEBUG){const n=e.map(na);Bt.debug(`Firestore (${wn}): ${t}`,...n)}}function Qe(t,...e){if(Bt.logLevel<=O.ERROR){const n=e.map(na);Bt.error(`Firestore (${wn}): ${t}`,...n)}}function ho(t,...e){if(Bt.logLevel<=O.WARN){const n=e.map(na);Bt.warn(`Firestore (${wn}): ${t}`,...n)}}function na(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function C(t="Unexpected state"){const e=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: `+t;throw Qe(e),new Error(e)}function j(t,e){t||C()}function x(t,e){return t}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Je{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Le{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class oh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(le.UNAUTHENTICATED))}shutdown(){}}class jy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fy{constructor(e){this.t=e,this.currentUser=le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Le;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Le,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Le)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(j(typeof s.accessToken=="string"),new oh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new le(e)}}class By{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=le.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(j(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Vy{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new By(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $y{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qy{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(j(typeof n.token=="string"),this.A=n.token,new $y(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Wy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class ah{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Wy(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function P(t,e){return t<e?-1:t>e?1:0}function on(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Y{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Y(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class N{constructor(e){this.timestamp=e}static fromTimestamp(e){return new N(e)}static min(){return new N(new Y(0,0))}static max(){return new N(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Qn{constructor(e,n,s){n===void 0?n=0:n>e.length&&C(),s===void 0?s=e.length-n:s>e.length-n&&C(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class F extends Qn{construct(e,n,s){return new F(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new F(n)}static emptyPath(){return new F([])}}const Ky=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends Qn{construct(e,n,s){return new he(e,n,s)}static isValidIdentifier(e){return Ky.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new he(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(n)}static emptyPath(){return new he([])}}/**
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
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(F.fromString(e))}static fromName(e){return new E(F.fromString(e).popFirst(5))}static empty(){return new E(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return F.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new F(e.slice()))}}function Hy(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=N.fromTimestamp(s===1e9?new Y(n+1,0):new Y(n,s));return new gt(r,E.empty(),e)}function zy(t){return new gt(t.readTime,t.key,-1)}class gt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new gt(N.min(),E.empty(),-1)}static max(){return new gt(N.max(),E.empty(),-1)}}function Gy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=E.comparator(t.documentKey,e.documentKey),n!==0?n:P(t.largestBatchId,e.largestBatchId))}/**
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
 */const Qy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ws(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==Qy)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,s)=>{n(e)})}static reject(e){return new w((n,s)=>{s(e)})}static waitFor(e){return new w((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=w.resolve(!1);for(const s of e)n=n.next(r=>r?w.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new w((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new w((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function _s(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}sa.at=-1;/**
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
 */const Xy=/^[_a-zA-Z][_a-zA-Z0-9]*(?:\.[_a-zA-Z][_a-zA-Z0-9]*)*$/;class ra{constructor(e){this.alias=e}static ht(e){return Xy.test(e)}canonicalString(){let e=this.alias.replace(/\\/g,"\\\\").replace(/`/g,"\\`");return ra.ht(e)||(e="`"+e+"`"),e}}/**
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
 */class Jy{constructor(e,n,s){this.alias=e,this.lt=n,this.fieldPath=s}}/**
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
 */class Zy{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Yn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Mc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ht(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ch(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Wr(t){return t==null}function fr(t){return t===0&&1/t==-1/0}function ev(t){return typeof t=="number"&&Number.isInteger(t)&&!fr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class tv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new tv("Invalid base64 string: "+r):r}}(e);return new pe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const nv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(t){if(j(!!t),typeof t=="string"){let e=0;const n=nv.exec(t);if(j(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function an(t){return typeof t=="string"?pe.fromBase64String(t):pe.fromUint8Array(t)}/**
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
 */function ia(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lh(t){const e=t.mapValue.fields.__previous_value__;return ia(e)?lh(e):e}function Xn(t){const e=mt(t.mapValue.fields.__local_write_time__.timestampValue);return new Y(e.seconds,e.nanos)}/**
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
 */const Bs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ia(t)?4:sv(t)?9007199254740991:10:C()}function je(t,e){if(t===e)return!0;const n=Vt(t);if(n!==Vt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xn(t).isEqual(Xn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=mt(s.timestampValue),o=mt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return an(s.bytesValue).isEqual(an(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return H(s.geoPointValue.latitude)===H(r.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return H(s.integerValue)===H(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=H(s.doubleValue),o=H(r.doubleValue);return i===o?fr(i)===fr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return on(t.arrayValue.values||[],e.arrayValue.values||[],je);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Mc(i)!==Mc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!je(i[a],o[a])))return!1;return!0}(t,e);default:return C()}}function Jn(t,e){return(t.values||[]).find(n=>je(n,e))!==void 0}function cn(t,e){if(t===e)return 0;const n=Vt(t),s=Vt(e);if(n!==s)return P(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=H(r.integerValue||r.doubleValue),a=H(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Uc(t.timestampValue,e.timestampValue);case 4:return Uc(Xn(t),Xn(e));case 5:return P(t.stringValue,e.stringValue);case 6:return function(r,i){const o=an(r),a=an(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=P(o[c],a[c]);if(l!==0)return l}return P(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=P(H(r.latitude),H(i.latitude));return o!==0?o:P(H(r.longitude),H(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=cn(o[c],a[c]);if(l)return l}return P(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Bs.mapValue&&i===Bs.mapValue)return 0;if(r===Bs.mapValue)return 1;if(i===Bs.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=P(a[u],l[u]);if(h!==0)return h;const f=cn(o[a[u]],c[l[u]]);if(f!==0)return f}return P(a.length,l.length)}(t.mapValue,e.mapValue);default:throw C()}}function Uc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return P(t,e);const n=mt(t),s=mt(e),r=P(n.seconds,s.seconds);return r!==0?r:P(n.nanos,s.nanos)}function ln(t){return fo(t)}function fo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=mt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?an(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,E.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=fo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${fo(s.fields[a])}`;return i+"}"}(t.mapValue):C();var e,n}function gr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function go(t){return!!t&&"integerValue"in t}function oa(t){return!!t&&"arrayValue"in t}function jc(t){return!!t&&"nullValue"in t}function Fc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ws(t){return!!t&&"mapValue"in t}function Un(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ht(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Un(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Un(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class un{constructor(e,n){this.position=e,this.inclusive=n}}function Bc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=cn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!je(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uh{}class z extends uh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new iv(e,n,s):n==="array-contains"?new cv(e,s):n==="in"?new lv(e,s):n==="not-in"?new uv(e,s):n==="array-contains-any"?new hv(e,s):new z(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ov(e,s):new av(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(cn(n,this.value)):n!==null&&Vt(this.value)===Vt(n)&&this.matchesComparison(cn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class xe extends uh{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new xe(e,n)}matches(e){return hh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hh(t){return t.op==="and"}function dh(t){return rv(t)&&hh(t)}function rv(t){for(const e of t.filters)if(e instanceof xe)return!1;return!0}function mo(t){if(t instanceof z)return t.field.canonicalString()+t.op.toString()+ln(t.value);if(dh(t))return t.filters.map(e=>mo(e)).join(",");{const e=t.filters.map(n=>mo(n)).join(",");return`${t.op}(${e})`}}function fh(t,e){return t instanceof z?function(n,s){return s instanceof z&&n.op===s.op&&n.field.isEqual(s.field)&&je(n.value,s.value)}(t,e):t instanceof xe?function(n,s){return s instanceof xe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&fh(i,s.filters[o]),!0):!1}(t,e):void C()}function gh(t){return t instanceof z?function(e){return`${e.field.canonicalString()} ${e.op} ${ln(e.value)}`}(t):t instanceof xe?function(e){return e.op.toString()+" {"+e.getFilters().map(gh).join(" ,")+"}"}(t):"Filter"}class iv extends z{constructor(e,n,s){super(e,n,s),this.key=E.fromName(s.referenceValue)}matches(e){const n=E.comparator(e.key,this.key);return this.matchesComparison(n)}}class ov extends z{constructor(e,n){super(e,"in",n),this.keys=mh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class av extends z{constructor(e,n){super(e,"not-in",n),this.keys=mh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class cv extends z{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oa(n)&&Jn(n.arrayValue,this.value)}}class lv extends z{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jn(this.value.arrayValue,n)}}class uv extends z{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jn(this.value.arrayValue,n)}}class hv extends z{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Jn(this.value.arrayValue,s))}}/**
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
 */class Zt{constructor(e,n="asc"){this.field=e,this.dir=n}}function dv(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class J{constructor(e,n){this.comparator=e,this.root=n||se.EMPTY}insert(e,n){return new J(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,se.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vs(this.root,e,this.comparator,!0)}}class Vs{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class se{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??se.RED,this.left=r??se.EMPTY,this.right=i??se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new se(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}se.EMPTY=null,se.RED=!0,se.BLACK=!1;se.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(t,e,n,s,r){return this}insert(t,e,n){return new se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class X{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $c(this.data.getIterator())}getIteratorFrom(e){return new $c(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof X)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new X(this.comparator);return n.data=e,n}}class $c{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Te{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new Te([])}unionWith(e){let n=new X(he.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Te(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ve{constructor(e){this.value=e}static empty(){return new ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ws(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Un(n)}setAll(e){let n=he.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Un(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ws(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return je(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ws(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ht(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ve(Un(this.value))}}function ph(t){const e=[];return Ht(t.fields,(n,s)=>{const r=new he([n]);if(Ws(s)){const i=ph(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Te(e)}/**
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
 */class ue{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ue(e,0,N.min(),N.min(),N.min(),ve.empty(),0)}static newFoundDocument(e,n,s,r){return new ue(e,1,n,N.min(),s,r,0)}static newNoDocument(e,n){return new ue(e,2,n,N.min(),N.min(),ve.empty(),0)}static newUnknownDocument(e,n){return new ue(e,3,n,N.min(),N.min(),ve.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fv{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function qc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new fv(t,e,n,s,r,i,o)}function aa(t){const e=x(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>mo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Wr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ln(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ln(s)).join(",")),e._t=n}return e._t}function ca(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dv(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vc(t.startAt,e.startAt)&&Vc(t.endAt,e.endAt)}function po(t){return E.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class It{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function gv(t,e,n,s,r,i,o,a){return new It(t,e,n,s,r,i,o,a)}function Kr(t){return new It(t)}function Wc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function la(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Hr(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ua(t){return t.collectionGroup!==null}function Pt(t){const e=x(t);if(e.wt===null){e.wt=[];const n=Hr(e),s=la(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Zt(n)),e.wt.push(new Zt(he.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Zt(he.keyField(),i))}}}return e.wt}function Fe(t){const e=x(t);if(!e.gt)if(e.limitType==="F")e.gt=qc(e.path,e.collectionGroup,Pt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Pt(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Zt(i.field,o))}const s=e.endAt?new un(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new un(e.startAt.position,e.startAt.inclusive):null;e.gt=qc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function yo(t,e){e.getFirstInequalityField(),Hr(t);const n=t.filters.concat([e]);return new It(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function mr(t,e,n){return new It(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zr(t,e){return ca(Fe(t),Fe(e))&&t.limitType===e.limitType}function yh(t){return`${aa(Fe(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>gh(s)).join(", ")}]`),Wr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ln(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ln(s)).join(",")),`Target(${n})`}(Fe(t))}; limitType=${t.limitType})`}function Gr(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):E.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Pt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Bc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Pt(n),s)||n.endAt&&!function(r,i,o){const a=Bc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Pt(n),s))}(t,e)}function mv(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vh(t){return(e,n)=>{let s=!1;for(const r of Pt(t)){const i=pv(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function pv(t,e,n){const s=t.field.isKeyField()?E.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?cn(a,c):C()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return C()}}/**
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
 */function wh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(e)?"-0":e}}function _h(t){return{integerValue:""+t}}function yv(t,e){return ev(e)?_h(e):wh(t,e)}/**
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
 */class Qr{constructor(){this._=void 0}}function vv(t,e,n){return t instanceof Zn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof es?Th(t,e):t instanceof ts?bh(t,e):function(s,r){const i=Ih(s,r),o=Kc(i)+Kc(s.It);return go(i)&&go(s.It)?_h(o):wh(s.Tt,o)}(t,e)}function wv(t,e,n){return t instanceof es?Th(t,e):t instanceof ts?bh(t,e):n}function Ih(t,e){return t instanceof pr?go(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Zn extends Qr{}class es extends Qr{constructor(e){super(),this.elements=e}}function Th(t,e){const n=Eh(e);for(const s of t.elements)n.some(r=>je(r,s))||n.push(s);return{arrayValue:{values:n}}}class ts extends Qr{constructor(e){super(),this.elements=e}}function bh(t,e){let n=Eh(e);for(const s of t.elements)n=n.filter(r=>!je(r,s));return{arrayValue:{values:n}}}class pr extends Qr{constructor(e,n){super(),this.Tt=e,this.It=n}}function Kc(t){return H(t.integerValue||t.doubleValue)}function Eh(t){return oa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class _v{constructor(e,n){this.field=e,this.transform=n}}function Iv(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof es&&s instanceof es||n instanceof ts&&s instanceof ts?on(n.elements,s.elements,je):n instanceof pr&&s instanceof pr?je(n.It,s.It):n instanceof Zn&&s instanceof Zn}(t.transform,e.transform)}class Tv{constructor(e,n){this.version=e,this.transformResults=n}}class Oe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ks(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yr{}function Sh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kh(t.key,Oe.none()):new Is(t.key,t.data,Oe.none());{const n=t.data,s=ve.empty();let r=new X(he.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Tt(t.key,s,new Te(r.toArray()),Oe.none())}}function bv(t,e,n){t instanceof Is?function(s,r,i){const o=s.value.clone(),a=zc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Tt?function(s,r,i){if(!Ks(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=zc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ch(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function jn(t,e,n,s){return t instanceof Is?function(r,i,o,a){if(!Ks(r.precondition,i))return o;const c=r.value.clone(),l=Gc(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Tt?function(r,i,o,a){if(!Ks(r.precondition,i))return o;const c=Gc(r.fieldTransforms,a,i),l=i.data;return l.setAll(Ch(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ks(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Ev(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ih(s.transform,r||null);i!=null&&(n===null&&(n=ve.empty()),n.set(s.field,i))}return n||null}function Hc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&on(n,s,(r,i)=>Iv(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Is extends Yr{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Tt extends Yr{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ch(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zc(t,e,n){const s=new Map;j(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,wv(o,a,n[r]))}return s}function Gc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,vv(i,o,e))}return s}class kh extends Yr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sv extends Yr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Cv{constructor(e){this.count=e}}/**
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
 */var K,L;function kv(t){switch(t){default:return C();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Nh(t){if(t===void 0)return Qe("GRPC error has no .code"),p.UNKNOWN;switch(t){case K.OK:return p.OK;case K.CANCELLED:return p.CANCELLED;case K.UNKNOWN:return p.UNKNOWN;case K.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case K.INTERNAL:return p.INTERNAL;case K.UNAVAILABLE:return p.UNAVAILABLE;case K.UNAUTHENTICATED:return p.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case K.NOT_FOUND:return p.NOT_FOUND;case K.ALREADY_EXISTS:return p.ALREADY_EXISTS;case K.PERMISSION_DENIED:return p.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case K.ABORTED:return p.ABORTED;case K.OUT_OF_RANGE:return p.OUT_OF_RANGE;case K.UNIMPLEMENTED:return p.UNIMPLEMENTED;case K.DATA_LOSS:return p.DATA_LOSS;default:return C()}}(L=K||(K={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _n{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ht(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ch(this.inner)}size(){return this.innerSize}}/**
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
 */const Nv=new J(E.comparator);function Ye(){return Nv}const xh=new J(E.comparator);function On(...t){let e=xh;for(const n of t)e=e.insert(n.key,n);return e}function Ah(t){let e=xh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Rt(){return Fn()}function Dh(){return Fn()}function Fn(){return new _n(t=>t.toString(),(t,e)=>t.isEqual(e))}const xv=new J(E.comparator),Av=new X(E.comparator);function R(...t){let e=Av;for(const n of t)e=e.add(n);return e}const Dv=new X(P);function Rh(){return Dv}/**
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
 */class Xr{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ts.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Xr(N.min(),r,Rh(),Ye(),R())}}class Ts{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ts(s,n,R(),R(),R())}}/**
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
 */class Hs{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class Lh{constructor(e,n){this.targetId=e,this.Rt=n}}class Oh{constructor(e,n,s=pe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Qc{constructor(){this.bt=0,this.vt=Xc(),this.Pt=pe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=R(),n=R(),s=R();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:C()}}),new Ts(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Xc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Rv{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Ye(),this.Kt=Yc(),this.Gt=new X(P)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:C()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(po(i))if(s===0){const o=new E(i.path);this.zt(n,o,ue.newNoDocument(o,N.min()))}else j(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&po(a.target)){const c=new E(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,ue.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=R();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Xr(e,n,this.Gt,this.Ut,s);return this.Ut=Ye(),this.Kt=Yc(),this.Gt=new X(P),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Qc,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new X(P),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Qc),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Yc(){return new J(E.comparator)}function Xc(){return new J(E.comparator)}/**
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
 */const Lv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ov=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Pv=(()=>({and:"AND",or:"OR"}))();class Mv{constructor(e,n){this.databaseId=e,this.yt=n}}function yr(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ph(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Uv(t,e){return yr(t,e.toTimestamp())}function Pe(t){return j(!!t),N.fromTimestamp(function(e){const n=mt(e);return new Y(n.seconds,n.nanos)}(t))}function ha(t,e){return function(n){return new F(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Mh(t){const e=F.fromString(t);return j(Vh(e)),e}function wo(t,e){return ha(t.databaseId,e.path)}function Pi(t,e){const n=Mh(e);if(n.get(1)!==t.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new E(Uh(n))}function _o(t,e){return ha(t.databaseId,e)}function jv(t){const e=Mh(t);return e.length===4?F.emptyPath():Uh(e)}function Io(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uh(t){return j(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jc(t,e,n){return{name:wo(t,e),fields:n.value.mapValue.fields}}function Fv(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:C()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(j(l===void 0||typeof l=="string"),pe.fromBase64String(l||"")):(j(l===void 0||l instanceof Uint8Array),pe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?p.UNKNOWN:Nh(c.code);return new _(l,c.message||"")}(o);n=new Oh(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Pi(t,s.document.name),i=Pe(s.document.updateTime),o=s.document.createTime?Pe(s.document.createTime):N.min(),a=new ve({mapValue:{fields:s.document.fields}}),c=ue.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Hs(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Pi(t,s.document),i=s.readTime?Pe(s.readTime):N.min(),o=ue.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Hs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Pi(t,s.document),i=s.removedTargetIds||[];n=new Hs([],i,r,null)}else{if(!("filter"in e))return C();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Cv(r),o=s.targetId;n=new Lh(o,i)}}return n}function Bv(t,e){let n;if(e instanceof Is)n={update:Jc(t,e.key,e.value)};else if(e instanceof kh)n={delete:wo(t,e.key)};else if(e instanceof Tt)n={update:Jc(t,e.key,e.data),updateMask:Gv(e.fieldMask)};else{if(!(e instanceof Sv))return C();n={verify:wo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Zn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof es)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ts)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pr)return{fieldPath:i.field.canonicalString(),increment:o.It};throw C()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Uv(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:C()}(t,e.precondition)),n}function Vv(t,e){return t&&t.length>0?(j(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Pe(s.updateTime):Pe(r);return i.isEqual(N.min())&&(i=Pe(r)),new Tv(i,s.transformResults||[])}(n,e))):[]}function $v(t,e){return{documents:[_o(t,e.path)]}}function jh(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=_o(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_o(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Bh(xe.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:st(u.field),direction:Kv(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||Wr(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function qv(t){let e=jv(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){j(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Fh(u);return h instanceof xe&&dh(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Zt(Xt(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Wr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new un(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new un(f,h)}(n.endAt)),gv(e,r,o,i,a,"F",c,l)}function Wv(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return C()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Xt(e.unaryFilter.field);return z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Xt(e.unaryFilter.field);return z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Xt(e.unaryFilter.field);return z.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Xt(e.unaryFilter.field);return z.create(i,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(t):t.fieldFilter!==void 0?function(e){return z.create(Xt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return xe.create(e.compositeFilter.filters.map(n=>Fh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return C()}}(e.compositeFilter.op))}(t):C()}function Kv(t){return Lv[t]}function Hv(t){return Ov[t]}function zv(t){return Pv[t]}function st(t){return{fieldPath:t.canonicalString()}}function Xt(t){return he.fromServerFormat(t.fieldPath)}function Bh(t){return t instanceof z?function(e){if(e.op==="=="){if(Fc(e.value))return{unaryFilter:{field:st(e.field),op:"IS_NAN"}};if(jc(e.value))return{unaryFilter:{field:st(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fc(e.value))return{unaryFilter:{field:st(e.field),op:"IS_NOT_NAN"}};if(jc(e.value))return{unaryFilter:{field:st(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:st(e.field),op:Hv(e.op),value:e.value}}}(t):t instanceof xe?function(e){const n=e.getFilters().map(s=>Bh(s));return n.length===1?n[0]:{compositeFilter:{op:zv(e.op),filters:n}}}(t):C()}function Gv(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Vh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Qv{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&bv(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=jn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=jn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Dh();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Sh(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(N.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),R())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(n,s)=>Hc(n,s))&&on(this.baseMutations,e.baseMutations,(n,s)=>Hc(n,s))}}class da{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){j(e.mutations.length===s.length);let r=xv;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new da(e,n,s,r)}}/**
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
 */class Yv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mt{constructor(e,n,s,r,i=N.min(),o=N.min(),a=pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Xv{constructor(e){this.oe=e}}function Jv(t){const e=qv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mr(e,e.limit,"L"):e}/**
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
 */class Zv{constructor(){this.Ze=new ew}addToCollectionParentIndex(e,n){return this.Ze.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(gt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(gt.min())}updateCollectionGroup(e,n,s){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class ew{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new X(F.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new X(F.comparator)).toArray()}}/**
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
 */class hn{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new hn(0)}static Sn(){return new hn(-1)}}/**
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
 */class tw{constructor(){this.changes=new _n(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?w.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class sw{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&jn(s.mutation,r,Te.empty(),Y.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,R()).next(()=>s))}getLocalViewOfDocuments(e,n,s=R()){const r=Rt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=On();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Rt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,R()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Ye();const o=Fn(),a=Fn();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Tt)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),jn(u.mutation,l,u.mutation.getFieldMask(),Y.now())):o.set(l.key,Te.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new nw(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Fn();let r=new J((o,a)=>o-a),i=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Te.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||R()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Dh();u.forEach(f=>{if(!i.has(f)){const m=Sh(n.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ua(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):w.resolve(Rt());let a=-1,c=i;return o.next(l=>w.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,R())).next(u=>({batchId:a,changes:Ah(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new E(n)).next(s=>{let r=On();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=On();return this.indexManager.getCollectionParents(e,r).next(o=>w.forEach(o,a=>{const c=function(l,u){return new It(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ue.newInvalidDocument(l)))});let o=On();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&jn(l.mutation,c,Te.empty(),Y.now()),Gr(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class rw{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return w.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Pe(s.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Jv(s.bundledQuery),readTime:Pe(s.readTime)}}(n)),w.resolve()}}/**
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
 */class iw{constructor(){this.overlays=new J(E.comparator),this.ss=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Rt();return w.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),w.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),w.resolve()}getOverlaysForCollection(e,n,s){const r=Rt(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return w.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new J((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Rt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Rt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return w.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Yv(n,s));let i=this.ss.get(n);i===void 0&&(i=R(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
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
 */class fa{constructor(){this.rs=new X(ee.os),this.us=new X(ee.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new ee(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new ee(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new E(new F([])),s=new ee(n,e),r=new ee(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new E(new F([])),s=new ee(n,e),r=new ee(n,e+1);let i=R();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ee(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ee{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return E.comparator(e.key,n.key)||P(e.gs,n.gs)}static cs(e,n){return P(e.gs,n.gs)||E.comparator(e.key,n.key)}}/**
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
 */class ow{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new X(ee.os)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qv(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new ee(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ee(n,0),r=new ee(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new X(P);return n.forEach(r=>{const i=new ee(r,0),o=new ee(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),w.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;E.isDocumentKey(i)||(i=i.child(""));const o=new ee(new E(i),0);let a=new X(P);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),w.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){j(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return w.forEach(n.mutations,r=>{const i=new ee(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new ee(n,0),r=this.ps.firstAfterOrEqual(s);return w.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class aw{constructor(e){this.Rs=e,this.docs=new J(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return w.resolve(s?s.document.mutableCopy():ue.newInvalidDocument(n))}getEntries(e,n){let s=Ye();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ue.newInvalidDocument(r))}),w.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Ye();const o=n.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Gy(zy(u),s)<=0||(r.has(u.key)||Gr(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,s,r){C()}bs(e,n){return w.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new cw(this)}getSize(e){return w.resolve(this.size)}}class cw extends tw{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),w.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class lw{constructor(e){this.persistence=e,this.vs=new _n(n=>aa(n),ca),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new fa,this.targetCount=0,this.Ss=hn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),w.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new hn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.xn(n),w.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),w.waitFor(i).next(()=>r)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return w.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),w.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),w.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return w.resolve(s)}containsKey(e,n){return w.resolve(this.Vs.containsKey(n))}}/**
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
 */class uw{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new sa(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new lw(this),this.indexManager=new Zv,this.remoteDocumentCache=function(s){return new aw(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Xv(n),this.Os=new rw(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new ow(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){b("MemoryPersistence","Starting transaction:",e);const r=new hw(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return w.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class hw extends Yy{constructor(e){super(),this.currentSequenceNumber=e}}class ga{constructor(e){this.persistence=e,this.Bs=new fa,this.Ls=null}static qs(e){return new ga(e)}get Us(){if(this.Ls)return this.Ls;throw C()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),w.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),w.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Us,s=>{const r=E.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,N.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return w.or([()=>w.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
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
 */class ma{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=R(),r=R();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ma(e,n.fromCache,s,r)}}/**
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
 */class dw{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(Wc(n))return w.resolve(null);let s=Fe(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=mr(n,null,"F"),s=Fe(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=R(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,mr(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,r){return Wc(n)||r.isEqual(N.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(Pc()<=O.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vo(n)),this.qi(e,o,n,Hy(r,-1)))})}Bi(e,n){let s=new X(vh(e));return n.forEach((r,i)=>{Gr(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return Pc()<=O.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",vo(n)),this.Oi.getDocumentsMatchingQuery(e,n,gt.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class fw{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new J(P),this.Gi=new _n(i=>aa(i),ca),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sw(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function gw(t,e,n,s){return new fw(t,e,n,s)}async function $h(t,e){const n=x(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=R();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function mw(t,e){const n=x(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=w.resolve();return h.forEach(m=>{f=f.next(()=>l.getEntry(a,m)).next(y=>{const v=c.docVersions.get(m);j(v!==null),y.version.compareTo(v)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function qh(t){const e=x(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function pw(t,e){const n=x(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(pe.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(y,v,I){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,m,u)&&a.push(n.Ns.updateTargetData(i,m))});let c=Ye(),l=R();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(yw(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(N.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return w.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function yw(t,e,n){let s=R(),r=R();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Ye();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(N.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function vw(t,e){const n=x(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ww(t,e){const n=x(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,w.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Mt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function To(t,e,n){const s=x(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!_s(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Zc(t,e,n){const s=x(t);let r=N.min(),i=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=x(a),h=u.Gi.get(l);return h!==void 0?w.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,Fe(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:N.min(),n?i:R())).next(a=>(_w(s,mv(e),a),{documents:a,Yi:i})))}function _w(t,e,n){let s=t.Qi.get(e)||N.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class el{constructor(){this.activeTargetIds=Rh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Iw{constructor(){this.Ur=new el,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new el,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Tw{Gr(e){}shutdown(){}}/**
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
 */class tl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const bw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ew{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */class Sw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);b("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(b("RestConnection","Received: ",c),c),c=>{throw ho("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+wn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=bw[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new My;a.setWithCredentials(!0),a.listenOnce(Ly.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Oi.NO_ERROR:const l=a.getResponseJson();b("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Oi.TIMEOUT:b("Connection",'RPC "'+e+'" timed out'),o(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case Oi.HTTP_ERROR:const u=a.getStatus();if(b("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const m=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(v)>=0?v:p.UNKNOWN}(f.status);o(new _(m,f.message))}else o(new _(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(p.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{b("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Dy(),o=Ry(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Py({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");b("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new Ew({Yr:y=>{h?b("Connection","Not sending because WebChannel is closed:",y):(u||(b("Connection","Opening WebChannel transport."),l.open(),u=!0),b("Connection","WebChannel sending:",y),l.send(y))},Zr:()=>l.close()}),m=(y,v,I)=>{y.listen(v,D=>{try{I(D)}catch(A){setTimeout(()=>{throw A},0)}})};return m(l,Fs.EventType.OPEN,()=>{h||b("Connection","WebChannel transport opened.")}),m(l,Fs.EventType.CLOSE,()=>{h||(h=!0,b("Connection","WebChannel transport closed"),f.oo())}),m(l,Fs.EventType.ERROR,y=>{h||(h=!0,ho("Connection","WebChannel transport errored:",y),f.oo(new _(p.UNAVAILABLE,"The operation could not be completed")))}),m(l,Fs.EventType.MESSAGE,y=>{var v;if(!h){const I=y.data[0];j(!!I);const D=I,A=D.error||((v=D[0])===null||v===void 0?void 0:v.error);if(A){b("Connection","WebChannel received error:",A);const W=A.status;let U=function(Se){const ne=K[Se];if(ne!==void 0)return Nh(ne)}(W),oe=A.message;U===void 0&&(U=p.INTERNAL,oe="Unknown error status: "+W+" with message "+A.message),h=!0,f.oo(new _(U,oe)),l.close()}else b("Connection","WebChannel received:",I),f.uo(I)}}),m(o,Oy.STAT_EVENT,y=>{y.stat===Lc.PROXY?b("Connection","Detected buffering proxy"):y.stat===Lc.NOPROXY&&b("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ro()},0),f}}function Mi(){return typeof document<"u"?document:null}/**
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
 */function Jr(t){return new Mv(t,!0)}/**
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
 */class Wh{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&b("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
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
 */class Kh{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Wh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Qe(n.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new _(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cw extends Kh{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Fv(this.Tt,e),s=function(r){if(!("targetChange"in r))return N.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?N.min():i.readTime?Pe(i.readTime):N.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Io(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=po(a)?{documents:$v(r,a)}:{query:jh(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ph(r,i.resumeToken):i.snapshotVersion.compareTo(N.min())>0&&(o.readTime=yr(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Wv(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Io(this.Tt),n.removeTarget=e,this.qo(n)}}class kw extends Kh{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Vv(e.writeResults,e.commitTime),s=Pe(e.commitTime);return this.listener.eu(s,n)}return j(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Io(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Bv(this.Tt,s))};this.qo(n)}}/**
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
 */class Nw extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(p.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(p.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}async function xw(t,e,n){const s=x(t),r=function(l,u,h){const f=jh(l,u),m=[];return h.forEach(y=>{y.lt==="count"?m.push({alias:y.alias.canonicalString(),count:{}}):y.lt==="avg"?m.push({alias:y.alias.canonicalString(),avg:{field:st(y.fieldPath)}}):y.lt==="sum"&&m.push({alias:y.alias.canonicalString(),sum:{field:st(y.fieldPath)}})}),{structuredAggregationQuery:{aggregations:m,structuredQuery:f.structuredQuery},parent:f.parent}}(s.Tt,Fe(e),n),i=r.parent;s.connection.ho||delete r.parent;const o=(await s.mo("RunAggregationQuery",i,r,1)).filter(l=>!!l.result);return j(o.length===1),(a=o[0]).result,a.result.aggregateFields,new ve({mapValue:{fields:(c=a.result)===null||c===void 0?void 0:c.aggregateFields}});var a,c}class Aw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Qe(n),this.cu=!1):b("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class Dw{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{bt(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=x(a);c.mu.add(4),await bs(c),c.pu.set("Unknown"),c.mu.delete(4),await Zr(c)}(this))})}),this.pu=new Aw(s,r)}}async function Zr(t){if(bt(t))for(const e of t.gu)await e(!0)}async function bs(t){for(const e of t.gu)await e(!1)}function Hh(t,e){const n=x(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),va(n)?ya(n):In(n).Mo()&&pa(n,e))}function zh(t,e){const n=x(t),s=In(n);n.wu.delete(e),s.Mo()&&Gh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():bt(n)&&n.pu.set("Unknown"))}function pa(t,e){t.Iu.Ft(e.targetId),In(t).Jo(e)}function Gh(t,e){t.Iu.Ft(e),In(t).Yo(e)}function ya(t){t.Iu=new Rv({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),In(t).start(),t.pu.au()}function va(t){return bt(t)&&!In(t).Oo()&&t.wu.size>0}function bt(t){return x(t).mu.size===0}function Qh(t){t.Iu=void 0}async function Rw(t){t.wu.forEach((e,n)=>{pa(t,e)})}async function Lw(t,e){Qh(t),va(t)?(t.pu.fu(e),ya(t)):t.pu.set("Unknown")}async function Ow(t,e,n){if(t.pu.set("Online"),e instanceof Oh&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vr(t,s)}else if(e instanceof Hs?t.Iu.Qt(e):e instanceof Lh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(N.min()))try{const s=await qh(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(pe.EMPTY_BYTE_STRING,c.snapshotVersion)),Gh(r,a);const l=new Mt(c.target,a,1,c.sequenceNumber);pa(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){b("RemoteStore","Failed to raise snapshot:",s),await vr(t,s)}}async function vr(t,e,n){if(!_s(e))throw e;t.mu.add(1),await bs(t),t.pu.set("Offline"),n||(n=()=>qh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Zr(t)})}function Yh(t,e){return e().catch(n=>vr(t,n,e))}async function ei(t){const e=x(t),n=pt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Pw(e);)try{const r=await vw(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,Mw(e,r)}catch(r){await vr(e,r)}Xh(e)&&Jh(e)}function Pw(t){return bt(t)&&t._u.length<10}function Mw(t,e){t._u.push(e);const n=pt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Xh(t){return bt(t)&&!pt(t).Oo()&&t._u.length>0}function Jh(t){pt(t).start()}async function Uw(t){pt(t).su()}async function jw(t){const e=pt(t);for(const n of t._u)e.tu(n.mutations)}async function Fw(t,e,n){const s=t._u.shift(),r=da.from(s,e,n);await Yh(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ei(t)}async function Bw(t,e){e&&pt(t).Xo&&await async function(n,s){if(r=s.code,kv(r)&&r!==p.ABORTED){const i=n._u.shift();pt(n).$o(),await Yh(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ei(n)}var r}(t,e),Xh(t)&&Jh(t)}async function nl(t,e){const n=x(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const s=bt(n);n.mu.add(3),await bs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Zr(n)}async function Vw(t,e){const n=x(t);e?(n.mu.delete(2),await Zr(n)):e||(n.mu.add(2),await bs(n),n.pu.set("Unknown"))}function In(t){return t.Tu||(t.Tu=function(e,n,s){const r=x(e);return r.ru(),new Cw(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Rw.bind(null,t),no:Lw.bind(null,t),Ho:Ow.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),va(t)?ya(t):t.pu.set("Unknown")):(await t.Tu.stop(),Qh(t))})),t.Tu}function pt(t){return t.Eu||(t.Eu=function(e,n,s){const r=x(e);return r.ru(),new kw(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Uw.bind(null,t),no:Bw.bind(null,t),nu:jw.bind(null,t),eu:Fw.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await ei(t)):(await t.Eu.stop(),t._u.length>0&&(b("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class wa{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new wa(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _a(t,e){if(Qe("AsyncQueue",`${e}: ${t}`),_s(t))return new _(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class en{constructor(e){this.comparator=e?(n,s)=>e(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=On(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new en(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new en;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class sl{constructor(){this.Au=new J(E.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):C():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class dn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new dn(e,n,en.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class $w{constructor(){this.bu=void 0,this.listeners=[]}}class qw{constructor(){this.queries=new _n(e=>yh(e),zr),this.onlineState="Unknown",this.vu=new Set}}async function Ia(t,e){const n=x(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new $w),r)try{i.bu=await n.onListen(s)}catch(o){const a=_a(o,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&ba(n)}async function Ta(t,e){const n=x(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Ww(t,e){const n=x(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&ba(n)}function Kw(t,e,n){const s=x(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ba(t){t.vu.forEach(e=>{e.next()})}class Ea{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new dn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class Zh{constructor(e){this.key=e}}class ed{constructor(e){this.key=e}}class Hw{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=R(),this.mutatedKeys=R(),this.ju=vh(e),this.zu=new en(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new sl,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),m=Gr(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;f&&m?f.data.isEqual(m.data)?y!==v&&(s.track({type:3,doc:m}),I=!0):this.Yu(f,m)||(s.track({type:2,doc:m}),I=!0,(c&&this.ju(m,c)>0||l&&this.ju(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),I=!0):f&&!m&&(s.track({type:1,doc:f}),I=!0,(c||l)&&(a=!0)),I&&(m?(o=o.add(m),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,f){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return m(h)-m(f)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new dn(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new sl,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=R(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new ed(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Zh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=R();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return dn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class zw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Gw{constructor(e){this.key=e,this.ic=!1}}class Qw{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new _n(a=>yh(a),zr),this.uc=new Map,this.cc=new Set,this.ac=new J(E.comparator),this.hc=new Map,this.lc=new fa,this.fc={},this.dc=new Map,this._c=hn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Yw(t,e){const n=o_(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await ww(n.localStore,Fe(e));n.isPrimaryClient&&Hh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Xw(n,e,s,a==="current",o.resumeToken)}return r}async function Xw(t,e,n,s,r){t.mc=(h,f,m)=>async function(y,v,I,D){let A=v.view.Hu(I);A.Li&&(A=await Zc(y.localStore,v.query,!1).then(({documents:oe})=>v.view.Hu(oe,A)));const W=D&&D.targetChanges.get(v.targetId),U=v.view.applyChanges(A,y.isPrimaryClient,W);return il(y,v.targetId,U.tc),U.snapshot}(t,h,f,m);const i=await Zc(t.localStore,e,!0),o=new Hw(e,i.Yi),a=o.Hu(i.documents),c=Ts.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);il(t,n,l.tc);const u=new zw(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function Jw(t,e){const n=x(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!zr(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await To(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),zh(n.remoteStore,s.targetId),bo(n,s.targetId)}).catch(ws)):(bo(n,s.targetId),await To(n.localStore,s.targetId,!0))}async function Zw(t,e,n){const s=a_(t);try{const r=await function(i,o){const a=x(i),c=Y.now(),l=o.reduce((f,m)=>f.add(m.key),R());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Ye(),y=R();return a.ji.getEntries(f,l).next(v=>{m=v,m.forEach((I,D)=>{D.isValidDocument()||(y=y.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(v=>{u=v;const I=[];for(const D of o){const A=Ev(D,u.get(D.key).overlayedDocument);A!=null&&I.push(new Tt(D.key,A,ph(A.value.mapValue),Oe.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,I,o)}).next(v=>{h=v;const I=v.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,I)})}).then(()=>({batchId:h.batchId,changes:Ah(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new J(P)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Es(s,r.changes),await ei(s.remoteStore)}catch(r){const i=_a(r,"Failed to persist write");n.reject(i)}}async function td(t,e){const n=x(t);try{const s=await pw(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(j(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?j(o.ic):r.removedDocuments.size>0&&(j(o.ic),o.ic=!1))}),await Es(n,s,e)}catch(s){await ws(s)}}function rl(t,e,n){const s=x(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=x(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&ba(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function e_(t,e,n){const s=x(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new J(E.comparator);o=o.insert(i,ue.newNoDocument(i,N.min()));const a=R().add(i),c=new Xr(N.min(),new Map,new X(P),o,a);await td(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Sa(s)}else await To(s.localStore,e,!1).then(()=>bo(s,e,n)).catch(ws)}async function t_(t,e){const n=x(t),s=e.batch.batchId;try{const r=await mw(n.localStore,e);sd(n,s,null),nd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Es(n,r)}catch(r){await ws(r)}}async function n_(t,e,n){const s=x(t);try{const r=await function(i,o){const a=x(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(j(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);sd(s,e,n),nd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Es(s,r)}catch(r){await ws(r)}}function nd(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function sd(t,e,n){const s=x(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function bo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||rd(t,s)})}function rd(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(zh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Sa(t))}function il(t,e,n){for(const s of n)s instanceof Zh?(t.lc.addReference(s.key,e),s_(t,s)):s instanceof ed?(b("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||rd(t,s.key)):C()}function s_(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(b("SyncEngine","New document in limbo: "+n),t.cc.add(s),Sa(t))}function Sa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new E(F.fromString(e)),s=t._c.next();t.hc.set(s,new Gw(n)),t.ac=t.ac.insert(n,s),Hh(t.remoteStore,new Mt(Fe(Kr(n.path)),s,2,sa.at))}}async function Es(t,e,n){const s=x(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=ma.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=x(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>w.forEach(c,h=>w.forEach(h.Ci,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>w.forEach(h.xi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!_s(u))throw u;b("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ki.get(h),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);l.Ki=l.Ki.insert(h,y)}}}(s.localStore,i))}async function r_(t,e){const n=x(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const s=await $h(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new _(p.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Es(n,s.Wi)}}function i_(t,e){const n=x(t),s=n.hc.get(e);if(s&&s.ic)return R().add(s.key);{let r=R();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function o_(t){const e=x(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=td.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=e_.bind(null,e),e.rc.Ho=Ww.bind(null,e.eventManager),e.rc.gc=Kw.bind(null,e.eventManager),e}function a_(t){const e=x(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=t_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=n_.bind(null,e),e}class c_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Jr(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return gw(this.persistence,new dw,e.initialUser,this.Tt)}Tc(e){return new uw(ga.qs,this.Tt)}Ic(e){return new Iw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class l_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=r_.bind(null,this.syncEngine),await Vw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qw}createDatastore(e){const n=Jr(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Sw(r));var r;return function(i,o,a,c){return new Nw(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>rl(this.syncEngine,a,0),o=tl.C()?new tl:new Tw,new Dw(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Qw(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=x(e);b("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await bs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Ca{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class u_{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=le.UNAUTHENTICATED,this.clientId=ah.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{b("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(b("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=_a(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function h_(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await $h(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function d_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await f_(t);b("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>nl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>nl(e.remoteStore,i)),t.onlineComponents=e}async function f_(t){return t.offlineComponents||(b("FirestoreClient","Using default OfflineComponentProvider"),await h_(t,new c_)),t.offlineComponents}async function ti(t){return t.onlineComponents||(b("FirestoreClient","Using default OnlineComponentProvider"),await d_(t,new l_)),t.onlineComponents}function g_(t){return ti(t).then(e=>e.remoteStore)}function m_(t){return ti(t).then(e=>e.syncEngine)}function p_(t){return ti(t).then(e=>e.datastore)}async function wr(t){const e=await ti(t),n=e.eventManager;return n.onListen=Yw.bind(null,e.syncEngine),n.onUnlisten=Jw.bind(null,e.syncEngine),n}function y_(t,e,n={}){const s=new Le;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Ca({next:h=>{i.enqueueAndForget(()=>Ta(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new _(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new _(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Ea(Kr(o.path),l,{includeMetadataChanges:!0,Ou:!0});return Ia(r,u)}(await wr(t),t.asyncQueue,e,n,s)),s.promise}function v_(t,e,n={}){const s=new Le;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Ca({next:h=>{i.enqueueAndForget(()=>Ta(r,u)),h.fromCache&&a.source==="server"?c.reject(new _(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Ea(o,l,{includeMetadataChanges:!0,Ou:!0});return Ia(r,u)}(await wr(t),t.asyncQueue,e,n,s)),s.promise}const ol=new Map;/**
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
 */function id(t,e,n){if(!n)throw new _(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function w_(t,e,n,s){if(e===!0&&s===!0)throw new _(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function al(t){if(!E.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cl(t){if(E.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ni(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":C()}function be(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ni(t);throw new _(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function __(t,e){if(e<=0)throw new _(p.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class ll{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,w_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class si{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ll({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ll(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Uy;switch(n.type){case"gapi":const s=n.client;return new Vy(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ol.get(e);n&&(b("ComponentProvider","Removing Datastore"),ol.delete(e),n.terminate())}(this),Promise.resolve()}}function I_(t,e,n,s={}){var r;const i=(t=be(t,si))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ho("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=le.MOCK_USER;else{o=pm(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new _(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new le(c)}t._authCredentials=new jy(new oh(o,a))}}/**
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
 */class ge{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}}class Ae{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ae(this.firestore,e,this._query)}}class ft extends Ae{constructor(e,n,s){super(e,n,Kr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new E(e))}withConverter(e){return new ft(this.firestore,e,this._path)}}function ri(t,e,...n){if(t=$(t),id("collection","path",e),t instanceof si){const s=F.fromString(e,...n);return cl(s),new ft(t,null,s)}{if(!(t instanceof ge||t instanceof ft))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(F.fromString(e,...n));return cl(s),new ft(t.firestore,null,s)}}function yt(t,e,...n){if(t=$(t),arguments.length===1&&(e=ah.R()),id("doc","path",e),t instanceof si){const s=F.fromString(e,...n);return al(s),new ge(t,null,new E(s))}{if(!(t instanceof ge||t instanceof ft))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(F.fromString(e,...n));return al(s),new ge(t.firestore,t instanceof ft?t.converter:null,new E(s))}}/**
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
 */class T_{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Wh(this,"async_queue_retry"),this.Hc=()=>{const n=Mi();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Mi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Mi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Le;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!_s(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Qe("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=wa.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&C()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function ul(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class vt extends si{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new T_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||od(this),this._firestoreClient.terminate()}}function b_(t,e){const n=typeof t=="object"?t:tu(),s=typeof t=="string"?t:e||"(default)",r=Oo(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=fm("firestore");i&&I_(r,...i)}return r}function Ss(t){return t._firestoreClient||od(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function od(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Zy(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new u_(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class E_{constructor(e="count",n){this._aggregateType=e,this._internalFieldPath=n,this.type="AggregateField"}}class S_{constructor(e,n,s){this._userDataWriter=n,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertValue(this._data.value)}}/**
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
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(pe.fromBase64String(e))}catch(n){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fn(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ii{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oi{constructor(e){this._methodName=e}}/**
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
 */class ka{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}/**
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
 */const C_=/^__.*__$/;class k_{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Tt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Is(e,this.data,n,this.fieldTransforms)}}class ad{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Tt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class Na{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return _r(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(cd(this.ra)&&C_.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class N_{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Jr(e)}wa(e,n,s,r=!1){return new Na({ra:e,methodName:n,_a:s,path:he.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function ai(t){const e=t._freezeSettings(),n=Jr(t._databaseId);return new N_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function x_(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);Aa("Data must be an object, but it was:",o,s);const a=ud(s,o);let c,l;if(i.merge)c=new Te(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Eo(e,h,n);if(!o.contains(f))throw new _(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);dd(u,f)||u.push(f)}c=new Te(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new k_(new ve(a),c,l)}class ci extends oi{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ci}}class xa extends oi{_toFieldTransform(e){return new _v(e.path,new Zn)}isEqual(e){return e instanceof xa}}function A_(t,e,n,s){const r=t.wa(1,e,n);Aa("Data must be an object, but it was:",r,s);const i=[],o=ve.empty();Ht(s,(c,l)=>{const u=Da(e,c,n);l=$(l);const h=r.ha(u);if(l instanceof ci)i.push(u);else{const f=Cs(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Te(i);return new ad(o,a,r.fieldTransforms)}function D_(t,e,n,s,r,i){const o=t.wa(1,e,n),a=[Eo(e,s,n)],c=[r];if(i.length%2!=0)throw new _(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Eo(e,i[f])),c.push(i[f+1]);const l=[],u=ve.empty();for(let f=a.length-1;f>=0;--f)if(!dd(l,a[f])){const m=a[f];let y=c[f];y=$(y);const v=o.ha(m);if(y instanceof ci)l.push(m);else{const I=Cs(y,v);I!=null&&(l.push(m),u.set(m,I))}}const h=new Te(l);return new ad(u,h,o.fieldTransforms)}function ld(t,e,n,s=!1){return Cs(n,t.wa(s?4:3,e))}function Cs(t,e){if(hd(t=$(t)))return Aa("Unsupported field value:",e,t),ud(t,e);if(t instanceof oi)return function(n,s){if(!cd(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Cs(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=$(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yv(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Y.fromDate(n);return{timestampValue:yr(s.Tt,r)}}if(n instanceof Y){const r=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yr(s.Tt,r)}}if(n instanceof ka)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fn)return{bytesValue:Ph(s.Tt,n._byteString)};if(n instanceof ge){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ha(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ni(n)}`)}(t,e)}function ud(t,e){const n={};return ch(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ht(t,(s,r)=>{const i=Cs(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function hd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Y||t instanceof ka||t instanceof fn||t instanceof ge||t instanceof oi)}function Aa(t,e,n){if(!hd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ni(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Eo(t,e,n){if((e=$(e))instanceof ii)return e._internalPath;if(typeof e=="string")return Da(t,e);throw _r("Field path arguments must be of type string or ",t,!1,void 0,n)}const R_=new RegExp("[~\\*/\\[\\]]");function Da(t,e,n){if(e.search(R_)>=0)throw _r(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ii(...e.split("."))._internalPath}catch{throw _r(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _r(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new _(p.INVALID_ARGUMENT,a+t+c)}function dd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ra{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new L_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(La("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class L_ extends Ra{data(){return super.data()}}function La(t,e){return typeof e=="string"?Da(t,e):e instanceof ii?e._internalPath:e._delegate._internalPath}/**
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
 */function fd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oa{}class ks extends Oa{}function zs(t,e,...n){let s=[];e instanceof Oa&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Ma).length,o=r.filter(a=>a instanceof Pa).length;if(i>1||i>0&&o>0)throw new _(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Pa extends ks{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Pa(e,n,s)}_apply(e){const n=this._parse(e);return md(e._query,n),new Ae(e.firestore,e.converter,yo(e._query,n))}_parse(e){const n=ai(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){fl(u,l);const f=[];for(const m of u)f.push(dl(a,r,m));h={arrayValue:{values:f}}}else h=dl(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||fl(u,l),h=ld(o,i,u,l==="in"||l==="not-in");return z.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ma extends Oa{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ma(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:xe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)md(i,a),i=yo(i,a)}(e._query,n),new Ae(e.firestore,e.converter,yo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ua extends ks{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ua(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new _(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new _(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Zt(r,i);return function(a,c){if(la(a)===null){const l=Hr(a);l!==null&&pd(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Ae(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new It(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Gs(t,e="asc"){const n=e,s=La("orderBy",t);return Ua._create(s,n)}class ja extends ks{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new ja(e,n,s)}_apply(e){return new Ae(e.firestore,e.converter,mr(e._query,this._limit,this._limitType))}}function hl(t){return __("limit",t),ja._create("limit",t,"F")}class Fa extends ks{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new Fa(e,n,s)}_apply(e){const n=gd(e,this.type,this._docOrFields,this._inclusive);return new Ae(e.firestore,e.converter,function(s,r){return new It(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function O_(...t){return Fa._create("startAfter",t,!1)}class Ba extends ks{constructor(e,n,s){super(),this.type=e,this._docOrFields=n,this._inclusive=s}static _create(e,n,s){return new Ba(e,n,s)}_apply(e){const n=gd(e,this.type,this._docOrFields,this._inclusive);return new Ae(e.firestore,e.converter,function(s,r){return new It(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function P_(...t){return Ba._create("endBefore",t,!1)}function gd(t,e,n,s){if(n[0]=$(n[0]),n[0]instanceof Ra)return function(r,i,o,a,c){if(!a)throw new _(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Pt(r))if(u.field.isKeyField())l.push(gr(i,a.key));else{const h=a.data.field(u.field);if(ia(h))throw new _(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new _(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(h)}return new un(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=ai(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new _(p.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let m=0;m<l.length;m++){const y=l[m];if(h[m].field.isKeyField()){if(typeof y!="string")throw new _(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof y}`);if(!ua(i)&&y.indexOf("/")!==-1)throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${y}' contains a slash.`);const v=i.path.child(F.fromString(y));if(!E.isDocumentKey(v))throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const I=new E(v);f.push(gr(o,I))}else{const v=ld(a,c,y);f.push(v)}}return new un(f,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function dl(t,e,n){if(typeof(n=$(n))=="string"){if(n==="")throw new _(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ua(e)&&n.indexOf("/")!==-1)throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(F.fromString(n));if(!E.isDocumentKey(s))throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return gr(t,new E(s))}if(n instanceof ge)return gr(t,n._key);throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ni(n)}.`)}function fl(t,e){if(!Array.isArray(t)||t.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function md(t,e){if(e.isInequality()){const s=Hr(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new _(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=la(t);i!==null&&pd(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function pd(t,e,n){if(!n.isEqual(e))throw new _(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class M_{convertValue(e,n="none"){switch(Vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw C()}}convertObject(e,n){const s={};return Ht(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ka(H(e.latitude),H(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=lh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Xn(e));default:return null}}convertTimestamp(e){const n=mt(e);return new Y(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=F.fromString(e);j(Vh(s));const r=new Yn(s.get(1),s.get(3)),i=new E(s.popFirst(5));return r.isEqual(n)||Qe(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function U_(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function j_(){return new E_("count")}/**
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
 */class Pn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yd extends Ra{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(La("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Qs extends yd{data(e={}){return super.data(e)}}class vd{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Pn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Qs(this._firestore,this._userDataWriter,s.key,s,new Pn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Qs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Pn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Qs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Pn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:F_(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function F_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}/**
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
 */function li(t){t=be(t,ge);const e=be(t.firestore,vt);return y_(Ss(e),t._key).then(n=>_d(e,t,n))}class ui extends M_{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,n)}}function Va(t){t=be(t,Ae);const e=be(t.firestore,vt),n=Ss(e),s=new ui(e);return fd(t._query),v_(n,t._query).then(r=>new vd(e,s,t,r))}function So(t,e,n){t=be(t,ge);const s=be(t.firestore,vt),r=U_(t.converter,e,n);return wd(s,[x_(ai(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Oe.none())])}function B_(t,e,n,...s){t=be(t,ge);const r=be(t.firestore,vt),i=ai(r);let o;return o=typeof(e=$(e))=="string"||e instanceof ii?D_(i,"updateDoc",t._key,e,n,s):A_(i,"updateDoc",t._key,e),wd(r,[o.toMutation(t._key,Oe.exists(!0))])}function V_(t,...e){var n,s,r;t=$(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ul(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ul(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof ge)l=be(t.firestore,vt),u=Kr(t._key.path),c={next:h=>{e[o]&&e[o](_d(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=be(t,Ae);l=be(h.firestore,vt),u=h._query;const f=new ui(l);c={next:m=>{e[o]&&e[o](new vd(l,f,h,m))},error:e[o+1],complete:e[o+2]},fd(t._query)}return function(h,f,m,y){const v=new Ca(y),I=new Ea(f,v,m);return h.asyncQueue.enqueueAndForget(async()=>Ia(await wr(h),I)),()=>{v.Pc(),h.asyncQueue.enqueueAndForget(async()=>Ta(await wr(h),I))}}(Ss(l),u,a,c)}function wd(t,e){return function(n,s){const r=new Le;return n.asyncQueue.enqueueAndForget(async()=>Zw(await m_(n),s,r)),r.promise}(Ss(t),e)}function _d(t,e,n){const s=n.docs.get(e._key),r=new ui(t);return new yd(t,r,e._key,s,new Pn(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function Id(t){return $_(t,{count:j_()})}function $_(t,e){const n=be(t.firestore,vt),s=Ss(n),r=function(i,o){const a=[];for(const c in i)Object.prototype.hasOwnProperty.call(i,c)&&a.push(o(i[c],c,i));return a}(e,(i,o)=>new Jy(new ra(o),i._aggregateType,i._internalFieldPath));return function(i,o,a){const c=new Le;return i.asyncQueue.enqueueAndForget(async()=>{try{if(bt(await g_(i))){const l=await p_(i);c.resolve(xw(l,o,a))}else c.reject(new _(p.UNAVAILABLE,"Failed to get aggregate result because the client is offline."))}catch(l){c.reject(l)}}),c.promise}(s,t._query,r).then(i=>function(o,a,c){const l=new ui(o);return new S_(a,l,c)}(n,t,i))}function Td(){return new xa("serverTimestamp")}(function(t,e=!0){(function(n){wn=n})(ls),sn(new jt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new vt(new Fy(n.getProvider("auth-internal")),new qy(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),dt(Oc,"3.8.4",t),dt(Oc,"3.8.4","esm2017")})();var q_="firebase",W_="9.17.2";/**
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
 */dt(q_,W_,"app");function $a(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function bd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K_=bd,Ed=new as("auth","Firebase",bd());/**
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
 */const gl=new Ro("@firebase/auth");function Ys(t,...e){gl.logLevel<=O.ERROR&&gl.error(`Auth (${ls}): ${t}`,...e)}/**
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
 */function ke(t,...e){throw qa(t,...e)}function Me(t,...e){return qa(t,...e)}function Sd(t,e,n){const s=Object.assign(Object.assign({},K_()),{[e]:n});return new as("auth","Firebase",s).create(e,{appName:t.name})}function H_(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ke(t,"argument-error"),Sd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ed.create(t,...e)}function S(t,e,...n){if(!t)throw qa(e,...n)}function Ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ys(e),new Error(e)}function Xe(t,e){t||Ke(e)}/**
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
 */const ml=new Map;function He(t){Xe(t instanceof Function,"Expected a class definition");let e=ml.get(t);return e?(Xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ml.set(t,e),e)}/**
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
 */function z_(t,e){const n=Oo(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(sr(i,e??{}))return r;ke(r,"already-initialized")}return n.initialize({options:e})}function G_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(He);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Co(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Q_(){return pl()==="http:"||pl()==="https:"}function pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Y_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q_()||vm()||"connection"in navigator)?navigator.onLine:!0}function X_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ns{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xe(n>e,"Short delay should be less than long delay!"),this.isMobile=ym()||wm()}get(){return Y_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wa(t,e){Xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const J_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Z_=new Ns(3e4,6e4);function Tn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zt(t,e,n,s,r={}){return kd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=cs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Cd.fetch()(Nd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function kd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},J_),e);try{const r=new eI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $s(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $s(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw $s(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Sd(t,u,l);ke(t,u)}}catch(r){if(r instanceof Je)throw r;ke(t,"internal-error",{message:String(r)})}}async function xs(t,e,n,s,r={}){const i=await zt(t,e,n,s,r);return"mfaPendingCredential"in i&&ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Nd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Wa(t.config,r):`${t.config.apiScheme}://${r}`}class eI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Me(this.auth,"network-request-failed")),Z_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $s(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Me(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function tI(t,e){return zt(t,"POST","/v1/accounts:delete",e)}async function nI(t,e){return zt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sI(t,e=!1){const n=$(t),s=await n.getIdToken(e),r=Ka(s);S(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Bn(Ui(r.auth_time)),issuedAtTime:Bn(Ui(r.iat)),expirationTime:Bn(Ui(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ui(t){return Number(t)*1e3}function Ka(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ql(n);return r?JSON.parse(r):(Ys("Failed to decode base64 JWT payload"),null)}catch(r){return Ys("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function rI(t){const e=Ka(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Je&&iI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function iI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ir(t){var e;const n=t.auth,s=await t.getIdToken(),r=await gn(t,nI(n,{idToken:s}));S(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lI(i.providerUserInfo):[],a=cI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new xd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function aI(t){const e=$(t);await Ir(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function lI(t){return t.map(e=>{var{providerId:n}=e,s=$a(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function uI(t,e){const n=await kd(t,{},async()=>{const s=cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Nd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await uI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ns;return s&&(S(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(S(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(S(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
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
 */function tt(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=$a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gn(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sI(this,e)}reload(){return aI(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ir(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gn(this,tI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:W,emailVerified:U,isAnonymous:oe,providerData:Se,stsTokenManager:ne}=n;S(W&&ne,e,"internal-error");const mi=ns.fromJSON(this.name,ne);S(typeof W=="string",e,"internal-error"),tt(h,e.name),tt(f,e.name),S(typeof U=="boolean",e,"internal-error"),S(typeof oe=="boolean",e,"internal-error"),tt(m,e.name),tt(y,e.name),tt(v,e.name),tt(I,e.name),tt(D,e.name),tt(A,e.name);const Sn=new Ut({uid:W,auth:e,email:f,emailVerified:U,displayName:h,isAnonymous:oe,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:mi,createdAt:D,lastLoginAt:A});return Se&&Array.isArray(Se)&&(Sn.providerData=Se.map(pi=>Object.assign({},pi))),I&&(Sn._redirectEventId=I),Sn}static async _fromIdTokenResponse(e,n,s=!1){const r=new ns;r.updateFromServerResponse(n);const i=new Ut({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ir(i),i}}/**
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
 */class Ad{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ad.type="NONE";const yl=Ad;/**
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
 */function Xs(t,e,n){return`firebase:${t}:${e}:${n}`}class tn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Xs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Xs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new tn(He(yl),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||He(yl);const o=Xs(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ut._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new tn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new tn(i,e,s))}}/**
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
 */function vl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ld(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pd(e))return"Blackberry";if(Md(e))return"Webos";if(Ha(e))return"Safari";if((e.includes("chrome/")||Rd(e))&&!e.includes("edge/"))return"Chrome";if(Od(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Dd(t=me()){return/firefox\//i.test(t)}function Ha(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rd(t=me()){return/crios\//i.test(t)}function Ld(t=me()){return/iemobile/i.test(t)}function Od(t=me()){return/android/i.test(t)}function Pd(t=me()){return/blackberry/i.test(t)}function Md(t=me()){return/webos/i.test(t)}function hi(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hI(t=me()){var e;return hi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dI(){return _m()&&document.documentMode===10}function Ud(t=me()){return hi(t)||Od(t)||Md(t)||Pd(t)||/windows phone/i.test(t)||Ld(t)}function fI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jd(t,e=[]){let n;switch(t){case"Browser":n=vl(me());break;case"Worker":n=`${vl(me())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${s}`}/**
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
 */class gI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class mI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wl(this),this.idTokenSubscription=new wl(this),this.beforeStateQueue=new gI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ed,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=He(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ir(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&He(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[He(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return S(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function bn(t){return $(t)}class wl{constructor(e){this.auth=e,this.observer=null,this.addObserver=km(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function pI(t,e,n){const s=bn(t);S(s._canInitEmulator,s,"emulator-config-failed"),S(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Fd(e),{host:o,port:a}=yI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||vI()}function Fd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yI(t){const e=Fd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:_l(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:_l(o)}}}function _l(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class za{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,n){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function wI(t,e){return zt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function _I(t,e){return xs(t,"POST","/v1/accounts:signInWithPassword",Tn(t,e))}async function II(t,e){return zt(t,"POST","/v1/accounts:sendOobCode",Tn(t,e))}async function TI(t,e){return II(t,e)}/**
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
 */async function bI(t,e){return xs(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}async function EI(t,e){return xs(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}/**
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
 */class ss extends za{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ss(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ss(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _I(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bI(e,{email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return EI(e,{idToken:n,email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function nn(t,e){return xs(t,"POST","/v1/accounts:signInWithIdp",Tn(t,e))}/**
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
 */const SI="http://localhost";class $t extends za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=$a(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new $t(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,nn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nn(e,n)}buildRequest(){const e={requestUri:SI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cs(n)}return e}}/**
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
 */function CI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kI(t){const e=An(Dn(t)).link,n=e?An(Dn(e)).deep_link_id:null,s=An(Dn(t)).deep_link_id;return(s?An(Dn(s)).link:null)||s||n||e||t}class Ga{constructor(e){var n,s,r,i,o,a;const c=An(Dn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=CI((r=c.mode)!==null&&r!==void 0?r:null);S(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kI(e);try{return new Ga(n)}catch{return null}}}/**
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
 */class En{constructor(){this.providerId=En.PROVIDER_ID}static credential(e,n){return ss._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ga.parseLink(n);return S(s,"argument-error"),ss._fromEmailAndCode(e,s.code,s.tenantId)}}En.PROVIDER_ID="password";En.EMAIL_PASSWORD_SIGN_IN_METHOD="password";En.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class As extends Qa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rt extends As{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";rt.PROVIDER_ID="facebook.com";/**
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
 */class qe extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qe.credential(n,s)}catch{return null}}}qe.GOOGLE_SIGN_IN_METHOD="google.com";qe.PROVIDER_ID="google.com";/**
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
 */class it extends As{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.GITHUB_SIGN_IN_METHOD="github.com";it.PROVIDER_ID="github.com";/**
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
 */class ot extends As{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ot.credential(n,s)}catch{return null}}}ot.TWITTER_SIGN_IN_METHOD="twitter.com";ot.PROVIDER_ID="twitter.com";/**
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
 */async function NI(t,e){return xs(t,"POST","/v1/accounts:signUp",Tn(t,e))}/**
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
 */class qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ut._fromIdTokenResponse(e,s,r),o=Il(s);return new qt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Il(s);return new qt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Il(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tr extends Je{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Tr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Tr(e,n,s,r)}}function Bd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tr._fromErrorAndOperation(t,i,e,s):i})}async function xI(t,e,n=!1){const s=await gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qt._forOperation(t,"link",s)}/**
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
 */async function AI(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await gn(t,Bd(s,r,e,t),n);S(i.idToken,s,"internal-error");const o=Ka(i.idToken);S(o,s,"internal-error");const{sub:a}=o;return S(t.uid===a,s,"user-mismatch"),qt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ke(s,"user-mismatch"),i}}/**
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
 */async function Vd(t,e,n=!1){const s="signIn",r=await Bd(t,s,e),i=await qt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function DI(t,e){return Vd(bn(t),e)}/**
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
 */function RI(t,e,n){var s;S(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function LI(t,e,n){const s=bn(t),r=await NI(s,{returnSecureToken:!0,email:e,password:n}),i=await qt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function OI(t,e,n){return DI($(t),En.credential(e,n))}async function PI(t,e){const n=$(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&RI(n.auth,r,e);const{email:i}=await TI(n.auth,r);i!==t.email&&await t.reload()}/**
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
 */async function MI(t,e){return zt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function UI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=$(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gn(s,MI(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function jI(t,e,n,s){return $(t).onIdTokenChanged(e,n,s)}function FI(t,e,n){return $(t).beforeAuthStateChanged(e,n)}function BI(t,e,n,s){return $(t).onAuthStateChanged(e,n,s)}function VI(t){return $(t).signOut()}const br="__sak";/**
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
 */class $d{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $I(){const t=me();return Ha(t)||hi(t)}const qI=1e3,WI=10;class qd extends $d{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$I()&&fI(),this.fallbackToPolling=Ud(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);dI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,WI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const KI=qd;/**
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
 */class Wd extends $d{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wd.type="SESSION";const Kd=Wd;/**
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
 */function HI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new di(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await HI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}di.receivers=[];/**
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
 */function Ya(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ya("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ue(){return window}function GI(t){Ue().location.href=t}/**
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
 */function Hd(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function QI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XI(){return Hd()?self:null}/**
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
 */const zd="firebaseLocalStorageDb",JI=1,Er="firebaseLocalStorage",Gd="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fi(t,e){return t.transaction([Er],e?"readwrite":"readonly").objectStore(Er)}function ZI(){const t=indexedDB.deleteDatabase(zd);return new Ds(t).toPromise()}function ko(){const t=indexedDB.open(zd,JI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Er,{keyPath:Gd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Er)?e(s):(s.close(),await ZI(),e(await ko()))})})}async function Tl(t,e,n){const s=fi(t,!0).put({[Gd]:e,value:n});return new Ds(s).toPromise()}async function eT(t,e){const n=fi(t,!1).get(e),s=await new Ds(n).toPromise();return s===void 0?null:s.value}function bl(t,e){const n=fi(t,!0).delete(e);return new Ds(n).toPromise()}const tT=800,nT=3;class Qd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ko(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=di._getInstance(XI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QI(),!this.activeServiceWorker)return;this.sender=new zI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ko();return await Tl(e,br,"1"),await bl(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=fi(r,!1).getAll();return new Ds(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qd.type="LOCAL";const sT=Qd;/**
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
 */function rT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iT(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Me("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",rT().appendChild(s)})}function oT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ns(3e4,6e4);/**
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
 */function Yd(t,e){return e?He(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xa extends za{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aT(t){return Vd(t.auth,new Xa(t),t.bypassAuthState)}function cT(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),AI(n,new Xa(t),t.bypassAuthState)}async function lT(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),xI(n,new Xa(t),t.bypassAuthState)}/**
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
 */class Xd{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aT;case"linkViaPopup":case"linkViaRedirect":return lT;case"reauthViaPopup":case"reauthViaRedirect":return cT;default:ke(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uT=new Ns(2e3,1e4);async function hT(t,e,n){const s=bn(t);H_(t,e,Qa);const r=Yd(s,n);return new Lt(s,"signInViaPopup",e,r).executeNotNull()}class Lt extends Xd{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=Ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uT.get())};e()}}Lt.currentPopupAction=null;/**
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
 */const dT="pendingRedirect",Js=new Map;class fT extends Xd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Js.get(this.auth._key());if(!e){try{const s=await gT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Js.set(this.auth._key(),e)}return this.bypassAuthState||Js.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gT(t,e){const n=yT(e),s=pT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function mT(t,e){Js.set(t._key(),e)}function pT(t){return He(t._redirectPersistence)}function yT(t){return Xs(dT,t.config.apiKey,t.name)}async function vT(t,e,n=!1){const s=bn(t),r=Yd(s,e),o=await new fT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const wT=10*60*1e3;class _T{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Me(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wT&&this.cachedEventUids.clear(),this.cachedEventUids.has(El(e))}saveEventToCache(e){this.cachedEventUids.add(El(e)),this.lastProcessedEventTime=Date.now()}}function El(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jd(t);default:return!1}}/**
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
 */async function TT(t,e={}){return zt(t,"GET","/v1/projects",e)}/**
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
 */const bT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ET=/^https?/;async function ST(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TT(t);for(const n of e)try{if(CT(n))return}catch{}ke(t,"unauthorized-domain")}function CT(t){const e=Co(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ET.test(n))return!1;if(bT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const kT=new Ns(3e4,6e4);function Sl(){const t=Ue().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NT(t){return new Promise((e,n)=>{var s,r,i;function o(){Sl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sl(),n(Me(t,"network-request-failed"))},timeout:kT.get()})}if(!((r=(s=Ue().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ue().gapi)===null||i===void 0)&&i.load)o();else{const a=oT("iframefcb");return Ue()[a]=()=>{gapi.load?o():n(Me(t,"network-request-failed"))},iT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Zs=null,e})}let Zs=null;function xT(t){return Zs=Zs||NT(t),Zs}/**
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
 */const AT=new Ns(5e3,15e3),DT="__/auth/iframe",RT="emulator/auth/iframe",LT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PT(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wa(e,RT):`https://${t.config.authDomain}/${DT}`,s={apiKey:e.apiKey,appName:t.name,v:ls},r=OT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${cs(s).slice(1)}`}async function MT(t){const e=await xT(t),n=Ue().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:PT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Me(t,"network-request-failed"),a=Ue().setTimeout(()=>{i(o)},AT.get());function c(){Ue().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const UT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jT=500,FT=600,BT="_blank",VT="http://localhost";class Cl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $T(t,e,n,s=jT,r=FT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},UT),{width:s.toString(),height:r.toString(),top:i,left:o}),l=me().toLowerCase();n&&(a=Rd(l)?BT:n),Dd(l)&&(e=e||VT,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(hI(l)&&a!=="_self")return qT(e||"",a),new Cl(null);const h=window.open(e||"",a,u);S(h,t,"popup-blocked");try{h.focus()}catch{}return new Cl(h)}function qT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const WT="__/auth/handler",KT="emulator/auth/handler";function kl(t,e,n,s,r,i){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ls,eventId:r};if(e instanceof Qa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof As){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${HT(t)}?${cs(a).slice(1)}`}function HT({config:t}){return t.emulator?Wa(t,KT):`https://${t.authDomain}/${WT}`}/**
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
 */const ji="webStorageSupport";class zT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kd,this._completeRedirectFn=vT,this._overrideRedirectResult=mT}async _openPopup(e,n,s,r){var i;Xe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=kl(e,n,s,Co(),r);return $T(e,o,Ya())}async _openRedirect(e,n,s,r){return await this._originValidation(e),GI(kl(e,n,s,Co(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Xe(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await MT(e),s=new _T(e);return n.register("authEvent",r=>(S(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ji,{type:ji},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ji];o!==void 0&&n(!!o),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ST(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ud()||Ha()||hi()}}const GT=zT;var Nl="@firebase/auth",xl="0.21.4";/**
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
 */class QT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XT(t){sn(new jt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{S(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),S(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jd(t)},u=new mI(a,c,l);return G_(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),sn(new jt("auth-internal",e=>{const n=bn(e.getProvider("auth").getImmediate());return(s=>new QT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Nl,xl,YT(t)),dt(Nl,xl,"esm2017")}/**
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
 */const JT=5*60,ZT=Xl("authIdTokenMaxAge")||JT;let Al=null;const eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ZT)return;const r=n==null?void 0:n.token;Al!==r&&(Al=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function tb(t=tu()){const e=Oo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=z_(t,{popupRedirectResolver:GT,persistence:[sT,KI,Kd]}),s=Xl("authTokenSyncURL");if(s){const i=eb(s);FI(n,i,()=>i(n.currentUser)),jI(n,o=>i(o))}const r=Yl("auth");return r&&pI(n,`http://${r}`),n}XT("Browser");const{VITE_API_KEY:nb,VITE_AUTH_DOMAIN:sb,VITE_PROJECT_ID:rb,VITE_MESSAGE_SENDER_ID:ib,VITE_STORAGE_BUCKET:ob,VITE_APP_ID:ab}={VITE_API_KEY:"AIzaSyD9xKYChzMoHnq4ba4WYo_qx25dMrAL90Q",VITE_AUTH_DOMAIN:"lossom-214c3.firebaseapp.com",VITE_PROJECT_ID:"lossom-214c3",VITE_STORAGE_BUCKET:"lossom-214c3.appspot.com",VITE_MESSAGE_SENDER_ID:"483685773935",VITE_APP_ID:"1:483685773935:web:02aab7999f1df1b4bc139a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},cb={apiKey:nb,authDomain:sb,projectId:rb,storageBucket:ob,messagingSenderId:ib,appId:ab},Zd=eu(cb),Rs=tb(Zd),Ce=b_(Zd),lb=new qe,gi=async t=>{let e=[];return(await Va(ri(Ce,t))).forEach(s=>{e.push(s.data())}),e};function ef(t="users"){const[e,n]=g.useState(!1),[s,r]=g.useState(null),i=g.useCallback(async(o,a={})=>{const c=yt(Ce,t,o.uid),l=yt(Ce,"users",o.uid,"flowerList","0");n(!0);try{if((await li(c)).exists())throw new ReferenceError("이미 Firestore에 가입 등록된 사용자입니다.");{const h=Td(),{email:f,displayName:m,uid:y}=o;await So(c,{createAt:h,uid:y,displayName:m,email:f,userNickname:"",url:"",isMade:!1,bgSrc:"",...a}),await So(l,{nickname:"6lossom",contents:"환영합니다.",flowerSrc:"cherry-blossom1",createAt:h})}}catch(u){r(u)}finally{n(!1)}},[t]);return g.useMemo(()=>({isLoading:e,error:s,createAuthUser:i}),[i,s,e])}function ub(t){const[e,n]=g.useState(!1),[s,r]=g.useState(null),[i,o]=g.useState(null),a=g.useCallback(async c=>{n(!0);try{if(c){const l=yt(Ce,t,c),u=await li(l);if(u.exists()){let h={id:u.id,...u.data()};o(h)}}else{const l=ri(Ce,t),{docs:u}=await Va(l),h=u.map(f=>({id:f.id,...f.data()}));o(h)}}catch(l){r(l)}finally{n(!1)}},[t]);return g.useMemo(()=>({isLoading:e,error:s,data:i,readData:a}),[a,s,e,i])}const hb=({provider:t,text:e,className:n,style:s})=>{const{createAuthUser:r,isLoading:i,error:o}=ef("users"),{readData:a,data:c}=ub("users"),l=Be(),u=async()=>{const{user:h}=await hT(Rs,t),{uid:f}=h;localStorage.setItem("uid",JSON.stringify(f)),await r(h),await a(f),l("/make-tree")};return d.jsx(d.Fragment,{children:d.jsx("button",{className:Ie(s.loginButton,n),onClick:u,children:e})})},db="_ProjectInfoBackground_n2qpt_7",fb="_ProjectInfoContainer_n2qpt_19",gb="_projectInfoClose_n2qpt_30",Fi={ProjectInfoBackground:db,ProjectInfoContainer:fb,projectInfoClose:gb},mb="_A11yHidden_1urfp_1",pb="_focusable_1urfp_18",Dl={A11yHidden:mb,focusable:pb},mn=g.forwardRef(function({as:e="span",focusable:n=!1,className:s="",...r},i){const o=`${Dl.A11yHidden} ${n?Dl.focusable:""} ${s}`.trim();return d.jsx(e,{ref:i,className:o,...r})}),tf=({handleModal:t})=>d.jsx(d.Fragment,{children:d.jsx("div",{className:Fi.ProjectInfoBackground,children:d.jsxs("figure",{className:Fi.ProjectInfoContainer,children:[d.jsx(mn,{as:"figcaption",children:"벚꽃이 지면은 어떤 서비스 인가요? 벚꽃이 지면은 벚꽃 개화시기에 맞춰 메세지를 볼 수 있는 롤링페이퍼 서비스입니다. 벚꽃이 지면을 통해 전하지 못한 마음을 전해보세요! 롤링페이퍼란 무엇인가요? 특정 사람에 대해 어떤 주제를 중심으로 주변 사람들이 의견을 적어 놓은 것을 말해요! 이용 방법은 어떻게 되나요? 첫 번째로, 내 벚꽃나무를 만들고 SNS에 링크를 공유해요. 두 번째로, 친구들이 내 벚꽃나무에 벚꽃을 달아줄 수 있어요. 세 번째로, 벚꽃 안에는 친구가 보내준 메세지가 들어있어요. 마지막으로, 모든 편지들은 벚꽃이 질 때 오픈 가능해요! 벚꽃이 지면은 누가 만들었나요? 벚꽃이 지면은 멋쟁이 사자처럼 프론트 엔드 스쿨 4기 수강생 네 명이 함께 만든 서비스입니다!"}),d.jsx("button",{className:Fi.projectInfoClose,type:"button",alt:"닫기",onClick:t,children:"close"})]})})}),yb="_clickMe_9l6uf_7",vb="_clickMeText_9l6uf_37",Rl={clickMe:yb,clickMeText:vb},wb=({handleModal:t})=>d.jsx(d.Fragment,{children:d.jsx("button",{onClick:t,className:Rl.clickMe,type:"button",children:d.jsx("span",{className:Rl.clickMeText,children:"click me!"})})});function Ja(){const[t,e]=g.useState(!1),[n,s]=g.useState(null),r=g.useCallback(async()=>{e(!0);try{return await VI(Rs)}catch(i){s(i)}finally{e(!1)}},[]);return g.useMemo(()=>({isLoading:t,error:n,signOut:r}),[t,n,r])}const _b=()=>{const{signOut:t}=Ja(),[e,n]=g.useState(!1),s=()=>{n(!e)},r=Be();return window.onload=()=>{t(),localStorage.clear()},d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:ae.homeContainer,children:[d.jsxs("div",{className:ae.homeLogo,children:[d.jsxs("div",{className:ae.homeMainTitle,children:[d.jsx("figure",{className:ae.moonLogo,children:d.jsx(mn,{as:"figcaption",children:"초승달과 벚꽃이 함께있는 모양의 아이콘입니다."})}),d.jsxs("h1",{className:ae.homeTitleInfo,"aria-label":"벚꽃이 지면",children:[d.jsx("span",{className:ae.homeTitleShadow,children:"벚꽃이 지면"}),d.jsx("span",{className:ae.homeTitleBorder,children:"벚꽃이 지면"}),d.jsx("span",{className:ae.homeTitle,children:"벚꽃이 지면"})]})]}),d.jsx("h2",{className:ae.homeSubTitle,children:"벚꽃이 지면 당신의 메세지가 전달됩니다."})]}),d.jsxs("div",{className:ae.tree,children:[d.jsx("figure",{className:ae.blossomTree,children:d.jsx(mn,{as:"figcaption",children:"벚꽃이지면 프로젝트의 메인 벚꽃나무 이미지입니다."})}),d.jsx(wb,{handleModal:s})]}),d.jsxs("div",{className:ae.loginButtonList,children:[d.jsx("button",{onClick:()=>r("/signin"),className:Ie(ae.loginButton,ae.generalButton),children:"로그인"}),d.jsx(hb,{style:ae,className:ae.googleButton,provider:lb,text:"구글 계정으로 계속하기"})]})]}),e?d.jsx(tf,{handleModal:s}):null]})},Ib="_messageWrap_uui1f_7",Tb="_textLength_uui1f_16",bb="_authorContainer_uui1f_23",Eb="_author_uui1f_23",Sb="_contentContainer_uui1f_44",Cb="_content_uui1f_44",St={messageWrap:Ib,textLength:Tb,authorContainer:bb,author:Eb,contentContainer:Sb,content:Cb},kb="_modalBackground_1oeg3_7",Nb="_enrollWrap_1oeg3_26",xb="_noticeDetail_1oeg3_43",Ab="_buttonList_1oeg3_58",Db="_cancel_1oeg3_77",Rb="_done_1oeg3_86",Ct={modalBackground:kb,enrollWrap:Nb,noticeDetail:xb,buttonList:Ab,cancel:Db,done:Rb},Lb=({handleCloseModal:t,handleComplete:e})=>d.jsx("div",{className:Ct.modalBackground,children:d.jsxs("div",{className:Ct.enrollWrap,children:[d.jsx("div",{className:Ct.notice,children:d.jsx("h5",{children:"편지를 남길까요?"})}),d.jsxs("div",{className:Ct.noticeDetail,children:[d.jsx("p",{children:"한 번 남긴 편지는 삭제 할 수 없어요!"}),d.jsx("p",{children:"신중한 결정 부탁드립니다!"})]}),d.jsxs("div",{className:Ct.buttonList,children:[d.jsx("button",{className:Ct.cancel,onClick:t,children:"취소"}),d.jsx("button",{className:Ct.done,onClick:e,children:"완료"})]})]})}),Ob="_longButton_ydp3u_7",Pb={longButton:Ob},Ll=({text:t,disabled:e=!1,onClick:n})=>d.jsx(d.Fragment,{children:d.jsx("button",{disabled:e,onClick:n,className:Pb.longButton,children:t})}),Mb="_LongButtonContainer_91bfh_7",Ub={LongButtonContainer:Mb},No=({firstText:t,firstClick:e,disabled:n,secondText:s,secondClick:r})=>d.jsxs("div",{className:Ub.LongButtonContainer,children:[d.jsx(Ll,{text:t,disabled:n,onClick:e}),d.jsx(Ll,{text:s,onClick:r})]}),jb=({authorInput:t,contentInput:e,state:n,text:s,handleChangeState:r})=>(g.useState(!1),d.jsx("div",{className:St.messageInputContainer,children:d.jsxs("div",{className:St.messageWrap,children:[d.jsx("div",{className:St.authorContainer,children:d.jsx("input",{className:St.author,name:"author",placeholder:"작성자이름을 적어주세요",type:"text",value:n.author,onChange:r,ref:t,maxLength:6})}),d.jsx("div",{className:St.contentContainer,children:d.jsx("textarea",{className:St.content,name:"content",placeholder:"메세지를 작성해주세요",type:"text",value:n.content,onChange:r,ref:e,maxLength:500})}),d.jsxs("p",{className:St.textLength,children:[s.length," / 500"]})]})})),Fb="_makeTreeContainer_1gocs_7",Bb="_header_1gocs_20",Vb="_headerTitle_1gocs_35",$b="_userNickname_1gocs_48",qb="_originTreeContainer_1gocs_77",Wb="_makeTreeCustomContainer_1gocs_82",Kb="_makeTreeCustom_1gocs_82",Ve={makeTreeContainer:Fb,header:Bb,headerTitle:Vb,userNickname:$b,originTreeContainer:qb,makeTreeCustomContainer:Wb,makeTreeCustom:Kb},Hb="_subTitle_1gymj_7",zb={subTitle:Hb},Gb="/assets/message-9547ed1e.png",Sr=({className:t="",subText:e})=>d.jsxs("div",{className:Ie(zb.subTitle,t),children:[e.includes("벚꽃나무")?null:d.jsx("img",{src:Gb}),d.jsx("h3",{children:e})]}),Qb="_backgroundCustomItem_1ogdc_7",Yb="_backgroundCustomButton_1ogdc_13",Xb="_backgroundCustomSelectText_1ogdc_34",Bi={backgroundCustomItem:Qb,backgroundCustomButton:Yb,backgroundCustomSelectText:Xb},Jb=({id:t,smallSrc:e,handleSelect:n})=>d.jsx("li",{className:Bi.backgroundCustomItem,children:d.jsxs("button",{onClick:n,className:Bi.backgroundCustomButton,type:"button",id:t,children:[d.jsx("img",{src:e,alt:`배경${t}`}),d.jsx("span",{className:Bi.backgroundCustomSelectText,children:"SELECT"})]})},t),Zb="_backgroundCustomList_1tyn3_7",eE={backgroundCustomList:Zb},tE=()=>{const{backgroundImageList:t,handleSelect:e}=g.useContext(of);return d.jsx("ul",{className:eE.backgroundCustomList,children:t.map(n=>d.jsx(Jb,{smallSrc:n.smallSrc,handleSelect:e},n.id))})},nE="_shortButton_1ut7v_7",sE="_buttonImage_1ut7v_33",Vi={shortButton:nE,buttonImage:sE},rE="/assets/github-logo-60f99b69.png";function Vn({type:t,onClick:e,text:n,className:s}){return d.jsx(d.Fragment,{children:d.jsxs("button",{type:t||null,onClick:e||null,className:s?Ie(s,Vi.shortButton):Vi.shortButton,children:[n==="Github"?d.jsx("img",{className:Vi.buttonImage,src:rE}):null,n]})})}const iE="_ShortButtonList_vepa0_7",oE={ShortButtonList:iE},nf=({firstText:t,firstClick:e,secondText:n,secondClick:s,type:r})=>d.jsxs("div",{className:oE.ShortButtonList,children:[d.jsx(Vn,{onClick:e,text:t}),d.jsx(Vn,{onClick:s||null,text:n,type:r})]}),aE="_blossomTree_dr75f_7",cE={blossomTree:aE},sf=()=>d.jsx("div",{className:cE.blossomTree}),lE="/assets/select-bg-pink-5d99d628.png",uE="/assets/select-bg-night-f2910adf.png",hE="/assets/select-bg-sky-cb1e8a17.png",dE="/assets/bg-pink-b7ef3b27.png",fE="/assets/bg-night-ab5492a0.png",gE="/assets/bg-sky-fdca7656.png";function rf(t){const[e,n]=g.useState(!1),[s,r]=g.useState(null),i=g.useCallback(async(o,a)=>{const c=yt(Ce,t,o);n(!0);try{await B_(c,a)}catch(l){r(l)}finally{n(!1)}},[t]);return g.useMemo(()=>({isLoading:e,error:s,updateData:i}),[s,e,i])}const Ol=[{id:1,bigSrc:gE,isSelected:!1,smallSrc:hE},{id:2,bigSrc:fE,isSelected:!1,smallSrc:uE},{id:3,bigSrc:dE,isSelected:!1,smallSrc:lE}],of=g.createContext(),mE=()=>{const t=Be(),{updateData:e}=rf("users"),[n,s]=g.useState(""),[r,i]=g.useState("/src/assets/custom/bg-pink.png"),o=JSON.parse(localStorage.getItem("uid")),a=h=>{const f=document.querySelector(".MakeTreePage"),m=h.target.closest("button");Ol.map(y=>{if(parseInt(m.id)===y.id){f.style=`background: center / cover no-repeat url(${y.bigSrc})`,i(y.bigSrc);return}})},c=()=>{e(o,{bgSrc:r,isMade:!0,url:`https://localhost:3000/share-tree/${o}`,userNickname:n}),t(`/share-tree/${o}`,{replace:!0}),history.pushState(null,null,location.href),window.onpopstate=function(h){history.go(1)}},l={backgroundImageList:Ol,setSelectBg:i,handleSelect:a};g.useLayoutEffect(()=>{gi("users").then(h=>{h.map(f=>{f.uid===o&&f.isMade&&t(`/share-tree/${o}`)})})},[]);const u=h=>{s(h.target.value)};return d.jsx(of.Provider,{value:l,children:d.jsxs("form",{onSubmit:c,className:Ie("MakeTreePage",Ve.makeTreeContainer),children:[d.jsxs("header",{className:Ve.header,children:[d.jsx(Sr,{subText:"벚꽃나무에 이름을 적어주세요"}),d.jsxs("div",{className:Ve.headerTitle,children:[d.jsx("input",{type:"text",name:"userNickname",value:n,maxLength:6,placeholder:"닉네임",onChange:u,className:Ve.userNickname,required:!0}),d.jsx("span",{children:"님의 벚꽃나무"})]})]}),d.jsx("div",{className:Ve.originTreeContainer,children:d.jsx(sf,{className:Ve.originTree})}),d.jsx("div",{className:Ve.makeTreeCustomContainer,children:d.jsxs("div",{className:Ve.makeTreeCustom,children:[d.jsx(Sr,{className:Ve.makeTreeCustomText,subText:"벚꽃나무의 하늘을 선택해주세요."}),d.jsx(tE,{}),d.jsx(nf,{firstText:"취소",firstClick:()=>{window.location.replace("/")},secondText:"완료",type:"submit"})]})})]})})},pE="_signUpPageWrapper_1hyxb_7",yE="_toSignInPage_1hyxb_25",vE="_signUpPageContainer_1hyxb_44",wE="_signUpPageTitle_1hyxb_50",_E="_toSignInPageWithDescription_1hyxb_71",IE="_toSignInPageLink_1hyxb_75",TE="_form_1hyxb_78",bE="_signUpButton_1hyxb_86",EE="_resetButton_1hyxb_116",SE="_validatePassed_1hyxb_146",CE="_notificationStyling_1hyxb_150",kE="_animateNotification_1hyxb_160",NE="_fadeInAndOut_1hyxb_1",M={signUpPageWrapper:pE,toSignInPage:yE,signUpPageContainer:vE,signUpPageTitle:wE,toSignInPageWithDescription:_E,toSignInPageLink:IE,form:TE,signUpButton:bE,resetButton:EE,validatePassed:SE,notificationStyling:CE,animateNotification:kE,fadeInAndOut:NE};function xE(t=!1){const[e,n]=g.useState(!1),[s,r]=g.useState(null),[i,o]=g.useState(null),a=g.useCallback(async(c,l,u)=>{n(!0);try{const h=await LI(Rs,c,l),{user:f}=h;return u&&f&&await UI(f,{displayName:u}),t&&f&&await PI(f),o(f),f}catch(h){r(h)}finally{n(!1)}},[t]);return g.useMemo(()=>({isLoading:e,error:s,user:i,signUp:a}),[e,s,i,a])}function af(){const[t,e]=g.useState(!1),[n,s]=g.useState(null),[r,i]=g.useState(null);return g.useEffect(()=>(e(!0),BI(Rs,o=>{i(o),e(!1)},o=>{s(o),e(!1)})),[]),g.useMemo(()=>({isLoading:t,error:n,user:r}),[t,n,r])}const AE="_FormInput_7upog_7",DE="_FormInputInline_7upog_14",RE="_FormInputVertical_7upog_17",LE="_label_7upog_20",OE="_inputed_7upog_20",PE="_input_7upog_20",ME="_validate_7upog_67",UE="_passwordVisible_7upog_77",jE="_passwordInvisible_7upog_89",Ne={FormInput:AE,FormInputInline:DE,FormInputVertical:RE,label:LE,inputed:OE,input:PE,validate:ME,passwordVisible:UE,passwordInvisible:jE};var xt={},FE={get exports(){return xt},set exports(t){xt=t}},BE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",VE=BE,$E=VE;function cf(){}function lf(){}lf.resetWarningCache=cf;var qE=function(){function t(s,r,i,o,a,c){if(c!==$E){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:lf,resetWarningCache:cf};return n.PropTypes=n,n};FE.exports=qE();function ct({name:t,label:e,type:n,invisibleLabel:s,vertical:r,...i}){const o=g.useId(),a=g.useRef(null),[c,l]=g.useState(!1),[u,h]=g.useState(n),f=()=>{u==="text"?h("password"):u==="password"&&h("text"),l(y=>!y)};g.useEffect(()=>{const y=a.current,v=y.parentElement;y.addEventListener("blur",I=>{I.target.value.length>0?v.classList.add(Ne.inputed):v.classList.remove(Ne.inputed)})},[]);const m=`${Ne.FormInput} ${r?Ne.FormInputVertical:""}`.trim();return d.jsxs("div",{className:m,children:[WE(o,e,s),(t==="password"||t==="passwordConfirm")&&c||(t==="password"||t==="passwordConfirm")&&!c?d.jsx("input",{name:t,ref:a,id:o,type:u,className:Ne.input,...i}):"",t==="password"||t==="passwordConfirm"?"":d.jsx("input",{name:t,ref:a,id:o,type:n,className:Ne.input,...i}),t==="name"||t==="email"||t==="password"||t==="passwordConfirm"?d.jsx("span",{className:Ne.validate}):"",t==="password"&&c||t==="passwordConfirm"&&c?d.jsx("button",{type:"button",className:Ne.passwordVisible,onClick:f}):"",t==="password"&&!c||t==="passwordConfirm"&&!c?d.jsx("button",{type:"button",className:Ne.passwordInvisible,onClick:f}):""]})}ct.defualtProps={type:"text",invisibleLabel:!1,vertical:!1,inputed:!1};ct.propTypes={type:xt.string,label:xt.string.isRequired,invisibleLabel:xt.bool,vertical:xt.bool,inputed:xt.bool};function WE(t,e,n){return n?d.jsx(mn,{as:"label",htmlFor:t,className:Ne.label,children:e}):d.jsx("label",{htmlFor:t,className:Ne.label,children:e})}const ze=({className:t,text:e})=>d.jsx(d.Fragment,{children:d.jsx("span",{className:t,children:e})}),KE={name:"",email:"",password:"",passwordConfirm:""};function HE(){const{isLoading:t,signUp:e}=xE(),{createAuthUser:n}=ef(),{isLoading:s,error:r,user:i}=af(),o=Be(),a=g.useRef(KE),c=async u=>{u.preventDefault();const{name:h,email:f,password:m,passwordConfirm:y}=a.current;if(!h||h.trim().length<2||h.trim().length>8){u.target.childNodes[0].classList.add(M.animateNotification),setTimeout(()=>{u.target.childNodes[0].classList.remove(M.animateNotification)},2e3);return}if(!f||!f.includes("@")||f.substring(0,f.indexOf("@"))===""||f.substring(f.indexOf("@")+1)===""||!f.substring(f.indexOf("@")+1).includes(".")||f.substring(0,f.indexOf("."))===""||f.substring(f.indexOf(".")+1)===""||f.substring(f.indexOf(".")-1,f.indexOf("."))==="@"){u.target.childNodes[1].classList.add(M.animateNotification),setTimeout(()=>{u.target.childNodes[1].classList.remove(M.animateNotification)},2e3);return}if(!m||m.trim().length<6){u.target.childNodes[2].classList.add(M.animateNotification),setTimeout(()=>{u.target.childNodes[2].classList.remove(M.animateNotification)},2e3);return}if(!Object.is(m,y)){u.target.childNodes[2].classList.add(M.animateNotification),setTimeout(()=>{u.target.childNodes[2].classList.remove(M.animateNotification)},2e3);return}const v=await e(f,m,h);v||(u.target.childNodes[3].classList.add(M.animateNotification),setTimeout(()=>{u.target.childNodes[3].classList.remove(M.animateNotification)},2e3)),await n(v)},l=u=>{const{name:h,value:f}=u.target;a.current[h]=f,h==="name"&&f.trim().length>1&&f.trim().length<9?u.target.nextSibling.classList.add(M.validatePassed):h==="name"&&(!f||f.trim().length<2||f.trim().length>8)&&u.target.nextSibling.classList.remove(M.validatePassed),h==="email"&&f.includes("@")&&f.substring(0,f.indexOf("@"))!==""&&f.substring(f.indexOf("@")+1)!==""&&f.substring(f.indexOf("@")+1).includes(".")&&f.substring(0,f.indexOf("."))!==""&&f.substring(f.indexOf(".")+1)!==""&&f.substring(f.indexOf(".")-1,f.indexOf("."))!=="@"?u.target.nextSibling.classList.add(M.validatePassed):h==="email"&&(!f.includes("@")||f.substring(0,f.indexOf("@"))===""||f.substring(f.indexOf("@")+1)===""||!f.substring(f.indexOf("@")+1).includes(".")||f.substring(0,f.indexOf("."))===""||f.substring(f.indexOf(".")+1)===""||f.substring(f.indexOf(".")-1,f.indexOf("."))==="@")&&u.target.nextSibling.classList.remove(M.validatePassed),(h==="password"||h==="passwordConfirm")&&f.trim().length>5?u.target.nextSibling.classList.add(M.validatePassed):(h==="password"||h==="passwordConfirm")&&(!f||f.trim().length<6)&&u.target.nextSibling.classList.remove(M.validatePassed)};return s?d.jsx("div",{role:"alert",children:"페이지를 준비 중입니다."}):r?d.jsxs("div",{role:"alert",children:["오류! ",r.message]}):(i&&(localStorage.setItem("uid",JSON.stringify(i.uid)),o("/make-tree")),d.jsx("div",{className:M.signUpPageWrapper,children:d.jsxs("div",{className:M.signUpPageContainer,children:[d.jsx("h2",{className:M.signUpPageTitle,children:"회원가입"}),d.jsxs("form",{className:M.form,onSubmit:c,children:[d.jsx(ze,{className:M.notificationStyling,text:"이름을 확인해주세요 !"}),d.jsx(ze,{className:M.notificationStyling,text:"이메일 확인해주세요 !"}),d.jsx(ze,{className:M.notificationStyling,text:"비밀번호를 확인해주세요 !"}),d.jsx(ze,{className:M.notificationStyling,text:"이미 가입된 회원정보입니다 !"}),d.jsx(ct,{name:"name",label:"이름",onChange:l}),d.jsx(ct,{name:"email",type:"email",label:"이메일",onChange:l}),d.jsx(ct,{name:"password",type:"password",label:"비밀번호",onChange:l}),d.jsx(ct,{name:"passwordConfirm",type:"password",label:"비밀번호 확인",onChange:l}),d.jsx("button",{type:"submit",disabled:t,className:M.signUpButton,children:t?"회원가입 중...":"회원가입"}),d.jsx("button",{type:"reset",className:M.resetButton,children:"초기화"})]}),d.jsxs("p",{className:M.toSignInPageWithDescription,children:["이미 가입한 사용자라면"," ",d.jsx(Hl,{to:"/signin",className:M.toSignInPageLink,children:"로그인"}),"을 해주세요 !"]}),d.jsx("button",{onClick:()=>o("/signin"),className:M.toSignInPage,children:"<"})]})}))}const zE="_signInPageWrapper_64g07_7",GE="_toHomePage_64g07_25",QE="_signInPageContainer_64g07_44",YE="_signInPageTitle_64g07_50",XE="_toSignUpPage_64g07_66",JE="_toSignUpPageWithDescription_64g07_96",ZE="_toSignUpPageLink_64g07_100",e0="_form_64g07_103",t0="_signInButton_64g07_111",n0="_validatePassed_64g07_142",s0="_notificationStyling_64g07_146",r0="_animateNotification_64g07_156",i0="_fadeInAndOut_64g07_1",ce={signInPageWrapper:zE,toHomePage:GE,signInPageContainer:QE,signInPageTitle:YE,toSignUpPage:XE,toSignUpPageWithDescription:JE,toSignUpPageLink:ZE,form:e0,signInButton:t0,validatePassed:n0,notificationStyling:s0,animateNotification:r0,fadeInAndOut:i0};function o0(){const[t,e]=g.useState(!1),[n,s]=g.useState(null),[r,i]=g.useState(null),o=g.useCallback(async(a,c)=>{e(!0);try{const l=await OI(Rs,a,c);i(l)}catch(l){s(l)}finally{e(!1)}},[]);return g.useMemo(()=>({isLoading:t,error:n,user:r,signIn:o}),[t,n,r,o])}const a0={email:"",password:""};function c0(){const t=g.useRef(a0),{isLoading:e,signIn:n}=o0(),{isLoading:s,error:r,user:i}=af(),o=Be(),a=async l=>{l.preventDefault();const{email:u,password:h}=t.current;await n(u,h),i||(l.target.childNodes[0].classList.add(ce.animateNotification),setTimeout(()=>{l.target.childNodes[0].classList.remove(ce.animateNotification)},2e3))},c=l=>{const{name:u,value:h}=l.target;t.current[u]=h,u==="email"&&h.includes("@")&&h.substring(0,h.indexOf("@"))!==""&&h.substring(h.indexOf("@")+1)!==""&&h.substring(h.indexOf("@")+1).includes(".")&&h.substring(0,h.indexOf("."))!==""&&h.substring(h.indexOf(".")+1)!==""&&h.substring(h.indexOf(".")-1,h.indexOf("."))!=="@"?l.target.nextSibling.classList.add(ce.validatePassed):u==="email"&&(!h.includes("@")||h.substring(0,h.indexOf("@"))===""||h.substring(h.indexOf("@")+1)===""||!h.substring(h.indexOf("@")+1).includes(".")||h.substring(0,h.indexOf("."))===""||h.substring(h.indexOf(".")+1)===""||h.substring(h.indexOf(".")-1,h.indexOf("."))==="@")&&l.target.nextSibling.classList.remove(ce.validatePassed),u==="password"&&h.trim().length>5?l.target.nextSibling.classList.add(ce.validatePassed):u==="password"&&(!h||h.trim().length<6)&&l.target.nextSibling.classList.remove(ce.validatePassed)};return s?d.jsx("div",{role:"alert",children:"페이지를 준비 중입니다."}):r?d.jsxs("div",{role:"alert",children:["오류! ",r.message]}):(i&&(localStorage.setItem("uid",JSON.stringify(i.uid)),o("/make-tree")),d.jsx("div",{className:ce.signInPageWrapper,children:d.jsxs("div",{className:ce.signInPageContainer,children:[d.jsx("h2",{className:ce.signInPageTitle,children:"로그인"}),d.jsxs("form",{className:ce.form,onSubmit:a,children:[d.jsx(ze,{className:ce.notificationStyling,text:"이메일 또는 비밀번호를 확인해주세요 !"}),d.jsx(ct,{name:"email",type:"email",label:"이메일",onChange:c}),d.jsx(ct,{name:"password",type:"password",label:"비밀번호",onChange:c}),d.jsx("button",{type:"submit",disabled:e,className:ce.signInButton,children:e?"로그인 중...":"로그인"})]}),d.jsx("button",{onClick:()=>o("/signup"),className:ce.toSignUpPage,children:"회원가입"}),d.jsxs("p",{className:ce.toSignUpPageWithDescription,children:["가입한 계정이 없다면"," ",d.jsx(Hl,{to:"/signup",className:ce.toSignUpPageLink,children:"회원가입"}),"을 해주세요 !"]}),d.jsx("button",{onClick:()=>o("/"),className:ce.toHomePage,children:"<"})]})}))}const l0="_shareTreeContainer_g9blc_7",u0="_blossomTreeContainer_g9blc_30",h0="_flowerList_g9blc_38",d0="_pagination_g9blc_44",f0="_originTreeContainer_g9blc_57",g0="_swiperButton_g9blc_61",m0="_arrowButton_g9blc_66",p0="_leftButton_g9blc_75",y0="_rightButton_g9blc_80",v0="_moveIn_g9blc_86",w0="_notificationContainer_g9blc_90",_0="_notificationStyling_g9blc_94",I0="_animateNotification_g9blc_108",T0="_fadeInAndOut_g9blc_1",G={shareTreeContainer:l0,blossomTreeContainer:u0,flowerList:h0,pagination:d0,originTreeContainer:f0,swiperButton:g0,arrowButton:m0,leftButton:p0,rightButton:y0,moveIn:v0,notificationContainer:w0,notificationStyling:_0,animateNotification:I0,fadeInAndOut:T0},Ls=g.createContext(),b0=g.createContext(),E0="_headerTitle_2vnzc_7",S0={headerTitle:E0},uf=({userName:t})=>d.jsx(d.Fragment,{children:d.jsxs("h2",{className:S0.headerTitle,children:[t,d.jsx("span",{children:"님의 벚꽃나무"})]})}),C0="_header_13kte_7",k0={header:C0},hf=({userName:t,className:e,subText:n})=>d.jsxs("header",{className:k0.header,children:[d.jsx(uf,{userName:t}),d.jsx(Sr,{className:e,subText:n})]}),N0="_hamburgerButton_m5uyz_1",x0="_hamburger_m5uyz_1",A0="_burger1_m5uyz_19",D0="_burger2_m5uyz_20",R0="_burger3_m5uyz_21",xn={hamburgerButton:N0,hamburger:x0,burger1:A0,burger2:D0,burger3:R0};function L0(){return d.jsx(d.Fragment,{children:d.jsx("button",{className:xn.hamburgerButton,children:d.jsxs("div",{className:xn.hamburger,children:[d.jsx("div",{className:xn.burger1}),d.jsx("div",{className:xn.burger2}),d.jsx("div",{className:xn.burger3})]})})})}const O0="_sideMenuContainer_1fq7o_8",P0="_sideMenuBackground_1fq7o_17",M0="_sideMenuBar_1fq7o_29",U0="_sideMenuTitle_1fq7o_39",j0="_sideMenuNav_1fq7o_57",F0="_shortButton_1fq7o_64",B0="_contents_1fq7o_67",V0="_importantText_1fq7o_79",ye={sideMenuContainer:O0,sideMenuBackground:P0,sideMenuBar:M0,sideMenuTitle:U0,sideMenuNav:j0,shortButton:F0,contents:B0,importantText:V0};function $0({loginName:t,handleModal:e}){Be();const{signOut:n}=Ja();return d.jsxs("div",{className:ye.sideMenuContainer,children:[d.jsx("div",{className:ye.sideMenuBackground}),d.jsxs("div",{className:ye.sideMenuBar,children:[d.jsxs("div",{children:[d.jsx("div",{className:ye.sideMenuTitle,children:t?`${t}님`:"로그인"}),d.jsxs("div",{className:ye.sideMenuNav,children:[d.jsx(Vn,{onClick:()=>{n(),window.location.replace("/")},text:"Log Out",className:ye.shortButton}),d.jsx(Vn,{text:"About",onClick:e,className:ye.shortButton})]})]}),d.jsxs("div",{children:[d.jsx("div",{className:ye.sideMenuTitle,children:"공지사항"}),d.jsxs("div",{className:ye.contents,children:[d.jsxs("span",{children:["🌸벚꽃메세지는"," ",d.jsx("span",{className:ye.importantText,children:"4월 15일 00시에 공개"}),"됩니다."]}),d.jsxs("span",{children:["🌸메세지 작성기한은"," ",d.jsx("span",{className:ye.importantText,children:"4월 14일 23:59 까지 "}),"입니다. 벚꽃메세지로 마음을 전달해보세요 !"]}),d.jsxs("span",{children:["🌸벚꽃메세지는"," ",d.jsxs("span",{className:ye.importantText,children:["4월 15일~4월 29일까지"," "]})," ","2주간 열람 가능합니다. 소중한 메세지를 놓치지 않게 기억해주세요 !"]}),d.jsx("span",{children:"🌸오류가 발견되면 Contact me에 있는 연락처로 문의 부탁드립니다 !"})]})]}),d.jsxs("div",{children:[d.jsx("div",{className:ye.sideMenuTitle,children:"Contact Us"}),d.jsx("div",{className:ye.sideMenuNav,children:d.jsx(Vn,{onClick:()=>location.href="https://github.com/cherry-6lossom/6lossom",text:"Github",className:ye.shortButton})})]})]})]})}const q0="_messageListBackground_1tab1_7",W0="_messageListWrapper_1tab1_15",K0="_messageListContainer_1tab1_27",H0="_messageList_1tab1_7",z0="_MessageItemWrapper_1tab1_55",G0="_closeButton_1tab1_63",Q0="_moveOut_1tab1_75",De={messageListBackground:q0,messageListWrapper:W0,messageListContainer:K0,messageList:H0,MessageItemWrapper:z0,closeButton:G0,moveOut:Q0},Y0="_messageItemContainer_1pyp1_7",X0="_messageItem_1pyp1_7",J0="_messageIcon_1pyp1_33",Z0="_messageSender_1pyp1_41",eS="_messageContentsContainer_1pyp1_59",tS="_messageContents_1pyp1_59",Qt={messageItemContainer:Y0,messageItem:X0,messageIcon:J0,messageSender:Z0,messageContentsContainer:eS,messageContents:tS},nS=({flower:t,id:e,handleOpenMessageDetail:n})=>{const s=g.useContext(Ls),{nickname:r,contents:i}=t;return d.jsx("li",{className:Qt.messageItemContainer,onClick:()=>n(s,t),children:d.jsxs("div",{className:Qt.messageItem,children:[d.jsxs("div",{className:Qt.messageSender,children:[d.jsx("figure",{className:Qt.messageIcon,children:d.jsx(mn,{as:"figcaption",children:"하트가 그려진 편지를 담은 우편지 모양의 아이콘입니다."})}),r]}),d.jsx("div",{className:Qt.messageContentsContainer,children:d.jsx("p",{className:Qt.messageContents,children:i})})]})},e)},sS=({listBackgroundRef:t,messageListRef:e,messageDetailRef:n,handleOpenMessageDetail:s})=>{const r=g.useContext(Ls),i=t.current,o=e.current,{uid:a}=Nr(),[c,l]=g.useState([]);g.useLayoutEffect(()=>{gi(`users/${a}/flowerList`).then(f=>{l(f.sort((m,y)=>m.createdAt-y.createdAt))})},[]);const u=(f,m)=>{const{messageListVisible:y,setMessageListVisible:v}=m;y&&(o.classList.add(De.moveOut),setTimeout(()=>{i.style.backgroundColor="",i.style.zIndex="",i.style.display="",v(!y),o.classList.remove(De.moveOut)},400))},h=(f,m)=>{const{messageListVisible:y,setMessageListVisible:v}=m,I=f.target;i===I&&y&&(o.classList.add(De.moveOut),setTimeout(()=>{i.style.backgroundColor="",i.style.zIndex="",i.style.display="",v(!y),o.classList.remove(De.moveOut)},400))};return d.jsx("div",{ref:t,onClick:f=>h(f,r),className:De.messageListBackground,children:d.jsx("div",{ref:e,className:De.messageListWrapper,children:d.jsxs("div",{className:De.messageListContainer,children:[d.jsx("div",{className:De.messageList,children:d.jsx("ul",{className:De.MessageItemWrapper,children:c.map(f=>d.jsx(nS,{flower:f,handleOpenMessageDetail:s},c.indexOf(f)))})}),d.jsx("button",{type:"button",onClick:f=>u(f,r),className:De.closeButton})]})})})},rS="_messageDetailBackground_awz4o_7",iS="_messageDetailWrapper_awz4o_27",oS="_messageDetailContainer_awz4o_41",aS="_moonIcon_awz4o_51",cS="_messageSender_awz4o_57",lS="_messageContents_awz4o_71",uS="_closeButton_awz4o_100",hS="_downloadButtonContainer_awz4o_120",dS="_downloadButton_awz4o_120",kt={messageDetailBackground:rS,messageDetailWrapper:iS,messageDetailContainer:oS,moonIcon:aS,messageSender:cS,messageContents:lS,closeButton:uS,downloadButtonContainer:hS,downloadButton:dS},fS=({flowerInfo:t,messageDetailRef:e})=>{const n=g.useContext(Ls),s=e.current,{nickname:r,contents:i}=t,o=(c,l)=>{const{messageDetailVisible:u,setMessageDetailVisible:h}=l;u&&(s.style.backgroundColor="",s.style.zIndex="",s.style.display="",h(!u))},a=(c,l)=>{const{messageDetailVisible:u,setMessageDetailVisible:h}=l,f=c.target;s===f&&u&&(s.style.backgroundColor="",s.style.zIndex="",s.style.display="",h(!u))};return d.jsx("div",{ref:e,onClick:c=>a(c,n),className:kt.messageDetailBackground,children:d.jsx("div",{className:kt.messageDetailWrapper,children:d.jsxs("ul",{className:kt.messageDetailContainer,children:[d.jsx("li",{children:d.jsx("figure",{className:kt.moonIcon,children:d.jsx(mn,{as:"figcaption",children:"귀여운 보름달 캐릭터와 함께 흩날리는 벚꽃이 그려진 아이콘입니다."})})}),d.jsx("li",{className:kt.messageSender,children:r}),d.jsx("li",{className:kt.messageContents,children:i}),d.jsx("button",{type:"button",onClick:c=>o(c,n),className:kt.closeButton,children:"OK!"})]})})})},gS="_flower_9ir8f_7",mS="_flowerButton_9ir8f_28",pS="_flower0_9ir8f_46",yS="_flower1_9ir8f_51",vS="_flower2_9ir8f_56",wS="_flower3_9ir8f_61",_S="_flower4_9ir8f_66",IS="_flower5_9ir8f_71",TS="_flower6_9ir8f_76",$e={flower:gS,flowerButton:mS,flower0:pS,flower1:yS,flower2:vS,flower3:wS,flower4:_S,flower5:IS,flower6:TS},bS=({uid:t,keyId:e,item:n,handleOpenMessageDetail:s})=>{const r=g.useContext(Ls),{flowerSrc:i,id:o,nickname:a}=n;JSON.parse(localStorage.getItem("uid"));const c=()=>{s(r,n)};return d.jsxs("li",{className:Ie($e.flower,o%7===0?$e.flower0:o%7===1?$e.flower1:o%7===2?$e.flower2:o%7===3?$e.flower3:o%7===4?$e.flower4:o%7===5?$e.flower5:$e.flower6),children:[d.jsx("span",{children:a}),d.jsx("button",{className:$e.flowerButton,onClick:c,children:d.jsx("img",{src:`/assets/${i}.png`,alt:"벚꽃 메세지"})})]},e)},ES="/assets/Spinner-69699739.svg",SS=()=>{const[t,e]=g.useState(!1),[n,s]=g.useState(!1),[r,i]=g.useState(!1),[o,a]=g.useState({}),[c,l]=g.useState(!1),{uid:u}=Nr(),h=g.useRef(),f=g.useRef(),m=g.useRef(),y=Be(),v=os(),I=g.useMemo(()=>({messageListVisible:t,setMessageListVisible:e,messageDetailVisible:n,setMessageDetailVisible:s}),[t,e,n,s]),[D,A]=g.useState(""),[W,U]=g.useState(""),[oe,Se]=g.useState(!0),[ne,mi]=g.useState([]),[Sn,pi]=g.useState([]),[yi,ff]=g.useState(null),[Os,gf]=g.useState(0),[mf,pf]=g.useState(!1),[yf,vf]=g.useState(!0),Za=()=>{history.pushState(null,"",v.href)};g.useLayoutEffect(()=>{wf(),wi(7,"next")},[]),g.useLayoutEffect(()=>{vf(ne.length!==Os),pf(!(ne.length<=7))},[ne.length,Os]);const vi=ri(Ce,`users/${u}/flowerList`),wf=async()=>{const V=await Id(zs(vi,Gs("createAt","asc")));gf(V.data().count)},wi=async(V=10,_e)=>{let Z;if(!yi)Z=zs(vi,Gs("createAt","asc"),hl(V));else{let Et=ne.length-7;Z=zs(vi,Gs("createAt","asc"),_e==="next"?O_(yi):P_(yi),hl(_e==="next"||Et<=V?V:Et))}const et=await Va(Z);oe&&Se(!1);const Gt=et.docs;_f(Gt,_e)},_f=(V,_e)=>{const Z=[];V.forEach(Et=>{Z.push({id:Et.id,...Et.data()})});const et=_e==="next"?[...ne,...Z]:Z;mi(et),pi(Z.slice(-7,void 0));let Gt=V[V.length-1];Gt&&ff(Gt)},Cn=JSON.parse(localStorage.getItem("uid")),[If,Tf]=g.useState(""),bf=()=>{i(!r)},kn=V=>{const _e=document.querySelector(`.${V}`);_e.classList.add(G.animateNotification),setTimeout(()=>{_e.classList.remove(G.animateNotification)},4e3)},Ef=()=>{let V=`https://localhost:3000${v.pathname}`;navigator.clipboard.writeText(V),kn("targetCheckLinkCopyNotification")},ec=(V,_e)=>{const Z=m.current;if(a(_e),u!==Cn){kn("targetCheckOwnerNotification");return}else if(!nc){kn("targetCheckPeriodNotification");return}n||(Z.style.backgroundColor="rgba(0, 0, 0, 0.2)",Z.style.display="block",Z.style.zIndex=102,s(!n))},Sf=(V,_e)=>{const Z=h.current,et=f.current;if(!nc){kn("targetCheckPeriodNotification");return}t||(et.classList.add(G.moveIn),Z.style.backgroundColor="rgba(0, 0, 0, 0.2)",Z.style.display="block",Z.style.zIndex=101,e(!t),setTimeout(()=>{et.classList.remove(G.moveIn)},900))},Cf=()=>{Af?y(`/message-custom/${u}`):kn("targetCheckCreatableNotification")},{signOut:kf}=Ja(),Nf=()=>{Cn?window.location.replace(`/share-tree/${Cn}`):(alert("로그인이 필요합니다."),kf(),localStorage.clear(),y("/"))},tc=()=>{l(!c)},Ze=new Date,[nc,xf]=g.useState(!1),[Af,Df]=g.useState(!1);return g.useEffect(()=>{V_(yt(Ce,"users",u),Ps=>{A(Ps.data().userNickname),U(Ps.data().bgSrc)}),gi("users").then(Ps=>{Ps.map(sc=>{sc.uid===Cn&&Tf(sc.userNickname)})});const V=new Date(Ze.getFullYear(),3,15),_e=new Date(Ze.getFullYear(),3,29),Z=Ze>=V&&Ze<=_e;xf(Z);const et=new Date(Ze.getFullYear(),2,15),Gt=new Date(Ze.getFullYear(),3,14),Et=Ze>=et&&Ze<=Gt;return Df(Et),history.pushState(null,"",v.href),window.addEventListener("popstate",Za),()=>{window.removeEventListener("popstate",Za)}},[]),d.jsxs(d.Fragment,{children:[d.jsx(Ls.Provider,{value:I,children:d.jsxs(b0.Provider,{value:{flowerInfo:o,setFlowerInfo:a},children:[d.jsxs("div",{style:{background:`url(${W}) center / cover no-repeat `},className:G.shareTreeContainer,children:[d.jsx(hf,{userName:D,subText:`${Os}송이의 벚꽃이 피었어요 ! `}),d.jsx("div",{className:G.blossomTreeContainer,children:oe?d.jsx("div",{children:d.jsx("img",{src:ES,alt:"로딩 중"})}):d.jsxs("div",{className:G.flowerList,children:[d.jsxs("div",{className:G.originTreeContainer,children:[d.jsx(sf,{}),d.jsx("ul",{children:Sn.map(V=>d.jsx(bS,{uid:u,item:V,handleOpenMessageDetail:ec},V.id))})]}),d.jsxs("span",{className:G.pagination,children:[ne.length,"/",Os]}),d.jsxs("div",{className:G.swiperButton,children:[d.jsx("button",{type:"button",className:Ie(G.arrowButton,G.leftButton),disabled:!mf,onClick:()=>wi(7,"prev")}),d.jsx("button",{type:"button",className:Ie(G.arrowButton,G.rightButton),disabled:!yf,onClick:()=>wi(7,"next")})]})]})}),d.jsxs("div",{className:G.notificationContainer,children:[d.jsx(ze,{className:Ie("targetCheckOwnerNotification",G.notificationStyling),text:"나의 벚꽃나무만 확인이 가능합니다 !"}),d.jsx(ze,{className:Ie("targetCheckPeriodNotification",G.notificationStyling),text:"아직 벚꽃 열람 시기가 아니에요 !"}),d.jsx(ze,{className:Ie("targetCheckLinkCopyNotification",G.notificationStyling),text:"링크가 복사되었습니다 !"}),d.jsx(ze,{className:Ie("targetCheckCreatableNotification",G.notificationStyling),text:"작성기한이 마감되었습니다 !"})]}),u===Cn?d.jsx(No,{firstText:"링크 공유하기",firstClick:Ef,secondText:"전체 메세지 보기",secondClick:V=>Sf()}):d.jsx(No,{firstText:"벚꽃 달아주기",firstClick:Cf,secondText:"내 벚꽃나무 보러가기",secondClick:Nf}),d.jsx("div",{onClick:bf,children:d.jsx(L0,{})}),r&&d.jsx($0,{handleModal:tc,loginName:If})]}),d.jsx(sS,{flowerList:ne,listBackgroundRef:h,messageListRef:f,handleOpenMessageDetail:ec}),d.jsx(fS,{flowerInfo:o,messageDetailRef:m})]})}),c?d.jsx(tf,{handleModal:tc}):null]})},CS="_pageSetting_1bh7v_7",kS="_header_1bh7v_29",NS="_customContainer_1bh7v_32",xS="_blossomMain_1bh7v_38",AS="_blossomImage_1bh7v_47",Yt={pageSetting:CS,header:kS,customContainer:NS,blossomMain:xS,blossomImage:AS},DS="_blossomSelect_3wcgt_7",RS={blossomSelect:DS},df=g.createContext(),LS="_blossomButton_9lbt8_7",OS="_blossomImage_9lbt8_15",Pl={blossomButton:LS,blossomImage:OS},PS=({src:t,id:e,handleSelect:n})=>d.jsx("button",{type:"button",id:e,onClick:n,className:Pl.blossomButton,children:d.jsx("img",{className:Pl.blossomImage,src:t,alt:`벚꽃모양${e}`})});function MS(){const{blossomInfoList:t,handleSelect:e}=g.useContext(df);return d.jsx("div",{className:RS.blossomSelect,children:t.map(n=>d.jsx(PS,{src:n.src,id:n.id,handleSelect:e}))})}const US="/assets/cherry-blossom1-f99a2a23.png",jS="/assets/cherry-blossom2-111fa7e0.png",FS="/assets/cherry-blossom4-8d9f27fb.png",Ml=[{id:0,src:US,isSelected:!0},{id:1,src:jS,isSelected:!1},{id:2,src:im,isSelected:!1},{id:3,src:FS,isSelected:!1}],BS=()=>{const t=Be(),{uid:e}=Nr(),[n,s]=g.useState(0),[r,i]=g.useState(""),[o,a]=g.useState("cherry-blossom1.png"),c=async()=>{const h=ri(Ce,`users/${e}/flowerList`),f=await Id(zs(h,Gs("createAt","asc")));s(f.data().count)};g.useLayoutEffect(()=>{},[]),g.useEffect(()=>{(async()=>{const h=yt(Ce,"users",e),f=await li(h);i(f.data().userNickname),c()})()},[]);const l=h=>{const f=document.querySelector(".blossomImage"),m=h.target.closest("button");Ml.map(y=>{if(parseInt(m.id)===y.id){f.src=y.src,a(y.src);return}})},u=async()=>{const h=yt(Ce,"users",e,"flowerList",String(n));await So(h,{nickname:"",contents:"",flowerSrc:`${o}`}),t(`/write-message/${e}/${n}`)};return d.jsx(df.Provider,{value:{blossomInfoList:Ml,setBlossomSrc:a,handleSelect:l},children:d.jsxs("div",{className:Yt.pageSetting,children:[d.jsxs("div",{className:Yt.customContainer,children:[d.jsx("div",{className:Yt.header,children:d.jsx(hf,{userName:r,subText:"벚꽃을 골라주세요!"})}),d.jsx("div",{className:Yt.blossomMain,children:d.jsx("img",{className:Ie("blossomImage",Yt.blossomImage),src:`@/assets/custom/${o}.png`,alt:"벚꽃이미지"})}),d.jsx(MS,{className:Yt.customBlossom})]}),d.jsx("div",{children:d.jsx(nf,{firstText:"이전",firstClick:()=>t(-1),secondText:"다음",secondClick:u})})]})})},VS="_writeMessageWrap_11v2y_7",$S="_header_11v2y_29",qS="_flower_11v2y_36",WS="_writeMessageHeader_11v2y_41",KS="_notice_11v2y_47",HS="_modalButtonContainer_11v2y_52",qs={writeMessageWrap:VS,header:$S,flower:qS,writeMessageHeader:WS,notice:KS,modalButtonContainer:HS},zS=()=>{const{uid:t,msgId:e}=Nr(),{updateData:n}=rf(`users/${t}/flowerList`),s=Be(),r=g.useRef(),i=g.useRef(),[o,a]=g.useState(""),[c,l]=g.useState({author:"",content:""}),[u,h]=g.useState(""),[f,m]=g.useState(!1),[y,v]=g.useState("");gi(`users/${t}/flowerList`).then(U=>{v(U[e].flowerSrc)}),g.useLayoutEffect(()=>{(async()=>{const U=yt(Ce,"users",t),oe=await li(U);a(oe.data().userNickname)})()},[]);const I=(U,oe)=>{const{name:Se,value:ne}=U.target;Se==="content"&&ne.length<=500&&h(ne),l({...c,[Se]:ne})},D=()=>{if(c.author.length<1){r.current.focus();return}if(c.content.length<2){i.current.focus();return}m(!0)},A=()=>{m(!1)},W=()=>{const U=Td(),{author:oe,content:Se}=c;n(e,{nickname:oe,contents:Se,createAt:U}),window.location.replace(`/share-tree/${t}`)};return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:qs.writeMessageWrap,children:[d.jsxs("div",{className:qs.header,children:[d.jsx(uf,{userName:o}),d.jsx("img",{className:qs.flower,src:y,alt:"벚꽃이미지"}),d.jsx(Sr,{className:qs.notice,subText:`${o}님에게 메세지를 남겨주세요`})]}),d.jsx(jb,{authorInput:r,contentInput:i,state:c,text:u,handleChangeState:I}),d.jsx(No,{firstText:"완료",firstClick:D,secondText:"이전",secondClick:()=>s(-1)})]}),f&&d.jsx(Lb,{handleCloseModal:A,handleComplete:W})]})};function GS(){return d.jsx("div",{className:"App",children:d.jsx(Fg,{children:d.jsxs(Og,{children:[d.jsx(nt,{path:"/",element:d.jsx(_b,{})}),d.jsx(nt,{path:"/signin",element:d.jsx(c0,{})}),d.jsx(nt,{path:"/signup",element:d.jsx(HE,{})}),d.jsx(nt,{path:"/make-tree",element:d.jsx(mE,{})}),d.jsx(nt,{path:"/share-tree/:uid",element:d.jsx(SS,{})}),d.jsx(nt,{path:"/message-custom/:uid",element:d.jsx(BS,{})}),d.jsx(nt,{path:"/write-message/:uid/:msgId",element:d.jsx(zS,{})})]})})})}qi.createRoot(document.getElementById("root")).render(d.jsx(Lf.StrictMode,{children:d.jsx(GS,{})}));
