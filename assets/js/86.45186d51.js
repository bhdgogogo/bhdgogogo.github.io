(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{518:function(t,v,_){"use strict";_.r(v);var e=_(1),a=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"搭建项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#搭建项目"}},[t._v("#")]),t._v(" 搭建项目")]),t._v(" "),v("p",[v("code",[t._v("yarn create vue")]),t._v(" 或 "),v("code",[t._v("pnpm create vue")])]),t._v(" "),v("p",[v("code",[t._v("yarn")]),t._v(" 或 "),v("code",[t._v("pnpm")]),t._v(" 安装依赖")]),t._v(" "),v("h2",{attrs:{id:"配置-pinia"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置-pinia"}},[t._v("#")]),t._v(" 配置 pinia")]),t._v(" "),v("p",[t._v("作用 —— 存放数据")]),t._v(" "),v("ol",[v("li",[t._v("安装"),v("code",[t._v("pinia")]),t._v(" ——"),v("code",[t._v("yarn add pinia")])]),t._v(" "),v("li",[t._v("创建"),v("code",[t._v("pinia")]),t._v("并使用 —— "),v("code",[t._v("main.js")])]),t._v(" "),v("li",[t._v("设置"),v("code",[t._v(".js")]),t._v("文件通过"),v("code",[t._v("pinia")]),t._v("来存放数据 —— "),v("code",[t._v("meals.js")])])]),t._v(" "),v("h2",{attrs:{id:"meal-组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#meal-组件"}},[t._v("#")]),t._v(" Meal 组件")]),t._v(" "),v("p",[t._v("抽象成两个组件")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("MealBody")]),t._v("组件 —— 整个菜单")]),t._v(" "),v("li",[v("code",[t._v("MealComponent")]),t._v("组件 —— 每个单独的汉堡")])]),t._v(" "),v("p",[v("strong",[t._v("MealBody组件要注意高度，留出上下两个部分的高度，否则会挡住菜单界面")])]),t._v(" "),v("p",[v("code",[t._v("MealComponent")]),t._v("组件结构")]),t._v(" "),v("ol",[v("li",[t._v("左边汉堡图片")]),t._v(" "),v("li",[t._v("右边汉堡信息"),v("code",[t._v("info")]),t._v(" + 选购组件（"),v("code",[t._v("Counter")]),t._v("组件）")])]),t._v(" "),v("p",[t._v("左右为"),v("code",[t._v("flex")]),t._v("结构，"),v("code",[t._v("右边信息")]),t._v("为上下两部分结构")]),t._v(" "),v("h2",{attrs:{id:"counter-组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#counter-组件"}},[t._v("#")]),t._v(" Counter 组件")]),t._v(" "),v("blockquote",[v("p",[t._v("两个组件都设置 "),v("code",[t._v("display: flex")]),t._v(" 后，两个组件从左右排列变成了上下排列\n原因：两个组件变成了块元素，块元素默认是上下排列的\n解决： 给父组件也设置 "),v("code",[t._v("display: flex")])])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("justify-content")]),t._v(" 属性定义了项目在主轴（"),v("code",[t._v("x")]),t._v(" 轴）上的对齐方式。")]),t._v(" "),v("li",[v("code",[t._v("align-items")]),t._v(" 属性定义项目在交叉轴（"),v("code",[t._v("y")]),t._v(" 轴）上的对齐方式。")])]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 可以同时设置两个类的属性，一般用于设置多个具有相同样式的类\n.aa,\n.bb")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 设置该元素为块级元素\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 2rem"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //上下边距为0，左右边距为2rem\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 1rem 0 2rem // 上右下左\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("给"),v("code",[t._v("store")]),t._v("设置"),v("code",[t._v("action")]),t._v("来绑定添加汉堡和删除汉堡事件 —— 在"),v("code",[t._v("state")]),t._v("中设置"),v("code",[t._v("count")]),t._v("来记录 —— 通过"),v("code",[t._v("action")]),t._v("来操作对应汉堡"),v("code",[t._v("count")]),t._v("的增和减")]),t._v(" "),v("blockquote",[v("p",[t._v("需要"),v("code",[t._v("MealComponent")]),t._v("组件把当前汉堡属性传给"),v("code",[t._v("Counter")]),t._v("，从而获得当前汉堡的"),v("code",[t._v("state")]),t._v("，如果直接从"),v("code",[t._v("store")]),t._v("读"),v("code",[t._v("state")]),t._v("的话，只能获取所有汉堡，而无法获取到当前汉堡")])]),t._v(" "),v("p",[v("code",[t._v("Counter")]),t._v("组价要实现的需求如下：")]),t._v(" "),v("ol",[v("li",[t._v("获取购物车所有商品 —— 用一个数组来记录"),v("code",[t._v("count > 0")]),t._v("的汉堡")]),t._v(" "),v("li",[t._v("计算总数量 —— "),v("code",[t._v("count")]),t._v(" —— 购物车右上角小图标")]),t._v(" "),v("li",[t._v("计算总价格 —— "),v("code",[t._v("count * price")]),t._v(" —— 购物车总价格")])]),t._v(" "),v("h2",{attrs:{id:"mealfilter-组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mealfilter-组件"}},[t._v("#")]),t._v(" MealFilter 组件")]),t._v(" "),v("p",[t._v("搜索食物列表的搜索框组件")]),t._v(" "),v("blockquote",[v("p",[t._v("通过在 "),v("code",[t._v("state")]),t._v(" 中设置一个 "),v("code",[t._v("keyword")]),t._v(" 属性来实现，通过 "),v("code",[t._v("v-model")]),t._v(" 绑定到 "),v("code",[t._v("input")]),t._v(" 上，根据输入内容来对 "),v("code",[t._v("data")]),t._v(" 进行 "),v("code",[t._v("filter")]),t._v("，得到搜索后的结果")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"title"}),v("p",[t._v("如果在 "),v("code",[t._v("template")]),t._v(" 外手动结构了数据内容，则该数据内容是一次性的，也就是第一次解构的是什么内容，后边再进行过滤或刷新当前组件内容，该数据内容仍然是第一次解构的数据")]),t._v(" "),v("p",[t._v("解决： 在模板中通过 "),v("code",[t._v("props")]),t._v(" 访问")])]),v("p",[v("code",[t._v("indexOf")]),t._v(" —— 不重复（没有该元素）表示 "),v("code",[t._v("-1")]),t._v(", 重复（有该元素）表示 "),v("code",[t._v("1")])]),t._v(" "),v("p",[t._v("举例："),v("a",{attrs:{href:"https://blog.csdn.net/weixin_45825077/article/details/107606551",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("判断两个数组中元素是否重复，不重复返回值"),v("code",[t._v("-1")]),t._v("，重复则返回元素首次出现的位置。")]),t._v(" "),v("ol",[v("li",[t._v("创建带有重复的数组和一个空数组")])]),t._v(" "),v("div",{staticClass:"language-javascript extra-class"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr1 "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr2 "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("ol",{attrs:{start:"2"}},[v("li",[t._v("通过 "),v("code",[t._v("for")]),t._v(" 循环遍历，"),v("code",[t._v("if")]),t._v(" 判断两个数组中元素是否重复，不重复返回值"),v("code",[t._v("-1")]),t._v("，通过 "),v("code",[t._v("push")]),t._v("方法将 "),v("code",[t._v("arr1")]),t._v(" 中不重复元素添加到 "),v("code",[t._v("arr2")]),t._v(" 中")])]),t._v(" "),v("h2",{attrs:{id:"cartbar-组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cartbar-组件"}},[t._v("#")]),t._v(" CartBar 组件")]),t._v(" "),v("p",[t._v("下方购物车条\n"),v("code",[t._v("position:fixed")]),t._v(" —— 固定定位")]),t._v(" "),v("p",[t._v("结构:")]),t._v(" "),v("ul",[v("li",[t._v("购物车 —— "),v("code",[t._v("CartBar")]),t._v(" —— 底部购物车的一个整个样式")]),t._v(" "),v("li",[t._v("购物袋 —— 包括右上角商品数量小图标")]),t._v(" "),v("li",[t._v("选择内容 —— 未选中商品 —— 选中商品显示选中商品的总价格")]),t._v(" "),v("li",[t._v("结算 —— 结算按钮 —— 最左边")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[v("code",[t._v("assets")]),t._v(" 文件夹放的是我们项目的资源 —— 比如 "),v("code",[t._v("css")]),t._v(" 等 —— 一般是不会改变的图片 —— 直接要用的东西\n如果是之后会改变的资源 —— 数据图片这些 —— 就放到 "),v("code",[t._v("public")]),t._v(" 文件夹里")])]),v("p",[t._v("绝对定位是相对于最近 "),v("code",[t._v("position")]),t._v(" 不为 "),v("code",[t._v("static")]),t._v(" 的父级元素来定位的。"),v("a",{attrs:{href:"https://blog.csdn.net/xiaobing_hope/article/details/53609658",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("code",[t._v("flex")]),t._v(" 不好操作时可以使用绝对定位来设置元素位置")]),t._v(" "),v("h2",{attrs:{id:"cartdetails-组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cartdetails-组件"}},[t._v("#")]),t._v(" CartDetails 组件")]),t._v(" "),v("p",[v("code",[t._v("slot")]),t._v(" —— 我们希望父组件的功能不变，然后指定父组件里要显示的内容")]),t._v(" "),v("p",[t._v("以前父组件的内容是写死的，在哪儿引入父组件，里边的内容都是固定的 —— "),v("code",[t._v("slot")]),t._v("解决")]),t._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"title"}),v("p",[t._v("问题：数据是在当前组件中获取的 —— 只能显示固定数据 —— 耦合 —— 不能复用 —— 其他组价调用时只能得到固定的数据，无法根据需求来显示数据\n解决： 把获取数据的工作抽象出去，当前组件通过属性的配置来得到要显示的数据，其他组件在使用时，也通过属性来设置要显示的数据，要显示啥就传啥")])]),v("p",[t._v("把"),v("code",[t._v("mealBody")]),t._v("中的数据给抽象出去")]),t._v(" "),v("ul",[v("li",[t._v("问题：筛选框失效")]),t._v(" "),v("li",[t._v("解决：把调用了筛选方法的数据传过去")])]),t._v(" "),v("p",[t._v("待解决问题：")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("props")]),t._v("能传类，但是无法调用传过来的类的属性和方法？是不是"),v("code",[t._v("props")]),t._v("通常只会传数据（"),v("code",[t._v("Aarry")]),t._v("）")]),t._v(" "),v("li",[t._v("购物车商品手动删除空之后，显示“暂无该商品信息” —— 是"),v("code",[t._v("filter")]),t._v('查询不到的内容 —— 应该显示购物车内容为空的信息 —— "暂无选购商品信息" —— 已解决（给'),v("code",[t._v("mealBody")]),t._v("添加属性，控制是在购物车内显示还是在主列表显示）")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("在一个组件中可以修改另一个组件的样式，直接通过"),v("code",[t._v("css")]),t._v("定义"),v("code",[t._v(".xxx")]),t._v("来修改，前提是要修改的组件最外层的"),v("code",[t._v("div")]),t._v("的类是"),v("code",[t._v("xxx")]),t._v("，不是最外层是无法修改的")])]),v("h2",{attrs:{id:"mask-组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mask-组件"}},[t._v("#")]),t._v(" Mask 组件")]),t._v(" "),v("p",[t._v("遮罩层，它不是其他组件的子组件，它是一个单独的东西")]),t._v(" "),v("p",[v("code",[t._v("Teleport")]),t._v("可以将组件渲染到网页的指定位置 —— 想去哪儿就去哪儿")]),t._v(" "),v("div",{staticClass:"language-vue extra-class"},[v("pre",{pre:!0,attrs:{class:"language-vue"}},[v("code",[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Teleport")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v('"#hello"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t// 渲染到id为hello的元素中\n"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Teleport")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),v("h2",{attrs:{id:"dialog-组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dialog-组件"}},[t._v("#")]),t._v(" Dialog 组件")]),t._v(" "),v("p",[t._v("也是继承于"),v("code",[t._v("Mask")]),t._v("组件 —— 但要注意与"),v("code",[t._v("CartDetail")]),t._v("组件的区别\n因为是"),v("code",[t._v("Mask")]),t._v("的子组件，所以可以调用"),v("code",[t._v("Mask")]),t._v("的"),v("code",[t._v("hide")]),t._v("方法，不必再单独写一个方法来控制"),v("code",[t._v("Dialog")]),t._v("的隐藏和显示")]),t._v(" "),v("blockquote",[v("p",[t._v("注意调用的是"),v("code",[t._v("Mask")]),t._v("的"),v("code",[t._v("emits")]),t._v("事件，但是不影响其他使用Mask组件的地方，只是进行了dialog的显示和隐藏 —— 为什么？—— 每个组件是独立的")])]),t._v(" "),v("p",[t._v("清空购物车 —— 确认按钮")]),t._v(" "),v("ol",[v("li",[t._v("把购物车内的商品清空 —— 方法")]),t._v(" "),v("li",[t._v("关闭对话框 —— "),v("code",[t._v("mask")]),t._v("的"),v("code",[t._v("hide")])]),t._v(" "),v("li",[t._v("关闭"),v("code",[t._v("CartDetails")]),t._v(" —— "),v("code",[t._v("mask")]),t._v("的"),v("code",[t._v("hide")])])]),t._v(" "),v("p",[t._v("对话框特点 —— 无论点确认还是取消，对话框都要关闭")]),t._v(" "),v("h2",{attrs:{id:"checkout-组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#checkout-组件"}},[t._v("#")]),t._v(" Checkout 组件")]),t._v(" "),v("p",[t._v("点击去结算之后显示该组件，内容与购物车内容一致，但细节上有区别")]),t._v(" "),v("ol",[v("li",[t._v("首先是一个大背景框，充满整个屏幕，点击去结算按钮显示，点击"),v("code",[t._v("close")]),t._v("符号关闭")]),t._v(" "),v("li",[v("code",[t._v("detail")]),t._v("内容部分又分成三部分，"),v("code",[t._v("header")]),t._v("，购物车内容"),v("code",[t._v("list")]),t._v("，"),v("code",[t._v("footer")])]),t._v(" "),v("li",[v("code",[t._v("list")]),t._v("分成照片（上），"),v("code",[t._v("info")]),t._v("（下）两部分("),v("code",[t._v("info")]),t._v("上面放汉堡名字，下面放"),v("code",[t._v("Counter")]),t._v("和数量)")]),t._v(" "),v("li",[v("code",[t._v("footer")]),t._v("参考"),v("code",[t._v("Cartbar")]),t._v("组价的结算部分内容即可")])]),t._v(" "),v("p",[t._v("发现与"),v("code",[t._v("Cartbar")]),t._v("有很多相同代码，优化 —— 把下方的结算部分给抽象成一个组件 —— "),v("code",[t._v("Pay.vue")])]),t._v(" "),v("h2",{attrs:{id:"杂"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#杂"}},[t._v("#")]),t._v(" 杂")]),t._v(" "),v("p",[v("code",[t._v("vw")]),t._v(" 视口宽度"),v("br"),t._v("\n图的单位和 "),v("code",[t._v("rem")]),t._v(" 的单位对应起来了 —— "),v("code",[t._v("calc(100vw / 750)")]),t._v(" —— "),v("code",[t._v("750")]),t._v(" 是设计图的宽度 —— 把 "),v("code",[t._v("100vw")]),t._v(" 平均分为了 "),v("code",[t._v("750")]),t._v(" 份 —— "),v("code",[t._v("1rem = 100 / 750 vw")]),t._v(" "),v("code",[t._v("vh")]),t._v(" 视口高度")]),t._v(" "),v("p",[t._v("图片下间隙（有多余空白）问题的解决方法")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://blog.51cto.com/phyger/5276254",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),v("OutboundLink")],1)]),t._v(" "),v("ol",[v("li",[t._v("设置 "),v("code",[t._v("img")]),t._v(" 样式 "),v("code",[t._v("vertical-align")]),t._v(" —— 只要不是 "),v("code",[t._v("baseline")]),t._v(" 即可")]),t._v(" "),v("li",[t._v("设置 "),v("code",[t._v("img")]),t._v(" 为 "),v("code",[t._v("display:block")]),t._v(" —— 把图片转块")]),t._v(" "),v("li",[t._v("给图片的父元素设置 "),v("code",[t._v("font-size")]),t._v(" 或 "),v("code",[t._v("line-height")]),t._v(" 为 "),v("code",[t._v("0")])])]),t._v(" "),v("p",[v("code",[t._v("vertical-align")]),t._v(" 的原因分析")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/449792738?utm_id=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("可以理解为图片后又一个空白节点，图片的 "),v("code",[t._v("vertical-align")]),t._v("："),v("code",[t._v("baseline")]),t._v("（默认），图片需要后虚拟的空白节点 "),v("code",[t._v("baseline")]),t._v(" 对齐，所以将父级容器的下边沿向下撑开了。")]),t._v(" "),v("p",[v("code",[t._v("padding")]),t._v(" 属性的理解")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/Tianqi_techshow/article/details/103657894",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("code",[t._v("filter()")]),t._v(" —— 返回一个数组"),v("br"),t._v(" "),v("code",[t._v("reduce()")]),t._v(" —— 两个参数，第一个参数用来统计总数量，第二个参数遍历数组中的每个商品")]),t._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"title"}),v("p",[t._v("报错 "),v("code",[t._v("net:: ERR_ABORTED 500 (Internal Server Error)")]),t._v(" —— 引号嵌套问题 —— 双引号中再使用引号要用单引号")])]),v("p",[v("code",[t._v("color: inherit")]),t._v(" —— 继承")]),t._v(" "),v("p",[v("code",[t._v("position")]),t._v("设置"),v("code",[t._v("fix")]),t._v("后，要记得设置"),v("code",[t._v("width")]),t._v("，把内容撑起来")]),t._v(" "),v("p",[v("code",[t._v(':="$attrs"')]),t._v(" —— 接收透传的属性")]),t._v(" "),v("p",[v("code",[t._v("const emits = defineEmits()")]),t._v(";  —— 可以通过"),v("code",[t._v("emits()")]),t._v("来调用，也可以通过")]),t._v(" "),v("p",[v("code",[t._v("$emit")]),t._v(" 是调用全局的"),v("code",[t._v("emit")]),t._v("对象")]),t._v(" "),v("p",[v("code",[t._v("emits")]),t._v("也会有透传效果，也就是自定义事件会传给该组件，也会传个组件内的其他元素")]),t._v(" "),v("p",[t._v("如果没有声明自定义事件，此时的"),v("code",[t._v("emits")]),t._v("状态是什么样呢？")]),t._v(" "),v("p",[v("code",[t._v(".toString()")]),t._v(" —— 返回对象的字符串表示形式 —— 结果是字符串")]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("p",[t._v("可以让这个元素充满整个屏幕，在写弹窗效果时经常会这样用，如果在"),v("code",[t._v("body")]),t._v("设置，可以控制不让"),v("code",[t._v("body")]),t._v("滚动，"),v("code",[t._v("top")]),t._v("和"),v("code",[t._v("bottom")]),t._v("可以同时设置的，"),v("code",[t._v("fixed")]),t._v("和"),v("code",[t._v("absolute")]),t._v("是近亲，是相对于浏览器的"),v("code",[t._v("viewport")]),t._v("定位，类似的"),v("code",[t._v("position")]),t._v("的值还有"),v("code",[t._v("sticky")])]),t._v(" "),v("p",[t._v("如何将发送过来的一次性数据给解构成动态的？")])])}),[],!1,null,null,null);v.default=a.exports}}]);