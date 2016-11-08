<?php
	if (isset($_POST["encryptText"])) {
		$encryptText = $_POST["encryptText"];
		$encryptedString = openssl_encrypt($encryptText, "AES-128-ECB", "some password");
		echo $encryptedString;
	}
	
	else if (isset($_POST["value"])) {
		$decryptText = $_POST["value"];
		$decryptedString = openssl_decrypt($decryptText, "AES-128-ECB", "some password");
		echo $decryptedString;
	}
?>