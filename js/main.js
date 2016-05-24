// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';
    $(document).ready(function(){
        //** notice we are including jquery and the color plugin at
        //** http://code.jquery.com/color/jquery.color-2.1.0.js

        var scroll_pos = 0;
        var animation_begin_pos = 0; //where you want the animation to begin
        var animation_end_pos = 5000; //where you want the animation to stop
        var beginning_color = new $.Color( 'rgb(236,30,41)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
        var ending_color = new $.Color( 'rgb(51,153,255)' ); ;//what color we want to use in the end
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) {
                // console.log( 'scrolling and animating' );
                //we want to calculate the relevant transitional rgb value
                var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
                var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
                var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
                var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
                var newColor = new $.Color( newRed, newGreen, newBlue );
                var black = new $.Color(34,34,34,0 );
                //console.log( newColor.red(), newColor.green(), newColor.blue() );
                $('body').animate({ backgroundColor: newColor }, 0);
                $('.navbar-default .navbar-nav > li ').animate({ backgroundColor: black }, 0);
                $('.navbar-default .navbar-nav > .active ').animate({ backgroundColor: newColor }, 0);
            } else if ( scroll_pos > animation_end_pos ) {
                $('body').animate({ backgroundColor: ending_color }, 0);
                var black = new $.Color(34,34,34,0 );
                $('.navbar-default .navbar-nav > li ').animate({ backgroundColor: black }, 0);
                $('.navbar-default .navbar-nav > .active > a').animate({ backgroundColor: ending_color }, 0);
            } else if ( scroll_pos < animation_begin_pos ) {
                console.log($('.navbar-default .navbar-nav > .active > a'));
                $('body').animate({ backgroundColor: beginning_color }, 0);
                $('.navbar-default .navbar-nav > li ').animate({ backgroundColor: black }, 0);
                $('.navbar-default .navbar-nav > .active > a').animate({ backgroundColor: beginning_color }, 0);
            } else { }
        });
    });
   /* ==============================================
  	Testimonial Slider  #222222
  	=============================================== */
    $(".typed").typewriter({
        speed: 180
    });
    
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();