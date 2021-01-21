<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}
if (empty($_GET["Id"])) {
    exit("No hay id de Categoria para eliminar");
}
$Id = $_GET["Id"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM plataforma WHERE Id=?");
$resultado = $sentencia->execute([$Id]);
echo json_encode($resultado);