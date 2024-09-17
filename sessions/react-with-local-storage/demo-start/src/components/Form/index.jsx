import "./Form.css";

export default function Form({ onAddTodo }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    onAddTodo(formElements.todo.value);

    event.target.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="todo">
        Next Todo:
      </label>
      <input className="form__input" id="todo" name="todo" type="text" />
      <button className="form__button">Add</button>
    </form>
  );
}
