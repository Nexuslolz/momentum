const btnPrev = document.querySelector('.slide-prev');
const btnNext = document.querySelector('.slide-next');
const body = document.querySelector('body');
const selectSource = document.querySelector('.list-photo')

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

function setDayTime() {
    if (greeting() === 'Good morning') {
        return `morning`
    } else if (greeting() === 'Good afternoon') {
        return `afternoon`
    } else if (greeting() === 'Good evening') {
        return `evening`
    } else if (greeting() === 'Good night') {
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
async function setBg() {
    const source = getSourse()
    setDayTime()
    const img = new Image();

    if (source === 'Unsplash') {
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
            img.src = `https://github.com/Nexuslolz/stage1-tasks/blob/assets/images/${setDayTime()}/${bgNum}.jpg?raw=true`
            img.onload = () => {
                body.style.backgroundImage = `url(${img.src})`
            }
        }
    } else if (source === 'Flickr') {
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
            img.src = `https://github.com/Nexuslolz/stage1-tasks/blob/assets/images/${setDayTime()}/${bgNum}.jpg?raw=true`
            img.onload = () => {
                body.style.backgroundImage = `url(${img.src})`
            }
        }
    } else if (source === 'GitHub') {
        img.src = `https://github.com/Nexuslolz/stage1-tasks/blob/assets/images/${setDayTime()}/${bgNum}.jpg?raw=true`
        img.onload = () => {
            body.style.backgroundImage = `url(${img.src})`
        }
    }

}

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