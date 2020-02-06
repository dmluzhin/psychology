import $ from "jquery";

$(document).ready(function () {
	$('.treeview__tabgroup > .treeview__group').hide();
	$('.treeview__tabgroup > .treeview__group:first-of-type').show();
	$('.treeview__scheme--buttons a').click(function(e){
		e.preventDefault();
		var $this = $(this),
				tabgroup = '#'+$this.parents('.treeview__scheme--buttons').data('treeview__tabgroup'),
				others = $this.closest('li').siblings().children('a'),
				target = $this.attr('href');
		others.removeClass('active');
		$this.addClass('active');
		$(tabgroup).children('div').hide();
		$(target).show();

	})
});