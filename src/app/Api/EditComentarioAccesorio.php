<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonComentarioAccesorio = json_decode(file_get_contents("php://input"));
if (!$jsonComentarioAccesorio) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$resultado=$bd->prepare("UPDATE comentarioaccesorio 
                        SET  Comentario=:Comentario
                        WHERE Id_Accesorios=:Id_Accesorios AND Id_User=:Id_User");
$resultado -> execute([":Comentario"=>$jsonComentarioAccesorio->Comentario,
                        ":Id_Accesorios"=>$jsonComentarioAccesorio->Id_Accesorio,
                        ":Id_User"=>$jsonComentarioAccesorio->Id_User]);
echo json_encode($resultado);