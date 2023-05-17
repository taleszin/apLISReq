<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "cadastro";
$port = 3306;
try {
    $conn = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $user, $pass);
    echo "conexão realizada com sucesso";
} catch (PDOException $err) {
    echo "deu erro";
}
?>