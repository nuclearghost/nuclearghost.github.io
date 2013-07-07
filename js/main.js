
$(function(){
	parallax.background = $("body");

	parallax.add($("#index"))
			.add($("#resume"))
			.add($("#projects"))
			.add($("#contact"));

	parallax.index.show();

	$("a[href=#index]").on('click', function(){
		parallax.index.top();
	});

	$("a[href=#resume]").on('click', function(){
		parallax.resume.right();
	});

	$("a[href=#projects]").on('click', function(){
		parallax.projects.bottom();
	});

	$("a[href=#contact]").on('click', function(){
		parallax.contact.left();
	});
});
