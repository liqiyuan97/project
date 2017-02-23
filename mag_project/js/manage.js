$(function(){
	$(".tab-list").each(function(){
		var $this = $(this);
		var $tab = $this.find("li.active");
		var $link = $tab.find('a');
		var $panel = $($link.attr('href'));

		$this.on('click', '.tab-control', function(e){
			e.preventDefault();
			var $link = $(this);
			var id = this.hash;

			if (id && !$link.is('.active')) {
				$panel.removeClass('active');
				$tab.removeClass('active');

				$panel = $(id).addClass('active');
				$tab = $link.parent().addClass('active')
			};
		});
	});

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

  // $(".button-pill").mouseenter(function(){
  //   $(this).css("background", "#ebba95");
  // });
})