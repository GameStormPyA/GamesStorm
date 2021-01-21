<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id_Subasta"]) && empty($_GET["Id_Cliente"])) {
    exit("No hay id de subasta o Usuario");
}
$Id_Subasta = $_GET["Id_Subasta"];
$Id_User = $_GET["Id_User"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT subasta.Id AS Id_Subasta ,
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
        subasta.Id_Juego=juego.Id AND  
        Puja.Id_User=:Id_User and
        Puja.Id_Subasta=:Id_Subasta");
                            
$sentencia->execute([":Id_Subasta"=>$Id_Subasta,
                    ":Id_User"=>$Id_User]);
$Accesorio = $sentencia->fetchObject();
echo json_encode($Accesorio);