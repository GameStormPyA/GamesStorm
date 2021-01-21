<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");

$jsonSubasta = json_decode(file_get_contents("php://input"));
if (!$jsonSubasta) {
    exit("No hay datos");
}
$bd = include_once "bd.php";

$Estado='0';
$FechaActual=date("Y-m-d h:i:sa");
$FechaInicio = $jsonSubasta->TiempoInicio." ".$jsonSubasta->HoraInicio;
$FechaFin = $jsonSubasta->TiempoFin." ".$jsonSubasta->HoraFin;

if( ($FechaActual>$FechaInicio) && ($FechaActual<$FechaFin) ){
    $Estado='1';
}else{
    $Estado='0';
}

$resultado=$bd->prepare("UPDATE subasta 
                        SET PrecioMin=:PrecioMin , TiempoInicio=:TiempoInicio ,HoraInicio=:HoraInicio , TiempoFin=:TiempoFin , HoraFin=:HoraFin , Estado=:Estado
                        WHERE Id=:Id");
$resultado -> execute([":PrecioMin"=>$jsonSubasta->PrecioMin,
                        ":TiempoInicio"=>$jsonSubasta->TiempoInicio,
                        ":HoraInicio"=>$jsonSubasta->HoraInicio,
                        ":TiempoFin"=>$jsonSubasta->TiempoFin,
                        ":HoraFin"=>$jsonSubasta->HoraFin,
                        ":Estado"=>$Estado,
                        ":Id"=>$jsonSubasta->Id]);
echo json_encode($resultado);
