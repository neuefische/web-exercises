import GameForm from "../components/GameForm";
import Navigation from "../components/Navigation";
import { Wrapper } from "../components/Layout/Layout.styled";

export default function App({ onCreateGame, players }) {
  return (
    <Wrapper>
      <h1>Scorekeeper</h1>
      <GameForm onCreateGame={onCreateGame} />
      <Navigation players={players} />
    </Wrapper>
  );
}
