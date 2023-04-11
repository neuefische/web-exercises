export default function JokeForm({ value, onSubmit, isEditMode }) {
  return (
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="joke-input">
        {isEditMode ? "Edit the joke" : "Enter a new joke"}
      </label>
      <input type="text" id="joke-input" name="joke" defaultValue={value} />
      <button type="submit">Submit</button>
    </form>
  );
}
