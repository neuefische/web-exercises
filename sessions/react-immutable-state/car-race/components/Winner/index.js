export default function Winner({ winner, onRestart }) {
  return (
    <div>
      <h1>
        <span>{winner.emoji}</span> won!
      </h1>
      <button onClick={() => onRestart()}>Restart</button>
    </div>
  );
}
