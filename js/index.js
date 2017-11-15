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
	// 轮播图
	// 下标
	var iNow = 0;
	var a = $('#main').width();
	$('#main .ul2 li').width(a);
	var aLi2 = $('#main .ul2 li');
	// 一个li的宽
	var liW = aLi2.width();
	// console.log(liW);
	// 默认值
	$('#main .ul1 li').eq(0).addClass('active');
	// console.log($('.ul1 li'));
	// 显示第二个图片
	$('#main .ul2').css('left',-liW);
	// $('.ul2 li a img').css('width',)
	// ul的宽
	$('#main .ul2').width(aLi2.length * liW);
	// 下一页
	$('#next').on('click',nextPage);

	// 上一页
	$('#pre').on('click',prePage);

	//上一页的函数
	function prePage () {
		// alert(1);
		iNow--;
		if (iNow == -1) {
			$('#main .ul2').stop().animate({left: -(iNow + 1) * liW},100,function () {
				$('#main .ul2').css('left',-(aLi2.length - 2) * liW);
			});
			iNow = aLi2.length - 3;

		}else {
			$('#main .ul2').stop().animate({left: -(iNow + 1) * liW},100);
		}

		// 改变选项
		$('#main .ul1 li').removeClass('active');
		$('#main .ul1 li').eq(iNow).addClass('active');
		
	}
	// 开启前关闭
	// clearInterval(timer);
	// 定时器
	var timer = setInterval(nextPage,3000);
	// 鼠标移入时关闭定时器
	$('#main').mouseenter(function () {
		clearInterval(timer);
	})
	// 鼠标移出时开启定时器
	$('#main').mouseleave(function () {
		timer = setInterval(nextPage,3000);
	})
	// 下一页的函数
	function nextPage() {
		iNow++; // 1
		if (iNow == aLi2.length - 2) {
			$('#main .ul2').stop().animate({left: -(iNow + 1) * liW},100,function () {
				$('#main .ul2').css('left',-liW);
			});
			iNow = 0;
		} else {
			// 给ul设置left
			$('#main .ul2').stop().animate({left: -(iNow + 1) * liW},100);
		}

		// 改变选项
		$('#main .ul1 li').removeClass('active');
		$('#main .ul1 li').eq(iNow).addClass('active');
		
	}

	// 选项卡
	$('#main .ul1 li').mouseenter(function () {
		// 延迟调用
		// var timer1 = setTimeout(nextPage,3000);
		// 先清空所有
		// 改变选项
		$('#main .ul1 li').removeClass('active');
		iNow = $(this).index();
		$('#main .ul1 li').eq(iNow).addClass('active');
		$('#main .ul2').stop().animate({left: -(iNow + 1) * liW},100);
	});

	// 选项卡
	$('#pre-left .choose .li').mouseenter(function () {	
		$('#pre-left .choose .li .check').eq($(this).index()).show();
	});
	$('#pre-left .choose .li').mouseleave(function () {	
		$('#pre-left .choose .li .check').eq($(this).index()).hide();
	});
	// 手风琴
	$("#lead-center .right ul li span").eq(0).css({
		display: 'block'
	});
	$("#lead-center .right ul li img").eq(0).css({
		display: 'block'
	});
	$("#lead-center .right ul li em").eq(0).css({
			background: 'red',
			color: '#fff'
		});
	$('#lead-center .right ul li').mouseenter(function () {
		$("#lead-center .right ul li span").css({
			display: 'none'
		});
		$("#lead-center .right ul li img").css({
			display: 'none'
		});
		$("#lead-center .right ul li em").css({
			background: '',
			color: ''
		});
		$("#lead-center .right ul li img").eq($(this).index()).css({
			display: 'block'
		});
		$("#lead-center .right ul li em").eq($(this).index()).css({
			background: 'red',
			color: '#fff'
		});
		$("#lead-center .right ul li span").eq($(this).index()).css({
			display: 'block'
		});
	})
	// 友情链接
	$('#friend-link').mouseenter(function () {
		$('#friend-link').stop().animate({height: '66px'});
	})
	$('#friend-link').mouseleave(function () {
		$('#friend-link').stop().animate({height: '33px'});
	});
	// 图片懒加载
	scroll1();
	$(window).on('scroll',scroll1);
	function scroll1 () {
		var x = $(document).scrollTop();
		var y = $(window).height();
		$('img').each(function (index,ele) {
			var z = $(ele).offset().top;
			if (x + y >= z) {
				var _src = $(ele).attr('_src')
				$(ele).attr('src',_src)
			}
		})
	}
	// 滚动条
	$(window).scroll(function () {
		if($(document).scrollTop() > 0) {
			$('#fixed-top a').show()
		} else {
			$('#fixed-top a').hide()
		}
	});
	// 返回顶部
	$('#fixed-top a').click(function () {
		var i = $(document).scrollTop();
		var timer = setInterval(function (){
			i -= 50;
			$(document).scrollTop(i);
			console.log(i)
			if(i <= 0) {
				clearInterval(timer)
			}
		},10);
	});
	// 放大镜1
	// 鼠标移入
	$('#first-floor .bottom .left .left1').mouseenter(function () {
		$('#first-floor .bottom .left .bar1').show();
		$('#first-floor .bottom .photo1').show();
		// return false;
	})
	$('#first-floor .bottom .left .left1').mouseleave(function () {
		$('#first-floor .bottom .left .bar1').hide();
		$('#first-floor .bottom .photo1').hide();
	})
	// 鼠标移动事件
	$('#first-floor .bottom .left .left1').mousemove(function (evt) {
		// 鼠标移入位置距离盒子的距离
		var x = evt.clientX - $(this).offset().left + $(document).scrollLeft() - $('#first-floor .bottom .left .bar1').width() / 2;
		var y = evt.clientY - $(this).offset().top + $(document).scrollTop() - $('#first-floor .bottom .left .bar1').height() / 2;
		// x 和 y的最大值
		var maxX = $('#first-floor .bottom .left .left1').width() - $('#first-floor .bottom .left .bar1').width();
		var maxY = $('#first-floor .bottom .left .left1').height() - $('#first-floor .bottom .left .bar1').height();
		// 判断边界值
		if (x <= 0) {
			x = 0;
		}
		if (x >= maxX) {
			x = maxX;
		}
		if (y <= 0) {
			y = 0;
		}
		if (y >= maxY) {
			y = maxY;
		}
		$('#first-floor .bottom .left .bar1').css({
			left: x,
			top:y
		})
		// 小图/大图=遮罩/大盒子(宽,高)
		var bigX =( x / maxX) * ($('#first-floor .bottom .photo1').width() - $('#first-floor .bottom .photo1 img').width());
		var bigY =( y / maxY) * ($('#first-floor .bottom .photo1').height() - $('#first-floor .bottom .photo1 img').height());
		console.log(bigX,bigY)
		$('#first-floor .bottom .photo1 img').css({
			left: bigX,
			top: bigY
		})
		return false;
	})
