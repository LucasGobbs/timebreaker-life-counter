var Ee=Object.defineProperty;var Ce=(t,e,n)=>e in t?Ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ee=(t,e,n)=>(Ce(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function x(){}const ye=t=>t;function $e(t){return t()}function oe(){return Object.create(null)}function H(t){t.forEach($e)}function se(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let J;function Oe(t,e){return t===e?!0:(J||(J=document.createElement("a")),J.href=e,t===J.href)}function je(t){return Object.keys(t).length===0}const we=typeof window<"u";let Ne=we?()=>window.performance.now():()=>Date.now(),ie=we?t=>requestAnimationFrame(t):x;const I=new Set;function be(t){I.forEach(e=>{e.c(t)||(I.delete(e),e.f())}),I.size!==0&&ie(be)}function Ae(t){let e;return I.size===0&&ie(be),{promise:new Promise(n=>{I.add(e={c:t,f:n})}),abort(){I.delete(e)}}}function _(t,e){t.appendChild(e)}function ve(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Se(t){const e=w("style");return e.textContent="/* empty */",qe(ve(t),e),e.sheet}function qe(t,e){return _(t.head||t,e),e.sheet}function O(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function k(){return P(" ")}function Pe(){return P("")}function Z(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Le(t){return Array.from(t.childNodes)}function K(t,e){e=""+e,t.data!==e&&(t.data=e)}function xe(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}const X=new Map;let Y=0;function Ve(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Fe(t,e){const n={stylesheet:Se(e),rules:{}};return X.set(t,n),n}function Re(t,e,n,r,l,s,i,f=0){const a=16.666/r;let d=`{
`;for(let u=0;u<=1;u+=a){const p=e+(n-e)*s(u);d+=u*100+`%{${i(p,1-p)}}
`}const g=d+`100% {${i(n,1-n)}}
}`,c=`__svelte_${Ve(g)}_${f}`,$=ve(t),{stylesheet:m,rules:y}=X.get($)||Fe($,t);y[c]||(y[c]=!0,m.insertRule(`@keyframes ${c} ${g}`,m.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${c} ${r}ms linear ${l}ms 1 both`,Y+=1,c}function ue(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),l=n.length-r.length;l&&(t.style.animation=r.join(", "),Y-=l,Y||Te())}function Te(){ie(()=>{Y||(X.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),X.clear())})}let U;function B(t){U=t}function De(){if(!U)throw new Error("Function called outside component initialization");return U}function Ie(){const t=De();return(e,n,{cancelable:r=!1}={})=>{const l=t.$$.callbacks[e];if(l){const s=xe(e,n,{cancelable:r});return l.slice().forEach(i=>{i.call(t,s)}),!s.defaultPrevented}return!0}}const D=[],ne=[];let z=[];const re=[],ze=Promise.resolve();let le=!1;function Me(){le||(le=!0,ze.then(ke))}function G(t){z.push(t)}function Be(t){re.push(t)}const te=new Set;let T=0;function ke(){if(T!==0)return;const t=U;do{try{for(;T<D.length;){const e=D[T];T++,B(e),Ke(e.$$)}}catch(e){throw D.length=0,T=0,e}for(B(null),D.length=0,T=0;ne.length;)ne.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];te.has(n)||(te.add(n),n())}z.length=0}while(D.length);for(;re.length;)re.pop()();le=!1,te.clear(),B(t)}function Ke(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function Ue(t){const e=[],n=[];z.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),z=e}let M;function Ge(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function fe(t,e,n){t.dispatchEvent(xe(`${e?"intro":"outro"}${n}`))}const W=new Set;let q;function He(){q={r:0,c:[],p:q}}function Je(){q.r||H(q.c),q=q.p}function C(t,e){t&&t.i&&(W.delete(t),t.i(e))}function j(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),q.c.push(()=>{W.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Qe={duration:0};function We(t,e,n){const r={direction:"in"};let l=e(t,n,r),s=!1,i,f,a=0;function d(){i&&ue(t,i)}function g(){const{delay:$=0,duration:m=300,easing:y=ye,tick:b=x,css:u}=l||Qe;u&&(i=Re(t,0,1,m,$,y,u,a++)),b(0,1);const p=Ne()+$,o=p+m;f&&f.abort(),s=!0,G(()=>fe(t,!0,"start")),f=Ae(v=>{if(s){if(v>=o)return b(1,0),fe(t,!0,"end"),d(),s=!1;if(v>=p){const R=y((v-p)/m);b(R,1-R)}}return s})}let c=!1;return{start(){c||(c=!0,ue(t),se(l)?(l=l(r),Ge().then(g)):g())},invalidate(){c=!1},end(){s&&(d(),s=!1)}}}function Q(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Xe(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function S(t){t&&t.c()}function N(t,e,n){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),G(()=>{const s=t.$$.on_mount.map($e).filter(se);t.$$.on_destroy?t.$$.on_destroy.push(...s):H(s),t.$$.on_mount=[]}),l.forEach(G)}function A(t,e){const n=t.$$;n.fragment!==null&&(Ue(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ye(t,e){t.$$.dirty[0]===-1&&(D.push(t),Me(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,r,l,s,i=null,f=[-1]){const a=U;B(t);const d=t.$$={fragment:null,ctx:[],props:s,update:x,not_equal:l,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:oe(),dirty:f,skip_bound:!1,root:e.target||a.$$.root};i&&i(d.root);let g=!1;if(d.ctx=n?n(t,e.props||{},(c,$,...m)=>{const y=m.length?m[0]:$;return d.ctx&&l(d.ctx[c],d.ctx[c]=y)&&(!d.skip_bound&&d.bound[c]&&d.bound[c](y),g&&Ye(t,c)),$}):[],d.update(),g=!0,H(d.before_update),d.fragment=r?r(d.ctx):!1,e.target){if(e.hydrate){const c=Le(e.target);d.fragment&&d.fragment.l(c),c.forEach(E)}else d.fragment&&d.fragment.c();e.intro&&C(t.$$.fragment),N(t,e.target,e.anchor),ke()}B(a)}class F{constructor(){ee(this,"$$");ee(this,"$$set")}$destroy(){A(this,1),this.$destroy=x}$on(e,n){if(!se(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ze);class et extends F{constructor(e){super(),V(this,e,null,null,L,{})}}function tt(t,{delay:e=0,duration:n=400,easing:r=ye}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:s=>`opacity: ${s*l}`}}function ae(t,e,n){const r=t.slice();return r[11]=e[n],r}function de(t,e,n){const r=t.slice();return r[14]=e[n],r}function pe(t){let e,n,r,l,s;return{c(){e=w("span"),n=P(t[2]),r=k(),l=P(t[1]),h(e,"class","text-blue-400")},m(i,f){O(i,e,f),_(e,n),_(e,r),_(e,l)},p(i,f){f&4&&K(n,i[2]),f&2&&K(l,i[1])},i(i){i&&(s||G(()=>{s=We(e,tt,{delay:75,duration:75}),s.start()}))},o:x,d(i){i&&E(e)}}}function me(t){let e,n,r;function l(){return t[9](t[14])}return{c(){e=w("button"),e.textContent=`${t[14]} `,h(e,"class","lg:text-2xl text-shadow shadow-black")},m(s,i){O(s,e,i),n||(r=Z(e,"click",l),n=!0)},p(s,i){t=s},d(s){s&&E(e),n=!1,r()}}}function nt(t){let e;return{c(){e=w("div")},m(n,r){O(n,e,r)},p:x,d(n){n&&E(e)}}}function rt(t){let e,n,r,l,s;function i(){return t[10](t[11])}return{c(){e=w("div"),n=w("button"),n.textContent=`${t[11]}`,r=k(),h(n,"class","radial w-8 h-8 rounded-full md:w-[95%] md:h-[95%] lg:text-4xl text-shadow shadow-black transition ease-in-out delay-75 hover:bg-gray-800 svelte-t1sioq"),h(e,"class","justify-center align-middle flex p-0.5 rounded-full w-9 h-9 lg:w-24 lg:h-24 items-center transition ease-in-out delay-75 hover:scale-110 bg-gradient-to-t from-amber-200 to-amber-600 ")},m(f,a){O(f,e,a),_(e,n),_(e,r),l||(s=Z(n,"click",i),l=!0)},p(f,a){t=f},d(f){f&&E(e),l=!1,s()}}}function _e(t){let e;function n(s,i){return s[11]!==null?rt:nt}let l=n(t)(t);return{c(){l.c(),e=Pe()},m(s,i){l.m(s,i),O(s,e,i)},p(s,i){l.p(s,i)},d(s){s&&E(e),l.d(s)}}}function lt(t){let e,n,r,l,s,i,f,a,d,g,c=t[2]&&pe(t),$=Q(t[3]),m=[];for(let u=0;u<$.length;u+=1)m[u]=me(de(t,$,u));let y=Q(t[4]),b=[];for(let u=0;u<y.length;u+=1)b[u]=_e(ae(t,y,u));return{c(){e=w("div"),n=w("div"),r=w("div"),l=P(t[0]),s=k(),c&&c.c(),i=k(),f=w("div"),a=w("div");for(let u=0;u<m.length;u+=1)m[u].c();d=k(),g=w("div");for(let u=0;u<b.length;u+=1)b[u].c();h(r,"class","text-center text-5xl text-shadow shadow-black "),h(n,"class","h-20 flex-row space-y-3 border-2 bg-gray-800 radial border-yellow-600 rounded-lg py-2 svelte-t1sioq"),h(a,"class","flex flex-col justify-between py-2 px-2 border-2 rounded-lg border-yellow-600 bg-gray-800"),h(g,"class","w-full grid grid-cols-3 gap-1"),h(f,"class","flex flex-row w-full space-x-2"),h(e,"class","space-y-2 w-full")},m(u,p){O(u,e,p),_(e,n),_(n,r),_(r,l),_(r,s),c&&c.m(r,null),_(e,i),_(e,f),_(f,a);for(let o=0;o<m.length;o+=1)m[o]&&m[o].m(a,null);_(f,d),_(f,g);for(let o=0;o<b.length;o+=1)b[o]&&b[o].m(g,null)},p(u,[p]){if(p&1&&K(l,u[0]),u[2]?c?(c.p(u,p),p&4&&C(c,1)):(c=pe(u),c.c(),C(c,1),c.m(r,null)):c&&(c.d(1),c=null),p&72){$=Q(u[3]);let o;for(o=0;o<$.length;o+=1){const v=de(u,$,o);m[o]?m[o].p(v,p):(m[o]=me(v),m[o].c(),m[o].m(a,null))}for(;o<m.length;o+=1)m[o].d(1);m.length=$.length}if(p&48){y=Q(u[4]);let o;for(o=0;o<y.length;o+=1){const v=ae(u,y,o);b[o]?b[o].p(v,p):(b[o]=_e(v),b[o].c(),b[o].m(g,null))}for(;o<b.length;o+=1)b[o].d(1);b.length=y.length}},i(u){C(c)},o:x,d(u){u&&E(e),c&&c.d(),ce(m,u),ce(b,u)}}}const ge="-";function st(t,e,n){let r,l,s=25;const i=["AC","+","-","="],f=[1,2,3,4,5,6,7,8,9,null,0,null];let a="",d=ge;function g(y){n(7,a+=y)}function c(y){const u={"+":()=>{n(8,d="+")},"-":()=>{n(8,d="-")},AC:()=>{n(7,a="")},"=":()=>{let p=parseFloat(s);const o=parseFloat(a||0);d==="+"&&(p+=o),d==="-"&&(p-=o),n(0,s=p),n(7,a=""),n(8,d=ge)}}[y];u()}const $=y=>c(y),m=y=>g(y);return t.$$.update=()=>{t.$$.dirty&384&&n(2,r=a.length?d:""),t.$$.dirty&128&&n(1,l=a.length?a:"")},[s,l,r,i,f,g,c,a,d,$,m]}class it extends F{constructor(e){super(),V(this,e,st,lt,L,{})}}function ot(t){let e,n,r,l,s,i;return l=new it({}),{c(){e=w("div"),n=w("input"),r=k(),S(l.$$.fragment),h(n,"type","text"),h(n,"class","bg-gray-800 space-y-3 border-2 border-yellow-600 rounded-lg text-xs text-center p-2 w-6/12"),h(e,"class",s=(t[0]?"rotate-180":"rotate-0")+" sm:rotate-0 md:w-1/4 flex flex-col space-y-1 justify-center items-center align-middle")},m(f,a){O(f,e,a),_(e,n),_(e,r),N(l,e,null),i=!0},p(f,[a]){(!i||a&1&&s!==(s=(f[0]?"rotate-180":"rotate-0")+" sm:rotate-0 md:w-1/4 flex flex-col space-y-1 justify-center items-center align-middle"))&&h(e,"class",s)},i(f){i||(C(l.$$.fragment,f),i=!0)},o(f){j(l.$$.fragment,f),i=!1},d(f){f&&E(e),A(l)}}}function ct(t,e,n){let{first:r=!1}=e;return t.$$set=l=>{"first"in l&&n(0,r=l.first)},[r]}class he extends F{constructor(e){super(),V(this,e,ct,ot,L,{first:0})}}function ut(t){let e;return{c(){e=w("div"),h(e,"class",t[0])},m(n,r){O(n,e,r)},p(n,[r]){r&1&&h(e,"class",n[0])},i:x,o:x,d(n){n&&E(e)}}}function ft(t,e,n){let{classValues:r=""}=e;return t.$$set=l=>{"classValues"in l&&n(0,r=l.classValues)},[r]}class at extends F{constructor(e){super(),V(this,e,ft,ut,L,{classValues:0})}}function dt(t){let e,n;return e=new at({props:{classValues:"w-6 h-6"}}),{c(){S(e.$$.fragment)},m(r,l){N(e,r,l),n=!0},p:x,i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){j(e.$$.fragment,r),n=!1},d(r){A(e,r)}}}function pt(t){let e,n,r;return{c(){e=w("button"),e.textContent="-",h(e,"class","svelte-ptkiqr")},m(l,s){O(l,e,s),n||(r=Z(e,"click",t[2]),n=!0)},p:x,i:x,o:x,d(l){l&&E(e),n=!1,r()}}}function mt(t){let e,n,r,l,s,i,f,a,d,g,c,$,m,y;const b=[pt,dt],u=[];function p(o,v){return o[0]>1?0:1}return s=p(t),i=u[s]=b[s](t),{c(){e=w("div"),n=w("div"),n.textContent="turno",r=k(),l=w("div"),i.c(),f=k(),a=w("div"),d=P(t[0]),g=k(),c=w("button"),c.textContent="+",h(n,"class","text-center md:text-4xl text-blue-400 sm:text-red-400 md:text-yellow-400 lg:text-purple-400"),h(a,"class","radial border-5 rounded-full text-center items-center justify-center w-14 h-14 md:w-24 md:h-24 flex p-3 relative border-yellow-500 text-2xl font-bold text-3xl md:text-6xl svelte-ptkiqr"),h(c,"class","svelte-ptkiqr"),h(l,"class","flex flex-row space-x-2 items-center")},m(o,v){O(o,e,v),_(e,n),_(e,r),_(e,l),u[s].m(l,null),_(l,f),_(l,a),_(a,d),_(l,g),_(l,c),$=!0,m||(y=Z(c,"click",t[1]),m=!0)},p(o,[v]){let R=s;s=p(o),s===R?u[s].p(o,v):(He(),j(u[R],1,1,()=>{u[R]=null}),Je(),i=u[s],i?i.p(o,v):(i=u[s]=b[s](o),i.c()),C(i,1),i.m(l,f)),(!$||v&1)&&K(d,o[0])},i(o){$||(C(i),$=!0)},o(o){j(i),$=!1},d(o){o&&E(e),u[s].d(),m=!1,y()}}}function _t(t,e,n){const r=Ie();let l=1;const s=()=>l*2<10?l*2:10,i=()=>r("turn_change",{turn:l,energy:s()});function f(){n(0,l+=1),i()}function a(){l!==1&&(n(0,l-=1),i())}return[l,f,a]}class gt extends F{constructor(e){super(),V(this,e,_t,mt,L,{})}}function ht(t){let e,n,r,l,s,i,f,a,d,g;return{c(){e=w("div"),n=w("div"),n.textContent="Energia",r=k(),l=w("div"),s=w("div"),i=w("p"),f=P(t[0]),a=k(),d=w("img"),h(n,"class","text-center md:text-5xl"),h(i,"class","absolute text-4xl md:text-6xl text-shadow shadow-blue-900"),h(d,"class","object-fill"),Oe(d.src,g="./images/ENERGIADEF.png")||h(d,"src",g),h(d,"alt","Energia"),h(s,"class","radial rounded-full text-center items-center justify-center w-20 h-20 md:w-40 md:h-40 border-2 border-blue-400 shadow-sm shadow-blue-900 flex text-2xl font-bold svelte-bq3wl2"),h(l,"class","glow light svelte-bq3wl2"),h(e,"class","flex flex-col justify-center items-center space-y-24 lg:space-y-56")},m(c,$){O(c,e,$),_(e,n),_(e,r),_(e,l),_(l,s),_(s,i),_(i,f),_(s,a),_(s,d)},p(c,[$]){$&1&&K(f,c[0])},i:x,o:x,d(c){c&&E(e)}}}function yt(t,e,n){let r=10;function l(s){n(0,r=s)}return[r,l]}class $t extends F{constructor(e){super(),V(this,e,yt,ht,L,{updateEnergy:1})}get updateEnergy(){return this.$$.ctx[1]}}function wt(t){let e,n,r,l,s,i,f,a,d,g,c,$,m,y;e=new et({}),s=new he({props:{first:!0}}),a=new gt({}),a.$on("turn_change",t[1]);function b(p){t[2](p)}let u={};return t[0]!==void 0&&(u.updateEnergy=t[0]),g=new $t({props:u}),ne.push(()=>Xe(g,"updateEnergy",b)),m=new he({}),{c(){S(e.$$.fragment),n=k(),r=w("main"),l=w("div"),S(s.$$.fragment),i=k(),f=w("div"),S(a.$$.fragment),d=k(),S(g.$$.fragment),$=k(),S(m.$$.fragment),h(f,"class","space-y-10 sm:space-x-0 h-full flex flex-row sm:flex-col justify-center items-center"),h(l,"class","space-x-5 flex flex-col sm:flex-row w-full h-full justify-center items-center align-middle"),h(r,"class","font-lemon bg-black text-white overflow-hidden h-screen w-screen -z-20")},m(p,o){N(e,p,o),O(p,n,o),O(p,r,o),_(r,l),N(s,l,null),_(l,i),_(l,f),N(a,f,null),_(f,d),N(g,f,null),_(l,$),N(m,l,null),y=!0},p(p,[o]){const v={};!c&&o&1&&(c=!0,v.updateEnergy=p[0],Be(()=>c=!1)),g.$set(v)},i(p){y||(C(e.$$.fragment,p),C(s.$$.fragment,p),C(a.$$.fragment,p),C(g.$$.fragment,p),C(m.$$.fragment,p),y=!0)},o(p){j(e.$$.fragment,p),j(s.$$.fragment,p),j(a.$$.fragment,p),j(g.$$.fragment,p),j(m.$$.fragment,p),y=!1},d(p){p&&(E(n),E(r)),A(e,p),A(s),A(a),A(g),A(m)}}}function bt(t,e,n){let r;function l(i){r(i.detail.energy)}function s(i){r=i,n(0,r)}return[r,l,s]}class vt extends F{constructor(e){super(),V(this,e,bt,wt,L,{})}}new vt({target:document.getElementById("app")});
