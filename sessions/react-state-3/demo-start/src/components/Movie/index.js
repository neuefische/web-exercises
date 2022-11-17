import "./Movie.css";

export default function Movie({ name, isLiked }) {
  return (
    <section className="movie">
      <h2 className="movie__title">{name}</h2>
      <p>Like: {isLiked ? "👍" : "👎"}</p>
      <button className="movie__toggle-button" type="button">
        Toggle Like
      </button>
      <button
        className="movie__delete-button"
        type="button"
        aria-label="delete movie"
      >
        X
      </button>
    </section>
  );
}
