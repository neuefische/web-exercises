//import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useState } from "react";
import { useRouter } from "next/router";
import Joke from "../components/Joke";
import JokeForm from "../components/JokeForm";

export default function JokeDetailsPage() {
  const [isEditMode, setIsEditMode] = useState(false);

  const router = useRouter();
  const {
    query: { id },
    push,
  } = router;

  const { trigger, isMutating } = useSWRMutation(
    `/api/jokes/${id}`,
    async (url, { arg }) => {
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
  );

  async function handleEditJoke(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    console.log(jokeData);

    await trigger(jokeData);

    push("/");
  }

  if (isMutating) {
    return <h1>Submitting your changes.</h1>;
  }

  return (
    <>
      {isEditMode && <JokeForm onSubmit={handleEditJoke} label="Edit Joke" />}
      <button
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit Joke
      </button>
      <Joke />
    </>
  );
}
