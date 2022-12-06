import GameForm from "../components/GameForm";
import Navigation from "../components/Navigation";

export default function App({ onCreateGame, players }) {
  return (
    <>
      <h1>Scorekeeper</h1>
      <GameForm onCreateGame={onCreateGame} />
      <Navigation players={players} />
    </>
  );
}
