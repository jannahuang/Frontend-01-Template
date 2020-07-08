# 第十三周总结

## 组件化基础（2020.7.4）

### 对象与组件
对象
- Properties
- Methods
- Inherit

组件
- Properties
- Methods
- Inherit
- Attribute
- Config & State
- Event
- Lifecycle
- Children

### Attribute vs Property
- Attribute 强调描述性
```javascript
<my-component attribute="v" />
myComponent.getAttribute("a")
myComponent.setAttribute("a", "value")
```

- Property 强调从属关系
```javascript
myComponent.a = "value"
```

```javascript
<input value = "cute" />
<script>
var input = document.getElementByTagName(‘input’); // 若 property 没有设置， 则结果是 attribute
input.value // cute
input.getAttribute(‘value’); // cute
input.value = ‘hello’; // 若 value 属性已经设置，则 attribute 不变，property 变化， 元素上实际的效果是 property 优先
input.value // hello
input.getAttribute(‘value’); // cute
</script>
```

### Children
- Content 型 Children
```html
<my-button><img src="{{icon}}" />{{title}}</my-button>
```
- Template 型 Children
```html
<my-list>
  <li><img src="{{icon}}" />{{title}}</li>
</my-list>
```