const queryString = document.location.search;
const params = new URLSearchParams(queryString);

if (params.has("id")) {
	id = params.get("id");
} else {
	document.location.href = "/";
}

const baseURL = "https://rickandmortyapi.com/api/";
const characterURL = `${baseURL}character/`;
const idDetailsURL = `${characterURL}${id}`;

fetch(idDetailsURL)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		charDetails(json);
	})
	.catch(function(error) {
		console.dir(error);
	});


function DetailValue(json) {
  console.dir(json);

  const name = document.querySelector("h1");
  name.innerHTML = json.name;

  const status = document.querySelector("status");
  status.innerHTML = json.status;

  const species = document.querySelector("species");
  species.innerHTML = json.species;

  const origin = document.querySelector("origin");
  origin.innerHTML = json.origin.name;

  const location = document.querySelector("location");
  location.innerHTML = json.location.name;

  const image = document.querySelector(".details-image");
  image.src = json.image;
  image.alt = json.name;

  document.title = json.name + " | " + document.title;
}
