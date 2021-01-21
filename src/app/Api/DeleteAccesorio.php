<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}
if (empty($_GET["idAccesorio"]) && empty($_GET["idPlataforma"])) {
    exit("No hay id de Accesorio o Plataforma para eliminar");
}
$idAccesorio = $_GET["idAccesorio"];
$idPlataforma = $_GET["idPlataforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM relacionaccesorio WHERE Id_Accesorios=? AND Id_Plataforma= ?");
$resultado = $sentencia->execute([$idAccesorio,$idPlataforma]);
echo json_encode($resultado);