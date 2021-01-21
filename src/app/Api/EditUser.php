<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonUser = json_decode(file_get_contents("php://input"));
if (!$jsonUser) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$admin=0;
if($jsonUser->Administrador === "true"){
    $admin=1;
}
if($jsonUser->Administrador === "false"){
    $admin=0;
}


$resultado=$bd->prepare("UPDATE user 
                        SET Nombre=:Nombre , Apellido=:Apellido , Correo=:Correo, Edad=:Edad , Administrador=:Administrador
                        WHERE Id=:Id");
$resultado -> execute([":Id"=>$jsonUser->Id,
                        ":Nombre"=>$jsonUser->Nombre,
                        ":Apellido"=>$jsonUser->Apellido,
                        ":Correo"=>$jsonUser->Correo,
                        ":Edad"=>$jsonUser->Edad,
                        ":Administrador"=>$admin]);
echo json_encode($resultado);
