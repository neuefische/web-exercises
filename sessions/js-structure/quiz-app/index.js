function handleSubmit() {
	const form = document.querySelector('[data-js="form"]');

	form.addEventListener('submit', event => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		createCard(data);
		event.target.reset();
		event.target.elements.question.focus();
	});
}

function toggleBookmark() {
	const bookmarkButtons = document.querySelectorAll('[data-js="bookmark-button"]');

	bookmarkButtons.forEach(button => {
		button.addEventListener('click', () => {
			button.classList.toggle('bookmark--active');
		});
	});
}

function countCharactersLeft() {
	const formFields = document.querySelectorAll('[data-js*="input"]');
	const counterOutputs = document.querySelectorAll('[data-js*=amount-left]');

	formFields.forEach((formField, index) => {
		counterOutputs.forEach(output => {
			output.innerText = formField.maxLength;
		});
		formField.addEventListener('input', () => {
			const currentAmountLeft = formField.maxLength - formField.value.length;
			updateAmount(currentAmountLeft, index);
		});
	});
	function updateAmount(value, index) {
		counterOutputs[index].innerText = value;
	}
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

function createCard(data) {
	const cardList = document.querySelector('[data-js="form-card-list"]');

	const listItem = document.createElement('li');
	listItem.setAttribute('class', 'form__card-list-item');

	const article = document.createElement('article');
	article.setAttribute('class', 'card');
	article.setAttribute('data-js', 'card');

	const headline = document.createElement('h2');
	headline.textContent = data.question;
	article.append(headline);

	const answerButton = document.createElement('button');
	answerButton.setAttribute('class', 'card__button-answer');
	answerButton.setAttribute('type', 'button');
	answerButton.setAttribute('data-js', 'answer-button');
	answerButton.textContent = 'Show answer';
	article.append(answerButton);

	const answer = document.createElement('p');
	answer.setAttribute('class', 'card__answer');
	answer.setAttribute('data-js', 'answer');
	answer.textContent = data.answer;
	article.append(answer);

	const tagList = document.createElement('ul');
	tagList.setAttribute('class', 'class__tag-list');

	const tagListItem = document.createElement('li');
	tagListItem.setAttribute('class', 'card__tag-list-item');
	tagListItem.textContent = data.tag;
	tagList.append(tagListItem);

	article.append(tagList);

	const bookmarkWrapper = document.createElement('div');
	bookmarkWrapper.setAttribute('class', 'card__button-bookmark');

	const bookmarkButton = document.createElement('button');
	bookmarkButton.setAttribute('class', 'bookmark');
	bookmarkButton.setAttribute('aria-label', 'bookmark');
	bookmarkButton.setAttribute('type', 'button');
	bookmarkButton.setAttribute('data-js', 'bookmark-button');

	const bookmarkIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	bookmarkIcon.setAttribute('class', 'bookmark__icon');
	bookmarkIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	bookmarkIcon.setAttribute('viewbox', '0 0 24 24');

	const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	iconPath.setAttribute('d', 'M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z');

	bookmarkIcon.append(iconPath);

	bookmarkButton.append(bookmarkIcon);

	bookmarkWrapper.append(bookmarkButton);

	article.append(bookmarkWrapper);

	listItem.append(article);

	cardList.append(listItem);

	toggleAnswer();
	toggleBookmark();
	countCharactersLeft();
}

toggleBookmark();
toggleAnswer();
handleSubmit();
countCharactersLeft();
