import Button from "./Button";
import AnimalEmoji from "./AnimalEmoji";

export default function Animal({ emoji, name, description }) {
  return (
    <>
      <h3>
        <AnimalEmoji>{emoji}</AnimalEmoji> {name}
      </h3>
      {description}
      <Button>
        Adopt <strong>{name}</strong>
      </Button>
    </>
  );
}
