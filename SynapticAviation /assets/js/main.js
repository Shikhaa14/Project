// let tl = gsap.timeline({
//   onComplete: contentShow,
// });
// tl.to("#loader", {
//   x: "100%",
//   duration: 100.5,
//   ease: "power2.in",
// });

// function contentShow() {
//   gsap.set("#container", { display: "block" });
//   gsap.set(".txt", { display: "none" });
//   gsap.set("#loader", { display: "none" });
//   gsap.fromTo(
//     "#c-inner",
//     {
//       delay: 2,
//       opacity: 0,
//     },
//     {
//       opacity: 1,
//     }
//   );
// }
$(document).ready(function () {
  $(".pre-loader .element-wrapper").fadeOut(1500);
});

// for animation
$(function () {
  new WOW().init();
  // });
});

// for navigation menu
//Hamburger Start
$(".hamburger").on("click", function (e) {
  $(".hamburger.active").not(this).removeClass("active");
  $(this).toggleClass("active");
});

var $hamburger = $(".hamburger");

gsap.set(".line01", { x: 0 });
gsap.set(".line03", { x: 0 });
gsap.set(".line02", { x: 40 });
//gsap.set('.navigation',{xPercent:-50, yPercent:-50})
gsap.set(".navigation li", { x: 0, opacity: 0 });

var hamburgerMotion = gsap.timeline();
// hamburgerMotion.to(".line01", 0.4, { x: "=+80" }, 0);
hamburgerMotion.to(".line02", 0.4, { x: "80" }, 0);
// hamburgerMotion.to(".line03", 0.4, { x: "=+80" }, 0);
hamburgerMotion.to(".menu", 0.4, { autoAlpha: 1 }, 0);
hamburgerMotion.staggerTo(
  ".navigation li",
  0.4,
  { y: -30, opacity: 1, ease: "sine.out" },
  0.2,
  0.5
);
hamburgerMotion.reverse();

$hamburger.on("click", function (e) {
  hamburgerMotion.reversed(!hamburgerMotion.reversed());
});

// $(".menu-links").on("mouseover", function (e) {
//   //   gsap.to($(this), 0.4, { x: 20, ease: "sine.out" });
// });

// $(".menu-links").on("mouseout", function (e) {
//   //   gsap.to($(this), 0.4, { x: 0, ease: "sine.out" });
// });

// for home hero section animation
gsap.utils.toArray(".hero-section").forEach((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => "+=" + section.offsetWidth,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
    defaults: { ease: "none" },
  });
  tl.fromTo(
    section.querySelector(".afterImage"),
    { xPercent: 100, x: 0 },
    { xPercent: 0 }
  ).fromTo(
    section.querySelector(".afterImage .hero-100"),
    { xPercent: -100, x: 0 },
    { xPercent: 0 },
    0
  );
});

// for hero scroll down arrow
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".animated-scroll-arrow").fadeOut();
  } else {
    $(".animated-scroll-arrow").fadeIn();
  }
});

// for hero scroll down arrow
$("nav ul li .sub-menu").hide();
$(".dropdown-nav > a").click(function () {
  event.preventDefault();
  //   $("nav ul li .dropdown").hide(300);
  $(this).next().toggle("active");
});

// For number counter and circle animation

