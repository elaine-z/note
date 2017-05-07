//路由是指如何定义应用的端点（url）以及如何响应客户端的请求，结构是app.method(path,[callback...],callback),app为express实例，method为http请求方法，path是服务器上的路径，callback是要执行的函数
var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('get route');
});
app.post('/', function(req, res) {
    res.send('post route');
});

app.all('/ab+c', function(req, res, next) { //中间件，一个中间件处理完传递给下一个中间件
    res.send('all route');
    next(); //传递函数
}); //路由路径可以为正则表达式

//路由句柄，类似中间件，唯一的区别是这些回调函数有可能调用next('route')方法而略过其他路由回调函数，形式可以使用回调函数、回调函数数组或者两者混合来处理
var a1 = function(req, res, next) {
    console.log('a1');
    next();
};
var a2 = function(req, res, next) {
    console.log('a2');
    next();
}
app.get('/example', [a1, a2], function(req, res, next) {
    console.log('response');
    next()
}, function(req, res) {
    console.log('final');
    res.send('hello');
});

//使用app.route()创建由路由路径的链式路由句柄，路径先在一个地方指定，有助于创建模块化的路由
app.route('/route').get(function(req, res) {
    res.send('get');
}).post(function(req, res) {
    res.send('post');
}).put(function(req, res) {
    res.send('put');
})


//使用express.Router类创建模块化、可挂载的路由句柄
//结合birds.js文件
var birds = require('./birds');
app.use('/birds', birds); //将路由挂载到应用，访问路径birds/+其他路由的路径
app.listen(3001); //结果按写入的顺序排列