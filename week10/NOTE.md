# 第十周总结
## 重学浏览器API｜其他API （2020.6.11）

> 问题：把一个元素所有的子元素逆序
### Range
#### Range API
- var range = new Range()
- range.setStart(element, 9)
- range.setEnd(element, 4)
- var range = document.getSelection().getRangeAt(0)

#### Range 快捷API
- range.setStartBefore
- range.setEndBefore
- range.setStartAfter
- range.setEndAfter
- range.selectNode
- range.selectNodeContents

### CSSOM

#### Rules
- document.styleSheets[0].cssRules
- document.styleSheets[0].insertRule("p {color: pink}", 0)
- document.styleSheets[0].removeRule(0)

#### Rule
- CSSStyleRule
  - selectorText String
  - style K-V结构
- CSSCharsetRule
- CSSImportRule
- CSSMediaRule
- CSSFontFaceRule
- CSSPageRule
- CSSNamespaceRule
- CSSKeyframesRule
- CSSKeyframeRule
- CSSSupportsRule
- ...

### getComputedStyle
- window.getComputedStyle(elt, pseudoElt)
  - elt 想要获取的元素
  - pseudoElt 可选，伪元素

### window
- window.innerHeight
- window.innerWidth
- window.devicePixelRatio
- document.documenElement.getBoundingClientRect()

### 所有 API

## 编程与算法训练|TicTacToe/井字棋（2020.6.13）


