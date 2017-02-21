# Require初级
### 什么是AMD规范
AMD是异步模块定义，采用异步的方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
### 使用require的好处
1. 将变量封装在模块内，有效防止命名冲突；
2. 解决不同js文件之间的依赖；
3. 代码模块化，方便复用。
4. 实现js文件的异步加载，避免网页是去响应
### 常用方法
1. requirejs.config({baseUrl:'指定路径',path:{别名：‘全名’}})命名模块的别名
2. requirejs([’引入的模块别名‘，function（参数值代替引入模块）{}])引入模块，
3. define([''],function(参数){....return{对象：function(){}}}编写模块
### 注意
1. 引入require.js data-main指定入口文件，省略后缀
2. 若不符合AMD规范的，需要配置shim属性和shim中的exports属性。即在config中添加shim：{别名：{exports:'名'}}
3. 不符合AMD规范，还依赖其他控件的，需要配置shim属性里面的deps属性shim:{名：{deps:['依赖的控件']}}