<?php
session_start();
    $jsonUsuario= json_decode(file_get_contents("php://input"));
    if (!$jsonUsuario) {
        exit("No hay datos de registro usuario");
    }
    $bd = include_once "bd.php";
    $resultadoIdUser=$bd->prepare("SELECT COUNT Id,Correo,Contrasena FROM user WHERE Correo=? DESC Limit 1");
    $resultadoIdUser -> execute([$jsonUsuario->correo]);
    while($item = $resultadoIdUser ->fetch(PDO::FETCH_ASSOC)){
        $_SESSION['User']=$item['Id'];
        $_SESSION['Correo']=$item['Correo'];
        $_SESSION['Contrasena']=$item['Contrasena'];
    }  

    f(!isset($_SESSION['User']) | !isset($_SESSION['Correo']) | !isset($_SESSION['Contrasena']) ){
        echo json_encode(
            "SinSesion",
        );
    }else{
        echo json_encode(
            "ConSesion",
        );
    }
    
?>