<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonRelacionAccesorio= json_decode(file_get_contents("php://input"));
if (!$jsonRelacionAccesorio) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$resultadoExiste=$bd->prepare("SELECT COUNT(*) FROM relacionaccesorio WHERE Id_Accesorios=:Id_Accesorios AND Id_Plataforma=:Id_Plataforma");
    $resultadoExiste -> execute([":Id_Accesorios"=>$jsonRelacionAccesorio->Id_Accesorio,
                                ":Id_Plataforma"=>$jsonRelacionAccesorio->Id_Plataforma]);
    if($resultadoExiste->fetchColumn() > 0){
        echo json_encode(
             "Existe",
        );
    }else{
        $sentencia = $bd->prepare("INSERT INTO relacionaccesorio (Id_Accesorios,Id_Plataforma,Precio,Edicion,Stock)
        VALUES (:Id_Accesorios,:Id_Plataforma,:Precio,:Edicion,:Stock)");
        $resultado = $sentencia->execute([":Id_Accesorios"=>$jsonRelacionAccesorio->Id_Accesorio,
                                            ":Id_Plataforma"=>$jsonRelacionAccesorio->Id_Plataforma,
                                            ":Precio"=>$jsonRelacionAccesorio->Precio,
                                            ":Edicion"=>$jsonRelacionAccesorio->Edicion,
                                            ":Stock"=>$jsonRelacionAccesorio->Stock]);
        echo json_encode([
            "resultado" => $resultado,
        ]);
    }  
     
?>
