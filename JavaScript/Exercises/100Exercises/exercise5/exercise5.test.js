const wordAnalysis = require('./exercise5')
const numberAnalysis = require('./exercise5')


test('It should give me the type of what was typed', () => {
    expect(wordAnalysis.firstPlace.type('teste')).toEqual('string')
})

test('It should give me the type of what was typed', () => {
    expect(wordAnalysis.firstPlace.type(22)).toEqual('number')
})


test("It should give true if waht is typed has at least a space or false if it doesn't", () => {
    expect(wordAnalysis.firstPlace.whiteSpaces('Jon is cool')).toEqual('It has spaces');
})
test("It should give true if what is typed has at least a space or false if it doesn't", () => {
    expect(wordAnalysis.firstPlace.whiteSpaces('AllTogetherNow')).toBe("It doesn't has spaces");
})

test('it should analyse if the given expression is a number or not - Object', () => {
    expect(wordAnalysis.firstPlace.numberAnalysis(2)).toBeTruthy();
})

test('it should analyse if the given expression is a number or not - Object', () => {
    expect(wordAnalysis.firstPlace.numberAnalysis('jon')).toBeFalsy();
})
test('it should analyse if the given expression is a number or not - function', () => {
    expect(numberAnalysis.secondPlace(2)).toBeTruthy();
})

test('it should analyse if the given expression is a number or not - function', () => {
    expect(numberAnalysis.secondPlace('jon')).toBeFalsy();
})