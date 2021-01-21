<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id_Accesorio"]) || empty($_GET["Id_Plataforma"])) {
    exit("No hay id de RelacionAccesorio");
}
$Id_Accesorio = $_GET["Id_Accesorio"];
$Id_Plataforma = $_GET["Id_Plataforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare(
    "SELECT accesorios.Id AS Id_Accesorios ,
    accesorios.Nombre AS Nombre_Accesorios,
    accesorios.Descripcion ,
    accesorios.Portada ,
    relacionaccesorio.Precio ,
    relacionaccesorio.Edicion,
    relacionaccesorio.Stock,
    categoria.Nombre AS Nombre_Categoria , 
    categoria.Id AS Id_Categoria ,
    plataforma.Id AS Id_Plataforma,
    plataforma.Nombre AS Nombre_Plataforma
FROM accesorios , 
    categoria  , 
    plataforma ,
    relacionaccesorio
WHERE accesorios.Id_Categoria=categoria.Id AND
    relacionaccesorio.Id_Accesorios=accesorios.Id AND
    relacionaccesorio.Id_Plataforma=plataforma.Id AND
    relacionaccesorio.Stock > 0 AND
    relacionaccesorio.Id_Accesorios=:Id_Accesorios AND
    relacionaccesorio.Id_Plataforma=:Id_Plataforma ");
$sentencia->execute([":Id_Accesorios"=>$Id_Accesorio,
                    ":Id_Plataforma"=>$Id_Plataforma]);
$Accesorio = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Accesorio);