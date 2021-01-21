<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}
if (empty($_GET["Id_Accesorio"]) && empty($_GET["Id_Plataforma"])) {
    exit("No hay id de Accesorio o Plataforma para eliminar");
}
$Id_Accesorio = $_GET["Id_Accesorio"];
$Id_Plataforma = $_GET["Id_Plataforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM relacionaccesorio WHERE Id_Accesorios =:Id_Accesorio AND Id_Plataforma=:Id_Plataforma");
$resultado = $sentencia->execute(["Id_Accesorio"=>$Id_Accesorio , "Id_Plataforma"=>$Id_Plataforma]);
echo json_encode($resultado);