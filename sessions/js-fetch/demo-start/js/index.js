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
