console.clear();

const cardsContainer = document.querySelector('[data-js=cards]');
const form = document.querySelector('[data-js=form]');

let cards = [];

form.addEventListener('submit', event => {
	event.preventDefault();

	const questionElement = form.elements.question;
	const answerElement = form.elements.answer;
	const tagsElement = form.elements.tags;

	const newCard = {
		question: questionElement.value,
		answer: answerElement.value,
		tags: tagsElement.value
			.split(',')
			.map(tag => tag.trim())
			.filter(tag => tag.length),
	};

	cards = [newCard, ...cards];
	renderCards();

	form.reset();
	questionElement.focus();
});

function renderCards() {
	cardsContainer.innerHTML = '';

	cards.forEach(card => {
		const cardElement = document.createElement('li');
		cardElement.className = 'card';
		cardElement.innerHTML = `
      <p>${card.question}</p>
      <p>${card.answer}</p>
      <ul role="list" class="card__tag-list">
        ${card.tags.map(tag => `<li class="card__tag">${tag}</li>`).join('')}
      </ul>
    `;
		cardsContainer.append(cardElement);
	});
}
