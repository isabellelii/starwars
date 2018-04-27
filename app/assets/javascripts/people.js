function getInfo() {

  updateWithLoading()
  let apiURL = 'https://swapi.co/api/people/'

  axios.get(apiURL).then(response => {
    console.log(response.data)
    updateInfo(response.data)
  }).catch(e => {
    updateInfoWithError()
  })
}

function updateInfo(data) {
  let name = document.querySelector("#name");
  let height = document.querySelector("#height");
  let mass = document.querySelector("#mass");
  let eyeColor = document.querySelector("#eye_color");
  let homeworld = document.querySelector("#homeworld");
  let vehicles = document.querySelector("#vehicles");

  data.forEach(function(person) {
    name.innerText = data.name
    height.innerText = `Height: ${data.height}`
    mass.innerText = `Mass: ${data.mass}`
    eyeColor.innerText = `Eye Color: ${data.eye_color}`
    homeworld.innerHTML = `<a href="${data.homeworld}">Homeworld</a></br>`
    vehicles.innerHTML = `<a href="${data.vehicles}">Vehicles</a>`
  }) 
}

function updateInfoWithError() {
  let name = document.querySelector("#name");
  name.innerText = 'Looks like this person isnt available right now!'

}

function updateWithLoading() {
  let name = document.querySelector("#name");
  name.innerHTML = '<i class="fas fa-spinner"></i>'

}
