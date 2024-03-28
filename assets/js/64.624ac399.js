(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{498:function(v,_,e){"use strict";e.r(_);var t=e(1),o=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"index-js-里发生了什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#index-js-里发生了什么"}},[v._v("#")]),v._v(" index.js 里发生了什么")]),v._v(" "),_("p",[_("code",[v._v("createApp(App)")]),v._v("：将根组件关联到应用上，会返回一个应用实例")]),v._v(" "),_("p",[v._v("应用实例是注册一个可供组件在应用内使用的“全局变量”，可以理解为是我们整个的一个项目")]),v._v(" "),_("p",[v._v("返回的应用实例可以用于注册全局组件")]),v._v(" "),_("blockquote",[_("p",[v._v("注意：应用上只能关联一个根组件\n一旦挂载到一个"),_("code",[v._v("div")]),v._v("上，那原本"),_("code",[v._v("div")]),v._v("中所有的内容都会被覆盖")])]),v._v(" "),_("p",[v._v("写在"),_("code",[v._v("html")]),v._v("中的代码会被"),_("code",[v._v("html")]),v._v("优先解析成小写的格式，如果在"),_("code",[v._v("index.js")]),v._v("写成了大写，那就会报错，因为找不到该组件")]),v._v(" "),_("p",[v._v("组件实例是一个"),_("code",[v._v("Proxy()")]),v._v("对象——代理对象——对该对象进行改造")]),v._v(" "),_("p",[v._v("组件是可以重复使用的，也就是创建多个应用实例（但在实际开发中基本上不会这样做）")]),v._v(" "),_("p",[_("code",[v._v("data")]),v._v("会返回一个对象作为返回值，"),_("code",[v._v("vue")]),v._v("会对该对象进行代理，从而将其转换为响应式数据—— "),_("code",[v._v("return")]),v._v(" 的内容才是响应式数据")]),v._v(" "),_("p",[v._v("但直接向组件实例中添加的属性不会被"),_("code",[v._v("vue")]),v._v("所代理，这些属性的值也就不是响应式数据")]),v._v(" "),_("p",[v._v("可以修改这些属性的值，但是修改这些属性的值时，不会重新渲染页面")]),v._v(" "),_("h2",{attrs:{id:"响应式原理-代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应式原理-代理"}},[v._v("#")]),v._v(" 响应式原理——代理")]),v._v(" "),_("p",[v._v("为对象创建一个代理")]),v._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("const")]),v._v(" proxy "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("new")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("Proxy")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),_("p",[v._v("代理规则（行为）通过配置一个对象来设置，"),_("code",[v._v("get()")]),v._v("设置读取数据时的行为，它的返回值就是最终读取到的值，指定"),_("code",[v._v("get")]),v._v("后， 在通过代理读取对象属性时，就会调用"),_("code",[v._v("get")]),v._v("方法来获取值，而"),_("code",[v._v("set()")]),v._v("会在通过代理修改对象时调用")]),v._v(" "),_("blockquote",[_("p",[v._v("为什么要设置"),_("code",[v._v("get")]),v._v("和"),_("code",[v._v("set")]),v._v("?\n设置了之后，读取和修改属性的行为就变成了在调用方法，那调用方法就变得有意义了\n可以在"),_("code",[v._v("get")]),v._v("中，返回读到的值的前面添加一些操作，可以在"),_("code",[v._v("set")]),v._v("中，修改值之后做一些其他的操作")])]),v._v(" "),_("p",[_("code",[v._v("trigger()")]),v._v("触发所有的使用该值的位置进行更新——响应式数据")]),v._v(" "),_("p",[v._v("只有通过代理对象去修改属性时，才有响应式数据的效果")]),v._v(" "),_("h2",{attrs:{id:"data"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[v._v("#")]),v._v(" data")]),v._v(" "),_("p",[v._v("一句话概述："),_("code",[v._v("data")]),v._v("返回的对象最终会被"),_("code",[v._v("vue")]),v._v("所代理")]),v._v(" "),_("blockquote",[_("p",[v._v("想用的属性，就算暂时不用，也先写上去，可以先赋值为"),_("code",[v._v("null")]),v._v("，后边要用到的时候就可以直接读和改了，就不用往里边加了，在开发中，读取和修改是容易实现的，而如果想要往里边加属性的话，可能会产生未知的问题")])]),v._v(" "),_("h2",{attrs:{id:"methods"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[v._v("#")]),v._v(" methods")]),v._v(" "),_("p",[_("code",[v._v("methods")]),v._v("是一个对象，在对象中可以添加多个方法")]),v._v(" "),_("p",[v._v("这些方法最终会挂载到组件实例上，然后就可以通过组件实例调用了")]),v._v(" "),_("p",[_("code",[v._v("methods")]),v._v("中的"),_("code",[v._v("this")]),v._v("就是组件实例")]),v._v(" "),_("p",[v._v("组件就相当于一个类，data 里的是属性，"),_("code",[v._v("methods")]),v._v("里的是方法")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("methods")]),v._v("在使用时可加括号也可以不加括号，但一般我们约定，调用"),_("code",[v._v("methods")]),v._v("时，我们不加括号，比如 "),_("code",[v._v('@click = "change"')])])]),v._v(" "),_("h2",{attrs:{id:"computed"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[v._v("#")]),v._v(" computed")]),v._v(" "),_("p",[v._v("用来指定计算属性，是通过方法来返回的，属性显示的时候有逻辑就用"),_("code",[v._v("computed")]),v._v(" "),_("code",[v._v("info")]),v._v("就是计算属性")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("info")]),v._v(" 和 "),_("code",[v._v("methonds")]),v._v("计算的区别")])]),v._v(" "),_("ol",[_("li",[_("code",[v._v("info")]),v._v("只在其依赖的数据发生变化时才会重新执行（也就是会对数据进行缓存）")]),v._v(" "),_("li",[v._v("而在"),_("code",[v._v("methonds")]),v._v("中的方法，在组件每次重新渲染时都会执行")])]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("getter")]),v._v("中（也就是"),_("code",[v._v("info")]),v._v("），尽量不要写修改属性的代码，只写根据属性来判断，然后输出。只有"),_("code",[v._v("getter")]),v._v("时可以简写计算属性")]),v._v(" "),_("p",[v._v("计算属性可以设置"),_("code",[v._v("setter")]),v._v("，但是不建议这么做，没有"),_("code",[v._v("set")]),v._v("时，计算属性就是只读的，我们尽量保持"),_("code",[v._v("computed")]),v._v("是只读的，这有利于代码的维护")]),v._v(" "),_("h2",{attrs:{id:"杂"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#杂"}},[v._v("#")]),v._v(" 杂")]),v._v(" "),_("p",[v._v("在标签中插值的时候，也就是双大括号里边，只能写表达式")]),v._v(" "),_("p",[v._v("有返回值的语句就叫表达式")]),v._v(" "),_("p",[v._v("理解原理——搞清楚这件事的来龙去脉")]),v._v(" "),_("p",[v._v("在组件中注册子组件时要注意大小写！")])])}),[],!1,null,null,null);_.default=o.exports}}]);