(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{438:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux网络编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux网络编程"}},[t._v("#")]),t._v(" Linux网络编程")]),t._v(" "),a("h2",{attrs:{id:"进程控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程控制"}},[t._v("#")]),t._v(" 进程控制")]),t._v(" "),a("h3",{attrs:{id:"进程的建立与运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程的建立与运行"}},[t._v("#")]),t._v(" 进程的建立与运行")]),t._v(" "),a("h4",{attrs:{id:"进程的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程的概念"}},[t._v("#")]),t._v(" 进程的概念")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" file.txt\n")])])]),a("p",[t._v("命令解释程序shell建立了一个进程来执行"),a("code",[t._v("cat")]),t._v("命令。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -ll\n")])])]),a("p",[t._v("该命令会使shell建立两个进程，并发运行命令"),a("code",[t._v("ls")]),t._v("和"),a("code",[t._v("wc")]),t._v("。把"),a("code",[t._v("ls")]),t._v("的输出通过管道送至字计数命令"),a("code",[t._v("wc")]),t._v("。")]),t._v(" "),a("p",[t._v("进程和程序的区别：")]),t._v(" "),a("ul",[a("li",[t._v("进程是动态的，程序是静态的。")]),t._v(" "),a("li",[t._v("多个进程可以并发执行一个程序。\n"),a("ul",[a("li",[t._v("例如：多个用户可以同时运行编辑程序，但是对于每一个用户，此程序的执行都是一个单独的进程。")])])])]),t._v(" "),a("p",[t._v("一个进程可以启动另一个进程，进程树的顶端是一个执行名为"),a("code",[t._v("init")]),t._v("的程序的控制进程，该进程是所有进程的祖先。")]),t._v(" "),a("p",[t._v("进程控制方面的系统调用：")]),t._v(" "),a("ul",[a("li",[t._v("fork()\n"),a("ul",[a("li",[t._v("通过复制调用进程来建立新的进程，它是最基本的进程建立操作。")])])]),t._v(" "),a("li",[t._v("exec\n"),a("ul",[a("li",[t._v("包括一系列的系统调用，每个系统调用都完成相同的功能，区别在于参数构造。")]),t._v(" "),a("li",[t._v("用一个新的程序覆盖原内存空间，实现进程的转变。")])])]),t._v(" "),a("li",[t._v("wait()\n"),a("ul",[a("li",[t._v("提供了初级的进程同步措施，能使一个进程等待另一个进程，直到其结束为止。")])])]),t._v(" "),a("li",[t._v("exit()\n"),a("ul",[a("li",[t._v("终止一个进程的运行。")])])])]),t._v(" "),a("h4",{attrs:{id:"进程的建立"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程的建立"}},[t._v("#")]),t._v(" 进程的建立")]),t._v(" "),a("p",[t._v("新建立的进程称为子进程，原进程称为父进程。父进程和子进程并发执行，都从"),a("code",[t._v("fork()")]),t._v("后的语句开始执行。")]),t._v(" "),a("p",[a("code",[t._v("fork()")]),t._v("返回一个pid值，用于区分父子进程。父进程中pid被设置为正整数，子进程中pid为0。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unistd.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pid_t pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Now only one process\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Calling fork...\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'m the child\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'m the parent, child has pid %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fork fial!\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"进程的运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程的运行"}},[t._v("#")]),t._v(" 进程的运行")]),t._v(" "),a("p",[t._v("如果"),a("code",[t._v("exec")]),t._v("调用成功，调用进程将被覆盖，然后从新程序的入口开始执行。")]),t._v(" "),a("p",[a("code",[t._v("exec")]),t._v("并没有建立一个与调用进程并发的新进程，而是用新的进程取代了原来的进程。")]),t._v(" "),a("p",[a("code",[t._v("exec")]),t._v("系列调用在Linux系统库中unitstd.h中的函数声明：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("int execl(const char *path, const char *arg, ...)")])]),t._v(" "),a("li",[a("code",[t._v("int execlp(const char *file, const char *arg, ...)")])]),t._v(" "),a("li",[a("code",[t._v("int execle(const char *path, const char *arg, ..., char *const envp[])")])]),t._v(" "),a("li",[a("code",[t._v("int execv(const char *path, char *const argv[])")])]),t._v(" "),a("li",[a("code",[t._v("int execvp(const char *file, char *const argv)")])])]),t._v(" "),a("p",[a("code",[t._v("execl()")]),t._v("第一个参数给出了被执行的程序所在的文件名，文件本身必须是一个真正的可执行程序，不能✅一个shell命令组成的文件。系统只要检查文件的开头两个字节，就可以知道该文件是否为程序文件（程序文件的开头两个字节是系统规定的专用值）：")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unistd.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Executing ls\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/ls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-l"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("perror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execl failed to run ls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上述例子中，如果"),a("code",[t._v("execl()")]),t._v("调用成功，将会运行ls程序替代当前的调用程序，就不会执行到"),a("code",[t._v("perror()")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("execv()")]),t._v("的第一个参数指向执行的程序文件，第二个参数是一个参数列表数组：")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unistd.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" av"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-l"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/ls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" av"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("perror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"execv failed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("execlp()")]),t._v("和"),a("code",[t._v("execvp()")]),t._v("分别类似于"),a("code",[t._v("execl()")]),t._v("和"),a("code",[t._v("execv()")]),t._v("，区别在于第一个参数为简单的文件名，而不是一个路径名，它们通过检索shell环境变量PATH指出的目录，来得到文件名的路径前缀，例如：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$PATH=/bin;/usr/bin;/sbin")])]),t._v(" "),a("li",[a("code",[t._v("$export PATH")])])]),t._v(" "),a("p",[t._v("首先会在目录"),a("code",[t._v("/bin")]),t._v("查找，然后在"),a("code",[t._v("/usr/bin")]),t._v("查找，最后在"),a("code",[t._v("/sbin")]),t._v("查找。另外，"),a("code",[t._v("execlp()")]),t._v("和"),a("code",[t._v("execvp")]),t._v("还可以运行shell程序，而不只是普通程序。")])])}),[],!1,null,null,null);s.default=e.exports}}]);