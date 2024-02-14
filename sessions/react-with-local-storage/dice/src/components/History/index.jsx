import "./History.css";

const MAX_ROLLS = 20;

export default function History({ rolls }) {
  return (
    <>
      {rolls.length ? <h2>History</h2> : <h2>Click the die to roll…</h2>}
      <ul className="history">
        {rolls.slice(0, MAX_ROLLS).map(({ time, value }, index) => (
          <li
            key={time}
            className="history__entry"
            style={{ opacity: 1 - index / MAX_ROLLS }}
          >
            [
            {new Date(time).toLocaleTimeString("en", {
              timeStyle: "medium",
              hourCycle: "h24",
            })}
            ] <strong>{value}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}
