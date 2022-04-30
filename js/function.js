let screenMode;

function startMenu() {
	$("main").append(
		`<button type="button" name="button" onclick="setBoard(4,3)">Start Game</button>`
	);
	screenMode = "start menu";
}

$("main").attr("id", "game-board");
screenMode = "play";
let cardSize = 40;
let myCards = [];
for (let i = 0; i < (x * y) / 2; i++) {
	let currPokemon = Math.floor(Math.random() * pokemonTemp.length);
	for (let j = 0; j < 2; j++) {
		myCards.splice(Math.floor(Math.random() * myCards.length), 0, currPokemon);
	}
}

//clears board of any leftover cards
$("#game-board").empty();
//Adds cards to board
for (let i = 0; i < x * y; i++) {
	$("#game-board").append(
		`<div class="card" id="crd${i}">
        <div class="inner-card hidden" id="inr${i}">
          <h2 id="tit${i}">${pokemonTemp[myCards[i]].name}</h2>
          <img src="${pokemonTemp[myCards[i]].url}" alt="${
			pokemonTemp[myCards[i]].name
		}" id="img${i}">
        </div>
      </div>`
	);
}
//Makes card sizes all exact dimensions
$(".card").css("width", `${2.5 * cardSize}px`);
$(".card").css("height", `${3.5 * cardSize}px`);
$(".card").css("border-radius", `${cardSize * 0.2}px`);
//Makes height of board based on how many cards wide and high
// Card ratio * Card Size + Card Margin multiplied by how many cards plus BOARD padding
$("main").css("width", `${(2.5 * cardSize + 20) * x + 50}px`);
$("main").css("height", `${(3.5 * cardSize + 20) * y + 50}px`);

$(".card").click(function (e) {
	let myID =
		$(e.target).attr("id").charAt(3) + $(e.target).attr("id").charAt(4);
	flipCard(myID);
});

function flipCard(index) {
	$(`#inr${index}`).toggleClass("hidden");
}
