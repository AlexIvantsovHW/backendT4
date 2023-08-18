<?php 
header('Access-Control-Allow-Origin:*', "Refresh: 2");
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,PUT,DELETE');
header('Access-Control-Allow-Headers:Content-Type, X-Auth-Token, Origin,Authorization');

   /* $server="localhost";
	$user="root";
	$password="";
	$db="id21119780_4tsk"; */

    $server="localhost";
	$user="id21148795_root";
	$password="Root_Root1";
	$db="id21148795_root";

    $conn=new mysqli($server,$user,$password,$db);
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }else{
        $inputJSON = file_get_contents('php://input');
        $input = json_decode($inputJSON, TRUE);
        $ids = implode("','", $input);
        $sql=("UPDATE dataTable SET `status`='Blocked' WHERE id IN ('".$ids."')");             
        $result=mysqli_query($conn,$sql);
        print_r($input);
    }  
?>