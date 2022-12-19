import useSWR from "swr";
import { useRouter } from "next/router";

export default function Joke() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(
    id ? `https://example-apis.vercel.app/api/bad-jokes/${id}` : null
  );

  if (!data) {
    return <h1>Loading...</h1>;
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
