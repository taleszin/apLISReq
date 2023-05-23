<?php
include 'config.php';
$dados = isset($_POST['dados']) ? json_decode($_POST['dados'], true) : null;
if ($dados) {
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
} else if (isset($_POST['buscar_dados'])) {
    // Buscar os dados na tabela de usuários
    $sql = "SELECT * FROM usuarios"; //consulta sql
    $result = $conn->query($sql); // Executa a consulta SQL armazenada na variável $sql e armazena o resultado na variável $result
    if ($result->num_rows > 0) {
        // gerando a tabela HTML
        $html = '<table id="minha-tabela">';
        $html .= '<thead>';
        $html .= '<tr>';
        $html .= '<th>Nome</th>';
        $html .= '<th>Telefone</th>';
        $html .= '<th>E-mail</th>';
        $html .= '<th>Gênero</th>';
        $html .= '<th>ID</th>';
        $html .= '<th>Ação</th>'; 
        $html .= '</tr>';
        $html .= '</thead>';
        $html .= '<tbody>';

        while ($row = $result->fetch_assoc()) {
            $html .= '<tr>';
            $html .= '<td>' . $row["nome"] . '</td>';
            $html .= '<td>' . $row["telefone"] . '</td>';
            $html .= '<td>' . $row["email"] . '</td>';
            $html .= '<td>' . $row["genero"] . '</td>';
            $html .= '<td>' . $row["id"] . '</td>';
            $html .= '<td><button class="editar-btn" onclick="editar(' . $row["id"] . ')">Editar</ button></td>'; // Botão de editar recebe o ID do usuário como parametro
            $html .= '<td><button class="excluir-btn" onclick="excluirIndividual(' . $row["id"] . ')">Excluir</button></td>';
            $html .= '</tr>';
        }
        $html .= '</tbody>';
        $html .= '</table>';

        echo $html;
    } else {
        echo "Nenhum dado encontrado na tabela.";
    }
} 
    else if (isset($_POST['excluir_tudo'])) {
    // Excluir todos os dados da tabela de usuários
    $sql = "DELETE FROM usuarios";
    if ($conn->query($sql) === true) {
        $sql = "ALTER TABLE usuarios AUTO_INCREMENT = 1";
        $conn->query($sql);
        echo "Todos os dados foram excluídos com sucesso.";
    } else {
        echo "Erro ao excluir os dados do banco de dados: " . $conn->error;
    }
}

else if (isset($_POST['excluir_usuario'])) {

    $id = $_POST['id'];
    $sql = "DELETE FROM usuarios WHERE ID = $id";
    if ($conn->query($sql) === true) {
        echo "Todos os dados foram excluídos com sucesso.";
    } else {
        echo "Erro ao excluir os dados do banco de dados: " . $conn->error;
    }
}
else if (isset($_GET['editar_usuario']) && isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM usuarios WHERE ID = $id";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    } else {
        echo "Nenhum dado encontrado para o ID fornecido.";
    }
}
 else {
    echo 'Nenhum dado recebido.';
}
$conn->close();
?>