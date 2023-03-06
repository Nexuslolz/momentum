const city = document.querySelector('.city')
const weatherIco = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');
const weatherErr = document.querySelector('.weather-error')

// send request to api for getting weather

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lng}&appid=30fa08a167b8a64af815e07f2c159a88&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIco.className = 'weather-icon owf';
    weatherErr.textContent = ''
    weatherIco.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = Math.round(data.main.temp) + '°C',
      weatherDescription.textContent = data.weather[0].description
    if (lng === 'en') {
      windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
      humidity.textContent = `Humidity: ${data.main.humidity}%`
    } else if (lng === 'ru') {
      windSpeed.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`
      humidity.textContent = `Влажность: ${data.main.humidity}%`
    }
  } catch (e) {
    weatherErr.textContent = 'Error 404 not found'
    temperature.textContent = '',
      weatherDescription.textContent = ''
    windSpeed.textContent = ''
    humidity.textContent = ''
  }
}


// define default city and remember it in local storage

function defaultCity() {
  if (lng === 'ru') {
    return city.setAttribute('placeholder', 'Введите город')
  } else if (lng === 'en') {
    return city.setAttribute('placeholder', 'Enter city')
  }
}

function setCity() {
  localStorage.setItem('city', city.value)
}

function getCity() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city')
  } else {
    city.value = 'Minsk'
  }
  getWeather()
}

window.addEventListener('beforeunload', setCity)
window.addEventListener('load', getCity)

getWeather()
city.addEventListener('change', getWeather)
