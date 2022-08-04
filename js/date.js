const currentTime = document.querySelector('.time');
const currentDate = document.querySelector('.date');
const greetings = document.querySelector('.greeting');
const yourName = document.querySelector('.name');


function setTime(){
    const time = new Date();
    currentTime.textContent = time.toLocaleTimeString()
    const date = new Date()
    const options = {weekday: 'long', month: 'long', day:'numeric'}
    
    if(lng === 'en'){
    currentDate.textContent = date.toLocaleDateString('en-EN', options)
    } else if(lng === 'ru'){
    currentDate.textContent = date.toLocaleDateString('ru-RU', options)
  
    }
    greetings.textContent = translateGreeting(lng)
    setTimeout(setTime, 1000)
    
}
setTime()

function greeting() {
    const date = new Date();
    const hours = date.getHours();
    
    if(hours >= 6 && hours <= 11){
        return 'Good morning'
    } else if(hours >= 12 && hours <= 17){
        return 'Good afternoon'
    } else if(hours >= 18 && hours <= 23){
        return 'Good evening'
    } else if(hours >= 0 && hours <= 5){
        return 'Good night'
    } 
}
function translateGreeting(lng) {
    if(lng === 'en'){
        return greeting()
    } else if (lng === 'ru'){
        if(greeting() === 'Good morning'){
            return 'Доброе утро'
        } else if(greeting() === 'Good afternoon'){
            return 'Добрый день'
        } else if(greeting() === 'Good evening'){
            return 'Добрый вечер'
        } else if(greeting() === 'Good night'){
            return 'Доброй ночи'
        }
    }
}
function defaultName(lng) {
    if(lng === 'ru'){
        yourName.setAttribute('placeholder', 'Введите имя')
    } else if(lng === 'en'){
        yourName.setAttribute('placeholder', 'Enter name')
    }
}

function setName(){
    localStorage.setItem('name', yourName.value)
}
window.addEventListener('beforeunload', setName)

function getName(){
    if(localStorage.getItem('name')){
        yourName.value = localStorage.getItem('name')
    }
}
window.addEventListener('load', getName)