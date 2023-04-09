/**
 * Função auxiliar para definir se a letra passada como parâmetro é ou não uma vogal.
 */
function ehVogal(letra) {
  const vogais = 'aeiou'; // Todas as vogais do alfabeto
  return vogais.includes(letra.toLowerCase()); // Verificamos se a letra passada como parâmetro está na string "vogais". Passamos a letra para minúsculo para evitar problemas de comparação.
}

/**
 * Função auxiliar para definir se a letra passada como parâmetro é ou não uma consoante.
 */
function ehConsoante(letra){
  const consoantes = 'bcdfghjklmnpqrstvwxyz'; // Todas as consoantes do alfabeto
  return consoantes.includes(letra.toLowerCase()); // Verificamos se a letra passada como parâmetro está na string "consoantes". Passamos a letra para minúsculo para evitar problemas de comparação.
}

/**
 * Função principal do nosso exercício
 */
function contaVogaisEConsoante(frase) {
  let consoantes = 0; // Inicializa a contagem de constantes
  let vogais = 0; // Inicializa a contagem de vogais

  // Fazemos um loop com i iniciando em 0 e indo até o tamanho total da frase.
  // Assim, podemos garantir que passaremos por cada letr desta frase.
  for(let i = 0; i < frase.length; i++) {
    const letra = frase[i]; // Pegamos a letra atual da frase, definida pelo índice i

    // Se for uma vogal...
    if(ehVogal(letra)) { 
      vogais++; // Adicionamos um na contagem de vogais.
    }

    // Se for consoante...
    if(ehConsoante(letra)) {
      consoantes++; // Adicionamos um na contagem de consoantes.
    }

    // Se não for nem vogal, nem consoante, seguimos em frente sem adicionar nada.
  }

  // Mostra o resultado final na tela, conforme pede o exercício.
  console.log("Vogais: ", vogais)
  console.log("Consoantes: ", consoantes)
}

// TESTES
contaVogaisEConsoante('BaNAnA'); // 3 vogais, 3 consoantes
contaVogaisEConsoante('bAnAnA      ----____****aSsaDA'); // 6 vogais, 6 consoantes