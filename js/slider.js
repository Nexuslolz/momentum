const btnPrev = document.querySelector('.slide-prev');
const btnNext = document.querySelector('.slide-next');
const body = document.querySelector('body');
const selectSource = document.querySelector('.list-photo')

// choise the source of photo background

selectSource.addEventListener('change', () => {
    localStorage.setItem('source', selectSource.value)
})

function getSourse() {
    if (localStorage.getItem('source')) {
        selectSource.value = localStorage.getItem('source')
        return localStorage.getItem('source')
    } else {
        selectSource.value = 'Unsplash'
        return 'Unsplash'
    }
}

let randomNumber = Math.ceil(Math.random() * 20)
let bgNum = String(randomNumber).padStart(2, '0')
setBg()

//define day time

function setDayTime() {
    const currentDayTime = greeting()

    switch (currentDayTime) {
        case dictionary.en.greetings.morning:
            return `morning`
        case dictionary.en.greetings.afternoon:
            return `afternoon`
        case dictionary.en.greetings.evening:
            return `evening`
        case dictionary.en.greetings.night:
            return `night`
    }
}

function getPhotoTag() {
    const settInput = document.querySelector('.list-input')

    if (localStorage.getItem('API tag')) {
        settInput.value = localStorage.getItem('API tag')
        return localStorage.getItem('API tag')
    } else {
        localStorage.setItem('API tag', 'nature')
        return 'nature'
    }
}

//define background image from avaliable source try from unsplash to github

async function setBg() {
    const source = getSourse()
    setDayTime()
    const img = new Image();

    switch (source) {
        case 'Unsplash':
            try {
                const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${getPhotoTag()}&client_id=UqVtdMgF4Z53TArQQvbF8Lg3061MrCSnjF04s4WGhqk`
                const res = await fetch(url)
                const data = await res.json()
                img.src = data.urls.regular;

                img.onload = () => {
                    body.style.backgroundImage = `url(${img.src})`
                }
            }
            catch {
                img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${setDayTime()}/${bgNum}.jpg`
                img.onload = () => {
                    body.style.backgroundImage = `url(${img.src})`
                }
            }

            break

        case 'Flickr':
            try {
                const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=dde889c25a19651620fed8084fdcaaca&tags=${getPhotoTag()}&extras=url_l&format=json&nojsoncallback=1`
                const res = await fetch(url)
                const data = await res.json()
                img.src = data.photos.photo[Math.floor(Math.random() * data.photos.photo.length)].url_l

                img.onload = () => {
                    body.style.backgroundImage = `url(${img.src})`
                }
            }
            catch {
                img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${setDayTime()}/${bgNum}.jpg`
                img.onload = () => {
                    body.style.backgroundImage = `url(${img.src})`
                }
            }

            break

        case 'GitHub':
            img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${setDayTime()}/${bgNum}.jpg`
            img.onload = () => {
                body.style.backgroundImage = `url(${img.src})`
            }

            break
    }
}


// slider controls

btnPrev.addEventListener('click', function () {
    randomNumber--
    bgNum = String(randomNumber).padStart(2, '0')

    if (randomNumber <= 1) {
        randomNumber = 20
    }

    setBg()
})
btnNext.addEventListener('click', function () {
    randomNumber++
    bgNum = String(randomNumber).padStart(2, '0')

    if (randomNumber >= 20) {
        randomNumber = 1
    }

    setBg()
})
