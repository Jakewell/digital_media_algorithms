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
	
	$("button").on("click", function() {
		var searchValue = $("input").val();
		
		$.each(infoArray, function(index, value) {
			if (value.firstname == searchValue) {
				$("#resultField").empty();
				$("#resultField").append("<table border='1'>" +
											"<tr>" +
											   "<td>" + value.firstname + "</td>" +
											   "<td>" + value.lastname + "</td>" +
											   "<td>" + value.work + "</td>" +
											"</tr>" +
										"</table>"
				);
				return false;
			}
		});
		
		$.each(infoArray, function(index, value) {
			if (value.lastname == searchValue) {
				$("#resultField").empty();
				$("#resultField").append("<table>" +
											"<tr>" +
											   "<td>" + value.firstname + "</td>" +
											   "<td>" + value.lastname + "</td>" +
											   "<td>" + value.work + "</td>" +
											"</tr>" +
										"</table>"
				);
				return false;
			}
		});
		
		$.each(infoArray, function(index, value) {
			if (value.work == searchValue) {
				$("#resultField").empty();
				$("#resultField").append("<table border='1'>" +
											"<tr>" +
											   "<td>" + value.firstname + "</td>" +
											   "<td>" + value.lastname + "</td>" +
											   "<td>" + value.work + "</td>" +
											"</tr>" +
										"</table>"
				);
				return false;
			}
		});
	});
});