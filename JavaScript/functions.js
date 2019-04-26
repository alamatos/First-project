var lenght = prompt("What's the lenght of your land?")
var width = prompt("What's the width of your land?")

lenght = parseInt(lenght)
width = parseInt(width)

function calculateLandArea (lenght, width) {
    var area = lenght*width
    return area
}

personalizedArea =calculateLandArea(lenght,width)
document.write('My land has ' + personalizedArea + ' square meters')