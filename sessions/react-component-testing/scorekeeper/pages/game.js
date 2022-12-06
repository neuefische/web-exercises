import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Player from "../components/Player";

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  onEndGame,
  onDecreasePlayerScore,
  onIncreasePlayerScore,
}) {
  return (
    <>
      {nameOfGame && players?.length ? (
        <>
          <header>
            <h2>{nameOfGame}</h2>
            <p>Successfully created a new game!</p>
          </header>
          {players.map(({ name, score, id }, index) => (
            <Player
              key={id}
              name={name}
              score={score}
              onIncreasePlayerScore={() => onIncreasePlayerScore(index)}
              onDecreasePlayerScore={() => onDecreasePlayerScore(index)}
            />
          ))}
          <Button onClick={onResetScores}>Reset scores</Button>
          <Button onClick={onEndGame}>End game</Button>
        </>
      ) : null}
      <Navigation />
    </>
  );
}
