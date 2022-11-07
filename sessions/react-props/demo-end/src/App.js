import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me!");
  }

  return (
    <div>
      <Pet sound="Meow" emoji="🐈" onPet={handlePet} isHungry />
      <Pet sound="Woof" emoji="🐕" onPet={handlePet} />
      <Pet sound="Squeak" emoji="🐁" onPet={handlePet} />
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
