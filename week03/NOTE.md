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
