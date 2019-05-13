// Arrays

let fruits = ['peach', 'banana', 'apple']

let [a, , b, c = 'strawberry'] = fruits

console.log(b,c)

let things = [['peach', 'banana', 'apple'], ['Jon', 'Sara', 'Maria']]

// how to grab the name Sara
let [,[,nameSara]] = things

console.log(nameSara)

// Objects

let product = {
    description : 'Notebook',
    price : 1500,
    details: {
        manufacturer : 'Sony',
        model : 'AGRD-1524'
    }
}

let { description, price} = product

console.log(description, price)

// i can rename the attributes, and define the attributes that aren't defined
let { description:d, price:p, discount:dis=10} = product

console.log(d, p, dis)

// Acess attributes inside other attributes

let {details: {manufacturer}} = product  
console.log(manufacturer)

// functions
    // arrays
let fruits2 = ['peach', 'banana', 'apple']

function printFruit ([a, , b, c= 'manga']) {
    console.log(a,b, c)
}

printFruit(fruits2)

    // objects

    let product2 = {
        description : 'Notebook',
        price : 1500,
        details: {
            manufacturer : 'Sony',
            model : 'AGRD-1524'
        }
    }

    function printProduct ({description:d,details:{manufacturer:m, model:mod, year=2018}}) {
        console.log(d,m,mod,year)

    }

    printProduct(product2)

    // using REST
        // arrays

    let fruits3 = ['peach', 'banana', 'apple']

    let [a1, ...b1] = fruits3

    console.log(a1)
    console.log(...b1)

        // objects

    let product3 = {
        description : 'Notebook',
        price : 1500,
        details: {
            manufacturer : 'Sony',
            model : 'AGRD-1524'
        }
    }

    let {description:desc, ...b2} = product3
    console.log(desc)
    console.log(b2)