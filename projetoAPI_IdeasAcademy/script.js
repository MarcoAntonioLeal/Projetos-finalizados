const state = document.querySelector('#states')

state.addEventListener('change', () => {
    weatherForecast(state.value)
})

async function weatherForecast(state) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${'ba438284fa602652dd54444ff2b38918'}&lang=pt_br&units=metric`).then(result => result.json())

    console.log(dados)
}