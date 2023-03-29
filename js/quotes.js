const quoteOfDay = document.querySelector('.quote');
const authorOfQuote = document.querySelector('.author');
const btnQuote = document.querySelector('.change-quote')


// define current quote

let randomQuote = Math.round(Math.random() * 5);
async function quotes() {
    let url

    if (lng === 'en') {
        url = 'js/quotes.json'
    } else if (lng === 'ru') {
        url = 'js/quotes-translate.json'
    }

    const res = await fetch(url);
    const data = await res.json();

    quoteOfDay.textContent = data[randomQuote].text;
    authorOfQuote.textContent = data[randomQuote].author;

    randomQuote++

    if (randomQuote >= data.length) {
        randomQuote = 0
    } else if (randomQuote <= 0) {
        randomQuote = data.length - 1
    }
}

quotes()

// display current quote

btnQuote.addEventListener('click', quotes)
