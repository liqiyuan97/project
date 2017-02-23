$(function(){
  /*导航搜索*/
  $(".zza").click(function(){
    if ($(".zzz").is(":visible")) {
      if ($(".zzz").val()==="") {
        $(".zzz").hide();
        $(".zza").animate({left:"0"},300);
      }else{
        alert("youzhi");
      };
    }else{
      $(".zzz").show(function(){
        $(".zzz").css("visibility","visible");
        $(".zzz").animate({width:"200px"},500);
        $(".zza").animate({left:"175px"},300);
      });
    };
  });


  /*导航字体颜色*/
  $(".navbar_font").mouseenter(function(){
    $(this).css("color","#66cc33")
  });
  $(".navbar_font").mouseleave(function(){
    $(this).css("color","#7b8b8e")
  });

  /*二维码*/
  $(".wx").mouseenter(function(){
    $(".eem").css("visibility","visible")
  });
  $(".wx").mouseleave(function(){
    $(".eem").css("visibility", "hidden")
  });

  /*qq群*/
  $(".qq").mouseenter(function(){
    $(".qq_qun").css("visibility","visible")
  });
  $(".qq").mouseleave(function(){
    $(".qq_qun").css("visibility", "hidden")
  });

  /*回到页面顶部*/
  $(".huiding").hide();
  $(function () {
      //检测屏幕高度
      var height=$(window).height();
      //scroll() 方法为滚动事件
      $(window).scroll(function(){
          if ($(window).scrollTop()>height){
              $(".huiding").fadeIn(500);
              $(".navbar").addClass("yinying")
          }else{
              $(".huiding").fadeOut(500);
              $(".navbar").removeClass("yinying")
              }
      });
      $(".huiding").click(function(){
          $('body,html').animate({scrollTop:0},400);
          return false;
      });
  });



  /*帐号登录*/
  $(".user_button").on("click", function(){
    $(".title_right1").css("display", "none");
    $(".title_right2").css("display", "block")
  });


  /*帐号通知*/
  $(".title_right2_a3,.notice_popup").mouseenter(function(){
    $(".notice_popup").css("visibility", "visible");
  });
  $(".navbar,.notice_popup").mouseleave(function(){
    $(".notice_popup").css("visibility", "hidden");
  });

  /*小屏幕导航*/
  $(".title_right3").on("click", function(){
    $(".tr-area").toggle();
  });

  /*a标签*/
  $("a").mouseenter(function(){
    $("a").css("textDecoration","none")
  });
})
