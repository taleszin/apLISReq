
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
    <link href="style.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
</head>
<body>
    <div class="forms">
        <form id="formularios">
            <label for="form1">Nome:</label>
            <input type="text" name="form1" class="form1" autocomplete="off"><br> <br>
            <label for="form2">Contato:</label>
            <input type="text" name="form2" class="form2" autocomplete="off"><br> <br>
            <label for="form3">Email:</label>
            <input type="text" name="form3" class="form3" autocomplete="off"> <br> <br>
            <input type="text" name="form4" class="form4" autocomplete="off"> <br> <br>
            <input type="reset" value="Limpar" class="btn1">
        </form>
    </div>
    <div class="radio">
        <label for="masc">
            <input type="radio" name="gender" id="masc">
            Masculino
        </label>
        <label for="fem">
            <input type="radio" name="gender" id="fem">
            Feminino
        </label>
    </div>
    <div class="botoes">
        <input type="button" value="Salvar" class="btn2" onclick="salvar()">
        <input type="button" value="Visualizar" class="btn3" onclick="visualizar()">
        <input type="button" value="Excluir tudo" class="btn4" onclick="excluirTudo()">
        <input type="button" value="Ver tabela" class="btn5" onclick="buscarDados()">
    </div>
    <div class="tabela">
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
    </script>
</body>
</html>