import {caesarCipher13} from '../../utils/cipher.js';

export function Header() {
	const headlineText = 'Classical Authors';

	const header = document.createElement('header');
	header.className = 'header';

	const headline = document.createElement('h1');
	headline.textContent = caesarCipher13(headlineText);

	const button = document.createElement('button');
	button.textContent = 'Decipher Headline';
	button.type = 'button';
	button.className = 'header__button';
	button.addEventListener('click', handleDecipherHeadlineButtonClick);

	header.append(headline, button);

	function handleDecipherHeadlineButtonClick() {
		headline.textContent = headlineText;
		button.setAttribute('disabled', '');
	}

	return header;
}
