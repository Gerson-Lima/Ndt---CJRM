//EXIBIR O OBJETO "CAT" COM SUAS PROPRIEDADES E RESPECTIVOS VALORES.
let cat = {
    name:'Edgar',
    age: 8,
    color: 'Laranja',
    bestFriends: ['Ronaldinho', 'Chopin'],
    sound: function() {
        return 'MIAAAAAU'
    }
}

console.log(cat)


//TEMPLATE STRING COM OS DADOS DO OBJETO "CAT".
console.log(`Aé aqui, o "cat" possui as seguintes propriedades e valores: "name", que recebu ${cat.name}, "age", que recebeu ${cat.age}, "color", que recebeu ${cat.color}, "best friends", que recebeu um array com os itens ${cat.bestFriends[0]} e ${cat.bestFriends[1]}, e "sound", que recebeu uma função que retorna ${cat.sound()}`)


//ADICIONAR + 2 ANOS À IDADE DO "CAT".
cat.age += 2

console.log(cat.age)


//ADICIONAR AMIGO DO GATO AO ARRAY DE AMIGOS DO OBJETO "CAT"
const addFriendCat = (friend) => {
    cat.bestFriends.push(friend)
}
addFriendCat('Mephisto')

console.log(cat.bestFriends)


//ADICIONAR NOVA COR AO GATO, USANDO A SINTAXE DE COLCHETES
const changeColorCat = object => {
    object['color'] += ` e branco`
}
changeColorCat(cat)
console.log(cat['color'])


//VERIFICAR O TIPO DO OBJETO E RETORNAR UM BOOLEAN
const isAnObject = value => typeof value === 'object'

console.log(isAnObject(cat))


//CRIAR NOVO OBJETO E EXIBIR SOMA DA PROPRIEDADE AGE COM O OBJETO ANTERIOR
let dog = {
    name: 'Bolt',
    age: 3,
    color: 'amarelo',
    bestFriends: ['Rex', 'Joaquim'],
    sound: () => 'au au'
}

const getAgeMessage = (cat, dog) => `A soma das idades de ${cat.name} e ${dog.name} é ${sumAge}`
const sumAge = cat.age + dog.age
const ageMessage = getAgeMessage(cat, dog)

console.log(ageMessage)


//REFATORAR CÓDIGO PROPOSTO PARA CÓDIGO MAIS CONCISO, PORÉM, MENOS LEGÍVEL (ABAIXO)
const isAnSUV = car => 
    ['Honda HR-V',
    'Jeep Renagade',
    'Ford EcoSport',
    'Hyundai Creta'].includes(car)

console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))


//EXIBE A MENSAGEM DE CADA TIPO ESPECIFICADO
const getTypeDefinition = (type) => {
    const obj = {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado.',
        object: 'Arrays, Datas, Objetos literais, Funções, etc.'
    }
    return obj[type]
}

console.log(getTypeDefinition('null'))
console.log(getTypeDefinition('undefined'))
console.log(getTypeDefinition('object'))