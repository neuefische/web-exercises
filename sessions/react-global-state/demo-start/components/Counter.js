import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnimalName = styled.strong`
  width: 5rem;
`;

const initialAnimalArray = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];

export default function Counter({ animalName }) {
  const currentAnimal = initialAnimalArray.find(
    (animal) => animal.name === animalName
  );
  const [animal, setAnimal] = useState(currentAnimal);

  function addAnimal() {
    setAnimal({ ...animal, count: animal.count + 1 });
  }

  function subtractAnimal() {
    setAnimal({
      ...animal,
      count: Math.max(0, animal.count - 1),
    });
  }

  return (
    <Container>
      <AnimalName>{animal.name}:</AnimalName>
      <button
        type="button"
        onClick={() => {
          subtractAnimal();
        }}
      >
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{animal.count}</span>
      <button
        type="button"
        onClick={() => {
          addAnimal();
        }}
      >
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </Container>
  );
}
