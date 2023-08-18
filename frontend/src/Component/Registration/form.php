<?php 
header('Access-Control-Allow-Origin:*', "Refresh: 2");
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,PUT,DELETE');
header('Access-Control-Allow-Headers:Content-Type, X-Auth-Token, Origin,Authorization');
    
    // Server
   /* $server="localhost";
	$user="root";
	$password="";
	$db="id21119780_4tsk"; */

    //------------------
    $server="localhost";
	$user="id21148795_root";
	$password="Root_Root1";
	$db="id21148795_root";  

    if(isset($_POST["name"])){$name=$_POST['name'];}else{$name= "";}
    if(isset($_POST["email"])){$email=$_POST['email'];}else{$email= "";}
    if(isset($_POST["tReg"])){$tReg=$_POST['tReg'];}else {$tReg= "";}
    if(isset($_POST["pass"])){$pass=$_POST['pass'];}else {$pass= "";}

    $conn=new mysqli($server,$user,$password,$db);
    echo($name);
    echo($email);
    echo($tReg);
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }else{
    
        $conn->query("INSERT INTO `dataTable`(`name`,`email`,`tReg`,`status`,`password`) VALUES('$name','$email','$tReg','Active','$pass')"); 
    }  
    $conn->close();
?>