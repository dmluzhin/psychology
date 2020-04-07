<?php 
	$recepient = "d.m.luzhin@yandex.ru";
	$sitename = "Сайт психологических консультаций";
	
	$subject = trim($_POST["subject"]);
	$phone = trim($_POST["phone"]);
	$email = trim($_POST["email"]);
	$message = trim($_POST["message"]);
	
	$context = "ФИО: $subject \nТелефон: $phone\nEmail: $email\nСообщение: $message";
	
	$pagetile = "Новая заявка сайта \"$sitename"\";
	mail($recepient, $pagetitle, $context, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>