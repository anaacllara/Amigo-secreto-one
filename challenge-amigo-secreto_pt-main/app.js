//array para armazenar os nomes 
let lista=[];
let nomes;
function agregar_amigos(){
    nomes = document.getElementById('amigo');
    if(lista.includes(nome)){
        alert('O nome já existe, por favor digitar outro');
    }else if(nomes.value = ''){
        alert('Por favor, insira um nome');
    }else{
        lista.push(nomes);
    }
    limparCampo();
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
}
