<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";

$Juego = $bd->query("SELECT relacionjuego.Id_juego as Id_Juego ,relacionjuego.Id_Plataforma as Id_Plataforma, juego.Nombre as Nombre_Juego , plataforma.Nombre as Nombre_Plataforma , relacionjuego.Precio ,relacionjuego.Edicion , relacionjuego.Stock
    FROM juego ,relacionjuego,plataforma
    WHERE relacionjuego.Id_juego=juego.Id AND relacionjuego.Id_Plataforma=plataforma.Id");
$Resultado = $Juego->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>