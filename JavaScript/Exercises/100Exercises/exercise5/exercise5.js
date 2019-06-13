function type(word) {
    return  typeof(word)
}

console.log(type('!!!'))

 function whiteSpaces(word) {
    let wordAnalysis = word.includes(' ') 
    return wordAnalysis
 }

console.log(whiteSpaces('4555'))


module.exports = type