(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeInLeft('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });
