<?php
	session_start();
	$name = sanitizeParams($_POST['name']);
	$contactNumber = sanitizeParams($_POST['contactNumber']);
	$emailId = sanitizeParams($_POST['emailId']);
	$password = sanitizeParams($_POST['password']);
	$gender = sanitizeParams($_POST['gender']);
	$collegeName =$_POST['collegeName'];
	$department = sanitizeParams($_POST['department']);
	$date = sanitizeParams($_POST['date']);
	$isSA = '';
	if(isset($_POST['sa']))
		$isSA = true;
	else
		$isSA = false;
	
	$url = 'http://login.kurukshetra.org.in/create.json';
	$params =  json_encode(array("user" => array(
	"name" => $name, 
	"emailId" => $emailId, 
	"collegeName" => $collegeName, 
	"department" => $department, 
	"gender" => $gender, 
	"contactNumber" => $contactNumber, 
	"password" => $password, 
	"isSA" => $isSA
	)));
	$ch = curl_init( $url );
	curl_setopt( $ch, CURLOPT_POST, 1);
	curl_setopt( $ch, CURLOPT_POSTFIELDS, $params);
	curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
	curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt( $ch, CURLOPT_HEADER, 0);
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
	
	$response = curl_exec( $ch );
	$response = json_decode($response, true);
	if ($response['responseCode'] == 1)
	{
		$_SESSION['registration'] = "success";
		$_SESSION['user_id'] = $response['data']['userId'];
	}
	else
	{
		$_SESSION['registration'] = "failure";

	}
	//echo $response['responseCode'];
	//echo $_SESSION['user_id'];
	header("Location: index.php");
	
	function sanitizeParams($param)
	{
		$param = strip_tags(trim($param));
		if (isset($param) && empty($param) != 1)
		{
			//echo "ffd<br/>";
			return $param;
			
		}
		else
		{
			$_SESSION['registration'] = "failure";
			//echo $param;
			header("Location: index.php");
			//echo "asd<br/>";
		}
	}
	
	
	
?>