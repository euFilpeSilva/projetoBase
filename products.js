const entrada = require('prompt-sync')({sigint: true})

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletronico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletronico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })

}

