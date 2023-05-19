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
        $genero = $conn->real_escape_string($item['genero']);
        $sql = "INSERT INTO usuarios (nome, telefone, email, genero) VALUES ('$nome', '$telefone', '$email', '$genero')";

        if ($conn->query($sql) === true) {
            echo "Dados salvos:";
            echo json_encode($dados);
        } else {
            echo "Erro ao salvar os dados no banco de dados: " . $conn->error;
        }
    }

    $conn->close();
} else if (isset($_POST['buscar_dados'])) {
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

    // Buscar os dados na tabela de usuários
    $sql = "SELECT * FROM usuarios";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Construir a tabela HTML
        $html = '<table id="minha-tabela">';
        $html .= '<thead>';
        $html .= '<tr>';
        $html .= '<th>Nome</th>';
        $html .= '<th>Telefone</th>';
        $html .= '<th>E-mail</th>';
        $html .= '<th>Gênero</th>';
        $html .= '</tr>';
        $html .= '</thead>';
        $html .= '<tbody>';
        
        while ($row = $result->fetch_assoc()) {
            $html .= '<tr>';
            $html .= '<td>' . $row["nome"] . '</td>';
            $html .= '<td>' . $row["telefone"] . '</td>';
            $html .= '<td>' . $row["email"] . '</td>';
            $html .= '<td>' . $row["genero"] . '</td>';
            $html .= '</tr>';
        }
        
        $html .= '</tbody>';
        $html .= '</table>';
        
        echo $html;
    } else {
        echo "Nenhum dado encontrado na tabela.";
    }

    $conn->close();
} else if (isset($_POST['excluir_tudo'])) {
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

    // Excluir todos os dados da tabela de usuários
    $sql = "DELETE FROM usuarios";

    if ($conn->query($sql) === true) {
        echo "Todos os dados foram excluídos com sucesso.";
    } else {
        echo "Erro ao excluir os dados do banco de dados: " . $conn->error;
    }

    $conn->close();
} else {
    echo 'Nenhum dado recebido.';
}
?>
