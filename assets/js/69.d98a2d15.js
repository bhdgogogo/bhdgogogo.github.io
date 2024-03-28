(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{496:function(t,a,s){"use strict";s.r(a);var e=s(1),v=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"双重数据绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双重数据绑定"}},[t._v("#")]),t._v(" 双重数据绑定")]),t._v(" "),a("p",[t._v("这里我们将表单项的 "),a("code",[t._v("value")]),t._v(" 属性和变量 "),a("code",[t._v("text")]),t._v(" 做了绑定"),a("br"),t._v("\n当 "),a("code",[t._v("value")]),t._v(" 发生变化时，"),a("code",[t._v("text")]),t._v(" 变量会随之变化（单向绑定）")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v('let text = ref(" ")\n'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(event) => (text = event.target.value)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("当 "),a("code",[t._v("value")]),t._v(" 或 "),a("code",[t._v("text")]),t._v(" 任意一个发生变化，另一个也会随之变化（双向绑定）")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(event) => (text = event.target.value)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("双重数据绑定的作用就是让 "),a("code",[t._v("vue")]),t._v(" 可以获取到该值（数据），从而我们修改该值（数据）时，不用去找 "),a("code",[t._v("html")]),t._v(" 元素，只需要找我们双重绑定的那个变量即可，这让我们的开发更加灵活")])]),a("h2",{attrs:{id:"v-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-model"}},[t._v("#")]),t._v(" v-model")]),t._v(" "),a("p",[a("code",[t._v('v-model = "text"')]),t._v(" —— "),a("code",[t._v("v-model:value")]),t._v("的简写 —— 因为"),a("code",[t._v("v-model")]),t._v("默认收集的就是"),a("code",[t._v("value")]),t._v("值")]),t._v(" "),a("p",[a("strong",[t._v("就等价于")])]),t._v(" "),a("p",[a("code",[t._v('@input="(event) => (text = event.target.value)"')]),t._v(" "),a("code",[t._v(':value="text"')])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("可以自己制定 "),a("code",[t._v("true")]),t._v(" 和 "),a("code",[t._v("false")]),t._v(" 的值，比如设置 "),a("code",[t._v("true")]),t._v(" 为是，设置 "),a("code",[t._v("false")]),t._v(" 为否\n"),a("code",[t._v("true-value")]),t._v(' = "是"')]),t._v(" "),a("p",[a("code",[t._v("false-value")]),t._v(' = "否"')]),t._v(" "),a("p",[a("code",[t._v("v-model")]),t._v("只能应用与表单类元素（输入类元素）上，比如"),a("code",[t._v("input")]),t._v(", "),a("code",[t._v("select")]),t._v("等")])]),a("p",[a("code",[t._v("v-model")]),t._v(" 修饰符")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(".lazy")]),t._v(" 使用 "),a("code",[t._v("change")]),t._v(" 来处理数据")]),t._v(" "),a("li",[a("code",[t._v(".trim")]),t._v(" 去除前后的空格")]),t._v(" "),a("li",[a("code",[t._v(".number")]),t._v(" 将数据转换为数值")])]),t._v(" "),a("h2",{attrs:{id:"自定义事件-emits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义事件-emits"}},[t._v("#")]),t._v(" 自定义事件(emits)")]),t._v(" "),a("h3",{attrs:{id:"什么时候用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么时候用"}},[t._v("#")]),t._v(" 什么时候用？")]),t._v(" "),a("p",[t._v("当我们想要调用父组件的方法时，而利用"),a("code",[t._v("props")]),t._v("传数据是自上向下的 —— 父给子传，所以我们通过自定义事件的方式（"),a("code",[t._v("emits")]),t._v("）来实现回传的效果，从而完成父子组件之间的通信 —— 子调用父的方法")]),t._v(" "),a("h3",{attrs:{id:"怎么用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么用"}},[t._v("#")]),t._v(" 怎么用？")]),t._v(" "),a("p",[t._v("父组件写函数，通过@的形式发送给其他组件")]),t._v(" "),a("p",[a("code",[t._v('@del="xxx"')])]),t._v(" "),a("p",[t._v("子组件通过"),a("code",[t._v('$emit("xxx")')]),t._v("来调用父组件传过来的方法")]),t._v(" "),a("blockquote",[a("p",[t._v("但是此时父组件是不知道我们子组件有什么自定义事件的（缺少关联性），就是不知道@后的的内容\n所以我们一般用如下的方式来使用 emits")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个自定义事件xxx")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" emits "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineEmits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"del"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 然后在父组件就可以获取到该组件的自定义事件，然后给该自定义事件绑定函数")]),t._v("\n@del"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件就可以通过emits来调用父组件的函数方法了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("子组件声明一个自定义事件，通过"),a("code",[t._v('emits("xxx")')]),t._v("来调用父组件中的方法")]),t._v(" "),a("h2",{attrs:{id:"杂"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#杂"}},[t._v("#")]),t._v(" 杂")]),t._v(" "),a("p",[a("code",[t._v("submit")]),t._v(" 默认会进行页面的跳转 —— "),a("code",[t._v("submit.prevent")]),t._v(" 可以取消默认跳转行为")]),t._v(" "),a("p",[a("code",[t._v("event")]),t._v(" （函数）是 "),a("code",[t._v("vue")]),t._v(" 给我们的自动传进来的")]),t._v(" "),a("p",[a("code",[t._v("event.target")]),t._v(" 表示的是触发事件的元素，事件是谁触发的就返回谁")]),t._v(" "),a("p",[t._v("自己的事情自己做，一个"),a("code",[t._v("vue")]),t._v("文件就只干一个工作，在该文件的数据就在该文件中处理，其他文件想要读取数据可以，但是要修改这些数据就要调用该文件的方法。")]),t._v(" "),a("p",[t._v("有很多场景我们进行字符串拼接时会同时使用单引号和双引号，这个时候要遵循一个原则："),a("br"),t._v(" "),a("strong",[t._v("要成对嵌套使用，外层用单引号里面就用双引号，外层用双引号里面就用单引号")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"}),a("p",[t._v("要传递一整个字符串对象时，外层要用双引号，里面用单引号，变量拼接处肯定使用的是双引号，就可以传递成功")])]),a("ul",[a("li",[t._v("加上花括号：只导入模块中的指定变量或函数")]),t._v(" "),a("li",[t._v("不加花括号： 导入整个模块")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("如果导入的模块没有默认导出（即没有"),a("code",[t._v("export default")]),t._v("语句），则必须使用花括号来指定导入的变量或函数。如果导入的模块有默认导出，则可以使用不加花括号的语法来导入整个模块对象。")])]),a("p",[a("code",[t._v("tbody")]),t._v("外不能用"),a("code",[t._v("div")]),t._v("来装，如果"),a("code",[t._v("tbody")]),t._v("外层有"),a("code",[t._v("div")]),t._v("，那就跟表头"),a("code",[t._v("tr")]),t._v("不对应了，样式会乱")]),t._v(" "),a("p",[t._v("事件访问需要在事件前加上"),a("code",[t._v("on")]),t._v("，而且通过透传访问事件时也要加"),a("code",[t._v("on")]),t._v("，并且要用驼峰命名")]),t._v(" "),a("p",[t._v("数据和数据的操作方法应该放在一个组件中")]),t._v(" "),a("p",[t._v("把响应式对象转化为普通对象")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("Object.assign")]),t._v(" —— 浅复制 —— 可以用来")]),t._v(" "),a("li",[t._v("解构展开 —— "),a("code",[t._v("{... xxx}")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);