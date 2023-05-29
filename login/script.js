// Variável global para armazenar os dados do login
var dadosSalvos = [];

function logar() {
  document.querySelector('#btnLogin').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores de login e senha
    var usuario = document.querySelector('#usuario').value;
    var senha = document.querySelector('#senha').value;

    // Criar um objeto com os dados do usuário
    var user = {
      usuario: usuario,
      senha: senha
    };

    // Armazenar os dados do usuário na variável global
    dadosSalvos.push(user);

    // Exemplo de exibição dos dados no console
    console.log(dadosSalvos);
    $.ajax({
        url: 'controle.php',
        method: 'POST',
        data: {
          buscar_dados: true,
          dados: JSON.stringify(dadosSalvos)
        },
        success: function(response) {
          console.clear();
          console.log('usuario existe:', response);
          limparDadosSalvos();
        },
        error: function(error) {
          console.log('Erro ao verificar o usuário:', error);
          alert("Ocorreu um erro ao verificar o usuário.");
        }
      });
    limparDadosSalvos();
  }); // <-- Adicione esta linha para fechar a função interna
  
}

// Chamar a função para armazenar os dados do usuário ao carregar a página
logar();

function limparDadosSalvos() {
  dadosSalvos = []; // Limpa o array de dados salvos no JavaScript
}


 