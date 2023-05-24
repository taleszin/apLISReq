
<?php
include_once("controller.php");
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário Simples</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
</head>
<body>
    <div id="tudo">
        <h1>Cadastro</h1>
        <div class="forms">
            <form id="formularios">
                <label for="form1">Nome:</label>
                <input type="text" name="form1" class="form1" autocomplete="off">
                <label for="form2">Contato:</label>
                <input type="text" name="form2" class="form2" autocomplete="off">
                <label for="form3">Email:</label>
                <input type="text" name="form3" class="form3" autocomplete="off"> 
                <input type="hidden" name="form4" class="form4" autocomplete="off">
                <label for="form5" class="label-maior">Maior de 18?</label>
                <input type="checkbox" name="form5" class="form5" id="maior" value="1" autocomplete="off">
                <input type="reset" value="Limpar campos" class="btn" id = "botaoReset">
            </form>
        </div>
        <div class="radio">
            <label for="masc">
                <input type="radio"  name="gender" id="masc" >
                Masculino
            </label>
            <label for="fem">
                <input type="radio" name="gender" id="fem">
                Feminino
            </label>
        </div>
        <div class="botoes">
            <input type="button" value="Salvar" class="btn" onclick="salvar()">
            <input type="button" value="Visualizar" class="btn" onclick="visualizar()">
            <input type="button" value="Excluir tudo" class="btn" onclick="excluirTudo()">
            <input type="button" value="Ver tabela" class="btn" onclick="buscarDados()">
        </div>
            <table id="minha-tabela">
                <tbody>
                </tbody>
            </table>
    </div>

    <p id="printDados"></p>
    <script src="script.js"></script>
    <script>
        $(document).ready(function() {
            buscarDados();
        });
        const form = document.getElementById('formularios'); 
form.addEventListener('reset', function() { 
    //limpar também o input hidden.
    document.querySelector('.form4').value = '';
});
    </script>
</body>
</html>