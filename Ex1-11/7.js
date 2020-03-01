/*E.7 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. 
O nome deve ter a primeira letra maiúscula.*/

function letraMaiscula (text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}

 const pessoas = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];

function saudacao(pessoas){
  pessoas.map(pessoa => {
    let name = letraMaiscula(`${pessoa.nome} ${pessoa.sobrenome}`)    
    console.log(` Olá, ${name} `);
  });

}

saudacao(pessoas);
