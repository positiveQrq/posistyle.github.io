(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{201:function(t,s,a){t.exports=a.p+"assets/img/event_loop1.cd58de86.jpeg"},202:function(t,s,a){t.exports=a.p+"assets/img/event_loop2.472d3ad4.jpeg"},221:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"js为什么是单线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js为什么是单线程"}},[t._v("#")]),t._v(" js为什么是单线程?")]),t._v(" "),n("p",[t._v("假设javascript有两个线程，一个在某个DOM节点添加内容，另一个线程在这个节点上删除内容，这是浏览器应该以哪个线程为准？\n这就意味着单线程作为javascript的核心标准，将一直沿用下去。")]),t._v(" "),n("h3",{attrs:{id:"js为什么需要异步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js为什么需要异步"}},[t._v("#")]),t._v(" JS为什么需要异步?")]),t._v(" "),n("p",[t._v('既然js是单线程，那么意味着，当先我们执行一个任务，什么事都干不了，只能等待他执行完。如果执行的任务需要等待很长的时间，对于用户而言阻塞就意味着"卡死",这样就导致了很差的用户体验')]),t._v(" "),n("h3",{attrs:{id:"js单线程又是如何实现异步的呢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js单线程又是如何实现异步的呢"}},[t._v("#")]),t._v(" JS单线程又是如何实现异步的呢?")]),t._v(" "),n("p",[t._v("是通过的js事件循环(event loop)")]),t._v(" "),n("h2",{attrs:{id:"js中的-event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js中的-event-loop"}},[t._v("#")]),t._v(" JS中的 Event loop")]),t._v(" "),n("ul",[n("li",[t._v("同步任务")])]),t._v(" "),n("blockquote",[n("p",[t._v("同步任务说白了就是主线程来执行的时候立即就能执行的代码")])]),t._v(" "),n("ul",[n("li",[t._v("异步任务")])]),t._v(" "),n("blockquote",[n("p",[t._v("异步任务就是你先去执行别的 task，等我这完成之后再往 Task Queue 里面塞一个 task 的同步任务来 "),n("strong",[t._v("等待")]),t._v(" 被执行")])]),t._v(" "),n("h4",{attrs:{id:"循环示例图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#循环示例图"}},[t._v("#")]),t._v(" 循环示例图")]),t._v(" "),n("p",[n("img",{attrs:{src:a(201),alt:"Image text"}})]),t._v(" "),n("p",[t._v("1.主线程自上而下执行所有代码")]),t._v(" "),n("p",[t._v("2.同步任务直接进入到主线程被执行，而异步任务则进入到 Event Table 并注册相对应的回调函数")]),t._v(" "),n("p",[t._v("3.异步任务完成后，Event Table 会将这个函数移入 Event Queue")]),t._v(" "),n("p",[t._v("4.主线程任务执行完了以后，会从Event Queue中读取任务，进入到主线程去执行。")]),t._v(" "),n("p",[t._v("循环如上也就是常说的Event Loop(事件循环)")]),t._v(" "),n("h4",{attrs:{id:"示例代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javascript"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'发送成功!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这是一个同步任务'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("示例执行说明")])]),t._v(" "),n("blockquote",[n("p",[t._v("ajax 请求首先进入到 Event Table ，分别注册了success回调函数。")])]),t._v(" "),n("blockquote",[n("p",[t._v("主线程执行同步任务：console.log('这是一个同步任务');")])]),t._v(" "),n("blockquote",[n("p",[t._v("主线程任务执行完毕，看Event Queue是否有待执行的 task,这里是不断地检查，只要主线程的task queue没有任务执行了，主线程就一直在这等着")])]),t._v(" "),n("blockquote",[n("p",[t._v("ajax 执行完毕，将回调函数push 到Event Queue。")])]),t._v(" "),n("blockquote",[n("p",[t._v("主线程“终于”等到了Event Queue里有 task可以执行了，执行对应的回调任务。")])]),t._v(" "),n("blockquote",[n("blockquote",[n("p",[t._v("如此往复。")])])]),t._v(" "),n("h2",{attrs:{id:"宏任务-macrotask-、微任务-microtask"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#宏任务-macrotask-、微任务-microtask"}},[t._v("#")]),t._v(" 宏任务(MacroTask)、微任务(MicroTask)")]),t._v(" "),n("ul",[n("li",[t._v("宏任务（macro task）：在新标准中叫task")])]),t._v(" "),n("blockquote",[n("p",[t._v("宏任务主要包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering")])]),t._v(" "),n("ul",[n("li",[t._v("微任务（micro task）：在新标准中叫jobs")])]),t._v(" "),n("blockquote",[n("p",[t._v("微任务主要包括：process.nextTick, Promise.then(), Object.observe(已废弃), MutationObserver(html5新特性)")])]),t._v(" "),n("h4",{attrs:{id:"事件循环示例图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件循环示例图"}},[t._v("#")]),t._v(" 事件循环示例图")]),t._v(" "),n("p",[n("img",{attrs:{src:a(202),alt:"Image text"}})]),t._v(" "),n("p",[t._v("1.执行所有调用栈中的宏任务")]),t._v(" "),n("p",[t._v("2.宏任务执行过程中产生的微任务加入到微任务队列")]),t._v(" "),n("p",[t._v("3.宏任务执行完立刻执行所有微任务队列中的任务")]),t._v(" "),n("p",[t._v("4.以上执行完毕，检查渲染，GUI线程接管渲染")]),t._v(" "),n("p",[t._v("5.渲染完毕后，js线程接管，开启下一次事件循环（每一次事件循环（script不包括），只处理一个宏任务），执行下一次宏任务（任务队列中取）")]),t._v(" "),n("h4",{attrs:{id:"示例代码-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'7'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ul",[n("li",[t._v("示例执行说明")])]),t._v(" "),n("h4",{attrs:{id:"第一轮"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一轮"}},[t._v("#")]),t._v(" 第一轮")]),t._v(" "),n("p",[t._v("1.执行所有调用栈中的宏任务--\x3e(setTimeout, setTimeout, new Promise, new Promise， console.log('8)) // "),n("label",{staticStyle:{color:"red"}},[t._v("打印8")])]),t._v(" "),n("p",[t._v("2.当执行setTimeout（timer1，timer2）任务（异步任务）时进入到 Event Table 中，并注册相应的回调函数，执行完毕后将回调函数放入Event Queue,等待被执行")]),t._v(" "),n("p",[t._v("3.当执行new Promise（p1， p2）时产生的微任务将其加入微任务队列，等待当前循环的全部宏任务执行完之后顺序调用 // "),n("label",{staticStyle:{color:"red"}},[t._v("将 console.log('4') + p4 + timer3， console.log('7')添加到微任务队列")])]),t._v(" "),n("p",[t._v("4.当前所有的宏任务执行完之后，执行微任务队列中的所有微任务")]),t._v(" "),n("p",[t._v("4.1 执行p1产生的微任务：")]),t._v(" "),n("p",[t._v("1） 执行console.log('4') // "),n("label",{staticStyle:{color:"red"}},[t._v("打印4")])]),t._v(" "),n("p",[t._v("2） 将new Promise（p4）产生的微任务加入微任务队列 // "),n("label",{staticStyle:{color:"red"}},[t._v("将console.log('5')添加到微任务队列")])]),t._v(" "),n("p",[t._v("3） 当执行setTimeout（timer3）任务（异步任务）时进入到 Event Table 中，并注册相应的回调函数，执行完毕后将回调函数放入Event Queue,等待被执行")]),t._v(" "),n("p",[t._v("4.2 执行p2产生的微任务：")]),t._v(" "),n("ol",[n("li",[t._v("执行console.log('7') //"),n("label",{staticStyle:{color:"red"}},[t._v("打印7")])])]),t._v(" "),n("p",[t._v("6.检查当前还有可执行的微任务console.log('5') //"),n("label",{staticStyle:{color:"red"}},[t._v("打印5")])]),t._v(" "),n("h4",{attrs:{id:"第二轮"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二轮"}},[t._v("#")]),t._v(" 第二轮")]),t._v(" "),n("p",[t._v("5.主线程空闲时（或者说进行下一轮宏任务的执行）执行setTimeout（timer1）的注册的回调函数console.log(1)，回调函数又将new Promise（p3）产生的微任务将其加入微任务队列 // "),n("label",{staticStyle:{color:"red"}},[t._v("打印1,， 将 console.log('2')添加到微任务队列，")])]),t._v(" "),n("p",[t._v("7.检查当前有可执行的微任务console.log('2') //"),n("label",{staticStyle:{color:"red"}},[t._v("打印2")])]),t._v(" "),n("h4",{attrs:{id:"第三轮"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三轮"}},[t._v("#")]),t._v(" 第三轮")]),t._v(" "),n("p",[t._v("8.接着执行setTimeout（timer2）的注册的回调函数 console.log('3')// "),n("label",{staticStyle:{color:"red"}},[t._v("打印3")])]),t._v(" "),n("h4",{attrs:{id:"第四轮"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第四轮"}},[t._v("#")]),t._v(" 第四轮")]),t._v(" "),n("p",[t._v("9.检查当前没有可执行的微任务，进行下一轮宏任务的执行即 setTimeout（timer3）的注册的回调函数 console.log('6') // "),n("label",{staticStyle:{color:"red"}},[t._v("打印6")])]),t._v(" "),n("blockquote",[n("p",[t._v("如此往复执行完宏任务之后再去执行当前循环队列中的微任务。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("打印顺序为：8>4>7>5>1>2>3>6")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);