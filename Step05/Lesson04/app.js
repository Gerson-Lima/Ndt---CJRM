//AO CLICAR NO FILHO DA DIV, EXIBIR APENAS O PRIMEIRO TEXTO.
const div = document.querySelector('div')
const elementsInsideDiv = Array.from(div.children)
const h2 = document.querySelector('h2')
const egg = document.querySelector('.egg')
const button = document.querySelector('button')

elementsInsideDiv.forEach(element => {
    element.addEventListener('click', event => {
        event.stopPropagation()
        h2.textContent = `Clicou no ${event.target.tagName.toLowerCase()}, filho da div.`
    })
})

div.addEventListener('click', () => {
    h2.textContent = 'Clicou na div.'
})

h2.addEventListener('copy', () => {
    console.log('Texto copiado!')
})

egg.addEventListener('mousemove', event => {
    egg.textContent = `Eixo X: ${event.offsetX} | Eixo Y: ${event.offsetY}`
})

button.addEventListener('click', () => {
    egg.style.background = 'yellow';
});


//EXIBIR O NOME DA TAG FILHO DA DIV QUE FOI CLICADO ANTERIORMENTE.


//EXIBIR O TEXTO COM O NOME DA TAG CLICADA NO H2.


//EXIBIR A MENSAGEM "TEXTO COPIADO!" NO CONSOLE, QUANDO O TEXTO DA H2 FOR COPIADO.


//EXIBIR CORDENADAS DO CURSOR DO MOUSE, QUANDO ELE ESTIVER DENTRO DO OVO.


//EXIBIT TEXTO DE CONFIRMAÇÃO, CASO HAJA UM(A) FRONT-END DEVELOPER NO ARRAY.
 const people = [
    { id: 1, name: 'Thácila', profession: 'Dentista' },
    { id: 2, name: 'Paulo', profession: 'Físico' },
    { id: 3, name: 'Carol', profession: 'Veterinária' },
    { id: 4, name: 'Wiliane', profession: 'Matemática' },
    { id: 5, name: 'Júlio', profession: 'Engenheiro Civil' },
    { id: 6, name: 'Ayla', profession: 'Gerente de Marketing' },
    { id: 7, name: 'Gerson', profession: 'Front-end Developer' },
    { id: 8, name: 'Alan', profession: 'Piloto' },
    { id: 9, name: 'Dalyson', profession: 'Advogado' },
 ]

const isSomePersonFrontDev = people.some(person => person.profession === 'Front-end Developer')

 if (isSomePersonFrontDev) {
    console.log(`O array people contém, no mínimo, um(a) Front-end Developer.`)
 }



