import {getAuthorName} from './utils/authors.js';
import {getPlural} from './utils/words.js';
import {changeCard} from './Card.js';
import './Header.js';

/** Card */

document.querySelectorAll('[data-js="card"]').forEach(card => changeCard(card));

/** Classical Authors List */

const addButton = document.querySelector('[data-js="add-button"]');
const list = document.querySelector('[data-js="authors-list"]');

addButton.addEventListener('click', () => {
	if (!list.children.length) {
		const headline = document.createElement('h2');
		headline.textContent = `Famous ${getPlural('Author')}`;
		list.append(headline);
	}

	const listItem = document.createElement('li');
	listItem.className = 'classical-authors__list-item';
	listItem.textContent = getAuthorName();

	list.append(listItem);
});
