<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id_Juego"]) && empty($_GET["Id_User"])) {
    exit("No hay id de Juego o Usuario");
}
$Id_Accesorio = $_GET["Id_Accesorio"];
$Id_User = $_GET["Id_User"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT comentarioaccesorio.Comentario ,
                                    accesorios.Id AS Id_Accesorio ,
                                    accesorios.Nombre as Nombre_Accesorio , 
                                    user.Id as Id_User, 
                                    user.Nombre as Nombre_User
                            FROM comentarioaccesorio , accesorios ,user 
                            WHERE comentarioaccesorio.Id_Accesorios=accesorios.Id AND 
                                    comentarioaccesorio.Id_User=user.Id AND 
                                    comentarioaccesorio.Id_Accesorios=:Id_Accesorios AND 
                                    comentarioaccesorio.Id_User=:Id_User");
                            
$sentencia->execute([":Id_Accesorios"=>$Id_Accesorio,
                    ":Id_User"=>$Id_User]);
$Accesorio = $sentencia->fetchObject();
echo json_encode($Accesorio);