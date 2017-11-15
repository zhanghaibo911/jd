$(function () {
	// 搜索框
	// 获取光标
	$('.searchbox .search input').focus(function () {
		$(this).attr('value','')
	})
	// 失去光标
	$('.searchbox .search input').blur(function () {
		$(this).attr('value','ZUZU')
	})
	// 选项卡
	$('#pre-left .choose .li').mouseenter(function () {	
		$('#pre-left .choose .li .check').eq($(this).index()).show();
		$('#pre-left .choose .li').css({
			background: '#fff',
			border: ''
		})
		$(this).css({
			background: '#ccc',
			border: '1px solid red'
		})
	});
	$('#pre-left .choose .li').mouseleave(function () {	
		$('#pre-left .choose .li .check').eq($(this).index()).hide();
		$('#pre-left .choose .li').css({
			background: '#fff',
			border: ''
		})
	});
	// 鼠标移入<全部商品>
	$('.header_nav h2').mouseenter(function () {
		$('.header_nav .header_nav1 #pre-left').show()
	})
	// 鼠标移出<全部商品>
	$('.header_nav h2').mouseleave(function () {
		$('.header_nav .header_nav1 #pre-left').hide()
	})
	// 登录框
	$('#user .user1 .left .tj input').click(function () {
		if($('#user .user1 .left .dl .x input').val() == '') {
			$('#user .user1 .left .dl .x .nul').css({
				display: 'inline'
			})
		} else {
			$('#user .user1 .left .dl .x .nul').css({
				display: 'none'
			})
		}
		if($('#user .user1 .left .dl .y input').val() == '') {
			$('#user .user1 .left .dl .y .nul').css({
				display: 'inline'
			})
		} else {
			$('#user .user1 .left .dl .y .nul').css({
				display: 'none'
			})
		}
	})
	// 滚动条
	$(window).scroll(function () {
		if($(document).scrollTop() > 0) {
			$('#fixed-top a').show()
		} else {
			$('#fixed-top a').hide()
		}
	})
	// 返回顶部
	var i = $(document).height();
	$('#fixed-top a').click(function () {
		var timer = setInterval(function (){
			i -= 50;
			$(document).scrollTop(i);
			if(i <= 0) {
				clearInterval(timer)
				i = $(document).height()
			}
		},10);
	});
})