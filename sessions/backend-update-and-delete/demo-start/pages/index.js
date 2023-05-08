import useSWR from "swr";

import JokeForm from "../components/JokeForm";
import JokeList from "../components/JokeList";

export default function HomePage() {
  const { mutate } = useSWR("/api/jokes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    const response = await fetch("/api/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jokeData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <JokeForm onSubmit={handleSubmit} value="" />
      <JokeList />
    </>
  );
}
