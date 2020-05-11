# 第四周总结

## 重学 JavaScript | 结构化

### Promise 面试题

```javascript
new Promise((resolve) => resolve()).then(() => console.log("1"));

setTimeout(function () {
  console.log("2");
  new Promise((resolve) => resolve()).then(console.log("3"));
}, 0);
console.log("4");
/* 输出顺序 4 1 undefined 2 3
 4是第一个宏任务里的第一个微任务 
 1是第一个宏任务里的第二个微任务
 2是第二个宏任务里的第一个微任务
 3是第二个宏任务里的第二个微任务

 1 2 3 4 是四段异步代码
 */
```

```javascript
new Promise((resolve) => (console.log("0"), resolve())).then(() =>
  console.log("1")
);

setTimeout(function () {
  console.log("2");
  new Promise((resolve) => resolve()).then(console.log("3"));
}, 0);
console.log("4");
console.log("5");

/* 输出顺序 0 4 5 1 undefined 2 3
 0 4 5 是同步代码
 1是第一个微任务里的异步代码
 2是第二个宏任务里的第一个微任务里的异步代码
 3是第二个宏任务里的第二个微任务的异步代码
 */
```

```javascript
async function afoo() {
  console.log("-2");

  await new Promise((resolve) => resolve());
  console.log("-1");
}

new Promise((resolve) => (console.log("0"), resolve())).then(
  () => (
    console.log("1"),
    new Promise((resolve) => resolve()).then(() => console.log("1.5"))
  )
);

setTimeout(function () {
  console.log("2");
  new Promise((resolve) => resolve()).then(console.log("3"));
}, 0);
console.log("4");
console.log("5");
afoo();
/* 输出顺序 0 4 5 -2 1 -1 1.5 Promise 2 3
-2是同步代码
-1是第三个微任务

宏任务
- 0,4,5,-2 (入队 1, -1)
- 1 (入队 1.5)
- -1
- 1.5
宏任务
- 2
- 3
*/
```

### 参考名词：

- OC： Objective-C 是一种通用、高级、面向对象的编程语言。它扩展了标准的 ANSI C 编程语言，将 Smalltalk 式的消息传递机制加入到 ANSI C 中。当前主要支持的编译器有 GCC 和 Clang（采用 LLVM 作为后端）。

### JS 执行粒度

- 宏任务
- 微任务（Promise）
- 函数调用（Execution Context）
- 语句/声明
- 表达式
- 直接量/变量/this ......

### Realm

- JS Context => Realm
- 宏任务
- 微任务（Promise）
- 函数调用（Execution Context）
- 语句/声明
- 表达式
- 直接量/变量/this ......

* AntV G6 可视化

### 函数调用

```javascript
import {foo} from "foo.js"
var i = 0
console.log(i)
foo()
console.log(i)
i++

// foo.js
function foo(){
  var x = 1
  console.log(x)
}
export foo
```

### Execution Context

- ECMAScript Code Execution Context
  - code evaluation state
  - Function
  - Script or Module
  - Realm
  - LexicalEnvironment
  - VariableEnvironment
- Generator Execution Contexts
  - code evaluation state
  - Function
  - Script or Module
  - Realm
  - LexicalEnvironment
  - VariableEnvironment
  - Generator

### LexicalEnvironment

- this
- new.target
- super
- 变量

### VariableEnvironment

VariableEnvironment 是个历史遗留的包袱，仅仅用于处理 var 声明。
