<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";

$anuncio = $bd->query(
    "SELECT relacionaccesorio.Id_Accesorios ,relacionaccesorio.Id_Plataforma , accesorios.Nombre , accesorios.Portada,accesorios.Descripcion , categoria.Nombre AS categoria , relacionaccesorio.Precio ,relacionaccesorio.Edicion , relacionaccesorio.Stock
    FROM accesorios,categoria ,relacionaccesorio,plataforma
    WHERE accesorios.Id_Categoria=categoria.Id AND relacionaccesorio.Id_Accesorios=accesorios.Id AND relacionaccesorio.Id_Plataforma=plataforma.Id"
    );
$anuncios = $anuncio->fetchAll(PDO::FETCH_OBJ);
echo json_encode($anuncios);
?>