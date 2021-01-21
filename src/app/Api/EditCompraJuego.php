<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonCompraJuego = json_decode(file_get_contents("php://input"));
if (!$jsonCompraJuego) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("UPDATE comprarjuego 
                        SET Precio=:Precio , Edicion=:Edicion ,Cantidad=:Cantidad 
                        WHERE Id_Juego=:Id_Juego AND Id_Plaforma=:Id_Plaforma AND Id_User=:Id_User");
$resultado -> execute([":Id_Juego"=>$jsonCompraJuego->Id_Juego,
                        ":Id_Plaforma"=>$jsonCompraJuego->Id_Plaforma,
                        ":Id_User"=>$jsonCompraJuego->Id_User,
                        ":Precio"=>$jsonCompraJuego->Precio,
                        ":Edicion"=>$jsonCompraJuego->Edicion,
                        ":Cantidad"=>$jsonCompraJuego->Cantidad]);
echo json_encode($resultado);
