// import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Joke() {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);

  const { data } = useSWR(id ? `/api/jokes/${id}` : null);

  function handlePrevJoke() {
    router.push(`/jokes/${data.prevId}`);
  }

  function handleNextJoke() {
    router.push(`/jokes/${data.nextId}`);
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke} </h1>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}
