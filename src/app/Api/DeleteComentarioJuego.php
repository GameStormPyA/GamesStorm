<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}
if (empty($_GET["Id_Juego"]) && empty($_GET["Id_User"])) {
    exit("No hay id de Juego o Usuario para eliminar");
}
$Id_Juego = $_GET["Id_Juego"];
$Id_User = $_GET["Id_User"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM comentariojuego WHERE Id_Juego=:Id_Juego AND Id_User=:Id_User");
$resultado = $sentencia->execute([":Id_Juego"=>$Id_Juego,
                                  ":Id_User"=>$Id_User]);
echo json_encode($resultado);