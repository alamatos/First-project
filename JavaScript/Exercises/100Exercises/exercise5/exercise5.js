const wordAnalysis = {
    type: (word) => typeof (word),
    whiteSpaces: (word) => {
        let wordAnalysis = word.includes(' ')

        if (wordAnalysis) {
            return 'It has spaces'
        } else {
            return "It doesn't has spaces"
        }
    },
    numberAnalysis: (word) => {
        let isANumber = typeof (word) === 'number' ? true : false
        return isANumber
    },
    isAlphanumeric : (word) => {
        let patt = /[a-z]/g && /[0-9]/g
        let Alphanumeric = word.match(patt)
        //  ? 'alphanumeric' : 'non alphanumeric'
        return Alphanumeric
    }
}
console.log(wordAnalysis.isAlphanumeric('1254as'))


function numberAnalysis(word) {
    let isANumber = typeof (word) === 'number' ? true : false
    return isANumber
}


// în order to avoid overwriting the module.exports, it is needed to do one of the following:

// 1)
module.exports.firstPlace = wordAnalysis
module.exports.secondPlace = numberAnalysis
// 2)

// module.exports = {
    // functions: functions,
    // isANumber: isANumber
// }

// 3)
// exports.functions = functions
// exports.isANumber = isANumber

// 4)

// exports = {
//     functions: functions,
//     isANumber: isANumber
// }