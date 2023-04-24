import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import JokeForm from "../JokeForm";
import Link from "next/link";

export default function Joke() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/jokes/${id}` : null);

  function handleEdit(event) {
    event.preventDefault();
  }

  async function handleDelete() {}

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
        <JokeForm onSubmit={handleEdit} value={data.joke} isEditMode={true} />
      )}
      <Link href="/">Back to all</Link>
    </>
  );
}
