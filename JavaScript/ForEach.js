var cars = ['Toyota', 'Volvo', 'Audi', 'BMW', 'Mercedes', 'Porshe']

document.write(cars[3] + '<br>' + '<br>')
cars.forEach(function(value, index, array) {
    document.write('index: ' + index + ' || ' + 'value: ' + value + ' || ' + 'array: ' + array + ' || ' + '<br>'  + '<br>')

    if (value == 'BMW') {
        cars[index] = 'Ferrari'
    }
    
})

document.write(cars + '<br>' + '<br>')
document.write(cars[3] + '<br>' + '<hr>' + '<br>')

var cities = ['Lisbon', 'London', 'Mozambique', 'Bucharest']

var func = function(value, index, array) {
    document.write('Value : '+ value + '<br>')
}
cities.forEach(func)
document.write('<br>' + '<hr>' + '<br>' )

var fruitList= Array()

fruitList ['x'] = 'Banana'
fruitList [1] = 'Orange'
fruitList [-11] = 'Strawberry'
fruitList [3] = 'apple'

// it will only print indexes =>0, so it will only print 'Orange' and 'apple'
fruitList.forEach(func)

document.write('<br>' + '<hr>' + '<br>' )

// It will print all the indexes within the array fruitlist
for (fruit in fruitList) {
    document.write(fruitList[fruit] + '<br>')
}

