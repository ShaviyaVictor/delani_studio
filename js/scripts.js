/*$('.toggle').click(function(){
  $(".hidden").toggle();
});*/

//      UI/Front-end logic
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

//    hover effects scripts
$(document).ready(function(){
  
  $("#image4").mouseover(function(){
    $("#work4").show(1200);
  });
  $("#image4").mouseout(function(){
    $("#work4").hide();
  });
});

$(document).ready(function(){
  $("#image3").mouseover(function(){
    $("#work3").show(1200);
  });
  $("#image3").mouseout(function(){
    $("#work3").hide();
  });
});

$(document).ready(function(){
  $("#image2").mouseover(function(){
    $("#work2").show(1200);
  });
  $("#image2").mouseout(function(){
    $("#work2").hide();
  });
});

$(document).ready(function(){
  $("#image1").mouseover(function(){
    $("#work1").show(1200);
  });
  $("#image1").mouseout(function(){
    $("#work1").hide();
  });
});

$(document).ready(function(){
  $("#image5").mouseover(function(){
    $("#work5").show(1200);
  });
  $("#image5").mouseout(function(){
    $("#work5").hide();
  });
});

$(document).ready(function(){
  $("#image6").mouseover(function(){
    $("#work6").show(1200);
  });
  $("#image6").mouseout(function(){
    $("#work6").hide();
  });
});

$(document).ready(function(){
  $("#image7").mouseover(function(){
    $("#work7").show(1200);
  });
  $("#image7").mouseout(function(){
    $("#work7").hide();
  });
});

$(document).ready(function(){
  $("#image8").mouseover(function(){
    $("#work8").show(1200);
  });
  $("#image8").mouseout(function(){
    $("#work8").hide();
  });
});

$(document).ready(function(){
  $(".green").submit(function(){
    $(".green").addClass(".btn-success");
  })
});


//      Business/Back-end logic


$("#contact_form").submit(function(){
  let name = $("#name").val();
  let email = $("#email").val();
  let feedback = $("#feedback").val();
  let myForm = $("#contact_form")[0];

  if(!name || !email || !feedback){
    alert("Oops...Check your inputs!")
    return false;
  }
  else{
    myForm.method = "post";
    myForm.action = "https://gmail.us20.list-manage.com/subscribe/post?u=aa7bcccdbd6660eb686bccd9f&amp;id=4eb357612a"
    alert(`Yes. That was a success ${name}. we have received your message. Thank you for reaching out to us.`)
    return true;
  }
})