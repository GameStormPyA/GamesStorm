<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonGenero = json_decode(file_get_contents("php://input"));
if (!$jsonGenero) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$sentencia = $bd->prepare("UPDATE genero 
                SET Nombre=:Nombre 
                WHERE Id=:id ");
$resultado = $sentencia->execute([":Nombre"=>$jsonGenero->Nombre,":id"=>$jsonGenero->Id]);      

echo json_encode($resultado);
