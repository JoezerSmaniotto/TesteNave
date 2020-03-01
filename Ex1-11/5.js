//E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.
function traduzir(palavra) {
  const dicionario = {4: 'a', 3: 'e', 1: 'i', 5: 's'};
  const listaDeKeys = Object.keys(dicionario);
  const palavraArray = palavra.split('')
  
  palavraArray.forEach((palavra, index) => {
    const deuMatch = listaDeKeys.includes(palavra);
    if(deuMatch) {
      palavraArray[index] = dicionario[palavra];
    }
  });

  const palavraTexto = palavraArray.join('');

return palavraTexto;
}

const palavraParaTraduzir = 'T35t3 d3 35t4g1o';

console.log(traduzir(palavraParaTraduzir));













