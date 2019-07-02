const numberAnalysis = require('./exercise6')

test('The user should give us a number', () => {
    expect(numberAnalysis.exercise6.previousAndNext(10)).toBe('The previous number is 9 and the next one is 11');
})