<?php
session_start();
if(isset($_SESSION['user']))
{	

	foreach ($_POST['email'] as $key => $value) {
		if (empty($value)) {
			unset($_POST['email'][$key]);
			unset($_POST['phone'][$key]);
		}
	}
	foreach ($_POST['phone'] as $key => $value) {
		if (empty($value)) {
			unset($_POST['phone'][$key]);
			unset($_POST['email'][$key]);
		}
	}
	$url = 'shinigami.kurukshetra.org.in/web/api/workshopRegistration';
	$params =  json_encode(array(
		"access_token" => $_SESSION['access_token'],
		"workshopName" => $_POST['workshopName'],
		"participants" => $_POST['email'],
		"contacts" => $_POST['phone']
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
		$code = 1;
		$arr = array ('response'=>$code,'t_id'=>$response['tid']);
		echo json_encode($arr);

	}
	else if (curl_getinfo($ch, CURLINFO_HTTP_CODE) == 666)
	{
		$response = json_decode($response, true);
		$code = 3;
		$arr = array ('response'=>$code);
		echo json_encode($arr);
	}
	else
	{
		$response = json_decode($response, true);
		$code = 0;
		$arr = array ('response'=>$code);
		echo json_encode($arr);
	}
	
	//header("Location: index.php");
	
}
else
{
	echo 2;
}
