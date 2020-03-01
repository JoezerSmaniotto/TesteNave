// COMENTARIOS

function formataComentario(element){
  
  let criap= document.createElement('p');
  criap.setAttribute("id",`c${element.id}`);
  criap.setAttribute("class","coments");
  criap.innerHTML= (`<strong>${element.name}</strong><br> ${element.body}`);
  return criap;


}

async function printaComentario (){

  let selecionaPost,retonoPost ;
  await axios.get(`https://jsonplaceholder.typicode.com/comments`)
  .then( function(response) {
      //console.log(response.data);
      response.data.forEach(element => {
      //for (element of response.data){
        // console.log(`${element}`);
        selecionaPost = document.getElementById(element.postId);
        console.log(selecionaPost);
        retonoPost =  formataComentario(element);
        // console.log(` RetornoFunc:  ${retonoPost}`);
        selecionaPost.appendChild(retonoPost);
      //}
    });

  })
  .catch(function(error) {
    console.log(error);
  }) 

}



// POSTS
function criaPost(element){
  
  let criaArticle = document.createElement('article');
  let criah2= document.createElement('h2');
  let criap= document.createElement('p');
  criah2.innerHTML = (`${element.title}`);
  criap.innerHTML= (`${element.body}`);
  criaArticle.appendChild(criah2);
  criaArticle.appendChild(criap);
  criaArticle.setAttribute("id",`${element.id}`);
  return criaArticle;
}


function printaPost(){
  let retonoComentario, result;
  const selecionaDiv = document.querySelector('#post');
  axios.get(`https://jsonplaceholder.typicode.com/posts`)
  .then( function(response) {
    response.data.forEach(element => {
      retonoComentario = criaPost(element);
      selecionaDiv.appendChild(retonoComentario)
      
    });
     printaComentario();
  })
  .catch(function(error) {
    console.log(error);
  }) 
  
}


printaPost()

 
   
 



