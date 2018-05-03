
document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector('#viewPeople').then
  getInfo();
});

function getInfo() {
  let apiURL = 'https://swapi.co/api/people/'

  fetch(apiURL).then(function(response) {
    response.json().then(function(json) {
      appendUsersToSection(json.results)
    })
  })
}

function appendUsersToSection(characters) {
  const element = document.getElementById('peoplelist');
  characters.forEach(function(character) {
    formatUserDiv(character).then(function(formattedHtml) {
      let div = document.createElement('div');
      let html = formattedHtml;
      div.innerHTML = html;
      element.appendChild(div);
    })
  })
}

function formatUserDiv(character) {
  return new Promise(function(resolve) {
    getHomeworld(character.homeworld)
      .then(function(homeworld) {
        let html = `<h2> ${character.name}</h2>`;
        html += `<p>Height: ${character.height}</p>`;
        html += `<p>Mass: ${character.mass}</p>`;
        html += `<p>Eye Color: ${character.eye_color}</p>`
        html += `<p>Homeworld: ${homeworld}</p>`
        console.log(html)
        resolve(html);
      })
  })


}

function getHomeworld(url) {
  return new Promise(function(resolve) {
    fetch(url).then(function(response) {
      response.json().then(function(json) {
        resolve(json.name);
      })
    })
  })

}

viewPeople.addEventListener('click', getInfo)

// search function

function doSearch(e, form){
  e.preventDefault();
  let searchText = form.searchText.value;
  window.fetch(`https://swapi.co/api/people/?search=${encodeURIComponent(searchText)}`)
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
