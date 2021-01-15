<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$anuncio = $bd->query(
    "SELECT * FROM plataforma");
$anuncios = $anuncio->fetchAll(PDO::FETCH_OBJ);
echo json_encode($anuncios);
?>