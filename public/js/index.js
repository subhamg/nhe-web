$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 80) {
    $('#mainNav').addClass('navbar-shrink');
  } else {
    $('#mainNav').removeClass('navbar-shrink');
  }
});
