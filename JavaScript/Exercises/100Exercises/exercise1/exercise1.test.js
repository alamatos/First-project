const functions = require('./exercise1')

test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('The value given should be returned', () => {
    expect(functions.checkValue(0)).toBeFalsy()
})

test('should give user Testing Test object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Testing',
        lastname: 'Test'
    })
})