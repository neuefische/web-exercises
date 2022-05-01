import './App.css';
import Card from './components/Card';
import Title from './components/Title';
import { USERS } from './db';

function App() {
	return (
		<main className="App__container">
			<Title text="ClientBoard" />
			<div className="App__card-grid">
				<Card user={USERS[0]} />
			</div>
		</main>
	);
}

export default App;
