//RETURN EM FUNCTIONS, PARAMETROS E ARGUMENTOS
function multiply (num1, num2) {
    return num1 * num2
}
console.log(multiply(5, 5))


//RETURN EM FUNCTIONS EXPRESS, PARAMETROS COM RESULTADOS PADRÃO E ARGUMENTOS
const divide  = function (num1 = 0, num2 = 0) {
    return num1 / num2
}
console.log(divide(5, 5))


//EXIBIR UMA STRING 7 VEZES (FUNCTION DESNECESSÁRIA PARA O QUE A QUESTÃO PEDIA. BASTAVA O FOR LOOP)
function repeat (value = 'Passe um valor como argumento') {
    return value
}

for (let i = 1; i <= 7; i++) {
    console.log(`Esta é a ${i}ª vez que esta string é exibida`)
}


//FUNCÃO QUE CHAMA O CONSOLE E FUNÇÃO QUE RETORNA UM NOVO ARRAY COM LETRAS MAIÚSCULAS. LOG É CHAMADO ABAIXO COM ARGUMENTOS REFERENCIADOS À FUNCTION QUE RETORNA O CONSOLE
const log  = function (value) {
    console.log(value)
}
const millenialWords = ['lol', 'yolo', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hashtag']
const transformToUppercase = function (array = []) {
let newArray = []         
    
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].toUpperCase())
    }
    return newArray
}
log(transformToUppercase(millenialWords))


//EXIBIR NÚMERO PAR OU IMPAR DE UM ARRAY
const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

let positivoNumberCounter = 0
let negativeNumberCounter = 0

function PNumber (number = 0) {
    return number >= 0
}

for (let i = 0; i < randomNumbers.length; i++) {
    if (PNumber(randomNumbers[i])) {
        positivoNumberCounter++
    } else {
        negativeNumberCounter++
    }
}
console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positivoNumberCounter} positivos e ${negativeNumberCounter} negativos.`)


//EXIBIR NÚMEROS ÍMPARES DE UM ARRAY
const getOddNumbers = function(numbers = []) {
    let newArray = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            newArray.push(numbers[i])
        }
    }
    return newArray

}
const oddNumbers = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
console.log(oddNumbers)


//CONCATENAÇÃO DE STRINGS EM ARRAY DE FUNÇÕES USANDO FOR LOOP
const functions = [
    function () { return 'Plymouth' },
    function () { return 'é' },
    function () { return 'uma' },
    function () { return 'cidade' },
    function () { return 'fantasma' },
    function () { return 'localizada' },
    function () { return 'na' },
    function () { return 'ilha' },
    function () { return 'de' },
    function () { return 'Montserrat,' },
    function () { return 'um' },
    function () { return 'território' },
    function () { return 'ultramarino' },
    function () { return 'do' },
    function () { return 'reino' },
    function () { return 'unido,' },
    function () { return 'localizado' },
    function () { return 'na' },
    function () { return 'cadeia' },
    function () { return 'de' },
    function () { return 'ilhas' },
    function () { return 'de' },
    function () { return 'Sotavento,' },
    function () { return 'nas' },
    function () { return 'pequenas' },
    function () { return 'Antilhas' },
    function () { return 'Índias' },
    function () { return 'Ocidentais.' }
]

let sentences = ''

for (let i = 0; i < functions.length; i++) {
    const string = `${functions[i]()} `
    sentences += string
}
console.log(sentences)







