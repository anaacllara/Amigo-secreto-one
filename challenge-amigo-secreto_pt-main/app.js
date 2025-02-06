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
    for(let i = 1; i < amigos.length; i++){
    lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// sortear amigos 
function sortearAmigo(){
    let index;
    let amigoSorteado;
    let resultado;
    if(amigos.lenght > 0){
        index = Math.floor(Math.random()* amigos.length +1);
        amigoSorteado = amigos[index];
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
    }else{
        adicionarAmigo();
    }
}
