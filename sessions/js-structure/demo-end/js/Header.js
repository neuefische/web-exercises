import {getPlural} from './utils/words';

const headerButton = document.querySelector('[data-js="header-button"]');
const headline = document.querySelector('[data-js="headline"]');

headerButton.addEventListener('click', () => {
	headline.textContent = `Classical ${getPlural('Author')}`;
	headerButton.classList.add('header__button-clicked');
});
