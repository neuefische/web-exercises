const button = document.querySelector('[data-js="button-position"]');

let positionIndex = 0;

button.addEventListener('click', () => {
	const newPositionIndex = (positionIndex + 1) % 3;
	button.className = button.className.replace(
		`position--${positionIndex}`,
		`position--${newPositionIndex}`,
	);
	positionIndex = newPositionIndex;
});
