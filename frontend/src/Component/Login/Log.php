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
    if(isset($_POST["tLog"])){$tLog=$_POST['tLog'];}else{$tLog= "";}
    if(isset($_POST["name"])){$name=$_POST['name'];}else{$name= "";}
    if(isset($_POST["password"])){$pass=$_POST['password'];}else{$pass= "";}
    if(isset($_POST["status"])){$status=$_POST['status'];}else{$status= "";}
    echo($tLog);
    echo($name);
    $conn=new mysqli($server,$user,$password,$db);
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }else{
        $conn->query("UPDATE `dataTable` SET `tLog`='$tLog',`status`='Active' WHERE `name`='$name' AND `password`='$pass'");
        $sql="select * from dataTable";             
        $result=mysqli_query($conn,$sql);
    }
    if(!$result){
        http_response_code(404);
        die(mysqli_error($conn));
    }    
    if(!$id) echo '[';
        for($i=0;$i<mysqli_num_rows($result);$i++){
            echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
            
        }
    
    $conn->close();
?>