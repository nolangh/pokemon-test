//NOTE this Branch is for making the name/url object array && randomizer function
const apiCards = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=32";
const apiSets = "https://api.pokemontcg.io/v2/sets";
const apiKey = "ef72570ff371408f9668e414353b7b2e";
const pokeCards = []; //this is the array that has each pokemon
let cardSets = [];

/* ------------------ NOTE this will be moved to a new file ----------------- */
const card = document.querySelector("card");
const cardImage = document.querySelector("");

//ANCHOR creates pokemon object
function Pokemon(image, name) {
	this.pokemonImage = image;
	this.pokemonName = name;
}

//ANCHOR this function grabs the cards
function getCards() {
	return fetch(apiCards, {
		method: "GET",
		headers: {
			"X-Api-Key": apiKey,
		},
	})
		.then((response) => {
			return response.json();
		})
		.then((pokemon) => {
			let cards = pokemon;
			cards.data.forEach((data) => {
				let newPokemon = new Pokemon(data.images.large, data.name);
				pokeCards.push(newPokemon);
			});
		});
}

//ANCHOR this function grabs the sets ignore anything below this line, this is for page 3
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

function selectSet() {
	let testSelectHtml = "";
	cardSets.data.forEach((data) => {
		testSelectHtml += `<option value="${data.id}">${data.name}</option>`;
	});
	document.getElementById("selectSet").innerHTML = testSelectHtml;
}

/* ----------------------- NOTE Card building function ---------------------- */
function createCard() {
	const pokecard = document.createElement("div");
	pokecard.classList.add(".card");
}

/* ------------------NOTE This is just a render function ----------------- */
function render() {
	getSets();
	getCards();
	random();
}

render();
