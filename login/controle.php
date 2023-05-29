<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cadastro";
$port = 3306;
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

if (isset($_POST['dados'])) {
  // Obter os dados enviados pela requisição AJAX
  $dados = json_decode($_POST['dados'], true);
  $usuario = $dados[0]['usuario'];
  $senha = $dados[0]['senha'];

  // Consultar o banco de dados para verificar se o usuário existe
  $sql = "SELECT * FROM login WHERE usuario = '$usuario' AND senha = '$senha'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // O usuário existe
    echo json_encode(true);
  } else {
    // O usuário não existe
    echo json_encode(false);
  }
}

$conn->close();
?>
