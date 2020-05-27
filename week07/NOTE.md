# 第七周总结
## 浏览器工作原理 | CSS计算，排版,渲染，合成（二）（2020.5.21）

### 第一步 收集元素进行
- 分行
  - 根据主轴尺寸，把元素分进行
  - 若设置了no-wrap，则强行分配进第一行

### 第二步 计算主轴
- 计算主轴方向
  - 找出所有Flex元素
  - 把主轴方向的剩余尺寸按比例分配给这些元素
  - 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

### 第三步 计算交叉轴
- 计算交叉轴方向
  - 根据每一行中最大元素尺寸计算行高
  - 根据行高flex-align和item-align，确定元素具体位置

## 绘制
### 第一步 绘制单个元素
### 第一步总结
- 绘制需要依赖一个图形环境
- 我们这里采用了npm包images
- 绘制在一个viewport上进行
- 与绘制相关的属性：background-color、border、background-image等

### 第二步 绘制DOM
### 第二步总结
- 递归调用子元素的绘制方法完成DOM树的绘制
- 忽略一些不需要绘制的节点
- 实际浏览器中，文字绘制是难点，需要依赖字体库，我们这里忽略
- 实际浏览器中，还会对一些图层做compositing，我们这里也忽略

## 重学CSS | CSS基本语法，CSS基础机制（2020.5.23）

### 第一步 CSS语法的研究
#### CSS2.1的语法
- https://www.w3.org/TR/CSS21/grammar.html#q25.0
- https://www.w3.org/TR/css-syntax-3

#### CSS总体结构
- @charset
- @import
- rules
  - @media
  - @page
  - rule

### 第二步 CSS @规则的研究
#### At-rules
- @charset: https://www.w3.org/TR/css-syntax-3/
- @import: https://www.w3.org/TR/css-cascade-4/
- @media: https://www.w3.org/TR/css3-conditional/
- @page: https://www.w3.org/TR/css-page-3/
- @counter-style: https://www.w3.org/TR/css-counter-styles-3/
- @keyframes: https://www.w3.org/TR/css-animations-1/
- @fontface: https://www.w3.org/TR/css-fonts-3/
- @supports: https://www.w3.org/TR/css3-conditional/
- @namespace: https://www.w3.org/TR/css-namespaces-3/

### 第三步 CSS规则的结构
#### CSS规则
- Selector
  - https://www.w3.org/TR/selectors-3/（一般看这个）
  - https://www.w3.org/TR/selectors-4/
- Key
  - Properties
  - Variables: https://www.w3.org/TR/css-variables/
- Value
  - https://www.w3.org/TR/css-values-4/

### 参考名词
- BFC ：块格式化上下文（Block Formatting Context，BFC） 是 Web 页面的可视 CSS 渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。