import useSWR from "swr";
import { useRouter } from "next/router";

export default function Joke() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/jokes/${id}` : null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke} </h1>
      <button type="button" onClick={() => router.push("/")}>
        Back to all
      </button>
    </>
  );
}
