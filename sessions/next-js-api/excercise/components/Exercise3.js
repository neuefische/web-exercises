import {useState} from 'react';

export default function Exercise3() {
	const [data3, setData3] = useState('...loading');

	async function fetchExercise3(data) {
		const res = await fetch('/api/users/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const message = await res.json();
		setData3(JSON.stringify(message, null, 4));
	}

	return (
		<>
			<h2>Exercise 3</h2>
			<button
				onClick={() => {
					fetchExercise3({
						_id: '1234',
						name: 'John Doe',
						gender: 'non binary',
						email: 'test@1234.de',
					});
				}}
			>
				Post new data to API under api/users/add
			</button>
			<pre>{data3}</pre>
		</>
	);
}
