const functions = {
    type: (word) => typeof (word),
    whiteSpaces :(word) => {
    let wordAnalysis = word.includes(' ')

    if(wordAnalysis) {
        return 'It has spaces'
    } else{
        return "It doesn't has spaces"
    }
    },
    isANumber:(word) => {
        let isANumber = typeof (word) === 'number' ? true : false
        return isANumber
}

}

module.exports = functions