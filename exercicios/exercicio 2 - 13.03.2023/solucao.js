// Função mudaLetras, responsável pela execução do exercício
function mudaLetras(frase, operacao) {
  // Se operação for "maiusculas"
  if(operacao == 'maiusculas') {
    frase = frase.toUpperCase(); // Passe a frase para tudo maiúsculo
    return frase; // Retorne a frase
  }

  // Se operação for "minusculas"
  if(operacao == 'minusculas') {
    frase = frase.toLowerCase(); // Passe a frase para tudo minúsculo
    return frase; // Retorne a frase
  }

  // Se operação não for nem maiusculas, nem minusculas, retorne uma mensagem de erro.
  return "OPERAÇÃO INVÁLIDA"
}

// TESTANDO NOSSA FUNÇÃO
const res1 = mudaLetras("pedro", "maiusculas");
console.log(res1); // Deve mostra "PEDRO"

const res2 = mudaLetras("FABRI", "minusculas");
console.log(res2); // Deve mostrar "fabri"

const res3 = mudaLetras("PeDrO F aAbri", "banana");
console.log(res3); // Deve mostrar "OPERAÇÃO INVÁLIDA"
