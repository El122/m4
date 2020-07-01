$(function () {
  $(".togles button").click(function () {
    var getId = this.id;
    var getCurrent = $(".posts ." + getId);

    $(".post").not(getCurrent).hide(0);
    getCurrent.show(0);
  });

  $("#showAll").click(function () {
    $(".post").show(0);
  });
});



    $(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 150,
        itemMargin: 5,
        slideshow: true,
        touch: true,
        maxItems: 7
      });
    });