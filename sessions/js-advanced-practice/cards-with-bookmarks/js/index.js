console.clear();

const cardsContainer = document.querySelector('[data-js=cards]');

const cards = [
	{
		question: 'Can I toggle them?',
	},
	{
		question: 'Should I try it?',
	},
	{
		question: 'What is the name of this beautiful color?',
		isBookmarked: true,
	},
];

renderCards();

function renderCards() {
	cardsContainer.innerHTML = '';
	cards.forEach(card => {
		const cardElement = document.createElement('li');
		cardElement.className = 'card';
		cardElement.innerHTML = `
      <p>${card.question}</p>
      <button
        class="card__bookmark${card.isBookmarked ? ' card__bookmark--active' : ''}"
        data-js="bookmark">
      </button>
    `;
		cardsContainer.append(cardElement);

		const bookmarkElement = cardElement.querySelector('[data-js=bookmark]');
		bookmarkElement.addEventListener('click', () => {
			card.isBookmarked = !card.isBookmarked;
			bookmarkElement.classList.toggle('card__bookmark--active');
		});
	});
}
