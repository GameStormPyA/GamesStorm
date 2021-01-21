
<?php

$contraseña = "iiBGRm7(/0FrnX?/";
$usuario = "id15967397_root";
$nombre_base_de_datos = "id15967397_gamestorm";
    try {
        return new PDO('mysql:host=localhost;dbname=' . $nombre_base_de_datos, $usuario, $contraseña);
    } catch (Exception $e) {
        echo "Ocurrió algo con la base de datos: " . $e->getMessage();
    }
?>