import {useState} from 'react';

export default function Form({onUserCreate}) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const {name, email} = form.elements;
		setName(name.value);
		setEmail(email.value);
		form.reset();
	}

	return (
		<form aria-labelledby="user" onSubmit={handleSubmit}>
			<h2 id="user">Form with useState</h2>
			<label htmlFor="name">Name: </label>
			<input id="name" type="text" placeholder="John Doe" />
			<label htmlFor="email">Email: </label>
			<input id="email" type="email" placeholder="john@doe.com" />
			<button>Submit</button>
		</form>
	);
}
