<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonComentarioJuego = json_decode(file_get_contents("php://input"));
if (!$jsonComentarioJuego) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("UPDATE comentariojuego 
                        SET  Comentario=:Comentario
                        WHERE Id_Juego=:Id_Juego AND Id_User=:Id_User");
$resultado -> execute([":Comentario"=>$jsonComentarioJuego->Comentario,
                        ":Id_Juego"=>$jsonComentarioJuego->Id_Juego,
                        ":Id_User"=>$jsonComentarioJuego->Id_User]);
echo json_encode($resultado);