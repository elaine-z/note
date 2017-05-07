var express = require('express');
var app = express();
// var path = require('path');
var router = require('./router');
var hbs = require('hbs');
var blogEngine = require('./blog');
var bodyParser = require('body-parser');

//设定port变量，意为访问端口
// app.set('port', process.env.PORT || 3000);

//设定views engine变量，意为网页模板引擎
app.set('view engine', 'html');

//运行hbs模块
app.engine('html', hbs.__express);

//加载数据模块
// app.use(express.bodyParser());出错
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//设定静态文件目录
app.use(express.static('public'));
app.use(router);
app.listen(3000);