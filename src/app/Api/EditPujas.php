<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonPuja = json_decode(file_get_contents("php://input"));
if (!$jsonPuja) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("UPDATE puja 
                        SET Puja=:Puja , Fecha=:Fecha , Hora=:Hora
                        WHERE Id_Subasta=:Id_Subasta AND Id_User=:Id_User");
$resultado -> execute([":Puja"=>$jsonPuja->Puja,
                        ":Fecha"=>$jsonPuja->Fecha,
                        ":Hora"=>$jsonPuja->Hora,
                        ":Id_Subasta"=>$jsonPuja->Id_Subasta,
                        ":Id_User"=>$jsonPuja->Id_User]);
echo json_encode($resultado);
