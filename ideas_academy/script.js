const nome = document.querySelector('#name')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const xpAdc = document.querySelector('#infoAdicionais')


document.querySelector('.btn').addEventListener('click', function() {
    console.log(nome.value)
    array.push(nome.value)
    console.log(array)
    teste.innerText = 'oi'
})