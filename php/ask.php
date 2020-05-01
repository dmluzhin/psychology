<?php 

$recepient = "info@da-zdrav.ru";
$sitename = "Сайт психологических консультаций - Вопрос";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "ФИО: $name \nТелефон: $phone \nEmail: $email \nСообщение: $text";
	
$pagetitle = "Новая заявка сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");