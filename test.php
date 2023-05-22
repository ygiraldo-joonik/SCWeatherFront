<?php 
$curl = curl_init();

$username = "username";
$password = "password";

curl_setopt_array($curl, array(
CURLOPT_URL => "http://185.10.80.33:8082/record/current.jpg",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => "",
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 0,
CURLOPT_FOLLOWLOCATION => true,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => "GET",
CURLOPT_HTTPHEADER => array(
"Authorization: Basic ".base64_encode($username.":".$password)
),
));
$response = curl_exec($curl);
curl_close($curl);
echo $response;

$fp = fopen('img.jpg', 'w');
fwrite($fp, $response);
fclose($fp);