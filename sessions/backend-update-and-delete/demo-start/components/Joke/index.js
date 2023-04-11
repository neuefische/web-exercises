import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import JokeForm from "../JokeForm";

export default function Joke() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { push } = router;

  const { data, isLoading } = useSWR(id ? `/api/jokes/${id}` : null);

  function handleEdit(event) {
    event.preventDefault();
  }

  async function handleDelete() {}

  if (!data) return;

  if (isLoading) {
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
      <button type="button" onClick={() => push("/")}>
        Back to all
      </button>
    </>
  );
}
