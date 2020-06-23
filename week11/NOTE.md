# 第十一周总结

## （2020.6.20）

### 正则表达式

- exec
- lastIndex
```javascript
let lastIndex = 0
let token

do {
  token = inputElement.exec(source)
  console.log(token)
}

while (inputElement.lastIndex - lastIndex == token.length)
```