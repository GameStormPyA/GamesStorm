<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$Consulta = $bd->query("SELECT Id,Nombre FROM juego");
$Resultado = $Consulta->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>