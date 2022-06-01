import {useState} from 'react';

export default function Exercise1() {
	const [data1, setData1] = useState('...loading');

	async function fetchExercise1() {
		const res = await fetch('/api/users');
		const data = await res.json();
		setData1(JSON.stringify(data, null, 4));
	}

	return (
		<>
			<h2>Exercise 1</h2>
			<button
				onClick={() => {
					fetchExercise1();
				}}
			>
				Load example Data from api/users
			</button>
			<pre>{data1}</pre>
		</>
	);
}
