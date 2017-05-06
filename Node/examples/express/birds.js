var express = require('express');
var router = express.Router();

//该路由使用的中间件
router.use(function timeLog(req, res, next) {
        console.log('router');
        next();
    })
    //定义路由
router.get('/router', function(req, res) {
    res.send('router page');
})
router.get('/router/about', function(req, res) {
    res.send('about page');
})
module.exports = router;