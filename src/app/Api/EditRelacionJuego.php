<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonRelacionJuego = json_decode(file_get_contents("php://input"));
if (!$jsonRelacionJuego) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("UPDATE relacionjuego 
                        SET Precio=:Precio , Edicion=:Edicion ,Stock=:Stock 
                        WHERE Id_Juego=:Id_Juego AND Id_Plataforma=:Id_Plataforma");
$resultado -> execute([":Id_Juego"=>$jsonRelacionJuego->Id_Juego,
                        ":Id_Plataforma"=>$jsonRelacionJuego->Id_Plataforma,
                        ":Precio"=>$jsonRelacionJuego->Precio,
                        ":Edicion"=>$jsonRelacionJuego->Edicion,
                        ":Stock"=>$jsonRelacionJuego->Stock]);
echo json_encode($resultado);
