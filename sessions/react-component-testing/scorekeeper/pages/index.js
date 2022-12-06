import GameForm from "../components/GameForm";
import Navigation from "../components/Navigation";

export default function App({ onCreateGame, players }) {
  return (
    <>
      <GameForm onCreateGame={onCreateGame} />
      <Navigation players={players} />
    </>
  );
}
