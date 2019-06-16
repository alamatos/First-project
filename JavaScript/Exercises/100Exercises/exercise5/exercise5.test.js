const functions = require('./exercise5')
const isANumber = require('./exercise5')




test('It should give me the type of what was typed', () => {
    expect(functions.a.type('teste')).toEqual('string')
})

test('It should give me the type of what was typed', () => {
    expect(functions.a.type(22)).toEqual('number')
})


test("It should give true if waht is typed has at least a space or false if it doesn't", () => {
    expect(functions.a.whiteSpaces('Jon is cool')).toEqual('It has spaces');
})
test("It should give true if what is typed has at least a space or false if it doesn't", () => {
    expect(functions.a.whiteSpaces('AllTogetherNow')).toBe("It doesn't has spaces");
})

test('it should analyse if the given expression is a number or not', () => {
    expect(isANumber.b(2)).toBeTruthy()
})

test('it should analyse if the given expression is a number or not', () => {
    expect(isANumber.b('jon')).toBeFalsy()
})