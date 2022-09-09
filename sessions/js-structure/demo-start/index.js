function toggleBookmark() {
	const bookmarkButtons = document.querySelectorAll('[data-js="bookmark-button"]');

	bookmarkButtons.forEach(button => {
		button.addEventListener('click', () => {
			button.classList.toggle('bookmark--active');
		});
	});
}

function toggleAnswer() {
	const cardElements = document.querySelectorAll('[data-js="card"]');

	cardElements.forEach(card => {
		const answerButton = card.querySelector('[data-js="answer-button"]');
		const answer = card.querySelector('[data-js="answer"]');

		answerButton.addEventListener('click', () => {
			answer.classList.toggle('card__answer--active');
		});
	});
}

toggleBookmark();
toggleAnswer();
