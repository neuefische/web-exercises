import "./Movie.css";

export default function Movie({ id, name, like, onDeleteMovie, onToggleLike }) {
  return (
    <section className="movie">
      <h2 className="movie__title">{name}</h2>
      <p>Like: {like ? "👍" : "👎"}</p>
      <button
        className="movie__toggle-button"
        type="button"
        onClick={() => onToggleLike(id)}
      >
        Toggle Like
      </button>
      <button
        className="movie__delete-button"
        type="button"
        aria-label="delete movie"
        onClick={() => onDeleteMovie(id)}
      >
        X
      </button>
    </section>
  );
}
