import "./App.css";

function Animal({ emoji, name }) {
  return (
    <h2>
      {emoji} {name}
    </h2>
  );
}

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" />
      <Animal emoji="🐈" name="Mittens" />
      <Animal emoji="🐢" name="Archibald" />
      <Animal emoji="🐣" name="Chick Norris" />
    </main>
  );
}
