(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{388:function(t,s,a){t.exports=a.p+"assets/img/pwa__1.1349515b.png"},389:function(t,s,a){t.exports=a.p+"assets/img/pwa__2.5a170109.png"},390:function(t,s,a){t.exports=a.p+"assets/img/pwa__3.984182f6.png"},391:function(t,s,a){t.exports=a.p+"assets/img/pwa__4.9e4b2ab2.png"},476:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"渐进式web应用pwa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渐进式web应用pwa"}},[t._v("#")]),t._v(" 渐进式Web应用PWA")]),t._v(" "),n("p",[t._v("PWA全称Progressive Web Application，即渐进式Web应用。它能将该网站所需要的静态资源（如：js、css、image）缓存下来，在往后用户访问该网站的时候，浏览器就能够从缓存中读取相应资源，从而加快启动速度，甚至在无网络的情况下，也能正确呈现页面，而不是熟悉的404页面。")]),t._v(" "),n("h2",{attrs:{id:"使用workbox插件集成到vue-cli中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用workbox插件集成到vue-cli中"}},[t._v("#")]),t._v(" 使用workbox插件集成到Vue CLI中")]),t._v(" "),n("p",[t._v("下面配置属于一些基础配置，对每个项目可能都需要不同的策略对资源进行缓存，并且做一些功能的实现。")]),t._v(" "),n("p",[t._v("如果想了解清楚以下配置的原理，需要对原生实现进行了解，并对Service Worker生命周期等有一定认识，workbox只是对这些原生实现进行了一些高级封装，使用起来更加方便而已。推荐阅读：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developers.google.com/web/fundamentals/primers/service-workers/?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Worker介绍"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developers.google.com/web/tools/workbox/guides/get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("workbox指南"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("对于Service Worker进一步使用")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.tangshuang.net/3735.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解indexDB"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developers.google.com/web/updates/2015/12/background-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("sync manager"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("Vue CLI生成的项目有提供pwa插件便于快速生成pwa应用，但是它开发时是关闭pwa功能的，因此选择自行配置workbox环境。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建项目")]),t._v("\nvue create learn"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pwa\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装workbox插件")]),t._v("\ncd learn"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pwa\ncnpm i workbox"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n")])])]),n("p",[t._v("根目录下创建"),n("code",[t._v("vue.config.js")]),t._v("，引入workbox-webpack-plugin。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" workboxPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'workbox-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" workboxOptions "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  swSrc"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/sw/serviceWorker.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  swDest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serviceWorker.js'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("workboxPlugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InjectManifest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workboxOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("创建"),n("code",[t._v("src/sw/serviceWorker.js")]),t._v("，下面会介绍每一步的大概作用。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" runtimeCacheName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'learn-pwa'")]),t._v("\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCacheNameDetails")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  suffix"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  precache"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" runtimeCacheName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  runtime"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" runtimeCacheName\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装完成跳过wait节点")]),t._v("\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("skipWaiting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装完成掌握控制权")]),t._v("\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clientsClaim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 预缓存")]),t._v("\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("precaching"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("precache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__precacheManifest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("routing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerRoute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("workbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NetworkFirst")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("routing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerRoute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(js|css)$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("workbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CacheFirst")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cacheName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" runtimeCacheName\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("在"),n("code",[t._v("main.js")]),t._v("中添加注册service worker的代码。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable no-console */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serviceWorker'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" navigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    navigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/serviceWorker.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("registration")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SW registered: '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" registration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("registrationError")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SW registration failed: '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" registrationError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("运行项目:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm run serve\n")])])]),n("p",[t._v("打开chrome浏览器 > 进入chrome dev tools > Application > Cache Storage可以看到以下结果：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(388),alt:""}})]),t._v(" "),n("p",[t._v("右边缓存列表是service worker预缓存的资源。此时点击dev tools中的Serivce Workers或Network的Offline选项，再刷新页面，可以看到并不会返回404：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(389),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"介绍serviceworker-js中各部分的作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍serviceworker-js中各部分的作用"}},[t._v("#")]),t._v(" 介绍serviceWorker.js中各部分的作用")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" runtimeCacheName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'learn-pwa'")]),t._v("\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCacheNameDetails")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  suffix"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  precache"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" runtimeCacheName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  runtime"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" runtimeCacheName\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("这一部分是设置workbox在Cache Storage中存储资源的名称，从上面运行结果可以看到名称就是我们指定的"),n("code",[t._v("learn-pwa")]),t._v("，默认情况下precache和runtime的名称是分开的，具体可参考"),n("a",{attrs:{href:"https://developers.google.com/web/tools/workbox/guides/get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("workbox指南"),n("OutboundLink")],1),t._v("。precache中存储的是service worker在安装时预缓存的内容，runtime存储的是页面运行过程中网络请求结果（如果有对相应url进行workbox注册的话）。将这两者命名为同一个名称的原因是，precache中通常会预缓存打包出来的js、css文件，这些文件我们希望使用CacheFirst的策略进行响应（因为有哈希码，无需担心缓存问题），而使用CacheFirst的时候必须指明一个cacheName，如果js、css存储的cacheName和precacheName不一致，就会导致多余的缓存；并且如果不一致，第一次访问页面且预缓存之后，离线再刷新会返回404，因为此时js、css对应的cache中还没有缓存（service worker第一次安装时还没有获得控制权时，js、css文件已经开始请求，因此触发runtime cache）。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装完成跳过wait节点")]),t._v("\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("skipWaiting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装完成掌握控制权")]),t._v("\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clientsClaim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("从 Service Worker 生命周期可以知道，新的Service Worker安装完成之后会处于waiting状态，页面仍然由旧的 service worker 进行管理，调用"),n("code",[t._v("skipWaiting()")]),t._v("就是跳过这个waiting，让新的service worker替代旧的。当访问一个网站时，该网站没有service worker的话，即便在访问过程中service worker安装完成，控制权依然不是属于service worker的，调用"),n("code",[t._v("clientsClaim()")]),t._v("可以立刻取得页面控制权，对后续网络资源进行处理。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("workbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("precaching"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("precache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__precacheManifest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("调用"),n("code",[t._v("precache")]),t._v("并将"),n("code",[t._v("self.__precacheManifest")]),t._v("可以将webpack打包出来的资源进行预缓存。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm run build\n")])])]),n("p",[t._v("构建完成后，我们可以看到dist文件夹有个precache-manifest.json文件，内容大体如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(390),alt:""}})]),t._v(" "),n("p",[t._v("熟悉webpack可以很清楚的看到，这些文件就是webpack打包出来的资源，都存在dist文件夹中。通常我们不需要map文件，这部分可以在vue.config.js中相关workbox配置中添加exclude指明，详情见"),n("a",{attrs:{href:"https://developers.google.com/web/tools/workbox/guides/get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("workbox指南"),n("OutboundLink")],1),t._v("：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" workboxOptions "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  swSrc"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/sw/serviceWorker.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  swDest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serviceWorker.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exclude"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("index\\.html")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.map")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("关于预缓存剩下一个问题就是，我将index.html文件排除了，并在service worker中的预缓存数组中添加了"),n("code",[t._v("'/'")]),t._v("，这是因为用户访问网站通常时www.example.com，而不是www.example.com/index.html，这样即使预缓存了index.html，离线后如果用户访问www.example.com发起的并不是对index.html的请求，因此不会获得正确响应。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("workbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("routing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerRoute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("workbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NetworkFirst")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nworkbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("routing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerRoute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(js|css)$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("workbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CacheFirst")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cacheName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" runtimeCacheName\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("要注意一点，并不是预缓存了资源离线就可以得到响应，必须使用workbox进行路由注册，这和原生实现是一个道理，你必须监听fetch请求并对对应的请求进行respondWith才可以，workbox.routing.registerRoute就是对这些做了一层封装。")]),t._v(" "),n("h2",{attrs:{id:"添加manifest-json使应用变得可安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加manifest-json使应用变得可安装"}},[t._v("#")]),t._v(" 添加manifest.json使应用变得可安装")]),t._v(" "),n("p",[n("strong",[t._v("注意：上线的应用要使用PWA功能，必须是HTTPS的")])]),t._v(" "),n("p",[t._v("如果是vue cli 3.0创建的应用，请在public文件夹中创建manifest.json")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"shortname"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Clash Royale"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Clash Royale"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"For CR Lover"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start_url"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scope"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"display"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standalone"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icons"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/static/images/cards/baby-dragon.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192x192"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"theme_color"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#2185d0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"background_color"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#2185d0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这个manifest.json文件内容只是给出参考，每个字段都可能有不同配置，不赘述每个字段的意义。想体验安装过程可以访问我的PWA网站:")]),t._v(" "),n("ul",[n("li",[t._v("www.pomo16.com（皇室战争数据查询）")])]),t._v(" "),n("p",[t._v("安卓手机用chrome访问后，会自动弹出安装按钮。")]),t._v(" "),n("p",[t._v("苹果手机需要使用Safari浏览器，然后点击分享按钮，选择添加到主屏幕。")]),t._v(" "),n("p",[t._v("电脑使用chrome访问，点击右上角设置，选择安装'Clash Royale'。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(391),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),n("p",[t._v("使用PWA还伴随着很多功能，例如可以使用Sync Manager进行后台请求，配合indexDB可以提升很多用户体验，但这些功能浏览器支持程度还比较低。")]),t._v(" "),n("p",[t._v("我们的挣闲钱项目也会支持基本的PWA功能。")])])}),[],!1,null,null,null);s.default=e.exports}}]);