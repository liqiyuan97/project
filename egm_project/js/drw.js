$("document").ready(function(){
 			$(".wx").mouseenter(function(){
        $(".erweima").css("visibility","visible")
 			});
 			$(".wx").mouseleave(function(){
 				$(".erweima").css("visibility","hidden")
 			})
 		});



/*$(document).ready(function(){
      $(".zza").bind("click",function(){
        if ($(".zzz").is(":visible")) {
          if ($(".zzz").val()==="") {
            $(".zzz").hide();
            $(".zza").animate({left:"0px"},300);
          }else{
            alert("youzhi");
          }
        }else{
          $(".zzz").show(function(){
            $(".zzz").css("visibility","visible");
            $(".zzz").animate({width:"200px"},500);
            $(".zza").animate({left:"175px"},300);
          });
        }
      });
    });*/


  	$(document).ready(function(){
    $(".huiding").hide();
    $(function () {
        //检测屏幕高度
        var height=$(window).height();
        //scroll() 方法为滚动事件
        $(window).scroll(function(){
            if ($(window).scrollTop()>height){
                $(".huiding").fadeIn(500);
            }else{
                $(".huiding").fadeOut(500);
                }
        });
        $(".huiding").click(function(){
            $('body,html').animate({scrollTop:0},400);
            return false;
        });
    });
});


   /* $(document).ready(function(){
      $(".zza").bind("click",function(){
        if ($(".zzz").is(":visible")) {
          $(".zzz").hide(function(){
            $(".zza").animate({left:"608px"},500)
          })

        }else{
          $(".zzz").show(function(){
            $(".zzz").css("visibility","visible")
            $(".zzz").animate({width:"200px"},500);
            $(".zza").animate({left:"790px"},500);

          })
        }
      })
    })*/


    /*$(document).ready(function(){
      $(".zza").bind("click",function(){
        if ($(".zzz").is(":visible")) {
          if ($(".zzz").val()==="") {
            $(".zzz").hide();
            $(".zza").animate({left:"608px"},300)
          }else{
            alert("youzhi")
          }
        }else{
          $(".zzz").show(function(){
            $(".zzz").css("visibility","visible");
            $(".zzz").animate({width:"200px"},500);
            $(".zza").animate({left:"790px"},300);
          })
        }
      })
    })*/







    /*$("document").ready(function(){
      $(".zza").bind("click",function(){
          $(".zzz").animate({width:"200px"},500);
          $(".zza").animate({left:"790px"},500);
          $(".zzz").css("visibility","visible")

      });
    });*/






   /* $(document).ready(function(){
      $(".zza").bind("click",function(){
        if ($(".zzz").is(":visible")) {
          $(".zzz").hide()
        }else{
          $(".zzz")animate({width:"200px"},500);
        }
      })
    })


$(document).ready(function(){
  $("body").scroll(function() {
    $(".navbar").css('box-shadow',"0px 0px 50px 0 red")
  });

});


    $(document).ready(function(){
      $(".zza").bind("click",function(){
        if ($(".zza").is(":visible")) {
          $(".zza").animate({left:"608px"},500)
        }
      })
    })*/




$(document).ready(function(){
      $(".zza").click(function(){
        if ($(".zzz").is(":visible")) {
          if ($(".zzz").val()==="") {
            $(".zzz").hide();
            $(".zza").animate({left:"50px"},300);
          }else{
            alert("youzhi");
          }
        }else{
          $(".zzz").show(function(){
            $(".zzz").css("visibility","visible");
            $(".zzz").animate({width:"200px"},500);
            $(".zza").animate({left:"175px"},300);
          });
        }
      });
    });

