$(document).ready(function() {
    //////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
}); 

$('.hero .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

$('.bestSeller-slider .owl-carousel').owlCarousel({
    loop:true,
    margin: 30,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

$('.little-things .owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

$('.insta .owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav: true,
    navText : ["<i class='fas fa-arrow-circle-left'></i>","<i class='fas fa-arrow-circle-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

$('.testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
})

$('.review .owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav: true,
    dots: true,
    dotsData: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 3000,    
    nextArrow: '<i class="fas fa-chevron-circle-right"></i>',
    prevArrow: '<i class="fas fa-chevron-circle-left"></i>',
    autoplaySpeed: 3000,responsive: [
        {
        breakpoint: 768,
        settings: {
        }
        },
        {
        breakpoint: 480,
        settings: {
        }
        }
    ]
});

$('.slider-nav').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,responsive: [
        {
        breakpoint: 850,
        settings: {
            vertical: true,
            slidesToShow: 4,
        }
        },
        {
        breakpoint: 480,
        settings: {
            vertical: false,
            slidesToShow: 3,
        }
        }
    ]
});

