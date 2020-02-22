import $ from "jquery";

$(document).ready(function () {
	var tabs =  $(".treeview__scheme .treeview__scheme--buttons .treeview__btn");

	tabs.on('click', function (e) {
		e.preventDefault();
		var content = this.hash.replace('/', '');
		tabs.removeClass('treeview__btn--active');
		$(this).addClass('treeview__btn--active');
		$('#content').find('.treeview__group').hide();
		$(content).fadeIn(200);
	});
});