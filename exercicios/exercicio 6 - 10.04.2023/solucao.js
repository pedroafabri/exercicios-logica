// Função principal do nosso exercício
function mostraImpares(min, max) {
  // Loop entre minimo + 1 e maximo, para validarmos cada número entre eles.
  for(let i = min + 1; i < max; i++) {
    if(i % 2 != 0) { // Se o resto da divisão entre o número atual e 2 não for zero significa que o número é ímpar, logo...
      console.log(i); // ...mostra o número ímpar na tela
    }
  }
}

// TESTES
mostraImpares(3, 15) // Deve mostrar 5, 7, 9, 11, 13