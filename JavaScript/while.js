var x=0
document.write('inicio' + '<br>')

while (x<=10) {
    x++
    if (x===5) {
        continue
    }
    document.write (x + '<br>')
    if (x===9) {
        break
    }
    
}
document.write('fim' + '<br>'+ '<br>')

var cars = ['Toyota', 'Volvo', 'Audi', 'BMW', 'Mercedes', 'Porsche']

var i = 0
while (i < cars.length) {
    document.write(cars[i] + '<br>')
    i++
}