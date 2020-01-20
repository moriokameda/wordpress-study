'use strict';


  var content1 = $('#content1');
  var content2 = $('#content2');
  var content3 = $('#content3');
  var content4 = $('#content4');
  var heroHeader = $('.ul-item');

  heroHeader.children('a').on('click', function () {
    heroHeader.removeClass('hero-active');
    var data = this.attr('data-target');
    switch (data) {
      case data === content1.attr('id'):
        content1.addClass('hero-active');
        break;
      case data === content2.attr('id'):
        content2.addClass('hero-active');
        break;
      case data === content3.attr('id'):
        content3.addClass('hero-active');
        break;
      case data === content4.attr('id'):
        content4.addClass('hero-active');
        break;

      default:
        content1.addClass('hero-active');
        break;
    }
  });

  // content1.hover(function () {
  //   if (this.hasClass('hero-active')) {
  //     return;
  //   } else {
  //     heroHeader.removeClass('hero-active');
  //     content1.addClass('hero-active');
  //   }
  // });
