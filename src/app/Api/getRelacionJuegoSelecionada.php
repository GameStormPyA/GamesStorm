<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id_Juego"]) || empty($_GET["Id_Plataforma"])) {
    exit("No hay id de RelacionJuego");
}
$Id_Juego = $_GET["Id_Juego"];
$Id_Plataforma = $_GET["Id_Plataforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT relacionjuego.Id_juego as Id_Juego ,relacionjuego.Id_Plataforma as Id_Plataforma, juego.Nombre as Nombre_Juego , plataforma.Nombre as Nombre_Plataforma , relacionjuego.Precio ,relacionjuego.Edicion , relacionjuego.Stock
FROM juego ,relacionjuego,plataforma
WHERE relacionjuego.Id_juego=juego.Id AND relacionjuego.Id_Plataforma=plataforma.Id AND relacionjuego.Id_juego=:Id_Juego AND relacionjuego.Id_Plataforma=:Id_Plataforma");
$sentencia->execute([":Id_Juego"=>$Id_Juego,
                    ":Id_Plataforma"=>$Id_Plataforma]);
$Juegos = $sentencia->fetchObject();
echo json_encode($Juegos);