import "./Form.css";

export default function Form() {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    event.target.reset();
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Add a new movie</h2>
      <fieldset className="form__entries">
        <div className="form__entry">
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" placeholder="Dr. Strange" />
        </div>
        <div className="form__entry">
          <label htmlFor="like">Like:</label>
          <input id="like" type="checkbox" name="like" />
        </div>
      </fieldset>
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
}
