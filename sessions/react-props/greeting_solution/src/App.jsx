import "./styles.css";

export default function App() {
  return <Greeting name="Bob" />;
}

function Greeting({ name }) {
  return <p>Hello {name}!</p>;
}
