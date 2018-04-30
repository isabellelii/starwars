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
