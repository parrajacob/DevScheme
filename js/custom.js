(function ($) {

	 localStorage.removeItem("language"); // name is the key

	 
	 var stored = localStorage.getItem("language");
	 console.log(stored);

	 if(stored == null){
	 	swal({   

	 		title: "Welcome to DevScheme.com",   
	 		text: "Please confirm your language:",   
	 		imageUrl: "img/logoblack.png", 
	 		allowOutsideClick: true,
	 		showCancelButton: true,
	 		animation: true,   
	 		confirmButtonColor: "#DD6B55",   
	 		confirmButtonText: "Español",
	 		cancelButtonColor: "#DD6B55",   
	 		cancelButtonText: "English",   
	 		closeOnConfirm: false,   
	 		closeOnCancel: false 
	 	}, 
	 	function(isConfirm){  
	 		if (isConfirm) {    
	 			swal({   title: "DevScheme", imageUrl: "img/logoblack.png",  text: "Configurando a español",   timer: 2000,   showConfirmButton: false });  
			localStorage.setItem("language", "Spanish"); //name is the key, GeekChamp is the value
			toSpanish();
		} 
		else 
		{     
			swal({   title: "DevScheme", imageUrl: "img/logoblack.png",  text: "Setting Language",   timer: 2000,   showConfirmButton: false }); 
		localStorage.setItem("language", "English"); //name is the key, GeekChamp is the value
		

	} 
});


	 }

	 else if (stored == "Spanish")
	 {
	 	toSpanish();
	 	//console.log("Spanish Success");
	 }

	 else if (stored == "English")
	 {
	 	
	 	//console.log("English Success");
	 }




	 if ($(window).width() < 767) {
		//alert('Less than 767');
		$(".custommenu").hide();
	}
	else {
		//alert('More than 767');
		if (stored == "English")
		{
			terminalanimation();

		}
		if (stored == "Spanish")
		{
			terminalanimationSpanish();
		}



		var topOfOthDiv = $("#service").offset().top;

	// hide .navbar first
	$(".navbar").hide();
	
	// fade in .navbar
	
	$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > topOfOthDiv - 20) {
            	$('.navbar').fadeIn();
            } else {
            	$('.navbar').fadeOut();
            }
        });

}






new WOW().init();


jQuery(window).load(function() { 
	jQuery("#preloader").delay(100).fadeOut("slow");
	jQuery("#load").delay(100).fadeOut("slow");
});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);



function terminalanimation () {
	$('.aboutmenu').hide();
	$('.teammenu').hide();
	$('.servicemenu').hide();
	$('.portfoliomenu').hide();
	$('.contactmenu').hide();
	$('#tobottom').hide();


	var string_num = 0;

	$("#typed").typed({
		strings: ["print 'Services';", "puts 'Portfolio';","console.log('Team');","echo 'About Us';" ,  "Response.Write('Contact');", "Contact DevScheme Now!"],
		typeSpeed: 1,
		onStringTyped: function() {
			shift();

			string_num++;

			if (string_num == 1) {
				$(".servicemenu").fadeIn(2000);
				
			}

			else if (string_num == 2) {
				$(".portfoliomenu").fadeIn(2000);
				
			}

			else if (string_num == 3) {
				$(".teammenu").fadeIn(2000);
			}

			else if (string_num == 4) {
				
				$(".aboutmenu").fadeIn(2000);
			}

			else if (string_num == 5) {
				$(".contactmenu").fadeIn(2000);
			}

			else {
				$("#tobottom").fadeIn(2000);
			}

		},
		callback: function(){
			shift();

		}
	});
}

function terminalanimationSpanish() {
	$('.aboutmenu').hide();
	$('.teammenu').hide();
	$('.servicemenu').hide();
	$('.portfoliomenu').hide();
	$('.contactmenu').hide();
	$('#tobottom').hide();


	var string_num = 0;

	$("#typed").typed({
		strings: ["print 'Servicios';", "puts 'Portfolio';","console.log('Equipo');","echo 'Sobre Nosotros';" ,  "Response.Write('Contactenos');", "Contactense con DevScheme Ahora!"],
		typeSpeed: 1,
		onStringTyped: function() {
			shift();

			string_num++;

			if (string_num == 1) {
				$(".servicemenu").fadeIn(2000);
				
			}

			else if (string_num == 2) {
				$(".portfoliomenu").fadeIn(2000);
				
			}

			else if (string_num == 3) {
				$(".teammenu").fadeIn(2000);
			}

			else if (string_num == 4) {
				
				$(".aboutmenu").fadeIn(2000);
			}

			else if (string_num == 5) {
				$(".contactmenu").fadeIn(2000);
			}

			else {
				$("#tobottom").fadeIn(2000);
			}

		},
		callback: function(){
			shift();

		}
	});
}

function shift(){
	$(".head-wrap").addClass("shift-text");
	terminalHeight();
}

function terminalHeight(){
	var termHeight = $(".terminal-height");
	var value = termHeight.text();
	value = parseInt(value);
	setTimeout(function(){
		if (value > 10){
			value = value-1;
			this.txtValue = value.toString();
			termHeight.text(this.txtValue);
			self.terminalHeight();
		}
		else{
			clearTimeout();
		}
	}, 10);
}


function toSpanish(){
	terminalanimationSpanish();
	document.getElementById("spanishServices").innerHTML = "Servicios";


}

function toEnglish(){



}