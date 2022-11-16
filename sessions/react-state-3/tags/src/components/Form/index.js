import "./Form.css";

export default function Form({ onAddTag }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    onAddTag(data.tag);

    event.target.reset();
    event.target.tag.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new Tag</h2>
      <label htmlFor="tag">Name of tag:</label>
      <input id="tag" type="text" name="tag" />
      <button type="submit" className="form__button">
        Submit new tag
      </button>
    </form>
  );
}
