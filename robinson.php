<?php

$recepient = "7yatan@gmail.com";
$siteName = "Robinson"

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$company = trim($_POST["company"]);
$select = trim($_POST["select"]);
$message = "Name: $name \n Phone: $phone";

$pagetitle = "Request from the site\"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>