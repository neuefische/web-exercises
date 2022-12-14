import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me!");
  }

  return (
    <div>
      <Pet
        sound="Meow"
        emoji={
          <span role="img" aria-label="A cat">
            🐈
          </span>
        }
        onPet={handlePet}
        isHungry
      />
      <Pet
        sound="Woof"
        emoji={
          <span role="img" aria-label="A dog">
            🐕
          </span>
        }
        onPet={handlePet}
      />
      <Pet
        sound="Squeak"
        emoji={
          <span role="img" aria-label="A mouse">
            🐁
          </span>
        }
        onPet={handlePet}
      />
    </div>
  );
}

function Pet({ sound, emoji, onPet, isHungry }) {
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed me!" : sound} {emoji}
    </div>
  );
}
