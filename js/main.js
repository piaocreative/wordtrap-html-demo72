$( document ).ready( function() {
    
    $( '.products' ).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $(".product-prev").click(function(e) {
        e.preventDefault();
        $(".products").slick("slickPrev");
    });

    $(".product-next").click(function(e) {
        e.preventDefault();
        $(".products").slick("slickNext");
    })

    var $slider = $('.products');

    $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0);
        var a = $(".pagenation").children("a:eq("+i+")");
        $(".active").removeClass();
        a.addClass("active");
        console.log(a);
    });

} );