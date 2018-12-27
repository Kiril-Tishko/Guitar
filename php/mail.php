<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$text = $_POST['user_text'];

$mail->isSMTP();	// Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';	// Specify main and backup SMTP servers
$mail->SMTPAuth = true;	// Enable SMTP authentication
$mail->Username = 'dzharuzov@mail.ru';	// Ваш логин от почты с которой будут отправляться письма
$mail->Password = '12345';	// email password
$mail->SMTPSecure = 'ssl';	// Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;

$mail->setFrom('dzharuzov@mail.ru');
$mail->isHTML(true);	// Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его email ' .$email. '<br>Сообщение от пользователя: ' .$text;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>