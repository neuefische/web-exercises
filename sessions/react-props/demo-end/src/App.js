import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me!");
  }

  return (
    <div>
      <Pet sound="Meow" emoji="🐈" name="cat" onPet={handlePet} isHungry />
      <Pet sound="Woof" emoji="🐕" name="dog" onPet={handlePet} />
      <Pet sound="Squeak" emoji="🐁" name="mouse" onPet={handlePet} />
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
