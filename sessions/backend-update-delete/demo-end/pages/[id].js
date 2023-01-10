import useSWRMutation from "swr/mutation";

import { useRouter } from "next/router";
import Joke from "../components/Joke";

export default function JokeDetailsPage() {
  const router = useRouter();
  const {
    query: { id },
    push,
  } = router;

  async function sendRequest(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  const { trigger, isMutating } = useSWRMutation(
    `/api/jokes/${id}`,
    sendRequest
  );

  async function handleEditJoke(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);
    await trigger(jokeData);
    push("/");
  }

  if (isMutating) {
    return <h1>Submitting your changes.</h1>;
  }

  return <Joke onSubmit={handleEditJoke} />;
}
