import React from "react";
import "./styles.css";

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}
      <AdoptButton>
        <strong>{name}</strong>
      </AdoptButton>
    </>
  );
}

function AdoptButton({ children }) {
  return (
    <button type="button" className="adopt-button">
      Adopt {children}
    </button>
  );
}

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description={<p>Very cute dog</p>} />
      <Animal emoji="🐈" name="Mittens" description={<p>A playful kitten</p>} />
      <Animal
        emoji="🐢"
        name="Archibald"
        description={<p>Super relaxed turtle</p>}
      />
      <Animal
        emoji="🐣"
        name="Chick Norris"
        description={<p>A nested chick</p>}
      />
    </main>
  );
}
