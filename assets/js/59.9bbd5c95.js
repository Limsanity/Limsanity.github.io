(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{460:function(t,s,a){"use strict";a.r(s);var r=a(46),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pwa、服务端渲染、现代模式构建的集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa、服务端渲染、现代模式构建的集成"}},[t._v("#")]),t._v(" PWA、服务端渲染、现代模式构建的集成")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("集成PWA、SSR和modern build是为了兼顾以上的优点：")]),t._v(" "),a("ul",[a("li",[t._v("service worker提供更快的资源响应以及提升用户离线体验")]),t._v(" "),a("li",[t._v("加速首屏加载")]),t._v(" "),a("li",[t._v("根据用户浏览器减少不必要的带宽浪费")])]),t._v(" "),a("p",[t._v("以下是我在集成过程中碰到的主要问题，如果对上面三个概念不清楚，可以先阅读我的博客：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/Web/渐进式Web应用PWA.html"}},[t._v("PWA")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/Web/服务端渲染开发记录.html"}},[t._v("服务端渲染")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/Web/现代模式打包.html"}},[t._v("现代模式构建")])],1)]),t._v(" "),a("h2",{attrs:{id:"解决现代模式构建出两套资源的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决现代模式构建出两套资源的问题"}},[t._v("#")]),t._v(" 解决现代模式构建出两套资源的问题")]),t._v(" "),a("p",[t._v("现代模式构建会生成两套资源，即vue ssr client plugin会产生两个clientManifest.json文件，服务端的html是响应时根据clientManifest.json进行资源注入的，这一点和SPA不同，SPA是在客户端构建时就注入完成。为了解决究竟使用哪套资源时，我借鉴了Nuxt框架的做法，根据用户请求时的用户代理来选用clientManifest.json进行资源注入，具体的用户代理如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ModernBrowsers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Edge"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'16'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Firefox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'60'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'61'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chrome Headless'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'61'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Chromium"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'61'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Iron"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'61'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Safari"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Opera"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'48'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Yandex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'18'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Vivaldi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.14'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mobile Safari'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10.3'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"解决服务端渲染的离线情况下service-worker无法正常返回页面的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决服务端渲染的离线情况下service-worker无法正常返回页面的问题"}},[t._v("#")]),t._v(" 解决服务端渲染的离线情况下Service Worker无法正常返回页面的问题")]),t._v(" "),a("p",[t._v("SPA情况下，如果离线时用户访问www.example.com/user，我们可以简单fallback到返回www.example.com的缓存响应中，这个时候Vue会根据url进行前端页面跳转，而服务端渲染的页面有一个"),a("code",[t._v('data-server-rendered="true')]),t._v("，Vue会认为该页面是服务端渲染返回的，因此会保留页面的DOM，这就会导致一些逻辑出错，这部分我还没有细致研究，只是猜测。解决这个问题的方法就是，当用户第一次访问页面，先预缓存一个客户端打包生成的index.html，用户在不同路径下刷新返回的document也会利用workbox的runtimeCache进行缓存，如果用户离线时，访问刷新的路径不在Cache Storage中，就fallback到客户端打包生成的index.html（该html使用的资源和服务端渲染自动注入的资源是一致的），这样就可以启用单页面模式；如果runtimeCache中有对应路径的缓存就可以直接返回该缓存的内容。")]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("相关配置文件可以在"),a("a",{attrs:{href:"https://github.com/earnsparemoney/frontend",target:"_blank",rel:"noopener noreferrer"}},[t._v("闲钱宝前端github仓库"),a("OutboundLink")],1),t._v("中找到：")]),t._v(" "),a("ul",[a("li",[t._v("vue.config.js：集成3种特性的webpack相关配置")]),t._v(" "),a("li",[t._v("server/router\n"),a("ul",[a("li",[t._v("dev-ssr.js：开发环境下服务端渲染的路由")]),t._v(" "),a("li",[t._v("ssr.js：生产环境下服务端渲染的路由")])])]),t._v(" "),a("li",[t._v("src/sw/serviceWorker.js：关于PWA对常见请求的缓存策略")]),t._v(" "),a("li",[t._v("public/manifest.json：安装PWA所需要的manifest.json配置文件")])])])}),[],!1,null,null,null);s.default=e.exports}}]);