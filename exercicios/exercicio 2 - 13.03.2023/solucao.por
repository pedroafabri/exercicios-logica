programa {

  // Para tratarmos de cadeias no Portugol, precisamos incluir a biblioteca "Texto"
  inclua biblioteca Texto

  // Fun��o do nosso exerc�cio
  funcao cadeia mudaLetras(cadeia frase, cadeia operacao){
    
    // Caso a opera��o seja "mai�sculas"
    se(operacao == "maiusculas"){
      frase = Texto.caixa_alta(frase) // Passa a frase para tudo mai�sculo
      retorne frase // Retorna a frase
    }

    // Caso a opera��o seja "min�sculas"
    se(operacao == "minusculas"){
      frase = Texto.caixa_baixa(frase) // Passa a frase para tudo min�sculo
      retorne frase // Retorna a frase
    }

    // Se opera��o n�o for nem maiusculas, nem minusculas, retorne uma mensagem de erro.
    retorne "OPERA��O INV�LIDA"
  }


  // TESTANDO NOSSA FUN��O
  funcao inicio() {
    cadeia res1 = mudaLetras("pedro", "maiusculas")
    escreva(res1) // Deve mostrar "PEDRO"
    escreva("\n")

    cadeia res2 = mudaLetras("FABRI", "minusculas")
    escreva(res2) // Deve mostrar "fabri"
    escreva("\n")

    cadeia res3 = mudaLetras("FABRI", "banana")
    escreva(res3) // Deve mostrar "OPERA��O INV�LIDA"
  }
}
