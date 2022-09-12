/** HEADER */
const headerButton = document.querySelector('[data-js="header-button"]');
const headline = document.querySelector('[data-js="headline"]');

headerButton.addEventListener('click', () => {
	headline.textContent = 'Classical Authors';
	headerButton.classList.add('header__button-clicked');
});

/** Card */

const card = document.querySelector('[data-js="card"]');
const cardButton = document.querySelector('[data-js="card-button"]');

cardButton.addEventListener('click', () => {
	card.children[0].textContent = 'Real Latin Placeholder Text';
	card.children[1].textContent =
		'Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. (Caes. BG 1.1.1)';
	cardButton.classList.add('card__button-clicked');
	card.classList.add('card-changed');
});

/** Classical Authors List */

const addButton = document.querySelector('[data-js="add-button"]');
const list = document.querySelector('[data-js="authors-list"]');

let count = 0;
addButton.addEventListener('click', () => {
	if (!list.children.length) {
		const headline = document.createElement('h2');
		headline.textContent = 'Famous Authors';
		list.append(headline);
	}

	const authors = ['Caesar', 'Horace', 'Homer', 'Ovid', 'Cicero'];

	if (count > 4) {
		count = 0;
	}

	const listItem = document.createElement('li');
	listItem.className = 'classical-authors__list-item';
	listItem.textContent = authors[count];
	count++;

	list.append(listItem);
});
