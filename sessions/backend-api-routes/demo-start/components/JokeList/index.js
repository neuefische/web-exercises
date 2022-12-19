import useSWR from "swr";
import { useRouter } from "next/router";

export default function JokeList() {
  const router = useRouter();
  const { data } = useSWR("https://example-apis.vercel.app/api/bad-jokes");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((joke) => (
        <li key={joke.id}>
          <button type="button" onClick={() => router.push(`/${joke.id}`)}>
            {joke.joke}
          </button>
        </li>
      ))}
    </ul>
  );
}
