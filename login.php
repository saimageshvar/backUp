<?php
session_start();
if(!isset($_SESSION['user']))
{
	$emailId = sanitizeParams($_POST['email']);
	$password = sanitizeParams($_POST['password']);
	
	$url = 'http://52.39.93.59:8080/web/api/login';
	$params =  json_encode(array(
		"emailId" => $emailId, 
		"password" => $password
		));
	$ch = curl_init( $url );
	curl_setopt( $ch, CURLOPT_POST, 1);
	curl_setopt( $ch, CURLOPT_POSTFIELDS, $params);
	curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
	curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt( $ch, CURLOPT_HEADER, 0);
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
	
	$response = curl_exec( $ch );
	if (curl_getinfo($ch, CURLINFO_HTTP_CODE) == 200)
	{
		$response = json_decode($response, true);
		$_SESSION['user'] = $response['user'];
		$_SESSION['access_token'] = $response['token'];
		$_SESSION['login'] = "success";
		echo 1;
	}
	else
	{
		$_SESSION['login'] = "failure";
		echo 0;
	}
	
	//header("Location: index.php");
	
	
	
}
else
{
	echo 2;
}

function sanitizeParams($param)
{
	$param = strip_tags(trim($param));
	if (isset($param) && empty($param) != 1)
	{
		return $param;	
	}
	else
	{
		$_SESSION['login'] = "failure";
			//header("Location: index.php");
	}
}

?>