import {
	colorInput,
	form,
	submitButton,
	background,
	distanceDisplay,
	restartScreen,
	colorObject,
	colorDistance,
	rgbToHsl,
} from './utils.js';

let colorGuess = '#6BAB90';

// update form when choosing a color
colorInput.addEventListener('input', event => {
	colorGuess = event.target.value;
	form.style.backgroundColor = colorGuess;
});

// Reveal the correct color
submitButton.addEventListener('click', () => {
	background.style.backgroundColor = colorObject.hexCode;
	background.style.color =
		rgbToHsl(colorObject.hexCode)[2] < 30 ? 'rgb(255 255 255 / 0.7)' : 'rgb(0 0 0 / 0.7)';
	const distance = colorDistance(colorObject.hexCode, colorGuess);
	distanceDisplay.textContent = `
    Score: [ H: ${distance[0]}% S: ${distance[1]}% L: ${distance[2]}% ]
  `;
	submitButton.classList.toggle('display--hidden');
	restartScreen.classList.toggle('display--hidden');
	background.classList.toggle('fast-transition');
});
