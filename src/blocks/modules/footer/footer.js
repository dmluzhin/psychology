import $ from "jquery";
import validate from 'jquery-validation';

$(document).ready(function () {
	//stepper
	//var stepper = document.querySelector('.modal__stepper');
	//var next = document.querySelector('.step-message');
	//var send = document.querySelector('.step-send');
	var stepperIndex = 1;

	function backToStart() {
		$('.modal__overlay').removeClass('active');
		$('body').removeClass('overflow');
		$('.modal__stepper').css({"transform": "translate(0%)"});
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
		$('.modal__graphic').addClass('active');
		$('body').addClass('overflow');
	});

	$('#modal__test').on('click', function () {
		$('.modal__test').addClass('active');
		$('body').addClass('overflow');
	});

	$('.write-modal__close, .ask-modal__close, .modal-404__close, .graphic-modal__close, .test-modal__close').on('click', function () {
		backToStart();
	});

	$('#writeMessage').keyup(function () {
		$('#writeMessage').attr('maxlength', '500');
		var str = $('#writeMessage').val();
		if (str.length < 9) {
			$('.step-message').removeClass("active");
		} else {
			$('.step-message').addClass("active");
		}
	});

	$('#askMessage').keyup(function () {
		$('#askMessage').attr('maxlength', '500');
		var askstr = $('#askMessage').val();
		if (askstr.length < 9) {
			$('.step-message').removeClass("active");
		} else {
			$('.step-message').addClass("active");
		}
	});

	$('.step-message').on('click', function () {
		stepperIndex = (stepperIndex < 0) ? stepperIndex - 1 : 0;
		$('.modal__stepper').css({"transform": "translate(-33.3333%)"});
		$('.modal__progress--step:first-child').addClass('active');
		$('.modal__bg1, .modal__bg3').hide();
		$('.modal__bg2').show();
	});

	$('.step-send').on('click', function () {
		stepperIndex = (stepperIndex < 1) ? stepperIndex - 1 : 2;
		$('.modal__stepper').css({"transform": "translate(-66.6666%)"});
		$('.modal__progress--step:nth-child(2)').addClass('active');
		$('.modal__progress--finish').addClass('active');
		$('.modal__bg1, .modal__bg2').hide();
		$('.modal__bg3').show();
		$('.modal__progress--sign').hide();
	});

	$('.step-success').on('click', function () {
		backToStart();
	});
	$('.test-modal__repeat--btn').on('click', function () {

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


	$('#writeform').submit(function () {
		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: $(this).serialize()
		}).done(function () {
			alert('success');
		});
		return false;
	});
	$('#contactform').submit(function () {
		$.ajax({
			type: "POST",
			url: "../php/contact.php",
			data: $(this).serialize()
		}).done(function () {
			alert('contactForm success');
		});
		return false;
	});
	$('#askform').submit(function () {
		$.ajax({
			type: "POST",
			url: "../php/ask.php",
			data: $(this).serialize()
		}).done(function () {
			alert('askform success');
		});
		return false;
	});

	function checkForm() {
		var checkFio = $('#contactFio');
		var checkPhone = $('#contactPhone');
		var checkEmail = $('#contactEmail');
		console.log('alve');

		if (checkFio.length != 0 && checkPhone.length != 0 && checkEmail.length != 0) {
			$("#contactSubmit").addClass('active');
		} else {
			$("#contactSubmit").removeClass('active');
		}
		return false;
	}

	$('.form__input').on('keyup', function () {
		checkForm();
	});

	// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
	var all_questions = [{
		question_string: "Возникают ли у Вас сильные эмоциональные реакции в ответ на поведение или слова другого человека?",
		choices: {
			correct: "Да, часто",
			wrong: ["Да, иногда", "Очень редко", "Нет, никогда"]
		}
	}, {
		question_string: "Стараетесь ли Вы избегать неловких ситуаций и людей, при общении с которыми Вы испытываете неприятные чувства, дискомфорт?",
		choices: {
			correct: "Да, часто",
			wrong: ["Да, иногда", "Очень редко", "Нет, никогда"]
		}
	}, {
		question_string: "Испытываете ли Вы недовольство сами собой или другими людьми, которые, как Вы считаете, должны измениться?",
		choices: {
			correct: "Да, часто",
			wrong: ["Да, иногда", "Очень редко", "Нет, никогда"]
		}
	}, {
		question_string: 'У вас нет продолжительных, серьезных отношений с другими людьми?',
		choices: {
			correct: "Скорее да, у меня нет продолжительных отношений",
			wrong: ["Нет"]
		}
	}, {
		question_string: "Вы не можете забыть обидные ситуации в вашей жизни. Снова и снова их переживаете:",
		choices: {
			correct: "Скорее да, чем нет",
			wrong: ["Скорее нет, чем да"]
		}
	}, {
		question_string: "Вы чувствуете себя неуверенно в общении с другими людьми?",
		choices: {
			correct: "Скорее да, чем нет",
			wrong: ["Скорее нет, чем да"]
		}
	}, {
		question_string: "Вы избегаете конфликтов, не умеете постоять за себя?",
		choices: {
			correct: "Скорее да, чем нет",
			wrong: ["Скорее нет, чем да"]
		}
	}];

// An object for a Quiz, which will contain Question objects.
	var Quiz = function(quiz_name) {
		// Private fields for an instance of a Quiz object.
		this.quiz_name = quiz_name;

		// This one will contain an array of Question objects in the order that the questions will be presented.
		this.questions = [];
	}

// A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
	Quiz.prototype.add_question = function(question) {
		// Randomly choose where to add question
		var index_to_add_question = this.questions.length;
		this.questions.splice(index_to_add_question, 0, question);
	}

// A function that you can enact on an instance of a quiz object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the quiz in.
	Quiz.prototype.render = function(container) {
		// For when we're out of scope
		var self = this;

		// Hide the quiz results modal
		$('#quiz-results').hide();

		// Write the name of the quiz
		$('#quiz-name').text(this.quiz_name);

		// Create a container for questions
		var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');

		// Helper function for changing the question and updating the buttons
		function change_question() {
			self.questions[current_question_index].render(question_container);
			$('#prev-question-button').prop('disabled', current_question_index === 0);
			$('#next-question-button').prop('disabled', current_question_index === self.questions.length - 1);

			// Determine if all questions have been answered
			var all_questions_answered = true;
			for (var i = 0; i < self.questions.length; i++) {
				if (self.questions[i].user_choice_index === null) {
					all_questions_answered = false;
					break;
				}
			}
			$('#submit-button').prop('disabled', !all_questions_answered);
		}

		// Render the first question
		var current_question_index = 0;
		change_question();

		// Add listener for the previous question button
		$('#prev-question-button').click(function() {
			if (current_question_index > 0) {
				current_question_index--;
				change_question();
			}
		});

		if ($())

		// Add listener for the next question button
		$('#next-question-button').on('click', function(){
			if (current_question_index < self.questions.length - 1) {
				current_question_index++;
				change_question();
				$(this).addClass('disabled');
			}
		});

		// Add listener for the submit answers button
		$('#submit-button').click(function() {
			// Determine how many questions the user got right
			var score = 0;
			for (var i = 0; i < self.questions.length; i++) {
				if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
					score++;
				}
			}

			// Display the score with the appropriate message
			var percentage = score / self.questions.length;
			console.log(percentage);
			var message;
			var title;
			var subtitle;
			var img;
			if (percentage === 1) {
				title = 'Показаний для работы с психологом нет.';
				subtitle = '¯' + '&bsol;' + '_(ツ)_/¯';
				message = '';
				img = 'img/images/result2.png';
			} else {
				title = 'Вероятным направлением работы с психологом могло бы стать:';
				subtitle = 'Исследование механизмов защиты в отношениях с другими людьми.';
				message = 'Отношениях бессознательно воспринимаемые как неприятные \n' +
						'или имеющие связь с болезненным, травмирующим предшествующим опытом.';
				img = 'img/images/result1.png';
			}
			$('#quiz-results-message').html(' <strong>' + title + '</strong>');
			$('#quiz-results-submessage').html(' <p class="paragraph">' + subtitle + '</p>' + '<p>' + message + '</p>');
			$('#quiz-results-score').html('You got <b>' + score + '/' + self.questions.length + '</b> questions correct.');
			$('#quiz-result-image').html(' <img src=" ' + img + '"/>');
			$('#quiz-results').slideDown();
			$('#quiz button').slideUp();
		});


		// Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
		question_container.bind('user-select-change', function() {
			var all_questions_answered = true;
			for (var i = 0; i < self.questions.length; i++) {
				if (self.questions[i].user_choice_index === null) {
					all_questions_answered = false;
					break;
				}
			}
			$('#submit-button').prop('disabled', !all_questions_answered);

			$('#start').on('click', function(){
				$('#quiz-results').hide();
				current_question_index = 0;
				all_questions_answered = false;
				$('#prev-question-button').show();
				setClasses(0, $(".test-modal__steps--container ul li").length);
				$('input').attr('checked', false);
				change_question();
			});
		});
	}

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
	var Question = function(question_string, correct_choice, wrong_choices) {
		// Private fields for an instance of a Question object.
		this.question_string = question_string;
		this.choices = [];
		this.user_choice_index = null; // Index of the user's choice selection

		// Random assign the correct choice an index
		this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);

		// Fill in this.choices with the choices
		var number_of_choices = wrong_choices.length + 1;
		for (var i = 0; i < number_of_choices; i++) {
			if (i === this.correct_choice_index) {
				this.choices[i] = correct_choice;
			} else {
				// Randomly pick a wrong choice to put in this index
				var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
				this.choices[i] = wrong_choices[wrong_choice_index];

				// Remove the wrong choice from the wrong choice array so that we don't pick it again
				wrong_choices.splice(wrong_choice_index, 1);
			}
		}
	}

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
	Question.prototype.render = function(container) {
		// For when we're out of scope
		var self = this;

		// Fill out the question label
		var question_string_h2;
		if (container.children('h2').length === 0) {
			question_string_h2 = $('<h2>').appendTo(container);
		} else {
			question_string_h2 = container.children('h2').first();
		}
		question_string_h2.text(this.question_string);

		// Clear any radio buttons and create new ones
		if (container.children('input[type=radio]').length > 0) {
			container.children('input[type=radio]').each(function() {
				var radio_button_id = $(this).attr('id');
				$(this).remove();
				container.children('label[for=' + radio_button_id + ']').remove();
			});
		}
		for (var i = 0; i < this.choices.length; i++) {
			// Create the radio button
			var choice_radio_button = $('<input>')
					.attr('id', 'choices-' + i)
					.attr('type', 'radio')
					.attr('name', 'choices')
					.attr('value', 'choices-' + i)
					.attr('checked', i === this.user_choice_index)
					.appendTo(container);

			// Create the label
			var choice_label = $('<label class="test-modal__label-radio">')
					.text(this.choices[i])
					.attr('for', 'choices-' + i)
					.appendTo(container);

			choice_label.on('click', function () {
				$('#next-question-button').removeClass('disabled');
			})
		}



		// Add a listener for the radio button to change which one the user has clicked on
		$('input[name=choices]').change(function(index) {
			var selected_radio_button_value = $('input[name=choices]:checked').val();

			// Change the user choice index
			self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));

			// Trigger a user-select-change
			container.trigger('user-select-change');
		});
	}

