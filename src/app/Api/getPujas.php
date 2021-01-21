<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$Consulta = $bd->query("SELECT subasta.Id AS Id_Subasta ,
                        user.Id AS Id_User, 
                        plataforma.Id AS Id_Plataforma , 
                        Puja.Puja ,
                        Puja.Fecha,
                        Puja.Hora ,
                        juego.Nombre AS Nombre_juego , 
                        plataforma.Nombre as Nombre_Plataforma , 
                        user.Nombre AS Nombre_User
FROM puja , subasta , juego  ,plataforma , user
WHERE Puja.Id_Subasta=subasta.Id AND 
        Puja.Id_User=user.Id AND 
        subasta.Id_Plataforma=plataforma.Id AND 
        subasta.Id_Juego=juego.Id");
$Resultado = $Consulta->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>