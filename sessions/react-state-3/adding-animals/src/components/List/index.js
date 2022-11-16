import "./List.css";

export default function List({ animals }) {
  return (
    <>
      <h2>Your animals:</h2>
      <ul className="animal-list" role="list">
        {animals.map((animal) => (
          <li key={animal.id} className="animal-list__item">
            <h3>{animal.name}</h3>
            <span aria-label="emoji">{animal.emoji}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
