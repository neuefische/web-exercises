import styled from "styled-components";
import HistoryEntry from "../components/HistoryEntry";

export default function HistoryPage({ history }) {
  return (
    <HistoryWrapper>
      <h2>Previous Games</h2>
      {history.map(({ nameOfGame, players, id }) => (
        <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
      ))}
    </HistoryWrapper>
  );
}

const HistoryWrapper = styled.div`
  display: grid;
  gap: 28px;
`;
