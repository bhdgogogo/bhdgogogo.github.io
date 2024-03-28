(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{515:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"自我介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自我介绍"}},[t._v("#")]),t._v(" 自我介绍")]),t._v(" "),a("p",[t._v("基本的话术")]),t._v(" "),a("h2",{attrs:{id:"项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目"}},[t._v("#")]),t._v(" 项目")]),t._v(" "),a("p",[t._v("夸了几句项目做的不错，文档很漂亮")]),t._v(" "),a("h2",{attrs:{id:"webpack和vite的区别-性能-底层-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack和vite的区别-性能-底层-bundle"}},[t._v("#")]),t._v(" webpack和vite的区别 —— 性能 —— 底层 —— Bundle")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("webpack")]),t._v(" "),a("th",[t._v("vite")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("基于"),a("code",[t._v("nodejs")]),t._v("构建，"),a("code",[t._v("js")]),t._v("是以毫秒计数，较慢")]),t._v(" "),a("td",[t._v("基于"),a("code",[t._v("esbulid")]),t._v("预构建依赖，"),a("code",[t._v("go")]),t._v("语言编写，快")])]),t._v(" "),a("tr",[a("td",[t._v("随着模块增多，打包的体积变大，造成热更新速度变慢")]),t._v(" "),a("td",[a("code",[t._v("HMR")]),t._v("热更新更快")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api")]),t._v("以及插件生态更加丰富，更加灵活")]),t._v(" "),a("td",[t._v("加载器，插件不够丰富，生态不好")])]),t._v(" "),a("tr",[a("td",[t._v("可以处理"),a("code",[t._v("CJS")]),t._v("模块")]),t._v(" "),a("td",[t._v("项目的开发环境不支持"),a("code",[t._v("CJS")])])]),t._v(" "),a("tr",[a("td",[t._v("配置比较复杂，支持各种复杂的构建场景")]),t._v(" "),a("td",[t._v("开箱即用")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("注意："),a("code",[t._v("webpack")]),t._v("与"),a("code",[t._v("vite")]),t._v("的区别基本上在开发阶段，最后对项目进行打包时，"),a("code",[t._v("vite")]),t._v("使用的也是传统的"),a("code",[t._v("rollup")]),t._v("方式，两者需要的时间基本上没有什么差别")])]),t._v(" "),a("h2",{attrs:{id:"动画效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画效果"}},[t._v("#")]),t._v(" 动画效果")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/8a21deb5e0b2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[t._v("#")]),t._v(" transition")]),t._v(" "),a("p",[a("code",[t._v("transition")]),t._v("做动画时两个线程的工作情况是：对于浏览器来说，元素的高度一直在变化，因此这个动画的每一帧都需要主线程对元素进行布局，绘制成位图，将位图交由GPU线程，GPU将位图绘制到屏幕。两个线程来回切换工作，即使是移动十几个像素，主线程也需要对元素布局很多次，这部分的工作消耗相当大，相对较慢，这也是"),a("code",[t._v("transition")]),t._v("动画经常卡顿的原因。")]),t._v(" "),a("h3",{attrs:{id:"transform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transform"}},[t._v("#")]),t._v(" transform")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("transform")]),t._v("时浏览器的工作情况是：主线程对元素进行布局，绘制成位图，交由GPU线程，"),a("code",[t._v("transform")]),t._v("执行的整个过程都在GPU进程执行绘制，两个线程来回切换的情况不多，而且"),a("code",[t._v("transform")]),t._v("不会触发浏览器的重新排版，不会影响周围的布局，这也意味着这种情况的动画比"),a("code",[t._v("transition")]),t._v("流畅一些。")]),t._v(" "),a("h3",{attrs:{id:"animation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" animation")]),t._v(" "),a("p",[a("code",[t._v("transition")]),t._v("是使一个或多个属性值产生过渡效果，"),a("code",[t._v("animation")]),t._v("则作用于元素本身，强调流程与控制，是关键帧动画的范畴。简单的效果可以用"),a("code",[t._v("transform")]),t._v("，复杂的或想要更自由地掌控应该选择"),a("code",[t._v("animation")]),t._v("。"),a("code",[t._v("animation")]),t._v("会更占资源一些。")]),t._v(" "),a("h3",{attrs:{id:"position-vs-translate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-vs-translate"}},[t._v("#")]),t._v(" position vs translate")]),t._v(" "),a("p",[t._v("当页面需要位移动画时，会用到这两种，"),a("code",[t._v("position")]),t._v("的原理和"),a("code",[t._v("transition")]),t._v("符合，会触发浏览器的重排，"),a("code",[t._v("translate")]),t._v("不会，所以最好选择"),a("code",[t._v("transform")]),t._v("的"),a("code",[t._v("translate")]),t._v("，"),a("code",[t._v("rotate")]),t._v("，"),a("code",[t._v("scale")]),t._v("等方法。")]),t._v(" "),a("h2",{attrs:{id:"新的h5标签用过哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新的h5标签用过哪些"}},[t._v("#")]),t._v(" 新的h5标签用过哪些")]),t._v(" "),a("h3",{attrs:{id:"语义化标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语义化标签"}},[t._v("#")]),t._v(" 语义化标签")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(": 头部标签\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("nav")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("：导航标签\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("：块级标签\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("：内容标签\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("aside")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("：侧边栏标签\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("：尾部标签\n")])])]),a("blockquote",[a("p",[t._v("需要把它们转化为块级元素 display:block\n主要用于移动端")])]),t._v(" "),a("h3",{attrs:{id:"多媒体标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多媒体标签"}},[t._v("#")]),t._v(" 多媒体标签")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("video")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 视频标签\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("audio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 音频标签\n")])])]),a("h3",{attrs:{id:"图形标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图形标签"}},[t._v("#")]),t._v(" 图形标签")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 定义一个图形\n// 使用JS在网页上绘制图像\n")])])]),a("h3",{attrs:{id:"表单元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单元素"}},[t._v("#")]),t._v(" 表单元素")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 表单\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 为 input 元素定义标注（标记）\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 输入框\n")])])]),a("h2",{attrs:{id:"css3中新特性-伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3中新特性-伪类"}},[t._v("#")]),t._v(" css3中新特性 —— 伪类")]),t._v(" "),a("blockquote",[a("p",[t._v("扩展写一篇 —— "),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/434788923",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("CSS3的新特性大致分为以下六大类")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("CSS3")]),t._v("选择器")]),t._v(" "),a("li",[a("code",[t._v("CSS3")]),t._v("边框与圆角")]),t._v(" "),a("li",[a("code",[t._v("CSS3")]),t._v("背景与渐变")]),t._v(" "),a("li",[a("code",[t._v("CSS3")]),t._v("过渡")]),t._v(" "),a("li",[a("code",[t._v("CSS3")]),t._v("变换")]),t._v(" "),a("li",[a("code",[t._v("CSS3")]),t._v("动画")])]),t._v(" "),a("h3",{attrs:{id:"动态伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态伪类"}},[t._v("#")]),t._v(" 动态伪类")]),t._v(" "),a("p",[t._v("定义：这些伪类并不存在于HTML中，只有当用户和网站交互的时候才能体现出来。")]),t._v(" "),a("ol",[a("li",[t._v("锚点伪类\n"),a("code",[t._v(":link")]),t._v(" "),a("code",[t._v(":visited")])]),t._v(" "),a("li",[t._v("用户行为伪类\n"),a("code",[t._v(":hover")]),t._v(" "),a("code",[t._v(":active")]),t._v(" "),a("code",[t._v(":focus")])]),t._v(" "),a("li",[t._v("目标伪类\n"),a("code",[t._v(":target")]),t._v(" 当我们点击锚点链接时，对应id的元素会显示在视口")])]),t._v(" "),a("h2",{attrs:{id:"es6特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6特性"}},[t._v("#")]),t._v(" es6特性")]),t._v(" "),a("blockquote",[a("p",[t._v("扩展写一篇")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_38044335/article/details/126905931?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-126905931-blog-126978930.235%5Ev30%5Epc_relevant_default_base3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-126905931-blog-126978930.235%5Ev30%5Epc_relevant_default_base3&utm_relevant_index=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("关键字—— "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")])]),t._v(" "),a("li",[t._v("解构赋值")]),t._v(" "),a("li",[t._v("模板字符串")]),t._v(" "),a("li",[t._v("箭头函数")]),t._v(" "),a("li",[t._v("扩展运算符（...）")]),t._v(" "),a("li",[t._v("基本数据类型 —— "),a("code",[t._v("Symbol")])]),t._v(" "),a("li",[a("code",[t._v("Set")]),t._v("和"),a("code",[t._v("Map")])]),t._v(" "),a("li",[a("code",[t._v("Promise")])]),t._v(" "),a("li",[a("code",[t._v("Generator")]),t._v("函数")]),t._v(" "),a("li",[a("code",[t._v("Async")])]),t._v(" "),a("li",[a("code",[t._v("for...of...")])]),t._v(" "),a("li",[a("code",[t._v("class")])])]),t._v(" "),a("h2",{attrs:{id:"promise都有什么方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise都有什么方法"}},[t._v("#")]),t._v(" promise都有什么方法")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_56650035/article/details/127876244",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Promise.resolve")])]),t._v(" "),a("li",[a("code",[t._v("Promise.reject")])]),t._v(" "),a("li",[a("code",[t._v("Promise.then")])]),t._v(" "),a("li",[a("code",[t._v("Promise.catch")])]),t._v(" "),a("li",[a("code",[t._v("Promise.finally")])]),t._v(" "),a("li",[a("code",[t._v("Promise.all")])]),t._v(" "),a("li",[a("code",[t._v("Promise.allSettled")])]),t._v(" "),a("li",[a("code",[t._v("Promise.race")])]),t._v(" "),a("li",[a("code",[t._v("Promise.any")])])]),t._v(" "),a("h2",{attrs:{id:"promise问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise问题"}},[t._v("#")]),t._v(" Promise问题")]),t._v(" "),a("h3",{attrs:{id:"_1-三个promise-一个promise返回成功了-就全部返回-剩下两个就跳过-怎么实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-三个promise-一个promise返回成功了-就全部返回-剩下两个就跳过-怎么实现"}},[t._v("#")]),t._v(" 1. 三个promise，一个promise返回成功了，就全部返回，剩下两个就跳过，怎么实现")]),t._v(" "),a("p",[a("code",[t._v("**Promise.any(iterable)**")])]),t._v(" "),a("p",[t._v("接收一个"),a("code",[t._v("Promise")]),t._v("对象的集合，当其中的一个"),a("code",[t._v("promise")]),t._v(" 成功，就返回那个成功的"),a("code",[t._v("promise")]),t._v("的值。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Promise.any()")]),t._v("接收一个"),a("code",[t._v("Promise")]),t._v("可迭代对象，只要其中的一个 "),a("code",[t._v("promise")]),t._v(" 成功，就返回那个已经成功的 "),a("code",[t._v("promise")]),t._v(" 。如果可迭代对象中没有一个 "),a("code",[t._v("promise")]),t._v(" 成功（即所有的 "),a("code",[t._v("promises")]),t._v(" 都失败/拒绝），就返回一个失败的 "),a("code",[t._v("promise")]),t._v(" 和"),a("code",[t._v("AggregateError")]),t._v("类型的实例，它是 "),a("code",[t._v("Error")]),t._v(" 的一个子类，用于把单一的错误集合在一起\n本质上，这个方法和"),a("code",[t._v("Promise.all()")]),t._v("是相反的。\n"),a("strong",[t._v("但是"),a("code",[t._v("any")]),t._v("方法存在一些兼容性问题")])])]),t._v(" "),a("p",[t._v("可以自己封装实现"),a("code",[t._v("any")]),t._v("方法 —— "),a("a",{attrs:{href:"https://blog.csdn.net/qq_33160523/article/details/121314492",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_2-使用promise-all-进行5个请求-若其中一个失败了-怎么让其他4个成功返回"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用promise-all-进行5个请求-若其中一个失败了-怎么让其他4个成功返回"}},[t._v("#")]),t._v(" 2. 使用promise.all 进行5个请求，若其中一个失败了，怎么让其他4个成功返回")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOCTYPE")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width=device-width"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("WebDemo_Test_Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all进阶学习"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            font"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("family"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Verdana"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Arial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft YaHei"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Helvetica"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"margin: 20px 0px 0px 10px;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("提醒"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 请打开控制台查看日志。"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js面试题: 使用 Promise.all 进行5个请求, 若其中一个失败了, 怎么让其他4个成功返回。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//let all = Promise.all(arr);")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" all "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"错误信息: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log('res: ', JSON.stringify(res));")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'res: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"画布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#画布"}},[t._v("#")]),t._v(" 画布")]),t._v(" "),a("p",[a("code",[t._v("html")]),t._v("的"),a("code",[t._v("canvas")]),t._v("标签可以创建画布区域，使用"),a("code",[t._v("js")]),t._v("可以获取画布的上下文从而来设置画布及画布元素\n"),a("a",{attrs:{href:"https://blog.csdn.net/m0_60633107/article/details/129641456",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"webpack有没有进行loader和plugin的开发-loader和plugin的底层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack有没有进行loader和plugin的开发-loader和plugin的底层"}},[t._v("#")]),t._v(" webpack有没有进行loader和plugin的开发——loader和plugin的底层")]),t._v(" "),a("p",[t._v("之后要做的东西，开发"),a("code",[t._v("loader")]),t._v("和"),a("code",[t._v("plugin")]),t._v("，帮助理解"),a("code",[t._v("webpack")]),t._v("工作原理")]),t._v(" "),a("h2",{attrs:{id:"git-flow-git是怎么管理我的项目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-flow-git是怎么管理我的项目的"}},[t._v("#")]),t._v(" git flow —— git是怎么管理我的项目的")]),t._v(" "),a("p",[t._v("我们在各自的仓库"),a("code",[t._v("pull")]),t._v("主仓库的代码，在我们自己的仓库进行开发，然后向主仓库提"),a("code",[t._v("pr")]),t._v("的方式来进行项目的开发，主仓库应该建一个合并分支，这样保持"),a("code",[t._v("master")]),t._v("不受影响")]),t._v(" "),a("h2",{attrs:{id:"反问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反问"}},[t._v("#")]),t._v(" 反问")]),t._v(" "),a("h3",{attrs:{id:"公司前端部门在做哪些业务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公司前端部门在做哪些业务"}},[t._v("#")]),t._v(" 公司前端部门在做哪些业务")]),t._v(" "),a("ul",[a("li",[t._v("数据可视化")]),t._v(" "),a("li",[t._v("自研低代码平台")]),t._v(" "),a("li",[t._v("组件化图标库")])])])}),[],!1,null,null,null);a.default=r.exports}}]);