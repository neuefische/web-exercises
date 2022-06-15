console.clear();

const EXAMPLE_DATA = {
	name: 'Luke Skywalker',
	height: '172',
	mass: '77',
	hairColor: 'blond',
	skin_color: 'fair',
	eye_color: 'blue',
	birth_year: '19BBY',
	gender: 'male',
	homeworld: 'https://swapi.dev/api/planets/1/',
	films: [
		'https://swapi.dev/api/films/1/',
		'https://swapi.dev/api/films/2/',
		'https://swapi.dev/api/films/3/',
		'https://swapi.dev/api/films/6/',
	],
	species: [],
	vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
	starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
	created: '2014-12-09T13:50:51.644000Z',
	edited: '2014-12-20T21:17:56.891000Z',
	url: 'https://swapi.dev/api/people/1/',
};

const root = document.getElementById('root');

// Create dom element for a card and append it to the root
const firstCard = createCharacterCard(EXAMPLE_DATA);
renderElement(firstCard);

fetchDataAndRender();

/*
Exercise: Till now we only have information about one character from Star Wars. Lets get more data and create new cards from them!

1.: Fetch more data from the Star Wars Api:

https://swapi.dev/api/people

Use the .then notation to receive the response and request the data with the .json() method. Use a console.log to look at the received data!

2.: Use an array method to create and render a card for each object in the fetched data array.

HINT: You can use the functions `createCharacterCard` and `renderElement` to create those cards, see above for an example!
*/

// --v-- your code here --v--

function fetchDataAndRender() {
	fetch() // ?
		.then() // ?
		.then(); // ?
}

// --^-- your code here --^--

function createCharacterCard(characterData) {
	const card = document.createElement('article'); // Create a new article Element
	card.classList.add('card'); // Add the class 'card'
	card.innerHTML = `
  <h2>${characterData.name}</h2>
  <p>Eye Color: ${characterData.eye_color}</p>
  <p>Birth Year: ${characterData.birth_year}</p>
`; // Fill the article element with content.
	return card;
}

function renderElement(element) {
	root.appendChild(element); // Append the Element to the page
}
