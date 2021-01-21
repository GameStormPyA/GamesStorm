<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$Consulta = $bd->query("SELECT comprarjuego.Precio ,
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
                            comprarjuego.Id_Plaforma=plataforma.Id ");
$Resultado = $Consulta->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>