function getInfo(){fetch("https://swapi.co/api/starships/").then(function(e){e.json().then(function(e){appendUsersToSection(e.results)})})["catch"](function(){updateInfoWithError()})}function appendUsersToSection(e){const n=document.getElementById("spaceshiplist");e.forEach(function(e){formatUserDiv(e).then(function(e){let t=document.createElement("div"),o=e;t.innerHTML=o,n.appendChild(t)})})}function formatUserDiv(e){return new Promise(function(n){let t=`<h2> ${e.name}</h2>`;t+=`<p>Model: ${e.model}</p>`,t+=`<p>Crew: ${e.crew}</p>`,t+=`<p>Vehicle class: ${e.starship_class}</p>`,t+=`<p>Passengers: ${e.passengers}</p>`,t+=`<p>Length: ${e.length}</p>`,t+=`<p>Speed: ${e.max_atmosphering_speed}</p>`,console.log(t),n(t)})}document.addEventListener("DOMContentLoaded",function(){getInfo()});