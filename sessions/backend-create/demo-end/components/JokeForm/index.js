import useSWRMutation from "swr/mutation";

async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    console.log(`Error: ${response.status}`);
  }
}

export default function JokeForm() {
  const { trigger } = useSWRMutation("/api/jokes", sendRequest);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    trigger(jokeData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="joke-input">Enter a new joke</label>
      <input type="text" id="joke-input" name="joke" />
      <button type="submit">Submit</button>
    </form>
  );
}
