(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{615:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-事件是什么-事件模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件是什么-事件模型"}},[t._v("#")]),t._v(" 1. 事件是什么？事件模型？")]),t._v(" "),a("p",[t._v("事件是用户操作网页时发生的交互动作，除了用户触发动作外，还可以是文档加载，窗口滚动和大小调整。\n事件被封装成 event 对象，包含发生时所有相关信息（属性）&&可对事件进行的操作（方法）。")]),t._v(" "),a("p",[t._v("一共有三种事件模型：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("DOM0 级事件模型")]),t._v("：不会传播，无事件流概念，但有的浏览器支持以冒泡方式实现，可在网页中直接定义监听函数，也可以通过 js 属性来指定监听函数。直接在dom对象上注册事件名称，就是DOM0写法。")]),t._v(" "),a("li",[a("strong",[t._v("IE 事件模型")]),t._v("：一次事件两个过程，事件处理和冒泡阶段。处理——会首先执行目标元素绑定的监听事件。冒泡——指的是事件从目标元素冒泡到 document，检查经过节点是否绑定了事件监听函数，有则执行。这种模型通过attachEvent 来添加监听函数，可添加多个监听函数，按顺序执行。")]),t._v(" "),a("li",[a("strong",[t._v("DOM2 级事件模型")]),t._v("，三个过程，捕获指的是事件从 document 一直向下传播到目标元素，依次检查是否绑定事件监听函数，有则执行。后两个阶段和 IE 事件模型相同。事件绑定的函数是addEventListener，"),a("strong",[t._v("第三个参数指定事件是否在捕获阶段执行")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"_2-如何阻止事件冒泡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何阻止事件冒泡"}},[t._v("#")]),t._v(" 2. 如何阻止事件冒泡")]),t._v(" "),a("ul",[a("li",[t._v("普通浏览器使用：event.stopPropagation()")]),t._v(" "),a("li",[t._v("IE浏览器使用：event.cancelBubble = true;")])]),t._v(" "),a("h2",{attrs:{id:"_3-对事件委托的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-对事件委托的理解"}},[t._v("#")]),t._v(" 3. 对事件委托的理解")]),t._v(" "),a("h3",{attrs:{id:"_3-1-事件委托的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-事件委托的概念"}},[t._v("#")]),t._v(" 3.1 事件委托的概念")]),t._v(" "),a("p",[t._v("利用了"),a("strong",[t._v("冒泡")]),t._v("机制。因为事件在冒泡过程中会上传到父节点，父节点可以通过事件对象获取到目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件委托（事件代理）。")]),t._v(" "),a("p",[t._v("使用事件委托可不必要为每一个子元素都绑定监听事件，减少内存消耗。\n还可以实现事件的动态绑定，比如新增子节点不用单独添加监听事件，会交给父元素中的监听函数来处理。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-事件委托的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-事件委托的特点"}},[t._v("#")]),t._v(" 3.2 事件委托的特点")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("减少内存消耗")]),t._v("——点击大量列表项响应一个事件，列表项都绑定函数内存消耗非常大。把点击事件绑定到父层 ul 上，执行事件时再去匹配判断目标元素。")]),t._v(" "),a("li",[a("strong",[t._v("动态绑定事件")]),t._v("——新增的元素绑定事件，即将删去元素解绑事件；事件绑定在父层和目标元素的增删无关系，在动态绑定事件可减少重复工作的。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给父层元素绑定事件")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兼容性处理")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否匹配目标元素")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toLocaleLowerCase "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'the content is: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("target 元素是在 #list 元素之下具体被点击的元素，然后通过判断 target 属性（比如：nodeName，id 等）可精确地匹配某一类 #list li 元素之上；")]),t._v(" "),a("h3",{attrs:{id:"_3-3-局限性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-局限性"}},[t._v("#")]),t._v(" 3.3 局限性")]),t._v(" "),a("p",[t._v("比如 focus、blur 之类的事件无冒泡机制，无法实现事件委托；mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的。")]),t._v(" "),a("p",[t._v("事件委托会影响页面性能，主要影响因素有：")]),t._v(" "),a("ul",[a("li",[t._v("元素中，绑定事件委托的次数；")]),t._v(" "),a("li",[t._v("点击的最底层元素，到绑定事件元素之间的"),a("code",[t._v("DOM")]),t._v("层数；")])]),t._v(" "),a("p",[t._v("在必须使用事件委托的地方，可以进行如下的处理：")]),t._v(" "),a("ul",[a("li",[t._v("只在必须的地方，使用事件委托，比如："),a("code",[t._v("ajax")]),t._v("的局部刷新区域")]),t._v(" "),a("li",[t._v("减少绑定层级，不在"),a("code",[t._v("body")]),t._v("元素上，进行绑定")]),t._v(" "),a("li",[t._v("减少绑定次数，把多个事件绑定合并到一次事件委托。")])]),t._v(" "),a("h2",{attrs:{id:"_4-事件委托的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-事件委托的使用场景"}},[t._v("#")]),t._v(" 4. 事件委托的使用场景")]),t._v(" "),a("p",[t._v("场景：给页面的所有的a标签添加click事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("但a标签可能包含一些像span、img等元素，如果点击到这些元素，不会触发click事件。")]),t._v(" "),a("p",[t._v("可使用"),a("strong",[t._v("事件委托")]),t._v("，将事件绑定在a标签内部元素上，会逐级向上查找找到a标签为止。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 逐级向上查找")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BODY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到则打破循环")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-同步-异步区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-同步-异步区别"}},[t._v("#")]),t._v(" 5. 同步&&异步区别")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("同步")]),t._v("若请求需等一段时间才能返回，进程会一直等，返回才会向下执行。")]),t._v(" "),a("li",[a("strong",[t._v("异步")]),t._v("进程会继续执行，不会阻塞等待消息返回，当消息返回时系统再通知进程进行处理。")])]),t._v(" "),a("h2",{attrs:{id:"_6-事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-事件循环"}},[t._v("#")]),t._v(" 6. 事件循环")]),t._v(" "),a("p",[t._v("js 单线程。同步代码等待。当异步事件执行完毕后，再将对应回调加入到任务队列中等待执行。\n任务队列可以分为宏任务和微任务，当执行栈中的事件执行完毕后，js 引擎首先将微任务队首的事件压入栈中执行。都执行完成后再执行宏任务队列。")]),t._v(" "),a("p",[t._v("执行顺序：")]),t._v(" "),a("ul",[a("li",[t._v("首先执行同步代码，这属于宏任务")]),t._v(" "),a("li",[t._v("当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行")]),t._v(" "),a("li",[t._v("执行所有微任务")]),t._v(" "),a("li",[t._v("当执行完所有微任务后，如有必要会渲染页面")]),t._v(" "),a("li",[t._v("然后开始下一轮 Event Loop，执行宏任务中的异步代码")])]),t._v(" "),a("h2",{attrs:{id:"_7-宏任务和微任务有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-宏任务和微任务有哪些"}},[t._v("#")]),t._v(" 7. 宏任务和微任务有哪些")]),t._v(" "),a("ul",[a("li",[t._v("微任务：promise 回调、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver。")]),t._v(" "),a("li",[t._v("宏任务：script 脚本执行、setTimeout ，setInterval ，setImmediate 一类的定时事件，还有如 I/O 操作、UI 渲染等。")])]),t._v(" "),a("h2",{attrs:{id:"_8-事件触发的过程是怎样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-事件触发的过程是怎样的"}},[t._v("#")]),t._v(" 8. 事件触发的过程是怎样的")]),t._v(" "),a("p",[t._v("三个阶段：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("window")]),t._v(" 往事件触发处传播，遇到注册的捕获事件会触发")]),t._v(" "),a("li",[t._v("传播到事件触发处时触发注册的事件")]),t._v(" "),a("li",[t._v("从事件触发处往 "),a("code",[t._v("window")]),t._v(" 传播，遇到注册的冒泡事件会触发")])]),t._v(" "),a("p",[t._v("也有特例，"),a("strong",[t._v("如果给一个")]),t._v(" "),a("code",[t._v("**body**")]),t._v(" "),a("strong",[t._v("中的子节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以下会先打印冒泡然后是捕获")]),t._v("\nnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'冒泡'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'捕获 '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("通常使用 "),a("code",[t._v("addEventListener")]),t._v(" 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 "),a("code",[t._v("useCapture")]),t._v(" 参数来说，默认值为 "),a("code",[t._v("false")]),t._v(" ，决定了注册的事件是捕获/冒泡事件：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("capture")]),t._v("：布尔值，和 "),a("code",[t._v("useCapture")]),t._v(" 作用一样")]),t._v(" "),a("li",[a("code",[t._v("once")]),t._v("：布尔值，值为 "),a("code",[t._v("true")]),t._v(" 表示该回调只会调用一次，调用后会移除监听")]),t._v(" "),a("li",[a("code",[t._v("passive")]),t._v("：布尔值，表示永远不会调用 "),a("code",[t._v("preventDefault")])])]),t._v(" "),a("p",[t._v("一般来说，如果只希望事件只触发在目标上，这时候可以使用 "),a("code",[t._v("stopPropagation")]),t._v(" 来阻止事件的进一步传播。通常认为 "),a("code",[t._v("stopPropagation")]),t._v(" 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。")]),t._v(" "),a("p",[a("code",[t._v("stopImmediatePropagation")]),t._v(" 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopImmediatePropagation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'冒泡'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点击 node 只会执行上面的函数，该函数不会执行")]),t._v("\nnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'捕获 '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"_9-settimeout而不是setinterval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-settimeout而不是setinterval"}},[t._v("#")]),t._v(" 9. setTimeout而不是setInterval")]),t._v(" "),a("p",[t._v("因为每次setTimeout计时到后就会去执行，然后执行一段时间后才会继续setTimeout，误差")]),t._v(" "),a("p",[t._v("而setInterval精确的隔一段时间推入一个事件，比较致命的问题：")]),t._v(" "),a("ul",[a("li",[t._v("累计效应")]),t._v(" "),a("li",[t._v("譬如像iOS的webview,或者Safari等浏览器中都有一个特点，在滚动的时候是不执行JS的，如果使用了setInterval，会发现在滚动结束后会执行多次由于滚动不执行JS积攒回调，如果回调执行时间过长,就会非常容器造成卡顿问题和一些不可知的错误（这一块后续有补充，setInterval自带的优化，不会重复添加回调）")]),t._v(" "),a("li",[t._v("而且把浏览器最小化显示等操作时，setInterval并不是不执行程序，它会把setInterval的回调函数放在队列中，等浏览器窗口再次打开时，一瞬间全部执行时")])]),t._v(" "),a("p",[a("strong",[t._v("目前最佳方案")]),t._v("：用setTimeout模拟setInterval，特殊场合直接用requestAnimationFrame\n"),a("strong",[t._v("补充：红宝书中有提到，JS引擎会对setInterval进行优化，如果当前事件队列中有setInterval的回调，不会重复添加。不过，仍然是有很多问题。。。")])]),t._v(" "),a("h2",{attrs:{id:"_10-load事件与domcontentloaded事件的先后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-load事件与domcontentloaded事件的先后"}},[t._v("#")]),t._v(" 10. load事件与DOMContentLoaded事件的先后")]),t._v(" "),a("ul",[a("li",[t._v("当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片。(譬如如果有async加载的脚本就不一定完成)")]),t._v(" "),a("li",[t._v("当 onload 事件触发时，页面上所有的DOM，样式表，脚本，图片都已经加载完成了。（渲染完毕了）")]),t._v(" "),a("li",[t._v("顺序是：DOMContentLoaded -> load")])])])}),[],!1,null,null,null);s.default=e.exports}}]);