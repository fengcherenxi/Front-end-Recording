(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{609:function(_,v,t){"use strict";t.r(v);var r=t(17),a=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("学习思路：进程线程协程——浏览器进程——浏览器内核运行——JS引擎单线程——JS事件循环机制")]),_._v(" "),t("h2",{attrs:{id:"_1-进程线程协程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-进程线程协程"}},[_._v("#")]),_._v(" 1. 进程线程协程")]),_._v(" "),t("h3",{attrs:{id:"_1-1-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-概述"}},[_._v("#")]),_._v(" 1.1 概述")]),_._v(" "),t("ul",[t("li",[_._v("进程描述了 CPU 在运行指令及加载和保存上下文所需的时间，放在应用上来说就代表了一个程序。启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程。**运行在虚拟内存上的，虚拟内存是用来解决用户对硬件资源的无限需求和有限的硬件资源之间的矛盾的。从操作系统角度来看，虚拟内存即交换文件；从处理器角度看，虚拟内存即虚拟地址空间。**变相的增加了程序可以使用的内存。")]),_._v(" "),t("li",[_._v("线程是进程中的更小单位，描述了执行一段指令所需的时间。")])]),_._v(" "),t("p",[t("strong",[_._v("进程是资源分配的最小单位，线程是CPU调度的最小单位。")])]),_._v(" "),t("ul",[t("li",[_._v("计算机核心CPU——承担了所有的计算任务")]),_._v(" "),t("li",[_._v("操作系统——计算机的管理者，负责任务的调度、资源的分配和管理，统领整个计算机硬件")]),_._v(" "),t("li",[_._v("应用程序——具有某种功能的程序，程序是运行于操作系统之上的")]),_._v(" "),t("li",[_._v("进程——一个具有一定独立功能的程序，在一个数据集上的一次动态执行的过程，是操作系统进行资源分配和调度的一个独立单位，是应用程序运行的载体。"),t("strong",[_._v("进程之间的切换开销较大")]),_._v("，无法满足复杂程序的要求。就发明了线程。")]),_._v(" "),t("li",[_._v("线程——程序执行中一个单一的顺序控制流程，是"),t("strong",[_._v("程序执行流的最小单元")]),_._v("，各个线程之间共享程序的内存空间。")]),_._v(" "),t("li",[_._v("协程——由程序员自己写程序来管理的"),t("strong",[_._v("轻量级线程")]),_._v("叫做『用户空间线程』，具有对内核来说不可见的特性。是"),t("strong",[_._v("自主开辟的异步任务")]),_._v("，一个线程也可以拥有多个协程。")])]),_._v(" "),t("h3",{attrs:{id:"_1-2-进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-进程"}},[_._v("#")]),_._v(" 1.2 进程")]),_._v(" "),t("p",[_._v("进程一般由程序、数据集合和进程控制块三部分组成。")]),_._v(" "),t("p",[_._v("程序控制块(Program Control Block，简称PCB)，包含进程的描述信息和控制信息，是进程存在的唯一标志。")]),_._v(" "),t("h3",{attrs:{id:"_1-3-线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-线程"}},[_._v("#")]),_._v(" 1.3 线程")]),_._v(" "),t("p",[_._v("时间片轮转保证每个线程轮流执行，由于CPU的执行效率非常高，时间片非常短，在各个任务之间快速地切换，给人的感觉就是多个任务在“同时进行”，这也就是我们所说的"),t("strong",[_._v("并发")]),_._v("。")]),_._v(" "),t("p",[_._v("区别：")]),_._v(" "),t("ul",[t("li",[_._v("线程是程序执行的最小单位，而进程是操作系统分配资源的最小单位；")]),_._v(" "),t("li",[_._v("一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线；")]),_._v(" "),t("li",[_._v("进程之间相互独立，但同一进程下的各个线程之间共享程序的内存空间(包括代码段、数据集、堆等)及一些进程级的资源(如打开文件和信号)，某进程内的线程在其它进程不可见；")]),_._v(" "),t("li",[_._v("调度和切换：线程上下文切换比进程上下文切换要快得多。")])]),_._v(" "),t("p",[_._v("进程和线程之间的关系：")]),_._v(" "),t("ul",[t("li",[_._v("进程中的任意一线程执行出错，都会导致整个进程的崩溃。")]),_._v(" "),t("li",[_._v("线程之间共享进程中的数据。")]),_._v(" "),t("li",[_._v("当一个进程关闭之后，操作系统会回收进程所占用的内存，**即使其中任意线程因为操作不当导致内存泄漏，当进程退出时，这些内存也会被正确回收。")]),_._v(" "),t("li",[_._v("进程之间的内容相互隔离。如果进程之间需要进行数据的通信，这时候，就需要使用用于进程间通信的机制了。")])]),_._v(" "),t("h3",{attrs:{id:"_1-4-多线程与多核"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-多线程与多核"}},[_._v("#")]),_._v(" 1.4 多线程与多核")]),_._v(" "),t("p",[_._v("多线程——时间片轮转实现并发，但并不是真正的同时并行处理")]),_._v(" "),t("p",[_._v("多核——一个处理器上集成多个运算核心从而提高计算能力，有多个真正并行计算的处理核心，每一个处理核心对应一个内核线程。")]),_._v(" "),t("p",[_._v("并发——当线程<处理器的数量时，是真正的并发，运行在不同的处理器上。但当线程>处理器时，不是真正的并发,时间片轮转。")]),_._v(" "),t("h4",{attrs:{id:"_1-4-1-内核线程与超线程技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-内核线程与超线程技术"}},[_._v("#")]),_._v(" 1.4.1 内核线程与超线程技术")]),_._v(" "),t("p",[_._v("内核线程就是直接由操作系统内核支持的线程，这种线程由内核来完成线程切换，内核通过操作调度器对线程进行调度，并负责将线程的任务映射到各个处理器上。一般一个处理核心对应一个内核线程。")]),_._v(" "),t("p",[_._v("现在的电脑采用超线程技术将一个物理处理核心模拟成两个逻辑处理核心，对应两个内核线程，所以在操作系统中看到的CPU数量是实际物理CPU数量的两倍。")]),_._v(" "),t("p",[_._v("超线程技术就是利用特殊的硬件指令，把一个物理芯片模拟成两个逻辑处理核心，让单个处理器都能使用线程级并行计算，进而兼容多线程操作系统和软件，"),t("strong",[_._v("减少了CPU的闲置时间")]),_._v("。")]),_._v(" "),t("h4",{attrs:{id:"_1-4-2-一对一模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-一对一模型"}},[_._v("#")]),_._v(" 1.4.2 一对一模型")]),_._v(" "),t("p",[_._v("一个用户线程就唯一地映射到一个物理CPU的内核线程，线程之间的并发是真正的并发。一对一模型使用户线程具有与内核线程一样的优点，一个线程因某种原因阻塞时其他线程的执行不受影响；此处，一对一模型也可以让多线程程序在多处理器的系统上有更好的表现。")]),_._v(" "),t("p",[_._v("缺点：")]),_._v(" "),t("ul",[t("li",[_._v("操作系统限制了内核线程的数量，因此一对一模型会使用户线程的数量受到限制；")]),_._v(" "),t("li",[_._v("操作系统内核线程调度时，上下文切换的开销较大，导致用户线程的执行效率下降。")])]),_._v(" "),t("h4",{attrs:{id:"_1-4-2-多对一模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-多对一模型"}},[_._v("#")]),_._v(" 1.4.2 多对一模型")]),_._v(" "),t("p",[_._v("多对一模型将多个用户线程映射到一个内核线程上，线程之间的切换由用户态的代码来进行，系统内核感受不到线程的实现方式。用户线程的建立、同步、销毁等都在用户态中完成，不需要内核的介入。因此相对一对一模型，多对一模型的线程上下文切换速度要快许多；此外，多对一模型对用户线程的数量几乎无限制。")]),_._v(" "),t("p",[_._v("缺点：")]),_._v(" "),t("ul",[t("li",[_._v("如果其中一个用户线程阻塞，那么其它所有线程都将无法执行，因为此时内核线程也随之阻塞了；")]),_._v(" "),t("li",[_._v("在多处理器系统上，处理器数量的增加对多对一模型的线程性能不会有明显的增加，因为所有的用户线程都映射到一个处理器上了。")])]),_._v(" "),t("h4",{attrs:{id:"_1-4-3-多对多模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-多对多模型"}},[_._v("#")]),_._v(" 1.4.3 多对多模型")]),_._v(" "),t("p",[_._v("多对多模型结合了一对一模型和多对一模型的优点，将多个用户线程映射到多个内核线程上。由线程库负责在可用的可调度实体上调度用户线程，这使得线程的上下文切换非常快，因为它避免了系统调用。但是增加了复杂性和优先级倒置的可能性，以及在用户态调度程序和内核调度程序之间没有广泛（且高昂）协调的次优调度。中间有"),t("strong",[_._v("线程池")]),_._v("。")]),_._v(" "),t("p",[_._v("优点：")]),_._v(" "),t("ul",[t("li",[_._v("一个用户线程的阻塞不会导致所有线程的阻塞，因为此时还有别的内核线程被调度来执行；")]),_._v(" "),t("li",[_._v("对用户线程的数量没有限制；")]),_._v(" "),t("li",[_._v("在多处理器的操作系统中，多对多模型的线程也能得到一定的性能提升，但提升的幅度不如一对一模型的高。")])]),_._v(" "),t("h3",{attrs:{id:"_1-4-协程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-协程"}},[_._v("#")]),_._v(" 1.4 协程")]),_._v(" "),t("h4",{attrs:{id:"_1-4-1-协程目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-协程目的"}},[_._v("#")]),_._v(" 1.4.1 协程目的")]),_._v(" "),t("p",[_._v("JDBC（它是同步阻塞的），这也是为什么很多人都说数据库是瓶颈的原因。这里的耗时其实是让CPU一直在等待I/O返回，说白了线程根本没有利用CPU去做运算，而是处于空转状态。而另外过多的线程，也会带来更多的ContextSwitch开销。")]),_._v(" "),t("p",[_._v("解决方案之一——单线程+异步回调。其代表派是node.js以及Java里的新秀Vert.x。")]),_._v(" "),t("p",[_._v("当出现长时间的I/O操作时，通过让出目前的协程调度，执行下一个任务的方式，来消除ContextSwitch上的开销。")]),_._v(" "),t("h3",{attrs:{id:"_1-4-2-协程的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-协程的原理"}},[_._v("#")]),_._v(" 1.4.2 协程的原理")]),_._v(" "),t("p",[_._v("出现IO阻塞时，由协程调度器进行调度，通过将数据流立刻yield掉（主动让出），并记录当前栈上的数据，阻塞完后立刻再通过线程恢复栈，并把阻塞的结果放到这个线程上去跑，这样看上去好像跟写同步代码没差别，这整个流程可以称为coroutine，而跑在由coroutine负责调度的线程称为Fiber。比如Golang里的 go关键字其实就是负责开启一个Fiber，让func逻辑跑在上面。")]),_._v(" "),t("p",[_._v("协程(Coroutine)编译器级的，进程(Process)和线程(Thread)操作系统级的")]),_._v(" "),t("p",[_._v("由于协程的暂停完全由程序控制，发生在用户态上；而线程的阻塞状态是由操作系统内核来进行切换，发生在内核态上。")]),_._v(" "),t("p",[_._v("因此，协程的开销远远小于线程的开销，也就没有了ContextSwitch上的开销。")]),_._v(" "),t("h3",{attrs:{id:"_1-4-3-协程和线程的比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-协程和线程的比较"}},[_._v("#")]),_._v(" 1.4.3 协程和线程的比较")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("比较项")]),_._v(" "),t("th",[_._v("线程")]),_._v(" "),t("th",[_._v("协程")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("占用资源")]),_._v(" "),t("td",[_._v("初始单位为1MB")]),_._v(" "),t("td",[_._v("固定不可变初始一般为 2KB，可随需要而增大调度")])]),_._v(" "),t("tr",[t("td",[_._v("所属")]),_._v(" "),t("td",[_._v("由 OS 的内核完成")]),_._v(" "),t("td",[_._v("由用户完成切换")])]),_._v(" "),t("tr",[t("td",[_._v("开销")]),_._v(" "),t("td",[_._v("涉及模式切换(从用户态切换到内核态)、16个寄存器、PC、SP...等寄存器的刷新等只有三个寄存器的值修改 - PC / SP / DX.性能问题资源占用太高，频繁创建销毁会带来严重的性能问题")]),_._v(" "),t("td",[_._v("资源占用小,不会带来严重的性能问题")])]),_._v(" "),t("tr",[t("td",[_._v("数据同步")]),_._v(" "),t("td",[_._v("需要用锁等机制确保数据的一直性和可见性")]),_._v(" "),t("td",[_._v("不需要多线程的锁机制，因为只有一个线程，也不存在同时写变量冲突，在协程中控制共享资源不加锁，只需要判断状态就好了，所以执行效率比多线程高很多。")])])])]),_._v(" "),t("h2",{attrs:{id:"_2-浏览器进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器进程"}},[_._v("#")]),_._v(" 2. 浏览器进程")]),_._v(" "),t("ul",[t("li",[_._v("浏览器都包含哪些进程？\n"),t("ul",[t("li",[_._v("一个浏览器进程——浏览器的主进程（负责协调、主控），主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")]),_._v(" "),t("li",[_._v("一个网络进程——页面的网络资源加载")]),_._v(" "),t("li",[_._v("插件进程——插件易崩溃故通过插件进程来隔离。")]),_._v(" "),t("li",[_._v("一个GPU进程——最多一个，用于3D绘制等，后来大众化，多层渲染")]),_._v(" "),t("li",[_._v("多个浏览器渲染进程（浏览器内核）（Renderer进程，内部是多线程的）——页面渲染，脚本执行，事件处理等，核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页；排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中；出于安全考虑，渲染进程都是运行在沙箱模式下。")])])])]),_._v(" "),t("p",[_._v("浏览器多进程的优势：")]),_._v(" "),t("ul",[t("li",[_._v("多进程模型提升了浏览器的稳定性、流畅性和安全性")])]),_._v(" "),t("p",[_._v("问题：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("更高的资源占用")]),_._v("：因为每个进程都会包含公共基础结构的副本（如 JavaScript 运行环境），这就意味着浏览器会消耗更多的内存资源。")]),_._v(" "),t("li",[t("strong",[_._v("更复杂的体系架构")]),_._v("：浏览器各模块之间耦合性高、扩展性差等问题，会导致现在的架构已经很难适应新的需求了。")])]),_._v(" "),t("h3",{attrs:{id:"_2-1-重点-浏览器渲染进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-重点-浏览器渲染进程"}},[_._v("#")]),_._v(" 2.1 重点：浏览器渲染进程")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190418215525459.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5NjY5ODA3,size_16,color_FFFFFF,t_70",alt:"image"}})]),_._v(" "),t("p",[_._v("GUI渲染线程")]),_._v(" "),t("ul",[t("li",[_._v("负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。")]),_._v(" "),t("li",[_._v("当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行")]),_._v(" "),t("li",[_._v("注意，GUI渲染线程与JS引擎线程是"),t("strong",[_._v("互斥")]),_._v("的，GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。")])]),_._v(" "),t("p",[_._v("JS引擎线程")]),_._v(" "),t("ul",[t("li",[_._v("JS引擎一直等待着任务队列中任务的到来，然后加以处理，一个Tab页（renderer进程）只有一个JS线程")]),_._v(" "),t("li",[_._v("阻塞页面渲染。")])]),_._v(" "),t("p",[_._v("事件触发线程")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("属于浏览器")]),_._v("，用来控制事件循环（JS引擎自己都忙不过来，需要浏览器另开线程协助）")]),_._v(" "),t("li",[_._v("当JS引擎执行代码块如setTimeOut时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中")])]),_._v(" "),t("p",[_._v("定时触发器线程")]),_._v(" "),t("ul",[t("li",[_._v("setInterval与setTimeout所在线程")]),_._v(" "),t("li",[_._v("不是由JavaScript引擎计数,因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时")]),_._v(" "),t("li",[_._v("因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）")]),_._v(" "),t("li",[_._v("注意，规定要求setTimeout中低于4ms的时间间隔算为4ms。0也是4ms。")])]),_._v(" "),t("p",[_._v("异步http请求线程")]),_._v(" "),t("ul",[t("li",[_._v("在XMLHttpRequest在连接后是通过浏览器新开一个线程请求")]),_._v(" "),t("li",[_._v("将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。")])]),_._v(" "),t("h3",{attrs:{id:"_2-2-js的多线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-js的多线程"}},[_._v("#")]),_._v(" 2.2 JS的多线程")]),_._v(" "),t("p",[_._v("HTML5中支持了Web Worker。 解决JS对cpu密集型计算的难题，即阻塞页面。")]),_._v(" "),t("p",[_._v("Service Worker 是运行在浏览器背后的"),t("strong",[_._v("独立线程")]),_._v("，一般可以用来实现缓存功能。使用 Service Worker的话，传输协议必须为 "),t("strong",[_._v("HTTPS")]),_._v("。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。")]),_._v(" "),t("p",[_._v("创建Worker时，JS引擎向浏览器申请开一个子线程（子线程是浏览器开的，完全受主线程控制，而且不能操作DOM）")]),_._v(" "),t("p",[_._v("JS引擎线程与worker线程间通过特定的方式通信（postMessage API，需要通过序列化对象来与线程交互特定的数据）")]),_._v(" "),t("p",[_._v("Worker可以理解是浏览器给JS引擎开的外挂，专门用来解决那些大量计算问题。\n所以，如果有非常耗时的工作，请单独开一个Worker线程，这样不会影响JS引擎主线程，  只待计算出结果后，将结果通信给主线程即可。")]),_._v(" "),t("p",[_._v("再提一下"),t("strong",[_._v("SharedWorker")])]),_._v(" "),t("p",[_._v("WebWorker只属于某个页面，每一个Tab页就是一个render进程，浏览器创建一个新的线程来运行Worker中的JavaScript程序。")]),_._v(" "),t("p",[_._v("SharedWorker是浏览器所有页面共享的，可以为多个Render进程共享使用。\n所以Chrome浏览器为SharedWorker单独创建一个进程来运行JavaScript程序。")]),_._v(" "),t("p",[t("strong",[_._v("SharedWorker由独立的进程管理，WebWorker只是属于render进程下的一个线程")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"_2-3-实现浏览器内多个标签页之间的通信-中介者转发。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-实现浏览器内多个标签页之间的通信-中介者转发。"}},[_._v("#")]),_._v(" 2.3 实现浏览器内多个标签页之间的通信?中介者转发。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("使用 websocket 协议")]),_._v("，因为 websocket 协议可以实现服务器推送，所以服务器就可以用来当做这个中介者。标签页通过向服务器发送数据，然后由服务器向其他标签页推送转发。")]),_._v(" "),t("li",[t("strong",[_._v("使用 ShareWorker 的方式")]),_._v("，shareWorker 会在页面存在的生命周期内创建一个唯一的线程，并且开启多个页面也只会使用同一个线程。这个时候共享线程就可以充当中介者的角色。标签页间通过共享一个线程，然后通过这个共享的线程来实现数据的交换。")]),_._v(" "),t("li",[t("strong",[_._v("使****用 localStorage 的方式")]),_._v("，我们可以在一个标签页对 localStorage 的变化事件进行监听，然后当另一个标签页修改数据的时候，我们就可以通过这个监听事件来获取到数据。这个时候 localStorage 对象就是充当的中介者的角色。")]),_._v(" "),t("li",[t("strong",[_._v("使用 postMessage 方法")]),_._v("，如果我们能够获得对应标签页的引用，就可以使用postMessage 方法，进行通信。")])]),_._v(" "),t("h3",{attrs:{id:"_2-2-browser进程和浏览器内核-renderer进程-的通信过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-browser进程和浏览器内核-renderer进程-的通信过程"}},[_._v("#")]),_._v(" 2.2 Browser进程和浏览器内核（Renderer进程）的通信过程")]),_._v(" "),t("h3",{attrs:{id:"_2-3-浏览器内核中线程之间的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-浏览器内核中线程之间的关系"}},[_._v("#")]),_._v(" 2.3 浏览器内核中线程之间的关系")])])}),[],!1,null,null,null);v.default=a.exports}}]);