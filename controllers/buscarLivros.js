
const livros = require('../database')
const read = require ('readline-sync')

const buscarLivros = () => {
  const opcaoInicial = read.question('Deseja buscar por categoria? S/N ').toUpperCase()

  if (opcaoInicial === 'S') {
      const categorias = livros.map(livro => livro.categoria)
      let naoRepetir = categorias.filter ((a, b) => categorias.indexOf(a) === b)
      console.table(naoRepetir)

      const inputCategoria = read.question('Digite uma categoria conforme tabela acima: ')

      const confirmacao = read.question('Tem certeza? S/N ').toUpperCase()
      if (confirmacao === 'S') {
        console.clear()
          const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
          console.table(livrosFiltrados)
      } else
      console.log ('See you later')

  } else 
  
  console.log('See you later')
}

module.exports = buscarLivros