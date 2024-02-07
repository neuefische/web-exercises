export function Pet({ sound, emoji, name, onPet, isHungry }) {
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed me!" : sound}{" "}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
    </div>
  );
}
