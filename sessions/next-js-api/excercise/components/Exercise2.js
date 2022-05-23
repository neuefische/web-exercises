import {useState} from 'react';

export default function Exercise2() {
	const [data2, setData2] = useState('...loading');

	async function fetchExercise2(id) {
		const res = await fetch(`/api/users/${id}`);
		const data = await res.json();
		setData2(JSON.stringify(data, null, 4));
	}

	return (
		<>
			<h2>Exercise 2</h2>
			<button
				onClick={() => {
					fetchExercise2();
				}}
			>
				Load example Data from api/users/[id]
			</button>
			<pre>{data2}</pre>
		</>
	);
}
