/*$('.toggle').click(function(){
  $(".hidden").toggle();
});*/

$(document).ready(function(){
  
  $("#designtag").click(function(){
    $("#designinfo").toggle();
    $("#designtag").toggle();
  });

  $("#designinfo").click(function(){
    $("#designtag").toggle();
    $("#designinfo").toggle();
  });
});