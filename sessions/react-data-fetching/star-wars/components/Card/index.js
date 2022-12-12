export default function Card({ name, height, eyeColor, birthYear }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Info:</h3>
      <dl>
        <dt>Height:</dt>
        <dd>{height}</dd>
        <dt>Eye Color:</dt>
        <dd>{eyeColor}</dd>
        <dt>Birth Year:</dt>
        <dd>{birthYear}</dd>
      </dl>
    </div>
  );
}
