const currentTime = document.querySelector('.time');
const currentDate = document.querySelector('.date');
const greetings = document.querySelector('.greeting');
const yourName = document.querySelector('.name');

// define current time and format

function setTime() {
    const time = new Date();
    currentTime.textContent = time.toLocaleTimeString()
    const date = new Date()
    const options = { weekday: 'long', month: 'long', day: 'numeric' }

    if (lng === 'en') {
        currentDate.textContent = date.toLocaleDateString('en-EN', options)
    } else if (lng === 'ru') {
        currentDate.textContent = date.toLocaleDateString('ru-RU', options)
    }

    greetings.textContent = translateGreeting(lng)
    setTimeout(setTime, 1000)
}

setTime()

// define greetings depending on the current time

function greeting() {
    const date = new Date();
    const hours = date.getHours();

    switch (true) {
        case hours >= 6 && hours <= 11:
            return dictionary.en.greetings.morning

        case hours >= 12 && hours <= 17:
            return dictionary.en.greetings.afternoon

        case hours >= 18 && hours <= 23:
            return dictionary.en.greetings.evening

        case hours >= 0 && hours <= 5:
            return dictionary.en.greetings.night
    }
}

// translation greetings

function translateGreeting(lng) {
    if (lng === 'en') {
        return greeting()
    } else if (lng === 'ru') {
        switch (greeting()) {
            case dictionary.en.greetings.morning:
                return dictionary.ru.greetings.morning

            case dictionary.en.greetings.afternoon:
                return dictionary.ru.greetings.afternoon

            case dictionary.en.greetings.evening:
                return dictionary.ru.greetings.evening

            case dictionary.en.greetings.night:
                return dictionary.ru.greetings.night
        }
    }
}

// define default name

function defaultName(lng) {
    if (lng === 'ru') {
        yourName.setAttribute('placeholder', dictionary.ru.time.input)
    } else if (lng === 'en') {
        yourName.setAttribute('placeholder', dictionary.en.time.input)
    }
}

// save name at local storage and load with app

function setName() {
    localStorage.setItem('name', yourName.value)
}

window.addEventListener('beforeunload', setName)

function getName() {
    if (localStorage.getItem('name')) {
        yourName.value = localStorage.getItem('name')
    }
}

window.addEventListener('load', getName)
