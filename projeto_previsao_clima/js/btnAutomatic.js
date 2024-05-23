const btnSearchAutomatic = document.querySelector('#automatic')

const divMap = document.querySelector('.map')
const divStates = document.querySelector('.states')
const divSearchAutomatic = document.querySelector('.searchAutomatic')
const inputSearch = document.querySelector('.inputSearch')

btnSearchAutomatic.addEventListener('click', () => {
    divMap.classList.toggle('mapReduce')
    divStates.classList.toggle('divReduce')
    divSearchAutomatic.classList.toggle('show')
    inputSearch.classList.toggle('hidden')
})

const cityAuto = document.querySelector('#cityAuto')

let quantityRepeat = '' 
document.querySelectorAll('#quantityRepeat').forEach(ev => {
    ev.addEventListener('change', () => {
        quantityRepeat = ev.value})
})

let intervalRepeat = '' 
document.querySelectorAll('#intervalRepeat').forEach(ev => {
    ev.addEventListener('change', () => {
        intervalRepeat = ev.value})
})

class auto {
    constructor() {
        this.city = cityAuto.value
        this.quantity = quantityRepeat
        this.interval = intervalRepeat
        
        let listAuto = document.querySelector('#ulAuto')
        let newLi = document.createElement('li')
        listAuto.appendChild(newLi)
              
        newLi.innerText = 
        `Cidade: ${cityAuto.value}
        Repetir: ${quantityRepeat}
        Intervalo de ${intervalRepeat}s`
    }
}
let arrayAuto = []

function timeout() {
    return setTimeout(() => {
        document.querySelectorAll('.span').forEach(elem => {
            elem.innerText = '' 
        })
    }, 1000 * 1.5)
}

function clearFields() {
    cityAuto.value = ''

    quantityRepeat = ''
    document.querySelectorAll('#quantityRepeat').forEach(ev => ev.value = '')

    intervalRepeat = '' 
    document.querySelectorAll('#intervalRepeat').forEach(ev => ev.value = '')

    cityAuto.focus()
}
    
const spanCity = document.querySelector('#spanCity')
const spanRepeat = document.querySelector('#spanRepeat')
const spanInterval = document.querySelector('#spanInterval')

const btnConfirm = document.querySelector('#btnConfirm')
const btnStart = document.querySelector('#startSearch')
const btnClearList = document.querySelector('#clearList')
    
btnConfirm.addEventListener('click', () => {
    if(cityAuto.value == '') {
        spanCity.innerText = '*Você não escolheu nenhuma cidade*'
        timeout()

    } else if(quantityRepeat == '') {
        spanRepeat.innerText = '*Você não escolheu nenhuma opção*'
        timeout()
        
    } else if(intervalRepeat == '') {
        spanInterval.innerText = '*Você não escolheu nenhuma opção*'
        timeout()
        
    } else {
        arrayAuto.push(new auto())
        console.log(arrayAuto) //Retirar

        if(arrayAuto.length == 3) {
            document.querySelector('#btnConfirm').setAttribute('disabled', 'true')
        }

        btnStart.removeAttribute('disabled')
        btnClearList.removeAttribute('disabled')

        clearFields()
    }
})

btnClearList.addEventListener('click', () => {
    document.querySelector('#ulAuto').innerText = ''

    btnStart.setAttribute('disabled', 'true')
    btnClearList.setAttribute('disabled', 'true')

    clearFields()
    arrayAuto = []
})