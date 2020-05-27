let quotes = [
    {
        "quote": "Believe in yourself! Have faith in your abilities!" + "<br>" + "Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
        "author": "Norman Vincent Peale"
    }, {
        "quote": "Press forward. Do not stop, do not linger in your journey,but strive for the mark set before you.",
        "author": "George Whitefield"
    }, {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
    }, {
        "quote": "Aim for the moon. If you miss, you may hit a star",
        "author": "W. Clement Stone"
    }, {
        "quote": "Never look back unless you're planning to go that way.",
        "author": "Henry David Thoreau"
    }, {
        "quote": "There are chords in the heart of the most reckless which cannot be touched without emotion.",
        "author": "Edgar Allan Poe"
    }, {
        "quote": "Toba doko wa ma lole, Bye Bye.",
        "author": "Naira Marley"
    }, {
        "quote": "Live as, everyday is your last.",
        "author": "Edgar The King"
    }
    
]

var time = 3000; 
var i = 0;
const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");



btn.addEventListener('click', getQuote);

function getQuote() {

    let number = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';
    author.innerHTML = '<span>--</span>' + quotes[number].author; 
    

    setTimeout("changeImg", time);

}


