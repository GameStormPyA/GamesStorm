<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id_Juego"]) && empty($_GET["Id_User"])) {
    exit("No hay id de Juego o Usuario");
}
$Id_Juego = $_GET["Id_Juego"];
$Id_User = $_GET["Id_User"];
$Id_Plaforma = $_GET["Id_Plaforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT comprarjuego.Precio ,
                            comprarjuego.Edicion ,
                            comprarjuego.Cantidad ,
                            user.Nombre AS Nombre_User,
                            plataforma.Nombre AS Nombre_Plaforma,
                            juego.Nombre AS Nombre_Juego,
                            juego.Id AS Id_Juego,
                            plataforma.Id AS Id_Plaforma,
                            user.Id AS Id_User
                        FROM comprarjuego , user ,plataforma , juego
                        WHERE comprarjuego.Id_Juego=juego.Id AND
                            comprarjuego.Id_User=user.Id AND 
                            comprarjuego.Id_Plaforma=plataforma.Id AND
                            comprarjuego.Id_Juego=:Id_Juego AND
                            comprarjuego.Id_User=:Id_User AND 
                            comprarjuego.Id_Plaforma=:Id_Plaforma");
                            
$sentencia->execute([":Id_Juego"=>$Id_Juego,
                    ":Id_User"=>$Id_User,
                    ":Id_Plaforma"=>$Id_Plaforma]);
$Accesorio = $sentencia->fetchObject();
echo json_encode($Accesorio);