<?php
$dados = isset($_POST['dados']) ? json_decode($_POST['dados'], true) : null;

if ($dados) {
    // Conectar ao banco de dados
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cadastro";
    $port = 3306;
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar a conexão
    if ($conn->connect_error) {
        die("Erro na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Inserir os dados na tabela de usuários
    foreach ($dados as $item) {
        $nome = $conn->real_escape_string($item['nome']);
        $telefone = $conn->real_escape_string($item['telefone']);
        $email = $conn->real_escape_string($item['email']);

        $sql = "INSERT INTO usuarios (nome, telefone, email) VALUES ('$nome', '$telefone', '$email')";

        if ($conn->query($sql) === true) {
            echo "Dados salvos:";
            echo json_encode($dados);
        } else {
            echo "Erro ao salvar os dados no banco de dados: " . $conn->error;
        }
    }

    $conn->close();
} else {
    echo 'Nenhum dado recebido.';
}
?>