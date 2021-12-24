

let btnSearch = document.getElementById('btnSearch')
let search = document.getElementById('searchField')
function myFunction(){
  let src = search.value;  
  let data = 'https://newsapi.org/v2/everything?' +
  'q=' + src +
  '&apiKey=4994cc78db5f49bfbac2484a02e76cfe';
  
  const card = document.getElementById('card')
      fetch(data).then(response => {return response.json()})
      .then(responseJson => {console.log(responseJson);
          card.innerHTML = "";
          let news = responseJson.articles;
          news.forEach(n => {
                          card.innerHTML +=`<div class="col-md-4 my-5" >
                          <div class="card" >
                          <img src="${n.urlToImage}" class="card-img-top" alt="">
                          <div class="card-body">
                          <h5 class="card-title">${n.title}</h5>
                          <h6 class="card-subtitle mb-2 text-muted"><strong> ${n.author} </strong> . ${n.publishedAt}</h6>
                          <p class="card-text"> <strong> Description : </strong> <br> ${n.description} </p>
                          <a href="${n.url}" class="btn btn-primary container" target="_blank">More</a>
                          </div>
                          </div>
                          </div>` ;});
      
      }).catch(err => {console.log(err.message)}).finally(() =>{
          card.innerHTML += `<div class="spinner-grow text-info container" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>`
      })
}


  




































