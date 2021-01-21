<?php
header("Access-Control-Allow-Origin: *");
$bd = include_once "bd.php";
$Consulta = $bd->query(
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
        relacionaccesorio.Stock > 0 
ORDER BY RAND()");
$Resultado = $Consulta->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>
