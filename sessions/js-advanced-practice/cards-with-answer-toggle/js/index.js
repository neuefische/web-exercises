console.clear();

const cardsContainer = document.querySelector('[data-js=cards]');

const cards = [
	{
		question: 'What is git?',
		answer: 'Git is a tool to work with code.',
	},
	{
		question: 'What is html?',
		answer: 'HTML is Hypertext Markup Language. Google it.',
	},
	{
		question: 'What is css?',
		answer: 'Cascading style sheets. Google it.',
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
      <button data-js="card-button">Toggle answer</button>
      <p data-js="answer" hidden>${card.answer}</p>
    `;
		cardsContainer.append(cardElement);

		const answerButton = cardElement.querySelector('[data-js=card-button]');
		const answerElement = cardElement.querySelector('[data-js=answer]');

		answerButton.addEventListener('click', () => {
			answerElement.toggleAttribute('hidden');
		});
	});
}
