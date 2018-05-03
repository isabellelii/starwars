document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector('#viewVehicles').then
  getInfo();
});

function getInfo() {
  let apiURL = 'https://swapi.co/api/vehicles/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
  })
}

function appendUsersToSection(transports) {
    const element = document.getElementById('vehiclelist');
    transports.forEach(function(transport) {
        formatUserDiv(transport).then(function(formattedHtml){
            let div = document.createElement('div');
            let html = formattedHtml;
            div.innerHTML = html;
            element.appendChild(div);
        })
    })
}

function formatUserDiv(transport) {
    return new Promise(function(resolve){
            let html = `<h2> ${transport.name}</h2>`;
            html += `<p>Model: ${transport.model}</p>`;
            html += `<p>Crew: ${transport.crew}</p>`;
            html += `<p>Vehicle class: ${transport.vehicle_class}</p>`;
            html += `<p>Passengers: ${transport.passengers}</p>`;
            html += `<p>Length: ${transport.length}</p>`;

            console.log(html)
            resolve(html);
          })

  }

  viewVehicles.addEventListener('click', getInfo)


  // search function

  function doSearch(e, form){
    e.preventDefault();
    let searchText = form.searchText.value;
    window.fetch(`https://swapi.co/api/vehicles/?search=${encodeURIComponent(searchText)}`)
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
