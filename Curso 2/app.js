//let titulo = document.querySelector("h1");
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = 'Escolha o número secreto entre 1 e 10';

//function verificarChute () {
 //   console.log('o botão foi clicado');
//};

// Se codigos mudam pouca coisa no projeto pense em resumir e fazer que ele fique reutilizavel

let numeroListaSorteado = [];
let numeroMaximo = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTMl = texto;
}

function exibirTextoInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Chuta um número entre 1 e 10!");
}

exibirTextoInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroAleatorio) {
        exibirTextoNaTela("h1", "você acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mesagemtentativas = `Você acertou com ${tentativas} ${palavraTentativa} !`;
        exibirTextoNaTela("p", mesagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela("p", "O numero é maior");
        } else {
            exibirTextoNaTela("p", "O numero é menor");
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeNumeroElemnLista = numeroListaSorteado.length;
    
    if (quantidadeNumeroElemnLista == numeroMaximo) {
        numeroListaSorteado = [];
    }

    if (numeroListaSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numeroListaSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


function limparCampotexto () {
    chute = document.querySelector("input");
    chute.value = '';
}

function reiniciarJogo () {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampotexto();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}