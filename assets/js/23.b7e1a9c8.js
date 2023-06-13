(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{606:function(_,v,t){"use strict";t.r(v);var r=t(17),i=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"_1-什么是-xss-攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-xss-攻击"}},[_._v("#")]),_._v(" 1.  什么是 XSS 攻击？")]),_._v(" "),t("h3",{attrs:{id:"_1-概念-跨站脚本攻击、代码注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念-跨站脚本攻击、代码注入"}},[_._v("#")]),_._v(" （1）概念-跨站脚本攻击、代码注入")]),_._v(" "),t("p",[_._v("攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如 cookie 等。")]),_._v(" "),t("p",[_._v("原因——没有对用户输入代码进行过滤，与正常代码混合。")]),_._v(" "),t("p",[_._v("攻击者操作：")]),_._v(" "),t("ul",[t("li",[_._v("获取页面的数据，如DOM、cookie、localStorage；")]),_._v(" "),t("li",[_._v("DOS攻击，发送合理请求，占用服务器资源，从而使用户无法访问服务器；")]),_._v(" "),t("li",[_._v("破坏页面结构；")]),_._v(" "),t("li",[_._v("流量劫持（将链接指向某网站）；")])]),_._v(" "),t("h3",{attrs:{id:"_2-类型-存储型、反射型、dom型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-类型-存储型、反射型、dom型"}},[_._v("#")]),_._v(" （2）类型-存储型、反射型、DOM型")]),_._v(" "),t("ul",[t("li",[_._v("存储型——恶意脚本会存储在目标服务器上，当浏览器请求数据时，脚本从服务器传回并执行。")]),_._v(" "),t("li",[_._v("反射型——诱导用户访问一个 URL ，服务器端接收数据后处理，然后把带有恶意代码的数据发送到浏览器端。")]),_._v(" "),t("li",[_._v("DOM 型——修改页面的 DOM 节点形成的 XSS。")])]),_._v(" "),t("p",[t("strong",[_._v("1）存储型")]),_._v(" "),t("strong",[_._v("XSS")]),_._v(" ：")]),_._v(" "),t("ol",[t("li",[_._v("将恶意代码提交到⽬标⽹站的数据库中。")]),_._v(" "),t("li",[_._v("⽤户打开⽬标⽹站时，⽹站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。")]),_._v(" "),t("li",[_._v("⽤户浏览器接收到响应后解析执⾏，混在其中的恶意代码也被执⾏。")]),_._v(" "),t("li",[_._v("恶意代码窃取⽤户数据并发送到攻击者的⽹站，或者冒充⽤户的⾏为，调⽤⽬标⽹站接⼝执⾏攻击者指定的操作。")])]),_._v(" "),t("p",[_._v("这种攻击常⻅于带有"),t("strong",[_._v("⽤户保存数据的⽹站功能")]),_._v("，如论坛发帖、商品评论、⽤户私信等。")]),_._v(" "),t("p",[t("strong",[_._v("2）反射型")]),_._v(" "),t("strong",[_._v("XSS")]),_._v("：")]),_._v(" "),t("ol",[t("li",[_._v("构造出特殊 URL，其中包含恶意代码。")]),_._v(" "),t("li",[_._v("服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。")]),_._v(" "),t("li",[_._v("⽤户浏览器接收到响应后解析执⾏。")]),_._v(" "),t("li",[_._v("恶意代码窃取⽤户数据并发送到攻击者的⽹站，或者冒充⽤户的⾏为，调⽤⽬标⽹站接⼝执⾏攻击者指定的操作。")])]),_._v(" "),t("p",[_._v("反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库⾥，反射型 XSS 的恶意代码存在 URL ⾥。")]),_._v(" "),t("p",[_._v("反射型 XSS 漏洞常⻅于通过 URL 传递参数的功能，如⽹站搜索、跳转等。 由于需要⽤户主动打开恶意的 URL 才能⽣效，攻击者往往会结合多种⼿段诱导⽤户点击。")]),_._v(" "),t("p",[t("strong",[_._v("3）DOM")]),_._v(" "),t("strong",[_._v("型")]),_._v(" "),t("strong",[_._v("XSS")]),_._v(" :")]),_._v(" "),t("ol",[t("li",[_._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),_._v(" "),t("li",[_._v("⽤户打开带有恶意代码的 URL。")]),_._v(" "),t("li",[_._v("⽤户浏览器接收到响应后解析执⾏，前端 JavaScript 取出 URL 中的恶意代码并执⾏。")]),_._v(" "),t("li",[_._v("恶意代码窃取⽤户数据并发送到攻击者的⽹站，或者冒充⽤户的⾏为，调⽤⽬标⽹站接⼝执⾏攻击者指定的操作。")])]),_._v(" "),t("p",[_._v("区别：取出和执⾏恶意代码由浏览器端完成，属于前端JavaScript ⾃身的安全漏洞，⽽其他两种 XSS 都属于服务端的安全漏洞。")]),_._v(" "),t("h2",{attrs:{id:"_2-如何防御"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何防御"}},[_._v("#")]),_._v(" 2. 如何防御？")]),_._v(" "),t("ul",[t("li",[_._v("可以从浏览器的执行来进行预防，纯前端方式——不用服务器端拼接后返回（不使用服务端渲染）。另一种是对需要"),t("strong",[_._v("插入到 HTML 中的代码做好充分的转义")]),_._v("。")]),_._v(" "),t("li",[_._v("对于 DOM 型的攻击，主要是前端脚本的不可靠而造成的，对于"),t("strong",[_._v("数据获取渲染和字符串拼接")]),_._v("的时候应该对可能出现的"),t("strong",[_._v("恶意代码情况进行判断和过滤")]),_._v("。")]),_._v(" "),t("li",[_._v("使用 CSP 建立白名单，告诉浏览器哪些外部资源可加载执行，从而防止恶意代码的注入攻击。")])]),_._v(" "),t("blockquote",[t("ol",[t("li",[_._v("我们只需要配置规则，如何拦截由浏览器自己来实现。")]),_._v(" "),t("li",[_._v("通常有两种方式来开启 CSP，一种是设置 HTTP 首部中的 Content-Security-Policy，一种是设置 meta 标签的方式 "),t("meta",{attrs:{"http-equiv":"Content-Security-Policy"}})])])]),_._v(" "),t("ul",[t("li",[_._v("对一些敏感信息进行保护，比如 cookie 使用 http-only，使得脚本无法获取。也可以使用验证码，避免脚本伪装成用户执行一些操作（爬虫）。")])]),_._v(" "),t("h2",{attrs:{id:"_3-什么是-csrf-攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是-csrf-攻击"}},[_._v("#")]),_._v(" 3. 什么是 CSRF 攻击？")]),_._v(" "),t("h3",{attrs:{id:"_1-概念-跨站请求伪造攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念-跨站请求伪造攻击"}},[_._v("#")]),_._v(" （1）概念-"),t("strong",[_._v("跨站请求伪造攻击")])]),_._v(" "),t("p",[_._v("诱导用户进入第三方网站，然后该网站向被攻击网站发送跨站请求。如果用户在被攻击网站中保存了登录状态，那么攻击者就可以利用这个登录状态，绕过后台的用户验证，冒充用户向服务器执行一些操作。")]),_._v(" "),t("p",[t("strong",[_._v("利用 cookie 会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充。")])]),_._v(" "),t("h3",{attrs:{id:"_2-类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-类型"}},[_._v("#")]),_._v(" （2）类型")]),_._v(" "),t("ul",[t("li",[_._v("GET 型，比如在网站中的一个 img 标签里构建一个请求，当用户打开这个网站的时候就会自动发起提交。")]),_._v(" "),t("li",[_._v("POST 型，比如构建一个表单，然后隐藏它，当用户进入页面时，自动提交这个表单。")]),_._v(" "),t("li",[_._v("链接型，比如在 a 标签的 href 属性里构建一个请求，然后诱导用户去点击。")])]),_._v(" "),t("h2",{attrs:{id:"_4-防御"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-防御"}},[_._v("#")]),_._v(" 4. 防御？")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("进行同源检测")]),_._v("，服务器根据 http 请求头中 origin 或者 referer 信息来判断请求是否为允许访问的站点，从而对请求进行过滤。当 origin 或者 referer 信息都不存在的时候，直接阻止请求。这种方式的缺点是有些情况下 referer 可以被伪造，同时还会把搜索引擎的链接也给屏蔽了。所以一般网站会允许搜索引擎的页面请求，但是相应的页面请求这种请求方式也可能被攻击者给利用。（Referer 字段会告诉服务器该网页是从哪个页面链接过来的）")]),_._v(" "),t("li",[t("strong",[_._v("使用 CSRF Token 进行验证")]),_._v("，服务器向用户返回一个"),t("strong",[_._v("随机数 Token")]),_._v(" ，当再次发起请求时参数中加入 token ，然后服务器 token 验证。\n"),t("ul",[t("li",[_._v("这种方法解决了使用 cookie 单一验证方式时被冒用的问题")]),_._v(" "),t("li",[_._v("缺点——要给网站中的所有请求都添加这个 token，操作繁琐。此外一般不会只有一台网站服务器，如果请求经过负载平衡转移到了其他的服务器，但是这个服务器的 session 中没有保留这个 token 的话，就无法验证。这种情况可以通过改变 token 的构建方式来解决。")])])]),_._v(" "),t("li",[_._v("对 "),t("strong",[_._v("Cookie 进行双重验证")]),_._v("，服务器在用户访问网站页面时，"),t("strong",[_._v("向请求域名注入Cookie，内容为随机字符串")]),_._v("，用户再次向服务器发请求时，从 cookie 中取出这个字符串，添加到 URL 参数，然后服务器通过对比cookie 中的数据和参数中的数据进行验证。使用这种方式是利用了"),t("strong",[_._v("攻击者只能利用 cookie，但是不能访问获取 cookie 的特点")]),_._v("。比 CSRF Token 更方便且不涉及分布式访问。缺点是若网站有 XSS 漏洞会失效。同时不能做到子域名的隔离。")]),_._v(" "),t("li",[t("strong",[_._v("在设置 cookie 属性的时候设置 Samesite ，限制 cookie 不能作为被第三方使用")]),_._v("，从而可以避免被攻击者利用。Samesite 一共有两种模式，一种是严格模式，在严格模式下 cookie 在任何情况下都不可能作为第三方 Cookie 使用，在宽松模式下，cookie 可以被请求是 GET 请求，且会发生页面跳转的请求所使用。")])]),_._v(" "),t("h2",{attrs:{id:"_5-中间人攻击及防范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-中间人攻击及防范"}},[_._v("#")]),_._v(" 5. 中间人攻击及防范？")]),_._v(" "),t("p",[_._v("在中间⼈攻击中，攻击者可以拦截通讯双⽅的通话并插⼊新的内容。")]),_._v(" "),t("p",[_._v("攻击过程如下:")]),_._v(" "),t("ul",[t("li",[_._v("客户端发送请求到服务端，请求被中间⼈截获")]),_._v(" "),t("li",[_._v("服务器向客户端发送公钥")]),_._v(" "),t("li",[_._v("中间⼈截获公钥，保留在⾃⼰⼿上。然后⾃⼰⽣成⼀个"),t("strong",[_._v("伪造的")]),_._v("公钥，发给客户端")]),_._v(" "),t("li",[_._v("客户端收到伪造的公钥后，⽣成加密hash值发给服务器")]),_._v(" "),t("li",[_._v("中间⼈获得加密hash值，⽤⾃⼰的私钥解密获得真秘钥,同时⽣成假的加密hash值，发给服务器")]),_._v(" "),t("li",[_._v("服务器⽤私钥解密获得假密钥,然后加密数据传输给客户端")])]),_._v(" "),t("h2",{attrs:{id:"_6-有哪些可能引起前端安全的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-有哪些可能引起前端安全的问题"}},[_._v("#")]),_._v(" 6. 有哪些可能引起前端安全的问题**?**")]),_._v(" "),t("ul",[t("li",[_._v("跨站脚本 (Cross-Site Scripting, XSS): ⼀种代码注⼊⽅式, 为了与 CSS 区分所以被称作 XSS。早期常⻅于⽹络论坛, 起因是⽹站没有对⽤户的输⼊进⾏严格的限制, 使得攻击者可以将脚本上传到帖⼦让其他⼈浏览到有恶意脚本的⻚⾯, 其注⼊⽅式很简单包括但不限于 JavaScript / CSS / Flash 等；")]),_._v(" "),t("li",[_._v("iframe的滥⽤: iframe中的内容是由第三⽅来提供的，默认情况下他们不受控制，他们可以在iframe中运⾏JavaScirpt脚本、Flash插件、弹出对话框等等，这可能会破坏前端⽤户体验；")]),_._v(" "),t("li",[_._v("跨站点请求伪造（Cross-Site Request Forgeries，CSRF）: 指攻击者通过设置好的陷阱，强制对已完成认证的⽤户进⾏⾮预期的个⼈信息或设定信息等某些状态更新，属于被动攻击")]),_._v(" "),t("li",[_._v("恶意第三⽅库: ⽆论是后端服务器应⽤还是前端应⽤开发，绝⼤多数时候都是在借助开发框架和各种类库进⾏快速开发，⼀旦第三⽅库被植⼊恶意代码很容易引起安全问题。")])]),_._v(" "),t("h2",{attrs:{id:"_7-网络劫持有哪几种-如何防范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-网络劫持有哪几种-如何防范"}},[_._v("#")]),_._v(" 7. 网络劫持有哪几种，如何防范？")]),_._v(" "),t("p",[_._v("⽹络劫持分为两种:")]),_._v(" "),t("p",[_._v("（1）"),t("strong",[_._v("DNS")]),_._v("劫持: (输⼊京东被强制跳转到淘宝)")]),_._v(" "),t("ul",[t("li",[_._v("DNS强制解析: 通过修改运营商的本地DNS记录，来引导⽤户流量到缓存服务器")]),_._v(" "),t("li",[_._v("302跳转的⽅式: 通过监控⽹络出⼝的流量，分析判断哪些内容是可以进⾏劫持处理的,再对劫持的内存发起302跳转的回复，引导⽤户获取内容")])]),_._v(" "),t("p",[_._v("（2）"),t("strong",[_._v("HTTP")]),_._v("劫持: (访问⾕歌有贪玩蓝⽉的⼴告)，http明⽂传输，修改你的http响应内容(加⼴告)")]),_._v(" "),t("p",[_._v("DNS劫持由于涉嫌违法，已经被监管起来，现在很少会有DNS劫持")]),_._v(" "),t("p",[_._v("http劫持盛⾏，最有效的办法就是全站HTTPS，将HTTP加密，这使得运营商⽆法获取明⽂，就⽆法劫持你的响应内容。")])])}),[],!1,null,null,null);v.default=i.exports}}]);