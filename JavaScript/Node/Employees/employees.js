const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const chinese = f => f.pais === 'China'
const women = f => f.genero === 'F'

const lowerWage = (employee, actualEmployee) => {
    return employee.salario < actualEmployee.salario ? employee : actualEmployee
}

axios.get(url).then(response => {
    const employees = response.data
    console.log(employees)


const employee = employees
.filter(chinese)
.filter(women)
.reduce(lowerWage)
 
console.log(employee)
})