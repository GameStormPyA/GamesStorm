<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");

$jsonPuja = json_decode(file_get_contents("php://input"));
if (!$jsonPuja) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$fechaActual = date('Y-m-d');
$HoraActual = date('H:i:s');

$resultadoExiste=$bd->prepare("SELECT COUNT(*) FROM puja WHERE Id_Subasta=:Id_Subasta AND Id_User=:Id_User");
$resultadoExiste -> execute([":Id_Subasta"=>$jsonPuja->Id_Subasta,
                            ":Id_User"=>$jsonPuja->Id_Cliente]);
if($resultadoExiste->fetchColumn() > 0){
    $resultadoUpdate=$bd->prepare("UPDATE puja 
                        SET Puja=:Puja , Fecha=:Fecha , Hora=:Hora
                        WHERE Id_Subasta=:Id_Subasta AND Id_User=:Id_User");
    $resultadoUpdate -> execute([":Puja"=>$jsonPuja->Puja,
                        ":Fecha"=>$fechaActual,
                        ":Hora"=>$HoraActual,
                        ":Id_Subasta"=>$jsonPuja->Id_Subasta,
                        ":Id_User"=>$jsonPuja->Id_Cliente]);
    $resultadoUpdateSubasta=$bd->prepare("UPDATE subasta 
                        SET PrecioMin=:PrecioMin , Comprador=:Comprador
                        WHERE Id=:Id ");
    $resultadoUpdateSubasta -> execute([":PrecioMin"=>$jsonPuja->Puja, 
                            ":Id"=>$jsonPuja->Id_Subasta,
                            ":Comprador"=>$jsonPuja->Id_Cliente]);
    echo json_encode(
        "Update",
   );

}else{
    $sentencia = $bd->prepare("INSERT INTO puja (Id_Subasta,Id_User,Puja,Fecha,Hora)
    VALUES(:Id_Subasta,:Id_User,:Puja,:Fecha,:Hora)");
    $resultado = $sentencia->execute([":Id_Subasta"=>$jsonPuja->Id_Subasta,
                                        ":Id_User"=>$jsonPuja->Id_Cliente,
                                        ":Puja"=>$jsonPuja->Puja,
                                        ":Fecha"=>$fechaActual,
                                        ":Hora"=>$HoraActual]);
    $resultadoUpdateSubasta1=$bd->prepare("UPDATE subasta 
                        SET PrecioMin=:PrecioMin , Comprador=:Comprador
                        WHERE Id=:Id");
    $resultadoUpdateSubasta1 -> execute([":PrecioMin"=>$jsonPuja->Puja, 
                        ":Id"=>$jsonPuja->Id_Subasta,
                        ":Comprador"=>$jsonPuja->Id_Cliente]);
   echo json_encode(
        "Insert",
   );
}  
?>

