import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useState } from "react";
import { useRouter } from "next/router";
import JokeForm from "../JokeForm";

async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    console.log(`Error: ${response.status}`);
  }
}

export default function Joke() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/jokes/${id}` : null);

  const { trigger, isMutating } = useSWRMutation(
    `/api/jokes/${id}`,
    sendRequest
  );

  function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokeData = Object.fromEntries(formData);

    trigger(jokeData);
  }

  async function handleDelete() {
    const response = await fetch(`/api/jokes/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push("/");
  }

  if (!data) return;

  if (isLoading || isMutating) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke} </h1>
      <div>
        <button
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          <span role="img" aria-label="A pencil">
            ✏️
          </span>
        </button>
        <button onClick={handleDelete} disabled={isEditMode}>
          <span role="img" aria-label="A cross indicating deletion">
            ❌
          </span>
        </button>
      </div>
      {isEditMode && (
        <JokeForm
          onSubmit={handleEdit}
          value={data.joke}
          isEditMode={isEditMode}
        />
      )}
      <button type="button" onClick={() => router.push("/")}>
        Back to all
      </button>
    </>
  );
}
