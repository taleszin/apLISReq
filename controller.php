<?php
// Verifica se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se os dados foram enviados
    if (isset($_POST['dados'])) {
        $dados = $_POST['dados'];

        // Converte os dados em formato JSON para uma string
        $dadosString = json_encode($dados);

        // Caminho para o arquivo de armazenamento
        $arquivo = 'dados.txt';

        // Abre o arquivo no modo de escrita
        $handle = fopen($arquivo, 'w');

        // Escreve os dados no arquivo
        fwrite($handle, $dadosString);

        // Fecha o arquivo
        fclose($handle);

        // Retorna uma resposta para o JavaScript indicando que os dados foram armazenados com sucesso
        echo json_encode(['success' => true]);
    } else {
        // Retorna uma resposta de erro caso os dados não tenham sido enviados
        echo json_encode(['error' => 'Dados não foram enviados']);
    }
} else {
    // Retorna uma resposta de erro caso a requisição não seja do tipo POST
    echo json_encode(['error' => 'Requisição inválida']);
}
?>
