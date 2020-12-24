(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{392:function(t,s,e){t.exports=e.p+"assets/img/travis-vuepress1.9526dd77.png"},478:function(t,s,e){"use strict";e.r(s);var a=e(46),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"用travis-ci自动部署vuepress博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用travis-ci自动部署vuepress博客"}},[t._v("#")]),t._v(" 用Travis CI自动部署Vuepress博客")]),t._v(" "),a("h2",{attrs:{id:"gihub中生成personal-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gihub中生成personal-access-token"}},[t._v("#")]),t._v(" Gihub中生成personal access token")]),t._v(" "),a("p",[a("img",{attrs:{src:e(392),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"准备travis命令行工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备travis命令行工具"}},[t._v("#")]),t._v(" 准备Travis命令行工具")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("ruby -v")]),t._v("检查是否有ruby环境")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("gem install travis")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("travis login")]),t._v("，输入你的github用户吗和密码。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("travis encrypt -r <github name>/<github repo> GH_Token=XXX")]),t._v("，其中GH_Token为刚刚在github生成的token。")])])]),t._v(" "),a("p",[t._v("加密之后终端会生成加密的信息，将其复制粘贴进"),a("code",[t._v(".travis.yml")]),t._v("中：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('env:\n global:\n   - GIT_PAGE_REF: github.com/Limsanity/Limsanity.github.io.git\n   - secure: "<第4步生成的加密key>"\n')])])]),a("h2",{attrs:{id:"完整的配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整的配置文件"}},[t._v("#")]),t._v(" 完整的配置文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("language: node_js\nnode_js: stable\n\ncache:\n  directories:\n    - node_modules\n\ninstall:\n  - npm install\n\nscript:\n  - npx vuepress build blog\n\nafter_script:\n  - cd blog/.vuepress/dist\n  - git init\n  - git add -A\n  - git commit -m 'deploy'\n  - git push --force --quiet \"https://$GH_Token@${GIT_PAGE_REF}\" master:master\n\nenv:\n  global:\n    - GIT_PAGE_REF: github.com/Limsanity/Limsanity.github.io.git\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);