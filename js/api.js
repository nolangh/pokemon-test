const apiCards = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=32";
const apiSets = "https://api.pokemontcg.io/v2/sets";
const apiKey = "ef72570ff371408f9668e414353b7b2e";
let cardSets = [];

//This function grabs the cards
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
			console.log(cards);
		});
}

//this function grabs the sets

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

function selectSet() {
	let testSelectHtml = "";
	cardSets.data.forEach((data) => {
		console.log(data);
		testSelectHtml += `<option value="${data.id}">${data.name}</option>`;
	});

	document.getElementById("selectSet").innerHTML = testSelectHtml;
}

function render() {
	getSets();
	getCards();
}

render();
