const livros = require('../database')
const read = require('readline-sync')

const listaDeDesejo = () => {
    const opcaoInicial =  read.question('Deseja buscar por lista de desejos? S/N ').toUpperCase()

    if (opcaoInicial === 'S') {
      console.clear()
     
      const livrosLidos =  livros.filter(livro => livro.leu === false)
       console.table(livrosLidos)
     }else
     console.log('See you later') 

    }



module.exports = listaDeDesejo

