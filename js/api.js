//TODO make start page
const apiCards = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=16";
const apiSets = "https://api.pokemontcg.io/v2/sets";
const apiKey = "ef72570ff371408f9668e414353b7b2e";
//This function grabs the cards

function getCards() {
	let cards;
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
			cards = pokemon;
			console.log(cards);
		});
}

//this function grabs the sets

let cardSets = [];

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
			console.log(setInfo);
		})
		.then(() => {
			selectSet();
		});
}

getSets();

function selectSet() {
	let testSelectHTML = "";
	cardSets.forEach((x) => {
		testSelectHTML += `<option value="${x.id}">${x.name}</option>`;
	});

	document.querySelector("testSelect").innerHTML = testSelectHtml;
}
