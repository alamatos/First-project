// Using rest

function sumAllNumbers(...numbers) {
    let total = 0
    numbers.forEach(n => total+=n)
    console.log(total)
}

sumAllNumbers(1,2,5,8,6,7,2)

// Using spread with objects

const employee = {name : 'jon', age:29}
const clone = {type : 'clone', ...employee}

console.log(employee)
console.log(clone)

// using spread with arrays

const fruits= ['apple', 'orange', 'banana']
const allFruits = ['strawberry', ...fruits]

console.log(fruits)

console.log(allFruits)