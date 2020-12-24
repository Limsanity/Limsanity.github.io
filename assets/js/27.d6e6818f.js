(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{419:function(s,n,e){"use strict";e.r(n);var t=e(46),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"docker命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker命令"}},[s._v("#")]),s._v(" Docker命令")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有正在运行的container")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有container，包括未运行")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q       "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有container的id（静默模式）")]),s._v("\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" containerId "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定id的container")]),s._v("\ndocker inspect containerId "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看container的详情")]),s._v("\n\ndocker images         "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有image,过滤了中间映像层")]),s._v("\ndocker images -a      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 含中间映像层")]),s._v("\ndocker images -a -q   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有镜像的id")]),s._v("\ndocker rmi imagesId   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定id的镜像")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除名字为none的镜像")]),s._v("\ndocker rmi "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^<none>/ { print "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(" }'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据指定镜像生成并运行container，-p指定端口 --name指定容器名字")]),s._v("\ndocker run -p 宿主机端口:容器端口 --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hello-world limsanity3/hello-world \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建镜像，-t指定标签")]),s._v("\ndocker build -t limsanity3/hello-world "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建docker-compose.yaml中指定服务的镜像")]),s._v("\ndocker-compose build user-service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行docker-compose.yaml中指定的服务")]),s._v("\ndocker-compose run user-service\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);