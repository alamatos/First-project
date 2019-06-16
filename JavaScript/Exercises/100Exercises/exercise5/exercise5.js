const functions = {
    type: (word) => typeof (word),
    whiteSpaces: (word) => {
        let wordAnalysis = word.includes(' ')

        if (wordAnalysis) {
            return 'It has spaces'
        } else {
            return "It doesn't has spaces"
        }
    }
}



function isANumber(word) {
    let isANumber = typeof (word) === 'number' ? true : false
    return isANumber
}


// în order to avoid overwriting the module.exports, it is needed to do one of the following:

// 1)
module.exports.a = functions
module.exports.b = isANumber

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