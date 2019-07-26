$(document).ready(function () {
  var scroll = new SmoothScroll('[data-scroll]', {});
});

$(document).ready(function () {
  $('#heroCarousel').carousel({
    interval: 4000,
    pause: false
  });
})

$(document).on("click", ".sidebar-toggler, .sidebar-overlay", function () {
  if ($(".sidebar").hasClass("active")) {
    $(".sidebar").removeClass("active");
    $("body").removeClass("sidebar-active");
  } else {
    $(".sidebar").addClass("active");
    $("body").addClass("sidebar-active");
  }
})

$(document).on("click", ".question", function () {
  wrapper = $(this).closest(".question-wrapper");
  if (wrapper.hasClass("active")) {
    wrapper.find(".answer").slideUp();
    wrapper.removeClass("active");
  } else {
    wrapper.addClass("active");
    wrapper.find(".answer").slideDown();
  }
})

$(document).on("click", ".page-bird-popup .close", function() {
  $(this).closest(".page-bird-popup").toggleClass("active");
  $(".page-bird-popup-preview").toggleClass("active");
})

$(document).on("click", ".page-bird-popup-preview", function() {
  $(this).toggleClass("active");
  $(".page-bird-popup").toggleClass("active");
})

// Requires Cookie.js

$(document).ready(function() {
  setTimeout(function() {
    if (Cookies.get('has-seen-page-bird-popup') != "true" && !$(".page-bird-popup").hasClass("active")) {
      Cookies.set('has-seen-page-bird-popup', true, { expires: 1 });
      $(".page-bird-popup").toggleClass("active");
      $(".page-bird-popup-preview").toggleClass("active");
    }
  }, 8000);
});
