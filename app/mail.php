<?php

$recepient = "frontendercode@gmail.com";
$sitename  = "Сайт http://proekt-vodoley.ru/";
$subject   = "Заказ с сайта http://proekt-vodoley.ru/";

$typeadukation = trim($_POST["typeadukation"]);
$typecity = trim($_POST["typecity"]);
$typemans = trim($_POST["typemans"]);
$phone = trim($_POST["phone"]);

$formaone = trim($_POST["formaone"]);

$admindata = trim($_POST["admin-data"]);

$message = "
тип мероприятия: $typeadukation  <br>
Место проведения: $typecity  <br>
Количеств мест в группе: $typemans  <br>
Телефон обратившегося: $phone  <br>
Форма размещена в калькуляторе $admindata <br>
Номер калькулятора на странице $formaone <br>
Почтовый ящик клиента: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $subject, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");
?>