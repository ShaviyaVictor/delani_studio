/*$('.toggle').click(function(){
  $(".hidden").toggle();
});*/

$(document).ready(function(){
  
  $("#designtag").click(function(){
    $("#designinfo").toggle('1500');
    $("#designtag").toggle('1500');
  });

  $("#designinfo").click(function(){
    $("#designtag").toggle('1500');
    $("#designinfo").toggle('1500');
  });
});

$(document).ready(function(){

  $("#developtag").click(function(){
    $("#developinfo").toggle('1500');
    $("#developtag").toggle('1500');
  });

  $("#developinfo").click(function(){
    $("#developtag").toggle('1500');
    $("#developinfo").toggle('1500');
  });
});

$(document).ready(function(){
  $("#productag").click(function(){
    $("#productinfo").toggle('1500');
    $("#productag").toggle('1500');
  });

  $("#productinfo").click(function(){
    $("#productag").toggle('1500');
    $("#productinfo").toggle('1500');
  });
});