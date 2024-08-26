//EXIBIR ITENS DO ARRAY COM INTERPOLAÇÃO E ADIÇÃO DE TEXTO COM CALLBACK
const best2019Movies = [
    {title: 'Parasita', directedBy: 'Bong Joon-ho'},
    {title: 'Bacurau', directedBy: 'Kleber Mendonça Filho'},
    {title: 'O Irlandês', directedBy: 'Martin Scorsese'},
    {title: 'Entre Facas e Segredos', directedBy: 'Rian Johnson'},
    {title: 'Turma da Mônica: Laços', directedBy: 'Daniel Rezende'},
    {title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey'},
    {title: 'Klaus', directedBy: 'Sérgio Pablos'},
    {title: 'Fora de Série', directedBy: 'Olívia Wilde'},
    {title: 'Shazam!', directedBy: 'David F. Sandberg'},
    {title: 'História de um Casamento', directedBy: 'Noah Baumbach'},
    {title: 'Varda por Agnès', directedBy: 'Agnès Varda'},
    {title: 'A Vida Invisível', directedBy: 'Karim Aïnouz'}
]
let message = 'Segundo o site Omelete, os melhores filmes de 2019 são:'

best2019Movies.forEach(movie => {
    message += `\n - ${movie.title}, dirigido por ${movie.directedBy}`
})
console.log(message)


//EXIBIR ITENS DO POTIFÓLIO NA CALLBACK
const portifolio = {
    name: 'Gerson Lima',
    siteURL: 'http://gerson-lima.github.io/gersonlima/',
    projects: {
        total: 5,
        recentProjects: [
            {title: 'Poritos - A Petshop Menager App', length: '200Mbs'},
            {title: 'Weather App', length: '130Mbs'},
            {title: 'Desconation - A Discount App', length: '200Mbs'}
           
        ]
    },
    about: {
        description: 'iOS Apps',
        socialNetworks: {
            github: 'https://github.com/Gerson-Lima',
            LinkedIn: 'https://www.linkedin.com/in/gersonlima1/'
        },
        country: 'Brasil'
    },
    getRecentProjects () {
        console.log(`Projetos recentes de ${this.name}: `)

        this.projects.recentProjects.forEach(project =>  {
            console.log(project.title)
        })
    }
}

portifolio.getRecentProjects()


//EXIBIR O VALOR DE PI NO CONSOLE
console.log(Math.PI)


//EXIBIR NÚMERO ARREDONDADO PARA CIMA
const firstNum = 8.3
console.log(Math.ceil(firstNum))


//EXIBIR NÚMERO ARREDONDADO PARA BAIXO
const secondNum = 3.5
console.log(Math.round(secondNum))


//EXIBIR NÚMERO ARREDONDADO PARA CIMA
const thirdNum = 8.9
console.log(Math.floor(thirdNum))


//EXIBIR NÚMERO SEM DECIMAL
const fourthNum = 5.5
console.log(Math.trunc(fourthNum))


//EXIBIR NÚMERO ALEATÓRIO DE 0 A 10
const randomNum = Math.random()
console.log(Math.round(randomNum * 10))
