<?php
$name = $_POST['name'];
$emailFrom = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];  

$to = "sriveraloyola@gmail.com";

$subjectEmail = "De: ".$emailFrom;
$txt = "Nombre: ". $name . "\r\n Email: ". $emailFrom . "\r\n Asunto: " . $subject .  "\r\n Mensaje: ". $message . "\r\n";

$headers = "From: noreply@sebastianrivera.cl" . "\r\n" . "CC: ". $emailFrom . "\r\n"; 

if ($emailFrom!=NULL) {
    mail($to, $subjectEmail, $txt, $headers);
}

header("Location:mensaje-enviado.html");