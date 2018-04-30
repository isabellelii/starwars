document.addEventListener("DOMContentLoaded", function(){
  getInfo();
});

function getInfo() {
  let apiURL = 'https://swapi.co/api/starships/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
  }).catch(function(error) {
    updateInfoWithError()
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
