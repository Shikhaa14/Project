function openNav() {
    if (window.matchMedia("(min-width: 320px) and (max-width: 750px)").matches) {
        console.log("small")
        document.getElementById("mySidenav").style.width = "100%";
      } 
      else {
        document.getElementById("mySidenav").style.width = "550px";
    }
    // document.getElementById("mySidenav").style.width = "550px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(".work-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
      },
    },
  });
  
  $(".porfolio-banner .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });
  
  $(".portfolio .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      "<h6>PREV PROJECT</h6>",
      "<h6>NEXT PROJECT</h6>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  