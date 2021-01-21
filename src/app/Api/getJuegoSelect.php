<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id_Juego"]) || empty($_GET["Id_Plataforma"])) {
    exit("No hay id de RelacionAccesorio");
}
$Id_Juego = $_GET["Id_Juego"];
$Id_Plataforma = $_GET["Id_Plataforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare(
    "SELECT juego.Id AS Id_Juego ,
    juego.Nombre AS Nombre_Juego,
    juego.Descripcion ,
    juego.Portada ,
    juego.Lanzamiento,
    juego.Video,
    juego.EdadMin,
    relacionjuego.Precio ,
    relacionjuego.Edicion,
    relacionjuego.Stock,
    genero.Nombre AS Nombre_Genero , 
    genero.Id AS Id_Genero ,
    plataforma.Id AS Id_Plataforma,
    plataforma.Nombre AS Nombre_Plataforma
FROM juego , 
    genero  , 
    plataforma ,
    relacionjuego
WHERE juego.Id_Genero=genero.Id AND
    relacionjuego.Id_Juego=juego.Id AND
    relacionjuego.Id_Plataforma=plataforma.Id AND
    relacionjuego.Stock > 0 AND
    relacionjuego.Id_Juego=:Id_Juego AND
    relacionjuego.Id_Plataforma=:Id_Plataforma");
$sentencia->execute([":Id_Juego"=>$Id_Juego,
                    ":Id_Plataforma"=>$Id_Plataforma]);
$Accesorio = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Accesorio);