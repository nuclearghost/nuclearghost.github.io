
$(function(){
	parallax.background = $("body");

	parallax.add($("#index"))
			.add($("#resume"))
			.add($("#projects"))
			.add($("#contact"));

	parallax.index.show();

	$("a").on('click', function(){
		parallax.contact.left();
	});
});
