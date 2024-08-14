//IVERTER OS VALORES DOS BOOLEANS
// console.log(true, false)
console.log(!true, !false)


//EXIBIR ANIMAL ESPECÍFICO DE UM ARRAY
const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']

if (!animals.includes('leão')) {
    console.log('Leão não existe no array animals.')
} else {
    console.log('Leão existe no array animals.')
}


//SOMAR ITENS E UM ARRAY, MAS COM UM BREAK EM UM DETERMINADO VALOR
const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]

let sumResult = 0
const limit = 400

for (let i = 0; i < randomNumbers.length; i++) {
    if (sumResult > limit) {
        console.log(`A soma ultrapasou ${limit}. Até aqui, o valor atual é ${sumResult}.`)
        break
    }
    sumResult += randomNumbers[i]
}
console.log (sumResult)


//CONCATENAR STRINGS DO ARRAY COM UMA EXCESÃO 
const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria']

let newSentence = ''

for (let i = 0; i < sentence.length; i++) {
    const word = sentence[i]

    if (word === 'certeza') {
        continue
    }
    newSentence += `${word} `
}
console.log(newSentence)

//ITERAÇÕES DE DIFERENTES TIPOS DENTRO DE UM ARRAY E SUAS INFORMAÇÕES
const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'GitHub']

let stringAmount = 0
let booleanAmount = 0
let totalInterations = 0
const first4Strings = []

for (let i = 0; i < randomValues.length; i++) {
  if (stringAmount === 4) {
    break
  }

  if (typeof randomNumbers[i] === 'string') {
    stringAmount++
    first4Strings.push(randomNumbers[i])
  }

  if (typeof randomNumbers[i] === 'boolean') {
    booleanAmount++
  }

  totalInterations++
}
console.log(`3 informações sobr eo array randomValues:\n
- As primeiras 4 strings são ${first4Strings.join(', ').replace(', ', ' e G')};\n
- Até que as primeiras 4 strings fossem iteradas, ${booleanAmount} booleans foram iterados;\n
- O array foi iterado por ${totalInterations} vezes.`)


//EXIBIR BEBIDA A PARTIR DE UM SWITCH CASE
const drinkType = 'água'
let drinkMessage = null

switch (drinkType) {
    case 'água':
        drinkMessage = 'Substância química cujas moléculas são H2O'
        break

    case 'refrigerante':
        drinkMessage = 'Bebida não alcoólica, com água e açúcar'
        break

    case 'suco':
        drinkMessage = 'Bebida produzida a partir de frutas'
        break

    default:
        drinkMessage = 'Bebida desconhecida'
}
console.log(drinkMessage)


//EXIBIR SWITCH CASE E TESTAR VALORES 
const number = 2
const numberMessage = 'O valor de "number" é'

switch (number){
    case 0:
        console.log(`${numberMessage} ${number}`)
        break

    case 1:
        console.log(`${numberMessage} ${number}`)
        break

    default: 
        console.log(`${numberMessage} qualquer número, exceto 0 e 1`)
}


