# 简介
Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，其不对 Node.js 已有的特性进行二次抽象，只是在它之上扩展了 Web 应用所需的基本功能。
# 路由
路由是指如何定义应用的端点（url）以及如何响应客户端的请求，结构是`app.method(path,[callback...],callback)`,app为express实例，method为http请求方法，path是服务器上的路径，callback是要执行的函数。

所谓中间件，就是在收到请求后和发送响应之前这个阶段执行的一些函数。use是express注册中间件的方法，它返回一个函数，如：`app.use(function (req, res, next){})`，其特色是一个中间件处理完传递给下一个中间件,next()可传递执行权,还有`app.use(express.static(path)`可设置静态资源文件的访问路径。除此之外，可以在其内部回调函数判断request.url判断请求网址和设置第一参数的路径`app.use('/path', someMiddleware)`,只有请求路径匹配才会执行后面的函数

路由句柄，类似中间件，但结构依然是路由的结构，可调用next()方法，唯一的区别是这些回调函数有可能调用`next('route')`方法而略过其他路由回调函数，形式可以使用回调函数、回调函数数组或者两者混合来处理

链式句柄：`app.route(path).get(func).post(func)`，路径先在一个地方指定，有助于创建模块化的路由

###### 响应方法有
1. `res.download()` 提示下载文件
2. `res.end()` 终结响应处理流程
3. `res.json()` 发送一个json格式的响应
4. `res.jsonp()` 发送一个支持jsonp的json格式的响应
5. `res.redirect()` 重定向请求
6. `res.render()` 渲染视图模板
7. `res.send()` 发送各种类型的响应
8. `res.sendfile()` 以八位字节流的形式发送文件
9. `res.sendStatus()` 设置响应状态码，并将其以字符串形式作为响应体的一部分发送