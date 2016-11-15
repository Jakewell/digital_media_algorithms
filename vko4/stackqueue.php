<?php
	$array = $_POST["array"];
	
	$firstnameStack = new SplStack();
	$lastnameStack = new SplStack();
	$workStack = new SplStack();
	
	$firstnameQueue = new SplQueue();
	$lastnameQueue = new SplQueue();
	$workQueue = new SplQueue();
	
	foreach ($array as $obj) {
		$firstnameStack[] = $obj["firstname"];
		$lastnameStack[] = $obj["lastname"];
		$workStack[] = $obj["work"];
		$firstnameQueue[] = $obj["firstname"];
		$lastnameQueue[] = $obj["lastname"];
		$workQueue[] = $obj["work"];
	}
	
	echo "<h3>Stack</h3>";
	
	for ($i = 0; $i < sizeof($firstnameStack); $i++) {
		echo $firstnameStack[$i] . " " . $lastnameStack[$i] . ": " . $workStack[$i] . "<br>";
	}
	
	echo "<h3>Queue</h3>";
	
	for ($i = 0; $i < sizeof($firstnameQueue); $i++) {
		echo $firstnameQueue[$i] . " " . $lastnameQueue[$i] . ": " . $workQueue[$i] . "<br>";
	}
?>