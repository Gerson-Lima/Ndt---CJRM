//ARRAY COM PUSH PARA ADICIONAR
let brazilianFoods = []
brazilianFoods.push('Coxinha', null, 'Brigadeiro')

// console.log(brazilianFoods)


//REATRIBUIR UM VALOR AO ARRAY PARA SUBSTITUIÇÃO
brazilianFoods[1] = 'Pão de queijo'

// console.log(brazilianFoods[1])


//TEMPLATE STRING PARA INFORMAR QTD E ITENS DENTRO DO ARRAY  
const foodsInfo = `Até aqui o array "brasiliaFodds" possui ${brazilianFoods.length} itens. Itens: ${brazilianFoods[0]}, ${brazilianFoods[1]} e ${brazilianFoods[2]}.`

// console.log(foodsInfo)


//CONCATENAÇÃO DE ARRAYS
const maleDogNames = ['Chico', 'Zeca']
const famaleDogNames = ['Lilica', 'Matilda']
let dogNames = maleDogNames.concat(famaleDogNames)

// console.log(dogNames)


//ARRAYS CONCATENADAS COM SEPARADORES
// console.log(dogNames.join(', '))


//EXIBIR ÚLTIMO ITEM, INDEPENDENTE DO TAMANHO DO ARRAY
dogNames.pop()

// console.log(dogNames[dogNames.length -1])


//TEMPLATE STRING COM PRIMEIRAS LETRAS DE ITENBS DE UM ARRAY (ADD ITEM ANTES)
dogNames.push('Nina')
const initials = `${dogNames[0][0]}, ${dogNames[1][0]}, ${dogNames[2][0]}, ${dogNames[3][0]}`

// console.log(initials)


//LETRAS MINUSCULAS
// console.log(initials.toLowerCase())


//EXIBIR PARTE DE UM ÍNDICE DO ARRAY, SUBSTITUIR LETRA E INTERPOLAR COM TEMPLATE STRING
const dessert = `${dogNames[0].slice(3)}${dogNames[1].slice(2)}${dogNames[3].slice(2)}`.replace('n', 'd')

// console.log(`A ${dessert} é um doce à base de coco, tradicional na América Latina e em Angola.`)


//OPERADORES MATEMÁTICOS COM ÍNDICES DO ARRAY
let oddNumbers = [3, 5, 7]
oddNumbers[1] += 4

// console.log(oddNumbers[1] ** 3)