<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonComentarioJuego= json_decode(file_get_contents("php://input"));
if (!$jsonComentarioJuego) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

    $resultadoExiste=$bd->prepare("SELECT COUNT(*) FROM comentariojuego WHERE Id_Juego=:Id_Juego AND Id_User=:Id_User");
    $resultadoExiste -> execute([":Id_Juego"=>$jsonComentarioJuego->Id_Juego,
                                ":Id_User"=>$jsonComentarioJuego->Id_User]);
    if($resultadoExiste->fetchColumn() > 0){
        echo json_encode(
             "Existe",
        );
    }else{
        $sentencia = $bd->prepare("INSERT INTO comentariojuego (Id_Juego,Id_User,Comentario)
                                    VALUES (:Id_Juego,:Id_User,:Comentario)");
        $resultado = $sentencia->execute([":Id_Juego"=>$jsonComentarioJuego->Id_Juego,
                                    ":Id_User"=>$jsonComentarioJuego->Id_User,
                                    ":Comentario"=>$jsonComentarioJuego->Comentario,]);
        echo json_encode([
            "resultado" => $resultado,
        ]);
    }  
     
?>

