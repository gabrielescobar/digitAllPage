function main() {

    (function () {
        'use strict';
        new WOW().init();
        /* =================================
         ===  VIDEO BACKGROUND           ====
         =================================== */
        window.mobileAndTabletcheck = function() {
            var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        }


        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 100;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });



        $(document).ready(function() {

            var mobile = window.mobileAndTabletcheck();
            if (mobile){
                $("#tf-home").css("background-image","url('video/mobile.png')");
            }
            else {
                $('#tf-home').vide({
                    mp4: "video/home-hero",
                    webm: "video/home-hero",
                    ogv: "video/home-hero",
                    poster: "video/mobile",
                }, {
                    volume: 1,
                    playbackRate: 1,
                    muted: true,
                    loop: true,
                    autoplay: true,
                    position: '50% 50%', // Similar to the CSS `background-position` property.
                    posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
                    resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
                    bgColor: 'transparent',
                });

            }

            //** notice we are including jquery and the color plugin at
            //** http://code.jquery.com/color/jquery.color-2.1.0.js
            jQuery('img.svg').each(function(){
                var $img = jQuery(this);
                var imgID = $img.attr('id');
                var imgClass = $img.attr('class');
                var imgURL = $img.attr('src');

                jQuery.get(imgURL, function(data) {
                    // Get the SVG tag, ignore the rest
                    var $svg = jQuery(data).find('svg');

                    // Add replaced image's ID to the new SVG
                    if(typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID);
                    }
                    // Add replaced image's classes to the new SVG
                    if(typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass+' replaced-svg');
                    }

                    // Remove any invalid XML tags as per http://validator.w3.org
                    $svg = $svg.removeAttr('xmlns:a');

                    // Check if the viewport is set, else we gonna set it if we can.
                    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                    }

                    // Replace image with new SVG
                    $img.replaceWith($svg);

                }, 'xml');

                //  $('.svg').width(200).height(200).css("position", "fixed").css("z-index", "100");
            });
            if (!(matchMedia('only screen and (max-width: 990px)').matches)) {
                $(".loader").fadeOut("slow");
                var scroll_pos = 0;
                var animation_begin_pos = 0; //where you want the animation to begin
                var animation_end_pos = 5000; //where you want the animation to stop
                var beginning_color = new $.Color( 'rgb(204,39,45)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
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
                        $('.svg path ').animate({ fill: newColor }, 0);
                        $('.color-header ').animate({ color: newColor }, 0);
                        $('.navbar-default .navbar-nav > .active ').animate({ backgroundColor: newColor }, 0);
                    } else if ( scroll_pos > animation_end_pos ) {
                        $('body').animate({ backgroundColor: ending_color }, 0);
                        var black = new $.Color(34,34,34,0 );
                        $('.navbar-default .navbar-nav > li ').animate({ backgroundColor: black }, 0);
                        $('.svg path ').animate({ fill: ending_color }, 0);
                        $('.color-header ').animate({ color: ending_color }, 0);
                        $('.navbar-default .navbar-nav > .active > a').animate({ backgroundColor: ending_color }, 0);
                    } else if ( scroll_pos < animation_begin_pos ) {
                        console.log($('.navbar-default .navbar-nav > .active > a'));
                        $('body').animate({ backgroundColor: beginning_color }, 0);
                        $('.navbar-default .navbar-nav > li ').animate({ backgroundColor: black }, 0);
                        $('.svg path ').animate({ fill: beginning_color }, 0);
                        $('.color-header ').animate({ color: beginning_color }, 0);
                        $('.navbar-default .navbar-nav > .active > a').animate({ backgroundColor: beginning_color }, 0);
                    } else { }
                });
            }


            $('body').scrollspy({
                target: '.navbar-default',
                offset: 80
            })

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

        });

        /*====================================
         Portfolio Isotope Filter
         ======================================*/
        $(window).load(function() {
            $(".loader").fadeOut("slow");
        });
    }());
}
main();