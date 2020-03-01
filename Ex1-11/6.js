/* E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada 
imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.*/


function formataEndereco(endereco,numero){
   const {logradouro,localidade,uf} = endereco;
    console.log(`${logradouro}, ${numero}, ${localidade} / ${uf}`);
}


function BuscaCep(newCep,numero){
  axios.get(`https://viacep.com.br/ws/${newCep}/json/`)
  .then(function(response) {
   formataEndereco(response.data,numero);

  })
  .catch(function(error) {
    console.log(error);
  }) 
}

BuscaCep(96030640, 555);