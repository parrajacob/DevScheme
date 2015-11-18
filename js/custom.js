(function ($) {

	// localStorage.removeItem("language"); // name is the key

	
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
			swal({   title: "DevScheme", imageUrl: "img/logoblack.png",  text: "Setting Language",   timer: 200,   showConfirmButton: false }); 
		localStorage.setItem("language", "English"); //name is the key, GeekChamp is the value
		terminalanimation();
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
	$('.testimonialmenu').hide();
	$('.contactmenu').hide();
	$('#tobottom').hide();


	var string_num = 0;

	$("#typed").typed({
		strings: ["print 'Services';", "puts 'Portfolio';", "show 'Testimonials';" ,"console.log('Team');","echo 'About Us';" ,  "Response.Write('Contact');", "Contact DevScheme Now!"],
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
				$(".testimonialmenu").fadeIn(2000);
			}

			else if (string_num == 4) {
				$(".teammenu").fadeIn(2000);
			}

			else if (string_num == 5) {
				
				$(".aboutmenu").fadeIn(2000);
			}

			else if (string_num == 6) {
				$(".contactmenu").fadeIn(2000);
			}

			else {
				
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
	$('.testimonialmenu').hide();
	$('.contactmenu').hide();
	$('#tobottom').hide();


	var string_num = 0;

	$("#typed").typed({
		strings: ["print 'Servicios';", "puts 'Portafolio';", "show 'Evaluaciónes';","console.log('El Equipo');","echo 'Sobre Nosotros';" ,  "Response.Write('Comuníquese');", "Comuníquese con DevScheme Ahora!"],
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
				$(".testimonialmenu").fadeIn(2000);
			}

			else if (string_num == 4) {
				$(".teammenu").fadeIn(2000);
			}

			else if (string_num == 5) {
				
				$(".aboutmenu").fadeIn(2000);
			}

			else if (string_num == 6) {
				$(".contactmenu").fadeIn(2000);
			}

			else {
				
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
	document.getElementById("spanishPortfolio").innerHTML = "Portafolio";
	document.getElementById("spanishTestimonial").innerHTML = "Evaluaciónes";
	document.getElementById("spanishTeam").innerHTML = "El Equipo";
	document.getElementById("spanishAbout").innerHTML = "Sobre Nosotros";
	document.getElementById("spanishContact").innerHTML = "Comuníquese";
	document.getElementById("spanishnavHome").innerHTML = "Inicio";
	document.getElementById("spanishnavServices").innerHTML = "Servicios";
	document.getElementById("spanishnavPortfolio").innerHTML = "Portafolio";
	document.getElementById("spanishnavTestimonials").innerHTML = "Evaluaciónes";
	document.getElementById("spanishnavTeam").innerHTML = "El Equipo";
	document.getElementById("spanishnavAbout").innerHTML = "Sobre Nosotros";
	document.getElementById("spanishnavContact").innerHTML = "Comuníquese";
	document.getElementById("spanishService1").innerHTML = "Servicios Disponibles";
	document.getElementById("spanishService2").innerHTML = "SOLUCIONES DE BASES DE DATOS";
	document.getElementById("spanishService3").innerHTML = "Creación y encargo de bases de datos. El cuidado por la seguridad de sus datos utilizando las diversas prácticas que dominan en la industria. El desarrollo de APIs (interfaces de programación de aplicaciones) para facilitar el proceso de acceso a la base de datos por diseñadores de front-end.";
	document.getElementById("spanishService4").innerHTML = "DESARROLLO de sitios de WEB";
	document.getElementById("spanishService5").innerHTML = "Desarrollar diseños de sitios web personalizados o añadirle a un diseño existente de su elección. El desarrollo de sitios web sensibles para su mobil que no sólo le dan un experiencia agradada al usuario, sino que también facilitan el proceso de actualización para los administradores de back-end.";
	document.getElementById("spanishService6").innerHTML = "DESARROLLO de Aplicaciones móviles";
	document.getElementById("spanishService7").innerHTML = "Desarrollar aplicaciones en ambas plataformas mobil, Android y iOS. Asegúrandonos que las aplicaciones sean eficientes y que sean adaptable a cambios, manteniendo una estrecha relación de trabajo con el cliente. Nos enfocamos en la integración de la seguridad y en proveer una experiencia de usuario única.";
	document.getElementById("spanishPortfolio1").innerHTML = "Nuestro Portafolio";
	document.getElementById("spanishPortfolio2").innerHTML = "Proyectos Recientes";
	document.getElementById("spanishPortfolio3").innerHTML = "Top Dog Daycare";
	document.getElementById("spanishPortfolio4").innerHTML = "Diseño y Base de Datos";
	document.getElementById("spanishPortfolio5").innerHTML = "Spot You";
	document.getElementById("spanishPortfolio6").innerHTML = "Diseño y Base de Datos";
	document.getElementById("spanishPortfolio7").innerHTML = "My Wedding Page";
	document.getElementById("spanishPortfolio8").innerHTML = "Diseño y Base de Datos";
	document.getElementById("spanishTestimonial1").innerHTML = "Evaluaciónes de Clientes";

	document.getElementById("spanishTeam1").innerHTML = "El Equipo";
	document.getElementById("spanishTeam2").innerHTML = "Diseñador de sitios e applicaciones y administrador de visuales";
	document.getElementById("spanishTeam3").innerHTML = "Administrador de base de datos y funciones internas";
	document.getElementById("spanishAbout1").innerHTML = "Sobre Nosotros";
	document.getElementById("spanishAbout2").innerHTML = "\"El tener puestos de trabajo a tiempo completo no es suficiente para nosotros\"";
	document.getElementById("spanishAbout3").innerHTML = "DevScheme facilita y planea la construcción o reconstrucción de sus soluciones de computación.";
	document.getElementById("spanishAbout4").innerHTML = "Aquí en DevScheme nos enfocamos en ofrecer resultados mejor que satisfactorios, mientras dandole servicio ejemplar al cliente. Somos una empresa de desarrollo que proporciona soluciones que se implementan con las tecnologías más actuales y futuras. Así que dejen que sus pensamientos creativos empiesen y se sienten libres para simplemente ser creativos, trataremos de mantener su ritmo!";
	document.getElementById("spanishAbout5").innerHTML = "Llámenos emprendedores, programadores, los geeks, o simplemente las personas cuya pasión es su carrera. DevScheme comenzó en un curso de ingeniería en programación en la Universidad Estatal de Arizona, donde dos graduados, que actualmente tienen empleos de tiempo completo, han unido sus fuerzas para asegurarse que sus soluciones de computación sean de primera clase. Nos enfocamos en constante aprendizaje de nuevas habilidades y en adaptarnos al mundo de la tecnología que constantemente esta cambiando.";
	document.getElementById("spanishContact1").innerHTML = "Pongase en Contacto";
	document.getElementById("spanishContact2").innerHTML = "Nombre";
	document.getElementById("spanishContact3").innerHTML = "Correo Electronico";
	document.getElementById("spanishContact4").innerHTML = "Numero de Telephono";
	document.getElementById("spanishContact5").innerHTML = "Mensaje";
	document.getElementById("btnContactUs").innerHTML = "Envie Mensaje";
	document.getElementById("spanishContact6").innerHTML = "Correo";
	document.getElementById("spanishContact7").innerHTML = "Numero";
	document.getElementById("spanishContact8").innerHTML = "Localización";
	document.getElementById("spanishContact9").innerHTML = "Ya estamos en las redes sociales";
	$('#name').attr('placeholder','Su Nombre');
	$('#email').attr('placeholder','Su Correo');
	$('#number').attr('placeholder','Su Numero');
	$('#emessage').attr('placeholder','Su Mensaje');
	document.getElementById("spanishFooter1").innerHTML = "Derechos de Autor 2015 - DevScheme LLC. Reservados todos los derechos.";

}

function toEnglish(){



}