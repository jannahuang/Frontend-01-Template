# 第二周总结

## 编程语言通识（2020.4.16）

### 语言按语法分类

非形式语言

- 中文，英文

形式语言（乔姆斯基谱系）

> 乔姆斯基谱系：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。

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

> \*\* 幂运算是右结合

### 参考名词

- 乔姆斯基谱系：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次：
  - 0- 型文法（无限制文法或短语结构文法）包括所有的文法。
  - 1- 型文法（上下文相关文法）生成上下文相关语言。
  - 2- 型文法（上下文无关文法）生成上下文无关语言。
  - 3- 型文法（正规文法）生成正则语言。
- Brainfuck ：一种极小化的程序语言，它是由 Urban Müller 在 1993 年创造的。由于 fuck 在英语中是脏话，这种语言有时被称为 Brainfck 或 Brainf\*\*，或被简称为 BF。
- 巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。
  - 图灵机（Turing machine）：又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器。
- 图灵完备性：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。
- Bjarne Stroustrup（比雅尼·斯特劳斯特鲁普）：1950 年 12 月 30 日生于丹麦奥胡斯郡，计算机科学家。他以创造 C++ 编程语言而闻名，被称为“C++ 之父”。

### 小知识

- 终结符： 最终在代码中出现的字符（ https://zh.wikipedia.org/wiki/ 終結符與非終結符）
- 产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
- 静态和动态语言： https://www.cnblogs.com/raind/p/8551791.html
- 强类型： 无隐式转换
- 弱类型： 有隐式转换
- 协变与逆变： https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html
- Yacc 与 Lex 快速入门： https://www.ibm.com/developerworks/cn/linux/sdk/lex/index.html
- 关于元编程： https://www.zhihu.com/question/23856985
- 编程语言的自举： https://www.cnblogs.com/lidyan/p/6727184.html
- 推荐阅读：ECMA-262 Grammar Summary 部分

---

### 词法、类型（2020.4.18）

unicode 字符集
<http://www.fileformat.info/info/unicode/block/index.htm>
要记住的：

- LINE FEED
- SPACE

Blocks 编码组：

- 0~U+007F：常用拉丁字符
  - String.fromCharCode(num)
- U+4E00~U+9FFF(CJK：Chinese Japanese Korean)
  - 有一些增补区域 extension
- U+0000~U+FFF: BMP 基本平面

### InputElement

- WhiteSpace 空格

  - TAB
  - VT
  - FF
  - SP
  - NBSP(no-break space)
  - ZWNBSP(zero width no-break space)
  - USP

- LineTerminator 换行符
  - LF: line feed \n
  - CR: carriage return \r
  - ...
- Comment 注释
  - //
  - /\* \*/
- Token 记号

  - Punctuator 符号
  - IdentifierName 标识符
    - Keywords
    - Identifier
    - Future reserved Keywords: enum
  - Literal 直接量

    - Number

      - Number-Grammar
        - DecimalLiteral
          - 0
          - 0.
          - .2
          - 1e3
        - BinaryIntegerLiteral
          - 0b111
        - OctalIntegerLiteral
          - 0o10
        - HexIntegerLiteral

    - String

      - ASCII
      - Unicode
      - UCS
      - GB
        - GB2312
        - GBK(GB13000)
        - GB18030
      - ISO-8859
      - BIG5

    - Boolean
    - Null
    - Undefined

### 参考链接

- 讲师提供
  - <https://home.unicode.org/>
  - <https://www.fileformat.info/info/unicode/>
- 学员提供
  - (计算浮点数的一个工具)[ https://github.com/camsong/blog/issues/9]
- 小知识
  - 正则表达式： <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions>
  - 揭秘 0.1 + 0.2 != 0.3 <https://www.barretlee.com/blog/2016/09/28/ieee754-operation-in-js/>
  - ASCII，Unicode 和 UTF-8 ： <http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html>

### 参考名词

- 字符集：字符编码（英语：Character encoding）、字集码是把字符集中的字符编码为指定集合中某一对象（例如：比特模式、自然数序列、8 位组或者电脉冲），以便文本在计算机中存储和通过通信网络的传递。常见的例子包括将拉丁字母表编码成摩斯电码和 ASCII。其中，ASCII 将字母、数字和其它符号编号，并用 7 比特的二进制来表示这个整数。通常会额外使用一个扩充的比特，以便于以 1 个字节的方式存储。在计算机技术发展的早期，如 ASCII（1963 年）和 EBCDIC（1964 年）这样的字符集逐渐成为标准。但这些字符集的局限很快就变得明显，于是人们开发了许多方法来扩展它们。对于支持包括东亚 CJK 字符家族在内的写作系统的要求能支持更大量的字符，并且需要一种系统而不是临时的方法实现这些字符的编码。
- Unicode ：中文：万国码、国际码、统一码、单一码。是计算机科学领域里的一项业界标准。它对世界上大部分的文字系统进行了整理、编码，使得电脑可以用更为简单的方式来呈现和处理文字。
- ASCII ：（American Standard Code for Information Interchange，美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统。它主要用于显示现代英语，而其扩展版本延伸美国标准信息交换码则可以部分支持其他西欧语言，并等同于国际标准 ISO/IEC 646。美国信息交换标准代码是这套编码系统的传统命名，互联网号码分配局现在更倾向于使用它的新名字 US-ASCII[2]。美国信息交换标准代码是美国电气和电子工程师协会里程碑之一。
- Token：记号、标记。JS 里有效的输入元素都可以叫 Token。
- NBSP ：不换行空格（英语：no-break space，NBSP）是空格字符，用途是禁止自动换行。HTML 页面显示时会自动合并多个连续的空白字符（whitespace character），但该字符是禁止合并的，因此该字符也称作“硬空格”（hard space、fixed space）。Unicode 码点为：U+00A0 no-break space。
- 零宽空格：（zero-width space, ZWSP）是一种不可打印的 Unicode 字符，用于可能需要换行处。在 HTML 页面中，零宽空格可以替代。但是在一些网页浏览器（例如 Internet Explorer 的版本 6 或以下）不支持零宽空格的功能。
