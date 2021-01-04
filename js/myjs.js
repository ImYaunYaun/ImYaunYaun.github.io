$(document).on('ready', function() {
    $(".variable").slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

});

function MenuClick(myObj) {
    myObj.classList.toggle("open");
    mynav.classList.toggle("navopen");
}


$(document).ready(function() {
    $(".ScrollTOP").on('click', function() {
        // console.log('click');
        //     $('html,body').scrollTop(0);
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
    $("body").on('scroll', function() {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() > 300) {
            $('.ScrollTOP').fadeIn("fast");
        } else {
            $('.ScrollTOP').stop().fadeOut("fast");
        }
    });
});