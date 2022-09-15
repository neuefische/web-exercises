import {getAuthorName} from './utils/authors.js';
import {getPlural} from './utils/words.js';

const addButton = document.querySelector('[data-js="add-author-button"]');
const headline = document.querySelector('[data-js="authors-headline"]');
const list = document.querySelector('[data-js="authors-list"]');

addButton.addEventListener('click', () => {
	headline.textContent = `Famous ${getPlural('Author')}`;

	const listItem = document.createElement('li');
	listItem.className = 'classical-authors__list-item';
	listItem.textContent = getAuthorName();

	list.append(listItem);
});
