(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{593:function(t,e,r){"use strict";r.r(e);var a=r(17),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("本篇主要概述前端知识内容，方便复盘知识点～～")]),t._v(" "),r("h2",{attrs:{id:"综述-前端三要素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#综述-前端三要素"}},[t._v("#")]),t._v(" 综述：前端三要素")]),t._v(" "),r("ul",[r("li",[t._v("HTML（结构）：超文本标记语言（Hyper Text Markup Language），决定网页的结构和内容")]),t._v(" "),r("li",[t._v("CSS（表现）：层叠样式表（Cascading Style Sheets），设定网页的表现样式\n"),r("ul",[r("li",[t._v("可参考书籍📚《CSS的世界》从不同角度解读CSS")]),t._v(" "),r("li",[t._v("B站参考黑马教学视频制作电商静态网页")])])]),t._v(" "),r("li",[t._v("JavaScript（行为）：是一种弱类型脚本语言，其源代码不需经过编译，而是由浏览器解释运行，用于控制网页的行为\n"),r("ul",[r("li",[t._v("可参考书籍📚《JavaScript高级程序设计》帮助学习JS")]),t._v(" "),r("li",[t._v("可以参考一下小demo加深JS的实践：\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://fengcherenxi.github.io/demo1/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("音乐播放器"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://fengcherenxi.github.io/demo2/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TodoList"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://fengcherenxi.github.io/demo3/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线打鼓🥁"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://fengcherenxi.github.io/demo4/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小时钟"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://fengcherenxi.github.io/demo5/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线改变图片样式"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://fengcherenxi.github.io/demo6/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("github搜索页"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://yangsuoze.cn:5000",target:"_blank",rel:"noopener noreferrer"}},[t._v("胃炎检测"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://yangsuoze.cn:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("图像标注工具"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/01-01-图像标注工具说明书.html"}},[t._v("图像标注工具说明书")])],1)])])])])]),t._v(" "),r("h2",{attrs:{id:"表现层-css"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表现层-css"}},[t._v("#")]),t._v(" 表现层（CSS）")]),t._v(" "),r("p",[t._v("CSS 层叠样式表是一门标记语言，并不是编程语言，因此不可以自定义变量，不可以引用等，换句话说\n就是不具备任何语法支持，它主要缺陷如下：")]),t._v(" "),r("ul",[r("li",[t._v("语法不够强大，比如无法嵌套书写，导致模块化开发中需要书写很多重复的选择器；\n没有变量和合理的样式复用机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护；")])]),t._v(" "),r("p",[t._v("这就导致了我们在工作中无端增加了许多工作量。为了解决这个问题，前端开发人员会使用一种称之为【CSS 预处理器】的工具，提供 CSS 缺失的样式层复用机制、减少冗余代码，提高样式代码的可维护性。大大提高了前端在样式上的开发效率。")]),t._v(" "),r("h3",{attrs:{id:"什么是-css-预处理器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-css-预处理器"}},[t._v("#")]),t._v(" 什么是 CSS 预处理器")]),t._v(" "),r("p",[t._v("CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的\n特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行 CSS 的编码工作。转化成通俗\n易懂的话来说就是“用一种专门的编程语言，进行 Web 页面样式设计，再通过编译器转化为正常的 CSS文件，以供项目使用”。")]),t._v(" "),r("h3",{attrs:{id:"常用的-css-预处理器有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用的-css-预处理器有哪些"}},[t._v("#")]),t._v(" 常用的 CSS 预处理器有哪些")]),t._v(" "),r("ul",[r("li",[t._v("SASS：基于 Ruby，通过服务端处理，功能强大。解析效率高。需要学习 Ruby 语言，上手难度高于 LESS。")]),t._v(" "),r("li",[t._v("LESS：基于 NodeJS，通过客户端处理，使用简单。功能比 SASS 简单，解析效率也低于 SASS，但在实际开发中足够了。")])]),t._v(" "),r("h2",{attrs:{id:"行为层-javascript"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#行为层-javascript"}},[t._v("#")]),t._v(" 行为层（JavaScript）")]),t._v(" "),r("p",[t._v("JavaScript 一门弱类型脚本语言，其源代码在发往客户端运行之前不需经过编译，而是将文本格式的字符代码发送给浏览器由浏览器解释运行。")]),t._v(" "),r("h3",{attrs:{id:"native-原生-js-开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#native-原生-js-开发"}},[t._v("#")]),t._v(" Native 原生 JS 开发")]),t._v(" "),r("p",[t._v("原生 JS 开发，也就是让我们按照 【ECMAScript】 标准的开发方式，简称是 ES，特点是所有浏览器都支持。截止到目前，ES 标准已发布如下版本：")]),t._v(" "),r("ul",[r("li",[t._v("ES3")]),t._v(" "),r("li",[t._v("ES4（内部，未正式发布）")]),t._v(" "),r("li",[t._v("ES5（全浏览器支持）")]),t._v(" "),r("li",[t._v("ES6（常用，当前主流版本）")]),t._v(" "),r("li",[t._v("ES7")]),t._v(" "),r("li",[t._v("ES8")]),t._v(" "),r("li",[t._v("ES9（草案阶段）\n区别就是逐步增加新特性。")])]),t._v(" "),r("h2",{attrs:{id:"typescript-微软的标准"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#typescript-微软的标准"}},[t._v("#")]),t._v(" TypeScript 微软的标准")]),t._v(" "),r("p",[t._v("TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。")]),t._v(" "),r("p",[t._v("该语言的特点就是除了具备 ES 的特性之外还纳入了许多不在标准范围内的新特性，所以会导致很多浏览器不能直接支持 TypeScript 语法，需要编译后（编译成 JS）才能被浏览器正确执行。")]),t._v(" "),r("h2",{attrs:{id:"javascript-框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-框架"}},[t._v("#")]),t._v(" JavaScript 框架")]),t._v(" "),r("ul",[r("li",[t._v("jQuery：大家熟知的 JavaScript 框架，优点是简化了 DOM 操作，缺点是 DOM 操作太频繁，影响前端性能；在前端眼里使用它仅仅是为了兼容 IE6、7、8；")]),t._v(" "),r("li",[t._v("Angular：Google 收购的前端框架，由一群 Java 程序员开发，其特点是将后台的 MVC 模式搬到了前端并增加了模块化开发的理念，与微软合作，采用 TypeScript 语法开发；对后台程序员友好，对前端程序员不太友好；最大的缺点是版本迭代不合理（如：1代 -> 2代，除了名字，基本就是两个东西）")]),t._v(" "),r("li",[t._v("react：Facebook 出品，一款高性能的 JS 前端框架；特点是提出了新概念 【虚拟 DOM】 用于减少真实 DOM 操作，在内存中模拟 DOM 操作，有效的提升了前端渲染效率；缺点是使用复杂，因为需要额外学习一门 【JSX】 语言；")]),t._v(" "),r("li",[t._v("Vue ：一款渐进式 JavaScript 框架，所谓渐进式就是逐步实现新特性的意思，如实现模块化开发、路由、状态管理等新特性。其特点是综合了 Angular（模块化） 和 React（虚拟 DOM） 的优点；")]),t._v(" "),r("li",[t._v("Axios ：前端通信框架；因为 Vue 的边界很明确，就是为了处理 DOM，所以并不具备通信能力，此时就需要额外使用一个通信框架与服务器交互；当然也可以直接选择使用 jQuery 提供的AJAX 通信功能；")])]),t._v(" "),r("h2",{attrs:{id:"ui-框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ui-框架"}},[t._v("#")]),t._v(" UI 框架")]),t._v(" "),r("ul",[r("li",[t._v("Ant-Design：阿里巴巴出品，基于 React 的 UI 框架")]),t._v(" "),r("li",[t._v("ElementUI：饿了么出品，基于 Vue 的 UI 框架")]),t._v(" "),r("li",[t._v("Bootstrap：Twitter 推出的一个用于前端开发的开源工具包")]),t._v(" "),r("li",[t._v("AmazeUI：又叫“妹子 UI”，一款 HTML5 跨屏前端框架")])]),t._v(" "),r("h2",{attrs:{id:"javascript-构建工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-构建工具"}},[t._v("#")]),t._v(" JavaScript 构建工具")]),t._v(" "),r("ul",[r("li",[t._v("Babel：JS 编译工具，主要用于浏览器不支持的 ES 新特性，比如用于编译 TypeScript")]),t._v(" "),r("li",[t._v("WebPack：模块打包器，主要作用是打包、压缩、合并及按序加载")])])])}),[],!1,null,null,null);e.default=v.exports}}]);