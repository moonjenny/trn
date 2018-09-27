$(document).ready(function(){

  //GNB
	$('.gnb ul li').mouseover(function(){
		$('.header-box .snb').show();
		//$('.header-box').addClass('over');
	});

	$('.header-box').mouseleave(function(){
		$('.header-box .snb').hide();
		//$('.header-box').removeClass('over');
	});

  //main-visual
	function main_showcase(){
		var mainSwiper = new Swiper('.swiper-container', {
			simulateTouch : false,
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			clickable: false,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		});
		$(".swiper-control .recom-play").hide();
		$( ".swiper-control .recom-stop" ).click(function(){
				mainSwiper.autoplay.stop();
				$(".swiper-control .recom-stop").hide();
				$(".swiper-control .recom-play").show();
		});
		$( ".swiper-control .recom-play" ).click(function(){
				mainSwiper.autoplay.start();
				$(".swiper-control .recom-play").hide();
				$(".swiper-control .recom-stop").show();
		});
	}
	$(window).ready(function(){
		main_showcase();
	});

	//main-gate
	$('.main-gate').mouseover(function(){
		$(this).addClass('over');
	});
	$('.main-gate').mouseleave(function(){
		$(this).removeClass('over');
	});

	//footer
	var fstate = 'off';
	$('.foot-family .family-site').click(function(){
		if( fstate == 'on' ){
			$(this).removeClass("selected");
			$('.family-layer').stop().animate({top:'0',height:'0'}, 500);
			fstate = 'off';
		}else if( fstate == 'off'){
			$(this).addClass("selected");
			$('.family-layer').stop().animate({top:'-210px',height:'208px'}, 500);
			fstate = 'on';
		}
		$('.family-layer').mouseleave(function(){
			$('.foot-family .family-site').removeClass("selected");
			$('.family-layer').stop().animate({top:'0',height:'0'}, 500);
			fstate = 'off';
		});
	});

	//sub page
	if($('body').hasClass('sub') === true) {
		console.log('sub page');
	}

});

//etc
function moveTag(id){
	var offset = $("#"+id).offset();
  $('html, body').animate({scrollTop : offset.top}, 400);
}
