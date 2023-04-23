// Nossa função principal
function ehNumeroPrimo(num) {
  if(num < 2) { // Se o número for menor que 2
    console.log("PARÂMETRO INVÁLIDO"); // Avise que o parâmetro é inválido
    return false; // Retorne falso
  }

  // Para cada número entre 2 e num
  for(let i = 2; i < num; i++) {
    if(num % i == 0) { // Se num for divisível por esse número...
      return false; //... retorne falso, pois não é primo.
    }
  }

  return true; // Senão, retorne verdadeiro, pois é primo
}

// TESTES
console.log(ehNumeroPrimo(5)); // Verdadeiro
console.log(ehNumeroPrimo(4)); // Falso
console.log(ehNumeroPrimo(2)); // Verdadeiro
console.log(ehNumeroPrimo(3)); // Verdadeiro
console.log(ehNumeroPrimo(1)); // Parâmetro Inválido + Falso