

$("ul").on("click",".del", function(e){
  $(this).parent().slideToggle(function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$("ul").on("click","li",function(e){
  $(this).toggleClass("done");
});

$("input").keypress(function(e){

  if( e.which == 13){
    $("ul").append('<li><span class = "del"> X</span><span class="spacer"> </span>'+$(this).val()+"</li>");
    $(this).val("");
  }
});

$("#plus").click(function(){
  $("input").slideToggle();
});
