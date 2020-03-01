//E.9 Imprima o objeto se existir alguem com menos 25 anos.
 const pessoas =[
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

function impremePessoa(pessoas){
    for(pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome} ${pessoa.sobrenome} com ${pessoa.idade} anos !`)
  }
};

const TemMenoresDe25 = ((pessoas) =>{
  for(pessoa of pessoas){
    if(pessoa.idade < 25){
        return true
    } 
  }
  return false;
})

if(TemMenoresDe25(pessoas)){
  impremePessoa(pessoas)
}

