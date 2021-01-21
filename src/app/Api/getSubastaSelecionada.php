<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id"])) {
    exit("No hay id de Subasta");
}
$IdSubasta = $_GET["Id"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT subasta.Id ,juego.Id AS Id_Juego , plataforma.Id AS Id_Plataforma , subasta.PrecioMin , subasta.TiempoInicio , subasta.HoraInicio , subasta.TiempoFin , subasta.HoraFin , juego.Nombre AS Nombre_Juego , plataforma.Nombre AS Nombre_Plataforma , genero.Nombre AS Nombre_Genero , genero.Id AS Id_Genero
FROM juego , plataforma , genero , subasta 
WHERE juego.Id_Genero=genero.Id AND subasta.Id_Juego=juego.Id AND subasta.Id_Plataforma=plataforma.Id AND subasta.Id=?");
$sentencia->execute([$IdSubasta]);
$Accesorio = $sentencia->fetchObject();
echo json_encode($Accesorio);