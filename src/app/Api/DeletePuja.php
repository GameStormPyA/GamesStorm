<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}
if (empty($_GET["Id_Subasta"]) && empty($_GET["Id_User"])) {
    exit("No hay id de Subasta o Cliente para eliminar");
}
$Id_Subasta = $_GET["Id_Subasta"];
$Id_User = $_GET["Id_User"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM puja WHERE Id_Subasta=:Id_Subasta AND Id_User=:Id_User");
$resultado = $sentencia->execute([":Id_Subasta"=>$Id_Subasta,
                                    ":Id_User"=>$Id_User]);
echo json_encode($resultado);