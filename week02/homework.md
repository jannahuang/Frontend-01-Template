1. 写一个正则表达式 匹配所有 Number 直接量

```
[+-]?\d+(\.\d*)?
```

2. 写一个 UTF-8 Encoding 的函数

```javascript
function UTF8_Encoding(string) {
  var buffer = [];
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if (0x00 <= code && code <= 0x7f) {
      buffer.push(code);
    } else if (0x80 <= code && code <= 0x7ff) {
      buffer.push(192 | (31 & (code >> 6)));
      buffer.push(128 | (63 & code));
    } else if (
      (0x800 <= code && code <= 0xd7ff) ||
      (0xe000 <= code && code <= 0xffff)
    ) {
      buffer.push(224 | (15 & (code >> 12)));
      buffer.push(128 | (63 & (code >> 6)));
      buffer.push(128 | (63 & code));
    }
  }

  return buffer;
}
```

3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

```
"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a- fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"
```
