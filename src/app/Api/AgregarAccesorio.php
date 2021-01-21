<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonAccesorios = json_decode(file_get_contents("php://input"));
if (!$jsonAccesorios) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$sentencia = $bd->prepare("INSERT INTO `accesorios` ( `Nombre`, `Descripcion`, `Portada`, `Id_Categoria`)
VALUES(?,?,?,?);       
INSERT INTO `relacionaccesorio` (`Id_Accesorios`, `Id_Plataforma`, `Precio`, `Edicion`, `Stock`)
VALUES(LAST_INSERT_ID(),?,?,?,?);");
$resultado = $sentencia->execute([$jsonAccesorios->Nombre, $jsonAccesorios->Descripcion, $jsonAccesorios->Portada, $jsonAccesorios->Categoria, $jsonAccesorios->Id_Plataforma, $jsonAccesorios->Precio, $jsonAccesorios->Edicion, $jsonAccesorios->Stock]);

echo json_encode([
    "resultado" => $resultado,
]);