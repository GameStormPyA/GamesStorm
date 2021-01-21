<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonPlataforma = json_decode(file_get_contents("php://input"));
if (!$jsonPlataforma) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$sentencia = $bd->prepare("INSERT INTO plataforma (Nombre)
VALUES(?)");
$resultado = $sentencia->execute([$jsonPlataforma->Nombre]);

echo json_encode([
    "resultado" => $resultado,
]);