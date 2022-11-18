import "./Form.css";

export default function Form({ onAddMovie }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddMovie(data);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Add a new movie</h2>
      <div className="form__fields">
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            name="name"
            placeholder="Dr. Strange"
          />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="isLiked">
            Like
          </label>
          <input
            className="form__checkbox"
            id="isLiked"
            type="checkbox"
            name="isLiked"
          />
        </div>
        <button type="submit" className="form__button">
          Add
        </button>
      </div>
    </form>
  );
}
