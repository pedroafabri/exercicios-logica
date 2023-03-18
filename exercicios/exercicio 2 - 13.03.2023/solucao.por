programa {

  // Para tratarmos de cadeias no Portugol, precisamos incluir a biblioteca "Texto"
  inclua biblioteca Texto

  // Função do nosso exercício
  funcao cadeia mudaLetras(cadeia frase, cadeia operacao){
    
    // Caso a operação seja "maiúsculas"
    se(operacao == "maiusculas"){
      frase = Texto.caixa_alta(frase) // Passa a frase para tudo maiúsculo
      retorne frase // Retorna a frase
    }

    // Caso a operação seja "minúsculas"
    se(operacao == "minusculas"){
      frase = Texto.caixa_baixa(frase) // Passa a frase para tudo minúsculo
      retorne frase // Retorna a frase
    }

    // Se operação não for nem maiusculas, nem minusculas, retorne uma mensagem de erro.
    retorne "OPERAÇÃO INVÁLIDA"
  }


  // TESTANDO NOSSA FUNÇÃO
  funcao inicio() {
    cadeia res1 = mudaLetras("pedro", "maiusculas")
    escreva(res1) // Deve mostrar "PEDRO"
    escreva("\n")

    cadeia res2 = mudaLetras("FABRI", "minusculas")
    escreva(res2) // Deve mostrar "fabri"
    escreva("\n")

    cadeia res3 = mudaLetras("FABRI", "banana")
    escreva(res3) // Deve mostrar "OPERAÇÃO INVÁLIDA"
  }
}
