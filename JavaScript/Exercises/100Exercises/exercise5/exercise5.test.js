const type = require ('./exercise5')
const whiteSpaces = require('./exercise5')

test('It should give me the type of what was typed', () => {
    expect(type('Engineer')).toEqual('string')
})

test('It should give me the type of what was typed', () => {
    expect(type(2561)).toEqual('number')
})
test("It should give true if waht is typed has at least a space or false if it doesn't", () => {
    expect(whiteSpaces('Jon is cool')).toBeTruthy()
})
