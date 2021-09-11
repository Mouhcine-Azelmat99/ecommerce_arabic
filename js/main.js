$(function () {
  'use strict';
  // Adjust Slider Height
  var winH    = $(window).height(),
      upperH  = $('.upper-bar').innerHeight(),
      navH    = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - ( upperH + navH ));

  // Featured Work Shuffle
  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-imgs #card').css('opacity', 1);
    } else {
      $('.shuffle-imgs #card').css('opacity', '.02');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });

});

$(function () {
  $('[placeholder]').focus(function () {
    $(this).attr('data-text', $(this).attr('placeholder'));
    $(this).removeAttr('placeholder');
  }).blur(function () {
    $(this).attr('placeholder', $(this).attr('data-text'));
  });
});