# 第二周总结

## 编程语言通识

### 语言按语法分类

非形式语言

- 中文，英文

形式语言（乔姆斯基谱系）

- 0 型 无限制文法
- 1 型 上下文相关文法
- 2 型 上下文无关文法
- 3 型 正则文法

### 生产式（BNF）

- 用尖括号括起来的名称来表示语法结构名
- 语法结构分成基础结构和需要用其他语法结构定义的复合结构
  - 基础结构称终结符
  - 复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- \*表示重复多次
- ｜表示或
- +表示至少一次

四则运算：1+2\*3  
终结符：

- Number
- +-\*/

非终结符：

- MultiplicativeExpression
- AdditiveExpression

带括号的四则运算产生式：

```javascript
  <Number> = "0" | "1" | "2" | ..... | "9"

  <DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* )

  <PrimaryExpression> = <DecimalNumber> | "(" <locigalExpression> ")"

  <MultiplicativeExpression> = <PrimaryExpression> |
    <MultiplicativeExpression> "*" <PrimaryExpression> ｜
    <MultiplicativeExpression> "/" <PrimaryExpression>

  <AdditiveExpression> = <MultiplicativeExpression> |
    <AdditiveExpression> "+" <MultiplicativeExpression> ｜
    <AdditiveExpression> "-" <MultiplicativeExpression>

  <locigalExpression> = <AdditiveExpression> |
    <locigalExpression> "||" <AdditiveExpression> |
    <locigalExpression> "&&" <AdditiveExpression>
```

### 通过产生式理解乔姆斯基谱系

- 0 型 无限制文法
  - ? ::= ?
- 1 型 上下文相关文法
  - ?< A >? ::= ?< B >?
- 2 型 上下文无关文法
  - < A > ::= ?
- 3 型 正则文法
  - < A > ::= < A > ?
  - < A > ::= ? < A >

### 其他产生式

> EBNF ABNF Customized  
> AdditiveExpression:  
>  MultiplicativeExpression  
>  AdditiveExpression + MultiplicativeExpression  
>  AdditiveExpression - MultiplicativeExpression

### 现代语言的特例

- C++中，\*可能表示乘法或者指针，具体是哪个，取决于星号前面的标识符是否被声明为类型
- VB 中，<可能是小于号，也可能是 XML 直接量的开始，取决于当前位置是否可以接收 XML 直接量
- Python 中，行首的 tab 符和空格会根据上一行的行首空白以一定规则被处理成虚拟终结符 indent 或者 dedent
- JavaScript 中，/可能是除号，也可能是正则表达式开头，处理方式类似于 VB，字符串模版中也需要特殊处理}，还有自动插入分号规则

### 图灵完备性

- 命令式————图灵机
  - goto
  - if 和 while
- 声明式————lambda
  - 递归

### 动态与静态

动态：

- 在用户的设备/在线服务器上
- 产品实际运行时
- Runtime

静态：

- 在程序员的设备上
- 产品开发时
- Compiletime

### 类型系统

- 动态类型系统与静态类型系统
- 强类型与弱类型（无隐式转换的类型是强类型，有隐式转换的类型是弱类型）
  - String + Number
  - String == Boolean
- 复合类型
  - 结构体
  - 函数签名
- 子类型
  - 逆变/协变

> 凡是能用 Array<Parent> 的地方，都能用 Array<Child>  
> 凡是能用 Function<Child> 的地方，都能用 Function<Parent>

### 一般命令式编程语言

Atom

- Identifier
- Literal

Expression

- Atom
- Operator
- Punctuator

Statement

- Expression
- Keyword
- Punctuator

Structure

- Function
- Class
- Process
- Namespace
- ......

Program

- Program
- Module
- Package
- Library
