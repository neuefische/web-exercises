import AdoptButton from "./AdoptButton";
import AnimalEmoji from "./AnimalEmoji";

export default function Animal({ emoji, name, description }) {
  return (
    <>
      <h3>
        <AnimalEmoji>{emoji}</AnimalEmoji> {name}
      </h3>
      {description}
      <AdoptButton>
        <strong>{name}</strong>
      </AdoptButton>
    </>
  );
}
