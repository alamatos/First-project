arithmeticAverage = {
    arAverage: (grade1, grade2) => {
        let result = (grade1+grade2)/2
        return `The first grade is ${grade1}, the second grade is ${grade2}, which give us an arithmetic average of ${result}.`
    }
}

module.exports = {
    exercise8: arithmeticAverage
}