var serie = prompt("What's your favourite serie?")
var rate = prompt("Please rate your favourite serie between 1 - 10.")

function niceSerie(serie, rate) {
    document.write('<h1>Your favourite serie is '+ serie + ' and you rated it as a ' + rate + ' within on a scale of 1 to 10</h1>')
}

function notTheBestSerie(serie, rate) {
    document.write('<h1>The ' + serie + ' is not not of my favourites</h1>')
}

if (serie == 'The 100' || serie == '100' || serie == 'the 100') {
    niceSerie(serie, rate)
} else {
    notTheBestSerie(serie, rate)
}