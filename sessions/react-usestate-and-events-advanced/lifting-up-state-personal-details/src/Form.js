import {useState} from 'react';

export default function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const {userName, userEmail} = form.elements;
		setName(userName.value);
		setEmail(userEmail.value);
		form.reset();
	}

	return (
		<form aria-labelledby="user" onSubmit={handleSubmit}>
			<h2 id="user">Form with useState</h2>
			<label htmlFor="userName">Name: </label>
			<input id="userName" name="userName" type="text" placeholder="John Doe" />
			<label htmlFor="userEmail">Email: </label>
			<input id="userEmail" name="userEmail" type="email" placeholder="john@doe.com" />
			<button>Submit</button>
		</form>
	);
}
