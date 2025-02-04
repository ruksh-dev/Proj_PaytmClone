"use strict";(()=>{var e={};e.id=912,e.ids=[912],e.modules={53524:e=>{e.exports=require("@prisma/client")},67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},21268:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>m,originalPathname:()=>y,patchFetch:()=>b,requestAsyncStorage:()=>p,routeModule:()=>d,serverHooks:()=>h,staticGenerationAsyncStorage:()=>f,staticGenerationBailout:()=>x});var n={};r.r(n),r.d(n,{GET:()=>c,POST:()=>c});var a=r(12390),o=r(1498),s=r(29308),i=r(57345),u=r.n(i),l=r(51003);let c=u()(l.L),d=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/auth/[...nextauth]/route",pathname:"/api/auth/[...nextauth]",filename:"route",bundlePath:"app/api/auth/[...nextauth]/route"},resolvedPagePath:"D:\\arcShared\\100xC\\projects\\paytm-project\\apps\\user-app\\app\\api\\auth\\[...nextauth]\\route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:p,staticGenerationAsyncStorage:f,serverHooks:h,headerHooks:m,staticGenerationBailout:x}=d,y="/api/auth/[...nextauth]/route";function b(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:f})}},51003:(e,t,r)=>{r.d(t,{L:()=>i});var n=r(49129),a=r(90724),o=r(67096),s=r.n(o);let i={providers:[(0,a.Z)({name:"Credentials",credentials:{phone:{label:"Phone number",type:"text",placeholder:"1231231231",required:!0},password:{label:"Password",type:"password",required:!0}},async authorize(e){let t=await s().hash(e.password,10),r=await n.Z.user.findFirst({where:{number:e.phone}});if(r)return await s().compare(e.password,r.password)?{id:r.id.toString(),name:r.name,email:r.number}:null;try{let r=await n.Z.user.create({data:{number:e.phone,password:t}});return{id:r.id.toString(),name:r.name,email:r.number}}catch(e){console.error(e)}return null}})],secret:process.env.JWT_SECRET||"secret",callbacks:{session:async({token:e,session:t})=>(t.user.id=e.sub,t)}}},99625:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DynamicServerError:function(){return n},isDynamicServerError:function(){return a}});let r="DYNAMIC_SERVER_USAGE";class n extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=r}}function a(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},42936:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isStaticGenBailoutError:function(){return i},staticGenerationBailout:function(){return l}});let n=r(99625),a=r(45869),o="NEXT_STATIC_GEN_BAILOUT";class s extends Error{constructor(...e){super(...e),this.code=o}}function i(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===o}function u(e,t){let{dynamic:r,link:n}=t||{};return"Page"+(r?' with `dynamic = "'+r+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(n?" See more info here: "+n:"")}let l=(e,t)=>{let{dynamic:r,link:o}=void 0===t?{}:t,i=a.staticGenerationAsyncStorage.getStore();if(!i)return!1;if(i.forceStatic)return!0;if(i.dynamicShouldError)throw new s(u(e,{link:o,dynamic:null!=r?r:"error"}));let l=u(e,{dynamic:r,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if(null==i.postpone||i.postpone.call(i,e),i.revalidate=0,i.isStaticGeneration){let t=new n.DynamicServerError(l);throw i.dynamicUsageDescription=e,i.dynamicUsageStack=t.stack,t}return!1};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},12390:(e,t,r)=>{e.exports=r(30517)},49129:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(53524);let a=globalThis.prismaGlobal??new n.PrismaClient}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[369,151],()=>r(21268));module.exports=n})();