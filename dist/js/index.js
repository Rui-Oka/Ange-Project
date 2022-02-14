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

  $(window).on('load scroll resize',function () {
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

function playVideos(videos) {
  let scroll = $(window).scrollTop();
	let wHeight = $(window).height();
 
  videos.each(function(index) {
    let position = $(this).offset().top;
    let thisHeight = $(this).height();
    let margin = wHeight - 100;
      if (scroll > position - margin && scroll < position + thisHeight){
          $(this).get(0).play();
      } else {
          $(this).get(0).pause();
      }
  });
}
$(window).on('load', function() {
  const videos = $('.gallery__img > video');
  if(videos.length) {
      playVideos(videos);
      $(window).on('scroll', function() {
          playVideos(videos);
      });
  }
});

/******/ })()
;
//# sourceMappingURL=index.js.map