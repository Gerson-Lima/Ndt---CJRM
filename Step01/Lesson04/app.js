//EXIBIR ÍNDICES DO ARRAY NUMA TEMPLATE STRING, SEM REFERENCIAR OS ARRAYS
const my3FavoritesSeries = ['The Walking Dead', 'Game of Thrones', 'The Boys']
const sentence = `Minhas 3 séries favoritas são: ${my3FavoritesSeries.join(', ')}`.replace(', T', ' e T')

console.log(sentence)


//EXIBIR, COM BOOLEAN, SE O ARRAY DE CIMA TEM 3 ITENS EM SEU ÍNDICE
console.log(my3FavoritesSeries.length ===  3)


//VERIFICAR SE HÁ UM ITEM ESPECÍFICO NO ARRAY COM BOOLEAN
const randomTVShow = 'Vikings'
const isRandomTVShowIncluded = my3FavoritesSeries.includes(randomTVShow)

console.log(isRandomTVShowIncluded)


//EXIBIR O TIPO DE UMA CONSTANTE
const typeSentence = `O tipo de dado que a const "isRandomTVShowIncluded" armazena é: ${typeof isRandomTVShowIncluded}.`

console.log(typeSentence)


//CONVERSÃO DE BOOLEAN PARA STRING E TROCA DE LETRA 
const numTypeSentence = 39

console.log(`A string que a "typeSentence" armazena tem mais de ${numTypeSentence} caractere? ${String(typeSentence.length > numTypeSentence).replace('t', 'T')}.`)


//INTERPOLAÇÃO COM TEMPLATE STRING
const falsyValues = [0, "", false, '', ``, null, undefined, NaN]

console.log(`Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o ${falsyValues[2]}`)


//EXIBIR O BOOLEAN DA SOMA DE NULL + 1 = 1 (TRUE)
const crazyOperation = null + 1
const crazyConvertion = Boolean(crazyOperation)

console.log(crazyConvertion)


//SOMA DE CONSTANTES, INTERPOLAÇÃO COM RESULTADO BOOLEAN
const ages = [31, 82, 61, 11]
const agesSum = ages[0] + ages[2]

console.log(agesSum)
console.log(`A soma entre o 1º e o 3º item de "ages" é ≤ a 92. Essa afirmação é: ${agesSum <= 92}`)


//VERIFICA O TIPO DE UMA CONSTANTE
const isNotAString = typeof randomTVShow !== 'string'

console.log(isNotAString)


//VERIFICA, USANDO BOOLEAN, SE EXISTE UM DETERMINADO NÚMERO NO ARRAY (ITENS INEXISTENTES NO SEMPRE RETORNAM -1, POIS O ARRAY GUARDA ITENS EM CONTAINERS REPRESENTADOS POR NÚMEROS REAIS, COMEÇANDO EM 0)
const evenNumbers = [0, 2, 4, 6, 8, 10]

console.log(evenNumbers.indexOf(8) !== -1)

