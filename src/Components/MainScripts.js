import React, { useEffect } from "react";

const MainScripts = () => {
  useEffect(() => {
    const $ = window.jQuery;

    // Spinner removal
    setTimeout(() => {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);

    // Initiate WOW.js
    new window.WOW().init();

    // Header carousel
    $(".header-carousel").owlCarousel({
      animateOut: "fadeOut",
      items: 1,
      margin: 0,
      stagePadding: 0,
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
    });

    // Feature carousel
    $(".feature-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1200: { items: 3 },
      },
    });

    // Blog carousel
    $(".blog-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      dots: true,
      loop: true,
      margin: 25,
      nav: false,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1200: { items: 3 },
      },
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
    });

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });

    $(".back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });
  }, []);

  return null;
};

export default MainScripts;
