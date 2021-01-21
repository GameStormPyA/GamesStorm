<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$jsonPuja= json_decode(file_get_contents("php://input"));
if (!$jsonPuja) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$sentencia = $bd->prepare("INSERT INTO puja (Id_Subasta,Id_User,Puja,Fecha,Hora)
VALUES (:Id_Subasta,:Id_User,:Puja,:Fecha,:Hora)");
$resultado = $sentencia->execute([":Id_Subasta"=>$jsonPuja->Id_Subasta,
                                    ":Id_User"=>$jsonPuja->Id_User,
                                    ":Puja"=>$jsonPuja->Puja,
                                    ":Fecha"=>$jsonPuja->Fecha,
                                    ":Hora"=>$jsonPuja->Hora
                                 ]);

echo json_encode([
    "resultado" => $resultado,
]);