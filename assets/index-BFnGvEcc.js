(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w_={exports:{}},mu={},E_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),gI=Symbol.for("react.portal"),yI=Symbol.for("react.fragment"),_I=Symbol.for("react.strict_mode"),vI=Symbol.for("react.profiler"),wI=Symbol.for("react.provider"),EI=Symbol.for("react.context"),TI=Symbol.for("react.forward_ref"),II=Symbol.for("react.suspense"),SI=Symbol.for("react.memo"),RI=Symbol.for("react.lazy"),Sm=Symbol.iterator;function AI(t){return t===null||typeof t!="object"?null:(t=Sm&&t[Sm]||t["@@iterator"],typeof t=="function"?t:null)}var T_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I_=Object.assign,S_={};function ps(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||T_}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R_(){}R_.prototype=ps.prototype;function xd(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||T_}var Dd=xd.prototype=new R_;Dd.constructor=xd;I_(Dd,ps.prototype);Dd.isPureReactComponent=!0;var Rm=Array.isArray,A_=Object.prototype.hasOwnProperty,Vd={current:null},C_={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)A_.call(e,r)&&!C_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Yo,type:t,key:s,ref:o,props:i,_owner:Vd.current}}function CI(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Od(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function PI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Am=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PI(""+t.key):e.toString(36)}function Za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yo:case gI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ec(o,0):r,Rm(i)?(n="",t!=null&&(n=t.replace(Am,"$&/")+"/"),Za(i,e,n,"",function(c){return c})):i!=null&&(Od(i)&&(i=CI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Am,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ec(s,l);o+=Za(s,e,n,u,i)}else if(u=AI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ec(s,l++),o+=Za(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var r=[],i=0;return Za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},el={transition:null},NI={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:el,ReactCurrentOwner:Vd};function k_(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!Od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ps;ne.Fragment=yI;ne.Profiler=vI;ne.PureComponent=xd;ne.StrictMode=_I;ne.Suspense=II;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NI;ne.act=k_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=I_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)A_.call(e,u)&&!C_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Yo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:EI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wI,_context:t},t.Consumer=t};ne.createElement=P_;ne.createFactory=function(t){var e=P_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:TI,render:t}};ne.isValidElement=Od;ne.lazy=function(t){return{$$typeof:RI,_payload:{_status:-1,_result:t},_init:kI}};ne.memo=function(t,e){return{$$typeof:SI,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};ne.unstable_act=k_;ne.useCallback=function(t,e){return gt.current.useCallback(t,e)};ne.useContext=function(t){return gt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return gt.current.useEffect(t,e)};ne.useId=function(){return gt.current.useId()};ne.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return gt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};ne.useRef=function(t){return gt.current.useRef(t)};ne.useState=function(t){return gt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return gt.current.useTransition()};ne.version="18.3.1";E_.exports=ne;var V=E_.exports;const xI=mI(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DI=V,VI=Symbol.for("react.element"),OI=Symbol.for("react.fragment"),LI=Object.prototype.hasOwnProperty,bI=DI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MI={key:!0,ref:!0,__self:!0,__source:!0};function N_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)LI.call(e,r)&&!MI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VI,type:t,key:s,ref:o,props:i,_owner:bI.current}}mu.Fragment=OI;mu.jsx=N_;mu.jsxs=N_;w_.exports=mu;var j=w_.exports,uh={},x_={exports:{}},xt={},D_={exports:{}},V_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var Z=z.length;z.push(Q);e:for(;0<Z;){var ce=Z-1>>>1,Ee=z[ce];if(0<i(Ee,Q))z[ce]=Q,z[Z]=Ee,Z=ce;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],Z=z.pop();if(Z!==Q){z[0]=Z;e:for(var ce=0,Ee=z.length,Tn=Ee>>>1;ce<Tn;){var _t=2*(ce+1)-1,q=z[_t],K=_t+1,le=z[K];if(0>i(q,Z))K<Ee&&0>i(le,q)?(z[ce]=le,z[K]=Z,ce=K):(z[ce]=q,z[_t]=Z,ce=_t);else if(K<Ee&&0>i(le,Z))z[ce]=le,z[K]=Z,ce=K;else break e}}return Q}function i(z,Q){var Z=z.sortIndex-Q.sortIndex;return Z!==0?Z:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,I=!1,C=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D(z){if(P=!1,w(z),!C)if(n(u)!==null)C=!0,Ur(U);else{var Q=n(c);Q!==null&&Fr(D,Q.startTime-z)}}function U(z,Q){C=!1,P&&(P=!1,E(y),y=-1),I=!0;var Z=m;try{for(w(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||z&&!A());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,m=p.priorityLevel;var Ee=ce(p.expirationTime<=Q);Q=t.unstable_now(),typeof Ee=="function"?p.callback=Ee:p===n(u)&&r(u),w(Q)}else r(u);p=n(u)}if(p!==null)var Tn=!0;else{var _t=n(c);_t!==null&&Fr(D,_t.startTime-Q),Tn=!1}return Tn}finally{p=null,m=Z,I=!1}}var M=!1,T=null,y=-1,v=5,S=-1;function A(){return!(t.unstable_now()-S<v)}function k(){if(T!==null){var z=t.unstable_now();S=z;var Q=!0;try{Q=T(!0,z)}finally{Q?R():(M=!1,T=null)}}else M=!1}var R;if(typeof _=="function")R=function(){_(k)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Vt=Ue.port2;Ue.port1.onmessage=k,R=function(){Vt.postMessage(null)}}else R=function(){N(k,0)};function Ur(z){T=z,M||(M=!0,R())}function Fr(z,Q){y=N(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,Ur(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Z=m;m=Q;try{return z()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=m;m=z;try{return Q()}finally{m=Z}},t.unstable_scheduleCallback=function(z,Q,Z){var ce=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,z){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Z+Ee,z={id:d++,callback:Q,priorityLevel:z,startTime:Z,expirationTime:Ee,sortIndex:-1},Z>ce?(z.sortIndex=Z,e(c,z),n(u)===null&&z===n(c)&&(P?(E(y),y=-1):P=!0,Fr(D,Z-ce))):(z.sortIndex=Ee,e(u,z),C||I||(C=!0,Ur(U))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var Q=m;return function(){var Z=m;m=Q;try{return z.apply(this,arguments)}finally{m=Z}}}})(V_);D_.exports=V_;var UI=D_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FI=V,Nt=UI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O_=new Set,So={};function fi(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(So[t]=e,t=0;t<e.length;t++)O_.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ch=Object.prototype.hasOwnProperty,jI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},Pm={};function BI(t){return ch.call(Pm,t)?!0:ch.call(Cm,t)?!1:jI.test(t)?Pm[t]=!0:(Cm[t]=!0,!1)}function zI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $I(t,e,n,r){if(e===null||typeof e>"u"||zI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ld,bd);Ze[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ld,bd);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ld,bd);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Md(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($I(e,n,i,r)&&(n=null),r||i===null?BI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=FI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),hh=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),dh=Symbol.for("react.suspense"),fh=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),M_=Symbol.for("react.offscreen"),km=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Tc;function Js(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Ic=!1;function Sc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function HI(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function ph(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case Ni:return"Portal";case hh:return"Profiler";case Ud:return"StrictMode";case dh:return"Suspense";case fh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b_:return(t.displayName||"Context")+".Consumer";case L_:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jd:return e=t.displayName||null,e!==null?e:ph(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return ph(t(e))}catch{}}return null}function WI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ph(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qI(t){var e=U_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=qI(t))}function F_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=U_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mh(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j_(t,e){e=e.checked,e!=null&&Md(t,"checked",e,!1)}function gh(t,e){j_(t,e);var n=Sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yh(t,e.type,n):e.hasOwnProperty("defaultValue")&&yh(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yh(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Zs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function B_(t,e){var n=Sr(e.value),r=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function z_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?z_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,$_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GI=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){GI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function H_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function W_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KI=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wh(t,e){if(e){if(KI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=null;function Bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ih=null,Hi=null,Wi=null;function Om(t){if(t=ea(t)){if(typeof Ih!="function")throw Error(F(280));var e=t.stateNode;e&&(e=wu(e),Ih(t.stateNode,t.type,e))}}function q_(t){Hi?Wi?Wi.push(t):Wi=[t]:Hi=t}function G_(){if(Hi){var t=Hi,e=Wi;if(Wi=Hi=null,Om(t),e)for(t=0;t<e.length;t++)Om(e[t])}}function K_(t,e){return t(e)}function Q_(){}var Rc=!1;function X_(t,e,n){if(Rc)return t(e,n);Rc=!0;try{return K_(t,e,n)}finally{Rc=!1,(Hi!==null||Wi!==null)&&(Q_(),G_())}}function Ao(t,e){var n=t.stateNode;if(n===null)return null;var r=wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Sh=!1;if(On)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Sh=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Sh=!1}function QI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ao=!1,Rl=null,Al=!1,Rh=null,XI={onError:function(t){ao=!0,Rl=t}};function YI(t,e,n,r,i,s,o,l,u){ao=!1,Rl=null,QI.apply(XI,arguments)}function JI(t,e,n,r,i,s,o,l,u){if(YI.apply(this,arguments),ao){if(ao){var c=Rl;ao=!1,Rl=null}else throw Error(F(198));Al||(Al=!0,Rh=c)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lm(t){if(pi(t)!==t)throw Error(F(188))}function ZI(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Lm(i),t;if(s===r)return Lm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function J_(t){return t=ZI(t),t!==null?Z_(t):null}function Z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z_(t);if(e!==null)return e;t=t.sibling}return null}var ev=Nt.unstable_scheduleCallback,bm=Nt.unstable_cancelCallback,e1=Nt.unstable_shouldYield,t1=Nt.unstable_requestPaint,De=Nt.unstable_now,n1=Nt.unstable_getCurrentPriorityLevel,zd=Nt.unstable_ImmediatePriority,tv=Nt.unstable_UserBlockingPriority,Cl=Nt.unstable_NormalPriority,r1=Nt.unstable_LowPriority,nv=Nt.unstable_IdlePriority,gu=null,un=null;function i1(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:a1,s1=Math.log,o1=Math.LN2;function a1(t){return t>>>=0,t===0?32:31-(s1(t)/o1|0)|0}var xa=64,Da=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=eo(l):(s&=o,s!==0&&(r=eo(s)))}else o=n&~i,o!==0?r=eo(o):s!==0&&(r=eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function l1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=l1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ah(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rv(){var t=xa;return xa<<=1,!(xa&4194240)&&(xa=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function c1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sv,Hd,ov,av,lv,Ch=!1,Va=[],hr=null,dr=null,fr=null,Co=new Map,Po=new Map,tr=[],h1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ea(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function d1(t,e,n,r,i){switch(e){case"focusin":return hr=Hs(hr,t,e,n,r,i),!0;case"dragenter":return dr=Hs(dr,t,e,n,r,i),!0;case"mouseover":return fr=Hs(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Co.set(s,Hs(Co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Po.set(s,Hs(Po.get(s)||null,t,e,n,r,i)),!0}return!1}function uv(t){var e=Kr(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=Y_(n),e!==null){t.blockedOn=e,lv(t.priority,function(){ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Th=r,n.target.dispatchEvent(r),Th=null}else return e=ea(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function Um(t,e,n){tl(t)&&n.delete(e)}function f1(){Ch=!1,hr!==null&&tl(hr)&&(hr=null),dr!==null&&tl(dr)&&(dr=null),fr!==null&&tl(fr)&&(fr=null),Co.forEach(Um),Po.forEach(Um)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Ch||(Ch=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,f1)))}function ko(t){function e(i){return Ws(i,t)}if(0<Va.length){Ws(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&Ws(hr,t),dr!==null&&Ws(dr,t),fr!==null&&Ws(fr,t),Co.forEach(e),Po.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)uv(n),n.blockedOn===null&&tr.shift()}var qi=Hn.ReactCurrentBatchConfig,kl=!0;function p1(t,e,n,r){var i=he,s=qi.transition;qi.transition=null;try{he=1,Wd(t,e,n,r)}finally{he=i,qi.transition=s}}function m1(t,e,n,r){var i=he,s=qi.transition;qi.transition=null;try{he=4,Wd(t,e,n,r)}finally{he=i,qi.transition=s}}function Wd(t,e,n,r){if(kl){var i=Ph(t,e,n,r);if(i===null)bc(t,e,r,Nl,n),Mm(t,r);else if(d1(i,t,e,n,r))r.stopPropagation();else if(Mm(t,r),e&4&&-1<h1.indexOf(t)){for(;i!==null;){var s=ea(i);if(s!==null&&sv(s),s=Ph(t,e,n,r),s===null&&bc(t,e,r,Nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bc(t,e,r,null,n)}}var Nl=null;function Ph(t,e,n,r){if(Nl=null,t=Bd(r),t=Kr(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function cv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n1()){case zd:return 1;case tv:return 4;case Cl:case r1:return 16;case nv:return 536870912;default:return 16}default:return 16}}var lr=null,qd=null,nl=null;function hv(){if(nl)return nl;var t,e=qd,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nl=i.slice(t,1<r?1-r:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function Fm(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:Fm,this.isPropagationStopped=Fm,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gd=Dt(ms),Zo=Re({},ms,{view:0,detail:0}),g1=Dt(Zo),Cc,Pc,qs,yu=Re({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Cc=t.screenX-qs.screenX,Pc=t.screenY-qs.screenY):Pc=Cc=0,qs=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),jm=Dt(yu),y1=Re({},yu,{dataTransfer:0}),_1=Dt(y1),v1=Re({},Zo,{relatedTarget:0}),kc=Dt(v1),w1=Re({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),E1=Dt(w1),T1=Re({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I1=Dt(T1),S1=Re({},ms,{data:0}),Bm=Dt(S1),R1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C1[t])?!!e[t]:!1}function Kd(){return P1}var k1=Re({},Zo,{key:function(t){if(t.key){var e=R1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?A1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N1=Dt(k1),x1=Re({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zm=Dt(x1),D1=Re({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),V1=Dt(D1),O1=Re({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=Dt(O1),b1=Re({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M1=Dt(b1),U1=[9,13,27,32],Qd=On&&"CompositionEvent"in window,lo=null;On&&"documentMode"in document&&(lo=document.documentMode);var F1=On&&"TextEvent"in window&&!lo,dv=On&&(!Qd||lo&&8<lo&&11>=lo),$m=" ",Hm=!1;function fv(t,e){switch(t){case"keyup":return U1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function j1(t,e){switch(t){case"compositionend":return pv(e);case"keypress":return e.which!==32?null:(Hm=!0,$m);case"textInput":return t=e.data,t===$m&&Hm?null:t;default:return null}}function B1(t,e){if(Di)return t==="compositionend"||!Qd&&fv(t,e)?(t=hv(),nl=qd=lr=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dv&&e.locale!=="ko"?null:e.data;default:return null}}var z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!z1[t.type]:e==="textarea"}function mv(t,e,n,r){q_(r),e=xl(e,"onChange"),0<e.length&&(n=new Gd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var uo=null,No=null;function $1(t){Av(t,0)}function _u(t){var e=Li(t);if(F_(e))return t}function H1(t,e){if(t==="change")return e}var gv=!1;if(On){var Nc;if(On){var xc="oninput"in document;if(!xc){var qm=document.createElement("div");qm.setAttribute("oninput","return;"),xc=typeof qm.oninput=="function"}Nc=xc}else Nc=!1;gv=Nc&&(!document.documentMode||9<document.documentMode)}function Gm(){uo&&(uo.detachEvent("onpropertychange",yv),No=uo=null)}function yv(t){if(t.propertyName==="value"&&_u(No)){var e=[];mv(e,No,t,Bd(t)),X_($1,e)}}function W1(t,e,n){t==="focusin"?(Gm(),uo=e,No=n,uo.attachEvent("onpropertychange",yv)):t==="focusout"&&Gm()}function q1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(No)}function G1(t,e){if(t==="click")return _u(e)}function K1(t,e){if(t==="input"||t==="change")return _u(e)}function Q1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:Q1;function xo(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ch.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qm(t,e){var n=Km(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function _v(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_v(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vv(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function X1(t){var e=vv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_v(n.ownerDocument.documentElement,n)){if(r!==null&&Xd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qm(n,s);var o=Qm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Y1=On&&"documentMode"in document&&11>=document.documentMode,Vi=null,kh=null,co=null,Nh=!1;function Xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nh||Vi==null||Vi!==Sl(r)||(r=Vi,"selectionStart"in r&&Xd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&xo(co,r)||(co=r,r=xl(kh,"onSelect"),0<r.length&&(e=new Gd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vi)))}function La(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oi={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Dc={},wv={};On&&(wv=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function vu(t){if(Dc[t])return Dc[t];if(!Oi[t])return t;var e=Oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wv)return Dc[t]=e[n];return t}var Ev=vu("animationend"),Tv=vu("animationiteration"),Iv=vu("animationstart"),Sv=vu("transitionend"),Rv=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){Rv.set(t,e),fi(e,[t])}for(var Vc=0;Vc<Ym.length;Vc++){var Oc=Ym[Vc],J1=Oc.toLowerCase(),Z1=Oc[0].toUpperCase()+Oc.slice(1);Or(J1,"on"+Z1)}Or(Ev,"onAnimationEnd");Or(Tv,"onAnimationIteration");Or(Iv,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Sv,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eS=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Jm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,JI(r,e,void 0,t),t.currentTarget=null}function Av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Jm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Jm(i,l,c),s=u}}}if(Al)throw t=Rh,Al=!1,Rh=null,t}function ge(t,e){var n=e[Lh];n===void 0&&(n=e[Lh]=new Set);var r=t+"__bubble";n.has(r)||(Cv(e,t,2,!1),n.add(r))}function Lc(t,e,n){var r=0;e&&(r|=4),Cv(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[ba]){t[ba]=!0,O_.forEach(function(n){n!=="selectionchange"&&(eS.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Lc("selectionchange",!1,e))}}function Cv(t,e,n,r){switch(cv(e)){case 1:var i=p1;break;case 4:i=m1;break;default:i=Wd}n=i.bind(null,e,n,t),i=void 0,!Sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}X_(function(){var c=s,d=Bd(n),p=[];e:{var m=Rv.get(t);if(m!==void 0){var I=Gd,C=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":I=N1;break;case"focusin":C="focus",I=kc;break;case"focusout":C="blur",I=kc;break;case"beforeblur":case"afterblur":I=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=_1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=V1;break;case Ev:case Tv:case Iv:I=E1;break;case Sv:I=L1;break;case"scroll":I=g1;break;case"wheel":I=M1;break;case"copy":case"cut":case"paste":I=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=zm}var P=(e&4)!==0,N=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,w;_!==null;){w=_;var D=w.stateNode;if(w.tag===5&&D!==null&&(w=D,E!==null&&(D=Ao(_,E),D!=null&&P.push(Vo(_,D,w)))),N)break;_=_.return}0<P.length&&(m=new I(m,C,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Th&&(C=n.relatedTarget||n.fromElement)&&(Kr(C)||C[Ln]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(C=n.relatedTarget||n.toElement,I=c,C=C?Kr(C):null,C!==null&&(N=pi(C),C!==N||C.tag!==5&&C.tag!==6)&&(C=null)):(I=null,C=c),I!==C)){if(P=jm,D="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=zm,D="onPointerLeave",E="onPointerEnter",_="pointer"),N=I==null?m:Li(I),w=C==null?m:Li(C),m=new P(D,_+"leave",I,n,d),m.target=N,m.relatedTarget=w,D=null,Kr(d)===c&&(P=new P(E,_+"enter",C,n,d),P.target=w,P.relatedTarget=N,D=P),N=D,I&&C)t:{for(P=I,E=C,_=0,w=P;w;w=Ri(w))_++;for(w=0,D=E;D;D=Ri(D))w++;for(;0<_-w;)P=Ri(P),_--;for(;0<w-_;)E=Ri(E),w--;for(;_--;){if(P===E||E!==null&&P===E.alternate)break t;P=Ri(P),E=Ri(E)}P=null}else P=null;I!==null&&Zm(p,m,I,P,!1),C!==null&&N!==null&&Zm(p,N,C,P,!0)}}e:{if(m=c?Li(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var U=H1;else if(Wm(m))if(gv)U=K1;else{U=q1;var M=W1}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=G1);if(U&&(U=U(t,c))){mv(p,U,n,d);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&yh(m,"number",m.value)}switch(M=c?Li(c):window,t){case"focusin":(Wm(M)||M.contentEditable==="true")&&(Vi=M,kh=c,co=null);break;case"focusout":co=kh=Vi=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,Xm(p,n,d);break;case"selectionchange":if(Y1)break;case"keydown":case"keyup":Xm(p,n,d)}var T;if(Qd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Di?fv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(dv&&n.locale!=="ko"&&(Di||y!=="onCompositionStart"?y==="onCompositionEnd"&&Di&&(T=hv()):(lr=d,qd="value"in lr?lr.value:lr.textContent,Di=!0)),M=xl(c,y),0<M.length&&(y=new Bm(y,t,null,n,d),p.push({event:y,listeners:M}),T?y.data=T:(T=pv(n),T!==null&&(y.data=T)))),(T=F1?j1(t,n):B1(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(d=new Bm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}Av(p,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ao(t,n),s!=null&&r.unshift(Vo(t,s,i)),s=Ao(t,e),s!=null&&r.push(Vo(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ao(n,s),u!=null&&o.unshift(Vo(n,u,l))):i||(u=Ao(n,s),u!=null&&o.push(Vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tS=/\r\n?/g,nS=/\u0000|\uFFFD/g;function eg(t){return(typeof t=="string"?t:""+t).replace(tS,`
`).replace(nS,"")}function Ma(t,e,n){if(e=eg(e),eg(t)!==e&&n)throw Error(F(425))}function Dl(){}var xh=null,Dh=null;function Vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,rS=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,iS=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(t){return tg.resolve(null).then(t).catch(sS)}:Oh;function sS(t){setTimeout(function(){throw t})}function Mc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ko(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ko(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ng(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),an="__reactFiber$"+gs,Oo="__reactProps$"+gs,Ln="__reactContainer$"+gs,Lh="__reactEvents$"+gs,oS="__reactListeners$"+gs,aS="__reactHandles$"+gs;function Kr(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ng(t);t!==null;){if(n=t[an])return n;t=ng(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[an]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function wu(t){return t[Oo]||null}var bh=[],bi=-1;function Lr(t){return{current:t}}function _e(t){0>bi||(t.current=bh[bi],bh[bi]=null,bi--)}function pe(t,e){bi++,bh[bi]=t.current,t.current=e}var Rr={},ut=Lr(Rr),Tt=Lr(!1),ni=Rr;function ts(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function Vl(){_e(Tt),_e(ut)}function rg(t,e,n){if(ut.current!==Rr)throw Error(F(168));pe(ut,e),pe(Tt,n)}function Pv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,WI(t)||"Unknown",i));return Re({},n,r)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,ni=ut.current,pe(ut,t),pe(Tt,Tt.current),!0}function ig(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Pv(t,e,ni),r.__reactInternalMemoizedMergedChildContext=t,_e(Tt),_e(ut),pe(ut,t)):_e(Tt),pe(Tt,n)}var Rn=null,Eu=!1,Uc=!1;function kv(t){Rn===null?Rn=[t]:Rn.push(t)}function lS(t){Eu=!0,kv(t)}function br(){if(!Uc&&Rn!==null){Uc=!0;var t=0,e=he;try{var n=Rn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Eu=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),ev(zd,br),i}finally{he=e,Uc=!1}}return null}var Mi=[],Ui=0,Ll=null,bl=0,Ot=[],Lt=0,ri=null,An=1,Cn="";function Wr(t,e){Mi[Ui++]=bl,Mi[Ui++]=Ll,Ll=t,bl=e}function Nv(t,e,n){Ot[Lt++]=An,Ot[Lt++]=Cn,Ot[Lt++]=ri,ri=t;var r=An;t=Cn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-Xt(e)+i|n<<i|r,Cn=s+t}else An=1<<s|n<<i|r,Cn=t}function Yd(t){t.return!==null&&(Wr(t,1),Nv(t,1,0))}function Jd(t){for(;t===Ll;)Ll=Mi[--Ui],Mi[Ui]=null,bl=Mi[--Ui],Mi[Ui]=null;for(;t===ri;)ri=Ot[--Lt],Ot[Lt]=null,Cn=Ot[--Lt],Ot[Lt]=null,An=Ot[--Lt],Ot[Lt]=null}var kt=null,Ct=null,we=!1,Gt=null;function xv(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Ct=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ri!==null?{id:An,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Ct=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uh(t){if(we){var e=Ct;if(e){var n=e;if(!sg(t,e)){if(Mh(t))throw Error(F(418));e=pr(n.nextSibling);var r=kt;e&&sg(t,e)?xv(r,n):(t.flags=t.flags&-4097|2,we=!1,kt=t)}}else{if(Mh(t))throw Error(F(418));t.flags=t.flags&-4097|2,we=!1,kt=t}}}function og(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Ua(t){if(t!==kt)return!1;if(!we)return og(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vh(t.type,t.memoizedProps)),e&&(e=Ct)){if(Mh(t))throw Dv(),Error(F(418));for(;e;)xv(t,e),e=pr(e.nextSibling)}if(og(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=kt?pr(t.stateNode.nextSibling):null;return!0}function Dv(){for(var t=Ct;t;)t=pr(t.nextSibling)}function ns(){Ct=kt=null,we=!1}function Zd(t){Gt===null?Gt=[t]:Gt.push(t)}var uS=Hn.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ag(t){var e=t._init;return e(t._payload)}function Vv(t){function e(E,_){if(t){var w=E.deletions;w===null?(E.deletions=[_],E.flags|=16):w.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=_r(E,_),E.index=0,E.sibling=null,E}function s(E,_,w){return E.index=w,t?(w=E.alternate,w!==null?(w=w.index,w<_?(E.flags|=2,_):w):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,w,D){return _===null||_.tag!==6?(_=Wc(w,E.mode,D),_.return=E,_):(_=i(_,w),_.return=E,_)}function u(E,_,w,D){var U=w.type;return U===xi?d(E,_,w.props.children,D,w.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Zn&&ag(U)===_.type)?(D=i(_,w.props),D.ref=Gs(E,_,w),D.return=E,D):(D=cl(w.type,w.key,w.props,null,E.mode,D),D.ref=Gs(E,_,w),D.return=E,D)}function c(E,_,w,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==w.containerInfo||_.stateNode.implementation!==w.implementation?(_=qc(w,E.mode,D),_.return=E,_):(_=i(_,w.children||[]),_.return=E,_)}function d(E,_,w,D,U){return _===null||_.tag!==7?(_=Zr(w,E.mode,D,U),_.return=E,_):(_=i(_,w),_.return=E,_)}function p(E,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Wc(""+_,E.mode,w),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Pa:return w=cl(_.type,_.key,_.props,null,E.mode,w),w.ref=Gs(E,null,_),w.return=E,w;case Ni:return _=qc(_,E.mode,w),_.return=E,_;case Zn:var D=_._init;return p(E,D(_._payload),w)}if(Zs(_)||zs(_))return _=Zr(_,E.mode,w,null),_.return=E,_;Fa(E,_)}return null}function m(E,_,w,D){var U=_!==null?_.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return U!==null?null:l(E,_,""+w,D);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Pa:return w.key===U?u(E,_,w,D):null;case Ni:return w.key===U?c(E,_,w,D):null;case Zn:return U=w._init,m(E,_,U(w._payload),D)}if(Zs(w)||zs(w))return U!==null?null:d(E,_,w,D,null);Fa(E,w)}return null}function I(E,_,w,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(w)||null,l(_,E,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Pa:return E=E.get(D.key===null?w:D.key)||null,u(_,E,D,U);case Ni:return E=E.get(D.key===null?w:D.key)||null,c(_,E,D,U);case Zn:var M=D._init;return I(E,_,w,M(D._payload),U)}if(Zs(D)||zs(D))return E=E.get(w)||null,d(_,E,D,U,null);Fa(_,D)}return null}function C(E,_,w,D){for(var U=null,M=null,T=_,y=_=0,v=null;T!==null&&y<w.length;y++){T.index>y?(v=T,T=null):v=T.sibling;var S=m(E,T,w[y],D);if(S===null){T===null&&(T=v);break}t&&T&&S.alternate===null&&e(E,T),_=s(S,_,y),M===null?U=S:M.sibling=S,M=S,T=v}if(y===w.length)return n(E,T),we&&Wr(E,y),U;if(T===null){for(;y<w.length;y++)T=p(E,w[y],D),T!==null&&(_=s(T,_,y),M===null?U=T:M.sibling=T,M=T);return we&&Wr(E,y),U}for(T=r(E,T);y<w.length;y++)v=I(T,E,y,w[y],D),v!==null&&(t&&v.alternate!==null&&T.delete(v.key===null?y:v.key),_=s(v,_,y),M===null?U=v:M.sibling=v,M=v);return t&&T.forEach(function(A){return e(E,A)}),we&&Wr(E,y),U}function P(E,_,w,D){var U=zs(w);if(typeof U!="function")throw Error(F(150));if(w=U.call(w),w==null)throw Error(F(151));for(var M=U=null,T=_,y=_=0,v=null,S=w.next();T!==null&&!S.done;y++,S=w.next()){T.index>y?(v=T,T=null):v=T.sibling;var A=m(E,T,S.value,D);if(A===null){T===null&&(T=v);break}t&&T&&A.alternate===null&&e(E,T),_=s(A,_,y),M===null?U=A:M.sibling=A,M=A,T=v}if(S.done)return n(E,T),we&&Wr(E,y),U;if(T===null){for(;!S.done;y++,S=w.next())S=p(E,S.value,D),S!==null&&(_=s(S,_,y),M===null?U=S:M.sibling=S,M=S);return we&&Wr(E,y),U}for(T=r(E,T);!S.done;y++,S=w.next())S=I(T,E,y,S.value,D),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?y:S.key),_=s(S,_,y),M===null?U=S:M.sibling=S,M=S);return t&&T.forEach(function(k){return e(E,k)}),we&&Wr(E,y),U}function N(E,_,w,D){if(typeof w=="object"&&w!==null&&w.type===xi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Pa:e:{for(var U=w.key,M=_;M!==null;){if(M.key===U){if(U=w.type,U===xi){if(M.tag===7){n(E,M.sibling),_=i(M,w.props.children),_.return=E,E=_;break e}}else if(M.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Zn&&ag(U)===M.type){n(E,M.sibling),_=i(M,w.props),_.ref=Gs(E,M,w),_.return=E,E=_;break e}n(E,M);break}else e(E,M);M=M.sibling}w.type===xi?(_=Zr(w.props.children,E.mode,D,w.key),_.return=E,E=_):(D=cl(w.type,w.key,w.props,null,E.mode,D),D.ref=Gs(E,_,w),D.return=E,E=D)}return o(E);case Ni:e:{for(M=w.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===w.containerInfo&&_.stateNode.implementation===w.implementation){n(E,_.sibling),_=i(_,w.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=qc(w,E.mode,D),_.return=E,E=_}return o(E);case Zn:return M=w._init,N(E,_,M(w._payload),D)}if(Zs(w))return C(E,_,w,D);if(zs(w))return P(E,_,w,D);Fa(E,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,w),_.return=E,E=_):(n(E,_),_=Wc(w,E.mode,D),_.return=E,E=_),o(E)):n(E,_)}return N}var rs=Vv(!0),Ov=Vv(!1),Ml=Lr(null),Ul=null,Fi=null,ef=null;function tf(){ef=Fi=Ul=null}function nf(t){var e=Ml.current;_e(Ml),t._currentValue=e}function Fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){Ul=t,ef=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(ef!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(Ul===null)throw Error(F(308));Fi=t,Ul.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Qr=null;function rf(t){Qr===null?Qr=[t]:Qr.push(t)}function Lv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rf(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,rf(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$d(t,n)}}function lg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(m=e,I=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){p=C.call(I,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,m=typeof C=="function"?C.call(I,p,m):C,m==null)break e;p=Re({},p,m);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=p):d=d.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);si|=o,t.lanes=o,t.memoizedState=p}}function ug(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ta={},cn=Lr(ta),Lo=Lr(ta),bo=Lr(ta);function Xr(t){if(t===ta)throw Error(F(174));return t}function of(t,e){switch(pe(bo,e),pe(Lo,t),pe(cn,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vh(e,t)}_e(cn),pe(cn,e)}function is(){_e(cn),_e(Lo),_e(bo)}function Mv(t){Xr(bo.current);var e=Xr(cn.current),n=vh(e,t.type);e!==n&&(pe(Lo,t),pe(cn,n))}function af(t){Lo.current===t&&(_e(cn),_e(Lo))}var Te=Lr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function lf(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var sl=Hn.ReactCurrentDispatcher,jc=Hn.ReactCurrentBatchConfig,ii=0,Ie=null,Be=null,Ge=null,Bl=!1,ho=!1,Mo=0,cS=0;function rt(){throw Error(F(321))}function uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function cf(t,e,n,r,i,s){if(ii=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?pS:mS,t=n(r,i),ho){s=0;do{if(ho=!1,Mo=0,25<=s)throw Error(F(301));s+=1,Ge=Be=null,e.updateQueue=null,sl.current=gS,t=n(r,i)}while(ho)}if(sl.current=zl,e=Be!==null&&Be.next!==null,ii=0,Ge=Be=Ie=null,Bl=!1,e)throw Error(F(300));return t}function hf(){var t=Mo!==0;return Mo=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function zt(){if(Be===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ge===null?Ie.memoizedState:Ge.next;if(e!==null)Ge=e,Be=t;else{if(t===null)throw Error(F(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Uo(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ii&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ie.lanes|=d,si|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Uv(){}function Fv(t,e){var n=Ie,r=zt(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,df(zv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Fo(9,Bv.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(F(349));ii&30||jv(n,e,i)}return i}function jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bv(t,e,n,r){e.value=n,e.getSnapshot=r,$v(e)&&Hv(t)}function zv(t,e,n){return n(function(){$v(e)&&Hv(t)})}function $v(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function Hv(t){var e=bn(t,1);e!==null&&Yt(e,t,1,-1)}function cg(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},e.queue=t,t=t.dispatch=fS.bind(null,Ie,t),[e.memoizedState,t]}function Fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Wv(){return zt().memoizedState}function ol(t,e,n,r){var i=sn();Ie.flags|=t,i.memoizedState=Fo(1|e,n,void 0,r===void 0?null:r)}function Tu(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&uf(r,o.deps)){i.memoizedState=Fo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Fo(1|e,n,s,r)}function hg(t,e){return ol(8390656,8,t,e)}function df(t,e){return Tu(2048,8,t,e)}function qv(t,e){return Tu(4,2,t,e)}function Gv(t,e){return Tu(4,4,t,e)}function Kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qv(t,e,n){return n=n!=null?n.concat([t]):null,Tu(4,4,Kv.bind(null,e,t),n)}function ff(){}function Xv(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yv(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jv(t,e,n){return ii&21?(Jt(n,e)||(n=rv(),Ie.lanes|=n,si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function hS(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=jc.transition;jc.transition={};try{t(!1),e()}finally{he=n,jc.transition=r}}function Zv(){return zt().memoizedState}function dS(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ew(t))tw(e,n);else if(n=Lv(t,e,n,r),n!==null){var i=mt();Yt(n,t,r,i),nw(n,e,r)}}function fS(t,e,n){var r=yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ew(t))tw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(i.next=i,rf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Lv(t,e,i,r),n!==null&&(i=mt(),Yt(n,t,r,i),nw(n,e,r))}}function ew(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function tw(t,e){ho=Bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$d(t,n)}}var zl={readContext:Bt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},pS={readContext:Bt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,Kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dS.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:cg,useDebugValue:ff,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=cg(!1),e=t[0];return t=hS.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=sn();if(we){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ke===null)throw Error(F(349));ii&30||jv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hg(zv.bind(null,r,s,t),[t]),r.flags|=2048,Fo(9,Bv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=Ke.identifierPrefix;if(we){var n=Cn,r=An;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Mo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mS={readContext:Bt,useCallback:Xv,useContext:Bt,useEffect:df,useImperativeHandle:Qv,useInsertionEffect:qv,useLayoutEffect:Gv,useMemo:Yv,useReducer:Bc,useRef:Wv,useState:function(){return Bc(Uo)},useDebugValue:ff,useDeferredValue:function(t){var e=zt();return Jv(e,Be.memoizedState,t)},useTransition:function(){var t=Bc(Uo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:Fv,useId:Zv,unstable_isNewReconciler:!1},gS={readContext:Bt,useCallback:Xv,useContext:Bt,useEffect:df,useImperativeHandle:Qv,useInsertionEffect:qv,useLayoutEffect:Gv,useMemo:Yv,useReducer:zc,useRef:Wv,useState:function(){return zc(Uo)},useDebugValue:ff,useDeferredValue:function(t){var e=zt();return Be===null?e.memoizedState=t:Jv(e,Be.memoizedState,t)},useTransition:function(){var t=zc(Uo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:Fv,useId:Zv,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=yr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(Yt(e,t,i,r),il(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=yr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(Yt(e,t,i,r),il(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=yr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(Yt(e,t,r,n),il(e,t,r))}};function dg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,r)||!xo(i,s):!0}function rw(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=It(e)?ni:ut.current,r=e.contextTypes,s=(r=r!=null)?ts(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function fg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function Bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=It(e)?ni:ut.current,i.context=ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Iu.enqueueReplaceState(i,i.state,null),Fl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ss(t,e){try{var n="",r=e;do n+=HI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yS=typeof WeakMap=="function"?WeakMap:Map;function iw(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hl||(Hl=!0,Jh=r),zh(t,e)},n}function sw(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zh(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xS.bind(null,t,e,n),e.then(t,t))}function mg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var _S=Hn.ReactCurrentOwner,Et=!1;function pt(t,e,n,r){e.child=t===null?Ov(e,null,n,r):rs(e,t.child,n,r)}function yg(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=cf(t,e,n,r,s,i),n=hf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(we&&n&&Yd(e),e.flags|=1,pt(t,e,r,i),e.child)}function _g(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ef(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ow(t,e,s,r,i)):(t=cl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=_r(s,r),t.ref=e.ref,t.return=e,e.child=t}function ow(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return $h(t,e,n,r,i)}function aw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Bi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Bi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Bi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Bi,At),At|=r;return pt(t,e,i,n),e.child}function lw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $h(t,e,n,r,i){var s=It(n)?ni:ut.current;return s=ts(e,s),Gi(e,i),n=cf(t,e,n,r,s,i),r=hf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(we&&r&&Yd(e),e.flags|=1,pt(t,e,n,i),e.child)}function vg(t,e,n,r,i){if(It(n)){var s=!0;Ol(e)}else s=!1;if(Gi(e,i),e.stateNode===null)al(t,e),rw(e,n,r),Bh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=It(n)?ni:ut.current,c=ts(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&fg(e,o,r,c),er=!1;var m=e.memoizedState;o.state=m,Fl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Tt.current||er?(typeof d=="function"&&(jh(e,n,d,r),u=e.memoizedState),(l=er||dg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,bv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Wt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=It(n)?ni:ut.current,u=ts(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&fg(e,o,r,u),er=!1,m=e.memoizedState,o.state=m,Fl(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||Tt.current||er?(typeof I=="function"&&(jh(e,n,I,r),C=e.memoizedState),(c=er||dg(e,n,c,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Hh(t,e,n,r,s,i)}function Hh(t,e,n,r,i,s){lw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ig(e,n,!1),Mn(t,e,s);r=e.stateNode,_S.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=rs(e,t.child,null,s),e.child=rs(e,null,l,s)):pt(t,e,l,s),e.memoizedState=r.state,i&&ig(e,n,!0),e.child}function uw(t){var e=t.stateNode;e.pendingContext?rg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rg(t,e.context,!1),of(t,e.containerInfo)}function wg(t,e,n,r,i){return ns(),Zd(i),e.flags|=256,pt(t,e,n,r),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function cw(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Te,i&1),t===null)return Uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Au(o,r,0,null),t=Zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qh(n),e.memoizedState=Wh,t):pf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wh,r}return s=t.child,t=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pf(t,e){return e=Au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,r){return r!==null&&Zd(r),rs(e,t.child,null,n),t=pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$c(Error(F(422))),ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Au({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&rs(e,t.child,null,o),e.child.memoizedState=qh(o),e.memoizedState=Wh,s);if(!(e.mode&1))return ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=$c(s,r,void 0),ja(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Yt(r,t,i,-1))}return wf(),r=$c(Error(F(421))),ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=DS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=pr(i.nextSibling),kt=e,we=!0,Gt=null,t!==null&&(Ot[Lt++]=An,Ot[Lt++]=Cn,Ot[Lt++]=ri,An=t.id,Cn=t.overflow,ri=e),e=pf(e,r.children),e.flags|=4096,e)}function Eg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fh(t.return,e,n)}function Hc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,n,e);else if(t.tag===19)Eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wS(t,e,n){switch(e.tag){case 3:uw(e),ns();break;case 5:Mv(e);break;case 1:It(e.type)&&Ol(e);break;case 4:of(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?cw(t,e,n):(pe(Te,Te.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);pe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,aw(t,e,n)}return Mn(t,e,n)}var dw,Gh,fw,pw;dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gh=function(){};fw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xr(cn.current);var s=null;switch(n){case"input":i=mh(t,i),r=mh(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=_h(t,i),r=_h(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Dl)}wh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(So.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(So.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ks(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ES(t,e,n){var r=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return It(e.type)&&Vl(),it(e),null;case 3:return r=e.stateNode,is(),_e(Tt),_e(ut),lf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(td(Gt),Gt=null))),Gh(t,e),it(e),null;case 5:af(e);var i=Xr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)fw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return it(e),null}if(t=Xr(cn.current),Ua(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[an]=e,r[Oo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<to.length;i++)ge(to[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Nm(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Dm(r,s),ge("invalid",r)}wh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),i=["children",""+l]):So.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":ka(r),xm(r,s,!0);break;case"textarea":ka(r),Vm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Dl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=z_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[an]=e,t[Oo]=r,dw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Eh(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<to.length;i++)ge(to[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":Nm(t,r),i=mh(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Dm(t,r),i=_h(t,r),ge("invalid",t);break;default:i=r}wh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?W_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ro(t,u):typeof u=="number"&&Ro(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(So.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&Md(t,s,u,o))}switch(n){case"input":ka(t),xm(t,r,!1);break;case"textarea":ka(t),Vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Xr(bo.current),Xr(cn.current),Ua(e)){if(r=e.stateNode,n=e.memoizedProps,r[an]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=e,e.stateNode=r}return it(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Ct!==null&&e.mode&1&&!(e.flags&128))Dv(),ns(),e.flags|=98560,s=!1;else if(s=Ua(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[an]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Gt!==null&&(td(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?ze===0&&(ze=3):wf())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return is(),Gh(t,e),t===null&&Do(e.stateNode.containerInfo),it(e),null;case 10:return nf(e.type._context),it(e),null;case 17:return It(e.type)&&Vl(),it(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ks(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,Ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>os&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return it(e),null}else 2*De()-s.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Te.current,pe(Te,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return vf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function TS(t,e){switch(Jd(e),e.tag){case 1:return It(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return is(),_e(Tt),_e(ut),lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return af(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return is(),null;case 10:return nf(e.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var Ba=!1,at=!1,IS=typeof WeakSet=="function"?WeakSet:Set,W=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Kh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Tg=!1;function SS(t,e){if(xh=kl,t=vv(),Xd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dh={focusedElem:t,selectionRange:n},kl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,N=C.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:Wt(e.type,P),N);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Pe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=Tg,Tg=!1,C}function fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kh(e,n,s)}i=i.next}while(i!==r)}}function Su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mw(t){var e=t.alternate;e!==null&&(t.alternate=null,mw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[an],delete e[Oo],delete e[Lh],delete e[oS],delete e[aS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gw(t){return t.tag===5||t.tag===3||t.tag===4}function Ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dl));else if(r!==4&&(t=t.child,t!==null))for(Xh(t,e,n),t=t.sibling;t!==null;)Xh(t,e,n),t=t.sibling}function Yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yh(t,e,n),t=t.sibling;t!==null;)Yh(t,e,n),t=t.sibling}var Qe=null,qt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)yw(t,e,n),n=n.sibling}function yw(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:at||ji(n,e);case 6:var r=Qe,i=qt;Qe=null,Yn(t,e,n),Qe=r,qt=i,Qe!==null&&(qt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(qt?(t=Qe,n=n.stateNode,t.nodeType===8?Mc(t.parentNode,n):t.nodeType===1&&Mc(t,n),ko(t)):Mc(Qe,n.stateNode));break;case 4:r=Qe,i=qt,Qe=n.stateNode.containerInfo,qt=!0,Yn(t,e,n),Qe=r,qt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kh(n,e,o),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!at&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Yn(t,e,n),at=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new IS),e.forEach(function(r){var i=VS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,qt=!1;break e;case 3:Qe=l.stateNode.containerInfo,qt=!0;break e;case 4:Qe=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(Qe===null)throw Error(F(160));yw(s,o,i),Qe=null,qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_w(e,t),e=e.sibling}function _w(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),rn(t),r&4){try{fo(3,t,t.return),Su(3,t)}catch(P){Pe(t,t.return,P)}try{fo(5,t,t.return)}catch(P){Pe(t,t.return,P)}}break;case 1:Ht(e,t),rn(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if(Ht(e,t),rn(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var i=t.stateNode;try{Ro(i,"")}catch(P){Pe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&j_(i,s),Eh(l,o);var c=Eh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?W_(i,p):d==="dangerouslySetInnerHTML"?$_(i,p):d==="children"?Ro(i,p):Md(i,d,p,c)}switch(l){case"input":gh(i,s);break;case"textarea":B_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?$i(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oo]=s}catch(P){Pe(t,t.return,P)}}break;case 6:if(Ht(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Pe(t,t.return,P)}}break;case 3:if(Ht(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(e.containerInfo)}catch(P){Pe(t,t.return,P)}break;case 4:Ht(e,t),rn(t);break;case 13:Ht(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yf=De())),r&4&&Sg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||d,Ht(e,t),at=c):Ht(e,t),rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,I=m.child,m.tag){case 0:case 11:case 14:case 15:fo(4,m,m.return);break;case 1:ji(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){Pe(r,n,P)}}break;case 5:ji(m,m.return);break;case 22:if(m.memoizedState!==null){Ag(p);continue}}I!==null?(I.return=m,W=I):Ag(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=H_("display",o))}catch(P){Pe(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Pe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ht(e,t),rn(t),r&4&&Sg(t);break;case 21:break;default:Ht(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ro(i,""),r.flags&=-33);var s=Ig(t);Yh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ig(t);Xh(t,l,o);break;default:throw Error(F(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RS(t,e,n){W=t,vw(t)}function vw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ba;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||at;l=Ba;var c=at;if(Ba=o,(at=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Cg(i):u!==null?(u.return=o,W=u):Cg(i);for(;s!==null;)W=s,vw(s),s=s.sibling;W=i,Ba=l,at=c}Rg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Rg(t)}}function Rg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Su(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ug(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ug(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ko(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}at||e.flags&512&&Qh(e)}catch(m){Pe(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ag(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Cg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Su(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Qh(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Qh(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var AS=Math.ceil,$l=Hn.ReactCurrentDispatcher,mf=Hn.ReactCurrentOwner,jt=Hn.ReactCurrentBatchConfig,ae=0,Ke=null,Le=null,Je=0,At=0,Bi=Lr(0),ze=0,jo=null,si=0,Ru=0,gf=0,po=null,wt=null,yf=0,os=1/0,Sn=null,Hl=!1,Jh=null,gr=null,za=!1,ur=null,Wl=0,mo=0,Zh=null,ll=-1,ul=0;function mt(){return ae&6?De():ll!==-1?ll:ll=De()}function yr(t){return t.mode&1?ae&2&&Je!==0?Je&-Je:uS.transition!==null?(ul===0&&(ul=rv()),ul):(t=he,t!==0||(t=window.event,t=t===void 0?16:cv(t.type)),t):1}function Yt(t,e,n,r){if(50<mo)throw mo=0,Zh=null,Error(F(185));Jo(t,n,r),(!(ae&2)||t!==Ke)&&(t===Ke&&(!(ae&2)&&(Ru|=n),ze===4&&nr(t,Je)),St(t,r),n===1&&ae===0&&!(e.mode&1)&&(os=De()+500,Eu&&br()))}function St(t,e){var n=t.callbackNode;u1(t,e);var r=Pl(t,t===Ke?Je:0);if(r===0)n!==null&&bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bm(n),e===1)t.tag===0?lS(Pg.bind(null,t)):kv(Pg.bind(null,t)),iS(function(){!(ae&6)&&br()}),n=null;else{switch(iv(r)){case 1:n=zd;break;case 4:n=tv;break;case 16:n=Cl;break;case 536870912:n=nv;break;default:n=Cl}n=Cw(n,ww.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ww(t,e){if(ll=-1,ul=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var r=Pl(t,t===Ke?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ql(t,r);else{e=r;var i=ae;ae|=2;var s=Tw();(Ke!==t||Je!==e)&&(Sn=null,os=De()+500,Jr(t,e));do try{kS();break}catch(l){Ew(t,l)}while(!0);tf(),$l.current=s,ae=i,Le!==null?e=0:(Ke=null,Je=0,e=ze)}if(e!==0){if(e===2&&(i=Ah(t),i!==0&&(r=i,e=ed(t,i))),e===1)throw n=jo,Jr(t,0),nr(t,r),St(t,De()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!CS(i)&&(e=ql(t,r),e===2&&(s=Ah(t),s!==0&&(r=s,e=ed(t,s))),e===1))throw n=jo,Jr(t,0),nr(t,r),St(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:qr(t,wt,Sn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=yf+500-De(),10<e)){if(Pl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oh(qr.bind(null,t,wt,Sn),e);break}qr(t,wt,Sn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*AS(r/1960))-r,10<r){t.timeoutHandle=Oh(qr.bind(null,t,wt,Sn),r);break}qr(t,wt,Sn);break;case 5:qr(t,wt,Sn);break;default:throw Error(F(329))}}}return St(t,De()),t.callbackNode===n?ww.bind(null,t):null}function ed(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=wt,wt=n,e!==null&&td(e)),t}function td(t){wt===null?wt=t:wt.push.apply(wt,t)}function CS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~gf,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function Pg(t){if(ae&6)throw Error(F(327));Ki();var e=Pl(t,0);if(!(e&1))return St(t,De()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var r=Ah(t);r!==0&&(e=r,n=ed(t,r))}if(n===1)throw n=jo,Jr(t,0),nr(t,e),St(t,De()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,wt,Sn),St(t,De()),null}function _f(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(os=De()+500,Eu&&br())}}function oi(t){ur!==null&&ur.tag===0&&!(ae&6)&&Ki();var e=ae;ae|=1;var n=jt.transition,r=he;try{if(jt.transition=null,he=1,t)return t()}finally{he=r,jt.transition=n,ae=e,!(ae&6)&&br()}}function vf(){At=Bi.current,_e(Bi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rS(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Jd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vl();break;case 3:is(),_e(Tt),_e(ut),lf();break;case 5:af(r);break;case 4:is();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:nf(r.type._context);break;case 22:case 23:vf()}n=n.return}if(Ke=t,Le=t=_r(t.current,null),Je=At=e,ze=0,jo=null,gf=Ru=si=0,wt=po=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function Ew(t,e){do{var n=Le;try{if(tf(),sl.current=zl,Bl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bl=!1}if(ii=0,Ge=Be=Ie=null,ho=!1,Mo=0,mf.current=null,n===null||n.return===null){ze=1,jo=e,Le=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=mg(o);if(I!==null){I.flags&=-257,gg(I,o,l,s,e),I.mode&1&&pg(s,c,e),e=I,u=c;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){pg(s,c,e),wf();break e}u=Error(F(426))}}else if(we&&l.mode&1){var N=mg(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),gg(N,o,l,s,e),Zd(ss(u,l));break e}}s=u=ss(u,l),ze!==4&&(ze=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=iw(s,u,e);lg(s,E);break e;case 1:l=u;var _=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(gr===null||!gr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=sw(s,l,e);lg(s,D);break e}}s=s.return}while(s!==null)}Sw(n)}catch(U){e=U,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Tw(){var t=$l.current;return $l.current=zl,t===null?zl:t}function wf(){(ze===0||ze===3||ze===2)&&(ze=4),Ke===null||!(si&268435455)&&!(Ru&268435455)||nr(Ke,Je)}function ql(t,e){var n=ae;ae|=2;var r=Tw();(Ke!==t||Je!==e)&&(Sn=null,Jr(t,e));do try{PS();break}catch(i){Ew(t,i)}while(!0);if(tf(),ae=n,$l.current=r,Le!==null)throw Error(F(261));return Ke=null,Je=0,ze}function PS(){for(;Le!==null;)Iw(Le)}function kS(){for(;Le!==null&&!e1();)Iw(Le)}function Iw(t){var e=Aw(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?Sw(t):Le=e,mf.current=null}function Sw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TS(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Le=null;return}}else if(n=ES(n,e,At),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);ze===0&&(ze=5)}function qr(t,e,n){var r=he,i=jt.transition;try{jt.transition=null,he=1,NS(t,e,n,r)}finally{jt.transition=i,he=r}return null}function NS(t,e,n,r){do Ki();while(ur!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(c1(t,s),t===Ke&&(Le=Ke=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,Cw(Cl,function(){return Ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=he;he=1;var l=ae;ae|=4,mf.current=null,SS(t,n),_w(n,t),X1(Dh),kl=!!xh,Dh=xh=null,t.current=n,RS(n),t1(),ae=l,he=o,jt.transition=s}else t.current=n;if(za&&(za=!1,ur=t,Wl=i),s=t.pendingLanes,s===0&&(gr=null),i1(n.stateNode),St(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,t=Jh,Jh=null,t;return Wl&1&&t.tag!==0&&Ki(),s=t.pendingLanes,s&1?t===Zh?mo++:(mo=0,Zh=t):mo=0,br(),null}function Ki(){if(ur!==null){var t=iv(Wl),e=jt.transition,n=he;try{if(jt.transition=null,he=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,Wl=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,I=d.return;if(mw(d),d===c){W=null;break}if(m!==null){m.return=I,W=m;break}W=I}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,W=E;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,W=w;else e:for(o=_;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Su(9,l)}}catch(U){Pe(l,l.return,U)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(ae=i,br(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(gu,t)}catch{}r=!0}return r}finally{he=n,jt.transition=e}}return!1}function kg(t,e,n){e=ss(n,e),e=iw(t,e,1),t=mr(t,e,1),e=mt(),t!==null&&(Jo(t,1,e),St(t,e))}function Pe(t,e,n){if(t.tag===3)kg(t,t,n);else for(;e!==null;){if(e.tag===3){kg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=ss(n,t),t=sw(e,t,1),e=mr(e,t,1),t=mt(),e!==null&&(Jo(e,1,t),St(e,t));break}}e=e.return}}function xS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(Je&n)===n&&(ze===4||ze===3&&(Je&130023424)===Je&&500>De()-yf?Jr(t,0):gf|=n),St(t,e)}function Rw(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=mt();t=bn(t,e),t!==null&&(Jo(t,e,n),St(t,n))}function DS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rw(t,n)}function VS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Rw(t,n)}var Aw;Aw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,wS(t,e,n);Et=!!(t.flags&131072)}else Et=!1,we&&e.flags&1048576&&Nv(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;al(t,e),t=e.pendingProps;var i=ts(e,ut.current);Gi(e,n),i=cf(null,e,r,t,i,n);var s=hf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,Ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sf(e),i.updater=Iu,e.stateNode=i,i._reactInternals=e,Bh(e,r,t,n),e=Hh(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Yd(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=LS(r),t=Wt(r,t),i){case 0:e=$h(null,e,r,t,n);break e;case 1:e=vg(null,e,r,t,n);break e;case 11:e=yg(null,e,r,t,n);break e;case 14:e=_g(null,e,r,Wt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),$h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),vg(t,e,r,i,n);case 3:e:{if(uw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,bv(t,e),Fl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ss(Error(F(423)),e),e=wg(t,e,r,n,i);break e}else if(r!==i){i=ss(Error(F(424)),e),e=wg(t,e,r,n,i);break e}else for(Ct=pr(e.stateNode.containerInfo.firstChild),kt=e,we=!0,Gt=null,n=Ov(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),r===i){e=Mn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return Mv(e),t===null&&Uh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vh(r,i)?o=null:s!==null&&Vh(r,s)&&(e.flags|=32),lw(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&Uh(e),null;case 13:return cw(t,e,n);case 4:return of(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=rs(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),yg(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Ml,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!Tt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Fh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=Bt(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),_g(t,e,r,i,n);case 15:return ow(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),al(t,e),e.tag=1,It(r)?(t=!0,Ol(e)):t=!1,Gi(e,n),rw(e,r,i),Bh(e,r,i,n),Hh(null,e,r,!0,t,n);case 19:return hw(t,e,n);case 22:return aw(t,e,n)}throw Error(F(156,e.tag))};function Cw(t,e){return ev(t,e)}function OS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new OS(t,e,n,r)}function Ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LS(t){if(typeof t=="function")return Ef(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===jd)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ef(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xi:return Zr(n.children,i,s,e);case Ud:o=8,i|=8;break;case hh:return t=Ft(12,n,e,i|2),t.elementType=hh,t.lanes=s,t;case dh:return t=Ft(13,n,e,i),t.elementType=dh,t.lanes=s,t;case fh:return t=Ft(19,n,e,i),t.elementType=fh,t.lanes=s,t;case M_:return Au(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L_:o=10;break e;case b_:o=9;break e;case Fd:o=11;break e;case jd:o=14;break e;case Zn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Au(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=M_,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function qc(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tf(t,e,n,r,i,s,o,l,u){return t=new bS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sf(s),t}function MS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Pw(t){if(!t)return Rr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(It(n))return Pv(t,n,e)}return e}function kw(t,e,n,r,i,s,o,l,u){return t=Tf(n,r,!0,t,i,s,o,l,u),t.context=Pw(null),n=t.current,r=mt(),i=yr(n),s=Nn(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,Jo(t,i,r),St(t,r),t}function Cu(t,e,n,r){var i=e.current,s=mt(),o=yr(i);return n=Pw(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,o),t!==null&&(Yt(t,i,o,s),il(t,i,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ng(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){Ng(t,e),(t=t.alternate)&&Ng(t,e)}function US(){return null}var Nw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sf(t){this._internalRoot=t}Pu.prototype.render=Sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Cu(t,e,null,null)};Pu.prototype.unmount=Sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oi(function(){Cu(null,t,null,null)}),e[Ln]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&uv(t)}};function Rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xg(){}function FS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Gl(o);s.call(c)}}var o=kw(e,r,t,0,null,!1,!1,"",xg);return t._reactRootContainer=o,t[Ln]=o.current,Do(t.nodeType===8?t.parentNode:t),oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Gl(u);l.call(c)}}var u=Tf(t,0,!1,null,null,!1,!1,"",xg);return t._reactRootContainer=u,t[Ln]=u.current,Do(t.nodeType===8?t.parentNode:t),oi(function(){Cu(e,u,n,r)}),u}function Nu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Gl(o);l.call(u)}}Cu(e,o,t,i)}else o=FS(n,e,t,i,r);return Gl(o)}sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&($d(e,n|1),St(e,De()),!(ae&6)&&(os=De()+500,br()))}break;case 13:oi(function(){var r=bn(t,1);if(r!==null){var i=mt();Yt(r,t,1,i)}}),If(t,1)}};Hd=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=mt();Yt(e,t,134217728,n)}If(t,134217728)}};ov=function(t){if(t.tag===13){var e=yr(t),n=bn(t,e);if(n!==null){var r=mt();Yt(n,t,e,r)}If(t,e)}};av=function(){return he};lv=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Ih=function(t,e,n){switch(e){case"input":if(gh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wu(r);if(!i)throw Error(F(90));F_(r),gh(r,i)}}}break;case"textarea":B_(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};K_=_f;Q_=oi;var jS={usingClientEntryPoint:!1,Events:[ea,Li,wu,q_,G_,_f]},Qs={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BS={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J_(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||US,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{gu=$a.inject(BS),un=$a}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(e))throw Error(F(200));return MS(t,e,null,n)};xt.createRoot=function(t,e){if(!Rf(t))throw Error(F(299));var n=!1,r="",i=Nw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tf(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,Do(t.nodeType===8?t.parentNode:t),new Sf(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=J_(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return oi(t)};xt.hydrate=function(t,e,n){if(!ku(e))throw Error(F(200));return Nu(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!Rf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Nw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kw(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,Do(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pu(e)};xt.render=function(t,e,n){if(!ku(e))throw Error(F(200));return Nu(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!ku(t))throw Error(F(40));return t._reactRootContainer?(oi(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};xt.unstable_batchedUpdates=_f;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ku(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Nu(t,e,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function xw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xw)}catch(t){console.error(t)}}xw(),x_.exports=xt;var zS=x_.exports,Dg=zS;uh.createRoot=Dg.createRoot,uh.hydrateRoot=Dg.hydrateRoot;/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vg="popstate";function $S(t={}){function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return nd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bo(i)}return WS(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Zt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function HS(){return Math.random().toString(36).substring(2,10)}function Og(t,e){return{usr:t.state,key:t.key,idx:e}}function nd(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ys(e):e,state:n,key:e&&e.key||r||HS()}}function Bo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ys(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function WS(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){l="POP";let N=d(),E=N==null?null:N-c;c=N,u&&u({action:l,location:P.location,delta:E})}function m(N,E){l="PUSH";let _=nd(P.location,N,E);c=d()+1;let w=Og(_,c),D=P.createHref(_);try{o.pushState(w,"",D)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(D)}s&&u&&u({action:l,location:P.location,delta:1})}function I(N,E){l="REPLACE";let _=nd(P.location,N,E);c=d();let w=Og(_,c),D=P.createHref(_);o.replaceState(w,"",D),s&&u&&u({action:l,location:P.location,delta:0})}function C(N){return qS(N)}let P={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Vg,p),u=N,()=>{i.removeEventListener(Vg,p),u=null}},createHref(N){return e(i,N)},createURL:C,encodeLocation(N){let E=C(N);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:I,go(N){return o.go(N)}};return P}function qS(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Se(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Bo(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Dw(t,e,n="/"){return GS(t,e,n,!1)}function GS(t,e,n,r){let i=typeof e=="string"?ys(e):e,s=Un(i.pathname||"/",n);if(s==null)return null;let o=Vw(t);KS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=sR(s);l=rR(o[u],c,r)}return l}function Vw(t,e=[],n=[],r="",i=!1){let s=(o,l,u=i,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&u)return;Se(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let p=xn([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(Se(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Vw(o.children,e,m,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:tR(p,o.index),routesMeta:m})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,l);else for(let c of Ow(o.path))s(o,l,!0,c)}),e}function Ow(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Ow(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function KS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var QS=/^:[\w-]+$/,XS=3,YS=2,JS=1,ZS=10,eR=-2,Lg=t=>t==="*";function tR(t,e){let n=t.split("/"),r=n.length;return n.some(Lg)&&(r+=eR),e&&(r+=YS),n.filter(i=>!Lg(i)).reduce((i,s)=>i+(QS.test(s)?XS:s===""?JS:ZS),r)}function nR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rR(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Kl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Kl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:xn([s,p.pathname]),pathnameBase:cR(xn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=xn([s,p.pathnameBase]))}return o}function Kl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:p},m)=>{if(d==="*"){let C=l[m]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const I=l[m];return p&&!I?c[d]=void 0:c[d]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function iR(t,e=!1,n=!0){Zt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Zt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Un(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var oR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aR=t=>oR.test(t);function lR(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ys(t):t,s;if(n)if(aR(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Zt(!1,`Pathnames cannot have embedded double slashes - normalizing ${o} -> ${n}`)}n.startsWith("/")?s=bg(n.substring(1),"/"):s=bg(n,e)}else s=e;return{pathname:s,search:hR(r),hash:dR(i)}}function bg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gc(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Lw(t){let e=uR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function bw(t,e,n,r=!1){let i;typeof t=="string"?i=ys(t):(i={...t},Se(!i.pathname||!i.pathname.includes("?"),Gc("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Gc("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Gc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=lR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var xn=t=>t.join("/").replace(/\/\/+/g,"/"),cR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mw=["POST","PUT","PATCH","DELETE"];new Set(Mw);var pR=["GET",...Mw];new Set(pR);var _s=V.createContext(null);_s.displayName="DataRouter";var xu=V.createContext(null);xu.displayName="DataRouterState";V.createContext(!1);var Uw=V.createContext({isTransitioning:!1});Uw.displayName="ViewTransition";var mR=V.createContext(new Map);mR.displayName="Fetchers";var gR=V.createContext(null);gR.displayName="Await";var vn=V.createContext(null);vn.displayName="Navigation";var na=V.createContext(null);na.displayName="Location";var wn=V.createContext({outlet:null,matches:[],isDataRoute:!1});wn.displayName="Route";var Af=V.createContext(null);Af.displayName="RouteError";function yR(t,{relative:e}={}){Se(ra(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=V.useContext(vn),{hash:i,pathname:s,search:o}=ia(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:xn([n,s])),r.createHref({pathname:l,search:o,hash:i})}function ra(){return V.useContext(na)!=null}function mi(){return Se(ra(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(na).location}var Fw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jw(t){V.useContext(vn).static||V.useLayoutEffect(t)}function Bw(){let{isDataRoute:t}=V.useContext(wn);return t?xR():_R()}function _R(){Se(ra(),"useNavigate() may be used only in the context of a <Router> component.");let t=V.useContext(_s),{basename:e,navigator:n}=V.useContext(vn),{matches:r}=V.useContext(wn),{pathname:i}=mi(),s=JSON.stringify(Lw(r)),o=V.useRef(!1);return jw(()=>{o.current=!0}),V.useCallback((u,c={})=>{if(Zt(o.current,Fw),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=bw(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:xn([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}V.createContext(null);function vR(){let{matches:t}=V.useContext(wn),e=t[t.length-1];return e?e.params:{}}function ia(t,{relative:e}={}){let{matches:n}=V.useContext(wn),{pathname:r}=mi(),i=JSON.stringify(Lw(n));return V.useMemo(()=>bw(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function wR(t,e){return zw(t,e)}function zw(t,e,n,r,i){var _;Se(ra(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=V.useContext(vn),{matches:o}=V.useContext(wn),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let w=p&&p.path||"";$w(c,!p||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let m=mi(),I;if(e){let w=typeof e=="string"?ys(e):e;Se(d==="/"||((_=w.pathname)==null?void 0:_.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${w.pathname}" was given in the \`location\` prop.`),I=w}else I=m;let C=I.pathname||"/",P=C;if(d!=="/"){let w=d.replace(/^\//,"").split("/");P="/"+C.replace(/^\//,"").split("/").slice(w.length).join("/")}let N=Dw(t,{pathname:P});Zt(p||N!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Zt(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=RR(N&&N.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:xn([d,s.encodeLocation?s.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?d:xn([d,s.encodeLocation?s.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),o,n,r,i);return e&&E?V.createElement(na.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},E):E}function ER(){let t=NR(),e=fR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:s},"ErrorBoundary")," or"," ",V.createElement("code",{style:s},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,o)}var TR=V.createElement(ER,null),IR=class extends V.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?V.createElement(wn.Provider,{value:this.props.routeContext},V.createElement(Af.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function SR({routeContext:t,match:e,children:n}){let r=V.useContext(_s);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),V.createElement(wn.Provider,{value:t},n)}function RR(t,e=[],n=null,r=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let d=s.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);Se(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:I}=n,C=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!I||I[p.route.id]===void 0);if(p.route.lazy||C){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}let c=n&&r?(d,p)=>{var m,I;r(d,{location:n.location,params:((I=(m=n.matches)==null?void 0:m[0])==null?void 0:I.params)??{},errorInfo:p})}:void 0;return s.reduceRight((d,p,m)=>{let I,C=!1,P=null,N=null;n&&(I=o&&p.route.id?o[p.route.id]:void 0,P=p.route.errorElement||TR,l&&(u<0&&m===0?($w("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,N=null):u===m&&(C=!0,N=p.route.hydrateFallbackElement||null)));let E=e.concat(s.slice(0,m+1)),_=()=>{let w;return I?w=P:C?w=N:p.route.Component?w=V.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=d,V.createElement(SR,{match:p,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:w})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?V.createElement(IR,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0},onError:c}):_()},null)}function Cf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function AR(t){let e=V.useContext(_s);return Se(e,Cf(t)),e}function CR(t){let e=V.useContext(xu);return Se(e,Cf(t)),e}function PR(t){let e=V.useContext(wn);return Se(e,Cf(t)),e}function Pf(t){let e=PR(t),n=e.matches[e.matches.length-1];return Se(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function kR(){return Pf("useRouteId")}function NR(){var r;let t=V.useContext(Af),e=CR("useRouteError"),n=Pf("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function xR(){let{router:t}=AR("useNavigate"),e=Pf("useNavigate"),n=V.useRef(!1);return jw(()=>{n.current=!0}),V.useCallback(async(i,s={})=>{Zt(n.current,Fw),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var Mg={};function $w(t,e,n){!e&&!Mg[t]&&(Mg[t]=!0,Zt(!1,n))}V.memo(DR);function DR({routes:t,future:e,state:n,unstable_onError:r}){return zw(t,void 0,n,r,e)}function hl(t){Se(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function VR({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){Se(!ra(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=V.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=ys(n));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:m="default"}=n,I=V.useMemo(()=>{let C=Un(u,o);return C==null?null:{location:{pathname:C,search:c,hash:d,state:p,key:m},navigationType:r}},[o,u,c,d,p,m,r]);return Zt(I!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:V.createElement(vn.Provider,{value:l},V.createElement(na.Provider,{children:e,value:I}))}function OR({children:t,location:e}){return wR(rd(t),e)}function rd(t,e=[]){let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,rd(r.props.children,s));return}Se(r.type===hl,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Se(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rd(r.props.children,s)),n.push(o)}),n}var dl="get",fl="application/x-www-form-urlencoded";function Du(t){return t!=null&&typeof t.tagName=="string"}function LR(t){return Du(t)&&t.tagName.toLowerCase()==="button"}function bR(t){return Du(t)&&t.tagName.toLowerCase()==="form"}function MR(t){return Du(t)&&t.tagName.toLowerCase()==="input"}function UR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FR(t,e){return t.button===0&&(!e||e==="_self")&&!UR(t)}var Ha=null;function jR(){if(Ha===null)try{new FormData(document.createElement("form"),0),Ha=!1}catch{Ha=!0}return Ha}var BR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kc(t){return t!=null&&!BR.has(t)?(Zt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fl}"`),null):t}function zR(t,e){let n,r,i,s,o;if(bR(t)){let l=t.getAttribute("action");r=l?Un(l,e):null,n=t.getAttribute("method")||dl,i=Kc(t.getAttribute("enctype"))||fl,s=new FormData(t)}else if(LR(t)||MR(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?Un(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||dl,i=Kc(t.getAttribute("formenctype"))||Kc(l.getAttribute("enctype"))||fl,s=new FormData(l,t),!jR()){let{name:c,type:d,value:p}=t;if(d==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(Du(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=dl,r=null,i=fl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $R(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Un(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function HR(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function WR(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function qR(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await HR(s,n);return o.links?o.links():[]}return[]}));return XR(r.flat(1).filter(WR).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Ug(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function GR(t,e,{includeHydrateFallback:n}={}){return KR(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function KR(t){return[...new Set(t)]}function QR(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function XR(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(QR(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Hw(){let t=V.useContext(_s);return kf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function YR(){let t=V.useContext(xu);return kf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Nf=V.createContext(void 0);Nf.displayName="FrameworkContext";function Ww(){let t=V.useContext(Nf);return kf(t,"You must render this element inside a <HydratedRouter> element"),t}function JR(t,e){let n=V.useContext(Nf),[r,i]=V.useState(!1),[s,o]=V.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,m=V.useRef(null);V.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let P=E=>{E.forEach(_=>{o(_.isIntersecting)})},N=new IntersectionObserver(P,{threshold:.5});return m.current&&N.observe(m.current),()=>{N.disconnect()}}},[t]),V.useEffect(()=>{if(r){let P=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(P)}}},[r]);let I=()=>{i(!0)},C=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:Xs(l,I),onBlur:Xs(u,C),onMouseEnter:Xs(c,I),onMouseLeave:Xs(d,C),onTouchStart:Xs(p,I)}]:[!1,m,{}]}function Xs(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function ZR({page:t,...e}){let{router:n}=Hw(),r=V.useMemo(()=>Dw(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?V.createElement(tA,{page:t,matches:r,...e}):null}function eA(t){let{manifest:e,routeModules:n}=Ww(),[r,i]=V.useState([]);return V.useEffect(()=>{let s=!1;return qR(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function tA({page:t,matches:e,...n}){let r=mi(),{manifest:i,routeModules:s}=Ww(),{basename:o}=Hw(),{loaderData:l,matches:u}=YR(),c=V.useMemo(()=>Ug(t,e,u,i,r,"data"),[t,e,u,i,r]),d=V.useMemo(()=>Ug(t,e,u,i,r,"assets"),[t,e,u,i,r]),p=V.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let C=new Set,P=!1;if(e.forEach(E=>{var w;let _=i.routes[E.route.id];!_||!_.hasLoader||(!c.some(D=>D.route.id===E.route.id)&&E.route.id in l&&((w=s[E.route.id])!=null&&w.shouldRevalidate)||_.hasClientLoader?P=!0:C.add(E.route.id))}),C.size===0)return[];let N=$R(t,o,"data");return P&&C.size>0&&N.searchParams.set("_routes",e.filter(E=>C.has(E.route.id)).map(E=>E.route.id).join(",")),[N.pathname+N.search]},[o,l,r,i,c,e,t,s]),m=V.useMemo(()=>GR(d,i),[d,i]),I=eA(d);return V.createElement(V.Fragment,null,p.map(C=>V.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...n})),m.map(C=>V.createElement("link",{key:C,rel:"modulepreload",href:C,...n})),I.map(({key:C,link:P})=>V.createElement("link",{key:C,nonce:n.nonce,...P})))}function nA(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var qw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qw&&(window.__reactRouterVersion="7.9.6")}catch{}function rA({basename:t,children:e,window:n}){let r=V.useRef();r.current==null&&(r.current=$S({window:n,v5Compat:!0}));let i=r.current,[s,o]=V.useState({action:i.action,location:i.location}),l=V.useCallback(u=>{V.startTransition(()=>o(u))},[o]);return V.useLayoutEffect(()=>i.listen(l),[i,l]),V.createElement(VR,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var Gw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,go=V.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p,...m},I){let{basename:C}=V.useContext(vn),P=typeof c=="string"&&Gw.test(c),N,E=!1;if(typeof c=="string"&&P&&(N=c,qw))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),A=Un(S.pathname,C);S.origin===v.origin&&A!=null?c=A+S.search+S.hash:E=!0}catch{Zt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=yR(c,{relative:i}),[w,D,U]=JR(r,m),M=aA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function T(v){e&&e(v),v.defaultPrevented||M(v)}let y=V.createElement("a",{...m,...U,href:N||_,onClick:E||s?e:T,ref:nA(I,D),target:u,"data-discover":!P&&n==="render"?"true":void 0});return w&&!P?V.createElement(V.Fragment,null,y,V.createElement(ZR,{page:_})):y});go.displayName="Link";var iA=V.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},d){let p=ia(o,{relative:c.relative}),m=mi(),I=V.useContext(xu),{navigator:C,basename:P}=V.useContext(vn),N=I!=null&&dA(p)&&l===!0,E=C.encodeLocation?C.encodeLocation(p).pathname:p.pathname,_=m.pathname,w=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(_=_.toLowerCase(),w=w?w.toLowerCase():null,E=E.toLowerCase()),w&&P&&(w=Un(w,P)||w);const D=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let U=_===E||!i&&_.startsWith(E)&&_.charAt(D)==="/",M=w!=null&&(w===E||!i&&w.startsWith(E)&&w.charAt(E.length)==="/"),T={isActive:U,isPending:M,isTransitioning:N},y=U?e:void 0,v;typeof r=="function"?v=r(T):v=[r,U?"active":null,M?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let S=typeof s=="function"?s(T):s;return V.createElement(go,{...c,"aria-current":y,className:v,ref:d,style:S,to:o,viewTransition:l},typeof u=="function"?u(T):u)});iA.displayName="NavLink";var sA=V.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=dl,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,...m},I)=>{let C=cA(),P=hA(l,{relative:c}),N=o.toLowerCase()==="get"?"get":"post",E=typeof l=="string"&&Gw.test(l),_=w=>{if(u&&u(w),w.defaultPrevented)return;w.preventDefault();let D=w.nativeEvent.submitter,U=(D==null?void 0:D.getAttribute("formmethod"))||o;C(D||w.currentTarget,{fetcherKey:e,method:U,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p})};return V.createElement("form",{ref:I,method:N,action:P,onSubmit:r?u:_,...m,"data-discover":!E&&t==="render"?"true":void 0})});sA.displayName="Form";function oA(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kw(t){let e=V.useContext(_s);return Se(e,oA(t)),e}function aA(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let l=Bw(),u=mi(),c=ia(t,{relative:s});return V.useCallback(d=>{if(FR(d,e)){d.preventDefault();let p=n!==void 0?n:Bo(u)===Bo(c);l(t,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[u,l,c,n,r,e,t,i,s,o])}var lA=0,uA=()=>`__${String(++lA)}__`;function cA(){let{router:t}=Kw("useSubmit"),{basename:e}=V.useContext(vn),n=kR();return V.useCallback(async(r,i={})=>{let{action:s,method:o,encType:l,formData:u,body:c}=zR(r,e);if(i.navigate===!1){let d=i.fetcherKey||uA();await t.fetch(d,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||l,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function hA(t,{relative:e}={}){let{basename:n}=V.useContext(vn),r=V.useContext(wn);Se(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...ia(t||".",{relative:e})},o=mi();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let d=l.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:xn([n,s.pathname])),Bo(s)}function dA(t,{relative:e}={}){let n=V.useContext(Uw);Se(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Kw("useViewTransitionState"),i=ia(t,{relative:e});if(!n.isTransitioning)return!1;let s=Un(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Un(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Kl(i.pathname,o)!=null||Kl(i.pathname,s)!=null}/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Fg=t=>{const e=pA(t);return e.charAt(0).toUpperCase()+e.slice(1)},Qw=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),mA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=V.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>V.createElement("svg",{ref:u,...gA,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Qw("lucide",i),...!s&&!mA(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,d])=>V.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(t,e)=>{const n=V.forwardRef(({className:r,...i},s)=>V.createElement(yA,{ref:s,iconNode:e,className:Qw(`lucide-${fA(Fg(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Fg(t),n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],vA=$t("arrow-left",_A);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],EA=$t("calendar",wA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Xw=$t("clock",TA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],jg=$t("mic",IA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],RA=$t("pause",SA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],CA=$t("pen-tool",AA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],id=$t("play",PA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],NA=$t("plus",kA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],DA=$t("rotate-ccw",xA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],OA=$t("save",VA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],bA=$t("share-2",LA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],UA=$t("square",MA),FA=()=>{};var Bg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new BA;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zA=function(t){const e=Yw(t);return Jw.encodeByteArray(e,!0)},Ql=function(t){return zA(t).replace(/\./g,"")},Zw=function(t){try{return Jw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $A(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HA=()=>$A().__FIREBASE_DEFAULTS__,WA=()=>{if(typeof process>"u"||typeof Bg>"u")return;const t=Bg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zw(t[1]);return e&&JSON.parse(e)},Vu=()=>{try{return FA()||HA()||WA()||qA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eE=t=>{var e,n;return(n=(e=Vu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},tE=t=>{const e=eE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nE=()=>{var t;return(t=Vu())==null?void 0:t.config},rE=t=>{var e;return(e=Vu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function iE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ql(JSON.stringify(n)),Ql(JSON.stringify(o)),""].join(".")}const yo={};function KA(){const t={prod:[],emulator:[]};for(const e of Object.keys(yo))yo[e]?t.emulator.push(e):t.prod.push(e);return t}function QA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let zg=!1;function Df(t,e){if(typeof window>"u"||typeof document>"u"||!Mr(window.location.host)||yo[t]===e||yo[t]||zg)return;yo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=KA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{zg=!0,o()},m}function d(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=QA(r),I=n("text"),C=document.getElementById(I)||document.createElement("span"),P=n("learnmore"),N=document.getElementById(P)||document.createElement("a"),E=n("preprendIcon"),_=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const w=m.element;l(w),d(N,P);const D=c();u(_,E),w.append(_,C,N,D),document.body.appendChild(w)}s?(C.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function YA(){var e;const t=(e=Vu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tC(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nC(){return!YA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rC(){try{return typeof indexedDB=="object"}catch{return!1}}function iC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sC,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sa.prototype.create)}}class sa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new En(i,l,r)}}function oC(t,e){return t.replace(aC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aC=/\{\$([^}]+)}/g;function lC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ai(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($g(s)&&$g(o)){if(!ai(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $g(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uC(t,e){const n=new cC(t,e);return n.subscribe.bind(n)}class cC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qc),i.error===void 0&&(i.error=Qc),i.complete===void 0&&(i.complete=Qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qc(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class dC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new GA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pC(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fC(t){return t===Gr?void 0:t}function pC(t){return t.instantiationMode==="EAGER"}/**
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
 */class mC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const gC={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},yC=re.INFO,_C={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},vC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_C[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vf{constructor(e){this.name=e,this._logLevel=yC,this._logHandler=vC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const wC=(t,e)=>e.some(n=>t instanceof n);let Hg,Wg;function EC(){return Hg||(Hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TC(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sE=new WeakMap,sd=new WeakMap,oE=new WeakMap,Xc=new WeakMap,Of=new WeakMap;function IC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sE.set(n,t)}).catch(()=>{}),Of.set(e,t),e}function SC(t){if(sd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sd.set(t,e)}let od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RC(t){od=t(od)}function AC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yc(this),e,...n);return oE.set(r,e.sort?e.sort():[e]),vr(r)}:TC().includes(t)?function(...e){return t.apply(Yc(this),e),vr(sE.get(this))}:function(...e){return vr(t.apply(Yc(this),e))}}function CC(t){return typeof t=="function"?AC(t):(t instanceof IDBTransaction&&SC(t),wC(t,EC())?new Proxy(t,od):t)}function vr(t){if(t instanceof IDBRequest)return IC(t);if(Xc.has(t))return Xc.get(t);const e=CC(t);return e!==t&&(Xc.set(t,e),Of.set(e,t)),e}const Yc=t=>Of.get(t);function PC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vr(o.result),u.oldVersion,u.newVersion,vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const kC=["get","getKey","getAll","getAllKeys","count"],NC=["put","add","delete","clear"],Jc=new Map;function qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jc.get(e))return Jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Jc.set(e,s),s}RC(t=>({...t,get:(e,n,r)=>qg(e,n)||t.get(e,n,r),has:(e,n)=>!!qg(e,n)||t.has(e,n)}));/**
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
 */class xC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ad="@firebase/app",Gg="0.14.6";/**
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
 */const Fn=new Vf("@firebase/app"),VC="@firebase/app-compat",OC="@firebase/analytics-compat",LC="@firebase/analytics",bC="@firebase/app-check-compat",MC="@firebase/app-check",UC="@firebase/auth",FC="@firebase/auth-compat",jC="@firebase/database",BC="@firebase/data-connect",zC="@firebase/database-compat",$C="@firebase/functions",HC="@firebase/functions-compat",WC="@firebase/installations",qC="@firebase/installations-compat",GC="@firebase/messaging",KC="@firebase/messaging-compat",QC="@firebase/performance",XC="@firebase/performance-compat",YC="@firebase/remote-config",JC="@firebase/remote-config-compat",ZC="@firebase/storage",eP="@firebase/storage-compat",tP="@firebase/firestore",nP="@firebase/ai",rP="@firebase/firestore-compat",iP="firebase",sP="12.6.0";/**
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
 */const ld="[DEFAULT]",oP={[ad]:"fire-core",[VC]:"fire-core-compat",[LC]:"fire-analytics",[OC]:"fire-analytics-compat",[MC]:"fire-app-check",[bC]:"fire-app-check-compat",[UC]:"fire-auth",[FC]:"fire-auth-compat",[jC]:"fire-rtdb",[BC]:"fire-data-connect",[zC]:"fire-rtdb-compat",[$C]:"fire-fn",[HC]:"fire-fn-compat",[WC]:"fire-iid",[qC]:"fire-iid-compat",[GC]:"fire-fcm",[KC]:"fire-fcm-compat",[QC]:"fire-perf",[XC]:"fire-perf-compat",[YC]:"fire-rc",[JC]:"fire-rc-compat",[ZC]:"fire-gcs",[eP]:"fire-gcs-compat",[tP]:"fire-fst",[rP]:"fire-fst-compat",[nP]:"fire-vertex","fire-js":"fire-js",[iP]:"fire-js-all"};/**
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
 */const Xl=new Map,aP=new Map,ud=new Map;function Kg(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function li(t){const e=t.name;if(ud.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;ud.set(e,t);for(const n of Xl.values())Kg(n,t);for(const n of aP.values())Kg(n,t);return!0}function Ou(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const lP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new sa("app","Firebase",lP);/**
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
 */class uP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const gi=sP;function aE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ld,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=nE()),!n)throw wr.create("no-options");const s=Xl.get(i);if(s){if(ai(n,s.options)&&ai(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new mC(i);for(const u of ud.values())o.addComponent(u);const l=new uP(n,r,o);return Xl.set(i,l),l}function Lf(t=ld){const e=Xl.get(t);if(!e&&t===ld&&nE())return aE();if(!e)throw wr.create("no-app",{appName:t});return e}function hn(t,e,n){let r=oP[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(o.join(" "));return}li(new Ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const cP="firebase-heartbeat-database",hP=1,zo="firebase-heartbeat-store";let Zc=null;function lE(){return Zc||(Zc=PC(cP,hP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Zc}async function dP(t){try{const n=(await lE()).transaction(zo),r=await n.objectStore(zo).get(uE(t));return await n.done,r}catch(e){if(e instanceof En)Fn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function Qg(t,e){try{const r=(await lE()).transaction(zo,"readwrite");await r.objectStore(zo).put(e,uE(t)),await r.done}catch(n){if(n instanceof En)Fn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function uE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fP=1024,pP=30;class mP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>pP){const o=_P(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xg(),{heartbeatsToSend:r,unsentEntries:i}=gP(this._heartbeatsCache.heartbeats),s=Ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Fn.warn(n),""}}}function Xg(){return new Date().toISOString().substring(0,10)}function gP(t,e=fP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rC()?iC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yg(t){return Ql(JSON.stringify({version:2,heartbeats:t})).length}function _P(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function vP(t){li(new Ar("platform-logger",e=>new xC(e),"PRIVATE")),li(new Ar("heartbeat",e=>new mP(e),"PRIVATE")),hn(ad,Gg,t),hn(ad,Gg,"esm2020"),hn("fire-js","")}vP("");var wP="firebase",EP="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(wP,EP,"app");function cE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TP=cE,hE=new sa("auth","Firebase",cE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new Vf("@firebase/auth");function IP(t,...e){Yl.logLevel<=re.WARN&&Yl.warn(`Auth (${gi}): ${t}`,...e)}function pl(t,...e){Yl.logLevel<=re.ERROR&&Yl.error(`Auth (${gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,...e){throw bf(t,...e)}function dn(t,...e){return bf(t,...e)}function dE(t,e,n){const r={...TP(),[e]:n};return new sa("auth","Firebase",r).create(e,{appName:t.name})}function Er(t){return dE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hE.create(t,...e)}function Y(t,e,...n){if(!t)throw bf(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pl(e),new Error(e)}function Bn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function SP(){return Jg()==="http:"||Jg()==="https:"}function Jg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SP()||ZA()||"connection"in navigator)?navigator.onLine:!0}function AP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=XA()||eC()}get(){return RP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kP=new aa(3e4,6e4);function Lu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function vs(t,e,n,r,i={}){return pE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=oa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return JA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Mr(t.emulatorConfig.host)&&(c.credentials="include"),fE.fetch()(await gE(t,t.config.apiHost,n,l),c)})}async function pE(t,e,n){t._canInitEmulator=!1;const r={...CP,...e};try{const i=new NP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Wa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Wa(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw dE(t,d,c);jn(t,d)}}catch(i){if(i instanceof En)throw i;jn(t,"network-request-failed",{message:String(i)})}}async function mE(t,e,n,r,i={}){const s=await vs(t,e,n,r,i);return"mfaPendingCredential"in s&&jn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function gE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Mf(t.config,i):`${t.config.apiScheme}://${i}`;return PP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class NP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),kP.get())})}}function Wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return vs(t,"POST","/v1/accounts:delete",e)}async function Jl(t,e){return vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DP(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=Uf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_o(eh(i.auth_time)),issuedAtTime:_o(eh(i.iat)),expirationTime:_o(eh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function eh(t){return Number(t)*1e3}function Uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zw(n);return i?JSON.parse(i):(pl("Failed to decode base64 JWT payload"),null)}catch(i){return pl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zg(t){const e=Uf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&VP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await $o(t,Jl(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?yE(i.providerUserInfo):[],o=bP(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new hd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function LP(t){const e=et(t);await Zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t,e){const n=await pE(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await gE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Mr(t.emulatorConfig.host)&&(u.credentials="include"),fE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UP(t,e){return vs(t,"POST","/v2/accounts:revokeToken",Lu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Zg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await MP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new OP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $o(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DP(this,e)}reload(){return LP(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await $o(this,xP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:I,providerData:C,stsTokenManager:P}=n;Y(p&&P,e,"internal-error");const N=Qi.fromJSON(this.name,P);Y(typeof p=="string",e,"internal-error"),Jn(r,e.name),Jn(i,e.name),Y(typeof m=="boolean",e,"internal-error"),Y(typeof I=="boolean",e,"internal-error"),Jn(s,e.name),Jn(o,e.name),Jn(l,e.name),Jn(u,e.name),Jn(c,e.name),Jn(d,e.name);const E=new Kt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:N,createdAt:c,lastLoginAt:d});return C&&Array.isArray(C)&&(E.providerData=C.map(_=>({..._}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qi;i.updateFromServerResponse(n);const s=new Kt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Qi;l.updateFromIdToken(r);const u=new Kt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new hd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Map;function kn(t){Bn(t instanceof Function,"Expected a class definition");let e=ey.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ey.set(t,e),e)}/**
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
 */class _E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_E.type="NONE";const ty=_E;/**
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
 */function ml(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ml(this.userKey,i.apiKey,s),this.fullPersistenceKey=ml("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jl(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(kn(ty),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(ty);const o=ml(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await Jl(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Kt._fromGetAccountInfoResponse(e,m,d)}else p=Kt._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Xi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SE(e))return"Blackberry";if(RE(e))return"Webos";if(wE(e))return"Safari";if((e.includes("chrome/")||EE(e))&&!e.includes("edge/"))return"Chrome";if(IE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vE(t=ct()){return/firefox\//i.test(t)}function wE(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function EE(t=ct()){return/crios\//i.test(t)}function TE(t=ct()){return/iemobile/i.test(t)}function IE(t=ct()){return/android/i.test(t)}function SE(t=ct()){return/blackberry/i.test(t)}function RE(t=ct()){return/webos/i.test(t)}function Ff(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FP(t=ct()){var e;return Ff(t)&&!!((e=window.navigator)!=null&&e.standalone)}function jP(){return tC()&&document.documentMode===10}function AE(t=ct()){return Ff(t)||IE(t)||RE(t)||SE(t)||/windows phone/i.test(t)||TE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e=[]){let n;switch(t){case"Browser":n=ny(ct());break;case"Worker":n=`${ny(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${r}`}/**
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
 */class BP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zP(t,e={}){return vs(t,"GET","/v2/passwordPolicy",Lu(t,e))}/**
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
 */const $P=6;class HP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$P,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ry(this),this.idTokenSubscription=new ry(this),this.beforeStateQueue=new BP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jl(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(Er(this));const n=e?et(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zP(this),n=new HP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&IP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function bu(t){return et(t)}class ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=uC(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qP(t){jf=t}function GP(t){return jf.loadJS(t)}function KP(){return jf.gapiScript}function QP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t,e){const n=Ou(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ai(s,e??{}))return i;jn(i,"already-initialized")}return n.initialize({options:e})}function YP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JP(t,e,n){const r=bu(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=PE(e),{host:o,port:l}=ZP(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(ai(c,r.config.emulator)&&ai(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Mr(o)?(xf(`${s}//${o}${u}`),Df("Auth",!0)):ek()}function PE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZP(t){const e=PE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:iy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:iy(o)}}}function iy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ek(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e){return mE(t,"POST","/v1/accounts:signInWithIdp",Lu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="http://localhost";class ui extends kE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ui(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:tk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class la extends NE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends la{constructor(){super("facebook.com")}static credential(e){return ui._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends la{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ui._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends la{constructor(){super("github.com")}static credential(e){return ui._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends la{constructor(){super("twitter.com")}static credential(e,n){return ui._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e){return mE(t,"POST","/v1/accounts:signUp",Lu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kt._fromIdTokenResponse(e,r,i),o=sy(r);return new Cr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sy(r);return new Cr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t){var i;if(bt(t.app))return Promise.reject(Er(t));const e=bu(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Cr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await nk(e,{returnSecureToken:!0}),r=await Cr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends En{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,eu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new eu(e,n,r,i)}}function xE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?eu._fromErrorAndOperation(t,s,e,r):s})}async function ik(t,e,n=!1){const r=await $o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",r)}/**
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
 */async function sk(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(Er(r));const i="reauthenticate";try{const s=await $o(t,xE(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Uf(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Cr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e,n=!1){if(bt(t.app))return Promise.reject(Er(t));const r="signIn",i=await xE(t,r,e),s=await Cr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function ak(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function lk(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function uk(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}const tu="__sak";/**
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
 */class DE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tu,"1"),this.storage.removeItem(tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=1e3,hk=10;class VE extends DE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=AE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VE.type="LOCAL";const dk=VE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends DE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OE.type="SESSION";const LE=OE;/**
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
 */function fk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await fk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Bf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function mk(t){fn().location.href=t}/**
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
 */function bE(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function gk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function _k(){return bE()?self:null}/**
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
 */const ME="firebaseLocalStorageDb",vk=1,nu="firebaseLocalStorage",UE="fbase_key";class ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uu(t,e){return t.transaction([nu],e?"readwrite":"readonly").objectStore(nu)}function wk(){const t=indexedDB.deleteDatabase(ME);return new ua(t).toPromise()}function dd(){const t=indexedDB.open(ME,vk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nu,{keyPath:UE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nu)?e(r):(r.close(),await wk(),e(await dd()))})})}async function oy(t,e,n){const r=Uu(t,!0).put({[UE]:e,value:n});return new ua(r).toPromise()}async function Ek(t,e){const n=Uu(t,!1).get(e),r=await new ua(n).toPromise();return r===void 0?null:r.value}function ay(t,e){const n=Uu(t,!0).delete(e);return new ua(n).toPromise()}const Tk=800,Ik=3;class FE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ik)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mu._getInstance(_k()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await gk(),!this.activeServiceWorker)return;this.sender=new pk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dd();return await oy(e,tu,"1"),await ay(e,tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ek(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ay(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uu(i,!1).getAll();return new ua(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FE.type="LOCAL";const Sk=FE;new aa(3e4,6e4);/**
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
 */function Rk(t,e){return e?kn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zf extends kE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ak(t){return ok(t.auth,new zf(t),t.bypassAuthState)}function Ck(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),sk(n,new zf(t),t.bypassAuthState)}async function Pk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),ik(n,new zf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ak;case"linkViaPopup":case"linkViaRedirect":return Pk;case"reauthViaPopup":case"reauthViaRedirect":return Ck;default:jn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new aa(2e3,1e4);class zi extends jE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kk.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="pendingRedirect",gl=new Map;class xk extends jE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gl.get(this.auth._key());if(!e){try{const r=await Dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gl.set(this.auth._key(),e)}return this.bypassAuthState||gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dk(t,e){const n=Lk(e),r=Ok(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Vk(t,e){gl.set(t._key(),e)}function Ok(t){return kn(t._redirectPersistence)}function Lk(t){return ml(Nk,t.config.apiKey,t.name)}async function bk(t,e,n=!1){if(bt(t.app))return Promise.reject(Er(t));const r=bu(t),i=Rk(r,e),o=await new xk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=10*60*1e3;class Uk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mk&&this.cachedEventUids.clear(),this.cachedEventUids.has(ly(e))}saveEventToCache(e){this.cachedEventUids.add(ly(e)),this.lastProcessedEventTime=Date.now()}}function ly(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e={}){return vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zk=/^https?/;async function $k(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jk(t);for(const n of e)try{if(Hk(n))return}catch{}jn(t,"unauthorized-domain")}function Hk(t){const e=cd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zk.test(n))return!1;if(Bk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Wk=new aa(3e4,6e4);function uy(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qk(t){return new Promise((e,n)=>{var i,s,o;function r(){uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uy(),n(dn(t,"network-request-failed"))},timeout:Wk.get()})}if((s=(i=fn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=fn().gapi)!=null&&o.load)r();else{const l=QP("iframefcb");return fn()[l]=()=>{gapi.load?r():n(dn(t,"network-request-failed"))},GP(`${KP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw yl=null,e})}let yl=null;function Gk(t){return yl=yl||qk(t),yl}/**
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
 */const Kk=new aa(5e3,15e3),Qk="__/auth/iframe",Xk="emulator/auth/iframe",Yk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zk(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,Xk):`https://${t.config.authDomain}/${Qk}`,r={apiKey:e.apiKey,appName:t.name,v:gi},i=Jk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oa(r).slice(1)}`}async function eN(t){const e=await Gk(t),n=fn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:Zk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=fn().setTimeout(()=>{s(o)},Kk.get());function u(){fn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const tN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nN=500,rN=600,iN="_blank",sN="http://localhost";class cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oN(t,e,n,r=nN,i=rN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...tN,width:r.toString(),height:i.toString(),top:s,left:o},c=ct().toLowerCase();n&&(l=EE(c)?iN:n),vE(c)&&(e=e||sN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,C])=>`${m}${I}=${C},`,"");if(FP(c)&&l!=="_self")return aN(e||"",l),new cy(null);const p=window.open(e||"",l,d);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new cy(p)}function aN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lN="__/auth/handler",uN="emulator/auth/handler",cN=encodeURIComponent("fac");async function hy(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gi,eventId:i};if(e instanceof NE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof la){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${cN}=${encodeURIComponent(u)}`:"";return`${hN(t)}?${oa(l).slice(1)}${c}`}function hN({config:t}){return t.emulator?Mf(t,uN):`https://${t.authDomain}/${lN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="webStorageSupport";class dN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LE,this._completeRedirectFn=bk,this._overrideRedirectResult=Vk}async _openPopup(e,n,r,i){var o;Bn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await hy(e,n,r,cd(),i);return oN(e,s,Bf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hy(e,n,r,cd(),i);return mk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eN(e),r=new Uk(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(th,{type:th},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[th];s!==void 0&&n(!!s),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$k(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return AE()||wE()||Ff()}}const fN=dN;var dy="@firebase/auth",fy="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gN(t){li(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CE(t)},c=new WP(r,i,s,u);return YP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),li(new Ar("auth-internal",e=>{const n=bu(e.getProvider("auth").getImmediate());return(r=>new pN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(dy,fy,mN(t)),hn(dy,fy,"esm2020")}/**
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
 */const yN=5*60,_N=rE("authIdTokenMaxAge")||yN;let py=null;const vN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_N)return;const i=n==null?void 0:n.token;py!==i&&(py=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wN(t=Lf()){const e=Ou(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XP(t,{popupRedirectResolver:fN,persistence:[Sk,dk,LE]}),r=rE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=vN(s.toString());lk(n,o,()=>o(n.currentUser)),ak(n,l=>o(l))}}const i=eE("auth");return i&&JP(n,`http://${i}`),n}function EN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}qP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gN("Browser");var my=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,zE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function v(){}v.prototype=y.prototype,T.F=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.D=function(S,A,k){for(var R=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)R[Ue-2]=arguments[Ue];return y.prototype[A].apply(S,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,v){v||(v=0);const S=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)S[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;A<16;++A)S[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],A=T.g[2];let k=T.g[3],R;R=y+(k^v&(A^k))+S[0]+3614090360&4294967295,y=v+(R<<7&4294967295|R>>>25),R=k+(A^y&(v^A))+S[1]+3905402710&4294967295,k=y+(R<<12&4294967295|R>>>20),R=A+(v^k&(y^v))+S[2]+606105819&4294967295,A=k+(R<<17&4294967295|R>>>15),R=v+(y^A&(k^y))+S[3]+3250441966&4294967295,v=A+(R<<22&4294967295|R>>>10),R=y+(k^v&(A^k))+S[4]+4118548399&4294967295,y=v+(R<<7&4294967295|R>>>25),R=k+(A^y&(v^A))+S[5]+1200080426&4294967295,k=y+(R<<12&4294967295|R>>>20),R=A+(v^k&(y^v))+S[6]+2821735955&4294967295,A=k+(R<<17&4294967295|R>>>15),R=v+(y^A&(k^y))+S[7]+4249261313&4294967295,v=A+(R<<22&4294967295|R>>>10),R=y+(k^v&(A^k))+S[8]+1770035416&4294967295,y=v+(R<<7&4294967295|R>>>25),R=k+(A^y&(v^A))+S[9]+2336552879&4294967295,k=y+(R<<12&4294967295|R>>>20),R=A+(v^k&(y^v))+S[10]+4294925233&4294967295,A=k+(R<<17&4294967295|R>>>15),R=v+(y^A&(k^y))+S[11]+2304563134&4294967295,v=A+(R<<22&4294967295|R>>>10),R=y+(k^v&(A^k))+S[12]+1804603682&4294967295,y=v+(R<<7&4294967295|R>>>25),R=k+(A^y&(v^A))+S[13]+4254626195&4294967295,k=y+(R<<12&4294967295|R>>>20),R=A+(v^k&(y^v))+S[14]+2792965006&4294967295,A=k+(R<<17&4294967295|R>>>15),R=v+(y^A&(k^y))+S[15]+1236535329&4294967295,v=A+(R<<22&4294967295|R>>>10),R=y+(A^k&(v^A))+S[1]+4129170786&4294967295,y=v+(R<<5&4294967295|R>>>27),R=k+(v^A&(y^v))+S[6]+3225465664&4294967295,k=y+(R<<9&4294967295|R>>>23),R=A+(y^v&(k^y))+S[11]+643717713&4294967295,A=k+(R<<14&4294967295|R>>>18),R=v+(k^y&(A^k))+S[0]+3921069994&4294967295,v=A+(R<<20&4294967295|R>>>12),R=y+(A^k&(v^A))+S[5]+3593408605&4294967295,y=v+(R<<5&4294967295|R>>>27),R=k+(v^A&(y^v))+S[10]+38016083&4294967295,k=y+(R<<9&4294967295|R>>>23),R=A+(y^v&(k^y))+S[15]+3634488961&4294967295,A=k+(R<<14&4294967295|R>>>18),R=v+(k^y&(A^k))+S[4]+3889429448&4294967295,v=A+(R<<20&4294967295|R>>>12),R=y+(A^k&(v^A))+S[9]+568446438&4294967295,y=v+(R<<5&4294967295|R>>>27),R=k+(v^A&(y^v))+S[14]+3275163606&4294967295,k=y+(R<<9&4294967295|R>>>23),R=A+(y^v&(k^y))+S[3]+4107603335&4294967295,A=k+(R<<14&4294967295|R>>>18),R=v+(k^y&(A^k))+S[8]+1163531501&4294967295,v=A+(R<<20&4294967295|R>>>12),R=y+(A^k&(v^A))+S[13]+2850285829&4294967295,y=v+(R<<5&4294967295|R>>>27),R=k+(v^A&(y^v))+S[2]+4243563512&4294967295,k=y+(R<<9&4294967295|R>>>23),R=A+(y^v&(k^y))+S[7]+1735328473&4294967295,A=k+(R<<14&4294967295|R>>>18),R=v+(k^y&(A^k))+S[12]+2368359562&4294967295,v=A+(R<<20&4294967295|R>>>12),R=y+(v^A^k)+S[5]+4294588738&4294967295,y=v+(R<<4&4294967295|R>>>28),R=k+(y^v^A)+S[8]+2272392833&4294967295,k=y+(R<<11&4294967295|R>>>21),R=A+(k^y^v)+S[11]+1839030562&4294967295,A=k+(R<<16&4294967295|R>>>16),R=v+(A^k^y)+S[14]+4259657740&4294967295,v=A+(R<<23&4294967295|R>>>9),R=y+(v^A^k)+S[1]+2763975236&4294967295,y=v+(R<<4&4294967295|R>>>28),R=k+(y^v^A)+S[4]+1272893353&4294967295,k=y+(R<<11&4294967295|R>>>21),R=A+(k^y^v)+S[7]+4139469664&4294967295,A=k+(R<<16&4294967295|R>>>16),R=v+(A^k^y)+S[10]+3200236656&4294967295,v=A+(R<<23&4294967295|R>>>9),R=y+(v^A^k)+S[13]+681279174&4294967295,y=v+(R<<4&4294967295|R>>>28),R=k+(y^v^A)+S[0]+3936430074&4294967295,k=y+(R<<11&4294967295|R>>>21),R=A+(k^y^v)+S[3]+3572445317&4294967295,A=k+(R<<16&4294967295|R>>>16),R=v+(A^k^y)+S[6]+76029189&4294967295,v=A+(R<<23&4294967295|R>>>9),R=y+(v^A^k)+S[9]+3654602809&4294967295,y=v+(R<<4&4294967295|R>>>28),R=k+(y^v^A)+S[12]+3873151461&4294967295,k=y+(R<<11&4294967295|R>>>21),R=A+(k^y^v)+S[15]+530742520&4294967295,A=k+(R<<16&4294967295|R>>>16),R=v+(A^k^y)+S[2]+3299628645&4294967295,v=A+(R<<23&4294967295|R>>>9),R=y+(A^(v|~k))+S[0]+4096336452&4294967295,y=v+(R<<6&4294967295|R>>>26),R=k+(v^(y|~A))+S[7]+1126891415&4294967295,k=y+(R<<10&4294967295|R>>>22),R=A+(y^(k|~v))+S[14]+2878612391&4294967295,A=k+(R<<15&4294967295|R>>>17),R=v+(k^(A|~y))+S[5]+4237533241&4294967295,v=A+(R<<21&4294967295|R>>>11),R=y+(A^(v|~k))+S[12]+1700485571&4294967295,y=v+(R<<6&4294967295|R>>>26),R=k+(v^(y|~A))+S[3]+2399980690&4294967295,k=y+(R<<10&4294967295|R>>>22),R=A+(y^(k|~v))+S[10]+4293915773&4294967295,A=k+(R<<15&4294967295|R>>>17),R=v+(k^(A|~y))+S[1]+2240044497&4294967295,v=A+(R<<21&4294967295|R>>>11),R=y+(A^(v|~k))+S[8]+1873313359&4294967295,y=v+(R<<6&4294967295|R>>>26),R=k+(v^(y|~A))+S[15]+4264355552&4294967295,k=y+(R<<10&4294967295|R>>>22),R=A+(y^(k|~v))+S[6]+2734768916&4294967295,A=k+(R<<15&4294967295|R>>>17),R=v+(k^(A|~y))+S[13]+1309151649&4294967295,v=A+(R<<21&4294967295|R>>>11),R=y+(A^(v|~k))+S[4]+4149444226&4294967295,y=v+(R<<6&4294967295|R>>>26),R=k+(v^(y|~A))+S[11]+3174756917&4294967295,k=y+(R<<10&4294967295|R>>>22),R=A+(y^(k|~v))+S[2]+718787259&4294967295,A=k+(R<<15&4294967295|R>>>17),R=v+(k^(A|~y))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(A+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+k&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const v=y-this.blockSize,S=this.C;let A=this.h,k=0;for(;k<y;){if(A==0)for(;k<=v;)i(this,T,k),k+=this.blockSize;if(typeof T=="string"){for(;k<y;)if(S[A++]=T.charCodeAt(k++),A==this.blockSize){i(this,S),A=0;break}}else for(;k<y;)if(S[A++]=T[k++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var v=T.length-8;v<T.length;++v)T[v]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,v=0;v<4;++v)for(let S=0;S<32;S+=8)T[y++]=this.g[v]>>>S&255;return T};function s(T,y){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function o(T,y){this.h=y;const v=[];let S=!0;for(let A=T.length-1;A>=0;A--){const k=T[A]|0;S&&k==y||(v[A]=k,S=!1)}this.g=v}var l={};function u(T){return-128<=T&&T<128?s(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return N(c(-T));const y=[];let v=1;for(let S=0;T>=v;S++)y[S]=T/v|0,v*=4294967296;return new o(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return N(d(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=c(Math.pow(y,8));let S=p;for(let k=0;k<T.length;k+=8){var A=Math.min(8,T.length-k);const R=parseInt(T.substring(k,k+A),y);A<8?(A=c(Math.pow(y,A)),S=S.j(A).add(c(R))):(S=S.j(v),S=S.add(c(R)))}return S}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();let T=0,y=1;for(let v=0;v<this.g.length;v++){const S=this.i(v);T+=(S>=0?S:4294967296+S)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(P(this))return"-"+N(this).toString(T);const y=c(Math.pow(T,6));var v=this;let S="";for(;;){const A=D(v,y).g;v=E(v,A.j(y));let k=((v.g.length>0?v.g[0]:v.h)>>>0).toString(T);if(v=A,C(v))return k+S;for(;k.length<6;)k="0"+k;S=k+S}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=E(this,T),P(T)?-1:C(T)?0:1};function N(T){const y=T.g.length,v=[];for(let S=0;S<y;S++)v[S]=~T.g[S];return new o(v,~T.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(T){const y=Math.max(this.g.length,T.g.length),v=[];let S=0;for(let A=0;A<=y;A++){let k=S+(this.i(A)&65535)+(T.i(A)&65535),R=(k>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);S=R>>>16,k&=65535,R&=65535,v[A]=R<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function E(T,y){return T.add(N(y))}t.j=function(T){if(C(this)||C(T))return p;if(P(this))return P(T)?N(this).j(N(T)):N(N(this).j(T));if(P(T))return N(this.j(N(T)));if(this.l(I)<0&&T.l(I)<0)return c(this.m()*T.m());const y=this.g.length+T.g.length,v=[];for(var S=0;S<2*y;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<T.g.length;A++){const k=this.i(S)>>>16,R=this.i(S)&65535,Ue=T.i(A)>>>16,Vt=T.i(A)&65535;v[2*S+2*A]+=R*Vt,_(v,2*S+2*A),v[2*S+2*A+1]+=k*Vt,_(v,2*S+2*A+1),v[2*S+2*A+1]+=R*Ue,_(v,2*S+2*A+1),v[2*S+2*A+2]+=k*Ue,_(v,2*S+2*A+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new o(v,0)};function _(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function w(T,y){this.g=T,this.h=y}function D(T,y){if(C(y))throw Error("division by zero");if(C(T))return new w(p,p);if(P(T))return y=D(N(T),y),new w(N(y.g),N(y.h));if(P(y))return y=D(T,N(y)),new w(N(y.g),y.h);if(T.g.length>30){if(P(T)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,S=y;S.l(T)<=0;)v=U(v),S=U(S);var A=M(v,1),k=M(S,1);for(S=M(S,2),v=M(v,2);!C(S);){var R=k.add(S);R.l(T)<=0&&(A=A.add(v),k=R),S=M(S,1),v=M(v,1)}return y=E(T,A.j(y)),new w(A,y)}for(A=p;T.l(y)>=0;){for(v=Math.max(1,Math.floor(T.m()/y.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),k=c(v),R=k.j(y);P(R)||R.l(T)>0;)v-=S,k=c(v),R=k.j(y);C(k)&&(k=m),A=A.add(k),T=E(T,R)}return new w(A,T)}t.B=function(T){return D(this,T).h},t.and=function(T){const y=Math.max(this.g.length,T.g.length),v=[];for(let S=0;S<y;S++)v[S]=this.i(S)&T.i(S);return new o(v,this.h&T.h)},t.or=function(T){const y=Math.max(this.g.length,T.g.length),v=[];for(let S=0;S<y;S++)v[S]=this.i(S)|T.i(S);return new o(v,this.h|T.h)},t.xor=function(T){const y=Math.max(this.g.length,T.g.length),v=[];for(let S=0;S<y;S++)v[S]=this.i(S)^T.i(S);return new o(v,this.h^T.h)};function U(T){const y=T.g.length+1,v=[];for(let S=0;S<y;S++)v[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(v,T.h)}function M(T,y){const v=y>>5;y%=32;const S=T.g.length-v,A=[];for(let k=0;k<S;k++)A[k]=y>0?T.i(k+v)>>>y|T.i(k+v+1)<<32-y:T.i(k+v);return new o(A,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,zE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Tr=o}).apply(typeof my<"u"?my:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $E,no,HE,_l,fd,WE,qE,GE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,x,O){for(var B=Array(arguments.length-2),te=2;te<arguments.length;te++)B[te-2]=arguments[te];return h.prototype[x].apply(g,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const x=arguments[g];var f=typeof x;if(f=f!="object"?f:x?Array.isArray(x)?"array":f:"null",f=="array"||f=="object"&&typeof x.length=="number"){f=a.length||0;const O=x.length||0;a.length=f+O;for(let B=0;B<O;B++)a[f+B]=x[B]}else a.push(x)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){o.setTimeout(()=>{throw a},0)}function E(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,f){const g=w.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var w=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let U,M=!1,T=new _,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(v)}};function v(){for(var a;a=E();){try{a.h.call(a.g)}catch(f){N(f)}var h=w;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}M=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function R(a){return/^[\s\xa0]*$/.test(a)}function Ue(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ue,A),Ue.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vt="closure_listenable_"+(Math.random()*1e6|0),Ur=0;function Fr(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++Ur,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function Z(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function ce(a){const h={};for(const f in a)h[f]=a[f];return h}const Ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tn(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let O=0;O<Ee.length;O++)f=Ee[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function _t(a){this.src=a,this.g={},this.h=0}_t.prototype.add=function(a,h,f,g,x){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const B=K(a,h,g,x);return B>-1?(h=a[B],f||(h.fa=!1)):(h=new Fr(h,this.src,O,!!g,x),h.fa=f,a.push(h)),h};function q(a,h){const f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),O;(O=x>=0)&&Array.prototype.splice.call(g,x,1),O&&(z(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function K(a,h,f,g){for(let x=0;x<a.length;++x){const O=a[x];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return x}return-1}var le="closure_lm_"+(Math.random()*1e6|0),ve={};function Ve(a,h,f,g,x){if(Array.isArray(h)){for(let O=0;O<h.length;O++)Ve(a,h[O],f,g,x);return null}return f=kp(f),a&&a[Vt]?a.J(h,f,l(g)?!!g.capture:!1,x):Fe(a,h,f,!1,g,x)}function Fe(a,h,f,g,x,O){if(!h)throw Error("Invalid event type");const B=l(x)?!!x.capture:!!x;let te=nc(a);if(te||(a[le]=te=new _t(a)),f=te.add(h,f,g,B,O),f.proxy)return f;if(g=Rs(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)k||(x=B),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(Pp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Rs(){function a(f){return h.call(a.src,a.listener,f)}const h=zT;return a}function In(a,h,f,g,x){if(Array.isArray(h))for(var O=0;O<h.length;O++)In(a,h[O],f,g,x);else g=l(g)?!!g.capture:!!g,f=kp(f),a&&a[Vt]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],f=K(h,f,g,x),f>-1&&(z(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=nc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=K(h,f,g,x)),(f=a>-1?h[a]:null)&&tc(f))}function tc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Vt])q(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Pp(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=nc(h))?(q(f,a),f.h==0&&(f.src=null,h[le]=null)):z(a)}}}function Pp(a){return a in ve?ve[a]:ve[a]="on"+a}function zT(a,h){if(a.da)a=!0;else{h=new Ue(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&tc(a),a=f.call(g,h)}return a}function nc(a){return a=a[le],a instanceof _t?a:null}var rc="__closure_events_fn_"+(Math.random()*1e9>>>0);function kp(a){return typeof a=="function"?a:(a[rc]||(a[rc]=function(h){return a.handleEvent(h)}),a[rc])}function nt(){S.call(this),this.i=new _t(this),this.M=this,this.G=null}p(nt,S),nt.prototype[Vt]=!0,nt.prototype.removeEventListener=function(a,h,f,g){In(this,a,h,f,g)};function ht(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var x=h;h=new A(g,a),Tn(h,x)}x=!0;let O,B;if(f)for(B=f.length-1;B>=0;B--)O=h.g=f[B],x=ma(O,g,!0,h)&&x;if(O=h.g=a,x=ma(O,g,!0,h)&&x,x=ma(O,g,!1,h)&&x,f)for(B=0;B<f.length;B++)O=h.g=f[B],x=ma(O,g,!1,h)&&x}nt.prototype.N=function(){if(nt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)z(f[g]);delete a.g[h],a.h--}}this.G=null},nt.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},nt.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function ma(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let O=0;O<h.length;++O){const B=h[O];if(B&&!B.da&&B.capture==f){const te=B.listener,je=B.ha||B.src;B.fa&&q(a.i,B),x=te.call(je,g)!==!1&&x}}return x&&!g.defaultPrevented}function $T(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Np(a){a.g=$T(()=>{a.g=null,a.i&&(a.i=!1,Np(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class HT extends S{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Np(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function As(a){S.call(this),this.h=a,this.g={}}p(As,S);var xp=[];function Dp(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&tc(h)},a),a.g={}}As.prototype.N=function(){As.Z.N.call(this),Dp(this)},As.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ic=o.JSON.stringify,WT=o.JSON.parse,qT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Vp(){}function Op(){}var Cs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function sc(){A.call(this,"d")}p(sc,A);function oc(){A.call(this,"c")}p(oc,A);var jr={},Lp=null;function ga(){return Lp=Lp||new nt}jr.Ia="serverreachability";function bp(a){A.call(this,jr.Ia,a)}p(bp,A);function Ps(a){const h=ga();ht(h,new bp(h))}jr.STAT_EVENT="statevent";function Mp(a,h){A.call(this,jr.STAT_EVENT,a),this.stat=h}p(Mp,A);function dt(a){const h=ga();ht(h,new Mp(h,a))}jr.Ja="timingevent";function Up(a,h){A.call(this,jr.Ja,a),this.size=h}p(Up,A);function ks(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ns(){this.g=!0}Ns.prototype.ua=function(){this.g=!1};function GT(a,h,f,g,x,O){a.info(function(){if(a.g)if(O){var B="",te=O.split("&");for(let de=0;de<te.length;de++){var je=te[de].split("=");if(je.length>1){const We=je[0];je=je[1];const nn=We.split("_");B=nn.length>=2&&nn[1]=="type"?B+(We+"="+je+"&"):B+(We+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+B})}function KT(a,h,f,g,x,O,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+O+" "+B})}function Ti(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+XT(a,f)+(g?" "+g:"")})}function QT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ns.prototype.info=function(){};function XT(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var f=O[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var x=g[0];if(x!="noop"&&x!="stop"&&x!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return ic(O)}catch{return h}}var ya={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Fp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},jp;function ac(){}p(ac,Vp),ac.prototype.g=function(){return new XMLHttpRequest},jp=new ac;function xs(a){return encodeURIComponent(String(a))}function YT(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Wn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new As(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Bp}function Bp(){this.i=null,this.g="",this.h=!1}var zp={},lc={};function uc(a,h,f){a.M=1,a.A=va(tn(h)),a.u=f,a.R=!0,$p(a,null)}function $p(a,h){a.F=Date.now(),_a(a),a.B=tn(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),nm(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Bp,a.g=wm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new HT(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(xp[0]=x.toString()),x=xp);for(let O=0;O<x.length;O++){const B=Ve(f,x[O],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?ce(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ps(),GT(a.i,a.v,a.B,a.l,a.S,a.u)}Wn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Kn(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const te=Kn(this.g),je=this.g.ya(),de=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||um(this.g)))){this.K||te!=4||je==7||(je==8||de<=0?Ps(3):Ps(2)),cc(this);var h=this.g.ca();this.X=h;var f=JT(this);if(this.o=h==200,KT(this.i,this.v,this.B,this.l,this.S,te,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,x=this.g;if((g=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(g)){var O=g;break t}}O=null}if(a=O)Ti(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,hc(this,a);else{this.o=!1,this.m=3,dt(12),Br(this),Ds(this);break e}}if(this.R){a=!0;let We;for(;!this.K&&this.C<f.length;)if(We=ZT(this,f),We==lc){te==4&&(this.m=4,dt(14),a=!1),Ti(this.i,this.l,null,"[Incomplete Response]");break}else if(We==zp){this.m=4,dt(15),Ti(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Ti(this.i,this.l,We,null),hc(this,We);if(Hp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||f.length!=0||this.h.h||(this.m=1,dt(16),a=!1),this.o=this.o&&a,!a)Ti(this.i,this.l,f,"[Invalid Chunked Response]"),Br(this),Ds(this);else if(f.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),vc(B),B.P=!0,dt(11))}}else Ti(this.i,this.l,f,null),hc(this,f);te==4&&Br(this),this.o&&!this.K&&(te==4?gm(this.j,this):(this.o=!1,_a(this)))}else fI(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,dt(12)):(this.m=0,dt(13)),Br(this),Ds(this)}}}catch{}finally{}};function JT(a){if(!Hp(a))return a.g.la();const h=um(a.g);if(h==="")return"";let f="";const g=h.length,x=Kn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Br(a),Ds(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<g;O++)a.h.h=!0,f+=a.h.i.decode(h[O],{stream:!(x&&O==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Hp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ZT(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?lc:(f=Number(h.substring(f,g)),isNaN(f)?zp:(g+=1,g+f>h.length?lc:(h=h.slice(g,g+f),a.C=g+f,h)))}Wn.prototype.cancel=function(){this.K=!0,Br(this)};function _a(a){a.T=Date.now()+a.H,Wp(a,a.H)}function Wp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ks(c(a.aa,a),h)}function cc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(QT(this.i,this.B),this.M!=2&&(Ps(),dt(17)),Br(this),this.m=2,Ds(this)):Wp(this,this.T-a)};function Ds(a){a.j.I==0||a.K||gm(a.j,a)}function Br(a){cc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Dp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function hc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||dc(f.h,a))){if(!a.L&&dc(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Sa(f),Ta(f);else break e;_c(f),dt(18)}}else f.xa=x[1],0<f.xa-f.K&&x[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ks(c(f.Va,f),6e3));Kp(f.h)<=1&&f.ta&&(f.ta=void 0)}else $r(f,11)}else if((a.L||f.g==a)&&Sa(f),!R(h))for(x=f.Ba.g.parse(h),h=0;h<x.length;h++){let de=x[h];const We=de[0];if(!(We<=f.K))if(f.K=We,de=de[1],f.I==2)if(de[0]=="c"){f.M=de[1],f.ba=de[2];const nn=de[3];nn!=null&&(f.ka=nn,f.j.info("VER="+f.ka));const Hr=de[4];Hr!=null&&(f.za=Hr,f.j.info("SVER="+f.za));const Qn=de[5];Qn!=null&&typeof Qn=="number"&&Qn>0&&(g=1.5*Qn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Xn=a.g;if(Xn){const Aa=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var O=g.h;O.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(fc(O,O.h),O.h=null))}if(g.G){const wc=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(g.wa=wc,me(g.J,g.G,wc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var B=a;if(g.na=vm(g,g.L?g.ba:null,g.W),B.L){Qp(g.h,B);var te=B,je=g.O;je&&(te.H=je),te.D&&(cc(te),_a(te)),g.g=B}else pm(g);f.i.length>0&&Ia(f)}else de[0]!="stop"&&de[0]!="close"||$r(f,7);else f.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?$r(f,7):yc(f):de[0]!="noop"&&f.l&&f.l.qa(de),f.A=0)}}Ps(4)}catch{}}var eI=class{constructor(a,h){this.g=a,this.map=h}};function qp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Kp(a){return a.h?1:a.g?a.g.size:0}function dc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function fc(a,h){a.g?a.g.add(h):a.h=h}function Qp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}qp.prototype.cancel=function(){if(this.i=Xp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return I(a.i)}var Yp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tI(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let x,O=null;g>=0?(x=a[f].substring(0,g),O=a[f].substring(g+1)):x=a[f],h(x,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof qn?(this.l=a.l,Vs(this,a.j),this.o=a.o,this.g=a.g,Os(this,a.u),this.h=a.h,pc(this,rm(a.i)),this.m=a.m):a&&(h=String(a).match(Yp))?(this.l=!1,Vs(this,h[1]||"",!0),this.o=Ls(h[2]||""),this.g=Ls(h[3]||"",!0),Os(this,h[4]),this.h=Ls(h[5]||"",!0),pc(this,h[6]||"",!0),this.m=Ls(h[7]||"")):(this.l=!1,this.i=new Ms(null,this.l))}qn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(bs(h,Jp,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(bs(h,Jp,!0),"@"),a.push(xs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(bs(f,f.charAt(0)=="/"?iI:rI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",bs(f,oI)),a.join("")},qn.prototype.resolve=function(a){const h=tn(this);let f=!!a.j;f?Vs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)Os(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var x=h.h.lastIndexOf("/");x!=-1&&(g=h.h.slice(0,x+1)+g)}if(x=g,x==".."||x==".")g="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){g=x.lastIndexOf("/",0)==0,x=x.split("/");const O=[];for(let B=0;B<x.length;){const te=x[B++];te=="."?g&&B==x.length&&O.push(""):te==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),g&&B==x.length&&O.push("")):(O.push(te),g=!0)}g=O.join("/")}else g=x}return f?h.h=g:f=a.i.toString()!=="",f?pc(h,rm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function tn(a){return new qn(a)}function Vs(a,h,f){a.j=f?Ls(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Os(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function pc(a,h,f){h instanceof Ms?(a.i=h,aI(a.i,a.l)):(f||(h=bs(h,sI)),a.i=new Ms(h,a.l))}function me(a,h,f){a.i.set(h,f)}function va(a){return me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ls(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,nI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jp=/[#\/\?@]/g,rI=/[#\?:]/g,iI=/[#\?]/g,sI=/[#\?@]/g,oI=/#/g;function Ms(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zr(a){a.g||(a.g=new Map,a.h=0,a.i&&tI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ms.prototype,t.add=function(a,h){zr(this),this.i=null,a=Ii(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Zp(a,h){zr(a),h=Ii(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function em(a,h){return zr(a),h=Ii(a,h),a.g.has(h)}t.forEach=function(a,h){zr(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)};function tm(a,h){zr(a);let f=[];if(typeof h=="string")em(a,h)&&(f=f.concat(a.g.get(Ii(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return zr(this),this.i=null,a=Ii(this,a),em(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=tm(this,a),a.length>0?String(a[0]):h):h};function nm(a,h,f){Zp(a,h),f.length>0&&(a.i=null,a.g.set(Ii(a,h),I(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const x=xs(f);f=tm(this,f);for(let O=0;O<f.length;O++){let B=x;f[O]!==""&&(B+="="+xs(f[O])),a.push(B)}}return this.i=a.join("&")};function rm(a){const h=new Ms;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ii(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function aI(a,h){h&&!a.j&&(zr(a),a.i=null,a.g.forEach(function(f,g){const x=g.toLowerCase();g!=x&&(Zp(this,g),nm(this,x,f))},a)),a.j=h}function lI(a,h){const f=new Ns;if(o.Image){const g=new Image;g.onload=d(Gn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Gn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Gn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Gn,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function uI(a,h){const f=new Ns,g=new AbortController,x=setTimeout(()=>{g.abort(),Gn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(x),O.ok?Gn(f,"TestPingServer: ok",!0,h):Gn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Gn(f,"TestPingServer: error",!1,h)})}function Gn(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function cI(){this.g=new qT}function mc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(mc,Vp),mc.prototype.g=function(){return new wa(this.i,this.h)};function wa(a,h){nt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(wa,nt),t=wa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;im(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function im(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Us(this):Fs(this),this.readyState==3&&im(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Us(this))},t.Na=function(a){this.g&&(this.response=a,Us(this))},t.ga=function(){this.g&&Us(this)};function Us(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Fs(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sm(a){let h="";return Q(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function gc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=sm(f),typeof a=="string"?f!=null&&xs(f):me(a,h,f))}function Ce(a){nt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ce,nt);var hI=/^https?$/i,dI=["POST","PUT"];t=Ce.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():jp.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){om(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(dI,h,void 0)>=0)||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){om(this,O)}};function om(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,am(a),Ea(a)}function am(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ht(this,"complete"),ht(this,"abort"),Ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ea(this,!0)),Ce.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?lm(this):this.Xa())},t.Xa=function(){lm(this)};function lm(a){if(a.h&&typeof s<"u"){if(a.v&&Kn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ht(a,"readystatechange"),Kn(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=O===0){let B=String(a.D).match(Yp)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!hI.test(B?B.toLowerCase():"")}f=g}if(f)ht(a,"complete"),ht(a,"success");else{a.o=6;try{var x=Kn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",am(a)}}finally{Ea(a)}}}}function Ea(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||ht(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Kn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Kn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),WT(h)}};function um(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function fI(a){const h={};a=(a.g&&Kn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(R(a[g]))continue;var f=YT(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[x]||[];h[x]=O,O.push(f)}Z(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function cm(a){this.za=0,this.i=[],this.j=new Ns,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=js("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=js("baseRetryDelayMs",5e3,a),this.Za=js("retryDelaySeedMs",1e4,a),this.Ta=js("forwardChannelMaxRetries",2,a),this.va=js("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new qp(a&&a.concurrentRequestLimit),this.Ba=new cI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=cm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,g){dt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=vm(this,null,this.W),Ia(this)};function yc(a){if(hm(a),a.I==3){var h=a.V++,f=tn(a.J);if(me(f,"SID",a.M),me(f,"RID",h),me(f,"TYPE","terminate"),Bs(a,f),h=new Wn(a,a.j,h),h.M=2,h.A=va(tn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=wm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),_a(h)}_m(a)}function Ta(a){a.g&&(vc(a),a.g.cancel(),a.g=null)}function hm(a){Ta(a),a.v&&(o.clearTimeout(a.v),a.v=null),Sa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ia(a){if(!Gp(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||y(),M||(U(),M=!0),T.add(h,a),a.D=0}}function pI(a,h){return Kp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ks(c(a.Ea,a,h),ym(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new Wn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=ce(O),Tn(O,this.U)):O=this.U),this.u!==null||this.R||(x.J=O,O=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=fm(this,x,h),f=tn(this.J),me(f,"RID",a),me(f,"CVER",22),this.G&&me(f,"X-HTTP-Session-Id",this.G),Bs(this,f),O&&(this.R?h="headers="+xs(sm(O))+"&"+h:this.u&&gc(f,this.u,O)),fc(this.h,x),this.Ra&&me(f,"TYPE","init"),this.S?(me(f,"$req",h),me(f,"SID","null"),x.U=!0,uc(x,f,null)):uc(x,f,h),this.I=2}}else this.I==3&&(a?dm(this,a):this.i.length==0||Gp(this.h)||dm(this))};function dm(a,h){var f;h?f=h.l:f=a.V++;const g=tn(a.J);me(g,"SID",a.M),me(g,"RID",f),me(g,"AID",a.K),Bs(a,g),a.u&&a.o&&gc(g,a.u,a.o),f=new Wn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=fm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),fc(a.h,f),uc(f,g,h)}function Bs(a,h){a.H&&Q(a.H,function(f,g){me(h,g,f)}),a.l&&Q({},function(f,g){me(h,g,f)})}function fm(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var x=a.i;let te=-1;for(;;){const je=["count="+f];te==-1?f>0?(te=x[0].g,je.push("ofs="+te)):te=0:je.push("ofs="+te);let de=!0;for(let We=0;We<f;We++){var O=x[We].g;const nn=x[We].map;if(O-=te,O<0)te=Math.max(0,x[We].g-100),de=!1;else try{O="req"+O+"_"||"";try{var B=nn instanceof Map?nn:Object.entries(nn);for(const[Hr,Qn]of B){let Xn=Qn;l(Qn)&&(Xn=ic(Qn)),je.push(O+Hr+"="+encodeURIComponent(Xn))}}catch(Hr){throw je.push(O+"type="+encodeURIComponent("_badmap")),Hr}}catch{g&&g(nn)}}if(de){B=je.join("&");break e}}B=void 0}return a=a.i.splice(0,f),h.G=a,B}function pm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||y(),M||(U(),M=!0),T.add(h,a),a.A=0}}function _c(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ks(c(a.Da,a),ym(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,mm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ks(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,dt(10),Ta(this),mm(this))};function vc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function mm(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=tn(a.na);me(h,"RID","rpc"),me(h,"SID",a.M),me(h,"AID",a.K),me(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&me(h,"TO",a.ia),me(h,"TYPE","xmlhttp"),Bs(a,h),a.u&&a.o&&gc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=va(tn(h)),f.u=null,f.R=!0,$p(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Ta(this),_c(this),dt(19))};function Sa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function gm(a,h){var f=null;if(a.g==h){Sa(a),vc(a),a.g=null;var g=2}else if(dc(a.h,h))f=h.G,Qp(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var x=a.D;g=ga(),ht(g,new Up(g,f)),Ia(a)}else pm(a);else if(x=h.m,x==3||x==0&&h.X>0||!(g==1&&pI(a,h)||g==2&&_c(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),x){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function ym(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function $r(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const x=!g;g=new qn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Vs(g,"https"),va(g),x?lI(g.toString(),f):uI(g.toString(),f)}else dt(2);a.I=0,a.l&&a.l.pa(h),_m(a),hm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function _m(a){if(a.I=0,a.ja=[],a.l){const h=Xp(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function vm(a,h,f){var g=f instanceof qn?tn(f):new qn(f);if(g.g!="")h&&(g.g=h+"."+g.g),Os(g,g.u);else{var x=o.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const O=new qn(null);g&&Vs(O,g),h&&(O.g=h),x&&Os(O,x),f&&(O.h=f),g=O}return f=a.G,h=a.wa,f&&h&&me(g,f,h),me(g,"VER",a.ka),Bs(a,g),g}function wm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ce(new mc({ab:f})):new Ce(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Em(){}t=Em.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ra(){}Ra.prototype.g=function(a,h){return new Rt(a,h)};function Rt(a,h){nt.call(this),this.g=new cm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!R(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!R(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Si(this)}p(Rt,nt),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){yc(this.g)},Rt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=ic(a),a=f);h.i.push(new eI(h.Ya++,a)),h.I==3&&Ia(h)},Rt.prototype.N=function(){this.g.l=null,delete this.j,yc(this.g),delete this.g,Rt.Z.N.call(this)};function Tm(a){sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Tm,sc);function Im(){oc.call(this),this.status=1}p(Im,oc);function Si(a){this.g=a}p(Si,Em),Si.prototype.ra=function(){ht(this.g,"a")},Si.prototype.qa=function(a){ht(this.g,new Tm(a))},Si.prototype.pa=function(a){ht(this.g,new Im)},Si.prototype.oa=function(){ht(this.g,"b")},Ra.prototype.createWebChannel=Ra.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,GE=function(){return new Ra},qE=function(){return ga()},WE=jr,fd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ya.NO_ERROR=0,ya.TIMEOUT=8,ya.HTTP_ERROR=6,_l=ya,Fp.COMPLETE="complete",HE=Fp,Op.EventType=Cs,Cs.OPEN="a",Cs.CLOSE="b",Cs.ERROR="c",Cs.MESSAGE="d",nt.prototype.listen=nt.prototype.J,no=Op,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,$E=Ce}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const gy="@firebase/firestore",yy="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Vf("@firebase/firestore");function Ai(){return ci.logLevel}function H(t,...e){if(ci.logLevel<=re.DEBUG){const n=e.map($f);ci.debug(`Firestore (${ws}): ${t}`,...n)}}function zn(t,...e){if(ci.logLevel<=re.ERROR){const n=e.map($f);ci.error(`Firestore (${ws}): ${t}`,...n)}}function as(t,...e){if(ci.logLevel<=re.WARN){const n=e.map($f);ci.warn(`Firestore (${ws}): ${t}`,...n)}}function $f(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,KE(t,r,n)}function KE(t,e,n){let r=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw zn(r),new Error(r)}function ue(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||KE(e,i,r)}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class IN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SN{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new QE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class RN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new RN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _y{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _y(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _y(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=PN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function pd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return nh(i)===nh(s)?ie(i,s):nh(i)?1:-1}return ie(t.length,e.length)}const kN=55296,NN=57343;function nh(t){const e=t.charCodeAt(0);return e>=kN&&e<=NN}function ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&X(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=on.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ie(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),i=on.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?on.extractNumericId(e).compare(on.extractNumericId(n)):pd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class fe extends on{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const xN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends on{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return xN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vy}static keyField(){return new Ye([vy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(fe.fromString(e))}static fromName(e){return new G(fe.fromString(e).popFirst(5))}static empty(){return new G(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new fe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e,n){if(!n)throw new $(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DN(t,e,n,r){if(e===!0&&r===!0)throw new $(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wy(t){if(!G.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ey(t){if(G.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function YE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Fu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function us(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fu(t);throw new $(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function ca(t,e){if(!YE(t))throw new $(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=-62135596800,Iy=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Iy);return new ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ty)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Iy}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ca(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ty;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Me("string",ye._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new ye(0,0))}static max(){return new J(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ho=-1;function VN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new Pr(i,G.empty(),e)}function ON(t){return new Pr(t.readTime,t.key,Ho)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(J.min(),G.empty(),Ho)}static max(){return new Pr(J.max(),G.empty(),Ho)}}function LN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==bN)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function UN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ts(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ju{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ju.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=-1;function Bu(t){return t==null}function ru(t){return t===0&&1/t==-1/0}function FN(t){return typeof t=="number"&&Number.isInteger(t)&&!ru(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="";function jN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sy(e)),e=BN(t.get(n),e);return Sy(e)}function BN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case JE:n+="";break;default:n+=s}}return n}function Sy(t){return t+JE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ZE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ga(this.root,e,this.comparator,!0)}}class Ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ay(this.data.getIterator())}getIteratorFrom(e){return new Ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new He(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class e0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new e0("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const zN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=zN.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="server_timestamp",n0="__type__",r0="__previous_value__",i0="__local_write_time__";function qf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[n0])==null?void 0:r.stringValue)===t0}function zu(t){const e=t.mapValue.fields[r0];return qf(e)?zu(e):e}function Wo(t){const e=kr(t.mapValue.fields[i0].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const iu="(default)";class qo{constructor(e,n){this.projectId=e,this.database=n||iu}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database===iu}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="__type__",HN="__max__",Ka={mapValue:{}},o0="__vector__",su="value";function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qf(t)?4:qN(t)?9007199254740991:WN(t)?10:11:X(28295,{value:t})}function _n(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wo(t).isEqual(Wo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Nr(i.bytesValue).isEqual(Nr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?ru(o)===ru(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ry(o)!==Ry(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!_n(o[u],l[u])))return!1;return!0}(t,e);default:return X(52216,{left:t})}}function Go(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(Wo(t),Wo(e));case 5:return pd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Nr(s),u=Nr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ie(l[c],u[c]);if(d!==0)return d}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(xe(s.latitude),xe(o.latitude));return l!==0?l:ie(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Py(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,I,C,P;const l=s.fields||{},u=o.fields||{},c=(m=l[su])==null?void 0:m.arrayValue,d=(I=u[su])==null?void 0:I.arrayValue,p=ie(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:Py(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ka.mapValue&&o===Ka.mapValue)return 0;if(s===Ka.mapValue)return 1;if(o===Ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=pd(u[p],d[p]);if(m!==0)return m;const I=cs(l[u[p]],c[d[p]]);if(I!==0)return I}return ie(u.length,d.length)}(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=kr(t),r=kr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function Py(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=cs(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function hs(t){return md(t)}function md(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=md(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${md(n.fields[o])}`;return i+"}"}(t.mapValue):X(61005,{value:t})}function vl(t){switch(xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zu(t);return e?16+vl(e):16;case 5:return 2*t.stringValue.length;case 6:return Nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+vl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return yi(r.fields,(s,o)=>{i+=s.length+vl(o)}),i}(t.mapValue);default:throw X(13486,{value:t})}}function ky(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gd(t){return!!t&&"integerValue"in t}function Gf(t){return!!t&&"arrayValue"in t}function Ny(t){return!!t&&"nullValue"in t}function xy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wl(t){return!!t&&"mapValue"in t}function WN(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[s0])==null?void 0:r.stringValue)===o0}function vo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return{...t}}function qN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===HN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=vo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(vo(this.value))}}function a0(t){const e=[];return yi(t.fields,(n,r)=>{const i=new Ye([n]);if(wl(r)){const s=a0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,J.min(),J.min(),J.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,J.min(),J.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,J.min(),J.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ou{constructor(e,n){this.position=e,this.inclusive=n}}function Dy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function GN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class l0{}class be extends l0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QN(e,n,r):n==="array-contains"?new JN(e,r):n==="in"?new ZN(e,r):n==="not-in"?new ex(e,r):n==="array-contains-any"?new tx(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XN(e,r):new YN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(cs(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends l0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new en(e,n)}matches(e){return u0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function u0(t){return t.op==="and"}function c0(t){return KN(t)&&u0(t)}function KN(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function yd(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(c0(t))return t.filters.map(e=>yd(e)).join(",");{const e=t.filters.map(n=>yd(n)).join(",");return`${t.op}(${e})`}}function h0(t,e){return t instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(t,e):t instanceof en?function(r,i){return i instanceof en&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&h0(o,i.filters[l]),!0):!1}(t,e):void X(19439)}function d0(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(d0).join(" ,")+"}"}(t):"Filter"}class QN extends be{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class XN extends be{constructor(e,n){super(e,"in",n),this.keys=f0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YN extends be{constructor(e,n){super(e,"not-in",n),this.keys=f0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function f0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class JN extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gf(n)&&Go(n.arrayValue,this.value)}}class ZN extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Go(this.value.arrayValue,n)}}class ex extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Go(this.value.arrayValue,n)}}class tx extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Go(this.value.arrayValue,r))}}/**
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
 */class nx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Oy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nx(t,e,n,r,i,s,o)}function Kf(t){const e=ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),e.Te=n}return e.Te}function Qf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!h0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vy(t.startAt,e.startAt)&&Vy(t.endAt,e.endAt)}function _d(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function rx(t,e,n,r,i,s,o,l){return new Is(t,e,n,r,i,s,o,l)}function Xf(t){return new Is(t)}function Ly(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p0(t){return t.collectionGroup!==null}function wo(t){const e=ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Ko(s,r))}),n.has(Ye.keyField().canonicalString())||e.Ie.push(new Ko(Ye.keyField(),r))}return e.Ie}function pn(t){const e=ee(t);return e.Ee||(e.Ee=ix(e,wo(t))),e.Ee}function ix(t,e){if(t.limitType==="F")return Oy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ko(i.field,s)});const n=t.endAt?new ou(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ou(t.startAt.position,t.startAt.inclusive):null;return Oy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vd(t,e){const n=t.filters.concat([e]);return new Is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wd(t,e,n){return new Is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $u(t,e){return Qf(pn(t),pn(e))&&t.limitType===e.limitType}function m0(t){return`${Kf(pn(t))}|lt:${t.limitType}`}function Ci(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>d0(i)).join(", ")}]`),Bu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>hs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>hs(i)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Hu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Dy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,wo(r),i)||r.endAt&&!function(o,l,u){const c=Dy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,wo(r),i))}(t,e)}function sx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function g0(t){return(e,n)=>{let r=!1;for(const i of wo(t)){const s=ox(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ox(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?cs(u,c):X(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ZE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=new Ae(G.comparator);function $n(){return ax}const y0=new Ae(G.comparator);function ro(...t){let e=y0;for(const n of t)e=e.insert(n.key,n);return e}function _0(t){let e=y0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return Eo()}function v0(){return Eo()}function Eo(){return new _i(t=>t.toString(),(t,e)=>t.isEqual(e))}const lx=new Ae(G.comparator),ux=new He(G.comparator);function se(...t){let e=ux;for(const n of t)e=e.add(n);return e}const cx=new He(ie);function hx(){return cx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ru(e)?"-0":e}}function w0(t){return{integerValue:""+t}}function dx(t,e){return FN(e)?w0(e):Yf(t,e)}/**
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
 */class Wu{constructor(){this._=void 0}}function fx(t,e,n){return t instanceof au?function(i,s){const o={fields:{[n0]:{stringValue:t0},[i0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qf(s)&&(s=zu(s)),s&&(o.fields[r0]=s),{mapValue:o}}(n,e):t instanceof Qo?T0(t,e):t instanceof Xo?I0(t,e):function(i,s){const o=E0(i,s),l=by(o)+by(i.Ae);return gd(o)&&gd(i.Ae)?w0(l):Yf(i.serializer,l)}(t,e)}function px(t,e,n){return t instanceof Qo?T0(t,e):t instanceof Xo?I0(t,e):n}function E0(t,e){return t instanceof lu?function(r){return gd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class au extends Wu{}class Qo extends Wu{constructor(e){super(),this.elements=e}}function T0(t,e){const n=S0(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xo extends Wu{constructor(e){super(),this.elements=e}}function I0(t,e){let n=S0(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class lu extends Wu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function by(t){return xe(t.integerValue||t.doubleValue)}function S0(t){return Gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Qo&&i instanceof Qo||r instanceof Xo&&i instanceof Xo?ls(r.elements,i.elements,_n):r instanceof lu&&i instanceof lu?_n(r.Ae,i.Ae):r instanceof au&&i instanceof au}(t.transform,e.transform)}class gx{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function El(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qu{}function R0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new C0(t.key,Vn.none()):new ha(t.key,t.data,Vn.none());{const n=t.data,r=Mt.empty();let i=new He(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vi(t.key,r,new Qt(i.toArray()),Vn.none())}}function yx(t,e,n){t instanceof ha?function(i,s,o){const l=i.value.clone(),u=Uy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof vi?function(i,s,o){if(!El(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Uy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(A0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function To(t,e,n,r){return t instanceof ha?function(s,o,l,u){if(!El(s.precondition,o))return l;const c=s.value.clone(),d=Fy(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof vi?function(s,o,l,u){if(!El(s.precondition,o))return l;const c=Fy(s.fieldTransforms,u,o),d=o.data;return d.setAll(A0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return El(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function _x(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=E0(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function My(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ls(r,i,(s,o)=>mx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ha extends qu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vi extends qu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function A0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uy(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,px(o,l,n[i]))}return r}function Fy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fx(s,o,e))}return r}class C0 extends qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vx extends qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=v0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=R0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>My(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>My(n,r))}}class Jf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return lx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jf(e,n,r,i)}}/**
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
 */class Ex{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Tx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,oe;function Ix(t){switch(t){case L.OK:return X(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return X(15467,{code:t})}}function P0(t){if(t===void 0)return zn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Oe.OK:return L.OK;case Oe.CANCELLED:return L.CANCELLED;case Oe.UNKNOWN:return L.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return L.INTERNAL;case Oe.UNAVAILABLE:return L.UNAVAILABLE;case Oe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Oe.NOT_FOUND:return L.NOT_FOUND;case Oe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Oe.ABORTED:return L.ABORTED;case Oe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Oe.DATA_LOSS:return L.DATA_LOSS;default:return X(39323,{code:t})}}(oe=Oe||(Oe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Sx(){return new TextEncoder}/**
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
 */const Rx=new Tr([4294967295,4294967295],0);function jy(t){const e=Sx().encode(t),n=new zE;return n.update(e),new Uint8Array(n.digest())}function By(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([i,s],0)]}class Zf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(r<0)throw new io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Tr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Tr.fromNumber(r)));return i.compare(Rx)===1&&(i=new Tr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=jy(e),[r,i]=By(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=jy(e),[r,i]=By(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gu(J.min(),i,new Ae(ie),$n(),se())}}class da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class k0{constructor(e,n){this.targetId=e,this.Ce=n}}class N0{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zy{constructor(){this.ve=0,this.Fe=$y(),this.Me=tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X(38017,{changeType:s})}}),new da(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=$y()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ax{constructor(e){this.Ge=e,this.ze=new Map,this.je=$n(),this.Je=Qa(),this.He=Qa(),this.Ye=new Ae(ie)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(_d(s))if(r===0){const o=new G(s.path);this.et(n,o,lt.newNoDocument(o,J.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Nr(r).toUint8Array()}catch(u){if(u instanceof e0)return as("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zf(o,i,s)}catch(u){return as(u instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&_d(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,lt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=se();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Gu(e,n,this.Ye,this.je,r);return this.je=$n(),this.Je=Qa(),this.He=Qa(),this.Ye=new Ae(ie),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new zy,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new He(ie),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new He(ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new zy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Qa(){return new Ae(G.comparator)}function $y(){return new Ae(G.comparator)}const Cx={asc:"ASCENDING",desc:"DESCENDING"},Px={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kx={and:"AND",or:"OR"};class Nx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ed(t,e){return t.useProto3Json||Bu(e)?e:{value:e}}function uu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function x0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xx(t,e){return uu(t,e.toTimestamp())}function mn(t){return ue(!!t,49232),J.fromTimestamp(function(n){const r=kr(n);return new ye(r.seconds,r.nanos)}(t))}function ep(t,e){return Td(t,e).canonicalString()}function Td(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function D0(t){const e=fe.fromString(t);return ue(M0(e),10190,{key:e.toString()}),e}function Id(t,e){return ep(t.databaseId,e.path)}function rh(t,e){const n=D0(e);if(n.get(1)!==t.databaseId.projectId)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(O0(n))}function V0(t,e){return ep(t.databaseId,e)}function Dx(t){const e=D0(t);return e.length===4?fe.emptyPath():O0(e)}function Sd(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function O0(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Hy(t,e,n){return{name:Id(t,e),fields:n.value.mapValue.fields}}function Vx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ue(d===void 0||typeof d=="string",58123),tt.fromBase64String(d||"")):(ue(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:P0(c.code);return new $(d,c.message||"")}(o);n=new N0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rh(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):J.min(),l=new Mt({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Tl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rh(t,r.document),s=r.readTime?mn(r.readTime):J.min(),o=lt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Tl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rh(t,r.document),s=r.removedTargetIds||[];n=new Tl([],s,i,null)}else{if(!("filter"in e))return X(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Tx(i,s),l=r.targetId;n=new k0(l,o)}}return n}function Ox(t,e){let n;if(e instanceof ha)n={update:Hy(t,e.key,e.value)};else if(e instanceof C0)n={delete:Id(t,e.key)};else if(e instanceof vi)n={update:Hy(t,e.key,e.data),updateMask:$x(e.fieldMask)};else{if(!(e instanceof vx))return X(16599,{Vt:e.type});n={verify:Id(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof au)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof lu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X(27497)}(t,e.precondition)),n}function Lx(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?mn(i.updateTime):mn(s);return o.isEqual(J.min())&&(o=mn(s)),new gx(o,i.transformResults||[])}(n,e))):[]}function bx(t,e){return{documents:[V0(t,e.path)]}}function Mx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=V0(t,i);const s=function(c){if(c.length!==0)return b0(en.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Pi(m.field),direction:jx(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ed(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function Ux(t){let e=Dx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=L0(p);return m instanceof en&&c0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Ko(ki(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Bu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new ou(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new ou(I,m)}(n.endAt)),rx(e,i,o,s,l,"F",u,c)}function Fx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function L0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ki(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ki(n.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ki(n.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ki(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(t):t.fieldFilter!==void 0?function(n){return be.create(ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>L0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(n.compositeFilter.op))}(t):X(30097,{filter:t})}function jx(t){return Cx[t]}function Bx(t){return Px[t]}function zx(t){return kx[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function ki(t){return Ye.fromServerFormat(t.fieldPath)}function b0(t){return t instanceof be?function(n){if(n.op==="=="){if(xy(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NAN"}};if(Ny(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xy(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NAN"}};if(Ny(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(n.field),op:Bx(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(i=>b0(i));return r.length===1?r[0]:{compositeFilter:{op:zx(n.op),filters:r}}}(t):X(54877,{filter:t})}function $x(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function M0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.yt=e}}function Wx(t){const e=Ux({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wd(e,e.limit,"L"):e}/**
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
 */class qx{constructor(){this.Cn=new Gx}addToCollectionParentIndex(e,n){return this.Cn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Pr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Gx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(fe.comparator)).toArray()}}/**
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
 */const Wy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},U0=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(U0,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ds(0)}static cr(){return new ds(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="LruGarbageCollector",Kx=1048576;function Gy([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class Qx{constructor(e){this.Ir=e,this.buffer=new He(Gy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Xx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(qy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ts(n)?H(qy,"Ignoring IndexedDB error during garbage collection: ",n):await Es(n)}await this.Vr(3e5)})}}class Yx{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(ju.ce);const r=new Qx(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Wy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ai()<=re.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function Jx(t,e){return new Yx(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this.changes=new _i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class e2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&To(r.mutation,i,Qt.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ro();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=$n();const o=Eo(),l=function(){return Eo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof vi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),To(d.mutation,c,d.mutation.getFieldMask(),ye.now())):o.set(c.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new e2(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Eo();let i=new Ae((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Qt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=v0();d.forEach(m=>{if(!s.has(m)){const I=R0(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Yr());let l=Ho,u=s;return o.next(c=>b.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(d=>({batchId:l,changes:_0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ro();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new Is(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,lt.newInvalidDocument(d)))});let l=ro();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&To(d.mutation,c,Qt.empty(),ye.now()),Hu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return b.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:Wx(i.bundledQuery),readTime:mn(i.readTime)}}(n)),b.resolve()}}/**
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
 */class r2{constructor(){this.overlays=new Ae(G.comparator),this.qr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Yr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Yr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return b.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ex(n,r));let s=this.qr.get(n);s===void 0&&(s=se(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.Qr=new He(qe.$r),this.Ur=new He(qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new qe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new G(new fe([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new G(new fe([])),r=new qe(n,e),i=new qe(n,e+1);let s=se();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return G.comparator(e.key,n.key)||ie(e.Yr,n.Yr)}static Kr(e,n){return ie(e.Yr,n.Yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new He(qe.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new qe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Wf:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(ie);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new qe(new G(s),0);let l=new He(ie);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),b.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new qe(n,0),i=this.Zr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.ri=e,this.docs=function(){return new Ae(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=$n();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||LN(ON(d),r)<=0||(i.has(d.key)||Hu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X(9500)}ii(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new a2(this)}getSize(e){return b.resolve(this.size)}}class a2 extends Zx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.persistence=e,this.si=new _i(n=>Kf(n),Qf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.oi=0,this._i=new tp,this.targetCount=0,this.ai=ds.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),b.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Pr(n),b.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){this.ui={},this.overlays={},this.ci=new ju(0),this.li=!1,this.li=!0,this.hi=new i2,this.referenceDelegate=e(this),this.Pi=new l2(this),this.indexManager=new qx,this.remoteDocumentCache=function(i){return new o2(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Hx(n),this.Ii=new n2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new r2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new s2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new u2(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return b.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class u2 extends MN{constructor(e){super(),this.currentSequenceNumber=e}}class np{constructor(e){this.persistence=e,this.Ri=new tp,this.Vi=null}static mi(e){return new np(e)}get fi(){if(this.Vi)return this.Vi;throw X(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),b.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,r=>{const i=G.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return b.or([()=>b.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class cu{constructor(e,n){this.persistence=e,this.pi=new _i(r=>jN(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Jx(this,n)}static mi(e,n){return new cu(e,n)}Ei(){}di(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return b.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=vl(e.data.value)),n}br(e,n,r){return b.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rp(e,n.fromCache,r,i)}}/**
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
 */class c2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class h2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return nC()?8:UN(ct())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new c2;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Ai()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ci(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(Ai()<=re.DEBUG&&H("QueryEngine","Query:",Ci(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ai()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ci(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):b.resolve())}ys(e,n){if(Ly(n))return b.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wd(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,wd(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Ly(n)||i.isEqual(J.min())?b.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?b.resolve(null):(Ai()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ci(n)),this.vs(e,o,n,VN(i,Ho)).next(l=>l))})}Ds(e,n){let r=new He(g0(e));return n.forEach((i,s)=>{Hu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Ai()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ci(n)),this.ps.getDocumentsMatchingQuery(e,n,Pr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="LocalStore",d2=3e8;class f2{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ae(ie),this.xs=new _i(s=>Kf(s),Qf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function p2(t,e,n,r){return new f2(t,e,n,r)}async function j0(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function m2(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let I=b.resolve();return m.forEach(C=>{I=I.next(()=>d.getEntry(u,C)).next(P=>{const N=c.docVersions.get(C);ue(N!==null,48541),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function B0(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function g2(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(tt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(P,N,E){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=d2?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,I,d)&&l.push(n.Pi.updateTargetData(s,I))});let u=$n(),c=se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(y2(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(J.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function y2(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=$n();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(ip,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function _2(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function v2(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Rd(t,e,n){const r=ee(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ts(o))throw o;H(ip,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Ky(t,e,n){const r=ee(t);let i=J.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ee(u),m=p.xs.get(d);return m!==void 0?b.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:se())).next(l=>(w2(r,sx(e),l),{documents:l,Qs:s})))}function w2(t,e,n){let r=t.Os.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Qy{constructor(){this.activeTargetIds=hx()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E2{constructor(){this.Mo=new Qy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Qy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class T2{Oo(e){}shutdown(){}}/**
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
 */const Xy="ConnectivityMonitor";class Yy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(Xy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(Xy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xa=null;function Ad(){return Xa===null?Xa=function(){return 268435456+Math.round(2147483648*Math.random())}():Xa++,"0x"+Xa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="RestConnection",I2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class S2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===iu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Ad(),l=this.zo(e,n.toUriEncodedString());H(ih,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=Mr(c);return this.Jo(e,l,u,r,d).then(p=>(H(ih,`Received RPC '${e}' ${o}: `,p),p),p=>{throw as(ih,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ws}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=I2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class A2 extends S2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Ad();return new Promise((l,u)=>{const c=new $E;c.setWithCredentials(!0),c.listenOnce(HE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _l.NO_ERROR:const p=c.getResponseJson();H(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case _l.TIMEOUT:H(st,`RPC '${e}' ${o} timed out`),u(new $(L.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const m=c.getStatus();if(H(st,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const C=I==null?void 0:I.error;if(C&&C.status&&C.message){const P=function(E){const _=E.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(C.status);u(new $(P,C.message))}else u(new $(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new $(L.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(st,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);H(st,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Ad(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GE(),l=qE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(st,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,I=!1;const C=new R2({Yo:N=>{I?H(st,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(H(st,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(st,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},Zo:()=>p.close()}),P=(N,E,_)=>{N.listen(E,w=>{try{_(w)}catch(D){setTimeout(()=>{throw D},0)}})};return P(p,no.EventType.OPEN,()=>{I||(H(st,`RPC '${e}' stream ${i} transport opened.`),C.o_())}),P(p,no.EventType.CLOSE,()=>{I||(I=!0,H(st,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(p))}),P(p,no.EventType.ERROR,N=>{I||(I=!0,as(st,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),C.a_(new $(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,no.EventType.MESSAGE,N=>{var E;if(!I){const _=N.data[0];ue(!!_,16349);const w=_,D=(w==null?void 0:w.error)||((E=w[0])==null?void 0:E.error);if(D){H(st,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let M=function(v){const S=Oe[v];if(S!==void 0)return P0(S)}(U),T=D.message;M===void 0&&(M=L.INTERNAL,T="Unknown error status: "+U+" with message "+D.message),I=!0,C.a_(new $(M,T)),p.close()}else H(st,`RPC '${e}' stream ${i} received:`,_),C.u_(_)}}),P(l,WE.STAT_EVENT,N=>{N.stat===fd.PROXY?H(st,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===fd.NOPROXY&&H(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function sh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return new Nx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="PersistentStream";class $0{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new z0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new $(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(Jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(Jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C2 extends $0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Vx(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?mn(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Sd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=_d(u)?{documents:bx(s,u)}:{query:Mx(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=x0(s,o.resumeToken);const c=Ed(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=uu(s,o.snapshotVersion.toTimestamp());const c=Ed(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Fx(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Sd(this.serializer),n.removeTarget=e,this.q_(n)}}class P2 extends $0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Lx(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Sd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ox(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{}class N2 extends k2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Td(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(L.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Td(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class x2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="RemoteStore";class D2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{wi(this)&&(H(hi,"Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.Ea.add(4),await fa(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Qu(c)}(this))})}),this.Ra=new x2(r,i)}}async function Qu(t){if(wi(t))for(const e of t.da)await e(!0)}async function fa(t){for(const e of t.da)await e(!1)}function H0(t,e){const n=ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),lp(n)?ap(n):Ss(n).O_()&&op(n,e))}function sp(t,e){const n=ee(t),r=Ss(n);n.Ia.delete(e),r.O_()&&W0(n,e),n.Ia.size===0&&(r.O_()?r.L_():wi(n)&&n.Ra.set("Unknown"))}function op(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).Y_(e)}function W0(t,e){t.Va.Ue(e),Ss(t).Z_(e)}function ap(t){t.Va=new Ax({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.Ra.ua()}function lp(t){return wi(t)&&!Ss(t).x_()&&t.Ia.size>0}function wi(t){return ee(t).Ea.size===0}function q0(t){t.Va=void 0}async function V2(t){t.Ra.set("Online")}async function O2(t){t.Ia.forEach((e,n)=>{op(t,e)})}async function L2(t,e){q0(t),lp(t)?(t.Ra.ha(e),ap(t)):t.Ra.set("Unknown")}async function b2(t,e,n){if(t.Ra.set("Online"),e instanceof N0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){H(hi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hu(t,r)}else if(e instanceof Tl?t.Va.Ze(e):e instanceof k0?t.Va.st(e):t.Va.tt(e),!n.isEqual(J.min()))try{const r=await B0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(tt.EMPTY_BYTE_STRING,d.snapshotVersion)),W0(s,u);const p=new cr(d.target,u,c,d.sequenceNumber);op(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(hi,"Failed to raise snapshot:",r),await hu(t,r)}}async function hu(t,e,n){if(!Ts(e))throw e;t.Ea.add(1),await fa(t),t.Ra.set("Offline"),n||(n=()=>B0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(hi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Qu(t)})}function G0(t,e){return e().catch(n=>hu(t,n,e))}async function Xu(t){const e=ee(t),n=Dr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Wf;for(;M2(e);)try{const i=await _2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,U2(e,i)}catch(i){await hu(e,i)}K0(e)&&Q0(e)}function M2(t){return wi(t)&&t.Ta.length<10}function U2(t,e){t.Ta.push(e);const n=Dr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function K0(t){return wi(t)&&!Dr(t).x_()&&t.Ta.length>0}function Q0(t){Dr(t).start()}async function F2(t){Dr(t).ra()}async function j2(t){const e=Dr(t);for(const n of t.Ta)e.ea(n.mutations)}async function B2(t,e,n){const r=t.Ta.shift(),i=Jf.from(r,e,n);await G0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xu(t)}async function z2(t,e){e&&Dr(t).X_&&await async function(r,i){if(function(o){return Ix(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();Dr(r).B_(),await G0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xu(r)}}(t,e),K0(t)&&Q0(t)}async function Zy(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H(hi,"RemoteStore received new credentials");const r=wi(n);n.Ea.add(3),await fa(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Qu(n)}async function $2(t,e){const n=ee(t);e?(n.Ea.delete(2),await Qu(n)):e||(n.Ea.add(2),await fa(n),n.Ra.set("Unknown"))}function Ss(t){return t.ma||(t.ma=function(n,r,i){const s=ee(n);return s.sa(),new C2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:V2.bind(null,t),t_:O2.bind(null,t),r_:L2.bind(null,t),H_:b2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),lp(t)?ap(t):t.Ra.set("Unknown")):(await t.ma.stop(),q0(t))})),t.ma}function Dr(t){return t.fa||(t.fa=function(n,r,i){const s=ee(n);return s.sa(),new P2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:F2.bind(null,t),r_:z2.bind(null,t),ta:j2.bind(null,t),na:B2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Xu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(hi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new up(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Ts(t))return new $(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{static emptySet(e){return new Ji(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ro(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.ga=new Ae(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):X(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class fs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fs(e,n,Ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class W2{constructor(){this.queries=t_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=t_(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new $(L.ABORTED,"Firestore shutting down"))}}function t_(){return new _i(t=>m0(t),$u)}async function X0(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new H2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=cp(o,`Initialization of query '${Ci(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&hp(n)}async function Y0(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function q2(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&hp(n)}function G2(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function hp(t){t.Ca.forEach(e=>{e.next()})}var Cd,n_;(n_=Cd||(Cd={})).Ma="default",n_.Cache="cache";class J0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Cd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.key=e}}class eT{constructor(e){this.key=e}}class K2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=se(),this.mutatedKeys=se(),this.eu=g0(e),this.tu=new Ji(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new e_,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),I=Hu(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let N=!1;m&&I?m.data.isEqual(I.data)?C!==P&&(r.track({type:3,doc:I}),N=!0):this.su(m,I)||(r.track({type:2,doc:I}),N=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),N=!0):m&&!I&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(I?(o=o.add(I),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(I,C){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Rt:N})}};return P(I)-P(C)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new fs(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new e_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new eT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Z0(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return fs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const dp="SyncEngine";class Q2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class X2{constructor(e){this.key=e,this.hu=!1}}class Y2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new _i(l=>m0(l),$u),this.Iu=new Map,this.Eu=new Set,this.du=new Ae(G.comparator),this.Au=new Map,this.Ru=new tp,this.Vu={},this.mu=new Map,this.fu=ds.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function J2(t,e,n=!0){const r=oT(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await tT(r,e,n,!0),i}async function Z2(t,e){const n=oT(t);await tT(n,e,!0,!1)}async function tT(t,e,n,r){const i=await v2(t.localStore,pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await eD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&H0(t.remoteStore,i),l}async function eD(t,e,n,r,i){t.pu=(p,m,I)=>async function(P,N,E,_){let w=N.view.ru(E);w.Cs&&(w=await Ky(P.localStore,N.query,!1).then(({documents:T})=>N.view.ru(T,w)));const D=_&&_.targetChanges.get(N.targetId),U=_&&_.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(w,P.isPrimaryClient,D,U);return i_(P,N.targetId,M.au),M.snapshot}(t,p,m,I);const s=await Ky(t.localStore,e,!0),o=new K2(e,s.Qs),l=o.ru(s.documents),u=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);i_(t,n,c.au);const d=new Q2(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function tD(t,e,n){const r=ee(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!$u(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Rd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sp(r.remoteStore,i.targetId),Pd(r,i.targetId)}).catch(Es)):(Pd(r,i.targetId),await Rd(r.localStore,i.targetId,!0))}async function nD(t,e){const n=ee(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sp(n.remoteStore,r.targetId))}async function rD(t,e,n){const r=cD(t);try{const i=await function(o,l){const u=ee(o),c=ye.now(),d=l.reduce((I,C)=>I.add(C.key),se());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=$n(),P=se();return u.Ns.getEntries(I,d).next(N=>{C=N,C.forEach((E,_)=>{_.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(N=>{p=N;const E=[];for(const _ of l){const w=_x(_,p.get(_.key).overlayedDocument);w!=null&&E.push(new vi(_.key,w,a0(w.value.mapValue),Vn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,E,l)}).next(N=>{m=N;const E=N.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(I,N.batchId,E)})}).then(()=>({batchId:m.batchId,changes:_0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ae(ie)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await pa(r,i.changes),await Xu(r.remoteStore)}catch(i){const s=cp(i,"Failed to persist write");n.reject(s)}}async function nT(t,e){const n=ee(t);try{const r=await g2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ue(o.hu,14607):i.removedDocuments.size>0&&(ue(o.hu,42227),o.hu=!1))}),await pa(n,r,e)}catch(r){await Es(r)}}function r_(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&hp(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iD(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ae(G.comparator);o=o.insert(s,lt.newNoDocument(s,J.min()));const l=se().add(s),u=new Gu(J.min(),new Map,new Ae(ie),o,l);await nT(r,u),r.du=r.du.remove(s),r.Au.delete(e),fp(r)}else await Rd(r.localStore,e,!1).then(()=>Pd(r,e,n)).catch(Es)}async function sD(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await m2(n.localStore,e);iT(n,r,null),rT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pa(n,i)}catch(i){await Es(i)}}async function oD(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ue(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);iT(r,e,n),rT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pa(r,i)}catch(i){await Es(i)}}function rT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function iT(t,e,n){const r=ee(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Pd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||sT(t,r)})}function sT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(sp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),fp(t))}function i_(t,e,n){for(const r of n)r instanceof Z0?(t.Ru.addReference(r.key,e),aD(t,r)):r instanceof eT?(H(dp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||sT(t,r.key)):X(19791,{wu:r})}function aD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(dp,"New document in limbo: "+n),t.Eu.add(r),fp(t))}function fp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(fe.fromString(e)),r=t.fu.next();t.Au.set(r,new X2(n)),t.du=t.du.insert(n,r),H0(t.remoteStore,new cr(pn(Xf(n.path)),r,"TargetPurposeLimboResolution",ju.ce))}}async function pa(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=rp.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.Es,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>b.forEach(m.ds,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!Ts(p))throw p;H(ip,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=d.Ms.get(m),C=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(C);d.Ms=d.Ms.insert(m,P)}}}(r.localStore,s))}async function lD(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H(dp,"User change. New user:",e.toKey());const r=await j0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new $(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pa(n,r.Ls)}}function uD(t,e){const n=ee(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let i=se();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function oT(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iD.bind(null,e),e.Pu.H_=q2.bind(null,e.eventManager),e.Pu.yu=G2.bind(null,e.eventManager),e}function cD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oD.bind(null,e),e}class du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return p2(this.persistence,new h2,e.initialUser,this.serializer)}Cu(e){return new F0(np.mi,this.serializer)}Du(e){return new E2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}du.provider={build:()=>new du};class hD extends du{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ue(this.persistence.referenceDelegate instanceof cu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Xx(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new F0(r=>cu.mi(r,n),this.serializer)}}class kd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lD.bind(null,this.syncEngine),await $2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new W2}()}createDatastore(e){const n=Ku(e.databaseInfo.databaseId),r=function(s){return new A2(s)}(e.databaseInfo);return function(s,o,l,u){return new N2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new D2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>r_(this.syncEngine,n,0),function(){return Yy.v()?new Yy:new T2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Y2(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H(hi,"RemoteStore shutting down."),s.Ea.add(5),await fa(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}kd.provider={build:()=>new kd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="FirestoreClient";class dD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=Hf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await j0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function s_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fD(t);H(Vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zy(e.remoteStore,i)),t._onlineComponents=e}async function fD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Vr,"Using user provided OfflineComponentProvider");try{await oh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await oh(t,new du)}}else H(Vr,"Using default OfflineComponentProvider"),await oh(t,new hD(void 0));return t._offlineComponents}async function lT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Vr,"Using user provided OnlineComponentProvider"),await s_(t,t._uninitializedComponentsProvider._online)):(H(Vr,"Using default OnlineComponentProvider"),await s_(t,new kd))),t._onlineComponents}function pD(t){return lT(t).then(e=>e.syncEngine)}async function uT(t){const e=await lT(t),n=e.eventManager;return n.onListen=J2.bind(null,e.syncEngine),n.onUnlisten=tD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Z2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nD.bind(null,e.syncEngine),n}function mD(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new aT({next:m=>{d.Nu(),o.enqueueAndForget(()=>Y0(s,p));const I=m.docs.has(l);!I&&m.fromCache?c.reject(new $(L.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new $(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new J0(Xf(l.path),d,{includeMetadataChanges:!0,qa:!0});return X0(s,p)}(await uT(t),t.asyncQueue,e,n,r)),r.promise}function gD(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new aT({next:m=>{d.Nu(),o.enqueueAndForget(()=>Y0(s,p)),m.fromCache&&u.source==="server"?c.reject(new $(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new J0(l,d,{includeMetadataChanges:!0,qa:!0});return X0(s,p)}(await uT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firestore.googleapis.com",a_=!0;class l_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hT,this.ssl=a_}else this.host=e.host,this.ssl=e.ssl??a_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=U0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Kx)throw new $(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TN;switch(r.type){case"firstParty":return new AN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=o_.get(n);r&&(H("ComponentProvider","Removing Datastore"),o_.delete(n),r.terminate())}(this),Promise.resolve()}}function yD(t,e,n,r={}){var c;t=us(t,Yu);const i=Mr(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(xf(`https://${l}`),Df("Firestore",!0)),s.host!==hT&&s.host!==l&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ai(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=iE(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new $(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(m)}t._authCredentials=new IN(new QE(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ei(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ca(n,$e._jsonSchema))return new $e(e,r||null,new G(fe.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:Me("string",$e._jsonSchemaVersion),referencePath:Me("string")};class Ir extends Ei{constructor(e,n,r){super(e,n,Xf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new G(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function dT(t,e,...n){if(t=et(t),XE("collection","path",e),t instanceof Yu){const r=fe.fromString(e,...n);return Ey(r),new Ir(t,null,r)}{if(!(t instanceof $e||t instanceof Ir))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Ey(r),new Ir(t.firestore,null,r)}}function fT(t,e,...n){if(t=et(t),arguments.length===1&&(e=Hf.newId()),XE("doc","path",e),t instanceof Yu){const r=fe.fromString(e,...n);return wy(r),new $e(t,null,new G(r))}{if(!(t instanceof $e||t instanceof Ir))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return wy(r),new $e(t.firestore,t instanceof Ir?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="AsyncQueue";class c_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new z0(this,"async_queue_retry"),this._c=()=>{const r=sh();r&&H(u_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=sh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Dn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ts(e))throw e;H(u_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,zn("INTERNAL UNHANDLED ERROR: ",h_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=up.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&X(47125,{Pc:h_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function h_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ju extends Yu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new c_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c_(e),this._firestoreClient=void 0,await e}}}function _D(t,e){const n=typeof t=="object"?t:Lf(),r=typeof t=="string"?t:iu,i=Ou(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=tE("firestore");s&&yD(i,...s)}return i}function pp(t){if(t._terminated)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vD(t),t._firestoreClient}function vD(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new $N(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,cT(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new dD(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ut(tt.fromBase64String(e))}catch(n){throw new $(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ut(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ca(e,Ut._jsonSchema))return Ut.fromBase64String(e.bytes)}}Ut._jsonSchemaVersion="firestore/bytes/1.0",Ut._jsonSchema={type:Me("string",Ut._jsonSchemaVersion),bytes:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(ca(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Me("string",gn._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ca(e,yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new yn(e.vectorValues);throw new $(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:Me("string",yn._jsonSchemaVersion),vectorValues:Me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=/^__.*__$/;class ED{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ha(e,this.data,n,this.fieldTransforms)}}function mT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{Ac:t})}}class gp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new gp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return fu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(mT(this.Ac)&&wD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class TD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ku(e)}Cc(e,n,r,i=!1){return new gp({Ac:e,methodName:n,Dc:r,path:Ye.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gT(t){const e=t._freezeSettings(),n=Ku(t._databaseId);return new TD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ID(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);vT("Data must be an object, but it was:",o,r);const l=yT(r,o);let u,c;if(s.merge)u=new Qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=RD(e,p,n);if(!o.contains(m))throw new $(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);CD(d,m)||d.push(m)}u=new Qt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new ED(new Mt(l),u,c)}function SD(t,e,n,r=!1){return yp(n,t.Cc(r?4:3,e))}function yp(t,e){if(_T(t=et(t)))return vT("Unsupported field value:",e,t),yT(t,e);if(t instanceof pT)return function(r,i){if(!mT(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=yp(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:uu(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uu(i.serializer,s)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ut)return{bytesValue:x0(i.serializer,r._byteString)};if(r instanceof $e){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ep(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yn)return function(o,l){return{mapValue:{fields:{[s0]:{stringValue:o0},[su]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Yf(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Fu(r)}`)}(t,e)}function yT(t,e){const n={};return ZE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yi(t,(r,i)=>{const s=yp(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _T(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof gn||t instanceof Ut||t instanceof $e||t instanceof pT||t instanceof yn)}function vT(t,e,n){if(!_T(n)||!YE(n)){const r=Fu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function RD(t,e,n){if((e=et(e))instanceof mp)return e._internalPath;if(typeof e=="string")return wT(t,e);throw fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const AD=new RegExp("[~\\*/\\[\\]]");function wT(t,e,n){if(e.search(AD)>=0)throw fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mp(...e.split("."))._internalPath}catch{throw fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(L.INVALID_ARGUMENT,l+t+u)}function CD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PD extends ET{data(){return super.data()}}function Zu(t,e){return typeof e=="string"?wT(t,e):e instanceof mp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _p{}class TT extends _p{}function ND(t,e,...n){let r=[];e instanceof _p&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof vp).length,l=s.filter(u=>u instanceof ec).length;if(o>1||o>0&&l>0)throw new $(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ec extends TT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ec(e,n,r)}_apply(e){const n=this._parse(e);return IT(e._query,n),new Ei(e.firestore,e.converter,vd(e._query,n))}_parse(e){const n=gT(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new $(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){f_(p,d);const C=[];for(const P of p)C.push(d_(u,s,P));m={arrayValue:{values:C}}}else m=d_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||f_(p,d),m=SD(l,o,p,d==="in"||d==="not-in");return be.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xD(t,e,n){const r=e,i=Zu("where",t);return ec._create(i,r,n)}class vp extends _p{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)IT(o,u),o=vd(o,u)}(e._query,n),new Ei(e.firestore,e.converter,vd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wp extends TT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ko(s,o)}(e._query,this._field,this._direction);return new Ei(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Is(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function DD(t,e="asc"){const n=e,r=Zu("orderBy",t);return wp._create(r,n)}function d_(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new $(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!p0(e)&&n.indexOf("/")!==-1)throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!G.isDocumentKey(r))throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ky(t,new G(r))}if(n instanceof $e)return ky(t,n._key);throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fu(n)}.`)}function f_(t,e){if(!Array.isArray(t)||t.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function IT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class VD{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[su].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>xe(o.doubleValue));return new yn(n)}convertGeoPoint(e){return new gn(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ue(M0(r),9688,{name:e});const i=new qo(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ei extends ET{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ei._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ei._jsonSchemaVersion="firestore/documentSnapshot/1.0",ei._jsonSchema={type:Me("string",ei._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class Il extends ei{data(e={}){return super.data(e)}}class Zi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new so(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Il(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new so(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new so(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:LD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t){t=us(t,$e);const e=us(t.firestore,Ju);return mD(pp(e),t._key).then(n=>jD(e,t,n))}Zi._jsonSchemaVersion="firestore/querySnapshot/1.0",Zi._jsonSchema={type:Me("string",Zi._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};class ST extends VD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ut(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function MD(t){t=us(t,Ei);const e=us(t.firestore,Ju),n=pp(e),r=new ST(e);return kD(t._query),gD(n,t._query).then(i=>new Zi(e,r,t,i))}function UD(t,e){const n=us(t.firestore,Ju),r=fT(t),i=OD(t.converter,e);return FD(n,[ID(gT(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Vn.exists(!1))]).then(()=>r)}function FD(t,e){return function(r,i){const s=new Dn;return r.asyncQueue.enqueueAndForget(async()=>rD(await pD(r),i,s)),s.promise}(pp(t),e)}function jD(t,e,n){const r=n.docs.get(e._key),i=new ST(t);return new ei(t,i,e._key,r,new so(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ws=i})(gi),li(new Ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ju(new SN(r.getProvider("auth-internal")),new CN(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),hn(gy,yy,e),hn(gy,yy,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="firebasestorage.googleapis.com",AT="storageBucket",BD=2*60*1e3,zD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends En{constructor(e,n,r=0){super(ah(e),`Firebase Storage: ${n} (${ah(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ah(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function ah(t){return"storage/"+t}function Ep(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(ke.UNKNOWN,t)}function $D(t){return new Ne(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function HD(t){return new Ne(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(ke.UNAUTHENTICATED,t)}function qD(){return new Ne(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function GD(t){return new Ne(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function KD(){return new Ne(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function QD(){return new Ne(ke.CANCELED,"User canceled the upload/download.")}function XD(t){return new Ne(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function YD(t){return new Ne(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function JD(){return new Ne(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+AT+"' property when initializing the app?")}function ZD(){return new Ne(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eV(){return new Ne(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tV(t){return new Ne(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Nd(t){return new Ne(ke.INVALID_ARGUMENT,t)}function CT(){return new Ne(ke.APP_DELETED,"The Firebase app was deleted.")}function nV(t){return new Ne(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Io(t,e){return new Ne(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ys(t){throw new Ne(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Pt.makeFromUrl(e,n)}catch{return new Pt(e,"")}if(r.path==="")return r;throw YD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),C={bucket:1,path:3},P=n===RT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",E=new RegExp(`^https?://${P}/${i}/${N}`,"i"),w=[{regex:l,indices:u,postModify:s},{regex:I,indices:C,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<w.length;D++){const U=w[D],M=U.regex.exec(e);if(M){const T=M[U.indices.bucket];let y=M[U.indices.path];y||(y=""),r=new Pt(T,y),U.postModify(r);break}}if(r==null)throw XD(e);return r}}class rV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(I,u())},N)}function m(){s&&clearTimeout(s)}function I(N,...E){if(c){m();return}if(N){m(),d.call(null,N,...E);return}if(u()||o){m(),d.call(null,N,...E);return}r<64&&(r*=2);let w;l===1?(l=2,w=0):w=(r+Math.random())*1e3,p(w)}let C=!1;function P(N){C||(C=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function sV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t){return t!==void 0}function aV(t){return typeof t=="object"&&!Array.isArray(t)}function Tp(t){return typeof t=="string"||t instanceof String}function p_(t){return Ip()&&t instanceof Blob}function Ip(){return typeof Blob<"u"}function m_(t,e,n,r){if(r<e)throw Nd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Nd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function PT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ti;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ti||(ti={}));/**
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
 */function lV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,P)=>{this.resolve_=C,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ya(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ti.NO_ERROR,u=s.getStatus();if(!l||lV(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ti.ABORT;r(!1,new Ya(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ya(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());oV(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Ep();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?CT():QD();o(u)}else{const u=KD();o(u)}};this.canceled_?n(!1,new Ya(!1,null,!0)):this.backoffId_=iV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ya{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pV(t,e,n,r,i,s,o=!0,l=!1){const u=PT(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return dV(d,e),cV(d,n),hV(d,s),fV(d,r),new uV(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gV(...t){const e=mV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ip())return new Blob(t);throw new Ne(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _V(t){if(typeof atob>"u")throw tV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lh{constructor(e,n){this.data=e,this.contentType=n||null}}function vV(t,e){switch(t){case ln.RAW:return new lh(kT(e));case ln.BASE64:case ln.BASE64URL:return new lh(NT(t,e));case ln.DATA_URL:return new lh(EV(e),TV(e))}throw Ep()}function kT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function wV(t){let e;try{e=decodeURIComponent(t)}catch{throw Io(ln.DATA_URL,"Malformed data URL.")}return kT(e)}function NT(t,e){switch(t){case ln.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Io(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Io(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_V(e)}catch(i){throw i.message.includes("polyfill")?i:Io(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class xT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Io(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=IV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function EV(t){const e=new xT(t);return e.base64?NT(ln.BASE64,e.rest):wV(e.rest)}function TV(t){return new xT(t).contentType}function IV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n){let r=0,i="";p_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(p_(this.data_)){const r=this.data_,i=yV(r,e,n);return i===null?null:new ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ar(r,!0)}}static getBlob(...e){if(Ip()){const n=e.map(r=>r instanceof ar?r.data_:r);return new ar(gV.apply(null,n))}else{const n=e.map(o=>Tp(o)?vV(ln.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new ar(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t){let e;try{e=JSON.parse(t)}catch{return null}return aV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function VT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(t,e){return e}class ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||AV}}let Ja=null;function CV(t){return!Tp(t)||t.length<2?t:VT(t)}function OT(){if(Ja)return Ja;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(s,o){return CV(o)}const n=new ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ft("size");return i.xform=r,t.push(i),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),Ja=t,Ja}function PV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Pt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function kV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return PV(r,t),r}function LT(t,e,n){const r=DT(e);return r===null?null:kV(t,r,n)}function NV(t,e,n,r){const i=DT(e);if(i===null||!Tp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),I=Sp(m,n,r),C=PT({alt:"media",token:c});return I+C})[0]}function xV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class bT{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){if(!t)throw Ep()}function DV(t,e){function n(r,i){const s=LT(t,i,e);return MT(s!==null),s}return n}function VV(t,e){function n(r,i){const s=LT(t,i,e);return MT(s!==null),NV(s,i,t.host,t._protocol)}return n}function UT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qD():i=WD():n.getStatus()===402?i=HD(t.bucket):n.getStatus()===403?i=GD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function OV(t){const e=UT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=$D(t.path)),s.serverResponse=i.serverResponse,s}return n}function LV(t,e,n){const r=e.fullServerUrl(),i=Sp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new bT(i,s,VV(t,n),o);return l.errorHandler=OV(e),l}function bV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function MV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bV(null,e)),r}function UV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let w="";for(let D=0;D<2;D++)w=w+Math.random().toString().slice(2);return w}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=MV(e,r,i),d=xV(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",I=ar.getBlob(p,r,m);if(I===null)throw ZD();const C={name:c.fullPath},P=Sp(s,t.host,t._protocol),N="POST",E=t.maxUploadRetryTime,_=new bT(P,N,DV(t,n),E);return _.urlParams=C,_.headers=o,_.body=I.uploadData(),_.errorHandler=UT(e),_}class FV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ti.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ti.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ti.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Ys("cannot .send() more than once");if(Mr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ys("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ys("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ys("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ys("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jV extends FV{initXhr(){this.xhr_.responseType="text"}}function FT(){return new jV}/**
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
 */class di{constructor(e,n){this._service=e,n instanceof Pt?this._location=n:this._location=Pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new di(e,n)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VT(this._location.path)}get storage(){return this._service}get parent(){const e=SV(this._location.path);if(e===null)return null;const n=new Pt(this._location.bucket,e);return new di(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nV(e)}}function BV(t,e,n){t._throwIfRoot("uploadBytes");const r=UV(t.storage,t._location,OT(),new ar(e,!0),n);return t.storage.makeRequestWithTokens(r,FT).then(i=>({metadata:i,ref:t}))}function zV(t){t._throwIfRoot("getDownloadURL");const e=LV(t.storage,t._location,OT());return t.storage.makeRequestWithTokens(e,FT).then(n=>{if(n===null)throw eV();return n})}function $V(t,e){const n=RV(t._location.path,e),r=new Pt(t._location.bucket,n);return new di(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(t){return/^[A-Za-z]+:\/\//.test(t)}function WV(t,e){return new di(t,e)}function jT(t,e){if(t instanceof Rp){const n=t;if(n._bucket==null)throw JD();const r=new di(n,n._bucket);return e!=null?jT(r,e):r}else return e!==void 0?$V(t,e):t}function qV(t,e){if(e&&HV(e)){if(t instanceof Rp)return WV(t,e);throw Nd("To use ref(service, url), the first argument must be a Storage instance.")}else return jT(t,e)}function g_(t,e){const n=e==null?void 0:e[AT];return n==null?null:Pt.makeFromBucketSpec(n,t)}function GV(t,e,n,r={}){t.host=`${e}:${n}`;const i=Mr(e);i&&(xf(`https://${t.host}/b`),Df("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:iE(s,t.app.options.projectId))}class Rp{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=RT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BD,this._maxUploadRetryTime=zD,this._requests=new Set,i!=null?this._bucket=Pt.makeFromBucketSpec(i,this._host):this._bucket=g_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=g_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){m_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){m_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new di(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new rV(CT());{const o=pV(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const y_="@firebase/storage",__="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="storage";function KV(t,e,n){return t=et(t),BV(t,e,n)}function QV(t){return t=et(t),zV(t)}function XV(t,e){return t=et(t),qV(t,e)}function YV(t=Lf(),e){t=et(t);const r=Ou(t,BT).getImmediate({identifier:e}),i=tE("storage");return i&&JV(r,...i),r}function JV(t,e,n,r={}){GV(t,e,n,r)}function ZV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Rp(n,r,i,e,gi)}function eO(){li(new Ar(BT,ZV,"PUBLIC").setMultipleInstances(!0)),hn(y_,__,""),hn(y_,__,"esm2020")}eO();const tO={apiKey:"AIzaSyCFQEN6wjLDKcUrP4UxVneMA1cNKtvRGY8",authDomain:"econotas-app.firebaseapp.com",projectId:"econotas-app",storageBucket:"econotas-app.firebasestorage.app",messagingSenderId:"237857251178",appId:"1:237857251178:web:bd4b78051ddf501d714f13"},Ap=aE(tO),pu=wN(Ap),Cp=_D(Ap),nO=YV(Ap),rO=async()=>{try{return(await rk(pu)).user}catch(t){throw console.error("Error signing in anonymously:",t),t}},iO=async(t,e)=>{try{const n=XV(nO,`audio/${e}.webm`),r=await KV(n,t);return await QV(r.ref)}catch(n){throw console.error("Error uploading audio:",n),n}},sO=async t=>{try{return(await UD(dT(Cp,"sessions"),t)).id}catch(e){throw console.error("Error saving session:",e),e}},oO=async t=>{try{const e=fT(Cp,"sessions",t),n=await bD(e);return n.exists()?{id:n.id,...n.data()}:(console.log("No such session!"),null)}catch(e){throw console.error("Error getting session:",e),e}},aO=async t=>{try{const e=ND(dT(Cp,"sessions"),xD("userId","==",t),DD("createdAt","desc")),n=await MD(e),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r}catch(e){throw console.error("Error getting user sessions:",e),e}},v_=({readOnly:t=!1})=>{const{sessionId:e}=vR(),n=Bw(),[r,i]=V.useState("IDLE"),[s,o]=V.useState(0),[l,u]=V.useState(0),[c,d]=V.useState([]),[p,m]=V.useState(null),[I,C]=V.useState(null),[P]=V.useState("#e2e8f0"),[N,E]=V.useState(""),[_,w]=V.useState(!1),[D,U]=V.useState(!!e),M=V.useRef(null),T=V.useRef(null),y=V.useRef([]),v=V.useRef(null),S=V.useRef(0),A=V.useRef(null),k=V.useRef(null);V.useEffect(()=>{e&&(async()=>{try{const K=await oO(e);K&&(E(K.sessionName),C(K.audioUrl),d(JSON.parse(K.strokes)),o(K.durationMs/1e3),setTimeout(()=>ce(0,!0),100))}catch(K){console.error("Error loading session:",K),alert("Error al cargar la sesión")}finally{U(!1)}})()},[e]),V.useEffect(()=>{const q=M.current;if(!q)return;const K=q.getContext("2d"),le=()=>{const ve=q.parentElement;ve&&(q.width=ve.clientWidth,q.height=ve.clientHeight),K.lineCap="round",K.lineJoin="round",ce(0,!0)};return window.addEventListener("resize",le),le(),()=>window.removeEventListener("resize",le)},[c,D]),V.useEffect(()=>{let q;return r==="RECORDING"&&(q=setInterval(()=>{o(K=>K+1),u(Date.now()-S.current)},100)),()=>clearInterval(q)},[r]);const R=async()=>{if(!t)try{console.log("🎤 Solicitando micrófono");const q=await navigator.mediaDevices.getUserMedia({audio:!0});console.log("✅ Acceso concedido");const K=MediaRecorder.isTypeSupported("audio/webm")?"audio/webm":MediaRecorder.isTypeSupported("audio/mp4")?"audio/mp4":"";console.log(`🎵 MIME: ${K||"default"}`);const le=K?{mimetype:K}:void 0;T.current=new MediaRecorder(q,le),y.current=[],T.current.ondataavailable=Ve=>{Ve.data.size>0&&y.current.push(Ve.data)},T.current.onstop=()=>{console.log("⏹️ Detenido");const Ve=new Blob(y.current,{type:K||"audio/webm"});if(Ve.size===0){alert("No se grabó audio");return}const Fe=URL.createObjectURL(Ve);m(Ve),C(Fe),console.log("✅ Audio listo")},T.current.start(),console.log("🔴 Grabando"),S.current=Date.now(),d([]),o(0),i("RECORDING"),M.current.getContext("2d").clearRect(0,0,M.current.width,M.current.height)}catch(q){console.error("❌ Error:",q),alert("Error: "+q.message)}},Ue=()=>{T.current&&r==="RECORDING"&&(T.current.stop(),T.current.stream.getTracks().forEach(q=>q.stop()),i("IDLE"))},Vt=q=>{const K=M.current.getBoundingClientRect();return{offsetX:q.clientX-K.left,offsetY:q.clientY-K.top,pressure:q.pressure}},Ur=q=>{if(r!=="RECORDING"||t)return;const{offsetX:K,offsetY:le,pressure:ve}=Vt(q),Ve=Date.now()-S.current;k.current={color:P,startTime:Ve,points:[{x:K,y:le,p:ve||.5,t:Ve}]};const Fe=M.current.getContext("2d");Fe.beginPath(),Fe.moveTo(K,le),Fe.lineWidth=(ve||.5)*8,Fe.strokeStyle=P},Fr=q=>{if(r!=="RECORDING"||!k.current||t)return;q.preventDefault();const{offsetX:K,offsetY:le,pressure:ve}=Vt(q),Ve=Date.now()-S.current;k.current.points.push({x:K,y:le,p:ve||.5,t:Ve});const Fe=M.current.getContext("2d");Fe.lineWidth=(ve||.5)*8,Fe.lineCap="round",Fe.lineTo(K,le),Fe.stroke(),Fe.beginPath(),Fe.moveTo(K,le)},z=()=>{if(r!=="RECORDING"||!k.current||t)return;const q=k.current;d(K=>[...K,q]),k.current=null},Q=async()=>{if(!(!I||!v.current))if(r==="PLAYING")v.current.pause(),i("PAUSED"),cancelAnimationFrame(A.current);else try{await v.current.play(),i("PLAYING"),Z()}catch(q){console.error("❌ Error:",q)}},Z=()=>{if(!v.current||v.current.paused||v.current.ended){v.current&&v.current.ended&&i("IDLE");return}const q=v.current.currentTime*1e3;u(q),ce(q,!1),A.current=requestAnimationFrame(Z)},ce=(q,K=!1)=>{const le=M.current;if(!le)return;const ve=le.getContext("2d");ve.clearRect(0,0,le.width,le.height),c.forEach(Ve=>{if(!Ve||!K&&Ve.startTime>q)return;ve.beginPath(),ve.strokeStyle=Ve.color;let Fe=!1;for(let Rs=0;Rs<Ve.points.length;Rs++){const In=Ve.points[Rs];if(!K&&In.t>q)break;ve.lineWidth=In.p*8,Fe?ve.lineTo(In.x,In.y):(ve.moveTo(In.x,In.y),Fe=!0)}Fe&&ve.stroke()})},Ee=q=>{if(!v.current)return;const K=Number(q.target.value);v.current.currentTime=K,u(K*1e3),ce(K*1e3,!1)},Tn=q=>{const K=Math.floor(q/1e3),le=Math.floor(K/60),ve=K%60;return`${le}:${ve.toString().padStart(2,"0")}`},_t=async()=>{if(!(!p||!pu.currentUser)){if(!N.trim()){alert("Por favor ingresa un nombre para la sesión");return}w(!0);try{const q=Date.now().toString(),K=await iO(p,q),le={userId:pu.currentUser.uid,sessionName:N,createdAt:new Date,audioUrl:K,durationMs:s*1e3,strokes:JSON.stringify(c)};await sO(le),alert("¡Sesión guardada exitosamente!"),n("/")}catch(q){console.error("Error saving session:",q),alert("Error al guardar la sesión: "+q.message)}finally{w(!1)}}};return D?j.jsx("div",{className:"flex items-center justify-center h-screen bg-slate-900 text-white",children:j.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"})}):j.jsxs("div",{className:"flex flex-col h-screen bg-slate-900 text-slate-100 font-sans overflow-y-auto pb-4 pb-[env(safe-area-inset-bottom)]",children:[j.jsxs("div",{className:"h-16 border-b border-slate-700 bg-slate-800 flex items-center justify-between px-6 shadow-lg z-10",children:[j.jsxs("div",{className:"flex items-center gap-4",children:[j.jsx("button",{onClick:()=>n("/"),className:"p-2 hover:bg-slate-700 rounded-full transition-colors",children:j.jsx(vA,{className:"w-5 h-5 text-slate-400"})}),j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsx("div",{className:"w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center transform rotate-12",children:j.jsx(CA,{className:"w-5 h-5 text-white"})}),j.jsxs("h1",{className:"text-xl font-bold tracking-tight hidden sm:block",children:["EcoNotas",j.jsx("span",{className:"text-indigo-400",children:"Notes"})]})]})]}),j.jsxs("div",{className:"flex items-center gap-4 bg-slate-900 py-1 px-4 rounded-full border border-slate-700",children:[j.jsx(Xw,{className:`w-4 h-4 ${r==="RECORDING"?"text-red-500 animate-pulse":"text-slate-400"}`}),j.jsx("span",{className:"font-mono text-lg",children:Tn(r==="RECORDING"||r==="IDLE"&&!I?s*1e3:l)})]}),j.jsx("div",{className:"flex gap-2 items-center",children:t&&j.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full border border-indigo-500/30",children:"SOLO LECTURA"})})]}),j.jsxs("div",{className:"flex-1 relative bg-slate-900 cursor-crosshair touch-none",children:[j.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20",style:{backgroundImage:"radial-gradient(#6366f1 1px, transparent 1px)",backgroundSize:"24px 24px"}}),j.jsx("canvas",{ref:M,className:"w-full h-full block touch-none",onPointerDown:Ur,onPointerMove:Fr,onPointerUp:z,onPointerLeave:z}),r==="IDLE"&&c.length===0&&!t&&j.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:j.jsxs("div",{className:"text-center text-slate-500",children:[j.jsx(jg,{className:"w-12 h-12 mx-auto mb-2 opacity-50"}),j.jsx("p",{className:"text-lg",children:"Presiona Grabar para comenzar"}),j.jsx("p",{className:"text-sm opacity-60",children:"Usa tu stylus o mouse"})]})})]}),j.jsxs("div",{className:"bg-slate-800 border-t border-slate-700 p-4 flex flex-col justify-center",children:[I&&j.jsxs("div",{className:"mb-4 bg-slate-700 p-3 rounded-lg",children:[j.jsxs("div",{className:"flex justify-between items-center mb-2",children:[j.jsx("p",{className:"text-xs text-slate-400",children:"🔊 Controles de Audio"}),!t&&!e&&j.jsx("input",{type:"text",placeholder:"Nombre de la sesión...",value:N,onChange:q=>E(q.target.value),className:"bg-slate-800 border border-slate-600 rounded px-2 py-1 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),t&&j.jsx("p",{className:"text-sm font-semibold text-indigo-300",children:N})]}),j.jsx("audio",{ref:v,src:I,controls:!0,className:"w-full",onPlay:()=>{console.log("▶️ Play"),i("PLAYING"),Z()},onPause:()=>{console.log("⏸️ Pause"),i("PAUSED"),cancelAnimationFrame(A.current)},onEnded:()=>{console.log("✅ Ended"),i("IDLE")}})]}),I&&v.current&&j.jsx("input",{type:"range",min:"0",max:v.current.duration||s,value:l/1e3,onChange:Ee,className:"w-full h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer mb-4 accent-indigo-500"}),j.jsx("div",{className:"flex items-center justify-center gap-6",children:r==="IDLE"||r==="PAUSED"?I?j.jsxs("div",{className:"flex gap-4",children:[j.jsxs("button",{onClick:Q,className:"flex items-center gap-2 px-8 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-900/20",children:[j.jsx(id,{className:"w-5 h-5 fill-current"})," REPRODUCIR"]}),!t&&!e&&j.jsxs(j.Fragment,{children:[j.jsxs("button",{onClick:_t,disabled:_,className:"flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all shadow-lg shadow-green-900/20 disabled:opacity-50 disabled:cursor-not-allowed",children:[_?j.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):j.jsx(OA,{className:"w-5 h-5"}),_?"GUARDANDO...":"GUARDAR"]}),j.jsx("button",{onClick:()=>{confirm("¿Estás seguro? Se perderá la grabación actual.")&&(C(null),d([]),o(0),M.current&&M.current.getContext("2d").clearRect(0,0,M.current.width,M.current.height))},className:"p-2 bg-slate-700 hover:bg-slate-600 rounded-full text-slate-300",title:"Reiniciar",children:j.jsx(DA,{className:"w-5 h-5"})})]})]}):!t&&j.jsxs("button",{onClick:R,className:"flex items-center gap-2 px-8 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all shadow-lg shadow-red-900/20 active:scale-95",children:[j.jsx(jg,{className:"w-5 h-5"})," GRABAR"]}):r==="RECORDING"?j.jsxs("button",{onClick:Ue,className:"flex items-center gap-2 px-8 py-2 bg-slate-200 text-slate-900 hover:bg-white rounded-full font-bold transition-all animate-pulse",children:[j.jsx(UA,{className:"w-5 h-5 fill-current"})," DETENER"]}):j.jsxs("button",{onClick:Q,className:"flex items-center gap-2 px-8 py-2 bg-yellow-500 text-black hover:bg-yellow-400 rounded-full font-bold transition-all",children:[j.jsx(RA,{className:"w-5 h-5 fill-current"})," PAUSA"]})})]})]})},lO=()=>{const[t,e]=V.useState([]),[n,r]=V.useState(!0),[i,s]=V.useState(null);V.useEffect(()=>{const d=uk(pu,async p=>{if(p)s(p),o(p.uid);else try{const m=await rO();s(m),r(!1)}catch(m){console.error("Auth error:",m),r(!1)}});return()=>d()},[]);const o=async d=>{try{const p=await aO(d);e(p)}catch(p){console.error("Error loading sessions:",p),p.message.includes("index")&&alert("Falta un índice en Firestore. Revisa la consola para ver el enlace de creación.")}finally{r(!1)}},l=d=>{const p=Math.floor(d/1e3),m=Math.floor(p/60),I=p%60;return`${m}:${I.toString().padStart(2,"0")}`},u=d=>{if(!d)return"";const p=d.toDate?d.toDate():new Date(d);return p.toLocaleDateString()+" "+p.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},c=(d,p)=>{d.preventDefault();const m=`${window.location.origin}/share/${p}`;navigator.clipboard.writeText(m),alert("Enlace copiado al portapapeles: "+m)};return n?j.jsx("div",{className:"flex items-center justify-center h-screen bg-slate-900 text-white",children:j.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"})}):j.jsx("div",{className:"min-h-screen bg-slate-900 text-slate-100 font-sans p-6",children:j.jsxs("div",{className:"max-w-4xl mx-auto",children:[j.jsxs("header",{className:"flex items-center justify-between mb-8",children:[j.jsxs("div",{children:[j.jsx("h1",{className:"text-3xl font-bold tracking-tight mb-1",children:"Mis Sesiones"}),j.jsx("p",{className:"text-slate-400",children:"Gestiona tus grabaciones y notas"})]}),j.jsxs(go,{to:"/new",className:"flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-900/20",children:[j.jsx(NA,{className:"w-5 h-5"})," Nueva Sesión"]})]}),t.length===0?j.jsxs("div",{className:"text-center py-20 bg-slate-800 rounded-2xl border border-slate-700",children:[j.jsx("div",{className:"w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4",children:j.jsx(id,{className:"w-8 h-8 text-slate-500 ml-1"})}),j.jsx("h3",{className:"text-xl font-semibold mb-2",children:"No hay sesiones guardadas"}),j.jsx("p",{className:"text-slate-400 mb-6",children:"Comienza a grabar tu primera sesión de tutoría."}),j.jsx(go,{to:"/new",className:"text-indigo-400 hover:text-indigo-300 font-medium",children:"Crear una nueva sesión →"})]}):j.jsx("div",{className:"grid gap-4",children:t.map(d=>j.jsx(go,{to:`/share/${d.id}`,className:"block bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-xl p-4 transition-all hover:border-indigo-500/50 hover:shadow-lg group",children:j.jsxs("div",{className:"flex items-center justify-between",children:[j.jsxs("div",{className:"flex items-center gap-4",children:[j.jsx("div",{className:"w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors",children:j.jsx(id,{className:"w-6 h-6 ml-1"})}),j.jsxs("div",{children:[j.jsx("h3",{className:"font-semibold text-lg group-hover:text-indigo-300 transition-colors",children:d.sessionName||"Sesión sin nombre"}),j.jsxs("div",{className:"flex items-center gap-4 text-sm text-slate-400 mt-1",children:[j.jsxs("span",{className:"flex items-center gap-1",children:[j.jsx(EA,{className:"w-3 h-3"}),u(d.createdAt)]}),j.jsxs("span",{className:"flex items-center gap-1",children:[j.jsx(Xw,{className:"w-3 h-3"}),l(d.durationMs)]})]})]})]}),j.jsx("button",{onClick:p=>c(p,d.id),className:"p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors",title:"Copiar enlace",children:j.jsx(bA,{className:"w-5 h-5"})})]})},d.id))})]})})};function uO(){return j.jsx(rA,{basename:"/econotas",children:j.jsxs(OR,{children:[j.jsx(hl,{path:"/",element:j.jsx(lO,{})}),j.jsx(hl,{path:"/new",element:j.jsx(v_,{})}),j.jsx(hl,{path:"/share/:sessionId",element:j.jsx(v_,{readOnly:!0})})]})})}uh.createRoot(document.getElementById("root")).render(j.jsx(xI.StrictMode,{children:j.jsx(uO,{})}));
