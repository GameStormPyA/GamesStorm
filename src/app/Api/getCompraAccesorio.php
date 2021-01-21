<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$Consulta = $bd->query("SELECT compraraccesorios.Precio ,
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
                            compraraccesorios.Id_Plaforma=plataforma.Id ");
$Resultado = $Consulta->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>