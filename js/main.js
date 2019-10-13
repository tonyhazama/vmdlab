
// Fuction
	
	function navbar_location(winY){
		
	}

	function checkSlideLength(){
		if ($(".container").width() > 750) { return 3; }
		if ($(".container").width() == 750) { return 4; }
    	if ($(".container").width() < 750) { return 5; }
	}

	var $slideIndex = 1.
		$slideLength = checkSlideLength(),
		$slidePosition = [
							["0%", "-33%", "-66%"], // Triple Show
							["0%", "-50%", "-100%", "-150%"], // Double Show
							["0%", "-100%", "-200%", "-300%", "-400%"] // Single Show
						 ];

	function moveSlide($dir){
		// Check Direction
		if ($dir == "next" && $slideIndex < $slideLength) {
			$slideIndex++;
		}else if ($dir == "prev" && $slideIndex > 1){
			$slideIndex--;
		}else{
			if ($slideIndex > $slideLength) {$slideIndex = $slideLength;}
		}
		// Move The Slide
		$currentPosition = $slidePosition[$slideLength-3][$slideIndex-1];
		$(".slides").css({marginLeft : $currentPosition});
		if ($slideIndex == 1) { $(".slide-btn[data-action='prev']").css({display: "none"}); }
    	else if ($slideIndex == $slide_l) { $(".slide-btn[data-action='next']").css({display: "none"}); }
    	else{ $(".slide-btn").css({display: "block"}); }

	}





// Window Event Listener

	$(window).on('scroll', function(){
		winY = window.pageYOffset;
		if (winY >= $(window).height() && winY >= 768) {
			$("#navbar").addClass('fixed');
		}else{
			$("#navbar").removeClass('fixed');
		}
		navbar_location(winY);
	});

	// Navbar click button
	$('div[data-goto]').on('click', function(){
		target = $(this).attr('data-goto');
		winY = window.pageYOffset;
		targetY = $(target).offset().top;
		speed = 0;
		if(targetY > winY){ speed = 400 + ((targetY - winY) * 0.25) ; }
		else if(targetY <= winY){ speed = 400 + ((winY - targetY) * 0.25) ; }
    	$('html, body').animate({ scrollTop: targetY},speed );
	});

	// Text button click event
	$(".text-btn").on("click", function(){
		target = $(this).attr("data-target");
		height = $(target+" .content").height();
		$(this).fadeOut(100);
    	$(target).css({ 'height': height+10 })
	});




   	//Slider Interact
   	var $slide_i = 1,
   	$slide_l = 3,
   	$margin = "0%",
   	$position = ["", "0%", "-33%", "-66%"];

   	$(".slide-btn").on('click', function(){
   		$dir = $(this).attr("data-action");
   		moveSlide($dir);
   	});


   	$(window).on('resize', function() {
		$slideLength = checkSlideLength();
		moveSlide();
    	$('#heading').css({ 'height': $(window).height() });
    	$('#heading .container').css({ 'height': $(window).height() });
    	
    	$slide_l = checkSlideLength();
	});


// Run These code when page loaded

	$(window).ready(function() {
		$slide_l = checkSlideLength();
    	$('#heading').css({ 'height': $(window).height() });
    	$('#heading .container').css({ 'height': $(window).height() });
    	$(".slide-btn[data-action='prev']").css({display: "none"});
	});