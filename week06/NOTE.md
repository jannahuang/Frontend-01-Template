# 第六周总结
## 浏览器工作原理 ｜ 有限状态机（2020.5.14）

### 有限状态机
- 每一个状态都是一个机器
  - 在每一个机器里，我们可以做计算、存储、输出......
  - 所有的这些机器接受的输入是一致的
  - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）
- 每一个机器知道下一个状态
  - 每个机器都有确定的下一个状态（Moore）
  - 每个机器根据输入决定下一个状态（Mealy）

### 使用有限状态机处理字符串
- 在一个字符串中，找到字符“a”

### JS 中的有限状态机（Mealy）
// 每个函数是一个状态
function state(input) // 函数参数就是输入
{
  // 在函数中，可以自由地编写代码，处理每个状态的逻辑
  return next; // 返回值作为下一个状态
}

///////以下是调用///////
while(input) {
  // 获取输入
  state = state(input); // 把状态机的返回值作为下一个状态
}

## 浏览器工作原理 ｜ HTTP 协议+语法与词法分析（三）
### parser
#### 第一步总结
- 为了方便文件管理，我们把parser单独拆到文件中
- parser接受HTML文本作为参数，返回一颗DOM树

#### 第二步——创建状态机
https://html.spec.whatwg.org/multipage/parsing.html#before-attribute-name-state

#### 第二步总结
- 我们用FSM来实现HTML的分析
- 在HTML标准中，已经规定了HTML的状态
- Toy-Browser只挑选其中一部分状态，完成一个最简版本

#### 第三步——解析标签
#### 第三步总结
- 主要的标签有：开始标签，结束标签和自封闭标签
- 在这一步暂时忽略属性

#### 第四步——创建元素
#### 第四步总结
- 在状态机中，除了状态迁移，我没还会要加入业务逻辑
- 我们在标签结束状态提交标签token

#### 第五步——处理属性
#### 第五步总结
- 属性值分为单引号、双引号、无引号三种写法，因此需要较多状态处理
- 处理属性的方式跟标签类似
- 属性结束时，我们把属性加到标签Token上

#### 第六步——创建DOM树
#### 第六步总结
- 从标签构建DOM树的基本技巧是使用栈
- 遇到开始标签时创建元素并入栈，遇到结束标签时出栈
- 自封闭节点可视为入栈后立刻出栈
- 任何元素的父元素是它入栈前的栈顶

#### 第七步——文本节点
#### 第七步总结
- 文本节点与自封闭标签处理类似
- 多个文本节点需要合并

## 浏览器工作原理 ｜ CSS 计算，排版，渲染，合成（2020.5.16）

### 环境准备
npm install css

### 第一步 收集CSS规则
- 遇到style标签时，我们把CSS规则保存起来
- 这里我们调用CSS Parser来分析CSS规则
- 这里我们必须要仔细研究此库分析CSS规则的格式

### 第二步 添加调用

### 第二步总结
- 当我们创建一个元素后，立即计算CSS
- 理论上，当我们分析一个元素时，所有CSS规则已经收集完毕
- 在真实浏览器中，可能遇到写在body的style标签，需要重新 CSS计算的情况，这里我们忽略

### 第三步 获取父元素序列

### 第三步总结
- 在computeCSS函数中，我们必须知道元素的所有父元素才能判 断元素与规则是否匹配
- 我们从上一步骤的stack，可以获取本元素所有的父元素
- 因为我们首先获取的是“当前元素”，所以我们获得和计算父元
素匹配的顺序是从内向外

### 第四步 拆分选择器

### 第四步总结
- 选择器也要从当前元素向外排列
- 复杂选择器拆成针对单个元素的选择器，用循环匹配父元素队列

### 第五步 计算选择器与元素匹配

### 第五步总结
- 根据选择器的类型和元素属性，计算是否与当前元素匹配
- 这里仅仅实现了三种基本选择器，实际的浏览器中要处理复合选
择器
- 作业(可选):实现复合选择器，实现支持空格的Class选择器

### 第六步 生成computed属性

### 第六步总结
- 一旦选择匹配，就应用选择器到元素上，形成computedStyle

### 第七步 确定规则覆盖关系

###  第七步总结
- CSS规则根据specificity和后来优先规则覆盖
- specificity是个四元组，越左边权重越高
- 一个CSS规则的specificity根据包含的简单选择器相加而成 



### 参考链接：
- https://www.w3.org/TR/CSS2/
- https://github.com/wintercn/JSinJS

### 有助于你理解的知识
- 如何通过 link 异步加载 css，没有类似 script 的官方 async 属性，但可以参考这篇文章 hack： https://juejin.im/post/5d8873526fb9a06b155dfbca
