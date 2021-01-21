<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id"])) {
    exit("No hay id de Juego");
}
$IdJuegos = $_GET["Id"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT juego.Id ,juego.Nombre ,juego.Descripcion ,juego.Portada ,juego.Lanzamiento  ,juego.Video ,juego.EdadMin , genero.Nombre AS Nombre_Genero , genero.Id AS Id_Genero
FROM juego , genero  
WHERE juego.Id_Genero=genero.Id AND juego.Id=:Id");
$sentencia->execute([":Id"=>$IdJuegos]);
$Juegos = $sentencia->fetchObject();
echo json_encode($Juegos);