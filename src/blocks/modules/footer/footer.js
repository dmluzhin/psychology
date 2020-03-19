import $ from "jquery";

$(document).ready(function () {
	//stepper
	//var stepper = document.querySelector('.modal__stepper');
	//var next = document.querySelector('.step-message');
	//var send = document.querySelector('.step-send');
	var stepperIndex = 1;

	function backToStart() {
		$('.modal__overlay').removeClass('active');
		$('body').removeClass('overflow');
		$('.modal__stepper').css({"transform":"translate(0%)"});
		$('.modal__progress--step:first-child').removeClass('active');
		$('.modal__progress--step:nth-child(2)').removeClass('active');
		$('.modal__progress--finish').removeClass('active');
		$('.modal__bg2, .modal__bg3').hide();
		$('.modal__bg1').show();
		$('.modal__progress--sign').show();
	}

	$('#modal-contact').on('click', function () {
		$('#write-modal').addClass('active');
		$('body').addClass('overflow');
	});

	$('.modal-ask').on('click', function () {
		$('#ask-modal').addClass('active');
		$('body').addClass('overflow');
	});

	$('#modal__graphic').on('click', function () {
		console.log('dsa');
		$('.modal__graphic').addClass('active');
		$('body').addClass('overflow');
	});

	$('.write-modal__close, .ask-modal__close, .modal-404__close, .graphic-modal__close').on('click', function () {
		backToStart();
	});

	$('.step-message').on('click', function () {
		stepperIndex = (stepperIndex < 0) ? stepperIndex - 1 : 0;
		$('.modal__stepper').css({"transform":"translate(-33.3333%)"});
		$('.modal__progress--step:first-child').addClass('active');
		$('.modal__bg1, .modal__bg3').hide();
		$('.modal__bg2').show();
	});
	$('.step-send').on('click', function () {
		stepperIndex = (stepperIndex < 1) ? stepperIndex - 1 : 2;
		$('.modal__stepper').css({"transform":"translate(-66.6666%)"});
		$('.modal__progress--step:nth-child(2)').addClass('active');
		$('.modal__progress--finish').addClass('active');
		$('.modal__bg1, .modal__bg2').hide();
		$('.modal__bg3').show();
		$('.modal__progress--sign').hide();
	});

	$('.step-success').on('click', function () {
		backToStart();
	});

	$('.btn__test').on('click',function () {
		$('.modal__404').addClass('active');
	});
});

// Scroll to specific values
// scrollTo is the same
window.scroll({
	top: 2500,
	left: 0,
	behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
	top: 100, // could be negative value
	left: 0,
	behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({
	behavior: 'smooth'
});