import{p as $,k as j,h as K,u as G,q as W,f as R,s as B,t as H,v as x,x as U,y as Y,d as Z,j as Q,z as X}from"./vue.esm-bundler-BlYiWssd.js";function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?E(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ee(e,t,n){return t=te(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e){var t=ne(e,"string");return typeof t=="symbol"?t:String(t)}function ne(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const re=V({});function V(e){return t.withOptions=n=>V(N(N({},e),n)),t;function t(n,...r){const o=typeof n=="string"?[n]:n.raw,{escapeSpecialCharacters:l=Array.isArray(n)}=e;let a="";for(let c=0;c<o.length;c++){let s=o[c];l&&(s=s.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\\{/g,"{")),a+=s,c<r.length&&(a+=r[c])}const p=a.split(`
`);let f=null;for(const c of p){const s=c.match(/^(\s+)\S+/);if(s){const u=s[1].length;f?f=Math.min(f,u):f=u}}if(f!==null){const c=f;a=p.map(s=>s[0]===" "||s[0]==="	"?s.slice(c):s).join(`
`)}return a=a.trim(),l&&(a=a.replace(/\\n/g,`
`)),a}}const{addons:oe,makeDecorator:ie}=__STORYBOOK_MODULE_PREVIEW_API__,ae=ie({name:"template-decorator",parameterName:"template-decorator",wrapper:(e,t)=>{const n=e(t);return{components:{story:n},setup(){$(()=>{r()}),j(t.args,()=>{r()});function r(){try{const o=t.originalStoryFn(t.args).template,l=re(le(o,t.args));oe.getChannel().emit("storybook/docs/snippet-rendered",{id:t.id,args:t.args,source:l})}catch(o){console.warn("Failed to render code",o)}}return()=>K(n)}}}});function se(e,t){switch(typeof t){case"boolean":return t?e:"";case"string":return`${e}="${t}"`;case"object":return`${e}="${JSON.stringify(t).replace(/"(\w+)"\s*:/g,"$1:").replaceAll('"',"'")}"`;default:return`:${e}="${t}"`}}function le(e,t,n='v-bind="args"'){return e.replace(n,Object.keys(t).map(o=>se(o,t[o])).join(" "))}function ce(e){return x()?(U(e),!0):!1}function k(e){return typeof e=="function"?e():G(e)}const ue=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const de=Object.prototype.toString,fe=e=>de.call(e)==="[object Object]",pe=()=>{};function me(e,t){function n(...r){return new Promise((o,l)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(l)})}return n}const q=e=>e();function ye(e=q){const t=R(!0);function n(){t.value=!1}function r(){t.value=!0}const o=(...l)=>{t.value&&e(...l)};return{isActive:B(t),pause:n,resume:r,eventFilter:o}}function ge(e){return H()}function he(e,t,n={}){const{eventFilter:r=q,...o}=n;return j(e,me(r,t),o)}function be(e,t,n={}){const{eventFilter:r,...o}=n,{eventFilter:l,pause:a,resume:p,isActive:f}=ye(r);return{stop:he(e,t,{...o,eventFilter:l}),pause:a,resume:p,isActive:f}}function we(e,t=!0,n){ge()?$(e,n):t?e():W(e)}function ve(e){var t;const n=k(e);return(t=n==null?void 0:n.$el)!=null?t:n}const T=ue?window:void 0;function C(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=T):[t,n,r,o]=e,!t)return pe;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const l=[],a=()=>{l.forEach(s=>s()),l.length=0},p=(s,u,b,m)=>(s.addEventListener(u,b,m),()=>s.removeEventListener(u,b,m)),f=j(()=>[ve(t),k(o)],([s,u])=>{if(a(),!s)return;const b=fe(u)?{...u}:u;l.push(...n.flatMap(m=>r.map(v=>p(s,m,v,b))))},{immediate:!0,flush:"post"}),c=()=>{f(),a()};return ce(c),c}const O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_="__vueuse_ssr_handlers__",Se=Oe();function Oe(){return _ in O||(O[_]=O[_]||{}),O[_]}function _e(e,t){return Se[e]||t}function Te(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const je={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},F="vueuse-storage";function ke(e,t,n,r={}){var o;const{flush:l="pre",deep:a=!0,listenToStorageChanges:p=!0,writeDefaults:f=!0,mergeDefaults:c=!1,shallow:s,window:u=T,eventFilter:b,onError:m=i=>{console.error(i)},initOnMounted:v}=r,g=(s?Y:R)(typeof t=="function"?t():t);if(!n)try{n=_e("getDefaultStorage",()=>{var i;return(i=T)==null?void 0:i.localStorage})()}catch(i){m(i)}if(!n)return g;const h=k(t),A=Te(h),w=(o=r.serializer)!=null?o:je[A],{pause:I,resume:P}=be(g,()=>J(g.value),{flush:l,deep:a,eventFilter:b});u&&p&&we(()=>{C(u,"storage",S),C(u,F,z),v&&S()}),v||S();function D(i,d){u&&u.dispatchEvent(new CustomEvent(F,{detail:{key:e,oldValue:i,newValue:d,storageArea:n}}))}function J(i){try{const d=n.getItem(e);if(i==null)D(d,null),n.removeItem(e);else{const y=w.write(i);d!==y&&(n.setItem(e,y),D(d,y))}}catch(d){m(d)}}function L(i){const d=i?i.newValue:n.getItem(e);if(d==null)return f&&h!=null&&n.setItem(e,w.write(h)),h;if(!i&&c){const y=w.read(d);return typeof c=="function"?c(y,h):A==="object"&&!Array.isArray(y)?{...h,...y}:y}else return typeof d!="string"?d:w.read(d)}function S(i){if(!(i&&i.storageArea!==n)){if(i&&i.key==null){g.value=h;return}if(!(i&&i.key!==e)){I();try{(i==null?void 0:i.newValue)!==w.write(g.value)&&(g.value=L(i))}catch(d){m(d)}finally{i?W(P):P()}}}}function z(i){S(i.detail)}return g}function Ae(e,t,n={}){const{window:r=T}=n;return ke(e,t,r==null?void 0:r.localStorage,n)}const Pe=Symbol("v-use-theme"),M=Z({__name:"theme-provider",props:{initialTheme:{}},setup(e){const n=Ae("theme",e.initialTheme);function r(){return n.value==="dark"}function o(a){n.value=a??(r()?"light":"dark")}function l(){document.body.classList.toggle("dark",r())}return j(n,()=>{l()},{immediate:!0}),X(Pe,{theme:n,setTheme:o}),(a,p)=>Q(a.$slots,"default")}});M.__docgenInfo={exportName:"default",displayName:"theme-provider",type:1,props:[{name:"initialTheme",global:!1,description:"",tags:[],required:!0,type:"Theme",declarations:[],schema:{kind:"enum",type:"Theme",schema:['"light"','"dark"']}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"string | number | symbol | undefined",declarations:[],schema:{kind:"enum",type:"string | number | symbol | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, refs: Record<...>): void",schema:[]}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}",schema:{}}}],exposed:[{name:"initialTheme",type:"Theme",description:"",declarations:[],schema:{kind:"enum",type:"Theme",schema:['"light"','"dark"']}}],sourceFiles:"/home/runner/work/tailwind-plugin/tailwind-plugin/packages/ui/src/providers/theme-provider.vue"};const De=(e,t)=>{const n=t.globals.theme||"light";return localStorage.removeItem("theme"),{components:{story:e,ThemeProvider:M},template:`
      <theme-provider initial-theme="${n}">
        <story />
      </theme-provider>
    `}},Ne={decorators:[ae,De],globalTypes:{theme:{description:"Global theme for components",defaultValue:"light",toolbar:{title:"Theme",icon:"circlehollow",items:["light","dark"],dynamicTitle:!0}}},parameters:{backgrounds:{disable:!0},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{Ne as default};
