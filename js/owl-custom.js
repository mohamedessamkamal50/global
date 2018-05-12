(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function() {

        var owlSelector = $('.owl-carousel');
        owlSelector.each(function () {
            var option = {
                rtl:true,
                items : 3,
                margin : 0,
                loop : false,
                center : false,
                mousedrag : true,
                touchdrag : true,
                pulldrag : true,
                nav : false,
                navtext : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                dots : false,
                dotsdata : false,
                autoplay : false,
                smartspeed : 650,
                animateout : null,
                animatein : null,
                xs :  1,
                sm :  2,
                md :  2,
                lg :  3};

            for (var k in option) {
                if (option.hasOwnProperty(k)) {
                    if ($(this).attr('data-carousel-' + k) != null) {
                        option[k] =  $(this).data('carousel-' + k);
                    }
                }
            }



            $(this).owlCarousel({
                rtl:true,
                margin: option.margin,
                loop: option.loop,
                center: option.center,
                mouseDrag: option.mousedrag,
                touchDrag: option.touchdrag,
                pullDrag: option.pulldrag,
                nav: option.nav,
                navText: option.navtext,
                dots: option.dots,
                dotsData: option.dotsdata,
                autoplay: option.autoplay,
                smartSpeed: option.smartspeed,
                animateIn: option.animatein,
                animateOut: option.animateout,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: option.xs
                    },
                    // breakpoint from 768 up
                    480: {
                        items: option.sm
                    },
                    // breakpoint from 768 up
                    768: {
                        items: option.md
                    },
                    992: {
                        items: option.lg
                    },
                    1200: {
                        items : option.items
                    }
                }
            });

        });
    });

})(jQuery);
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
    .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
}).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
}).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
}).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
}).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
}).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
});




