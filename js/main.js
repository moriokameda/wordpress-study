'use strict';

var imgHeader = $('.section1_item');
imgHeader.on('mouseenter', function () {
  var dataTarget = $(this).children('a').attr('data-target');
  var bkImgs = $('.bk_img');
  var bkImg = $(dataTarget);
  imgHeader.removeClass('item_active');
  bkImgs.removeClass('item_active');
  $(this).addClass('item_active');
  bkImg.addClass('item_active');
});
  // var content1 = $('#content1');
  // var content2 = $('#content2');
  // var content3 = $('#content3');
  // var content4 = $('#content4');
  // var heroHeader = $('.ul-item');

  // heroHeader.children('a').on('click', function () {
  //   heroHeader.removeClass('hero-active');
  //   var data = $(this).attr('data-target');
  //   $(this).parent('li').addClass('hero-active');
  //   console.log(data);
  //   switch (data) {
  //     case data === content1.attr('id'):
  //       content1.addClass('hero-active');
  //       break;
  //     case data === content2.attr('id'):
  //       content2.addClass('hero-active');
  //       break;
  //     case data === content3.attr('id'):
  //       content3.addClass('hero-active');
  //       break;
  //     case data === content4.attr('id'):
  //       content4.addClass('hero-active');
  //       break;

  //     default:
  //       content1.addClass('hero-active');
  //       break;
  //   }
  //   return data;
  // });

  // // content1.hover(function () {
  // //   if (this.hasClass('hero-active')) {
  // //     return;
  // //   } else {
  // //     heroHeader.removeClass('hero-active');
  // //     content1.addClass('hero-active');
  // //   }
  // // });
