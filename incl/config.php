<?php

	function connect($s, $u, $p, $db){
		mysql_connect($s, $u, $p);
		mysql_select_db($db);
	}

	if (!empty($_POST['email'])) {
		$name = $_POST['name'];
		$subject = $_POST['subject'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$address = "volimond.lan@gmail.com";
		$content = " Mail From : $name \n Sended Via www.volimond.com \n\n";
		$headers = 'From: $email' . 
		"\r\n" .'Reply-To: $email' . 
		"\r\n" .'X-Mailer: PHP/' . 
		phpversion();
		if (mail($address, $subject, $message, $headers)) {
			header("location:index.php?error");
		}else{
			header("location:index.php?error");
		}
	}

?>