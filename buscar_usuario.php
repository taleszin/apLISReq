<?php
include 'config.php';
// Recebe os dados da requisição AJAX
if (isset($_POST['buscar_usuario']) && isset($_POST['id'])) {
    $id = $_POST['id'];

    // Aqui você pode realizar a busca do usuário no banco de dados ou em alguma outra fonte de dados

    // Supondo que você tenha obtido os dados do usuário com base no ID
    $dadosUsuario = array(
        'nome' => 'Nome do Usuário',
        'telefone' => 'Telefone do Usuário',
        'email' => 'Email do Usuário',
        'genero' => 'Gênero do Usuário'
    );

    // Envia os dados do usuário como resposta da requisição AJAX
    echo json_encode($dadosUsuario);
}
?>
