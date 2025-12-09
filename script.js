const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const telefone = '5587981361258';

const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
const msgFormatada = encodeURIComponent(texto)

const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`

window.open(url, '_blank')