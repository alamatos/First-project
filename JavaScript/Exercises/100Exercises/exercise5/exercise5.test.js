const wordAnalysis = require('./exercise5')
const numberAnalysis = require('./exercise5')


test('It should give me the type of what was typed', () => {
    expect(wordAnalysis.firstPlace.type('teste')).toEqual('string')
})

test('It should give me the type of what was typed', () => {
    expect(wordAnalysis.firstPlace.type(22)).toEqual('number')
})


test("It should give true if waht is typed has at least a space or false if it doesn't", () => {
    expect(wordAnalysis.firstPlace.whiteSpaces('Jon is cool')).toBe('This expression has spaces.');
})
test("It should give true if what is typed has at least a space or false if it doesn't", () => {
    expect(wordAnalysis.firstPlace.whiteSpaces('AllTogetherNow')).toBe("This expression doesn't has spaces.");
})

test('it should analyse if the given expression is a number or not - Object', () => {
    expect(wordAnalysis.firstPlace.numberAnalysis(2)).toBe('This expression is a number.');
})

test('it should analyse if the given expression is a number or not - Object', () => {
    expect(wordAnalysis.firstPlace.numberAnalysis('jon')).toBe("This expression isn't a number.");
})
test('it should analyse if the given expression is a number or not - function', () => {
    expect(numberAnalysis.secondPlace(2)).toBeTruthy();
})

test('it should analyse if the given expression is a number or not - function', () => {
    expect(numberAnalysis.secondPlace('jon')).toBeFalsy();
})
test('it should analyze if the given expression is alphabetic or not - numbers', () => {
    expect(wordAnalysis.firstPlace.alphabetic(123)).toBe("This expression isn't alphabetic.");
})
test('it should analyze if the given expression is alphabetic or not - whitespaces', () => {
    expect(wordAnalysis.firstPlace.alphabetic(' ')).toBe("This expression isn't alphabetic.");
})
test('it should analyze if the given expression is alphabetic or not - letters', () => {
    expect(wordAnalysis.firstPlace.alphabetic('test')).toBe('This expression is alphabetic.');
})
test('it should analyze if the given expression is alphanumeric or not', () => {
    expect(wordAnalysis.firstPlace.alphanumeric('test')).toBe("This expression isn't alphanumeric.");
})
test('it should analyze if the given expression is alphanumeric or not', () => {
    expect(wordAnalysis.firstPlace.alphanumeric('testin app')).toBe("This expression isn't alphanumeric.");
})
test('it should analyze if the given expression is alphanumeric or not', () => {
    expect(wordAnalysis.firstPlace.alphanumeric('testing app 1')).toBe('This expression is alphanumeric.');
})
test('it should analyze if the given expression is all in uppercase or not', () => {
    expect(wordAnalysis.firstPlace.uppercase('Testing app')).toBe("This expression isn't in uppercase.");
})
test('it should analyze if the given expression is all in uppercase or not', () => {
    expect(wordAnalysis.firstPlace.uppercase('TESTING APP')).toBe('This expression is in uppercase.');
})
test('it should analyze if the given expression is all in lowercase or not', () => {
    expect(wordAnalysis.firstPlace.lowercase('TESTING APP')).toBe("This expression isn't in lowercase.");
})
test('it should analyze if the given expression is all in lowercase or not', () => {
    expect(wordAnalysis.firstPlace.lowercase('Testing app')).toBe("This expression isn't in lowercase.");
})
test('it should analyze if the given expression is all in lowercase or not', () => {
    expect(wordAnalysis.firstPlace.lowercase('testing app')).toBe('This expression is in lowercase.');
})
test('it should analyze if the first letter of a given expression is capitalized or not', () => {
    expect(wordAnalysis.firstPlace.capitalized('Testing app')).toBe('This expression is capitalized.');
})
test('it should analyze if the first letter of a given expression is capitalized or not', () => {
    expect(wordAnalysis.firstPlace.capitalized('testing App')).toBe("This expression isn't capitalized.");
})
test('it should analyze if the first letter of a given expression is capitalized or not', () => {
    expect(wordAnalysis.firstPlace.capitalized('TESTING APP')).toBe("This expression isn't capitalized.");
})