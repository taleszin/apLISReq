let formularios = document.querySelector("#formularios");
let dadosSalvos = []; //transforma os dados salvos em um array, ou seja, cada vez que clicar no botão salvar será gerado um novo objeto com os dados da pessoa.
let generoM = document.querySelector("#masc");
let generoF = document.querySelector("#fem");
function salvar(){
    let nome = formularios.form1;
    let telefone = formularios.form2;
    let email = formularios.form3;
    let genero = "";
    if (generoM.checked) {
        genero = "Masculino";
    } else if (generoF.checked) {
        genero = "Feminino";
    }
    
    // verificando se o nome, telefone ou email já foram cadastrados antes de adicioná-los ao array
    for (let i = 0; i < dadosSalvos.length; i++) {
       if (dadosSalvos[i].telefone === telefone.value) {
            alert("Telefone já cadastrado!");
            return;
        } else if (dadosSalvos[i].email === email.value) {
            alert("Email já cadastrado!");
            return;
        }
    }
    
    // adicionando os dados ao array caso não tenham sido cadastrados antes
    return {
        nome: nome.value,
        telefone: telefone.value,
        email: email.value,
        genero: genero
    };
}



function limpar(){
        dadosSalvos = [];
        formularios.form1.value = "";
        formularios.form2.value = "";
        formularios.form3.value = "";
    }
    


function visualiza(){
    let textodoAlert1 = '';
    let textodoAlert2 = '';
    let textodoAlert3 = '';
    
   /* for (let i = 0; i < dadosSalvos.length; i++) { //percorre todo o array dos dadosSalvos e lança um alert na tela
        textodoAlert += `Nome: ${dadosSalvos[i].nome}\nTelefone: ${dadosSalvos[i].telefone}\nEmail: ${dadosSalvos[i].email}\n\n`;
    } */
   // alert(textodoAlert);
     for (let i = 0; i < dadosSalvos.length; i++) { //percorre todo o array dos dadosSalvos e lança um alert na tela
        textodoAlert1 += `${dadosSalvos[i].nome}, `
        textodoAlert2 += `${dadosSalvos[i].telefone}, `
        textodoAlert3 += `${dadosSalvos[i].email}, `
    } 
   formularios.form1.value = textodoAlert1;
   formularios.form2.value = textodoAlert2;
   formularios.form3.value = textodoAlert3;
   
}
$('.form2').mask('(00) 00000-0000'); //mascara jquery telefone
document.querySelector(".btn2").addEventListener("click", function() { 
    let dados = salvar();
    dadosSalvos.push(dados); //toda vez que clicar no botão adiciona um novo objeto ao array.
});

document.querySelector(".btn3").addEventListener("click", visualiza);

function verTabela() {
    // Limpa o conteúdo da tabela antes de inserir os dados novamente
    let tabela = document.getElementById("minha-tabela");
    tabela.innerHTML = "";

    // Preenche a tabela com as informações salvas pelo usuário
    for (let i = 0; i < dadosSalvos.length; i++) {
        let newRow = tabela.insertRow(); //inserir linha na tabela
        let nomeCell = newRow.insertCell(0);
        let telefoneCell = newRow.insertCell(1);
        let emailCell = newRow.insertCell(2);
        let generoCell = newRow.insertCell(3); // nova célula adicionada
        nomeCell.innerHTML = dadosSalvos[i].nome;
        telefoneCell.innerHTML = dadosSalvos[i].telefone;
        emailCell.innerHTML = dadosSalvos[i].email;
        generoCell.innerHTML = dadosSalvos[i].genero; // conteúdo da nova célula
    }
    // Redireciona para a nova página html com a tabela.
}
function ligacaoPHP() {
    $.ajax({
      url: 'controller.php',
      method: 'POST',
      data: { dados: dadosSalvos },
      dataType: 'json',
      success: function(response) {
        // Manipular a resposta da requisição aqui
      },
      error: function(error) {
        // Lidar com erros aqui
      }
    });
  }
  
  
  