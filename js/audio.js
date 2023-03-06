import playList from './playList.js';

// const player = document.querySelector('player')
const playerPrev = document.querySelector('.play-prev')
const playerNext = document.querySelector('.play-next')
const playerPlay = document.querySelector('.play')
const listForPlay = document.querySelector('.play-list')
const nameSound = document.querySelector('.player-music-name');
const durationSound = document.querySelector('.player-all-time')
const lengthSound = document.querySelector('.player-current-time')
const soundSlider = document.querySelector('.progress-scale');
const soundProgress = document.querySelector('.progress-range')

/////////// create player

let isPlay = false;
let playNum = 0;
const audio = new Audio()

for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li')
    li.classList.add('play-item')
    li.textContent = playList[i].title
    listForPlay.append(li)
}
const playItem = document.querySelectorAll('.play-item');

//////// change song when it ends

function checkDuration() {
    if (audio.currentTime === audio.duration) {
        nextAudio()
    }
    setTimeout(checkDuration, 1000)
}


checkDuration()


/////////// change class in play list

function classToggle() {
    playItem.forEach((item) => {
        item.classList.remove('item-active')
    })
    for (let i = 0; i <= playItem.length; i++) {
        if (playNum === i) {
            playItem[i].classList.add('item-active')
        }
    }
}

//////// play or pause
function playOrPause() {
    if (isPlay === false) {
        playAudio()
    } else {
        pauseAudio()
    }
}

let timerIdCurrentTime;
function playAudio() {
    clearInterval(timerIdCurrentTime)
    lengthSound.textContent = '00:00'
    isPlay = true
    audio.src = playList[playNum].src
    nameSound.textContent = playList[playNum].title
    durationSound.textContent = playList[playNum].duration

    timerIdCurrentTime = setInterval(() => {
        let time = audio.currentTime;
        let minutes = String(Math.floor(time / 60)).padStart(2, '0');
        let seconds = String(Math.floor(time % 60)).padStart(2, '0');
        lengthSound.textContent = `${minutes}:${seconds}`
        soundProgress.style.width = Math.round(((audio.currentTime / audio.duration) * 100)) + '%'
    }, 1000)

    classToggle()
    audio.play();
    playerPlay.classList.add('pause')
}

function pauseAudio() {
    playItem.forEach((item) => {
        item.classList.remove('item-active')
    })
    clearInterval(timerIdCurrentTime)
    isPlay = false
    audio.pause();
    playerPlay.classList.remove('pause')
}


////////// prev and next song

function prevAudio() {
    clearInterval(timerIdCurrentTime)
    playNum--
    if (playNum < 0) {
        playNum = playList.length - 1
    }
    classToggle()
    playAudio()
}
function nextAudio() {
    clearInterval(timerIdCurrentTime)
    playNum++
    if (playNum >= playList.length) {
        playNum = 0
    }
    classToggle()
    playAudio()
}


///////////sound params
const mute = document.querySelector('.volume-button');
const volumeSlider = document.querySelector('.volume-scale');
const volumeProgress = document.querySelector('.volume-range');



volumeSlider.addEventListener('click', (event) => {
    const sliderVolumeWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = event.offsetX / parseInt(sliderVolumeWidth)
    audio.volume = newVolume;
    if (audio.muted) {
        volumeProgress.style.width = 0
    } else {
        volumeProgress.style.width = newVolume * 100 + '%'
    }
})

soundSlider.addEventListener('click', (evt) => {
    const sliderSoundWidth = window.getComputedStyle(soundSlider).width;
    const newSound = evt.offsetX / parseInt(sliderSoundWidth)
    audio.currentTime = newSound * audio.duration;
    soundProgress.style.width = newSound * 100 + '%'
})


function muteMusic() {
    if (audio.muted) {
        audio.volume = 0.5
        volumeProgress.style.width = 50 + '%'
        audio.muted = false
        mute.classList.remove('volume-button_off')
    } else {
        audio.volume = 0;
        volumeProgress.style.width = 0
        audio.muted = true
        mute.classList.add('volume-button_off')
    }
}
mute.onclick = () => muteMusic()


////// add buttons func

playerPlay.addEventListener('click', playOrPause)
playerPrev.addEventListener('click', prevAudio)
playerNext.addEventListener('click', nextAudio)
