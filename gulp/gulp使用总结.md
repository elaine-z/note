# Gulp
### 什么是gulp及其作用
gulp是一种前端的自动化工具，可以用来搭建web服务器、文件保存时自动刷新浏览器、使用预处理器less/sass、压缩优化资源等等，方便前端架构、打包，符合工程化快速迭代的要求，对于前端来说很省事。
### gulp与其他自动化构建工具对比
相对于grunt来说，gulp没有那么多繁琐的task要写，相对而言比较可控。

相对于fis来说，fis在刚开始配置简单，但越到后面越麻烦，插件开发也很滞后，更新迭代慢，反馈也慢，gulp通过配置文件管理控制整个流程，比fis灵活。
### 安装配置完后的使用一般流程
1. 在项目根目录下先初始化:cnpm init
2. 安装局部gulp：cnpm i gulp --save-dev
3. 在项目根目录中创建gulpfile.js文件
4. 局部安装所需要的功能插件
5. 在gulpfile.js中用require引入功能插件：var gulp = require('gulp');，此步骤必须有
6. 编写任务名和对应操作：gulp.task('xx', function() {gulp.src('目标文件地址').pipe(执行方法).pipe(gulp.dest('存放地址'))})。注：可以单独使用gulp xx来执行操作。
7. 监听文件：gulp.watch('监听的文件路径', ['对应执行的xx名'])，若是监听多个文件，可以gulp.task('watch', function() {gulp.watch....+other watchs})
8. 设置default：gulp.task('default', ['x1','x2']，此步骤必须有

实际操作中发现，每次更改可以改变，但是新增文件的话必须重新启动一次才行。

**常用的五个函数**
gulp.task(name, fn)

gulp.run(tasks...)尽可能多的并行运行多个task

gulp.watch(glob, fn)当glob内容发生改变时，执行fn

gulp.src(glob)返回一个可读的stream

gulp.dest(glob)返回一个可写的stream