import "./Form.css";

export default function Form({ onAddTag }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddTag(data.tag);

    event.target.reset();
    event.target.elements.tag.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new Tag</h2>
      <div className="form__fields">
        <div className="form__field">
          <label htmlFor="tag" className="form__label">
            Tag name
          </label>
          <input
            id="tag"
            type="text"
            name="tag"
            className="form__input"
            required
          />
        </div>
        <button type="submit" className="form__button">
          Add
        </button>
      </div>
    </form>
  );
}
