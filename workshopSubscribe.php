<?php
session_start();
if(isset($_SESSION['user']))
{	
	$url = 'http://52.39.93.59:8080/web/api/workshopSubscribe';
	$params =  json_encode(array(
		"access_token" => $_SESSION['access_token'], 
		"workshopName" => $_POST['workshopName']
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
		$_SESSION['user']['workshops'][$_POST['workshopName']] = true;
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
