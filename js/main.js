$(document).ready(function(){
  $(".right").click(function () {
    $(".carousel").slick("slickNext");
  });

  $(".left").click(function () {
    $(".carousel").slick("slickPrev");
  });
});
