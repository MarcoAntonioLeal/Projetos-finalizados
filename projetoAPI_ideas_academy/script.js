// Saídas
const nomeEstado = document.querySelector('#estado')
const temperatura = document.querySelector('#temperatura')
const previsaoTempo = document.querySelector('#previsaoTemp')
const previsaoIcon = document.querySelector('#previsaoIcon')
const umidadeRelativa = document.querySelector('#umidade')
const flag = document.querySelector('#flagEstado')

// API
const key = 'ba438284fa602652dd54444ff2b38918'

async function infoEstado(estado) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${estado}&appid=${key}&lang=pt_br&units=metric`).then(result => result.json())

    dadosDosEstados(dados)
}

function dadosDosEstados(dados) {

    nomeEstado.innerText = dados.name
    
    temperatura.innerText = `Temperatura: ${Number(dados.main.temp_max).toFixed(0)}°C`

    previsaoTempo.innerText = dados.weather[0].description

    previsaoIcon.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`

    umidadeRelativa.innerText = `Umidade: ${dados.main.humidity}%`
}

// flag
const bandeira = document.querySelector('#flag')

function adicionarBandeira(bandeiraDoEstado) {
    return `img/${bandeiraDoEstado}.png`
}

// evento
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        infoEstado(button.value)

        bandeira.src = adicionarBandeira(button.value)
    })
})