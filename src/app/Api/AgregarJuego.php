<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonJuego= json_decode(file_get_contents("php://input"));
if (!$jsonJuego) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
/*
$PortadaPart = explode("\\", $jsonJuego->Portada);
$Portada="/assets/image/".$PortadaPart[2];

if(is_dir("imagenes/".$Portada)){

}else{
    mkdir("imagenes/".$Portada);
}

if(is_uploaded_file($_FILES['Portada']['tmp_name'])){ //Indica si el archivo fue subido mediante HTTP POST
    $nombreDirectorio="imagenes/".$Portada."/";
    $nombreFichero=$_FILES['Portada']['name'];
    $nombreCompleto=$nombreDirectorio.$nombreFichero;
    if(is_file($nombreCompleto)){ //Indica si el nombre de fichero es un fichero normal esto se hace si hay una que se llama igual
        echo $nombreFichero;
        $id=time();
        $nombreFoto=$id."-".$nombreFichero;
        $nombreCompleto=$nombreDirectorio.$nombreFoto;
    }
    move_uploaded_file($_FILES['Portada']['tmp_name'],$nombreCompleto);//Mueve un archivo subido a una nueva ubicación
}else{
    echo json_encode(
        "Existe",
   );
}
*/
$sentencia = $bd->prepare("INSERT INTO juego (Nombre,Descripcion,Lanzamiento,Portada,Video,EdadMin,Id_Genero)
VALUES (:Nombre,:Descripcion,:Lanzamiento,:Portada,:Video,:EdadMin,:Id_Genero)");
$resultado = $sentencia->execute([":Nombre"=>$jsonJuego->Nombre,
                                 ":Descripcion"=>$jsonJuego->Descripcion,
                                 ":Lanzamiento"=>$jsonJuego->Lanzamiento,
                                 ":Portada"=>"",
                                 ":Video"=>$jsonJuego->Video,
                                 ":EdadMin"=>$jsonJuego->EdadMin,
                                 ":Id_Genero"=>$jsonJuego->Id_Genero
                                 ]);
echo json_encode([
    "resultado" => $resultado,
]);