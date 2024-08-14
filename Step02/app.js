//EXIBIR NÚMEROS USANDO WHILE LOOP
let i = 0
while (i <= 5) {
    console.log(i)
    i++
}

//EXIBIR NÚMEROS USANDO FOR LOOP
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

//REPETIR FRASE COM MUDANÇA NO NÚMERO DE VEZES
for (let i = 1; i <= 10; i++) {
    console.log(`Esta é a ${i}ª vez que esta frase é exibida no console.`)
}

//LOOP COM CIDADES EM ARRAYS
const cities = ['Guamaré', 'Pau dos Ferros', 'João Pessoa']

let upperCaseCities = []

for (let i = 0; i < cities.length; i++) {
    upperCaseCities.push(cities[i].toUpperCase())
}
console.log(upperCaseCities)


//EXIBIR NOMES EM ARRAY COM TEMPLATE HTML E FOR LOOP
const names = ['José', 'Maria', 'João']

let HTMLTemplate = ''

for (i = 0; i < names.length; i++) {
    HTMLTemplate += `<li>${names[i]}</li>`
}
console.log(HTMLTemplate)


//EXIBIR SE A SOMA DE STRINGS DO ARRAY É TRUE OU FALSE (TRASNFORMANDO EM NUMBER)
const numbers = ['91', '5', '30', '97', '83', '31']

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i])
}
console.log(sum === 337)


//SOMA DE MATRIZ USANDO FOR LOOP
const arrays = [
    [4, 32, 8],
    [64, 8, 32],
    [8, 32, 16],
    [2, 8, 4]
]

let sumArrays = 0

for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) { 
        sumArrays += arrays[i][j]
    }
}
console.log(sumArrays)
