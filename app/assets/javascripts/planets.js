document.addEventListener("DOMContentLoaded", function(){
  getInfo();
});

function getInfo() {
  let apiURL = 'https://swapi.co/api/planets/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
  }).catch(function(error) {
    updateInfoWithError()
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
