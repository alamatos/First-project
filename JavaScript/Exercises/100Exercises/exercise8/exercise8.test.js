const arithmeticAverage = require('./exercise8')

test('it must give us an arithmetic average between 2 values', () => {
    expect(arithmeticAverage.exercise8.arAverage(15,19)).toBe('The first grade is 15, the second grade is 19, which give us an arithmetic average of 17.')
})