# 第三周总结

## 表达式，类型转换（2020.4.23）

### Expressions

- Member

  - a.b
  - a[b]
  - foo`string`
  - super.b
  - super['b']
  - new.target
  - new Foo()

- New

  - new Foo

- Call

  - foo()
  - super()
  - foo()['b']
  - foo().b
  - foo()`abc`

- Left Handside & Right Handside

- Update

  - a ++
  - a --
  - -- a
  - ++ a

- unary

  - delete a.b
  - void foo()
  - typeof a
  - +a
  - -a
  - ~a
  - !a
  - await a

- Exponental
  - \*\*
- Multiplicative
  - \*/%
- Additive
  - +-
- Shift
  - << >> >>>
- Relationship
  - < > <= >= instanceof in
- Equality
  - ==
  - !=
  - ===
  - !==
- Bitwise
  - &^|
- Logical
  - &&
  - ||
- Conditional
  - ? :

```javascript
function convertStringToNumber(string, x) {
  if (arguments.length < 2) x = 10;
  var chars = string.split("");
  var number = 0;
  var i = 0;
  while (i < chars.length && chars[i] != ".") {
    number = number * x;
    number += chars[i].codePointAt(0) - "0".codePointAt(0);
    i++;
  }
  if (chars[i] === ".") {
    i++;
  }
  var fraction = 1;
  while (i < chars.length) {
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - "0".codePointAt(0)) * fraction;
    i++;
  }
  return number;
}
convertStringToNumber("10.0123");
```

```javascript
function convertNumberToString(number, x) {
  var integer = Math.floor(number);
  var fraction = number - integer;
  var string = "";
  while (integer > 0) {
    string = String(integer % x) + string;
    integer = Math.floor(integer / x);
  }
  return string;
}
convertNumberToString(100, 10);
```

### 参考链接

- 讲师提供：<https://jsfiddle.net/pLh8qeor/19/>
- 学员提供：
  - 运算符优先级：< https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence>

### 参考名词

- LeftHandSideExpression：ECMA-262.pdf 201 页 12.3
- UpdateExpression：ECMA-262.pdf 178 页 11.9.1
- IIFE ：Immediately-invoked Function Expressions 立即执行的函数表达式

## 语句，对象（2020.4.25）

### Runtime

- Completion Record
  - [[type]]: normal, break, continue, return, or throw
  - [[value]]: Types
  - [[target]]: label
- Lxical Enviorment

### 简单语句

- ExpressionStatement
  - a = 1 + 2;
- EmptyStatement
  - ;
- DebuggerStatement
  - debugger;
- ThrowStatement
  - throw a;
- ContinueStatement
  - continue label1;
- BreakStatement
  - break label2;
- ReturnStatement
  - return 1 + 2;

### 复合语句

- BlockStatement
  - {}
- IfStatement
- SwitchStatement
- IterationStatement
  - while (...) ...
  - do ... while (...)
  - for(...;...;...) ...
  - for(... in ...) ...
  - for(... of ...) ...
- WithStatement
- LabelledStatement
- TryStatement
  - ```
    try {
      ...
    } catch (...) {
      ...
    } finally {
      ...
    }
    ```

### block

- BlockStatement
  - { }

### 标签、循环、break、continue

- LabelledStatement
- IterationStatement
- ContinueStatement
- BreakStatement
- SwitchStatement

### 声明

- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatement
- ClassDeclaration
- LexicalDeclaration

### Object

> 对象的三要素：唯一性 identifier，状态 state，行为 behavior

#### Object-Prototype

原型是一种更接近人类原始认知的描述对象的方法。我们并不试图做严谨的分类，而是采用“相似”这样的方式去描述对象。任何对象仅仅需要描述它自己与原型的区别即可。

> 我们不应该受到语言描述的干扰。
> 在设计对象的状态和行为时，我们总是遵循“行为改变状态”的原则。

#### Object API/Grammar

- {} . [] Object.defineProperty
- Object.create / Object.setPrototypeOf / Object.getPrototypeOf
- new / class / extends
- new / function / prototype （不推荐使用这个）

### 小知识

- 按照 ECMAScript 标准，一些特定语句（statement) 必须以分号结尾。分号代表这段语句的终止。但是有时候为了方便，这些分号是有可以省略的。这种情况下解释器会自己判断语句该在哪里终止。这种行为被叫做 “自动插入分号”，简称 ASI (Automatic Semicolon Insertion) 。实际上分号并没有真的被插入，这只是个便于解释的形象说法。
- var 最好写在函数内最前面或变量第一次出现的地方

---

### 作业：Standard Built-in ECMAScript Objects

