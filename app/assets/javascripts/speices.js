document.addEventListener("DOMContentLoaded", function(){
  getInfo();
});

function getInfo() {
  let apiURL = 'https://swapi.co/api/species/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
  }).catch(function(error) {
    updateInfoWithError()
  })
}

function appendUsersToSection(animals) {
    const element = document.getElementById('speiceslist');
    animals.forEach(function(animal) {
        formatUserDiv(animal).then(function(formattedHtml){
            let div = document.createElement('div');
            let html = formattedHtml;
            div.innerHTML = html;
            element.appendChild(div);
        })
    })
}

function formatUserDiv(animal) {
    return new Promise(function(resolve){
      getHomeworld(animal.homeworld)
      .then(function(homeworld){
            let html = `<h2> ${animal.name}</h2>`;
            html += `<p>Height: ${animal.average_height}</p>`;
            html += `<p>Designation: ${animal.designation}</p>`;
            html += `<p>Lifespan: ${animal.average_lifespan}</p>`;
            html += `<p>Language: ${animal.language}</p>`;
            html += `<p>Eye color: ${animal.eye_colors}</p>`;
            html += `<p>Homeworld: ${homeworld}</p>`

            console.log(html)
            resolve(html);
          })
      })


  }


function getHomeworld(url) {
    return new Promise(function(resolve){
        fetch(url).then(function(response){
        response.json().then(function(json){
            resolve(json.name);
          })
      })
      })

  }
  // search function

  function doSearch(e, form){
    e.preventDefault();
    let searchText = form.searchText.value;
    window.fetch(`https://swapi.co/api/species/?search=${encodeURIComponent(searchText)}`)
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
