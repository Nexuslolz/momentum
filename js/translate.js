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


let lng
let choiseLng = function () {
    if(localStorage.getItem('lang')){
        lng = localStorage.getItem('lang')
        selectLang.value = localStorage.getItem('lang')
        settingsTranslate(lng)
    } else {
        lng = 'en'
    }
    return lng
}
lng = choiseLng()


function settingsTranslate(){
    if(lng === 'en' || localStorage.getItem('lang') === 'en'){
        settHeader.textContent = 'Settings'
        settPhoto.textContent = 'Photo source'
        settBg.textContent = 'Tag to take photo'
        settDate.textContent = 'Date and time'
        settGreeteng.textContent = 'Greetings'
        settQuote.textContent = 'Quotes'
        settWeather.textContent = 'Weather'
        settPlayer.textContent = 'Player'
        settTodo.textContent = 'ToDo list'
        settBtnIn.forEach((elem) => {
            if(elem.value === 'false'){
                elem.textContent = 'Disable'
            } else if(elem.value === 'true'){
                elem.textContent = 'Enable'
            }
        })
        settLang.textContent = 'Language'
    } else if(lng === 'ru' || localStorage.getItem('lang') === 'ru'){
        settHeader.textContent = 'Настройки'
        settPhoto.textContent = 'Источник фото'
        settBg.textContent = 'Тег для фото'
        settDate.textContent = 'Дата и время'
        settGreeteng.textContent = 'Приветствие'
        settQuote.textContent = 'Цитаты'
        settWeather.textContent = 'Погода'
        settPlayer.textContent = 'Плеер'
        settTodo.textContent = 'ToDo лист'
        settBtnIn.forEach((elem) => {
            if(elem.value === 'false'){
                elem.textContent = 'Выключено'
            } else if(elem.value === 'true'){
                elem.textContent = 'Включено'
            }
        })
        settLang.textContent = 'Язык'
    }
}

function translatePage(lng){
    if(lng === 'en'){
        setTime(lng)
        translateGreeting(lng)
        defaultName(lng)
        defaultCity(lng)
        getWeather(lng)
        quotes(lng)
        settingsTranslate(lng)
    } else if(lng === 'ru'){
        setTime(lng)
        translateGreeting(lng)
        defaultName(lng)
        defaultCity(lng)
        getWeather(lng)
        quotes(lng)
        settingsTranslate(lng)
    }
}





