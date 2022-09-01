console.clear();

const form = document.querySelector('[data-js="form"]');
const storage = document.querySelector('[data-js="storage"]');
const passwordInput = document.querySelector('[data-js="password-input"]');

function addStorageEntry(title, email, password) {
	const entryElement = document.createElement('li');
	entryElement.className = 'storage__entry';

	entryElement.innerHTML = `
		<h3	class="storage__title">${title}</h3>
		<dl class="storage__credentials">
			<dt>Email:</dt>
			<dd>${email}</dd>
			<dt>Password:</dt>
			<dd>${password}</dd>
		</dl>
	`;

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
