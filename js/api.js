//NOTE this Branch is for making the name/url object array && randomizer function
const apiCards = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=32";
const apiSets = "https://api.pokemontcg.io/v2/sets";
const apiKey = "ef72570ff371408f9668e414353b7b2e";
const pokeCards = []; //this is the array that has each pokemon
let cardSets = [];
let allPokemon = [];

/* ------------------ NOTE this will be moved to a new file ----------------- */

const card = document.querySelector("card");
const cardContainer = document.querySelector(".card-cont");
const submit = document.querySelector("set-select-button");

/* -----------------------------ANCHOR Event Listners ----------------------------- */
submit.addEventListener("click", getValue);

//ANCHOR creates pokemon object
function Pokemon(image, name) {
	this.pokemonImage = image;
	this.pokemonName = name;
}

/* ------------------ ANCHOR this function grabs the cards ------------------ */
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
				let newPokemon = new Pokemon(data.images.large, data.name);
				pokeCards.push(newPokemon);
				console.log(pokeCards);
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
			console.log(cardSets);
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


function getValue(){
	let setName = 
}

function testSet() {
	return fetch("https://api.pokemontcg.io/v2/sets/swsh1", {
		method: "GET",
		headers: {
			"X-api-key": apiKey,
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((allofThem) => {
			testSetArray = allofThem;
			console.log(testSetArray);
		});
}

function createCard() {
	//Card div
	const pokeCardDiv = document.createElement("div");
	pokeCardDiv.classList.add(".card");
	//card_img
	const pImage = document.createElement("img");
	pImage.innerHTML = allpokemon.data.image.large;
	pokecard.appendChild("pImage");

	cardContainer.appendChild(allCards);
}

/* ------------------NOTE This is just a render function ----------------- */

function render() {
	getSets();
	getCards();
	random();
	testSet();
}

render();
