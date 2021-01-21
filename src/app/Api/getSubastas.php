<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$Consulta = $bd->query(
"SELECT subasta.Id ,
        juego.Id AS Id_Juego ,
        plataforma.Id AS Id_Plataforma , 
        subasta.PrecioMin ,
        subasta.TiempoInicio ,
        subasta.HoraInicio , 
        subasta.TiempoFin , 
        subasta.HoraFin , 
        juego.Nombre AS Nombre_Juego , 
        plataforma.Nombre AS Nombre_Plataforma ,
        subasta.Comprador ,
        subasta.Estado
FROM juego , plataforma , subasta 
WHERE subasta.Id_Juego=juego.Id 
      AND subasta.Id_Plataforma=plataforma.Id");
$Resultado = $Consulta->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>