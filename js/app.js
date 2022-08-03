$(document).ready(function () {
  $(".main-carousel").owlCarousel({
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      `<i class='uk-icon-chevron-left'/>`,
      `<i class='uk-icon-chevron-right'/>`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      580: {
        items: 2,
      },
      768: {
        items: 3,
      },
      960: {
        items: 7,
      },
    },
  });
  $(".customer-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [
      `<i class='uk-icon-chevron-left'/>`,
      `<i class='uk-icon-chevron-right'/>`,
    ],
    responsive: {
      0: {
        items: 1,
      },
      580: {
        items: 2,
      },
      960: {
        items: 6,
      },
    },
  });
});

$(".marquee").teletype({
  text: ["به پرتال دانشگاه علوم پزشکی و خدمات بهداشتی درمانی البرز خوش آمدید."],
});
$(".cursor").teletype({
  text: ["_"],
});
