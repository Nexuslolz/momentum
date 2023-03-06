// create preloader

window.addEventListener('load', () => {
    setTimeout(() => {
        const loadWin = document.querySelector('.preloader')
        if (!(loadWin.classList.contains('preloader_true'))) {
            loadWin.classList.add('preloader_true')
        }
    })
}, 1000)