// 放大镜2
	// 鼠标移入
	$('#first-floor .bottom .left .left2').mouseenter(function () {
		$('#first-floor .bottom .left .bar2').show();
		$('#first-floor .bottom .photo2').show();
		// return false;
	})
	$('#first-floor .bottom .left .left2').mouseleave(function () {
		$('#first-floor .bottom .left .bar2').hide();
		$('#first-floor .bottom .photo2').hide();
	})
	// 鼠标移动事件
	$('#first-floor .bottom .left .left2').mousemove(function (evt) {
		// 鼠标移入位置距离盒子的距离
		var x = evt.clientX - $(this).offset().left + $(document).scrollLeft() - $('#first-floor .bottom .left .bar2').width() / 2;
		var y = evt.clientY - $(this).offset().top + $(document).scrollTop() - $('#first-floor .bottom .left .bar2').height() / 2;
		// x 和 y的最大值
		var maxX = $('#first-floor .bottom .left .left2').width() - $('#first-floor .bottom .left .bar2').width();
		var maxY = $('#first-floor .bottom .left .left2').height() - $('#first-floor .bottom .left .bar2').height();
		// 判断边界值
		if (x <= 0) {
			x = 0;
		}
		if (x >= maxX) {
			x = maxX;
		}
		if (y <= 0) {
			y = 0;
		}
		if (y >= maxY) {
			y = maxY;
		}
		$('#first-floor .bottom .left .bar2').css({
			left: x,
			top:y
		})
		// 小图/大图=遮罩/大盒子(宽,高)
		var bigX =( x / maxX) * ($('#first-floor .bottom .photo2').width() - $('#first-floor .bottom .photo2 img').width());
		var bigY =( y / maxY) * ($('#first-floor .bottom .photo2').height() - $('#first-floor .bottom .photo2 img').height());
		console.log(bigX,bigY)
		$('#first-floor .bottom .photo2 img').css({
			left: bigX,
			top: bigY
		})
		return false;
	})
})