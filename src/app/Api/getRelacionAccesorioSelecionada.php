<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id_Accesorio"]) || empty($_GET["Id_Plataforma"])) {
    exit("No hay id de RelacionAccesorio");
}
$Id_Accesorio = $_GET["Id_Accesorio"];
$Id_Plataforma = $_GET["Id_Plataforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT relacionaccesorio.Id_Accesorios as Id_Accesorio ,relacionaccesorio.Id_Plataforma as Id_Plataforma, accesorios.Nombre as Nombre_Accesorio , plataforma.Nombre as Nombre_Plataforma , relacionaccesorio.Precio ,relacionaccesorio.Edicion , relacionaccesorio.Stock
FROM accesorios,relacionaccesorio,plataforma
WHERE relacionaccesorio.Id_Accesorios=accesorios.Id AND relacionaccesorio.Id_Plataforma=plataforma.Id AND relacionaccesorio.Id_Accesorios=:Id_Accesorio AND relacionaccesorio.Id_Plataforma=:Id_Plataforma");
$sentencia->execute([":Id_Accesorio"=>$Id_Accesorio,
                    ":Id_Plataforma"=>$Id_Plataforma]);
$Accesorio = $sentencia->fetchObject();
echo json_encode($Accesorio);