/*E.11 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.*/
const pessoas = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]


function ordenaArray(pessoas){
    pessoas.sort((a, b)=> {
      if (a.idade > b.idade) {
        return -1;
      }
      if (a.idade < b.idade) {
        return 1;
      }
      if (a.idade === b.idade) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        
      }

    });
  pessoas.map(pessoa => console.log(pessoa))
}

// Normal
console.log('Não Ordenado')
pessoas.map( pessoa => console.log(pessoa))

console.log('Ordenado')
ordenaArray(pessoas);