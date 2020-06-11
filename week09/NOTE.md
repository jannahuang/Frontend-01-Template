# 第九周总结
## 重学CSS | CSS动画（2020.06.04）

### Animation
- @keyframes定义
- animation：使用

```css
@keyframs mykf
{
  from {background: red}
  to {background: yellow}
}

div {
  animation: mykf 5s infinite
}
```

```css
@keyframes mykf {
  0% {top: 0; transition: top ease}
  50% {top: 30px; transition: top ease-in}
  75% {top: 10px; transition: top ease-out}
  100% {top: 0}
}
```

### Transition
- transition 使用
- transition-property 要变换的属性
- transition-duration 变换的时长
- transition-timing-function 时间曲线
- transition-delay 延迟

## 渲染与颜色

### 形状
- border
- box-shadow
- border-radius

* data uri + svg (几乎可以画所有的矢量图形)
- data: image/svg+xml, <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"> <ellipse cx="300" cy="150" rx="200" ry="80" style="fill: rgb(200,100,50); stroke:rgb(0,0,100); stroke-width:2" /> </svg>

> getComputedStyle(document.body)

## 重学HTML｜XML与SGML （2020.6.6）

### DTD与XML namespace
- http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd
- http://www.w3.org/1999/xhtml

## 重学HTML｜HTML标签——语义

### 合法元素
- Element: <tagname> ... </tagname>
- Text: text
- Comment: <!-- comments -->
- DocumentType: <!Doctype html>
- ProcessingInstruction: <?a 1?>
- CDATA: <![CDATA[ ]]>

### 字符引用
- &#161 ;
- &amp ;
- &lt ;
- &quot ;

## 重学DOM
### Node
- Element: 元素型节点，跟标签相对应
  - HTMLElement
    - HTMLAnchorElement
    - HTMLAppleElement
    - HTMLAreaElement
    - HTMLAudioElement
    - HTMLBaseElement
    - HTMLBodyElement
    - ...
  - SVGElement
    - SVGAElement
    - SVGAltGlyphElement
    - ...
- Document: 文档根节点
- CharacterData: 字符数据
  - Text: 文本节点
    - CDATASection: CDATA节点
  - Comment: 注释
  - ProcessingInstruction: 处理信息
- DocumentFragment: 文档片段
- DocumentType: 文档类型

### 导航类操作
- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling

### 修改操作
- appendChild
- insertBefore
- removeChild
- replaceChild

> 所有dom元素默认只有一个父元素，不能两次插入到一个dom中。插入一个dom再插入第二次时，默认删除第一次插入的dom。

> childNodes会根据操作实时变化。

### 高级操作
- compareDocumentPosition 是一个用于比较两个节点中关系的函数。
- contains 检查一个节点是否包含另一个节点的函数。
- isEqualNode 检查两个节点是否完全相同。
- isSameNode 检查两个节点是否是同一个节点，实际上在 JavaScript 中可以用“===” 。
- cloneNode 复制一个节点，如果传入参数 true，则会连同子元素做深拷贝。