// "Main method" which will create all the objects and render the Quiz.
	$(document).ready(function() {
		// Create an instance of the Quiz object
		var quiz = new Quiz('My Quiz');

		// Create Question objects from all_questions and add them to the Quiz object
		for (var i = 0; i < all_questions.length; i++) {
			// Create a new Question object
			var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);

			// Add the question to the instance of the Quiz object that we created previously
			quiz.add_question(question);
		}

		// Render the quiz
		var quiz_container = $('#quiz');
		quiz.render(quiz_container);
	});

	//Wizard
	$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

		var $target = $(e.target);

		if ($target.parent().hasClass('disabled')) {
			return false;
		}
	});

	function setClasses(index, steps) {
		if (index < 0 || index > steps) return;
		$(".test-modal__steps--container ul li").each(function() {
			$(this).removeClass();
		});
		$(".test-modal__next--counter ul li").each(function() {
			$(this).removeClass();
		});
		$(".test-modal__content ul li").each(function() {
			$(this).removeClass();
		});
		$(".test-modal__steps--container ul li:lt(" + index + ")").each(function() {
			$(this).addClass("done");
		});
		$(".test-modal__next--counter ul li:lt(" + index + ")").each(function() {
			$(this).addClass("done");
		});
		$(".test-modal__content ul li:lt(" + index + ")").each(function() {
			$(this).addClass("done");
		});
		$(".test-modal__steps--container ul li:eq(" + index + ")").addClass("active");
		$(".test-modal__next--counter ul li:eq(" + index + ")").addClass("active");
		$(".test-modal__content ul li:eq(" + index + ")").addClass("active");
		var p = index * (100 / steps);
		$("#prog").width(p + '%');
	}
	$(".test-modal__back").click(function(){
		var step = $(".test-modal__steps--container ul li.active span.step")[0].innerText;
		var steps = $(".test-modal__steps--container ul li").length;
		setClasses(step - 2, steps - 1);
	});
	$(".test-modal__next--btn").click(function() {
		if ($(this).text() == 'done') {
			alert("submit the form?!?")
		} else {
			var step = $(".test-modal__steps--container ul li.active span.step, .test-modal__next--counter ul li.active span.counter, .test-modal__content ul li.active span.counter")[0].innerText;
			var steps = $(".test-modal__steps--container ul li, .test-modal__next--counter ul li, .test-modal__content ul li").length;
			setClasses(step, steps - 1);
		}
	});

	// initial state setup
	setClasses(0, $(".test-modal__steps--container ul li").length);

	/*$('.test-modal__next--btn').click(function (e) {
		console.log('click!');
		var $active = $('.test-modal__steps--stepper div.current');
		$active.next().removeClass('disabled');
		nextTab($active);
	});


	function nextTab(elem) {
		$(elem).next().find('a[data-toggle="tab"]').click();
	}
	function prevTab(elem) {
		$(elem).prev().find('a[data-toggle="tab"]').click();
	}*/
});