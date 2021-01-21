<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}
if (empty($_GET["Id_Accesorio"]) && empty($_GET["Id_User"]) && empty($_GET["Id_Plaforma"])) {
    exit("No hay id de Accesorio , Usuario o Plataforma para eliminar");
}
$Id_Accesorio = $_GET["Id_Accesorio"];
$Id_User = $_GET["Id_User"];
$Id_Plaforma = $_GET["Id_Plaforma"];

$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM compraraccesorios WHERE Id_Accesorios=:Id_Accesorio AND Id_User=:Id_User AND Id_Plaforma=:Id_Plaforma");
$resultado = $sentencia->execute([":Id_Accesorio"=>$Id_Accesorio,
                                  ":Id_User"=>$Id_User,
                                  ":Id_Plaforma"=>$Id_Plaforma]);
echo json_encode($resultado);