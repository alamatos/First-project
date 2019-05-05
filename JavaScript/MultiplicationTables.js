// for (var y=1;y<=10;y++){
//     for (var x = 1;x <= 10 ; x++) {
//         document.write(y+ ' x ' +x +' = '+ (y*x) + '<br>')
//     }
//     document.write('<br>' + '<hr>')
// }

// Multiplication tables with 'while'
var y = 1

while (y<=10) {
    var x=1
    while(x<=10) {
        document.write(y + 'x' + x + ' = ' + (y*x) + '<br>')
        x++
    }
    document.write('<br>' + '<hr>')
    y++
}