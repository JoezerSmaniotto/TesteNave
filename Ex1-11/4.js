//E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.

function removeNumerosDaFrase(frase){
  const letras = frase.split('');
  const numeros = [];
  let numeroAtual;
  for (var caracter of letras) {
      if(EhNumero(caracter)){
        numeroAtual+=caracter;

      } else{
        if(numeroAtual != ''){
          numeros.push(numeroAtual);
          numeroAtual = '';
        }
      }
  } 

  if(numeroAtual !="")
  numeros.push(numeroAtual);

  numeros.sort(function(a, b) { // Assim pode ter 1,10,100 que não irá ficar subistituindo palavras erradas por o array esta ordenado
    return b - a;
  });

  for (const numero of numeros) {
   frase =  frase.replace(numero,"[removido]")
  }
  console.log(frase)
}

function EhNumero(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


console.log("teste 10 de 1000 string 1000000")
removeNumerosDaFrase("teste 10 de 1000 string 1000000")