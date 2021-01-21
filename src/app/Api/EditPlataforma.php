<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonPlataforma = json_decode(file_get_contents("php://input"));
if (!$jsonPlataforma) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("UPDATE plataforma 
                SET Nombre=:Nombre 
                WHERE Id=:id ");
$resultado = $sentencia->execute([":Nombre"=>$jsonPlataforma->Nombre,":id"=>$jsonPlataforma->Id]);      

echo json_encode($resultado);