function getInfo(){fetch("https://swapi.co/api/species/").then(function(e){e.json().then(function(e){appendUsersToSection(e.results)})})["catch"](function(){updateInfoWithError()})}function appendUsersToSection(e){const n=document.getElementById("speiceslist");e.forEach(function(e){formatUserDiv(e).then(function(e){let t=document.createElement("div"),o=e;t.innerHTML=o,n.appendChild(t)})})}function formatUserDiv(e){return new Promise(function(n){getHomeworld(e.homeworld).then(function(t){let o=`<h2> ${e.name}</h2>`;o+=`<p>Height: ${e.average_height}</p>`,o+=`<p>Designation: ${e.designation}</p>`,o+=`<p>Lifespan: ${e.average_lifespan}</p>`,o+=`<p>Language: ${e.language}</p>`,o+=`<p>Eye color: ${e.eye_colors}</p>`,o+=`<p>Homeworld: ${t}</p>`,console.log(o),n(o)})})}function getHomeworld(e){return new Promise(function(n){fetch(e).then(function(e){e.json().then(function(e){n(e.name)})})})}document.addEventListener("DOMContentLoaded",function(){getInfo()});