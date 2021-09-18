// responsive orders.html page when screen size matches with mobile size 
if (window.matchMedia("(min-width: 320px) and (max-width: 750px)").matches) {
    console.log("test")
    // window.location.reload();
    $( "#main" ).addClass( "col-12" );
    $( "#table" ).addClass( "table-responsive" );
  } 
  else {
    $( "#main" ).addClass( "col" );
    $( "#table" ).removeClass( "table-responsive" );
}


$('.hero .owl-carousel').owlCarousel({
    nav:false,
    loop:true,
    dots: true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.groombox .owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

$('.certified .owl-carousel').owlCarousel({
    nav: false,
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

$('.product .owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.why-petvit .owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.review .owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.insta .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ["<span class='show-for-sr'><i class='fas fa-chevron-circle-left'></i></span>","<span class='show-for-sr'><i class='fas fa-chevron-circle-right'></i></span>"],
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


$('.brand .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.review-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:2
        },
        1000:{
            items:3
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
    nextArrow: '<i class="fas fa-arrow-circle-right"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left"></i>',
    autoplaySpeed: 3000,responsive: [
        {
          breakpoint: 768,
          settings: {
            // arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            // arrows: false,
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

