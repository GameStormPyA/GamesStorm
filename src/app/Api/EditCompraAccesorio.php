<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonCompraAccesorio = json_decode(file_get_contents("php://input"));
if (!$jsonCompraAccesorio) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("UPDATE compraraccesorios 
                        SET Precio=:Precio , Edicion=:Edicion ,Cantidad=:Cantidad 
                        WHERE Id_Accesorios=:Id_Accesorios AND Id_Plaforma=:Id_Plaforma AND Id_User=:Id_User");
$resultado -> execute([":Id_Accesorios"=>$jsonCompraAccesorio->Id_Accesorios,
                        ":Id_Plaforma"=>$jsonCompraAccesorio->Id_Plaforma,
                        ":Id_User"=>$jsonCompraAccesorio->Id_User,
                        ":Precio"=>$jsonCompraAccesorio->Precio,
                        ":Edicion"=>$jsonCompraAccesorio->Edicion,
                        ":Cantidad"=>$jsonCompraAccesorio->Cantidad]);
echo json_encode($resultado);
