var nota = prompt('Qual é a tua média?')
var media = 7
var faltas = prompt('Quantas faltas teve?')
var faltasPermitidas = 5


// if (nota >= media && faltas<=faltasPermitidas) {
//     document.write('Aprovado')
//  } else if (nota>= media && faltas>faltasPermitidas){
//     document.write('Reprovado por faltas') 
//     } else {
//      document.write('Reprovado')
//  }

//  operador ternário 

var resultado = (nota>= media && faltas <=faltasPermitidas) ? 'Aprovado' : 'Reprovado'

document.write(resultado)

