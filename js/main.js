
$(function(){

	var d = new Date();
	$("#copyYear").text(d.getFullYear());

	//Parallax
	parallax.background = $("body");

	parallax.add($("#index"))
			.add($("#resume"))
			.add($("#projects"))
			.add($("#contact"));

	parallax.index.show();

	function setActiveClass(jThis){
		$(".nav .active").removeClass('active');
		jThis.parent().addClass('active');
	}

	var page = 'index';

	$("a[href=#index]").on('click', function(){
		if (page !== 'index'){
			setActiveClass($(this));
			parallax.index.top();
			page = 'index';
		}
	});

	$("a[href=#resume]").on('click', function(){
		if (page !== 'resume'){
			setActiveClass($(this));
			parallax.resume.right();
			page = 'resume';
		}
	});

	$("a[href=#projects]").on('click', function(){
		if (page !== 'projects'){
			setActiveClass($(this));
			parallax.projects.bottom();
			page = 'projects';
		}
	});

	$("a[href=#contact]").on('click', function(){
		if (page !== 'contact'){
			setActiveClass($(this));
			parallax.contact.left();
			page = 'contact';
		}
	});


	//Light dark toggle
	var dark = true;
	var toggle = $("#toggle");
	if (Modernizr.localstorage){
		var lastDark = localStorage["dark"];
		if (lastDark != undefined) { //lastDark can be false, so really only want to check for undefined
			dark = (lastDark === 'true');
		}
		if (!dark){
			$("body").css({"background-image": "url(../img/squairy_light.png)"});
			toggle.addClass('btn-inverse').text("Toggle Dark");
		}
	}  


	toggle.on('click', function(){
		if (dark){
			dark = false;
			$("body").css({"background-image": "url(../img/squairy_light.png)"});
			$(this).addClass('btn-default').text("Toggle Dark");
		} else {
			dark = true;
			$("body").css({"background-image": "url(../img/tweed.png)"});
			$(this).removeClass('btn-default').text("Toggle Light");
		}

		if (Modernizr.localstorage){
			localStorage["dark"] = dark;
		}
	});
});
