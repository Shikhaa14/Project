// for client slider
$(function () {
  $(".client-carousel").owlCarousel({
    items: 8,
    margin: 10,
    loop: false,
    nav: false,
    responsive: {
      0: {
        items: 3.5,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1200,
        autoplayTimeout: 2000,
      },
      768: {
        items: 5,
        loop: true,
        dots: true,
      },
      1200: {
        items: 8,
        dots: true,
        autoplay: false,
      },
    },
  });
});

if ($(".case-study-carousel").length) {
  $(".case-study-carousel").owlCarousel({
    items: 2.5,
    margin: 30,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 2.5,
      },
    },
  });
}

// for number counter
if ($(".loaction-data").length) {
  var counted = 0;
  $(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $(".count").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 4000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      counted = 1;
    }
  });
}

if ($(".resource-list").length) {
  $(".resource-list nav a").each(function () {
    this.href += "#resource_list";
  });
}
