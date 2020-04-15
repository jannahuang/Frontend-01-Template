# 第一周总结

## 前端技能模型

- 编程能力，架构能力，工程能力（刻意练习）
- 前端知识（建立知识体系）
- 领域知识（实践中学习）

> 前端技术不是武林秘籍，真正的能力是练出来的。

## 学习方法

### 整理法

确保完备性

- 顺序关系
- 组合关系
- 纬度关系
- 分类关系

### 追溯法

1. 源头

   - 最早出现的论文、杂志
   - 最初的实现案例

2. 标准和文档

   - [w3.org](https://www.w3.org/)
   - [developer.mozilla.org](https://developer.mozilla.org/en-US/)
   - [msdn.microsoft.com](https://docs.microsoft.com/en-us/)
   - [developer.apple.com](https://developer.apple.com/)
   - [w3school.com](http://w3school.com/)
   - [whatwg.org](https://whatwg.org/)
   - [scholar.google.com](https://scholar.google.com/)

3. 大师

   - Tim Berners-Lee
   - Brendan Eich
   - Bjarne Stroustrup

## 构建知识体系

### 主要参考网站：

<https://www.ecma-international.org/>  
<https://developer.mozilla.org/en-US/docs/Web>  
<https://whatwg.org/>

### 课上涉及网站：

<https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf>  
<https://www.w3school.com.cn/html/html_entities.asp>  
<https://www.w3.org/1999/xhtml/>  
<https://html.spec.whatwg.org/multipage/>  
<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element>

### 参考名词：

- XMind：思维导图软件（ https://www.xmind.cn/）
- DTD：Document Type Definition（ https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd）
- Entity：实体（在 HTML 语境下就是 & 符后边的东西）
- ARIA：Accessible Rich Internet Applications（ https://www.w3.org/TR/html-aria/）
- Token：有效的输入元素
- Comment：注释
- WhiteSpace：空白符
- Line Terminator：行终止符
- Atom：原子
- Semantics：语义
- Runtime：运行时

## 工程体系

### 优秀的前端工程师

- 领域知识 -形成体系
- 能力
  - 编程能力（解决能否做出来的问题）
  - 架构能力（解决做多大规模的问题）
  - 工程能力（解决多少人一起做的问题）
- 潜力
- 职业规划
  - 工程师 -> 资深工程师 -> 专家 -> 经理
- 成就
  - 用成就展现自己的能力

> You are the owner of your career.

### 职业发展

正循环：

- 晋升 -> 成长 -> 成就（业务型成就，工程型成就，技术难题）

#### 业务型成就

- 业务目标
  - 理解公司业务的核心目标
  - 目标转化为指标
- 技术方案
  - 业务指标到技术指标的转化
  - 形成纸面方案、完成小规模试验
- 实施方案
  - 确定实施目标、参与人
  - 管理实施进度
- 结果评估
  - 数据采集、数据报表
  - 向上级汇报

#### 工程型成就

- 目标
  - 质量、效率
- 方案与实施
  - 规章制度
  - 库
  - 工具
  - 系统
- 结果
  - 线上监控

#### 技术难题

- 目标
  - 公认的技术难点
- 方案与实施
  - 依靠扎实的编程能力、架构能力形成解决方案
- 结果
  - 问题解决

### 数据驱动的思考方式

正循环：

- 目标 -> 现状 -> 方案 -> 实施 -> 结果
  - 目标：分析业务目标，定数据指标
  - 现状：采集数据，建立数据展示系统
  - 方案：设计技术方案，预估数据
  - 实施：小规模实验，推广全公司落地，形成制度
  - 结果：统计最终效果，汇报

### 工具链

- 工具链的作用
- 工具的分类
  - 脚手架 init -> 本地调试 run -> 单元测试 test -> 发布 publish
- 工具链体系的设计
  - 版本问题
  - 数据统计

### 持续集成

- 客户端软件持续集成
  - Daily build
  - BVT(Build Verification Test)
- 前端持续集成
  - Check-in build
  - Lint + Rule Check

### 技术架构

- 客户端架构：解决软件需求规模带来的复杂性
- 服务端架构：解决大量用户访问带来的复杂性
- 前端架构：解决大量页面需求带来的重复劳动问题（强调复用的重要性）
  - 库：有复用价值的代码（URL，AJAX，ENV）
  - 组件：UI 上多次出现的元素（轮播，Tab）
  - 模块：经常被使用的业务区块（登录）

> 组件的定义和基础设施，就是组件化方案。

### 参考链接：

<https://fed.taobao.org/blog/taofed/do71ct/fed-learning-quizzes-apply/?spm=taofed.blogs.blog-list.9.44fe5ac8p6qg66>  
<https://tools.ietf.org/html/rfc3986>  
<https://svn.apache.org/repos/asf/labs/webarch/trunk/uri/rev-2002/issues.html>  
<https://tools.ietf.org/>  
<https://github.com/spritejs/spritejs>  
<https://spritejs.org/#/>

### 参考名词：

- UV：（Unique Visitor）独立访客，统计 1 天内访问某站点的用户数 (以 cookie 为依据)，如果清除了 cookies 或者更换设备访问，计数会加 1。按用户算的，比较真实一点。
- PV：（Page View）访问量, 即页面浏览量或点击量，在一定统计周期内用户每打开或刷新一个页面就记录 1 次。
- ctr：点击率（click-through rate）
- 判断用户活跃度：日活除以月活
- CICD：持续集成 (Continuous Integration) 和持续部署 (Continuous Deployment) 简称。
- SpriteJS：是跨平台的高性能图形系统，它能够支持 web、node、桌面应用和小程序的图形绘制和实现各种动画效果。
- 前端之巅：InfoQ 旗下关注大前端的技术社群
- 龙书：《编译原理》
