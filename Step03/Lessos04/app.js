//CONVERTER FUNCTION PARA ARROW FUNCTION
// function convertToString (value) {
//     return String(value)
// }

const convertToString = value => String(value)
console.log(typeof convertToString(true))


//EXIBIR QTD DE CARACTERES DE UMA STRING
const getStringLength = string => string.length

console.log(getStringLength('hello'))


//EXIBIR FRASE COM LETRAS MINÚSCULAS NO CONSOLE
const convertToLowerCase = string => string.toLowerCase()

console.log(convertToLowerCase('CHOCOLATE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO'))


//ENCONTRAR  CARACTERE DENTRO DE UMA STRING  
const getIndex = (character, string) => string.indexOf(character)

console.log(getIndex('5', '12345'))


//VERIFICAR SE EXISTE UM ITEM DENTRO DE UM ARRAY 
const isItemIncluded = (item, array) => array.includes(item)

console.log(isItemIncluded(3, [7, 3, 1]))


//EXIBIR UMA CONCATENAÇÃO DE ARRAYS
const ConcatArrays = (array1, array2) => array1.concat(array2)

console.log(ConcatArrays([1, 2, 3], [3, 2, 1]))


//EXIBIR ARRAY COM SEU ÚLTIMO ITEM REMOVIDO
const removeLastItem = array => {
    array.pop()
    return array
}
removeLastItem([1, 2, 3])


//EXIBIR SE VALOR É NULL
const isNull = value => value === null
console.log(isNull(null))


//INVOCAR CALLBACK
const invokeCallback = callback => {
    callback()
}

const logName = () => {
    console.log('Gerson Lima')
}
invokeCallback(logName)


//INVOCA CALLBACK PARA MOSTRAR UM TRIPLO DE UM NÚMERO
const callCallback = (value, callback) => {
    return callback(value)
}

const triple = number => number * 3

console.log(callCallback(33, triple))


//EXIBIR ITENS DE UM ARRAY USANDO FOREACH
const numbers = [1, 2, 3]
const showNumberInfo = (item, index, array) => {
    console.log(`O ${item}º item do array [${array.join(', ')}] é o ${index + 1}`)
}
numbers.forEach(showNumberInfo)


//CONVERTER FOR LOOP EM FOREACH
const letters = ['v', 'e', 'p']
let letterCopy = []

// for (let i = 0; i < letters.length; i++) {
//     letterCopy.push(letters[i])
// }

letters.forEach(letter => {
    letterCopy.push(letter)
})
console.log(letterCopy)


// EXIBIR PARAGRAFOS NO HTML A PARTIR DE LOOP E INTERPOLAÇÃO
const section = document.querySelector('[data-js="section"]')

const review = [
    'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido!',
  
]

let paragraphs = ''

review.forEach(paragraph => {
    paragraphs += `<p>${paragraph}</p>`
})

section.innerHTML = paragraphs


//FUNCTION ARROW, PARAMETRO COM ARRAY, SWITCH CASE PARA EXIBIR QTD DE CURTIDAS USANDO INTERPOLAÇÃO COM TEMPLATE STRING.
const getLikesMessage = (names = []) => {
const firstName = names[0]
const secondName = names[1]
const thirdName = names[2]
const totalNamesMinusTwo = names.length - 2

    switch (names.length) {
        case 0:
            return 'Ninguém curtiu isso'
        case 1:
            return `${firstName} curtiu isso`
        case 2:
            return `${firstName} e ${secondName} curtiram isso`
        case 3:
            return `${firstName}, ${secondName} e ${thirdName} curtiram isso`
        default:
            return `${firstName}, ${secondName} e mais ${totalNamesMinusTwo} pessoas curtiram isso`
    }
}

console.log(getLikesMessage(['Gerson', 'Alana', 'Maria', 'Douglas']))