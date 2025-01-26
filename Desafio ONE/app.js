//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let addAmigo = document.querySelector(`input`);
    let nomes = addAmigo.value.trim();

    if (nomes == '') {
        alert(`O campo está vazio`);
        return;
    }

    amigos.push(nomes);
    addAmigo.value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i <amigos.length; i++) {
        let item = document.createElement(`li`);
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione alguns nomes antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    let elementoNomeSorteado = document.getElementById('resultado');
    elementoNomeSorteado.textContent = `Nome sorteado: ${nomeSorteado}`;
}