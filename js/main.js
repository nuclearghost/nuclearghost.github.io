
$(function(){
	//Parallax
	parallax.background = $("body");

	parallax.add($("#index"))
			.add($("#resume"))
			.add($("#projects"))
			.add($("#contact"));

	parallax.index.show();

	$("a[href=#index]").on('click', function(){
		parallax.index.top();
		return false;
	});

	$("a[href=#resume]").on('click', function(){
		parallax.resume.right();
		return false;

	});

	$("a[href=#projects]").on('click', function(){
		parallax.projects.bottom();
		return false;

	});

	$("a[href=#contact]").on('click', function(){
		parallax.contact.left();
		return false;
	});


	//Light dark toggle
	var dark = true;
	if (Modernizr.localstorage){
		var lastDark = localStorage["dark"];
		if (lastDark != undefined) { //lastDark can be false, so really only want to check for undefined
			dark = lastDark;
		}
		if (!dark){
			$("body").css({"background-image": "url(../img/squairy_light.png)"});
			this.addClass('btn-inverse');
		}
	}  


	$("#toggle").on('click', function(){
		if (dark){
			dark = false;
			$("body").css({"background-image": "url(../img/squairy_light.png)"});
			$(this).addClass('btn-inverse');
		} else {
			dark = true;
			$("body").css({"background-image": "url(../img/use_your_illusion.png)"});
			$(this).removeClass('btn-inverse');
		}

		if (Modernizr.localstorage){
			localStorage["dark"] = dark;
		}
	});
});
