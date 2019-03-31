$(".steps a").click(function(){
    if ( $(this).parent("li").hasClass("complete") ){
      $(this).parent("li").removeClass("complete").nextAll().removeClass("complete");
    } else {
      $(this).parent("li").addClass("complete").prevAll().addClass("complete");
    }
    return false;
  });