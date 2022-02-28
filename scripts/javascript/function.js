/* slide animation plugin */
$(document).ready(function(){
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

/* carousel plugin */
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        center: true,
        item: 1,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

/* anchor jquery*/
$(document).ready(function(){
	$(".about-content").hide();
	$(".contact-content").hide();

	$(".aboutnav").click(function(){
		$(this).addClass("is-active")
		$(".content-1").hide();
		$(".content-2").hide();
		$(".content-3").hide();
		$(".contact-content").hide();
		$(".about-content").fadeIn("slow");
		$(".homenav").removeClass("is-active");
		$(".contactnav").removeClass("is-active");
	})

	$(".homenav").click(function(){
		$(this).addClass("is-active")
		$(".content-1").fadeIn("slow");
		$(".content-2").fadeIn("slow");
		$(".content-3").fadeIn("slow");
		$(".about-content").hide();
		$(".contact-content").hide();
		$(".contactnav").removeClass("is-active");
		$(".aboutnav").removeClass("is-active")
	})

	$(".contactnav").click(function(){
		$(this).addClass("is-active")
		$(".content-1").hide();
		$(".content-2").hide();
		$(".content-3").hide();
		$(".about-content").hide();
		$(".contact-content").fadeIn("slow");
		$(".contactnav").addClass("is-active");
		$(".aboutnav").removeClass("is-active")
		$(".homenav").removeClass("is-active")
	})
})