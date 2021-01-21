<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonRelacionAccesorio = json_decode(file_get_contents("php://input"));
if (!$jsonRelacionAccesorio) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("UPDATE relacionaccesorio 
                        SET Precio=:Precio , Edicion=:Edicion ,Stock=:Stock 
                        WHERE Id_Accesorios=:Id_Accesorios AND Id_Plataforma=:Id_Plataforma");
$resultado -> execute([":Id_Accesorios"=>$jsonRelacionAccesorio->Id_Accesorio,
                        ":Id_Plataforma"=>$jsonRelacionAccesorio->Id_Plataforma,
                        ":Precio"=>$jsonRelacionAccesorio->Precio,
                        ":Edicion"=>$jsonRelacionAccesorio->Edicion,
                        ":Stock"=>$jsonRelacionAccesorio->Stock]);
echo json_encode($resultado);