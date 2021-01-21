<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonJuego = json_decode(file_get_contents("php://input"));
if (!$jsonJuego) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("UPDATE accesorios 
                        SET Nombre=:Nombre ,Descripcion=:Descripcion 
                        WHERE Id=:Id");
$resultado -> execute([":Nombre"=>$jsonJuego->Nombre,
                        ":Descripcion"=>$jsonJuego->Descripcion,
                        ":Id"=>$jsonJuego->Id]);
echo json_encode($resultado);