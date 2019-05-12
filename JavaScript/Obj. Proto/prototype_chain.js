let animal = {attr1: 'a'}
let vertebrate = {__proto__:animal ,attr2: 'b'}
let bird = {__proto__ : vertebrate, attr3: 'c'}

console.log(bird.attr2, bird.attr1)
console.log(bird)