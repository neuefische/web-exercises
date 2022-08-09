console.clear();

const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener('submit', event => {
	event.preventDefault();
	const newCard = document.createElement('li');
	const cardText = textInput.value;
	newCard.classList.add('card');
	newCard.innerHTML = `
		<h2>Card</h2>
		<p>${cardText}</p>
	`;
	cardContainer.append(newCard);
});
