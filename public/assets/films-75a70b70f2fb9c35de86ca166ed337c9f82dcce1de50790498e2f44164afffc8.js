document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector('#viewFilms').then
  getInfo();
});


function getInfo() {
  let apiURL = 'https://swapi.co/api/films/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
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

viewFilms.addEventListener('click', getInfo)

// search function

function doSearch(e, form){
  e.preventDefault();
  let searchText = form.searchText.value;
  window.fetch(`https://swapi.co/api/films/?search=${encodeURIComponent(searchText)}`)
  .then((response) => response.json())
  .then(showResults)
  .catch((e) => {
    console.log(JSON.stringify(e));
  })
}

function showResults(result) {
  document.getElementById('result-count').innerHTML = result.count +
    (result.count === 1 ?
    ' result' :
    ' results');

  if ( result.count > 0 ) {
    fillTable(result.results);
  }
}

function fillTable(results){
  const target = document.getElementById('result-table');
  const header = document.createElement('thead');
  const headerRow = document.createElement('tr');
  header.appendChild(headerRow);

  for( let key in results[0] ) {
    const headerCell = document.createElement('th');
    headerCell.innerText = key;
    headerRow.appendChild(headerCell);
  };
  target.appendChild(header);
  const body = document.createElement('tbody');
  results.forEach((result) => {
    const row = document.createElement('tr');
    for(let key in result){
      const cell = document.createElement('td');
      cell.innerText = result[key];
      row.appendChild(cell);
    }
    body.appendChild(row);
  });
  target.appendChild(body);
}
;
