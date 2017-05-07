var express = require('express');
var router = express.Router();
var blogEngine = require('./blog');
// var multer = require('multer');
// var uploading = multer({
//     dest: __dirname + '../public/uploads/',
//     //设定限定，每次最多上传1个文件，文件大小不超过1MB
//     limits: {
//         fileSize: 1000000,
//         files: 1
//     },
// })
// router.post('/upload', uploading, function(req, res) {
//     console.log('ok');
// })
router.get('/', function(req, res) {
    res.render('index', { title: "最近文章", resource: blogEngine.getBlogEntris() });
});
router.get('/about', function(req, res) {
    res.render('about', { title: "自我介绍" });
});
router.get('/article/:id', function(req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render('article', { title: entry.title, blog: entry });
});


module.exports = router;