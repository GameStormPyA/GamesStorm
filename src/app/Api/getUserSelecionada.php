<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id"])) {
    exit("No hay id de User");
}
$IdUser = $_GET["Id"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT Id,Nombre,Apellido,Correo,Edad,Administrador
FROM user
WHERE Id=?");
$sentencia->execute([$IdUser]);
$UserSelect = $sentencia->fetchObject();
echo json_encode($UserSelect);