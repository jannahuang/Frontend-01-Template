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

