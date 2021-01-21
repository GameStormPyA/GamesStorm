<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonCompraAccesorios= json_decode(file_get_contents("php://input"));
if (!$jsonCompraAccesorios) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

 
$resultadoExisteJuego=$bd->prepare("SELECT COUNT(*) 
                               FROM relacionaccesorio 
                               WHERE Id_Accesorios=:Id_Accesorios AND 
                                    Id_Plataforma=:Id_Plataforma AND 
                                    Stock>:Stock");
$resultadoExisteJuego -> execute([":Id_Accesorios"=>$jsonCompraAccesorios->Id_Accesorios,
                                ":Id_Plataforma"=>$jsonCompraAccesorios->Id_Plaforma,
                                ":Stock"=>$jsonCompraAccesorios->Cantidad]);

    if($resultadoExisteJuego->fetchColumn() < 1){
        echo json_encode(
             "NoStock",
        );
    }else{
        //Restar stock
        $resultadoUpdate=$bd->prepare("UPDATE relacionaccesorio 
                        SET Stock=Stock - :Stock 
                        WHERE Id_Accesorios=:Id_Accesorios AND Id_Plataforma=:Id_Plataforma");
        $resultadoUpdate -> execute([":Id_Accesorios"=>$jsonCompraAccesorios->Id_Accesorios,
                        ":Id_Plataforma"=>$jsonCompraAccesorios->Id_Plaforma,
                        ":Stock"=>$jsonCompraAccesorios->Cantidad]);
        //Guardar compra   
                     
        $sentencia = $bd->prepare("INSERT INTO compraraccesorios (Id_Accesorios,Id_User,Id_Plaforma,Precio,Edicion,Cantidad)
        VALUES (:Id_Accesorios,:Id_User,:Id_Plaforma,:Precio,:Edicion,:Cantidad)");
        $resultado = $sentencia->execute([":Id_Accesorios"=>$jsonCompraAccesorios->Id_Accesorios,
                                            ":Id_User"=>$jsonCompraAccesorios->Id_User,
                                            ":Id_Plaforma"=>$jsonCompraAccesorios->Id_Plaforma,
                                            ":Precio"=>$jsonCompraAccesorios->Precio,
                                            ":Edicion"=>$jsonCompraAccesorios->Edicion,
                                            ":Cantidad"=>$jsonCompraAccesorios->Cantidad]); 
       echo json_encode($resultado);  
    }      
    }      
?>
