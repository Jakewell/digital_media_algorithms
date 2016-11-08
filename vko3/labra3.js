$(function () {
	var infoArray = [
		{
			"firstname": "Juho",
			"lastname": "Rantanen",
			"work": "Tutkimus eri paperilajien hiilijalanjäljistä"
		},
		
		{
			"firstname": "Lauri",
			"lastname": "Hynninen",
			"work": "Videopilvipalvelut markkinointimateriaalin julkaisukanavana"
		},
		
		{
			"firstname": "Satu",
			"lastname": "Pohjola",
			"work": "Biometrisen datan hallinta ja visualisointi selaimessa"
		},
		
		{
			"firstname": "Jaakko",
			"lastname": "Tervonen",
			"work": "Markkinointivideon suunnittelu, käsikirjoittaminen, ohjaaminen ja leikkaaminen"
		}
	];
	
	for (var i = 0; i < infoArray.length; i++) {
		$("#infoTable").append("<tr>" +
						"<td>" + infoArray[i].firstname + "</td>" +
						"<td>" + infoArray[i].lastname + "</td>" +
						"<td>" + infoArray[i].work + "</td>" +
				      "</tr>");
	}
	
	$("td").on("click", function() {
		$("#resultField").empty();
		$("#decryptButtonField").empty();
		$("#encryptInput").val($(this).html());
	});
	
	$("#encryptButton").on("click", function(e) {
		e.preventDefault();
		
		$.ajax({
			url: "crypting.php",
			type: 'POST',
			data: $("form").serialize(),
			success: function(result) {
				$("#resultField").empty();
				$("#decryptButtonField").empty();
				$("#resultField").append(result);
				$("#decryptButtonField").append('<br><button id="decryptButton" type="submit">Decrypt</button>');
			}
		});
	});
	
	$("#decryptButtonField").on("click", "#decryptButton", function(e) {
		e.preventDefault();
		var resultValue = $("#resultField").text();
		
		$.ajax({
			url: "crypting.php",
			type: 'POST',
			data: {value: resultValue},
			success: function(result) {
				$("#resultField").empty();
				$("#resultField").append(result);
				$("#decryptButtonField").empty();
			}
		});
	});
});
