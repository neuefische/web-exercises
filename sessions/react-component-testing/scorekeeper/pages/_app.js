import GlobalStyle from "../styles";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState("");
  const [history, setHistory] = useState([]);

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame);
    setPlayers(playerNames.map((name) => ({ name, score: 0, id: nanoid() })));
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: nanoid() }, ...history]);
    setPlayers([]);
    setNameOfGame("");

    router.push("/");
  }

  function resetScores() {
    setPlayers(players.map((player) => ({ ...player, score: 0 })));
  }

  function increasePlayerScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreasePlayerScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          players={players}
          nameOfGame={nameOfGame}
          history={history}
          onCreateGame={createGame}
          onEndGame={endGame}
          onResetScores={resetScores}
          onIncreasePlayerScore={increasePlayerScore}
          onDecreasePlayerScore={decreasePlayerScore}
        />
      </Layout>
    </>
  );
}
