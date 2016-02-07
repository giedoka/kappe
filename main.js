$(document).ready(function(){
    $('.menu-btn').click(function(){
   		$(this).animate({
    		left: '-30px',
    	});
    	$('header').animate({
    		left: '0'
    	});
    });
	if($(window).width < 1000) {
    $('article').click(function() {
    	$('header').animate({
    		left: '-301px'
    	});
    	$('.menu-btn').animate({
    		left: '0'
    	});
    });
    }
    
    $('.logo').click(function() {
        $('header').animate({
    		left: '-301px'
    	});
    	$('.menu-btn').animate({
    		left: '0'
    	});
    });

    $('.info-btn').click(function(){
        if($(this).css('opacity') == 0.7) {
            $(this).css('opacity', '1');
        }
        else {
            $(this).css('opacity', 0.7);
        }
    	$('.icon-info-circled').toggleClass('active');
    	if($('.icon-info-circled').hasClass('active')){
	    	$('.contact-info').animate({
	    		right: '0'
	    	},200);
	    }
	    else{
	    	$('.contact-info').animate({
	    		right: '-280px'
	    	},200);
	    }
    });

    $('.width-span').html($('.photo-box').width());
    $('.height-span').html($('.photo-box').height());
    $(window).on('resize', function(){
    	$('.width-span').html($('.photo-box').width());
    	$('.height-span').html($('.photo-box').height());
    });
    
    $('.width-span').html($('.post .header').width());
    $('.height-span').html($('.post .header').height());
    $(window).on('resize', function(){
    	$('.width-span').html($('.post .header').width());
    	$('.height-span').html($('.post .header').height());
    });
    
    for(var i = 0; i < 16; i++) {
	    $(".photo-box").children().eq(i).hover(function(){
	    	$(this).find(".find-out").css("display", "flex");
	        }, function(){
	        $(this).find(".find-out").css("display", "none");
            });
    }
    $('.post').hover(function() {
        $(this).find('.header i').css("display", "flex");
        }, function(){
	    $(this).find('.header i').css("display", "none");
    });
});