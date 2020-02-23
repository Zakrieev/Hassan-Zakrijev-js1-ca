const URL = "https://thecharactersapi.com/api/";
const characterURL = ${URL}character/;

window.addEventListener("load", event => {
  console.log("page is fully loaded");
});

function theCharacters(response) {
  return response.json();
}

function handleJson(json) {
  const characterLoad = json.results;
  console.dir(json);

  const resultsContainer = document.querySelector(".results");

  let html = "";

  characterLoad.forEach(function(result) {
    let typeOf = result.type;
    if (result.type.length > 0) {
    } else {
      typeOf = "Unknown";
    }

    html += <div class="col-sm-6 col-md-4 col-lg-3">                
      <div class="card">
          <img class="image" src="${result.image}" alt=${result.name}>
          <div class="details">
              <h4 class="name">${result.name}</h4>
              <p>Type: ${typeOf}</p>
              <p>Episode count: ${result.episode.length}</p>                                       
              <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
          </div>
      </div>
  </div>;
  });

  resultsContainer.innerHTML = html;
}

function handleError(error) {
  console.log(error);
}

fetch(characterURL)
  .then(theCharacters)
  .then(handleJson)
  .catch(handleError);
