document.addEventListener("DOMContentLoaded", function(){
  getInfo();
});

function getInfo() {
  let apiURL = 'https://swapi.co/api/films/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
  }).catch(function(error) {
    updateInfoWithError()
  })
}

function appendUsersToSection(movies) {
    const element = document.getElementById('filmlist');
    movies.forEach(function(movie) {
        formatUserDiv(movie).then(function(formattedHtml){
            let div = document.createElement('div');
            let html = formattedHtml;
            div.innerHTML = html;
            element.appendChild(div);
        })
    })
}

function formatUserDiv(movie) {
    return new Promise(function(resolve){
            let html = `<h2> ${movie.title}</h2>`;
            html += `<p>Movie director: ${movie.director}</p>`;
            html += `<p>Episode: ${movie.episode_id}</p>`;
            html += `<p>Release date: ${movie.release_date}</p>`
            console.log(html)
            resolve(html);
        })

}
