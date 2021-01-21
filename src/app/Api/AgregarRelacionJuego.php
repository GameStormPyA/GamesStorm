<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonRelacionJuego= json_decode(file_get_contents("php://input"));
if (!$jsonRelacionJuego) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$resultadoExiste=$bd->prepare("SELECT COUNT(*) FROM relacionjuego WHERE Id_Juego=:Id_Juego AND Id_Plataforma=:Id_Plataforma");
    $resultadoExiste -> execute([":Id_Juego"=>$jsonRelacionJuego->Id_Juego,
                                ":Id_Plataforma"=>$jsonRelacionJuego->Id_Plataforma]);
    if($resultadoExiste->fetchColumn() > 0){
        echo json_encode(
             "Existe",
        );
    }else{
        $sentencia = $bd->prepare("INSERT INTO relacionjuego (Id_Juego,Id_Plataforma,Precio,Edicion,Stock)
        VALUES (:Id_Juego,:Id_Plataforma,:Precio,:Edicion,:Stock)");
        $resultado = $sentencia->execute([":Id_Juego"=>$jsonRelacionJuego->Id_Juego,
                                            ":Id_Plataforma"=>$jsonRelacionJuego->Id_Plataforma,
                                            ":Precio"=>$jsonRelacionJuego->Precio,
                                            ":Edicion"=>$jsonRelacionJuego->Edicion,
                                            ":Stock"=>$jsonRelacionJuego->Stock]);
        echo json_encode([
            "resultado" => $resultado,
        ]);
    }  
     
?>
