<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}
if (empty($_GET["Id_Juego"]) && empty($_GET["Id_Plataforma"])) {
    exit("No hay id de Juego o Plataforma para eliminar");
}
$Id_Juego = $_GET["Id_Juego"];
$Id_Plataforma = $_GET["Id_Plataforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM relacionjuego WHERE Id_Juego=:Id_Juego AND Id_Plataforma=:Id_Plataforma");
$resultado = $sentencia->execute(["Id_Juego"=>$Id_Juego , "Id_Plataforma"=>$Id_Plataforma]);
echo json_encode($resultado);