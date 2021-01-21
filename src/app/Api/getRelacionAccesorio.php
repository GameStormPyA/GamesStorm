<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";

$Accesorio = $bd->query("SELECT relacionaccesorio.Id_Accesorios	 as Id_Accesorio ,relacionaccesorio.Id_Plataforma as Id_Plataforma, accesorios.Nombre as Nombre_Accesorio , plataforma.Nombre as Nombre_Plataforma , relacionaccesorio.Precio ,relacionaccesorio.Edicion , relacionaccesorio.Stock
    FROM accesorios ,relacionaccesorio,plataforma
    WHERE relacionaccesorio.Id_Accesorios=accesorios.Id AND relacionaccesorio.Id_Plataforma=plataforma.Id");
$Resultado = $Accesorio->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>