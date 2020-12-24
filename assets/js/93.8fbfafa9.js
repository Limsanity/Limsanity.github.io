(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{495:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),a("h4",{attrs:{id:"配置nginx服务器运行用户-组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx服务器运行用户-组"}},[t._v("#")]),t._v(" 配置Nginx服务器运行用户(组)")]),t._v(" "),a("p",[t._v("如果希望所有用户都可以启动Nginx进程，有两种办法，一是把指令注释掉：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# user [user] [group];")]),t._v("\n")])])]),a("p",[t._v("二是将用户（和用户组）设置成nobody：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# user nobody nobody;")]),t._v("\n")])])]),a("p",[t._v("此指令只能在全局块中配置。")]),t._v(" "),a("h4",{attrs:{id:"配置允许生成的worker-process数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置允许生成的worker-process数"}},[t._v("#")]),t._v(" 配置允许生成的worker process数")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_processes")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("此指令只能在全局块中配置。")]),t._v(" "),a("h4",{attrs:{id:"配置nginx进程pid存放路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx进程pid存放路径"}},[t._v("#")]),t._v(" 配置Nginx进程PID存放路径")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pid")]),t._v(" file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" filepath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("默认文件存放在Nginx安装目录下的logs中，名字为nginx.pid。path可以是绝对路径或者相对路径。指定path时一定要包括文件名。")]),t._v(" "),a("p",[t._v("此指令只能在全局块中配置。")]),t._v(" "),a("h4",{attrs:{id:"配置错误日志的存放路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置错误日志的存放路径"}},[t._v("#")]),t._v(" 配置错误日志的存放路径")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_log")]),t._v(" file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" stderr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("debug "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" notice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" warn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" crit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" alert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" emerg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("日志级别由低到高，设置某一级别后，比这一级别高的日志也会被记录。指定文件对于Nginx进程的用户需要由写权限，否则启动时会报permission deny的错误。")]),t._v(" "),a("p",[t._v("此指令可以在全局块、http块、server块以及location块中配置。")]),t._v(" "),a("h4",{attrs:{id:"配置文件的引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件的引入"}},[t._v("#")]),t._v(" 配置文件的引入")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引入某文件夹下所有配置文件")]),t._v("\n")])])]),a("p",[t._v("file支持相对路径。同样要求写权限。")]),t._v(" "),a("p",[t._v("此指令可以放在配置文件任意地方。")]),t._v(" "),a("h4",{attrs:{id:"设置网络连接的序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置网络连接的序列化"}},[t._v("#")]),t._v(" 设置网络连接的序列化")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("accept_mutex")]),t._v(" on "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("默认为on。该指令会对多个Nginx进程接受连接进行序列化，防止多个进程对连接进行争抢，引发惊群问题（某一时刻只有一个网络连接，但是多个睡眠进程被唤醒）。")]),t._v(" "),a("p",[t._v("此指令只能在events块中配置。")]),t._v(" "),a("h4",{attrs:{id:"设置是否允许同时接受多个网络连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置是否允许同时接受多个网络连接"}},[t._v("#")]),t._v(" 设置是否允许同时接受多个网络连接")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("multi_accpet on "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("默认为off。on时每个worker process可以同时接受多个到达的网络连接。")]),t._v(" "),a("p",[t._v("此指令只能在events块中配置。")]),t._v(" "),a("h4",{attrs:{id:"事件驱动模型的选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动模型的选择"}},[t._v("#")]),t._v(" 事件驱动模型的选择")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" select "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" poll "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" kqueue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" epoll "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" rtsig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("poll "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" eventport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("此指令只能在events块中配置。")]),t._v(" "),a("h4",{attrs:{id:"配置最大连接数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置最大连接数"}},[t._v("#")]),t._v(" 配置最大连接数")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("默认为512。设置允许每一个worker process同时开启的最大连接数。这里的number不仅仅包括和前端建立的连接数，而是所有可能的连接数。number的值不能大于操作系统支持打开的最大文件句柄数。")]),t._v(" "),a("p",[t._v("此指令只能在events块中配置。")]),t._v(" "),a("h4",{attrs:{id:"定义mime-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义mime-type"}},[t._v("#")]),t._v(" 定义MIME-Type")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v(" mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("types")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default_type")]),t._v("  application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("octet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("用于识别前端请求的资源类型。如果不指定default_type，默认值为text/plain。")]),t._v(" "),a("p",[t._v("此指令可以在http、server或者location中配置。")]),t._v(" "),a("h4",{attrs:{id:"自定义服务日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义服务日志"}},[t._v("#")]),t._v(" 自定义服务日志")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("buffersize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("log_format")]),t._v(" name string "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eg")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" logs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log combined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("log_format")]),t._v(" combined "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$remote_addr - [$time_local] \"$request\" '")]),t._v(" \n\t\t\t\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$status $body_bytes_sent \"$http_referer\" '")]),t._v("\n \t\t\t\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$http_user_agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# output")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".102")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Oct"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2011")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET /favicon.ico HTTP/1.1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("570")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)"')]),t._v("\n")])])]),a("p",[t._v("path是日志存放路径和名称；format是在log_format中定义，指定日志输出格式；size指定存放日志的内存缓存区大小。")]),t._v(" "),a("p",[t._v("access_log指令可以在http、server、location中设置。log_format指令只能在http中设置。")]),t._v(" "),a("h4",{attrs:{id:"配置允许sendfile方式传输文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置允许sendfile方式传输文件"}},[t._v("#")]),t._v(" 配置允许sendfile方式传输文件")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sendfile")]),t._v(" on "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sendfile_max_chunk")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("sendfile默认值为off；sendfile_max_chunk默认值为0，表示无限制，每个worker process每次调用sendfile()传输的数据量不能超过这个值。")]),t._v(" "),a("p",[t._v("此指令可以在http、server、location中配置。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/70e1c396c320",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于sendfile零拷贝"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leokongwq.github.io/2017/01/12/linux-zero-copy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("零拷贝原理"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"配置连接超时时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置连接超时时间"}},[t._v("#")]),t._v(" 配置连接超时时间")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keepalive_timeout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timeout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("header_timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("timeout默认值为75s。如果指定了header_timeout，将会在应答报头文头部设置keep-alive时间，可被Mozilla或者Konqueror识别。")]),t._v(" "),a("p",[t._v("该指令可以在http、server、location块中设置。")]),t._v(" "),a("h4",{attrs:{id:"单连接请求数上限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单连接请求数上限"}},[t._v("#")]),t._v(" 单连接请求数上限")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keepalive_requests")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("默认值为100。指定用户通过某一连接发送请求的次数。")]),t._v(" "),a("p",[t._v("此指令可以在server、location中配置。")]),t._v(" "),a("h4",{attrs:{id:"配置网络监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置网络监听"}},[t._v("#")]),t._v(" 配置网络监听")]),t._v(" "),a("p",[t._v("page 46。")]),t._v(" "),a("h4",{attrs:{id:"基于名称的虚拟主机配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于名称的虚拟主机配置"}},[t._v("#")]),t._v(" 基于名称的虚拟主机配置")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" eg\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" myserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 通配符只能在首段或尾段\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("www\\d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myserver\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("www\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 捕获内容记录到$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("中\n")])])]),a("p",[t._v("匹配顺序：")]),t._v(" "),a("ol",[a("li",[t._v("准确匹配server_name")]),t._v(" "),a("li",[t._v("通配符在开始时匹配server_name成功")]),t._v(" "),a("li",[t._v("通配符在结尾时匹配server_name成功")]),t._v(" "),a("li",[t._v("正则表达式匹配server_name成功")])]),t._v(" "),a("h4",{attrs:{id:"基于ip的虚拟主机配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于ip的虚拟主机配置"}},[t._v("#")]),t._v(" 基于IP的虚拟主机配置")]),t._v(" "),a("p",[t._v("page 48。")]),t._v(" "),a("h4",{attrs:{id:"配置location块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置location块"}},[t._v("#")]),t._v(" 配置location块")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" uri "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" eg\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("static"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("= 用于标准uri前，要求请求字符串与uri严格匹配")]),t._v(" "),a("li",[t._v("~ 用于表示uri包含正则表达式，并且区分大小写")]),t._v(" "),a("li",[t._v("~* 用于表示uri包含正则表达式，并且不区分大小写\n"),a("ul",[a("li",[t._v("如果uri包含正则表达式，必须包含 ~ 或 ~* 标识")])])]),t._v(" "),a("li",[t._v("^~ 用于标准uri，要求Nginx找到uri和请求字符串匹配度最高的location\n"),a("ul",[a("li",[t._v("^~ 会对uri进行编码处理，例如：/html/%20/data 可以匹配 ^~ /html/ /data")])])])]),t._v(" "),a("h4",{attrs:{id:"配置请求的根目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置请求的根目录"}},[t._v("#")]),t._v(" 配置请求的根目录")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" eg\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当location块接收到 /dist/index.html请求时，就会")])])}),[],!1,null,null,null);s.default=e.exports}}]);