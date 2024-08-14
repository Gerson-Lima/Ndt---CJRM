//VERIFICAR SE CONTÉM IETM NO ARRAY USANDO IF, ELSE IF E ELSE
const fruits = ['morango', 'banana', 'mamão', 'pera']

if (fruits.includes('abacaxi')) {
    console.log('A string "abacaxi" existe no array fruits')

} else if (fruits.includes('pera')) {
    console.log('A string "pera" existe no array fruits')

} else {
    console.log('Nem "pera"e nem "abacaxi" existem no array fruits')
}


//EXIBIR SAUDAÇÃO CONFORME HORÁRIO ATUAL DE FORMA ESTÁTICA USANDO IF, ELSE IF E ELSE
const hour = 10.48
const isMorning = hour >= 6 && hour <= 11
const isAfternoon = hour >= 12 && hour <= 17

if (isMorning) {
    console.log('Bom dia!')

} else if (isAfternoon) {
    console.log('Boa tarde!')

} else {
    console.log('Boa noite!')
}


//EXIBIR SE A ENTREDA É GRÁTIS A PARTIR DE UMA CONDIÇÃO IF
const age = 24
let priceMessage = 'A entrada custa R$ 30,00 mangos.'
const isChild = age <= 7
const isOlder = age >= 65

if ( isChild || isOlder) {
    priceMessage = 'Para você, a entrada é grátis!'
}
console.log(priceMessage)


//CAMINHAR POR UM ARRAY, EMPURRAR NÚMEROS PARA UM OUTRO ARRAY VAZIO QUE SATISFAÇAM CONDIÇAO DO IF
const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99]
let aux = []

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const condition = number >= 11 && number <= 90

    if (condition) {
        aux.push(number)
    }
}
console.log(aux)


//EXIBIR SEPARAÇÃO DE TIPOS DE ITENS DENTRO DE UM ARRAY E INFORMAR QUANTIDADE
const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]

let numberAmount = 0
let booleanAmount = 0
let stringAmount = 0

for (let i = 0; i < crazyArray.length; i++) {
    const typeofItem = typeof crazyArray[i]
    
    const isItANumber = typeofItem === 'number'
    const isItABoolean = typeofItem === 'boolean'

    if (isItANumber) {
        numberAmount++
    } else if (isItABoolean) {
        booleanAmount++
    } else {
        stringAmount++
    }

}
console.log(`O crazyArray tem ${booleanAmount} boleans, ${numberAmount} números e ${stringAmount} strings.`)


//EXIBIR A SEPARAÇÃO DE NÚMEROOS PARES E ÍMPARES DE DENTRO DE UM ARRAY
const randomNumbers = [73, 4, 67, 10, 31, 58]

let oddNumbers = []
let evenNumber = []

for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0) {
        evenNumber.push(randomNumbers[i])
    } else {
        oddNumbers.push(randomNumbers[i])
    }
}

const oddNumbersString = oddNumbers.join(', ').replace(', 3', ' e 3')
const evenNumberString = evenNumber.join(', ').replace(', 5', ' e 5')

console.log(`Números ímpares: ${oddNumbersString}. Números pares: ${evenNumberString}`)