<?php
header("Access-Control-Allow-Origin: *");
$bd = include_once "bd.php";
$Consulta = $bd->query(
"SELECT juego.Id AS Id_Juego ,
		juego.Nombre AS Nombre_Juego,
        juego.Descripcion ,
        juego.Portada ,
        relacionjuego.Precio ,
        relacionjuego.Edicion,
        relacionjuego.Stock,
        juego.Lanzamiento ,
        juego.Video ,
        juego.EdadMin ,
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
        relacionjuego.Stock > 0 
        ORDER BY RAND()");
$Resultado = $Consulta->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>