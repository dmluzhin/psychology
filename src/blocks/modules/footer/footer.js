import $ from "jquery";
import validate from 'jquery-validation'

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

	$('#writeMessage').keyup(function () {
		$('#writeMessage').attr('maxlength', '500');
		var str = $('#writeMessage').val();
		if(str.length < 9){
			$('.step-message').removeClass("active");
		} else {
			$('.step-message').addClass("active");
		}
	});

	$('#askMessage').keyup(function () {
		$('#askMessage').attr('maxlength', '500');
		var askstr = $('#askMessage').val();
		if(askstr.length < 9){
			$('.step-message').removeClass("active");
		} else {
			$('.step-message').addClass("active");
		}
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

	$('#writeform').validate({
		rules: {
			writeMessage: {
				required: true,
				minlength: 10,
				maxlength: 500
			},
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			writeMessage: {
				required: "Пожалуйста, Ваше введите сообшение",
				minlength: "Сообщение должно содержать минимум 10 символов",
				maxlength: "Сообщение не должно быть длиннее 500 символов"
			},
			name: {
				required: "Пожалуйста, введите ФИО",
				minlength: "ФИО должно быть не короче двух символов"
			},
			email: {
				required: "Пожалуйста, введите email",
				email: "Пожалуйста, введите корректный email"
			}
		}
	});
	$('#contactform').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: "Пожалуйста, введите ФИО",
				minlength: "ФИО должно быть не короче двух символов"
			},
			phone: {
				required: "Пожалуйста, введите ФИО",
				minlength: "ФИО должно быть не короче двух символов"
			},
			email: {
				required: "Пожалуйста, введите email",
				email: "Пожалуйста, введите корректный email"
			}
		}
	});

	$('#askform').validate({
		rules: {
			text: {
				required: true,
				minlength: 10,
				maxlength: 500
			},
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			text: {
				required: "Пожалуйста, Ваше введите сообшение",
				minlength: "Сообщение должно содержать минимум 10 символов",
				maxlength: "Сообщение не должно быть длиннее 500 символов"
			},
			name: {
				required: "Пожалуйста, введите ФИО",
				minlength: "ФИО должно быть не короче двух символов"
			},
			email: {
				required: "Пожалуйста, введите email",
				email: "Пожалуйста, введите корректный email"
			}
		}
	});

	$('#writeform').submit(function(){
		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert('success');
		});
		return false;
	});
	$('#contactform').submit(function(){
		$.ajax({
			type: "POST",
			url: "../php/contact.php",
			data: $(this).serialize()
		}).done(function() {
			alert('contactForm success');
		});
		return false;
	});
	$('#askform').submit(function(){
		$.ajax({
			type: "POST",
			url: "../php/ask.php",
			data: $(this).serialize()
		}).done(function() {
			alert('askform success');
		});
		return false;
	});

	function checkForm() {
		var checkFio = $('#contactFio');
		var checkPhone = $('#contactPhone');
		var checkEmail = $('#contactEmail');
		console.log('alve');

		if(checkFio.length != 0 && checkPhone.length != 0 && checkEmail.length != 0) {
			$("#contactSubmit").addClass('active');
		} else {
			$("#contactSubmit").removeClass('active');
		}
		return false;
	}
	$('.form__input').on('keyup', function () {
		checkForm();
	})
});