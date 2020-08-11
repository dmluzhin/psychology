<?php 

$recepient = "info@da-zdrav.ru";
$sitename = "Сайт психологических консультаций";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "ФИО: $name \nТелефон: $phone \nEmail: $email";
	
$pagetitle = "Новая запись с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");