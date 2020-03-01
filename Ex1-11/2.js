// E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.
function transformaEmMaisculo(palavra){
  return palavra.toUpperCase();
}

function juntaPalavras(operacao,valor1,valor2){
    console.log(operacao(valor1))
    console.log(operacao(valor2))
}

juntaPalavras(transformaEmMaisculo,"carro","casa");

