$(document).ready(function(){
    $('.menu-btn').click(function(){
   		$(this).animate({
    		left: '-30px',
    	});
    	$('header').animate({
    		left: '0'
    	});
        $('.contact-info').animate({
            right: '-280px'
        },200);
    });
	
    $('article').click(function() {
        if($(window).width() < 1000) {
            $('header').animate({
                left: '-301px'
            });
            $('.menu-btn').animate({
                left: '0'
            });
        }
    });

    $('.info-btn').click(function(){
        if($(window).width() < 1000) {
            $('header').animate({
                left: '-301px'
            });
            $('.menu-btn').animate({
                left: '0'
            });
        }
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
    $('.width-span-blog').html($('.post .header').width());
    $('.height-span-blog').html($('.post .header').height());
    $(window).on('resize', function(){
    	$('.width-span').html($('.photo-box').width());
    	$('.height-span').html($('.photo-box').height());
        $('.width-span-blog').html($('.post .header').width());
    	$('.height-span-blog').html($('.post .header').height());
    });
    
	$('.photo-box').hover(function(){
        $(this).find('.find-out').css("display", "flex");
	    }, function(){
        $(this).find('.find-out').css("display", "none");
    });
    $('.post').hover(function() {
        $(this).find('.header i').css("display", "flex");
        }, function(){
	    $(this).find('.header i').css("display", "none");
    });
    $('.single-img').hover(function(){
        $(this).find('.find-out').css("display", "flex");
	    }, function(){
        $(this).find('.find-out').css("display", "none");
    });
    $('.another-imgs li:first-child').click(function(){
        $('.post .header-img img').css("display", "none");
        $('.post .header-img img').attr("src", "img/header-about.jpg");
        $('.post .header-img img').fadeIn(500);
        $('.another-imgs li').not(this).removeClass('active');
        $(this).addClass('active');
    });
    $('.another-imgs li:nth-child(2)').click(function(){
        $('.post .header-img img').css("display", "none");
        $('.post .header-img img').attr("src", "img/forest-2.png");
        $('.post .header-img img').fadeIn(500);
        $('.another-imgs li').not(this).removeClass('active');
        $(this).addClass('active');
    });
    $('.another-imgs li:nth-child(3)').click(function(){
        $('.post .header-img img').css("display", "none");
        $('.post .header-img img').attr("src", "img/rails.png");
        $('.post .header-img img').fadeIn(500);
        $('.another-imgs li').not(this).removeClass('active');
        $(this).addClass('active');
    });
    $('.another-imgs li:nth-child(4)').click(function(){
        $('.post .header-img img').css("display", "none");
        $('.post .header-img img').attr("src", "img/brick-wall.png");
        $('.post .header-img img').fadeIn(500);
        $('.another-imgs li').not(this).removeClass('active');
        $(this).addClass('active');
    });
});