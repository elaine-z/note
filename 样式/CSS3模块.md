# CSS3之常用的标签及其兼容性
css3是在css2的基础上新增了一些属性，在PC端浏览器的兼容方面还不是很好，但在m端中还不错，css3在边框、圆角、渐变、背景、文本、2/3D转换、过渡、动画、多列、弹性盒子、媒体查询、选择器中有一些拓展，为了在谷歌（SF）、火狐、IE、欧朋浏览器等浏览器，最好加上-webkit-/-moz-/-ms-/-o-前缀，某些htc和hack可以兼容低版本IE。
### border-radius
圆角，可接具体长度值和百分比，有两个值以上时按顺时针，兼容性有IE9+、FF4+、chorme5+、SF5+、O1.5+、IOS SF4+、Andriod Browser2.2+、Andriod Chrome18+(以下均简写)
### box-shadow
对象阴影，inset可设置内阴影，四个值为水平偏移量（右为正），上下偏移量（下为正），值与模糊面积和模糊程度成正比，不能为负，阴影颜色，兼容IE9+、FF4.0+、C10.0+、SF5.1+、O10.5+、I S5.0+、A B4.0+、A C18.0+
### border-image
兼容IE11+、FF15+、C16+、SF6+、I S6+、A B4.4+、A C18+
### background-size
值可以为长度值和百分比（不能为负）、cover（将图像等比缩放到完全覆盖容器，会保持图像本身的比例来显示，多于的部分隐藏，背景图像有可能超出容器）、contain（将背景图像等比缩放到宽度或高度与容器的相等，图像会按照容器的宽或者高显示，所以可能出现留白，背景图像始终在容器内）。兼容性IE9+、FF4+、C15+、SF7+、I S7+、A B4.4+、A C18+
### text-shadow
值同box-shadow，兼容IE10+, Firefox3.5+, Chrome4.0+, Safari6.0+。
兼容IE6/7/8:
方法一、引入ie-css3兼容文件behavior:url(ie-css3.htc);
方法二、 filter:shadow(color=blue,direction=225),direction表示投影角度
### transform
转换，值可以为rotate旋转、translate移动、scale缩放、skew倾斜、matrix矩阵变形，并提供了对应的2/3D转换效果，值与值之间用空格隔开，兼容IE9+、FF3.5+、C4.0+、SF6.0+、I S8.4+、A B4.4+、A C34+。
### transition
过渡的动画类型，值为参与动画的属性 持续时间 动画类型 延迟时间；兼容IE10+, Firefox16+, Chrome26+ ,Safari6.1+ , iOS Safari7+, Android Browser4.4+, Android Chrome25+。
### animation
动画特效，与@keyframes 动画名{0%{动画效果}10%...}配套在一起，值为动画名 持续时间 类型 延迟时间 循环次数 是否反向等等。兼容IE10+,Firefox16+, Chrome43+, Safari9+。
### @keyframes
创建动画，兼容同上
### linear-gradient和radial-gradient
渐变，前者线性，后者圆形，颜色1 起点位置 颜色2 终点位置；线性还需指定方向to xxx。兼容IE10+, Firefox16+, Chrome26+, Safari6.1+，IE9以下可以用滤镜处理filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000',endColorstr='#ffffff');
### RGBA
兼容性：
IE9+, Firefox2+, Chrome4+, Safari3+, iOS Safari3.2+, Android Browser2.1+, Android Chrome18+

兼容方法：
IE6/7/8不支持使用 rgba 模式实现透明度，可使用 IE 滤镜处理：

filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#7fff0000,endColorstr=#7fff0000);
在IE9下rgba颜色和IE滤镜都能被识别，所以被覆盖了颜色就更深一点

解决办法：
.demo{filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#7fff0000,endColorstr=#7fff0000);}
:root .demo{filter:none;background-color:rgba(255,0,0,.2);}//IE8及以下不识别
### flex
兼容IE11+,Firefox22+, Chrome21+, Safari6.1+，加前缀会向前兼容一点点