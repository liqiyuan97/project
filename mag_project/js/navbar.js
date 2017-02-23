$(function(){
	  /*a标签*/
  $("a").mouseenter(function(){
    $("a").css("textDecoration","none")
  });

  $(".pr-a").mouseenter(function(){
    $(this).css("color","#CD0000");
  });
  $(".pr-a").mouseleave(function(){
    $(this).css("color","#999")
  });


  $(".rn-2").on("click",function(){
    $("html,body").animate({scrollTop:0},500);
  });
})