document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector('#viewPlanets').then
  getInfo();
});


function getInfo() {
  let apiURL = 'https://swapi.co/api/planets/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
  })
}

function appendUsersToSection(planets) {
    const element = document.getElementById('planetlist');
    planets.forEach(function(planet) {
        formatUserDiv(planet).then(function(formattedHtml){
            let div = document.createElement('div');
            let html = formattedHtml;
            div.innerHTML = html;
            element.appendChild(div);
        })
    })
}

function formatUserDiv(planet) {
    return new Promise(function(resolve){
            let html = `<h2> ${planet.name}</h2>`;
            html += `<p>Climate: ${planet.climate}</p>`;
            html += `<p>Rotation period: ${planet.rotation_period}</p>`;
            html += `<p>Population: ${planet.population}</p>`;
            html += `<p>Terrain: ${planet.terrain}</p>`;
            html += `<p>Diameter: ${planet.diameter}</p>`;

            console.log(html)
            resolve(html);
          })

  }

  viewPlanets.addEventListener('click', getInfo)

  // search function

  function doSearch(e, form){
    e.preventDefault();
    let searchText = form.searchText.value;
    window.fetch(`https://swapi.co/api/planets/?search=${encodeURIComponent(searchText)}`)
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
