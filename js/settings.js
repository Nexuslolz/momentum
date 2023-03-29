const settBtn = document.querySelector('.settings-btn')
const settWin = document.querySelector('.settings-win')
const settOver = document.querySelector('.settings-overlay')
const settClose = document.querySelector('.close-wrapper')
const settOpen = document.querySelector('.settings-body')
const settInput = document.querySelector('.list-input')

// select current language and render page with it

window.addEventListener('load', () => {
    translatePage(selectLang.value)
})

selectLang.addEventListener('change', () => {
    switch (selectLang.value) {
        case 'en':
            lng = selectLang.value
            localStorage.setItem('lang', selectLang.value)
            if (localStorage.getItem('lang') === 'en') {
                translatePage(localStorage.getItem('lang'))
            } else {
                translatePage(lng)
            }

            break

        case 'ru':
            lng = selectLang.value
            localStorage.setItem('lang', selectLang.value)
            if (localStorage.getItem('lang') === 'ru') {
                translatePage(localStorage.getItem('lang'))
            } else {
                translatePage(lng)
            }

            break
    }
})

// settings controls

settBtn.addEventListener('click', () => {
    settWin.classList.toggle('settings-win_open')
    settOpen.classList.toggle('settings-body_open')
})
settClose.addEventListener('click', () => {
    settWin.classList.remove('settings-win_open')
    settOpen.classList.remove('settings-body_open')

})
settOver.addEventListener('click', () => {
    settWin.classList.remove('settings-win_open')
    settOpen.classList.remove('settings-body_open')

})

// select tag for photo search

function setPhotoTag() {
    localStorage.setItem('API tag', settInput.value)
}
settInput.addEventListener('change', () => {
    setPhotoTag()
    getPhotoTag()
})
function getPhotoTag() {
    if (localStorage.getItem('API tag')) {
        settInput.value = localStorage.getItem('API tag')
        return localStorage.getItem('API tag')
    } else {
        localStorage.setItem('API tag', 'nature')
        return 'nature'
    }
}

// set params visible or invisible and save it to local storage

currentDate
currentTime
const greetingBlock = document.querySelector('.greeting-container')
const quotesBlock = document.querySelector('.footer')
const weatherBlock = document.querySelector('.weather')
const playerBlock = document.querySelector('.player')
const todoListBlock = document.querySelector('.todo-list')

const settArr = [currentTime, greetingBlock, quotesBlock, weatherBlock, playerBlock, todoListBlock]

settBtnIn.forEach((elem, idx) => {
    elem.addEventListener('click', () => {
        switch (elem.value) {
            case 'true':
                elem.value = 'false'
                if (lng === 'en') {
                    elem.textContent = dictionary.en.settings.btnOn
                } else if (lng === 'ru') {
                    elem.textContent = dictionary.ru.settings.btnOn
                }
                settArr[idx].style.opacity = '0'
                settArr[idx].style.visibility = 'hidden'
                if (idx === 0) {
                    currentDate.style.opacity = '0'
                    currentDate.style.visibility = 'hidden'
                }

                localStorage.setItem('set Item' + settArr.indexOf(settArr[idx]), elem.value)
                localStorage.setItem('set Btn' + idx, elem.value)

                break

            case 'false':
                elem.value = 'true'
                if (lng === 'en') {
                    elem.textContent = dictionary.en.settings.btnOff
                } else if (lng === 'ru') {
                    elem.textContent = dictionary.ru.settings.btnOff
                }
                settArr[idx].style.opacity = '1'
                settArr[idx].style.visibility = 'visible'
                if (idx === 4 || idx === 5) {
                    settArr[idx].style.opacity = '0.8'
                }
                if (idx === 0) {
                    currentDate.style.opacity = '1'
                    currentDate.style.visibility = 'visible'
                }

                localStorage.setItem('set Item' + settArr.indexOf(settArr[idx]), elem.value)
                localStorage.setItem('set Btn' + idx, elem.value)

                break
        }
    })
})


// get params from local storage

function getSettingStatus() {
    settBtnIn.forEach((elem, idx) => {
        if (localStorage.getItem('set Btn' + idx)) {
            elem.value = localStorage.getItem('set Btn' + idx)

            switch (elem.value) {
                case 'true':
                    if (lng === 'en') {
                        elem.textContent = dictionary.en.settings.btnOff
                    } else if (lng === 'ru') {
                        elem.textContent = dictionary.ru.settings.btnOff
                    }
                    settArr[idx].style.opacity = '1'
                    settArr[idx].style.visibility = 'visible'
                    if (idx === 4 || idx === 5) {
                        settArr[idx].style.opacity = '0.8'
                    }
                    if (idx === 0) {
                        currentDate.style.opacity = '1'
                        currentDate.style.visibility = 'visible'
                    }

                    break

                case 'false':
                    if (lng === 'en') {
                        elem.textContent = dictionary.en.settings.btnOn
                    } else if (lng === 'ru') {
                        elem.textContent = dictionary.ru.settings.btnOn
                    }
                    settArr[idx].style.opacity = '0'
                    settArr[idx].style.visibility = 'hidden'
                    if (idx === 0) {
                        currentDate.style.opacity = '0'
                        currentDate.style.visibility = 'hidden'
                    }

                    break

                default:
                    elem.value = 'true'
            }
        }
    })
}

window.addEventListener('load', getSettingStatus)


window.addEventListener('beforeunload', setPhotoTag)
window.addEventListener('load', getPhotoTag)
