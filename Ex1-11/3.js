//E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos

function recebePalavras(...palavras){
  
  const  text = palavras.reduce((text,currentValue)=> text + currentValue);

  console.log(text)
}


recebePalavras('casa','carro','trabalho')