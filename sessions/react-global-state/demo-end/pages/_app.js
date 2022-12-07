import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialAnimalArray = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimalArray);

  const animalCounts = animals.map((animal) => animal.count);
  const countSum = animalCounts.reduce((a, b) => a + b);
  const countAverage = countSum / animals.length;
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;

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
      <GlobalStyle />
      <Layout dragonCount={dragonCount} countSum={countSum}>
        <Component
          {...pageProps}
          animals={animals}
          countSum={countSum}
          countAverage={countAverage}
          dragonCount={dragonCount}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
        />
      </Layout>
    </>
  );
}
