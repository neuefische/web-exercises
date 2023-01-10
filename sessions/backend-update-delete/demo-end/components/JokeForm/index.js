import { useState } from "react";

export default function JokeForm({ onSubmit, label, value }) {
  const [joke, setJoke] = useState(value);

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
        setJoke("");
      }}
    >
      <label htmlFor="joke-input">{label}</label>
      <input
        type="text"
        id="joke-input"
        name="joke"
        value={joke}
        onChange={(event) => setJoke(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
