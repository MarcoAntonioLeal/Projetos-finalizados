//Formulário entradas
const nome = document.querySelector('#name')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const xpAdc = document.querySelector('#infoAdicionais')

let areaAtuacao = ''
document.querySelectorAll('#area').forEach(element => {
    element.addEventListener('click', evento => {
        areaAtuacao = evento.currentTarget.value
    })
})

//botão
const botao = document.querySelector('#btn')

//Lista
const ulPrincipal = document.querySelector('#resultadoForm')

const listaNome = document.createElement('li')
listaNome.setAttribute('id', 'liNome')

const listaEmail = document.createElement('li')
listaEmail.setAttribute('id', 'liEmail')

const listaTelefone = document.createElement('li')
listaTelefone.setAttribute('id', 'liTelefone')

const listaExperiencia = document.createElement('li')
listaExperiencia.setAttribute('id', 'lixpAdc')

const listaAtuacao = document.createElement('li')
listaAtuacao.setAttribute('id', 'liAtuacao')

let listaLinguas = document.createElement('li')
listaLinguas.setAttribute('id', 'liLinguas')

//evento
botao.addEventListener('click', () => {

    ulPrincipal.appendChild(listaNome)
    listaNome.innerText = 'Nome: ' + nome.value

    ulPrincipal.appendChild(listaEmail)
    listaEmail.innerText = 'Email: ' + email.value

    ulPrincipal.appendChild(listaTelefone)
    listaTelefone.innerText = 'Telefone: ' + telefone.value

    ulPrincipal.appendChild(listaExperiencia)
    listaExperiencia.innerText = 'Experiência profissional: ' + xpAdc.value

    ulPrincipal.appendChild(listaAtuacao)
    listaAtuacao.innerText = 'Área de atuação: ' + areaAtuacao

    //linguas
    let idiomaIngles = ''
    document.querySelectorAll('input[name="ingles"]:checked').forEach(evento => {
        idiomaIngles = evento.value
    })
    let idiomaEspanhol = ''
    document.querySelectorAll('input[name="espanhol"]:checked').forEach(element => {
        idiomaEspanhol = element.value
    })

    let idiomaFrances = ''
    document.querySelectorAll('input[name="frances"]:checked').forEach(element => {
        idiomaFrances = element.value
    })

    let idiomaAlemao = ''
    document.querySelectorAll('input[name="alemao"]:checked').forEach(element => {
        idiomaAlemao = element.value
    })

    ulPrincipal.appendChild(listaLinguas)
    listaLinguas.innerHTML = `Inglês: ${idiomaIngles} <br> Espanhol: ${idiomaEspanhol} <br> Francês: ${idiomaFrances} <br> Alemão: ${idiomaAlemao}`

    nome.value = ''
    email.value = ''
    telefone.value = ''
    xpAdc.value = ''
})