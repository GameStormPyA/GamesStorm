<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonAccesorios = json_decode(file_get_contents("php://input"));
if (!$jsonAccesorios) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("SELECT Id, Nombre FROM Categoria");
$resultado -> execute();
    while($item = $resultado ->fetch(PDO::FETCH_ASSOC)){
        if($jsonAccesorios->Categoria == $item['Nombre']){
           $sentencia = $bd->prepare("UPDATE Accesorios 
                            SET Nombre=:Nombre , Descripcion=:Descripcion ,Id_Categoria=:IdCategoria , Portada=:Portada
                            WHERE Id=:IdAccesorio_1 ;
                            UPDATE RelacionAccesorio 
                            SET Precio=:Precio, Edicion=:Edicion, Stock=:Stock
                            WHERE Id_Accesorios=:Id_Accesorios AND Id_Plataforma=:Id_Plataforma ;");
            $resultado1 = $sentencia->execute([":IdAccesorio_1"=>$jsonAccesorios->Id_Accesorios,":Nombre"=>$jsonAccesorios->Nombre,":Descripcion"=>$jsonAccesorios->Descripcion,":IdCategoria"=>$item['Id'],":Portada"=>$jsonAccesorios->Portada ,
            ":Id_Accesorios"=>$jsonAccesorios->Id_Accesorios,":Id_Plataforma"=>$jsonAccesorios->Id_Plataforma,":Precio"=>$jsonAccesorios->Precio,":Edicion"=>$jsonAccesorios->Edicion,":Stock"=>$jsonAccesorios->Stock]);      
        }
    }   
echo json_encode($resultado1);
