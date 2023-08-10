// criar um aplicativo de frases motivacionais
//declaration - dleclaração da função
//function statement


function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}

// executar a função

createPhrases()

console.log('Fim do Programa')

//Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à cer executado } e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código.

// parâmetros

const sum = function (number1, number2) {
    console.log(number1 + number2)
}

sum (2, 3) // argumentos

//funcition scope

let subject

function creatThink () {
    subject = 'study'
}

console.log(subject)
creatThink()
console.log(subject)
