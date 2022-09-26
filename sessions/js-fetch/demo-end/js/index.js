// Import Functions & Modules
import {JokeSection} from '../components/JokeSection/JokeSection.js';
import {Joke} from '../components/Joke/Joke.js';
import {getRandomInt} from '../utils/getRandomInt.js';

// Declare root Element
const root = document.body;

// Assemble DOM
const jokeSection = JokeSection();
const joke = Joke();

root.append(jokeSection);
jokeSection.append(joke);

// Get a random joke from a Bad Jokes API
async function getJoke() {
	try {
		const response = await fetch('https://example-apis.vercel.app/api/bad-jokes');

		// Failure (Bad response)
		if (!response.ok) {
			console.error('Bad Response');
		} else {
			// Success
			const jokeData = await response.json();

			const randomIndex = getRandomInt(0, jokeData.length - 1);

			const randomJoke = jokeData[randomIndex];

			joke.textContent = randomJoke.joke;
		}
		// Failure (Error during fetch)
	} catch (error) {
		console.error('An Error occurred');
	}
}

getJoke();
