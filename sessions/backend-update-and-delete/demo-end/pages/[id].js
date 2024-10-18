import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import JokeForm from "@/components/JokeForm";

export default function Joke() {
  const [showEditForm, setShowEditForm] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/jokes/${id}`);

  async function handleEditJoke(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    const response = await fetch(`/api/jokes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jokeData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteJoke() {
    const response = await fetch(`/api/jokes/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push("/");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) return;

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke} </h1>
      <div>
        <button
          onClick={() => {
            setShowEditForm(!showEditForm);
          }}
        >
          <span role="img" aria-label="A pencil">
            ✏️
          </span>
        </button>
        <button onClick={handleDeleteJoke} disabled={showEditForm}>
          <span role="img" aria-label="A cross indicating deletion">
            ❌
          </span>
        </button>
      </div>
      {showEditForm && (
        <JokeForm
          onSubmit={handleEditJoke}
          value={data.joke}
          isEditMode={true}
        />
      )}
      <Link href="/">Back to all</Link>
    </>
  );
}
