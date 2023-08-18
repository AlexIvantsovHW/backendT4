<?php 
    // * позволяет всем источникам делать запросы на сервер. Refresh 5 -обновляет php каждые 5сек
    header('Access-Control-Allow-Origin:*', "Refresh: 3");
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS,PUT,DELETE');
header('Access-Control-Allow-Headers:Content-Type, X-Auth-Token, Origin,Authorization');
    // * (Имя хоста, Пользователь в phpAdmin, пароль в phpAdmin, имя БД)
   /* $server="localhost";
	$user="root";
	$password="";
	$db="id21119780_4tsk"; */

    //------------------
    $server="localhost";
	$user="id21148795_root";
	$password="Root_Root1";
	$db="id21148795_root";  
    //-------------------
    $method=$_SERVER['REQUEST_METHOD'];

    $conn=new mysqli($server,$user,$password,$db);

    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }else{
        switch($method){
            case 'GET':
                $sql="select * from dataTable";   
                break;
        };
        $sql="select * from dataTable";             
        $result=mysqli_query($conn,$sql);
    }
    if(!$result){
        http_response_code(404);
        die(mysqli_error($conn));
    }
    if($method=='GET'){
        if(!$id) echo '[';
        for($i=0;$i<mysqli_num_rows($result);$i++){
            echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
            
        }
        if(!$id) echo ']';
    }elseif($method =='POST'){
        echo json_encode($result);
        
    }
        else{echo mysqli_affected_rows($conn);};
    
    $conn->close();
       ?>