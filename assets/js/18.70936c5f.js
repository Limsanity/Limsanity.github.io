(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{406:function(e,s,a){e.exports=a.p+"assets/img/1.94915046.png"},407:function(e,s,a){e.exports=a.p+"assets/img/2.a6eed889.png"},521:function(e,s,a){"use strict";a.r(s);var t=a(46),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"集成lighthouse-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成lighthouse-ci"}},[e._v("#")]),e._v(" 集成lighthouse-ci")]),e._v(" "),t("h3",{attrs:{id:"安装运行lighthouse-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装运行lighthouse-ci"}},[e._v("#")]),e._v(" 安装运行lighthouse-ci")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse-ci",target:"_blank",rel:"noopener noreferrer"}},[e._v("lighthouse-ci仓库"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("本地使用vue cli新建一个测试项目")]),e._v(" "),t("p",[e._v("安装lighthouse的cli工具：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i -g @lhci/cli@0.3.x\n")])])]),t("p",[e._v("进入测试项目打包项目：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),t("p",[e._v("执行lhci：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("lhci autorun\n")])])]),t("p",[e._v("windows环境下，会出现 "),t("code",[e._v("child_process spawn UNKNOWN")]),e._v(" 的问题，可见 "),t("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse-ci/issues/67",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),t("OutboundLink")],1),e._v("。根据terminal报错提示找到"),t("code",[e._v("lighthouse-runner.js")]),e._v("文件，按照issue提出者简单的添加"),t("code",[e._v("{ shell: true}")]),e._v("会出现无效字符的报错（和"),t("code",[e._v("#!/usr/env")]),e._v("有关，具体区别后续再研究）。")]),e._v(" "),t("p",[e._v("为了能正常在windows下运行lhci，目前使用了比较hack的方法：")]),e._v(" "),t("p",[e._v("根据terminal报错进入"),t("code",[e._v("C:\\Users\\yourUserName\\AppData\\Roaming\\npm\\node_modules\\@lhci\\cli")]),e._v("（注意yourUserName是你在windows主机上的用户名）。")]),e._v(" "),t("p",[e._v("安装"),t("code",[e._v("cross-spawn")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i cross-spawn\n")])])]),t("p",[e._v("将"),t("code",[e._v("lighthouse-runner.js")]),e._v("中child_process改成cross-spawn：")]),e._v(" "),t("p",[t("img",{attrs:{src:a(406),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:a(407),alt:""}})]),e._v(" "),t("p",[e._v("此时再次运行"),t("code",[e._v("lhci autorun")]),e._v("即可。")]),e._v(" "),t("h3",{attrs:{id:"构建自己的lighthouse-ci-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建自己的lighthouse-ci-server"}},[e._v("#")]),e._v(" 构建自己的Lighthouse CI Server")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse-ci/tree/master/docs/recipes/docker-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于Docker搭建LHCI Server"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md#the-lighthouse-ci-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lighthouse CI Server搭建完成后的操作"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("创建docker volume：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker volume create lhci-data\n")])])]),t("p",[e._v("拉取镜像：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker pull patrickhulce/lhci-server\n")])])]),t("p",[e._v("运行docker container：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker container run --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9001")]),e._v(":9001 --mount "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("source")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("lhci-data,target"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/data --detach patrickhulce/lhci-server\n")])])]),t("p",[e._v("启动完成后访问"),t("code",[e._v("localhost:9001/app")]),e._v("，页面会提示你执行"),t("code",[e._v("lhci wizard")]),e._v("新建项目。")]),e._v(" "),t("p",[e._v("执行"),t("code",[e._v("lhci wizard")]),e._v("，按照提示填写，LHCI Server的url为"),t("code",[e._v("http://localhost:9001")]),e._v("，随机生成token。")]),e._v(" "),t("p",[e._v("最后执行:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("lhci upload --serverBaseUrl"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://localhost:9001 --toekn"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${tokenGeneratedAbove}")]),e._v("\n")])])]),t("p",[e._v("再次访问"),t("code",[e._v("localhost:9001/app")]),e._v("，就可以看到项目的评分数据。")])])}),[],!1,null,null,null);s.default=r.exports}}]);