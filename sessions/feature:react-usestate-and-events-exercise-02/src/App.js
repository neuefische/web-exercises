/**
 * Goal: The `<div class="box">` changes it's color when
 * the `active` class is added.
 *
 * Make sure that, when the button toggle the class,
 * React rerenders the component in order to see the change.
 *
 * As a bonus, see if you can toggle the text
 * on the button itself.
 */

import { useState } from 'react';
let isActive = false;

function handleClick() {
	isActive = !isActive;
}

export default function App() {
	return (
		<main>
			<div className={`box ${isActive ? 'active' : ''}`} />
			<button onClick={handleClick}>Activate</button>
		</main>
	);
}
