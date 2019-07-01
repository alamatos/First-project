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
    alphabetic: (word) => {
        let patt = /[0-9]/g
        let patt1 = /\s/g
        let Alphabetic = patt.test(word) || patt1.test(word) === true ? false : true

        return Alphabetic
    },
    alphanumeric: (word) => {
        let patt = /[0-9]/g
        let patt1 = /\s/g
        let patt2 = /[a-z]/g
        let alphanumeric = patt.test(word) && patt1.test(word) && patt2.test(word)
        return alphanumeric
    },
    uppercase : (word) => {
        // let word2 = word.toUpperCase()
        let analysisUpperCase = word == word.toUpperCase() ? true : false
        return analysisUpperCase
    }
}
console.log(wordAnalysis.uppercase('AASSS 1'))


function numberAnalysis(word) {
    let isANumber = typeof (word) === 'number' ? true : false
    return isANumber
}


// in order to avoid overwriting the module.exports, it is needed to do one of the following:

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