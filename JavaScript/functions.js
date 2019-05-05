// var lenght = prompt("What's the lenght of your land?")
// var width = prompt("What's the width of your land?")

// lenght = parseInt(lenght)
// width = parseInt(width)

// function calculateLandArea (lenght, width) {
//     var area = lenght*width
//     return area
// }

// personalizedArea =calculateLandArea(lenght,width)
// document.write('My land has ' + personalizedArea + ' square meters')

function sum () {
    var resultado= 0
    for(var i in arguments) {
        resultado+=arguments[i]
    }
    return resultado
}
console.log(sum(4,5,2,8))