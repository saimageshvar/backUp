<?php
session_start();
$name = sanitizeParams($_POST['name']);
$contactNumber = sanitizeParams($_POST['contactNumber']);
$emailId = sanitizeParams($_POST['emailId']);
$password = sanitizeParams($_POST['password']);
$gender = sanitizeParams($_POST['gender']);
$collegeName = sanitizeParams($_POST['college']);
$department = sanitizeParams($_POST['department']);
$date = sanitizeParams($_POST['date']);
$degree = sanitizeParams($_POST['degree']);
$year = sanitizeParams($_POST['year']);
$city = sanitizeParams($_POST['city']);
$isSA = '';
if(isset($_POST['sa']))
	$isSA = true;
else
	$isSA = false;

$url = 'http://login.kurukshetra.org.in/create';
$params =  json_encode(array("user" => array(
	"name" => $name, 
	"emailId" => $emailId, 
	"collegeName" => $collegeName, 
	"department" => $department, 
	"gender" => $gender, 
	"contactNumber" => $contactNumber, 
	"password" => $password, 
	"isSA" => $isSA,
	"dateOfBirth" => $date,
	"degree" => $degree,
	"year" => $year,
	"location" => $city
	)));
$ch = curl_init( $url );
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $params);
curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

//$response = curl_exec( $ch );
$response = json_decode($response, true);
if (curl_getinfo($ch, CURLINFO_HTTP_CODE) == 200)
{
	$_SESSION['registration'] = "success";
	echo 1;
}
else if(curl_getinfo($ch, CURLINFO_HTTP_CODE) == 409)
{
	$_SESSION['registration'] = "failure";
	echo 2;

}
else
{
	$_SESSION['registration'] = "failure";
	echo 0;

}
//header("Location: index.php");

function sanitizeParams($param)
{
	$param = strip_tags(trim($param));
	if (isset($param) && empty($param) != 1)
	{
		return $param;			
	}
	else
	{
		$_SESSION['registration'] = "failure";
		exit(0);
	}
}



?>