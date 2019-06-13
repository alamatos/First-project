const saudation = require('./exercise3')

test('Should print a saudation with the user name', () => {
    expect(saudation('Jon')).toEqual('Good afternoon Jon.')
})