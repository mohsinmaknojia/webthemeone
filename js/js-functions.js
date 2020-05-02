
$(document).ready(function() {

    // Counter Number    
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        
    // Navicon Toggle Class 
        $('.icon').click(function() {
            $('.icon').toggleClass('active');
            $('.navovelay').toggleClass('active');
        });


    // Navigation Hide On Scroll 
        $(window).scroll(function() {
            $('.navovelay').removeClass('active');
            $('.icon').removeClass('active');
        });
    
    // Sticky Navigation On Scroll 
        $(document).scroll(function() {
            $('.icon').css('display', 'none');
            var scrollPos = $(document).scrollTop();
            if (scrollPos >= 100) {
                $('.navbar').addClass('fixednav');
                $('.icon').css('display', 'inline-block');
            }
            else if (scrollPos <= 100){
                $('.icon').css('display', 'inline-block');
                $('.navbar').removeClass('fixednav');
            }
        });
    
    // Owl Carousel Function
        $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplayTimeout:1000,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    $('.cardlink').click(function() {
        $(this).addClass('minus');
    });





    
    });
     


