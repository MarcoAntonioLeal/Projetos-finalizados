//header
const btnMenu = document.querySelector('#menu')
const divMenu = document.querySelector('.menu')

function menuBtnScreenSmall() {
    return (
    btnMenu.classList.toggle('actionQueryMenu'), 
    divMenu.classList.toggle('actionMenu')
)}

btnMenu.addEventListener('click', () => {
    menuBtnScreenSmall()
})

divMenu.addEventListener('mouseleave', () => {
    menuBtnScreenSmall()
})

//btn Pesquisa automática
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
const btnAuto = document.querySelector('#btnAuto')

btnAuto.addEventListener('click', () => {
    search.value = cityAuto.value
    btnSearch.click()
})


//Main
const btnHistory = document.querySelector('#history')

const iframeMaps = document.getElementsByTagName('iframe')[0]  

const forecastImg = document.querySelector('#imgForecast') 

const search = document.querySelector('#search')
const btnSearch = document.querySelector('#btnSearch')

const city = document.querySelector('#city')
const forecast = document.querySelector('#forecast')
const tempMax = document.querySelector('#tempMax')
const tempMin = document.querySelector('#tempMin')
const thermal = document.querySelector('#thermal')
const rain = document.querySelector('#rain')
const humidity = document.querySelector('#humidity')
const pressure = document.querySelector('#pressure')
const visibility = document.querySelector('#visibility')
const wind = document.querySelector('#wind')
const direcWind = document.querySelector('#direcWind')
const latitude = document.querySelector('#latitude')
const longitude = document.querySelector('#longitude')

function imageForecast(icon) {
    return `img/iconPrevisaoTempo/campoPrevisao/${icon}.png`
}

function locationCity(cityLocation) {
    return `https://www.google.com/maps?q=${cityLocation},%20Brasil&output=embed`
}

async function weatherForecast(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'ba438284fa602652dd54444ff2b38918'}&lang=pt_br&units=metric`).then(result => result.json())
    
    resultForecast(dados)
}

function resultForecast(dados) {
    if(!dados.name) {
        alert('Essa cidade não existe')
        location.reload()
    }
    city.innerText = dados.name
    forecastImg.src = imageForecast(dados.weather[0].icon) 
    tempMax.innerText = Number(dados.main.temp_max).toFixed(0) + '°C'
    tempMin.innerText = Number(dados.main.temp_min).toFixed(0) + '°C'
    thermal.innerText = Number(dados.main.feels_like).toFixed(0) + '°C'
    rain.innerText = dados.clouds.all + '%'
    humidity.innerText = dados.main.humidity + '%'
    pressure.innerText = dados.main.pressure + 'hPa'
    visibility.innerText = Number(dados.visibility / 1000).toFixed(0) + 'km'
    forecast.innerText = dados.weather[0].description
    wind.innerText = dados.wind.speed + 'm/s'
    direcWind.innerText = dados.wind.deg + '°'
    latitude.innerText = Number(dados.coord.lat).toFixed(2) + '°'
    longitude.innerText = Number(dados.coord.lon).toFixed(2) + '°' 

    const historyClimate = new climateHistory(
    dados.name, 
    dados.weather[0].icon, 
    Number(dados.main.temp_max).toFixed(0) + '°C', 
    Number(dados.main.temp_min).toFixed(0) + '°C', 
    Number(dados.main.feels_like).toFixed(0) + '°C',
    dados.clouds.all + '%',
    dados.main.humidity + '%', 
    dados.main.pressure + 'hPa',
    Number(dados.visibility / 1000).toFixed(0) + 'km',
    dados.weather[0].description,  
    dados.wind.speed + 'm/s',
    dados.wind.deg + '°',
    Number(dados.coord.lat).toFixed(2) + '°',
    Number(dados.coord.lon).toFixed(2) + '°')

    arrayHistory.push(historyClimate)
}

btnSearch.addEventListener('click', () => {
    weatherForecast(search.value)
    iframeMaps.src = locationCity(search.value)
    search.value = ''
    search.focus()
})

document.addEventListener('keypress', (event) => {
    if(event.key === 'Enter' && search.value != 0) {
        btnSearch.click()
    }
})

btnHistory.addEventListener('click', () => {
    console.log(arrayHistory)
})

//histórico de pesquisa
class climateHistory {
    constructor(city, forecastImg, tempMax, tempMin, thermal, rain, humidity, pressure, visibility, forecast, wind, direcWind, latitude, longitude) {
        this.date = date()
        this.time = time()  
        this.city = city
        this.forecastImg = forecastImg
        this.tempMax = tempMax
        this.tempMin = tempMin
        this.thermal = thermal
        this.rain = rain
        this.humidity = humidity
        this.pressure = pressure
        this.visibility = visibility
        this.forecast = forecast
        this.wind = wind 
        this.direcWind = direcWind
        this.latitude = latitude
        this.longitude = longitude
    }
}
const arrayHistory = []

//footer
const timeApplication = document.querySelector('.time')
const dateApplication = document.querySelector('.date')

function time() {
    return new Date().toLocaleTimeString().slice(0, 5)
}

function date() {
    return new Date().toLocaleDateString()
}

timeApplication.innerText = time()
dateApplication.innerText = date()