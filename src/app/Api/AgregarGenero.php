<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonGenero = json_decode(file_get_contents("php://input"));
if (!$jsonGenero) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$sentencia = $bd->prepare("INSERT INTO genero(Nombre)
VALUES(?)");
$resultado = $sentencia->execute([$jsonGenero->Nombre]);

echo json_encode([
    "resultado" => $resultado,
]);