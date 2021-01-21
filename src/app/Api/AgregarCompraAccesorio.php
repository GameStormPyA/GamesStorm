<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonCompraAccesorio= json_decode(file_get_contents("php://input"));
if (!$jsonCompraAccesorio) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$resultadoExiste=$bd->prepare("SELECT COUNT(*) FROM relacionaccesorio WHERE Id_Accesorios=:Id_Accesorios AND Id_Plataforma=:Id_Plataforma AND Stock>0");
    $resultadoExiste -> execute([":Id_Accesorios"=>$jsonCompraAccesorio->Id_Accesorios,
                                ":Id_Plataforma"=>$jsonCompraAccesorio->Id_Plaforma]);
    if($resultadoExiste->fetchColumn() < 1){
        echo json_encode(
             "NoExiste",
        );
    }else{
        $sentencia = $bd->prepare("INSERT INTO compraraccesorios (Id_Accesorios,Id_User,Id_Plaforma,Precio,Edicion,Cantidad)
        VALUES (:Id_Accesorios,:Id_User,:Id_Plaforma,:Precio,:Edicion,:Cantidad)");
        $resultado = $sentencia->execute([":Id_Accesorios"=>$jsonCompraAccesorio->Id_Accesorios,
                                            ":Id_User"=>$jsonCompraAccesorio->Id_User,
                                            ":Id_Plaforma"=>$jsonCompraAccesorio->Id_Plaforma,
                                            ":Precio"=>$jsonCompraAccesorio->Precio,
                                            ":Edicion"=>$jsonCompraAccesorio->Edicion,
                                            ":Cantidad"=>$jsonCompraAccesorio->Cantidad]);
        echo json_encode([
            "resultado" => $resultado,
        ]);
    }  
     
?>
