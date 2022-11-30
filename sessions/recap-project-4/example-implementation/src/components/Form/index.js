import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formElements = form.elements;

    const data = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };
    onAddActivity(data);
    form.reset();
    formElements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <div className="form__input-container">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" />
      </div>
      <div className="form__input-container">
        <label htmlFor="isForGoodWeather">Good-weather Activity:</label>
        <input id="isForGoodWeather" type="checkbox" name="isForGoodWeather" />
      </div>
      <button>Submit</button>
    </form>
  );
}
