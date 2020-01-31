import $ from "jquery";

$(document).ready(function () {
	$('.navbar__hamburger').on('click', function(){
		$(this).toggleClass('active');
		$('.navbar__menu').toggleClass('active');
		$('.subheader__hidden').removeClass('active');
		$('.navbar__menu--start').removeClass('disabled');
	});

	$('.subheader__nav--link-back').on('click', function (e) {
		e.preventDefault();
		$('.subheader__nav--hidden').removeClass('active');
	});

	$('.subheader__nav--item-trigger').on('click', function (e) {
		e.preventDefault();
		$('.subheader__nav--hidden').addClass('active');
	});

	$('#services').on('click', function (e) {
		e.preventDefault();
		$('.subheader__hidden').addClass('active');
		$('.navbar__menu--start').addClass('disabled');
	});
});