export default function JokeForm({ onSubmit, label, value }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="joke-input">{label}</label>
      <input
        type="text"
        id="joke-input"
        name="joke"
        value={value}
        onChange={(event) => event.target.value}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
