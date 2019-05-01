function calculator (type, value) {

    // We have 2 different types within the calculator function (action and value), 
    // we need to initialize this function with an if statement to separate 
    // the type action from the type value.

    if(type === 'action') {

        // Define the clear button, it should clear the value, lefting only the placeholder of '0'
        
        if(value === 'c') {
            document.getElementById('inputOutput').value = ''
        // add all the arimetic symbols and the '.' to the element inputOutput
        } else if( value === '/' || value === '*' || value === '-' || value=== '+' || value === '.') {
                document.getElementById('inputOutput').value += value
        // putting all together, all the values, and the arimetic symbol
        } else {
            var firstValue = eval(document.getElementById('inputOutput').value)
            document.getElementById('inputOutput').value= firstValue
            

        }
        // If the value clicked is a number it should be placed in the inputOutput element
    } else if (type ==='value') {
        document.getElementById('inputOutput').value+=value

    }
}
