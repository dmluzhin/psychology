<?php //если форма отправлена
if (isset($_POST['submit'])) {
//Проверяем введены ли данные в поле 'сообщение'
	if (trim($_POST['message']) == '') {
		$hasError = true;
	} else {
		if (function_exists('stripslashes')) {
			$comments = stripslashes(trim($_POST['message']));
		} else {
			$comments = trim($_POST['message']);
		}
	}
//Проверяем, что поле 'ФИО' не пустое
	if (trim($_POST['subject']) == '') {
		$hasError = true;
	} else {
		$subject = trim($_POST['subject']);
	}

//Проверяем, что поле 'Телефон' не пустое
	if (trim($_POST['phone']) == '') {
		$hasError = true;
	} else {
		$name = trim($_POST['phone']);
	}


//Проверяем корректен ли введенный почтовый адрес
	if (trim($_POST['email']) == '') {
		$hasError = true;
	} else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$",
		trim($_POST['email']))
	) {
		$hasError = true;
	} else {
		$email = trim($_POST['email']);
	}


//Если ошибок нет, отправляем форму
	if (!isset($hasError)) {
		$emailTo = 'd.m.luzhin@gmail.com';
//Пропишите здесь ваш почтовый адрес
		$body = "Name: $subject \n\nEmail: $email
\n\nPhont: $phone \n\nComments:\n $message";
		$headers = 'From: My Site <' . $emailTo . '>' .
			"\r\n" . 'Reply-To: ' . $email;

		mail($emailTo, $subject, $body, $headers);
		$emailSent = true;
	}
} ?>