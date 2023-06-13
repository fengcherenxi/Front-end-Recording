(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{656:function(t,e,s){"use strict";s.r(e);var a=s(17),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"为什么要有hook-hook的出现解决了什么问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有hook-hook的出现解决了什么问题"}},[t._v("#")]),t._v(" 为什么要有hook，hook的出现解决了什么问题")]),t._v(" "),s("ul",[s("li",[t._v("使函数式组件可以有自己的状态，可以处理各种逻辑，而不是纯展示。")]),t._v(" "),s("li",[t._v("代码复用，以前类式组件用HOC，这样用着用着会导致嵌套很深问题，而自定义hook更简洁。")]),t._v(" "),s("li",[t._v("不用关注this问题，类式组件的this可不好理解")]),t._v(" "),s("li",[t._v("使代码逻辑更加合理，以前监听事件和卸载事件要分开生命周期些，而现在可以都写在同一个函数里。")]),t._v(" "),s("li",[t._v("hook能解决大部分业务场景问题。")])]),t._v(" "),s("h3",{attrs:{id:"_9种hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9种hook"}},[t._v("#")]),t._v(" 9种hook")]),t._v(" "),s("ul",[s("li",[t._v("useState —— 当我们使用 useState 定义 state 变量时候，它返回一个有两个值的数组。第一个值是当前的 state，第二个值是更新 state 的函数。")]),t._v(" "),s("li",[t._v("useEffect ——\n"),s("ul",[s("li",[t._v("第一个参数为函数，默认情况下在第一次渲染之后和每次更新之后都会执行。")]),t._v(" "),s("li",[t._v("第二个参数数组，指定了函数依赖项。只有该数组中的变量发生变化时，函数才会执行。")]),t._v(" "),s("li",[t._v("实现 componentDidUpdate 生命周期——在更新后会被立即调用，首次渲染不会执行此方法。\n"),s("ul",[s("li",[t._v("通过 useRef 实现一个判断是否是首次渲染的 Hook-useFirstMountState")]),t._v(" "),s("li",[t._v("借助 useFirstMountState 我们可以判断是否是页面首次渲染。那么仅需要在 Effect 中判断是否是首次更新即可")])])])])]),t._v(" "),s("li",[t._v("useContext(MyContext) —— 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context。\n"),s("ul",[s("li",[t._v("通过 React.createContext 创建 context 对象，在根组件中通过 Context.Provider 的 value 属性进行传递 username ，从而在对应子组件中使用 useContext(Context) 获取值。")])])]),t._v(" "),s("li",[t._v("useReducer——三个参数分别是 reducer 函数、初始值 initialArg 以及一个可选的惰性初始化的 init 函数。——实现对应加减动作的操作"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initialArg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("存在多种复杂状态管理时利用 reducer 函数根据不同 action 去派发状态更新。")]),t._v(" "),s("li",[t._v("useState和useReducer权衡使用")]),t._v(" "),s("li",[t._v("使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数")])])])]),t._v(" "),s("h2",{attrs:{id:"_1-为什么-usestate-要使用数组而不是对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么-usestate-要使用数组而不是对象"}},[t._v("#")]),t._v(" 1.为什么 useState 要使用数组而不是对象")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const [count, setCount] = useState(0)\n")])])]),s("p",[t._v("这里用到了解构赋值，所以先来看一下ES6 的解构赋值：")]),t._v(" "),s("ul",[s("li",[t._v("如果 useState 返回的是数组，那么使用者可以对数组中的元素命名，代码看起来也比较干净")]),t._v(" "),s("li",[t._v("如果 useState 返回的是对象，在解构对象的时候必须要和 useState 内部实现返回的对象同名，想要使用多次的话，必须得设置别名才能使用返回值")])]),t._v(" "),s("p",[t._v("下面来看看如果 useState 返回对象的情况：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 第一次使用\nconst { state, setState } = useState(false);\n// 第二次使用\nconst { state: counter, setState: setCounter } = useState(0) \n")])])]),s("p",[s("strong",[t._v("总结："),s("strong",[t._v("useState 返回的是 array 而不是 object 的原因就是为了")]),t._v("降低使用的复杂度")]),t._v("，返回数组的话可以直接根据顺序解构，而返回对象的话要想使用多次就需要定义别名了。")])])}),[],!1,null,null,null);e.default=n.exports}}]);