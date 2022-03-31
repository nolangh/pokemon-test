//TODO make start page

const apiCards = "https://api.pokemontcg.io/v2/cards/data/<id>";
const apiSets = "https://api.pokemontcg.io/v2/sets";
const apiKey = "ef72570ff371408f9668e414353b7b2e";

//This function grabs the cards
function getCards() {
	return fetch(apiCards, {
		method: "GET",
		headers: {
			"X-Api-Key": apiKey,
		},
	})
		.then((response) => {
			response.json();
		})
		.then((pokemon) => {
			pokemon.card.find("base1-4");
		})
		.then((card) => {
			console.log(card.name); // "Charizard"
			return card.name;
		});
}

//this function grabs the sets

let sets;
function getSets() {
	return fetch(apiSets, {
		method: "GET",
		headers: {
			"X-Api-Key": apiKey,
		},
	})
		.then((res) => {
			res.json();
		})
		.then((setInfo) => {
			sets = setInfo;
			console.log(setInfo);
		})
		.then(() => {
			selectSet();
		});
}

function selectSet() {} //TODO finish this function

//ANCHOR Ignore anything below this comment. Using it as reference code

let myCourses = "";

function getAvailableCourses() {
	fetch("https://golf-courses-api.herokuapp.com/courses")
		.then((response) => {
			//passes api into this function
			return response.json(); //returns the api information to .JSON
		})
		.then((info) => {
			//takes the .JSON and grabs the data from the .JSON
			myCourses = info; // Assigns the .JSON data to variable myCourses
			console.log(info);
		})
		.then(() => {
			selectCourse(); // calls the select course function
		});
}

function selectCourse() {
	let courseOptionsHtml = "";
	myCourses.courses.forEach((course) => {
		courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
		courseImages += `<h4>${course.name}</h4><img id= 'course-image' src= '${course.image}'>`;
	});
	// document.addEventListener("click", getCourseImage);
	document.getElementById("course-select").innerHTML = courseOptionsHtml;
	document.getElementById("course-image").innerHTML = courseImages; //make the image only populate with an onClick("")
}
