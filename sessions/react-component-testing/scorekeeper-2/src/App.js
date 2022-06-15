import {useState} from 'react';
import styled from 'styled-components';
import GameForm from './components/GameForm';
import Navigation from './components/Navigation';
import GamePage from './pages/GamePage';
import HistoryPage from './pages/HistoryPage';
import {nanoid} from 'nanoid';
import PAGES from './assets/pages';

export default function App() {
	const [players, setPlayers] = useState([]);
	const [nameOfGame, setNameOfGame] = useState('');
	const [currentPage, setCurrentPage] = useState(PAGES.PLAY);
	const [history, setHistory] = useState([]);

	return (
		<AppLayout>
			<h1>Scorekeeper</h1>
			{currentPage === PAGES.PLAY && <GameForm onCreateGame={createGame} />}

			{currentPage === PAGES.GAME && (
				<GamePage
					nameOfGame={nameOfGame}
					players={players}
					onResetScores={resetScores}
					onEndGame={endGame}
					onDecreasePlayerScore={decreasePlayerScore}
					onIncreasePlayerScore={increasePlayerScore}
				/>
			)}

			{currentPage === PAGES.HISTORY && <HistoryPage history={history} />}

			{(currentPage === PAGES.PLAY || currentPage === PAGES.HISTORY) && (
				<Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
			)}
		</AppLayout>
	);

	function createGame({nameOfGame, playerNames}) {
		setNameOfGame(nameOfGame);
		setPlayers(playerNames.map(name => ({name, score: 0, id: nanoid()})));
		setCurrentPage(PAGES.GAME);
	}

	function endGame() {
		setHistory([{players, nameOfGame, id: nanoid()}, ...history]);
		setPlayers([]);
		setNameOfGame('');
		setCurrentPage(PAGES.PLAY);
	}

	function resetScores() {
		setPlayers(players.map(player => ({...player, score: 0})));
	}

	function increasePlayerScore(index) {
		const currentPlayer = players[index];
		setPlayers([
			...players.slice(0, index),
			{...currentPlayer, score: currentPlayer.score + 1},
			...players.slice(index + 1),
		]);
	}

	function decreasePlayerScore(index) {
		const currentPlayer = players[index];
		setPlayers([
			...players.slice(0, index),
			{...currentPlayer, score: currentPlayer.score - 1},
			...players.slice(index + 1),
		]);
	}
}

const AppLayout = styled.div`
	display: grid;
	gap: 20px;
	padding: 20px;
`;
