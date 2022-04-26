
# Projeto Guiado - Iniciado em aula com a Professora Simara finalizado em casa sobre Sistema de Gerenciamento de Livros 🚀


## 🧠 Contexto
O objetivo do projeto é gerar um sistema que possibilite coordenar informações a respeito dos livros que já li e sobre os livros que desejo ler.

## Tecnologias Utilizadas:
As Ferramentas foram: JS, Node.js, npm, e readline-sync
 
## Arquitetura
 📁 projeto-de-livros
   |- 📁 controllers
   |     |- 📄 buscarLivros.js
   |     |- 📄 listarRecomendados.js
   |     |- 📄 listarLivrosNaoLidos.js
   |     |- 📄 listarLivrosOrdenados.js
   |- 📁 node_modules
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 .gitignore
   |- 📄 package.json  
   |- 📄 package-lock.json
 
   ## Requisitos:
**buscarLivros** - terá que ser possível buscar livros por categoria;  

**listarLivrosOrdenados** - terá que retornar todos os livros em ordem crescente por quantidade de páginas;  

**listarRecomendados** - Terá que  listar livros que já foram lidos e que são recomendados;  

**listarLivrosNaoLidos** - Terá que listar livros que ainda não foram lidos
 
## REGRAS
 - Inicia o algoritmo escolhendo a forma de busca no menu.
 - Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'See you later'.
 - O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.
 
 ## Dados
 Criar dados mocados, um array de objetos de livros com a modelagem abaixo.

Livro

- nome: string
- categoria: string
- paginas: number
- recomenda: boolean
- leu: boolean
 

<img src=https://c.tenor.com/IjG5Hkkw9zsAAAAC/anime-girl.gif width="250" height="250" /> </h4> <br>