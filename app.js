$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.menu').addClass('shrink');
    } else {
      $('.menu').removeClass('shrink');
    }
  });