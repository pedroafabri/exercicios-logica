/**
 * Valida se todos os integrantes da fila de trás são maiores que os da fila da frente.
 */
function validaFilas(filaDeTras, filaDaFrente) {
  for(let i = 0; i < filaDeTras.length; i++) { // Para cada aluno da fila de trás
    const deTras = filaDeTras[i]; // Pega altura do aluno de trás
    const daFrente = filaDaFrente[i]; // Pega altura do aluno da frente
    if(deTras < daFrente) return false; // Se o de trás for menor que o da frente, retorne false pois a foto não dará certo.
  }

  return true; // Nenhum aluno de trás é menor que o da frente. Retorna true pois a fato dará certo.
}

/**
 * Função principal do exercício. Recebe duas filas de alunos e tenta organizar um na frente do outro.
 */
function organizaFilas(uniformePreto, uniformeLaranja) {
  // Se a combinação preto atrás, laranja na frente der certo, retorne true.
  if(validaFilas(uniformePreto, uniformeLaranja)) return true; 

  // Senão, retorne se a combinação laranjar atrás, preto na frente deu certo.
  return validaFilas(uniformeLaranja, uniformePreto);
}

// Declara os arrays de uniformes pretos e laranjas, conforme o exemplo do exercício
const uniformePreto = [150, 179, 149, 152, 154];
const uniformeLaranja = [162, 181, 151, 160, 170];

// Chama a função para resolver o exercício, mostrando o resultado retornado na tela.
console.log(organizaFilas(uniformePreto, uniformeLaranja));

