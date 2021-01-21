<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$Comentario = $bd->query("SELECT comentariojuego.Comentario ,
                                 juego.Id AS Id_Juego ,
                                 juego.Nombre as Nombre_Juego , 
                                 user.Id as Id_User, 
                                 user.Nombre as Nombre_User
                        FROM comentariojuego , juego ,user 
                        WHERE comentariojuego.Id_Juego=juego.Id AND 
                                 comentariojuego.Id_User=user.Id ");
$Resultado = $Comentario->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>