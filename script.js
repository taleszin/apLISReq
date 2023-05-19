let formularios = document.querySelector("#formularios");
let dadosSalvos = [];
let generoM = document.querySelector("#masc");
let generoF = document.querySelector("#fem");

function limpar() {
    dadosSalvos = [];
    limparTabela(); // Limpa o conteúdo da tabela
}
function ligacaoPHP() {
    console.log(dadosSalvos);

    $.ajax({
        url: 'controller.php',
        method: 'POST',
        data: { dados: JSON.stringify(dadosSalvos) }, // Enviar os dados como uma string JSON
        success: function(response) {
            // Manipular a resposta da requisição aqui
            console.log('FUNCIONOU');
        },
        error: function(error) {
            // Lidar com erros aqui
            console.log('NÃO FUNCIONOU');
        }
    });
}

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

// document.querySelector(".btn2").addEventListener("click", function() {
//     let dados = salvar();
// });

// document.querySelector(".btn3").addEventListener("click", visualiza);

function verTabela() {
    let tabela = document.getElementById("minha-tabela");
    limparTabela(); // Limpa o conteúdo anterior da tabela

    for (let i = 0; i < dadosSalvos.length; i++) {
        let newRow = tabela.insertRow();
        let nomeCell = newRow.insertCell(0);
        let telefoneCell = newRow.insertCell(1);
        let emailCell = newRow.insertCell(2);
        let generoCell = newRow.insertCell(3);
        nomeCell.innerHTML = dadosSalvos[i].nome;
        telefoneCell.innerHTML = dadosSalvos[i].telefone;
        emailCell.innerHTML = dadosSalvos[i].email;
        generoCell.innerHTML = dadosSalvos[i].genero;
    }
}

function limparTabela() {
    let tabela = document.getElementById("minha-tabela");
    while (tabela.firstChild) {
        tabela.removeChild(tabela.firstChild);
    }
}


