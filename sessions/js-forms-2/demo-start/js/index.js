console.clear();

const form = document.querySelector('[data-js="form"]');
const storage = document.querySelector('[data-js="storage"]');
const passwordInput = document.querySelector('[data-js="password-input"]');

function addStorageEntry(title, email, password) {
	const entryElement = document.createElement('li');
	entryElement.className = 'storage__entry';

	const headline = document.createElement('h3');
	headline.className = 'storage__title';
	headline.textContent = title;
	entryElement.append(headline);

	const descriptionList = document.createElement('dl');
	descriptionList.className = 'storage__credentials';

	const descriptionTermOne = document.createElement('dt');
	descriptionTermOne.textContent = 'Email:';
	descriptionList.append(descriptionTermOne);

	const descriptionDetailsOne = document.createElement('dd');
	descriptionDetailsOne.textContent = email;
	descriptionList.append(descriptionDetailsOne);

	const descriptionTermTwo = document.createElement('dt');
	descriptionTermTwo.textContent = 'Password:';
	descriptionList.append(descriptionTermTwo);

	const descriptionDetailsTwo = document.createElement('dd');
	descriptionDetailsTwo.textContent = password;
	descriptionList.append(descriptionDetailsTwo);

	entryElement.append(descriptionList);

	storage.append(entryElement);
}

function updatePasswordStrength(text) {
	const percentage = Math.min(100, (text.length / 8) * 100);
	const color = percentage < 100 ? 'var(--error)' : 'var(--success)';
	passwordInput.style = `--strength: ${percentage}%; --color: ${color}`;
}

// ---v---v---v---v---v--- Event Handlers ---v---v---v---v---v---

form.addEventListener('submit', event => {
	event.preventDefault();

	addStorageEntry(
		event.target.elements.title.value,
		event.target.elements.email.value,
		event.target.elements.password.value,
	);
});
