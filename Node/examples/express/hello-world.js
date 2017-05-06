var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('Hello world!');
});
app.use(express.static('public')); //express.static设置静态资源文件的访问路径
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening');
});