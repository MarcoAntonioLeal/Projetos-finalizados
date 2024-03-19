//Formulário
const nome = document.querySelector('#name')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const xpAdc = document.querySelector('#infoAdicionais')

const areaAtuacao = document.querySelectorAll('#area')
areaAtuacao.forEach((element) => {
    element.addEventListener('click', (evento) => {
        evento.currentTarget.value
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

const listaLinguas = document.createElement('li')
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
    listaExperiencia.innerText = 'Experiência profissional: ' + xpAdc

    ulPrincipal.appendChild(listaAtuacao)
    ulPrincipal.appendChild(listaLinguas)
})