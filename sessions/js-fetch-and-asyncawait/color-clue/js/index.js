console.clear();

const nameDisplay = document.querySelector('[data-js="nameDisplay"]');
const colorInput = document.querySelector('[data-js="colorInput"]');
const submitButton = document.querySelector('[data-js="submitButton"]');
const restartButton = document.querySelector('[data-js="restartButton"]');
const restartScreen = document.querySelector('[data-js="restartScreen"]');
const distanceDisplay = document.querySelector('[data-js="distanceDisplay"]');

const form = document.querySelector('form');
const background = document.querySelector('main');

const IDLE_BACKGROUND_COLOR = '#c3c3c3';

const colorObject = {
	hexCode: '#000000',
	name: null,
};
let colorGuess = '#6BAB90';
fetchNewColor();

// --v-- your code here --v--

function fetchNewColor() {
	const hexCode = randomHex();
	fetch().then().then();
}

// --^-- your code here --^--

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

// Restart and get new Color
restartButton.addEventListener('click', () => {
	fetchNewColor();
	background.style.backgroundColor = IDLE_BACKGROUND_COLOR;
	background.style.color = 'black';
	submitButton.classList.toggle('display--hidden');
	restartScreen.classList.toggle('display--hidden');
	background.classList.toggle('fast-transition');
});

// Create a random Color hex code
function randomHex() {
	return new Array(6)
		.fill(null)
		.map(_entry => Math.floor(Math.random() * 16).toString(16))
		.join('');
}

// Calculate the differences between two colors in the hsl space
function colorDistance(color1, color2) {
	const c1 = rgbToHsl(color1);
	const c2 = rgbToHsl(color2);
	const hueDistance = Math.min(Math.abs(c1[0] - c2[0]), 360 - Math.abs(c1[0] - c2[0]));

	const hueScore = 100 - Math.round((100 * hueDistance) / 180);
	const saturationScore = 100 - Math.abs(c1[1] - c2[1]);
	const LightnessScore = 100 - Math.abs(c1[2] - c2[2]);

	return [hueScore, saturationScore, LightnessScore];
}

// Transform a hexCode into HSL color
function rgbToHsl(hexCode) {
	// Make r, g, and b fractions of 1
	const [r, g, b] = [
		Number.parseInt(hexCode.slice(1, 3), 16) / 255,
		Number.parseInt(hexCode.slice(3, 5), 16) / 255,
		Number.parseInt(hexCode.slice(5, 7), 16) / 255,
	];

	// Find greatest and smallest channel values
	const cmin = Math.min(r, g, b);
	const cmax = Math.max(r, g, b);
	const delta = cmax - cmin;
	let h = 0;
	let s = 0;
	let l = 0;
	// Calculate hue
	// No difference
	if (delta === 0) {
		h = 0;
	} else if (cmax === r) {
		// Red is max
		h = ((g - b) / delta) % 6;
	} else if (cmax === g) {
		// Green is max
		h = (b - r) / delta + 2;
	} else {
		// Blue is max
		h = (r - g) / delta + 4;
	}

	h = Math.round(h * 60);

	// Make negative hues positive behind 360°
	if (h < 0) {
		h += 360;
	}

	// Calculate lightness
	l = (cmax + cmin) / 2;

	// Calculate saturation
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

	// Multiply l and s by 100
	s = Number.parseInt(s * 100);
	l = Number.parseInt(l * 100);

	return [h, s, l];
}
