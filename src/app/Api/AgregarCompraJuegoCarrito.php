<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonCompraJuego= json_decode(file_get_contents("php://input"));
if (!$jsonCompraJuego) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

 
$resultadoExisteJuego=$bd->prepare("SELECT COUNT(*) 
                               FROM relacionjuego 
                               WHERE Id_Juego=:Id_Juego AND 
                                    Id_Plataforma=:Id_Plataforma AND 
                                    Stock>:Stock");
$resultadoExisteJuego -> execute([":Id_Juego"=>$jsonCompraJuego->Id_Juego,
                                ":Id_Plataforma"=>$jsonCompraJuego->Id_Plaforma,
                                ":Stock"=>$jsonCompraJuego->Cantidad]);
                                
    if($resultadoExisteJuego->fetchColumn() < 1){
        echo json_encode(
             "NoStock",
        );
    }else{
        //Restar stock
        $resultadoUpdate=$bd->prepare("UPDATE relacionjuego 
                        SET Stock=Stock - :Stock 
                        WHERE Id_Juego=:Id_Juego AND Id_Plataforma=:Id_Plataforma");
        $resultadoUpdate -> execute([":Id_Juego"=>$jsonCompraJuego->Id_Juego,
                        ":Id_Plataforma"=>$jsonCompraJuego->Id_Plaforma,
                        ":Stock"=>$jsonCompraJuego->Cantidad]);

        //Guardar compra                
        $sentencia = $bd->prepare("INSERT INTO comprarjuego (Id_Juego,Id_User,Id_Plaforma,Precio,Edicion,Cantidad)
        VALUES (:Id_Juego,:Id_User,:Id_Plaforma,:Precio,:Edicion,:Cantidad)");
        $resultado = $sentencia->execute([":Id_Juego"=>$jsonCompraJuego->Id_Juego,
                                            ":Id_User"=>$jsonCompraJuego->Id_User,
                                            ":Id_Plaforma"=>$jsonCompraJuego->Id_Plaforma,
                                            ":Precio"=>$jsonCompraJuego->Precio,
                                            ":Edicion"=>$jsonCompraJuego->Edicion,
                                            ":Cantidad"=>$jsonCompraJuego->Cantidad]);
        echo json_encode($resultado);          
    }      
?>
