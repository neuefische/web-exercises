import {useState} from 'react';

export default function Exercise4() {
	const [data4, setData4] = useState('...loading');

	async function fetchExercise4(id) {
		const res = await fetch(`/api/users/${id}/delete`, {
			method: 'DELETE',
		});
		const message = await res.json();
		setData4(JSON.stringify(message, null, 4));
	}

	return (
		<>
			<h2>Exercise 4</h2>
			<button
				onClick={() => {
					fetchExercise4('1234');
				}}
			>
				Delete user via API
			</button>
			<pre>{data4}</pre>
		</>
	);
}
