document.addEventListener("DOMContentLoaded", function(){
  getInfo();
});

function getInfo() {
  let apiURL = 'https://swapi.co/api/people/'

  fetch(apiURL).then(function (response) {
      response.json().then(function(json){
         appendUsersToSection(json.results)
      })
  }).catch(function(error) {
    updateInfoWithError()
  })
}

function appendUsersToSection(characters) {
    const element = document.getElementById('peoplelist');
    characters.forEach(function(character) {
        formatUserDiv(character).then(function(formattedHtml){
            let div = document.createElement('div');
            let html = formattedHtml;
            div.innerHTML = html;
            element.appendChild(div);
        })
    })
}

function formatUserDiv(character) {
    return new Promise(function(resolve){
        getHomeworld(character.homeworld)
        .then(function(homeworld){
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
    return new Promise(function(resolve){
        fetch(url).then(function(response){
        response.json().then(function(json){
            resolve(json.name);
        })
    })
    })

}
