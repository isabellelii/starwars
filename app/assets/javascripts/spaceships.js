document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector('#viewShips').then
  getInfo();
});

function getInfo() {
  let apiURL = 'https://swapi.co/api/starships/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
  })
}

function appendUsersToSection(ships) {
    const element = document.getElementById('spaceshiplist');
    ships.forEach(function(ship) {
        formatUserDiv(ship).then(function(formattedHtml){
            let div = document.createElement('div');
            let html = formattedHtml;
            div.innerHTML = html;
            element.appendChild(div);
        })
    })
}

function formatUserDiv(ship) {
    return new Promise(function(resolve){
            let html = `<h2> ${ship.name}</h2>`;
            html += `<p>Model: ${ship.model}</p>`;
            html += `<p>Crew: ${ship.crew}</p>`;
            html += `<p>Vehicle class: ${ship.starship_class}</p>`;
            html += `<p>Passengers: ${ship.passengers}</p>`;
            html += `<p>Length: ${ship.length}</p>`;
            html += `<p>Speed: ${ship.max_atmosphering_speed}</p>`

            console.log(html)
            resolve(html);
          })

  }

  viewShips.addEventListener('click', getInfo)

  // search function

  function doSearch(e, form){
    e.preventDefault();
    let searchText = form.searchText.value;
    window.fetch(`https://swapi.co/api/starships/?search=${encodeURIComponent(searchText)}`)
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
