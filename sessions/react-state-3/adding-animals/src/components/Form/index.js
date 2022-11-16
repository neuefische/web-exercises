import "./Form.css";

export default function Form({ onAddAnimal }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddAnimal(data);

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new Animal</h2>
      <label htmlFor="name">Name of animal:</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="emoji">Emoji:</label>
      <input id="emoji" type="text" name="emoji" />
      <button type="submit" className="form__button">
        Submit animal
      </button>
    </form>
  );
}
