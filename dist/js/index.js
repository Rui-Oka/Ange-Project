/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
$(function () {
  var pos = $('#contents').offset().top;

  $(window).scroll(function () {
    if ($(this).scrollTop() > pos) {
      $('.header').addClass('fix');
    } else {
      $('.header').removeClass('fix');
    }
  });

  var footer = $(".footer");
  var fotterHeight = footer.offset().top;
  var windowH = $(window).height();

  $(window).scroll(function () {
    var windowS = $(window).scrollTop();
    if (windowS > fotterHeight - windowH + (windowH / 2) ) { // フッター付近まで来たら
      $('.linearbg').css({
        'opacity':'1',
      });
    } else {
      $('.linearbg').css({
        'opacity':'0',
    });
    }
  });
});
/******/ })()
;
//# sourceMappingURL=index.js.map