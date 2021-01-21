<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonCategoria = json_decode(file_get_contents("php://input"));
if (!$jsonCategoria) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$sentencia = $bd->prepare("INSERT INTO categoria (Nombre)
VALUES(?)");
$resultado = $sentencia->execute([$jsonCategoria->Nombre]);

echo json_encode([
    "resultado" => $resultado,
]);