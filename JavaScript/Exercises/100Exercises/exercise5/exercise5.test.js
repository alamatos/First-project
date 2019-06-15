const rewire = require('rewire')
const functions = rewire('./exercise5').__get__('functions')
const isANumber = rewire('./exercise5').__get__('isANumber')




test('It should give me the type of what was typed', () => {
    expect(functions.type('teste')).toEqual('string')
})

test('It should give me the type of what was typed', () => {
    expect(functions.type(22)).toEqual('number')
})


test("It should give true if waht is typed has at least a space or false if it doesn't", () => {
    expect(functions.whiteSpaces('Jon is cool')).toEqual('It has spaces');
})
test("It should give true if what is typed has at least a space or false if it doesn't", () => {
    expect(functions.whiteSpaces('AllTogetherNow')).toBe("It doesn't has spaces");
})

test('it should analyse if the given expression is a number or not', () => {
    expect(isANumber(2)).toBeTruthy()
})

test('it should analyse if the given expression is a number or not', () => {
    expect(isANumber('jon')).toBeFalsy()
})