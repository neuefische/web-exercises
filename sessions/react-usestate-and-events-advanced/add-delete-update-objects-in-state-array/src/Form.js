export default function Form({ handleSubmit }) {
  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    handleSubmit(name.value);
    form.reset();
  }

  return (
    <form aria-labelledby="movie" onSubmit={onSubmit}>
      <h2 id="movie">Add a new movie</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" placeholder="Harry Potter" />
      <button>Submit</button>
    </form>
  );
}
