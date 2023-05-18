<?php
$dados = isset($_POST['dados']) ? json_decode($_POST['dados'], true) : null;

if ($dados) {
    // Realize as ações desejadas com os dados recebidos aqui
    // Por exemplo, salvar os dados em um banco de dados

    // Exiba os dados salvos como resposta
    echo "Dados salvos:";
    echo json_encode($dados);
} else {
    echo 'Nenhum dado recebido.';
}
?>
