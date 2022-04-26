const livros = require('../database')
const read = require('readline-sync')

const ordenar = () => {

    const opcaoInicial =  read.question('Deseja ordenar livros por paginas? S/N: ').toUpperCase()

    if (opcaoInicial === 'S') {
        console.clear()

      const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
      console.table(livrosOrdenados)

    }else
    console.log('See you later')

}




module.exports = ordenar