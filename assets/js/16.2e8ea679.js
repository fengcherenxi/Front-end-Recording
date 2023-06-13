(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{598:function(t,_,a){"use strict";a.r(_);var v=a(17),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-握手之前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-握手之前"}},[t._v("#")]),t._v(" 1.握手之前")]),t._v(" "),a("p",[t._v("TCP工作在传输层")]),t._v(" "),a("p",[t._v("IP地址+端口号就是——套接字socket")]),t._v(" "),a("h2",{attrs:{id:"_2-三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-三次握手"}},[t._v("#")]),t._v(" 2.三次握手")]),t._v(" "),a("p",[t._v("TCP报文中有SYN、ACK、FIN等标识；\n1即开启、0即关闭；")]),t._v(" "),a("h3",{attrs:{id:"_2-1-具体步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-具体步骤"}},[t._v("#")]),t._v(" 2.1 具体步骤：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://app.yinxiang.com/files/common-services/binary-datas/c2VydmljZVR5cGU9MiZzZXJ2aWNlRGF0YT17Im5vdGVHdWlkIjoiYTczN2EyMDYtODg2OC00NTNiLTlkZDktMjZmMjA4NzY5ZDQ5IiwicmVzb3VyY0d1aWQiOiI3Mjc3NjViMC1hYzhhLTRkMTUtODBjMS1hNTBkYTMyODc1OGMifQ==",alt:"三次握手"}})]),t._v(" "),a("ul",[a("li",[t._v("客户端——服务端：开启SYN（同步）+sequence序号（应用程序可能连续发送多个序号给服务器，服务器依据sequence序号判断哪些是累赘信息，序号是随机生成的，做为初始值来作为后续判断依据，保证了通道的唯一性）")]),t._v(" "),a("li",[t._v("服务端——客户端：SYN+ACK（确认）+sequence序号+确认号（对方的sequence+1得到，客户端接收到报文后-1就可以知道是不是自己发送的请求的响应）")]),t._v(" "),a("li",[t._v("客户端——服务端：ACK+序号（对方的确定号+1）+确认号（对方的序号+1）")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-其他"}},[t._v("#")]),t._v(" 2.2 其他")]),t._v(" "),a("p",[t._v("典型的DDos攻击：如果黑客不断向服务器发送SYN请求且不确认，服务器就要记住保存很多自己的的序列号——因此服务器根据自己的IP地址和端口号等私有信息进行算法运算的到自己的序号。")]),t._v(" "),a("p",[t._v("三次握手可以根据控制位区分进行到哪一步，也可以通过发送的序号、确认号来区分。")]),t._v(" "),a("h2",{attrs:{id:"_3-握手后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-握手后"}},[t._v("#")]),t._v(" 3.握手后")]),t._v(" "),a("p",[t._v("建立了连接，发送请求和响应请求\n中间每想回沟通一次对应的序号和确认号+1")]),t._v(" "),a("h2",{attrs:{id:"_4-四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-四次挥手"}},[t._v("#")]),t._v(" 4.四次挥手")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://app.yinxiang.com/files/common-services/binary-datas/c2VydmljZVR5cGU9MiZzZXJ2aWNlRGF0YT17Im5vdGVHdWlkIjoiYTczN2EyMDYtODg2OC00NTNiLTlkZDktMjZmMjA4NzY5ZDQ5IiwicmVzb3VyY0d1aWQiOiI0MGY3NjcyNS0xNGNlLTQxMTQtYmYzZS00N2Y1MmY3NmQ4OWMifQ==",alt:"四次挥手"}})]),t._v(" "),a("p",[t._v("为什么需要四次挥手，因为服务器端可能还存在没法送完的数据")]),t._v(" "),a("h2",{attrs:{id:"_5-tcp和udp的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-tcp和udp的区别"}},[t._v("#")]),t._v(" 5.TCP和UDP的区别")]),t._v(" "),a("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid=418245176&bvid=BV1kV411j7hA&cid=343076847&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}),t._v(" "),a("h3",{attrs:{id:"_5-1-tcp和udp的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-tcp和udp的区别"}},[t._v("#")]),t._v(" 5.1 TCP和UDP的区别")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("UDP")]),t._v(" "),a("th",[t._v("TCP")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("是否连接")]),t._v(" "),a("td",[t._v("无连接")]),t._v(" "),a("td",[t._v("面向连接")])]),t._v(" "),a("tr",[a("td",[t._v("是否可靠")]),t._v(" "),a("td",[t._v("不可靠传输，不使用流量控制和拥塞控制")]),t._v(" "),a("td",[t._v("可靠传输（数据顺序和正确性），使用流量控制和拥塞控制")])]),t._v(" "),a("tr",[a("td",[t._v("连接对象个数")]),t._v(" "),a("td",[t._v("支持一对一，一对多，多对一和多对多交互通信")]),t._v(" "),a("td",[t._v("只能是一对一通信")])]),t._v(" "),a("tr",[a("td",[t._v("传输方式")]),t._v(" "),a("td",[t._v("面向报文")]),t._v(" "),a("td",[t._v("面向字节流")])]),t._v(" "),a("tr",[a("td",[t._v("首部开销")]),t._v(" "),a("td",[t._v("首部开销小，仅8字节")]),t._v(" "),a("td",[t._v("首部最小20字节，最大60字节")])]),t._v(" "),a("tr",[a("td",[t._v("适用场景")]),t._v(" "),a("td",[t._v("适用于实时应用，例如视频会议、直播")]),t._v(" "),a("td",[t._v("适用于要求可靠传输的应用，例如文件传输")])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);