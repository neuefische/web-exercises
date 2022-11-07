import React from "react";
import Animal from "./components/Animal";
import AnimalCategory from "./components/AnimalCategory";
import Header from "./components/Header";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <AnimalCategory title="Fluffy Fur">
        <Animal emoji="🐕" name="Lucky" description={<p>Very cute dog</p>} />
        <Animal
          emoji="🐈"
          name="Mittens"
          description={<p>A playful kitten</p>}
        />
      </AnimalCategory>
      <AnimalCategory title="Waterproof">
        <Animal
          emoji="🐢"
          name="Archibald"
          description={<p>Super relaxed turtle</p>}
        />
      </AnimalCategory>
    </div>
  );
}
