import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

const initialAnimals = [
  {
    id: 1,
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: 2,
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: 3,
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
