import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import JokeForm from "../JokeForm";

export default function Joke({ onSubmit, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/jokes/${id}` : null);

  // new!!
  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke} </h1>
      <button type="button" onClick={() => router.push("/")}>
        Back to all
      </button>
      <button
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
        disabled={isEditMode}
      >
        Edit Joke
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
      {isEditMode && (
        <JokeForm onSubmit={onSubmit} value={data.joke} label="Edit Joke" />
      )}
    </>
  );
}
