//array para armazenar os nomes 
let amigos = [];
function adicionarAmigo() {
    let inputElement = document.getElementById('amigo');
    let nome = inputElement.value.trim();

    if (!nome) {
        alert('Por favor, insira um nome');
        return;
    }

    if (amigos.includes(nome)) {
        alert('O nome já existe, por favor digite outro');
        return;
    }

    amigos.push(nome);
    console.log(amigos);
    atualizarAmigos();
    limparCampo();
}


function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

// atualizar lista de amigos 
function atualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li')
        li.textContent = amigos[i]
        lista.appendChild(li)
    }
}

// sortear amigos 
function sortearAmigo() {
    if (amigos == [] || amigos.length == 0) {
        alert('Por favor, adicione um nome antes de sortear')
    } else {
        const index = Math.floor(Math.random() * amigos.length)
        const amigoSecreto = amigos[index]

        const ul = document.getElementById('resultado')
        ul.innerHTML = ''

        const li = document.createElement('li')
        li.textContent = `Seu amigo secreto sorteado é: ${amigoSecreto}`
        ul.appendChild(li)
        dispararConfete();
        amigos = [];
        atualizarAmigos();
    }
}

function dispararConfete() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };
    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}