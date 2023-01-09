//import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useState } from "react";
import { useRouter } from "next/router";
import Joke from "../components/Joke";
import JokeForm from "../components/JokeForm";

export default function JokeDetailsPage() {
  const [isEditMode, setIsEditMode] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { trigger } = useSWRMutation("/api/jokes");

  async function handleEditJoke(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    console.log(jokeData);
    await trigger(jokeData);

    const response = await fetch(`/api/jokes/${id}`, {
      method: "PUT",
      body: JSON.stringify(jokeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      event.target.reset();

      //router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
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
