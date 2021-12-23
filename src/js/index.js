$(function() {
  var pos = $("#contents").offset().top;
  var height = $(".header").outerHeight();
  $(window).scroll(function () {
      if ($(this).scrollTop() > pos) {
          $(".header").addClass("fix");
      } else {
          $(".header").removeClass("fix");
      }
  });
});