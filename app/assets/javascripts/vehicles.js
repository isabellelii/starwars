document.addEventListener("DOMContentLoaded", function(){
  getInfo();
});

function getInfo() {
  let apiURL = 'https://swapi.co/api/vehicles/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
  }).catch(function(error) {
    updateInfoWithError()
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
