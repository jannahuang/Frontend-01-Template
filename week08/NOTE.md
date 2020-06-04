# 第八周总结
## 重学CSS | CSS基本语法,CSS基础机制（二）（2020.5.28）

### 选择器语法
- 简单选择器
  - *
  - div svg|a
  - .cls
  - #id
  - [attr=value]
  - :hover
  - ::before
- 复合选择器
  - <简单选择器> <简单选择器> <简单选择器>
  - *或者div必须写在最前面
- 复杂选择器
  - <复合选择器> <sp> <复合选择器>
  - <复合选择器> ">" <复合选择器>
  - <复合选择器> "~" <复合选择器>
  - <复合选择器> "+" <复合选择器>
  - <复合选择器> "||" <复合选择器>

### 选择器优先级
- 简单选择器计数
  - #id div.a#id
  - [0, 2, 1, 1]
  - S = 0 * N^3 + 2 * N^2 + 1 * N^1 + 1

#### 请写出下面选择器的优先级
- div#a.b .c[ id=x ]
  - [0, 1, 3, 1]
- #a.not(#b)
  - [0, 2, 0, 0]
- *.a
  - [0, 0, 1, 0]
- div.a
  - [0, 0, 1, 1]

### 伪类
- 链接/行为
  - :any-link
  - :link :visited
  - :hover
  - :active
  - :focus
  - :target

- 树结构
  - :empty
  - :nth-child()
  - :nth-last-child()
  - :first-child :last-child :only-child

- 逻辑型
  - :not伪类
  - :where :has

### 伪元素
- ::before
- ::after
- ::firstLine
- ::firstLetter

#### 可用属性
- first-line
  - font系列
  - colo系列
  - background系列
  - word-spacing
  - letter-spacing
  - text-decoration
  - text-transform
  - line-height
- first-letter
  - font系列
  - color系列
  - background系列
  - text-decoration
  - text-transform
  - letter-spacing
  - word-spacing
  - line-height
  - float
  - vertical-align
  - 盒模型系列：margin, padding, border

#### 思考
- 为什么first-letter可以设置float之类的，而first-line不行呢？
  - first-line脱离文档，出现无限循环
  
## 重学CSS | 排版与排版相关属性,绘制与绘制相关属性（2020.5.30）

### 盒（Box）
标签 Tag，元素 Element，盒 Box
- HTML代码中可以书写开始标签，结束标签，和自封闭标签
- 一对起止标签，表示一个元素
- DOM树中存储的是元素和其他类型的节点（Node）
- CSS选择器选中的是元素
- CSS选择器选中的元素，在排版时可能产生多个盒
- 排版盒渲染的基本单位是盒

### 正常流
#### 正常流排版
- 收集盒进行
- 计算盒在行中的排布
- 计算行的排布

### float与clear

### margin 折叠
边距折叠只发生在BFC里，只发生在纵向（bottom, top）

### Flex 排版
- 收集盒进行
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布

#### 分行
- 根据主轴尺寸，把元素分进行
- 若设置了no-wrap，则强行分配进第一行

#### 计算主轴方向
- 找出所有Flex元素
- 把主轴方向的剩余尺寸按比例分配给这些元素
- 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

#### 计算交叉轴方向
- 根据每一行中最大元素尺寸计算行高
- 根据行高flex-align和item-align，确定元素具体位置




