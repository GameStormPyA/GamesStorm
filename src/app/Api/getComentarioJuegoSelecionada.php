<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id_Juego"]) && empty($_GET["Id_User"])) {
    exit("No hay id de Juego o Usuario");
}
$Id_Juego = $_GET["Id_Juego"];
$Id_User = $_GET["Id_User"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT comentariojuego.Comentario ,
                                    juego.Id AS Id_Juego ,
                                    juego.Nombre as Nombre_Juego , 
                                    user.Id as Id_User, 
                                    user.Nombre as Nombre_User
                            FROM comentariojuego , juego ,user 
                            WHERE comentariojuego.Id_Juego=juego.Id AND 
                                    comentariojuego.Id_User=user.Id AND 
                                    comentariojuego.Id_Juego=:Id_Juego AND 
                                    comentariojuego.Id_User=:Id_User");
                            
$sentencia->execute([":Id_Juego"=>$Id_Juego,
                    ":Id_User"=>$Id_User]);
$Accesorio = $sentencia->fetchObject();
echo json_encode($Accesorio);