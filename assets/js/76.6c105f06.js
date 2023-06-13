(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{655:function(l,e,_){"use strict";_.r(e);var v=_(17),i=Object(v.a)({},(function(){var l=this,e=l.$createElement,_=l._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h3",{attrs:{id:"_1-webpack构建流程简单说一下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack构建流程简单说一下"}},[l._v("#")]),l._v(" 1.Webpack构建流程简单说一下")]),l._v(" "),_("ul",[_("li",[l._v("初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数")]),l._v(" "),_("li",[l._v("开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译")]),l._v(" "),_("li",[l._v("确定入口：根据配置中的 entry 找出所有的入口文件")]),l._v(" "),_("li",[l._v("编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理")]),l._v(" "),_("li",[l._v("完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系")]),l._v(" "),_("li",[l._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会")]),l._v(" "),_("li",[l._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统")])]),l._v(" "),_("p",[l._v("在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。")]),l._v(" "),_("p",[l._v("简单说：")]),l._v(" "),_("ul",[_("li",[l._v("初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler")]),l._v(" "),_("li",[l._v("编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理")]),l._v(" "),_("li",[l._v("输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中")])]),l._v(" "),_("h3",{attrs:{id:"_2-那你再说一说loader和plugin的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-那你再说一说loader和plugin的区别"}},[l._v("#")]),l._v(" 2.那你再说一说Loader和Plugin的区别？")]),l._v(" "),_("p",[_("strong",[l._v("Loader：")])]),l._v(" "),_("ul",[_("li",[l._v("函数对接收到的内容进行转换，返回转换后的结果。对其他类型资源进行转译。")]),l._v(" "),_("li",[l._v("开发时webpack 默认只能编译 js 中 ES 模块化语法，不能编译其他语法。")]),l._v(" "),_("li",[l._v("在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件，正则匹配文件)、loader、options (参数)等属性。use 数组里面 Loader 执行顺序是从右到左。")]),l._v(" "),_("li",[l._v("图像——将小于某个大小的图片转化成 data URI 形式（Base64 格式）——减少请求数量增大js文件体积\n"),_("a",{attrs:{href:"https://webpack.docschina.org/loaders/",target:"_blank",rel:"noopener noreferrer"}},[l._v("loader手册"),_("OutboundLink")],1)]),l._v(" "),_("li",[l._v('icon音视频——type: "asset/resource"和type: "asset"的区别：\n'),_("ul",[_("li",[l._v('type: "asset/resource" 相当于file-loader, 将文件转化成 Webpack 能识别的资源，其他不做处理')]),l._v(" "),_("li",[l._v('type: "asset" 相当于url-loader, 将文件转化成 Webpack 能识别的资源，同时小于某个大小的资源会处理成 data URI 形式')])])]),l._v(" "),_("li",[l._v("babel：针对 js 兼容性处理")])]),l._v(" "),_("p",[_("strong",[l._v("Plugin：")])]),l._v(" "),_("ul",[_("li",[l._v("就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能。")]),l._v(" "),_("li",[l._v("在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。")]),l._v(" "),_("li",[l._v("在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入")]),l._v(" "),_("li",[l._v("eslint——针对代码格式，可以开启jsx检查")]),l._v(" "),_("li",[l._v("html-webpack-plugin——处理 Html 资源")])]),l._v(" "),_("h3",{attrs:{id:"_3-聊一聊babel原理吧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-聊一聊babel原理吧"}},[l._v("#")]),l._v(" 3.聊一聊Babel原理吧")]),l._v(" "),_("p",[l._v("大多数JavaScript Parser遵循 estree 规范，Babel 最初基于 acorn 项目(轻量级现代 JavaScript 解析器)\nBabel大概分为三大部分：")]),l._v(" "),_("ul",[_("li",[l._v("解析：将代码转换成 AST")]),l._v(" "),_("li",[l._v("词法分析：将代码(字符串)分割为token流，即语法单元成的数组语法分析：分析token流(上面生成的数组)并生成 AST")]),l._v(" "),_("li",[l._v("转换：访问 AST 的节点进行变换操作生产新的 AST")]),l._v(" "),_("li",[l._v("生成：以新的 AST 为基础生成代码")])]),l._v(" "),_("h3",{attrs:{id:"_4-生产模式对代码优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-生产模式对代码优化"}},[l._v("#")]),l._v(" 4. 生产模式对代码优化")]),l._v(" "),_("p",[l._v("部署代码上线——主要对代码进行优化\n优化主要从两个角度出发:")]),l._v(" "),_("ul",[_("li",[l._v("优化代码运行性能")]),l._v(" "),_("li",[l._v("优化代码打包速度")])]),l._v(" "),_("p",[l._v("dev——开发者模式，配置web devServer，无输出\nbuild——生产者模式，不配置web devServer，有输出")]),l._v(" "),_("p",[l._v("优化方法：")]),l._v(" "),_("ul",[_("li",[l._v("提取css成单独文件——mini-css-extract-plugin：\n"),_("ul",[_("li",[l._v("解决问题：Css 文件目前被打包到 js 文件中，当 js 文件加载时，会创建一个 style 标签来生成样式。这样对于网站来说，会出现闪屏现象，用户体验不好。通过 link 标签加载单独的 Css 文件性能才好。")])])]),l._v(" "),_("li",[l._v("css兼容性处理——postcss-loader，在browserslist配置中可指定兼容的版本")]),l._v(" "),_("li",[l._v("css压缩——css-minimizer-webpack-plugin")]),l._v(" "),_("li",[l._v("默认生产模式已经开启html压缩和js压缩")])]),l._v(" "),_("p",[l._v("高级优化:")]),l._v(" "),_("ul",[_("li",[l._v("提升开发体验\n"),_("ul",[_("li",[l._v("SourceMap（源代码映射）是一个用来生成源代码与构建后代码一一映射的文件的方案。")]),l._v(" "),_("li",[l._v("xxx.map 文件，里面包含源代码和构建后代码每一行、每一列的映射关系。")]),l._v(" "),_("li",[l._v("source-map生产模式包含行列的映射，但打包速度更慢")])])]),l._v(" "),_("li",[l._v("提升打包构建速度\n"),_("ul",[_("li",[l._v("HotModuleReplacement：在程序运行中，替换、添加或删除模块，而无需重新加载整个页面。devServer:{hot: true}, // 开启HMR功能（只能用于开发环境，生产环境不需要了）")]),l._v(" "),_("li",[l._v("OneOf:\n"),_("ul",[_("li",[l._v("解决问题：打包时每个文件都会经过所有 loader 处理，虽然因为 test 正则原因实际没有处理上，但是都要过一遍。比较慢。——只能匹配上一个 loader, 剩下的就不匹配了。")])])]),l._v(" "),_("li",[l._v("Include/Exclude\n"),_("ul",[_("li",[l._v("第三方的库或插件，所有文件都下载到 node_modules 中了。而这些文件是不需要编译可以直接使用的。——对 js 文件处理时，要排除 node_modules 下面的文件。")])])]),l._v(" "),_("li",[l._v("Cache：\n"),_("ul",[_("li",[l._v("解决问题：每次打包时 js 文件都要经过 Eslint 检查 和 Babel 编译，速度比较慢。——对 Eslint 检查 和 Babel 编译结果进行缓存。")])])]),l._v(" "),_("li",[l._v("Thead：thread-loader\n"),_("ul",[_("li",[l._v("开启多进程同时处理 js 文件，提升打包速度——请仅在特别耗时的操作中使用，因为每个进程启动就有大约为 600ms 左右开销")])])])])]),l._v(" "),_("li",[l._v("减少代码体积：\n"),_("ul",[_("li",[l._v("Tree Shaking：\n"),_("ul",[_("li",[l._v("问题：开发时我们定义了一些工具函数库，或者引用第三方工具函数库或组件库。没有特殊处理会引入整个库，实际上只用上极小部分的功能。")]),l._v(" "),_("li",[l._v("移除 JavaScript 中的没有使用上的代码。依赖 ES Module。Webpack 已经默认开启了这个功能，无需其他配置。")])])]),l._v(" "),_("li",[l._v("Babel：@babel/plugin-transform-runtime 减少代码体积\n"),_("ul",[_("li",[l._v("解决问题：Babel 为编译的每个文件都插入了辅助代码，使代码体积过大！对一些公共方法使用了非常小的辅助代码，比如 _extend。默认情况下会被添加到每一个需要它的文件中。将这些辅助代码作为一个独立模块，来避免重复引入")])])]),l._v(" "),_("li",[l._v("Image Minimizer：image-minimizer-webpack-plugin（分为无损压缩有损压缩）\n"),_("ul",[_("li",[l._v("对图片进行压缩，减少图片体积。")]),l._v(" "),_("li",[l._v("在线链接图不需要，本地项目静态图片才需要进行压缩")])])])])]),l._v(" "),_("li",[l._v("优化代码运行性能\n"),_("ul",[_("li",[l._v("Code Split：\n"),_("ul",[_("li",[l._v("why：将所有 js 文件打包到一个文件中，体积太大了。我们如果只要渲染首页，就应该只加载首页的 js 文件，其他文件不应该加载。需要将打包生成的文件进行代码分割，生成多个 js 文件，渲染哪个页面就只加载某个 js 文件，这样加载的资源就少，速度就更快。")]),l._v(" "),_("li",[l._v("分割文件：将打包生成的文件进行分割，生成多个 js 文件。+按需加载：需要哪个文件就加载哪个文件。")]),l._v(" "),_("li",[l._v("按需加载：动态导入 --\x3e 实现按需加载。单入口+代码分割+动态导入方式来进行配置")])])])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);