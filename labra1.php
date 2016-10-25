<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Labra 1 - Jarkko Saikkonen</title>
	<link rel="stylesheet" type="text/css" href="labra1.css">
	<script type="text/javascript" src="../jquery-3.1.1.min.js"></script>
	<script type="text/javascript">
		function sortArrays() {
			$.ajax({
				url: "sort.php",
				success: function(result) {
					console.log(result);
				}
			});
		}
	</script>
</head>

<body>
	<?php
		$etunimi = ["Juho", "Lauri", "Satu", "Jaakko"];
		$sukunimi = ["Rantanen", "Hynninen", "Pohjola", "Tervonen"];
		$tyonimi = ["Tutkimus eri paperilajien hiilijalanjäljistä", "Videopalvelut markkinointimateriaalin julkaisukanavana", "Biometrisen datan hallinta ja visualisointi selaimessa", "Markkinointivideon suunnittelu, käsikirjoittaminen, ohjaaminen ja leikkaaminen"];
	?>

	<table>
		<tr>
			<th><a href="#" onclick="sortArrays();">Etunimi</a></th>
			<th>Sukunimi</th>
			<th>Työnimi</th>
		</tr>	
		<?php 
			for ($i = 0; $i < 4; $i++) {
				echo "<tr>
						<td>$etunimi[$i]</td>
						<td>$sukunimi[$i]</td>
						<td>$tyonimi[$i]</td>
					  </tr>";
			}
		?>	
	</table>
</body>

</html>
