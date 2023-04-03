/**
 * Função do nosso exercício
 */
function calculaPaginas(produtos, quantidadePorPagina) {
  /* 
    Se a quantidade por pagina for menor que um OU não for um número,
    retorne que o número de páginas será igual a 0.
  */
  if(quantidadePorPagina < 1 || isNaN(quantidadePorPagina)) {
    return 0;
  }

  const quantidade = Math.ceil(quantidadePorPagina); // Arredondamos a quantidade de paginas para cima, caso o usuáiro passe algo como 1.5
  const tamanhoDoArray = produtos.length; // Pegamos o número total de produtos que temos
  let paginas = tamanhoDoArray / quantidade; // Dividimos a quantidade de produtos pelo número de produtos que apareção na página
  paginas = Math.ceil(paginas); // Arredondamos as páginas para cima, para garantir que não teremos "uma página e meia"
  return paginas; // Retornamos o número de páginas
}

// FUNÇÕES DE TESTE
const itens = ["Móbile", "Berço", "Chupeta", "Mamadeira"]

console.log(calculaPaginas(itens, 1)); // Deve mostrar 4 páginas
console.log(calculaPaginas(itens, 2)); // Deve mostrar 2 páginas
console.log(calculaPaginas(itens, 3)); // Deve mostrar 2 páginas
console.log(calculaPaginas(itens, 4)); // Deve mostrar 1 página