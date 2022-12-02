import styled from "styled-components";
import GameForm from "../components/GameForm";
import Navigation from "../components/Navigation";

import PAGES from "../assets/pages";

export default function App({ currentPage, onCreateGame }) {
  return (
    <AppLayout>
      <h1>Scorekeeper</h1>
      {currentPage === PAGES.PLAY && <GameForm onCreateGame={onCreateGame} />}

      {(currentPage === PAGES.PLAY || currentPage === PAGES.HISTORY) && (
        <Navigation />
      )}
    </AppLayout>
  );
}

const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`;
