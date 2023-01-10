import useSWR from "swr";
import Button from "../Button";
import { useState } from "react";
import { useRouter } from "next/router";
import JokeForm from "../JokeForm";

export default function Joke({ onSubmit, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/jokes/${id}` : null);

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke} </h1>
      <div>
        <Button
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
          disabled={isEditMode}
        >
          <span role="img" alt="A pencil">
            ✏️
          </span>
        </Button>
        <Button onClick={onDelete} disabled={isEditMode}>
          <span role="img" alt="A cross indicating deletion">
            ❌
          </span>
        </Button>
      </div>
      {isEditMode && (
        <JokeForm
          onSubmit={onSubmit}
          value={data.joke}
          isEditMode={isEditMode}
        />
      )}
      <Button
        type="button"
        margin="2rem 0 0 0"
        onClick={() => router.push("/")}
      >
        Back to all
      </Button>
    </>
  );
}
