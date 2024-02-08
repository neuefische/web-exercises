import "./FavoriteButton.css";
import StarFilled from "./star-filled";
import Star from "./star";

export default function FavoriteButton() {
  // this should be a state variable
  const isFavorite = false;

  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
