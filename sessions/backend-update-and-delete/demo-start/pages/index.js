import useSWRMutation from "swr/mutation";

import JokeForm from "../components/JokeForm";
import JokeList from "../components/JokeList";

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

export default function HomePage() {
  const { trigger } = useSWRMutation("/api/jokes", sendRequest);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    trigger(jokeData);
  }

  return (
    <>
      <JokeForm onSubmit={handleSubmit} value="" />
      <JokeList />
    </>
  );
}
