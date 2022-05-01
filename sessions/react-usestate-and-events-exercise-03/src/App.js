/**
 * There is a form in which you enter your favourite holiday
 * and its respective date.
 * Make sure that, on submit, both input values are saved
 * in separate states.
 *
 */
import './styles.css';

export default function App() {
	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="App">
			<h1>useState and Events</h1>
			<form aria-labelledby="user" onSubmit={handleSubmit}>
				<h2 id="user">Form with useState</h2>
				<label htmlFor="name">My Favourite Holiday: </label>
				<input id="name" type="text" placeholder="Christmas" />
				<label htmlFor="date">Date: </label>
				<input id="date" type="date" />
				<button>Submit</button>
			</form>
		</div>
	);
}
