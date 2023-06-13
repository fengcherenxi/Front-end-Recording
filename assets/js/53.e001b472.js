(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{635:function(v,_,e){"use strict";e.r(_);var t=e(17),l=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("目录：")]),v._v(" "),e("ul",[e("li",[v._v("使用 Object.defineProperty() 来进行数据劫持有什么缺点？")]),v._v(" "),e("li",[v._v("Vue template 到 render 的过程")]),v._v(" "),e("li",[v._v("3.MVVM、MVC、MVP的区别")]),v._v(" "),e("li",[v._v("4.v-if、v-show、v-html")]),v._v(" "),e("li",[v._v("5.data为什么是一个函数而不是对象")]),v._v(" "),e("li",[v._v("6.SPA 单页面 && MPA")]),v._v(" "),e("li",[v._v("7.React && Vue")])]),v._v(" "),e("h2",{attrs:{id:"_2-使用-object-defineproperty-来进行数据劫持有什么缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-object-defineproperty-来进行数据劫持有什么缺点"}},[v._v("#")]),v._v(" 2. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？")]),v._v(" "),e("ul",[e("li",[v._v("有些操作无法拦截：通过下标方式修改数组数据或者给对象新增属性，对于数组而言，大部分操作都是拦截不到的，只是 Vue 内部通过重写函数的方式解决了这个问题。")]),v._v(" "),e("li",[v._v("Vue3.0中不再使用，用 Proxy 对对象进行代理，好处是可监听到任何方式的数据改变。")])]),v._v(" "),e("h2",{attrs:{id:"_8-data-某属性值改变视图会立即同步执行重新渲染吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-data-某属性值改变视图会立即同步执行重新渲染吗"}},[v._v("#")]),v._v(" 8. data 某属性值改变视图会立即同步执行重新渲染吗？")]),v._v(" "),e("p",[v._v("不会。")]),v._v(" "),e("p",[v._v("响应式不是数据发生变后 DOM 立变。更新DOM是异步执行。侦听到数据变化，将开启队列，并缓冲在同一事件循环中发生的所有数据变更。\n若一个watcher多次触发，只会被推入到队列中一次。这种在缓冲时去重可避免不必要计算和 DOM 操作。然后，在下一个的事件循环tick中，刷新队列并执行已去重的工作。")]),v._v(" "),e("h2",{attrs:{id:"_3-mvvm、mvc、mvp的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-mvvm、mvc、mvp的区别"}},[v._v("#")]),v._v(" 3. MVVM、MVC、MVP的区别")]),v._v(" "),e("p",[v._v("三种常见的软件架构设计模式，主要通过分离关注点的方式来组织代码结构，优化开发效率。")]),v._v(" "),e("p",[v._v("在开发单页面应用时，往往一个路由页面对应了一个脚本文件，所有的页面逻辑都在一个脚本文件里。渲染、数据的获取、事件的响应所有的应用逻辑都混合在一起，如果项目变得复杂，文件就会变得冗长、混乱。")]),v._v(" "),e("h3",{attrs:{id:"_3-1-mvc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-mvc"}},[v._v("#")]),v._v(" 3.1 MVC")]),v._v(" "),e("p",[v._v("MVC 分离 Model、View 和 Controller 组织代码。")]),v._v(" "),e("ul",[e("li",[v._v("View 页面显示逻辑")]),v._v(" "),e("li",[v._v("Model 业务数据和操作。当 Model 层改变时通知 View 层更新。")]),v._v(" "),e("li",[v._v("Controller 层是二者的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互时，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。")])]),v._v(" "),e("h3",{attrs:{id:"_3-2-mvvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-mvvm"}},[v._v("#")]),v._v(" 3.2 MVVM")]),v._v(" "),e("p",[v._v("MVVM 分为 Model、View、ViewModel：")]),v._v(" "),e("ul",[e("li",[v._v("Model代表数据模型；")]),v._v(" "),e("li",[v._v("View代表UI视图；")]),v._v(" "),e("li",[v._v("ViewModel负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；")])]),v._v(" "),e("p",[v._v("Model和View通过ViewModel联系，Model和ViewModel双向数据绑定。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。")]),v._v(" "),e("p",[v._v("实现了 Model和View的数据自动同步，只需要专注于数据的维护操作即可，"),e("strong",[v._v("不需要自己操作DOM")]),v._v("。")]),v._v(" "),e("p",[v._v("优点:")]),v._v(" "),e("ul",[e("li",[v._v("分离View和Model，低代码耦合，提⾼视图或者逻辑的重⽤性")]),v._v(" "),e("li",[v._v("提⾼可测试性: ViewModel的存在可以帮助开发者更好地编写测试代码")]),v._v(" "),e("li",[v._v("⾃动更新dom: 利⽤双向绑定,数据更新后视图⾃动更新。")])]),v._v(" "),e("p",[v._v("缺点:")]),v._v(" "),e("ul",[e("li",[v._v("Bug很难被调试: 当看到界⾯异常了，有可能是你View的代码有Bug，也可能是Model的代码有问题。另外，数据绑定的声明是指令式地写在View的模版中，没办法去打断点debug的")]),v._v(" "),e("li",[v._v("⼀个⼤的模块中model也会很⼤，当⻓期持有不释放内存就造成了花费更多的内存")]),v._v(" "),e("li",[v._v("对于⼤型的图形应⽤程序，视图状态较多，ViewModel的构建和维护的成本都会⽐较⾼。")])]),v._v(" "),e("h3",{attrs:{id:"_3-3-mvp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-mvp"}},[v._v("#")]),v._v(" 3.3 MVP")]),v._v(" "),e("p",[v._v("MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller。")]),v._v(" "),e("ul",[e("li",[v._v("在 MVC 模式中使用观察者模式，当 Model 层数据变化时，通知 View 层更新。这样 View 层和 Model 层耦合在一起，当项目逻辑变得复杂的时候代码混乱，对代码的复用性造成问题。")]),v._v(" "),e("li",[v._v("MVP 的模式通过使用 Presenter 来实现对 View 层和 Model 层的解耦。MVC 中的Controller 只知道 Model 的接口，因此它没有办法控制 View 层的更新，MVP 模式中，View 层的接口暴露给了 Presenter 因此可以在 Presenter 中将 Model 的变化和 View 的变化绑定在一起，以此来实现 View 和 Model 的同步更新。这样就实现了对 View 和 Model 的解耦，Presenter 还包含了其他的响应逻辑。")])]),v._v(" "),e("h2",{attrs:{id:"_4-v-if、v-show、v-html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-v-if、v-show、v-html"}},[v._v("#")]),v._v(" 4. v-if、v-show、v-html")]),v._v(" "),e("h3",{attrs:{id:"_4-1-概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-概述"}},[v._v("#")]),v._v(" 4.1 概述")]),v._v(" "),e("ul",[e("li",[v._v("v-if会调用addIfCondition方法，生成vnode的时候会忽略对应节点，render的时候就不会渲染；")]),v._v(" "),e("li",[v._v("v-show会生成vnode，render的时候也会渲染成真实节点，只是在render过程中会在节点的属性中修改show属性值，也就是常说的display；")]),v._v(" "),e("li",[v._v("v-html会先移除节点下的所有节点，调用html方法，通过addProp添加innerHTML属性，归根结底还是设置innerHTML为v-html的值。")])]),v._v(" "),e("h3",{attrs:{id:"_4-2-v-if和v-show的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-v-if和v-show的区别"}},[v._v("#")]),v._v(" 4.2 v-if和v-show的区别")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("手段")]),v._v("：v-if是添加或者删除DOM元素；v-show是设置DOM的display样式属性；")]),v._v(" "),e("li",[e("strong",[v._v("编译过程")]),v._v("：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show基于css；")]),v._v(" "),e("li",[e("strong",[v._v("编译条件")]),v._v("：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译; v-show是在任何条件下，无论首次条件是否为真，都被编译，然后被缓存，而且DOM元素保留；")]),v._v(" "),e("li",[e("strong",[v._v("性能消耗")]),v._v("：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；")]),v._v(" "),e("li",[e("strong",[v._v("使用场景")]),v._v("：v-if适合运营条件不大可能改变；v-show适合频繁切换。")])]),v._v(" "),e("h2",{attrs:{id:"_5-data为什么是一个函数而不是对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-data为什么是一个函数而不是对象"}},[v._v("#")]),v._v(" 5. data为什么是一个函数而不是对象")]),v._v(" "),e("p",[v._v("Vue中想要复用组件就需要每个组件有自己的数据，相互之间不干扰。\n故不能写成对象的形式，要写成函数形式。数据以函数返回值的形式定义，这样当每次复用组件返回一个新的data，即组件都有私有数据空间。")]),v._v(" "),e("p",[v._v("设计思想：")]),v._v(" "),e("ul",[e("li",[v._v("整体是一个闭包，让每一个组件都有自己的私有作用域，确保各组件之间不会相互干扰")]),v._v(" "),e("li",[v._v("因此如果设置为obj的形式，各组件的数据会相互干扰")])]),v._v(" "),e("h2",{attrs:{id:"_6-spa-单页面-mpa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-spa-单页面-mpa"}},[v._v("#")]),v._v(" 6. SPA 单页面 && MPA")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。页面加载完成 SPA 不会因为用户的操作而进行页面的重新加载或跳转；而是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。")])]),v._v(" "),e("li",[e("p",[v._v("MPA多页面应用 （MultiPage Application），指有多个独立页面的应用，每个页面必须重复加载js、css等相关资源。多页应用跳转，需要整页资源刷新。")])])]),v._v(" "),e("p",[e("strong",[v._v("优点：")])]),v._v(" "),e("ul",[e("li",[v._v("用户体验好、快，内容的改变不需要重新加载整个页面，避免了跳转和重复渲染；对服务器压力小；")]),v._v(" "),e("li",[v._v("职责分离，前端进行交互逻辑，后端负责数据处理；")])]),v._v(" "),e("p",[e("strong",[v._v("缺点：")])]),v._v(" "),e("ul",[e("li",[v._v("初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；")]),v._v(" "),e("li",[v._v("前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；")]),v._v(" "),e("li",[v._v("SEO ：所有的内容都在一个页面中动态显示，不利于SEO。")])]),v._v(" "),e("p",[v._v("改进SEO——进行服务端渲染，也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端。")]),v._v(" "),e("p",[v._v("优势：")]),v._v(" "),e("ul",[e("li",[v._v("更好的SEO")]),v._v(" "),e("li",[v._v("首屏加载速度更快")])]),v._v(" "),e("p",[v._v("缺点：")]),v._v(" "),e("ul",[e("li",[v._v("开发条件会受到限制，服务器端渲染只支持beforeCreate和created两个钩子；")]),v._v(" "),e("li",[v._v("当需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境；")]),v._v(" "),e("li",[v._v("更多的服务端负载。")])]),v._v(" "),e("p",[e("img",{attrs:{src:"img/6-Vue%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8%E4%B8%8E%E5%A4%9A%E9%A1%B5%E5%BA%94%E7%94%A8%E7%9A%84%E5%8C%BA%E5%88%AB.png",alt:"image"}})])])}),[],!1,null,null,null);_.default=l.exports}}]);