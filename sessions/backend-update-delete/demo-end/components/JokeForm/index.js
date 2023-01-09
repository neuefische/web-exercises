export default function JokeForm({ onSubmit, label }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="joke-input">{label}</label>
      <input type="text" id="joke-input" name="joke" />
      <button type="submit">Submit</button>
    </form>
  );
}
