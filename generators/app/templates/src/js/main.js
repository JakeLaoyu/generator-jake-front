//通过webpack.config.js里配置alias引用jquery
const $ = require('jquery');
window.jQuery = $

// 注：PC端和移动端layer组件只能存在一个
// 引入PC端 layer 弹框组件 http://layer.layui.com/
window.layer = require('layer')

// 引入移动端端 layer 弹框组件 http://layer.layui.com/mobile/
// window.layer = require('mobilelayer')

$(function($) {
	//增加全局方法
	//animateCss，配合animate.css，使动画结束后移除动画class
	$.fn.extend({
		animateCss: function(animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			$(this).addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
			});
		}
	});
	console.log('Jake’s template');
})