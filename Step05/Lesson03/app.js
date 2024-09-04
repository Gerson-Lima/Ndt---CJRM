//ADICIONANDO AOS FILHOS DA UL (LI), UMA CLASSE VIDEO
const ul = document.querySelector('.videos')
const lis = Array.from(ul.children)

lis.forEach(li => {
    li.classList.add('video')
})

console.log(lis)


//EXIBIR QUEM É O ELEMENTO PAI DO H2
const h2 = document.querySelector('h2')

console.log(h2.parentElement)


//EXIBIR QUEM É O PRÓXIMO ELEMENTO IRMAO DO H1
const h1 = document.querySelector('h1')
console.log(h1.nextElementSibling)


//EXIBIR QUEM É O ELEMNTO IRMÃO ANTERIOR DA UL
console.log(ul.previousElementSibling)


//EXIBIR NO CONSOLE A LI QUE FOI CLICADA 
const showClickedLi = event => {
    console.log(event.target)
}

const addClickEvent = li => {
    li.addEventListener('click', showClickedLi )
}

lis.forEach(addClickEvent)


//EXIBIR CADA INFORMAÇÃO ABAIXO COMO UMA LI, DENTRO DA UL, A PARTIR DO EVENTO CLICK
const videos = [{
    name: 'Como o promisse all funciona | JS',
    lenght: '00:01:52'
}, {
    name: 'Como refatorar um for loop | JS',
    lenght: '00:04:18'
}, {
    name: 'Como fazer requisições HTTP com o método fetch | JS',
    lenght: '00:02:55'
}]

const button = document.querySelector('button')
button.addEventListener('click', () => {
    videos.forEach(video => {
        ul.innerHTML += `<li>${video.name} - Duração: ${video.lenght}</li>` 
    })
})


//REMOVER ELEMENTOS DO BODY, CASO O H1 SEJA CLICADO
const body = document.body

h1.addEventListener('click', () => {
    body.remove()
})