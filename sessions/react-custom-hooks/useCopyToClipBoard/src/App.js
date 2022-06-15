import { useState } from 'react';
import copy from 'copy-to-clipboard';

export default function App() {
	/*

  Here's a small React application that enables users to copy a string or a number from an input field onto
  the clipboard by using the copy-to-clipboard library (https://www.npmjs.com/package/copy-to-clipboard).
  Extract the copy logic in a separate Custom Hook calles useCopyToClipBoard.

   [] Add a useCopyToClipBoard.js file in a newly created hooks folder.
   [] Write a Custom Hook that returns an array. The array should include the variable isCopied and the
        function handleCopy. You don't have to write any new JS, you just have to shift all
        information needed.
   [] Use the created hook in your App.js

   */

	const [password, setPassword] = useState('');
	const [isCopied, setCopied] = useState(false);

	function handleCopy(text) {
		if (typeof text === 'string' || typeof text === 'number') {
			copy(text.toString());
			setCopied(true);
		} else {
			setCopied(false);
			console.error(
				`Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
			);
		}
	}

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<input
				type="text"
				onChange={event => {
					setPassword(event.target.value);
				}}
			/>
			<button onClick={() => handleCopy(password)}>
				<span>{isCopied ? 'Copied!' : 'Copy!'}</span>
			</button>
		</div>
	);
}
