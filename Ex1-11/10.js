//E.10 Imprima todos os elementos em que a idade é menor que 30 anos.

const pessoas =[
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

function impremePessoa(pessoa){
    console.log(`Nome: ${pessoa.nome} ${pessoa.sobrenome} com ${pessoa.idade} anos !`)
};

function TemMenoresDe25(pessoas){
  for(pessoa of pessoas){
    if(pessoa.idade < 30){
      impremePessoa(pessoa)
    } 
  }
}

TemMenoresDe25(pessoas);



