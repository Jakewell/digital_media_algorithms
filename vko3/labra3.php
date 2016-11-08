<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Labra 3 - Jarkko Saikkonen</title>
	<script type="text/javascript" src="../jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="labra3.js"></script>
	<link rel="stylesheet" type="text/css" href="labra3.css">
</head>

<body>
	<h2>Click on a table cell to select it</h2>
	<form action="crypting.php" method="post">
		<table id="infoTable">
		</table>
		
		<div id="inputField">
			<div class="inputSection">
				<input readonly id="encryptInput" type="text" name="encryptText">
				<button id="encryptButton" type="submit">Encrypt</button>
			</div>
		</div>
	</form>
	
	<div id="resultField"></div>
	<div id="decryptButtonField"></div>
</body>
</html>