const recipes = [
	{
		title: 'Crepes',
		duration: 60,
		ingredients: ['butter', 'flour', 'eggs', 'milk', 'salt'],
		servings: 3,
	},
	{
		title: 'Scrambled Eggs',
		duration: 20,
		ingredients: ['eggs', 'milk', 'salt'],
		servings: 2,
	},
	{
		title: 'Vegan Salmon',
		duration: 60 * 24 * 3, // 3 days
		ingredients: ['carrots', 'olive oil', 'nori sheets', 'liquid smoke', 'soy sauce'],
		servings: 10,
	},
	{
		title: 'Carot Cake',
		duration: 120,
		ingredients: ['carrots', 'flour', 'eggs', 'salt', 'milk', 'sugar'],
		servings: 10,
	},
];

/*
 1: map exercises:
*/

const onlyTitles = null; // ['Crepes', ...]

const titlesWithDuration = null; // ['Crepes (60min)', ...]

const timePerServing = null; // [20, 10, 432, 12]

// EXTRA:
// HINT: use first map() and then Array.prototype.join() with "method chaining":
const allTitlesInOneString = null; // 'Crepes, Scrambled Eggs, ...'

/*
 2: filter exercises:
*/

const recipesThatOnlyTake60minutesOrLess = null;

const allRecipesWithMoreThan2Servings = null;

const allRecipesWithTitlesLongerThan12Characters = null;

// EXTRA:
// HINT: use Array.prototype.includes
const allRecipesWithEggs = null;
