/** Helper Functions */

function getPlural(word) {
	return word + 's';
}

let count = 0;
const authors = ['Caesar', 'Horace', 'Homer', 'Ovid', 'Cicero'];
function getAuthorName() {
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
	headerButton.setAttribute('disabled', '');
});

/** Card */

function initializeCard(cardElement) {
	const cardButton = cardElement.querySelector('[data-js="card-button"]');

	cardButton.addEventListener('click', () => {
		cardElement.children[0].textContent = 'Real Latin Placeholder Text';
		cardElement.children[1].textContent =
			'Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. (Caes. BG 1.1.1)';
		cardButton.setAttribute('disabled', '');
		cardElement.classList.add('card--rephrased');
	});
}

// Initialize all cards on the page
document.querySelectorAll('[data-js="card"]').forEach(card => initializeCard(card));

/** Classical Authors List */

const addAuthorButton = document.querySelector('[data-js="add-author-button"]');
const authorsHeadline = document.querySelector('[data-js="authors-headline"]');
const authorsList = document.querySelector('[data-js="authors-list"]');

addAuthorButton.addEventListener('click', () => {
	authorsHeadline.textContent = `Famous ${getPlural('Author')}`;

	const listItem = document.createElement('li');
	listItem.className = 'classical-authors__list-item';
	listItem.textContent = getAuthorName();

	authorsList.append(listItem);
});
