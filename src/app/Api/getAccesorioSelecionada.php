<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id"])) {
    exit("No hay id de Juego o Usuario");
}
$Id = $_GET["Id"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT accesorios.Id , accesorios.Nombre ,
                                accesorios.Portada, 
                                accesorios.Descripcion ,
                                categoria.Nombre AS Nombre_Categoria , 
                                categoria.Id AS Id_Categoria 
                        FROM accesorios,categoria 
                        WHERE accesorios.Id_Categoria=categoria.Id AND 
                                accesorios.Id=:Id");
                            
$sentencia->execute([":Id"=>$Id]);
$Accesorio = $sentencia->fetchObject();
echo json_encode($Accesorio);