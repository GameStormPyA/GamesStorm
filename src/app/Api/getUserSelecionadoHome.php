<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Correo"])) {
    exit("No hay Correo de User");
}
$Correo = $_GET["Correo"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT *
FROM user
WHERE Correo=:Correo");
$sentencia->execute([":Correo"=>$Correo]);
$UserSelect = $sentencia->fetchObject();
echo json_encode($UserSelect);