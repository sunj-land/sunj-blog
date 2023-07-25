- js 原型链 作用域上下文
- promise async await generator
- class 及编译之后结果进行分析 继承与构造
- 模块化历史进程
- 设计模式讲解 实例举例
-
- 浏览器渲染
- 浏览器缓存
-
- webpack 基本配置
- webppack loader 与 plugin
- webpack 模块联邦

-微前端 qiankun wujie

- 服务端渲染
- koa
- express
- nestjs
-

* md 复制按钮 代码折叠按钮

rem 适合根据设计稿整体缩放页面,计算简单
vw 适合真正意义上的响应式布局,实现同一视觉效果
两者可以结合使用,发挥各自的优势

vue 项目升级过程中的难点

echarts 使用 以及 label 过多时自定义处理 label

css 性能

text-align: justify 为什么对最后一行无效

z-index 属性在下列情况下会失效：

父元素 position 为 relative 时，子元素的 z-index 失效。解决：父元素 position 改为 absolute 或 static；
元素没有设置 position 属性为非 static 属性。解决：设置该元素的 position 属性为 relative，absolute 或是 fixed 中的一种；
元素在设置 z-index 的同时还设置了 float 浮动。解决：float 去除，改为 display：inline-block；

. 说一下 Less 你用过哪些特性（除了变量、嵌套、计算，再找几条）

9. 介绍下粘性布局（sticky）（网易）
   📢 参考回答：
   position 中的 sticky 值是 CSS3 新增的，设置了 sticky 值后，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。
   sticky 属性值有以下几个特点：

该元素并不脱离文档流，仍然保留元素原本在文档流中的位置。
当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了 top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px 的位置时固定，不再向上移动。
元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于 viewport 来计算元素的偏移量