$(document).ready(function ($) {
  Number.prototype.countDecimals = function () {
    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0;
  };
  // console.log(
  //   $($(".who-we-are .row .col-lg-2:nth-child(1) .circle").find("div"))
  //     .data("show-count")
  //     .countDecimals()
  // );
  // var countDecimal = $($(".who-we-are .row .circle").find("div"))
  //   .data("show-count")
  //   .countDecimals();
  // if (countDecimal == 1) {
  //   console.log($(this));
  // }

  // $(".who-we-are .row .col-lg-2:nth-child(1)").load(function () {
  //   alert("test");
  // });
  if ($(".who-we-are .row .col-lg-2:nth-child(1)").length) {
    $(".who-we-are .row .col-lg-2:nth-child(1) .circle").addClass(
      "first-count"
    );
    if (
      $($(".first-count").find("div")).data("show-count").countDecimals() == 1
    ) {
      $(".first-count").addClass("float-value");
    } else if (
      $($(".first-count").find("div")).data("show-count").countDecimals() == 2
    ) {
      $(".first-count").addClass("two-float-value");
    }
  }

  if ($(".who-we-are .row .col-lg-2:nth-child(2)").length) {
    $(".who-we-are .row .col-lg-2:nth-child(2) .circle").addClass(
      "second-count"
    );
    if (
      $($(".second-count").find("div")).data("show-count").countDecimals() == 1
    ) {
      $(".second-count").addClass("float-value");
    } else if (
      $($(".second-count").find("div")).data("show-count").countDecimals() == 2
    ) {
      $(".second-count").addClass("two-float-value");
    }
  }
  if ($(".who-we-are .row .col-lg-2:nth-child(3)").length) {
    $(".who-we-are .row .col-lg-2:nth-child(3) .circle").addClass(
      "third-count"
    );
    if (
      $($(".third-count").find("div")).data("show-count").countDecimals() == 1
    ) {
      $(".third-count").addClass("float-value");
    } else if (
      $($(".third-count").find("div")).data("show-count").countDecimals() == 2
    ) {
      $(".third-count").addClass("two-float-value");
    }
  }
  if ($(".who-we-are .row .col-lg-2:nth-child(4)").length) {
    $(".who-we-are .row .col-lg-2:nth-child(4) .circle").addClass(
      "fourth-count"
    );
    if (
      $($(".fourth-count").find("div")).data("show-count").countDecimals() == 1
    ) {
      $(".fourth-count").addClass("float-value");
    } else if (
      $($(".fourth-count").find("div")).data("show-count").countDecimals() == 2
    ) {
      $(".fourth-count").addClass("two-float-value");
    }
  }
  if ($(".who-we-are .row .col-lg-2:nth-child(5)").length) {
    $(".who-we-are .row .col-lg-2:nth-child(5) .circle").addClass(
      "fifth-count"
    );
    if (
      $($(".fifth-count").find("div")).data("show-count").countDecimals() == 1
    ) {
      $(".fifth-count").addClass("float-value");
    } else if (
      $($(".fifth-count").find("div")).data("show-count").countDecimals() == 2
    ) {
      $(".fifth-count").addClass("two-float-value");
    }
  }

  // alert($($(".hello1 div")).data("show-count").countDecimals());
  function animateElements() {
    $(".progressbar").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find(".circle").attr("data-percent");
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data("animate");
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            size: 200,
            thickness: 2,
            easing: "linear",
            emptyFill: "#80aecf7d",
            animation: {
              duration: 5000,
              easing: "circleProgressEasing",
            },
            fill: {
              color: "#80AECF",
            },
          })

          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              if ($(this).hasClass("float-value")) {
                $(this)
                  .find("div")
                  .text(
                    $($(this).find("div")).data("pre-counter") +
                      (
                        stepValue * $($(this).find("div")).data("show-count")
                      ).toFixed(1) +
                      $($(this).find("div")).data("post-counter")
                  );
              } else if ($(this).hasClass("two-float-value")) {
                $(this)
                  .find("div")
                  .text(
                    $($(this).find("div")).data("pre-counter") +
                      (
                        stepValue * $($(this).find("div")).data("show-count")
                      ).toFixed(2) +
                      $($(this).find("div")).data("post-counter")
                  );
              } else {
                $(this)
                  .find("div")
                  .text(
                    $($(this).find("div")).data("pre-counter") +
                      (
                        stepValue * $($(this).find("div")).data("show-count")
                      ).toFixed(0) +
                      // $($(this).find("div")).data("show-count") +
                      $($(this).find("div")).data("post-counter")
                  );
              }
            }
          )
          .stop();
      }
    });
  }
  animateElements();
  $(window).scroll(animateElements);
});

// for accordian img change
$("#acrdn-img-1").addClass("active");
$("#acrdn-btn-1").click(function () {
  $(".values-img").removeClass("active");
  $("#acrdn-img-1").addClass("active");
});

$("#acrdn-btn-2").click(function () {
  $(".values-img").removeClass("active");
  $("#acrdn-img-2").addClass("active");
});

$("#acrdn-btn-3").click(function () {
  $(".values-img").removeClass("active");
  $("#acrdn-img-3").addClass("active");
});

$("#acrdn-btn-4").click(function () {
  $(".values-img").removeClass("active");
  $("#acrdn-img-4").addClass("active");
});

$("#acrdn-btn-5").click(function () {
  $(".values-img").removeClass("active");
  $("#acrdn-img-5").addClass("active");
});

