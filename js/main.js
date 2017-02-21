$(function(){
	$(window).load(function(){
		if($(window).width()<640){
			$('.onlyPc').hide();
			$('.onlyMobi').show();
			$('.video iframe').css("width","9.375rem");
			$('.video iframe').css("height"," 5.96875rem");
			$('body').css('opacity',1);
		}else{
			$('.bannerList ul').height($(window).height()-$('.nav').height());
			$('.onlyPc').show();
			$('.onlyMobi').hide();
			$('.video iframe').css("width","800px");
			$('.video iframe').css("height","450px");
			$('body').width($(window).width());
			$('body').css("overflow-x","hidden");
			$('body').css('opacity',1);
		}
	});
	
	//轮播图
	var i=0;
	var timer=null;

	var firstimg=$('.ulList li').first().clone(); //复制第一张图片
	$('.ulList ul').append(firstimg);
	if($(window).width()>640){
		$('.ulList ul').width($('.ulList li').length*$('.ulList li').width())
	}
	//将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
	// 下一个按钮
	var buffnext = true;
	var buffprve = true;
	$('.next').click(function(){
		clearInterval(timer);
		if(buffnext){
			buffnext = false;
			i++;
			if (i==$('.ulList li').length) {
				i=1; //这里不是i=0
				$('.ulList ul').css({left:0}); //保证无缝轮播，设置left值;
			};
			$('.ulList ul').stop().animate({left:-i*$('.ulList li').width()},500,function(){
				buffnext = true;
			});
		}
		
	})
	// 上一个按钮
	$('.prev').click(function(){
		clearInterval(timer);
		if(buffprve){
			buffprve = false;
			i--;
			if (i==-1) {
				i=$('.ulList li').length-2;
				$('.ulList ul').css({left:-($('.ulList li').length-1)*$('.ulList li').width()});
			}
			$('.ulList ul').stop().animate({left:-i*$('.ulList li').width()},500,function(){
				buffprve = true;
			});
		}
		
	})
	
	//定时器自动播放
	function playAuto(){
		timer=setInterval(function(){
			i++;
			if (i==$('.ulList li').length) {
				i=1;
				$('.ulList ul').css({left:0});
			};
			$('.ulList ul').stop().animate({left:-i*$('.ulList li').width()},500);
		},2500)
	}
	playAuto()
	//鼠标移入，暂停自动播放，移出，开始自动播放
	$('.ulList').hover(function(){ 
		clearInterval(timer);
	},function(){
		playAuto()
	
	});
	
	$('.prve').hover(function(){ 
		clearInterval(timer);
	},function(){
		playAuto()
	});
	
	$('.prve').on("touchend",function(){
		playAuto()
	
	});
	$('.next').on("touchend",function(){
		playAuto()
	
	});
	$('.next').hover(function(){ 
		clearInterval(timer);
	},function(){
		playAuto()	
	});

	$('#toTop').on('click',function(){
		 var speed=500;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
	});
	var buff = true;
	$(window).scroll(function () {
		if ($(window).scrollTop() >$('#animate3').offset().top-100) {
			if(buff){
				$('.img1').addClass('animateImg1');
				$('.img2').addClass("animateImg2");
				$('.img3').addClass("animateImg3");
			}
			buff=false;
		}
	});
})

function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        if (IE55) {
            return "IE55";
        }
        if (IE6) {
            return "IE6";
        }
        if (IE7) {
            return "IE7";
        }
        if (IE8) {
            return "IE8";
        }
    }//isIE end
    if (isFF) {
        return "FF";
    }
    if (isOpera) {
        return "Opera";
    }
}//myBrowser() end
//以下是调用上面的函数
if (myBrowser() == "FF") {
    $('.flo_cont_te').hide();
	 $('body').height();
}
if (myBrowser() == "Opera") {
    $('.flo_cont_te').hide();
	 $('body').height();
}
if (myBrowser() == "Safari") {
    $('.flo_cont_te').hide();
	 $('body').height();
}
if (myBrowser() == "IE55") {
    $('.flo_cont_te').show();
	 $('body').height($(window).height);
	 $('body').css('overflow','hidden');
}
if (myBrowser() == "IE6") {
    $('.flo_cont_te').show();
  $('body').height($(window).height);
  $('body').css('overflow','hidden');
}
if (myBrowser() == "IE7") {
    $('.flo_cont_te').show();
  $('body').height($(window).height);
  $('body').css('overflow','hidden');
}
if (myBrowser() == "IE8"){
    $('.flo_cont_te').show();
  $('body').height($(window).height);
  $('body').css('overflow','hidden');
}
if (myBrowser() == "IE9"){
    $('.flo_cont_te').show();
  $('body').height($(window).height);
  $('body').css('overflow','hidden');
}

var webCont={
	timer_banner:null,
	init:function(){
		var _this = this;
		clearInterval(_this.timer_banner)
		_this.bannerChange();
		$('.codeMaggess').on('mouseover',function(){
			$('.itmagess').show();
		});
		$('.codeMaggess').on('mouseout',function(){
			$('.itmagess').hide();
		});
		$('.codeErweima').on('mouseover',function(){
			$('.erweimaImg').show();
		});
		$('.codeErweima').on('mouseout',function(){
			$('.erweimaImg').hide();
		});
		
	},
	bannerChange:function(){
		var _this = this
		//底下小图标点击切换
		var num=$('#imgchange div').length;
		var i_mun=0;
		$('#imgchange div:gt(0)').hide();//页面加载隐藏所有的li 除了第一个
		function bannerMoveks(){
			clearInterval(_this.timer_banner)
			_this.timer_banner=setInterval(function(){
				move_banner()
			},1500)
		};
		bannerMoveks();//开始自动播放
		//banner 右边点击执行函数
	   	function move_banner(){
			if(i_mun==num-1){
				i_mun=-1
			}
			//大图切换
			$('#imgchange div').eq(i_mun+1).fadeIn(1000).siblings('div').fadeOut(1000);
			i_mun++
		}
	}
	}













