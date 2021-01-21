<?php
header("Access-Control-Allow-Origin: *");
$bd = include_once "bd.php";

$fecha = date('Y-m-d H:i:s');
$Consulta = $bd->query(
"SELECT subasta.Id ,
        juego.Id AS Id_Juego ,
        juego.Portada AS Portada, 
        subasta.PrecioMin , 
        subasta.TiempoInicio , 
        subasta.HoraInicio , 
        subasta.TiempoFin , 
        subasta.HoraFin , 
        juego.Nombre AS Nombre_Juego , 
        genero.Nombre AS Nombre_genero , 
        genero.Id AS Id_genero, 
        plataforma.Nombre AS Nombre_Plataforma , 
        plataforma.Id AS Id_Plataforma
FROM juego , 
        genero , 
        subasta ,
        plataforma
WHERE juego.Id_Genero=genero.Id AND 
        subasta.Id_Juego=juego.Id AND 
        subasta.Id_Plataforma=plataforma.Id AND 
        subasta.Estado=1 AND
        NOW() BETWEEN CONCAT(subasta.TiempoInicio,' ',subasta.HoraInicio) AND
        CONCAT(subasta.TiempoFin,' ',subasta.HoraFin)
        LIMIT 1");
$Resultado = $Consulta->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>