$("#acrdn-btn-6").click(function () {
  $(".values-img").removeClass("active");
  $("#acrdn-img-6").addClass("active");
});

// home page banner section switch with and without img
if ($("#switch").length) {
  const switchStatus = document.querySelector("#switch");
  if (switchStatus.checked) {
    document.getElementById("with").style.opacity = "1";
    document.getElementById("without").style.opacity = "0";
    document.getElementById("with").style.display = "block";
    document.getElementById("without").style.display = "none";
  }
  $("#switch").change(function () {
    if ($(this).prop("checked") == true) {
      document.getElementById("with").style.opacity = "1";
      document.getElementById("without").style.opacity = "0";
      document.getElementById("with").style.display = "block";
      document.getElementById("without").style.display = "none";
    } else {
      document.getElementById("with").style.opacity = "0";
      document.getElementById("without").style.opacity = "1";
      document.getElementById("with").style.display = "none";
      document.getElementById("without").style.display = "block";
    }
  });
}

if ($(".leadership-slider").length) {
  $(".owl-carousel.leadership-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
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
}

if ($(".aviation-limits").length) {
  $(".owl-carousel.aviation-limits").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
        autoHeight: true,
      },
      600: {
        items: 2,
        autoHeight: true,
      },
      1000: {
        items: 3,
      },
    },
  });
  setTimeout(function () {
    $(".aviation-limits .owl-prev").attr("data-cursor-text", "Previous");
    $(".aviation-limits .owl-prev").attr("data-cursor", "-color-accent-maxred");
    $(".aviation-limits .owl-next").attr("data-cursor-text", "Next");
    $(".aviation-limits .owl-next").attr("data-cursor", "-color-accent-maxred");
  }, 1000);
}

if ($(".partners").length) {
  $(".owl-carousel.partners").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
}
if ($(".yourEyes").length) {
  $(".owl-carousel.yourEyes").owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        autoHeight: true,
      },
      600: {
        items: 3,
        dots: true,
        autoHeight: true,
      },
      1000: {
        items: 4,
      },
    },
  });
}

// solution page data to insight slider
if ($(".sliderContainer").length) {
  $(".slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //ticking machine
  var percentTime;
  var tick;
  var time = 0.1;
  var progressBarIndex = 0;

  $(".progressBarContainer .progressBar").each(function (index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);
  });

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
    for (let i = 0; i < 3; i++) {
      const element = document.getElementById(`data${i}`);
      element.style.opacity = progressBarIndex === i ? 1 : 0;
      element.style.transition = "0.5s";
    }
  }

  function interval() {
    if (
      $(
        '.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]'
      ).attr("aria-hidden") === "true"
    ) {
      progressBarIndex = $(
        '.slider .slick-track div[aria-hidden="false"]'
      ).data("slickIndex");
      startProgressbar();
    } else {
      percentTime += 1 / (time + 5);
      $(".inProgress" + progressBarIndex).css({
        width: percentTime + "%",
      });
      if (percentTime >= 100) {
        $(".single-item").slick("slickNext");
        progressBarIndex++;
        if (progressBarIndex > 2) {
          progressBarIndex = 0;
        }
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $(".inProgress").css({
      width: 0 + "%",
    });
    clearInterval(tick);
  }
  startProgressbar();

  // $(".item").click(function () {
  //   clearInterval(tick);
  //   var goToThisIndex = $(this).find("span").data("slickIndex");
  //   $(".single-item").slick("slickGoTo", goToThisIndex, false);
  //   startProgressbar();
  // });
}

// for removing black backgorund in menu
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".main-wrapper").css("background", "rgb(0 0 0 / 82%)");
  } else {
    $(".main-wrapper").css("background", "rgb(0 0 0 / 100%)");
  }
});

if ($(".leadership-carousel").length) {
  const myModal = document.getElementById("exampleModal");
  const selector = $("#selector");

  myModal.addEventListener("shown.bs.modal", (e) => {
    const targetClass = e.relatedTarget.classList;
    if (targetClass.contains("card1")) {
      goToCarouselSlide(0);
    } else if (targetClass.contains("card2")) {
      goToCarouselSlide(1);
    } else if (targetClass.contains("card3")) {
      goToCarouselSlide(2);
    }
  });

  function goToCarouselSlide(slideIndex) {
    selector.trigger("to.owl.carousel", [slideIndex, 1]);
  }
}
