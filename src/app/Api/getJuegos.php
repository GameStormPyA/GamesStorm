<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$Consulta = $bd->query(
"SELECT juego.Id ,juego.Nombre ,juego.Descripcion ,juego.Portada ,juego.Lanzamiento  ,juego.Video ,juego.EdadMin , genero.Nombre AS Nombre_Genero , genero.Id AS Id_Genero
FROM juego , genero  
WHERE juego.Id_Genero=genero.Id ");
$Resultado = $Consulta->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>