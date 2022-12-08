import styled from "styled-components";
import Counter from "./Counter";
import { useState } from "react";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

const initialAnimalArray = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];

export default function CounterList() {
  const [animals, setAnimals] = useState(initialAnimalArray);

  function handleAdd(animalID) {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalID ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }

  function handleSubtract(animalID) {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalID
          ? { ...animal, count: Math.max(0, animal.count - 1) }
          : animal
      )
    );
  }

  return (
    <>
      <h2>Counters</h2>
      <List>
        {animals.map((animal) => (
          <li key={animal.id}>
            <Counter
              animal={animal}
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
            />
          </li>
        ))}
      </List>
    </>
  );
}
