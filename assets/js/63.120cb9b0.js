(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{645:function(t,v,s){"use strict";s.r(v);var e=s(17),_=Object(e.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"自定义事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义事件"}},[t._v("#")]),t._v(" 自定义事件")]),t._v(" "),s("p",[t._v("给组件使用：\nJS内的事件是给html元素使用的，自定义事件是给组件使用的——因此叫做组件自定义事件")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("一种组件间通信方式，适用于：子组件向父组件通信")])]),t._v(" "),s("li",[s("p",[t._v("子绑定自定义事件，事件回调在父中")])]),t._v(" "),s("li",[s("p",[t._v("绑定自定义事件：")]),t._v(" "),s("ul",[s("li",[t._v("第一种：在父组件中使用@或v-on给子组件绑定自定义事件")]),t._v(" "),s("li",[t._v("第二种：使用ref+mounted挂载——实现功能比较灵活如：等三秒后挂载事件\n"),s("img",{attrs:{src:"img/image-20220119142504626.png",alt:"image-20220119142504626"}})]),t._v(" "),s("li",[t._v("若想让事件触发一次，可以使用once")])])]),t._v(" "),s("li",[s("p",[t._v("触发自定义事件：this.emit('atguigu',数据)")])]),t._v(" "),s("li",[s("p",[t._v("解绑自定义事件：this.$off('atguigu')")])]),t._v(" "),s("li",[s("p",[t._v("销毁当前Student组件的实例，销毁后所有Student实例的自定义事件都不奏效,dom原生事件不受影响")])]),t._v(" "),s("li",[s("p",[t._v("通过red绑定自定义事件的时候，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题（this指向了子组件）")])]),t._v(" "),s("li",[s("p",[t._v("组件不能直接绑定原生事件，会被直接认为是自定义事件，要绑定原生事件，需要加.native")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@click.native//将这个事件交给组件最外侧的div——组件不可以写两个根元素\n")])])]),s("h2",{attrs:{id:"全局事件总线-任意组件之间的通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局事件总线-任意组件之间的通信"}},[t._v("#")]),t._v(" 全局事件总线：任意组件之间的通信")]),t._v(" "),s("p",[t._v("通过自定义组件事件，实现任意组件之间的通信")]),t._v(" "),s("p",[t._v("x作为中间人的要求：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("所有组件都能看到它（才能完成任意组件间的互通代理）")])]),t._v(" "),s("li",[s("p",[t._v("能够调用$on/$off/$ref")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"img/image-20220121165554536.png",alt:"image-20220121165554536"}}),t._v("\n满足要求的：")]),t._v(" "),s("ul",[s("li",[t._v("windows身上添加x")]),t._v(" "),s("li",[t._v("修改源码")]),t._v(" "),s("li",[t._v("在vm或vc实例身上加")])]),t._v(" "),s("p",[t._v("通用写法：")]),t._v(" "),s("ul",[s("li",[t._v("安装全局事件总线:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("new Vue({\n  ......\n  beforeCreate(){\n    Vue.prototype.$bus = this //安装全局总线，$bus就是当前应用的vm\n  }\n  ......\n})\n")])])]),s("ul",[s("li",[t._v("使用全局总线：\n"),s("ul",[s("li",[t._v("接收数据：A组件接收数据，就在A组件中给$bus绑定自定义事件，事件的回调在A组件身上")])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("methods(){\n  demo(data){......}\n}\n......\nmounted(){\n  this.$bus.$on('***',this.demo)\n}\n")])])]),s("ul",[s("li",[t._v("提供数据：this.$bus.$emit('***',数据)")])]),t._v(" "),s("ul",[s("li",[t._v("最好在beforeDestory钩子中，用$off解绑当前组件用到的事件")])]),t._v(" "),s("h2",{attrs:{id:"消息订阅与发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息订阅与发布"}},[t._v("#")]),t._v(" 消息订阅与发布")]),t._v(" "),s("p",[t._v("使用消息订阅与发布的第三方库（库的选择很多样化，没有单一标准或限制，这里以pubsub-js为例，任何框架都可以使用）")]),t._v(" "),s("ul",[s("li",[t._v("安装："),s("code",[t._v("npm i pubsub-js")])]),t._v(" "),s("li",[t._v("引入：在使用的组件中引用"),s("code",[t._v("import pubsub from 'pubsub.js'")])]),t._v(" "),s("li",[t._v("挂载-订阅消息："),s("code",[t._v("this.pubId=pubsub.subscribe('消息名',回调函数(参数1:消息名,参数2:传递的消息data))")])]),t._v(" "),s("li",[t._v("methods中发布消息："),s("code",[t._v("pubsub.publish('消息名',回调函数的参数data传递回去)")])]),t._v(" "),s("li",[t._v("beforeDestroy：取消订阅"),s("code",[t._v("pubsub.unsubscribe(this.pubId)")])]),t._v(" "),s("li",[t._v("注意:\n"),s("ul",[s("li",[t._v("pubsub第三方库中的this指向问题，相当于全局事件总线的思想——找了共同信息代理人")]),t._v(" "),s("li",[t._v("相比之下用全局事件总线更方便一些")])])])])])}),[],!1,null,null,null);v.default=_.exports}}]);