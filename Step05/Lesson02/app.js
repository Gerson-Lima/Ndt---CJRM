//EXIBIR H1 MAIÚSCULO USANDO DOM
const title = document.querySelector('h1')

title.textContent = title.textContent.toLocaleUpperCase()


//ADICIONAR OS NÚMEROS DO ARRAY DENTRO DA LISTA NÃO ORDENADA (UL) USANDO UMA LISTA DE ITENS (LI)
const numbers = [ 53, 24, 3 , 8, 1, 6, 57, 80, 77, 98, 55 ]

const ul = document.querySelector('.numbers')

const insertNumberIntoUl = number => {
    ul.innerHTML += `<li class="number">${number}</li>`
}

numbers.forEach(insertNumberIntoUl)


//EXIBIR NÚMEROS PARES DE UMA COR E ÍMPARES DE OUTRA COR
const listLi = document.querySelectorAll('.number')

listLi.forEach(liNum => {
   const number = liNum.textContent

    if (number % 2 === 0) {
        liNum.style.color = 'blue'
    } else {
        liNum.style.color = 'red'
    }
})


//ADICIONAR CLASSE NO CORPO INDEX.HTML USANDO DOM E CSS
const body = document.querySelector('body')

body.classList.add('body-background')


//ADICIONAR LINK AO HREF DO INDEX.HTML
const link = document.querySelector('.link')

const URLLink = 'http://gerson-lima.github.io/gersonlima/'

link.href = URLLink
//FORMA ALTERNATIVA USANDO SETATRUBUTE:
// const link = document.querySelector('a')
// link.setAttribute('href','http://gerson-lima.github.io/gersonlima/')


//EXIBIR O VALOR DO ATRIBUTO ACIMA NO CONSOLE
console.log(link.getAttribute('href'))


//EXIBIR NO CONSOLE UM OBJETO COM TODAS AS PROPRIEDADES CSS QUE PODEM SER MANIPULADAS VIA JS NO H1
console.log(title.style)


//REMOVER CLASSE BACKGROUND-BODY
body.classList.remove('body-background')


//REMOVER CLASSE LINK DA ÂNCORE DO INDEX.HTML SEM ULTILIZAR O REMOVE()
link.classList.toggle('link')