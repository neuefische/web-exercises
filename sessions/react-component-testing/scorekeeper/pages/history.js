import styled from "styled-components";
import HistoryEntry from "../components/HistoryEntry";
import Navigation from "../components/Navigation";
import { Wrapper } from "../components/Layout/Layout.styled";

export default function HistoryPage({ history, players }) {
  return (
    <Wrapper>
      <h2>Previous Games</h2>
      {history.map(({ nameOfGame, players, id }) => (
        <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
      ))}
      <Navigation players={players} />
    </Wrapper>
  );
}
