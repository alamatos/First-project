const words = require('./exercise2')

test('print the all the words in uppercase', () => {
    expect(words('Hello World')).toEqual('HELLO WORLD')
});