let formularios = document.querySelector("#formularios");
let dadosSalvos = [];
let generoM = document.querySelector("#masc");
let generoF = document.querySelector("#fem");

function limpar() {
    dadosSalvos = [];
    limparTabela(); // Limpa o conteúdo da tabela
}

// function ligacaoPHP() {
//     console.log(dadosSalvos);

//     $.ajax({
//         url: 'controller.php',
//         method: 'POST',
//         data: { dados: JSON.stringify(dadosSalvos) }, // Enviar os dados como uma string JSON
//         success: function(response) {
//             // Manipular a resposta da requisição aqui
//             console.log('FUNCIONOU');
//         },
//         error: function(error) {
//             // Lidar com erros aqui
//             console.log('NÃO FUNCIONOU');
//         }
//     });
//}

function salvar() {
    
    let nome = formularios.form1.value;
    let telefone = formularios.form2.value;
    let email = formularios.form3.value;
    let genero = "";

    if (generoM.checked) {
        genero = "Masculino";
    } else if (generoF.checked) {
        genero = "Feminino";
    }

    let dados = {
        nome: nome,
        telefone: telefone,
        email: email,
        genero: genero
    };

    dadosSalvos.push(dados);
    console.log(dados);

    $.ajax({
        url: 'controller.php',
        method: 'POST',
        data: { dados: JSON.stringify(dadosSalvos) },
        success: function(response) {
            console.log('Dados salvos:', response);
        },
        error: function(error) {
            console.log('Erro ao salvar os dados.');
        }
    });
    

    return dados;
}

function excluirTudo() {
    $.ajax({
        url: 'controller.php',
        method: 'POST',
        data: { excluir_tudo: true },
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log('Erro ao excluir os dados.');
        }
    });
}
// function visualiza() {
//     let textodoAlert1 = '';
//     let textodoAlert2 = '';
//     let textodoAlert3 = '';

//     for (let i = 0; i < dadosSalvos.length; i++) {
//         textodoAlert1 += `${dadosSalvos[i].nome}, `;
//         textodoAlert2 += `${dadosSalvos[i].telefone}, `;
//         textodoAlert3 += `${dadosSalvos[i].email}, `;
//     }

//     formularios.form1.value = textodoAlert1;
//     formularios.form2.value = textodoAlert2;
//     formularios.form3.value = textodoAlert3;
// }

$('.form2').mask('(00) 00000-0000');

function buscarDados() {
    let tabela = document.getElementById("minha-tabela");
    limparTabela(); // Limpa o conteúdo anterior da tabela

    $.ajax({
        url: 'controller.php',
        method: 'POST',
        data: { buscar_dados: true }, // Enviar uma flag para indicar a busca de dados
        success: function(response) {
            // Manipular a resposta da requisição aqui
            tabela.innerHTML = response;
        },
        error: function(error) {
            // Lidar com erros aqui
            console.log('Erro ao buscar os dados.');
        }
    });
}

function limparTabela() {
    let tabela = document.getElementById("minha-tabela");
    while (tabela.firstChild) {
        tabela.removeChild(tabela.firstChild);
    }
}


