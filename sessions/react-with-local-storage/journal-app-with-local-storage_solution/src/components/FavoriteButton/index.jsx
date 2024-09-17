import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton({ id, isFavorite, onToggleFavorite }) {
  return (
    <button
      className="favorite-button"
      onClick={() => onToggleFavorite(id)}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
