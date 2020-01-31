import $ from "jquery";

$(document).ready(function () {
	//stepper
	var stepper = document.querySelector('.write-modal__stepper');
	var next = document.querySelector('#step-message');
	var send = document.querySelector('#step-send');
	var stepperIndex = 1;

	function backToStart() {
		$('.modal__overlay').removeClass('active');
		$('body').removeClass('overflow');
		stepper.style.transform = 'translate(' + (2) * 0 + '%)';
		$('.write-modal__progress--step:first-child').removeClass('active');
		$('.write-modal__progress--step:nth-child(2)').removeClass('active');
		$('.write-modal__progress--finish').removeClass('active');
	}

	$('#modal-contact').on('click', function () {
		$('.modal__overlay').addClass('active');
		$('body').addClass('overflow');
	});
	$('.write-modal__close').on('click', function () {
		backToStart();
	});

	next.addEventListener('click', function(){
		stepperIndex = (stepperIndex < 0) ? stepperIndex - 1 : 0;
		stepper.style.transform = 'translate(' + (1) * -33.33333 + '%)';
		$('.write-modal__progress--step:first-child').addClass('active');
	});
	send.addEventListener('click', function () {
		stepperIndex = (stepperIndex < 1) ? stepperIndex - 1 : 2;
		stepper.style.transform = 'translate(' + (2) * -33.33333 + '%)';
		$('.write-modal__progress--step:nth-child(2)').addClass('active');
		$('.write-modal__progress--finish').addClass('active');
	});

	$('#step-success').on('click', function () {
		backToStart();
	})
});