$('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots: false,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
        }
    }
})