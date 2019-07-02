numberManipulation = {
    double: (number) => {
        let times2 = number * 2
        return times2
    },
    triple: (number) => {
        let times3 = number * 3
        return times3
    },
    squareRoot: (number) => {
        let sqrtNumber = Math.sqrt(number)
        return sqrtNumber
    }
}

module.exports = {
    exercise7: numberManipulation
}