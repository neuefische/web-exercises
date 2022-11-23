import "./Form.css";

export default function Form({ onAddTodo }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    onAddTodo(formElements.todo.value);

    event.target.reset();
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label className="Form__label" htmlFor="todo">
        Next Todo:
      </label>
      <input className="Form__input" id="todo" name="todo" type="text" />
      <button className="Form__button">Add</button>
    </form>
  );
}
