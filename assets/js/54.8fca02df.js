(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{454:function(t,a,e){"use strict";e.r(a);var s=e(46),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"与缓存相关的http首部字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与缓存相关的http首部字段"}},[t._v("#")]),t._v(" 与缓存相关的HTTP首部字段")]),t._v(" "),e("h3",{attrs:{id:"通用首部字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用首部字段"}},[t._v("#")]),t._v(" 通用首部字段")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名称")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Cache-Control")]),t._v(" "),e("td",[t._v("控制缓存的行为")])]),t._v(" "),e("tr",[e("td",[t._v("Pragma")]),t._v(" "),e("td",[t._v('http1.0的遗留物，值为"no-cache"时禁用缓存')])])])]),t._v(" "),e("h3",{attrs:{id:"请求首部字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求首部字段"}},[t._v("#")]),t._v(" 请求首部字段")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名称")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("If-Match")]),t._v(" "),e("td",[t._v("比较ETag是否一致")])]),t._v(" "),e("tr",[e("td",[t._v("If-None-Match")]),t._v(" "),e("td",[t._v("比较Etag是否不一致")])]),t._v(" "),e("tr",[e("td",[t._v("If-Modified-Since")]),t._v(" "),e("td",[t._v("比较资源最后更新的时间是否一致")])]),t._v(" "),e("tr",[e("td",[t._v("If-Unmodified-Since")]),t._v(" "),e("td",[t._v("比较资源最后更新的时间是否不一致")])])])]),t._v(" "),e("h3",{attrs:{id:"响应首部字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应首部字段"}},[t._v("#")]),t._v(" 响应首部字段")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名称")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ETag")]),t._v(" "),e("td",[t._v("资源的匹配信息")])])])]),t._v(" "),e("h3",{attrs:{id:"实体首部字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实体首部字段"}},[t._v("#")]),t._v(" 实体首部字段")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名称")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Expires")]),t._v(" "),e("td",[t._v("http1.0的遗留物，实体主体过期的时间")])]),t._v(" "),e("tr",[e("td",[t._v("Last-Modified")]),t._v(" "),e("td",[t._v("资源最后一次修改的时间")])])])]),t._v(" "),e("h2",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),e("p",[t._v("Cache-Control是强缓存，如果通过该字段进行缓存，不会发起HTTP请求，而是直接使用缓存。")]),t._v(" "),e("h2",{attrs:{id:"缓存校验字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存校验字段"}},[t._v("#")]),t._v(" 缓存校验字段")]),t._v(" "),e("h3",{attrs:{id:"last-modified"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[t._v("#")]),t._v(" Last-Modified")]),t._v(" "),e("p",[t._v('服务器将资源传递给客户端时，会将资源最后更改的时间以"Last-Modified: GMT"的形式加在实体首部上一起返回给客户端。客户端会为资源标记上该信息，下次再请求时，会把If-Modified-Since信息附带在请求报文中一并带给服务器去做检查，若传递的时间值与服务器上该资源的最终修改时间一致，则说明该资源没有被修改过，直接返回304状态码，内容为空，节省了传输数据量。否则，服务器返回200状态码，并将资源返回给客户端。请求报文首部的格式为：')]),t._v(" "),e("p",[e("code",[t._v("If-Modified-Since: Last-Modified-value")])]),t._v(" "),e("p",[t._v("Last-Modified存在一定的问题，如果服务器上，一个资源被修改了，但起实际内容根本没有改变，会因为Last-Modified时间匹配不上而返回整个一模一样的实体给客户端；无法识别一秒进行多次修改的情况。")]),t._v(" "),e("h3",{attrs:{id:"etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[t._v("#")]),t._v(" Etag")]),t._v(" "),e("p",[t._v('为了解决Last-Modified可能存在的不准确的问题，Http1.1还推出了Etag实体首部字段。服务器会通过某种算法，给资源计算得出一个唯一标识符（例如md5标识），把资源响应给客户端的时候，会在实体首部加上"Etag: 唯一标识符"一起返回给客户端。客户端会保留该ETag字段，并在下一次请求时将其一并带过去给服务器。如果服务器端ETag和客户端带过来的不同，则返回200状态码，并将资源返回给客户端，否则返回304状态码告知客户端使用本地缓存即可。请求报文首部的格式为：')]),t._v(" "),e("p",[e("code",[t._v("If-None-Match: ETag-value")])]),t._v(" "),e("p",[t._v("ETag虽然可以精确的判断资源是否被修改，识别一秒多次修改的情况，但是计算ETag需要性能损耗；分布式服务器存储的情况下，计算ETag的算法如果不一样，会导致浏览器从一台服务器上获得页面内容后到另外一台服务器上进行验证时发现ETag不匹配的情况。")]),t._v(" "),e("h2",{attrs:{id:"避免304"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免304"}},[t._v("#")]),t._v(" 避免304")]),t._v(" "),e("p",[t._v("有时候请求文件的名称类似于index.03d344bd.css这样带上哈希码的，并且Expires和Cache-Control时间非常的长，这么做的好处在于：如果index.css的内容没有改变，那么其名称中哈希码的部分就保持不变，发起请求的时候就可以根据Cache-Control进行本地缓存的引用；当内容发生变化时，index.css的哈希码也会发生变化，文件名称发生变化，意味着客户端将进行一个新的资源请求，这样就达到了避免304的效果。")]),t._v(" "),e("h2",{attrs:{id:"从用户浏览器的刷新行为认识结合使用cache-control和last-modified或etag的好处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从用户浏览器的刷新行为认识结合使用cache-control和last-modified或etag的好处"}},[t._v("#")]),t._v(" 从用户浏览器的刷新行为认识结合使用Cache-Control和Last-Modified或ETag的好处")]),t._v(" "),e("h3",{attrs:{id:"在uri输入栏输入然后回车"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在uri输入栏输入然后回车"}},[t._v("#")]),t._v(" 在URI输入栏输入然后回车")]),t._v(" "),e("p",[t._v("发起请求时，浏览器会检验是否存在缓存")]),t._v(" "),e("h3",{attrs:{id:"f5-点击工具栏中的刷新按钮-右键菜单重新加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#f5-点击工具栏中的刷新按钮-右键菜单重新加载"}},[t._v("#")]),t._v(" F5/点击工具栏中的刷新按钮/右键菜单重新加载")]),t._v(" "),e("p",[t._v("浏览器无论如何都会发一个HTTP请求给服务器，即使先前的响应有Expires头部。但是会包含这样的Headers：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" max"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("age"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nIf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Since"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n")])])]),e("p",[t._v("其中Cache-Control时Chrome强制加上的，而If-Modified-Since是因为获取资源时包含了Last-Modified头部，浏览器会使用If-Modified-Sice头部信息重新发送改时间以确认资源是否需要重新发送。如果有响应中包含ETag，请求时也会包含If-None-Match。")]),t._v(" "),e("h3",{attrs:{id:"ctl-f5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ctl-f5"}},[t._v("#")]),t._v(" Ctl+F5")]),t._v(" "),e("p",[t._v("浏览器彻底从Server拿一份新的资源。发送的请求不包含If-Modified-Sice/If-None-Match，还需要添加一些Http Headers：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" no"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache\nPragma"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" no"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache\n")])])]),e("p",[t._v("以此保证拿到的不会是代理服务器的Cache，而是绝对新鲜的资源。")]),t._v(" "),e("p",[t._v("由此可见，如果结合Cache-Control和Last-Modified或Tag，无论用户是在URI输入栏输入还是点击工具栏中的刷新，浏览器都能够有效的利用缓存，避免不必要的请求和数据传输。")])])}),[],!1,null,null,null);a.default=r.exports}}]);