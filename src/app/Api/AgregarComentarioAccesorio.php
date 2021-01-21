<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonComentarioAccesorio= json_decode(file_get_contents("php://input"));
if (!$jsonComentarioAccesorio) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

    $resultadoExiste=$bd->prepare("SELECT COUNT(*) FROM comentarioaccesorio WHERE Id_Accesorios=:Id_Accesorios AND Id_User=:Id_User");
    $resultadoExiste -> execute([":Id_Accesorios"=>$jsonComentarioAccesorio->Id_Accesorio,
                                ":Id_User"=>$jsonComentarioAccesorio->Id_User]);
    if($resultadoExiste->fetchColumn() > 0){
        echo json_encode(
             "Existe",
        );
    }else{
        $sentencia = $bd->prepare("INSERT INTO comentarioaccesorio (Id_Accesorios,Id_User,Comentario)
                                    VALUES (:Id_Accesorios,:Id_User,:Comentario)");
        $resultado = $sentencia->execute([":Id_Accesorios"=>$jsonComentarioAccesorio->Id_Accesorio,
                                    ":Id_User"=>$jsonComentarioAccesorio->Id_User,
                                    ":Comentario"=>$jsonComentarioAccesorio->Comentario,]);
        echo json_encode([
            "resultado" => $resultado,
        ]);
    }  
     
?>
