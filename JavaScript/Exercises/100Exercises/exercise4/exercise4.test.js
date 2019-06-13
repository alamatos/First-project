const sum = require ('./exercise4.js')

test('Should provide the sum of two asked numbers', () => {
    expect(sum(44,62)).toBe(106)
})