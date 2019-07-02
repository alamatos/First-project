const numberManipulation = require('./exercise7')

test('It must give us the double of the number provided by the user', () => {
    expect(numberManipulation.exercise7.double(5)).toEqual(10)
})
test('It must give us the triple of the number provided by the user', () => {
    expect(numberManipulation.exercise7.triple(5)).toEqual(15)
})
test('It must give us the square root of the number provided by the user', () => {
    expect(numberManipulation.exercise7.squareRoot(25)).toEqual(5)
})