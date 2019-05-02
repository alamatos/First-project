var fruitList= Array()

fruitList [0] = 'Banana'
fruitList [1] = 'Orange'
fruitList [2] = 'Strawberry'
fruitList [3] = 'apple'

console.log(fruitList[2])

var sports = []
sports [0] = 'soccer'
sports [1] = 'golf'
sports [2] = 'F1'
sports [3] = 'Basketball'

console.log( sports [3])

var laptops = Array('HP', 'ASUS', 'TOSHIBA', 'ACER')
console.log(laptops[1])

var cities = ['Lisbon', 'London', 'Mozambique', 'Bucharest']

console.log(cities [0])

console.log(fruitList)
console.log(sports)
console.log(laptops)
console.log(cities)



var food =[]
food['fruits']=[]

food ['fruits'][0] = 'apple'
food ['fruits'][1] ='Banana'
food ['fruits'][2] ='Orange'
food ['fruits'][3] = 'Strawberry'

food['icecream'] = []

food ['icecream'][0] = 'Orange'
food ['icecream'][1] = 'apple'
food ['icecream'][2] = 'Strawberry'
food ['icecream'][3] = 'Banana'

console.log(food)
console.log(food['fruits'][0])
console.log(food['icecream'][3])

// withdraw the last element in an array
food['icecream'].pop()
console.log(food['icecream'])

// withdram the first element in an array

food['fruits'].shift()
console.log(food['fruits'])

// Add an element to the end of the array
food['fruits'].push('Peach')
console.log(food['fruits'])

// add an element to the beginning of the array

food ['icecream'].unshift('Stracciatella')
console.log(food['icecream'])

// When is relevant to know if an element is inside of an array and what position is this element
console.log(food['fruits'].indexOf('Banana'))

// To sort an array, we need to use the method sort()
// this type of method only works to alphanumeric sort

console.log(food['fruits'].sort())

// to sort numbers we need to add a function, as i demonstrat below

var euromillions = []
euromillions [0] = 10
euromillions [1] = 45
euromillions [2] = 25
euromillions [3] = 95
euromillions [4] = 4
euromillions [5] = 25
euromillions [6] = 19
euromillions [7] = 38
euromillions [8] = 54
euromillions [9] = 67
euromillions [10] = 45

console.log(euromillions.sort(sortValues))

// if (num1-num2) <0 num1 will be placed before num2
// if (num1-num2) >0 num1 will be placed after num2
//  if (num1-num2) =0 num2 will maintain the initial position

function sortValues(num1, num2) {
    return num1-num2
}
