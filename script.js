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
// }

function salvar() {
    let nome = formularios.form1.value;
    let telefone = formularios.form2.value;
    let email = formularios.form3.value;
    let genero = "";
    let id = formularios.form4.value;
    if (generoM.checked) {
        genero = "Masculino";
    } else if (generoF.checked) {
        genero = "Feminino";
    }

    if (nome === "" || telefone === "" || email === "" || genero === "") {
        console.log("Preencha todos os campos antes de salvar.");
        alert("Preencha todos os campos antes de salvar.");
        return;
    }

    let dados = {
        nome: nome,
        telefone: telefone,
        email: email,
        genero: genero,
        id: id
    };

    if (dadosJaExiste(dados)) { // Verifica se os dados já existem no array
        console.log('Esse usuário já foi cadastrado.');
        alert('Esse usuário já foi cadastrado.');
        limparCampos(); // Limpa os campos de entrada de dados
        return;
    }
 

    if (id !== "") {
        let dadosExistente = dadosSalvos.find(dados => dados.id === id);
        if (dadosExistente) {
            console.log('Esse usuário já foi cadastrado.');
            alert('Esse usuário já foi cadastrado.');
            limparCampos(); // Limpa os campos de entrada de dados
            return;
        }
    }
    
    dadosSalvos.push(dados);
    console.log(dados);

    limparCampos(); // Limpa os campos de entrada de dados

    $.ajax({
        url: 'controller.php',
        method: 'POST',
        data: { dados: JSON.stringify(dadosSalvos) },
        success: function(response) {
            console.log('Dados salvos:', response);
            buscarDados();
            limparDadosSalvos();
        },
        error: function(error) {
            console.log('Erro ao salvar os dados.');
        }
    });
}

function limparCampos() {
    formularios.form1.value = '';
    formularios.form2.value = '';
    formularios.form3.value = '';
    generoM.checked = false;
    generoF.checked = false;
}

function excluirTudo() {
    $.ajax({
        url: 'controller.php',
        method: 'POST',
        data: { excluir_tudo: true },
        success: function(response) {
            console.log(response);
            limparDadosSalvos(); // Limpa os dados salvos no JavaScript
            buscarDados();
        },
        error: function(error) {
            console.log('Erro ao excluir os dados.');
        }
    });
}

function limparDadosSalvos() {
    dadosSalvos = []; // Limpa o array de dados salvos no JavaScript
}

// function visualiza() {
//     let textodoAlert1 = '';
//     let textodoAlert2 = '';
//     let textodoAlert3 = '';

//     formularios.form1.value = textodoAlert1;
//     formularios.form2.value = textodoAlert2;
//     formularios.form3.value = textodoAlert3;
// }

$('.form2').mask('(00) 00000-0000');

function buscarDados() {
    let tabela = document.getElementById("minha-tabela");
    limparTabela(); // Limpa o conteúdo anterior da tabela
    limparDadosSalvos();
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

function dadosJaExiste(dados) {
    for (let i = 0; i < dadosSalvos.length; i++) {
        if (dadosSalvos[i].nome === dados.nome &&
            dadosSalvos[i].telefone === dados.telefone &&
            dadosSalvos[i].email === dados.email &&
            dadosSalvos[i].genero === dados.genero) {
            return true; // Dados já existem no array
        }
    }
    return false; // Dados não existem no array
}

function editar(id) {
    console.log("ID do usuário a ser editado: " + id);
    $.ajax({
        url: 'controller.php',
        method: 'GET',
        data: { editar_usuario: true, id: id },
        success: function(response) {
            console.log(response);
            // Separar os valores da resposta usando a vírgula como delimitador
            var dadosUsuario = response.split(',');
            // Atribuir os valores dos dados do usuário aos campos de texto
            formularios.form1.value = dadosUsuario[0];
            formularios.form2.value = dadosUsuario[1];
            formularios.form3.value = dadosUsuario[2];
            formularios.form4.value = id; // Exibir o ID do banco de dados no campo form4
            // Preencher o botão de rádio de acordo com o gênero do usuário
            let genero = dadosUsuario[4]; // Atribuir o valor do gênero recuperado dos dados do usuário (4 pq é o quarto item no array de dados, 3 eh o id)
            if (genero === "Masculino") {
                generoM.checked = true; // Definir o botão de rádio masculino como selecionado
            } else if (genero === "Feminino") {
                generoF.checked = true; // Definir o botão de rádio feminino como selecionado
            }
        },
        error: function(error) {
            console.log('Erro ao buscar os dados do usuário.');
        }
    });
}


function excluir(id) {
    console.log("ID do usuário a ser excluído: " + id);
    $.ajax({
        url: 'controller.php',
        method: 'POST',
        data: { excluir_usuario: true, id: id },
        success: function(response) {
            console.log(response);
            limparDadosSalvos(); // Limpa os dados salvos no JavaScript
            buscarDados();
        },
        error: function(error) {
            console.log('Erro ao excluir os dados.');
        }
    });
}

// function update() {
//     let nome = formularios.form1.value;
//     let telefone = formularios.form2.value;
//     let email = formularios.form3.value;
//     let genero = "";

//     if (generoM.checked) {
//         genero = "Masculino";
//     } else if (generoF.checked) {
//         genero = "Feminino";
//     }

//     if (nome === "" || telefone === "" || email === "" || genero === "") {
//         console.log("Preencha todos os campos antes de atualizar.");
//         alert("Preencha todos os campos antes de atualizar.");
//         return;
//     }

//     let dadosAtualizados = {
//         nome: nome,
//         telefone: telefone,
//         email: email,
//         genero: genero
//     };

//     if (!dadosJaExiste(dadosAtualizados)) {
//         console.log('Esse usuário ainda não foi cadastrado.');
//         alert('Esse usuário ainda não foi cadastrado.');
//         limparCampos();
//         return;
//     }

//     let idUsuario = getIdUsuarioAtual();

//     $.ajax({
//         url: 'controller.php',
//         method: 'POST',
//         data: { atualizar_usuario: true, id: idUsuario, dados: JSON.stringify(dadosAtualizados) },
//         success: function(response) {
//             console.log(response);
//             limparCampos();
//             buscarDados();
//         },
//         error: function(error) {
//             console.log('Erro ao atualizar os dados do usuário.');
//         }
//     });
// }