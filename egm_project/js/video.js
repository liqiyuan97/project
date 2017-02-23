/*$(function(){
  $(".fac_text_title").each(function(){
    var $this = $(this);
    var $tab = $("li.fac_active");
    var $link = $tab.find("a");
    var $panel = $($link.attr('href'));

    $this.on("click", ".tab-control", function(e){
      e.preventDefault();
      var $link = $(this);
      var id = this.hash;

      if (id && !$link.is(".fac_active")) {
        $panel.removeClass('.fac_active');
        $tab.removeClass('.fac_active');

        $panel = $(id).addClass('.fac_active');
        $tab = $link.parent().addClass('.fac_active');
      }
    });
  });
})*/


/*$(function(){
  $(".video_left_a").on("click", function(){
    $(".shoucang").removeClass("fa-bookmark-o");
    $(".shoucang").addClass("fa-bookmark");
  });
});*/


$(function(){
  $(".video_left_a").on("click", function(){
    $(".video_left_a").css("display", "none");
    $(".video_left_a2").css("display", "block");
  });
  $(".video_left_a2").on("click", function(){
    $(".video_left_a2").css("display", "none");
    $(".video_left_a").css("display", "block");
  });
})


$(function(){
  $(".footer_area_navbar").each(function(){
    var $this = $(this);
    var $tab = $this.find("li.fac_active");
    var $link = $tab.find("a");
    var $panel = $($link.attr("href"));

    $this.on('click', '.tab-control', function(e){
      e.preventDefault();
      var $link = $(this);
      var id = this.hash;

      if (id && !$link.is(".fac_active")) {
        $panel.removeClass("fac_active");
        $tab.removeClass("fac_active");

        $panel = $(id).addClass("fac_active");
        $tab = $link.parent().addClass("fac_active");
      }
    });
  });
})