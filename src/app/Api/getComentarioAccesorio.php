<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$Comentario = $bd->query("SELECT comentarioaccesorio.Comentario ,
                                 accesorios.Id AS Id_Accesorio ,
                                 accesorios.Nombre as Nombre_Accesorio , 
                                 user.Id as Id_User, 
                                 user.Nombre as Nombre_User
                        FROM comentarioaccesorio , accesorios ,user 
                        WHERE comentarioaccesorio.Id_Accesorios=accesorios.Id AND 
                                comentarioaccesorio.Id_User=user.Id ");
$Resultado = $Comentario->fetchAll(PDO::FETCH_OBJ);
echo json_encode($Resultado);
?>