const word = 'Just a test 1'
const wordAnalysis = {
    type: (word) => typeof (word),
    whiteSpaces: (word) => {
        let wordAnalysis = word.includes(' ')

        if (wordAnalysis) {
            return 'This expression has spaces.'
        } else {
            return "This expression doesn't has spaces."
        }
    },
    numberAnalysis: (word) => {
        let isANumber = typeof (word) === 'number' ? true : false
        if (isANumber) {
            return 'This expression is a number.'
        } else {
            return "This expression isn't a number."
        }

    },
    alphabetic: (word) => {
        let patt = /[0-9]/g
        let patt1 = /\s/g
        let Alphabetic = patt.test(word) || patt1.test(word) === true ? false : true

        if (Alphabetic) {
            return 'This expression is alphabetic.'
        } else {
            return "This expression isn't alphabetic."
        }
    },
    alphanumeric: (word) => {
        let patt = /[0-9]/g
        let patt1 = /\s/g
        let patt2 = /[a-z]/g
        let alphanumeric = patt.test(word) && patt1.test(word) && patt2.test(word)
        if (alphanumeric) {
            return 'This expression is alphanumeric.'
        } else {
            return "This expression isn't alphanumeric."
        }
    },
    uppercase: (word) => {
        let analysisUpperCase = word == word.toUpperCase() ? true : false
        if (analysisUpperCase) {
            return 'This expression is in uppercase.'
        } else {
            return "This expression isn't in uppercase."
        }
    },
    lowercase: (word) => {
        let analysisLowercase = word == word.toLowerCase() ? true : false
        if (analysisLowercase) {
            return 'This expression is in lowercase.'
        } else {
            return "This expression isn't in lowercase."
        }
    },
    capitalized: (word) => {
        let wordUppercase = word.toUpperCase()
        let wordCapitalized = word.replace(/^\w/, c => c.toUpperCase())

        let analysis = word == wordCapitalized && wordUppercase !== wordCapitalized
        if (analysis) {
            return 'This expression is capitalized.'
        } else {
            return "This expression isn't capitalized."
        }
    }

}
console.log(wordAnalysis.type(word))
console.log(wordAnalysis.whiteSpaces(word))
console.log(wordAnalysis.numberAnalysis(word))
console.log(wordAnalysis.alphabetic(word))
console.log(wordAnalysis.alphanumeric(word))
console.log(wordAnalysis.uppercase(word))
console.log(wordAnalysis.lowercase(word))
console.log(wordAnalysis.capitalized(word))


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