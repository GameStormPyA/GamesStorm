<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonJuego = json_decode(file_get_contents("php://input"));
if (!$jsonJuego) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("UPDATE juego 
                        SET Nombre=:Nombre ,Descripcion=:Descripcion ,Lanzamiento=:Lanzamiento ,Video=:Video ,EdadMin=:EdadMin ,Id_Genero=:Id_Genero
                        WHERE Id=:Id");
$resultado -> execute([":Nombre"=>$jsonJuego->Nombre,
                        ":Descripcion"=>$jsonJuego->Descripcion,
                        ":Lanzamiento"=>$jsonJuego->Lanzamiento,
                        ":Video"=>$jsonJuego->Video,
                        ":EdadMin"=>$jsonJuego->EdadMin ,
                        ":Id_Genero"=>$jsonJuego->Id_Genero,
                        ":Id"=>$jsonJuego->Id]);
echo json_encode($resultado);