(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{485:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"关于重排和重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于重排和重绘"}},[t._v("#")]),t._v(" 关于重排和重绘")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(div.offsetWidth)")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\n")])])]),a("p",[t._v("上面代码中，除了注释部分有4条语句，都改变了dom节点的样式，浏览器会有个优化，就是维护一个渲染队列，一次性进行重排和重绘。但是有一些操作会强制刷新这个渲染队列，触发重排，例如上面注释那行代码，访问了offsetWidth属性，一般访问这些位置相关的属性时，就会强制刷新这个渲染队列，以便确定准确的位置。也存在一些老版本浏览器，可能没有维护队列，进行优化。")]),t._v(" "),a("h3",{attrs:{id:"优化方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化方法"}},[t._v("#")]),t._v(" 优化方法")]),t._v(" "),a("ul",[a("li",[t._v("样式集中改变")]),t._v(" "),a("li",[t._v("缓存布局属性")]),t._v(" "),a("li",[t._v("将DOM离线，可能造成闪烁的问题")]),t._v(" "),a("li",[t._v("脱离文档流")]),t._v(" "),a("li",[t._v("启用GPU加速\n"),a("ul",[a("li",[t._v("Canvas2D")]),t._v(" "),a("li",[t._v("CSS transition")]),t._v(" "),a("li",[t._v("CSS transform")]),t._v(" "),a("li",[t._v("WebGL")]),t._v(" "),a("li",[t._v("video")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);