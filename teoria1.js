$(function() {
    
	for (i = 1; i < 7; i++) {
		$("form").append('Number ' + i + ' <input type="text" name="number' + i + '">' + '<br>');
	}

    $("input").keypress(function(e) {
        var characterCheckArray = [];
        var keyBeingPressed = e.which;
        
        // Numbers (also numpad numbers seem to work)
        for (i = 48; i < 58; i++) {
            characterCheckArray.push(i);
        }
        
        // Chrome + Firefox Backspace, Tab, Delete, Dash, Minus
        // For some reason all of these don't work
        characterCheckArray.push(8, 9, 46, 109, 173, 189);

        if (!(characterCheckArray.indexOf(keyBeingPressed) >= 0)) {
            e.preventDefault();
            $("#alertBox").text("Use only integers in the input fields!");
        }
    });
    
    var $fields = $("input");
    var fieldsAreFilled;
    
    $fields.keyup(function() {
        var $emptyFields = $fields.filter(function() {
            return $.trim(this.value) === "";
        });

        if (!$emptyFields.length) {
            fieldsAreFilled = true;
        } else {
            fieldsAreFilled = false;
        }
    });
	
	$("#send").on("click", function() {
            
        if (fieldsAreFilled) {
            var numberArray = [];
            $("#numberBox").empty();

            for (i = 0; i < 6; i++) {
                numberArray.push($("input")[i].value);
            }

            numberArray.sort(sortNumbers);
            $("#numberBox").append(numberArray.join(", "));
            $("#alertBox").empty();
        } else {
            $("#alertBox").text("Give six integers!");
            $("#numberBox").empty();
        }
	});
	
	$("#reset").on("click", function() {
		$("input").val("");
		$("#numberBox").empty();
        $("#alertBox").empty();
	});
	
	function sortNumbers(a, b) {
		return a - b;
	}
});
