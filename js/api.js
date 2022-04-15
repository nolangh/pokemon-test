//NOTE this Branch is for making the name/url object array && randomizer function
const apiCards = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=32";
const apiSets = "https://api.pokemontcg.io/v2/sets";
const apiKey = "ef72570ff371408f9668e414353b7b2e";
const pos = document.getElementById("selectSet");
const pokeCards = []; //this is the array that has each pokemon
let cardSets = [];
let allPokemon = [];
let goodLord = [];
let setName;

/* ------------------ NOTE this will be moved to a new file ----------------- */

const card = document.querySelector("card");
const cardContainer = document.getElementById("card-cont");
const submit = document.querySelector("set-select-button");

/* -----------------------------ANCHOR Event Listners ----------------------------- */
pos.addEventListener("change", () => {
	setName = pos.options[pos.selectedIndex].value;
	console.log(setName);
	return fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${setName}`, {
		method: "GET",
		headers: {
			"X-api-key": apiKey,
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((filteredSet) => {
			allPokemon = filteredSet;
			console.log(allPokemon);
		})
		.then(() => {
			//createCard();
		});
});

//ANCHOR creates pokemon object
function Pokemon(image, name) {
	this.pokemonImage = image;
	this.pokemonName = name;
}

/* ------------------ ANCHOR this function grabs the cards from the api ------------------ */
function getCards() {
	return fetch(apiCards, {
		method: "GET",
		headers: {
			"X-Api-Key": apiKey,
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((pokemon) => {
			let cards = pokemon;
			cards.data.forEach((data) => {
				//pulls the images for the cards
				let newPokemon = new Pokemon(data.images.large, data.name);
				pokeCards.push(newPokemon);
			});
		});
}

/* ------------------- ANCHOR this function grabs the sets ------------------ */
function getSets() {
	return fetch(apiSets, {
		method: "GET",
		headers: {
			"X-Api-Key": apiKey,
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((setInfo) => {
			cardSets = setInfo;
		})
		.then(() => {
			selectSet();
		});
}

/* --------------------- ANCHOR populates select element -------------------- */

function selectSet() {
	let testSelectHtml = "";
	cardSets.data.forEach((data) => {
		testSelectHtml += `<option value="${data.id}">${data.name}</option>`;
	});
	document.getElementById("selectSet").innerHTML = testSelectHtml;
}

/* ----------------------- NOTE Card building function ---------------------- */

/* function createCard() {
	let img = new Image();
	img.src = allPokemon[1].data.images;
	//Card div
	const pokeCardDiv = document.createElement("div");
	pokeCardDiv.classList.add("card");

	const testP = document.createElement("p");
	testP.innerText = "this is so the div is not empty";
	pokeCardDiv.appendChild(testP);

	const pImage = document.createElement("img");
	pImage.classList.add("card-img-top");
	pokeCardDiv.appendChild(pImage);
	pImage.appendChild(img);

	cardContainer.appendChild(pokeCardDiv);
} */

/* ------------------NOTE This is just a render function ----------------- */

function render() {
	getSets();
	getCards();
}

render();
