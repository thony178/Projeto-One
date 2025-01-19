//let titulo = document.querySelector("h1");
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = 'Escolha o número secreto entre 1 e 10';

//function verificarChute () {
 //   console.log('o botão foi clicado');
//};

// Se codigos mudam pouca coisa no projeto pense em resumir e fazer que ele fique reutilizavel

let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTMl = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Chuta um número entre 1 e 10, podendo chutar 1 vez!");

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Parabéns vc acertou!')
        exibirTextoNaTela("p", "você acertou");
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela('h1', "Tente de novo!");
            exibirTextoNaTela("p", "O numero é maior");
        } else {
            exibirTextoNaTela('h1', 'Tente de novo!');
            exibirTextoNaTela("p", "O numero é menor");
        }
    }
}


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
