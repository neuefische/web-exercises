/** Helper Functions */

function getPlural(word) {
	return word + 's';
}

let count = 0;
function getAuthorName() {
	const authors = ['Caesar', 'Horace', 'Homer', 'Ovid', 'Cicero'];

	if (count > 4) {
		count = 0;
	}

	const author = authors[count];
	count++;
	return author;
}

/** HEADER */
const headerButton = document.querySelector('[data-js="header-button"]');
const headline = document.querySelector('[data-js="headline"]');

headerButton.addEventListener('click', () => {
	headline.textContent = `Classical ${getPlural('Author')}`;
	headerButton.classList.add('header__button-clicked');
});

/** Card */

function changeCard(cardElement) {
	const cardButton = cardElement.querySelector('[data-js="card-button"]');

	cardButton.addEventListener('click', () => {
		cardElement.children[0].textContent = 'Real Latin Placeholder Text';
		cardElement.children[1].textContent =
			'Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. (Caes. BG 1.1.1)';
		cardButton.classList.add('card__button-clicked');
		cardElement.classList.add('card-changed');
	});
}

document.querySelectorAll('[data-js="card"]').forEach(card => changeCard(card));

/** Classical Authors List */

const addButton = document.querySelector('[data-js="add-button"]');
const list = document.querySelector('[data-js="authors-list"]');

addButton.addEventListener('click', () => {
	if (!list.children.length) {
		const headline = document.createElement('h2');
		headline.textContent = 'Famous Authors';
		list.append(headline);
	}

	const listItem = document.createElement('li');
	listItem.className = 'classical-authors__list-item';
	listItem.textContent = getAuthorName();
	count++;

	list.append(listItem);
});
