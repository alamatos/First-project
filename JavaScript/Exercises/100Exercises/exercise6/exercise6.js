const numberAnalysis = {
    previousAndNext: (number) => {
        let previous = number-1
        let next = number+1
        return `The previous number is ${previous} and the next one is ${next}`
    }
}
console.log(numberAnalysis.previousAndNext(10))
 
module.exports = {
    exercise6: numberAnalysis
}