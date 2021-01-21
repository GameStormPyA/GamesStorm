<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}
if (empty($_GET["Id"])) {
    exit("No hay id de Juego para eliminar");
}
$Idjuego = $_GET["Id"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM juego WHERE Id=?");
$resultado = $sentencia->execute([$Idjuego]);
echo json_encode($resultado);