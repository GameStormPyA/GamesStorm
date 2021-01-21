<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idAccesorio"]) && empty($_GET["idPlataforma"])) {
    exit("No hay id de Relacion Accesorios y plataforma");
}
$idAccesorio = $_GET["idAccesorio"];
$idPlataforma = $_GET["idPlataforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT relacionaccesorio.Id_Accesorios ,relacionaccesorio.Id_Plataforma , accesorios.Nombre , accesorios.Portada,accesorios.Descripcion , categoria.Nombre AS Categoria , relacionaccesorio.Precio ,relacionaccesorio.Edicion , relacionaccesorio.Stock
                        FROM accesorios,categoria ,relacionaccesorio,plataforma
                        WHERE accesorios.Id_Categoria=categoria.Id AND relacionaccesorio.Id_Accesorios=accesorios.Id AND relacionaccesorio.Id_Plataforma=plataforma.Id AND relacionaccesorio.Id_Accesorios=? AND relacionaccesorio.Id_Plataforma=?");
$sentencia->execute([$idAccesorio,$idPlataforma]);
$Accesorio = $sentencia->fetchObject();
echo json_encode($Accesorio);