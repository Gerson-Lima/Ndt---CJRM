//EXIBIR VALORES DAS ATRIBUIÇÕES DA FUNÇÃO NO CONSOLE, FORA DO ESCOPO, COM INTERPOLAÇÃO, USANDO METODOS NOVOS SEM REDUNDÂNCIA.
const getCatInfo = () => {
    const name = 'Edgar'
    let age = 3
    const color = 'Laranja'

    return  {name, age, color} //CASO O NOME DA PROPRIEDADE E O VALOR DELA TIVER O MESMO NOME, APENAS O NOME FUNCIONA, PARA NÃO HAVER REDUNDÂNCIA. JS TRABALHA ISSO POR DEBAIXO DOS PANOS.
}

const { name, age, color } = getCatInfo() // {} RECEBE O VALOR DA VARIÁVEL/CONSTANTE DO OBJETO

console.log(`${name} é um gato ${color} de ${age} anos.`)


//ESCOPO LÉXICO, CHAMANDO UMA FUNÇÃO MAIS INTERNA PARA FORA.
const external = () => {
    const movie = 'Parasite'

    const internal = () => {
        const extraInternal = () => {
            console.log(movie.toLocaleUpperCase())
        }
        extraInternal()
    }
    internal()
}
external()

//EXIBIR NÚMEROS EM MODO REVERSO NO CONSOLE
let randomNumbers = [3, 2, 1, 0]
console.log(randomNumbers.reverse())


//REMOVER PRIMEIRO ITEM DO ARRAY
let crazyArray = [
    { prop1: '1', prop2: '2'},
    function getMessage () { return 'hi'},
    [ 5, 96, 53 ]
]

crazyArray.shift()
console.log(crazyArray)


//EXIBIR NO CONSOLE O NOME ENCONTRADO NO ARRAY USANDO O MÉTODO FIND.
const dogs = [
    {name: 'Zeca', age: 2, gender: 'Male', breed: 'Golden'},
    {name: 'Pietra', age: 3, gender: 'Female', breed: 'PitBull'},
    {name: 'Mephisto', age: 4, gender: 'Male', breed: 'Pug'},
    {name: 'Scar', age: 1, gender: 'Male', breed: 'Poodle'},
    {name: 'Lulu', age: 3, gender: 'Female', breed: 'Shiba inu'},
]

const nomedog = dogs.find(Item => Item.name === 'Mephisto')

console.log(nomedog)


//REFERENCIAR O TÍTULO H1 COM O SELETOR CSS, A PARTIR DE SUA CLASSE
const h1 = document.querySelector('.main-title')
console.log(h1)

//REFERENCIAR TODOS OS TÍTULOS SECUNDÁRIOS
const h2 = document.querySelectorAll('h2')
/*const Allh2 = document.querySelectorAll('.secondary-title') FORMA ALTERNATIVA, TAMBÉM FUNCIONAL*/
console.log(h2)