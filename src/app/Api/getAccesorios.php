<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";

$Acesorios = $bd->query("SELECT accesorios.Id , accesorios.Nombre ,
                                accesorios.Portada, 
                                accesorios.Descripcion ,
                                categoria.Nombre AS Nombre_Categoria , 
                                categoria.Id AS Id_Categoria 
                        FROM accesorios,categoria 
                        WHERE accesorios.Id_Categoria=categoria.Id ");
$Resultado = $Acesorios->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>