(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{480:function(a,t,s){"use strict";s.r(t);var r=s(46),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"尽量减少http请求次数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尽量减少http请求次数"}},[a._v("#")]),a._v(" 尽量减少HTTP请求次数")]),a._v(" "),s("ul",[s("li",[a._v("合并文件")]),a._v(" "),s("li",[a._v("内联图像")])]),a._v(" "),s("h2",{attrs:{id:"减少dns查找次数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少dns查找次数"}},[a._v("#")]),a._v(" 减少DNS查找次数")]),a._v(" "),s("ul",[s("li",[a._v("当客户端中的DNS缓存都为空时（浏览器和操作系统都为空），DNS查找的次数和页面中主机名的数量相同。这其中包括页面中URL、图片、脚本文件、样式表、Flash对象等包含的主机名。减少主机名的数量可以减少DNS查找次数")])]),a._v(" "),s("h2",{attrs:{id:"避免跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免跳转"}},[a._v("#")]),a._v(" 避免跳转")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("跳转是使用301和302代码实现的")])]),a._v(" "),s("li",[s("p",[a._v("有一种经常被网页开发者忽略却往往十分浪费响应时间的跳转现象。这种现象发生在当URL本该有斜杠（/）却被忽略掉时。例如，当我们要访问http://astrology.yahoo.com/astrology 时，实际上返回的是一个包含301代码的跳转，它指向的是http://astrology.yahoo.com/astrology/  （注意末尾的斜杠）。")])])]),a._v(" "),s("h2",{attrs:{id:"可缓存的ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可缓存的ajax"}},[a._v("#")]),a._v(" 可缓存的Ajax")]),a._v(" "),s("ul",[s("li",[a._v("cache-control参考：\n"),s("ul",[s("li",[a._v("https://www.cnblogs.com/sfnz/p/5383647.html")]),a._v(" "),s("li",[a._v("https://blog.csdn.net/u012375924/article/details/82806617")])])])]),a._v(" "),s("h2",{attrs:{id:"推迟加载内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推迟加载内容"}},[a._v("#")]),a._v(" 推迟加载内容")]),a._v(" "),s("ul",[s("li",[a._v("按需加载")])]),a._v(" "),s("h2",{attrs:{id:"预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[a._v("#")]),a._v(" 预加载")]),a._v(" "),s("ul",[s("li",[a._v("预加载是在浏览器空闲时请求将来可能会用到的页面内容（如图像、样式表和脚本）。使用这种方法，当用户要访问下一个页面时，页面中的内容大部分已经加载到缓存中了，因此可以大大改善访问速度。")]),a._v(" "),s("li",[a._v("无条件加载：触发onload事件时，直接加载额外的页面内容")]),a._v(" "),s("li",[a._v("有条件加载：根据用户的操作来有根据地判断用户下面可能去往的页面并相应的预加载页面内容")]),a._v(" "),s("li",[a._v("有预期的加载：载入重新设计过的页面时使用预加载")])]),a._v(" "),s("h2",{attrs:{id:"减少dom元素数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少dom元素数量"}},[a._v("#")]),a._v(" 减少DOM元素数量")]),a._v(" "),s("ul",[s("li",[a._v("一个复杂的页面意味着需要下载更多数据，同时也意味着JavaScript遍历DOM的效率越慢")])]),a._v(" "),s("h2",{attrs:{id:"根据域名划分页面内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据域名划分页面内容"}},[a._v("#")]),a._v(" 根据域名划分页面内容")]),a._v(" "),s("ul",[s("li",[a._v("把页面内容划分成若干部分可以使你最大限度地实现平行下载。由于DNS查找带来的影响你首先要确保你使用的域名数量在2个到4个之间。")])]),a._v(" "),s("h2",{attrs:{id:"使iframe的数量最小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使iframe的数量最小"}},[a._v("#")]),a._v(" 使iframe的数量最小")]),a._v(" "),s("ul",[s("li",[a._v("即时内容为空，加载也需要时间，会阻止页面加载，没有语意")])]),a._v(" "),s("h2",{attrs:{id:"不要出现404错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要出现404错误"}},[a._v("#")]),a._v(" 不要出现404错误")]),a._v(" "),s("ul",[s("li",[a._v("HTTP请求时间消耗是很大的，因此使用HTTP请求来获得一个没有用处的响应（例如404没有找到页面）是完全没有必要的，它只会降低用户体验而不会有一点好处。")]),a._v(" "),s("li",[a._v("有些站点把404错误响应页面改为“你是不是要找***”，这虽然改进了用户体验但是同样也会浪费服务器资（如数据库等）。最糟糕的情况是指向外部JavaScript的链接出现问题并返回404代码。首先，这种加载会破坏并行加载；其次浏览器会把试图在返回的404响应内容中找到可能有用的部分当作JavaScript代码来执行。")])]),a._v(" "),s("h2",{attrs:{id:"使用内容分发网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用内容分发网络"}},[a._v("#")]),a._v(" 使用内容分发网络")]),a._v(" "),s("ul",[s("li",[a._v("用户与你网站服务器的接近程度会影响响应时间的长短。把你的网站内容分散到多个、处于不同地域位置的服务器上可以加快下载速度。")]),a._v(" "),s("li",[a._v("要记住，在终端用户的响应时间中有80%到90%的响应时间用于下载图像、样式表、脚本、Flash等页面内容。")]),a._v(" "),s("li",[a._v("要切记，如果使用了Expires文件头，当页面内容改变时就必须改变内容的文件名。依Yahoo!来说我们经常使用这样的步骤：在内容的文件名中加上版本号，如yahoo_2.0.6.js。\n"),s("ul",[s("li",[a._v("使用文件哈希码和url中携带版本号进行缓存更新的区别在于是否是替换更新，如果在url中携带版本号，就是替换更新，存在间隔的问题，例如："),s("code",[a._v('src="example.js/?2.06"')]),a._v("，那么在工程上，原本的example.js会被覆盖，然后再更新html中的引用，这个过程中存在着html先更新还是example.js先更新的问题，无论是谁先更新，用户访问都会导致一个404。而在文件名中添加哈希码，原先的文件就不会被覆盖，如果用户访问的时候，html还没及时更新，那么就会得到先前的一个版本，不会引起404。")])])])]),a._v(" "),s("h2",{attrs:{id:"为文件头指定expires或cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为文件头指定expires或cache-control"}},[a._v("#")]),a._v(" 为文件头指定Expires或Cache-Control")]),a._v(" "),s("ul",[s("li",[a._v("对于静态内容：设置文件头过期时间Expires的值为“Never expire”（永不过期）")]),a._v(" "),s("li",[a._v("对于动态内容：使用恰当的Cache-Control文件头来帮助浏览器进行有条件的请求")])]),a._v(" "),s("h2",{attrs:{id:"gzip压缩文件内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gzip压缩文件内容"}},[a._v("#")]),a._v(" Gzip压缩文件内容")]),a._v(" "),s("ul",[s("li",[a._v("Gzip大概可以减少70%的响应规模。目前大约有90%通过浏览器传输的互联网交换支持gzip格式。")])]),a._v(" "),s("h2",{attrs:{id:"配置etag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置etag"}},[a._v("#")]),a._v(" 配置ETag")]),a._v(" "),s("ul",[s("li",[a._v("用于判断浏览器缓存中的内容和服务器中的原始内容是否匹配的一种机制")]),a._v(" "),s("li",[a._v("ETag的问题在于，它是根据可以辨别网站所在的服务器的具有唯一性的属性来生成的。当浏览器从一台服务器上获得页面内容后到另外一台服务器上进行验证时ETag就会不匹配，这种情况对于使用服务器组和处理请求的网站来说是非常常见的。")]),a._v(" "),s("li",[a._v("ETag对SEO友好")])]),a._v(" "),s("h2",{attrs:{id:"将样式表放在顶部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将样式表放在顶部"}},[a._v("#")]),a._v(" 将样式表放在顶部")]),a._v(" "),s("p",[a._v("页面必须要根据Render树来进行layout，计算出元素的尺寸和位置，才能进行绘制，最终呈现给用户。解析HTML的过程是自上而下的，加载CSS文件是个异步的过程，可以并行执行。如果将样式表放在底部，那么就会使得加载CSS的过程被推迟，导致CSSOM树的生成被推迟，Render树是根据DOM树和CSSOM树生成的，将样式表放在顶部可以并行生成CSSOM树和DOM树，有利于页面的逐步呈现，防止过于长久的白屏。")]),a._v(" "),s("h2",{attrs:{id:"将脚本文件放在底部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将脚本文件放在底部"}},[a._v("#")]),a._v(" 将脚本文件放在底部")]),a._v(" "),s("p",[a._v("当脚本文件在顶部的时候，会阻塞后面元素的解析。GUI线程负责HTML解析，JS引擎负责执行js，这两个线程是互斥的，原因可以参考我的博客关于浏览器多进程和js线程这篇文章。js文件在顶部加载完成后会立即执行，因此也就阻塞了后面的元素。但是在碰到script标签时，浏览器会先渲染出此前出现的dom元素。")]),a._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("p",[a._v("https://blog.csdn.net/shanglianlm/article/details/52984169")])])}),[],!1,null,null,null);t.default=v.exports}}]);