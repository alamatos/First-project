//ask to the user the operation desired as well as the numbers to proceed with the operation selected

var operation= prompt('What operation would you like to proceed? You can choose between addition, subtraction, multiplication and division.')

var value1= parseFloat(prompt('Can you please give me the first number?'))

var value2=parseFloat( prompt('Can you please give me the secound number?'))

//define a function with the information from the user of the values and the operations

function calculator (value1, value2, operation) {
    var result=0

        if (operation== 'addition') {

            result = value1 + value2    

        } else if (operation== 'subtraction') {
            result= value1 - value2
        } else if (operation== 'multiplication') {
            result= value1 * value2
            
        } else if (operation== 'division') {
            result= value1 / value2

        } else {
            result='Please insert a correct operation'
        }
        return result
}


document.write('The ' + operation + ' of the ' + value1 + ' with the '+ value2 + ' is equal to ' + calculator(value1,value2,operation) + '.')