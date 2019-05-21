$(document).ready(function() {
  $(".clickable").click(function() {
  $("#walrus-showing").slideToggle("slow");
  $("#walrus-hidden").slideToggle("slow");
  });

  $(document).ready(function() {
    $("p").click(function(){
    $("p").slideUp();

    $("p").slideDown();
  });

 });
});
