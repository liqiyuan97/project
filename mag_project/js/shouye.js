$(function(){
  var c = 0
  function timer(){
    c++;
    c=(c==4)?0:c;
    //获得序号
    $(".fl_s .tu img").eq(c).stop().show().siblings().hide();
    $(".fl_s .dos .dor a").eq(c).stop().addClass("dors").siblings().removeClass("dors");
  };

  var time =setInterval(timer,2000);
  $(".fl_s").hover(function(){
    //清除定时器//显示图片
    clearInterval(time);
    $(".ups").css({"display":"block"});
  },function(){
    //回调函数//恢复定时器//隐藏图片
    $(".fl_s .ups").css({"display":"none"});
    time =setInterval(timer,2000);
  });

  //右单击
  $(".fl_s .btn_right").click(function(){
    c++;
    c=(c==4)?0:c;
    //获得的序列号
    $(".fl_s .tu img").eq(c).stop().show().siblings().hide();
    $(".fl_s .dos .dor a").eq(c).stop().addClass("dors").siblings().removeClass("dors");
  });

  //左点击
  $(".fl_s .btn_left").click(function(){
    c--;
    c=(c==0)?0:c;
    //获得序号
    $(".fl_s .tu img").eq(c).stop().show().siblings().hide();
    $(".fl_s .dos .dor a").eq(c).stop().addClass("dors").siblings().removeClass("dors");
  });

  //点击圆点显示相应图片
  $(".fl_s .dos .dor a").click(function(){
    //获得序号
    var n= $(this).index();
    $(".fl_s .tu img").eq(n).stop().show().siblings().hide();
    $(".fl_s .dos .dor a").eq(n).stop().addClass("dors").siblings().removeClass("dors");
  });
})


$(function(){
  $(".dishes-area").mouseenter(function(){
    $(this).addClass("yinying")
  });
  $(".dishes-area").mouseleave(function(){
    $(this).removeClass("yinying")
  });

  $(".rn-").mouseenter(function(){
    $(this).animate({width:"98px"},500);
    $(this).css("background","#f10215");
  });
  $(".rn-").mouseleave(function(){
    $(this).animate({width:"30px"},500);
    $(this).css("background","#ab837b");
  });

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