<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonCategoria = json_decode(file_get_contents("php://input"));
if (!$jsonCategoria) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("UPDATE categoria 
                SET Nombre=:Nombre 
                WHERE Id=:id ");
$resultado = $sentencia->execute([":Nombre"=>$jsonCategoria->Nombre,":id"=>$jsonCategoria->Id]);      

echo json_encode($resultado);
