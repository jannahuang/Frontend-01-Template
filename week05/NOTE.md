# 第五周总结

## 浏览器工作原理-总论与 HTTP 协议（2020.5.7）

### 浏览器

URL(HTTP) -> HTML(parse) -> DOM(css computing) -> DOM with CSS(layout) -> DOM with position(render) -> Bitmap

### ISO-OSI 七层网络模型

- 应用（HTTP）
- 表示（HTTP）
- 会话（HTTP）
- 传输（TCP）
- 网络（Internet）
- 数据链路（4G/5G/WIFI）
- 物理层（4G/5G/WIFI）

### TCP 与 IP 的一些基础知识

- 流 vs 包
- 端口 vs IP 地址
- require('net'); vs libnet/libpcap

### HTTP

- Request
- Response(发 request 后才会有 response)

## 浏览器工作原理-HTTP 协议与词法分析（2020.5.9）

### Request
由三部分组成
- Request line（分成三部分：methods, path, HTTP/1.1）
  - POST / HTTP/1.1
- headers
  - Host: 127.0.0.1
  - Content-Type: application/x-www-form-urlencoded
  - 
- body
  -field=aaa&code=x%3D1

### Response
- status line
  - HTTP/1.1 200 OK
- headers
  - Content-Type: text/html
  - Data: Mon, 23 Dec 2019 06:46:19 GMT
  - Connection: keep-alive
  - Transfer-Encoding: chunked
  - 
- body
  - 26
  - <html><body> Hello Worl <body><html>
  - 
  - 0