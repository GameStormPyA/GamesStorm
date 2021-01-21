<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonSubasta= json_decode(file_get_contents("php://input"));
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


$sentencia = $bd->prepare("INSERT INTO subasta (PrecioMin,TiempoInicio,TiempoFin,HoraInicio,HoraFin,Estado,Id_Juego,Id_Plataforma)
VALUES (:PrecioMin,:TiempoInicio,:TiempoFin,:HoraInicio,:HoraFin,:Estado,:Id_Juego,:Id_Plataforma)");
$resultado = $sentencia->execute([":PrecioMin"=>$jsonSubasta->PrecioMin,
                                    ":TiempoInicio"=>$jsonSubasta->TiempoInicio,
                                    ":TiempoFin"=>$jsonSubasta->TiempoFin,
                                    ":HoraInicio"=>$jsonSubasta->HoraInicio,
                                    ":HoraFin"=>$jsonSubasta->HoraFin,
                                    ":Estado"=>$Estado,
                                    ":Id_Juego"=>$jsonSubasta->Id_Juego,
                                    ":Id_Plataforma"=>$jsonSubasta->Id_Plataforma
                                 ]);

echo json_encode([
    "resultado" => $resultado,
]);