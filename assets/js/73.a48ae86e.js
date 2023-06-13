(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{653:function(t,s,a){"use strict";a.r(s);var v=a(17),r=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"底部导航公共组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#底部导航公共组件"}},[t._v("#")]),t._v(" 底部导航公共组件")]),t._v(" "),a("ul",[a("li",[t._v("底部导航提取公共组件")]),t._v(" "),a("li",[t._v("iconfont 添加导航栏字体图标")]),t._v(" "),a("li",[t._v("根据不同路由来显示隐藏底部菜单\n"),a("ul",[a("li",[t._v("根据路由中的meta值来确定是否隐藏")])])]),t._v(" "),a("li",[t._v("公用头部提取组件")]),t._v(" "),a("li",[t._v("接口提取以及接口文档的介绍\n"),a("ul",[a("li",[t._v("了解post、put、get等请求的区别")])])])]),t._v(" "),a("h2",{attrs:{id:"登陆注册页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登陆注册页面"}},[t._v("#")]),t._v(" 登陆注册页面")]),t._v(" "),a("ul",[a("li",[t._v("前端鉴权方式\n"),a("ul",[a("li",[t._v("cookie ：\n"),a("ul",[a("li",[t._v("在前端的领域里 cookie 用于存储变量。在前端请求网络资源或是后端接口时，请求头 Headers 里都会带上当前域下的 cookie 信息，服务端通过检测请求头内的 cookie 判断当前用户的登录状态是否过期，或是 cookie 是否错误，来判断当前用户是否能成功返回响应。")]),t._v(" "),a("li",[t._v("前端请求登录接口，后端验证用户名和密码是否正确。在正确的情况下服务端 Set-Cookie ，参数大致是域名、有效时间、secure (是否 HTTPS ) 等，种下 cookie 之后，浏览器就会在指定域下添加相应的 cookie 信息。")])])]),t._v(" "),a("li",[t._v("token\n"),a("ul",[a("li",[t._v("没有浏览器环境，那就没有种 cookie 的环境，用户状态如何维护？")]),t._v(" "),a("li",[t._v("Token 是服务器生成的一串随机字符串或者一个 json 串，用于客户端进行资源请求的令牌。")]),t._v(" "),a("li",[t._v("当我们调用登录接口之后，服务端返回给前端一个 Token ，之后存储 Token 到本地环境，每次前端请求接口的时候，都需要在请求头里带上 Token 信息，并且 Token 可以在服务端设置过期时间。Token 过期之后，前端在请求失败回调 406（前后端协商好错误码）之后重新跳转到登录界面进行鉴权。")]),t._v(" "),a("li",[t._v("本次使用 Token 的形式进行用户信息鉴权。——原生APP和小程序没有浏览器的环境")])])])])]),t._v(" "),a("li",[t._v("前端本地存储\n"),a("ul",[a("li",[t._v("localStorage")])])]),t._v(" "),a("li",[t._v("登录注册页面\n"),a("ul",[a("li",[t._v("验证码组件 Verify 需要提前通过 npm install vue2-verify 安装好")]),t._v(" "),a("li",[t._v("登录的密码需要 md5 加密，所以还需要提前安装好 npm install js-md5")])])]),t._v(" "),a("li",[t._v("用户中心「我的」页面\n"),a("ul",[a("li",[t._v("编写完静态页面之后，我们需要请求数据，将用户的个人信息通过接口获取到再渲染至页面。")])])])]),t._v(" "),a("h2",{attrs:{id:"首页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首页"}},[t._v("#")]),t._v(" 首页")]),t._v(" "),a("ul",[a("li",[t._v("首页排版布局")]),t._v(" "),a("li",[t._v("首页顶部搜索框\n"),a("ul",[a("li",[t._v("通过获取本地的 token 信息判断用户是否处于登录状态，若是没有，顶部右侧将通过 v-if 显示隐藏不同的状态。")]),t._v(" "),a("li",[t._v("加入监听scroll事件，当轮播图被滚动到页面可是区域以外时，让搜索框背景变成我们商城的主题色，这样就显得不会那么突兀。")])])]),t._v(" "),a("li",[t._v("轮播图——使用vant组件\n"),a("ul",[a("li",[t._v("我们将轮播组件抽离为公共组件，在 src/components 下新建一个文件 Swiper.vue ，记得去 main.js 注册轮播图组件，否则代码中引用会提示错误。")])])]),t._v(" "),a("li",[t._v("中部分类栏目——使用了icon图标")]),t._v(" "),a("li",[t._v("新品上线、热门商品、最新推荐\n"),a("ul",[a("li",[t._v("首页的商品介绍通过 flex 实现左右两列布局，数据同样从 getHome 里获取")]),t._v(" "),a("li",[t._v("三个重复的组件，考虑怎么合并优化")])])])]),t._v(" "),a("h2",{attrs:{id:"better-scroll组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#better-scroll组件"}},[t._v("#")]),t._v(" better-scroll组件：")]),t._v(" "),a("ul",[a("li",[t._v("在 components文件夹下创建 ListScroll组件，将滚动组件以容器的形式抛出，滚动组件内部的内容以solt插槽的形式展示")]),t._v(" "),a("li",[t._v("经典的 better-scroll 组件，该组件被大量用于列表滚动场景，它能让滚动做到丝般柔滑。")]),t._v(" "),a("li",[t._v("在使用外部公共组件的时候，一定不要忘记注册组件")]),t._v(" "),a("li",[t._v("categories分类接口返回三级数据")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://app.yinxiang.com/files/common-services/binary-datas/c2VydmljZVR5cGU9MiZzZXJ2aWNlRGF0YT17Im5vdGVHdWlkIjoiODVhZWQ0OTgtNDc3OC00NWZhLWI3OGMtYzk3MzQ1NDk2MzYyIiwicmVzb3VyY0d1aWQiOiI5NDM4MjZmZC00OGQwLTRhZjItYmMyOS05NDc2ODIyNjRmYjAifQ==",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"商品列表页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#商品列表页面"}},[t._v("#")]),t._v(" 商品列表页面")]),t._v(" "),a("ul",[a("li",[t._v("下拉刷新及无限滚动加载运用到了新蜂商城的商品搜索列表页中")]),t._v(" "),a("li",[t._v("在移动端的世界里，“滚动加载更多”这样的场景，十分常见。只要是遇到列表页面，多数都是需要加载分页，而在移动端页面，放置分页器这样的组件是不合适也不美观。")]),t._v(" "),a("li",[a("van-pull-refresh"),t._v("：van-pull-refresh 组件监听页面下拉时触发 onRefresh 方法，此时 refreshing 设置为 true 时，进入 onLoad 方法，将 productList 变量置空。这里需要重新请求数据，所以不置空 productList 变量的话，会在它的基础上拼接第一页的数据，这样就达不到我们重新刷新列表的目的，数据也会因此而错乱。 \n")],1)]),t._v(" "),a("h2",{attrs:{id:"商品详情页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#商品详情页面"}},[t._v("#")]),t._v(" 商品详情页面")]),t._v(" "),a("ul",[a("li",[t._v("购物车的数量需要通过全局状态去管理，因为我们在很多地方需要用到它。交付给Vuex全局状态管理来管理。\n"),a("img",{attrs:{src:"https://app.yinxiang.com/files/common-services/binary-datas/c2VydmljZVR5cGU9MiZzZXJ2aWNlRGF0YT17Im5vdGVHdWlkIjoiODVhZWQ0OTgtNDc3OC00NWZhLWI3OGMtYzk3MzQ1NDk2MzYyIiwicmVzb3VyY0d1aWQiOiJiMTU5MTY0YS04OGU2LTQ1MjMtYTNiYS0wNTg1ZTA0MTk1OTkifQ==",alt:""}})]),t._v(" "),a("li",[t._v("异步请求：在src/store下新建actions.js.\nactions.js 中的方法可以通过在页面中执行 this.$store.dispatch(xxx) 来执行")]),t._v(" "),a("li",[t._v("在index.js中初始化 Store后，此时在全局 this 下就会多了一个 $store 属性，在任何页面中都能愉快的使用。")]),t._v(" "),a("li",[t._v("computed 计算属性，通过监听 this.$store.state.cartCount 的变化来实时更改购物车数量。")])]),t._v(" "),a("h2",{attrs:{id:"购物车页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#购物车页面"}},[t._v("#")]),t._v(" 购物车页面")]),t._v(" "),a("h3",{attrs:{id:"需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),a("ul",[a("li",[t._v("在商品详情页中我们可以点击底部按钮 「加入购物车」，将相应的商品通过后端接口添加至购物列表中。当我们点击底部「购物车」Tab，就会进入购物车页面")]),t._v(" "),a("li",[t._v("页面需要的功能：\n"),a("ul",[a("li",[t._v("基础页面展示")]),t._v(" "),a("li",[t._v("购物项列表展示")]),t._v(" "),a("li",[t._v("购物项数量修改")]),t._v(" "),a("li",[t._v("购物项删除")]),t._v(" "),a("li",[t._v("购物项选择操作")]),t._v(" "),a("li",[t._v("结算功能")])])])]),t._v(" "),a("h3",{attrs:{id:"代码逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码逻辑"}},[t._v("#")]),t._v(" 代码逻辑")]),t._v(" "),a("ul",[a("li",[t._v("购物项列表展示：\n"),a("ul",[a("li",[t._v("购物车商品列表通过getCart接口获取")])])]),t._v(" "),a("li",[t._v("购物车项数量展示\n"),a("ul",[a("li",[t._v("通过计算属性 computed 监听购物车商品列表的被勾选情况，动态的变化合计金额。")]),t._v(" "),a("li",[t._v("变量 result 用于记录已选中的商品 id，我们利用它结合 computed 属性，来动态计算价格变量。")])])]),t._v(" "),a("li",[t._v("购物项删除\n"),a("ul",[a("li",[t._v("单项商品左滑，调出 Vant 组件为我们写好的删除选项")])])]),t._v(" "),a("li",[t._v("购物项选择操作\n"),a("ul",[a("li",[t._v("勾选「全选」，选中所有购物车商品并计算出总价，勾掉「全选」商品，则取消选择且合计金额清零。联想todoList案例。")]),t._v(" "),a("li",[t._v("加一个空状态页面，当购物车为空时显示，同时放置一个跳转按钮，点击跳转至商城首页")])])]),t._v(" "),a("li",[t._v("结算功能\n"),a("ul",[a("li",[t._v("点击「结算」按钮，我们将会调用前往订单生成页面")])])])]),t._v(" "),a("p",[t._v("Vant 组件：")]),t._v(" "),a("p",[t._v("Vant中文教程：https://www.w3cschool.cn/vantlesson/vantlesson-5c9x35vt.html")]),t._v(" "),a("ul",[a("li",[t._v("SwipeCell——SwipeCell组件提供了left和right两个插槽，用于定义两侧滑动区域的内容")]),t._v(" "),a("li",[t._v("CheckboxGroup—— 通过CheckboxGroup实例上的toggleAll方法可以实现全选与反选")]),t._v(" "),a("li",[t._v("Checkbox")]),t._v(" "),a("li",[t._v("SubmitBar")]),t._v(" "),a("li",[t._v("Stepper——步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字")])]),t._v(" "),a("h2",{attrs:{id:"确定订单页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确定订单页面"}},[t._v("#")]),t._v(" 确定订单页面")]),t._v(" "),a("h3",{attrs:{id:"需求-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求-2"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),a("ul",[a("li",[t._v("购物车页面中选择自己需要的商品之后，点击结算按钮即可跳转至生产订单页面")]),t._v(" "),a("li",[t._v("若没有地址，自动跳转到新增地址页面，如有默认地址，显示当前默认收货人和购买的商品")]),t._v(" "),a("li",[t._v("新增地址页面负责添加用户姓名、地址等基本信息")]),t._v(" "),a("li",[t._v("进行“提交订单”的操作")])]),t._v(" "),a("h3",{attrs:{id:"代码逻辑-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码逻辑-2"}},[t._v("#")]),t._v(" 代码逻辑")]),t._v(" "),a("ul",[a("li",[t._v("头部")]),t._v(" "),a("li",[t._v("显示地址等信息\n"),a("ul",[a("li",[t._v("异步获取地址信息，和获取id一个思路")]),t._v(" "),a("li",[t._v("第一种是进入确认订单页面时，直接获取默认的地址接口，前提条件是地址列表设置了默认地址，否则直接返回一个空数据。")]),t._v(" "),a("li",[t._v("第二种则是从地址栏页面选择一个地址，跳回确认订单页面。此时链接会带上当前所选地址的 id，在确认订单页面获取到此 id，并根据 id 获取对应的地址详情，渲染页面。")])])]),t._v(" "),a("li",[t._v("商品信息展示\n"),a("ul",[a("li",[t._v("在购物车页面中，点击「结算」按钮，跳转的地址就是生成订单页面地址，并且我们在地址栏携带了查询字符串，方面生成商品信息")]),t._v(" "),a("li",[t._v("异步获取商品的id信息，id 会本地存储，如果查询字符串 id 优先获取，若没有则获取本地存储的 ids")])])]),t._v(" "),a("li",[t._v("总额\n"),a("ul",[a("li",[t._v("利用compute属性计算总价格")])])]),t._v(" "),a("li",[t._v("生成订单按钮\n"),a("ul",[a("li",[t._v("使用vant组件")])])]),t._v(" "),a("li",[t._v("支付界面从底部弹出显示\n"),a("ul",[a("li",[t._v("使用vant的popup组件")])])])]),t._v(" "),a("h2",{attrs:{id:"地址栏管理页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地址栏管理页面"}},[t._v("#")]),t._v(" 地址栏管理页面")]),t._v(" "),a("h3",{attrs:{id:"需求-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求-3"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),a("ul",[a("li",[t._v("涉及到两个页面——地址栏列表和地址栏添加和编辑页面")])]),t._v(" "),a("h3",{attrs:{id:"地址栏列表页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地址栏列表页"}},[t._v("#")]),t._v(" 地址栏列表页")]),t._v(" "),a("ul",[a("li",[t._v('from 参数是浏览器地址上带的参数，如果我是从生产订单页面进入了选择地址的页面，那么是需要选择一个地址作为发货地址的，所以通过 v-if="from != \'mine’" 去展示有 select 方法的 van-address-list 组件。地址管理页面还有一个入口，那就是“我的”页面进入，只需要对地址栏进行增删改处理，所以就无须添加 select 方法去选择一个地址。')]),t._v(" "),a("li",[t._v("onAdd 和 onEdit 方法内对应的跳转路由 address-edit 都是同一个页面，通过浏览器地址传入 id 参数作为是编辑还是新增的判断依据")])]),t._v(" "),a("h3",{attrs:{id:"添加、编辑地址详情页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加、编辑地址详情页面"}},[t._v("#")]),t._v(" 添加、编辑地址详情页面")]),t._v(" "),a("ul",[a("li",[t._v("tdist.getLev1：获取地址栏第一级省级。")]),t._v(" "),a("li",[t._v("tdist.getLev2：获取地址栏第二级省级。")]),t._v(" "),a("li",[t._v("tdist.getLev3：获取地址栏第三级省级。")]),t._v(" "),a("li",[t._v("tdist.getLev1() 返回一个数组，通过 forEach 循环遍历，将省级数据的 id 作为键，省级数据的 text 作为值，赋值给 _province_list 变量。")]),t._v(" "),a("li",[t._v("在遍历省级的时候，通过省级 id 拿到当前省的市级数据 tdist.getLev2(p.id) ，再次通过 forEach 遍历，同样通过 _city_list[c.id] = c.text 方式将 id 和对应的 text 赋值给 _city_list 变量。县级同理")]),t._v(" "),a("li",[t._v("点击编辑进来之后，在地址那一栏是看不到默认数据的，需要解析出地址栏的 id 数据")]),t._v(" "),a("li",[t._v("因为 van-address-edit 组件的 address-info 属性，接收到县、区级的 code 编码就能显示对应的省市了。")])]),t._v(" "),a("h2",{attrs:{id:"我的订单页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的订单页面"}},[t._v("#")]),t._v(" 我的订单页面")]),t._v(" "),a("h3",{attrs:{id:"需求-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求-4"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),a("ul",[a("li",[t._v("订单页面分几个状态，分别是全部、待付款、待确认、待发货、已发货、交易完成几个状态。")]),t._v(" "),a("li",[t._v("所以顶部是一个可拖动的 tab-bar ，页面需要做成上拉加载更多的翻页形式，下面我们来制作订单页面。")])]),t._v(" "),a("h3",{attrs:{id:"我的订单页面制作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的订单页面制作"}},[t._v("#")]),t._v(" 我的订单页面制作")]),t._v(" "),a("ul",[a("li",[t._v("需要把之前创建的购物车创建订单流程跑通，我们先来添加订单相关的接口：创建订单、获取订单列表、根据id获取订单详情、取消订单、确认订单、支付接口")]),t._v(" "),a("li",[t._v("在购物车中点击「生成订单」按钮，调用 createOrder 接口，跳转至「我的订单」页面")]),t._v(" "),a("li",[t._v("这里再细说一下加载更多的处理方法，我采用的是 Vant 组件库自带的 van-pull-refresh 组件和 van-list 组件，当页面下拉触发 van-pull-refresh 组件的 refresh 事件时，重新获取列表数据；当页面下滑至滚动条与底部距离小于 offset 时，便会触发 onLoad 事件，加载下一页的数据拼接在之前的数据后面。")])]),t._v(" "),a("h3",{attrs:{id:"完善用户信息设置页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完善用户信息设置页面"}},[t._v("#")]),t._v(" 完善用户信息设置页面")]),t._v(" "),a("ul",[a("li",[t._v("修改个人信息页面以及退出登录等操作，统一把入口放在「我的」页面的「账号管理」")]),t._v(" "),a("li",[t._v("表单域：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input-item"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("van"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("field v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nickName"')]),t._v(" label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"昵称"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("van"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("field v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"introduceSign"')]),t._v(" label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"个性签名"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("van"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("field v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),t._v(" label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"修改密码"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ul",[a("li",[t._v("save button——负责将修改后的数据传参，在 services/user.js 下添加编辑用户信息接口")]),t._v(" "),a("li",[t._v("logout——添加退出登陆方法：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLocal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n")])])]),a("ul",[a("li",[t._v("在user页面添加路由跳转")])])])}),[],!1,null,null,null);s.default=r.exports}}]);