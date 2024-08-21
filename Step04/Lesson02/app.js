//DECLARAR CONSTANTE COM ESCOPO GLOBAL 
const name = 'Gerson'

//CRIAR FUNÇÃO COM VARIÁVEL E TENTAR CHAMAR FORA DO ESCOPO
function showAge() {
    let age = 24
    console.log(age)
}
showAge()


//CRIAR OBJETO CARRO E DAR PROPRIEDADES PARA ELE, COM MÉTODOS ESPECIFICADOS ABAIXO E REFERENCIÁ-LO USANDO O THIS
let car = {
    name: 'Corolla',
    brand: 'Toyota',
    color: ['vermelha', 'prata', 'preto'],
    isRunning: false,
    run: function() {
        this.isRunning = true
        return `O ${this.name} está em movimento`
    },
    stop: function() {
        this.isRunning = false
        return `O ${this.name} está parado`
    },
    getColorsmessage: function() {
        return `O ${this.name} está disponível nas cores ${this.color[0]}, ${this.color[1]} e ${this.color[2]}`
        //ou usando .join(', ') para mesclar itens do array com um separador ",", encadeado com o método replace -1 para referenciar o último item do array e substituir a vírgula por "e".
    }
}

//FAZER O CARRO ANDAR
console.log(car.run())
console.log(car.isRunning === true)

//FAZER O CARRO ANDAR
console.log(car.stop())
console.log(car.isRunning === false)

//EXIBIR AS CORES DISPONÍVEIS DO CARRO
console.log(car.getColorsmessage())

//EXIBIR NO CONSOLE UMA MENSAGEM REFERENCIANDO O CARRO, UTILIZANDO NOTAÇÃO DE COLCHETES COMO REFERÊNCIA
console.log(`O carro é um ${car['brand']} ${car['name']}`)