- The Global Object

  - Value Properties of the Global Object
    - NaN
    - Infinity
    - undefined
  - Function Properties of the Global Object
    - eval (x)
    - parseInt (string , radix)
    - parseFloat (string)
    - isNaN (number)
    - isFinite (number)
  - URI Handling Function Properties
    - decodeURI (encodedURI)
    - decodeURIComponent (encodedURIComponent)
    - encodeURI (uri)
    - encodeURIComponent (uriComponent)
  - Constructor Properties of the Global Object
    - Object
    - Function
    - Array
    - String
    - Boolean
    - Number
    - Date
    - RegExp
    - Error
    - EvalError
    - RangeError
    - ReferenceError
    - SyntaxError
    - TypeError
    - URIError
  - Other Properties of the Global Object
    - Math
    - JSON

- Object Objects
  - Object.assign() 通过复制一个或多个对象来创建一个新的对象。
  - Object.create() 使用指定的原型对象和属性创建一个新对象。
  - Object.defineProperty() 给对象添加一个属性并指定该属性的配置。
  - Object.defineProperties() 给对象添加多个属性并分别指定它们的配置。
  - Object.entries() 返回给定对象自身可枚举属性的 [key, value] 数组。
  - Object.freeze() 冻结对象：其他代码不能删除或更改任何属性。
  - Object.getOwnPropertyDescriptor() 返回对象指定的属性配置。
  - Object.getOwnPropertyNames() 返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。
  - Object.getOwnPropertySymbols() 返回一个数组，它包含了指定对象自身所有的符号属性。
  - Object.getPrototypeOf() 返回指定对象的原型对象。
  - Object.is() 比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。
  - Object.isExtensible() 判断对象是否可扩展。
  - Object.isFrozen() 判断对象是否已经冻结。
  - Object.isSealed() 判断对象是否已经密封。
  - Object.keys() 返回一个包含所有给定对象自身可枚举属性名称的数组。
  - Object.preventExtensions() 防止对象的任何扩展。
  - Object.seal() 防止其他代码删除对象的属性。
  - Object.setPrototypeOf() 设置对象的原型（即内部 [[Prototype]] 属性）。
  - Object.values() 返回给定对象自身可枚举值的数组。

- Function Objects
  - Function.prototype.apply() 在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入。
  - Function.prototype.bind() bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind()方法的第一个参数作为 this,传入 bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.
  - Function.prototype.call() 在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入。
  - Function.prototype.isGenerator() 若函数对象为generator，返回true，反之返回 false。
  - Function.prototype.toSource() 获取函数的实现源码的字符串。 覆盖了 Object.prototype.toSource 方法。
  - Function.prototype.toString() 获取函数的实现源码的字符串。覆盖了 Object.prototype.toString 方法。

- Array Objects
  - Array.from() 从类数组对象或者可迭代对象中创建一个新的数组实例。
  - Array.isArray() 用来判断某个变量是否是一个数组对象。
  - Array.of() 根据一组参数来创建新的数组实例，支持任意的参数数量和类型。

- String Objects
  - String.fromCharCode() 通过一串 Unicode 创建字符串。
  - String.fromCodePoint() 通过一串 码点 创建字符串。
  - String.raw() 通过模板字符串创建字符串。

- Boolean Objects
  - Boolean.prototype.toSource() 返回包含Boolean对象源码的字符串；你可以使用这个字符串来创建一个等价的对象。覆盖了Object.prototype.toSource() 方法。
  - Boolean.prototype.toString() 根据对象的值来返回一个字符串："true" 或 "false"。覆盖了 Object.prototype.toString() 方法。
  - Boolean.prototype.valueOf() 返回Boolean对象的原始值。覆盖了 Object.prototype.valueOf() 方法。

- Number Objects
  - Number.isNaN() 确定传递的值是否是 NaN。
  - Number.isFinite() 确定传递的值类型及本身是否是有限数。
  - Number.isInteger() 确定传递的值类型是“number”，且是整数。
  - Number.isSafeInteger() 确定传递的值是否为安全整数 ( -(253 - 1) 至 253 - 1之间)。
  - Number.toInteger() 计算传递的值并将其转换为整数 (或无穷大)。
  - Number.parseFloat() 和全局对象 parseFloat() 一样。
  - Number.parseInt() 和全局对象 parseInt() 一样。

- The Math Objects
  > 内置对象，无法实现

- Date Objects
  > 内置对象，无法实现
  - Date.now() 返回自 1970-1-1 00:00:00  UTC（世界标准时间）至今所经过的毫秒数。
  - Date.parse() 解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。注意: 由于浏览器差异和不一致，强烈建议不要使用Date.parse解析字符串。
  - Date.UTC()接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。

- RegExp Objects
  - Methods inherited from Function: apply, call, toSource, toString

- Error Objects

- The JSON Objects
  - JSON.parse() 解析JSON字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性, 在返回之前进行某些修改。
  - JSON.stringify() 返回与指定值对应的JSON字符串，可以通过额外的参数, 控制仅包含某些属性, 或者以自定义方法来替换某些key对应的属性值。