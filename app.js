//array para armazenar os nomes 
let amigos=[];
let nomes;
function adicionarAmigo(){
    nomes = document.getElementById('amigo').value;
    if(amigos.includes(nomes)){
        alert('O nome já existe, por favor digitar outro');
    }else if(nomes.value = ''){
        alert('Por favor, insira um nome');
    }else{
        amigos.push(nomes);
        console.log(amigos);
        limparCampo();
        atualizarAmigos();
    }
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
}

// atualizar lista de amigos 
function atualizarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i = 1; i < amigos.length; i++){
    lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// sortear amigos 
function sortearAmigo(){
    let index;
    let amigoSorteado;
    let resultado;
    if(amigos.lenght == 0){
       alert('A lista de amigos está vazia');
       return;
    }
    let sorteado = amigos[Math.floor(Math.random()* amigos.length)];
    document.getElementById('amigoSorteado').innerText = `Amigo sorteado: ${sorteado}`;
}
 