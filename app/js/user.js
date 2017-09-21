$(document).ready(function() {
	$(".grid").masonry({
		itemSelector:'.grid-item',
//		columnWidth:100,
		gutter:30
	});
	
	$(".facebook").mouseover(function() {
		$(this).addClass("sprite-facebookC");
		$(this).removeClass("sprite-facebook");
	});
	
	$(".facebook").mouseout(function() {
		$(this).removeClass("sprite-facebookC");
		$(this).addClass("sprite-facebook");
	});
	
	$(".drible").mouseover(function() {
		$(this).addClass("sprite-dribleC");
		$(this).removeClass("sprite-drible");
	});
	
	$(".drible").mouseout(function() {
		$(this).removeClass("sprite-dribleC");
		$(this).addClass("sprite-drible");
	});
	
	$(".twitter").mouseover(function() {
		$(this).addClass("sprite-twitterC");
		$(this).removeClass("sprite-twitter");
	});
	
	$(".twitter").mouseout(function() {
		$(this).removeClass("sprite-twitterC");
		$(this).addClass("sprite-twitter");
	});
	
	$(".inst").mouseover(function() {
		$(this).addClass("sprite-instC");
		$(this).removeClass("sprite-inst");
	});
	
	$(".inst").mouseout(function() {
		$(this).removeClass("sprite-instC");
		$(this).addClass("sprite-inst");
	});
	$(".vimeo").mouseover(function() {
		$(this).addClass("sprite-vimeoC");
		$(this).removeClass("sprite-vimeo");
	});
	
	$(".vimeo").mouseout(function() {
		$(this).removeClass("sprite-vimeoC");
		$(this).addClass("sprite-vimeo");
	});
	$(".in").mouseover(function() {
		$(this).addClass("sprite-inC");
		$(this).removeClass("sprite-in");
	});
	
	$(".in").mouseout(function() {
		$(this).removeClass("sprite-inC");
		$(this).addClass("sprite-in");
	});
	$(".flick").mouseover(function() {
		$(this).addClass("sprite-flickC");
		$(this).removeClass("sprite-flick");
	});
	
	$(".flick").mouseout(function() {
		$(this).removeClass("sprite-flickC");
		$(this).addClass("sprite-flick");
	});
	
	$(".youtube").mouseover(function() {
		$(this).addClass("sprite-youtubeC");
		$(this).removeClass("sprite-youtube");
	});
	
	$(".youtube").mouseout(function() {
		$(this).removeClass("sprite-youtubeC");
		$(this).addClass("sprite-youtube");
	});
	$(".g_").mouseover(function() {
		$(this).addClass("sprite-g_C");
		$(this).removeClass("sprite-g_");
	});
	
	$(".g_").mouseout(function() {
		$(this).removeClass("sprite-g_C");
		$(this).addClass("sprite-g_");
	});
	$(".pinterest").mouseover(function() {
		$(this).addClass("sprite-pinterestC");
		$(this).removeClass("sprite-pinterest");
	});
	
	$(".pinterest").mouseout(function() {
		$(this).removeClass("sprite-pinterestC");
		$(this).addClass("sprite-pinterest");
	});
	$(".toup").mouseover(function() {
		$(this).addClass("sprite-upC");
		$(this).removeClass("sprite-up");
	});
	
	$(".toup").mouseout(function() {
		$(this).removeClass("sprite-upC");
		$(this).addClass("sprite-up");
	});
});

$(document).ready(function() {
	$('.header__menuButton').click(function() {
		$('.header__menu').toggleClass('active');
	});
	$('.header__search_button').click(function() {
		$('.header__search_area').toggleClass('activeSearch');
	});
//	$('.goDown a').mPageScroll2id();
});





   

