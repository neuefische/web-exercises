import {launch} from './core/protocol.js';

export function initialize(launchSequenceFunction) {
	const launchButton = document.querySelector('[data-js="launch"]');
	launchButton.addEventListener('click', () => {
		launch(launchSequenceFunction);
	});
}
