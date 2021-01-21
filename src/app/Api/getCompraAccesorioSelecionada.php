<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["Id_Accesorios"]) && empty($_GET["Id_User"]) && empty($_GET["Id_Plaforma"])) {
    exit("No hay id de Accesorio , Usuario o Plataforma");
}
$Id_Accesorios = $_GET["Id_Accesorios"];
$Id_User = $_GET["Id_User"];
$Id_Plaforma = $_GET["Id_Plaforma"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT compraraccesorios.Precio ,
                            compraraccesorios.Edicion ,
                            compraraccesorios.Cantidad ,
                            user.Nombre AS Nombre_User,
                            plataforma.Nombre AS Nombre_Plaforma,
                            accesorios.Nombre AS Nombre_Accesorios,
                            accesorios.Id AS Id_Accesorios,
                            plataforma.Id AS Id_Plaforma,
                            user.Id AS Id_User
                        FROM compraraccesorios , user ,plataforma , accesorios
                        WHERE compraraccesorios.Id_Accesorios=accesorios.Id AND
                            compraraccesorios.Id_User=user.Id AND 
                            compraraccesorios.Id_Plaforma=plataforma.Id AND
                            compraraccesorios.Id_Accesorios=:Id_Accesorios AND
                            compraraccesorios.Id_User=:Id_User AND 
                            compraraccesorios.Id_Plaforma=:Id_Plaforma");
                            
$sentencia->execute([":Id_Accesorios"=>$Id_Accesorios,
                    ":Id_User"=>$Id_User,
                    ":Id_Plaforma"=>$Id_Plaforma]);
$Accesorio = $sentencia->fetchObject();
echo json_encode($Accesorio);