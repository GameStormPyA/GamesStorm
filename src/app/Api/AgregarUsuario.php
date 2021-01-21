<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");

    $jsonUsuario= json_decode(file_get_contents("php://input"));
    if (!$jsonUsuario) {
        exit("No hay datos de registro usuario");
    }
    $bd = include_once "bd.php";
    
    $resultadoExiste=$bd->prepare("SELECT COUNT(*) FROM user WHERE Correo=?");
    $resultadoExiste -> execute([$jsonUsuario->Correo]);
    if($resultadoExiste->fetchColumn() > 0){
        echo json_encode(
             "Existe",
        );
    }else{
        $contrasenaHash = password_hash($jsonUsuario->Contrasena, PASSWORD_DEFAULT);
 
        $sentencia = $bd->prepare("INSERT INTO user (Nombre,Apellido,Contrasena,Correo,Edad,Administrador) 
                                    VALUES (:Nombre,:Apellido,:Contrasena,:Correo,:Edad,false)");
        $resultado = $sentencia->execute([":Nombre"=>$jsonUsuario->Nombre,
                                            ":Apellido"=>$jsonUsuario->Apellidos,
                                            ":Contrasena"=>$contrasenaHash,
                                            ":Correo"=>$jsonUsuario->Correo,
                                            ":Edad"=>$jsonUsuario->Edad]);

        echo json_encode($resultado); 
    }  
     
?>