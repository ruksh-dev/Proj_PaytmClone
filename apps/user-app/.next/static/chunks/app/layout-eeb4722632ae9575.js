(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8327:function(e,n,t){Promise.resolve().then(t.t.bind(t,2358,23)),Promise.resolve().then(t.bind(t,4614)),Promise.resolve().then(t.bind(t,7184)),Promise.resolve().then(t.t.bind(t,2085,23))},4614:function(e,n,t){"use strict";t.r(n),t.d(n,{AppbarClient:function(){return l}});var i=t(7573),r=t(9793),s=t(9700);let o=e=>{let{user:n,onSignin:t,onSignout:r}=e;return(0,i.jsxs)("div",{className:"flex justify-between border-b px-4",children:[(0,i.jsx)("div",{className:"text-lg flex flex-col justify-center",children:"PayTM"}),(0,i.jsx)("div",{className:"flex flex-col justify-center pt-2",children:(0,i.jsx)(s.z,{onClick:n?r:t,children:n?"Logout":"Login"})})]})};var u=t(4603);function l(){var e;let n=(0,r.useSession)(),t=(0,u.useRouter)();return(0,i.jsx)("div",{children:(0,i.jsx)(o,{onSignin:r.signIn,onSignout:async()=>{await (0,r.signOut)(),t.push("/api/auth/signin")},user:null===(e=n.data)||void 0===e?void 0:e.user})})}},7184:function(e,n,t){"use strict";t.r(n),t.d(n,{Providers:function(){return o}});var i=t(7573),r=t(7791),s=t(9793);let o=e=>{let{children:n}=e;return(0,i.jsx)(r.Wh,{children:(0,i.jsx)(s.SessionProvider,{children:n})})}},9700:function(e,n,t){"use strict";t.d(n,{z:function(){return r}});var i=t(7573);let r=e=>{let{onClick:n,children:t}=e;return(0,i.jsx)("button",{onClick:n,type:"button",className:"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",children:t})}},2358:function(){}},function(e){e.O(0,[634,43,293,997,744],function(){return e(e.s=8327)}),_N_E=e.O()}]);