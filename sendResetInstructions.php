<?php
session_start();
if(!isset($_SESSION['user']))
{	
	$url = 'login.kurukshetra.org.in/generateResetToken';
	$params =  json_encode(array(
		"emailId" => $_POST['emailId']
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
		echo 1;
	}
	else
	{
		echo 0;
	}
	
	//header("Location: index.php");
	
}
else
{
	echo 2;
}
