<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonUser = json_decode(file_get_contents("php://input"));
if (!$jsonUser) {
    exit("No hay datos de registro usuario");
}
$bd = include_once "bd.php";

    $resultadoExiste=$bd->prepare("SELECT COUNT(*) FROM user WHERE Correo=?");
    $resultadoExiste -> execute([$jsonUser->Correo]);
    
    if($resultadoExiste->fetchColumn() > 0){
        echo json_encode(
             "Existe",
        );
    }else{
        $contrasenaHash = password_hash($jsonUser->Contrasena, PASSWORD_DEFAULT);
 
        $admin=0;
        if($jsonUser->Administrador === "true"){
            $admin=1;
        }
        if($jsonUser->Administrador === "false"){
            $admin=0;
        }
        
        $sentencia = $bd->prepare("INSERT INTO user (Nombre,Apellido,Correo,Edad,Contrasena,Administrador)
        VALUES(:Nombre,:Apellido,:Correo,:Edad,:Contrasena,:Administrador)");
        $resultado = $sentencia->execute([":Nombre"=>$jsonUser->Nombre,
                                        ":Apellido"=>$jsonUser->Apellido,
                                        ":Correo"=>$jsonUser->Correo,
                                        ":Edad"=>$jsonUser->Edad,
                                        ":Contrasena"=>$contrasenaHash,
                                        ":Administrador"=>$admin]);

         echo json_encode([
            "resultado" => $resultado,
        ]);
    }  
?>
