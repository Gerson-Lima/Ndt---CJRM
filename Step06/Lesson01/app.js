//AO ENVIAR O FOMR, FAZER A PÁGINA NÃO RECARREGAR
const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()

    const input = event.target.input
    const regex = /[a-zA-Z0-9]{7,11}/

    if (regex.test(input.value)) {
        alert('O valor inserido no input é válido =)')
        input.value = ''
        input.focus()
        return
    }

    alert('Valor inválido =(')
    input.value = ''
    input.focus()
})


//EXIBIR NO CONSOLE O TEXTO INSERIDO NO INPUT


//EXIBIR NO CONSOLE UM BOOLEAN COM O RESULTADO DO MATCH DA REGEX
const p = document.querySelector('p')
const regex = /documentation/
const result = regex.test(p.textContent)

console.log(result)


//EXIBIR MATCH DA REGEX NO CONSOLE
const B99message = 'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta'
const B99Regex = /[A-Z0-9]{3}/
const B99Result = B99Regex.test(B99message)

console.log(B99Result)


//MODIFICAR CONST PARA QUE O VALOR DO CONSOLE SEJA TRUE
const word = 'NASA'
const NASARegex = /^[A-Z]{4}$/
const NASAResult = NASARegex.test(word)

console.log(NASAResult)


//PERMITIR ENVIO COM CARACTERES NO MÁXIMO ATÉ 7.


//PERMITIR ENVIO COM CARACTERES DE 7 A 11, MAS SEM CARACTERES ESPECIAIS.