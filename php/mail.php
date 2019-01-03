<?php
header("Content-type: text/css");
if (!empty($_POST)) {
	$message = "Вам пришло новое сообщение с сайта turbo-guitar.com: \n"
	. "Имя пользователя: " . $_POST['form__name'] . "\n"
	. "Email пользователя: " . $_POST['form__email'] . "\n"
	. "Сообщение от пользователя: \n" . $_POST['form__message'];

	$headers = "From: sait-domen@gmail.com";

	$resultMail = mail("site-owner@gmail.com", "Сообщение с сайта", $message, $headers);


	if ( $resultMail ) {
		?>
			<link rel="stylesheet" href="../css/main.css">
		<?php
	} else {
		
	}
}
?>