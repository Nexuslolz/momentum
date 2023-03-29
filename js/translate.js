const selectLang = document.querySelector('.list-lang')
const settHeader = document.querySelector('.settings-win__header')
const settPhoto = document.querySelector('.photo')
const settBg = document.querySelector('.background')
const settDate = document.querySelector('.date-time')
const settGreeteng = document.querySelector('.greetings')
const settQuote = document.querySelector('.quotes')
const settWeather = document.querySelector('.weathers')
const settPlayer = document.querySelector('.players')
const settTodo = document.querySelector('.todo')
const settBtnIn = document.querySelectorAll('.list-btn')
const settLang = document.querySelector('.language')

// save language of app in local storage

let lng
let choiseLng = function () {
    if (localStorage.getItem('lang')) {
        lng = localStorage.getItem('lang')
        selectLang.value = localStorage.getItem('lang')
        settingsTranslate(lng)
    } else {
        lng = 'en'
    }
    return lng
}
lng = choiseLng()

// translate settings params

function settingsTranslate() {
    if (lng === 'en' || localStorage.getItem('lang') === 'en') {
        settHeader.textContent = dictionary.en.settings.header
        settPhoto.textContent = dictionary.en.settings.source
        settBg.textContent = dictionary.en.settings.tag
        settDate.textContent = dictionary.en.settings.time
        settGreeteng.textContent = dictionary.en.settings.greeting
        settQuote.textContent = dictionary.en.settings.quotes
        settWeather.textContent = dictionary.en.settings.weather
        settPlayer.textContent = dictionary.en.settings.player
        settTodo.textContent = dictionary.en.settings.todo
        settBtnIn.forEach((elem) => {
            if (elem.value === 'false') {
                elem.textContent = dictionary.en.settings.btnOn
            } else if (elem.value === 'true') {
                elem.textContent = dictionary.en.settings.btnOff
            }
        })
        settLang.textContent = dictionary.en.settings.lang
    } else if (lng === 'ru' || localStorage.getItem('lang') === 'ru') {
        settHeader.textContent = dictionary.ru.settings.header
        settPhoto.textContent = dictionary.ru.settings.source
        settBg.textContent = dictionary.ru.settings.tag
        settDate.textContent = dictionary.ru.settings.time
        settGreeteng.textContent = dictionary.ru.settings.greeting
        settQuote.textContent = dictionary.ru.settings.quotes
        settWeather.textContent = dictionary.ru.settings.weather
        settPlayer.textContent = dictionary.ru.settings.player
        settTodo.textContent = dictionary.ru.settings.todo

        settBtnIn.forEach((elem) => {
            if (elem.value === 'false') {
                elem.textContent = dictionary.ru.settings.btnOn
            } else if (elem.value === 'true') {
                elem.textContent = dictionary.ru.settings.btnOff
            }
        })
        settLang.textContent = dictionary.ru.settings.lang
    }
}

// create translate func

function translatePage(lng) {
    if (lng === 'en') {
        setTime(lng)
        translateGreeting(lng)
        defaultName(lng)
        defaultCity(lng)
        getWeather(lng)
        quotes(lng)
        settingsTranslate(lng)
    } else if (lng === 'ru') {
        setTime(lng)
        translateGreeting(lng)
        defaultName(lng)
        defaultCity(lng)
        getWeather(lng)
        quotes(lng)
        settingsTranslate(lng)
    }
}
