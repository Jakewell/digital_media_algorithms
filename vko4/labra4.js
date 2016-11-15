$(function () {
	var infoArray = [
		{
			firstname: "Juho",
			lastname: "Rantanen",
			work: "Tutkimus eri paperilajien hiilijalanjäljistä"
		},
		
		{
			firstname: "Lauri",
			lastname: "Hynninen",
			work: "Videopilvipalvelut markkinointimateriaalin julkaisukanavana"
		},
		
		{
			firstname: "Satu",
			lastname: "Pohjola",
			work: "Biometrisen datan hallinta ja visualisointi selaimessa"
		},
		
		{
			firstname: "Jaakko",
			lastname: "Tervonen",
			work: "Markkinointivideon suunnittelu, käsikirjoittaminen, ohjaaminen ja leikkaaminen"
		}
	];
	
	for (var i = 0; i < infoArray.length; i++) {
		$("#infoTable").append("<tr>" +
						"<td>" + infoArray[i].firstname + "</td>" +
						"<td>" + infoArray[i].lastname + "</td>" +
						"<td>" + infoArray[i].work + "</td>" +
					"</tr>");
	}

	$("#stackAndQueueButton").on("click", function(e) {
		e.preventDefault();
		
		$.ajax({
			url: "stackqueue.php",
			type: 'POST',
			data: {array: infoArray},
			success: function(result) {
				$("#resultField").empty();
				$("#resultField").append(result);
			}
		});
	});
});
