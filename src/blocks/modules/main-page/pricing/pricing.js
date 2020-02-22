import $ from "jquery";

$(document).ready(function () {
	var tabs =  $(".pricing__tabs--controls .pricing__control");

	tabs.on('click', function (e) {
		e.preventDefault();
		var pricer = this.hash.replace('/', '');
		tabs.removeClass('active');
		$(this).addClass('active');
		$('#pricer').find('.pricing__tabs--content').hide();
		$(pricer).fadeIn(200);
	});
});