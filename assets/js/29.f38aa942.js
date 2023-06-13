(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{610:function(a,e,t){"use strict";t.r(e);var s=t(17),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-什么是同源策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是同源策略"}},[a._v("#")]),a._v(" 1. 什么是同源策略")]),a._v(" "),t("p",[a._v("同源策略限制了从同一个源加载的文档或脚本如何与另一个源的资源进行交互。这是浏览器的一个用于隔离潜在恶意文件的重要的安全机制。"),t("strong",[a._v("同源策略：protocol（协议）、domain（域名）、port（端口）三者必须一致。")])]),a._v(" "),t("p",[t("strong",[a._v("同源政策主要限制了三个方面：")])]),a._v(" "),t("ul",[t("li",[a._v("当前域下的 js 脚本不能够访问其他域下的 cookie、localStorage 和 indexDB。")]),a._v(" "),t("li",[a._v("当前域下的 js 脚本不能够操作访问操作其他域下的 DOM。")]),a._v(" "),t("li",[a._v("当前域下 ajax 无法发送跨域请求。")])]),a._v(" "),t("p",[a._v("注意⚠️：对 js 脚本的一种限制，并不是对浏览器的限制，对于一般的 img、或者script 脚本请求都不会有跨域的限制，这是因为这些操作都不会通过响应结果来进行可能出现安全问题的操作。")]),a._v(" "),t("h2",{attrs:{id:"_2-如何解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何解决"}},[a._v("#")]),a._v(" 2. 如何解决")]),a._v(" "),t("h3",{attrs:{id:"_2-1-cors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-cors"}},[a._v("#")]),a._v(" 2.1 CORS")]),a._v(" "),t("p",[a._v("跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器  让运行在一个 origin (domain)上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域HTTP 请求。")]),a._v(" "),t("p",[a._v("实现"),t("strong",[a._v("CORS的关键就是服务器，只要服务器实现了CORS请求")]),a._v("，就可以跨源通信了。")]),a._v(" "),t("p",[a._v("CORS分为"),t("strong",[a._v("简单请求")]),a._v("和"),t("strong",[a._v("非简单请求")]),a._v("：")]),a._v(" "),t("ul",[t("li",[a._v("简单请求不会触发CORS预检请求。满足以下两个条件看作简单请求：\n"),t("ul",[t("li",[a._v("请求方法是这些方法之一：HEAD、GET、POST")]),a._v(" "),t("li",[a._v("HTTP的头信息不超出这些字段：Accept；Accept-Language；Content-Language；Last-Event-ID；Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain")])])]),a._v(" "),t("li",[a._v("不满足就是非简单请求")])]),a._v(" "),t("h4",{attrs:{id:"_2-1-1-简单请求过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-简单请求过程"}},[a._v("#")]),a._v(" 2.1.1 简单请求过程")]),a._v(" "),t("p",[a._v("简单请求——浏览器发出CORS请求，在请求的头信息中增加Orign字段，该字段用来说明本次请求来自哪个源，服务器会根据这个值来决定是否同意这次请求。\n"),t("strong",[a._v("在简单请求中，在服务器内，至少需要设置字段：")]),t("code",[a._v("**Access-Control-Allow-Origin**")]),a._v("。若域名不在许可范围之内，服务器返回一个正常的HTTP回应，发现没有Access-Control-Allow-Origin头部信息，就知道出错了。这个错误无法通过状态码识别，因为返回的状态码可能是200。")]),a._v(" "),t("h4",{attrs:{id:"_2-1-1-非简单请求过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-非简单请求过程"}},[a._v("#")]),a._v(" 2.1.1 非简单请求过程")]),a._v(" "),t("p",[a._v("非简单请求——对服务器有特殊要求的请求，比如请求方法为DELETE或者PUT等。")]),a._v(" "),t("p",[a._v("预检请求——CORS请求会在正式通信之前进行一次HTTP查询请求。浏览器会询问服务器，当前网页是否在服务器允许访问的范围内，以及可以使用的HTTP请求方式和头信息字段，只有得到肯定的回复，才会进行正式HTTP请求，否则就会报错。")]),a._v(" "),t("p",[a._v("预检请求使用的"),t("strong",[a._v("请求方法是OPTIONS")]),a._v("，表示这个请求是来询问的。他的头信息中的关键字段是Orign，表示请求来自哪个源。除此之外，头信息中还包括两个字段：Access-Control-Request-Method：该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法。Access-Control-Request-Headers： 该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段。")]),a._v(" "),t("p",[a._v("返回的头信息有Access-Control-Allow-Origin字段就是允许跨域请求，没有不同意会报错。")]),a._v(" "),t("p",[t("strong",[a._v("在非简单请求中，至少需要设置以下字段：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'Access-Control-Allow-Origin'  \n'Access-Control-Allow-Methods'\n'Access-Control-Allow-Headers'\n")])])]),t("p",[a._v("注意⚠️：")]),a._v(" "),t("ul",[t("li",[a._v("减少OPTIONS请求次数：次数过多就会损耗页面加载的性能，可以后端在请求的返回头部添加：Access-Control-Max-Age：number。设置了缓存时间，在这个时间范围内，再次发送请求就不需要进行预检请求了。")]),a._v(" "),t("li",[a._v("CORS中Cookie相关问题：可以通过设置 withCredentials 来进行传递 cookie。")])]),a._v(" "),t("h3",{attrs:{id:"_2-2-jsonp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-jsonp"}},[a._v("#")]),a._v(" 2.2 JSONP")]),a._v(" "),t("p",[a._v("利用"),t("code",[a._v("<script>")]),a._v("标签没有跨域限制，通过"),t("code",[a._v("<script>")]),a._v("标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器。")]),a._v(" "),t("p",[a._v("实现方式：")]),a._v(" "),t("ul",[t("li",[a._v("原生JS实现")]),a._v(" "),t("li",[a._v("Vue axios实现")])]),a._v(" "),t("p",[t("strong",[a._v("JSONP的缺点：")])]),a._v(" "),t("ul",[t("li",[a._v("仅支持get方法")]),a._v(" "),t("li",[a._v("不安全，可能会遭受XSS攻击")])]),a._v(" "),t("h3",{attrs:{id:"_2-3-postmessage-跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-postmessage-跨域"}},[a._v("#")]),a._v(" 2.3 postMessage 跨域")]),a._v(" "),t("p",[a._v("postMessage是HTML5 XMLHttpRequest Level 2中的API，用于解决以下问题：")]),a._v(" "),t("ul",[t("li",[a._v("页面和其打开的新窗口的数据传递")]),a._v(" "),t("li",[a._v("多窗口之间消息传递")]),a._v(" "),t("li",[a._v("页面与嵌套的iframe消息传递")]),a._v(" "),t("li",[a._v("上面三个场景的跨域数据传递")])]),a._v(" "),t("p",[a._v("用法：postMessage(data,origin)方法接受两个参数：")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("data")]),a._v("： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。")]),a._v(" "),t("li",[t("strong",[a._v("origin")]),a._v('： 协议+主机+端口号，也可以设置为"*"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。')])]),a._v(" "),t("h3",{attrs:{id:"_2-4-nginx代理跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-nginx代理跨域"}},[a._v("#")]),a._v(" 2.4 nginx代理跨域")]),a._v(" "),t("p",[a._v("配置代理服务器两种模式：")]),a._v(" "),t("ul",[t("li",[a._v("nginx配置")]),a._v(" "),t("li",[a._v("vue-cli配置——官网文档：devServer.proxy")]),a._v(" "),t("li",[a._v("代理服务器和服务器之间通过http传递消息，ajax和服务器之间通过axios传递消息")])]),a._v(" "),t("p",[a._v("nginx代理跨域，实质和CORS跨域原理一样，通过配置文件设置请求响应头Access-Control-Allow-Origin等字段。")]),a._v(" "),t("h4",{attrs:{id:"_2-4-1-nginx配置解决iconfont跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-nginx配置解决iconfont跨域"}},[a._v("#")]),a._v(" 2.4.1 nginx配置解决iconfont跨域")]),a._v(" "),t("p",[a._v("浏览器跨域访问js、css、img等常规静态资源被同源策略许可，但iconfont字体文件(eot|otf|ttf|woff|svg)例外，此时可在nginx的静态资源服务器中加入以下配置。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("location / {\n  add_header Access-Control-Allow-Origin *;\n}\n")])])]),t("h4",{attrs:{id:"_2-4-2-nginx反向代理接口跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-nginx反向代理接口跨域"}},[a._v("#")]),a._v(" 2.4.2 nginx反向代理接口跨域")]),a._v(" "),t("p",[a._v("实现思路：通过Nginx配置一个代理服务器域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域访问。")]),a._v(" "),t("p",[a._v("nginx具体配置：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#proxy服务器\nserver {\n    listen       81;\n    server_name  www.domain1.com;\n    location / {\n        proxy_pass   http://www.domain2.com:8080;  #反向代理\n        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名\n        index  index.html index.htm;\n        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用\n        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*\n        add_header Access-Control-Allow-Credentials true;\n    }\n}\n")])])]),t("h3",{attrs:{id:"_2-5-nodejs-中间件代理跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-nodejs-中间件代理跨域"}},[a._v("#")]),a._v(" 2.5 nodejs 中间件代理跨域")]),a._v(" "),t("p",[a._v("node中间件实现跨域代理，原理大致与nginx相同，都是通过启一个代理服务器，实现数据的转发，也可以通过设置cookieDomainRewrite参数修改响应头中cookie中域名，实现当前域的cookie写入，方便接口登录认证。")]),a._v(" "),t("ul",[t("li",[a._v("非vue框架的跨域：使用node + express + http-proxy-middleware搭建一个proxy服务器。（配置前端代码+中间件服务器代码）")]),a._v(" "),t("li",[a._v("vue框架的跨域：node + vue + webpack + webpack-dev-server搭建的项目，跨域请求接口，直接修改webpack.config.js配置。开发环境下，vue渲染服务和接口代理服务都是webpack-dev-server同一个，所以页面与代理接口之间不再跨域。")])]),a._v(" "),t("h3",{attrs:{id:"_2-6-document-domain-iframe跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-document-domain-iframe跨域"}},[a._v("#")]),a._v(" 2.6 document.domain + iframe跨域")]),a._v(" "),t("p",[a._v("仅限主域相同，子域不同的跨域应用场景。实现原理：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。")]),a._v(" "),t("p",[a._v("1）父窗口：(domain.com/a.html)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<iframe id=\"iframe\" src=\"http://child.domain.com/b.html\"></iframe>\n<script>\n    document.domain = 'domain.com';\n    var user = 'admin';\n<\/script>\n")])])]),t("p",[a._v("1）子窗口：(child.domain.com/a.html)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<script>\n    document.domain = 'domain.com';\n    // 获取父窗口中变量\n    console.log('get js data from parent ---\x3e ' + window.parent.user);\n<\/script>\n")])])]),t("h3",{attrs:{id:"_2-7-location-hash-iframe跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-location-hash-iframe跨域"}},[a._v("#")]),a._v(" 2.7 location.hash + iframe跨域")]),a._v(" "),t("p",[a._v("实现原理：a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。")]),a._v(" "),t("p",[a._v("具体实现：A域：a.html -> B域：b.html -> A域：c.html，a与b不同域只能通过hash值单向通信，b与c也不同域也只能单向通信，但c与a同域，所以c可通过parent.parent访问a页面所有对象。")]),a._v(" "),t("h3",{attrs:{id:"_2-8-window-name-iframe跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-window-name-iframe跨域"}},[a._v("#")]),a._v(" 2.8 window.name + iframe跨域")]),a._v(" "),t("p",[a._v("window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。")]),a._v(" "),t("p",[a._v("通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。这个就巧妙地绕过了浏览器的跨域访问限制，但同时它又是安全操作。")]),a._v(" "),t("h3",{attrs:{id:"_2-9-websocket协议跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-websocket协议跨域"}},[a._v("#")]),a._v(" 2.9 WebSocket协议跨域")]),a._v(" "),t("p",[a._v("WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。")]),a._v(" "),t("p",[a._v("原生WebSocket API使用起来不太方便，我们使用Socket.io，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。")]),a._v(" "),t("h2",{attrs:{id:"_3-正向代理和反向代理的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-正向代理和反向代理的区别"}},[a._v("#")]),a._v(" 3. 正向代理和反向代理的区别")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://app.yinxiang.com/files/common-services/binary-datas/c2VydmljZVR5cGU9MiZzZXJ2aWNlRGF0YT17Im5vdGVHdWlkIjoiNTRkMDY5ZWEtYTlmNi00ZGIwLTlmMzktYmU5ZjM4MzFjMzIwIiwicmVzb3VyY0d1aWQiOiI2MjQ2MWUxMC0xYjk3LTRmYTktODA1Ni05MTc1OTQ3YzFjMzQifQ==",alt:""}})]),a._v(" "),t("p",[a._v("正向代理和反向代理的结构是一样的，都是 client-proxy-server 的结构，它们主要的区别就在于中间这个 proxy 是哪一方设置的。在正向代理中，proxy 是 client 设置的，用来隐藏 client；而在反向代理中，proxy 是 server 设置的，用来隐藏 server。")]),a._v(" "),t("h3",{attrs:{id:"_3-1-正向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-正向代理"}},[a._v("#")]),a._v(" 3.1 正向代理")]),a._v(" "),t("p",[a._v("客户端想获得一个服务器的数据，但是因为种种原因无法直接获取。于是客户端设置了一个代理服务器，并且指定目标服务器，之后代理服务器向目标服务器转交请求并将获得的内容发送给客户端。这样本质上起到了"),t("strong",[a._v("对真实服务器隐藏真实客户端的目的")]),a._v("。实现正向代理需要修改客户端，比如修改浏览器配置。")]),a._v(" "),t("h3",{attrs:{id:"_3-2-反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-反向代理"}},[a._v("#")]),a._v(" 3.2 反向代理")]),a._v(" "),t("p",[a._v("服务器为了能够将工作负载分不到多个服务器来提高网站性能 (负载均衡)等目的，当其受到请求后，会首先根据转发规则来确定请求应该被转发到哪个服务器上，然后将请求转发到对应的真实服务器上。这样本质上起到了"),t("strong",[a._v("对客户端隐藏真实服务器的作用")]),a._v("。")]),a._v(" "),t("p",[a._v("一般使用反向代理后，需要通过"),t("strong",[a._v("修改 DNS 让域名解析到代理服务器 IP")]),a._v("，这时浏览器无法察觉到真正服务器的存在，当然也就不需要修改配置了。")]),a._v(" "),t("h2",{attrs:{id:"_4-nginx的概念及其工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-nginx的概念及其工作原理"}},[a._v("#")]),a._v(" 4. Nginx的概念及其工作原理")]),a._v(" "),t("p",[a._v("Nginx 是一款轻量 Web 服务器，也可以用于反向代理、负载平衡和 HTTP 缓存等。Nginx 使用异步事件驱动的方法来处理请求，是一款面向性能设计的 HTTP 服务器。")]),a._v(" "),t("p",[a._v("传统的 Web 服务器是 process-based 模型的，而 Nginx 是"),t("strong",[a._v("基于event-driven模型")]),a._v("的。正是这个主要的区别带给了 Nginx 在性能上的优势。")]),a._v(" "),t("p",[a._v("Nginx 架构的最顶层是一个 master process，这个 master process 用于产生其他的 worker process，这一点和Apache 非常像，但是 Nginx 的 worker process 可以同时处理大量的HTTP请求，而每个 Apache process 只能处理一个。")])])}),[],!1,null,null,null);e.default=r.exports}}]);