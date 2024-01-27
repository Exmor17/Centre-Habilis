<?php
$visitorIP = $_SERVER['REMOTE_ADDR'];
// header('Content-Type: application/json');
echo json_encode(array('visitorIP' => $visitorIP));