// console.log('Grandes poderes trazem grandes responsabilidades.')


//CONCATENAÇÃO
const tom = 'Tom'
const firstTom = 'Hanks'
const secondTom = 'Cruise'

const myFavoriteTom = tom + ' ' + firstTom

// console.log(myFavoriteTom)


//CONCATENAÇÃO DE ÍNDICES 
const programmingLanguage = 'JavaScript'
const js = programmingLanguage[0] + programmingLanguage[4]

// console.log(js)


//CONCATENAÇÃO DE ÍNDICES 
const mozilla = 'Mozilla Developer Network'
const mdn = mozilla[0] + mozilla[8] + mozilla[18]

// console.log(mdn)


//TAMANHO DA STRING 
// console.log(programmingLanguage.length)


//MOSTRAR ÚLTIMA LETRA INDEPENDENTE DA PALAVRA
let randomWord = 'Araponga'

// console.log(randomWord[randomWord.length - 1])


//STRING LOWERCASE
const summerMessage = 'O VERÃO CHEGA NESTE FIM DE SEMANA'

// console.log(summerMessage.toLowerCase())


//STRING UPPERCASE
const winterMessage = 'o inverno está chegando'

// console.log(winterMessage.toUpperCase())


//EXIBIR PRIMEIRO INDEX DE UM CARACTERE ESPECÍFICO
// console.log(winterMessage.indexOf('v'))


//EXIBIR ÚLTIMO INDEX DE UM CARACTERE ESPECÍFICO
// console.log(winterMessage.lastIndexOf('n'))


//INDEX ESPECÍFICO DENTRO DE UMA STRING
const harryPotterAuthor = 'J.K. Rowling'

// console.log(harryPotterAuthor.slice(0, 4))


//SUBSTITUIR STRING ESPECÍFICA
const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!'
const realBestMovie = bestMovie.replace('La la land', 'Moonlight')

// console.log(realBestMovie)


//ARMAZENAR RESTO DE DIVISÃO
const reminder = 10 % 3
// console.log(reminder)


//INCREMENTAR VALOR DE UMA VARIÁVEL
let episodes = 6
episodes++

// console.log(episodes)


//DECREMENTAR VALOR DE UMA VARIÁVEL
episodes--

// console.log(episodes)


//ATUALIZAR VALOR DE UMA VARIÁVEL
episodes += 4

// console.log(episodes)


//CONCATENAR STRING COM NÚMERO
const allEpisodes = 'O nº de episódios é: ' + episodes

// console.log(allEpisodes)


//ESCAPAR CRACTER COM CONTRABARRAS
const bookMessage = '\'O conto de Aia\' é um dos livros mais vendidos da década'

// console.log(bookMessage)


//CARACTERES INICIAIS MAIÚSCULOS 
const name = 'walter white'
let newName  = name[0].toUpperCase() + name.slice(1, 6) + ' ' + name[7].toUpperCase() + name.slice(8)

// console.log(newName)


//USANDO DO TEMPLATE STRING
newName = `${name [0].toUpperCase()}${name.slice(1,6)} ${name[7].toUpperCase()}${name.slice(8)}`
console.log(newName)
