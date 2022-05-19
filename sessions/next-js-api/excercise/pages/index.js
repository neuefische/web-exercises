import {useState} from 'react';

export default function IndexPage() {
	const [data1, setData1] = useState('...loading');
	const [data2, setData2] = useState('...loading');
	const [data3, setData3] = useState('...loading');
	const [data4, setData4] = useState('...loading');

	async function fetchExercise1() {
		const res = await fetch('/api/users');
		const data = await res.json();
		setData1(JSON.stringify(data, null, 4));
	}

	async function fetchExercise2(id) {
		const res = await fetch(`/api/users/${id}`);
		const data = await res.json();
		setData2(JSON.stringify(data, null, 4));
	}

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

	async function fetchExercise4(id) {
		const res = await fetch(`/api/users/${id}/delete`, {
			method: 'DELETE',
		});
		const message = await res.json();
		setData4(JSON.stringify(message, null, 4));
	}

	return (
		<div>
			<h2>Exercise 1</h2>
			<button
				onClick={() => {
					fetchExercise1();
				}}
			>
				Load example Data from api/users
			</button>
			<pre>{data1}</pre>

			<hr />
			<h2>Exercise 2</h2>
			<button
				onClick={() => {
					fetchExercise2('1');
				}}
			>
				Load example Data from api/users/[id]
			</button>
			<pre>{data2}</pre>
			<hr />
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
			<hr />
			<h2>Exercise 4</h2>
			<button
				onClick={() => {
					fetchExercise4('1234');
				}}
			>
				Delete user via API
			</button>
			<pre>{data4}</pre>
			<hr />
		</div>
	);
}
